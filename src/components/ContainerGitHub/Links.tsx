import {useThemeStore} from "../../store/themeStore.tsx";
import {FC} from "react";
import {GitHubUserData} from "../../pages/GitHubUser.tsx";
import {IconCompany, IconLocation, IconTwitter, IconWebsite} from "../../assets";

type StatsProps = {
    userData: GitHubUserData;
}
export const Links:FC<StatsProps> = ({userData}) => {
    const {inactiveText} = useThemeStore();

    const linkSections = [
        { label: IconLocation, value: userData.location },
        { label: IconTwitter, value: userData.twitter_username },
        { label: IconCompany, value: userData.company },
        { label: IconWebsite, value: userData.html_url },
    ];

    return (
        <>
            <div className={`flex flex-col pt-4 md:grid md:grid-cols-2 md:pt-8 text-pretty`}>
                {linkSections.map((section, index) => (
                    <div key={index} className={'flex flex-row items-center my-2 md:my-1'}>
                        <img src={section.label} alt={section.label} className={`w-5 ${!section.value ? 'opacity-50' : ''}`}/>
                        <span className={`${inactiveText} ${!section.value ? 'opacity-40' : ''} truncate hover:text-clip text-sm pl-4 md:text-lg`}>{section.value ? section.value : 'Not Available'}</span>
                    </div>
                ))}

            </div>
        </>
    );
};
