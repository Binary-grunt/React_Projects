import {useState, useEffect, FC} from 'react';
import {useThemeStore} from "../store/themeStore.tsx";
import {Stats, Links, PseudoGitHub} from "../components/ContainerGitHub";

// Types for the props and user data structure.
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

/**
 * Component to fetch and display GitHub user data.
 * @param username - GitHub username to fetch data for.
 */
export const GitHubUser:FC<GitHubUserProps> =({ username }) => {
    // State to store GitHub user data
    const [userData, setUserData] = useState<GitHubUserData | null>(null);
    // Accessing theme store for theming purposes
    const { secondaryBg} = useThemeStore();

    // Effect to fetch user data from GitHub API
    useEffect(() => {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then(data => setUserData(data))
                .catch((error) => console.log(error))

    }, [username]);

    // Display loading text while fetching data
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