import express, { Request, Response } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router()
const JWT_KEY = 'secret'

// User registration
router.post('/register', async (req: Request, res: Response) => {
    const user: any = await User.findOne({ email: req.body.email })

    if (user) {
        return res.status(404).send({
            message: 'user already exists'
        })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    const result = await newUser.save()
    const { password, ...data } = result.toJSON()

    res.send(data)
})

// User login
router.post('/login', async (req: Request, res: Response) => {

    const user: any = await User.findOne({ email: req.body.email })

    if (!user) {
        return res.status(404).send({
            message: 'user not found'
        })
    }

    const passwordCheck = await bcrypt.compare(req.body.password, user.password)

    if (!passwordCheck) {
        return res.status(404).send({
            message: 'invalid credentials'
        })
    }

    const token = jwt.sign({ _id: user.id }, JWT_KEY)

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    res.send({
        message: 'login successful'
    })
})

// User auth
router.get('/user', async (req, res) => {
    try {
        const cookie = req.cookies['jwt']
        const claims: any = jwt.verify(cookie, JWT_KEY)

        if (!claims) {
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }

        const user: any = await User.findOne({ _id: claims._id })
        const { password, ...data } = await user.toJSON()

        res.send(data)

    } catch (e) {
        return res.status(401).send({
            message: 'unauthenticated'
        })
    }
})

// User logout
router.post('/logout', (req, res) => {

    res.cookie('jwt', '', {
        maxAge: 0,
    })

    res.send({
        message: 'logout successful'
    })
})

// Get a list of all registered users
router.get('/users', async (req, res) => {
    const users = await User.find({})

    if (!users) {
        return res.status(404).send({
            message: 'user list is empty'
        })
    }
    res.send(users)
})

// Remove all users
router.delete('/clean', async (req, res) => {
    const users = await User.remove()

    res.send(users)
})

// Remove all users
router.delete('/delete/:email', async (req, res) => {
    const email = req.params.email
    const user: any = await User.findOne({ email })

    if (user !== null) {
        await user.remove()
        res.send({ message: "user has been removed: " + email })

    } else {
        res.send({ message: "user not found" })
    }
})

export default router