import * as fonts from './fonts'

export const FALLBACK_FONTS = ', "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE \\8F6F \\96C5 \\9ED1 ", SimHei, Arial, sans-serif'

export const COMMON_STYLE = `/* Transparent background */
yt-live-chat-renderer {
  background-color: transparent !important;
}

yt-live-chat-ticker-renderer {
  background-color: transparent !important;
  box-shadow: none !important;
}

yt-live-chat-author-chip #author-name {
  background-color: transparent !important;
}

yt-live-chat-item-list-renderer #item-scroller {
  overflow: hidden !important;
}

yt-live-chat-interact-message-renderer #content,
yt-live-chat-text-message-renderer #content,
yt-live-chat-membership-item-renderer #content {
  overflow: visible !important;
}

/* Hide header and input */
yt-live-chat-header-renderer,
yt-live-chat-message-input-renderer {
  display: none !important;
}

/* Hide unimportant messages */
yt-live-chat-interact-message-renderer[is-deleted],
yt-live-chat-text-message-renderer[is-deleted],
yt-live-chat-membership-item-renderer[is-deleted] {
  display: none !important;
}

yt-live-chat-mode-change-message-renderer, 
yt-live-chat-viewer-engagement-message-renderer, 
yt-live-chat-restricted-participation-renderer {
  display: none !important;
}

yt-live-chat-text-message-renderer a,
yt-live-chat-membership-item-renderer a {
  text-decoration: none !important;
}`

export function getImportStyle(allFonts) {
  let fontsNeedToImport = new Set()
  for (let font of allFonts) {
    if (fonts.NETWORK_FONTS.indexOf(font) !== -1) {
      fontsNeedToImport.add(font)
    }
  }
  let res = []
  for (let font of fontsNeedToImport) {
    res.push(`@import url("https://fonts.googleapis.com/css?family=${encodeURIComponent(font)}");`)
  }
  return res.join('\n')
}

export function getTextMessageTimeStyle(config) {
  return `/* 一般消息时间 TextMessageTime */
  ${config.textMessageTimeShow
    ? `#timestamp.yt-live-chat-text-message-renderer {
  display: inline;
  padding: 0 2px;
  order: ${config.textMessageTimeShowRight ? 3 : 'initial'};
  ${config.textMessageTimeColor ? `color: ${config.textMessageTimeColor} !important;` : ''}
  font-family: "${cssEscapeStr(config.textMessageTimeFont)}"${FALLBACK_FONTS};
  font-size: ${config.textMessageTimeFontSize}px !important;
  line-height: ${config.textMessageTimeLineHeight || config.textMessageTimeFontSize}px !important;
}` : ``}
`
}

export function getInteractMessageTimeStyle(config) {
  return `/* 互动消息时间 InteractMessageTime */
  ${config.interactMessageTimeShow
    ? `#timestamp.yt-live-chat-interact-message-renderer {
  display: inline;
  padding: 0 2px;
  order: ${config.interactMessageTimeShowRight ? 3 : 'initial'};
  ${config.interactMessageTimeColor ? `color: ${config.interactMessageTimeColor} !important;` : ''}
  font-family: "${cssEscapeStr(config.interactMessageTimeFont)}"${FALLBACK_FONTS};
  font-size: ${config.interactMessageTimeFontSize}px !important;
  line-height: ${config.interactMessageTimeLineHeight || config.interactMessageTimeFontSize}px !important;
}` : ``}
`
}

export function getAvatarStyle(config) {
  return `/* Avatars */
yt-live-chat-interact-message-renderer #author-photo,
yt-live-chat-interact-message-renderer #author-photo img,
yt-live-chat-text-message-renderer #author-photo,
yt-live-chat-text-message-renderer #author-photo img,
yt-live-chat-paid-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo img,
yt-live-chat-membership-item-renderer #author-photo,
yt-live-chat-membership-item-renderer #author-photo img {
  ${config.showAvatars ? '' : 'display: none !important;'}
  width: ${config.avatarSize}px !important;
  height: ${config.avatarSize}px !important;
  border-radius: ${config.avatarSize}px !important;
  margin-right: ${config.avatarSize / 4}px !important;
}`
}

export function getTimeStyle(config) {
  return `/* Timestamps */
  ${config.showTime
    ? `#timestamp.yt-live-chat-interact-message-renderer, #timestamp.yt-live-chat-text-message-renderer {
  display: inline;
  padding: 0 2px;
  order: ${config.showTimeRight ? 3 : 'initial'};
  ${config.timeColor ? `color: ${config.timeColor} !important;` : ''}
  font-family: "${cssEscapeStr(config.timeFont)}"${FALLBACK_FONTS};
  font-size: ${config.timeFontSize}px !important;
  line-height: ${config.timeLineHeight || config.timeFontSize}px !important;
}` : ``}
`
}

export function getAnimationStyle(config) {
  let animateIn = config.animateIn
  let fadeInTime = config.fadeInTime
  let animateOut = config.animateOut
  let fadeOutTime = config.fadeOutTime
  let animateOutWaitTime = config.animateOutWaitTime
  let slide = config.slide
  let reverseSlide = config.reverseSlide
  let totalTime = 0
  let keyframes = []
  totalTime = getAnimationTotalTime(animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime)
  keyframes = getAnimationKeyframe(totalTime, animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime, slide, reverseSlide)
  return `/* Animation */
@keyframes anim {
${keyframes.join('\n')}
}

yt-live-chat-interact-message-renderer,
yt-live-chat-text-message-renderer,
yt-live-chat-membership-item-renderer,
yt-live-chat-paid-message-renderer {
  animation: anim ${totalTime}ms;
  animation-fill-mode: both;
}
`
}

export function getTextMessageAnimationStyle(config) {
  if (!config.textMessageAnimateIn && !config.textMessageAnimateOut) {
    return ''
  }
  let animateIn = config.textMessageAnimateIn
  let fadeInTime = config.textMessageFadeInTime
  let animateOut = config.textMessageAnimateOut
  let fadeOutTime = config.textMessageFadeOutTime
  let animateOutWaitTime = config.textMessageAnimateOutWaitTime
  let slide = config.textMessageSlide
  let reverseSlide = config.textMessageReverseSlide
  let totalTime = 0
  let keyframes = []
  totalTime = getAnimationTotalTime(animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime)
  keyframes = getAnimationKeyframe(totalTime, animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime, slide, reverseSlide)
  return `/* 一般消息动画 TextMessageAnimation */
@keyframes textMessageAnimation {
${keyframes.join('\n')}
}
yt-live-chat-text-message-renderer {
  animation: textMessageAnimation ${totalTime}ms;
  animation-fill-mode: both;
}
`
}

export function getPaidMessageAnimationStyle(config) {
  if (!config.paidMessageAnimateIn && !config.paidMessageAnimateOut) {
    return ''
  }
  let animateIn = config.paidMessageAnimateIn
  let fadeInTime = config.paidMessageFadeInTime
  let animateOut = config.paidMessageAnimateOut
  let fadeOutTime = config.paidMessageFadeOutTime
  let animateOutWaitTime = config.paidMessageAnimateOutWaitTime
  let slide = config.paidMessageSlide
  let reverseSlide = config.paidMessageReverseSlide
  let totalTime = 0
  let keyframes = []
  totalTime = getAnimationTotalTime(animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime)
  keyframes = getAnimationKeyframe(totalTime, animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime, slide, reverseSlide)
  return `/* 打赏消息动画 PaidMessageAnimation */
@keyframes paidMessageAnimation {
${keyframes.join('\n')}
}
yt-live-chat-paid-message-renderer {
  animation: paidMessageAnimation ${totalTime}ms;
  animation-fill-mode: both;
}
`
}

export function getMembershipMessageAnimationStyle(config) {
  if (!config.membershipMessageAnimateIn && !config.membershipMessageAnimateOut) {
    return ''
  }
  let animateIn = config.membershipMessageAnimateIn
  let fadeInTime = config.membershipMessageFadeInTime
  let animateOut = config.membershipMessageAnimateOut
  let fadeOutTime = config.membershipMessageFadeOutTime
  let animateOutWaitTime = config.membershipMessageAnimateOutWaitTime
  let slide = config.membershipMessageSlide
  let reverseSlide = config.membershipMessageReverseSlide
  let totalTime = 0
  let keyframes = []
  totalTime = getAnimationTotalTime(animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime)
  keyframes = getAnimationKeyframe(totalTime, animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime, slide, reverseSlide)
  return `/* 上舰消息动画 MembershipMessageAnimation */
@keyframes membershipMessageAnimation {
${keyframes.join('\n')}
}
yt-live-chat-membership-item-renderer {
  animation: membershipMessageAnimation ${totalTime}ms;
  animation-fill-mode: both;
}
`
}

export function getInteractMessageAnimationStyle(config) {
  if (!config.interactMessageAnimateIn && !config.interactMessageAnimateOut) {
    return ''
  }
  let animateIn = config.interactMessageAnimateIn
  let fadeInTime = config.interactMessageFadeInTime
  let animateOut = config.interactMessageAnimateOut
  let fadeOutTime = config.interactMessageFadeOutTime
  let animateOutWaitTime = config.interactMessageAnimateOutWaitTime
  let slide = config.interactMessageSlide
  let reverseSlide = config.interactMessageReverseSlide
  let totalTime = 0
  let keyframes = []
  totalTime = getAnimationTotalTime(animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime)
  keyframes = getAnimationKeyframe(totalTime, animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime, slide, reverseSlide)
  return `/* 互动消息动画 InteractMessageAnimation */
@keyframes interactMessageAnimation {
${keyframes.join('\n')}
}
yt-live-chat-interact-message-renderer {
  animation: interactMessageAnimation ${totalTime}ms;
  animation-fill-mode: both;
}
`
}


export function cssEscapeStr(str) {
  let res = []
  for (let char of str) {
    res.push(cssEscapeChar(char))
  }
  return res.join('')
}

function getAnimationTotalTime(animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime) {
  let totalTime = 0
  if (animateIn) {
    totalTime += fadeInTime
  }
  if (animateOut) {
    totalTime += animateOutWaitTime * 1000
    totalTime += fadeOutTime
  }
  return totalTime
}

function getAnimationKeyframe(totalTime, animateIn, fadeInTime, animateOut, animateOutWaitTime, fadeOutTime, slide, reverseSlide) {
  let keyframes = []
  let curTime = 0
  if (animateIn) {
    keyframes.push(`  0% { opacity: 0;${!slide ? ''
      : ` transform: translateX(${reverseSlide ? 16 : -16}px);`
    } }`)
    curTime += fadeInTime
    keyframes.push(`  ${curTime / totalTime * 100}% { opacity: 1; transform: none; }`)
  }
  if (animateOut) {
    curTime += animateOutWaitTime * 1000
    keyframes.push(`  ${curTime / totalTime * 100}% { opacity: 1; transform: none; }`)
    curTime += fadeOutTime
    keyframes.push(`  ${curTime / totalTime * 100}% { opacity: 0;${!slide ? ''
      : ` transform: translateX(${reverseSlide ? -16 : 16}px);`
    } }`)
  }
  return keyframes
}

function cssEscapeChar(char) {
  if (!needEscapeChar(char)) {
    return char
  }
  let hexCode = char.codePointAt(0).toString(16)
  // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
  return `\\${hexCode} `
}

function needEscapeChar(char) {
  let code = char.codePointAt(0)
  if (0x20 <= code && code <= 0x7E) {
    return char === '"' || char === '\\'
  }
  return true
}
