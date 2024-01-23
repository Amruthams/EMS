

const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

//using mongoose connect

mongoose.connect(connectionString,{

    useNewUrlParser: true,
  useUnifiedTopology: true

}).then((data)=>{
    console.log("mongodb atlas connected to ems server");
}).catch((err)=>{
    console.log('mongodb connection failed');
})


