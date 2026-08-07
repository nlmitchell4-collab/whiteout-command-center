/**

* =========================================================
* HELPERS.GS
* SvS Ministry System V2
* FINALIZED
* =========================================================
*
* Shared helper functions used throughout:
*
* * Main.gs
* * Scoring.gs
* * Recommendations.gs
* * Dashboard.gs
* * Archive.gs
* * Triggers.gs
*
* =========================================================
  */

/**

* =========================================================
* HEADER LOOKUP
* =========================================================
  */

function getHeaderIndex(
headers,
headerName
) {

return headers.indexOf(
headerName
);
}

/**

* =========================================================
* SAFE VALUE
* =========================================================
  */

function getValue(
headers,
row,
headerName
) {

const index =
getHeaderIndex(
headers,
headerName
);

if (
index < 0
) {


return '';


}

return row[index];
}

/**

* =========================================================
* SAFE NUMERIC VALUE
* =========================================================
  */

function getNumericValue(
headers,
row,
headerName
) {

const value =
getValue(
headers,
row,
headerName
);

return Number(
value
) || 0;
}

/**

* =========================================================
* CONFIG SECTION READER
* =========================================================
  */

function findConfigSection(
data,
sectionName
) {

let found =
false;

const rows =
[];

for (
let i = 0;
i < data.length;
i++
) {


const row =
  data[i];

if (
  row[0] ===
  sectionName
) {

  found = true;

  continue;
}

if (
  !found
) {

  continue;
}

if (
  row[0] === ''
) {

  break;
}

rows.push(
  row
);


}

return rows;
}

/**

* =========================================================
* CONFIG VALUE
* =========================================================
  */

function getConfigValue(
spreadsheet,
sectionName,
key
) {

const sheet =
getConfigurationSheet(
spreadsheet
);

const data =
sheet
.getDataRange()
.getValues();

const section =
findConfigSection(
data,
sectionName
);

for (
let i = 0;
i < section.length;
i++
) {


if (
  section[i][0] ===
  key
) {

  return section[i][1];
}


}

return null;
}

/**

* =========================================================
* THRESHOLD SCORE
* =========================================================
  */

function getThresholdScore(
spreadsheet,
amount,
sectionName
) {

const sheet =
getConfigurationSheet(
spreadsheet
);

const data =
sheet
.getDataRange()
.getValues();

const section =
findConfigSection(
data,
sectionName
);

let score = 0;

section.forEach(
row => {


  if (
    Number(amount) >=
    Number(row[0])
  ) {

    score =
      Number(row[1]);
  }
}


);

return score;
}

/**

* =========================================================
* COVERAGE COUNT
* =========================================================
  */

function getCoverageCount(
coverageValue
) {

if (
!coverageValue
) {


return 0;


}

return String(
coverageValue
)
.split(',')
.filter(
value =>
value.trim() !== ''
)
.length;
}

/**

* =========================================================
* FURNACE RANK
* =========================================================
  */

function getFurnaceRank(
furnaceLevel
) {

const ranks = {


'FC4 or Below': 1,

FC5: 2,

FC6: 3,

FC7: 4,

FC8: 5,

FC9: 6,

FC10: 7


};

return (
ranks[
furnaceLevel
] || 0
);
}

/**

* =========================================================
* SCORE HEADER
* =========================================================
  */

function getScoreColumnForDay(
prepDay
) {

switch (
prepDay
) {


case 'Construction':
  return HEADERS.CONSTRUCTION_SCORE;

case 'Research':
  return HEADERS.RESEARCH_SCORE;

case 'Troop Training':
  return HEADERS.TRAINING_SCORE;

case 'Final Sprint':
  return HEADERS.FINAL_SPRINT_SCORE;

default:
  return HEADERS.CONSTRUCTION_SCORE;


}
}

/**

* =========================================================
* TIMESTAMP
* =========================================================
  */

function getArchiveTimestamp() {

return Utilities.formatDate(
new Date(),
Session.getScriptTimeZone(),
'yyyy-MM-dd HH-mm'
);
}

/**

* =========================================================
* IS EMPTY
* =========================================================
  */

function isEmpty(
value
) {

return (
value === null ||
value === undefined ||
value === ''
);
}

/**

* =========================================================
* RESPONSE SHEET HAS DATA
* =========================================================
  */

function hasResponses(
responseSheet
) {

return (
responseSheet
.getLastRow() > 1
);
}

/**

* =========================================================
* DEDUPED PLAYER LIST
* =========================================================
*
* Latest Player ID submission wins.
*
* =========================================================
  */

function getLatestSubmissions(
data
) {

const headers =
data[0];

const playerIdIndex =
getHeaderIndex(
headers,
HEADERS.PLAYER_ID
);

const players =
{};

for (
let i = 1;
i < data.length;
i++
) {


const row =
  data[i];

const playerId =
  String(
    row[
      playerIdIndex
    ]
  ).trim();

if (
  !playerId
) {

  continue;
}

players[
  playerId
] = row;


}

return {


headers,

rows:
  Object.values(
    players
  )


};
}

/**

* =========================================================
* LOGGING
* =========================================================
  */

function logDivider() {

Logger.log(
'================================================='
);
}
