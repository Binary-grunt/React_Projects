import {FC} from "react";

type SubjectTitleType = {
    icon: string,
    title: string
    backgroundColor: string,
}
export const Subject: FC <SubjectTitleType> = ({icon, title, backgroundColor}) => {
    return (
        <>
            <div className={'flex flex-row content-center font-rubik font-normal items-center'}>
                <img className={'rounded-lg p-2 mr-4 size-12'} src={icon} alt={title} style={{backgroundColor }}/>
                <h2 className={'text-xl'}>{title}</h2>
            </div>

        </>
    );
};
