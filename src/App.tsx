import './App.css'
import {useThemeStore} from "./store/themeStore.tsx";
import {Header} from "./components/Header.tsx";
import {Todopages} from "./pages/Todopages.tsx";

export const App = () => {
  const {themeProps, imageBgMobile} = useThemeStore();
  const backgroundStyle = { backgroundImage: `url(${imageBgMobile})`};

  return (
        <>
            <div className={`${themeProps.primaryBg} h-screen`}>
                <div
                    style={backgroundStyle}
                    className={`${themeProps.primaryBg} font-josefin bg-cover bg-center bg-no-repeat h-52 px-7`}>
                    <Header/>
                    <Todopages/>
                </div>
            </div>
        </>
  )
}