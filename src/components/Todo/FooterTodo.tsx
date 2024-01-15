// Importing necessary modules and types from React and the theme store.
import {useThemeStore} from "../../store/themeStore.tsx";
import {FC, ReactNode} from "react";

// TypeScript type definition for the component's props.
type PaginationProps = {
    notChecked: number;          // Number of items that are not checked (active).
    onClearCheck: () => void;    // Function to clear completed items.
    children?: ReactNode;        // Optional children elements.
}

// Functional component for the footer of a to-do list.
export const FooterTodo:FC<PaginationProps> = ({notChecked, onClearCheck, children}) => {
    // Accessing theme properties for styling.
    const {themeProps} = useThemeStore();

    return (
        <>
            {/* Container for the footer elements */}
            <div className={`${themeProps.secondaryText} h-16 flex flex-row items-center justify-between mx-7 mb-1`}>
                {/* Displaying the number of active items */}
                <div>{notChecked} items left</div>
                {/* Rendering children elements, which can be other components or JSX */}
                {children}
                {/* Button to clear completed items with the provided handler function */}
                <button onClick={onClearCheck}>Clear Completed</button>
            </div>
        </>
    );
};
