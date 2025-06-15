import { NextFunction, Request, Response } from "express";
import { createCenterService, deleteCenterByIdService, getAllCentersService, getCenterByIdService } from "../services/center.service";
import { StatusCodes } from "http-status-codes";


export async function createCenterHandler(req:Request, res:Response, next:NextFunction){

    const centerResponse = await createCenterService(req.body);


   res.status(StatusCodes.CREATED).json({  
            success: true,
            message: "Center created successfully",
            data: centerResponse,
        });
}

export async function getCenterByIdHandler(req:Request, res:Response, next:NextFunction){
    const centerResponse = await getCenterByIdService(Number(req.params.id));

    res.status(StatusCodes.OK).json({
        success: true,
        message: "Center retrieved successfully",
        data: centerResponse,
    });
}

export async function getAllCentersHandler(req:Request, res:Response, next:NextFunction){
    const centerResponse = await getAllCentersService();

    res.status(StatusCodes.OK).json({
        success: true,
        message: "All centers retrieved successfully",
        data: centerResponse,
    });
}

export async function deleteCenterByIdHandler(req:Request, res:Response, next:NextFunction){
    const centerResponse = await deleteCenterByIdService(Number(req.params.id));

    res.status(StatusCodes.OK).json({
        success: true,
        message: "Center deleted successfully",
        data: centerResponse,
    });
}