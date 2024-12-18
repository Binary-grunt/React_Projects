import {QuestionQuiz} from "./QuestionQuiz.tsx";
import {ProgressBar} from "./ProgressBar.tsx";
import {InputQuiz} from "./InputQuiz.tsx";
import {ButtonSubmit} from "../Button";
import {useDataStore} from "../../store";
import {FC, FormEvent} from "react";
import {ActionType, InitialState} from "../../hooks/quizReducer.tsx";
import {IncorrectIcon} from "../../assets/images";

type QuizProps = {
    state: InitialState,
    quizIndex: number,
    dispatch: (action: ActionType) => void
}
export const QuizListChoice:FC<QuizProps> = ({state, quizIndex, dispatch}) => {
    const { quizzes } = useDataStore();
    const quiz = quizzes[quizIndex];
    const question = quiz.questions[state.currentQuestionIndex];

    const handleOptionClick = (option: string) => {
        dispatch({ type: 'SELECT_OPTION', payload: option });
    };

    const handleSubmitAnswer = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isCorrect = state.selectedOption === question.answer;
        dispatch({ type: 'SUBMIT_ANSWER', payload: isCorrect });
    };

    const handleNextQuestion = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.isSubmit && state.currentQuestionIndex < quiz.questions.length - 1 || state.currentQuestionIndex === 9) {
            dispatch({ type: 'NEXT_QUESTION'});
        }
    };
    return (
        <>
            <div className={`flex flex-col justify-items-center pt-10 
                        md:pt-14
                        xl:flex xl:flex-row xl:justify-between xl:pt-20 xl:gap-18`}>
                <div className={''}>
                    <QuestionQuiz
                        currentIndexQuestion={state.currentQuestionIndex}
                        quizQuestionLength={quiz.questions.length}
                        quizQuestion={question.question}
                    />
                    <div className={'pt-6 md:pt-10 xl:pt-44'}>
                        <ProgressBar progress={state.currentQuestionIndex}/>
                    </div>
                </div>
                <form onSubmit={handleNextQuestion} className={`flex flex-col pt-10 
                            md:pt-14 xl:pt-0`}>
                    <InputQuiz
                        selectedOption={state.selectedOption}
                        options={question.options}
                        isCorrect={state.isCorrect}
                        isSubmit={state.isSubmit}
                        onChangeClick={handleOptionClick}
                    />
                    {!state.isSubmit ? <ButtonSubmit
                        content={'Submit Answer'}
                        onSubmitClick={handleSubmitAnswer}
                    /> : <ButtonSubmit
                        content={'Next Question'}
                    />
                    }
                    {state.showError &&
                        <div className="font-rubik font-light flex flex-row items-center justify-center">
                           <img src={IncorrectIcon} alt='Incorrect Icon' className={'pr-1'}/>
                            Please select an answer
                        </div>}
                </form>

            </div>
        </>
    );
};
