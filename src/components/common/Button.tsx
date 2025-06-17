import { useEffect } from "react";
import type { ButtonPropsType } from "../../types/types";



function handleActiveBtn(e: React.MouseEvent<HTMLButtonElement>) {
    const clickedBtn = e.currentTarget;

    const allBtns = document.querySelectorAll("button");
    allBtns.forEach((btn) => btn.classList.remove("active"));

    clickedBtn.classList.add("active");
}

function Button(buttonProps: ButtonPropsType) {

    useEffect(() => {
        const allBtns = document.querySelectorAll("button");
        if (allBtns.length > 0) {
            allBtns[0].classList.add("active");
        }
    }, []);

    return (
        <button
            onClick={handleActiveBtn}
            className={`${buttonProps.styles ? buttonProps.styles   : 'text-xs sm:text-base py-2 px-4' }  font-[500]   rounded-4xl border border-neutral-200 dark:border-neutral-600 cursor-pointer 
                bg-neutral-50 dark:bg-neutral-800  dark:text-neutral-0 
                focus-visible:bg-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900
                ${buttonProps.theme}
                `}
        >
            {buttonProps.label}
        </button>
    );
}

export default Button;
