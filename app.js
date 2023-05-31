import express from "express"
import usersRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import {config} from'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { Errormiddelware } from "./middlewares/Error.js";

export const app = express();
config({
   path: "./data/config.env"
})
app.use(cors({
    origin:[process.env.FRONTEND_URI],
    methods:["GET","PUT","DELETE","POST"],
    credentials:false,
}))
app.use(express.json());
app.use(cookieParser())
app.use("/api/v1/user", usersRouter)
app.use("/api/v1/task", taskRouter)
app.get("/", (req, res) => {
    res.send("server is working")
})
app.use(Errormiddelware)

