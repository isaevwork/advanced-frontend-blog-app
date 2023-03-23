import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import {VariantProvider} from "app/providers/VariantProvider";


export const ThemeDecorator = (variant: Variant) => (StoryComponent: Story) => {
    return (
        <VariantProvider>
            <div className={` app ${variant} `}>
                <StoryComponent />
            </div>
        </VariantProvider>
    )
};