import {useState, useEffect, FC} from 'react';
import {useThemeStore} from "../store/themeStore.tsx";
import {Stats} from "./Stats.tsx";
import {Links} from "./Link.tsx";


type GitHubUserProps = {
    username: string,
}

export type GitHubUserData = {
    name: string;
    bio: string;
    html_url: string;
    created_at: string;
    public_repos: number;
    avatar_url: string;
    followers: number;
    following: number;
    location: string;
    twitter_username: string;
    login: string;
    company:string;


}
const formatDate = (dateString: string): string => {
    const dateObject = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return dateObject.toLocaleDateString('en-US', options);
}


export const GitHubUser:FC<GitHubUserProps> =({ username }) => {
    const [userData, setUserData] = useState<GitHubUserData | null>(null);
    const {primaryText, secondaryText, inactiveText, secondaryBg} = useThemeStore();

    useEffect(() => {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then(data => setUserData(data))
                .catch((error) => console.log(error))

    }, [username]);

    if (!userData) {
        return <p>Loading...</p>;
    }
    const formattedDate: string = formatDate(userData.created_at);

    return (
        <>
            {username &&
                <div className={`${secondaryBg} font-spacemono rounded-xl shadow-2xl px-8 py-8`}>
                    <div className={'flex flex-row pb-9'}>
                        <img src={userData.avatar_url} alt='Avatar' className={'rounded-full size-24 ring-inset'}/>
                        <div className={'flex flex-col items-start pl-5'}>
                            <span className={`${secondaryText} font-bold text-2xl`}>{userData.name}</span>
                            <span className={'text-dev-blue pb-2'}>@{userData.login}</span>
                            <p className={`${primaryText} text-sm`}>Joined {formattedDate}</p>
                        </div>
                    </div>
                    <div className={` pb-8 content-start`}>
                        <p className={`${inactiveText} leading-7 text-sm`}>
                            {userData.bio ? userData.bio : 'This profile has no bio'}
                        </p>
                    </div>
                    <Stats userData={userData}/>
                    <div>
                        <Links userData={userData}/>
                    </div>
                    <div>

                    </div>
                </div>
            }

        </>
    );

}