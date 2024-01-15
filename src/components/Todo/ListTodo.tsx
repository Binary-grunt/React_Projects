import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";
import {FooterTodo} from "../ui/FooterTodo.tsx";
import {ITodo} from "../../pages/Todopages.tsx";
import {Pagination} from "../ui/Pagination.tsx";
import {Tasks} from "./Tasks.tsx";
import {useMediaQuery} from "../../hooks/useMediaQuery.tsx";

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
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const isMobile = useMediaQuery(`(max-width: 1023px)`);

    return (
        <>
            <div className={`${themeProps.secondaryBg} rounded-md`}>
                {todos.length ?
                    <>
                        <ul>
                            {todos.map(todo => (
                                <Tasks
                                    key={todo.id}
                                    todo={todo}
                                    onDeleteTodo={onDeleteTodo}
                                    onCheckTodo={onCheckTodo}
                                />
                            ))}
                        </ul>
                        <FooterTodo notChecked={notChecked} onClearCheck={onClearCheck}>
                            {isDesktop && <Pagination
                                onShowAll={onShowAll}
                                onShowActive={onShowActive}
                                onShowCompleted={onShowCompleted}
                            />}
                        </FooterTodo>
                    </>
                : null}
           </div>
            {isMobile &&
                <Pagination
                    onShowAll={onShowAll}
                    onShowActive={onShowActive}
                    onShowCompleted={onShowCompleted}
                />
            }

        </>
    );
};
