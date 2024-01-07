import {create, StoreApi, UseBoundStore} from "zustand";

enum BgColor {
    light= '#F4F6FA',
    black = '#313E51'
}

enum TextColor {
    light = '#FFFFFF',
    black = '#313E51'
}


type StoreTheme = {
    theme: BgColor,
    textColor: TextColor,
    toggleChangeTheme: () => void
}

export const useThemeStore:  UseBoundStore<StoreApi<StoreTheme>> = create<StoreTheme>()((set) =>({
        theme: BgColor.light,
        textColor: TextColor.black,
        toggleChangeTheme: () => set((state) => ({
            theme: state.theme === BgColor.light ? BgColor.black : BgColor.light,
            textColor: state.textColor === TextColor.black ? TextColor.light : TextColor.black,
        })),
}))
