/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/sum.ts'],
  coverageDirectory: "coverage",
  coverageReporters: [
    "text",
    "html",
    "text-summary"
  ],
  reporters: [
    "default",
    ["jest-junit", { usePathForSuiteName: "true" }]
  ]
};
