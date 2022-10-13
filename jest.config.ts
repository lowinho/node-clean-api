export default {
  // clearMocks: true,
  roots: ['./src'],
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
