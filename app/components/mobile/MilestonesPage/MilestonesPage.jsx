import { ThemeContext } from "@/app/context/themeContext";
import { useContext } from "react";

const MilestonesPage=()=>{

    const {darkMode}=useContext(ThemeContext);

    return(
        <div className={`w-full h-full mt-11 mb-20 relative flex flex-col transition-all ease-in-out ${darkMode ? 'text-white' : 'text-black' }`}>
            <div className="relative">
                <h1 className="px-5 text-3xl font-bold ">Milestones</h1>
                <div className={`absolute w-28 mt-1.5 left-5 transition-all ease-in-out ${darkMode?'bg-white':'bg-black'} h-[2.5px]`}></div>
            </div>
            <div className="mt-12 relative w-full flex flex-col gap-7">
                <div className={`absolute flex items-end w-0.5 h-[100%] top-[68px] left-[49.7%] transition-all ease-in-out ${darkMode ? 'bg-white' : 'bg-black' }`}>
                <svg className="absolute transform -right-[7px] transition-all ease-in-out rotate-90" width="16" height="16" viewBox="0 0 20 20" fill={`${darkMode ? 'white' : 'black'}`}>
                    <polygon points="0,0 20,10 0,20" />
                </svg>
                </div>
                <div className="flex justify-between items-center">
                    <p className="w-[45%] pl-12 s-mb:pl-7 pr-6"><span className="font-bold">Trainee Sales Engineer</span> - Schneider Electric India Pvt Ltd.</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <div className="w-[45%] pl-[8%] font-bold">2002</div>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="w-[45%] font-bold pl-[25%]">2004</div>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p className="w-[45%] pl-7 pr-6"><span className="font-bold">Sales Engineer</span> - ABB Ltd.</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="w-[45%] pl-12 pr-6"><span className="font-bold">Sr. Sales Executive</span> - Siemens Ltd.</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <div className="w-[45%] pl-[8%] font-bold">2005</div>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="w-[45%] font-bold pl-[25%]">2009</div>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p className="w-[45%] pl-7 pr-8"><span className="font-bold">Product Manager (Marketing)</span> - Siemens Ltd.</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="w-[45%] pl-12  pr-6"><span className="font-bold">Product Manager (Marketing)</span> - Siemens Ltd.</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <div className="w-[45%] pl-[8%] font-bold">2011</div>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="w-[45%] font-bold pl-[9%]">2014 - Present</div>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p className="w-[45%] pl-7 pr-7"><span className="font-bold">Head : Marketing and Strategic Business Development </span> - Rishabh Instruments Ltd.</p>
                </div>
            </div>   
        </div>
    );
}

export  default MilestonesPage;