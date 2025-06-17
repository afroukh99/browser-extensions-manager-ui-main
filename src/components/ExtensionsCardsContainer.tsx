import { useEffect, useState } from "react";
import type { ExtensionType } from "../types/types";
import ExtensionCard from "./ExtensionCard"







function ExtensionsCardsContainer(props : {theme : string}) {


    const [data, setData] = useState<ExtensionType[]>([])


    useEffect(() => {
        fetch("public/data/data.json")
            .then((res) => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <section className="flex items-center justify-between flex-wrap gap-y-4">
            {
                data.map((exetension , index) => (
                    <ExtensionCard {...exetension}/>
                ))
            }
        </section>
    )
}



export default ExtensionsCardsContainer;