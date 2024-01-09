import {FC, useState} from 'react';
import { useDataStore } from '../store/dataStore';
import {ButtonSubject} from "../components/Button/ButtonSubject.tsx";
import {Header} from "../components/Header/Header.tsx";
import {useThemeStore} from "../store/themeStore.tsx";
import {Subject} from "../components/Header/Subject.tsx";
import {ProgressBar} from "../components/Quiz/ProgressBar.tsx";
import {QuestionQuiz} from "../components/Quiz/QuestionQuiz.tsx";

type QuizPageProps = {
    index?: number,
}

export const QuizPage:FC<QuizPageProps> = ({index = 1}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const { quizzes } = useDataStore();
    const {subTextColor} = useThemeStore();
    const backgroundColorIcon = ['#FFF1E9', '#E0FDEF','#EBF0FF','#F6E7FF'];

    if (quizzes.length === 0) return <div>Loading...</div>;

    const quiz = quizzes[index];
    const question = quiz.questions[currentQuestionIndex];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <>
            <div className={'flex-col flex justify-center '}>
            <Header>
                <Subject
                    icon={quiz.icon}
                    title={quiz.title}
                    backgroundColor={backgroundColorIcon[index % backgroundColorIcon.length]}
                />
            </Header>
            <div className={'flex flex-col justify-items-center mx-6'}>
                <QuestionQuiz
                    subTextColor={subTextColor}
                    currentIndexQuestion={currentQuestionIndex}
                    quizQuestionLength={quiz.questions.length}
                    quizQuestion={question.question}
                />
                <ProgressBar progress={currentQuestionIndex}/>
                <div className={'flex flex-col pt-8'}>
                    <ButtonSubject
                        backgroundColor={'#F4F6FA'}
                        options={question.options}
                    />
                    <button
                        style={{color: '#FFF'}}
                        className={'bg-violet-600 rounded-xl  my-2 p-3 font-rubik text-lg'}
                        onClick={handleNextQuestion}>
                        Submit Answer
                    </button>
                </div>
            </div>
            </div>
        </>
    );
};
