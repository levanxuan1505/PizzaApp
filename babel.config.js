module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        // root: ['./src'],
        extensions: ['.ios.tsx', '.android.tsx', '.js', '.ts', '.tsx', '.json'],
        // alias: {
        //   '@button': ['.src/components/Button'],
        //   '@input': ['.src/components/Input'],
        //   '@Loader': ['.src/components/Loader'],
        //   '@secondaryButton': ['.src/components/SecondaryButton'],
        //   '@separator': ['.src/components/Separator'],
        //   '@toggleButton': ['.src/components/ToggleButton'],
        //   '@welcomeCard': ['.src/components/WelcomeCard'],
        // },

        alias: {
          // This needs to be mirrored in tsconfig.json
          // components: './src/components',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
