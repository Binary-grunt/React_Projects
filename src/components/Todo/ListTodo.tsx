import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";
import {FooterTodo} from "../ui/FooterTodo.tsx";
import {ITodo} from "../../pages/Todopages.tsx";
import {Pagination} from "../ui/Pagination.tsx";
import {Tasks} from "./Tasks.tsx";

type TodoListProps = {
    todos: ITodo[];
    onDeleteTodo: (id: number) => void;
    onCheckTodo: (id: number) => void;
    onClearCheck: () => void;
    onShowAll: () => void;
    onShowActive: () => void;
    onShowCompleted: () => void;

};

export const ListTodo: FC<TodoListProps> =
    ({ todos, onDeleteTodo, onCheckTodo, onClearCheck, onShowAll, onShowActive, onShowCompleted }) => {
    const {themeProps} = useThemeStore();
    const notChecked = todos.filter(todo => !todo.checked).length;

    return (
        <>
            <div className={`${themeProps.secondaryBg} rounded-md`}>
                {todos.length ?
                    <>
                        <Tasks
                            todos={todos}
                            onDeleteTodo={onDeleteTodo}
                            onCheckTodo={onCheckTodo}
                        />
                        <FooterTodo notChecked={notChecked} onClearCheck={onClearCheck}></FooterTodo>
                    </> : null }
            </div>
            <Pagination
                onShowAll={onShowAll}
                onShowActive={onShowActive}
                onShowCompleted={onShowCompleted}
            />
        </>
    );
};
