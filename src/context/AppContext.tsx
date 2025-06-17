import { createContext, useEffect, useState } from "react";
import type { ExtensionType, ContextType } from "../types/types";


export const AppContext = createContext<ContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  const [data, setData] = useState<ExtensionType[]>([]);



  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    fetch("public/data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Failed to fetch extensions", err));
  }, []);

  const getActiveExtensions = () =>
    data.filter((extension) => extension.isActive);

  const getInactiveExtensions = () =>
    data.filter((extension) => !extension.isActive);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        data,
        getActiveExtensions,
        getInactiveExtensions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
