import {FC, useState} from "react";
import '../css/ThemeToggleButton.css';
import {BgColor, useThemeStore} from "../store/themeStore.tsx";
import circleToggle from '../assets/images/Ellipse 10.svg';


export const ThemeToggleButton: FC= () => {
    const { toggleChangeTheme, backgroundColor, moonIcon, sunIcon } = useThemeStore();
    const [isMoved, setIsMoved] = useState(true);

    const handleClick = () => {
        toggleChangeTheme();
        setIsMoved(!isMoved);
    };

    return (
        <>
            <div className={'flex flex-row gap-2 items-center md:gap-5'}>
                {backgroundColor === BgColor.light ?
                    <img src={sunIcon.dark} alt='sun-icon-dark' className={'size-5 md:size-9'}/>
                    :
                    <img src={sunIcon.light} alt='sun-icon-light' className={'size-5 md:size-9'}/>
                }
                <button className={'buttonThemeStore bg-violet-600'} onClick={handleClick}>
                    <img
                        src={circleToggle}
                        className={`svgMove ${isMoved ? 'moved' : 'initial'}`}
                        alt='toggleCircle'
                    />
                </button>
                {backgroundColor === BgColor.light ?
                    <img src={moonIcon.dark} alt='moon-icon-dark' className={'size-5 md:size-9'}/>
                    :
                    <img src={moonIcon.light} alt='moon-icon-light' className={'size-5 md:size-9'}/>
                }
            </div>
        </>
    );
};