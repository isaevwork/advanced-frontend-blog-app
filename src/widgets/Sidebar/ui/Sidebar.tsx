import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import { Button, VariantButton } from "shared/ui/Button/Button";
import { Variant } from "app/providers/VariantProvider/ui/VariantContext";
import { useVariant } from "app/providers/VariantProvider";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
  collapsed: boolean;
}

export const Sidebar = ({ className, collapsed }: SidebarProps) => {
  const { variant } = useVariant();

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        variant,
      ])}
    >
      <div className={cls.switchersWrapper}>
          <ThemeSwitcher />
          <LangSwitcher />
      </div>
    </div>
  );
};
