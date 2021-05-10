module.exports = {
  publicPath: process.env.NODE_ENV !== 'development'
    ? '/portfolio/'
    : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'E WEN作品集',
    },
  },
};
