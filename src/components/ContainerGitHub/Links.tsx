import {useThemeStore} from "../../store/themeStore.tsx";
import {FC} from "react";
import {GitHubUserData} from "../../pages/GitHubUser.tsx";
import {IconCompany, IconLocation, IconTwitter, IconWebsite} from "../../assets";

type LinksProps = {
    userData: GitHubUserData;
}

/**
 * Displays links and social media information of a GitHub user.
 * @param  userData - Data of the GitHub user.
 */
export const Links:FC<LinksProps> = ({userData}) => {
    const {inactiveText} = useThemeStore();

    // Define the link sections with corresponding icons
    const linkSections = [
        { label: IconLocation, value: userData.location },
        { label: IconTwitter, value: userData.twitter_username },
        { label: IconCompany, value: userData.company },
        { label: IconWebsite, value: userData.html_url },
    ];

    return (
        <>
            <div className={`flex flex-col pt-4 md:grid md:grid-cols-2 md:gap-4 md:pt-8`}>
                {linkSections.map((section, index) => (
                    <div key={index} className={'flex flex-row items-center my-2 md:my-1'}>
                        <img
                            src={section.label}
                            alt={section.label}
                            className={`w-5 ${!section.value ? 'opacity-50' : ''}`}
                        />
                        <span className={`${inactiveText} ${!section.value ? 'opacity-40' : ''} text-sm pl-2 md:text-base truncate`}>
                            {section.value ? section.value : 'Not Available'}
                        </span>
                    </div>
                ))}

            </div>
        </>
    );
};
