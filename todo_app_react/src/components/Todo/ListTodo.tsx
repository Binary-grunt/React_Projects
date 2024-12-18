// Importing React and necessary hooks, components, and types.
import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";
import {FooterTodo} from "./FooterTodo.tsx";
import {ITodo} from "../../pages/Todopages.tsx";
import {Pagination} from "../ui/Pagination.tsx";
import {Tasks} from "./Tasks.tsx";
import {useMediaQuery} from "../../hooks/useMediaQuery.tsx";

// TypeScript type definition for the component's props.
type TodoListProps = {
    todos: ITodo[];                     // Array of to-do items.
    onDeleteTodo: (id: number) => void; // Function to delete a to-do.
    onCheckTodo: (id: number) => void;  // Function to check/uncheck a to-do.
    onClearCheck: () => void;           // Function to clear checked todos.
    onShowAll: () => void;              // Function to show all todos.
    onShowActive: () => void;           // Function to filter active todos.
    onShowCompleted: () => void;        // Function to filter completed todos.
};

// Functional component for rendering the to-do list.
export const ListTodo: FC<TodoListProps> =
    ({ todos, onDeleteTodo, onCheckTodo, onClearCheck, onShowAll, onShowActive, onShowCompleted }) => {
        // Accessing theme properties and setting up media queries.
        const {themeProps} = useThemeStore();
        const isDesktop = useMediaQuery('(min-width: 640px)');
        const isMobile = useMediaQuery(`(max-width: 639px)`);
        // Calculating the number of uncompleted todos.
        const notChecked = todos.filter(todo => !todo.checked).length;

        return (
            <>
                {/* Container for the to-do list */}
                <div className={`${themeProps.secondaryBg} rounded-md shadow-xl sm:mb-44`}>
                    {/* Checking if there are todos to display */}
                    {todos.length ?
                        <>
                            {/* Mapping through the todos and rendering each as a 'Tasks' component */}
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
                            {/* Footer section with pagination for desktop */}
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
                {/* Pagination for mobile devices */}
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
