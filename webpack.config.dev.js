const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./cortico.js",
  output: {
    filename: "cortico-min.js",
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    // [cvo] - removed this because it causes the build to loop forever on Linux at least.
    // maybe it's needed on mac?
    //poll: 1000,
    ignored: /dist/,
  },
  cache: false,
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: true,
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "> 0.25%, not dead, IE > 11",
                },
              ],
              "@babel/preset-react",
            ],
            plugins: [
              ["@babel/plugin-transform-runtime"],
              [
                "@babel/plugin-transform-react-jsx",
                {
                  runtime: "automatic",
                  importSource: "preact",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              publicPath: "",
            },
          },
        ],
      },
    ],
  },
};
