import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ThemeDecorator} from "shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import {AppLink, AppLinkTheme} from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    variant: AppLinkTheme.PRIMARY
};

Primary.decorators = [ThemeDecorator(Variant.DEFAULT)];

export const Inverted = Template.bind({});
Inverted.args = {
    children: 'Text',
    variant: AppLinkTheme.INVERTED
};

Inverted.decorators = [ThemeDecorator(Variant.DARK)];
