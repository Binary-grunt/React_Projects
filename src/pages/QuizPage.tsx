import {ChangeEvent, FC, FormEvent, useState} from 'react';
import { useDataStore } from '../store/dataStore';
import {ButtonQuiz} from "../components/Button/ButtonQuiz.tsx";
import {Header} from "../components/Header/Header.tsx";
import {useThemeStore} from "../store/themeStore.tsx";
import {Subject} from "../components/Header/Subject.tsx";
import {ProgressBar} from "../components/Quiz/ProgressBar.tsx";
import {QuestionQuiz} from "../components/Quiz/QuestionQuiz.tsx";
import {ButtonSubmit} from "../components/Button/ButtonSubmit.tsx";

type QuizPageProps = {
    index?: number,
}

export const QuizPage:FC<QuizPageProps> = ({index = 1}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [select, setSelect] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const { quizzes } = useDataStore();
    const {subTextColor} = useThemeStore();

    const backgroundColorIcon: string[] = ['#FFF1E9', '#E0FDEF','#EBF0FF','#F6E7FF'];

    const quiz = quizzes[index];
    const question = quiz.questions[currentQuestionIndex];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelect(e.target.value)
    }
    const handleSubmitAnswer = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (select === undefined || select === null) {
            console.log('No answer selected');
            return;
        }
        if (select === question.answer) {
            console.log('Good');
        } else {
            console.log('Not good');
        }

        console.log(`select: ${select}`);
        console.log(`answer: ${question.answer}`);
        setIsAnswered(true);
    };

    const handleNextQuestion = () => {
        if (!isAnswered) {
            return;
        } else if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <>
            {quizzes.length > 0 &&
                <div className={'flex-col flex justify-center '}>
                    <Header>
                        <Subject
                            icon={quiz.icon}
                            title={quiz.title}
                            backgroundColor={backgroundColorIcon[index % backgroundColorIcon.length]}
                        />
                    </Header>
                    <div className={'flex flex-col justify-items-center mx-6 pt-14'}>
                        <QuestionQuiz
                            subTextColor={subTextColor}
                            currentIndexQuestion={currentQuestionIndex}
                            quizQuestionLength={quiz.questions.length}
                            quizQuestion={question.question}
                        />
                        <ProgressBar progress={currentQuestionIndex}/>
                        <form onSubmit={handleSubmitAnswer} className={'flex flex-col pt-8'}>
                            <ButtonQuiz
                                backgroundColor={'#F4F6FA'}
                                options={question.options}
                                onChangeClick={handleChange}
                            />
                            <ButtonSubmit onSubmitClick={handleNextQuestion}/>
                        </form>
                    </div>
                </div>
            }
            {!quizzes.length &&
            <div>Loading...</div>}
        </>
    );
};
