import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import DefaultIcon from 'shared/assets/icons/defaultTheme_icon.svg';
import DarkIcon from 'shared/assets/icons/darkTheme_icon.svg';
import DarkMenu from 'shared/assets/icons/darkMenu_icon.svg'
import DefaultMenu from 'shared/assets/icons/defaultMenu_icon.svg'
import { Variant } from 'app/providers/VariantProvider/ui/VariantContext';
import {Button, VariantButton} from 'shared/ui/Button/Button';
import { useVariant } from 'app/providers/VariantProvider/lib/useVariant';


interface VariantSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}: VariantSwitcherProps) => {
    const {variant, toggleVariant} = useVariant();

    return (
        <div className={cls.themeWrapper}>
            <Button
                variant={VariantButton.CLEAR}
                onClick={toggleVariant}
                className={classNames(cls.themeSwitcher, {}, [className])}
            >
                {variant === Variant.DARK ? <DarkIcon width="20"/> : <DefaultIcon width="20"/>}
            </Button>
        </div>
    );
};