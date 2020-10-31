module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	roots: [
		'<rootDir>/src'
	],
	testPathIgnorePatterns: [
		'/node_modules/'
	],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['json', ''],
	coverageThreshold: {
		global: {
			branch: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	}
};