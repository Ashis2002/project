import jwt from "jsonwebtoken";
export const sendCookie = (user,res,message,statusCode=200)=>{
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
    res.status(statusCode).cookie("Token",token,{
        httpOnly:true,
        maxAge:30*60*1000,
        sameSite:"none",
        secure: true,
    }).json({
        success:true,
        message,
        user 
    })
}