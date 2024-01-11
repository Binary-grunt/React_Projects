
import {FC} from "react";
import {useThemeStore, useDataStore} from "../../store";
import {Subject, Title} from "../Header";
import {ButtonSubmit} from "../Button";
import {useNavigate} from "react-router-dom";

type ScoreFinalProps = {
    score: number,
    backgroundColorIcon: string[],
    quizIndex: number,
    quizQuestionLength: number,
}
export const Score: FC<ScoreFinalProps> = ({ score, backgroundColorIcon, quizIndex, quizQuestionLength}) => {
    const { themeButton, subTextColor } = useThemeStore();
    const { quizzes } = useDataStore();
    const navigate = useNavigate();
    const quiz = quizzes[quizIndex];

    const handlePlayAgainClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className={`flex flex-col justify-items-center pt-10 
                        md:pt-14 xl:flex-row xl:gap-24 xl:pt-24`}>
                <Title content={'QuizChoice completed'} contentBold={'You scored...'}/>
                <div className={'items-center justify-center flex-col flex '}>
                    <div className={` font-rubik shadow-lg rounded-xl items-center justify-center p-12 flex-col`}
                         style={{backgroundColor: themeButton}}>
                        <Subject
                            icon={quiz.icon}
                            title={quiz.title}
                            backgroundColor={backgroundColorIcon[quizIndex % backgroundColorIcon.length]}
                        />
                        <div className="text-center pt-5">
                            <div className="text-7xl pt-4 md:text-9xl md:pt-9">{score}</div>
                            <p className="pt-4 md:text-2xl" style={{color: subTextColor}}>out of {quizQuestionLength}</p>
                        </div>
                    </div>
                    <ButtonSubmit content={'Play Again'} onSubmitClick={handlePlayAgainClick}/>
                </div>
            </div>
        </>
    );
};
