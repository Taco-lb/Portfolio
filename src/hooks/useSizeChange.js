import { useEffect, useState } from "react";

export function useIsMobile (breakpointX) {
    const [isMobile, setIsMobile] = useState( typeof window !== "undefined" ? window.innerWidth <= breakpointX : false);

    useEffect(() => {
        const mediaQueryX =  window.matchMedia(`(max-width: ${breakpointX}px)`);
        
        const handleChange = () => {
            setIsMobile(mediaQueryX.matches);
        }

        handleChange();
        mediaQueryX.addEventListener("change", handleChange);

        return () => mediaQueryX.removeEventListener("change", handleChange);

    })
    return isMobile;
}

export function useIsLarge(breakpointX, breakpointY){
    const [isLarge, setIsLarge] = useState( typeof window !== "undefined" ? ((window.innerHeight >= breakpointY) && 
    (window.innerWidth >= breakpointX)) : false) ;
    
    useEffect(() => {
        const mediaQueryX =  window.matchMedia(`(min-width: ${breakpointX}px)`);
        const mediaQueryY =  window.matchMedia(`(min-height: ${breakpointY}px)`);

        const handleChange = () => {
            setIsLarge(mediaQueryY.matches && mediaQueryX.matches)
        }

        handleChange();
        mediaQueryX.addEventListener("change", handleChange)
        mediaQueryY.addEventListener("change", handleChange)

        return () => {  mediaQueryY.removeEventListener("change", handleChange);
                        mediaQueryX.removeEventListener("change", handleChange);}
    })

    return isLarge;
}