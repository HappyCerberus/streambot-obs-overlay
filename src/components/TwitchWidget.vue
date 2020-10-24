<template>
  <div class="twitch-widget">
    <div class="twitch-container">
      <i class="fab fa-twitch logo"></i>
      <div class="twitch-stats-container">
        <div class="stats">
          <i class="far fa-eye"></i>
          <span> {{ twitch_stats.twitch_viewers }} </span>
          <i class="fas fa-heart"></i>
          <span> {{ twitch_stats.twitch_followers }} </span>
        </div>
        <div class="latest-stat">
          <i class="fas fa-heartbeat"></i>
          <marquee>
            {{ twitch_stats.twitch_latest_follower }}
          </marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

class StreamStatsData {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public twitch_viewers: number,
    // eslint-disable-next-line no-unused-vars
    public twitch_followers: number,
    // eslint-disable-next-line no-unused-vars
    public twitch_latest_follower: string
  ) {}
}

export default defineComponent({
  name: "TwitchWidget",
  data() {
    return { twitch_stats: new StreamStatsData(0, 0, "") };
  },
  mounted() {
    this.$socket.addEventListener("open", function (event: Event) {
      console.log(`Socket connected ${event}`);
    });
    // Listen for messages
    this.$socket.addEventListener("message", (event: MessageEvent) => {
      console.log(`Twitch Listener - Message from server {${event.data}}`);
      this.$data.twitch_stats = JSON.parse(event.data) as StreamStatsData;
    });
    this.$socket.addEventListener("error", function (ev: Event) {
      console.error(`Problem with socket ${ev}`);
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.twitch-container {
  position: absolute;
  top: 90px;
  right: 10px;
  background-color: #f49819;
  /*border: 3px solid red;*/
  color: white;
  display: inline-flex;
  flex-direction: row;
}
.twitch-stats-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.logo {
  font-size: 48pt;
  padding: 6pt;
  padding-right: 9pt;
  padding-left: 9pt;
}
.stats {
  display: flex;
  font-size: 24pt;
  justify-content: flex-start;
}
.stats i {
  padding: 3pt;
  padding-right: 8pt;
}
.stats span {
  padding-right: 12pt;
}
.latest-stat {
  display: flex;
  justify-content: flex-start;
  font-size: 18pt;
}
.latest-stat i {
  padding: 3pt;
}
.latest-stat marquee {
  width: 180pt;
}
</style>
