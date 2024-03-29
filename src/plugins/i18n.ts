import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import ru from '../locales/ru.json';
import am from '../locales/am.json';

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
    am,
  },
});
