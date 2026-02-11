import { Locales, type IntlayerConfig } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    react: {
      useSuspense: true,
    },
    locales: [
      Locales.ENGLISH,
      Locales.TURKISH,
      Locales.GREEK,
      Locales.RUSSIAN,
    ],
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;
