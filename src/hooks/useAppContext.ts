import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext error: This hook must be used inside an <AppContextProvider>. " +
      "Make sure your component is wrapped in the provider at a higher level in the component tree."
    );
  }

  return context;
}
