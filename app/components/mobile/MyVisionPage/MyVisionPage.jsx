import { ThemeContext } from "@/app/context/themeContext";
import { useContext } from "react";
import visonPageImg1 from "../../../assets/images/visionPageImg1.png"
import visonPageImg2 from "../../../assets/images/visionPageImg2.png"
import Image from "next/image";

const MyVisionPage=()=>{

    const {darkMode}=useContext(ThemeContext);

    return(
        <div id="myVisionSection" className={`w-full h-full relative flex flex-col mt-12 transition-all ease-in-out ${darkMode ? 'text-white' : 'text-black' }`}>
            <div className="px-5 flex justify-end">
                <div className="w-[60%] h-[55vh] left-5 absolute overflow-hidden  bg-red-200">
                    <Image className="w-full h-full object-cover object-right" src={visonPageImg1} alt="img"/>
                </div>
                <div className="w-[67%] h-[55vh] z-10 mt-[15%] overflow-hidden bg-red-100">
                    <Image className="w-full h-full object-cover" src={visonPageImg2} alt="img"/>
                </div>
            </div>
            <div className="relative">
                <h1 className="px-5 mt-7 text-3xl font-bold ">My Vision</h1>
                <div className={`absolute w-24 mt-1.5 left-5 transition-all ease-in-out ${darkMode?'bg-white':'bg-black'} h-[2.5px]`}></div>
            </div>
            <div className="flex flex-col px-5 mt-9 gap-6">
                <div className="flex items-center gap-4">
                    <div className="text-4xl">&#x2023;</div>
                    <p className="text-base">Transforming businesses by leading with innovative strategies and fostering a culture of growth and creativity</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-4xl">&#x2023;</div>
                    <p className="text-base">Empowering teams through open leadership and clear vision, driving collective success and personal excellence</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-4xl">&#x2023;</div>
                    <p className="text-base">Championing continuous learning and adaptability to create sustainable impact and inspire transformative change</p>
                </div>
            </div>
        </div>
    );
}

export default MyVisionPage;