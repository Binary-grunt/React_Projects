import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";

type Title = {
    content: string,
    contentBold: string
}
export const Title:FC<Title>= ({content, contentBold}) => {
    const {subTextColor} = useThemeStore();
    return (
        <>
            <div className={'flex flex-col font-rubik font-light gap-3 m-7'}>
                <div className={'text-5xl font-rubik'}> <h1>{content}</h1>
                    <div className={'font-rubik font-normal'}>
                    {contentBold}
                    </div>
                </div>
                <p style={{color: subTextColor}} className={'font-rubik italic'}>Pick a subject to get started</p>
            </div>

        </>
    );
};
