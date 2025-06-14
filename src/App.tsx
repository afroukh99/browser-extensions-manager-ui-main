import { useState } from "react";
import Header from "./components/Header";
import ExtensionsContainer from "./components/ExtensionsCardsContainer";
import FilterBar from "./components/FilterBar";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || "dark");

  return (
    <div className={`w-full h-screen flex justify-center font-noto-sans 
      bg-(image:--gradient-light)  dark:bg-(image:--gradient-dark)  ${theme}`}>
      <div className="w-full sm:w-3/4 p-8">
        <Header theme={theme} setTheme={setTheme} />
        <main className="w-full h-fulls mt-12 flex flex-col gap-10">
          <FilterBar theme={theme} />
          <ExtensionsContainer/>
        </main>
      </div>
    </div>
  )
}


export default App; 