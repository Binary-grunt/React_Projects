import { FC } from "react";
import { useThemeStore } from "../../../store/themeStore.tsx";

type ButtonSubjectProps = {
    icon?: string;
    options?: string[];
    titleSubject?: string;
    backgroundColor: string;
};

export const ButtonSubject: FC<ButtonSubjectProps> = (
    { icon, titleSubject, options, backgroundColor }) => {
    const { themeButton } = useThemeStore();
    const letters = ['A','B','C','D'];
    return (
        <div className={'flex flex-col'}>
            {titleSubject && (
                <button
                    style={{ backgroundColor: themeButton }}
                    className="flex flex-row items-center rounded-xl mx-6 my-2 p-3"
                >
                    {icon && (
                        <img
                            src={icon}
                            alt={`${titleSubject} icon`}
                            className={'rounded-lg p-2'}
                            style={{ backgroundColor }}
                        />
                    )}
                    <span className={'ml-2 font-rubik font-semibold text-lg pl-2'}>{titleSubject}</span>
                </button>
            )}
            {options && options.map((option, index) => (
                <button
                    key={index}
                    style={{ backgroundColor: themeButton }}
                    className="flex flex-row items-center rounded-xl mx-6 my-2 p-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                >
                    <div
                        className={'rounded-lg p-2 text-xl font-rubik w-10 '}
                        style={{ backgroundColor, color: '#626C7F' }}>
                        {letters[index % letters.length]}
                    </div>
                    <div className="ml-2 font-rubik text-lg pl-2">
                        {option}
                    </div>
                </button>
            ))}
        </div>
    );
};
