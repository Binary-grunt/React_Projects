import {FC} from "react";
import {useThemeStore} from "../../store/themeStore.tsx";

type ProgressBarProps = {
    progress: number
}
export const ProgressBar:FC<ProgressBarProps> = ({progress}) => {
    const { themeButton } = useThemeStore();
    const widthStyle = { width: `${10 + progress * 10}%` };

    return (
        <>
            <div
                className="bg-gray-200 rounded-full h-3 dark:bg-gray-700 shadow-lg"
                style={{backgroundColor: themeButton }}
            >
                <div
                    className="bg-violet-600 h-3 rounded-full transition-all duration-300"
                    style={widthStyle}
                ></div>
            </div>
        </>
    );
};
