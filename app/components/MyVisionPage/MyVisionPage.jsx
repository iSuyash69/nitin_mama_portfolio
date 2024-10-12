import Image from "next/image";
import visonPageImg1 from "../../assets/images/visionPageImg1.jpg"
import visonPageImg2 from "../../assets/images/visionPageImg2.jpg"
import { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";

const MyVisionPage=()=>{

    const {darkMode}=useContext(ThemeContext);

     const handleScrollToMilestones = () => {
        const milestonesSection = document.getElementById("Milestones");
        if (milestonesSection) {
            milestonesSection.scrollIntoView({ behavior: "smooth", inline: "start" });
        }
    };

    const handleScrollToHome = () => {
        const HomeSection = document.getElementById("Home");
        if (HomeSection) {
            HomeSection.scrollIntoView({ behavior: "smooth", inline: "start" });
        }
      };

    return(
        <div className={`h-full w-full overflow-hidden  relative transition-all select-none ease-in-out flex justify-between ${darkMode ? 'text-white' : 'text-black' } `}>
            <div className="w-[50%] gap-4 flex h-full">
                <div className="w-1/2 ">
                    <Image className="w-full h-[88%] object-cover object-[center_50%]" alt="img" src={visonPageImg1}></Image>
                </div>
                <div className="w-1/2 flex items-end">
                    <Image className="w-full h-[88%] object-cover object-[center_50%]" alt="img" src={visonPageImg2}></Image>
                </div>
            </div>
            <div className="w-[45%] h-full justify-center pb-20 w-md:pb-0 gap-16 w-md:gap-12 flex flex-col">
                <div className="relative pl-14 w-md:pl-8">
                    <h1 className="text-5xl w-md:text-[42px] font-bold expand">My Vision</h1>
                    <div className={`absolute w-28 w-md:w-24 mt-2.5 left-14 w-md:left-8 ${darkMode?'bg-white':'bg-black'} h-[2.5px]`}></div>
                </div>
                <div className="flex flex-col pl-10 w-md:pl-0 gap-10 w-md:gap-6 mr-[28%] w-md:mr-[20%] ipad:mr-[20%]">
                    <div className="flex items-center gap-4">
                        <div className="text-6xl w-md:text-5xl ipad:text-5xl">&#x2023;</div>
                        <p className="text-xl w-md:text-[17px] ipad:text-lg expand">Transforming businesses by leading with innovative strategies and fostering a culture of growth and creativity</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-6xl w-md:text-5xl ipad:text-5xl">&#x2023;</div>
                        <p className="text-xl w-md:text-[17px] ipad:text-lg expand">Empowering teams through open leadership and clear vision, driving collective success and personal excellence</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-6xl w-md:text-5xl ipad:text-5xl">&#x2023;</div>
                        <p className="text-xl w-md:text-[17px] ipad:text-lg expand">Championing continuous learning and adaptability to create sustainable impact and inspire transformative change</p>
                    </div>
                </div>
            </div>
            <div onClick={handleScrollToHome} className="absolute expand bottom-3 cursor-pointer left-6 flex items-center gap-3 ipad:opacity-0">
                <span className=" transform rotate-180 text-2xl font-bold pb-1">&#10230;</span>
                <p className="text-xs font-bold">Page | 01</p>                         
            </div>

            <div onClick={handleScrollToMilestones} className="absolute expand bottom-3 cursor-pointer right-6 flex items-center gap-3 ipad:opacity-0">
                <p className="text-xs font-bold">Page | 03</p>                         
                <span className="text-2xl font-bold pb-1">&#10230;</span>
            </div>
        </div>
    );
}

export default MyVisionPage;