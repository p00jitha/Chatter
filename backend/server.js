import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth_routes.js'
import messageRouter from './routes/message_router.js'
import userRoutes from './routes/user_routes.js'

import connectdatabase from './db/connect_db.js'

import { app,server} from "./socket/socket.js";


const PORT = process.env.PORT || 5000
dotenv.config()
app.use(express.json())

/*app.get('/',(req,res)=>{
    res.send('hello world')
})*/
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRouter)
app.use("/api/users",userRoutes)

server.listen(PORT, () => {
	connectdatabase()
	console.log(`Server Running on port ${PORT}`);
});

/*app.listen(PORT,()=>{
    connectdatabase()
    console.log(`server is running on port ${PORT}`)
})*/