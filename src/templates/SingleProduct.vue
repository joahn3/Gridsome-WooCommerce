<template>
  <layout>
    <div class="container">
      <div class="flex">
        <div class="w-3/5">
          <h1
            class="text-gray-800 text-2xl tracking-tight leading-none"
            v-html="product.name"
          />
          <span v-if="product.price">€{{ product.price }}</span>
          <p
            class="text-gray-700 max-w-lg my-4"
            v-html="product.description"
          ></p>
        </div>
        <div class="w-2/5">
          <g-image class="max-w-md" :src="myImage(product.images[0].src)" />
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
query Product ($path: String!) {
  wooCommerceProduct (path: $path) {
    name
    price
    description
    images{
      src
      alt
    }
    categories{
      name
      slug
    }
    tags{
      name
      slug
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.wooCommerceProduct.title
    };
  },
  computed: {
    product() {
      return this.$page.wooCommerceProduct;
    }
  },
  methods: {
    slug(str) {
      return str.split("/").pop();
    },
    myImage(str) {
      return require("!!assets-loader!@images/" + this.slug(str));
    }
  }
};
</script>
