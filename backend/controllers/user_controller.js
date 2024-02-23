import User from "../models/user_model.js";

 const userSidebar = async(req,res)=>{
    try{
          const loggedUser = req.user._id;
          const allUsers = await User.find({_id:{$ne:loggedUser}}).select("-password")
          res.status(200).json(allUsers)
    }     
    catch(err)
    {
        console.log(err)
        return res.status(500).json({error:"Internal server error"})
    }
}
export default userSidebar