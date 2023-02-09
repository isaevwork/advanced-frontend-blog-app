import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import { classNames } from 'shared/lib/classNames/classNames';
import DefaultIcon from 'shared/assets/icons/defaultTheme_icon.svg';
import DarkIcon from 'shared/assets/icons/darkTheme_icon.svg';
import { Theme } from 'app/providers/ThemeProvider/ui/ThemeContext';
import {Button, ThemeButton} from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon width="30"/> : <DefaultIcon width="30"/>}
        </Button>
    );
};