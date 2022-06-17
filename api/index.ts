// Import dependencies
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const dbURI = 'mongodb+srv://admin:IgK5I9OL05jsujUW@exclusible.j25bdwk.mongodb.net/exclusible?retryWrites=true&w=majority'

// Connect to the database - MongoDB
mongoose.connect(dbURI)
.then(() => console.log('Connected to the database'))
.catch(e => console.log(e));

// Express app
const app = express();

// Parses the incoming cookies from request to JSON value.
app.use(cookieParser())

// Enable cors to avoid browser errors
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}))

// Config express to use json
app.use(express.json())

// Setup routes
app.use('/api', routes)

// Listen for requests
app.listen(8000)