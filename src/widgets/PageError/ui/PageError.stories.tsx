import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ThemeDecorator} from "shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import {PageError} from "widgets/PageError";

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {},
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [ThemeDecorator(Variant.DEFAULT)];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Variant.DARK)];
