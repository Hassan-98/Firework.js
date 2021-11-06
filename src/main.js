// Importing Vue
import Vue from "vue";
// Importing Vue App
import App from "./App.vue";
// Importing Vue Router
import router from "./router";
// Importing Vuex Store
import store from "./store";
// Importing Bootstrap 4.2.1 (CSS)
import "bootstrap/dist/css/bootstrap.min.css";
// Importing jQuery 3.4.1
window.$ = require("jquery");
// Importing Bootstrap 4.2.1 (JS)
import "bootstrap/dist/js/bootstrap.min.js";
// Importing AOS JS
import AOS from "aos";
// Importing AOS CSS
import "aos/dist/aos.css";
// Importing SweetAlert CSS
import "@sweetalert2/themes/borderless/borderless.scss";
// Importing Prism Highlighter (CSS)
import "@/assets/css/prism.css";
// Importing Reset Styles
import "@/assets/css/reset.scss";
// SweetAlert 2
window.Swal = require("sweetalert2");

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  created() {
    AOS.init();
    /* eslint-disable */
    config(process.env.FIREBASE_CONFIG);
    /* eslint-enable */
  }
});
