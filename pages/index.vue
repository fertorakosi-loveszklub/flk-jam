<template>
  <div>
    <section id="slider" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="/img/jazmin.jpg" alt="Légfegyveres lövészet">
          <div class="carousel-caption">
            <h2>Sportlövészet <br>
              Kicsiknek és nagyoknak
            </h2>
          </div>
        </div>
      </div>
    </section>

    <div id="cta-container">
      <NuxtLink to="/kapcsolat" id="contact-cta" class="btn" data-toggle="modal" data-target="#contact-modal">
        <i class="fa fa-fw fa-envelope-o"></i> Érdeklődöm
      </NuxtLink>
    </div>

    <main>
      <div class="container" id="home">
        <div class="row" id="home--support">
          <div class="col-xs-12 text-center">
            <h2>Támogass minket!</h2>

            <p class="large">
              Ajánld fel adód 1%-át klubunk részére!
              <br>
              Adószámunk: <strong>19105598-1-08</strong>
            </p>

            <hr>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <h2 class="text-center">Próbáld ki magad!</h2>
          </div>
        </div>

        <div class="row text-center" id="home--services">
          <div class="col-xs-12 col-sm-4">
            <img src="/img/airgun_small_c.jpg" alt="Légfegyveres lövészet">
            <h3>Légfegyveres lövészet</h3>
            <p>Lövészet légfegyverekkel 10m-es távon <br> Légpuska, légpisztoly</p>
          </div>

          <div class="col-xs-12 col-sm-4">
            <img src="/img/gun_small.jpg" alt="Sportlövészet">
            <h3>Sportlövészet</h3>
            <p>Sportlövészet kis- és nagykaliberű fegyverekkel <br> Sportpisztoly 25m-es távon, sportpuska 50m-en</p>
          </div>

          <div class="col-xs-12 col-sm-4">
            <img src="/img/archery_small.jpg" alt="Tradícionális íjászat">
            <h3>Tradícionális íjászat</h3>
            <p>Hagyományőrző íjászat <br> Kicsiknek és nagyoknak egyaránt</p>
          </div>
        </div>


        <hr>

        <div id="edzes-info" class="text-center">
          <h4>Edzések minden szombaton!</h4>
        </div>

        <hr>

        <div class="row">
          <div class="col-xs-12">
            <h2 class="text-center">Híreink</h2>
          </div>
        </div>

        <div class="row">
          <article class="col-xs-12 col-sm-4" v-for="article in articles">
            <NuxtLink :to="'/hirek/' + article.slug">
              <h1>{{ article.title }}</h1>
            </NuxtLink>
            <time :datetime="article.published_at.iso">
              {{ article.published_at.formatted }}
            </time>

            <p class="intro">
              {{ article.short_lead }}
              <br>
              <NuxtLink :to="'/hirek/' + article.slug">
              Tovább &raquo;
              </NuxtLink>
            </p>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },

  mounted() {
    this.fetchArticles();
  },

  methods: {
    async fetchArticles() {
      this.articles = await this.$axios.$get('/api/latest-articles');
    }
  }
}
</script>
