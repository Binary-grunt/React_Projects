import { GitHubUserData } from "../../pages/GitHubUser.tsx";
import { useThemeStore } from "../../store/themeStore.tsx";
import {FC, useMemo} from "react";

type PseudoGitHubProps = {
    userData: GitHubUserData
}

/**
 * Formats a date string to a more readable format.
 * @param dateString - The date string to format.
 * @returns {string} - Formatted date string.
 */
const formatDate = (dateString: string): string => {
    const dateObject = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return dateObject.toLocaleDateString('en-US', options);
}

/**
 * Component to display a pseudo GitHub user profile.
 * @param  userData - The GitHub user data to display.
 */
export const PseudoGitHub: FC<PseudoGitHubProps> = ({ userData }) => {
    // Accessing theme store for theming purposes
    const { primaryText, secondaryText, inactiveText } = useThemeStore();
    // Formatting the user's account creation date
    const formattedData = useMemo<string>(() => {
        return formatDate(userData.created_at);
    }, [userData.created_at]);

    return (
        <div className="pb-9 flex flex-col">
            <div className="flex flex-row items-center gap-4 lg:flex-row lg:gap-12">
                <img
                    src={userData.avatar_url}
                    alt="Avatar"
                    className="rounded-full w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
                <div className="flex flex-col items-start lg:flex-grow">
                    <span className={`${secondaryText} font-bold text-2xl md:text-4xl`}>
                        {userData.name}
                    </span>
                    <span className="text-dev-blue pb-1 md:text-lg md:pt-2">
                        @{userData.login}
                    </span>
                    <p className={`${primaryText} text-sm md:text-lg`}>
                        Joined {formattedData}
                    </p>
                </div>
            </div>
            <p className={`${inactiveText} leading-7 text-sm mt-4 md:text-lg lg:pl-52`}>
                {userData.bio ? userData.bio : 'This profile has no bio'}
            </p>
        </div>
    );
};
