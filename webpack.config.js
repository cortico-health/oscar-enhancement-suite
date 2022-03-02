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
    new webpack.ProvidePlugin({
      h: ["preact", "h"],
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      // Not necessary unless you consume a module using `createClass`
      "create-react-class": "preact/compat/lib/create-react-class",
      // Not necessary unless you consume a module requiring `react-dom-factories`
      "react-dom-factories": "preact/compat/lib/react-dom-factories",
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
                  pragma: "h",
                  pragmaFrag: "Fragment",
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
