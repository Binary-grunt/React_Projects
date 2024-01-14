import {FC} from "react";
import {ITodo} from "../App.tsx";
import {IconCheck, IconCross} from "../assets/images";
import {useThemeStore} from "../store/themeStore.tsx";
import {Pagination} from "./Pagination.tsx";

type TodoListProps = {
    todos: ITodo[];
    onDeleteTodo: (id: number) => void;
    onCheckTodo: (id: number) => void;
    onClearCheck: () => void;
};

export const ListTodo: FC<TodoListProps> = ({  todos, onDeleteTodo, onCheckTodo, onClearCheck }) => {
    const {themeProps, checkIcon} = useThemeStore();
    const notChecked = todos.filter(todo => !todo.checked).length;


    return (
        <>
            <div className={`${themeProps.secondaryBg} rounded-xl mt-5`}>
                <ul>
                    {todos.map(todo => (
                        <div key={todo.id}>
                            <div  className="h-14 flex flex-row items-center justify-between pl-5">
                                <div className={'flex flex-row items-center'}>
                                    <button
                                        onClick={() => onCheckTodo(todo.id)}
                                        className={`${todo.checked ? 'bg-gradient-to-br from-check-bg-start to-check-bg-end' : ''} 
                                        h-6 w-6 rounded-2xl flex justify-center items-center`}>
                                        {todo.checked ? <img src={IconCheck} alt="Checked" /> : <img src={checkIcon} alt="Unchecked" className='w-6 h-6' />}
                                    </button>
                                    <li className={`${todo.checked ? 'line-through text-light-theme-dark-grayish-blue opacity-50' : ''} ${themeProps.primaryText} ml-3`}>
                                        {todo.text}
                                    </li>
                                </div>
                                <button onClick={() => onDeleteTodo(todo.id)}>
                                    <img src={IconCross} alt='Close todotask' className={'pr-7'} />
                                </button>
                            </div>
                            <div className={`h-0.5 ${themeProps.contentColor}`}/>
                        </div>
                    ))}
                </ul>
                <Pagination notChecked={notChecked} onClearCheck={onClearCheck}></Pagination>
            </div>
            <div className={`${themeProps.secondaryText} ${themeProps.secondaryBg} h-16 flex flex-row items-center rounded-xl justify-around mt-5 `}>
                <button onClick={() => null}>All</button>
                <button onClick={() => null}>Active</button>
                <button onClick={() => null}>Completed</button>
            </div>
        </>
    );
};
