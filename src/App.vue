<template>
  <YouTubeWidget />
  <TwitchWidget />
  <TTS />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TwitchWidget from "./components/TwitchWidget.vue";
import YouTubeWidget from "./components/YouTubeWidget.vue";
import TTS from "./components/TTS.vue";

export default defineComponent({
  name: "App",
  components: {
    TwitchWidget,
    YouTubeWidget,
    TTS,
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
