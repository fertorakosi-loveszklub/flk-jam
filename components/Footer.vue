<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center">
          <p>&copy; {{ year }} &middot; Fertőrákosi Lövészklub</p>
          <small>
            Created by <a href="http://nxu.hu" target="_blank">nxu</a>
            <br>
            <a href="https://github.com/fertorakosi-loveszklub/flk-honlap-3">
              <i class="fa fa-fw fa-github"></i> Src
            </a>
          </small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return (new Date()).getFullYear();
    }
  }
}
</script>
