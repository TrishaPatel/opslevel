const esModules = ['@agm', 'ngx-bootstrap'].join('|');
module.exports = {
  verbose: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
   testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"],
   transform: {
     "^.+\\.(js|jsx|mjs)$": "<rootDir>/jest/jest-transformer.js",
     "^.+\\.svg$": "<rootDir>/jest/svgTransform.js"
   },
   transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
