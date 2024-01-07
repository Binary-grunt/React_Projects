import {FC} from "react";

type ButtonQuiz = {
    icon: string,
    titleSubject: string,
}
export const ButtonQuiz:FC<ButtonQuiz> = ({icon, titleSubject}) => {
    return (
        <>
            <div className={"flex flex-row border-solid border-2 border-sky-500 "}>
                <img src={icon} alt="icon" className={"border-2"}/>
            <button className={"transition ease-in-out delay-150"}>
                {titleSubject}
            </button>
            </div>
        </>
    );
};
