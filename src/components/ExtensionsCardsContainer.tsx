import ExtensionCard from "./ExtensionCard";
import type { ExtensionType } from "../types/types";
import { useAppContext } from "../hooks/useAppContext";

function ExtensionsCardsContainer() {
  const { data } = useAppContext();


  if (!data || data.length === 0) {
    return <p className="text-center w-full font-bold text-shadow-neutral-900 dark:text-neutral-400">No extensions found.</p>;
  }

  return (
    <section className="flex items-center justify-between flex-wrap gap-y-4 gap-x-4">
      {data.map((extension : ExtensionType) => (
        <ExtensionCard key={extension.name} {...extension} />
      ))}
    </section>
  );
}

export default ExtensionsCardsContainer;
