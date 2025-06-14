import type { ButtonPropsType } from "../../types/types";



function handleActiveBtn(e: React.MouseEvent<HTMLButtonElement>) {

    const clickedBtn = e.currentTarget;

    const allBtns = document.querySelectorAll("button")
    allBtns.forEach(btn => btn.classList.remove("active"))

    clickedBtn.classList.add("active");

}


function Button(buttonProps: ButtonPropsType) {
    return (
        <button
            onClick={handleActiveBtn}
            className="text-md font-[500] py-2 px-4 rounded-2xl border border-neutral-600 cursor-pointer 
                    bg-neutral-50 dark:bg-neutral-800  dark:text-neutral-0 dark
                    "
        >
            {buttonProps.label}
        </button>
    )
}

export default Button