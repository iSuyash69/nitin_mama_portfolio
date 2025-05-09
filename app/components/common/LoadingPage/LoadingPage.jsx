import { ThemeContext } from "@/app/context/themeContext";
import { useContext, useEffect, useState } from "react";
import { BlinkBlur, Mosaic } from "react-loading-indicators";

const LoadingPage=()=>{

    const { darkMode } = useContext(ThemeContext);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth); 
        };

        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const mosaicColor = darkMode ? "white" : "black";
    const mosaicSize = screenWidth < 768 ? "small" : "large";

    return(
        <div className={`flex justify-center overflow-hidden items-center h-screen ${darkMode ? 'bg-darker' : 'bg-white'}`}>
            <div className="pb-20">
                <Mosaic color={mosaicColor} speedPlus="0"  size={mosaicSize}/>
            </div>
        </div>
    );
}

export default LoadingPage;

