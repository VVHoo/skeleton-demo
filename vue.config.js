const path = require('path')
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
module.exports = {
  baseUrl: './',
  configureWebpack: {
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, './src/shell'), // 用来存储 shell 文件的地址
        staticDir: path.resolve(__dirname, './dist'), // 最好和 `output.path` 相同
        routes: ['/', '/about'], // 将需要生成骨架屏的路由添加到数组中,
        loading: 'chiaroscuro',
        debug: true,
        svg: {
          color: '#EFEFEF',
          shape: 'circle',
          shapeOpposite: ['.Rating-gray_1kpffd5_0 svg']
        },
        image: {
          shape: 'rect', // `rect` | `circle`
          color: '#EFEFEF',
          shapeOpposite: ['.mint-swipe-items-wrap img']
        },
        pseudo: {
          color: '#EFEFEF', // or transparent
          shape: 'circle', // circle | rect
          shapeOpposite: ['.delivery-icon-hollow_3q8_B5r_0', '.index-premium_39rl0v9']
        },
        button: {
          color: '#EFEFEF',
          excludes: ['.mint-swipe-items-wrap a']
        },
        defer: 5000
      })
    ]
  }
}
