module.exports = {
    preset: 'jest-playwright-preset',
    testMatch: ['**/Test/**/*.spec.ts'],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
      },
};