import logger from "../config/logger.config";
import User from "../db/models/user";
import { createUserDTO, updateUserDTO } from "../dto/user.dto";
import { BadRequestError, internalServerError } from "../utils/errors/app.error";


export async function createUser(userData: createUserDTO) {
    const user = await User.create({
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        role: userData?.role as "user" | "admin"
    })
    logger.info(`User created successfully ${user.id}`);
    return user;
}

export async function updateUserExceptEmail(userId: number, userData: updateUserDTO) {

    const user = await User.findByPk(userId);
    
    if (!user) {
        throw new BadRequestError(`User with ID ${userId} not found`);
    }

    if(userData.email){
        throw new BadRequestError(`You can't update your email`)
    }

    const dataToUpdate = {
        first_name: userData.first_name,
        last_name: userData.last_name,
        phone: userData.phone,
        password: userData.password,
        role: userData.role as "user" | "admin"
    }

    const updatedUser = await user.update(dataToUpdate);
    logger.info(`User updated successfully ${updatedUser.id}`);
    return updatedUser;
}
