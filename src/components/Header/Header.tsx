import {ThemeToggleButton} from "../../themes/ThemeToggleButton.tsx";
import React, {FC} from "react";

type HeaderProps = {
    children?: React.ReactNode
}

export const Header:FC<HeaderProps> = ({children}) => {
    return (
        <>
            <div className={"flex flex-row justify-between items-center"}>
                {children && <div> {children} </div>}
                <div> <ThemeToggleButton/> </div>
            </div>
        </>
    );
};
