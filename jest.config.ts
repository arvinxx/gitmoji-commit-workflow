import baseConfig from './jest.config.base';
import { Config } from '@umijs/test';

const config: Config.InitialOptions = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*/jest.config.ts'],
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.ts'],
  coverageDirectory: '<rootDir>/coverage/',
};

export default config;
