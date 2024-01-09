import { FC } from "react";
import { useThemeStore } from "../../store/themeStore.tsx";

type ButtonSubjectProps = {
    icon: string;
    titleSubject: string;
    backgroundColor: string;
};

export const ButtonSubject: FC<ButtonSubjectProps> = (
    { icon, titleSubject, backgroundColor }) => {
    const { themeButton } = useThemeStore();

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
        </div>
    );
};
