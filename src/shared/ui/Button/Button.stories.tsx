import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Button, SizeButton, VariantButton} from './Button';
import {ThemeDecorator} from "shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Text"
};

Primary.decorators = [ThemeDecorator(Variant.DEFAULT)];
export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: VariantButton.CLEAR
};

Clear.decorators = [ThemeDecorator(Variant.DEFAULT)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    variant: VariantButton.CLEAR_INVERTED
};

ClearInverted.decorators = [ThemeDecorator(Variant.DEFAULT)];
export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: VariantButton.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: VariantButton.OUTLINE
};

OutlineDark.decorators = [ThemeDecorator(Variant.DARK)];

export const OutlineSizeS = Template.bind({});
OutlineSizeS.args = {
    children: 'Text',
    variant: VariantButton.OUTLINE,
    size: SizeButton.S
};

OutlineSizeS.decorators = [ThemeDecorator(Variant.DARK)];
export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    variant: VariantButton.OUTLINE,
    size: SizeButton.M
};

OutlineSizeM.decorators = [ThemeDecorator(Variant.DARK)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    variant: VariantButton.OUTLINE,
    size: SizeButton.L
};

OutlineSizeL.decorators = [ThemeDecorator(Variant.DARK)];


export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    variant: VariantButton.OUTLINE,
    size: SizeButton.XL
};

OutlineSizeXL.decorators = [ThemeDecorator(Variant.DARK)];

