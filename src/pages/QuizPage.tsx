import {FC, useState} from 'react';
import { useDataStore } from '../store/dataStore';
import {ButtonSubject} from "../components/Quiz/Buttons/ButtonSubject.tsx";
import {Header} from "../components/Header/Header.tsx";
import {useThemeStore} from "../store/themeStore.tsx";
import {Subject} from "../components/Header/Subject.tsx";

type QuizPageProps = {
    index?: number,
}

export const QuizPage:FC<QuizPageProps> = ({index = 3}) => {
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
            <Header>
                <Subject
                    icon={quiz.icon}
                    title={quiz.title}
                    backgroundColor={backgroundColorIcon[index % backgroundColorIcon.length]}
                />
            </Header>

                <div className={'flex flex-col p-3'}>
                    <div className={'pl-5'}>
                        <p style={{color: subTextColor}} className={'font-rubik italic font-light'}>
                            Question {currentQuestionIndex + 1} of {quiz.questions.length}
                        </p>
                        <h2 className={'text-2xl font-rubik'}>{question.question}</h2>
                    </div>
                    <div className={'flex flex-col'}>
                        <ButtonSubject
                            backgroundColor={'#F4F6FA'}
                            options={question.options}
                        />
                        <button
                            style={{backgroundColor: '#A729F5', color: '#FFF'}}
                            className={'rounded-xl mx-6 my-2 p-3 font-rubik text-lg pl-2'}
                            onClick={handleNextQuestion}>
                            Submit Answer
                        </button>
                    </div>
                </div>
        </>
    );
};
