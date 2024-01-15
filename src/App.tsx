import './css/App.css'
import {useThemeStore} from "./store/themeStore.tsx";
import {Header} from "./components/Header.tsx";
import {Todopage} from "./pages/Todopages.tsx";

export const App = () => {
  const {themeProps, imageBgMobile} = useThemeStore();
  const backgroundStyle = { backgroundImage: `url(${imageBgMobile})`};

  return (
        <>
            <div className={`${themeProps.primaryBg} h-screen overflow-auto will-change-scroll`}>
                <div
                    style={backgroundStyle}
                    className={`${themeProps.primaryBg} font-josefin bg-cover bg-center bg-no-repeat h-52 px-7 sm:h-80`}>
                    <div className={'center-content'}>
                    <div className={'flex flex-col sm:min-w-max sm:max-w-xl'}>
                        <Header/>
                        <Todopage/>
                    </div>
                    </div>
                </div>
            </div>
        </>
  )
}