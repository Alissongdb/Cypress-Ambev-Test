const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: false,
    baseUrl: 'https://front.serverest.dev',
    env: {
      customPaths: 'cypress/',
    },
    setupNodeEvents(on, config) {
      // configure plugins here
    },
  },
});
