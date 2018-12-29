const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: {
      Actions: path.resolve(__dirname, "src/js/actions/"),
      Components: path.resolve(__dirname, "src/js/components/"),
      CSS: path.resolve(__dirname, "src/css/"),
      HTML: path.resolve(__dirname, "src/html/"),
      Images: path.resolve(__dirname, "src/img/"),
      Pages: path.resolve(__dirname, "src/js/pages/")
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "My Page",
      template: "./src/html/index.html"
    })
  ]
};
