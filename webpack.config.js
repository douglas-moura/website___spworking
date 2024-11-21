const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',                                            // arquivo de entrada
    output: {
        filename: 'bundle.js',                                          // arquivo de saida
        path: path.resolve(__dirname, 'dist'),                          // pasta de saida
        clean: true                                                     // limpar a pasta de saida a cada build
    },
    module: {
        rules: [
            {
                test: /\.css$/,                                         // Processa arquivos css
                //use: [MiniCssExtractPlugin.loader, 'css-loader'],     // Processa css sem o tailwind
                use: [
                    'style-loader',
                    'css-loader',
                    //'postcss-loader'                                    // Processa css com o tailwind
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,                      // Processa imagens
                type: 'asset/resource'
            },
            {
                test: /\html$/,                                         // Processa html
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',                               // Arquivo html de origem
            filename: 'index.html'                                      // Nome do arquivo de saida
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'                                       // Nome do arquivo de saida
        })
    ],
    mode: 'development',
    devServer: {
        static: './dist',
        port: '3000'
    }
}