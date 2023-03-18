import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ThemeDecorator} from "shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {},
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [ThemeDecorator(Variant.DEFAULT)];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Variant.DARK)];
