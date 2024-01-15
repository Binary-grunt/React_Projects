// Importing necessary assets and store.
import {TodoIcon} from "../assets/images";
import {useThemeStore} from "../store/themeStore.tsx";

// Functional component for rendering the header.
export const Header = () => {
    // Accessing theme toggle functionality from the store.
    const {toggleTheme, iconTheme} = useThemeStore();

    return (
        <>
            {/* Header container with responsive padding */}
            <div className={'flex flex-row justify-between py-10 sm:py-0 sm:pt-6 '}>
                {/* Logo for the Todopages website */}
                <img src={TodoIcon} className={'sm:size-44'} alt="Logo ToDopages website"/>
                {/* Button for toggling the theme */}
                <button onClick={toggleTheme}>
                    <img src={iconTheme} alt="Switch Theme Button"/>
                </button>
            </div>
        </>
    );
};
