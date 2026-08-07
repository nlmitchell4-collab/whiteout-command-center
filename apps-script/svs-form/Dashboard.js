/**

* =========================================================
* DASHBOARD.GS
* SvS Ministry System V2
* FINALIZED (Constants.gs Compatible)
* =========================================================
*
* Dashboard Includes:
*
* * Total Applicants
* * Construction Applicants
* * Research Applicants
* * Training Applicants
* * Final Sprint Applicants
*
* * Total Fire Crystals
* * Total SRFC
* * Total Fire Crystal Shards
*
* * Coverage Matrix
* * Coverage Gaps
*
* * Top Construction Chief
* * Top Research Chief
* * Top Training Chief
* * Top Final Sprint Chief
*
* =========================================================
  */

/**

* =========================================================
* INITIALIZE
* =========================================================
  */

function Dashboard_initialize(
spreadsheet
) {

let sheet =
getDashboardSheet(
spreadsheet
);

if (
!sheet
) {


sheet =
  spreadsheet.insertSheet(
    SHEETS.DASHBOARD
  );


}

buildDashboardLayout(
sheet
);
}

/**

* =========================================================
* UPDATE
* =========================================================
  */

function updateDashboard() {

const resources =
getProjectResources();

const spreadsheet =
resources.spreadsheet;

const responseSheet =
getResponseSheet(
spreadsheet
);

let dashboard =
getDashboardSheet(
spreadsheet
);

if (
!dashboard
) {


Dashboard_initialize(
  spreadsheet
);

dashboard =
  getDashboardSheet(
    spreadsheet
  );


}

buildDashboardLayout(
dashboard
);

const data =
responseSheet
.getDataRange()
.getValues();

if (
data.length <= 1
) {


dashboard
  .getRange(
    'B3'
  )
  .setValue(
    0
  );

return;


}

const latest =
getLatestSubmissions(
data
);

updateSummaryMetrics(
dashboard,
latest.headers,
latest.rows
);

updateResourceMetrics(
dashboard,
latest.headers,
latest.rows
);

updateCoverageMetrics(
spreadsheet,
dashboard,
latest.headers,
latest.rows
);

updateTopChiefs(
dashboard,
latest.headers,
latest.rows
);

dashboard.autoResizeColumns(
1,
20
);
}

/**

* =========================================================
* LAYOUT
* =========================================================
  */

function buildDashboardLayout(
sheet
) {

sheet.clear();

sheet
.getRange(
'A1'
)
.setValue(
'SvS Ministry Dashboard'
)
.setFontWeight(
'bold'
)
.setFontSize(
16
);

sheet
.getRange(
'A3:B12'
)
.setValues([


  ['Total Applicants',''],

  ['Construction Applicants',''],

  ['Research Applicants',''],

  ['Training Applicants',''],

  ['Final Sprint Applicants',''],

  ['Coverage Gaps',''],

  ['Total Fire Crystals',''],

  ['Total SRFC',''],

  ['Total FC Shards',''],

  ['Last Updated','']
]);


sheet
.getRange(
'D3:F3'
)
.setValues([[
'Coverage Block',
'Available Chiefs',
'Status'
]]);

sheet
.getRange(
'H3:J3'
)
.setValues([[
'Top Construction',
'Alliance',
'Score'
]]);

sheet
.getRange(
'L3:N3'
)
.setValues([[
'Top Research',
'Alliance',
'Score'
]]);

sheet
.getRange(
'P3:R3'
)
.setValues([[
'Top Training',
'Alliance',
'Score'
]]);

sheet
.getRange(
'T3:V3'
)
.setValues([[
'Top Final Sprint',
'Alliance',
'Score'
]]);
}

/**

* =========================================================
* SUMMARY
* =========================================================
  */

function updateSummaryMetrics(
dashboard,
headers,
rows
) {

const specialtyIndex =
headers.indexOf(
HEADERS.SPECIALTIES
);

let construction = 0;
let research = 0;
let training = 0;
let sprint = 0;

rows.forEach(
row => {


  const specialties =
    String(
      row[
        specialtyIndex
      ] || ''
    );

  if (
    specialties.includes(
      'Construction'
    )
  ) {
    construction++;
  }

  if (
    specialties.includes(
      'Research'
    )
  ) {
    research++;
  }

  if (
    specialties.includes(
      'Troop Training'
    )
  ) {
    training++;
  }

  if (
    specialties.includes(
      'Final Sprint'
    )
  ) {
    sprint++;
  }
}


);

dashboard
.getRange(
'B3:B7'
)
.setValues([


  [rows.length],

  [construction],

  [research],

  [training],

  [sprint]
]);


dashboard
.getRange(
'B12'
)
.setValue(
new Date()
);
}

/**

* =========================================================
* RESOURCES
* =========================================================
  */

function updateResourceMetrics(
dashboard,
headers,
rows
) {

const fireCrystalIndex =
headers.indexOf(
HEADERS.FIRE_CRYSTALS
);

const srfcIndex =
headers.indexOf(
HEADERS.SRFC
);

const shardIndex =
headers.indexOf(
HEADERS.SHARDS
);

let totalFC = 0;
let totalSRFC = 0;
let totalShards = 0;

rows.forEach(
row => {


  totalFC +=
    Number(
      row[
        fireCrystalIndex
      ]
    ) || 0;

  totalSRFC +=
    Number(
      row[
        srfcIndex
      ]
    ) || 0;

  totalShards +=
    Number(
      row[
        shardIndex
      ]
    ) || 0;
}


);

dashboard
.getRange(
'B9:B11'
)
.setValues([


  [totalFC],

  [totalSRFC],

  [totalShards]
]);


}

/**

* =========================================================
* COVERAGE
* =========================================================
  */

function updateCoverageMetrics(
spreadsheet,
dashboard,
headers,
rows
) {

const coverageIndex =
headers.indexOf(
HEADERS.COVERAGE
);

const minimumCoverage =
Number(
getConfigValue(
spreadsheet,
CONFIG_SECTIONS.DASHBOARD_SETTINGS,
CONFIG_KEYS.MIN_COVERAGE_PER_BLOCK
)
) ||
DEFAULTS.MIN_COVERAGE_PER_BLOCK;

let dashboardRow =
4;

let gapCount = 0;

COVERAGE_BLOCKS.forEach(
block => {


  let available = 0;

  rows.forEach(
    row => {

      const coverage =
        String(
          row[
            coverageIndex
          ] || ''
        );

      if (
        coverage.includes(
          block
        )
      ) {

        available++;
      }
    }
  );

  let status =
    'OK';

  if (
    available <
    minimumCoverage
  ) {

    status =
      'GAP';

    gapCount++;
  }

  dashboard
    .getRange(
      dashboardRow,
      4,
      1,
      3
    )
    .setValues([[
      block,
      available,
      status
    ]]);

  dashboardRow++;
}


);

dashboard
.getRange(
'B8'
)
.setValue(
gapCount
);
}

/**

* =========================================================
* TOP CHIEFS
* =========================================================
  */

function updateTopChiefs(
dashboard,
headers,
rows
) {

writeTopChief(
dashboard,
headers,
rows,
HEADERS.CONSTRUCTION_SCORE,
4,
8
);

writeTopChief(
dashboard,
headers,
rows,
HEADERS.RESEARCH_SCORE,
4,
12
);

writeTopChief(
dashboard,
headers,
rows,
HEADERS.TRAINING_SCORE,
4,
16
);

writeTopChief(
dashboard,
headers,
rows,
HEADERS.FINAL_SPRINT_SCORE,
4,
20
);
}

/**

* =========================================================
* TOP CHIEF HELPER
* =========================================================
  */

function writeTopChief(
dashboard,
headers,
rows,
scoreHeader,
rowNumber,
columnNumber
) {

const playerIndex =
headers.indexOf(
HEADERS.INGAME_NAME
);

const allianceIndex =
headers.indexOf(
HEADERS.ALLIANCE
);

const scoreIndex =
headers.indexOf(
scoreHeader
);

const sorted =
[...rows].sort(
(a, b) =>
Number(
b[
scoreIndex
]
) -
Number(
a[
scoreIndex
]
)
);

if (
sorted.length === 0
) {


return;


}

dashboard
.getRange(
rowNumber,
columnNumber,
1,
3
)
.setValues([[
sorted[0][playerIndex],
sorted[0][allianceIndex],
sorted[0][scoreIndex]
]]);
}

/**

* =========================================================
* REFRESH
* =========================================================
  */

function refreshAll() {

scoreApplicants();

generateRecommendedAssignments();

updateDashboard();
}
