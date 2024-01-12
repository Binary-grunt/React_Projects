import './css/App.css';
import { GitHubUser } from "./pages/GitHubUser.tsx";
import { Header } from "./components/Header.tsx";
import { useThemeStore } from "./store/themeStore.tsx";
import { SearchBar } from "./components/SearchBar.tsx";
import { useState } from "react";

/**
 * Main application component.
 * It renders the main layout of the application including the search bar, header, and the user profile.
 */
const App = () => {
    // Accessing theme store for theming purposes
    const { primaryBg, secondaryBg } = useThemeStore();

    // State for storing and updating the username
    const [username, setUsername] = useState('');

    /**
     * Handles search operations.
     * @param query - The search query string.
     */
    const handleSearch = (query: string) => {
        setUsername(query);
    }

    return (
        <>
            <div className={`${primaryBg} px-8 py-8 h-screen w-screen md:flex md:flex-col md:justify-center`}>
                <div className={'fixed-width-div md:px-20 lg:px-0'}>
                    <Header />
                    <div className={`${secondaryBg} mt-12 rounded-2xl shadow-xl p-2`}>
                        <SearchBar onSearch={handleSearch} />
                    </div>
                    <div className={'pt-4 md:pt-6'}>
                        <GitHubUser username={username} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
