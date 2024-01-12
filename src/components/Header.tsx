import { useThemeStore } from "../store/themeStore.tsx";

/**
 * Header component for the application.
 * Displays the application's title and a button to toggle the theme.
 */
export const Header = () => {
    // Extracting theme related states and functions from the theme store
    const {toggleTheme, iconTheme, themeText, primaryText, secondaryText} = useThemeStore();

    return (
        <div className="flex justify-between items-center px-4 py-2 md:px-6 md:py-4">
            <h1 className={`${secondaryText} font-spacemono font-bold text-2xl md:text-3xl`}>
                devfinder
            </h1>
            <button
                onClick={toggleTheme}
                className="flex items-center space-x-2"
            >
                <p className={`${primaryText} font-spacemono text-base md:text-lg tracking-widest`}>
                    {themeText}
                </p>
                <img
                    src={iconTheme}
                    alt="Icon theme"
                    className="w-6 h-6 md:w-8 md:h-8"
                />
            </button>
        </div>
    );
};
