import React from 'react';

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import './styles/index.scss'
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <ThemeSwitcher />
        </div>
    );
};

export default App;