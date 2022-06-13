// Import dependencies
import express from 'express';
import mongoose from 'mongoose';

// Connect to the database - MongoDB
mongoose.connect('mongodb://localhost/exclusible', () => {
    console.log('Connected to the database')
})

const app = express();

app.get('/', (req: any, res: any) => {
    res.send('Hello Exclusible')
})

app.listen(8000)