<template>
  <div class="container" id="article">
    <template v-if="!article">
      <div class="loading-indicator">
        <i class="fa fa-newspaper-o fa-5x text-muted"></i>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb">
            <li><NuxtLink to="/">Főoldal</NuxtLink></li>
            <li><NuxtLink to="/hirek">Hírek</NuxtLink></li>
            <li class="active">{{ article.title }}</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <article>
            <h1>{{ article.title }}</h1>
            <p class="article-info">
              <span class="author" v-if="article.author">
                <img :src="'//graph.facebook.com/' + article.author.facebook_user_id + '/picture?height=20'"
                     :title="article.author.name"
                     :alt="article.author.name"
                >
                    {{ article.author.name }}
                </span>
              <span class="separator" v-if="article.author">&middot;</span>
              <time :datetime="article.published_at.iso">
                {{ article.published_at.formatted }}
              </time>
            </p>

            <div class="social">
              <div class="fb-share-button" data-layout="button" data-size="large" data-mobile-iframe="false">
                <a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Megosztás</a>
              </div>
            </div>

            <p class="lead">
              {{ article.lead }}
            </p>

            <div class="article-contents" v-html="article.content">
            </div>
          </article>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  async asyncData({params}) {
    return {
      article: null,
      slug: params.slug
    };
  },

  methods: {
    async fetchArticle() {
      this.article = await this.$axios.$get('/api/articles/' + this.slug);
    }
  },

  mounted() {
    this.fetchArticle();
  },

  head() {
    return {
      title: this.article ? this.article.title + ' - Fertőrákosi Lövészklub' : 'Fertőrákosi Lövészklub'
    }
  }
}
</script>
