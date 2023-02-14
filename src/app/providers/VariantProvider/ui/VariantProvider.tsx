import React, {FC, useState } from 'react';
import {LOCAL_STORAGE_THEME_KEY, Variant, VariantContext} from "./VariantContext";

const defaultVariant = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Variant || Variant.DARK;
const VariantProvider:FC = ({children}) => {
    const [variant, setVariant] = useState<Variant>(defaultVariant);

    return (
        <div>
            <VariantContext.Provider value={{
                variant: variant,
                setVariant: setVariant
            }}>
                {children}
            </VariantContext.Provider>
        </div>
    );
};

export default VariantProvider;