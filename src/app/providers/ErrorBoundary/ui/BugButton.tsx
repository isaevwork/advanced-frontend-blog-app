import {Button} from "shared/ui/Button/Button";
import {useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//Component only for testing => It should delete in future
export const BugButton = ( ) => {
    const [error, setError] = useState<boolean>(false);
    const {t} = useTranslation();

    const onThrow = () => {
        setError(true);
    }

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t("throw Error")}
        </Button>
    );
};
