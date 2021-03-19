  module.exports = {
    plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [ './hugo_stats.json' ],
    },
    autoprefixer: {
      browsers: [
        "last 2 versions",
        "Explorer >= 8",
      ]
    },
  }
};
