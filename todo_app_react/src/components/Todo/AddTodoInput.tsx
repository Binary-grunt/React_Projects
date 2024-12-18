// Importing React, CSS for styling, react-hook-form and Zod for form validation, and necessary types.
import {FC} from "react";
import './../../css/AddTodoInput.css';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useThemeStore } from "../../store/themeStore.tsx";
import {ITodoInput, TodoSchema} from "../../models/todoModel.ts";

// TypeScript type definition for the component's props.
type AddTodoFormProps = {
    onAddTodo: (todoText: string) => void; // Function to add a new to-do.
};

// Functional component for adding a new to-do item.
export const AddTodoInput:FC<AddTodoFormProps> = ({onAddTodo}) => {
    // Accessing theme properties and setting up form with react-hook-form and Zod for validation.
    const { themeProps, checkIcon } = useThemeStore();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ITodoInput>({
        resolver: zodResolver(TodoSchema)
    });

    // Handler function to submit the form data.
    const onSubmit = (data: ITodoInput) => {
        onAddTodo(data.newTodo);
        reset();
    };

    return (
        <>
            {/* Container for the input form */}
            <div className={`${themeProps.secondaryBg} h-16 flex flex-row items-center rounded-md shadow-md min-width sm:h-16`}>
                {/* Form element with submit handler */}
                <form onSubmit={handleSubmit(onSubmit)} className='pl-5 flex flex-row items-center gap-1'>
                    {/* Displaying the check icon */}
                    <img src={checkIcon} className='w-6 h-6'  alt='Check icon'/>
                    {/* Input field for new to-do */}
                    <input
                        {...register('newTodo', { required: true })}
                        placeholder="Add a new task"
                        className={`ml-3 ${themeProps.secondaryBg} ${themeProps.primaryText}
                    border-none w-36 h-12 sm:w-96 sm:placeholder:text-lg focus:outline-none `}
                    />
                    {/* Error message display if input validation fails */}
                    {errors.newTodo && <p className={"error-message italic text-xs font-josefin pr-2 text-bright-blue"}>{errors.newTodo.message}</p>}
                </form>
            </div>
        </>
    );
};
