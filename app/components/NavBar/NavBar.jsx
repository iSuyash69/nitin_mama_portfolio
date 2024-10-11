import { ThemeContext } from "@/app/context/themeContext";
import { useContext, useEffect } from "react";

const NavBar = () => {

  const { darkMode, setDarkMode } = useContext(ThemeContext);

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
    } else if (e.key === "ArrowLeft") {
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

  return (
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
  );
};

export default NavBar;
