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
          primary: '#09e19b',
          secondary: '#f3f3f3',
          darkGreen: '#046344',
          darknessGreen: '#057f57',
          blackGreen: '#03432e',
          background: '#01160F',
          error: '#d63031',
          info: '#0984e3',
          success: '#00cec9',
          surface: '#6c5ce7',
          warning: '#2d3436',
          customBlack: '#000D09',
          white: '#fff',
          gray: '#666666',
          darkGray: '#757575',
          lightGray: '#f5f5f5',
          lightGreen: '#dcdfdc',
          darkBlue: '#1877F2',
          darkPurple: '#9146ff',
          purpleRed: 'rgba(187, 0, 173, 1)',
          redPurple: 'rgba(240, 0, 16, 1)',
          lightBlue: '#4680c2',
          darkRed: '#ed2222',
          customRed: '#f00',
        },
        dark: false,
        variables: {},
      },
    },
  },
});
