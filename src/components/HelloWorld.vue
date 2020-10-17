<template>
  <div class="hello">
    <h1>{{ $mystuff }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    this.$socket.addEventListener("open", function (event: Event) {
      console.log("Socket connected.");
    });
    // Listen for messages
    this.$socket.addEventListener("message", function (event: MessageEvent) {
      console.log(`First Listener - Message from server {${event.data}}`);
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
