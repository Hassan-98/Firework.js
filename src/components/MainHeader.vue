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
          <div class="col-md-6 col-12">
            <h1>Firework.js</h1>
            <p>{{ headerTitle }}</p>
            <p>By BroCoders© 2019</p>
            <router-link to="/docs" tag="button"> Get Started</router-link>
          </div>
          <div class="col-md-6 col-12">
            <img src="../assets/images/m-header.svg" />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      headerTitle: ""
    };
  },
  created() {
    db.get("headerTitle").then(data => {
      this.headerTitle = data.val().title;
    });
  }
};
</script>

<style lang="scss" scoped>
$mc: #3f3d56;
$sc: #865cda;
.main-header {
  margin: 0;
  background: linear-gradient(135deg, #f9f7ff 0%, #fff 50%, #f6f3ff 100%);
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
    padding: 100px 0;
    @include sm {
      text-align: center;
    }
    h1,
    p {
      color: $mc;
      font-family: "Barlow", sans-serif;
      padding: 0 20px;
    }
    h1 {
      font-family: "Russo One", sans-serif;
    }
    button {
      border-radius: 15px;
      padding: 8px 30px;
      margin: 15px 20px 40px;
      color: $mc;
      background: none;
      font-family: "Barlow", sans-serif;
    }
  }
}
</style>
