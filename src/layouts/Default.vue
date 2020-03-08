<template>
  <div class="container mx-auto p-10">
    <header class="flex justify-between mb-8">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="ml-4" to="/">Home</g-link>
        <g-link class="ml-4" to="/about/">About</g-link>
        <g-link class="ml-4" to="/products/">Products</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
