export default {
  sidebar: {
    home: 'Home',
    stylegen: 'Style Generator',
    help: 'Tutorial(Help)',
    projectAddress: 'Project Address',
    giftRecordOfficial: 'Official Super Chat Record',
  },
  home: {
    roomIdEmpty: "Room ID can't be empty",
    roomIdInteger: 'Room ID must be positive integer',
    authCodeEmpty: "Identity code can't be empty",
    authCodeFormatError: 'Identity code format error',
    useAuthCodeWarning: 'Please prioritize the identity code',

    openSpecificTutorial: 'Open Tutorial',

    general: 'General',
    room: 'Room',
    roomId: 'Room ID',
    authCode: 'Identity code',
    howToGetAuthCode: 'How to get identity code',
    showDanmaku: 'Show messages',
    showInteractWordEnter: 'Show enter room',
    showInteractWordFollow: 'show follow room',
    showInteractWordShare: 'show share room',
    showSuperchat: 'Show Super Chats',
    showNewMember: 'Show New Member',
    showGift: 'Show Gift',
    showGiftInfo: 'Show gift info',
    mergeSameUserDanmaku: "Merge same user's message",
    mergeSameUserDanmakuInterval: "Message Interval of merge same user's message(sec)",
    mergeSimilarDanmaku: 'Merge similar messages',
    mergeGift: 'Merge gifts',
    danmakuAtBottom: 'Align messages to bottom',
    tickerAtButtom: 'Show on-top Super Chats at bottom',

    minGiftPrice: 'Min price of Super Chats to show',
    minTickerPrice: 'Min price of on-top Super Chats to keep',
    minGiftPricePlaceholder: '(CNY)',
    maxNumber: 'Max number of messages',
    fadeOutNum: 'number of fade out message',
    pinTime: 'message remain time (sec)',
    pinTimePlaceholder: '0 remain forever',

    special: 'special',
    randomXOffset: 'Random messages X offset',
    randomXRangeMin: 'X offset minimum',
    randomXRangeMax: 'X offset maximum',
    randomYOffset: 'Random messages Y offset',
    randomYRangeMin: 'Y offset minimum',
    randomYRangeMax: 'Y offset maximum',
    randomXInitialOffset: 'Initial X offset',
    randomYInitialOffset: 'Initial Y offset',
    floatDistanceXMin: 'minimum X-axis move distance',
    floatDistanceXMax: 'maximum X-axis move distance',
    floatDistanceYMin: 'minimum Y-axis move distance',
    floatDistanceYMax: 'maximum Y-axis move distance',
    floatDistanceThreshold: 'float distance threshold',
    pixelPlaceholder: '(px)',
    floatTime: 'float time',
    timePlaceholder: '(sec)',
    allowTextColorSetting: 'Allow setting color with Hex',

    showTranslateDanmakuOnly: 'Show translation message only',
    blockTranslateDanmaku: 'Block translation message',
    translationSign: 'translation sign',
    onlyOneCharacter: 'one character only, like:【',
    
    useLocalEmoticonSetting: 'use json file to add emoji',
    autoRenderOfficialSmallEmoji: 'Show official small emoji',
    autoRenderOfficialGeneralEmoji: 'Show official general emoji',
    autoRenderStreamerEmoji: 'Show streamer emoji',
    autoRenderPersonalEmoji: 'Show personal emoji',
    isGreedyMatch: 'is greedy match',
    isSkipSameImage: 'not show same image multiple times',
    imageShowType: 'Way image show',
    imageShowTypes: [
      {
        id: '0',
        name: 'Replace the text without sign'
      },
      {
        id: '1',
        name: 'Add after message'
      }
    ],
    maxImage: 'Max number of　pictures',
    maxEmoji: 'Max number of　emojis',

    imageAlignType: 'Way image align',
    imageAlignTypes: [
      {
        id: 'inline',
        name: 'inline(emoji)'
      },
      {
        id: 'block',
        name: 'block(pic)'
      }
    ],
    imageLevel: 'Image sending level',
    imageLevels: [
      {
        id: 0,
        name: 'Anyone'
      },
      {
        id: 3,
        name: 'normal-member'
      },
      {
        id: 2,
        name: 'advanced-member'
      },
      {
        id: 1,
        name: 'ultra-member'
      }
    ],


    block: 'Block',
    giftDanmaku: 'Block system messages (gift effect)',
    blockLevel: 'Block user level lower than',
    informalUser: 'Block informal users',
    unverifiedUser: 'Block unverified users',
    blockKeywords: 'Block keywords',
    onePerLine: 'One per line',
    blockUsers: 'Block users',
    blockUsersByKeywords: 'Block users by keywords',
    blockMedalLevel: 'Block medal level lower than',

    advanced: 'Advanced',
    relayMessagesByServer: 'Relay messages by server',
    autoTranslate: 'Auto translate messages to Japanese (requires relay messages by server)',
    giftUsernamePronunciation: 'Pronunciation of gift username',
    dontShow: 'None',
    pinyin: 'Pinyin',
    kana: 'Kana',

    testing: 'Testing',
    minDanmakuInterval: 'min interval of message sending',
    maxDanmakuInterval: 'max interval of message sending',

    emoticon: 'Custom Emotes',
    emoticonKeyword: 'Emote Code',
    emoticonAlign: 'Emote Align',
    emoticonHeight: 'Emote Height',
    emoticonUrl: 'URL',
    operation: 'Operation',
    addEmoticon: 'Add emote(inline)',
    addPicture: 'Add picture(block)',
    delAllEmoticon: 'Delete all pictures',

    urlTooLong: 'The room URL is too long, and will be truncated by Livehime (but not by OBS)',
    roomUrl: 'Room URL',
    customCss: 'Custom CSS',
    cssFileTooLarge: 'The CSS file is too large',
    copy: 'Copy',
    enterBilibili: 'Enter bilibili room',
    openTutorial: 'Tutorial',

    enterRoom: 'Enter room',
    enterTestRoom: 'Enter test room',
    exportConfig: 'Export config',
    importConfig: 'Import config',
    resetConfig: 'Reset config',
    exportDanmuPictureConfig: 'Export emoticon config',

    failedToParseConfig: 'Failed to parse config: '
  },
  stylegen: {
    general: 'General',
    legacy: 'Classic',
    lineLike: 'Line-like',

    light: 'light',
    dark: 'dark',

    copyBlockCss: 'Left-Click to copy CSS',

    global: 'Global setting',
    danmakuAtBottom: 'Show messages at bottom',
    tickerAtButtom: 'Show on-top Super Chats at bottom',

    outlines: 'Outlines',
    showOutlines: 'Show outlines',
    outlineSize: 'Outline size',
    outlineColor: 'Outline color',

    avatars: 'Avatars',
    showAvatars: 'Show avatars',
    avatarSize: 'Avatar size',

    // NOTE: 注意不要删除其他命名，其他命名仍用于其他tab页面
    // NOTE: Normal Message
    textMessage: 'Normal Message',

    textMessageAvatar: 'Normal Message Avatar',
    textMessageShowAvatar: 'Show Avatar',
    textMessageAvatarSize: 'Avatar Size',
    
    textMessageUserName: 'Normal Message User Name',
    textMessageShowUserName: 'Show User Name',
    textMessageUserNameFont: 'User Name Font',
    textMessageUserNameFontSize: 'User Name Font Size',

    textMessageUserNameOutlineSize: 'User Name Outline Size',
    textMessageUserNameOutlineColor: 'User Name Outline Color',

    textMessageUserNameLineHeight: 'User Name Line Height(default 0)',
    textMessageUserNameColor: 'Normal User Name Color',
    textMessageUserNameRandomColor: 'Random User Name Color',
    textMessageUserNameOwnerColor: 'Owner Color',
    textMessageUserNameModeratorColor: 'Moderator Color',
    textMessageUserNameMember3Color: 'Captain Color',
    textMessageUserNameMember2Color: 'Governor Color',
    textMessageUserNameMember1Color: 'Admiral Color',
    textMessageShowColon: 'Show Colon After Name',
    
    textMessageBadges: 'Normal Message Badge',
    textMessageShowBadges: 'Show Badge',
    textMessageBadgesSize: 'Badge Size',

    textMessageMedal: 'Normal Message fan medal',
    textMessageShowMedal: 'Show fan medal',
    textMessageShowOnlyOwnerMedal: 'Only Show Owner',
    textMessageShowMedalName: 'Show Fan Medal Name',
    textMessageShowMedalLevel: 'Show Fan Medal Level',
    textMessageMedalFontSize: 'Fan Medal Font Size',
    textMessageMedalLineHeight: 'Show Fan Medal Line Height',

    textMessageContent: 'Normal Message Content',
    textMessageContentColor: 'Content Color',
    textMessageContentFont: 'Content Font',
    textMessageContentFontSize: 'Content Font Size',
    textMessageContentLineHeight: 'Content Font Line Height(default 0)',

    textMessageContentOutlineSize: 'Content Outline Size',
    textMessageContentOutlineColor: 'Content Outline Color',

    textMessageOnNewLine: 'Content On New LineShow',
    textMessageMergeSameUser: 'Merge Same User',
    textMessageGroupBlockPadding: 'Content Block Padding',
    
    textMessageBg: 'Normal Message Background',
    textMessageUseBarsInsteadOfBg: 'Block Bar (instead of BG)',
    textMessageMessageBgShadow: 'Message Background Shadow',
    textMessageMessageBgColor: 'Message Background Color',
    textMessageOwnerMessageBgColor: 'Owner Message Background Color',
    textMessageModeratorMessageBgColor: 'Moderator Message Background Color',
    textMessageMember3MessageBgColor: 'Captain Message Background Color',
    textMessageMember2MessageBgColor: 'Governor Message Background Color',
    textMessageMember1MessageBgColor: 'Admiral Message Background Color',

    textMessageTime: 'Normal Message Time',
    textMessageTimeShow: 'Show Message Time',
    textMessageTimeShowRight: 'Show Time Right',
    textMessageTimeColor: 'Time Color',
    textMessageTimeFont: 'Time Font',
    textMessageTimeFontSize: 'Time Font Size',
    textMessageTimeLineHeight: 'Time Font Line Height(default 0)',
    textMessageTimeOutlineSize: 'Time Outline Size',
    textMessageTimeOutlineColor: 'Time Outline Color',

    textMessageEmoticon: 'Emoji',
    textMessageOfficialSmallEmojiSize: 'Official Small Emoji Size',
    textMessageOfficialGeneralEmojiSize: 'Official General Emoji Size',
    textMessageStreamerEmojiSize: 'Streamer Emoji Size',
    textMessagePersonalEmojiSize: 'Personal Emoji Size',
    
    textMessageEmoticonInlineBorderRadius: 'Inline Emoji Border Radius',
    textMessageEmoticonBlockBorderRadius: 'Block Emoji Border Radius',

    textMessageAnimation: 'Normal Message Animation',
    textMessageAnimateIn: 'In Animation',
    textMessageFadeInTime: 'Fade-in Time (ms)',
    textMessageAnimateOut: 'Remove Old Message',
    textMessageFadeOutTime: 'Fade-out Time (ms)',
    textMessageAnimateOutWaitTime: 'Remove Waiting Time (s)',
    textMessageSlide: 'slide',
    textMessageReverseSlide: 'reverse slide',

    // NOTE: Super Chat
    paidMessage: 'Super Chat / Gift',

    paidMessageAvatar: 'Super Chat Avatar',
    paidMessageShowAvatar: 'Show Avatar',
    paidMessageAvatarSize: 'Avatar Size',

    paidMessageBg: 'Super Chat Background',
    paidMessageMessageBgShadow: 'Super Chat Background Shadow',

    paidMessageFirstLine: 'Super Chat First Line',
    paidMessageFirstLineColor: 'First Line Color',
    paidMessageFirstLineFont: 'First Line Font',
    paidMessageFirstLineFontSize: 'First Line Font Size',
    paidMessageFirstLineLineHeight: 'First Line Line Height(default 0)',
    paidMessageFirstLineOutlineSize: 'First Line Outline Size',
    paidMessageFirstLineOutlineColor: 'First Line Outline Color',

    paidMessageSecondLine: 'Super Chat Second Line',
    paidMessageSecondLineColor: 'Second Line Color',
    paidMessageSecondLineFont: 'Second Line Font',
    paidMessageSecondLineFontSize: 'Second Line Font Size',
    paidMessageSecondLineLineHeight: 'Second Line Line Height(default 0)',
    paidMessageSecondLineOutlineSize: 'Second Line Outline Size',
    paidMessageSecondLineOutlineColor: 'Second Line Outline Color',
    
    paidMessageContentLine: 'Super Chat Content Line',
    paidMessageContentLineColor: 'Content Line Color',
    paidMessageContentLineFont: 'Content Line Font',
    paidMessageContentLineFontSize: 'Content Line Font Size',
    paidMessageContentLineLineHeight: 'Content Line Line Height(default 0)',
    paidMessageContentLineOutlineSize: 'Content Line Outline Size',
    paidMessageContentLineOutlineColor: 'Content Line Outline Color',

    paidMessageAnimation: 'Super Chat Animation',
    paidMessageAnimateIn: 'In Animation',
    paidMessageFadeInTime: 'Fade-in Time (ms)',
    paidMessageAnimateOut: 'Remove Old Message',
    paidMessageFadeOutTime: 'Fade-out Time (ms)',
    paidMessageAnimateOutWaitTime: 'remote waiting Time (s)',
    paidMessageSlide: 'slide',
    paidMessageReverseSlide: 'reverse slide',
    
    // NOTE: Membership
    membershipMessage: 'Membership',

    membershipMessageAvatar: 'Membership Avatar',
    membershipMessageShowAvatar: 'Show Avatar',
    membershipMessageAvatarSize: 'Avatar Size',

    membershipMessageBg: 'Membership Background',
    membershipMessageShowBg: 'Show Membership Background',
    membershipMessageMessageBgShadow: 'Membership Background Shadow',
    membershipMessageMember3MessageBgColor: 'Captain Background Color',
    membershipMessageMember2MessageBgColor: 'Governor Background Color',
    membershipMessageMember1MessageBgColor: 'Admiral Background Color',

    membershipMessageFirstLine: 'Membership First Line',
    membershipMessageFirstLineFont: 'First Line Font',
    membershipMessageFirstLineFontSize: 'First Line Font Size',
    membershipMessageFirstLineLineHeight: 'First Line Line Height(default 0)',
    membershipMessageFirstLineColor: 'First Line Color',
    membershipMessageFirstLineOutlineSize: 'First Line Outline Size',
    membershipMessageFirstLineOutlineColor: 'First Line Outline Color',

    membershipMessageSecondLine: 'Membership Second Line',
    membershipMessageSecondLineFont: 'Second Line Font',
    membershipMessageSecondLineFontSize: 'Second Line Font Size',
    membershipMessageSecondLineLineHeight: 'Second Line Line Height(default 0)',
    membershipMessageSecondLineColor: 'Second Line Color',
    membershipMessageSecondLineOutlineSize: 'Second Line Outline Size',
    membershipMessageSecondLineOutlineColor: 'Second Line Outline Color',

    membershipMessageAnimation: 'Membership Animation',
    membershipMessageAnimateIn: 'In Animation',
    membershipMessageFadeInTime: 'Fade-in Time (ms)',
    membershipMessageAnimateOut: 'Remove Old Message',
    membershipMessageFadeOutTime: 'Fade-out Time (ms)',
    membershipMessageAnimateOutWaitTime: 'Remove Waiting Time (s)',
    membershipMessageSlide: 'slide',
    membershipMessageReverseSlide: 'reverse slide',

    // NOTE: Interact Message
    interactMessage: 'Interact Message (Enter, Follow stream)',

    interactMessageAvatar: 'Interact Message Avatar',
    interactMessageShowAvatar: 'Show Avatar',
    interactMessageAvatarSize: 'Avatar Size',
    
    interactMessageUserName: 'Interact Message User Name',
    interactMessageShowUserName: 'Show User Name',
    interactMessageUserNameFont: 'User Name Font',
    interactMessageUserNameFontSize: 'User Name Font Size',
    interactMessageUserNameLineHeight: 'User Name Line Height(default 0)',

    interactMessageUserNameOutlineSize: 'User Name Outline Size',
    interactMessageUserNameOutlineColor: 'User Name Outline Color',

    interactMessageUserNameRandomColor: 'Random User Name Color',
    interactMessageUserNameColor: 'Normal User Name Color',
    interactMessageUserNameOwnerColor: 'Owner Color',
    interactMessageUserNameModeratorColor: 'Moderator Color',
    interactMessageUserNameMember3Color: 'Captain Color',
    interactMessageUserNameMember2Color: 'Governor Color',
    interactMessageUserNameMember1Color: 'Admiral Color',
    interactMessageShowColon: 'Show Colon After Name',
    
    interactMessageBadges: 'Interact Message Badge',
    interactMessageBadgesShow: 'Show Badge',
    interactMessageBadgesSize: 'Badge Size',

    interactMessageMedal: 'Interact Message fan medal',
    interactMessageMedalShow: 'Show fan medal',
    interactMessageMedalShowOnlyOwner: 'Only Show Owner',
    interactMessageMedalShowName: 'Show Fan Medal Name',
    interactMessageMedalShowLevel: 'Show Fan Medal Level',
    interactMessageMedalFontSize: 'Fan Medal Font Size',
    interactMessageMedalLineHeight: 'Show Fan Medal Line Height',

    interactMessageContent: 'Interact Message Content',
    interactMessageContentColor: 'Content Color',
    interactMessageContentFont: 'Content Font',
    interactMessageContentFontSize: 'Content Font Size',
    interactMessageContentLineHeight: 'Content Font Line Height(default 0)',
    interactMessageContentOutlineSize: 'Content Outline Size',
    interactMessageContentOutlineColor: 'Content Outline Color',
    
    interactMessageBg: 'Interact Message Background',
    interactMessageUseBarsInsteadOfBg: 'Block Bar (instead of BG)',
    interactMessageMessageBgColor: 'Message Background Color',
    interactMessageMessageBgShadow: 'Message Background Shadow',
    interactMessageOwnerMessageBgColor: 'Owner Message Background Color',
    interactMessageModeratorMessageBgColor: 'Moderator Message Background Color',
    interactMessageMember3MessageBgColor: 'Captain Message Background Color',
    interactMessageMember2MessageBgColor: 'Governor Message Background Color',
    interactMessageMember1MessageBgColor: 'Admiral Message Background Color',
    
    interactMessageTime: 'Interact Message Time',
    interactMessageTimeShow: 'Show Message Time',
    interactMessageTimeShowRight: 'Show Time Right',
    interactMessageTimeColor: 'Time Color',
    interactMessageTimeFont: 'Time Font',
    interactMessageTimeFontSize: 'Time Font Size',
    interactMessageTimeLineHeight: 'Time Font Line Height(default 0)',
    interactMessageTimeOutlineSize: 'Time Outline Size',
    interactMessageTimeOutlineColor: 'Time Outline Color',

    interactMessageAnimation: 'Interact Message Animation',
    interactMessageAnimateIn: 'In Animation',
    interactMessageFadeInTime: 'Fade-in Time (ms)',
    interactMessageAnimateOut: 'Remove Old Message',
    interactMessageFadeOutTime: 'Fade-out Time (ms)',
    interactMessageAnimateOutWaitTime: 'Remove Waiting Time (s)',
    interactMessageSlide: 'slide',
    interactMessageReverseSlide: 'reverse slide',

    // NOTE: Global Padding
    globalPadding: 'Global Padding',
    globalPaddingTop: 'Global Padding - Top',
    globalPaddingBottom: 'Global Padding - Bottom',
    globalPaddingLeft: 'Global Padding - Left',
    globalPaddingRight: 'Global Padding - Right',

    // NOTE: Global Margin
    globalMargin: 'Global Margin',
    globalMarginTop: 'Global Margin - Top',
    globalMarginBottom: 'Global Margin - Bottom',
    globalMarginLeft: 'Global Margin - Left',
    globalMarginRight: 'Global Margin - Right',

    // NOTE: Global Border Radius
    globalBorderRadius: 'Global Border Radius',
    globalBorderRadiusTopLeft: 'Global Border Radius - Top Left',
    globalBorderRadiusTopRight: 'Global Border Radius - Top Right',
    globalBorderRadiusBottomLeft: 'Global Border Radius - Bottom Left',
    globalBorderRadiusBottomRight: 'Global Border Radius - Bottom Right',

    // NOTE: TickerMessage
    Ticker: 'Paid Ticker',
    TickerShowTicker: 'Show Paid Ticker',
    TickerShowThingsOtherThanTicker: 'Show Things Other than Ticker',

    userNames: 'User Names',
    showUserNames: 'Show user names',
    font: 'Font',
    fontSize: 'Font size',
    lineHeight: 'Line height (0 for default)',
    randomUserNamesColor: 'Random user name color',
    normalColor: 'Normal color',
    ownerColor: 'Owner color',
    moderatorColor: 'Moderator color',
    memberColor: 'Member color',
    showBadges: 'Show user badges',
    showColon: 'Show colon after name',
    badgesSize: 'badges size',

    medal: 'Fan medal',
    showMedal: 'Show fan medal',
    showOnlyOwnerMedal: 'Show only owner medal',
    showMedalName: 'Show medal name',
    showMedalLevel: 'Show medal level',

    emoticonSize: 'Emoticon size',
    emoticonInlineBorderRadius: 'Inline emoticon border radius',
    emoticonBlockBorderRadius: 'Block picture border radius',
    
    messages: 'Messages',
    color: 'Color',
    onNewLine: 'On new line',
    mergeSameUser: "Merge same user's messages",
    groupBlockPadding: "messages' padding in message group",

    time: 'Timestamps',
    showTime: 'Show timestamps',
    showTimeRight: 'Show timestamps at right',

    backgrounds: 'Backgrounds',
    bgColor: 'Background color',
    useBarsInsteadOfBg: 'Use bars instead of backgrounds',
    messageBgColor: 'Message background color',
    ownerMessageBgColor: 'Owner background color',
    moderatorMessageBgColor: 'Moderator background color',
    memberMessageBgColor: 'Member background color',

    scAndNewMember: 'Super Chat / New Member',
    firstLineFont: 'First line font',
    firstLineFontSize: 'First line font size',
    firstLineLineHeight: 'First line line height (0 for default)',
    firstLineColor: 'First line color',
    secondLineFont: 'Second line font',
    secondLineFontSize: 'Second line font size',
    secondLineLineHeight: 'Second line line height (0 for default)',
    secondLineColor: 'Second line color',
    scContentLineFont: 'Super Chat content font',
    scContentLineFontSize: 'Super Chat content font size',
    scContentLineLineHeight: 'Super Chat content line height (0 for default)',
    scContentLineColor: 'Super Chat content color',
    showNewMemberBg: 'Show new member background',
    showScTicker: 'Show Super Chat ticker',
    showOtherThings: 'Show everything other than Super Chat ticker',

    animation: 'Animation',
    animateIn: 'Animate in',
    fadeInTime: 'Fade in time (miliseconds)',
    animateOut: 'Animate out (Remove Old Messages)',
    animateOutWaitTime: 'Wait time (seconds)',
    fadeOutTime: 'Fade out time (miliseconds)',
    slide: 'Slide',
    reverseSlide: 'Reverse slide',
    playAnimation: 'Play animation',

    result: 'Result',
    copy: 'Copy',
    resetConfig: 'Reset config'
  },
  help: {
    help: 'Help',
    p1_1: '1. Copy the identity code (身份码) from this webpage:',
    p1_2: '. NOTE: DO NOT refresh the identity code, unless it is leaked. Once you refresh the identity code, the old one will be invalid',
    p2: '2. Enter the identity code into the room configuration on the home page. Copy the room URL',
    p3: '3. Generate styles with the style generator. Copy the CSS',
    p4: '4. Add browser source in OBS',
    p5: '5. Enter the previously copied room URL at URL, and enter the previously copied CSS at custom CSS'
  },
  chat: {
    moderator: 'moderator',
    guardLevel1: 'governor',
    guardLevel2: 'admiral',
    guardLevel3: 'captain',
    month: 'month',
    year: 'year',
    sendGift: 'Sent {giftName}x{num}',
    membershipTitle: 'New member',
    tickerMembership: 'Member'
  }
}
