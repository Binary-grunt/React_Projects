import {FC} from "react";
import {useThemeStore} from "../../store";

type QuestionQuizProps = {
    currentIndexQuestion: number,
    quizQuestionLength: number,
    quizQuestion: string,
}
export const QuestionQuiz:FC<QuestionQuizProps> = (
    {currentIndexQuestion, quizQuestionLength, quizQuestion }) => {
    const {subTextColor} = useThemeStore();
    return (
        <>
            <div>
                <p style={{color: subTextColor}}
                   className={'font-rubik italic font-light md:text-2xl'}
                >
                    Question {currentIndexQuestion + 1} of {quizQuestionLength}
                </p>
                <h2 className={'text-xl pt-5 font-rubik md:text-4xl'}>
                    {quizQuestion}
                </h2>
            </div>
        </>
    );
};
