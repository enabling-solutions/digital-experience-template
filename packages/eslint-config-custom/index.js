module.exports = {
  extends: ["next", "turbo", "prettier", "plugin:tailwindcss/recommended"],
  plugins: ["tailwindcss"],
  rules: {
    "@next/next/no-html-link-for-pages": "off"
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")]
    }
  }
}
