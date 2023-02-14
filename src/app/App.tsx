import React, { useState } from 'react';

import {classNames} from "shared/lib/classNames/classNames";
import {useVariant} from "app/providers/VariantProvider";

import './styles/index.scss'
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const { variant } = useVariant();

    return (
        <div className={classNames('app', {}, [variant])}>
            <Navbar/>
            <div className="content-type">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;