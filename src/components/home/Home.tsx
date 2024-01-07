import {Title} from "./Title.tsx";
import {ButtonQuiz} from "../buttons/ButtonQuiz.tsx";
import {useDataStore} from "../../store/dataStore.tsx";


enum StartTitle {
    content = "Welcome to the",
    contentBold = "Frontend Quiz!"
}
enum EndTitle {
    content = "Quiz completed",
    contentBold = 'You scored...'
}

export const Home = () => {
    const statut = false;
    const {quizzes} = useDataStore();
    return (
        <>
            {!statut ?
                <Title content={StartTitle.content} contentBold={StartTitle.contentBold}/>
                :
                <Title content={EndTitle.content} contentBold={EndTitle.contentBold}/> }
            <div>
                {quizzes.map((quizz, index) => (
                    <ButtonQuiz icon={quizz.icon} key={index} titleSubject={quizz.title}/>
                ))}

            </div>
        </>
    );
};
