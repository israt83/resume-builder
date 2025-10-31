import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import dotenv from "dotenv";
import userRouter from './routes/userRoutes.js';
import resumeRouter from './routes/resumeRoutes.js';
import aiRouter from './routes/aiRoutes.js';

dotenv.config();
// Database Connection
await connectDB();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.use('/api/users', userRouter);
app.use('/api/resumes',resumeRouter)
app.use('/api/ai', aiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});