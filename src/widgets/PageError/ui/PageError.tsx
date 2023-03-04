import { useTranslation } from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss'
import {Button} from "shared/ui/Button/Button";
import {BugButton} from "app/providers/ErrorBoundary";

interface PageErrorProps {
    className?: string;
}

const reloadPage = () => {
    location.reload();
}
export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.pageError, {}, [])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
};