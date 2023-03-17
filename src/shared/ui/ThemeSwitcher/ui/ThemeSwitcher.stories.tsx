import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ThemeDecorator} from "shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [ThemeDecorator(Variant.DEFAULT)];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Variant.DARK)];
