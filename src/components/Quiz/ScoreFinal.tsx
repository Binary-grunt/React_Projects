import {Title} from "../Header/Title.tsx";
import {FC, ReactNode} from "react";
import {ButtonSubmit} from "../Button/ButtonSubmit.tsx";

type ScoreFinalProps = {
    score: number,
    children: ReactNode,
    quizQuestionLength: number,
}
export const ScoreFinal:FC<ScoreFinalProps> = ({score, children, quizQuestionLength}) => {
    return (
        <>
            <Title content={'Quiz completed'} contentBold={'You scored...'}/>

            <div>
                <div>
                {children}
                </div>
                <div>
                    <div>
                        <span>{score}</span>
                        <p>out of {quizQuestionLength}</p>
                    </div>
                </div>
                <ButtonSubmit
                    content={'Play again'}
                />
            </div>
        </>
    );
};
