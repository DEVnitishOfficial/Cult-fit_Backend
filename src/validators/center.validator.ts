import {z} from 'zod'

export const centerSchema = z.object({
    name : z.string().min(3, "Center name must be at least 3 character long"),
    address : z.string().min(10, "Address must be at least 10 character long"),
    pincode : z.string().min(6).max(6).regex(/^[0-9]+$/),
    city : z.string().min(3, "City must be at least 3 characters long"),
    state : z.string().min(3, "State must be at least 3 characters long"),
})
