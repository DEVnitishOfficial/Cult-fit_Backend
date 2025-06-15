import express from 'express';
import { validateRequestBody } from '../../validators';
import { centerHolidaySchema } from '../../validators/centerHoliday.validator';
import { createCenterHolidayHandler, deleteCenterHolidayByIdHandler, getAllCenterHolidaysHandler, getCenterHolidayByIdHandler } from '../../controller/centerHoliday.controller';
import { deleteCenterHolidayById } from '../../repositories/centerHoliday.repository';


const centerHolidayRouter = express.Router();



centerHolidayRouter.post('/', validateRequestBody(centerHolidaySchema),createCenterHolidayHandler);
centerHolidayRouter.get('/getholiday/:id', getCenterHolidayByIdHandler);
centerHolidayRouter.get('/getallcenterholiday', getAllCenterHolidaysHandler);
centerHolidayRouter.delete('/delete_center/:id', deleteCenterHolidayByIdHandler); 


export default centerHolidayRouter;