const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')

const IS_DEV = process.env.NODE_ENV === 'development'
const IS_PROD = !IS_DEV

const optimization = () => ({
  splitChunks: {
    chunks: 'all'
  },
  minimizer: [
    new CssMinimizerWebpackPlugin(),
    new TerserPlugin()
  ]
})

const filename = (ext) => IS_DEV ? `[name].${ext}` : `[name].[fullhash].${ext}`

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: ''
      }
    },
    'css-loader'
  ]
  if (extra) {
    loaders.push(extra)
  }
  return loaders
}

const jsLoaders = (extra) => {
  const loaders = {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }

  if (extra) loaders.options.presets.push(extra)

  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.jsx',
    stat: './statistics.ts'
  },
  target: 'web',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.png', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@model': path.resolve(__dirname, 'src/model'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: false
  },
  devtool: IS_DEV ? 'source-map' : false,
  plugins: [
    new HTMLWebpackPlugin({ template: './index.html' }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.png'),
          to: path.resolve(__dirname, 'dist'),
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new EslintWebpackPlugin({
      extensions: ['js'],
      configType: 'eslintrc',
      fix: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: jsLoaders('@babel/preset-typescript')
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: jsLoaders('@babel/preset-react')
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]'
        }
      }
    ]
  }
}