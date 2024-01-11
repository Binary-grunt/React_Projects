import {create, StoreApi, UseBoundStore} from "zustand";
import {
    MobileIconLight, MobileIconDark,
    TabletIconDark, TabletIconLight,
    DesktopIconDark, DesktopIconLight,
    MoonDark, MoonLight,
    SunDark, SunLight
} from '../assets/images';

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
            light: SunLight,
            dark: SunDark
        },
        moonIcon: {
            light: MoonLight,
            dark: MoonDark,
        },
        mobileIcon: {
            light: MobileIconLight,
            dark: MobileIconDark,
        },
        tabletIcon: {
            light: TabletIconLight,
            dark: TabletIconDark
        },
        desktopIcon: {
            light: DesktopIconLight,
            dark: DesktopIconDark
        },
        toggleChangeTheme: () => set((state) => ({
            backgroundColor: state.backgroundColor === BgColor.light ? BgColor.black : BgColor.light,
            themeButton: state.themeButton === BgButton.light ? BgButton.black : BgButton.light,
            textColor: state.textColor === TextColor.black ? TextColor.light : TextColor.black,
            subTextColor: state.subTextColor ===  SubTextColor.black? SubTextColor.light : SubTextColor.black,
        })),
}))
