<template>
  <div class="main-header">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <router-link to="/">
          <h3>Firework</h3>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navlinks"
          aria-controls="navlinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navlinks">
          <ul class="navbar-nav ml-auto">
            <router-link to="/" exact tag="li"> Get Started</router-link>
            <router-link to="/docs" tag="li"> Documentation</router-link>
            <router-link to="/help" tag="li"> Help Center</router-link>
            <router-link to="/log" tag="li"> Changelog</router-link>
          </ul>
        </div>
      </div>
    </nav>
    <span class="cf"></span>
    <header>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8 col-12">
            <h1 v-if="page == 'docs'">Documentation</h1>
            <h1 v-else-if="page == 'help'">Help Center</h1>
            <h1 v-else-if="page == 'log'">Changelog</h1>
            <h1 v-else-if="page == 'contact'">Contact Us</h1>
            <h1 v-else-if="page == 'panel'">Control Panel</h1>
            <h1 v-else-if="page == 'login'">Login</h1>
          </div>
          <div class="col-md-4 col-12">
            <img v-if="page == 'docs'" src="../assets/images/docs.svg" />
            <img v-else-if="page == 'help'" src="../assets/images/help.svg" />
            <img v-else-if="page == 'log'" src="../assets/images/log.svg" />
            <img
              v-else-if="page == 'contact'"
              src="../assets/images/contact.svg"
            />
            <img v-else-if="page == 'panel'" src="../assets/images/panel.svg" />
            <img v-else-if="page == 'login'" src="../assets/images/auth.svg" />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "AltHeader",
  props: {
    page: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$mc: #3f3d56;
$sc: #865cda;
.main-header {
  margin: 0;
  background: linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%);
  box-shadow: 0 1px 5px rgba($color: $sc, $alpha: 0.1);
  nav {
    background: none !important;
    overflow: hidden;
    h3 {
      font-family: "Russo One", sans-serif;
      margin: 0;
      color: $mc;
      text-shadow: 2px 2px 4px rgba($color: $sc, $alpha: 0.1);
      float: left;
    }

    ul {
      li {
        font-family: "Barlow", sans-serif;
        display: inline-block;
        list-style: none;
        cursor: pointer;
        padding: 10px 0 10px 30px;
        font-size: 15px;
        &:hover {
          color: $sc;
        }
        &.router-link-active {
          color: $sc;
        }
      }
    }
    .navbar-light .navbar-toggler {
      border: none;
    }
  }
  .cf {
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }
  header {
    padding: 30px 0 50px;
    @include sm {
      text-align: center;
    }
    h1, p {
      color: $mc;
      font-family: "Poppins", sans-serif;
    }
    img {
      height: 200px;
    }
  }
}
</style>
