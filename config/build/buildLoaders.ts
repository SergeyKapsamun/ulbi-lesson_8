import  webpack  from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/config";
import path from "path";
export function buildLoaders({isDev}:BuildOptions):webpack.RuleSetRule[]{
  const typeScriptLoader={
     test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
  }
  const cssLoader={
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
     isDev? 'style-loader': MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {loader: "css-loader",
      options: {
        modules: {
          auto:true,
          localIdentName: "[path][name]__[local]--[hash:base64:5]",
          // localIdentContext: path.resolve(__dirname, "src",'components'),
        },
      }},
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }
    return [
        typeScriptLoader,
        cssLoader
      ]
}