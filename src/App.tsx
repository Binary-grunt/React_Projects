import {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header.tsx";
import {StartMenuPage} from "./pages/StartMenuPage.tsx";
import {BackGroundIcon} from "./themes/BackGroundIcon.tsx";

export const App: FC = () => {

    return (
            <BackGroundIcon>
                <Header/>
                <StartMenuPage />
            </BackGroundIcon>
    );
}
