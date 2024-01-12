import {ChangeEvent, FC, FormEvent, useState} from "react";
import {IconSearch} from "../assets";
import {useThemeStore} from "../store/themeStore.tsx";

type SearchBarProps = {
    onSearch: (searchQuery: string) => void
}

export const SearchBar:FC<SearchBarProps> = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState(true);
    const {secondaryText, secondaryBg} = useThemeStore();

    const handleChange = (e:ChangeEvent<HTMLInputElement> ) => {
        setSearchQuery(e.target.value);
        setResult(true);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        searchQuery ? onSearch(searchQuery) : setResult(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}
                  className={`flex flex-row justify-between items-center font-spacemono px-2`}>
                <img
                    src={IconSearch}
                    alt='Icon search'
                    className={'size-fit'}
                />
                <input
                    type="text"
                    value={searchQuery}
                    placeholder='Search GitHub username...'
                    onChange={handleChange}
                    className={`w-full bg-none text-sm md:text-lg pl-2 focus:outline-none  ${secondaryBg} ${secondaryText}`}
                />
                {!result &&
                    <span className={'text-dev-red text-sm mr-2 font-bold'}>
                        No results
                    </span>
                }
                <button
                    type='submit'
                    className={'bg-dev-blue text-lightMode-white text-lg rounded-xl h-14 w-32'}>Search</button>
            </form>

        </>
    );
};
