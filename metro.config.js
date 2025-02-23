const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('cjs'); // รองรับ .cjs (บางแพ็กเกจใช้)

module.exports = config;
