import Image from "next/image";
import homePageImg from "../../../assets/images/homePageImg.jpg";
import arrowshomePageImg from "../../../assets/images/arrowsHomePageMobile.png";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";


const HomePage=()=>{

    const {darkMode}=useContext(ThemeContext);


    return(
        <div className={`w-full h-full relative flex flex-col mt-20 transition-all ease-in-out ${darkMode ? 'text-white' : 'text-black' }`}> 
            <div className="px-5">
                <div className="w-[65%] h-[35vh] s-mb:h-[40vh] top-0 left-5 absolute overflow-hidden rounded-md">
                    <Image className="w-full h-full object-cover blur-sm" src={homePageImg} alt="img"></Image>
                </div>
                <div className="w-[75%] ml-4 mt-4 overflow-hidden h-[35vh] s-mb:h-[40vh] rounded-md transition-all ease-in-out" style={{boxShadow: !darkMode ? '5px 5px 15px rgba(107, 114, 128, 0.9)' : '5px 5px 15px rgba(0, 0, 0, 0.2)'}}>
                    <Image className="w-full h-full object-cover object-[center_40%] scale-125" src={homePageImg} alt="img"></Image>
                </div>
            </div> 
            <div className="relative pl-5 mt-8 gap-2 flex flex-col">
                <h1 className="text-5xl font-bold">Nitin</h1>
                <h1 className="text-5xl font-bold">Deshpande</h1>
                <div className={`absolute top-[30%] right-0 w-[64%] s-mb:w-[60%] ${darkMode?'bg-white':'bg-black'} h-[2.5px]`}></div>
            </div>
            <div className="px-5 mt-7 text-base">
                <p>I am a visionary leader in Marketing and Strategic Business, committed to driving results and inspiring transformation. My focus is on crafting strategies that empower teams, foster growth, and deliver impactful outcomes.</p>
            </div>
            <div className="px-5 mt-7 flex gap-6">
                <button className={`py-2.5 transition-all ease-in-out px-6 font-bold text-base ${darkMode?'bg-white text-black':'bg-black text-white'}`}>Connect</button>
                <div className="cursor-pointer flex items-center gap-3">
                    <p className="text-base font-bold ">Explore</p>
                    <Image className={`w-[20px] transition-all ease-in-out ${darkMode ? 'invert' : ''}`} src={arrowshomePageImg} alt="img"></Image>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

