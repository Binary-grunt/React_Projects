import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";
import correctAnswerIcon from './../../assets/images/icon-correct.svg'
import incorrectAnswerIcon from './../../assets/images/icon-incorrect.svg'

type ButtonQuizProps = {
    options: string[];
    selectedOption: string | null;
    isSubmit: boolean | null;
    isCorrect: boolean | null;
    onChangeClick: (e:string) => void;
};
export const InputQuiz:FC<ButtonQuizProps> = ({selectedOption, options, isSubmit, isCorrect, onChangeClick}) => {
    const { themeButton } = useThemeStore();
    const letters = ['A','B','C','D'];


    const verifyColor = (option:string) => {
        if (isSubmit && selectedOption === option && isCorrect !== null) {
            return isCorrect ? 'ring-2 ring-green-400' : 'ring-2 ring-red-600';
        }
        return '';
    };

    const verifyBackground = (option: string) => {
        if (isSubmit && selectedOption === option && isCorrect !== null){
            return isCorrect ? 'bg-green-400 text-slate-50 ': 'bg-red-600 text-slate-50' ;
        }
        return 'bg-gray-100 text-slate-600';
    }

    return (
        <>
            {options.map((option, index) => (
                <button
                    type='button'
                    key={index}
                    style={{ backgroundColor: themeButton }}
                    className={`flex flex-row place-content-between items-center rounded-xl my-2 p-3 shadow-lg  
                     ${verifyColor(option)} ${isSubmit ? 'cursor-not-allowed' : 'hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'}`}
                    onClick={() => !isSubmit && onChangeClick(option)}
                >
                    <div
                        className={`${verifyBackground(option)} rounded-lg p-2 text-xl shadow-lg font-rubik w-10 `}>
                        {letters[index % letters.length]}
                    </div>
                    <div className="ml-2 font-rubik text-lg">
                        {option}
                    </div>
                    <div>
                        {isSubmit && isCorrect && selectedOption === option && <img src={correctAnswerIcon} alt="correct-answer-icon"/>}
                        {isSubmit && !isCorrect && selectedOption === option && <img src={incorrectAnswerIcon} alt="incorrect-answer-icon"/>}
                    </div>

                </button>
            ))}
        </>
    );
};
