<template>
  <yt-live-chat-interact-message-renderer class="style-scope yt-live-chat-item-list-renderer"
    :is-fan-group="isFanGroup"
    :medal-level="medalLevel"
    :medal-name="medalName"
    :privilegeType="privilegeType"
    :msg-type="msgType"
    :is-deleted="isDelete"
  >
    <div id="card" class="style-scope yt-live-chat-interact-message-renderer">
      <img-shadow id="author-photo" height="24" width="24" class="style-scope yt-live-chat-interact-message-renderer"
        :imgUrl="avatarUrl"
      ></img-shadow>
      <div id="content" class="style-scope yt-live-chat-interact-message-renderer">
        <yt-live-chat-author-chip class="style-scope yt-live-chat-interact-message-renderer">
          <span id="timestamp" class="style-scope yt-live-chat-interact-message-renderer">{{timeText}}</span>
          <span id="author-name" dir="auto" class="style-scope yt-live-chat-author-chip">{{ authorName }}
          </span>
          <span id="chat-medal" class="style-scope yt-live-chat-author-chip">
            <author-medal class="style-scope yt-live-chat-author-chip"
              :medalLevel="medalLevel" :medalName="medalName" :isFanGroup="isFanGroup"
            ></author-medal>
          </span>
          <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
            <author-badge class="style-scope yt-live-chat-author-chip"
              :privilegeType="privilegeType"
            ></author-badge>
          </span>
        </yt-live-chat-author-chip>
        <span id="message" class="style-scope yt-live-chat-interact-message-renderer"
          display="block"
        >{{ interactText }}</span>
      </div>
    </div>
  </yt-live-chat-interact-message-renderer>
</template>

<script>
import ImgShadow from './ImgShadow'
import AuthorMedal from './AuthorMedal'
import AuthorBadge from './AuthorBadge'
import * as utils from '@/utils'
import * as constants from './constants'

export default {
  name: 'InteractMessage',
  components: {
    ImgShadow,
    AuthorMedal,
    AuthorBadge
  },
  props: {
    avatarUrl: String,
    authorName: String,
    medalName: String,
    medalLevel: Number,
    isFanGroup: Boolean,
    isDelete: Boolean,
    privilegeType: Number,
    msgType: Number,
    time: Date
  },
  computed: {
    timeText() {
      return utils.getTimeTextHourMin(this.time)
    },
    interactText() {
      if (this.msgType === constants.INTERACT_TYPE_ENTER) {
        return '进入直播间'
      } else if (this.msgType === constants.INTERACT_TYPE_FOLLOW) {
        return '关注了直播间'
      } else if (this.msgType === constants.INTERACT_TYPE_SHARE) {
        return '分享了直播间'
      } else if (this.msgType === constants.INTERACT_TYPE_SPECIAL_FOLLOW) {
        return '特别关注了直播间'
      } else {
        return '互相关注了直播间'
      }
    }
  }
}
</script>

<style src="@/assets/css/youtube/yt-live-chat-interact-message-renderer.css"></style>
