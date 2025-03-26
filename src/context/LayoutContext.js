import { createContext, useEffect, useState } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [selectedLayout, setSelectedLayout] = useState(() => {
        return localStorage.getItem("layout") || "default";
    });


    useEffect(() => {
        localStorage.setItem("layout", selectedLayout);
        // eslint-disable-next-line
    }, [selectedLayout]);

    return (
        <LayoutContext.Provider value={{ selectedLayout, setSelectedLayout }}>
            {children}
        </LayoutContext.Provider>
    );
}