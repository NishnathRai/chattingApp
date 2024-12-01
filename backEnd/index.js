const express = require("express");
const app = express();
const PORT = 3000;
const connect = require('./config/database.js');
const cookieParser = require('cookie-parser')
const cors = require("cors");
require("dotenv").config();
////

connect()
.then(()=>{
    console.log("db connected")
    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`);
    });
})
.catch((err)=>console.log(err));

/////
app.use(cors({
    origin: process.env.feURL, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true 
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());
////
const userRouter = require("./routs/user.js");
const feedRouter = require("./routs/feed.js");
const chatRouter = require("./routs/chat.js");
let arr = [ userRouter , feedRouter , chatRouter ];
////

app.use( arr );