import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {classNames} from "shared/lib/helpers/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import './styles/index.scss'

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>MainPage</Link>
            <Link to={'/about'}>AboutPage</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;