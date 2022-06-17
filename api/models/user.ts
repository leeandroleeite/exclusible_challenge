import { model, Schema } from "mongoose";

interface IUser {
    name: string;
    email: string;
    password: string;
}

interface IUserDoc extends IUser, Document {}

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    }
})

const User = model<IUserDoc>('User', userSchema)

export {IUser, User}
