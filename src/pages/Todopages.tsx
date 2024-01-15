import {useCallback, useState} from "react";
import {AddTodoInput} from "../components/Todo/AddTodoInput.tsx";
import {ListTodo} from "../components/Todo/ListTodo.tsx";

export type ITodo = {
    id: number;
    text: string;
    checked: boolean;
    filter: string;
}

export const Todopage = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [nextId, setNextId] = useState(1);

    const addTodoHandler = useCallback((text: string) => {
        setTodos(prevTodos => [...prevTodos, { id: nextId, text, checked: false, filter: '' }]);
        setNextId(nextId + 1);
    }, [nextId]);

    const deleteTodoHandler = (id: number) => setTodos(todos.filter(todo => todo.id !== id));
    const clearCheckedHandle = () => setTodos(todos.filter( todo => !todo.checked));
    const checkTodoHandler = (id: number) => setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo ));
    const showAllTodo = () => setTodos(todos.map(todo => ({ ...todo, filter: '' })));

    const showNotChecked = () => {
        const notChecked = todos.filter(todo => !todo.checked);
        if(notChecked && notChecked.length >= 1) {
            setTodos(todos.map(todo => ({...todo, filter: todo.checked ? 'hidden' : ''})));
        }
    };

    const showChecked = () => {
        const checked = todos.filter(todo => todo.checked);
        if(checked && checked.length >= 1){
            setTodos(todos.map(todo => ({ ...todo, filter: !todo.checked ? 'hidden' : '' })));
        }
    };

    return (
        <>
            <div className={'flex flex-col gap-5'}>
                <AddTodoInput onAddTodo={addTodoHandler} />
                <ListTodo
                    todos={todos}
                    onDeleteTodo={deleteTodoHandler}
                    onCheckTodo={checkTodoHandler}
                    onClearCheck={clearCheckedHandle}
                    onShowAll={showAllTodo}
                    onShowActive={showNotChecked}
                    onShowCompleted={showChecked}
                />
            </div>
        </>
    );
};
