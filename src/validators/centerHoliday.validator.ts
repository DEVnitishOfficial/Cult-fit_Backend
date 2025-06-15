import { z } from "zod";


export const centerHolidaySchema = z.object({
    center_id: z.number().int().positive("Center ID must be a positive integer"),
    start_date: z
        .string()
        .transform((val) => new Date(val))
        .refine((date) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return date >= today;
        }, "Start date must be today or in the future"),
    end_date: z.string().transform((val) => new Date(val)),
    reason: z.string().min(3, "Reason must be at least 3 characters long").optional(),
})
// TODO : SOLVE THIS TYPESCRIPT ERROR
// .superRefine((data, ctx) => {
//   if (data.end_date < data.start_date) {
//     ctx.addIssue({
//       path: ["end_date"],
//       code: z.ZodIssueCode.custom,
//       message: "End date must be on or after the start date",
//     });
//   }
// });
