<<<<<<< HEAD
import jwt from "jsonwebtoken";
import { User } from "../models/student.js";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const verifyJWT=asyncHandler(async(req,_,next)=>
{
    const token=req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ","")

    if(!token){
        throw new APIError(401,"Unauthorized")
    }
    try {
       const decodedToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

       const user= await User.findById(decodedToken?._id).select("-password -refreshToken")

       if(!user){
        throw APIError(401,"Unauthorized")
       }
        req.user=user

        next()

    } catch (error) {
        throw new APIError(401,error?.message||"Invalid Access Token")
        
    }
=======
import jwt from "jsonwebtoken";
import { User } from "../models/student.js";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const verifyJWT=asyncHandler(async(req,_,next)=>
{
    const token=req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ","")

    if(!token){
        throw new APIError(401,"Unauthorized")
    }
    try {
       const decodedToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

       const user= await User.findById(decodedToken?._id).select("-password -refreshToken")

       if(!user){
        throw APIError(401,"Unauthorized")
       }
        req.user=user

        next()

    } catch (error) {
        throw new APIError(401,error?.message||"Invalid Access Token")
        
    }
>>>>>>> d7aa76d64fe0b6d3299a44becd680ebf0512e45f
})