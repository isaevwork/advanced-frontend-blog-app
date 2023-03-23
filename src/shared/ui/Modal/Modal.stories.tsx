import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ThemeDecorator} from "shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Variant} from "app/providers/VariantProvider/ui/VariantContext";
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: "Браузер может пропускать некоторые операции, если они не нужны. Понимать, когда браузер выполняет\n" +
        "или пропускает тот или иной шаг, может быть полезным для оптимизации веб-страницы. Более подробно о\n" +
        "каждом этапе и его связи с производительностью можно прочитать во второй части хабрастатьи\n"
};

Primary.decorators = [ThemeDecorator(Variant.DEFAULT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: "Браузер может пропускать некоторые операции, если они не нужны. Понимать, когда браузер выполняет\n" +
        "или пропускает тот или иной шаг, может быть полезным для оптимизации веб-страницы. Более подробно о\n" +
        "каждом этапе и его связи с производительностью можно прочитать во второй части хабрастатьи\n"
};

Dark.decorators = [ThemeDecorator(Variant.DARK)];


