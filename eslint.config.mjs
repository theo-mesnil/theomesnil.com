import nextVitals from 'eslint-config-next/core-web-vitals'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  eslintPluginPrettierRecommended,
  perfectionist.configs['recommended-natural'],
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    rules: {
      'no-console': 'error',
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '_$|^React$',
        },
      ],
      'perfectionist/sort-imports': 'warn',
      'prettier/prettier': 2,
    },
  },
])

export default eslintConfig
