/**

* =========================================================
* RECOMMENDATIONS.GS
* SvS Ministry System V2
* FINALIZED (Helpers.gs Compatible)
* =========================================================
*
* Dependencies:
* * Constants.gs
* * Helpers.gs
* * Main.gs
* * Configuration.gs
*
* =========================================================
  */

/**

* =========================================================
* ENTRY POINT
* =========================================================
  */

function generateRecommendedAssignments() {

const resources =
getProjectResources();

const spreadsheet =
resources.spreadsheet;

const responseSheet =
getResponseSheet(
spreadsheet
);

let recommendationSheet =
getRecommendationsSheet(
spreadsheet
);

if (
!recommendationSheet
) {


recommendationSheet =
  spreadsheet.insertSheet(
    SHEETS.RECOMMENDATIONS
  );


}

recommendationSheet.clear();

const data =
responseSheet
.getDataRange()
.getValues();

if (
data.length <= 1
) {


recommendationSheet
  .getRange(
    'A1'
  )
  .setValue(
    'Awaiting Responses'
  );

return;


}

const latest =
getLatestSubmissions(
data
);

buildRecommendations(
spreadsheet,
recommendationSheet,
latest
);

recommendationSheet.autoResizeColumns(
1,
10
);
}

/**

* =========================================================
* BUILD RECOMMENDATIONS
* =========================================================
  */

function buildRecommendations(
spreadsheet,
sheet,
dataset
) {

const headers =
dataset.headers;

const rows =
dataset.rows;

const ministryMap =
getMinistryMap(
spreadsheet
);

const recommendationLimit =
Number(
getConfigValue(
spreadsheet,
CONFIG_SECTIONS.FORM_SETTINGS,
CONFIG_KEYS.MAX_RECOMMENDATIONS_PER_BLOCK
)
) ||
DEFAULTS.MAX_RECOMMENDATIONS_PER_BLOCK;

let currentRow =
1;

PREP_DAYS.forEach(
prepDay => {


  const scoreColumn =
    getScoreColumnForDay(
      prepDay
    );

  sheet
    .getRange(
      currentRow,
      1
    )
    .setValue(
      prepDay
    )
    .setFontWeight(
      'bold'
    )
    .setFontSize(
      14
    );

  currentRow++;

  sheet
    .getRange(
      currentRow,
      1,
      1,
      8
    )
    .setValues([[
      'Time Block',
      'Rank',
      'Chief',
      'Player ID',
      'Alliance',
      'Furnace',
      'Position',
      'Score'
    ]]);

  currentRow++;

  const assignedPlayers =
    new Set();

  COVERAGE_BLOCKS.forEach(
    block => {

      const candidates =
        getCandidatesForBlock(
          headers,
          rows,
          block,
          scoreColumn,
          assignedPlayers
        );

      if (
        candidates.length === 0
      ) {

        sheet
          .getRange(
            currentRow,
            1,
            1,
            8
          )
          .setValues([[
            block,
            '',
            'NO COVERAGE',
            '',
            '',
            '',
            '',
            ''
          ]]);

        currentRow++;

        return;
      }

      candidates
        .slice(
          0,
          recommendationLimit
        )
        .forEach(
          (
            candidate,
            index
          ) => {

            sheet
              .getRange(
                currentRow,
                1,
                1,
                8
              )
              .setValues([[
                block,
                index + 1,
                candidate.name,
                candidate.playerId,
                candidate.alliance,
                candidate.furnace,
                ministryMap[
                  prepDay
                ],
                candidate.score
              ]]);

            assignedPlayers.add(
              candidate.playerId
            );

            currentRow++;
          }
        );

      currentRow++;
    }
  );

  currentRow += 3;
}


);
}

/**

* =========================================================
* BLOCK CANDIDATES
* =========================================================
  */

function getCandidatesForBlock(
headers,
rows,
block,
scoreColumn,
assignedPlayers
) {

const candidates =
[];

const playerIndex =
getHeaderIndex(
headers,
HEADERS.INGAME_NAME
);

const playerIdIndex =
getHeaderIndex(
headers,
HEADERS.PLAYER_ID
);

const allianceIndex =
getHeaderIndex(
headers,
HEADERS.ALLIANCE
);

const furnaceIndex =
getHeaderIndex(
headers,
HEADERS.FURNACE_LEVEL
);

const coverageIndex =
getHeaderIndex(
headers,
HEADERS.COVERAGE
);

const coverageCountIndex =
getHeaderIndex(
headers,
HEADERS.COVERAGE_COUNT
);

const scoreIndex =
getHeaderIndex(
headers,
scoreColumn
);

rows.forEach(
row => {


  const playerId =
    String(
      row[
        playerIdIndex
      ]
    );

  if (
    assignedPlayers.has(
      playerId
    )
  ) {

    return;
  }

  const coverage =
    String(
      row[
        coverageIndex
      ] || ''
    );

  if (
    !coverage.includes(
      block
    )
  ) {

    return;
  }

  candidates.push({

    name:
      row[
        playerIndex
      ],

    playerId,

    alliance:
      row[
        allianceIndex
      ],

    furnace:
      row[
        furnaceIndex
      ],

    score:
      Number(
        row[
          scoreIndex
        ]
      ) || 0,

    furnaceRank:
      getFurnaceRank(
        row[
          furnaceIndex
        ]
      ),

    coverageCount:
      Number(
        row[
          coverageCountIndex
        ]
      ) || 0
  });
}


);

candidates.sort(
(
a,
b
) => {


  if (
    b.score !==
    a.score
  ) {

    return (
      b.score -
      a.score
    );
  }

  if (
    b.furnaceRank !==
    a.furnaceRank
  ) {

    return (
      b.furnaceRank -
      a.furnaceRank
    );
  }

  return (
    b.coverageCount -
    a.coverageCount
  );
}


);

return candidates;
}

/**

* =========================================================
* MINISTRY MAP
* =========================================================
  */

function getMinistryMap(
spreadsheet
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
CONFIG_SECTIONS.MINISTRY_MAPPING
);

const map =
{};

section.forEach(
row => {


  map[
    row[0]
  ] =
    row[1];
}


);

return map;
}
