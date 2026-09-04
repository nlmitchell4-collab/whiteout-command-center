/**

* =========================================================
* SCORING.GS
* SvS Ministry System V2
* FINALIZED (Helpers.gs Compatible)
* =========================================================
*
* Scoring Rules
*
* Construction:
* Construction Speedups
* * General Speedups / 4
* * Fire Crystals
* * SRFC
* * Coverage Bonus
*
* Research:
* Research Speedups
* * General Speedups / 4
* * Fire Crystals
* * Fire Crystal Shards
* * Coverage Bonus
*
* Training:
* Training Speedups
* * General Speedups / 4
* * Coverage Bonus
*
* Final Sprint:
* Construction
* * Research
* * Training
* * General Speedups / 4
* * Fire Crystals
* * Coverage Bonus
*
* =========================================================
  */

/**

* =========================================================
* ENTRY POINT
* =========================================================
  */

function scoreApplicants() {

const resources =
getProjectResources();

const spreadsheet =
resources.spreadsheet;

const responseSheet =
getResponseSheet(
spreadsheet
);

ensureScoreColumns(
responseSheet
);

rebuildAllScores(
spreadsheet,
responseSheet
);
}

/**

* =========================================================
* SCORE COLUMNS
* =========================================================
  */

function ensureScoreColumns(
sheet
) {

const headers =
sheet
.getRange(
1,
1,
1,
sheet.getLastColumn()
)
.getValues()[0];

SCORE_COLUMNS.forEach(
column => {


  if (
    !headers.includes(
      column
    )
  ) {

    sheet
      .getRange(
        1,
        sheet.getLastColumn() + 1
      )
      .setValue(
        column
      );
  }
}


);
}

/**

* =========================================================
* REBUILD ALL SCORES
* =========================================================
  */

function rebuildAllScores(
spreadsheet,
sheet
) {

const data =
sheet
.getDataRange()
.getValues();

if (
data.length <= 1
) {


return;


}

const headers =
data[0];

const scoreIndexes =
getScoreIndexes(
headers
);

for (
let rowNumber = 2;
rowNumber <= data.length;
rowNumber++
) {


const row =
  data[
    rowNumber - 1
  ];

const player =
  buildPlayerObject(
    headers,
    row
  );

const scores =
  calculateScores(
    spreadsheet,
    player
  );

sheet
  .getRange(
    rowNumber,
    scoreIndexes.construction
  )
  .setValue(
    scores.construction
  );

sheet
  .getRange(
    rowNumber,
    scoreIndexes.research
  )
  .setValue(
    scores.research
  );

sheet
  .getRange(
    rowNumber,
    scoreIndexes.training
  )
  .setValue(
    scores.training
  );

sheet
  .getRange(
    rowNumber,
    scoreIndexes.finalSprint
  )
  .setValue(
    scores.finalSprint
  );

sheet
  .getRange(
    rowNumber,
    scoreIndexes.coverage
  )
  .setValue(
    scores.coverageCount
  );

sheet
  .getRange(
    rowNumber,
    scoreIndexes.lastCalculated
  )
  .setValue(
    new Date()
  );


}
}

/**

* =========================================================
* PLAYER OBJECT
* =========================================================
  */

function buildPlayerObject(
headers,
row
) {

return {


fireCrystals:
  getNumericValue(
    headers,
    row,
    HEADERS.FIRE_CRYSTALS
  ),

srfc:
  getNumericValue(
    headers,
    row,
    HEADERS.SRFC
  ),

shards:
  getNumericValue(
    headers,
    row,
    HEADERS.SHARDS
  ),

construction:
  getValue(
    headers,
    row,
    HEADERS.CONSTRUCTION_SPEEDUPS
  ),

research:
  getValue(
    headers,
    row,
    HEADERS.RESEARCH_SPEEDUPS
  ),

training:
  getValue(
    headers,
    row,
    HEADERS.TRAINING_SPEEDUPS
  ),

general:
  getValue(
    headers,
    row,
    HEADERS.GENERAL_SPEEDUPS
  ),

coverage:
  getValue(
    headers,
    row,
    HEADERS.COVERAGE
  ),

furnace:
  getValue(
    headers,
    row,
    HEADERS.FURNACE_LEVEL
  )


};
}

/**

* =========================================================
* CALCULATE SCORES
* =========================================================
  */

function calculateScores(
spreadsheet,
player
) {

const constructionSpeed =
getSpeedupScore(
spreadsheet,
player.construction
);

const researchSpeed =
getSpeedupScore(
spreadsheet,
player.research
);

const trainingSpeed =
getSpeedupScore(
spreadsheet,
player.training
);

const generalSpeed =
getSpeedupScore(
spreadsheet,
player.general
);

const generalSpeedShare =
generalSpeed / 4;

const fireCrystalScore =
getFireCrystalScore(
spreadsheet,
player.fireCrystals
);

const srfcScore =
getSRFCScore(
spreadsheet,
player.srfc
);

const shardScore =
getShardScore(
spreadsheet,
player.shards
);

const coverageCount =
getCoverageCount(
player.coverage
);

const coverageBonus =
getCoverageBonus(
spreadsheet,
coverageCount
);

return {


construction:

  constructionSpeed +
  generalSpeedShare +
  fireCrystalScore +
  srfcScore +
  coverageBonus,

research:

  researchSpeed +
  generalSpeedShare +
  fireCrystalScore +
  shardScore +
  coverageBonus,

training:

  trainingSpeed +
  generalSpeedShare +
  coverageBonus,

finalSprint:

  constructionSpeed +
  researchSpeed +
  trainingSpeed +
  generalSpeedShare +
  fireCrystalScore +
  coverageBonus,

coverageCount


};
}

/**

* =========================================================
* SPEEDUP SCORE
* =========================================================
  */

function getSpeedupScore(
spreadsheet,
value
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
CONFIG_SECTIONS.SPEEDUP_SCORES
);

for (
let i = 0;
i < section.length;
i++
) {


if (
  section[i][0] ===
  value
) {

  return Number(
    section[i][1]
  ) || 0;
}


}

return 0;
}

/**

* =========================================================
* RESOURCE SCORES
* =========================================================
  */

function getFireCrystalScore(
spreadsheet,
amount
) {

return getThresholdScore(
spreadsheet,
amount,
CONFIG_SECTIONS.FIRE_CRYSTAL_SCORES
);
}

function getSRFCScore(
spreadsheet,
amount
) {

return getThresholdScore(
spreadsheet,
amount,
CONFIG_SECTIONS.SRFC_SCORES
);
}

function getShardScore(
spreadsheet,
amount
) {

return getThresholdScore(
spreadsheet,
amount,
CONFIG_SECTIONS.SHARD_SCORES
);
}

/**

* =========================================================
* COVERAGE BONUS
* =========================================================
  */

function getCoverageBonus(
spreadsheet,
count
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
CONFIG_SECTIONS.COVERAGE_BONUS
);

let score = 0;

section.forEach(
row => {


  if (
    count >=
    Number(
      row[0]
    )
  ) {

    score =
      Number(
        row[1]
      );
  }
}


);

return score;
}

/**

* =========================================================
* SCORE INDEXES
* =========================================================
  */

function getScoreIndexes(
headers
) {

return {


construction:
  getHeaderIndex(
    headers,
    HEADERS.CONSTRUCTION_SCORE
  ) + 1,

research:
  getHeaderIndex(
    headers,
    HEADERS.RESEARCH_SCORE
  ) + 1,

training:
  getHeaderIndex(
    headers,
    HEADERS.TRAINING_SCORE
  ) + 1,

finalSprint:
  getHeaderIndex(
    headers,
    HEADERS.FINAL_SPRINT_SCORE
  ) + 1,

coverage:
  getHeaderIndex(
    headers,
    HEADERS.COVERAGE_COUNT
  ) + 1,

lastCalculated:
  getHeaderIndex(
    headers,
    HEADERS.LAST_CALCULATED
  ) + 1


};
}
