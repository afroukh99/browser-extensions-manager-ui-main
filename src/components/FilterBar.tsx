import { useAppContext } from "../hooks/useAppContext";
import { FilterState } from "../types/types";
import Button from "./common/Button";

const buttonStates = ["All", "Active", "Inactive"];

function FilterBar() {
  const { theme ,setFilter , filter} = useAppContext();

  function handleFilter(label: string) {
    const lower = label.toLowerCase();
    if (lower === FilterState.Active) setFilter(FilterState.Active);
    else if (lower === FilterState.Inactive) setFilter(FilterState.Inactive);
    else setFilter(FilterState.All);
  }

  return (
    <header className="flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between">
      <h2 className={`text-xl sm:text-3xl font-bold dark:text-neutral-50 text-neutral-900 ${theme}`}>
        Extensions List
      </h2>
      <div className="flex items-center gap-4">
        {buttonStates.map((state, index) => (
          <Button
            key={index}
            label={state}
            theme={theme}
            filter={filter}
            onClick={handleFilter}
          />
        ))}
      </div>
    </header>
  );
}

export default FilterBar;
