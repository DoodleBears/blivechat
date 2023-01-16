<template>
  <yt-live-chat-paid-message-renderer class="style-scope yt-live-chat-item-list-renderer" allow-animations
    :show-only-header="priceText == '银瓜子礼物'" :style="{
      '--yt-live-chat-paid-message-secondary-color': priceRange.colors.headerBg,
      '--yt-live-chat-paid-message-primary-color': priceRange.colors.contentBg,
      '--yt-live-chat-paid-message-divider-color': priceRange.colors.dividerColor,
      '--yt-live-chat-paid-message-header-color': priceRange.colors.header,
      '--yt-live-chat-paid-message-author-name-color': priceRange.colors.authorName,
      '--yt-live-chat-paid-message-timestamp-color': priceRange.colors.time,
      '--yt-live-chat-paid-message-color': priceRange.colors.content
    }"
    :giftName="giftName" :price="price" :price-level="priceRange.price"
    :is-deleted="isDelete"
  >
    <div id="card" class="style-scope yt-live-chat-paid-message-renderer">
      <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
        <img-shadow id="author-photo" height="40" width="40" class="style-scope yt-live-chat-paid-message-renderer"
          :imgUrl="avatarUrl"
        ></img-shadow>
        <div id="header-content" class="style-scope yt-live-chat-paid-message-renderer">
          <div id="header-content-primary-column" class="style-scope yt-live-chat-paid-message-renderer">
            <div id="author-name" class="style-scope yt-live-chat-paid-message-renderer">{{authorName}}</div>
            <div id="purchase-amount" class="style-scope yt-live-chat-paid-message-renderer">{{priceText == '银瓜子礼物'? content : priceText}}</div>
          </div>
          <span id="timestamp" class="style-scope yt-live-chat-paid-message-renderer">{{ timeText }}</span>
        </div>
      </div>
      <div id="content" class="style-scope yt-live-chat-paid-message-renderer">
        <div id="message" dir="auto" class="style-scope yt-live-chat-paid-message-renderer">{{ content }}</div>
      </div>
    </div>
  </yt-live-chat-paid-message-renderer>
</template>

<script>
import ImgShadow from './ImgShadow'
import * as constants from './constants'
import * as utils from '@/utils'

export default {
  name: 'PaidMessage',
  components: {
    ImgShadow
  },
  props: {
    avatarUrl: String,
    authorName: String,
    giftName: String,
    price: Number, // 价格，人民币
    time: Date,
    content: String,
    isDelete: Boolean
  },
  computed: {
    priceRange() {
      return constants.getPriceConfig(this.price)
    },
    priceText() {
      let price_str = this.price > 0 ? `CN¥${utils.formatCurrency(this.price)}` : '银瓜子礼物'
      return price_str
    },
    timeText() {
      return utils.getTimeTextHourMin(this.time)
    }
  }
}
</script>

<style src="@/assets/css/youtube/yt-live-chat-paid-message-renderer.css"></style>
