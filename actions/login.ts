"user client";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields!" };
    }

    return { success: "You logged in!" };
};