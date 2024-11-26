const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.ts',                                            // arquivo de entrada
    output: {
        filename: 'bundle.js',                                          // arquivo de saida
        path: path.resolve(__dirname, 'dist'),                          // pasta de saida
        clean: true                                                     // limpar a pasta de saida a cada build
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],                             // Resolve essas extensões automaticamente
    },
    module: {
        rules: [
            {
                test: /\.css$/,                                         // Processa arquivos css
                //use: [MiniCssExtractPlugin.loader, 'css-loader'],     // Processa css sem o tailwind
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
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
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext][query]',        // Define o nome do arquivo final
                }
            },
            {
                test: /\html$/,                                         // Processa html
                use: ['html-loader']
            },
            {
                test: /\.tsx?$/,                                        // Processa arquivos .ts e .tsx
                use: 'ts-loader',                                       // Transpila TypeScript para JavaScript
                exclude: /node_modules/,
            },
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