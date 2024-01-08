import {FC} from 'react';
import './App.css';
import {Header} from "./components/header/Header.tsx";
import {StartMenuPage} from "./components/startmenu/StartMenuPage.tsx";
import {BackGroundIcon} from "./components/startmenu/BackGroundIcon.tsx";

export const App: FC = () => {

    return (
            <BackGroundIcon>
                <Header/>
                <StartMenuPage />
            </BackGroundIcon>
    );
}
