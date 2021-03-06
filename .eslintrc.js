// .eslintrc.js

module.exports = {
  env: {
    browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
    jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
    node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    'react-app', // Use the recommended rules from eslint-config-react-app (bundled with Create React App)
    'eslint:recommended', // Use the recommened rules from eslint
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
    'plugin:react/recommended', // Use the recommended rules from eslint-plugin-react
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint', // Allows for manually setting @typescript-eslint/* rules
    'prettier',
    'react',
    'import', // Allows for manually setting react/* rules
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 70,
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-max-props-per-line': [
      2,
      { maximum: 1, when: 'multiline' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/newline-after-import': 1,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
  },
}
