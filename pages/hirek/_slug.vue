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
  async asyncData({params, $axios}) {
    const article = await $axios.$get('/api/articles/' + params.slug);
    return {article};
  },

  head() {
    return {
      title: this.article?.title + ' - Fertőrákosi Lövészklub',
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.article?.title + ' - Fertőrákosi Lövészklub'},
        { hid: 'description', name: 'description', content: this.article?.short_lead },
        { hid: 'og:description', name: 'og:description', content: this.article?.short_lead},
      ]
    }
  }
}
</script>
