import {useThemeStore} from "../store/themeStore.tsx";

export const Header = () => {
    const {toggleTheme, iconTheme, themeText, primaryText, secondaryText} = useThemeStore();

    return (
        <>
            <div className={'flex flex-row justify-between'}>
                <h1 className={`${secondaryText} font-spacemono font-bold text-3xl`}>
                    devfinder
                </h1>
                    <button onClick={toggleTheme} className={'flex flex-row items-center'}>
                        <p className={`${primaryText} font-spacemono text-lg tracking-widest pr-4`}>
                            {themeText}
                        </p>
                        <img src={iconTheme} alt='Icon-theme'/>
                    </button>
            </div>
        </>
    );
};
