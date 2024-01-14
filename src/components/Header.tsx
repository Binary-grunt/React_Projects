import {TodoIcon} from "../assets/images";
import {useThemeStore} from "../store/themeStore.tsx";

export const Header = () => {
    const {toggleTheme, iconTheme} = useThemeStore()
    return (
        <>
            <div className={'flex flex-row justify-between py-10'}>
                <img src={TodoIcon} className={'size-1/3'}/>
                <button onClick={toggleTheme}>
                    <img src={iconTheme}/>
                </button>
            </div>
        </>
    );
};
