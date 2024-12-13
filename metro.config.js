const {getDefaultConfig} = require('@react-native/metro-config');

module.exports = {
  ...getDefaultConfig(__dirname),
  resolver: {
    extraNodeModules: {
      'react-native': require.resolve('react-native'),
    },
  },
};
