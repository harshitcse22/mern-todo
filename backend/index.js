import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Server is ready");
});

app.use("/api/todos", todoRoutes)
app.listen(5000, () =>{
    connectDB();
    console.log("Server started at http://localhost:5000");
});
