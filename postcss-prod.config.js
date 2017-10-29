module.exports = {
  // parser: 'sugarss',
  plugins: [
    require('cssnano'),
    require('postcss-cssnext'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-pxtorem'),
    require('postcss-simple-vars')
  ]
}
