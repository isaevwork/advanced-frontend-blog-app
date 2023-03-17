import {StyleDecorator} from "../../src/shared/config/storyBook/StyleDecorator/StyleDecorator";
import {addDecorator} from '@storybook/react';
import {Variant} from "../../src/app/providers/VariantProvider/ui/VariantContext";
import {ThemeDecorator} from "../../src/shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {RouterDecorator} from "../../src/shared/config/storyBook/RouterDecorator/RouterDecorator";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Variant.DEFAULT));
addDecorator(RouterDecorator)