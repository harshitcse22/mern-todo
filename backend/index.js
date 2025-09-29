import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', 'https://mern-todo-wy2t.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Server is ready");
});

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    connectDB();
    console.log(`Server started on port ${PORT}`);
});
