import { resolve } from 'path';

export interface CustomConfig {
  scopeDisplayName?: Record<string, string>;
}

let changelogrc: CustomConfig = {};
let changelogConfig: CustomConfig = {};

// .changelogrc.js
try {
  changelogrc = require(resolve(process.cwd(), '.changelogrc.js'));
} catch (e) {}

// changelog.config.js
try {
  changelogConfig = require(resolve(process.cwd(), 'changelog.config.js'));
} catch (e) {}

const pkg: CustomConfig = { ...changelogrc, ...changelogConfig };

export default pkg;
