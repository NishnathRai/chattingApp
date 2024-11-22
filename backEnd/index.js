const express = require("express");
const app = express();
const PORT = 3000;
const connect = require('./config/database.js');
const cookieParser = require('cookie-parser')
const cors = require("cors");
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
    origin: 'http://localhost:1234/',
    credentials: true, 
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());
////
const userRouter = require("./routs/user.js");
const feedRouter = require("./routs/feed.js");
let arr = [ userRouter , feedRouter ];
////

app.use( arr );