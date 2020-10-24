<template>
  <div class="tts-widget">
    <!--    <b>Console:</b>
    <div v-for="(item, index) in console_text" :key="index">
      {{ item }}
    </div>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as types from "../lib/types";

function getVoice(id: types.VoiceMapping): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices();
  for (const v of voices) {
    if (v.name === id) {
      return v;
    }
  }
  return null;
}

export default defineComponent({
  name: "TTSWidget",
  data() {
    return { consoleText: new Array<string>() };
  },
  methods: {
    getVoice(id: types.VoiceMapping): SpeechSynthesisVoice | null {
      const voices = speechSynthesis.getVoices();
      if (voices.length === 0) {
        this.consoleText.push("Failed to fetch TTS - no voices available.");
      }
      for (const v of voices) {
        if (v.name.startsWith(id as string)) {
          return v;
        }
      }
      return null;
    },
  },
  mounted() {
    this.$socket.addEventListener("open", function (event: Event) {
      console.log(`Socket connected ${event}`);
    });
    // Listen for messages
    this.$socket.addEventListener("message", (event: MessageEvent) => {
      const message = JSON.parse(event.data) as types.AllMessages;
      if ("text" in message) {
        // this is TTS message
        const voice = this.getVoice(message.voice);
        if (voice === null) {
          return;
        }
        const utterace = new SpeechSynthesisUtterance(message.text);
        utterace.voice = voice;
        if (message.pitch) utterace.pitch = message.pitch;
        if (message.rate) utterace.rate = message.rate;
        if (message.volume) utterace.volume = message.volume;
        speechSynthesis.speak(utterace);
      } else {
        /*
        this.console_text.push(
          `TTS Listener - Message from server {${event.data}}`
        );*/
      }
    });
    this.$socket.addEventListener("error", function (ev: Event) {
      console.error(`Problem with socket ${ev}`);
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tts-widget {
  background-color: gray;
  color: white;
  font-family: "Courier New", Courier, monospace;
}
</style>
