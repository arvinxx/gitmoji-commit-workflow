module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        ':art:',
        ':newspaper:',
        ':pencil:',
        ':memo:',
        ':zap:',
        ':fire:',
        ':books:',
        ':bug:',
        ':ambulance:',
        ':penguin:',
        ':apple:',
        ':checkered_flag:',
        ':robot:',
        ':green_ale:',
        ':tractor:',
        ':recycle:',
        ':white_check_mark:',
        ':microscope:',
        ':green_heart:',
        ':lock:',
        ':arrow_up:',
        ':arrow_down:',
        ':fast_forward:',
        ':rewind:',
        ':rotating_light:',
        ':lipstick:',
        ':wheelchair:',
        ':globe_with_meridians:',
        ':construction:',
        ':gem:',
        ':bookmark:',
        ':tada:',
        ':loud_sound:',
        ':mute:',
        ':sparkles:',
        ':speech_balloon:',
        ':bulb:',
        ':construction_worker:',
        ':chart_with_upwards_trend:',
        ':ribbon:',
        ':rocket:',
        ':heavy_minus_sign:',
        ':heavy_plus_sign:',
        ':wrench:',
        ':hankey:',
        ':leaves:',
        ':bank:',
        ':whale:',
        ':twisted_rightwards_arrows:',
        ':pushpin:',
        ':busts_in_silhouette:',
        ':children_crossing:',
        ':building_construction:',
        ':iphone:',
        ':clown_face:',
        ':ok_hand:',
        ':boom:',
        ':bento:',
        ':pencil2:',
        ':package:',
        ':alien:',
        ':truck:',
        ':age_facing_up:',
        ':busts_in_silhouette:',
        ':card_file_box:',
      ],
    ], // 首行验证类型为 gitmoji 的内容
    'body-leading-blank': [2, 'always'], // 内容以空行开始
    'footer-leading-blank': [2, 'always'], // 结尾以空行开始
    'header-max-length': [2, 'always', 72], // 标题最大长度 72 个字符
    'scope-case': [2, 'always', 'lower-case'], // Scope 永远小写
    'subject-case': [2, 'always', ['sentence-case']], // 标题必须以大写字母开头
    'subject-empty': [2, 'never'], // 不允许标题空着
    'subject-full-stop': [2, 'never', ['.']], // 不允许使用句号
    'type-case': [2, 'always', 'lower-case'], // type 必须小写
    'type-empty': [2, 'never'], // type 不能为空
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    }, // gitmoji commit 提取表达式 for commitlint
  }, // 为 gitmoji 风格提供单独的解析器
};
