/**

* =========================================================
* FORMBUILDER.GS
* SvS Ministry System V2
* FINALIZED (Constants.gs Compatible)
* =========================================================
*
* Spreadsheet Headers:
* * English Only
*
* User Experience:
* * English Header
* * Multilingual Help Text
*
* Dependencies:
* * Constants.gs
* * Main.gs
* * Translations.gs
*
* =========================================================
  */

/**

* =========================================================
* BUILD / UPDATE FORM
* =========================================================
  */

function buildOrUpdateForm() {

const resources =
getProjectResources();

const form =
resources.form;

clearFormQuestions(
form
);

form.setTitle(
'Whiteout Survival - SvS Ministry Application'
);

form.setDescription(
'Complete this form to help assign SvS ministries and preparation day responsibilities.'
);

createIdentitySection(
form
);

createFurnaceSection(
form
);

createSpecialtySection(
form
);

createCoverageSection(
form
);

createResourcesSection(
form
);

createSpeedupsSection(
form
);

createBattleSection(
form
);

form.setCollectEmail(
false
);

form.setAllowResponseEdits(
false
);

form.setProgressBar(
true
);

form.setShuffleQuestions(
false
);

Logger.log(
'Form Updated Successfully'
);

Logger.log(
form.getPublishedUrl()
);
}

/**

* =========================================================
* CLEAR QUESTIONS
* =========================================================
  */

function clearFormQuestions(
form
) {

const items =
form.getItems();

for (
let i =
items.length - 1;
i >= 0;
i--
) {

```
form.deleteItem(
  items[i]
);
```

}
}

/**

* =========================================================
* IDENTITY
* =========================================================
  */

function createIdentitySection(
form
) {

form.addSectionHeaderItem()
.setTitle(
'Player Information'
);

form.addTextItem()
.setTitle(
HEADERS.INGAME_NAME
)
.setHelpText(
getHelpText(
'inGameName'
)
)
.setRequired(
true
);

const playerId =
form.addTextItem()
.setTitle(
HEADERS.PLAYER_ID
)
.setHelpText(
getHelpText(
'playerId'
)
)
.setRequired(
true
);

const validation =
FormApp
.createTextValidation()
.requireTextMatchesPattern(
'^[0-9]+$'
)
.setHelpText(
'Numbers Only'
)
.build();

playerId.setValidation(
validation
);

form.addTextItem()
.setTitle(
HEADERS.ALLIANCE
)
.setHelpText(
getHelpText(
'alliance'
)
)
.setRequired(
true
);
}

/**

* =========================================================
* FURNACE
* =========================================================
  */

function createFurnaceSection(
form
) {

form.addMultipleChoiceItem()
.setTitle(
HEADERS.FURNACE_LEVEL
)
.setHelpText(
getHelpText(
'furnaceLevel'
)
)
.setChoiceValues(
FURNACE_LEVELS
)
.setRequired(
true
);
}

/**

* =========================================================
* SPECIALTIES
* =========================================================
  */

function createSpecialtySection(
form
) {

form.addCheckboxItem()
.setTitle(
HEADERS.SPECIALTIES
)
.setHelpText(
getHelpText(
'specialties'
)
)
.setChoiceValues(
SPECIALTIES
)
.setRequired(
true
);
}

/**

* =========================================================
* COVERAGE
* =========================================================
  */

function createCoverageSection(
form
) {

form.addCheckboxItem()
.setTitle(
HEADERS.COVERAGE
)
.setHelpText(
getHelpText(
'coverage'
)
)
.setChoiceValues(
COVERAGE_BLOCKS
)
.setRequired(
true
);
}

/**

* =========================================================
* RESOURCES
* =========================================================
  */

function createResourcesSection(
form
) {

form.addSectionHeaderItem()
.setTitle(
'Resources'
);

createNumericQuestion(
form,
HEADERS.FIRE_CRYSTALS,
'fireCrystals'
);

createNumericQuestion(
form,
HEADERS.SRFC,
'superRefinedFireCrystals'
);

createNumericQuestion(
form,
HEADERS.SHARDS,
'fireCrystalShards'
);
}

/**

* =========================================================
* SPEEDUPS
* =========================================================
  */

function createSpeedupsSection(
form
) {

form.addSectionHeaderItem()
.setTitle(
'Speedups'
);

createSpeedupQuestion(
form,
HEADERS.CONSTRUCTION_SPEEDUPS,
'constructionSpeedups'
);

createSpeedupQuestion(
form,
HEADERS.RESEARCH_SPEEDUPS,
'researchSpeedups'
);

createSpeedupQuestion(
form,
HEADERS.TRAINING_SPEEDUPS,
'trainingSpeedups'
);

createSpeedupQuestion(
form,
HEADERS.GENERAL_SPEEDUPS,
'generalSpeedups'
);
}

/**

* =========================================================
* CASTLE BATTLE
* =========================================================
  */

function createBattleSection(
form
) {

form.addSectionHeaderItem()
.setTitle(
'Castle Battle'
);

form.addMultipleChoiceItem()
.setTitle(
HEADERS.CASTLE_BATTLE
)
.setHelpText(
getHelpText(
'castleBattle'
)
)
.setChoiceValues(
BATTLE_AVAILABILITY
)
.setRequired(
true
);

form.addCheckboxItem()
.setTitle(
HEADERS.BATTLE_ROLES
)
.setHelpText(
getHelpText(
'battleRoles'
)
)
.setChoiceValues(
BATTLE_ROLES
)
.setRequired(
false
);
}

/**

* =========================================================
* NUMERIC QUESTION
* =========================================================
  */

function createNumericQuestion(
form,
title,
translationKey
) {

const item =
form.addTextItem();

item
.setTitle(
title
)
.setHelpText(
getHelpText(
translationKey
)
)
.setRequired(
true
);

const validation =
FormApp
.createTextValidation()
.requireTextMatchesPattern(
'^[0-9]+$'
)
.setHelpText(
'Numbers Only'
)
.build();

item.setValidation(
validation
);
}

/**

* =========================================================
* SPEEDUP QUESTION
* =========================================================
  */

function createSpeedupQuestion(
form,
title,
translationKey
) {

form.addMultipleChoiceItem()
.setTitle(
title
)
.setHelpText(
getHelpText(
translationKey
)
)
.setChoiceValues(
SPEEDUP_OPTIONS
)
.setRequired(
true
);
}
