import { useState } from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import DarkMenu from "shared/assets/icons/darkMenu_icon.svg";
import DefaultMenu from "shared/assets/icons/defaultMenu_icon.svg";
import {Button, VariantButton} from "shared/ui/Button/Button";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import {useVariant} from "app/providers/VariantProvider";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps, {}) => {
    const {variant} = useVariant();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prevStatus => !prevStatus);
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [variant])}>
            <Button
                variant={VariantButton.CLEAR}
                onClick={onToggle}
            >
                {variant === Variant.DARK ? <DarkMenu width="30"/> : <DefaultMenu width="30"/>}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};