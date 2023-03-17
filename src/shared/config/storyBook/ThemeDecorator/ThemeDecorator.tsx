import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";


export const ThemeDecorator = (variant: Variant) => (StoryComponent: Story) => {
    return (
        <div className={` app ${variant} `}>
            <StoryComponent />
        </div>
    )
};