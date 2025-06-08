export type createUserDTO = {
    first_name:string,
    last_name:string,
    email:string,
    phone:string,
    password:string,
    role?:string
}
export type updateUserDTO = {
    first_name?:string,
    last_name?:string,
    email?:string,
    phone?:string,
    password?:string,
    role?:string
}