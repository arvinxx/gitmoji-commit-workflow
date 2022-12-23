const { createConfig } = require('./packages/release-config/lib/createConfig');

const config = createConfig({});

module.exports = { ...config };
