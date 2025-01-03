const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    //mode: 'development',
    mode: 'production',
    entry: './src/index.ts',                                            // arquivo de entrada
    output: {
        filename: 'index.js',                                          // arquivo de saida
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
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/,                 // Processa imagens
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',                 // Define o nome do arquivo final
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
        new HtmlWebpackPlugin({
          template: './src/pages/planos.html',                          // Copia o arquivo planos.html
          filename: 'pages/planos.html',                                // Coloca o HTML na pasta dist/pages
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'                                       // Nome do arquivo de saida
        })
    ],
    devServer: {
        static: './dist',
        port: '3000'
    }
}