import { buildDevServer } from "./BuildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { BuildOptions } from "./types/config";
import  webpack  from "webpack";
export function BuilWebpackConfig(options:BuildOptions):webpack.Configuration{
     const {paths,mode, isDev}=options;
return {
   

    mode: mode,
    entry: paths.entry ,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(),
    devtool: isDev ? 'inline-source-map':undefined,
    devServer:isDev ? buildDevServer(options):undefined,
  }
}