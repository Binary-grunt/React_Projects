import {GitHubUserData} from "../../pages/GitHubUser.tsx";
import {useThemeStore} from "../../store/themeStore.tsx";
import {FC} from "react";

type PseudoGitHubProps = {
    userData: GitHubUserData
}

const formatDate = (dateString: string): string => {
    const dateObject = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return dateObject.toLocaleDateString('en-US', options);
}

export const PseudoGitHub:FC<PseudoGitHubProps> = ({userData}) => {
    const {primaryText, secondaryText} = useThemeStore();
    const formattedDate: string = formatDate(userData.created_at);

    return (
        <>
            <div className={'flex flex-row pb-9'}>
                <img src={userData.avatar_url} alt='Avatar' className={'rounded-full size-24 md:size-36'}/>
                <div className={`flex flex-col items-start justify-center pl-5 
                md:pl-14 lg:pl-12 lg:grid lg:grid-cols-2 lg:justify-between lg:items-center `}>
                    <span className={`${secondaryText} font-bold text-2xl md:text-4x   `}>
                        {userData.name}
                    </span>
                    <span className={'text-dev-blue pb-1 md:text-lg md:pt-2 lg:order-last'}>
                        @{userData.login}
                    </span>
                    <p className={`${primaryText} text-sm md:text-lg `}>
                        Joined {formattedDate}
                    </p>
                </div>
            </div>
        </>
    );
};
