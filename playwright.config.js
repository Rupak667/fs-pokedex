/* eslint-env node */
const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  use: {
    baseURL: 'http://localhost:8080'
  },
  webServer: {
    command: 'npm run dev',
    port: 8080,
    reuseExistingServer: true
  }
})