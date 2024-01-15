import {TodoIcon} from "../assets/images";
import {useThemeStore} from "../store/themeStore.tsx";

export const Header = () => {
    const {toggleTheme, iconTheme} = useThemeStore()
    return (
        <>
            <div className={'flex flex-row justify-between py-10 sm:py-0 sm:pt-6 '}>
                <img src={TodoIcon} className={'sm:size-44'} alt="Logo ToDopages website"/>
                <button onClick={toggleTheme}>
                    <img src={iconTheme} alt="Switch Theme Button"/>
                </button>
            </div>
        </>
    );
};
