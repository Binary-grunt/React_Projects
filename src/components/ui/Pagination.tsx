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
            h-16 flex flex-row items-center rounded-md justify-around lg:gap-14`}>
                <button onClick={onShowAll}>All</button>
                <button onClick={onShowActive}>Active</button>
                <button onClick={onShowCompleted}>Completed</button>
            </div>
        </>
    );
};
