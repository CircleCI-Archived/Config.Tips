module.exports = {
  // ...
  extends: [
    // ...
    "plugin:astro/recommended",
    "plugin:security/recommended",
    "plugin:astro/jsx-a11y-recommended",
  ],
  plugins: [
    // ... any other plugins you're using
    "simple-import-sort",
  ],
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
      },
    },
    {
      // Configuration for `.ts` and `.tsx` files
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json", // point to your tsconfig.json if needed
      },
      rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "security/detect-non-literal-fs-filename": "off",
      },
    },
    // ...
  ],
};
