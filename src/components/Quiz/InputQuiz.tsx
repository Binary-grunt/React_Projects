import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";

type ButtonQuizProps = {
    backgroundColor: string;
    options: string[];
    selectedOption: string | null;
    isSubmit: boolean | null;
    isCorrect: boolean | null;
    onChangeClick: (e:string) => void;
};
export const InputQuiz:FC<ButtonQuizProps> = ({backgroundColor, selectedOption, options, isSubmit, isCorrect, onChangeClick}) => {
    const { themeButton } = useThemeStore();
    const letters = ['A','B','C','D'];

    const verifyColor = (option:string) => {
        if (isSubmit && selectedOption === option && isCorrect !== null) {
            return isCorrect ? 'border-2 border-green-500' : 'border-2 border-red-500';
        }
        return '';
    };

    return (
        <>
            {options.map((option, index) => (
                <button
                    type='button'
                    key={index}
                    style={{ backgroundColor: themeButton }}
                    className={`flex flex-row items-center rounded-xl my-2 p-3 shadow-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300
                     ${verifyColor(option)} `}
                    onClick={() => onChangeClick(option)}
                >
                    <div
                        className={'rounded-lg p-2 text-xl shadow-lg font-rubik w-10 '}
                        style={{ backgroundColor, color: '#626C7F'}}>
                        {letters[index % letters.length]}
                    </div>
                    <div className="ml-2 font-rubik text-lg pl-2">
                        {option}
                    </div>
                </button>
            ))}
        </>
    );
};
