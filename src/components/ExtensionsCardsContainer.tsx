import ExtensionCard from "./ExtensionCard";
import type { ExtensionType } from "../types/types";
import { useAppContext } from "../hooks/useAppContext";

function ExtensionsCardsContainer() {
  const {  getFilteredExtensions } = useAppContext();


  if (!getFilteredExtensions || getFilteredExtensions.length === 0) {
    return <p className="text-center w-full font-bold text-shadow-neutral-900 dark:text-neutral-400">No extensions found.</p>;
  }

  return (
    <section className="flex items-center  flex-wrap gap-5">
      {getFilteredExtensions.map((extension : ExtensionType) => (
        <ExtensionCard key={extension.name} {...extension} />
      ))}
    </section>
  );
}

export default ExtensionsCardsContainer;
