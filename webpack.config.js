module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: __dirname,
        filename: "dist/main.js",
        libraryTarget: "commonjs2"
    },
    devtool: "none",
    externals: {
        assets: "assets",
        scenegraph: "scenegraph",
        application: "application",
        commands: "commands",
        clipboard: "clipboard",
        cloud: "cloud",
        uxp: "uxp",
        viewport: "viewport"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: ['transform-react-jsx'],
                },
            }
        ],
    }
};
