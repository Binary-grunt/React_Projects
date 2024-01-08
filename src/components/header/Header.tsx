import {SubjectTitle} from "../startmenu/SubjectTitle.tsx";
import {ThemeToggleButton} from "../theme/ThemeToggleButton.tsx";


export const Header = () => {
    const subject = false;

    return (
        <>
            <div className={"flex justify-around p-8"}>
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
