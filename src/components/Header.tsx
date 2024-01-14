import {TodoIcon} from "../assets/images";
import {useThemeStore} from "../store/themeStore.tsx";

export const Header = () => {
    const {toggleTheme, iconTheme} = useThemeStore()
    return (
        <>
            <div className={'flex flex-row justify-between py-10 lg:py-0'}>
                <img src={TodoIcon} className={'lg:size-36'} alt="Logo ToDopages website"/>
                <button onClick={toggleTheme}>
                    <img src={iconTheme} alt="Switch Theme Button"/>
                </button>
            </div>
        </>
    );
};
