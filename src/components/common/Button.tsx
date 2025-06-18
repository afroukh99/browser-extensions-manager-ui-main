import type { ButtonPropsType } from "../../types/types";

function Button({ label, theme, styles, onClick, filter }: ButtonPropsType) {
  const isActive = filter?.toLowerCase() === label.toLowerCase();

  return (
    <button
      onClick={() => onClick?.(label.toLowerCase())}
      className={`
        ${styles ?? "text-xs sm:text-base py-2 px-4"}
        font-[500] rounded-4xl border border-neutral-200 dark:border-neutral-600 cursor-pointer
        bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-0
        focus-visible:bg-neutral-600 focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900
        ${isActive ? "bg-red-500 text-neutral-0 dark:text-neutral-900 dark:bg-red-500 border-0" : ""}
        ${theme}
      `}
    >
      {label}
    </button>
  );
}

export default Button;
