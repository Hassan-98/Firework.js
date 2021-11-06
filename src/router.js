import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Docs from "./views/Docs.vue";
import Articles from "./components/help-center/Articles.vue";
import Article from "./components/help-center/Article.vue";
import Log from "./views/Log.vue";
import Contact from "./views/Contact.vue";
import ControlPanel from "./views/ControlPanel.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/docs",
      name: "docs",
      component: Docs
    },
    {
      path: "/help",
      name: "articles",
      component: Articles
    },
    {
      path: "/help/:id",
      name: "article",
      component: Article
    },
    {
      path: "/log",
      name: "log",
      component: Log
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/cpanel",
      name: "cpanel",
      component: ControlPanel
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
