import {z} from 'zod'

export const userSchema = z.object({
    first_name : z.string().min(3, "First name must be at least 3 character long"),
    last_name : z.string().min(3, "Last name must be at least 3 character long"),
    email : z.string().email("Invalid email format"),
    phone : z.string().regex(/^\+[1-9]\d{9,14}$/, "Phone number must be in E.164 format with minimum 10 digits"),
    password : z.string().min(6, "Password must be at least 6 characters long"),
    role : z.enum(["user", "admin"]).optional(),
})

/**
 * Regex explanation 
 * Explanation of New Regex:
→ ^ = Start of string
→ \+ = Mandatory plus sign
→ [1-9] = First digit after + cannot be 0
→ \d{9,14} = 9 to 14 digits after the first one (total digits: 10–15 as per E.164)
→ $ = End of string
 */