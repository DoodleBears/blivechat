<template>
  <yt-live-chat-author-medal-renderer v-if="medalName != undefined" :medal-name="medalName" :medal-nevel="medalLevel" :is-fan-group="isFanGroup"
  :style="{
      '--yt-live-chat-medal-background-color': medalColor.bgColor,
      '--yt-live-chat-medal-border-color': medalColor.borderColor,
      '--yt-live-chat-medal-text-color': medalColor.textColor
    }"
  >
    <div id='medal-card' class="style-scope yt-live-chat-author-medal-renderer">
      <div id='medal-name' class="style-scope yt-live-chat-author-medal-renderer">{{medalName}}</div>
      <div id='medal-level' class="style-scope yt-live-chat-author-medal-renderer">{{medalLevel}}</div>
    </div>
  </yt-live-chat-author-medal-renderer>
</template>

<script>
import * as constants from './constants'

export default {
  name: 'AuthorMedal',
  props: {
    medalName: String,
    medalLevel: Number,
    isFanGroup: Boolean
  },
  computed: {
    medalColor() {
      return constants.getMedalConfig(this.medalLevel).colors
    }
  }
}
</script>

<style src="@/assets/css/youtube/yt-live-chat-author-medal-renderer.css"></style>
