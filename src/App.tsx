import {FC} from 'react';
import './App.css';
import {StartMenuPage} from "./pages/StartMenuPage.tsx";
import {BackGroundIcon} from "./themes/BackGroundIcon.tsx";
import {QuizPage} from "./pages/QuizPage.tsx";

export const App: FC = () => {

    return (
            <BackGroundIcon>
                <QuizPage/>
                {/*<StartMenuPage />*/}
            </BackGroundIcon>
    );
}
