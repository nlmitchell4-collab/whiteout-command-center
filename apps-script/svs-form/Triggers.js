/**

* =========================================================
* TRIGGERS.GS
* SvS Ministry System V2
* FINALIZED (Constants.gs Compatible)
* =========================================================
*
* Handles:
* * Form Submit Trigger
* * Trigger Installation
* * Trigger Cleanup
* * Full Project Installation
*
* =========================================================
  */

/**

* =========================================================
* INSTALL PROJECT
* =========================================================
*
* Run Once
*
* =========================================================
  */

function installProject() {

Logger.log(
'Starting Installation...'
);

setupProject();

buildOrUpdateForm();

setupTriggers();

refreshAll();

Logger.log(
'Installation Complete'
);
}

/**

* =========================================================
* CREATE TRIGGERS
* =========================================================
  */

function setupTriggers() {

removeTriggers();

const resources =
getProjectResources();

const form =
resources.form;

ScriptApp.newTrigger(
'onApplicationSubmit'
)
.forForm(
form
)
.onFormSubmit()
.create();

Logger.log(
'Form Submit Trigger Created'
);
}

/**

* =========================================================
* REMOVE TRIGGERS
* =========================================================
  */

function removeTriggers() {

const triggers =
ScriptApp.getProjectTriggers();

triggers.forEach(
trigger => {


  ScriptApp.deleteTrigger(
    trigger
  );
}


);

Logger.log(
'Existing Triggers Removed'
);
}

/**

* =========================================================
* FORM SUBMISSION
* =========================================================
  */

function onApplicationSubmit(
e
) {

try {


Logger.log(
  'Form Submission Received'
);

scoreApplicants();

generateRecommendedAssignments();

updateDashboard();

Logger.log(
  'Submission Processed'
);


} catch (
error
) {


Logger.log(
  error.toString()
);

throw error;


}
}

/**

* =========================================================
* FULL REFRESH
* =========================================================
  */

function refreshAll() {

scoreApplicants();

generateRecommendedAssignments();

updateDashboard();

Logger.log(
'Refresh Complete'
);
}

/**

* =========================================================
* END OF SVS
* =========================================================
  */

function endOfSvS() {

archiveAndReset();

Logger.log(
'SvS Reset Complete'
);
}

/**

* =========================================================
* REBUILD FORM
* =========================================================
  */

function rebuildForm() {

buildOrUpdateForm();

Logger.log(
'Form Rebuilt'
);
}

/**

* =========================================================
* REBUILD RECOMMENDATIONS
* =========================================================
  */

function rebuildRecommendations() {

generateRecommendedAssignments();

Logger.log(
'Recommendations Rebuilt'
);
}

/**

* =========================================================
* REBUILD SCORES
* =========================================================
  */

function rebuildScores() {

scoreApplicants();

Logger.log(
'Scores Rebuilt'
);
}

/**

* =========================================================
* REBUILD DASHBOARD
* =========================================================
  */

function rebuildDashboard() {

updateDashboard();

Logger.log(
'Dashboard Rebuilt'
);
}

/**

* =========================================================
* VERIFY TRIGGERS
* =========================================================
  */

function listTriggers() {

const triggers =
ScriptApp.getProjectTriggers();

if (
triggers.length === 0
) {


Logger.log(
  'No Triggers Installed'
);

return;


}

triggers.forEach(
trigger => {


  Logger.log(
    [
      'Function: ' +
        trigger.getHandlerFunction(),

      'Type: ' +
        trigger.getEventType()
    ].join(' | ')
  );
}


);
}

/**

* =========================================================
* REMOVE AND REINSTALL
* =========================================================
  */

function reinstallTriggers() {

removeTriggers();

setupTriggers();

Logger.log(
'Triggers Reinstalled'
);
}

/**

* =========================================================
* SYSTEM HEALTH CHECK
* =========================================================
  */

function healthCheck() {

const resources =
getProjectResources();

Logger.log(
'============================'
);

Logger.log(
'FORM ID: ' +
resources.form.getId()
);

Logger.log(
'SHEET ID: ' +
resources.spreadsheet.getId()
);

Logger.log(
'FORM URL: ' +
resources.form.getPublishedUrl()
);

Logger.log(
'SHEET URL: ' +
resources.spreadsheet.getUrl()
);

Logger.log(
'============================'
);

listTriggers();
}

/**

* =========================================================
* MASTER REBUILD
* =========================================================
  */

function rebuildEverything() {

scoreApplicants();

generateRecommendedAssignments();

updateDashboard();

Logger.log(
'Full Rebuild Complete'
);
}
