const User = require("../models/userSchema")
const bcrypt =require("bcryptjs")
const genToken=require("../utils/genToken")

//sign up new user
const signUp=async(req,res)=>{
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)

    //check if use exist
    const foundEmail=await User.findOne({email:req.body.email})
    if(foundEmail)return res.send("user exists")

    const newuser= new User({
        email:req.body.email,
        password:hashedPass,
    })
    await newuser.save()
    res.status(201).json({newuser})
}
const signIn=async(req,res)=>{
    //validate user

    //user email verification
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(404).send("user not found")

    //password verification
    const verifyPass = await bcrypt.compare(req.body.password,user.password);
    if (!verifyPass) return res.status(404).send("invalid account credentials");

    res.status(200).json({_id:user._id,email:user.email,toekn:genToken(user._id)})


}
module.exports ={signUp,signIn}