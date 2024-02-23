import jwt from 'jsonwebtoken'
import User from '../models/user_model.js';
  const protectRoute = async(req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token)
        {
            return res.status(401).json({error:"Unauthorized User"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded)
        {
            return res.status(401).json({error:"invalid token"})
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user)
        {
            return res.status(401).json({error:"User not found"})
        }
        req.user=user;
        next();
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({error:"Internal server error"})
    }
}

export default protectRoute;