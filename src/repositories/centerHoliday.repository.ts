import logger from "../config/logger.config";
import CenterHoliday from "../db/models/centerHoliday";
import { centerHolidayDTO } from "../dto/centerHoliday.dto";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";

export async function createCenterHoliday(centerHolidayData: centerHolidayDTO) {
    const centerHoliday = await CenterHoliday.create({
        center_id: centerHolidayData.center_id,
        start_date: centerHolidayData.start_date,
        end_date: centerHolidayData.end_date,
        reason: centerHolidayData.reason,
    })
    logger.info(`Center holiday created successfully ${centerHoliday.id}`);
    return centerHoliday;
}

export async function getCenterHolidaysById(centerHolidayId: number) {
    const centerHoliday = await CenterHoliday.findByPk(centerHolidayId);
    if (!centerHoliday) {
        logger.error(`Center holiday with id ${centerHolidayId} not found`);
        throw new NotFoundError(`Center holiday with id ${centerHolidayId} not found`);
    }
    logger.info(`Center holiday with id ${centerHolidayId} retrieved successfully`);
    return centerHoliday;
}
export async function getAllCenterHolidays() {
    const centerHolidays = await CenterHoliday.findAll();
    if (!centerHolidays || centerHolidays.length === 0) {
        logger.error(`No center holidays found`);
        throw new BadRequestError(`No center holidays found`);
    }
    logger.info(`All center holidays retrieved successfully`);
    return centerHolidays;
}