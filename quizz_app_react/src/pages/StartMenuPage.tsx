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
            <div className={`flex-col flex justify-center mx-2 p-6
                 md:px-14 md:pt-12 md:mx-3
                 xl:pt-28 xl:mx-14 `}>
                <div className={'flex flex-row-reverse'}>
                    <Header/>
                </div>
                <div className={'xl:flex xl:flex-row xl:justify-between xl:w-12/12 xl:pt-20 xl:gap-18'}>
                <div className={'py-10 pt-6 xl:py-0'}>
                    <Title
                        content={StartTitle.content}
                        contentBold={StartTitle.contentBold}
                        subTitle={StartTitle.subTitle}
                    />
                </div>
                    <div className={'xl:pt-0 xl:w-6/12'}>
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
            </div>
        </>
    );
};
