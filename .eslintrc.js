module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react-refresh',
    'react',
    '@typescript-eslint',
    'prettier',
    'css-modules',
    'simple-import-sort',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
      },
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'css-modules/composed-class-names': 'warn',
    'css-modules/css-variables': 'warn',
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/no-unescaped-entities': ['off'],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/require': [
      'error',
      {
        groups: [
          // Packages come first.
          ['^react', '^\\w', '^@hookform', '^@radix-ui'],
          // Internal packages.
          ['^@store(/.*|$)'],
          ['^@components(/.*|$)'],
          ['^@ui(/.*|$)'],
          ['^@lib(/.*|$)'],
          ['^@pages(/.*|$)'],
          ['^@utils(/.*|$)'],
          ['^@hooks(/.*|$)'],
          ['^@services(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
};
