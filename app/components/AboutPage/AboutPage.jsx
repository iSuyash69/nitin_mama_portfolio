import { ThemeContext } from "@/app/context/themeContext";
import Image from "next/image";
import { useContext } from "react";
import aboutPageImg from "../../assets/images/aboutPageImg.jpg"

const AboutPage=()=>{

    const {darkMode}=useContext(ThemeContext);

    return(
        <div className={`h-full w-full relative overflow-hidden transition-all select-none ease-in-out flex flex-col  ${darkMode ? 'text-white' : 'text-black' } `}>
            <div className="relative text-center pr-0 w-full pt-8 w-md:pt-5 ipad:pt-6">
                <h1 className="text-5xl w-md:text-[42px] font-bold expand">About Me</h1>
                <div className={`absolute w-28 w-md:w-[100px] mt-2.5 right-1/2  ${darkMode?'bg-white':'bg-black'} h-[2.5px]`}></div>
            </div>
            <div className="w-full h-full overflow-auto flex mt-12 h-lg:mt-14 w-md:mt-12 items-start">
                <div className="w-[35%] h-lg:w-[40%] w-md:w-[35%] ipad:w-[40%] flex pl-10 w-md:pl-0 ipad:pl-0 justify-center pt-16 h-lg:pt-[6%] ipad:pt-[8%]">
                    <div className="bg-red-100 rounded-2xl shadow-sm shadow-gray-500 overflow-hidden w-[65%]">
                        <Image className="w-full object-cover object-[center_50%]" alt="img" src={aboutPageImg}/>
                    </div>
                </div>
                <div className="w-[65%] pr-28 h-lg:pr-32 w-md:pr-20 ipad:pr-20 overflow-auto  h-[90%] text-lg w-md:text-[17px] flex gap-8 w-md:gap-5 ipad:gap-6 flex-col">
                    <p className="expand">I am a seasoned strategist with a unique ability to identify gaps and craft innovative solutions that drive growth. My leadership approach is characterized by a clear, compelling vision and an emphasis on open, empowering hierarchies that motivate and value every team member.</p>
                    <p className="expand">I started my career with industry leaders like Schneider Electric, ABB, and Siemens, where I gained over a decade of experience in Sales, Product Management, and Business Promotion. Currently, I serve as the Head of Marketing and Strategy at Rishabh Instruments, where I have successfully led the establishment of a Globally Benchmarked Marketing Department and managed the entire product lifecycle.</p>
                    <p className="expand">Spearheaded the end-to-end IPO process by onboarding leading anchor investors, HNI’s and other major financial institutions leading to successfully oversubscribed public listing of Rishabh Instruments Ltd. </p>
                    <p className="expand">Outside of my professional life, I am a vintage motorcycle enthusiast and nature lover with a passion for cultural enrichment. Gardening, music, poetry, and literature inspire me, and I integrate this creativity into both my personal and professional pursuits. I believe in living authentically, with a relentless commitment to growth and continuous learning, driven by a desire to inspire and lead others to greatness.</p>
                </div>
            </div>
            <div className="absolute expand bottom-6 text-xs font-bold right-6">Page | 04</div>
        </div>

    )
};

export default AboutPage;