import { createContext, useEffect, useMemo, useState } from "react";
import { type ExtensionType, type ContextType, FilterState } from "../types/types";

export const AppContext = createContext<ContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  // Read persisted values from localStorage
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  const [filter, setFilterState] = useState<FilterState>(() => {
    const saved = localStorage.getItem("filter");
    if (saved === FilterState.Active || saved === FilterState.Inactive) return saved;
    return FilterState.All;
  });

  const [data, setData] = useState<ExtensionType[]>([]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const setFilter = (newFilter: FilterState) => {
    setFilterState(newFilter);
    localStorage.setItem("filter", newFilter);
  };

  // Fetch extensions data
  useEffect(() => {
    fetch("public/data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) =>
        console.error("Failed to fetch extensions:", err.message || err)
      );
  }, []);

  const getFilteredExtensions = useMemo(() => {
    switch (filter) {
      case FilterState.Active:
        return data.filter((ext) => ext.isActive);
      case FilterState.Inactive:
        return data.filter((ext) => !ext.isActive);
      default:
        return data;
    }
  }, [data, filter]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        filter,
        setFilter,
        getFilteredExtensions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
