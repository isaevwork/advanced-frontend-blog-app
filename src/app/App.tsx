import React, { useContext, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useVariant } from "app/providers/VariantProvider";

import "./styles/index.scss";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { variant } = useVariant();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={classNames("app", {}, [variant])}>
      <Navbar setCollapsed={setCollapsed} collapsed={collapsed} />
      <div className="content-type">
        <Sidebar collapsed={collapsed} />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
