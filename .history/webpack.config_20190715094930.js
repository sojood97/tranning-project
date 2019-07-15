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
                test: /\.js$/,
                loader: 'babel-loader',
                include: ['/Users/jian/Documents/sina/src', '/Users/jian/Documents/sina/test'],
                options: {
                    presets: [['env', {
                        modules: false,
                        targets: {
                            browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
                        }
                    }], 'stage-2'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                },
                exclude: ['node_modules']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.sass$/,
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        indentedSyntax: true,
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
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
    }
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
