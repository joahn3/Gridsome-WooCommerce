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
    const products = addCollection("WooCommerceProduct");
    let final = [];
    for (let step = 0; step < 5; step++) {
      let { data } = await WooCommerce.get("products", { per_page: 100, offset: step*100});
      final = [...final, ...data];
    }
    for (const item of final) {
       products.addNode({ ...item });
    }
  })
}
