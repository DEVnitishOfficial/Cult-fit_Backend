import express from 'express';
import { validateRequestBody } from '../../validators';
import { centerHolidaySchema } from '../../validators/centerHoliday.validator';
import { createCenterHolidayHandler } from '../../controller/centerHoliday.controller';


const centerHolidayRouter = express.Router();



centerHolidayRouter.post('/', validateRequestBody(centerHolidaySchema),createCenterHolidayHandler)


export default centerHolidayRouter;