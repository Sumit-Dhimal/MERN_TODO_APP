import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // for environment variables
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
app.use(express.json()); // for json data
app.use(express.urlencoded({extended: true}));
app.use(cors()); // for cross connection
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Server is running");
})

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})