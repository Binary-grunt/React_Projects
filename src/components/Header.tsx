import {TodoIcon} from "../assets/images";
import {useThemeStore} from "../store/themeStore.tsx";

export const Header = () => {
    const {toggleTheme, iconTheme} = useThemeStore()
    return (
        <>
            <div>
                <img src={TodoIcon}/>
                <button onClick={toggleTheme}>
                    <img src={iconTheme}/>
                    Test
                </button>
            </div>
        </>
    );
};
