const { createConfig } = require('./packages/release-config/lib/createConfig');

const config = createConfig({ monorepo: true });

module.exports = { ...config };