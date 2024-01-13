import './App.css'
import {useThemeStore} from "./store/themeStore.tsx";
import {ButtonCheck} from "./components/ButtonCheck.tsx";
import {Header} from "./components/Header.tsx";

export const App = () => {
  const {themeProps, imageBgMobile} = useThemeStore();

    const backgroundStyle = {
        backgroundImage: `url(${imageBgMobile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

  return (
    <>
      <div style={backgroundStyle}className={`${themeProps.primaryBg}`}>
          <Header/>
      <h1>Vite + React</h1>
      <div>
          <ButtonCheck/>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-light-theme-dark-grayish-blue">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}