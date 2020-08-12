// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const config = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    verbose: true,

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    transformIgnorePatterns: ['/node_modules/'],
    transform: {},
    testEnvironment: 'jest-environment-node',
};

export default config;
