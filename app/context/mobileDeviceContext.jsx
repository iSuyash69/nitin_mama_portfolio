"use client"

import { createContext, useState } from "react"

export const MobileDeviceContext=createContext(null);

const MobileDeviceContextProvider=({children})=>{

    const [isMobileDevice,setIsMobileDevice]=useState(false);

    return(
        <MobileDeviceContext.Provider value={{isMobileDevice,setIsMobileDevice}}>
            {children}
        </MobileDeviceContext.Provider>
    )
}

export default MobileDeviceContextProvider;