const express=require('express');
const mongoose=require('mongoose');
const cors = require("cors");
const url='mongodb+srv://laxmiprasanna:prasanna12@cluster0.j7pkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url,{useNewUrlParser:true});
const path = require("path");




const app=express();
const con=mongoose.connection;


con.on('open',()=>{
    console.log('connected...');
})

app.use(express.json());
app.use(cors());



const userRouter=require('./routes/users');
app.use('/users',userRouter);



  
//app.post("/upload", upload.single("file"), (req, res) => {
  //try {
    //return res.status(200).json("File uploded successfully");
  //} catch (error) {
    //console.error(error);
  //}
//});



app.listen(process.env.PORT || 5000,()=>{
    console.log('server started');
})