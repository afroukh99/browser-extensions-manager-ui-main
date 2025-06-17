import {  useState } from "react";
import Button from "./common/Button"
import type { ExtensionType } from "../types/types";
import { useAppContext } from "../hooks/useAppContext";




function ExtensionCard(props: ExtensionType ) {


    const {theme} = useAppContext()
    const {description, isActive,logo ,name} = props;
    const [enabled, setEnabled] = useState<boolean>(false);



    return (
        <article className="w-full  sm:w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1rem)] h-44 bg-neutral-50 dark:bg-neutral-800   p-3 rounded-xl border border-neutral-200 dark:border-neutral-600 flex flex-col justify-between  ">
            <div className="flex gap-3">
                <img className="size-14 object-cover"
                    src={'./src/'+logo}
                    alt={name + "img"} />
                <div className="">
                    <h3 className="text-base md:text-lg  lg:text-xl font-bold dark:text-neutral-0 text-neutral-900">{name}</h3>
                    <p className="text-sm xl:text-base dark:text-neutral-300 text-neutral-500 mt-1">{description}</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <Button label="Remove" theme={theme} styles="px-2 py-1.5 text-xs sm:text-sm" />
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isActive} onChange={() => setEnabled(!isActive)} className="sr-only peer" />
                    <div className="w-11 h-6 dark:bg-neutral-700 bg-neutral-300 peer-checked:bg-red-500 rounded-full transition-all"></div>
                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-full transition-all"></div>
                </label>
            </div>
        </article>
    )
}


export default ExtensionCard