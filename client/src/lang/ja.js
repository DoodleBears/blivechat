export default {
  sidebar: {
    home: 'トップページ',
    stylegen: 'スタイルジェネレータ',
    help: '使用教程（ヘルプ）',
    projectAddress: 'プロジェクトアドレス',
    giftRecordOfficial: '公式スーパーチャット記録',
  },
  home: {
    roomIdEmpty: 'ルームのIDを空白にすることはできません',
    roomIdInteger: 'ルームは正の整数でなければなりません',
    authCodeEmpty: 'アイデンティティコードを空白にすることはできません',
    authCodeFormatError: 'アイデンティティコードの形式エラー',
    useAuthCodeWarning: 'アイデンティティコードを優先的に使用してください',

    openSpecificTutorial: '使用教程',

    general: '常規',
    room: 'ルーム',
    roomId: 'ルームID',
    authCode: 'アイデンティティコード',
    howToGetAuthCode: 'アイデンティティコードの取得方法',
    showDanmaku: 'コメントを表示する',
    showイントラクションWordEnter: '部屋に入るを表示する',
    showイントラクションWordFollow: 'フォローを表示する',
    showイントラクションWordShare: 'シェアを表示する',
    showSuperchat: 'スーパーチャットを表示する',
    showNewMember: '新メンバーを表示する',
    showGift: 'ギフトを表示する',
    showGiftInfo: 'ギフト内容を表示する',
    mergeSameUserDanmaku: '同じリスナーのコメントを合併する',
    mergeSameUserDanmakuInterval: '同じリスナーのコメントを合併するタイム間隔（秒）',
    mergeSimilarDanmaku: '同じコメントを合併する',
    mergeGift: 'ギフトを合併する',
    
    minGiftPrice: '最低表示スーパーチャット価格',
    minTickerPrice: '最低表示常駐Topスーパーチャット価格',
    minGiftPricePlaceholder: '(CNY)',
    maxNumber: '最大コメント数',
    fadeOutNum: '消えるコメント数',
    pinTime: 'コメントの存在時間(秒)',
    pinTimePlaceholder: '0 は消しない',

    special: '特殊機能',
    danmakuAtBottom: 'コメントを下揃え',
    tickerAtButtom: '最低表示常駐Topスーパーチャットを下から現れる',
    randomXOffset: 'ランダムコメントX位置',
    randomXRangeMin: 'Xの最小値',
    randomXRangeMax: 'Xの最大値',
    randomYOffset: 'ランダムコメントY位置',
    randomYRangeMin: 'Yの最小値',
    randomYRangeMax: 'Yの最大値',
    randomXInitialOffset: '初期Xの偏移',
    randomYInitialOffset: '初期Yの偏移',
    floatDistanceXMin: '最小X移動距離',
    floatDistanceXMax: '最大X移動距離',
    floatDistanceYMin: '最小Y移動距離',
    floatDistanceYMax: '最大Y移動距離',
    floatDistanceThreshold: '移動距離スレッショルド',
    pixelPlaceholder: '(px)',
    floatTime: '移動時間',
    timePlaceholder: '(秒)',
    allowTextColorSetting: '文字の色を変更（Hex）',
    
    showTranslateDanmakuOnly: '翻訳コメントだけを表示する',
    blockTranslateDanmaku: '翻訳コメントをブロック',
    translationSign: '翻訳コメントの合図キャラクタ',
    onlyOneCharacter: '一個キャラクタだけ、例：【',

    useLocalEmoticonSetting: 'jsonファイルでスタンプを編集',
    autoRenderOfficialSmallEmoji: '公式小スタンプを表示する',
    autoRenderOfficialGeneralEmoji: '公式通常スタンプを表示する',
    autoRenderStreamerEmoji: '配信者スタンプを表示する',
    autoRenderPersonalEmoji: '個人持ちスタンプを表示する',
    isGreedyMatch: '貪欲(Greedy)マッチ',
    isSkipSameImage: '相同画像を表示しない',
    imageShowType: 'スタンプの表現方',
    imageShowTypes: [
      {
        id: '0',
        name: '文字を替わる(合図キャラクタ必要ない)'
      },
      {
        id: '1',
        name: 'コメントの後で付ける'
      }
    ],
   
    maxImage: '最大画像数',
    maxEmoji: '最大絵文字数',
    imageAlignType: 'スタンプの揃え',
    imageAlignTypes: [
      {
        id: 'inline',
        name: '後で付け(絵文字)'
      },
      {
        id: 'block',
        name: '新たな行(画像)'
      }
    ],
    imageLevel: '画像発送権限',
    imageLevels: [
      {
        id: 0,
        name: '全て'
      },
      {
        id: 3,
        name: '艦長'
      },
      {
        id: 2,
        name: '提督'
      },
      {
        id: 1,
        name: '総督'
      }
    ],

    block: 'ブロック',
    giftDanmaku: 'ブロックシステムコメント（プレゼント効果）',
    blockLevel: 'ブロックユーザーレベルがx未満',
    informalUser: 'ブロック非公式ユーザー',
    unverifiedUser: 'ブロック認証されていないユーザー',
    blockKeywords: 'ブロックキーワード',
    onePerLine: '1行に1つずつ',
    blockUsers: 'ブロックユーザー',
    blockUsersByKeywords: 'ブロックユーザーキーワード',
    blockMedalLevel: 'ブロック勲章等級がx未満',

    advanced: 'アドバンスド',
    relayMessagesByServer: 'サーバを介してメッセージを転送する',
    autoTranslate: 'コメントを日本語に翻訳する（サーバを介してメッセージを転送する必要）',
    giftUsernamePronunciation: 'スーパーチャットのユーザー名の発音',
    dontShow: '非表示',
    pinyin: 'ピンイン',
    kana: '仮名',

    testing: 'コメントテスト',
    minDanmakuInterval: '最小コメント間隔',
    maxDanmakuInterval: '最大コメント間隔',

    emoticon: 'カスタムスタンプ',
    emoticonKeyword: '置き換えるキーワード',
    emoticonAlign: '画像揃え',
    emoticonLevel: '图片发送权限',
    emoticonHeight: '画像高度',
    emoticonUrl: 'URL',
    operation: '操作',
    addEmoticon: 'スタンプ追加（後で付け）',
    addPicture: '画像追加（新たな行）',
    delAllEmoticon: '全部スタンプを消す',
    emoticonFileTooLarge: 'スタンプファイルが大きすぎます',

    urlTooLong: 'ルームのURLが長すぎて、直播姬によって切り詰められます（ただし、OBSでは切り詰められません）',
    roomUrl: 'ルームのURL',
    customCss: 'カスタムCSS',
    cssFileTooLarge: 'CSSファイルが大きすぎます',
    copy: 'コピー',
    enterBilibili: 'Bilibiliルームに入る',
    openTutorial: '使用教程',

    enterRoom: 'ルームに入る',
    enterTestRoom: 'テストルームに入る',
    exportConfig: 'コンフィグの導出',
    importConfig: 'コンフィグの導入',
    resetConfig: 'コンフィグのリセット',
    exportEmoticonConfig: 'スタンプコンフィグの導出',

    failedToParseConfig: 'コンフィグ解析に失敗しました'
  },
  stylegen: {
    general: '通常',
    legacy: '古典',
    lineLike: 'Line風',

    light: '明るい',
    dark: '暗い',

    copyBlockCss: '左クリックでCSSをコピー',

    global: '全局設定',
    danmakuAtBottom: 'コメントを下から現れる',
    tickerAtButtom: '最低表示常駐Topスーパーチャットを下から現れる',

    outlines: 'アウトライン',
    showOutlines: 'アウトラインを表示する',
    outlineSize: 'アウトラインのサイズ',
    outlineColor: 'アウトラインの色',

    avatars: 'アイコン',
    showAvatars: 'アイコンを表示する',
    avatarSize: 'アイコンのサイズ',

    // FIXME: 注意不要删除其他命名，其他命名仍用于其他tab页面
    // TODO: 一般コメント
    textMessage: '一般コメント',

    textMessageAvatar: '一般コメントアイコン',
    textMessageShowAvatar: 'アイコンを表示する',
    textMessageAvatarSize: 'アイコンのサイズ',
    
    textMessageUserName: '一般コメントユーザー名',
    textMessageShowUserName: 'ユーザー名を表示する',
    textMessageUserNameFont: 'ユーザー名フォント',
    textMessageUserNameFontSize: 'ユーザー名フォント サイズ',

    textMessageUserNameOutlineSize: 'ユーザー名 アウトラインサイズ',
    textMessageUserNameOutlineColor: 'ユーザー名アウトライン色',

    textMessageUserNameLineHeight: 'ユーザー名 行の高さ（0はデフォルト）',
    textMessageUserNameColor: '一般ユーザー名色',
    textMessageUserNameRandomColor: 'ランダムユーザー名色',
    textMessageUserNameOwnerColor: 'オーナーユーザー色',
    textMessageUserNameModeratorColor: '管理者ユーザー名色',
    textMessageUserNameMember3Color: '艦長ユーザー名色',
    textMessageUserNameMember2Color: '提督ユーザー名色',
    textMessageUserNameMember1Color: '総督ユーザー名色',
    textMessageShowColon: 'ユーザー名の後にコロンを表示する',
    
    textMessageBadges: '一般コメント勲章',
    textMessageShowBadges: '勲章を表示する',
    textMessageBadgesSize: '勲章サイズ',

    textMessageMedal: '一般コメントファン勲章',
    textMessageShowMedal: 'ファン勲章を表示する',
    textMessageShowOnlyOwnerMedal: 'オーナー勲章だけを表示する',
    textMessageShowMedalName: 'ファン勲章名を表示する',
    textMessageShowMedalLevel: 'ファン勲章レベルを表示する',
    textMessageMedalFontSize: 'ファン勲章フォントサイズ',
    textMessageMedalLineHeight: 'ファン勲章行の高さ',

    textMessageContent: '一般コメント内容',
    textMessageContentColor: '内容色',
    textMessageContentFont: '内容フォント',
    textMessageContentFontSize: '内容フォント サイズ',
    textMessageContentLineHeight: '内容フォント 行の高さ（0はデフォルト）',

    textMessageContentOutlineSize: '内容 アウトラインサイズ',
    textMessageContentOutlineColor: '内容アウトライン色',

    textMessageOnNewLine: '内容を新たな行に表示する',
    textMessageMergeSameUser: '同じユーザーのコメントを合併',
    textMessageGroupBlockPadding: '合併コメントの間隔',
    
    textMessageBg: '一般コメント背景',
    textMessageUseBarsInsteadOfBg: '背景に代わります',
    textMessageMessageBgColor: 'コメント背景色',
    textMessageMessageBgShadow: 'コメント背景の影',
    textMessageOwnerMessageBgColor: 'オーナーのコメント背景色',
    textMessageModeratorMessageBgColor: '管理者コメント背景色',
    textMessageMember3MessageBgColor: '艦長コメント背景色',
    textMessageMember2MessageBgColor: '提督コメント背景色',
    textMessageMember1MessageBgColor: '総督コメント背景色',

    textMessageTime: '一般コメント時間',
    textMessageTimeShow: 'コメント時間を表示する',
    textMessageTimeShowRight: 'コメント時間を右に',
    textMessageTimeColor: '時間色',
    textMessageTimeFont: '時間フォント',
    textMessageTimeFontSize: '時間フォント サイズ',
    textMessageTimeLineHeight: '時間フォント 行の高さ（0はデフォルト）',
    textMessageTimeOutlineSize: '時間 アウトラインサイズ',
    textMessageTimeOutlineColor: '時間アウトライン色',

    textMessageEmoticon: 'スタンプ',
    textMessageOfficialSmallEmojiSize: '公式小スタンプサイズ',
    textMessageOfficialGeneralEmojiSize: '公式通常スタンプサイズ',
    textMessageStreamerEmojiSize: '配信者スタンプサイズ',
    textMessagePersonalEmojiSize: '個人持ちスタンプサイズ',
    textMessageEmoticonInlineBorderRadius: '後で付けスタンプ圓角サイズ',
    textMessageEmoticonBlockBorderRadius: '新たな行スタンプ圓角サイズ',

    textMessageAnimation: '一般コメントアニメーション',
    textMessageAnimateIn: '入場アニメーション',
    textMessageFadeInTime: '入場時間（ミリ秒）',
    textMessageAnimateOut: '消す古いコメント',
    textMessageFadeOutTime: '出場時間（ミリ秒）',
    textMessageAnimateOutWaitTime: '消す待つ時間（秒）',
    textMessageSlide: 'スライド',
    textMessageReverseSlide: '逆スライド',

    // TODO: スーパーチャット
    paidMessage: 'スーパーチャット / ギフト',

    paidMessageAvatar: 'スーパーチャットアイコン',
    paidMessageShowAvatar: 'アイコンを表示する',
    paidMessageAvatarSize: 'アイコンのサイズ',

    paidMessageBg: 'スーパーチャット背景',
    paidMessageMessageBgShadow: 'スーパーチャット背景の影',

    paidMessageFirstLine: 'スーパーチャット第一行',
    paidMessageFirstLineColor: '第一行色',
    paidMessageFirstLineFont: '第一行フォント',
    paidMessageFirstLineFontSize: '第一行フォント サイズ',
    paidMessageFirstLineLineHeight: '第一行 行の高さ（0はデフォルト）',
    paidMessageFirstLineOutlineSize: '第一行 アウトラインサイズ',
    paidMessageFirstLineOutlineColor: '第一行アウトライン色',

    paidMessageSecondLine: 'スーパーチャット第二行',
    paidMessageSecondLineColor: '第二行色',
    paidMessageSecondLineFont: '第二行フォント',
    paidMessageSecondLineFontSize: '第二行フォント サイズ',
    paidMessageSecondLineLineHeight: '第二行 行の高さ（0はデフォルト）',
    paidMessageSecondLineOutlineSize: '第二行 アウトラインサイズ',
    paidMessageSecondLineOutlineColor: '第二行アウトライン色',
    
    paidMessageContentLine: 'スーパーチャット内容 Line',
    paidMessageContentLineColor: '内容 Line色',
    paidMessageContentLineFont: '内容 Lineフォント',
    paidMessageContentLineFontSize: '内容 Lineフォント サイズ',
    paidMessageContentLineLineHeight: '内容 Line 行の高さ（0はデフォルト）',
    paidMessageContentLineOutlineSize: '内容 Line アウトラインサイズ',
    paidMessageContentLineOutlineColor: '内容 Lineアウトライン色',

    paidMessageAnimation: 'スーパーチャットアニメーション',
    paidMessageAnimateIn: '入場アニメーション',
    paidMessageFadeInTime: '入場時間（ミリ秒）',
    paidMessageAnimateOut: '消す古いコメント',
    paidMessageFadeOutTime: '出場時間（ミリ秒）',
    paidMessageAnimateOutWaitTime: '消す待つ時間（秒）',
    paidMessageSlide: 'スライド',
    paidMessageReverseSlide: '逆スライド',
    
    // TODO: メンバー
    membershipMessage: 'メンバー',

    membershipMessageAvatar: 'メンバーアイコン',
    membershipMessageShowAvatar: 'アイコンを表示する',
    membershipMessageAvatarSize: 'アイコンのサイズ',

    membershipMessageBg: 'メンバー背景',
    membershipMessageShowBg: 'メンバー背景を表示する',
    membershipMessageMessageBgShadow: 'メンバー背景の影',
    membershipMessageMember3MessageBgColor: '艦長背景色',
    membershipMessageMember2MessageBgColor: '提督背景色',
    membershipMessageMember1MessageBgColor: '総督背景色',

    membershipMessageFirstLine: 'メンバー第一行',
    membershipMessageFirstLineFont: '第一行フォント',
    membershipMessageFirstLineFontSize: '第一行フォント サイズ',
    membershipMessageFirstLineLineHeight: '第一行 行の高さ（0はデフォルト）',
    membershipMessageFirstLineColor: '第一行色',
    membershipMessageFirstLineOutlineSize: '第一行 アウトラインサイズ',
    membershipMessageFirstLineOutlineColor: '第一行アウトライン色',

    membershipMessageSecondLine: 'メンバー第二行',
    membershipMessageSecondLineFont: '第二行フォント',
    membershipMessageSecondLineFontSize: '第二行フォントサイズ',
    membershipMessageSecondLineLineHeight: '第二行 行の高さ（0はデフォルト）',
    membershipMessageSecondLineColor: '第二行色',
    membershipMessageSecondLineOutlineSize: '第二行 アウトラインサイズ',
    membershipMessageSecondLineOutlineColor: '第二行アウトライン色',

    membershipMessageAnimation: 'メンバーアニメーション',
    membershipMessageAnimateIn: '入場アニメーション',
    membershipMessageFadeInTime: '入場時間（ミリ秒）',
    membershipMessageAnimateOut: '消す古いコメント',
    membershipMessageFadeOutTime: '出場時間（ミリ秒）',
    membershipMessageAnimateOutWaitTime: '消す待つ時間（秒）',
    membershipMessageSlide: 'スライド',
    membershipMessageReverseSlide: '逆スライド',

    // TODO: イントラクションコメント
    interactMessage: 'イントラクションコメント(入る, フォロー)',

    interactMessageAvatar: 'イントラクションコメントアイコン',
    interactMessageShowAvatar: 'アイコンを表示する',
    interactMessageAvatarSize: 'アイコンのサイズ',
    
    interactMessageUserName: 'イントラクションコメントユーザー名',
    interactMessageShowUserName: 'ユーザー名を表示する',
    interactMessageUserNameFont: 'ユーザー名フォント',
    interactMessageUserNameFontSize: 'ユーザー名フォント サイズ',
    interactMessageUserNameLineHeight: 'ユーザー名 行の高さ（0はデフォルト）',

    interactMessageUserNameOutlineSize: 'ユーザー名 アウトラインサイズ',
    interactMessageUserNameOutlineColor: 'ユーザー名アウトライン色',

    interactMessageUserNameRandomColor: 'ランダムユーザー名色',
    interactMessageUserNameColor: '一般ユーザー名色',
    interactMessageUserNameOwnerColor: 'オーナーユーザー色',
    interactMessageUserNameModeratorColor: '管理者ユーザー名色',
    interactMessageUserNameMember3Color: '艦長ユーザー名色',
    interactMessageUserNameMember2Color: '提督ユーザー名色',
    interactMessageUserNameMember1Color: '総督ユーザー名色',
    interactMessageShowColon: 'ユーザー名の後にコロンを表示する',
    
    interactMessageBadges: 'イントラクションコメント勲章',
    interactMessageBadgesShow: '勲章を表示する',
    interactMessageBadgesSize: '勲章サイズ',

    interactMessageMedal: 'イントラクションコメントファン勲章',
    interactMessageMedalShow: 'ファン勲章を表示する',
    interactMessageMedalShowOnlyOwner: 'オーナー勲章だけを表示する',
    interactMessageMedalShowName: 'ファン勲章名を表示する',
    interactMessageMedalShowLevel: 'ファン勲章レベルを表示する',
    interactMessageMedalFontSize: 'ファン勲章フォントサイズ',
    interactMessageMedalLineHeight: 'ファン勲章行の高さ',

    interactMessageContent: 'イントラクションコメント内容',
    interactMessageContentColor: '内容色',
    interactMessageContentFont: '内容フォント',
    interactMessageContentFontSize: '内容フォント サイズ',
    interactMessageContentLineHeight: '内容フォント 行の高さ（0はデフォルト）',
    interactMessageContentOutlineSize: '内容 アウトラインサイズ',
    interactMessageContentOutlineColor: '内容アウトライン色',
    
    interactMessageBg: 'イントラクションコメント背景',
    interactMessageUseBarsInsteadOfBg: '背景に代わります',
    interactMessageMessageBgColor: 'コメント背景色',
    interactMessageMessageBgShadow: 'コメント背景の影',
    interactMessageOwnerMessageBgColor: 'オーナーのコメント背景色',
    interactMessageModeratorMessageBgColor: '管理者コメント背景色',
    interactMessageMember3MessageBgColor: '艦長コメント背景色',
    interactMessageMember2MessageBgColor: '提督コメント背景色',
    interactMessageMember1MessageBgColor: '総督コメント背景色',
    
    interactMessageTime: 'イントラクションコメント時間',
    interactMessageTimeShow: 'コメント時間を表示する',
    interactMessageTimeShowRight: 'コメント時間を右に',
    interactMessageTimeColor: '時間色',
    interactMessageTimeFont: '時間フォント',
    interactMessageTimeFontSize: '時間フォントサイズ',
    interactMessageTimeLineHeight: '時間フォント行の高さ（0はデフォルト）',
    interactMessageTimeOutlineSize: '時間アウトラインサイズ',
    interactMessageTimeOutlineColor: '時間アウトライン色',

    interactMessageAnimation: 'イントラクションコメントアニメーション',
    interactMessageAnimateIn: '入場アニメーション',
    interactMessageFadeInTime: '入場時間（ミリ秒）',
    interactMessageAnimateOut: '消す古いコメント',
    interactMessageFadeOutTime: '出場時間（ミリ秒）',
    interactMessageAnimateOutWaitTime: '消す待つ時間（秒）',
    interactMessageSlide: 'スライド',
    interactMessageReverseSlide: '逆スライド',

    // TODO: Global Padding
    globalPadding: 'グローバルパディング',
    globalPaddingTop: 'グローバルパディング - 上',
    globalPaddingBottom: 'グローバルパディング - 下',
    globalPaddingLeft: 'グローバルパディング - 左',
    globalPaddingRight: 'グローバルパディング - 右',

    // TODO: Global Margin
    globalMargin: 'グローバルマージン',
    globalMarginTop: 'グローバルマージン - 上',
    globalMarginBottom: 'グローバルマージン - 下',
    globalMarginLeft: 'グローバルマージン - 左',
    globalMarginRight: 'グローバルマージン - 右',

    // TODO: Global Border Radius
    globalBorderRadius: 'グローバルボーダーラジウス',
    globalBorderRadiusTopLeft: 'グローバルボーダーラジウス - 左上',
    globalBorderRadiusTopRight: 'グローバルボーダーラジウス - 右上',
    globalBorderRadiusBottomLeft: 'グローバルボーダーラジウス - 左下',
    globalBorderRadiusBottomRight: 'グローバルボーダーラジウス - 右下',

    // TODO: TickerMessage
    Ticker: 'スーパーチャット固定',
    TickerShowTicker: 'スーパーチャット固定を表示する',
    TickerShowThingsOtherThanTicker: 'スーパーチャット以外を表示する',


    userNames: 'ユーザー名',
    showUserNames: 'ユーザー名を表示する',
    font: 'フォント',
    fontSize: 'フォントサイズ',
    lineHeight: '行の高さ（0はデフォルト）',
    randomUserNamesColor: 'ランドンユーザー名の色',
    normalColor: 'ノーマルの色',
    ownerColor: 'オーナーユーザー色',
    moderatorColor: '管理者の色',
    memberColor: 'メンバーの色',
    showBadges: '勲章を見せる',
    showColon: 'ユーザー名の後にコロンが表示されます',
    badgesSize: '勲章サイズ',
    emoticonSize: 'スタンプサイズ',
    emoticonInlineBorderRadius: '後で付けスタンプ圆角',
    emoticonBlockBorderRadius: '新たな行スタンプ圆角',

    medal: 'ファン勲章',
    showMedal: 'ファン勲章を表示する',
    showOnlyOwnerMedal: 'オーナーのファン勲章だけを表示する',
    showMedalName: 'ファン勲章名を表示する',
    showMedalLevel: 'ファン勲章レベルを表示する',

    messages: 'コメント',
    color: '色',
    onNewLine: '新しい行に表示する',
    mergeSameUser: '同じリスナーのコメントを合併する',
    groupBlockPadding: 'コメントグループ内コメントの間隔距離',

    time: '時間',
    showTime: '時間を表示する',
    showTimeRight: '時間を右側で表示する',

    backgrounds: '背景',
    bgColor: '背景色',
    useBarsInsteadOfBg: '背景に代わります',
    messageBgColor: 'コメント背景色',
    ownerMessageBgColor: 'オーナーコメント背景色',
    moderatorMessageBgColor: '管理者コメント背景色',
    memberMessageBgColor: 'メンバーコメント背景色',

    scAndNewMember: 'スーパーチャット、新メンバー',
    firstLineFont: '1行目のフォント',
    firstLineFontSize: '1行目のフォントサイズ',
    firstLineLineHeight: '1行目の高さ（0はデフォルト）',
    firstLineColor: '1行目の色',
    secondLineFont: '2行目のフォント',
    secondLineFontSize: '2行目のフォントサイズ',
    secondLineLineHeight: '2行目の高さ（0はデフォルト）',
    secondLineColor: '2行目の色',
    scContentLineFont: 'スーパーチャットのコンテンツフォント',
    scContentLineFontSize: 'スーパーチャットコンテンツフォントサイズ',
    scContentLineLineHeight: 'スーパーチャットコンテンツライン高さ（0がデフォルト）',
    scContentLineColor: 'スーパーチャットコンテンツライン色',
    showNewMemberBg: '新メンバーの背景を表示する',
    showScTicker: 'スーパーチャットチカーの表示',
    showOtherThings: 'スーパーチャットチカー以外のコンテンツを表示します',

    animation: 'アニメーション',
    animateIn: '入場アニメーション',
    fadeInTime: 'フェードイン時間（ミリ秒）',
    animateOut: '古いコメントを除去する',
    animateOutWaitTime: '待ち時間（秒）',
    fadeOutTime: 'フェードアウト時間（ミリ秒）',
    slide: '滑る',
    reverseSlide: '逆の滑る',
    playAnimation: 'アニメーションを再生する',

    result: '結果',
    copy: 'コピー',
    resetConfig: 'デフォルトに戻す'
  },
  help: {
    help: 'ヘルプ',
    p1_1: '1. このウェブページからアイデンティティコード（身份码）をコピーして：',
    p1_2: '。注意：アイデンティティコードは漏洩していない限り、更新しないでください。アイデンティティコードを更新すると、古いコードは無効になります',
    p2: '2. ホームページに先ほどコピーしたアイデンティティコードを入力して、ルームのURLをこぴーする',
    p3: '3. スタイルジェネレータでお好みのコメント様子を選び、出力したCSSをコピーする',
    p4: '4. OBSでブラウザを新規作成する',
    p5: '5. プロパティでこぴーしたURLを入力し、カスタムCSSでスタイルジェネレータのCSSを入力する'
  },
  chat: {
    moderator: 'モデレーター',
    guardLevel1: '総督',
    guardLevel2: '提督',
    guardLevel3: '艦長',
    month: 'か月',
    year: '年',
    sendGift: '{giftName}x{num} を贈りました',
    membershipTitle: '新規メンバー',
    tickerMembership: 'メンバー'
  }
}
