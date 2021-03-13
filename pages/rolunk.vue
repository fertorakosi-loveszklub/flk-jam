<template>
  <div class="container" id="article">
    <div class="row">
      <div class="col-xs-12">
        <ol class="breadcrumb">
          <li><a href="/">Főoldal</a></li>
          <li class="active">{{ title }}</li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <article>
          <h1>{{ title }}</h1>
          <div class="social">
            <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large" data-mobile-iframe="false">
              <a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Megosztás</a>
            </div>
          </div>

          <div class="article-contents" v-html="content">
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    }
  }
}
</script>
