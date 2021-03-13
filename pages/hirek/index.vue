<template>
  <div class="container" id="article">
    <div class="row">
      <div class="col-xs-12">
        <ol class="breadcrumb">
          <li><NuxtLink to="/">Főoldal</NuxtLink></li>
          <li class="active">Hírek</li>
        </ol>
      </div>
    </div>
    <div class="row">
      <template v-if="articles.length == 0">
        <div class="loading-indicator">
          <i class="fa fa-newspaper-o fa-5x text-muted"></i>
        </div>
      </template>

      <template v-for="(article, index) in articles" v-if="articles.length > 0">
        <div class="col-xs-12 col-sm-4 article-box">
          <article>
            <nuxt-link :to="'/hirek/' + article.slug">
              <h1>{{ article.title }}</h1>
            </nuxt-link>
            <p class="article-info">
            <span class="author" v-if="article.author">
                <img :src="'//graph.facebook.com/' + article.author.facebook_user_id + '/picture?height=20'"
                     :title="article.author.name"
                     :alt="article.author.name"
                >
                    {{ article.author.name }}
                </span>
              <span class="separator">&middot;</span>
              <time :datetime="article.published_at.iso">
                {{ article.published_at.formatted }}
              </time>
            </p>

            <p class="intro">
              {{ article.short_lead }}
              <br>
              <NuxtLink :to="'/hirek/' + article.slug">Tovább &raquo;</NuxtLink>
            </p>
          </article>
        </div>

        <div class="clearfix" v-if="(index + 1) % 3 === 0"></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const articles = await this.$axios.$get('/api/articles');
    return {articles};
  },

  head() {
    return {
      title: 'Hírek - Fertőrákosi Lövészklub'
    }
  }
}
</script>
