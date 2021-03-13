<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div id="top-bar">&nbsp;</div>
        </div>
      </div>

      <div class="row" id="title-row">
        <div class="hidden-xs col-sm-5" id="logo-container">
          <NuxtLink to="/">
            <img id="logo" src="/img/logo_small.png" alt="Fertőrákosi Lövészklub">
          </NuxtLink>
        </div>

        <div class="col-xs-12 col-sm-7" id="title-container">
          <h1>
            <span class="row-1">Fertőrákosi</span>
            <span class="row-2">Lövészklub</span>
          </h1>
        </div>

        <div id="user-box">
          <a href="#TODO" class="btn btn-basic">
            <i class="visible-xs fa fa-fw fa-sign-in"></i>
            <i class="hidden-xs fa fa-fw fa-facebook"></i>
            <span class="hidden-xs">Bejelentkezés</span>

            <span id="hover-indicator" class="hidden-xs">
                            <i class="fa fa-sign-in fa-fw"></i>
                        </span>
          </a>
        </div>
      </div>

      <button id="main-menu-toggle" class="visible-xs btn btn-basic">
        <i id="toggle--open" class="fa fa-fw fa-bars"></i>
        <i id="toggle--close" class="fa fa-fw fa-times"></i>
      </button>
      <div class="row" id="main-menu-row">
        <div class="col-xs-12">
          <nav>
            <ul>
              <li><NuxtLink to="/">Főoldal</NuxtLink></li>
              <li><NuxtLink to="/rolunk">Rólunk</NuxtLink></li>
              <li><NuxtLink to="/hirek">Hírek</NuxtLink></li>
              <li><NuxtLink to="/dokumentumok">Dokumentumok</NuxtLink></li>
              <li><NuxtLink to="/kapcsolat">Kapcsolat</NuxtLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
