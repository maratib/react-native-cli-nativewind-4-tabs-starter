module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '\\.css$': '<rootDir>/jest/cssMock.js',
    '^react-native-vector-icons/.+$': '<rootDir>/jest/vectorIconsMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|react-native-screens|react-native-vector-icons)/)',
  ],
};
