<template>
  <Layout>
    <div>
      <!-- <div class="row">
        {{ this.$store.state.filter }}
      </div>
      <button
        class="rounded py-2 px-4 bg-orange-400 text-orange-900 pointer outline-none"
        @click="gogo"
      >
        Goooooo!
      </button> -->
      <ul class="flex flex-wrap justify-between -mx-8">
        <li
          class="w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center"
          v-for="{ node } in $page.allWooCommerceProduct.edges"
          :key="node.id"
        >
          <ProductCard :node="node" />
        </li>
      </ul>
      <Pager
        class="pagination text-center"
        :info="$page.allWooCommerceProduct.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query Products ($page: Int) {
  allWooCommerceProduct (limit: 24 sortBy: "date_created" filter: {price: {ne: ""}} page: $page, perPage: 12) @paginate {
    pageInfo{
      currentPage
      totalPages
    }
    totalCount
    edges{
      node{
        name
        slug
        price
        date_created
        images{
          src
          alt
        }    
      }
    }
  }
}
</page-query>

<script>
import ProductCard from "~/components/ProductCard";
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
    ProductCard
  },
  methods: {
    // gogo() {
    //   this.$store.commit("increment");
    // }
  }
};
</script>

<style>
.product-image {
  width: 100%;
  height: 240px;
  object-fit: contain;
  max-width: 300px;
}
</style>
