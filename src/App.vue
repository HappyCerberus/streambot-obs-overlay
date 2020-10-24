<template>
  <YouTubeWidget />
  <TwitchWidget />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TwitchWidget from "./components/TwitchWidget.vue";
import YouTubeWidget from "./components/YouTubeWidget.vue";

export default defineComponent({
  name: "App",
  components: {
    TwitchWidget,
    YouTubeWidget,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}
</style>
