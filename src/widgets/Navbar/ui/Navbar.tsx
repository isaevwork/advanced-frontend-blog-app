import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button, SizeButton, VariantButton } from "shared/ui/Button/Button";
import { Variant } from "app/providers/VariantProvider/ui/VariantContext";
import { useVariant } from "app/providers/VariantProvider/lib/useVariant";
import DarkMenu from "shared/assets/icons/darkMenu_icon.svg";
import DefaultMenu from "shared/assets/icons/defaultMenu_icon.svg";
import {Modal} from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import {useCallback, useState } from "react";

interface NavbarProps {
  className?: string;
  setCollapsed: (value: boolean) => void;
  collapsed: boolean;
}
export const Navbar = (props: NavbarProps) => {
  const {className, setCollapsed, collapsed } = props
  const { variant } = useVariant();
  const { t, i18n } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [isAuthModal]);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
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
        <div className={cls.modalWrapper}>
          <Button variant={VariantButton.OUTLINE}  onClick={onToggleModal}>{t('Войти')}</Button>
          <Modal isOpen={isAuthModal} onClose={() => onToggleModal}>
            Браузер может пропускать некоторые операции, если они не нужны. Понимать, когда браузер выполняет
            или пропускает тот или иной шаг, может быть полезным для оптимизации веб-страницы. Более подробно о
            каждом этапе и его связи с производительностью можно прочитать во второй части хабрастатьи
            «Оптимизация производительности фронтенда».
          </Modal>
        </div>
     </div>
  );
};
