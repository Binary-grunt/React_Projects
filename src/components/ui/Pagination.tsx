import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";


type PaginationProps = {
    onShowAll: () => void;
    onShowActive: () => void;
    onShowCompleted: () => void;
}

export const Pagination:FC<PaginationProps> = ({onShowAll, onShowActive, onShowCompleted}) => {
    const {themeProps} = useThemeStore();
    return (
        <>
            <div className={`${themeProps.secondaryText} ${themeProps.secondaryBg} 
            h-16 flex flex-row items-center rounded-md justify-center shadow-md gap-5 sm:gap-4 sm:shadow-none`}>
                <button onClick={onShowAll} className={`${themeProps.hoverText} focus:text-bright-blue`}>All</button>
                <button onClick={onShowActive} className={`${themeProps.hoverText} focus:text-bright-blue`}><p>Active</p></button>
                <button onClick={onShowCompleted} className={`${themeProps.hoverText} focus:text-bright-blue`}>Completed</button>
            </div>
        </>
    );
};
