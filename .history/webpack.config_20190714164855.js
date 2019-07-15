const helpers = require("./config/helpers");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";

var path = require("path");
//import  './client/app/index.js';
switch (process.env.NODE_ENV) {
    case "prod":
    case "production":
        module.exports = require("./config/webpack.prod");
        break;

    case "dev":
    case "development":
    default:
        module.exports = require("./config/webpack.dev");
}

var baseConfig = {
    entry: {
        main: "./client/app/index.js"
    },
    output: {
        filename: "main.js",
        path: path.resolve("../tranning-project/buildfile/main.js")
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    }
                ]
            },
            // JS files
            {
                test: /\.jsx?$/,
                include: helpers.root("client"),
                loader: "babel-loader"
            },
            {
                test: /\.js$/,
                loader: "buble-loader",
                include: path.join(__dirname, "src"),
                options: {
                    objectAssign: "Object.assign"
                }
            },
            { test: /\.(js|jsx)$/, use: "babel-loader" },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [autoprefixer]
                            }
                        },
                        "sass-loader"
                    ]
                })
            }

            // SCSS files
            /*
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            'sourceMap': true,
                            'importLoaders': 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer
                            ]
                        }
                    },
                    'sass-loader'
                ]
            })
        }
        */
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),

        new HtmlWebpackPlugin({
            template: helpers.root("client/public/index.html"),
            inject: "body"
        }),

        new ExtractTextPlugin({
            filename: "css/[name].[hash].css",
            disable: !isProd
        }),

        new CopyWebpackPlugin([
            {
                from: helpers.root("client/public")
            }
        ])
    ]
};

// export configuration
module.exports = baseConfig;
