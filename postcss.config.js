module.exports = {
  plugins: {
    "@buddye/postcss-remove-important": {},
    "postcss-prefix-selector": {
      prefix: ".cleanslate",
      transform(prefix, selector) {
        if (selector.includes("tw-")) {
          return `${prefix} ${selector}`;
        } else {
          return selector;
        }
      },
    },
    "postcss-nested": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
