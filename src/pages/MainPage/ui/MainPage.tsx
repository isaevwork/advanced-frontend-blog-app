import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, SizeButton, VariantButton} from "shared/ui/Button/Button";

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('Главная')}
            <div>
                <Button variant={VariantButton.BACKGROUND_INVERTED} size={SizeButton.XL}>
                    Take me
                </Button>
            </div>
        </div>
    );
};

export default MainPage;