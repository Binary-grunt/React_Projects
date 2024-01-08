import { FC } from "react";
import {useThemeStore} from "../../../store/themeStore.tsx";
type ButtonQuiz = {
    icon: string,
    titleSubject: string,
    backgroundColor: string,
}

export const ButtonQuiz: FC<ButtonQuiz> = ({ icon, titleSubject, backgroundColor }) => {
    const {themeButton} = useThemeStore();


    return (
        <button
            style={{backgroundColor:themeButton}}
            className="flex flex-row items-center buttonquiz rounded-xl mx-6 my-2 p-3"
        >
            <img src={icon}
                 alt={`${titleSubject} icon`}
                 className={'rounded-lg p-2'}
                 style={{backgroundColor: backgroundColor}}
            />
            <p className="ml-2 font-rubik text-xl pl-2">{titleSubject}</p>
        </button>
    );
};
