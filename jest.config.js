module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
