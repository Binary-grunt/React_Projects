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
                className={'bg-violet-600 rounded-2xl my-3 p-5 font-rubik text-lg shadow-lg ' +
                    'md:text-3xl md:my-5 md:p-8'}
                onClick={onSubmitClick}
            >
                {content}
            </button>
        </>
    );
};
