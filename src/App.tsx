import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from './components/AboutPage/AboutPage.async';
import {MainPageAsync} from './components/MainPage/MainPage.async';
import {Theme, ThemeContext} from "./styles/theme/ThemeContext";

import './styles/index.scss'
import {useTheme} from "./styles/theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>MainPage</Link>
            <Link to={'/about'}>AboutPage</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;