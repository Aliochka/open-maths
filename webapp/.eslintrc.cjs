
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "../.eslintrc.json",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "react"],
  settings: {
    react: {
      version: "detect",
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: [".ts", ".tsx"] }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
