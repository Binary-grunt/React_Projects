import {Title} from "../components/Header/Title.tsx";
import {ButtonSubject} from "../components/Button/ButtonSubject.tsx";
import {useDataStore} from "../store/dataStore.tsx";
import {Header} from "../components/Header/Header.tsx";


enum StartTitle {
    content = "Welcome to the",
    contentBold = "Frontend Quiz!",
    subTitle = 'Pick a subject to get started'
}

export const StartMenuPage = () => {
    const {quizzes} = useDataStore();
    const backgroundColorIcon = ['#FFF1E9', '#E0FDEF','#EBF0FF','#F6E7FF'];
    return (
        <>
        <Header/>
            <div className={'flex flex-col gap-10 pt-4 m-2'}>
                <Title
                    content={StartTitle.content}
                    contentBold={StartTitle.contentBold}
                    subTitle={StartTitle.subTitle}
                />
                <div className={"flex flex-col justify-center"}>
                    {quizzes.map((quiz, index) => (
                        <ButtonSubject
                            icon={quiz.icon}
                            key={index}
                            titleSubject={quiz.title}
                            backgroundColor={backgroundColorIcon[index % backgroundColorIcon.length]}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
