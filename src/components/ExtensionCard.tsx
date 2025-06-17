import { useState } from "react";
import Button from "./common/Button"
import type { ExtensionType } from "../types/types";




function ExtensionCard(props: ExtensionType ) {

    const {description, isActive,logo ,name} = props;
    const [enabled, setEnabled] = useState<boolean>(false);


    return (
        <article className="bg-neutral-50 dark:bg-neutral-800   p-3 rounded-xl border border-neutral-600 flex flex-col justify-between  w-full sm:max-w-[calc(33.333%-1rem)] h-44">
            <div className="flex gap-3">
                <img className="size-14 object-cover"
                    src={'./src/'+logo}
                    alt={name + "img"} />
                <div className="">
                    <h3 className="text-lg sm:text-xl font-bold dark:text-neutral-0 text-neutral-900">{name}</h3>
                    <p className="text-xs sm:text-sm text-neutral-300">{description}</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <Button label="Remove" theme={"dark"} styles="px-2 py-1.5 text-xs sm:text-sm" />
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={enabled} onChange={() => setEnabled(!enabled)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-700 peer-checked:bg-red-500 rounded-full transition-all"></div>
                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-full transition-all"></div>
                </label>
            </div>
        </article>
    )
}


export default ExtensionCard