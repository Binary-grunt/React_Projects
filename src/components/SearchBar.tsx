import {ChangeEvent, FC, FormEvent, useState} from "react";
import {IconSearch} from "../assets";
import {useThemeStore} from "../store/themeStore.tsx";

type SearchBarProps = {
    onSearch: (searchQuery: string) => void
}

export const SearchBar:FC<SearchBarProps> = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const {secondaryBg} = useThemeStore();

    const handleChange = (e:ChangeEvent<HTMLInputElement> ) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={`${secondaryBg} flex flex-row justify-between p-4 rounded-xl shadow-md`}>
                <img src={IconSearch} alt='Icon search'/>
                <input
                    type="text"
                    value={searchQuery}
                    placeholder='Search GitHub username...'
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className={'bg-dev-blue text-lightMode-white'}
                > Search </button>
            </form>

        </>
    );
};
