<template>
  <div>
    <g-link :to="`/product/${node.slug}`">
      <!-- <g-image
        class="product-image"
        :alt="node.images[0].alt"
        :src="myImage(node.images[0].src)"
      /> -->
      <g-image
        class="product-image"
        :alt="node.images[0].alt"
        :src="node.images[0].src"
      />
      <div class="text-gray-700">{{ node.name }}</div>
      <span> €{{ node.price }} </span>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      required: true
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
