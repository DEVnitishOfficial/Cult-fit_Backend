import { Op } from "sequelize";
import logger from "../config/logger.config";
import User from "../db/models/user";
import { createUserDTO, updateUserDTO } from "../dto/user.dto";
import { BadRequestError, internalServerError, NotFoundError } from "../utils/errors/app.error";


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

export async function getUserById(id:number){

    const user = await User.findByPk(id);
    
    if(!user){
        logger.error(`User not found with id ${id}`)
        throw new BadRequestError(`User not found with given id ${id}`)
    }
    return user;
}
export async function getAllUser(){

    const user = await User.findAll();
    
    if(!user){
        logger.error('There is no user found in db')
        throw new BadRequestError(`There is no user found in db`)
    }
    return user;
}

export async function softDeleteUserById(id:number){
    const user = await User.findByPk(id);
    
    if(!user){
        logger.info("User not found")
        throw new NotFoundError(`User not found with the given id: ${id}`)
    }
    await user.destroy();

    logger.info(`User soft deleted successfully with id : ${id}`)
    return user
}
export async function hardDeleteUserById(id:number){
    const user = await User.findByPk(id,{paranoid:false});
    
    if(!user){
        logger.info("User not found")
        throw new NotFoundError(`User not found with the given id: ${id}`)
    }
    await user.destroy({force:true});

    logger.info(`User permanently deleted successfully with id : ${id}`)
    return user
}

export async function getAllsoftDeleteduser(){
   const user = User.findAll({
        where:{
            deletedAt:{
                [Op.ne] : null
            }
        },
        paranoid:false
    });
   logger.info(`Fetching all deleted users completed`);
    if(!user){
        logger.error(`Deleted users not found`);
        throw new NotFoundError(`Deleted users not found`)
    }
    return user;
}


