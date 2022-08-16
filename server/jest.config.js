module.exports = {
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  // Use this configuration option to add custom reporters to Jest
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Test Report',
      },
    ],
  ],
  // The test environment that will be used for testing
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
}
