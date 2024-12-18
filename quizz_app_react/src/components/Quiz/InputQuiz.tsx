import {FC} from "react";
import {useThemeStore} from "../../store";
import {CorrectIcon, IncorrectIcon} from  "../../assets/images";


type ButtonQuizProps = {
    options: string[];
    selectedOption: string | null;
    isSubmit: boolean | null;
    isCorrect: boolean | null;
    onChangeClick: (e:string) => void;
};
const letters = ['A','B','C','D'];
export const InputQuiz:FC<ButtonQuizProps> = ({selectedOption, options, isSubmit, isCorrect, onChangeClick}) => {
    const { themeButton } = useThemeStore();
    const verifyColor = (option:string) => {
        if (isSubmit && selectedOption === option && isCorrect !== null) {
            return isCorrect ? 'ring-2 ring-green-400' : 'ring-2 ring-red-600';
        } return '';
    };
    const verifyBackground = (option: string) => {
        if (isSubmit && selectedOption === option && isCorrect !== null){
            return isCorrect ? 'bg-green-400 text-slate-50 ': 'bg-red-600 text-slate-50' ;
        }
        return 'bg-gray-100 text-slate-600';
    }
    const notSubmit = 'hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300';

    return (
        <>
            {options.map((option, index) => (
                <button
                    type='button'
                    key={index}
                    style={{ backgroundColor: themeButton }}
                    className={`${verifyColor(option)} 
                    ${isSubmit ? 'cursor-not-allowed' : notSubmit} flex flex-row items-center place-content-between rounded-2xl my-2 p-3 shadow-lg md:p-3 md:my-3 xl:p-5`}
                    onClick={() => !isSubmit && onChangeClick(option)}
                >
                    <div className={'flex flex-row items-center'}>
                        <div
                            className={`${verifyBackground(option)} rounded-lg p-2 text-xl shadow-lg items-center font-rubik w-12 h-12 md:w-14 md:text-2xl md:h-14 xl:h-13`}>
                            <p className={'mt-0.5 md:mt-1'}>{letters[index % letters.length]}</p>
                        </div>
                        <div className="ml-2 pl-3 font-rubik text-xl md:text-2xl xl:pl-7">
                            {option}
                        </div>
                    </div>
                    <div>
                        {isSubmit && isCorrect && selectedOption === option && <img src={CorrectIcon} alt="correct-answer-icon"/>}
                        {isSubmit && !isCorrect && selectedOption === option && <img src={IncorrectIcon} alt="incorrect-answer-icon"/>}
                    </div>

                </button>
            ))}
        </>
    );
};
