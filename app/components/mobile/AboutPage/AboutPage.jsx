import { ThemeContext } from "@/app/context/themeContext";
import { useContext } from "react";

const AboutPage=()=>{

    const {darkMode}=useContext(ThemeContext);

    return(
        <div className={`w-full h-full relative flex flex-col mt-12 transition-all ease-in-out ${darkMode ? 'text-white' : 'text-black' }`}>

        </div>
    );
}

export default AboutPage;