<template>
  <yt-live-chat-text-message-renderer
    :style="{'--repeated-text-color': randomColor,
    '--text-color': textColor,
    }"
    :is-fan-group="isFanGroup"
    :medal-level="medalLevel"
    :author-type="authorTypeText"
    :privilegeType="privilegeType"
    :is-admin="authorType === 2"
    :is-owner="authorType === 3"
    :is-deleted="isDelete"
    >
    <div v-if="mergeSameUserDanmaku === true" id="thread">
      <template v-for="(richContent, richContentIndex) in richContents">
        <div :key="richContentIndex" id="card" class="style-scope yt-live-chat-text-message-renderer" :style="{'--text-color': textColor}">
          <img-shadow id="author-photo" height="24" width="24" class="style-scope yt-live-chat-text-message-renderer"
            :imgUrl="avatarUrl"
          ></img-shadow>
          <div id="content" class="style-scope yt-live-chat-text-message-renderer">
            <yt-live-chat-author-chip class="style-scope yt-live-chat-text-message-renderer">
              <span id="timestamp" class="style-scope yt-live-chat-text-message-renderer">{{timeText}}</span>
              <span id="author-name" dir="auto" class="style-scope yt-live-chat-author-chip" :type="authorTypeText">{{
                authorName
                }}<!-- 这里是已验证勋章 -->
                <span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span>
              </span>
              <span id="chat-medal" class="style-scope yt-live-chat-author-chip">
                <author-medal class="style-scope yt-live-chat-author-chip"
                  :medalLevel="medalLevel" :medalName="medalName" :isFanGroup="isFanGroup"
                ></author-medal>
              </span>
              <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
                <author-badge class="style-scope yt-live-chat-author-chip"
                  :isAdmin="authorType === 2" :privilegeType="privilegeType"
                ></author-badge>
              </span>
            </yt-live-chat-author-chip>
            <!-- 直接替换表情包 -->
            <div id='image-and-message' class="style-scope yt-live-chat-text-message-renderer">
              <template v-for="(content, contentIndex) in richContent">
                <span :key="contentIndex" v-if="content.type === CONTENT_TYPE_TEXT" id="message" class="style-scope yt-live-chat-text-message-renderer"
                  display="block"
                  :style="`
                    ${content.textColor === 'initial' ? '' : `color: ${content.textColor} !important;`};`"
                >{{ content.text }}</span>
                <img :key="contentIndex" v-else-if="content.type === CONTENT_TYPE_IMAGE"
                  class="image yt-formatted-string style-scope yt-live-chat-text-message-renderer"
                  :style="`display: ${content.align};`"
                  width="auto"
                  :src="content.url" :alt="content.text" :shared-tooltip-text="content.text" :id="`image-${content.text}`"
                  :height="content.height"
                  :display="content.align"
                >
                <img :key="contentIndex" v-else-if="content.type === CONTENT_TYPE_EMOTICON"
                  class="emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"
                  :src="content.url" :alt="content.text" :shared-tooltip-text="content.text" :id="`emoji-${content.text}`"
                >
              </template>
              <el-badge :value="getRepeatedValue(richContentIndex)" :max="99" v-show="getRepeatedValue(richContentIndex) > 1" class="style-scope yt-live-chat-text-message-renderer"
                :style="{ '--repeated-mark-color': repeatedMarkColor }"
              ></el-badge>
            </div>
          </div>
        </div>
      </template>
    </div>
    <template v-else>
      <template v-for="(richContent, richContentIndex) in richContents">
        <div :key="richContentIndex" id="card" class="style-scope yt-live-chat-text-message-renderer" :style="{'--text-color': textColor}">
          <img-shadow id="author-photo" height="24" width="24" class="style-scope yt-live-chat-text-message-renderer"
            :imgUrl="avatarUrl"
          ></img-shadow>
          <div id="content" class="style-scope yt-live-chat-text-message-renderer">
            <yt-live-chat-author-chip class="style-scope yt-live-chat-text-message-renderer">
              <span id="timestamp" class="style-scope yt-live-chat-text-message-renderer">{{timeText}}</span>
              <span id="author-name" dir="auto" class="style-scope yt-live-chat-author-chip" :type="authorTypeText">{{
                authorName
                }}<!-- 这里是已验证勋章 -->
                <span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span>
              </span>
              <span id="chat-medal" class="style-scope yt-live-chat-author-chip">
                <author-medal class="style-scope yt-live-chat-author-chip"
                  :medalLevel="medalLevel" :medalName="medalName" :isFanGroup="isFanGroup"
                ></author-medal>
              </span>
              <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
                <author-badge class="style-scope yt-live-chat-author-chip"
                  :isAdmin="authorType === 2" :privilegeType="privilegeType"
                ></author-badge>
              </span>
            </yt-live-chat-author-chip>
            <!-- 直接替换表情包 -->
            <div id='image-and-message' class="style-scope yt-live-chat-text-message-renderer">
              <template v-for="(content, contentIndex) in richContent">
                <span :key="contentIndex" v-if="content.type === CONTENT_TYPE_TEXT" id="message" class="style-scope yt-live-chat-text-message-renderer"
                  display="block"
                  :style="`
                    ${content.textColor === 'initial' ? '' : `color: ${content.textColor} !important;`};
                    `"
                >{{ content.text }}</span>
                <img :key="contentIndex" v-else-if="content.type === CONTENT_TYPE_IMAGE"
                  class="image yt-formatted-string style-scope yt-live-chat-text-message-renderer"
                  :style="`display: ${content.align};`"
                  width="auto"
                  :src="content.url" :alt="content.text" :shared-tooltip-text="content.text" :id="`image-${content.text}`"
                  :height="content.height"
                  :display="content.align"
                >
                <img :key="contentIndex" v-else-if="content.type === CONTENT_TYPE_EMOTICON"
                  class="emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"
                  :src="content.url" :alt="content.text" :shared-tooltip-text="content.text" :id="`emoji-${content.text}`"
                >
              </template>
              <el-badge :value="getRepeatedValue(richContentIndex)" :max="99" v-show="getRepeatedValue(richContentIndex) > 1" class="style-scope yt-live-chat-text-message-renderer"
                :style="{ '--repeated-mark-color': repeatedMarkColor }"
              ></el-badge>
            </div>
          </div>
        </div>
      </template>
    </template>

  </yt-live-chat-text-message-renderer>
</template>

<script>
import ImgShadow from './ImgShadow'
import AuthorMedal from './AuthorMedal'
import AuthorBadge from './AuthorBadge'
import * as constants from './constants'
import * as utils from '@/utils'

// HSL
const RANDOM_TEXT_COLOR_START = [0, 100.0, 55.0]
const RANDOM_TEXT_COLOR_END = [360, 60.0, 75.0]

const REPEATED_MARK_COLOR_START = [210, 100.0, 62.5]
const REPEATED_MARK_COLOR_END = [360, 87.3, 69.2]

export default {
  name: 'TextMessage',
  data() {
    return {
      CONTENT_TYPE_TEXT: constants.CONTENT_TYPE_TEXT,
      CONTENT_TYPE_IMAGE: constants.CONTENT_TYPE_IMAGE,
      CONTENT_TYPE_EMOTICON: constants.CONTENT_TYPE_EMOTICON
    }
  },
  components: {
    ImgShadow,
    AuthorMedal,
    AuthorBadge
  },
  props: {
    avatarUrl: String,
    time: Date,
    authorName: String,
    authorType: Number,
    medalName: String,
    medalLevel: Number,
    isFanGroup: Boolean,
    isDelete: Boolean,
    emoticon: String,
    // content: String,
    // contents: Array,
    // richContent: Array,
    richContents: Array,
    privilegeType: Number,
    repeated: Number,
    repeatedThread: Array,
    imageShowType: Number,
    maxImage: Number,
    maxEmoji: Number,
    textColor: String,
    mergeSameUserDanmaku: Boolean
  },
  methods: {
    getRepeatedValue(index) {
      // console.log(`index ${index}: ${this.repeatedThread[index]}`)
      // return this.repeated
      return this.repeatedThread[index]
    },
  },
  computed: {
    timeText() {
      return utils.getTimeTextHourMin(this.time)
    },
    authorTypeText() {
      // 优先判断舰长
      return this.privilegeType > 0 ? 'member' : constants.AUTHOR_TYPE_TO_TEXT[this.authorType]
    },
    randomColor() {
      let color = [0, 0, 0]
      let t = Math.random()
      for (let i = 0; i < 3; i++) {
        color[i] = RANDOM_TEXT_COLOR_START[i] + ((RANDOM_TEXT_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t)
      }
      return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
    },
    
    repeatedMarkColor() {
      let color
      if (this.repeated <= 2) {
        color = REPEATED_MARK_COLOR_START
      } else if (this.repeated >= 10) {
        color = REPEATED_MARK_COLOR_END
      } else {
        color = [0, 0, 0]
        let t = (this.repeated - 2) / (10 - 2)
        for (let i = 0; i < 3; i++) {
          color[i] = REPEATED_MARK_COLOR_START[i] + ((REPEATED_MARK_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t)
        }
      }
      return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
    }
  }
}
</script>

<style>
yt-live-chat-text-message-renderer>#content .el-badge {
  margin-left: 10px;
}

yt-live-chat-text-message-renderer>#content .el-badge .el-badge__content {
  font-size: 14px !important;
  line-height: 18px !important;
  text-shadow: none !important;
  font-family: sans-serif !important;
  color: #FFF !important;
  background-color: var(--repeated-mark-color) !important;
  border: none;
}

</style>

<style src="@/assets/css/youtube/yt-live-chat-text-message-renderer.css"></style>
