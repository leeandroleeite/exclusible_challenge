import express from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';

const router = express.Router()

router.get('/', (req: any, res: any) => {
    res.send('Hello Exclusible')
})

router.post('/register', async (req: any, res: any) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    res.send(await user.save())
})

export default router