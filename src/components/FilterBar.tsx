import type { LogoPropsTypes } from "../types/types";
import Button from "./common/Button";



const buttonstates = ["All" , "Active" , "Inactive"];



function FilterBar (props : LogoPropsTypes) {
    return (
         <header className= "flex items-center justify-between">
            <h2 className={`text-3xl font-bold dark:text-neutral-50 text-neutral-900 ${props.theme} `}>Extensions List</h2>
            <div className="flex items-center gap-4">
                {
                buttonstates.map((state , index)=> (
                    <Button  key={index} label={state}/>
                ))
                }
            </div>
          </header>
    )
}


export default FilterBar;