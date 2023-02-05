import React, { Suspense } from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './components/AboutPage/AboutPage.async';
import { MainPageAsync } from './components/MainPage/MainPage.async';

import './style.scss'
const App = () => {
    return (
        <div className='app'>
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