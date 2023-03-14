import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button, VariantButton } from "shared/ui/Button/Button";
import { Variant } from "app/providers/VariantProvider/ui/VariantContext";
import { useVariant } from "app/providers/VariantProvider/lib/useVariant";
import DarkMenu from "shared/assets/icons/darkMenu_icon.svg";
import DefaultMenu from "shared/assets/icons/defaultMenu_icon.svg";

interface NavbarProps {
  className?: string;
  setCollapsed: (value: boolean) => void;
  collapsed: boolean;
}
export const Navbar = ({ className, setCollapsed, collapsed }: NavbarProps) => {
  const { variant, toggleVariant } = useVariant();

  return (
    <div className={classNames(cls.navbar, { [cls.variant]: variant }, [className])}>
      <div className={cls.menuWrapper}>
        <Button
            data-testid="sidebar-toggle"
            variant={VariantButton.CLEAR}
            onClick={() => setCollapsed(!collapsed)}
        >
          {variant === Variant.DARK ? (
            <DarkMenu width="25" />
          ) : (
            <DefaultMenu width="25" />
          )}
        </Button>
      </div>

      <div className={cls.links}>
        <AppLink to={"/"} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink to={"/about"}>AboutPage</AppLink>
      </div>
    </div>
  );
};
