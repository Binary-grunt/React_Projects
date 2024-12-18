import { useCallback, useState } from "react";
import { AddTodoInput } from "../components/Todo/AddTodoInput.tsx";
import { ListTodo } from "../components/Todo/ListTodo.tsx";

// Defining the structure of a to-do item.
export type ITodo = {
    id: number;
    text: string;
    checked: boolean;
    filter: string;
}

export const Todopage = () => {
    // State management for to-dos and unique identifier generation.
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [nextId, setNextId] = useState(1);

    // useCallback to optimize the addTodoHandler, preventing unnecessary re-renders.
    const addTodoHandler = useCallback((text: string) => {
        setTodos(prevTodos => [...prevTodos, { id: nextId, text, checked: false, filter: '' }]);
        setNextId(nextId + 1);
    }, [nextId]);

    // Function to delete a specific to-do item.
    const deleteTodoHandler = (id: number) => setTodos(todos.filter(todo => todo.id !== id));

    // Function to clear checked to-do items.
    const clearCheckedHandle = () => setTodos(todos.filter(todo => !todo.checked));

    // Function to toggle the checked state of a to-do item.
    const checkTodoHandler = (id: number) => setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo ));

    // Functions to filter to-dos based on their checked status.
    const showAllTodo = () => setTodos(todos.map(todo => ({ ...todo, filter: '' })));
    const showNotChecked = () => setTodos(todos.map(todo => ({...todo, filter: todo.checked ? 'hidden' : ''})));
    const showChecked = () => setTodos(todos.map(todo => ({ ...todo, filter: !todo.checked ? 'hidden' : '' })));

    return (
        <>
            <div className={' flex flex-col sm:min-w-max sm:max-w-xl gap-6'}>
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
