import {FC} from "react";
import {useThemeStore} from "../../store";

type Title = {
    content: string,
    contentBold: string
    subTitle?: string
}
export const Title:FC<Title>= ({content, contentBold, subTitle}) => {
    const {subTextColor} = useThemeStore();
    return (
        <>
            <div className={'flex flex-col font-rubik font-light'}>
                <div className={'text-5xl font-rubik md:text-7xl pb-4 xl:pb-10'}>
                    <h1>{content}</h1>
                    <div className={'font-rubik font-normal'} >
                    {contentBold}
                    </div>
                </div>
                {subTitle && <p style={{color: subTextColor}} className={'font-rubik italic'}>{subTitle}</p>}
            </div>
        </>
    );
};
