const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test/',
    '<rootDir>/dist/',
  ],
  modulePathIgnorePatterns: [
  ],
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  globals: {
    'vue-jest': {
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
          ],
        ],
        plugins: [
          'dynamic-import-node',
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-modules-commonjs',
        ],
      },
    },
  },
  collectCoverage: true,
  coverageReporters: ['text', 'clover', 'lcov'],
  collectCoverageFrom: [
    '**/src/**/*.js',
    '**/src/**/*.vue',
  ],
  moduleFileExtensions: [
    'js',
    'vue',
  ],
};
