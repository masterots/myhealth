module.exports = {
  entry: 'source/public/react/reports/app.tsx',
  output: {
    filename: 'release/public/react/reports/app.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx$/, loader: 'ts-loader' }
    ]
  }
}