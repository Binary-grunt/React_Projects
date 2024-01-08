import {FC} from "react";

type SubjectTitleType = {
    icon: string,
    title: string
}
export const SubjectTitle: FC <SubjectTitleType> = ({icon, title}) => {
    return (
        <>
            <div className={'flex flex-row'}>
                <img src={icon} alt={title}/>
                <h2>{title}</h2>
            </div>

        </>
    );
};
