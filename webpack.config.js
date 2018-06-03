module.exports = {
    devtool: "sourcemap",
    entry: './js/entry.js', // 入口文件
    output: {
        filename: 'bundle.js' // 打包出来的wenjian
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         {loader: 'style-loader'},
            //         {loader: 'css-loader'}
            //     ]
            // },
            { // 这样可以使用ES6的语法
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-0'],
                            plugins: ['transform-runtime']
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
};