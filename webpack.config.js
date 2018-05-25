const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    const isProduction = env === 'production';
    const providePlugins = new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'});
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: ['./app.js', './src/styles/scss/app.scss'],
        output:{
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        mode: isProduction ? 'production' : 'development',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            providePlugins,
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map'
    }
}