// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develope

module.exports = {
  siteName: 'The Stove Shop',
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/wp-images')
  },
  plugins: [
    {
      use: 'gridsome-source-wordpress',
      options: {
        baseUrl: 'https://thestoveshop.ie', // required
        apiBase: 'wp-json',
        typeName: 'Wordpress',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: '/:slug',
          post_tag: '/tag/:slug'
        },
        splitPostsIntoFragments: true, // default false
        downloadRemoteImagesFromPosts: true, // default false
        postImagesLocalPath: './src/wp-images/',
        downloadRemoteFeaturedImages: true, // default false
        featuredImagesLocalPath: './src/wp-images/',
        downloadACFImages: true
      }
    }
  ],
  // templates: {
  //   Product: [
  //     {
  //       path: '/product/:slug',
  //       component: './src/templates/Products.vue'
  //     }
  //     // {
  //     //   name: 'reviews',
  //     //   path: '/product/:slug/reviews',
  //     //   component: './src/templates/ProductReviews.vue'
  //     // }
  //   ]
  // }
}