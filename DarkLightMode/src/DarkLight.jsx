import { useState, createContext, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const handletoggleButton = () => {
        setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={[theme, handletoggleButton]}>
            {children}
        </ThemeContext.Provider>
    );
};

export const DarkLight = () => {
    const [theme, handletoggleButton] = useContext(ThemeContext);
    return (
        <div className={`min-h-screen flex flex-col justify-center items-center transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
            <h1 className="text-3xl font-bold mb-4">Dark light Mode Website</h1>
            <p className="mb-6">Hello! My React v19 fans</p>
            <button
                onClick={handletoggleButton}
                className={`px-6 py-2 rounded bg-gray-800 text-white hover:bg-gray-600 transition-colors duration-200 ${theme === "light" ? "bg-gray-200 text-black hover:bg-gray-300" : ""}`}
            >
                {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            </button>
        </div>
    );
};
