/**

* =========================================================
* TRANSLATIONS.GS
* SvS Ministry System V2
* FINALIZED (Constants.gs Compatible)
* =========================================================
*
* ONLY:
* * Languages
* * Translations
* * Translation Helpers
*
* ALL constants now live in:
* Constants.gs
*
* =========================================================
  */

const LANGUAGES = [
'English',
'Русский',
'한국어',
'Polski',
'Español',
'العربية'
];

/**

* =========================================================
* TRANSLATIONS
* =========================================================
  */

const TRANSLATIONS = {

inGameName: {
en: 'In-Game Name',
ru: 'Имя в игре',
ko: '게임 이름',
pl: 'Nazwa w grze',
es: 'Nombre en el juego',
ar: 'الاسم داخل اللعبة'
},

playerId: {
en: 'Player ID',
ru: 'ID игрока',
ko: '플레이어 ID',
pl: 'ID gracza',
es: 'ID del jugador',
ar: 'معرف اللاعب'
},

alliance: {
en: 'Alliance',
ru: 'Альянс',
ko: '동맹',
pl: 'Sojusz',
es: 'Alianza',
ar: 'التحالف'
},

furnaceLevel: {
en: 'Furnace Level',
ru: 'Уровень печи',
ko: '레벨 화로',
pl: 'Poziom pieca',
es: 'Nivel del horno',
ar: 'مستوى الفرن'
},


coverage: {
en: 'Available Ministry Coverage Blocks (Select All)',
ru: 'Доступные временные блоки министерства',
ko: '가능한 장관 시간대',
pl: 'Dostępne bloki czasowe ministerstwa',
es: 'Bloques de cobertura ministerial disponibles',
ar: 'فترات التغطية الوزارية المتاحة'
},

fireCrystals: {
en: 'Fire Crystals',
ru: 'Огненные Кристаллы',
ko: '화염 수정',
pl: 'Kryształy Ognia',
es: 'Cristales de Fuego',
ar: 'بلورات النار'
},

superRefinedFireCrystals: {
en: 'Super Refined Fire Crystals',
ru: 'Сверхочищенные Огненные Кристаллы',
ko: '초정제 화염 수정',
pl: 'Ulepszone Kryształy Ognia',
es: 'Cristales de Fuego Súper Refinados',
ar: 'بلورات النار فائقة التكرير'
},

fireCrystalShards: {
en: 'Fire Crystal Shards',
ru: 'Осколки Огненных Кристаллов',
ko: '화염 수정 조각',
pl: 'Odłamki Kryształów Ognia',
es: 'Fragmentos de Cristales de Fuego',
ar: 'شظايا بلورات النار'
},

constructionSpeedups: {
en: 'Construction Speedups',
ru: 'Ускорения строительства',
ko: '건설 가속',
pl: 'Przyspieszenia budowy',
es: 'Aceleradores de construcción',
ar: 'تسريعات البناء'
},

researchSpeedups: {
en: 'Research Speedups',
ru: 'Ускорения исследований',
ko: '연구 가속',
pl: 'Przyspieszenia badań',
es: 'Aceleradores de investigación',
ar: 'تسريعات البحث'
},

trainingSpeedups: {
en: 'Training Speedups',
ru: 'Ускорения обучения',
ko: '훈련 가속',
pl: 'Przyspieszenia szkolenia',
es: 'Aceleradores de entrenamiento',
ar: 'تسريعات التدريب'
},

generalSpeedups: {
en: 'General Speedups',
ru: 'Универсальные ускорения',
ko: '일반 가속',
pl: 'Ogólne przyspieszenia',
es: 'Aceleradores generales',
ar: 'التسريعات العامة'
},

castleBattle: {
en: 'Can You Participate In SvS Castle Battle?',
ru: 'Можете ли вы участвовать в битве за замок SvS?',
ko: 'SvS 성 전투 참여 가능 여부',
pl: 'Czy możesz uczestniczyć w bitwie o zamek SvS?',
es: '¿Puedes participar en la битве замка SvS?',
ar: 'هل يمكنك المشاركة في معركة قلعة SvS؟'
},
};

/**

* =========================================================
* HELPERS
* =========================================================
  */

function getTranslation(
key,
language
) {

if (
!TRANSLATIONS[key]
) {


return key;


}

return (
TRANSLATIONS[key][language] ||
TRANSLATIONS[key].en
);
}

/**

* =========================================================
* MULTILINGUAL HELP TEXT
* =========================================================
  */

function getMultilingualLabel(
key
) {

const t =
TRANSLATIONS[key];

if (!t) {


return key;


}

return [


'English: ' +
  t.en,

'Русский: ' +
  t.ru,

'한국어: ' +
  t.ko,

'Polski: ' +
  t.pl,

'Español: ' +
  t.es,

'العربية: ' +
  t.ar


].join('\n');
}

/**

* =========================================================
* FORM HELP TEXT
* =========================================================
  */

function getHelpText(
key
) {

return getMultilingualLabel(
key
);
}
