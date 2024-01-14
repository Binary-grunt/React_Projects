import {FC} from "react";
import {ITodo} from "../App.tsx";
import {IconCheck, IconCross} from "../assets/images";
import {useThemeStore} from "../store/themeStore.tsx";

type TodoListProps = {
    todos: ITodo[];
    onDeleteTodo: (id: number) => void;
    onCheckTodo: (id: number) => void;
};

export const ListTodo: FC<TodoListProps> = ({  todos, onDeleteTodo, onCheckTodo  }) => {
    const {themeProps, checkIcon} = useThemeStore();

    return (
        <div className={`${themeProps.secondaryBg} rounded-xl mt-40`}>
            <ul>
                {todos.map(todo => (
                    <>
                    <div key={todo.id} className="h-12 flex flex-row items-center justify-between pl-5">
                        <div className={'flex flex-row items-center'}>
                            <button
                                onClick={() => onCheckTodo(todo.id)}
                                className={`${todo.checked ? 'bg-gradient-to-br from-check-bg-start to-check-bg-end' : ''} h-6 w-6 rounded-2xl flex justify-center items-center`}>
                                {todo.checked ? <img src={IconCheck} alt="Checked" /> : <img src={checkIcon} alt="Unchecked" className='w-6 h-6' />}
                            </button>
                            <li className={`${todo.checked ? 'line-through text-light-theme-dark-grayish-blue opacity-50' : ''} ml-3`}>
                                {todo.text}
                            </li>
                        </div>
                        <button onClick={() => onDeleteTodo(todo.id)}>
                            <img src={IconCross} alt='Close todotask' className={'pr-7'} />
                        </button>
                    </div>
                    <hr/>
                    </>
                ))}
            </ul>
        </div>
    );
};
