<template>
  <div>
    <section id="map">
    </section>

    <section class="container">
      <div class="row">
        <section class="col-xs-12 col-sm-6 col-md-7 pull-left" id="info-box">
          <h2>Hol érsz el minket?</h2>

          <h3>Elérhetőségek</h3>
          <p>
            <strong class="info-title">Cím:</strong>
            <span class="info-content">9421 Fertőrákos, Felsőszikla sor</span>
          </p>

          <p class="clearfix">
            <strong class="info-title">Telefonszám:</strong>
            <span class="info-content">(30) 38 56 603 (Fekete Zsolt)</span>
          </p>

          <p class="clearfix">
            <strong class="info-title">E-mail cím:</strong>
            <span class="info-content">
              <a href="mailto:fekete.zsolt2@gmail.com">fekete.zsolt2@gmail.com</a>
            </span>
          </p>

          <h3>Edzések</h3>

          <p>
            Edzéseinket <strong>szombatonként</strong> tartjuk,
            nyáron 15 órakor, télen 14 órakor kezdünk. <br>
          </p>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    window.initMap = function () {
      var coords = {lat: 47.723931, lng: 16.642026};
      window.map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 15,
        draggable: false,
        scrollwheel: false
      });

      new google.maps.Marker({
        position: coords,
        map: window.map,
        title: 'Fertőrákosi lőtér'
      });
    }
  },

  head() {
    return {
      title: 'Kapcsolat - Fertőrákosi Lövészklub',

      script: [
        {
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDzmfKJFUjz_x0DJNAt_mA63mZj6MH_2WU&callback=initMap',
          defer: true,
          'async': true
        }
      ]
    }
  }
}
</script>
