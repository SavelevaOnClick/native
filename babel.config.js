module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.tsx', '.android.tsx', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': ['./src/assets'],
          '@screens': ['./src/screens'],
          '@components': ['./src/components'],
          '@hooks': ['./src/hooks'],
          '@constants': ['./src/constants'],
          '@types': ['./src/types/'],
          '@services': ['.src/services'],
        },
        cwd: 'packagejson',
      },
    ],
    'react-native-reanimated/plugin'
  ],
};


