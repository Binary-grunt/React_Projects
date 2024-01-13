import { useState } from "react";
import { IconCheck } from "../assets/images";

export const ButtonCheck = () => {
    const [check, setCheck] = useState(false);

    const handleChange = () => {
        setCheck(!check);
    };

    return (
        <button
            onClick={handleChange}
            className='h-6 w-6 bg-amber-400 rounded-2xl bg-gradient-to-br from-check-bg-start to-check-bg-end flex justify-center items-center'
        >
            {check && <img src={IconCheck} alt="Checked" />}
        </button>

    );
};
