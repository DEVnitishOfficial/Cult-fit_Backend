import Center from "../db/models/center";
import { centerDTO } from "../dto/center.dto";
import { createCenter, getAllCenters, getCenterById } from "../repositories/center.repositories";
import { duplicateEntryError, NotFoundError } from "../utils/errors/app.error";

export async function createCenterService(centerData: centerDTO) {
    const centerExist = await Center.findOne({
        where: {
            name:centerData.name
        }
    });

    if (centerExist) {
        throw new duplicateEntryError("Center with this name already exists");
    }

    const center = await createCenter(centerData)
    return center;
}

export async function getCenterByIdService(centerId: number) {
    const center = await getCenterById(centerId);
    return center;
}

export async function getAllCentersService() {
    const centers = await getAllCenters();
    return centers;
}

