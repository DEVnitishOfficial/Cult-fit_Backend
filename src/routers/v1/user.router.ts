import express from 'express'
import { validateRequestBody } from '../../validators';
import { userSchema } from '../../validators/user.validator';
import { createUserHandler, updateUserByIdHandler } from '../../controller/user.controller';

const userRouter = express.Router();

userRouter.post('/', validateRequestBody(userSchema), createUserHandler);
userRouter.put('/profile/update/:id', updateUserByIdHandler)



export default userRouter;