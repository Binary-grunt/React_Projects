// Importing necessary assets, types, and React functionality.
import {IconCheck, IconCross} from "../../assets/images";
import {ITodo} from "../../pages/Todopages.tsx";
import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";

// TypeScript type definition for the component's props.
type TasksProps = {
    todo: ITodo;                       // Individual to-do item.
    onDeleteTodo: (id: number) => void; // Function to delete a to-do item.
    onCheckTodo: (id: number) => void;  // Function to check or uncheck a to-do item.
}

// Functional component for rendering a to-do task.
export const Tasks:FC<TasksProps> = ({todo, onCheckTodo, onDeleteTodo }) => {
    // Accessing theme properties for styling.
    const {themeProps, checkIcon} = useThemeStore();

    return (
        <>
            {/* Container for the to-do item */}
            <div className={`${todo.filter} h-14 flex flex-row items-center justify-between pl-5
                sm:h-20`}>
                {/* Container for the check button and to-do text */}
                <div className={'flex flex-row items-center'}>
                    {/* Button for toggling the check state of the to-do */}
                    <button
                        onClick={() => onCheckTodo(todo.id)}
                        className={`${todo.checked ?
                            'bg-gradient-to-br from-check-bg-start to-check-bg-end' : ''}
                            h-6 w-6 rounded-2xl flex justify-center items-center`}>
                        {todo.checked ? <img src={IconCheck} alt="Checked" />
                            : <img src={checkIcon} alt="Unchecked" className='w-6 h-6' />}
                    </button>
                    {/* To-do text with conditional styling for checked state */}
                    <li className={`${todo.checked ?
                        'line-through text-light-theme-dark-grayish-blue opacity-50' : ''}
                        ${themeProps.primaryText} ml-3 sm:text-lg `}>
                        {todo.text}
                    </li>
                </div>
                {/* Button to delete the to-do item */}
                <button onClick={() => onDeleteTodo(todo.id)}>
                    <img src={IconCross} alt='Close todotask' className={'pr-7'}/>
                </button>
            </div>
            {/* Decorative divider line */}
            <div className={`h-0.5 ${todo.filter} ${themeProps.contentColor}`}/>
        </>
    );
};
