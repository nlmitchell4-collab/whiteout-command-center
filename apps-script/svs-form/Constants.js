/**
 * =========================================================
 * CONSTANTS.GS
 * SvS Ministry System V2
 * FINALIZED VERSION
 * =========================================================
 *
 * ALL GLOBAL CONSTANTS BELONG HERE
 *
 * The only exception:
 * - TRANSLATIONS
 *
 * =========================================================
 */

/**
 * =========================================================
 * PROJECT IDS
 * =========================================================
 *
 * Leave blank to create new assets.
 * Populate later to update existing assets.
 *
 * =========================================================
 */

const FORM_ID = '';

const SHEET_ID = '';

/**
 * =========================================================
 * SHEET NAMES
 * =========================================================
 */

const SHEETS = {

  CONFIGURATION:
    'Configuration',

  DASHBOARD:
    'Dashboard',

  RECOMMENDATIONS:
    'Recommended Assignments'
};

/**
 * =========================================================
 * PREP DAYS
 * =========================================================
 */

const PREP_DAYS = [

  'Construction',

  'Research',

  'Troop Training',

  'Final Sprint'
];

/**
 * =========================================================
 * FURNACE LEVELS
 * =========================================================
 */

const FURNACE_LEVELS = [

  'FC4 or Below',

  'FC5',

  'FC6',

  'FC7',

  'FC8',

  'FC9',

  'FC10'
];

/**
 * =========================================================
 * COVERAGE BLOCKS
 * =========================================================
 */

const COVERAGE_BLOCKS = [

  '00:00-02:00 UTC',

  '02:00-04:00 UTC',

  '04:00-06:00 UTC',

  '06:00-08:00 UTC',

  '08:00-10:00 UTC',

  '10:00-12:00 UTC',

  '12:00-14:00 UTC',

  '14:00-16:00 UTC',

  '16:00-18:00 UTC',

  '18:00-20:00 UTC',

  '20:00-22:00 UTC',

  '22:00-00:00 UTC'
];

/**
 * =========================================================
 * SPEEDUP OPTIONS
 * =========================================================
 */

const SPEEDUP_OPTIONS = [

  'Less than 15 Days',

  '15-30 Days',

  '30-45 Days',

  '45-60 Days',

  '60+ Days'
];

/**
 * =========================================================
 * BATTLE AVAILABILITY
 * =========================================================
 */

const BATTLE_AVAILABILITY = [

  'Yes',

  'No',

  'Sometimes'
];

/**
 * =========================================================
 * DASHBOARD DEFAULTS
 * =========================================================
 */

const DEFAULTS = {

  MIN_COVERAGE_PER_BLOCK:
    4,

  MAX_RECOMMENDATIONS_PER_BLOCK:
    4
};

/**
 * =========================================================
 * RESPONSE SHEET HEADERS
 * =========================================================
 *
 * NEVER HARDCODE HEADERS
 * ALWAYS USE THESE CONSTANTS
 *
 * =========================================================
 */

const HEADERS = {

  TIMESTAMP:
    'Timestamp',

  INGAME_NAME:
    'In-Game Name',

  PLAYER_ID:
    'Player ID',

  ALLIANCE:
    'Alliance',

  FURNACE_LEVEL:
    'Furnace Level',

  COVERAGE:
    'Available Ministry Coverage Blocks (Select All)',

  FIRE_CRYSTALS:
    'Fire Crystals',

  SRFC:
    'Super Refined Fire Crystals',

  SHARDS:
    'Fire Crystal Shards',

  CONSTRUCTION_SPEEDUPS:
    'Construction Speedups',

  RESEARCH_SPEEDUPS:
    'Research Speedups',

  TRAINING_SPEEDUPS:
    'Training Speedups',

  GENERAL_SPEEDUPS:
    'General Speedups',

  CASTLE_BATTLE:
    'Can You Participate In SvS Castle Battle?',

  CONSTRUCTION_SCORE:
    'Construction Score',

  RESEARCH_SCORE:
    'Research Score',

  TRAINING_SCORE:
    'Training Score',

  FINAL_SPRINT_SCORE:
    'Final Sprint Score',

  COVERAGE_COUNT:
    'Coverage Count',

  LAST_CALCULATED:
    'Last Calculated'
};

/**
 * =========================================================
 * CONFIGURATION SECTIONS
 * =========================================================
 *
 * NEVER HARDCODE CONFIG SECTION NAMES
 *
 * =========================================================
 */

const CONFIG_SECTIONS = {

  SPEEDUP_SCORES:
    'SPEEDUP SCORES',

  FIRE_CRYSTAL_SCORES:
    'FIRE CRYSTAL SCORES',

  SRFC_SCORES:
    'SUPER REFINED FIRE CRYSTAL SCORES',

  SHARD_SCORES:
    'FIRE CRYSTAL SHARD SCORES',

  COVERAGE_BONUS:
    'COVERAGE BONUS',

  MINISTRY_MAPPING:
    'MINISTRY MAPPING',

  DASHBOARD_SETTINGS:
    'DASHBOARD SETTINGS',

  FORM_SETTINGS:
    'FORM SETTINGS'
};

/**
 * =========================================================
 * CONFIGURATION KEYS
 * =========================================================
 */

const CONFIG_KEYS = {

  MIN_COVERAGE_PER_BLOCK:
    'Minimum Coverage Per Block',

  MAX_RECOMMENDATIONS_PER_BLOCK:
    'Maximum Recommendations Per Block'
};

/**
 * =========================================================
 * SCORE COLUMNS
 * =========================================================
 */

const SCORE_COLUMNS = [

  HEADERS.CONSTRUCTION_SCORE,

  HEADERS.RESEARCH_SCORE,

  HEADERS.TRAINING_SCORE,

  HEADERS.FINAL_SPRINT_SCORE,

  HEADERS.COVERAGE_COUNT,

  HEADERS.LAST_CALCULATED
];

/**
 * =========================================================
 * ARCHIVE PREFIXES
 * =========================================================
 */




const ARCHIVE_SHEETS = {

  RESPONSES:
    'Archive Responses',

  RECOMMENDATIONS:
    'Archive Recommendations',

  DASHBOARD:
    'Archive Dashboard'
};
