// Importing Zod library for schema validation.
import { z } from 'zod';

// Defining a schema for validating new to-do input.
export const TodoSchema = z.object({
    newTodo: z.string().min(1, "This input can't be empty") // Requires a non-empty string.
})

// TypeScript type inference from the Zod schema.
export type ITodoInput = z.infer<typeof TodoSchema>;
