import { Users } from "../models/users.js";
import jwt from 'jsonwebtoken'
export const isAuthendication =async (req,res,next)=>{
    const { token } = req.cookies;
  
    if (!token) return res.status(404).json({
        success: false,
        message: "login first"
    });
    const decoded = jwt.verify(token, process.env.JWT_SCRIT);
    req.user = await Users.findById(decoded._id);
    next()

}