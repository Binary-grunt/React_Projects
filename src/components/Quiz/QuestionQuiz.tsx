import {FC} from "react";

type QuestionQuizProps = {
    subTextColor: string,
    currentIndexQuestion: number,
    quizQuestionLength: number,
    quizQuestion: string,
}
export const QuestionQuiz:FC<QuestionQuizProps> = (
    {subTextColor, currentIndexQuestion, quizQuestionLength, quizQuestion }) => {
    return (
        <>
            <div>
                <p style={{color: subTextColor}}
                   className={'font-rubik italic font-light'}
                >
                    Question {currentIndexQuestion + 1} of {quizQuestionLength}
                </p>
                <h2 className={'text-2xl pt-2 font-rubik'}>
                    {quizQuestion}
                </h2>
            </div>
        </>
    );
};
