
//import dotenv pakage
require('dotenv').config()



//last step1
//import connection file node mongdb connection

require('./DB-Connection/connection')




// import express
const express=require('express')




//last step1
//import router
const route=require('./Routes/router')




//import cors
const cors=require('cors')
const router = require('./Routes/router')

//create server using express
const emsServer=express()

//use cors in server
emsServer.use(cors())

//parse json data inserver
emsServer.use(express.json())






// last step3
// use router 

emsServer.use(router)

//image to front end
emsServer.use('/uploads',express.static("./uploads"))






//customize port for server
const PORT=4000 || process.env.PORT 



//run server app

emsServer.listen(PORT,()=>{
    console.log(`ems server started at port:${PORT}`);
})

//to check postman and nodemon
// emsServer.post('/',(req,res)=>{
//     res.send(`<h1>ems server started at 4000 </h1>`) 
// })
