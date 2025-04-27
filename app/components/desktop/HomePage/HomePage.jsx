import { ThemeContext } from "@/app/context/themeContext";
import Image from "next/image";
import { useContext } from "react";
import homePageImg from "../../../assets/images/homePageImg.png";

const HomePage=()=>{

    const {darkMode}=useContext(ThemeContext);

    const handleScrollToVision = () => {
        const visionSection = document.getElementById("Vision");
        if (visionSection) {
            visionSection.scrollIntoView({ behavior: "smooth", inline: "start" });
        }
    };

    const handleScrollToConnect = () => {
        const connectSection = document.getElementById("Connect");
        if (connectSection) {
            connectSection.scrollIntoView({ behavior: "smooth", inline: "start" });
        }
    };

    return(
        <div className={`h-full w-full overflow-hidden relative transition-all select-none ease-in-out flex justify-between ${darkMode ? 'text-white' : 'text-black' } `}>
            <div className="w-[45%] w-md:w-[45%]">
                <Image className="w-full h-full object-cover object-[center_52%] h-lg:object-[center_60%] ipad:object-[center_70%] w-md:object-[center_60%] " alt="img" src={homePageImg}></Image>
            </div>
            <div className="flex flex-col gap-7 h-lg:gap-8 w-md:gap-6 ipad:gap-8 justify-center pb-16 h-lg:pb-24 pl-[5.5%] w-md:pl-[5.5%] w-[55%]">
                <div className="flex relative w-md:pr-24 ipad:pr-24">
                    <h1 className="text-8xl h-lg:text-[101px] w-md:text-7xl ipad:text-7xl h-lg:leading-[1.1] font-bold"><span className="largeExpand">Nitin<br></br>Deshpande</span></h1>
                    <div className={`absolute top-1/3 w-[65%] h-lg:w-[63%] ipad:w-[66%] w-md:w-[64%] right-0 transition-all ease-in-out ${darkMode?'bg-white':'bg-black'} h-[2.5px]`}></div>
                </div>
                <div className="pr-[105px] text-lg h-lg:text-lg w-md:text-base ipad:text-[17px]">
                    <p className="expand">I am a visionary leader in Marketing and Strategic Business, committed to driving results and inspiring transformation. My focus is on crafting strategies that empower teams, foster growth, and deliver impactful outcomes.</p>
                </div>
                <div className="flex pt-2 w-md:pt-0.5 ipad:pt-2 w-full gap-8">
                    <button onClick={handleScrollToConnect} className={`interactive py-2.5 w-md:py-2 ipad:py-2.5 transition-all ease-in-out px-7 w-md:px-6 ipad:px-7 font-bold text-[15px] w-md:text-[14.5px] ipad:text-[15px] ${darkMode?'bg-white text-black':'bg-black text-white'}`}>Connect</button>
                    <div onClick={handleScrollToVision} className="interactive cursor-pointer flex items-center gap-3">
                        <p className="text-[15px] w-md:text-[14px] ipad:text-[15px] font-bold ">Explore</p>
                        <span className="text-3xl w-md:text-[25px] ipad:text-3xl pb-1 font-bold">&#10230;</span>
                    </div>
                </div>
            </div>
            <div className="absolute expand bottom-6 text-xs font-bold right-6 ipad:opacity-0">Page | 01</div>
        </div>
    );
}

export default HomePage;

