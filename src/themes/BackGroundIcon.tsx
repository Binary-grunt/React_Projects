import React, { FC, useState, useEffect } from 'react';
import {BgColor, useThemeStore} from '../store/themeStore.tsx';
import '../css/BackgroundIcon.css';

type BackgroundIconProps = {
    children: React.ReactNode;
}
export const BackGroundIcon: FC<BackgroundIconProps> = ({children}) => {
    const { backgroundColor, mobileIcon, tabletIcon, desktopIcon, textColor } = useThemeStore();
    const [backgroundStyle, setBackgroundStyle] = useState({});



    useEffect(() => {
        const updateBackground = () => {
            const isMobile = window.matchMedia("(max-width: 600px)").matches;
            const isTablet = window.matchMedia("(min-width: 601px) and (max-width: 1024px)").matches;

            let iconSrc;
            if (isMobile) {
                iconSrc = backgroundColor === BgColor.light ? mobileIcon.light : mobileIcon.dark;
            } else if (isTablet) {
                iconSrc = backgroundColor === BgColor.light ? tabletIcon.light : tabletIcon.dark;
            } else {
                iconSrc = backgroundColor === BgColor.light ? desktopIcon.light : desktopIcon.dark;
            }
            setBackgroundStyle({
                backgroundImage: `url(${iconSrc})`,
                backgroundSize: 'cover',
                backgroundColor: backgroundColor,
                color: textColor
            });
        };
        updateBackground();
        const handleResize = () => {
            updateBackground();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [backgroundColor, mobileIcon, tabletIcon, desktopIcon, textColor]);

    return (
        <div className="full-size-container" style={backgroundStyle}>
            {children}
        </div>
    );
};
