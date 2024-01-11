import {FC, useEffect, useReducer} from 'react';
import { useDataStore } from '../store';
import {useParams} from "react-router-dom";
import {Header, Subject} from "../components/Header";
import {quizReducer} from "../hooks/quizReducer.tsx";
import {Score, QuizChoice} from "../components/Quiz";
import {backgroundColorIcon} from "../store/themeStore.tsx";


const initialState = {
    currentQuestionIndex: 0,
    selectedOption: '',
    isSubmit: false,
    isCorrect: false,
    score: 0
}


export const QuizPage:FC = () => {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const params = useParams();
    const quizIndex = params.index ? parseInt(params.index, 10) : 0;
    const { quizzes } = useDataStore();
    const quiz = quizzes[quizIndex];


    useEffect(() => {
        dispatch({
            type: 'RESET',
            payload: initialState
        });
    }, [quizIndex]);

    return (
        <>
            <div className={`flex-col flex justify-center mx-2 p-6
                 md:px-14 md:pt-12 md:mx-3
                 xl:pt-28 xl:mx-28`}>
                <Header>
                    <Subject
                        icon={quiz.icon}
                        title={quiz.title}
                        backgroundColor={backgroundColorIcon[quizIndex % backgroundColorIcon.length]}
                    />
                </Header>
                    {quizzes.length > 0 && state.currentQuestionIndex < 10 ?
                        <QuizChoice
                            state={state}
                            quizIndex={quizIndex}
                            dispatch={dispatch}
                        /> :
                        <Score
                            score={state.score}
                            quizQuestionLength={quiz.questions.length}
                            backgroundColorIcon={backgroundColorIcon}
                            quizIndex={quizIndex}
                        />
                    }
                    </div>
            {!quizzes.length &&
                <div>Loading...</div>}
        </>
    );
};
