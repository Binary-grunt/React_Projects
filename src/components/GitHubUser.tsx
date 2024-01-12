import {useState, useEffect, FC} from 'react';
import {useThemeStore} from "../store/themeStore.tsx";


type GitHubUserProps = {
    username: string,
}
type GitHubUserData = {
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


}
const formatDate = (dateString: string): string => {
    const dateObject = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return dateObject.toLocaleDateString('en-US', options);
}


export const GitHubUser:FC<GitHubUserProps> =({ username }) => {
    const [userData, setUserData] = useState<GitHubUserData | null>(null);
    const {primaryText, secondaryText, inactiveText, secondaryBg, primaryBg} = useThemeStore();

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
        <div className={`${secondaryBg} font-spacemono rounded-xl shadow-md p-7`}>
            <div className={'flex flex-row pb-5'}>
                <img src={userData.avatar_url} alt='Avatar' className={'rounded-full size-24 ring-inset'}/>
                <div className={'flex flex-col items-start pl-5'}>
                    <span className={`${secondaryText} font-bold text-2xl`}>{userData.name}</span>
                    <span className={'text-dev-blue pb-2'}>@{userData.login}</span>
                    <p className={`${primaryText}`}>Joined {formattedDate}</p>
                </div>
            </div>
            <div className={` pb-5 content-start`}>
                <p className={`${inactiveText}`}>{userData.bio}</p>
            </div>
            <div className={`${primaryBg} flex flex-row`}>
                <div className={'flex flex-col'}>
                    <span>Repos</span>
                    <span>{userData.public_repos}</span>
                </div>
                <div className={'flex flex-col'}>
                    <span>Followers</span>
                    <span>{userData.followers}</span>
                </div>
                <div className={'flex flex-col'}>
                    <span>Following</span>
                    <span>{userData.following}</span>
                </div>
            </div>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                {userData.html_url}
            </a>
            <div>

            </div>
        </div>
    );
}