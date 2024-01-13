import { create } from 'zustand';
import {IconMoon, IconSun, BgMobileLight, BgMobileDark, BgDeskTopLight, BgDeskTopDark} from "../assets/images";
import {themes} from "../constants/themeConstants.ts";

// Define a structure for theme properties
type ThemeProperties = {
    primaryBg: string;
    secondaryBg: string;
    primaryText: string;
    secondaryText: string;
    contentColor: string;
    inactiveText: string;
}

type ThemeStore = {
    theme: 'light' | 'dark';
    iconTheme: string;
    imageBgMobile: string;
    imageBgDesktop: string;
    themeProps: ThemeProperties;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: 'light',
    iconTheme: IconMoon,
    imageBgDesktop: BgDeskTopLight,
    imageBgMobile: BgMobileLight,
    themeProps: themes.light,
    toggleTheme: () => set(state => ({
        theme: state.theme === 'light' ? 'dark' : 'light',
        iconTheme: state.theme === 'light' ? IconSun : IconMoon,
        imageBgMobile: state.theme === 'light' ? BgMobileDark : BgMobileLight,
        imageBgDesktop: state.theme === 'light' ? BgDeskTopDark : BgDeskTopLight,
        themeProps: state.theme === 'light' ? themes.dark : themes.light,
    })),
}));
