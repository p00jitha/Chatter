import bcrypt from 'bcryptjs'
import User from '../models/user_model.js'
import TokenAndCookie from '../utils/generateToken.js'
export const signup = async(req,res)=>{
   try{
      const {email,username,password,confirmPassword, gender} = req.body
      if(password!==confirmPassword)
      {
        return res.status(400).json({ error: "Passwords don't match" })
      }
      const user = await User.findOne({username});
      if (user) {
        return res.status(400).json({ error: "Username already exists" });
       }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)
    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`
    const newUser = new User({
      email,
      username,
      password:hashedPassword,
      gender,
      profilePic: gender ==="male"? boyPic: girlPic})
    if(newUser)
    {
      TokenAndCookie(newUser._id,res)
      await newUser.save()
      res.status(200).json({_id:newUser._id,email:newUser.email,profilePic:newUser.profilePic})
    }
    else
    {
      return res.status(400).json({ error: "Invalid user" })
    }
   }
   catch(err)
   {
    console.log(err)
    return res.status(500).json({ error: "Internal server error" })
   }
}

export const login = async(req,res)=>{
  try
  {
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user)
    {
      return res.status(400).json({ error: "Invalid username" })
    }
    const isPasswordcorrect = await bcrypt.compare(password,user.password)
    if(!isPasswordcorrect)
    {
      return res.status(400).json({ error: "Invalid password" })
    }
    TokenAndCookie(user._id,res)
    res.status(200).json({_id:user._id,fullname:user.fullname,profilePic:user.profilePic})
  }
  catch(err)
  {
    console.log(err)
    return res.status(500).json({ error: "Internal server error" })
  }
}

export const logout = (req,res)=>{
    try{
      res.cookie("jwt"," ",{maxAge:0});
      return res.status(200).json({ message: "Logged out successfully" })
    }
    catch(err)
    {
      console.log(err)
    return res.status(500).json({ error: "Internal server error" })
    }
}

export const forgotpw = async(req,res)=>{
  try{
    const {username,password,confirmPassword} = req.body;
    const user = await User.findOne({username});
    if(!user)
    {
      return res.status(400).json({ error: "Invalid username" })
    }
    if(password!==confirmPassword)
      {
        return res.status(400).json({ error: "Passwords don't match" })
      }
    const newpassword = await bcrypt.hash(password, 10);
    User.updateOne({ username : username }, { $set: { password:newpassword } })
   .then(() => {
    res.status(200).json({_id:user._id,fullname:user.fullname,profilePic:user.profilePic})
   })
   .catch(err => {
    console.log(err)
    return res.status(400).json({ error: "Unable change password" })
   });
  }
  catch(err)
  {
    console.log(err)
    return res.status(500).json({ error: "Internal server error" })
  }
}