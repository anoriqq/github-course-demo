const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
  },
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
  },
   module: { 
     rules: [{ 
       test: /\.jsx?$/,
       exclude: /node_modules/, 
       loader: 'babel-loader', 
       query: { 
         presets: ['@babel/preset-env', '@babel/react'] 
       } 
     }] 
   }, 
   resolve: { 
     extensions: ['.js', '.jsx'] 
   }, 
};
