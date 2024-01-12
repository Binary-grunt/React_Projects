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
    const {primaryText, secondaryText, inactiveText} = useThemeStore();
    const formattedDate: string = formatDate(userData.created_at);

    return (
        <>
            <div className={' pb-9 lg:pb-0'}>
                <div className={'grid grid-cols-3 justify-center items-center lg:grid-flow-row-dense'}>
                    <img src={userData.avatar_url} alt='Avatar' className={'rounded-full size-24 md:size-36 lg:row-span-3 '}/>
                    <div className={` flex flex-col items-start justify-center 
                    lg:grid lg:grid-cols-2 lg:justify-between `}>
                        <span className={`${secondaryText} font-bold text-2xl md:text-4xl  `}>
                            {userData.name}
                        </span>
                        <span className={'text-dev-blue pb-1 md:text-lg md:pt-2 lg:order-3 lg:pb-6'}>
                            @{userData.login}
                        </span>
                        <p className={`${primaryText} text-sm md:text-lg lg:ml-2 lg:order-2`}>
                            Joined {formattedDate}
                        </p>
                    </div>
                    <div className={`col-span-3 lg:order-last lg:col-span-2`}>
                        <p className={`${inactiveText} leading-7 text-sm md:text-lg`}>
                            {userData.bio ? userData.bio : 'This profile has no bio'}
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
};
