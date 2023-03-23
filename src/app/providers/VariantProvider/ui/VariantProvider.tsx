import React, {FC, useState } from 'react';
import {LOCAL_STORAGE_THEME_KEY, Variant, VariantContext} from "./VariantContext";

const defaultVariant = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Variant || Variant.DARK;

interface VariantProviderProps {
    initialVariant?: Variant;
}
const VariantProvider: FC<VariantProviderProps> = (props) => {
    const {initialVariant, children} = props;
    const [variant, setVariant] = useState<Variant>(initialVariant || defaultVariant);

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