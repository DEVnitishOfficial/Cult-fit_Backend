import { get } from "http";
import { centerHolidayDTO } from "../dto/centerHoliday.dto";
import { createCenterHoliday, deleteCenterHolidayById, getAllCenterHolidays, getCenterHolidaysById } from "../repositories/centerHoliday.repository";


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

export async function deleteCenterHolidayByIdService(centerHolidayId: number) {
    const centerHoliday = await deleteCenterHolidayById(centerHolidayId);
    return centerHoliday;
}
