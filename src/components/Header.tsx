import sun from '../assets/icon-sun.svg'
import moon from '../assets/icon-moon.svg'
import Logo from './common/Logo'
import { useAppContext } from '../hooks/useAppContext';



function Header() {


    const {theme  , toggleTheme}  = useAppContext();



    return (
        <header className={`bg-neutral-50 dark:bg-neutral-800  rounded-xl p-4 flex items-center justify-between ${theme}`}>
            <Logo theme = {theme}/>
            <figcaption
                onClick={toggleTheme}
                className={`bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 
                p-2 rounded-md cursor-pointer  
                hover:scale-110  transition-transform
                size-8 sm:size-fit
                ${theme}
                `}>
                <img src={theme == 'dark' ? sun : moon} alt={theme == 'dark' ? "sun" : "moon"} />
            </figcaption>
        </header>
    )

}


export default Header