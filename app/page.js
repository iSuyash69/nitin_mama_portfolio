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

const Page = () => {

  const { darkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const handleTimeout=()=>{
        setTimeout(() => {
            setLoading(false); // Remove the loading screen after the delay
        }, 1000);
    };

        if (document.readyState === "complete"){
            handleTimeout();
        } 
        else{
            window.addEventListener("load", handleTimeout);
        }

    }, []);
    
    if (loading) {
        return <LoadingPage/>; // Showing loading screen until the delay finishes
    }

    return (
        <div className={`flex flex-col  transition-all ease-in-out ${darkMode ? 'bg-darker' : 'bg-white'}`}>
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
        </div>
    );
};

export default Page;
