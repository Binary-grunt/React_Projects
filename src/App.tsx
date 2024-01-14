import './App.css'
import {useThemeStore} from "./store/themeStore.tsx";
import {ButtonCreateTask} from "./components/ButtonCreateTask.tsx";
import {Header} from "./components/Header.tsx";

export const App = () => {
  const {themeProps, imageBgMobile} = useThemeStore();

    const backgroundStyle = {
        backgroundImage: `url(${imageBgMobile})`,
    };

  return (
    <>
      <div style={backgroundStyle} className={`${themeProps.primaryBg} bg-cover bg-center bg-no-repeat h-52 px-7 font-josefin`}>
          <Header/>
          <ButtonCreateTask/>
      <h1>Vite + React</h1>
      <div>

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