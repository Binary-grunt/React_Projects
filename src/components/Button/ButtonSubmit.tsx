import {FC} from "react";

type ButtonSubmitProps = {
    onSubmitClick: () => void;
}
export const ButtonSubmit:FC<ButtonSubmitProps> = ({onSubmitClick}) => {
    return (
        <>
            <button
                type='submit'
                style={{color: '#FFF'}}
                className={'bg-violet-600 rounded-xl my-2 p-3 font-rubik text-lg'}
                onClick={onSubmitClick}
            >
                Submit Answer
            </button>
        </>
    );
};
