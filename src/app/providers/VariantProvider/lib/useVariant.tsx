import { useContext } from "react";
import {LOCAL_STORAGE_THEME_KEY, Variant, VariantContext} from "../ui/VariantContext";

interface UseVariantResult {
       toggleVariant?: () => void;
       variant?: Variant;
}

export function useVariant():UseVariantResult {
    const {variant, setVariant} = useContext(VariantContext);
    const toggleVariant = () => {
        const newVariant = variant === Variant.DARK ? Variant.DEFAULT : Variant.DARK;
        setVariant(newVariant);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newVariant);
    }
    return {
        variant,
        toggleVariant
    }
}