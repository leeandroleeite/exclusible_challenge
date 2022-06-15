import express, { Request, Response } from 'express';
import {IUser, User } from '../models/user';
import bcrypt from 'bcryptjs';

const router = express.Router()

// Endpoint for user registration
router.post('/register', async (req: Request, res: Response) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    const result = await user.save()
    const {password, ...data} = result.toJSON()

    res.send(data)
})

// Endpoint for user login
router.post('/login', async (req: Request, res: Response) => {

    const user: any = await User.findOne({email: req.body.email})

    if(!user) {
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

    res.send(user)
})

export default router