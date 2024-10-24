// import { MobileDeviceContext } from "@/app/context/mobileDeviceContext";
// import { ThemeContext } from "@/app/context/themeContext";
// import { useContext, useEffect, useState } from "react";

// const NavBar = () => {

//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const {isMobileDevice} = useContext(MobileDeviceContext);
  
//   const [isMenuPopup,setIsMenuPopup]=useState(false);

//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   const handleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleScrollToSection = (e, sectionId) => {
//     e.preventDefault(); // Prevent default anchor behavior
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", inline: "start" }); // Smooth scroll
//     }
//   };

//   const handleKeyDown = (e) => {
//     const activeElement = document.activeElement;
  
//     if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
//       return; 
//     }
  
//     const sections = document.querySelectorAll("section");
//     let currentSectionIndex = Array.from(sections).findIndex(section => {
//       return section.getBoundingClientRect().left >= 0; // Find the currently visible section
//     });
  
//     if (e.key === "ArrowRight") {
//       e.preventDefault();
//       if (currentSectionIndex < sections.length - 1) {
//         sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth", inline: "start" });
//       }
//     } else if (e.key === "ArrowLeft") {
//       e.preventDefault();
//       if (currentSectionIndex > 0) {
//         sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth", inline: "start" });
//       }
//     }
//   };

//   const handleScrollToHome = () => {
//     const HomeSection = document.getElementById("Home");
//     if (HomeSection) {
//         HomeSection.scrollIntoView({ behavior: "smooth", inline: "start" });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <div>
//         {!isMobileDevice &&
//             <div className={`text-white border-b-[2px] border-b-black py-5 select-none bg-dark flex w-full px-6 justify-between items-center ${darkMode ? '' : ''}`}>
//                 <div onClick={handleScrollToHome} className={`font-semibold text-base cursor-pointer expand ${darkMode ? '' : ''}`}>Nitin Deshpande</div>
//                 <div className="flex gap-[3.25rem]">
//                     <ul className="flex text-sm gap-[3.25rem]">
//                         <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "Home")}>Home</a></li>
//                         <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "Vision")}>My Vision</a></li>
//                         <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "Milestones")}>Milestones</a></li>
//                         <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "About")}>About Me</a></li>
//                         <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "Connect")}>Connect</a></li>
//                     </ul>
//                     <div onClick={handleTheme}>
//                         <svg className={`interactive sun-and-moon cursor-pointer transition-all duration-500 ease-in-out`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
//                             <circle className="sun transition-all duration-500 ease-in-out" cx="12" cy="12" r="6" mask={darkMode ? `url(#moon-mask)` : ''} fill="currentColor"></circle>
//                             <mask id="moon-mask">
//                                 <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
//                                 <circle cx="17" cy="10" r="6" fill="black"></circle>
//                             </mask>
//                             {!darkMode && (
//                                 <g className="sun-beams transition-all duration-500 ease-in-out" stroke="currentColor">
//                                     <line x1="12" y1="1" x2="12" y2="3"></line>
//                                     <line x1="12" y1="21" x2="12" y2="23"></line>
//                                     <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//                                     <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//                                     <line x1="1" y1="12" x2="3" y2="12"></line>
//                                     <line x1="21" y1="12" x2="23" y2="12"></line>
//                                     <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//                                     <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//                                 </g>
//                             )}
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//         }

//         {isMobileDevice &&
//             <div className={`w-full text-white bg-dark py-4 fixed top-0 px-5 flex justify-between`}>
//                 <div onClick={handleScrollToHome} className={`font-semibold text-base cursor-pointer expand  ${darkMode ? '' : ''}`}>Nitin Deshpande</div>
//                 <div className="flex gap-7 items-center">
//                     <div onClick={handleTheme}>
//                         <svg className={`sun-and-moon transition-all duration-500 ease-in-out`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
//                             <circle className="sun transition-all duration-500 ease-in-out" cx="12" cy="12" r="6" mask={darkMode ? `url(#moon-mask)` : ''} fill="currentColor"></circle>
//                             <mask id="moon-mask">
//                                 <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
//                                 <circle cx="17" cy="10" r="6" fill="black"></circle>
//                             </mask>
//                             {!darkMode && (
//                                 <g className="sun-beams transition-all duration-500 ease-in-out" stroke="currentColor">
//                                     <line x1="12" y1="1" x2="12" y2="3"></line>
//                                     <line x1="12" y1="21" x2="12" y2="23"></line>
//                                     <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//                                     <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//                                     <line x1="1" y1="12" x2="3" y2="12"></line>
//                                     <line x1="21" y1="12" x2="23" y2="12"></line>
//                                     <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//                                     <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//                                 </g>
//                             )}
//                         </svg>
//                     </div>
//                     <div className="w-6">
//                         <svg onClick={()=>setIsMenuPopup(!isMenuPopup)} className={`${isMenuPopup ? 'opacity-0 pointer-events-none hidden' : 'opacity-100 pointer-events-auto block'} hamburger-menu cursor-pointer transition-all duration-500 ease-in-out`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <line className="hamburger-line transition-all duration-500 ease-in-out" x1="3" y1="6" x2="21" y2="6" />
//                             <line className="hamburger-line transition-all duration-500 ease-in-out" x1="3" y1="12" x2="21" y2="12" />
//                             <line className="hamburger-line transition-all duration-500 ease-in-out" x1="3" y1="18" x2="21" y2="18" />
//                         </svg>
//                         <div className={`h-screen w-full left-0 fixed top-0 flex flex-col py-4 px-5 ${isMenuPopup ? 'opacity-100 pointer-events-none translate-y-0' : 'opacity-0 pointer-events-none translate-y-[-100%]'} ${darkMode ? 'bg-white' : 'bg-darker'} transition-all duration-500 ease-in-out`}>
//                             <svg onClick={()=>setIsMenuPopup(!isMenuPopup)} className={`${isMenuPopup ? 'opacity-100 pointer-events-auto block' : 'opacity-0 pointer-events-none hidden'} ${darkMode ? 'text-black' : 'text-white'} absolute right-6   close-menu cursor-pointer transition-all duration-500 ease-in-out`} aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                 <line className="close-line transition-all duration-500 ease-in-out" x1="4" y1="4" x2="16" y2="16" />
//                                 <line className="close-line transition-all duration-500 ease-in-out" x1="4" y1="16" x2="16" y2="4" />
//                             </svg>
//                             <div className={`${darkMode ? 'text-black' : 'text-white'}`}>
//                                 <h3>Home</h3>
//                                 <h3>My Vision</h3>
//                                 <h3>Milestones</h3>
//                                 <h3>About Me</h3>
//                                 <h3>Connect</h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         }
//     </div>

//   );
// };

// export default NavBar;


import { MobileDeviceContext } from "@/app/context/mobileDeviceContext";
import { ThemeContext } from "@/app/context/themeContext";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const { isMobileDevice } = useContext(MobileDeviceContext);
  
    const [isMenuPopup, setIsMenuPopup] = useState(false);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const handleTheme = () => {
        setDarkMode(!darkMode);
    };

    const handleScrollToSection = (e, sectionId) => {
        e.preventDefault(); // Prevent default anchor behavior
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: "smooth", inline: "start" }); // Smooth scroll
        }
    };

    const handleKeyDown = (e) => {
        const activeElement = document.activeElement;
  
        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
          return; 
        }
  
        const sections = document.querySelectorAll("section");
        let currentSectionIndex = Array.from(sections).findIndex(section => {
            return section.getBoundingClientRect().left >= 0; // Find the currently visible section
        });
  
        if (e.key === "ArrowRight") {
        e.preventDefault();
            if (currentSectionIndex < sections.length - 1) {
                sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth", inline: "start" });
            }
        } 
        else if (e.key === "ArrowLeft") {
            e.preventDefault();
            if (currentSectionIndex > 0) {
                sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth", inline: "start" });
            }
        }
    };

    const handleScrollToHome = () => {
        const HomeSection = document.getElementById("Home");
        if (HomeSection) {
            HomeSection.scrollIntoView({ behavior: "smooth", inline: "start" });
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    //Mobile related functions : 
    
    const scrollToSection = (sectionId, offset = 70) => {
      const targetSection = document.getElementById(sectionId);
      const offsetPosition = targetSection?.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
          top: offsetPosition || 0,
          behavior: 'smooth'
      });
    };
    
    const sectionMapping = {
      "Home": "homeSection",
      "My Vision": "myVisionSection",
      "Milestones": "milestonesSection",
      "About Me": "aboutSection",
      "Connect": "contactSection"
    };

    const menuVariants = {
        open: {
            y:0,
            opacity: 1,
            transition: {
            duration: 0.4,
            ease: "easeInOut",
            },
        },
        closed: {
            y:"-100%",
            opacity: 0,
            transition: {
            duration: 0.3,
            ease: "easeInOut",
            },
        },
    };

    const itemVariants = {
        open: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: index * 0.13, // Delay based on index
            },
        }),
        closed: {
            y: -20, // Start position (above final position)
            opacity: 0,
        },
    };

    return (
      <div>
        {!isMobileDevice &&
        <div className={`text-white border-b-[2px] border-b-black py-5 select-none bg-dark flex w-full px-6 justify-between items-center ${darkMode ? '' : ''}`}>
          <div onClick={handleScrollToHome} className={`font-semibold text-base cursor-pointer expand ${darkMode ? '' : ''}`}>Nitin Deshpande</div>
          <div className="flex gap-[3.25rem]">
            <ul className="flex text-sm gap-[3.25rem]">
              <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "Home")}>Home</a></li>
              <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "Vision")}>My Vision</a></li>
              <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "Milestones")}>Milestones</a></li>
              <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "About")}>About Me</a></li>
              <li><a className="interactive cursor-pointer" onClick={(e) => handleScrollToSection(e, "Connect")}>Connect</a></li>
            </ul>
            <div onClick={handleTheme}>
              <svg className={`interactive sun-and-moon cursor-pointer transition-all duration-500 ease-in-out`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <circle className="sun transition-all duration-500 ease-in-out" cx="12" cy="12" r="6" mask={darkMode ? `url(#moon-mask)` : ''} fill="currentColor"></circle>
                <mask id="moon-mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
                  <circle cx="17" cy="10" r="6" fill="black"></circle>
                </mask>
                {!darkMode && (
                  <g className="sun-beams transition-all duration-500 ease-in-out" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </g>
                )}
              </svg>
            </div>
          </div>
        </div>
      }

      {isMobileDevice &&
        <div className={`w-full text-white border-b-[2px] border-b-black bg-dark py-4 fixed top-0 px-5 z-50 flex justify-between`}>
          <div onClick={()=>{scrollToSection('homeSection')}} className={`font-semibold text-base cursor-pointer expand  ${darkMode ? '' : ''}`}>Nitin Deshpande</div>
          <div className="flex gap-7 items-center">
            <div onClick={handleTheme}>
              <svg className={`sun-and-moon transition-all duration-500 ease-in-out`} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <circle className="sun transition-all duration-500 ease-in-out" cx="12" cy="12" r="6" mask={darkMode ? `url(#moon-mask)` : ''} fill="currentColor"></circle>
                <mask id="moon-mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
                  <circle cx="17" cy="10" r="6" fill="black"></circle>
                </mask>
                {!darkMode && (
                  <g className="sun-beams transition-all duration-500 ease-in-out" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </g>
                )}
              </svg>
            </div>
            <div onClick={() => setIsMenuPopup(true)}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            </div>
            {isMenuPopup && 
              <motion.div className={`fixed top-0 left-0  w-full h-full ${darkMode ? 'bg-darker' : 'bg-white'} z-50 flex flex-col items-center justify-center`}
                initial="closed"
                animate={isMenuPopup ? "open" : "closed"}
                exit="closed"
                variants={menuVariants}
              >
                <ul className={`flex flex-col text-2xl font-semibold items-center ${darkMode ? 'text-white' : 'text-black'} `}>
                  {["Home", "My Vision", "Milestones", "About Me", "Connect"].map((item, index) => (
                  <motion.li
                    key={item}
                    className="mb-6"
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <a onClick={(e) => {scrollToSection(sectionMapping[item]); setIsMenuPopup(false);}}>
                      {item}
                    </a>
                  </motion.li>
                  ))}
                </ul>
                <div className={`absolute top-5 right-5 cursor-pointer ${darkMode ? 'text-white' : 'text-black'} `} onClick={() => setIsMenuPopup(false)}>
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill="currentColor" d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </div>
              </motion.div>
            }
          </div>
        </div>
      }
    </div>
  );
};

export default NavBar;
