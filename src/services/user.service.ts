import User from "../db/models/user";
import { Op } from "sequelize";
import { createUserDTO } from "../dto/user.dto";
import { createUser, updateUserExceptEmail } from "../repositories/user.repositories";
import { duplicateEntryError, internalServerError } from "../utils/errors/app.error";



export async function createUserService(userData: createUserDTO) {
    const userExists = await User.findOne({
        where: {
            email:userData.email
        }
    });

    if (userExists) {
        throw new duplicateEntryError("User with this email already exists");
    }

    const user = await createUser(userData)
    return user;
}

export async function updateUserById(userId: number, userData: Partial<createUserDTO>){
    const updatedDetail = updateUserExceptEmail(userId, userData);
    if(updatedDetail === null){
        throw new internalServerError('Unable to update user')
    }
    return updatedDetail
}

