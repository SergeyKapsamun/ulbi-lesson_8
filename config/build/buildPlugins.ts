import HtmlWebpackPlugin from "html-webpack-plugin";
import  webpack  from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from "path";
import { BuildOptions } from "./types/config";
export function buildPlugins ({paths}:BuildOptions):webpack.WebpackPluginInstance[]{
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          template: paths.html,
        }),
        new MiniCssExtractPlugin()
      ]
}
