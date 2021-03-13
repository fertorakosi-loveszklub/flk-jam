<template>
  <div class="container" id="article">
    <div class="row">
      <div class="col-xs-12">
        <ol class="breadcrumb">
          <li><NuxtLink to="/">Főoldal</NuxtLink></li>
          <li class="active">{{ page.title }}</li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <article>
          <h1>{{ page.title }}</h1>

          <div class="article-contents" v-html="page.content">
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const page = await $axios.$get('/api/pages/rolunk');
    return { page };
  }
}
</script>
