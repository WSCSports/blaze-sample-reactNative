// metro.config.js
//
// with multiple workarounds for this issue with symlinks:
// https://github.com/facebook/metro/issues/1
//
// with thanks to @johnryan (<https://github.com/johnryan>)
// for the pointers to multiple workaround solutions here:
// https://github.com/facebook/metro/issues/1#issuecomment-541642857
//
// see also this discussion:
// https://github.com/brodybits/create-react-native-module/issues/232

const path = require('path');
const {getDefaultConfig} = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  // workaround for an issue with symlinks encountered starting with
  // metro@0.55 / React Native 0.61
  // (not needed with React Native 0.60 / metro@0.54)
  return {
    ...defaultConfig,

    resolver: {
      extraNodeModules: new Proxy(
        {},
        {get: (_, name) => path.resolve('.', 'node_modules', name)},
      ),
    },

    // quick workaround for another issue with symlinks
    watchFolders: [path.resolve('.'), path.resolve('..')],
  };
})();
