import {Title} from "../Header/Title.tsx";
import {FC, ReactNode} from "react";
import {ButtonSubmit} from "../Button/ButtonSubmit.tsx";
import {useThemeStore} from "../../store/themeStore.tsx";

type ScoreFinalProps = {
    score: number,
    children: ReactNode,
    quizQuestionLength: number,
}
export const ScoreFinal: FC<ScoreFinalProps> = ({ score, children, quizQuestionLength }) => {
    const { themeButton } = useThemeStore();
    return (
        <>
            <Title content={'Quiz completed'} contentBold={'You scored...'}/>
            <div className="flex flex-col justify-center items-center p-6">
                <div className={`md:container md:mx-auto font-rubik shadow-lg rounded-xl flex flex-col items-center justify-center w-11/12 p-10`}
                     style={{backgroundColor: themeButton}}>
                    {children}
                    <div className="text-center pt-9">
                        <span className="text-6xl">{score}</span>
                        <p className="pt-4">out of {quizQuestionLength}</p>
                    </div>
                </div>
                <div>
                    <ButtonSubmit content={'Play again'}/>
                </div>
            </div>
        </>
    );
};
