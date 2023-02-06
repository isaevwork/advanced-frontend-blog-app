import React, {FC, useState } from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK;
const ThemeProvider:FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    return (
        <div>
            <ThemeContext.Provider value={{
                theme: theme,
                setTheme: setTheme
            }}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;