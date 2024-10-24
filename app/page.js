"use client";
import { useContext, useEffect, useState } from "react";
import HomePage from "@/app/components/desktop/HomePage/HomePage";
import HomePageMobile from "./components/mobile/HomePage/HomePage";
import NavBar from "@/app/components/common/NavBar/NavBar";
import CustomCursor from "@/app/components/desktop/CustomCursor/CustomCursor";
import MyVisionPage from "@/app/components/desktop/MyVisionPage/MyVisionPage";
import MyVisionPageMobile from "./components/mobile/MyVisionPage/MyVisionPage";
import AboutPage from "@/app/components/desktop/AboutPage/AboutPage";
import AboutPageMobile from "@/app/components/mobile/AboutPage/AboutPage";
import { ThemeContext } from "@/app/context/themeContext";
import LoadingPage from "@/app/components/common/LoadingPage/LoadingPage";
import ContactPage from "@/app/components/desktop/ContactPage/ContactPage";
import ContactPageMobile from "./components/mobile/ContactPage/ContactPage";
import MilestonesPage from "./components/desktop/MilestonesPage/MilestonesPage";
import MilestonesPageMobile from "./components/mobile/MilestonesPage/MilestonesPage";
import rotateTabletImg from "../app/assets/images/rotateTabletImg.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft} from "./utils/motion";
import { MobileDeviceContext } from "@/app/context/mobileDeviceContext";

const Page = () => {

  const { darkMode } = useContext(ThemeContext);
  const {isMobileDevice,setIsMobileDevice} = useContext(MobileDeviceContext);
  const [loading, setLoading] = useState(true);
  const [showRotateMessage, setShowRotateMessage] = useState(false);

  useEffect(() => {

    const handleTimeout=()=>{
        setTimeout(() => {
            setLoading(false); // Remove the loading screen after the delay
        }, 2500);
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
        <div>
            {!isMobileDevice &&
                <div className={`flex flex-col transition-all ease-in-out ${darkMode ? 'bg-darker' : 'bg-white'}`}>
                    <NavBar/>
                    <div style={{height: "calc(100vh - 65.6px)"}} className="overflow-x-auto no_scrollbar flex scroll-smooth snap-x snap-mandatory">
                        <motion.section variants={slideInFromLeft(0.1)} initial="hidden" animate="visible"  id="Home" className="min-w-full flex items-center justify-center" style={{ scrollSnapAlign: "center" }}>
                            <HomePage/>
                        </motion.section>
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
                </div>
            }

            {isMobileDevice &&
                <div className={`w-full min-h-screen flex flex-col transition-all ease-in-out ${darkMode ? 'bg-darker' : 'bg-white'}`}>
                    <NavBar/>
                    <motion.div variants={slideInFromBottom} initial="hidden" animate="visible">                        
                        <HomePageMobile/>
                        <MyVisionPageMobile/>
                    </motion.div>
                    <MilestonesPageMobile/>
                    <AboutPageMobile/>
                    <ContactPageMobile/>
                </div>
            }
        </div>
    );
};

export default Page;

