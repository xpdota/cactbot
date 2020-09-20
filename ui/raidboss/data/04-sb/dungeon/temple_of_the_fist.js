'use strict';

[{
  zoneId: ZoneId.TheTempleOfTheFist,
  timelineFile: 'temple_of_the_fist.txt',
  timelineTriggers: [
    {
      id: 'Temple Pounce',
      regex: /Pounce/,
      beforeSeconds: 5,
      condition: function(data) {
        return data.role == 'healer' || data.role == 'tank';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'Temple Cardinal Shift',
      regex: /Cardinal Shift/,
      beforeSeconds: 5,
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
  ],
  triggers: [
    {
      id: 'Temple Electric Burst Sruti',
      netRegex: NetRegexes.startsUsing({ id: '1FD6', source: 'Coeurl Sruti', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FD6', source: 'Coeurl Sruti', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FD6', source: 'Coeurl Sruti', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FD6', source: 'クァール・シュルティ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FD6', source: '凶豹所闻', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FD6', source: '커얼 슈루티', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Temple Electric Burst Smriti',
      netRegex: NetRegexes.startsUsing({ id: '1FD6', source: 'Coeurl Smriti', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FD6', source: 'Coeurl Smriti', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FD6', source: 'Coeurl Smriti', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FD6', source: 'クァール・スムリティ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FD6', source: '凶豹所忆', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FD6', source: '커얼 스므리티', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Temple Fourfold Shear',
      netRegex: NetRegexes.startsUsing({ id: '1FD9', source: 'Arbuda' }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FD9', source: 'Arbuda' }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FD9', source: 'Arbuda' }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FD9', source: 'アブダ' }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FD9', source: '额部陀' }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FD9', source: '아부다' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Temple Moonseal',
      netRegex: NetRegexes.headMarker({ id: '0059' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      infoText: {
        en: 'Stand in blue',
        de: 'Im Blauen stehen',
        fr: 'Tenez-vous dans le bleu',
        ja: '青色に踏む',
        cn: '站在蓝色区域',
        ko: '파랑장판에 서기',
      },
    },
    {
      id: 'Temple Sunseal',
      netRegex: NetRegexes.headMarker({ id: '0058' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      infoText: {
        en: 'Stand in red',
        de: 'Im Roten stehen',
        fr: 'Tenez-vous dans le rouge',
        ja: '赤色に踏む',
        cn: '站在红色区域',
        ko: '빨강장판에 서기',
      },
    },
    {
      id: 'Temple Port And Star',
      netRegex: NetRegexes.startsUsing({ id: '1FDC', source: 'Arbuda', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FDC', source: 'Arbuda', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FDC', source: 'Arbuda', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FDC', source: 'アブダ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FDC', source: '额部陀', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FDC', source: '아부다', capture: false }),
      response: Responses.goFrontBack(),
    },
    {
      id: 'Temple Fore And Aft',
      netRegex: NetRegexes.startsUsing({ id: '1FDB', source: 'Arbuda', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FDB', source: 'Arbuda', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FDB', source: 'Arbuda', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FDB', source: 'アブダ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FDB', source: '额部陀', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FDB', source: '아부다', capture: false }),
      response: Responses.goSides(),
    },
    {
      id: 'Temple Killer Instinct',
      netRegex: NetRegexes.startsUsing({ id: '1FDE', source: 'Arbuda', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FDE', source: 'Arbuda', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FDE', source: 'Arbuda', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FDE', source: 'アブダ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FDE', source: '额部陀', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FDE', source: '아부다', capture: false }),
      alertText: {
        en: 'watch for safe',
        de: 'nach sicherer Position schauen',
        fr: 'Trouvez une zone safe',
        ja: '安全場所へ',
        cn: '前往安全区',
        ko: '안전지대 찾기',
      },
    },
    {
      id: 'Temple Spirit Wave',
      netRegex: NetRegexes.startsUsing({ id: '1FE7', source: 'Ivon Coeurlfist', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FE7', source: 'Ivon Coeurlfaust', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FE7', source: 'Ivon Le Coeurl', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FE7', source: '双豹のイヴォン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FE7', source: '双豹伊沃恩', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FE7', source: '쌍표범 이본', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Temple Touch Of Slaughter',
      netRegex: NetRegexes.startsUsing({ id: '1FE6', source: 'Ivon Coeurlfist' }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FE6', source: 'Ivon Coeurlfaust' }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FE6', source: 'Ivon Le Coeurl' }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FE6', source: '双豹のイヴォン' }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FE6', source: '双豹伊沃恩' }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FE6', source: '쌍표범 이본' }),
      condition: function(data) {
        return data.role == 'healer';
      },
      infoText: function(data, matches) {
        return {
          en: 'Heal ' + data.shortName(matches.target) + ' soon',
          de: 'Bald ' + data.shortName(matches.target) + ' heilen',
          fr: 'Soignez ' + data.shortName(matches.target) + ' bientôt',
          ja: 'すぐに' + data.ShortName(matches.target) + 'にヒール',
          cn: '马上奶 ' + data.shortName(matches.target),
          ko: '' + data.shortName(matches.target) + '힐 준비',
        };
      },
    },
    {
      id: 'Temple Coeurl Heads',
      netRegex: NetRegexes.ability({ id: '1FE9', source: 'Ivon Coeurlfist', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '1FE9', source: 'Ivon Coeurlfaust', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '1FE9', source: 'Ivon Le Coeurl', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '1FE9', source: '双豹のイヴォン', capture: false }),
      netRegexCn: NetRegexes.ability({ id: '1FE9', source: '双豹伊沃恩', capture: false }),
      netRegexKo: NetRegexes.ability({ id: '1FE9', source: '쌍표범 이본', capture: false }),
      infoText: {
        en: 'Avoid floating heads',
        de: 'Weiche den fliegenden Köpfen aus',
        fr: 'Évitez les têtes flottantes',
        ja: 'ヘッドに避け',
        cn: '避开漂浮的头',
        ko: '커얼머리 피하기',
      },
    },
    {
      id: 'Temple Rhalgr\'s Piece',
      netRegex: NetRegexes.startsUsing({ id: '1FED', source: 'Ivon Coeurlfist', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FED', source: 'Ivon Coeurlfaust', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FED', source: 'Ivon Le Coeurl', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FED', source: '双豹のイヴォン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FED', source: '双豹伊沃恩', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FED', source: '쌍표범 이본', capture: false }),
      infoText: {
        en: 'Away from marker',
        de: 'Weg von den Markierungen',
        fr: 'Éloignez-vous du marqueur',
        ja: 'マークに離れ',
        cn: '远离标记',
        ko: '마커에게서 멀어지기',
      },
    },
    {
      id: 'Temple Rose Of Destruction',
      netRegex: NetRegexes.startsUsing({ id: '1FEE', source: 'Ivon Coeurlfist' }),
      netRegexDe: NetRegexes.startsUsing({ id: '1FEE', source: 'Ivon Coeurlfaust' }),
      netRegexFr: NetRegexes.startsUsing({ id: '1FEE', source: 'Ivon Le Coeurl' }),
      netRegexJa: NetRegexes.startsUsing({ id: '1FEE', source: '双豹のイヴォン' }),
      netRegexCn: NetRegexes.startsUsing({ id: '1FEE', source: '双豹伊沃恩' }),
      netRegexKo: NetRegexes.startsUsing({ id: '1FEE', source: '쌍표범 이본' }),
      response: Responses.stackOn(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Arbuda': 'Arbuda',
        'Coeurl Smriti': 'Coeurl Smriti',
        'Coeurl Sruti': 'Coeurl Sruti',
        'Guidance': 'Unterweisung',
        'Harmony': 'Harmonie',
        'Ivon Coeurlfist': 'Ivon Coeurlfaust',
        'Tourmaline Pond': 'Turmalinteich',
      },
      'replaceText': {
        '--Smriti Appears--': '--Smriti erscheint--',
        'Basic Instinct': 'Kampfinstinkt',
        'Cardinal Shift': 'Großrotation',
        'Coeurl Whisper': 'Coeurl-Flüstern',
        'Electric Burst': 'Stromstoß',
        'Fourfold Shear': 'Vierschere',
        'Front/Back\\?Sides\\?': 'Vorne/Hinten?Seiten?',
        'Furious Fists': 'Todeskralle',
        'Heat Lightning': 'Hitzeblitz',
        'Hellseal': 'Höllensiegel',
        'Hurricane Kick': 'Hurrikan-Tritt',
        'Impact': 'Einschlag',
        'Killer Instinct': 'Vorausahnung',
        'Pounce': 'Raubtiertatze',
        'Radial Blaster': 'Radial-Blaster',
        'Rhalgr\'s Piece': 'Gewalt des Zerstörers',
        'Silent Roar': 'Stilles Brüllen',
        'Spirit Wave': 'Mentale Welle',
        'Tapas': 'Kasteiung',
        'The Rose Of Destruction': 'Zermalmender Geist',
        'Touch of Slaughter': 'Hauch des Gemetzels',
        'Wide Blaster': 'Weitwinkel-Blaster',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Arbuda': 'Arbuda',
        'Coeurl Smriti': 'Coeurl smriti',
        'Coeurl Sruti': 'Coeurl sruti',
        'Guidance': 'la Conduite',
        'Harmony': 'l\'Harmonie',
        'Ivon Coeurlfist': 'Ivon le Coeurl',
        'Tourmaline Pond': 'l\'étang de Tourmaline',
      },
      'replaceText': {
        '--Smriti Appears--': '-- Apparition de Smriti --',
        'Basic Instinct': 'Instinct profond',
        'Cardinal Shift': 'Rotation cardinale',
        'Coeurl Whisper': 'Murmure du Coeurl',
        'Electric Burst': 'Salve électrique',
        'Fourfold Shear': 'Quadruple cisaille',
        'Front/Back\\?Sides\\?': 'Devant/Derrière ? Côtés ?',
        'Furious Fists': 'Poings furieux',
        'Heat Lightning': 'Éclair de chaleur',
        'Hellseal': 'Sceau infernal',
        'Hurricane Kick': 'Coup de pied ouragan',
        'Impact': 'Impact',
        'Killer Instinct': 'Instinct meurtrier',
        'Pounce': 'Attaque subite',
        'Radial/Wide Blaster': 'Fulguration radiale/large',
        'Radial Blaster': 'Fulguration radiale',
        'Rhalgr\'s Piece': 'Force de Rhalgr',
        'Silent Roar': 'Hurlement silencieux',
        'Spirit Wave': 'Onde spirituelle',
        'Tapas': 'Tapas',
        'The Rose Of Destruction': 'Rose de la destruction',
        'Touch of Slaughter': 'Toucher massacreur',
        '(?<!Radial/)Wide Blaster': 'Fulguration large',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Arbuda': 'アブダ',
        'Coeurl Smriti': 'クァール・スムリティ',
        'Coeurl Sruti': 'クァール・シュルティ',
        'Guidance': '導霊殿',
        'Harmony': '陰陽苑',
        'Ivon Coeurlfist': '双豹のイヴォン',
        'Tourmaline Pond': '水苔池',
      },
      'replaceText': {
        '--Smriti Appears--': '--雑魚: スムリティ--',
        'Basic Instinct': '闘争本能',
        'Cardinal Shift': '四剣大回転',
        'Coeurl Whisper': '双豹招来',
        'Electric Burst': 'エレクトリックバースト',
        'Fourfold Shear': '四連双斬',
        'Front/Back\\?Sides\\?': '縦? 横?',
        'Furious Fists': '双豹蒼連撃',
        'Heat Lightning': 'ヒートライトニング',
        'Hellseal': '試練の刻印',
        'Hurricane Kick': '霊魂旋風脚',
        'Impact': 'ラールガーズインパクト',
        'Killer Instinct': '見切り',
        'Pounce': 'パウンス',
        'Radial Blaster': 'ラディアルブラスター',
        'Rhalgr\'s Piece': '壊神拳',
        'Silent Roar': '双豹撃',
        'Spirit Wave': '真霊波',
        'Tapas': '苦行',
        'The Rose Of Destruction': '闘霊弾',
        'Touch of Slaughter': '霊魂秘孔拳',
        'Wide Blaster': 'ワイドブラスター',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Arbuda': '额部陀',
        'Coeurl Smriti': '凶豹所忆',
        'Coeurl Sruti': '凶豹所闻',
        'Guidance': '导灵殿',
        'Harmony': '阴阳苑',
        'Ivon Coeurlfist': '双豹伊沃恩',
        'Tourmaline Pond': '水苔池',
      },
      'replaceText': {
        '--Smriti Appears--': '--凶豹出现--',
        'Basic Instinct': '斗争本能',
        'Cardinal Shift': '四剑大回旋',
        'Coeurl Whisper': '双豹招来',
        'Electric Burst': '电光爆发',
        'Fourfold Shear': '四连双斩',
        'Front/Back\\?Sides\\?': '前/后?两侧?',
        'Furious Fists': '双豹苍连击',
        'Heat Lightning': '惊电',
        'Hellseal': '试炼刻印',
        'Hurricane Kick': '灵魂旋风脚',
        'Impact': '拉尔戈冲击',
        'Killer Instinct': '预判',
        'Pounce': '爪袭',
        'Radial Blaster': '放射冲击波',
        'Rhalgr\'s Piece': '破坏神拳',
        'Silent Roar': '双豹击',
        'Spirit Wave': '真灵波',
        'Tapas': '苦行',
        'The Rose Of Destruction': '斗灵弹',
        'Touch of Slaughter': '灵魂秘孔拳',
        'Wide Blaster': '广域冲击波',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Arbuda': '아부다',
        'Coeurl Smriti': '커얼 스므리티',
        'Coeurl Sruti': '커얼 슈루티',
        'Ivon Coeurlfist': '쌍표범 이본',
      },
      'replaceText': {
        'Basic Instinct': '투쟁 본능',
        'Cardinal Shift': '사중 대회전',
        'Coeurl Whisper': '쌍표범 소환',
        'Electric Burst': '전하 폭발',
        'Fourfold Shear': '사연속 베기',
        'Furious Fists': '쌍표창연격',
        'Heat Lightning': '뜨거운 번개',
        'Hellseal': '시련의 각인',
        'Hurricane Kick': '영혼의 선풍각',
        'Impact': '랄거의 충격',
        'Killer Instinct': '간파',
        'Pounce': '덮치기',
        'Radial Blaster': '방사형 블래스터',
        'Rhalgr\'s Piece': '파신권',
        'Silent Roar': '쌍표격',
        'Spirit Wave': '진령파',
        'Tapas': '고행',
        'The Rose Of Destruction': '투령탄',
        'Touch of Slaughter': '영혼의 혈도 찌르기',
        'Wide Blaster': '광범위 블래스터',
      },
    },
  ],
}];
