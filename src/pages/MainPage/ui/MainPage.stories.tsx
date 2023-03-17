import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ThemeDecorator} from "shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {},
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [ThemeDecorator(Variant.DEFAULT)];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Variant.DARK)];
