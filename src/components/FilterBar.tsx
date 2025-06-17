import type { LogoPropsTypes } from "../types/types";
import Button from "./common/Button";



const buttonstates = ["All" , "Active" , "Inactive"];



function FilterBar (props : LogoPropsTypes) {
    return (
         <header className= " flex flex-col gap-4 sm:gap-0 sm:flex-row  items-center justify-between">
            <h2 className={`text-xl sm:text-3xl font-bold dark:text-neutral-50 text-neutral-900 ${props.theme} `}>Extensions List</h2>
            <div className="flex items-center gap-4">
                {
                buttonstates.map((state , index)=> (
                    <Button theme={props.theme}  key={index} label={state}/>
                ))
                }
            </div>
          </header>
    )
}


export default FilterBar;