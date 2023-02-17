import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {Button, VariantButton} from "shared/ui/Button/Button";
import RuIcon from "shared/assets/icons/ruLanguage_icon.svg"
import EnIcon from "shared/assets/icons/enLanguage_icon.svg"
import {useVariant} from "app/providers/VariantProvider";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {i18n, t} = useTranslation();
    const {variant} = useVariant();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div className={cls.switcherWrapper}>
            <Button
                variant={VariantButton.CLEAR}
                onClick={toggle}
                className={classNames(cls.langSwitcher, {}, [className])}
            >
                {i18n.language === 'ru' ? <RuIcon className={cls.ruIconWrapper} /> : <EnIcon className={cls.enIconWrapper} />}
            </Button>
        </div>

    );




};