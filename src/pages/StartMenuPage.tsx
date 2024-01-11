import {Title} from "../components/Header";
import {ButtonSubject} from "../components/Button";
import {useDataStore} from "../store";
import {Header} from "../components/Header";
import {useNavigate} from "react-router-dom";
import {backgroundColorIcon} from "../store/themeStore.tsx";


enum StartTitle {
    content = "Welcome to the",
    contentBold = "Frontend Quiz!",
    subTitle = 'Pick a subject to get started'
}


export const StartMenuPage = () => {
    const {quizzes} = useDataStore();
    const navigate = useNavigate();
    const handleSubjectClick = (index: number) => {
        navigate(`/${index}`);
    };

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
                            onClickSubject={() => handleSubjectClick(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
