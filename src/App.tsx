import {FC} from 'react';
import './App.css';
import {StartMenuPage} from "./pages/StartMenuPage.tsx";
import {QuizPage} from "./pages/QuizPage.tsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";

export const App: FC = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartMenuPage />} />
                    <Route path="/:index" element={<QuizPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
