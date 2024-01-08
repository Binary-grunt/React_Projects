import {FC} from 'react';
import './App.css';
import {Header} from "./components/header/Header.tsx";
import {Home} from "./components/startmenu/Home.tsx";
import {BackGroundIcon} from "./components/startmenu/BackGroundIcon.tsx";

export const App: FC = () => {

    return (
            <BackGroundIcon>
                <Header/>
                <Home />
            </BackGroundIcon>
    );
}
