import { centerHolidayDTO } from "../dto/centerHoliday.dto";
import { createCenterHoliday, getAllCenterHolidays, getCenterHolidaysById } from "../repositories/centerHoliday.repository";


export async function createCenterHolidayService(centerHolidayData: centerHolidayDTO) {
    const centerHoliday = await createCenterHoliday(centerHolidayData);
    return centerHoliday;
}

export async function getCenterHolidayByIdService(centerHolidayId: number) {
    const centerHoliday = await getCenterHolidaysById(centerHolidayId);
    return centerHoliday;
}

export async function getAllCenterHolidaysService() {
    const centerHolidays = await getAllCenterHolidays();
    return centerHolidays;
}