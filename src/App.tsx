import {FC} from 'react';
import './App.css';
import { useThemeStore } from "./store/themeStore.tsx";
import {Header} from "./components/header/Header.tsx";
import {Home} from "./components/home/Home.tsx";

export const App: FC = () => {
    const {theme, textColor} = useThemeStore();

    const containerStyle = {
        backgroundColor: theme,
        color: textColor
    };




    return (
        <div className="full-size-container" style={containerStyle}>
            <Header/>
            <Home />
        </div>
    );
}
