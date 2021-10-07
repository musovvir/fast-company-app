module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "never"],
    indent: "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "max-len": "off",
    "multiline-ternary": ["error", "always-multiline"],
    "operator-linebreak": ["error", "before"],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-trailing-spaces": "off"
  }
}
