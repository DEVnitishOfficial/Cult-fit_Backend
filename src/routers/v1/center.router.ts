
import express from "express";
import { centerSchema } from "../../validators/center.validator";
import { validateRequestBody } from "../../validators";
import { createCenterHandler, deleteCenterByIdHandler, getAllCentersHandler, getCenterByIdHandler } from "../../controller/center.controller";

const centerRouter = express.Router();

centerRouter.post('/', validateRequestBody(centerSchema), createCenterHandler);
centerRouter.get('/getallcenter', getAllCentersHandler); 
centerRouter.delete('/delete_center/:id', deleteCenterByIdHandler);
centerRouter.get('/:id', getCenterByIdHandler); 


export default centerRouter;