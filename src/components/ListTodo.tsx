import {FC, useState} from "react";
import {ITodo} from "../App.tsx";
import {IconCheck} from "../assets/images";
import {useThemeStore} from "../store/themeStore.tsx";

type TodoListProps = {
    todos: ITodo[];
}

export const ListTodo: FC<TodoListProps> = ({ todos }) => {
    const {themeProps, checkIcon} = useThemeStore()
    const [check, setCheck] = useState(false);
    const checkedBg = ' bg-gradient-to-br from-check-bg-start to-check-bg-end '
    const handleChange = () => {
        setCheck(!check);
    };

    return (
        <>
            <div className={`${themeProps.secondaryBg} rounded-xl`}>
                <ul>
                    {todos.map(todo => (
                        <div className={` h-12 flex flex-row items-center pl-5`}>
                            <button
                                onClick={handleChange}
                                className={`${check ? checkedBg : ''} flex justify-center items-center h-6 w-6 rounded-2xl`}>
                                {check ? <img src={IconCheck} alt="Checked" /> : <img src={checkIcon} className={'size-6'}/>}
                            </button>
                            <li key={todo.id} className={'ml-3'}>{todo.text}</li>
                            <hr className={`${themeProps.contentColor}`}/>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
};
