import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import dotenv from "dotenv";

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});