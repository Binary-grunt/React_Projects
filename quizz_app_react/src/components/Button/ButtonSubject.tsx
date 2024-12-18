import { FC } from "react";
import { useThemeStore } from "../../store";

type ButtonSubjectProps = {
    icon: string;
    titleSubject: string;
    backgroundColor: string;
    onClickSubject: () => void
};

export const ButtonSubject: FC<ButtonSubjectProps> = (
    { icon, titleSubject, backgroundColor, onClickSubject }) => {
    const { themeButton } = useThemeStore();

    return (
        <div className={'flex flex-col'}>
            {titleSubject && (
                <button
                    style={{ backgroundColor: themeButton }}
                    className="flex flex-row items-center rounded-2xl my-3 p-5 shadow-lg "
                    onClick={onClickSubject}
                >
                    {icon && (
                        <img
                            src={icon}
                            alt={`${titleSubject} icon`}
                            className={'rounded-lg p-2'}
                            style={{ backgroundColor }}
                        />
                    )}
                    <div className={'ml-2 font-rubik text-lg pl-2 md:text-2xl'}>{titleSubject}</div>
                </button>
            )}
        </div>
    );
};
