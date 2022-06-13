// Import dependencies
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';

// Connect to the database - MongoDB
mongoose.connect('mongodb://localhost/exclusible', () => {
    console.log('Connected to the database')
})

const app = express();
app.use('/api', routes)

app.listen(8000)