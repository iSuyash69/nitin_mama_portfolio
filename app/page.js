"use client";
import { useContext, useEffect, useState } from "react";
import HomePage from "@/app/components/HomePage/HomePage";
import NavBar from "@/app/components/NavBar/NavBar";
import CustomCursor from "@/app/components/CustomCursor/CustomCursor";
import MyVisionPage from "@/app/components/MyVisionPage/MyVisionPage";
import AboutPage from "@/app/components/AboutPage/AboutPage";
import { ThemeContext } from "@/app/context/themeContext";
import LoadingPage from "@/app/components/LoadingPage/LoadingPage";
import ContactPage from "@/app/components/ContactPage/ContactPage";
import MilestonesPage from "./components/MilestonesPage/MilestonesPage";
import rotateTabletImg from "../app/assets/images/rotateTabletImg.png";
import Image from "next/image";

const Page = () => {

  const { darkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [showRotateMessage, setShowRotateMessage] = useState(false);
  const [isMobileDevice,setIsMobileDevice] = useState(false);

  useEffect(() => {

    const handleTimeout=()=>{
        setTimeout(() => {
            setLoading(false); // Remove the loading screen after the delay
        }, 2000);
    };

        if (document.readyState === "complete"){
            handleTimeout();
        } 
        else{
            window.addEventListener("load", handleTimeout);
        }

        const handleOrientationChange = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
      
            // Showing the rotate message only for tablets in portrait mode (width between 768px and 1024px)
            if (height > width && width >= 768 && width <= 1024) {
              setShowRotateMessage(true);
            } else {
              setShowRotateMessage(false);
            }

            if (width < 768){
                setIsMobileDevice(true);
            }
            else{
                setIsMobileDevice(false);
            }
          };
      
          // Initial check
          handleOrientationChange();
      
          // event listener for orientation change
          window.addEventListener("resize", handleOrientationChange);
      
          return () => {
            window.removeEventListener("resize", handleOrientationChange);
          };

    }, []);

    console.log(showRotateMessage);
    
    if (loading) {
        return <LoadingPage/>; // Showing loading screen until the delay finishes
    }

    return (
        <div className={`flex flex-col transition-all ease-in-out ${darkMode ? 'bg-darker' : 'bg-white'}`}>
            <NavBar/>
            <div style={{height: "calc(100vh - 65.6px)"}} className="overflow-x-auto no_scrollbar flex scroll-smooth snap-x snap-mandatory">
                <section id="Home" className="min-w-full flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>
                    <HomePage/>
                </section>
                <section  id="Vision" className="min-w-full flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>
                    <MyVisionPage/>
                </section>
                <section id="Milestones" className="min-w-full flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>
                    <MilestonesPage/>
                </section>
                <section id="About" className="min-w-full flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>
                    <AboutPage/>
                </section>
                <section id="Connect" className="min-w-full flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>
                    <ContactPage/>
                </section>
                <CustomCursor/>
            </div>

            <div className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center text-2xl z-50 pointer-events-none transition-all duration-300 ease-in-out bg-opacity-85 backdrop-blur-lg opacity-0 ${darkMode ? 'bg-darker text-white' : 'bg-white text-black'} ${showRotateMessage ? "rotate-device" : ""}`}>
                <div className="flex flex-col justify-center mb-32 items-center">
                    <Image className={`${darkMode ? '' : 'invert'}`} src={rotateTabletImg} alt="img"/>
                    <p>Please rotate your device to landscape mode</p>
                </div>
            </div>
            
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col justify-center items-center text-lg z-50 pointer-events-none transition-all duration-300 ease-in-out bg-opacity-85 backdrop-blur-lg opacity-0 ${darkMode ? 'bg-darker text-white' : 'bg-white text-black'} ${isMobileDevice ? "opacity-100 pointer-events-auto" : ""}`}>
                <p>Please open in laptop/desktop</p>
                <p>Mobile version coming soon!</p>
            </div>

        </div>
    );
};

export default Page;
