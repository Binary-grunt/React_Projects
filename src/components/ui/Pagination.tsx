// Importing React functional component and the custom theme store hook.
import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";

// TypeScript type definition for the component's props.
type PaginationProps = {
    onShowAll: () => void;        // Function to show all tasks.
    onShowActive: () => void;     // Function to show active tasks.
    onShowCompleted: () => void;  // Function to show completed tasks.
}

// Functional component for pagination.
export const Pagination:FC<PaginationProps> = ({onShowAll, onShowActive, onShowCompleted}) => {
    // Accessing theme properties from the theme store.
    const {themeProps} = useThemeStore();

    return (
        <>
            {/* Container div for pagination buttons with dynamic styling */}
            <div className={`${themeProps.secondaryText} ${themeProps.secondaryBg} 
            h-16 flex flex-row items-center rounded-md justify-center shadow-md gap-5 sm:gap-4 sm:shadow-none`}>
                {/* Button to show all tasks. Applies hover effect and changes text color on focus */}
                <button onClick={onShowAll} className={`${themeProps.hoverText} focus:text-bright-blue`}>All</button>

                {/* Button to filter active tasks */}
                <button onClick={onShowActive} className={`${themeProps.hoverText} focus:text-bright-blue`}><p>Active</p></button>

                {/* Button to filter completed tasks */}
                <button onClick={onShowCompleted} className={`${themeProps.hoverText} focus:text-bright-blue`}>Completed</button>
            </div>
        </>
    );
};
