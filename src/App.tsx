
import './css/App.css'
import {GitHubUser} from "./components/GitHubUser.tsx";
import {Header} from "./components/Header.tsx";
import {useThemeStore} from "./store/themeStore.tsx";
import {SearchBar} from "./components/SearchBar.tsx";
import {useState} from "react";

const App = ()  => {
    const {primaryBg} = useThemeStore();
    const [username, setUsername] = useState('');

    const handleSearch = (query:string) => {
       setUsername(query);
    }

  return (
    <>
        <div className={`${primaryBg} px-8 pt-10 h-screen`}>
            <Header/>
          <div className={`${primaryBg} pt-12`}>
              <div>
              <SearchBar onSearch={handleSearch}/>
              </div>
              <div className={'pt-4'}>
              <GitHubUser username={username}/>
              </div>
          </div>
        </div>
    </>
  )
}

export default App
