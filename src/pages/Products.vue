<template>
  <Layout>
    <div>
      <h1>Shop</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quod
        vel earum consectetur dolores enim maiores sit fugit modi quidem quia
        rerum eligendi iusto magni sed totam pariatur, ab vitae.
      </p>
      <ul>
        <li v-for="{ node } in $page.allWordpressProduct.edges" :key="node.id">
          {{ node.title }}
          {{ node.sourceUrl }}
          {{ node.featuredMedia.slug }}
          <div v-if="node.featuredMedia"></div>
          <img
            v-if="node.featuredMedia.mimeType == 'image/jpeg'"
            :src="require(`../wp-images/${node.featuredMedia.slug}.jpg`)"
          />
          <img
            v-if="node.featuredMedia.mimeType == 'image/png'"
            :src="require(`../wp-images/${node.featuredMedia.slug}.png`)"
          />
        </li>
      </ul>
      <Pager
        class="pagination text-center"
        :info="$page.allWordpressProduct.totalCount"
      />
    </div>
  </Layout>
</template>
<page-query>
query Home ($page: Int) {
  allWordpressProduct (page: $page, perPage: 10) @paginate {
    totalCount
    edges {
      node {
        id
        title
        featuredMedia{
          slug
          id
          mimeType
          sourceUrl
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  }
};
</script>

<style></style>
