import {ChangeEvent, FC, FormEvent, useState} from "react";
import {IconSearch} from "../assets";
import {useThemeStore} from "../store/themeStore.tsx";

type SearchBarProps = {
    onSearch: (searchQuery: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState(true);
    const { secondaryText, secondaryBg } = useThemeStore();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setResult(true);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchQuery ? onSearch(searchQuery) : setResult(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-2 p-2 md:space-x-4 font-spacemono"
        >
            <img
                src={IconSearch}
                alt="Icon search"
                className="w-6 h-6 md:w-8 md:h-8"
            />
            <input
                type="text"
                value={searchQuery}
                placeholder="Search GitHub username..."
                onChange={handleChange}
                className={`flex-grow bg-transparent text-sm md:text-lg pl-2 focus:outline-none ${secondaryBg} ${secondaryText}`}
            />
            {!result && (
                <span className="text-dev-red text-sm font-bold">
                    No results
                </span>
            )}
            <button
                type="submit"
                className="bg-dev-blue hover:bg-dev-light-blue text-lightMode-white text-lg font-semibold rounded-xl h-14 w-2 md:h-14 md:w-36 transition duration-200"
            >
                Search
            </button>
        </form>
    );
};

