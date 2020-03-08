// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const consumerKey = 'ck_4d785418513420422fc9f67122d4d3a2b4b4e42a';
const consumerSecret = 'cs_6b623011691f42de6aa1d09ec4b5310e2cc98aba';
const siteUrl = 'https://thestoveshop.ie';


const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WooCommerce = new WooCommerceRestApi({
  url: siteUrl, 
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  version: 'wc/v3',
  queryStringAuth: true
});

module.exports = function (api) {
  
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const products = addCollection("WooCommerceProduct");
    const { data } = await WooCommerce.get("products", { per_page: 100 });
    for (const item of data) {
       products.addNode({ ...item });
    }
})

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
