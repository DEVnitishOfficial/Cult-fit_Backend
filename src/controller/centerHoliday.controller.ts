import { StatusCodes } from "http-status-codes";
import { createCenterHolidayService, getAllCenterHolidaysService, getCenterHolidayByIdService } from "../services/centerHoliday.service";
import { Request, Response, NextFunction } from "express";

export async function createCenterHolidayHandler(req:Request, res:Response, next:NextFunction) {

        const centerHolidayResponse = await createCenterHolidayService(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Center holiday created successfully",
            data: centerHolidayResponse,
        });
}

export async function getCenterHolidayByIdHandler(req:Request, res:Response, next:NextFunction) {
    
    const centerHolidayResponse = await getCenterHolidayByIdService(Number(req.params.id));

    res.status(StatusCodes.OK).json({
        success: true,
        message: "Center holiday retrieved successfully",
        data: centerHolidayResponse,
    });
}

export async function getAllCenterHolidaysHandler(req:Request, res:Response, next:NextFunction) {
    
    const centerHolidayResponse = await getAllCenterHolidaysService();

    res.status(StatusCodes.OK).json({
        success: true,
        message: "All center holidays retrieved successfully",
        data: centerHolidayResponse,
    });
}