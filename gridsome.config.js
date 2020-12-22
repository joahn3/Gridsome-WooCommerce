// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develope

var path = require('path');
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'The Stove Shop',
  chainWebpack: config => {
    config.resolve.alias.set('@images', path.resolve('wp-images'))
  },
  plugins: [
    {
      use: 'gridsome-source-wordpress',
      options: {
        baseUrl: 'https://chicroumaine.com', // required
        apiBase: 'wp-json',
        typeName: 'Wordpress',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: '/:slug',
          post_tag: '/tag/:slug'
        },
        // splitPostsIntoFragments: true, // default false
        // downloadRemoteImagesFromPosts: true, // default false
        // postImagesLocalPath: './wp-images/',
        // downloadRemoteFeaturedImages: true, // default false
        // featuredImagesLocalPath: './wp-images/',
        // downloadACFImages: true
      }
    }
  ],
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
  },

  templates: {
    WooCommerceProduct: [
      {
        path: '/product/:slug',
        component: './src/templates/SingleProduct.vue'
      }
      // {
      //   name: 'reviews',
      //   path: '/product/:slug/reviews',
      //   component: './src/templates/ProductReviews.vue'
      // }
    ]
  }
}
