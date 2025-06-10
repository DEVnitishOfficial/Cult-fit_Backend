import express from 'express'
import { validateRequestBody } from '../../validators';
import { userSchema } from '../../validators/user.validator';
import { createUserHandler, getAllSoftDeleteUserHandler, getAllUserHandler, getUserByIdHandler, hardDeleteUserByIdHandler, softDeleteUserByIdHandler, updateUserByIdHandler } from '../../controller/user.controller';

const userRouter = express.Router();

userRouter.post('/', validateRequestBody(userSchema), createUserHandler);
userRouter.get('/getalluser', getAllUserHandler);
userRouter.put('/profile/update/:id', updateUserByIdHandler);
userRouter.get('/getuser/:id',getUserByIdHandler);
userRouter.delete('/deleteuser/soft/:id',softDeleteUserByIdHandler);
userRouter.delete('/deleteuser/hard/:id',hardDeleteUserByIdHandler);
userRouter.get('/softdeleteduser',getAllSoftDeleteUserHandler);



export default userRouter;