import {useState, useEffect, FC} from 'react';
import {useThemeStore} from "../store/themeStore.tsx";
import {Stats, Links, PseudoGitHub} from "../components/ContainerGitHub";

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

export const GitHubUser:FC<GitHubUserProps> =({ username }) => {
    const [userData, setUserData] = useState<GitHubUserData | null>(null);
    const { secondaryBg} = useThemeStore();

    useEffect(() => {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then(data => setUserData(data))
                .catch((error) => console.log(error))

    }, [username]);

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {username &&
                <div className={`${secondaryBg} font-spacemono rounded-xl shadow-2xl px-8 py-8 md:px-10 md:py-12 lg:flex-shrink-0  `}>
                    <PseudoGitHub userData={userData}/>

                    <div className={'lg:pl-48'}>
                        <Stats userData={userData}/>
                        <Links userData={userData}/>
                    </div>
                </div>
            }
        </>
    );

}