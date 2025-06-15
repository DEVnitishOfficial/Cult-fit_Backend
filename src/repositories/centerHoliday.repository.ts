import logger from "../config/logger.config";
import Center from "../db/models/center";
import CenterHoliday from "../db/models/CenterHoliday";
import { centerHolidayDTO } from "../dto/centerHoliday.dto";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";

export async function createCenterHoliday(centerHolidayData: centerHolidayDTO) {

    // at first check if the center exists with the given center_id in the center table or not
    const centerExists = await Center.findByPk(centerHolidayData.center_id);

    if (!centerExists) {
        logger.error(`Center with id ${centerHolidayData.center_id} not found`);
        throw new NotFoundError(`Center with id ${centerHolidayData.center_id} not found`);
    }

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

export async function deleteCenterHolidayById(centerHolidayId: number) {
    const centerHoliday = await CenterHoliday.findByPk(centerHolidayId);
    if (!centerHoliday) {
        logger.error(`Center holiday with id ${centerHolidayId} not found`);
        throw new NotFoundError(`Center holiday with id ${centerHolidayId} not found`);
    }
    await centerHoliday.destroy();
    logger.info(`Center holiday with id ${centerHolidayId} deleted successfully`);
    return { message: `Center holiday with id ${centerHolidayId} deleted successfully` };
}