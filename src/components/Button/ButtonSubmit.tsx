import {FC} from "react";

type ButtonSubmitProps = {
    content: string;
    onSubmitClick?: (e:never) => void;
}
export const ButtonSubmit:FC<ButtonSubmitProps> = ({ onSubmitClick, content}) => {
    return (
        <>
            <button
                type='submit'
                style={{color: '#FFF'}}
                className={'bg-violet-600 rounded-xl my-3 p-4 font-rubik text-lg shadow-lg'}
                onClick={onSubmitClick}
            >
                {content}
            </button>
        </>
    );
};
