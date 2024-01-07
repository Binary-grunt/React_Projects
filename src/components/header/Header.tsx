import {SubjectTitle} from "./SubjectTitle.tsx";
import {ThemeToggleButton} from "./ThemeToggleButton.tsx";


export const Header = () => {
    const subject = false;

    return (
        <>
            <div className={"flex justify-around p-5"}>
                <div className={subject ? '' : 'invisible'}>
                    <SubjectTitle icon={'Test'} title={'ACCESSIBILTY'}/>
                </div>
                <div>
                    <ThemeToggleButton/>
                </div>
            </div>
        </>
    );
};
