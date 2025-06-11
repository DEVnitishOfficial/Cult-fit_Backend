import logger from "../config/logger.config";
import Center from "../db/models/center";
import { centerDTO } from "../dto/center.dto";
import { NotFoundError } from "../utils/errors/app.error";


export async function createCenter(centerData: centerDTO) {
    console.log('see the centerdata>>>>',centerData);
const center = await Center.create({
        name: centerData.name,
        address: centerData.address,
        city: centerData?.city,
        state: centerData?.state,
        pincode: centerData?.pincode,
        is_active: true 
    })
    logger.info(`Center created successfully ${center.id}`);
    return center;
}

export async function getCenterById(centerId: number) {
    const center = await Center.findByPk(centerId);
    if (!center) {
        logger.error(`Center with id ${centerId} not found`);
        throw new NotFoundError(`Center with id ${centerId} not found`);
    }
    logger.info(`Center with id ${centerId} retrieved successfully`);
    return center;
}

export async function getAllCenters() {
    const centers = await Center.findAll();
    if (!centers || centers.length === 0) {
        logger.error(`No centers found`);
        throw new NotFoundError(`No centers found`);
    }
    logger.info(`All centers retrieved successfully`);
    return centers;
}

