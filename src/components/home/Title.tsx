import {FC} from "react";

type Title = {
    content: string,
    contentBold: string
}
export const Title:FC<Title>= ({content, contentBold}) => {
    return (
        <>
            <h1>{content}
                <br/>
                <strong>{contentBold}</strong>
            </h1>
        </>
    );
};
