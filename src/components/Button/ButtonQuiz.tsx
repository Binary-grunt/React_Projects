import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";

type ButtonQuizProps = {
    options: string[];
    backgroundColor: string;
    onChangeClick: (e:never) => void;
};
export const ButtonQuiz:FC<ButtonQuizProps> = ({options, backgroundColor, onChangeClick}) => {
    const { themeButton } = useThemeStore();
    const letters = ['A','B','C','D'];

    return (
        <>
            {options.map((option, index) => (
                <button
                    key={index}
                    style={{ backgroundColor: themeButton }}
                    className="flex flex-row items-center rounded-xl  my-2 p-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                    value={option}
                    onClick={onChangeClick}
                >
                    <div
                        className={'rounded-lg p-2 text-xl font-rubik w-10 '}
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
