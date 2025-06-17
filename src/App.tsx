import Header from "./components/Header";
import ExtensionsContainer from "./components/ExtensionsCardsContainer";
import FilterBar from "./components/FilterBar";
import { useAppContext } from "./hooks/useAppContext";

function App() {

  const {theme} = useAppContext() 

  return (
    <div className={`w-full min-h-screen flex justify-center font-noto-sans 
      bg-(image:--gradient-light)  dark:bg-(image:--gradient-dark)  ${theme}`}>
      <div className="w-full lg:w-5/6 xl:w-3/4 p-8">
        <Header  />
        <main className="w-full h-fulls my-12 flex flex-col gap-10">
          <FilterBar />
          <ExtensionsContainer/>
        </main>
      </div>
    </div>
  )
}


export default App; 