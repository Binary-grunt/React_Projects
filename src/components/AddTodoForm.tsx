import {FC} from "react";
import { useForm } from "react-hook-form";
import { useThemeStore } from "../store/themeStore";

type AddTodoFormProps = {
    onAddTodo: (todoText: string) => void;
};

type IFormInput = {
    newTodo: string;
};

export const AddTodoForm:FC<AddTodoFormProps> = ({onAddTodo}) => {
    const { themeProps, checkIcon } = useThemeStore();
    const { register, handleSubmit, reset } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        onAddTodo(data.newTodo);
        reset();
    };

    return (
        <>
            <div className={`${themeProps.secondaryBg} h-14 flex flex-row items-center rounded-lg`}>
                <form onSubmit={handleSubmit(onSubmit)} className='pl-5 flex flex-row items-center'>
                    <img src={checkIcon} className='w-6 h-6' />
                    <input
                        {...register('newTodo', { required: true })}
                        placeholder="Add a new task"
                        className={"ml-3 "}
                    />
                    <button type="submit" className="ml-2"></button>
                </form>
            </div>
        </>
    );
};
