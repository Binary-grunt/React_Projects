import { create } from "zustand";
import {IconMoon, IconSun} from "./../assets";
export enum ThemeLight {
    bg_light_gray = 'bg-lightMode-light-gray',
    bg_light_white = 'bg-lightMode-white',
    text_gray = 'text-lightMode-gray',
    text_black = 'text-lightMode-black',
    inactive_gray = 'text-lightMode-medium-gray',
}

export enum ThemeDark {
    bg_dark = 'bg-darkMode-black',
    bg_darkblue = 'bg-darkMode-darkblue',
    text_white = 'text-darkMode-white',
}

type ThemeStore = {
    theme: 'light' | 'dark';
    iconTheme: string;
    themeText: string;
    primaryBg: string;
    secondaryBg: string;
    primaryText: string;
    secondaryText: string;
    inactiveText: string;
    toggleTheme: () => void;
}
export const useThemeStore = create<ThemeStore>((set) => ({
    theme: 'light',
    iconTheme: IconMoon,
    themeText: 'DARK',
    primaryBg: ThemeLight.bg_light_gray,
    secondaryBg: ThemeLight.bg_light_white,
    primaryText: ThemeLight.text_gray,
    secondaryText: ThemeLight.text_black,
    inactiveText: ThemeLight.inactive_gray,

    toggleTheme: () => set(state => ({
        theme: state.theme === 'light' ? 'dark' : 'light',
        iconTheme: state.theme === 'light' ? IconSun : IconMoon,
        themeText: state.theme === 'light' ? 'LIGHT' : 'DARK',
        primaryBg: state.theme === 'light' ? ThemeDark.bg_dark : ThemeLight.bg_light_gray,
        secondaryBg: state.theme === 'light' ? ThemeDark.bg_darkblue : ThemeLight.bg_light_white,
        primaryText: state.theme === 'light' ? ThemeDark.text_white : ThemeLight.text_gray,
        secondaryText: state.theme === 'light' ? ThemeDark.text_white : ThemeLight.text_black,
        inactiveText: state.theme === 'light' ? ThemeDark.text_white : ThemeLight.inactive_gray,
    })),
}));
