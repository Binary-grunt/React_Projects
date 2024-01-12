import {useThemeStore} from "../../store/themeStore.tsx";
import {FC} from "react";
import {GitHubUserData} from "../../pages/GitHubUser.tsx";

type StatsProps = {
    userData: GitHubUserData;
}
export const Stats:FC<StatsProps> = ({userData}) => {
    const {primaryBg, primaryText, secondaryText} = useThemeStore();

    const dataSections = [
        { label: 'Repos', value: userData.public_repos },
        { label: 'Followers', value: userData.followers },
        { label: 'Following', value: userData.following },
    ];

    return (
        <>
            <div className={`${primaryBg} flex flex-row justify-center rounded-2xl py-4 md:gap-24 md:py-6`}>
                {dataSections.map((section, index) => (
                    <div key={index} className={'flex flex-col items-center'}>
                        <span className={`${primaryText} text-xs mx-3 md:text-sm`}>{section.label}</span>
                        <span className={`${secondaryText} text-lg  font-bold pt-2 md:text-2xl`}>{section.value}</span>
                    </div>
                ))}
            </div>
        </>
    );
};
