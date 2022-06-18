// Import dependencies
import express from 'express';
import routes from './routes/routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { OpenAndStreamWebSocketSubscription } from './web-socket/web-socket';
import { connectDB } from './db/mongoose';

// Express app
const app = express();

// Connect to the database - MongoDB
connectDB()

// WebSocket API
OpenAndStreamWebSocketSubscription();

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