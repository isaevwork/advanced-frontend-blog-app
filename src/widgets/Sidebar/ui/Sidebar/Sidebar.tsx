import cls from "./Sidebar.module.scss";

import { useVariant } from "app/providers/VariantProvider/lib/useVariant";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/aboutPage_icon.svg";
import MainIcon from "shared/assets/icons/mainPage_icon.svg";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
  collapsed?: boolean;
}

export const Sidebar = ({ className, collapsed }: SidebarProps) => {
  const { variant } = useVariant();
  const {t, i18n} = useTranslation();

  return (
    <div
        data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        variant,
      ])}
    >
        <div className={cls.links}>
                <AppLink to={RoutePath.main} className={cls.item}>
                    <MainIcon className={cls.icon} />
                   <span className={cls.link}>
                        {t('Главная')}
                   </span>
                </AppLink>
                <AppLink to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
        </div>
      <div className={cls.switchersWrapper}>
          <ThemeSwitcher />
          <LangSwitcher />
      </div>
    </div>
  );
};
