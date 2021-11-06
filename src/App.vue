<template>
  <div id="app">
    <Loader></Loader>
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  name: "App",
  components: {
    Loader
  }
};
</script>

<style>
html,
body {
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 8px;
  background: #F8F6FF;
  height: 7px;
}
::-webkit-scrollbar-thumb {
  background: #3F3D56;
  border-radius: 7px;
}
</style>
