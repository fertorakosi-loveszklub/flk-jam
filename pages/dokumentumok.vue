<template>
  <div class="container" id="document">
    <div class="row">
      <div class="col-xs-12">
        <ol class="breadcrumb">
          <li><NuxtLink to="/">Főoldal</NuxtLink></li>
          <li class="active">Dokumentumok</li>
        </ol>
      </div>
    </div>

    <div id="document-list">
      <div class="row">
        <div class="col-xs-12">
          <h1>Dokumentumok</h1>
        </div>
      </div>

      <div class="row file-row" v-for="document in documents" v-if="documents.length > 0">
        <div class="col-xs-12 col-sm-8">
          <a :href="document.url" target="_blank" class="text-center visible-xs">
            {{ document.title }}
          </a>
          <span class="title hidden-xs">{{ document.title }}</span>
        </div>
        <div class="hidden-xs col-sm-4 text-right">
          <a :href="document.url" target="_blank">
            Letöltés
          </a>
        </div>
      </div>
      <div class="row" v-if="documents.length == 0">
        <div class="loading-indicator">
          <i class="fa fa-file-pdf-o fa-5x text-muted"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const documents = await $axios.$get('/api/documents');
    return { documents };
  },

  head() {
    title: 'Dokumentumok - Fertőrákosi Lövészklub'
  }
}
</script>
