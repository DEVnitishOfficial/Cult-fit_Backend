import User from "../db/models/user";
import { Op } from "sequelize";
import { createUserDTO } from "../dto/user.dto";
import { createUser, getAllsoftDeleteduser, getAllUser, getUserById, hardDeleteUserById, softDeleteUserById, updateUserExceptEmail } from "../repositories/user.repositories";
import { duplicateEntryError } from "../utils/errors/app.error";



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
    const updatedDetail = await updateUserExceptEmail(userId, userData);
    return updatedDetail
}

export async function getUserByIdService(userId:number){
   const userDetail = await getUserById(userId);
   return userDetail;
};
export async function softDeleteUserByIdService(userId:number){
   const userDetail = await softDeleteUserById(userId);
   return userDetail;
};

export async function hardDeleteUserByIdService(userId:number){
   const userDetail = await hardDeleteUserById(userId);
   return userDetail;
};

export async function getAllUserService(){
   const userDetail = await getAllUser();
   return userDetail;
};

export async function getAllsoftDeleteduserService(){
  const deletedUser =  getAllsoftDeleteduser();
  return deletedUser;
}




