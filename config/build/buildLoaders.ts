import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders( {isDev}: BuildOptions ): webpack.RuleSetRule[] {

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const imgLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            "keyAsDefaultValue": true,
                        }
                    ],
                ]
            }
        }
    }

    // const fileLoader = {
    //         test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    //         use: [
    //             {
    //                 loader: 'url-loader',
    //             },
    //         ],
    //     }

    const cssLoaders = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        svgLoader,
        imgLoader,
        babelLoader,
        // fileLoader,
        typescriptLoader,
        cssLoaders,
    ]
}