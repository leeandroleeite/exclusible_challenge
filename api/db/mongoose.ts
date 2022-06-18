import mongoose from "mongoose";

export const connectDB = () => {
    const dbURI = 'mongodb+srv://admin:IgK5I9OL05jsujUW@exclusible.j25bdwk.mongodb.net/exclusible?retryWrites=true&w=majority'

    mongoose.connect(dbURI)
    .then(() => console.log('Connected to the database'))
    .catch(e => console.log(e));
}