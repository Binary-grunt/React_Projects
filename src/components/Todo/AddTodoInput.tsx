import {FC} from "react";
import './../../css/AddTodoInput.css'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useThemeStore } from "../../store/themeStore.tsx";
import {ITodoInput, TodoSchema} from "../../models/todoModel.ts";

type AddTodoFormProps = {
    onAddTodo: (todoText: string) => void;
};

export const AddTodoInput:FC<AddTodoFormProps> = ({onAddTodo}) => {
    const { themeProps, checkIcon } = useThemeStore();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ITodoInput>({
        resolver: zodResolver(TodoSchema)
    });

    const onSubmit = (data: ITodoInput) => {
        onAddTodo(data.newTodo);
        reset();
    };

    return (
        <>
            <div  className={`${themeProps.secondaryBg} 
            h-16 flex flex-row items-center rounded-md shadow-md min-width sm:h-16`}>
                <form onSubmit={handleSubmit(onSubmit)} className='pl-5 flex flex-row items-center gap-1'>
                    <img src={checkIcon} className='w-6 h-6'  alt='Check icon'/>
                    <input
                        {...register('newTodo', { required: true })}
                        placeholder="Add a new task"
                        className={`ml-3 ${themeProps.secondaryBg} ${themeProps.primaryText}
                        border-none w-96 h-12 sm:placeholder:text-lg focus:outline-none `}
                    />
                    {errors.newTodo && <p className={"error-message italic text-xs font-josefin text-bright-blue"}>{errors.newTodo.message}</p>}
                    <button type="submit" className="ml-2"></button>
                </form>
            </div>

        </>
    );
};
