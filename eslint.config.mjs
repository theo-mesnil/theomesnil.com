import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import _import from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  ...fixupConfigRules(
    compat.extends(
      'next/core-web-vitals',
      'prettier',
      'plugin:import/recommended',
      'plugin:import/typescript'
    )
  ),
  {
    plugins: {
      prettier,
      import: fixupPluginRules(_import),
    },

    rules: {
      'no-console': 'error',

      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '_$|^React$',
        },
      ],

      'prettier/prettier': 2,

      'import/order': [
        2,
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },

          'newlines-between': 'always',

          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],
    },
  },
]
