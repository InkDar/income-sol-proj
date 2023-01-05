import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/lib/styles/main.sass';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          customBlack: '010101',
          customWhite: 'FFFDF8',
          customYellow: 'FFCD4B',
          TransparentYellow: 'rgba(255, 205, 75, 0.3)',
        },
        dark: false,
        variables: {},
      },
    },
  },
});
