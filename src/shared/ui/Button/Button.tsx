import { ButtonHTMLAttributes, FC } from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss"

export enum VariantButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}
export enum SizeButton {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: VariantButton;
    square?: boolean;
    size?: SizeButton;
    disabled?: boolean;
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        variant,
        className,
        children,
        size,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[variant]]: true,
        [cls[size]]: true,
        [cls.disabled]: disabled
    }

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])} {...otherProps}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};