import type { Config } from 'jest/build';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  transformIgnorePatterns: [
    'node_modules/(?!(@angular|@ngrx|@ionic-native|@ionic))',
    '<roodDir>/node_modules/(?!@ionic-enterprise)',
  ],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^environments/(.*)$': '<rootDir>/src/environments/$1',
    '^@ionic/core/dist/ionic/svg': '<rootDir>/src/svgoverride.js',
  },
  testPathIgnorePatterns: ['plugins/'],
};

export default config;
