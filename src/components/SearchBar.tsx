import {ChangeEvent, FC, FormEvent, useState} from "react";
import {IconSearch} from "../assets";
import {useThemeStore} from "../store/themeStore.tsx";

type SearchBarProps = {
    onSearch: (searchQuery: string) => void
}

/**
 * SearchBar component allowing users to search GitHub usernames.
 *
 * This component maintains its own state for the search query and the search result status.
 * It uses the `onSearch` prop to communicate the search query to parent components.
 */

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState(true);
    const { secondaryText, secondaryBg } = useThemeStore();

    /**
     * Updates the search query state and resets the result state on input change.
     *
     * @param event
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setResult(true);
    }


    /**
     * Handles the submission of the search form.
     *
     * It prevents the default form submission action, checks if the search query is not empty,
     * and calls the `onSearch` prop function with the current query. If the query is empty,
     * it sets the result state to false for indicating no results.
     *
     * @param event
     */
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchQuery ? onSearch(searchQuery) : setResult(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={"flex items-center space-x-2 p-1 md:space-x-4 font-spacemono"}
        >
            <img
                src={IconSearch}
                alt="Icon search"
                className={"w-6 h-6 md:w-8 md:h-8"}
            />
            <input
                type="text"
                value={searchQuery}
                placeholder="Search GitHub username..."
                onChange={handleChange}
                className={`flex-grow bg-transparent text-sm md:text-lg pl-2 focus:outline-none ${secondaryBg} ${secondaryText}`}
            />
            {!result && (
                <span className={"text-dev-red text-sm font-bold"}>
                    No results
                </span>
            )}
            <button
                type="submit"
                className={"bg-dev-blue hover:bg-dev-light-blue text-lightMode-white text-sm font-semibold rounded-xl h-12 w-24 md:h-14 md:w-36 transition duration-200"}
            >
                Search
            </button>
        </form>
    );
};

