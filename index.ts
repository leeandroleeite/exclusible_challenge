// Import dependencies
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';

const dbURI = 'mongodb+srv://admin:IgK5I9OL05jsujUW@exclusible.j25bdwk.mongodb.net/exclusible?retryWrites=true&w=majority'

// Connect to the database - MongoDB
mongoose.connect(dbURI)
.then(() => console.log('Connected to the database'))
.catch(e => console.log(e));

// Express app
const app = express();

// Config express to use json
app.use(express.json())

// Setup routes
app.use('/api', routes)

// Listen for requests
app.listen(8000)