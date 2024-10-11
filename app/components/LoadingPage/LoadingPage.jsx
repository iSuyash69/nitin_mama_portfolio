import { ThemeContext } from "@/app/context/themeContext";
import { useContext } from "react";
import { BlinkBlur, Mosaic } from "react-loading-indicators";

const LoadingPage=()=>{

    const { darkMode } = useContext(ThemeContext);
    
    const mosaicColor = darkMode ? "white" : "black";

    return(
        <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-darker' : 'bg-white'}`}>
            <Mosaic color={mosaicColor} speedPlus="0" size="large"/>
        </div>
    );
}

export default LoadingPage;

