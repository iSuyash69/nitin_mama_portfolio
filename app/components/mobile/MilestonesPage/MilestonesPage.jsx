import { ThemeContext } from "@/app/context/themeContext";
import { useContext, useEffect, useState } from "react";

const MilestonesPage=()=>{

    const {darkMode}=useContext(ThemeContext);

    const [isMilestonePopUp,setIsMilestonePopUp]=useState(false);
    const [isSelectedMilestone,setIsSelectedMilestone]=useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (isMilestonePopUp) {
                setIsMilestonePopUp(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMilestonePopUp]);

    return(
        <div id="milestonesSection" className={`w-full h-full mt-11 mb-20 relative flex flex-col transition-all ease-in-out ${darkMode ? 'text-white' : 'text-black' }`}>
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
                    <p onClick={()=>{setIsMilestonePopUp(true);setIsSelectedMilestone(1)}} className="w-[45%] pl-12 s-mb:pl-7 pr-6"><span className="font-bold">Trainee Sales Engineer</span> - Schneider Electric India Pvt Ltd.</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <div className="w-[45%] pl-[8%] font-bold">2002</div>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="w-[45%] font-bold pl-[25%]">2004</div>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p onClick={()=>{setIsMilestonePopUp(true);setIsSelectedMilestone(2)}} className="w-[45%] pl-7 pr-6"><span className="font-bold">Sales Engineer</span> - ABB Ltd.</p>
                </div>
                <div className="flex justify-between items-center">
                    <p onClick={()=>{setIsMilestonePopUp(true);setIsSelectedMilestone(3)}} className="w-[45%] pl-12 pr-6"><span className="font-bold">Sr. Sales Executive</span> - Siemens Ltd.</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <div className="w-[45%] pl-[8%] font-bold">2005</div>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="w-[45%] font-bold pl-[25%]">2009</div>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p onClick={()=>{setIsMilestonePopUp(true);setIsSelectedMilestone(4)}} className="w-[45%] pl-7 pr-8"><span className="font-bold">Product Manager (Marketing)</span> - Siemens Ltd.</p>
                </div>
                <div className="flex justify-between items-center">
                    <p onClick={()=>{setIsMilestonePopUp(true);setIsSelectedMilestone(5)}} className="w-[45%] pl-12  pr-6"><span className="font-bold">Product Manager (Sales)</span> - Siemens Ltd.</p>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <div className="w-[45%] pl-[8%] font-bold">2011</div>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="w-[45%] font-bold pl-[9%]">2014 - Present</div>
                    <div className={`w-6 w-md:w-5 h-6 w-md:h-5  ${darkMode ? 'bg-white' : 'bg-black'} transition-all ease-in-out rounded-full`}></div>
                    <p onClick={()=>{setIsMilestonePopUp(true);setIsSelectedMilestone(6)}} className="w-[45%] pl-7 pr-7"><span className="font-bold">Head : Marketing and Strategic Business Development </span> - Rishabh Instruments Ltd.</p>
                </div>
            </div>
            <div className={`fixed z-10 top-1/2 left-1/2 w-[85%] s-mb:w-[90%] s-mb:mt-[25px] max-h-[85vh] no_scrollbar overflow-auto backdrop-blur-sm border bg-opacity-90 rounded-xl flex flex-col px-5 py-5 transition-all duration-500 ease-in-out transform -translate-x-1/2  ${isMilestonePopUp ? 'opacity-100 -translate-y-1/2' : 'opacity-0 -translate-y-[40%] pointer-events-none'} ${darkMode ? 'bg-[#3a3a3a] border-gray-700' : 'bg-gray-200 border-gray-300'}`}>
                <div onClick={()=>setIsMilestonePopUp(!isMilestonePopUp)} className="absolute top-3 right-3">
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill="currentColor" d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                </div>
                {isSelectedMilestone==1 &&
                <div>
                    <p className="font-medium pb-5 pt-6">Location : Mumbai, Maharashtra</p>
                    <ul className="list-disc pl-3 flex flex-col gap-3 mb-3">
                        <li>Took charge of sales operations for L.V switchgear products, focusing on small and medium-sized Panel Builders, Electrical Contractors, Retailors and Builders.</li>
                        <li>Led customer engagements to ensure they received the best value, contributing to strong customer loyalty and market growth.</li>
                        <li>Implemented strategies that consistently met sales targets, helping Schneider Electric grow its presence in the region.</li>
                    </ul>
                </div>
                }
                {isSelectedMilestone==2 &&
                <div>
                    <p className="font-medium pb-5 pt-6">Location : Mumbai, Maharashtra</p>
                    <ul className="list-disc pl-3 flex flex-col gap-3 mb-3">
                        <li>Led sales efforts for L.V switchgear products in the Western, Central, and Harbor regions of Mumbai, building strong connections with Panel Builders and Contractors.</li>
                        <li>Ensured that product offerings met customer needs and industry standards, leading to high customer satisfaction.</li>
                        <li>Developed strategies that increased ABB’s market share, making it a strong competitor in the region.</li>
                    </ul>
                </div>
                } 
                {isSelectedMilestone==3 &&
                <div>
                    <p className="font-medium pb-5 pt-6">Location : Raipur, Chattisgarh & Nashik, Maharashtra</p>
                    <ul className="list-disc pl-3 flex flex-col gap-3 mb-3">
                        <li>Grew business in assigned territories, making Siemens a preferred brand for L.V switchgear and motor products.</li>
                        <li>Consistently met and exceeded business volume, product quantity, and sales margin targets through effective leadership.</li>
                        <li>Built and maintained strong relationships with a wide range of customers, including Panel Builders, OEMs, End Users, Contractors, and Consultants.</li>
                    </ul>
                </div>
                } 
                {isSelectedMilestone==4 &&
                <div>
                    <p className="font-medium pb-5 pt-6">Location : Mumbai, Maharashtra</p>
                    <ul className="list-disc pl-3 flex flex-col gap-3 mb-3">
                        <li>Managed the entire product life cycle for low-voltage control gear products, from concept design to launch, ensuring they met market needs.</li>
                        <li>Developed business plans and sales strategies that positioned products successfully in the market.</li>
                        <li>Created and executed promotional strategies that increased product awareness and sales.</li>
                    </ul>
                </div>
                } 
                {isSelectedMilestone==5 &&
                <div>
                    <p className="font-medium pb-5 pt-6">Location : Mumbai, Maharashtra</p>
                    <ul className="list-disc pl-3 flex flex-col gap-3 mb-3">
                        <li>Led the nationwide promotion of low-voltage control gear products, including Contactors, Overload Relays and Simocode, making Siemens a key player in the market.</li>
                        <li>Promoted new products and concepts to the market by working closely with regional sales offices, ensuring strong market presence.</li>
                        <li>Managed targeted marketing campaigns and sales initiatives that helped grow key accounts and increased market share.</li>
                    </ul>
                </div>
                } 
                {isSelectedMilestone==6 &&
                <div>
                    <p className="font-medium pb-5 pt-6">Location : Nashik, Maharashtra</p>
                    <ul className="list-disc pl-3 flex flex-col gap-3 mb-3">
                        <li>Established the Marketing Department to oversee and execute Local and Global Marketing strategies, enhancing brand visibility and driving promotion initiatives across diverse markets.</li>
                        <li>Spearheaded the company’s Initial Public Offering (IPO), driving Market research, financial and legal complexities, Investor and Media interactions to ensure its success.</li>
                        <li>Developed and executed complete life cycle management of various products, comprehensive marketing strategies that aligned with the company’s long-term business goals, significantly increasing market share and brand recognition.</li>
                    </ul>
                </div>
                }  
            </div>
        </div>
    );
}

export  default MilestonesPage;