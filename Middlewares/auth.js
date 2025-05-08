import { userModel } from "../Models/user.js";
import jwt from "jsonwebtoken";
export const isAuthoriser =async (req,res,next)=>{
    const {Token} = req.cookies;
    if(Token){
        const {Token} = req.cookies;
        const {_id} =  jwt.verify(Token,process.env.JWT_SECRET)
        req.user = await userModel.findById({_id})
        return next();
    }else{
        res.status(400).json({
            success:false,
            message:"Please Login First"
        })
    }
}