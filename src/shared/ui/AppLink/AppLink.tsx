import cls from './AppLink.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = ({children, to, className, theme = AppLinkTheme.PRIMARY}: AppLinkProps) => {
    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};