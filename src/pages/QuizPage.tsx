import { FC, useEffect, useReducer } from 'react';
import { useDataStore } from '../store';
import { useParams } from 'react-router-dom';
import { Header, Subject } from '../components/Header';
import { quizReducer } from '../hooks/quizReducer.tsx';
import { Score, QuizListChoice } from '../components/Quiz';
import { backgroundColorIcon } from '../store/themeStore.tsx';

/**
 * Initial state for the quiz page.
 */
const initialState = {
    currentQuestionIndex: 0,
    selectedOption: '',
    isSubmit: false,
    isCorrect: false,
    score: 0,
    showError: false,
};

/**
 * The QuizPage component renders a quiz page that displays a quiz based on the route parameters.
 *
 * @component
 * @example
 * return (
 *   <QuizPage />
 * )
 */
export const QuizPage: FC = () => {
    /**
     * Manages state for the quiz using the `useReducer` hook.
     */
    const [state, dispatch] = useReducer(quizReducer, initialState);

    /**
     * Retrieves the `index` parameter from the URL and parses it as an integer.
     */
    const params = useParams();
    const quizIndex = params.index ? parseInt(params.index, 10) : 0;

    /**
     * Accesses quizzes from the data store.
     */
    const { quizzes } = useDataStore();
    const quiz = quizzes[quizIndex];

    /**
     * Effect hook that resets the state of the quiz when the `quizIndex` changes.
     */
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
                <div className={"flex flex-row justify-between items-center"}>
                    <Header>
                        {/* Subject header with dynamic background color. */}
                        <Subject
                            icon={quiz.icon}
                            title={quiz.title}
                            backgroundColor={backgroundColorIcon[quizIndex % backgroundColorIcon.length]}
                        />
                    </Header>
                </div>
                {/* Conditionally render QuizListChoice or Score component based on the quiz state. */}
                {quizzes.length > 0 && state.currentQuestionIndex < 10 ?
                    <QuizListChoice
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
            {/* Loading message if no quizzes are available. */}
            {!quizzes.length && <div>Loading...</div>}
        </>
    );
};
