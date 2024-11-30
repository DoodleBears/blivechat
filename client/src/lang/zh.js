export default {
  sidebar: {
    home: '首页',
    stylegen: '样式生成器',
    help: '使用教程/帮助',
    projectAddress: '项目地址',
    giftRecordOfficial: '官方打赏记录',
  },
  home: {
    roomIdEmpty: '房间ID不能为空',
    roomIdInteger: '房间ID必须为正整数',
    authCodeEmpty: '身份码不能为空',
    authCodeFormatError: '身份码格式错误',
    useAuthCodeWarning: '请优先使用身份码',

    openSpecificTutorial: '打开对应教程',

    general: '常规',
    room: '房间',
    roomId: '房间ID',
    authCode: '身份码',
    howToGetAuthCode: '如何获取身份码',
    showDanmaku: '显示消息弹幕',
    showInteractWordEnter: '显示进房互动',
    showInteractWordFollow: '显示关注互动',
    showInteractWordShare: '显示分享互动',
    showSuperchat: '显示醒目留言(SC)',
    showNewMember: '显示新舰长',
    showGift: '显示礼物',
    showGiftInfo: '显示礼物信息',
    mergeSameUserDanmaku: '合并同用户连续弹幕',
    mergeSameUserDanmakuInterval: '合并弹幕发送间隔(秒)',
    mergeSimilarDanmaku: '合并相似消息弹幕',

    mergeGift: '合并礼物',
    
    minGiftPrice: '显示高于价格打赏',
    minTickerPrice: '停驻高于价格打赏',
    minGiftPricePlaceholder: '(元)',
    maxNumber: '最大弹幕数',
    fadeOutNum: '预留淡出弹幕数',
    pinTime: '淡出前停留时长(秒)',
    pinTimePlaceholder: '0持续停留',
    
    special: '特殊功能',
    danmakuAtBottom: '弹幕居下',
    tickerAtButtom: '底部显示SC固定栏',
    randomXOffset: '随机弹幕X轴位置',
    randomXRangeMin: 'X最小值',
    randomXRangeMax: 'X最大值',
    randomYOffset: '随机弹幕Y轴位置',
    randomYRangeMin: 'Y最小值',
    randomYRangeMax: 'Y最大值',
    randomXInitialOffset: '初始X轴偏移',
    randomYInitialOffset: '初始Y轴偏移',
    floatDistanceXMin: '最小X移动距离',
    floatDistanceXMax: '最大X移动距离',
    floatDistanceXPlaceholder: 'X往右正数，往左负数',
    floatDistanceYMin: '最小Y移动距离',
    floatDistanceYMax: '最大Y移动距离',
    floatDistanceYPlaceholder: 'Y往下正数，往上负数',
    floatDistanceThreshold: '移动距离阈值',
    pixelPlaceholder: '(px)',
    floatTime: '停留时长(漂浮时长)',
    timePlaceholder: '(秒)',
    allowTextColorSetting: '用户自定义弹幕颜色',

    showTranslateDanmakuOnly: '只显示翻译弹幕',
    blockTranslateDanmaku: '屏蔽翻译弹幕',
    translationSign: '翻译弹幕首字符',
    onlyOneCharacter: '只能输入一个字符，如【',

    useLocalEmoticonSetting: '使用json文件设定表情',
    autoRenderOfficialSmallEmoji: '显示官方小表情',
    autoRenderOfficialGeneralEmoji: '显示官方通用表情',
    autoRenderStreamerEmoji: '显示主播表情',
    autoRenderPersonalEmoji: '显示个人购买表情',
    isGreedyMatch: '贪婪匹配',
    isSkipSameImage: '不重复显示相同图片',
    imageShowType: '图片展示方式',
    imageShowTypes: [
      {
        id: '0',
        name: '替换关键词(无需符号)'
      },
      {
        id: '1',
        name: '在文字消息后添加'
      }
    ],
    maxImage: '最大换行图片数',
    maxEmoji: '最大同行图片数',

    imageAlignType: '图片排放方式',
    imageAlignTypes: [
      {
        id: 'inline',
        name: '同行(emoji)'
      },
      {
        id: 'block',
        name: '换行(图片)'
      }
    ],
    imageLevel: '图片权限等级',
    imageLevels: [
      {
        id: 0,
        name: '所有人'
      },
      {
        id: 3,
        name: '舰长'
      },
      {
        id: 2,
        name: '提督'
      },
      {
        id: 1,
        name: '总督'
      }
    ],

    block: '屏蔽',
    giftDanmaku: '屏蔽礼物弹幕',
    blockLevel: '屏蔽用户等级低于',
    informalUser: '屏蔽非正式会员',
    unverifiedUser: '屏蔽未绑定手机用户',
    blockKeywords: '屏蔽关键词',
    onePerLine: '一行一个',
    blockUsers: '屏蔽用户名',
    blockUsersByKeywords: '屏蔽含关键词用户名',
    blockMedalLevel: '屏蔽当前直播间勋章等级低于',

    advanced: '高级',
    relayMessagesByServer: '通过服务器转发消息',
    autoTranslate: '自动翻译弹幕到日语（需要通过服务器转发消息）',
    giftUsernamePronunciation: '标注打赏用户名读音',
    dontShow: '不显示',
    pinyin: '拼音',
    kana: '日文假名',

    testing: '测试',
    minDanmakuInterval: '最小弹幕发送间隔',
    maxDanmakuInterval: '最大弹幕发送间隔',

    emoticon: '自定义表情',
    emoticonKeyword: '替换关键词',
    emoticonAlign: '图片排列',
    emoticonHeight: '图片高度',
    emoticonUrl: 'URL',
    operation: '操作',
    addEmoticon: '添加表情(同行)',
    addPicture: '添加图片(换行)',
    delAllEmoticon: '删除所有表情包',
    emoticonFileTooLarge: '表情包文件太大',

    urlTooLong: '房间URL太长了，会被直播姬截断（OBS不会）',
    roomUrl: '房间URL',
    customCss: '自定义CSS',
    cssFileTooLarge: 'CSS文件太大',
    copy: '复制',
    enterBilibili: '进入B站直播间',
    openTutorial: '使用教程',
    
    enterRoom: '进入房间',
    enterTestRoom: '进入测试房间',
    exportConfig: '导出配置',
    importConfig: '导入配置',
    resetConfig: '恢复默认设置',
    exportEmoticonConfig: '导出表情包配置',

    failedToParseConfig: '配置解析失败：'
  },
  stylegen: {
    general: '通用',
    legacy: '经典',
    lineLike: '仿微信',

    light: '明亮',
    dark: '黑暗',

    copyBlockCss: '左键点击复制当前属性CSS样式',

    global: '全局',
    danmakuAtBottom: '弹幕从底部出现',
    tickerAtButtom: '底部显示SC固定栏',
    
    outlines: '描边',
    showOutlines: '显示描边',
    outlineSize: '描边尺寸',
    outlineColor: '描边颜色',

    avatars: '头像',
    showAvatars: '显示头像',
    avatarSize: '头像尺寸',

    // FIXME: 注意不要删除其他命名，其他命名仍用于其他tab页面
    // TODO: 一般消息
    textMessage: '一般消息',

    textMessageAvatar: '一般消息头像',
    textMessageShowAvatar: '显示头像',
    textMessageAvatarSize: '头像尺寸',
    
    textMessageUserName: '一般消息用户名',
    textMessageShowUserName: '显示用户名',
    textMessageUserNameFont: '用户名字体',
    textMessageUserNameFontSize: '用户名字体尺寸',

    textMessageUserNameOutlineSize: '用户名描边尺寸',
    textMessageUserNameOutlineColor: '用户名描边颜色',

    textMessageUserNameLineHeight: '用户名行高（0为默认）',
    textMessageUserNameColor: '一般用户颜色',
    textMessageUserNameRandomColor: '随机用户名颜色',
    textMessageUserNameOwnerColor: '主播颜色',
    textMessageUserNameModeratorColor: '房管颜色',
    textMessageUserNameMember3Color: '舰长颜色',
    textMessageUserNameMember2Color: '提督颜色',
    textMessageUserNameMember1Color: '总督颜色',
    textMessageShowColon: '用户名后显示冒号',
    
    textMessageBadges: '一般消息勋章',
    textMessageShowBadges: '显示勋章',
    textMessageBadgesSize: '勋章大小',

    textMessageMedal: '一般消息粉丝勋章',
    textMessageShowMedal: '显示粉丝勋章',
    textMessageShowOnlyOwnerMedal: '只显示直播主勋章',
    textMessageShowMedalName: '显示粉丝勋章名',
    textMessageShowMedalLevel: '显示粉丝勋章等级',
    textMessageMedalFontSize: '粉丝勋章字体大小',
    textMessageMedalLineHeight: '显示粉丝勋章行高',

    textMessageContent: '一般消息内容',
    textMessageContentColor: '内容颜色',
    textMessageContentFont: '内容字体',
    textMessageContentFontSize: '内容字体尺寸',
    textMessageContentLineHeight: '内容字体行高（0为默认）',

    textMessageContentOutlineSize: '内容描边尺寸',
    textMessageContentOutlineColor: '内容描边颜色',

    textMessageOnNewLine: '内容在新行显示',
    textMessageMergeSameUser: '合并同用户内容为组',
    textMessageGroupBlockPadding: '内容组内间距',
    
    textMessageBg: '一般消息背景',
    textMessageUseBarsInsteadOfBg: '用条代替消息背景',
    textMessageMessageBgShadow: '消息背景阴影',
    textMessageMessageBgColor: '消息背景色',
    textMessageOwnerMessageBgColor: '主播消息背景色',
    textMessageModeratorMessageBgColor: '房管消息背景色',
    textMessageMember3MessageBgColor: '舰长消息背景色',
    textMessageMember2MessageBgColor: '提督消息背景色',
    textMessageMember1MessageBgColor: '总督消息背景色',
    
    textMessageTime: '一般消息时间',
    textMessageTimeShow: '显示消息时间',
    textMessageTimeShowRight: '在右侧显示时间',
    textMessageTimeColor: '时间颜色',
    textMessageTimeFont: '时间字体',
    textMessageTimeFontSize: '时间字体尺寸',
    textMessageTimeLineHeight: '时间字体行高（0为默认）',
    textMessageTimeOutlineSize: '时间描边尺寸',
    textMessageTimeOutlineColor: '时间描边颜色',

    textMessageEmoticon: '表情',
    textMessageOfficialSmallEmojiSize: 'B站官方小表情大小',
    textMessageOfficialGeneralEmojiSize: 'B站官方通用表情大小',
    textMessageStreamerEmojiSize: '主播房间表情大小',
    textMessagePersonalEmojiSize: '个人购买表情大小',
    
    textMessageEmoticonInlineBorderRadius: '同行表情圆角',
    textMessageEmoticonBlockBorderRadius: '换行表情圆角',

    textMessageAnimation: '一般消息动画',
    textMessageAnimateIn: '进入动画',
    textMessageFadeInTime: '淡入时间（毫秒）',
    textMessageAnimateOut: '移除旧消息',
    textMessageFadeOutTime: '淡出时间（毫秒）',
    textMessageAnimateOutWaitTime: '移除前等待时间（秒）',
    textMessageSlide: '滑动',
    textMessageReverseSlide: '反向滑动',

    // TODO: 打赏消息（SC、礼物）
    paidMessage: '打赏消息（SC、礼物）',

    paidMessageAvatar: '打赏消息头像',
    paidMessageShowAvatar: '显示头像',
    paidMessageAvatarSize: '头像尺寸',

    paidMessageBg: '打赏消息背景',
    paidMessageMessageBgShadow: '打赏消息背景阴影',

    paidMessageFirstLine: '打赏消息（SC、礼物）第一行',
    paidMessageFirstLineColor: '第一行颜色',
    paidMessageFirstLineFont: '第一行字体',
    paidMessageFirstLineFontSize: '第一行字体尺寸',
    paidMessageFirstLineLineHeight: '第一行行高（0为默认）',
    paidMessageFirstLineOutlineSize: '第一行描边尺寸',
    paidMessageFirstLineOutlineColor: '第一行描边颜色',

    paidMessageSecondLine: '打赏消息（SC、礼物）第二行',
    paidMessageSecondLineColor: '第二行颜色',
    paidMessageSecondLineFont: '第二行字体',
    paidMessageSecondLineFontSize: '第二行字体尺寸',
    paidMessageSecondLineLineHeight: '第二行行高（0为默认）',
    paidMessageSecondLineOutlineSize: '第二行描边尺寸',
    paidMessageSecondLineOutlineColor: '第二行描边颜色',
    
    paidMessageContentLine: '打赏消息（SC、礼物）内容行',
    paidMessageContentLineColor: '内容行颜色',
    paidMessageContentLineFont: '内容行字体',
    paidMessageContentLineFontSize: '内容行字体尺寸',
    paidMessageContentLineLineHeight: '内容行行高（0为默认）',
    paidMessageContentLineOutlineSize: '内容行描边尺寸',
    paidMessageContentLineOutlineColor: '内容行描边颜色',

    paidMessageAnimation: '打赏消息动画',
    paidMessageAnimateIn: '进入动画',
    paidMessageFadeInTime: '淡入时间（毫秒）',
    paidMessageAnimateOut: '移除旧消息',
    paidMessageFadeOutTime: '淡出时间（毫秒）',
    paidMessageAnimateOutWaitTime: '移除前等待时间（秒）',
    paidMessageSlide: '滑动',
    paidMessageReverseSlide: '反向滑动',
    
    // TODO: 上舰消息
    membershipMessage: '上舰消息',

    membershipMessageAvatar: '上舰消息头像',
    membershipMessageShowAvatar: '显示头像',
    membershipMessageAvatarSize: '头像尺寸',

    membershipMessageBg: '上舰消息背景',
    membershipMessageShowBg: '显示上舰背景',
    membershipMessageMessageBgShadow: '消息背景阴影',
    membershipMessageMember3MessageBgColor: '舰长背景颜色',
    membershipMessageMember2MessageBgColor: '提督背景颜色',
    membershipMessageMember1MessageBgColor: '总督背景颜色',

    membershipMessageFirstLine: '上舰消息第一行',
    membershipMessageFirstLineFont: '第一行字体',
    membershipMessageFirstLineFontSize: '第一行字体尺寸',
    membershipMessageFirstLineLineHeight: '第一行行高（0为默认）',
    membershipMessageFirstLineColor: '第一行颜色',
    membershipMessageFirstLineOutlineSize: '第一行描边尺寸',
    membershipMessageFirstLineOutlineColor: '第一行描边颜色',

    membershipMessageSecondLine: '上舰消息第二行',
    membershipMessageSecondLineFont: '第二行字体',
    membershipMessageSecondLineFontSize: '第二行字体尺寸',
    membershipMessageSecondLineLineHeight: '第二行行高（0为默认）',
    membershipMessageSecondLineColor: '第二行颜色',
    membershipMessageSecondLineOutlineSize: '第二行描边尺寸',
    membershipMessageSecondLineOutlineColor: '第二行描边颜色',

    membershipMessageAnimation: '上舰消息动画',
    membershipMessageAnimateIn: '进入动画',
    membershipMessageFadeInTime: '淡入时间（毫秒）',
    membershipMessageAnimateOut: '移除旧消息',
    membershipMessageFadeOutTime: '淡出时间（毫秒）',
    membershipMessageAnimateOutWaitTime: '移除前等待时间（秒）',
    membershipMessageSlide: '滑动',
    membershipMessageReverseSlide: '反向滑动',

    // TODO: 互动消息
    interactMessage: '互动消息（进入、关注直播间）',

    interactMessageAvatar: '互动消息头像',
    interactMessageShowAvatar: '显示头像',
    interactMessageAvatarSize: '头像尺寸',
    
    interactMessageUserName: '互动消息用户名',
    interactMessageShowUserName: '显示用户名',
    interactMessageUserNameFont: '用户名字体',
    interactMessageUserNameFontSize: '用户名字体尺寸',
    interactMessageUserNameLineHeight: '用户名行高（0为默认）',

    interactMessageUserNameOutlineSize: '用户名描边尺寸',
    interactMessageUserNameOutlineColor: '用户名描边颜色',

    interactMessageUserNameRandomColor: '随机用户名颜色',
    interactMessageUserNameColor: '一般用户颜色',
    interactMessageUserNameOwnerColor: '主播颜色',
    interactMessageUserNameModeratorColor: '房管颜色',
    interactMessageUserNameMember3Color: '舰长颜色',
    interactMessageUserNameMember2Color: '提督颜色',
    interactMessageUserNameMember1Color: '总督颜色',
    interactMessageShowColon: '用户名后显示冒号',
    
    interactMessageBadges: '互动消息勋章',
    interactMessageBadgesShow: '显示勋章',
    interactMessageBadgesSize: '勋章大小',

    interactMessageMedal: '互动消息粉丝勋章',
    interactMessageMedalShow: '显示粉丝勋章',
    interactMessageMedalShowOnlyOwner: '只显示直播主勋章',
    interactMessageMedalShowName: '显示粉丝勋章名',
    interactMessageMedalShowLevel: '显示粉丝勋章等级',
    interactMessageMedalFontSize: '粉丝勋章字体尺寸',
    interactMessageMedalLineHeight: '粉丝勋章行高（0为默认）',

    interactMessageContent: '互动消息内容',
    interactMessageContentColor: '内容颜色',
    interactMessageContentFont: '内容字体',
    interactMessageContentFontSize: '内容字体尺寸',
    interactMessageContentLineHeight: '内容字体行高（0为默认）',
    interactMessageContentOutlineSize: '内容描边尺寸',
    interactMessageContentOutlineColor: '内容描边颜色',
    
    interactMessageBg: '互动消息背景',
    interactMessageUseBarsInsteadOfBg: '用条代替消息背景',
    interactMessageMessageBgShadow: '消息背景阴影',
    interactMessageMessageBgColor: '消息背景色',
    interactMessageOwnerMessageBgColor: '主播消息背景色',
    interactMessageModeratorMessageBgColor: '房管消息背景色',
    interactMessageMember3MessageBgColor: '舰长消息背景色',
    interactMessageMember2MessageBgColor: '提督消息背景色',
    interactMessageMember1MessageBgColor: '总督消息背景色',
    
    interactMessageTime: '互动消息时间',
    interactMessageTimeShow: '显示消息时间',
    interactMessageTimeShowRight: '在右侧显示时间',
    interactMessageTimeColor: '时间颜色',
    interactMessageTimeFont: '时间字体',
    interactMessageTimeFontSize: '时间字体尺寸',
    interactMessageTimeLineHeight: '时间字体行高（0为默认）',
    interactMessageTimeOutlineSize: '时间描边尺寸',
    interactMessageTimeOutlineColor: '时间描边颜色',

    interactMessageAnimation: '互动消息动画',
    interactMessageAnimateIn: '进入动画',
    interactMessageFadeInTime: '淡入时间（毫秒）',
    interactMessageAnimateOut: '移除旧消息',
    interactMessageFadeOutTime: '淡出时间（毫秒）',
    interactMessageAnimateOutWaitTime: '移除前等待时间（秒）',
    interactMessageSlide: '滑动',
    interactMessageReverseSlide: '反向滑动',

    // TODO: 全局内边距
    globalPadding: '全局内边距',
    globalPaddingTop: '全局内边距-上侧',
    globalPaddingBottom: '全局内边距-下侧',
    globalPaddingLeft: '全局内边距-左侧',
    globalPaddingRight: '全局内边距-右侧',

    // TODO: 全局外边距
    globalMargin: '全局外边距',
    globalMarginTop: '全局外边距-上侧',
    globalMarginBottom: '全局外边距-下侧',
    globalMarginLeft: '全局外边距-左侧',
    globalMarginRight: '全局外边距-右侧',

    // TODO: 全局圆角大小
    globalBorderRadius: '全局圆角大小',
    globalBorderRadiusTopLeft: '全局圆角大小-左上',
    globalBorderRadiusTopRight: '全局圆角大小-右上',
    globalBorderRadiusBottomLeft: '全局圆角大小-左下',
    globalBorderRadiusBottomRight: '全局圆角大小-右下',

    // TODO: 固定栏消息
    Ticker: '打赏固定栏',
    TickerShowTicker: '显示打赏固定栏',
    TickerShowThingsOtherThanTicker: '显示打赏固定栏之外的内容',

    userNames: '用户名',
    showUserNames: '显示用户名',
    randomUserNamesColor: '随机名字颜色',
    font: '字体',
    fontSize: '字体尺寸',
    lineHeight: '行高（0为默认）',
    normalColor: '普通颜色',
    ownerColor: '主播颜色',
    moderatorColor: '房管颜色',
    memberColor: '舰长颜色',
    showBadges: '显示舰队勋章',
    showColon: '用户名后显示冒号',
    badgesSize: '勋章大小',

    medal: '粉丝勋章(牌子)',
    showMedal: '显示粉丝勋章',
    showOnlyOwnerMedal: '只显示直播主勋章',
    showMedalName: '显示粉丝勋章名',
    showMedalLevel: '显示粉丝勋章等级',

    emoticonSize: '表情大小',
    emoticonInlineBorderRadius: '同行表情圆角',
    emoticonBlockBorderRadius: '换行表情圆角',

    messages: '消息',
    color: '颜色',
    onNewLine: '在新行显示',
    mergeSameUser: '合并同用户消息为组',
    groupBlockPadding: '消息组内消息的间距',
    

    time: '时间',
    showTime: '显示时间',
    showTimeRight: '在右侧显示时间',

    backgrounds: '背景',
    bgColor: '全局背景色',
    useBarsInsteadOfBg: '用条代替消息背景',
    messageBgColor: '消息背景色',
    ownerMessageBgColor: '主播消息背景色',
    moderatorMessageBgColor: '房管消息背景色',
    memberMessageBgColor: '舰长消息背景色',

    scAndNewMember: '打赏、舰长',
    firstLineFont: '第一行字体',
    firstLineFontSize: '第一行字体尺寸',
    firstLineLineHeight: '第一行行高（0为默认）',
    firstLineColor: '第一行颜色',
    secondLineFont: '第二行字体',
    secondLineFontSize: '第二行字体尺寸',
    secondLineLineHeight: '第二行行高（0为默认）',
    secondLineColor: '第二行颜色',
    scContentLineFont: 'Super Chat内容字体',
    scContentLineFontSize: 'Super Chat内容字体尺寸',
    scContentLineLineHeight: 'Super Chat内容行高（0为默认）',
    scContentLineColor: 'Super Chat内容颜色',
    showNewMemberBg: '显示新舰长背景',
    showScTicker: '显示Super Chat固定栏',
    showOtherThings: '显示Super Chat固定栏之外的内容',

    animation: '动画',
    animateIn: '进出动画',
    fadeInTime: '淡入时间（毫秒）',
    animateOut: '移除旧消息',
    animateOutWaitTime: '移除前等待时间（秒）',
    fadeOutTime: '淡出时间（毫秒）',
    slide: '滑动',
    reverseSlide: '反向滑动',
    playAnimation: '播放动画',

    result: '结果',
    copy: '复制',
    resetConfig: '恢复默认设置'
  },
  help: {
    help: '帮助',
    p1_1: '1. 从这个页面复制身份码：',
    p1_2: '。注意：不要刷新身份码，除非你的身份码泄露了，因为刷新身份码会使旧的身份码失效',
    p2: '2. 把身份码输入到首页的房间配置，复制房间URL',
    p3: '3. 使用样式生成器生成样式，复制CSS',
    p4: '4. 在OBS中添加浏览器源',
    p5: '5. URL处输入之前复制的房间URL，自定义CSS处输入之前复制的CSS'
  },
  chat: {
    moderator: '管理员',
    guardLevel1: '总督',
    guardLevel2: '提督',
    guardLevel3: '舰长',
    month: '个月',
    year: '年',
    sendGift: '赠送 {giftName}x{num}',
    membershipTitle: '新会员',
    tickerMembership: '会员'
  }
}
