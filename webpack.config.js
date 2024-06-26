const path = require("path");
module.exports = {
  entry: "./src/index.tsx", 
  output: {
    filename: "bundle.js", 
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"), 
    port: 3000, 
    open: true, 
  },
};