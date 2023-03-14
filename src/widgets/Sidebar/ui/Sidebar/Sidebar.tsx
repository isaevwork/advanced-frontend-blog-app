import { useState } from "react";
// import { classNames } from "src/shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
// import { ThemeSwitcher } from "src/shared/ui/ThemeSwitcher";

// import { useVariant } from "src/app/providers/VariantProvider";
// import {LangSwitcher} from "src/widgets/LangSwitcher/LangSwitcher";
import { useVariant } from "app/providers/VariantProvider/lib/useVariant";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarProps {
  className?: string;
  collapsed?: boolean;
}

export const Sidebar = ({ className, collapsed }: SidebarProps) => {
  const { variant } = useVariant();

  return (
    <div
        data-testid="sidebar"
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
