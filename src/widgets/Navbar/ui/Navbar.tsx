import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {Button, VariantButton} from "shared/ui/Button/Button";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import {useVariant} from "app/providers/VariantProvider/lib/useVariant";
import DarkMenu from "shared/assets/icons/darkMenu_icon.svg";
import DefaultMenu from "shared/assets/icons/defaultMenu_icon.svg";
import {useTranslation} from "react-i18next";
import {useCallback, useState} from "react";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string;
    setCollapsed: (value: boolean) => void;
    collapsed: boolean;
}

export const Navbar = (props: NavbarProps) => {
    const {className, setCollapsed, collapsed} = props
    const {variant} = useVariant();
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);


    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.menuWrapper}>
                    <Button
                        data-testid="sidebar-toggle"
                        variant={VariantButton.CLEAR}
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {variant === Variant.DARK ? (
                            <DarkMenu width="25"/>
                        ) : (
                            <DefaultMenu width="25"/>
                        )}
                    </Button>
                </div>
                <div className={cls.modalWrapper}>
                    <Button
                        variant={VariantButton.OUTLINE}
                        onClick={onLogout}
                    >
                        {t('Выйти')}
                    </Button>

                </div>
            </div>
        )
    }


    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.menuWrapper}>
                <Button
                    data-testid="sidebar-toggle"
                    variant={VariantButton.CLEAR}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {variant === Variant.DARK ? (
                        <DarkMenu width="25"/>
                    ) : (
                        <DefaultMenu width="25"/>
                    )}
                </Button>
            </div>
            <div className={cls.modalWrapper}>
                <Button
                    variant={VariantButton.OUTLINE}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>

                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            </div>
        </div>
    );
};
