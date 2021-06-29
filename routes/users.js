const express=require('express');
const router=express.Router();
//const multer = require("multer");
const User=require('../models/user');


//router.use(express.static(__dirname+ "./public/"));
//const storage = multer.diskStorage({
 // destination:"public/images", 
   // filename: (req, file, cb) => {
     // cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    //},
  //});

  //const upload = multer({ storage: storage }).single("file");

router.get('/',async(req,res)=>{
    try{
        const users=await User.find();
        res.json(users);
    }catch(err){
    res.send(err);
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.json(user);
    }catch(err){
    res.send(err);
    }
});



router.post('/',async(req,res)=>{
    const user= new User({
        fullname:req.body. fullname,
        mobile:req.body.mobile,
        jobtype:req.body.jobtype,
        preflocation:req.body.preflocation,
      // profilepic:req.file.filename,
        email:req.body.email,
        dob:req.body.dob
    })
    try{
        const U1=await  user.save();
        res.json(U1);

    }catch(err){
        res.send(err);
    }
})

router.route('/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log(' updated successfully !')
      }
    })
  })

  router.route('/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: "deleted successfully"
        })
      }
    })
  })
  

module.exports=router;