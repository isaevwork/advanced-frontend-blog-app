import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ThemeDecorator} from "shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import { Sidebar } from './Sidebar';
import {StoreDecorator} from "shared/config/storyBook/StoreDecorator/StoreDecorator";

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({}, {loginForm: {}})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Variant.DARK), StoreDecorator({}, {loginForm: {}})];
