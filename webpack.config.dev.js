const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./cortico.js",
  output: {
    filename: "cortico-min.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    poll: 10000,
  },
  cache: false,
  devtool: "source-map",
  mode: "development",
  plugins: [
    new webpack.ProvidePlugin({
      h: ["preact", "h"],
    }),
  ],

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
                  pragma: "h",
                  pragmaFrag: "Fragment",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
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
