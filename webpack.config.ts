
import path from "path";
import  webpack  from "webpack";
import {buildPlugins} from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildResolves } from "./config/build/buildResolves";
import { BuilWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";


export default (env:BuildEnv)=>{
  const paths:BuildPaths={
  entry:path.resolve(__dirname, "src", "index.tsx"),
  build:path.resolve(__dirname, "build"),
  html:path.resolve(__dirname, "publick", "index.html"),
}
const mode=env.mode ||'development';
const isDev=mode==='development';
const PORT=env.port ||3000;
const config: webpack.Configuration = BuilWebpackConfig({mode:mode,
paths,
isDev,
PORT});
  return config;
};