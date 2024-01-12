
import './css/App.css'
import {GitHubUser} from "./components/GitHubUser.tsx";
import {Header} from "./components/Header.tsx";
import {useThemeStore} from "./store/themeStore.tsx";
import {SearchBar} from "./components/SearchBar.tsx";
import {useState} from "react";

const App = ()  => {
    const {primaryBg,secondaryBg} = useThemeStore();
    const [username, setUsername] = useState('');

    const handleSearch = (query:string) => {
       setUsername(query);
    }

  return (
    <>
        <div className={`${primaryBg} px-8 pt-8 pb-5 h-screen`}>
            <Header/>
          <div>
              <div className={`${secondaryBg} mt-12 rounded-2xl shadow-xl p-2`}>
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
