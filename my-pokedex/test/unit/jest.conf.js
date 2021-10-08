const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  verbose: true,
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
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
      },
    },
  },
  coverageDirectory: '<rootDir>/test/unit/coverage',
  setupFiles: ['<rootDir>/test/unit/setup'],
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**'
  ]
}
