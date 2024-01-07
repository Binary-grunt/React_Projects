import {FC, useState} from "react";
import './ThemeToggleButton.css';
import {useThemeStore} from "../../store/themeStore.tsx";


export const ThemeToggleButton: FC= () => {
    const { toggleChangeTheme } = useThemeStore();
    const [isMoved, setIsMoved] = useState(true);

    const handleClick = () => {
        toggleChangeTheme();
        setIsMoved(!isMoved);
    };

    return (
        <>
                <button className={'buttonThemeStore'} onClick={handleClick}>
                    <svg className={`svgMove ${isMoved ? 'moved' : 'initial' }` }
                         xmlns="http://www.w3.org/2000/svg"
                         width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="6" fill="white"/>
                    </svg>
                </button>
        </>
    );
};