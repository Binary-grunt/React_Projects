import {Subject} from "./Subject.tsx";
import {ThemeToggleButton} from "../../themes/ThemeToggleButton.tsx";


export const Header = () => {
    const subject = false;

    return (
        <>
            <div className={"flex justify-around p-8"}>
                <div className={subject ? '' : 'invisible'}>
                    <Subject icon={'Test'} title={'ACCESSIBILTY'}/>
                </div>
                <div>
                    <ThemeToggleButton/>
                </div>
            </div>
        </>
    );
};
