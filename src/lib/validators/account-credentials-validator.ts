import {z} from "zod";

export const AuthCredentialsValidator = z.object({
    email: z.string()
        .email(),
    password: z.string()
        .min(8,
            {message:"The Password must be at least 8 characters long."}),
    username: z.string()
        .min(3,
            {message: "The username must be more than 3 characters long."})
})

export type typeAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;