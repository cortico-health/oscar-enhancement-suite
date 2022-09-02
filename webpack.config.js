const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./cortico.js",
  output: {
    filename: "cortico-min.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.CEREBRO_URL": JSON.stringify("https://cerebro-release.cortico.ca"),
      "process.env.WEBSOCKET_URL": JSON.stringify("wss://cerebro-release.cortico.ca"),
    }),
  ],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat", // Must be below test-utils
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
            ],
            assumptions: {
              setPublicClassFields: true,
            },
            plugins: [
              [
                "@babel/plugin-proposal-decorators",
                { decoratorsBeforeExport: true },
              ],
              "@babel/plugin-transform-runtime",

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
