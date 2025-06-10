import { Request, Response, NextFunction} from "express";
import { createUserService, getAllsoftDeleteduserService, getAllUserService, getUserByIdService, hardDeleteUserByIdService, softDeleteUserByIdService, updateUserById } from "../services/user.service";
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
    const updatedUserResponse = await updateUserById(Number(req.params.id),req.body)

    res.status(StatusCodes.OK).json({
        success:true,
        message:"User details updated successfully",
        data: updatedUserResponse
    })
}

export async function hardDeleteUserByIdHandler(req:Request,res:Response,next:NextFunction){

  const userResponse = await hardDeleteUserByIdService(Number(req.params.id))

  res.status(StatusCodes.OK).json({
    success:true,
    message:"User permanently deleted successfully",
    data:userResponse
  })
}

export async function softDeleteUserByIdHandler(req:Request,res:Response,next:NextFunction){

  const userResponse = await softDeleteUserByIdService(Number(req.params.id))

  res.status(StatusCodes.OK).json({
    success:true,
    message:"User soft deleted successfully",
    data:userResponse
  })
}

export async function getUserByIdHandler(req:Request,res:Response,next:NextFunction){

  const userResponse = await getUserByIdService(Number(req.params.id))

  res.status(StatusCodes.OK).json({
    success:true,
    message:"User found successfully",
    data:userResponse
  })
}


export async function getAllUserHandler(req:Request,res:Response,next:NextFunction){

  const userResponse = await getAllUserService()

  res.status(StatusCodes.OK).json({
    success:true,
    message:"All user fetched successfully",
    data:userResponse
  })
}

export async function getAllSoftDeleteUserHandler(req:Request,res:Response,next:NextFunction){
    const allDelUser = await getAllsoftDeleteduserService();
    
    res.status(StatusCodes.OK).json({
        success:true,
        message:"All soft deleted user fetched successfully",
        data:allDelUser
    })
}