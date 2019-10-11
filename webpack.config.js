const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var StylusNibPlugin = require('nib')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/'
    },
    stats: {

    },
    module: {
        rules: [
            // Include pug-loader to process the pug files
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            },
            {
                test: /\.(css|styl)$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                            loader: 'css-loader',
                            options: { importLoaders: 1, sourceMap: true }
                        },
                        {
                            loader: 'stylus-loader',
                            options: { sourceMap: true },
                        },
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        publicPath: 'src/img',
                    }
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template/pages/home.pug',
            page: 'home'
        }),
        new HtmlWebpackPlugin({
            filename: 'business_sale.html',
            template: 'src/template/pages/business_sale.pug',
            page: 'services'
        }),
        new HtmlWebpackPlugin({
            filename: 'apply_for_a_business_sale.html',
            template: 'src/template/pages/apply_for_a_business_sale.pug',
            page: 'business'
        }),

        new HtmlWebpackPlugin({
            filename: 'all_business_projects.html',
            template: 'src/template/pages/all_business_projects.pug',
            page: 'business'
        }),
        new HtmlWebpackPlugin({
            filename: 'business_project.html',
            template: 'src/template/pages/business_project.pug',
            page: 'business'
        }),
        new HtmlWebpackPlugin({
            filename: 'investment_in_business.html',
            template: 'src/template/pages/investment_in_business.pug',
            page: 'investment'
        }),
        new HtmlWebpackPlugin({
            filename: 'our_investment_projects.html',
            template: 'src/template/pages/our_investment_projects.pug',
            page: 'investment'
        }),
        new HtmlWebpackPlugin({
            filename: 'investment_project.html',
            template: 'src/template/pages/investment_project.pug',
            page: 'investment'
        }),


        new HtmlWebpackPlugin({
            filename: 'contributions.html',
            template: 'src/template/pages/contributions.pug',
            page: 'contributions'
        }),


        new HtmlWebpackPlugin({
            filename: 'information.html',
            template: 'src/template/pages/information.pug',
            page: 'information'
        }),

        new HtmlWebpackPlugin({
            filename: 'investor_club.html',
            template: 'src/template/pages/investor_club.pug',
            page: 'investor_club'
        }),
        new HtmlWebpackPlugin({
            filename: 'business_education.html',
            template: 'src/template/pages/business_education.pug',
            page: 'business_education'
        }),

        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: 'src/template/pages/news.pug',
            page: 'news',
            title: 'Все новости'
        }),
        new HtmlWebpackPlugin({
            filename: 'news_single.html',
            template: 'src/template/pages/news_single.pug',
            page: 'news'
        }),
        new HtmlWebpackPlugin({
            filename: 'personal_growth.html',
            template: 'src/template/pages/news.pug',
            page: 'news',
            title: 'Личностный рост'
        }),
        new HtmlWebpackPlugin({
            filename: 'business_interview.html',
            template: 'src/template/pages/news.pug',
            page: 'news',
            title: 'Бизнес Интервью'
        }),
        new HtmlWebpackPlugin({
            filename: 'finances.html',
            template: 'src/template/pages/news.pug',
            page: 'news',
            title: 'Финансы'
        }),
        new HtmlWebpackPlugin({
            filename: 'companies.html',
            template: 'src/template/pages/news.pug',
            page: 'news',
            title: 'Компании'
        }),
        new HtmlWebpackPlugin({
            filename: 'our_projects.html',
            template: 'src/template/pages/news.pug',
            page: 'news',
            title: 'Наши проекты'
        }),

        new HtmlWebpackPlugin({
            filename: 'vacancies.html',
            template: 'src/template/pages/vacancies.pug',
            page: 'vacancies'
        }),
        new HtmlWebpackPlugin({
            filename: 'no_vacancies.html',
            template: 'src/template/pages/no_vacancies.pug',
            page: 'vacancies'
        }),

        new HtmlWebpackPlugin({
            filename: 'advertising.html',
            template: 'src/template/pages/advertising.pug',
            page: 'advertising'
        }),
        new HtmlWebpackPlugin({
            filename: 'payments_and_details.html',
            template: 'src/template/pages/payments_and_details.pug',
            page: 'payments'
        }),

        new HtmlWebpackPlugin({
            filename: 'our_offices.html',
            template: 'src/template/pages/our_offices.pug',
            page: 'our-offices'
        }),

       

        // new HtmlWebpackPlugin({
        //     filename: 'not-found.html',
        //     template: 'src/template/pages/not-found.pug',
        //     page: 'not-found'
        // }),
        new ExtractTextPlugin({ allChunks: true, filename: "styles.css" }),
        new CopyWebpackPlugin([
            { from: 'src/img', to: 'img' }
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
         })
    ],

    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, ''),
        // publicPath: "/",
        port: 9000
    }
};