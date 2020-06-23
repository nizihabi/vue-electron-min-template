const path = require('path'); 
const root = path.resolve(__dirname);
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = { 
    watch: true, 
    target: 'electron-renderer', 
    entry: './app/app.js',
    mode:'development',
    output: {
        path: path.join(root,'/public'),
        publicPath: './',
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    esModule: false, 
                    name: '[name].[ext]?[hash]', 
                }, 
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader', 
                ],
            }, 
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': path.join(root,'/app/src'),
        },
    },
}
