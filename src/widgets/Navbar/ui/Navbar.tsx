import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {Button, VariantButton} from "shared/ui/Button/Button";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import { useVariant } from "app/providers/VariantProvider/lib/useVariant";
import DarkMenu from "shared/assets/icons/darkMenu_icon.svg";
import DefaultMenu from "shared/assets/icons/defaultMenu_icon.svg";
import { useState } from "react";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
    const {variant, toggleVariant} = useVariant();

    return (
        <div className={classNames(cls.navbar, {[cls.variant]: variant}, [className])}>
            <Button
                variant={VariantButton.CLEAR}
                onClick={toggleVariant}
            >

            </Button>
            <Button variant={VariantButton.CLEAR}>
            {variant === Variant.DARK ? <DarkMenu width="30"/> : <DefaultMenu width="30"/>}
            </Button>

            <div className={cls.links}>
                <AppLink
                    to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink
                    to={'/about'}>
                    AboutPage
                </AppLink>
            </div>
        </div>
    );
};

