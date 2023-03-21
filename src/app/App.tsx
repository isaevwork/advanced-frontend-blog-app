import React, {Suspense, useContext, useEffect, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useVariant } from "app/providers/VariantProvider";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import "./styles/index.scss";


const App = () => {
  const { variant } = useVariant();
  const [collapsed, setCollapsed] = useState(false);

  console.log(collapsed)
  return (

    <div className={classNames("app", {}, [variant])}>
        <Suspense fallback="">
          <Navbar setCollapsed={setCollapsed} collapsed={collapsed} />
          <div className="content-type">
            <Sidebar collapsed={collapsed} />
            <AppRouter />
          </div>
        </Suspense>
    </div>
  );
};

export default App;
