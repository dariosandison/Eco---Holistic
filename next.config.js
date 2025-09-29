// Keep a single canonical config. This bridges CJS -> ESM to avoid conflicts.
module.exports = require('./next.config.mjs').default;
