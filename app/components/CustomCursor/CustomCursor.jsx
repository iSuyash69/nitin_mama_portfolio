// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const cursorSize = 32;
//   const expandedSize = 64;
//   const largeExpandedSize = 96;

//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isOverImage, setIsOverImage] = useState(false);
//   const [isLargeExpanded, setIsLargeExpanded] = useState(false);

//   const mouse = {
//     x: useMotionValue(0),
//     y: useMotionValue(0),
//   };

//   const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };   // Smooth settings for movement

//   const smoothMouse = {
//     x: useSpring(mouse.x, smoothOptions),
//     y: useSpring(mouse.y, smoothOptions),
//   };

//   const sizeSpringOptions = { damping: 12, stiffness: 150 };   // Smooth settings for expansion

//   const cursorWidth = useSpring(cursorSize, sizeSpringOptions);
//   const cursorHeight = useSpring(cursorSize, sizeSpringOptions);

//   useEffect(() => {           // Adjust cursor size based on state
//     if (isLargeExpanded) {
//       cursorWidth.set(largeExpandedSize);
//       cursorHeight.set(largeExpandedSize);
//     } else if (isExpanded) {
//       cursorWidth.set(expandedSize);
//       cursorHeight.set(expandedSize);
//     } else {
//       cursorWidth.set(cursorSize);
//       cursorHeight.set(cursorSize);
//     }
//   }, [isExpanded, isLargeExpanded]);

//   const manageMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     mouse.x.set(clientX);
//     mouse.y.set(clientY);
//   };

//   const handleMouseEnter = () => {
//     setIsExpanded(true);
//   };

//   const handleMouseLeave = () => {
//     setIsExpanded(false);
//   };

//   const handleMouseOverImage = () => {
//     setIsOverImage(true);
//   };

//   const handleMouseOutImage = () => {
//     setIsOverImage(false);
//   };

//   const handleMouseOverText = () => {
//     setIsLargeExpanded(true);
//   };

//   const handleMouseOutText = () => {
//     setIsLargeExpanded(false);
//   };

//   useEffect(() => {

//     const clickableElements = document.querySelectorAll(".interactive, .expand");
//     const noCursorElements = document.querySelectorAll("img, input, textarea");
//     const viewElements = document.querySelectorAll(".largeExpand");

//     clickableElements.forEach((element) => {
//       element.addEventListener("mouseenter", handleMouseEnter);
//       element.addEventListener("mouseleave", handleMouseLeave);
//     });

//     noCursorElements.forEach((element) => {
//       element.addEventListener("mouseover", handleMouseOverImage);
//       element.addEventListener("mouseout", handleMouseOutImage);
//     });

//     viewElements.forEach((element) => {
//       element.addEventListener("mouseover", handleMouseOverText);
//       element.addEventListener("mouseout", handleMouseOutText);
//     });

//     window.addEventListener("mousemove", manageMouseMove);

//     return () => {
//       clickableElements.forEach((element) => {
//         element.removeEventListener("mouseenter", handleMouseEnter);
//         element.removeEventListener("mouseleave", handleMouseLeave);
//       });

//       noCursorElements.forEach((element) => {
//         element.removeEventListener("mouseover", handleMouseOverImage);
//         element.removeEventListener("mouseout", handleMouseOutImage);
//       });

//       viewElements.forEach((element) => {
//         element.removeEventListener("mouseover", handleMouseOverText);
//         element.removeEventListener("mouseout", handleMouseOutText);
//       });

//       window.removeEventListener("mousemove", manageMouseMove);
//     };
//   }, []);

//   return (
//     <motion.div
//       style={{
//         left: smoothMouse.x,
//         top: smoothMouse.y,
//         width: cursorWidth,
//         height: cursorHeight,
//         pointerEvents: "none",
//         transform: "translate(-50%, -50%)",
//         mixBlendMode: isOverImage ? "normal" : "difference",
//       }}
//       className={`${isOverImage ? 'bg-none' : 'bg-white'} z-50 select-none fixed rounded-full`}
//     ></motion.div>
//   );
// };

// export default CustomCursor;

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const cursorSize = 32;
  const expandedSize = 64;
  const largeExpandedSize = 96;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverImage, setIsOverImage] = useState(false);
  const [isLargeExpanded, setIsLargeExpanded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false); // State to detect touch devices

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const sizeSpringOptions = { damping: 12, stiffness: 150 };

  const cursorWidth = useSpring(cursorSize, sizeSpringOptions);
  const cursorHeight = useSpring(cursorSize, sizeSpringOptions);

  useEffect(() => {
    const checkTouchDevice = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
      }
    };

    checkTouchDevice(); // Initial checking
    window.addEventListener('resize', checkTouchDevice); // Rechecking on resize

    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  useEffect(() => {
    if (isLargeExpanded) {
      cursorWidth.set(largeExpandedSize);
      cursorHeight.set(largeExpandedSize);
    } else if (isExpanded) {
      cursorWidth.set(expandedSize);
      cursorHeight.set(expandedSize);
    } else {
      cursorWidth.set(cursorSize);
      cursorHeight.set(cursorSize);
    }
  }, [isExpanded, isLargeExpanded]);

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleMouseOverImage = () => {
    setIsOverImage(true);
  };

  const handleMouseOutImage = () => {
    setIsOverImage(false);
  };

  const handleMouseOverText = () => {
    setIsLargeExpanded(true);
  };

  const handleMouseOutText = () => {
    setIsLargeExpanded(false);
  };

  useEffect(() => {
    if (isTouchDevice) return; 

    const clickableElements = document.querySelectorAll(".interactive, .expand");
    const noCursorElements = document.querySelectorAll("img, input, textarea");
    const viewElements = document.querySelectorAll(".largeExpand");

    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    noCursorElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOverImage);
      element.addEventListener("mouseout", handleMouseOutImage);
    });

    viewElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOverText);
      element.addEventListener("mouseout", handleMouseOutText);
    });

    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      noCursorElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOverImage);
        element.removeEventListener("mouseout", handleMouseOutImage);
      });

      viewElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOverText);
        element.removeEventListener("mouseout", handleMouseOutText);
      });

      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null; // Returning nothing if it's a touch device

  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        width: cursorWidth,
        height: cursorHeight,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        mixBlendMode: isOverImage ? "normal" : "difference",
      }}
      className={`${isOverImage ? 'bg-none' : 'bg-white'} z-50 select-none fixed rounded-full`}
    ></motion.div>
  );
};

export default CustomCursor;
