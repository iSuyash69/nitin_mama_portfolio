import { ThemeContext } from "@/app/context/themeContext";
import { useContext, useEffect, useState } from "react";

const MilestonesPage=()=>{

    const { darkMode } = useContext(ThemeContext);

    const [isHover,setIsHover]=useState(false);
    const [hoverYear,setIsHoverYear]=useState('');

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById("About");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth", inline: "start" });
        }
    };

    const handleScrollToVision = () => {
        const visionSection = document.getElementById("Vision");
        if (visionSection) {
            visionSection.scrollIntoView({ behavior: "smooth", inline: "start" });
        }
    };

    // useEffect(()=>{
    //     const handlePresentSection=(event)=>{
    //         const presentSection = event.target;

    //         if(presentSection.closest(".milestones")){
    //             setIsSectionMilestones(true);
    //         }
    //         else{
    //             setIsSectionMilestones(false);
    //         }

    //     }

    //     window.addEventListener("mousemove",handlePresentSection);

    //     return()=>{
    //         window.removeEventListener("mousemove",handlePresentSection);
    //     }

    // },[]);

    return(
        <div className={`milestones h-full w-full overflow-x-auto flex flex-col relative transition-all select-none ease-in-out items-start px-[5%] ${darkMode ? 'text-white' : 'text-black' }`}>
            <div className="relative w-full pt-8">
                <h1 className="text-5xl w-md:text-[42px] w-fit font-bold expand">Milestones</h1>
                <div className={`absolute w-40 w-md:w-[138px] mt-2.5 left-0 transition-all ease-in-out ${darkMode ? 'bg-white':'bg-black'} h-[2.5px]`}></div>
            </div>
            <div className="min-w-[1375px] pb-36 w-md:pb-28 h-full overflow-y-hidden overflow-x-auto relative gap-8 flex items-center">
                <div className={`w-[1200px] transition-all ease-in-out flex items-center justify-end h-0.5 absolute left-20 mt-12 w-md:mt-11 ${darkMode ? 'bg-white' : 'bg-black'}`}>
                    <svg className="" width="12" height="12" viewBox="0 0 10 10" fill="none">
                        <polygon points="0,0,10,5 0,10" fill="currentColor" />
                    </svg>
                </div>
                <div className="flex flex-col gap-4 items-center w-44">
                    <p onMouseEnter={()=>{setIsHover(true);setIsHoverYear(2002)}} onMouseLeave={()=>{setIsHover(false);setIsHoverYear('')}}  className="text-[17px] w-md:text-base cursor-pointer expand"><span className="font-bold">Trainee Sales Engineer</span> - Schneider Electric India Pvt Ltd.</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5 ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p className="text-lg w-md:text-[17px] font-bold">2002</p>
                    <div className={`absolute mt-[88px] left-36 font-[300] border bg-opacity-90 backdrop-blur-sm w-[450px] max-h-72 rounded-xl transition-all duration-500 pt-2.5 pb-5 text-[15px] w-md:text-[14px] px-4 ease-in-out ${isHover && hoverYear==2002 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'} ${darkMode ? 'bg-[#3a3a3a] border-gray-700' : 'bg-gray-200 border-gray-300'}`}>
                        <ul className="list-disc pl-3 flex flex-col gap-3 ">
                            <p className="font-normal ">Location : Mumbai, Maharashtra</p>
                            <li>Took charge of sales operations for L.V switchgear products, focusing on small and medium-sized Panel Builders, Electrical Contractors, Retailors and Builders.</li>
                            <li>Led customer engagements to ensure they received the best value, contributing to strong customer loyalty and market growth.</li>
                            <li>Implemented strategies that consistently met sales targets, helping Schneider Electric grow its presence in the region.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col pt-[70px] w-md:pt-[65px] gap-4 items-center w-44">
                    <p className="text-lg w-md:text-[17px] font-bold">2004</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5 ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p onMouseEnter={()=>{setIsHover(true);setIsHoverYear(2004)}} onMouseLeave={()=>{setIsHover(false);setIsHoverYear('')}}  className="text-[17px] w-md:text-base expand cursor-pointer"><span className="font-bold">Sales Engineer</span> - ABB Ltd.</p>
                    <div className={`absolute top-0 h-lg:top-[80px] left-[350px] font-[300] border bg-opacity-90 backdrop-blur-sm w-[450px] max-h-72 rounded-xl transition-all duration-500 pt-2.5 pb-5 text-[15px] w-md:text-[14px] px-4 ease-in-out ${isHover && hoverYear==2004 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'} ${darkMode ? 'bg-[#3a3a3a] border-gray-700' : 'bg-gray-200 border-gray-300'}`}>
                        <ul className="list-disc pl-3 flex flex-col gap-3 ">
                            <p className="font-normal">Location : Mumbai, Maharashtra</p>
                            <li>Led sales efforts for L.V switchgear products in the Western, Central, and Harbor regions of Mumbai, building strong connections with Panel Builders and Contractors.</li>
                            <li>Ensured that product offerings met customer needs and industry standards, leading to high customer satisfaction.</li>
                            <li>Developed strategies that increased ABB’s market share, making it a strong competitor in the region.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col pt-[25px] gap-4 items-center w-44">
                    <p onMouseEnter={()=>{setIsHover(true);setIsHoverYear(2005)}} onMouseLeave={()=>{setIsHover(false);setIsHoverYear('')}}  className="text-[17px]  w-md:text-base expand cursor-pointer"><span className="font-bold">Sr. Sales Executive</span> - Siemens Ltd.</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p className="text-lg w-md:text-[17px] font-bold">2005</p>
                    <div className={`absolute mt-[62px] left-[560px] font-[300] border bg-opacity-90 backdrop-blur-sm w-[450px] max-h-72 rounded-xl transition-all duration-500 pt-2.5 pb-5 text-[15px] w-md:text-[14px] px-4 ease-in-out ${isHover && hoverYear==2005 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'} ${darkMode ? 'bg-[#3a3a3a] border-gray-700' : 'bg-gray-200 border-gray-300'}`}>
                        <ul className="list-disc pl-3 flex flex-col gap-3 ">
                            <p className="font-normal">Location : Raipur, Chattisgarh & Nashik, Maharashtra</p>
                            <li>Grew business in assigned territories, making Siemens a preferred brand for L.V switchgear and motor products.</li>
                            <li>Consistently met and exceeded business volume, product quantity, and sales margin targets through effective leadership.</li>
                            <li>Built and maintained strong relationships with a wide range of customers, including Panel Builders, OEMs, End Users, Contractors, and Consultants.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col pt-[98px] w-md:pt-[90px] gap-4 items-center w-44">
                    <p className="text-lg w-md:text-[17px] font-bold">2009</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p onMouseEnter={()=>{setIsHover(true);setIsHoverYear(2009)}} onMouseLeave={()=>{setIsHover(false);setIsHoverYear('')}}  className="text-[17px]  w-md:text-base cursor-pointer expand"><span className="font-bold">Product Manager (Marketing)</span> - Siemens Ltd.</p>
                    <div className={`absolute  top-0 h-lg:top-[80px] left-[760px] font-[300] border bg-opacity-90 backdrop-blur-sm w-[450px] max-h-72 rounded-xl transition-all duration-500 pt-2.5 pb-5 text-[15px] w-md:text-[14px] px-4 ease-in-out ${isHover && hoverYear==2009 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'} ${darkMode ? 'bg-[#3a3a3a] border-gray-700' : 'bg-gray-200 border-gray-300'}`}>
                        <ul className="list-disc pl-3 flex flex-col gap-3 ">
                            <p className="font-normal">Location : Mumbai, Maharashtra</p>
                            <li>Managed the entire product life cycle for low-voltage control gear products, from concept design to launch, ensuring they met market needs.</li>
                            <li>Developed business plans and sales strategies that positioned products successfully in the market.</li>
                            <li>Created and executed promotional strategies that increased product awareness and sales.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4 pt-[1px] items-center w-44">
                    <p onMouseEnter={()=>{setIsHover(true);setIsHoverYear(2011)}} onMouseLeave={()=>{setIsHover(false);setIsHoverYear('')}}  className="text-[17px]  w-md:text-base cursor-pointer expand"><span className="font-bold">Product Manager (Sales)</span> - Siemens Ltd.</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p className="text-lg w-md:text-[17px] font-bold">2011</p>
                    <div className={`absolute mt-[85px] left-[400px] font-[300] border bg-opacity-90 backdrop-blur-sm w-[450px] max-h-72 rounded-xl transition-all duration-500 pt-2.5 pb-5 text-[15px] w-md:text-[14px] px-4 ease-in-out ${isHover && hoverYear==2011 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'} ${darkMode ? 'bg-[#3a3a3a] border-gray-700' : 'bg-gray-200 border-gray-300'}`}>
                        <ul className="list-disc pl-2 flex flex-col gap-3 ">
                            <p className="font-normal">Location : Mumbai, Maharashtra</p>
                            <li>Led the nationwide promotion of low-voltage control gear products, including Contactors, Overload Relays and Simocode, making Siemens a key player in the market.</li>
                            <li>Promoted new products and concepts to the market by working closely with regional sales offices, ensuring strong market presence.</li>
                            <li>Managed targeted marketing campaigns and sales initiatives that helped grow key accounts and increased market share.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col pt-[172px] w-md:pt-[137px] gap-4 items-center w-44">
                    <p className="text-lg w-md:text-[17px] font-bold">2014 - Present</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p onMouseEnter={()=>{setIsHover(true);setIsHoverYear(2014)}} onMouseLeave={()=>{setIsHover(false);setIsHoverYear('')}}  className="text-[17px]  w-md:text-base cursor-pointer expand"><span className="font-bold">Head : Marketing and Strategic Business Development </span> - Rishabh Instruments Ltd.</p>
                    <div className={`absolute top-0 right-[370px] h-lg:top-5 font-[300] border bg-opacity-90 backdrop-blur-sm w-[500px] max-h-80 rounded-xl transition-all duration-500 pt-2.5 pb-5 text-[15px] w-md:text-[14px] px-4 ease-in-out ${isHover && hoverYear==2014 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'} ${darkMode ? 'bg-[#3a3a3a] border-gray-700' : 'bg-gray-200 border-gray-300'}`}>
                        <ul className="list-disc pl-3 flex flex-col gap-3 ">
                            <p className="font-normal">Location : Nashik, Maharashtra</p>
                            <li>Established the Marketing Department to oversee and execute Local and Global Marketing strategies, enhancing brand visibility and driving promotion initiatives across diverse markets.</li>
                            <li>Spearheaded the company’s Initial Public Offering (IPO), driving Market research, financial and legal complexities, Investor and Media interactions to ensure its success.</li>
                            <li>Developed and executed complete life cycle management of various products, comprehensive marketing strategies that aligned with the company’s long-term business goals, significantly increasing market share and brand recognition.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="flex gap-3 absolute">
                <div className={`transition-all ease-in-out rounded-full p-2 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={`transition-all ease-in-out rounded-full p-2 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div> */}
            <div onClick={handleScrollToVision} className={`absolute expand bottom-3 cursor-pointer left-6 flex items-center gap-3 ipad:opacity-0 `}>
                <span className=" transform rotate-180 text-2xl font-bold pb-1">&#10230;</span>
                <p className="text-xs font-bold">Page | 02</p>                         
            </div>
            <div onClick={handleScrollToAbout} className={`absolute expand bottom-3 cursor-pointer right-6 flex items-center gap-3 ipad:opacity-0 `}>
                <p className="text-xs font-bold">Page | 04</p>                         
                <span className="text-2xl font-bold pb-1">&#10230;</span>
            </div>
        </div>
    );
    
}

export default MilestonesPage;