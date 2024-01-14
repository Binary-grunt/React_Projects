import { z } from 'zod';

export const TodoSchema = z.object({
    newTodo: z.string().min(1, "This input can't be empty")
})

export type ITodoInput = z.infer<typeof TodoSchema>;
