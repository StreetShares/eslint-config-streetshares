module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:jsx-a11y/recommended",
    "airbnb-typescript",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    "react",
    "react-hooks",
    "unused-imports",
    "jsx-a11y",
    "scanjs-rules",
    "no-unsanitized",
    "prototype-pollution-security-rules",
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": 0,
    "operator-linebreak": 0,
    "max-len": [
      "error",
      { code: 120, ignoreStrings: true, ignoreComments: true },
    ],
    "implicit-arrow-linebreak": 0,
    quotes: ["error", "single", { avoidEscape: true }],
    "prettier/prettier": ["warn"],
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
    "arrow-body-style": 0,
    "require-await": ["error"],
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "react/jsx-curly-newline": 0,
    "react/prop-types": 0,
    "object-curly-newline": 0,
    "react/jsx-one-expression-per-line": 0,
    "global-require": 0,
    "react/jsx-wrap-multilines": 0,
    "react/require-default-props": 0,
    "no-unused-vars": 0,
    // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    "@typescript-eslint/camelcase": 0,
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": "warn",
    "unused-imports/no-unused-vars-ts": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    // Security rules
    "scanjs-rules/accidental_assignment": 1,
    "scanjs-rules/assign_to_hostname": 1,
    "scanjs-rules/assign_to_href": 1,
    "scanjs-rules/assign_to_location": 1,
    "scanjs-rules/assign_to_onmessage": 1,
    "scanjs-rules/assign_to_pathname": 1,
    "scanjs-rules/assign_to_protocol": 1,
    "scanjs-rules/assign_to_search": 1,
    "scanjs-rules/assign_to_src": 1,
    "scanjs-rules/call_Function": 1,
    "scanjs-rules/call_addEventListener": 1,
    "scanjs-rules/call_addEventListener_deviceproximity": 1,
    "scanjs-rules/call_addEventListener_message": 1,
    "scanjs-rules/call_connect": 1,
    "scanjs-rules/call_eval": 1,
    "scanjs-rules/call_execScript": 1,
    "scanjs-rules/call_hide": 1,
    "scanjs-rules/call_open_remote=true": 1,
    "scanjs-rules/call_parseFromString": 1,
    "scanjs-rules/call_setImmediate": 1,
    "scanjs-rules/call_setInterval": 1,
    "scanjs-rules/identifier_indexedDB": 1,
    "scanjs-rules/identifier_localStorage": 1,
    "scanjs-rules/identifier_sessionStorage": 1,
    "scanjs-rules/new_Function": 1,
    "scanjs-rules/property_addIdleObserver": 1,
    "scanjs-rules/property_createContextualFragment": 1,
    "scanjs-rules/property_crypto": 1,
    "scanjs-rules/property_geolocation": 1,
    "scanjs-rules/property_getUserMedia": 1,
    "scanjs-rules/property_indexedDB": 1,
    "scanjs-rules/property_localStorage": 1,
    "scanjs-rules/property_mgmt": 1,
    "scanjs-rules/property_sessionStorage": 1,

    /** no-unsanitized rules**/
    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",

    /** prototype-pollution-security-rules rules**/
    "prototype-pollution-security-rules/detect-merge": 1,
    "prototype-pollution-security-rules/detect-merge-objects": 1,
    "prototype-pollution-security-rules/detect-merge-options": 1,
    "prototype-pollution-security-rules/detect-deep-extend": 1,
  },
};
