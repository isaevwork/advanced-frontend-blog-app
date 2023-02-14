import { createContext } from "react";

export enum Variant {
    DEFAULT = 'default',
    DARK = 'dark',
}

export interface VariantContextProps {
    variant?: Variant;
    setVariant?: (variant: Variant) => void;
}
export const VariantContext = createContext<VariantContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'variant';