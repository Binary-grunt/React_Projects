import {useThemeStore} from "../store/themeStore.tsx";
import {FC, ReactNode} from "react";

type PaginationProps = {
    notChecked: number;
    onClearCheck: () => void;
    children?:ReactNode;
}

export const Pagination:FC<PaginationProps> = ({notChecked, onClearCheck, children}) => {
    const {themeProps} = useThemeStore();
    return (
        <>
            <div className={`${themeProps.secondaryText} h-16 flex flex-row items-center justify-between mx-7`}>
                <div>{notChecked} items left</div>
                {children}
                <button onClick={onClearCheck}>Clear Completed</button>
            </div>
        </>
    );
};
