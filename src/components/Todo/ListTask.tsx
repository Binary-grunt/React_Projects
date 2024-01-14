import {IconCheck, IconCross} from "../../assets/images";
import {ITodo} from "../../pages/Todopages.tsx";
import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";

type TasksProps = {
    todos: ITodo[]
    onDeleteTodo: (id: number) => void;
    onCheckTodo: (id: number) => void;
}

export const Tasks:FC<TasksProps> = ({todos, onCheckTodo, onDeleteTodo }) => {
    const {themeProps, checkIcon} = useThemeStore();

    return (
        <>
            <ul>{todos.map(todo => (
                <div key={todo.id}>
                    <div  className={`${todo.filter} h-14 flex flex-row items-center justify-between pl-5`}>
                        <div className={'flex flex-row items-center'}>
                            <button
                                onClick={() => onCheckTodo(todo.id)}
                                className={`${todo.checked ?
                                    'bg-gradient-to-br from-check-bg-start to-check-bg-end' : ''}
                                    h-6 w-6 rounded-2xl flex justify-center items-center`}>
                                {todo.checked ?<img src={IconCheck} alt="Checked" />
                                    :
                                    <img src={checkIcon} alt="Unchecked" className='w-6 h-6' />
                                }
                            </button>
                            <li className={`${todo.checked ?
                                'line-through text-light-theme-dark-grayish-blue opacity-50' : ''}
                                ${themeProps.primaryText} ml-3`}>
                                {todo.text}
                            </li>
                        </div>
                        <button onClick={() => onDeleteTodo(todo.id)}>
                            <img src={IconCross} alt='Close todotask' className={'pr-7'}/>
                        </button>
                    </div>
                    <div className={`h-0.5 ${todo.filter} ${themeProps.contentColor}`}/>
                </div>
            ))}
            </ul>
        </>
    );
};
