import {create, StoreApi, UseBoundStore} from "zustand";
import mobileIconLight from './../assets/images/pattern-background-mobile-light.svg';
import mobileIconDark from './../assets/images/pattern-background-mobile-dark.svg';
import tabletIconLight from './../assets/images/pattern-background-tablet-light.svg';
import tabletIconDark from './../assets/images/pattern-background-tablet-dark.svg';
import desktopIconLight from './../assets/images/pattern-background-desktop-light.svg';
import desktopIconDark from './../assets/images/pattern-background-desktop-dark.svg';
import moonLight from './../assets/images/icon-moon-light.svg';
import moonDark from './../assets/images/icon-moon-dark.svg';
import sunLight from './../assets/images/icon-sun-light.svg'
import sunDark from './../assets/images/icon-sun-dark.svg';

export enum BgColor {
    light= '#F4F6FA',
    black = '#313E51'
}
export enum BgButton {
    light = '#FFF',
    black = '#3B4D66'
}
export enum TextColor {
    light = '#FFFFFF',
    black = '#313E51'
}
export enum SubTextColor {
    light = '#ABC1E1',
    black = '#626C7F'
}

type StoreTheme = {
    backgroundColor: BgColor,
    themeButton: BgButton,
    textColor: TextColor,
    subTextColor: SubTextColor,
    sunIcon: { light: string; dark: string;},
    moonIcon: {light: string; dark:string;},
    mobileIcon: { light:string; dark: string;},
    tabletIcon: { light: string; dark: string; },
    desktopIcon: { light: string; dark: string; },
    toggleChangeTheme: () => void
}

export const useThemeStore:  UseBoundStore<StoreApi<StoreTheme>> = create<StoreTheme>()((set) =>({
        backgroundColor: BgColor.black,
        themeButton: BgButton.black,
        textColor: TextColor.light,
        subTextColor: SubTextColor.light,
        sunIcon: {
            light: sunLight,
            dark: sunDark
        },
        moonIcon: {
            light: moonLight,
            dark: moonDark,
        },
        mobileIcon: {
            light: mobileIconLight,
            dark: mobileIconDark,
        },
        tabletIcon: {
            light: tabletIconLight,
            dark: tabletIconDark
        },
        desktopIcon: {
            light: desktopIconLight,
            dark: desktopIconDark
        },
        toggleChangeTheme: () => set((state) => ({
            backgroundColor: state.backgroundColor === BgColor.light ? BgColor.black : BgColor.light,
            themeButton: state.themeButton === BgButton.light ? BgButton.black : BgButton.light,
            textColor: state.textColor === TextColor.black ? TextColor.light : TextColor.black,
            subTextColor: state.subTextColor ===  SubTextColor.black? SubTextColor.light : SubTextColor.black,
        })),
}))
