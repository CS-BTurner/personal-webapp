const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
    init: path.resolve(__dirname, './src/app-skeleton/app-init.ts'),
  },

  devtool: 'inline-source-map',

  output: {
    chunkFilename: 'chunk-[name].[contenthash].js',
    filename: '[name].bundle.js',
    library: 'Perm',
    libraryTarget: 'window',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },

  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Permaculture at home',
      template: path.resolve(__dirname, './src/app-skeleton/index.html'),
      scriptLoading: 'defer',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useCache: true,
            module: 'ES2020',
          },
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },

  resolve: { extensions: ['.ts', '.tsx', '.js'] },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};
