"use client";
import React, { useState, useEffect, createContext } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMediaQuery } from "react-responsive";

// This file defines a custom cursor component that can be used in a React application.
export const CursorContext = createContext();

// This component provides a context for the cursor, allowing other components to access and modify its state.
const CursorProvider = ({ children }) => {
    // State to manage the cursor's size and background color.
    const [cursor, setCursor] = useState({ size:30, background: "#473936" });

    // This effect runs once when the component mounts to set the initial cursor size and background color.
    const [isHovering, setHovering] = useState(false);
    // This effect runs once when the component mounts to set the initial cursor size and background color.
    const smallViewportIsActive = useMediaQuery({
        query: "(max-width: 1200px)",
    });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = {damping: 20, stiffness: 290, mass: 0.45}
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouse = (e) => {
        if (!smallViewportIsActive) {
            mouseX.set(e.clientX - cursor.size / 2);
            mouseY.set(e.clientY - cursor.size / 2);
        } else {
            setCursor({ size:0, background: "none" });
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouse);
        return () => {
            window.removeEventListener("mousemove", handleMouse);
        };
    }, [cursor]);

    const mouseEnterHandler = () => {
        setCursor({ size: 90, background: "#00423a " });
        setHovering(true);  
    };

    const mouseLeaveHandler = () => {
        setCursor({ size: 30, background: "#473936" });
        setHovering(false);
    };
    // 
    return <CursorContext.Provider value={{ mouseEnterHandler, mouseLeaveHandler }}>
        <motion.div className="fixed z-[99] rounded-full pointer-events-none
        transition-all duration-300" style={{
            left: springX,
            top: springY,
            width: cursor.size,
            height: cursor.size,
            backgroundColor: cursor.background,
            mixBlendMode: isHovering ? "difference" : "normal",
            transition: "width 0.2s ease-in-out, height 0.2s ease-in-out"
        }} />
            {children}
        </CursorContext.Provider>

};

export default CursorProvider;
