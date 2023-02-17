import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
            new HtmlWebpackPlugin({
                template: paths.html
            }),
        // Упрощает создание файлов.
            new webpack.ProgressPlugin(),
        // Предоставляет возможность настройки отчетов в ходе компиляции.
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        // Плагин создает CSS-файл для каждого JS-файла,который содержит CSS.
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        })

    ]
}

