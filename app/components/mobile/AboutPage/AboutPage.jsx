import { ThemeContext } from "@/app/context/themeContext";
import { useContext } from "react";
import aboutPageImg from "../../../assets/images/aboutPageImg.jpg";
import Image from "next/image";

const AboutPage=()=>{

    const {darkMode}=useContext(ThemeContext);

    return(
        <div id="aboutSection" className={`w-full h-full relative flex flex-col mt-10 transition-all ease-in-out ${darkMode ? 'text-white' : 'text-black' }`}>
            <div className="relative">
                <h1 className="px-5 text-3xl font-bold ">About Me</h1>
                <div className={`absolute w-20 mt-1.5 left-5 transition-all ease-in-out ${darkMode?'bg-white':'bg-black'} h-[2.5px]`}></div>
            </div>
            <div className="w-full px-5 mt-12 flex flex-col justify-center items-center">
                <div className="w-[65%] s-mb:w-[70%] overflow-hidden transition-all ease-in-out rounded-lg" style={{boxShadow: !darkMode ? '5px 5px 15px rgba(107, 114, 128, 0.4)' : '5px 5px 15px rgba(0, 0, 0, 0.2)'}}>
                    <Image className="w-full h-full object-cover" src={aboutPageImg} alt="img"></Image>
                </div>
                <div className="mt-10 text-base flex flex-col gap-5">
                    <p className="">I am a seasoned strategist with a unique ability to identify gaps and craft innovative solutions that drive growth. My leadership approach is characterized by a clear, compelling vision and an emphasis on open, empowering hierarchies that motivate and value every team member.</p>
                    <p className="">I started my career with industry leaders like Schneider Electric, ABB, and Siemens, where I gained over a decade of experience in Sales, Product Management, and Business Promotion. Currently, I serve as the Head of Marketing and Strategy at Rishabh Instruments, where I have successfully led the establishment of a Globally Benchmarked Marketing Department and managed the entire product lifecycle.</p>
                    <p className="">Spearheaded the end-to-end IPO process by onboarding leading anchor investors, HNI’s and other major financial institutions leading to successfully oversubscribed public listing of Rishabh Instruments Ltd. </p>
                    <p className="">Outside of my professional life, I am a vintage motorcycle enthusiast and nature lover with a passion for cultural enrichment. Gardening, music, poetry, and literature inspire me, and I integrate this creativity into both my personal and professional pursuits. I believe in living authentically, with a relentless commitment to growth and continuous learning, driven by a desire to inspire and lead others to greatness.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;