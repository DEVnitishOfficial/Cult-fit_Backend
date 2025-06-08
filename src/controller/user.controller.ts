import { Request, Response, NextFunction} from "express";
import { createUserService, updateUserById } from "../services/user.service";
import { StatusCodes } from "http-status-codes";



export async function createUserHandler(req:Request, res:Response, next:NextFunction){

    const userResponse = await createUserService(req.body);

   res.status(StatusCodes.CREATED).json({  
            success: true,
            message: "User created successfully",
            data: userResponse,
        });
}

export async function updateUserByIdHandler(req:Request,res:Response,next:NextFunction){
    const updatedUserResponse = updateUserById(Number(req.params.id),req.body)

    res.status(StatusCodes.OK).json({
        success:true,
        message:"User details updated successfully",
        data: updatedUserResponse
    })
}