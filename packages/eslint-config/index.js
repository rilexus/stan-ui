const path = require("path");
const tsEslintRules = require("./typescript-eslint-rules.json");
const eslintBuiltinRules = require("./eslint-builtin-rules.json");
const eslintPluginRules = require("./eslint-plugin-rules.json");

/**
 * Enable @blueprintjs/eslint-plugin.
 * For TS files, configure typescript-eslint, including type-aware lint rules which use the TS program.
 */
module.exports = {
  plugins: ["header", "import", "jsdoc", "react"],
  extends: ["plugin:import/typescript"],
  parserOptions: { ecmaVersion: 2017 },
  rules: {
    ...eslintBuiltinRules,
    ...eslintPluginRules,
  },
  overrides: [
    {
      files: ["*.js"],
      env: {
        node: true,
        es6: true,
      },
    },
    {
      files: ["**/*.{ts,tsx}"],
      env: {
        browser: true,
      },
      plugins: ["@typescript-eslint", "@typescript-eslint/tslint", "deprecation"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: ["{src,test}/tsconfig.json"],
      },
      rules: {
        // run the tslint rules which are not yet converted (run inside eslint)
        "@typescript-eslint/tslint/config": [
          "error",
          {
            lintFile: path.resolve(__dirname, "./tslint.json"),
          },
        ],
        ...tsEslintRules,
        "deprecation/deprecation": "error",
      },
    },
    {
      files: ["**/test/**/*.{ts,tsx}", "**/test/*.{ts,tsx}"],
      env: {
        browser: true,
        mocha: true,
      },
      rules: {
        "react/display-name": "off",
        "react/jsx-no-bind": "off",
        "react/no-find-dom-node": "off"
      }
    },
  ],
};