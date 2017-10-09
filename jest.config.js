"use strict";

const config = {
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/test/"],
  coverageReporters: ["json", "lcov"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  moduleNameMapper: {
    "^__curry__$": "<rootDir>/src/internal/curry.js",
    "^reiter$": "<rootDir>/src/index.js",
    "^reiter/(.+)$": "<rootDir>/src/$1"
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"]
};

module.exports = config;
