import {
    getCanyonConfig,
    getCanyonMaps,
    getRosterPeople,
    getRosterPerson,
    saveCommandDataEntry
} from "../../data/commandData.js";
import {
    CANYON_TEAMS,
    getCanyonEligibleCombatants,
    getCanyonLegion,
    getCanyonRosterSummary,
    getCanyonTeamAssignments,
    getCanyonTeamForCombatant,
    getTroopPower
} from "./assignments.js";

const CANYON_MAPS = [
    "Flameguard",
    "Iceguard",
    "Stormrage"
];

const CANYON_PHASES = {
    opening: {
        label: "Seize & Conquer",
        order: 0
    },
    fortress: {
        label: "Fortress Occupation",
        order: 1
    },
    citadel: {
        label: "Citadel Onslaught",
        order: 2
    }
};

let activeCanyonPhase = "opening";
let selectedCanyonChief = localStorage.getItem("canyonChief") ?? null;
let selectedCommanderLegion = Number.parseInt(
    localStorage.getItem("canyonCommanderLegion") ?? "1",
    10
);
let selectedObjectiveId = null;

export function initializeCanyonBattlefield() {
    bindCanyonControls();
    buildCanyonBattlefield();
}

export function buildCanyonBattlefield() {
    const map =
        document.getElementById("canyon-map");

    const panel =
        document.getElementById("canyon-panel");

    const teamsContainer =
        document.getElementById("canyon-teams");

    const myObjectives =
        document.getElementById("canyon-my-objectives");

    if (!map || !panel || !teamsContainer || !myObjectives) return;

    const legion =
        getActiveCanyonLegion();

    const config =
        normalizeCanyonConfig(getCanyonConfig());

    const mapName =
        getCanyonMapForLegion(config, legion);

    const canyonMap =
        getCanyonMaps().full;

    const objectives =
        canyonMap?.objectives ?? [];

    const selectedChief =
        getSelectedCanyonChief();

    const selectedTeam =
        selectedChief
            ? getCanyonTeamForCombatant(selectedChief.id, legion)
            : null;

    const activeRouteObjectives =
        objectives.filter(objective =>
            isObjectiveInPlan(objective, mapName) &&
            isObjectiveOnAnyActiveRoute(objective, mapName, canyonMap)
        );

    if (
        selectedObjectiveId &&
        !activeRouteObjectives.some(objective => objective.id === selectedObjectiveId)
    ) {
        selectedObjectiveId = null;
    }

    if (!selectedObjectiveId && activeRouteObjectives.length > 0) {
        selectedObjectiveId = activeRouteObjectives[0].id;
    }

    map.dataset.map = mapName.toLowerCase();
    map.style.backgroundImage =
        canyonMap?.image ? `url("${canyonMap.image}")` : "";
    map.innerHTML = `
        ${objectives.map(objective =>
            renderCanyonObjective(objective, selectedTeam, mapName, canyonMap)
        ).join("")}
    `;

    map
        .querySelectorAll("[data-canyon-objective-id]")
        .forEach(button => {
            button.addEventListener("click", () => {
                selectedObjectiveId = button.dataset.canyonObjectiveId;
                buildCanyonBattlefield();
            });
        });

    renderCanyonLegionContext(legion, mapName);
    renderCanyonMyObjectives(myObjectives, selectedChief, selectedTeam, objectives, mapName);
    renderCanyonPanel(panel, legion, mapName, objectives, selectedTeam);
    renderCanyonTeams(teamsContainer, legion, selectedTeam);
}

export function bindCanyonConfigControls(container) {
    const saveButton =
        container.querySelector("#save-canyon-config");

    if (!saveButton) return;

    saveButton.addEventListener("click", async () => {
        const status =
            container.querySelector("#canyon-config-status");

        const nextConfig = {
            legionMaps: Object.fromEntries(
                [1, 2].map(legion => [
                    legion,
                    container.querySelector(`[data-canyon-legion-map="${legion}"]`)?.value ?? CANYON_MAPS[0]
                ])
            ),
            teamLeaders: Object.fromEntries(
                [1, 2].map(legion => [
                    legion,
                    Object.fromEntries(
                        CANYON_TEAMS.map(team => [
                            team.name,
                            container.querySelector(`[data-canyon-leader="${legion}-${team.name}"]`)?.value ?? ""
                        ])
                    )
                ])
            )
        };

        status.textContent = "Saving Canyon settings...";

        try {
            await saveCommandDataEntry("canyonConfig", nextConfig);
            buildCanyonBattlefield();
            status.textContent = "Canyon settings saved.";
        }
        catch (error) {
            status.textContent = error.message;
        }
    });
}

export function renderCanyonConfigControls() {
    const config =
        normalizeCanyonConfig(getCanyonConfig());

    return `
        <div class="card canyon-config-card">
            <h2>Canyon Clash Settings</h2>
            <p>
                Assign each roster legion to its WOS Canyon map and optionally override team leaders.
            </p>

            <div class="canyon-config-grid">
                ${[1, 2].map(legion => `
                    <section class="canyon-config-legion">
                        <h3>Legion ${legion}</h3>

                        <label>
                            <span>Canyon Map</span>
                            <select data-canyon-legion-map="${legion}">
                                ${CANYON_MAPS.map(mapName => `
                                    <option value="${mapName}" ${getCanyonMapForLegion(config, legion) === mapName ? "selected" : ""}>
                                        ${escapeHtml(mapName)}
                                    </option>
                                `).join("")}
                            </select>
                        </label>

                        <div class="canyon-leader-grid">
                            ${CANYON_TEAMS.map(team => `
                                <label>
                                    <span>${escapeHtml(team.name)} Leader</span>
                                    <select data-canyon-leader="${legion}-${team.name}">
                                        ${renderLeaderOptions(legion, config.teamLeaders?.[legion]?.[team.name])}
                                    </select>
                                </label>
                            `).join("")}
                        </div>
                    </section>
                `).join("")}
            </div>

            <div class="button-row">
                <button id="save-canyon-config" type="button" class="primary">
                    Save Canyon Settings
                </button>
                <span id="canyon-config-status"></span>
            </div>
        </div>
    `;
}

function bindCanyonControls() {
    bindCanyonChiefSearch();
    bindCanyonPhaseButtons();
}

function bindCanyonChiefSearch() {
    const input =
        document.getElementById("canyon-chief-search");

    const results =
        document.getElementById("canyon-chief-list");

    if (!input || !results) return;

    const selectedChief =
        getSelectedCanyonChief();

    if (selectedChief) {
        input.value = selectedChief.displayName;
    }

    input.addEventListener("focus", () => {
        renderCanyonChiefResults(input.value);
    });

    input.addEventListener("input", () => {
        renderCanyonChiefResults(input.value);

        const chief =
            getSelectedCanyonChief();

        if (
            chief &&
            input.value.trim() !== chief.displayName
        ) {
            selectedCanyonChief = null;
            localStorage.removeItem("canyonChief");
            buildCanyonBattlefield();
        }
    });

    document.addEventListener("click", event => {
        if (
            event.target === input ||
            results.contains(event.target)
        ) {
            return;
        }

        results.hidden = true;
    });
}

function bindCanyonPhaseButtons() {
    document
        .querySelectorAll(".canyon-phase-button")
        .forEach(button => {
            button.addEventListener("click", () => {
                activeCanyonPhase = button.dataset.canyonPhase;

                document
                    .querySelectorAll(".canyon-phase-button")
                    .forEach(phaseButton =>
                        phaseButton.classList.toggle(
                            "active",
                            phaseButton === button
                        )
                    );

                selectedObjectiveId = null;
                buildCanyonBattlefield();
            });
        });
}

function renderCanyonChiefResults(searchValue) {
    const results =
        document.getElementById("canyon-chief-list");

    if (!results) return;

    const normalizedSearch =
        searchValue.trim().toLowerCase();

    const people =
        getRosterPeople()
            .filter(person => getCanyonLegion(person))
            .sort((a, b) =>
                a.displayName.localeCompare(b.displayName)
            )
            .filter(person =>
                !normalizedSearch ||
                person.displayName.toLowerCase().includes(normalizedSearch)
            );

    if (people.length === 0) {
        results.innerHTML =
            "<div class=\"chief-result-empty\">No Canyon combatants found.</div>";
        results.hidden = false;
        return;
    }

    results.innerHTML =
        people.map(person => `
            <button
                type="button"
                class="chief-result"
                data-canyon-chief-id="${person.id}">
                <span>${escapeHtml(person.displayName)}</span>
                <small>
                    Legion ${getCanyonLegion(person)}
                    ${getTroopPower(person) ? ` ${getTroopPower(person).toLocaleString()}` : ""}
                </small>
            </button>
        `).join("");

    results
        .querySelectorAll("[data-canyon-chief-id]")
        .forEach(button => {
            button.addEventListener("click", () => {
                selectCanyonChief(button.dataset.canyonChiefId);
            });
        });

    results.hidden = false;
}

function selectCanyonChief(chiefId) {
    const chief =
        getRosterPerson(chiefId);

    const input =
        document.getElementById("canyon-chief-search");

    const results =
        document.getElementById("canyon-chief-list");

    if (!chief || !input) return;

    selectedCanyonChief = chief.id;
    input.value = chief.displayName;
    localStorage.setItem("canyonChief", chief.id);

    if (results) {
        results.hidden = true;
    }

    buildCanyonBattlefield();
}

function renderCanyonLegionContext(legion, mapName) {
    const context =
        document.getElementById("canyon-legion-context");

    if (!context) return;

    const chief =
        getSelectedCanyonChief();

    if (chief) {
        context.innerHTML = `
            <label>Legion</label>
            <div class="legion-pill">
                Legion ${legion} - ${escapeHtml(mapName)}
            </div>
        `;
        return;
    }

    context.innerHTML = `
        <label for="canyon-commander-legion">Legion</label>
        <select id="canyon-commander-legion">
            <option value="1" ${legion === 1 ? "selected" : ""}>Legion 1</option>
            <option value="2" ${legion === 2 ? "selected" : ""}>Legion 2</option>
        </select>
    `;

    context
        .querySelector("#canyon-commander-legion")
        .addEventListener("change", event => {
            selectedCommanderLegion =
                Number.parseInt(event.target.value, 10);
            localStorage.setItem("canyonCommanderLegion", String(selectedCommanderLegion));
            selectedObjectiveId = null;
            buildCanyonBattlefield();
        });
}

function renderCanyonMyObjectives(container, chief, team, objectives, mapName) {
    if (!chief || !team) {
        container.innerHTML = "";
        return;
    }

    const route =
        getCanyonRoute(team.name);

    const routeObjectives =
        getCanyonPhaseRouteObjectives(team.name, mapName, objectives);

    container.innerHTML = `
        <div class="summary-card canyon-my-card ${team.className}">
            <h2>${escapeHtml(chief.displayName)}</h2>
            <h3>${escapeHtml(team.name)} Team - ${escapeHtml(route?.name ?? team.lane)}</h3>
            <p>
                Leader: ${team.leader ? escapeHtml(team.leader.displayName) : "Unassigned"}
            </p>
            <p>${escapeHtml(route?.summary ?? "Move together and follow team leader calls.")}</p>
            <div class="canyon-route-chip-list">
                ${routeObjectives.map((objective, index) => `
                    <button
                        type="button"
                        class="canyon-route-chip ${team.className}"
                        data-canyon-chip-objective="${objective.id}">
                        <small>${index + 1}</small>
                    </button>
                `).join("")}
            </div>
        </div>
    `;

    container
        .querySelectorAll("[data-canyon-chip-objective]")
        .forEach(button => {
            button.addEventListener("click", () => {
                selectedObjectiveId = button.dataset.canyonChipObjective;
                buildCanyonBattlefield();
            });
        });
}

function renderCanyonPanel(panel, legion, mapName, objectives, selectedTeam) {
    const canyonMap =
        getCanyonMaps().full;

    const objective =
        objectives.find(item => item.id === selectedObjectiveId) ??
        objectives.find(item =>
            item.mapName === mapName &&
            isObjectiveUnlocked(item)
        ) ??
        objectives.find(isObjectiveUnlocked);

    const team =
        getRouteTeamForObjective(objective, mapName, canyonMap) ??
        CANYON_TEAMS.find(candidate => candidate.name === objective?.team);

    const summary =
        getCanyonRosterSummary(legion);

    if (!objective || !team) {
        panel.innerHTML = `
            <div class="detail-card">
                <h2>${escapeHtml(mapName)} Canyon Plan</h2>
                <p>No Canyon objectives are configured.</p>
            </div>
        `;
        return;
    }

    panel.innerHTML = `
        <div class="detail-card">
            <h2>${escapeHtml(objective.displayName ?? objective.label)}</h2>
            <div class="badge ${team.className}">
                ${escapeHtml(team.name)} Route
            </div>
            <p>
                Legion ${legion} home territory - ${escapeHtml(mapName)} - ${escapeHtml(CANYON_PHASES[activeCanyonPhase].label)}
            </p>

            <h3>Waypoint Value</h3>
            <p>
                ${renderObjectiveValue(objective)}
                ${objective.priority === "critical" ? "Critical objective." : ""}
            </p>

            <h3>Route Strategy</h3>
            <p>${getObjectiveStrategy(objective)}</p>

            <h3>${escapeHtml(team.name)} Team</h3>
            ${renderRouteSummary(team.name, mapName, objectives)}
            ${renderAssignedTeam(team.name, legion, selectedTeam)}

            <h3>Commander Summary</h3>
            <p>
                ${summary.combatantCount} combatants assigned across four balanced teams by troop power.
            </p>
        </div>
    `;

    panel
        .querySelectorAll("[data-canyon-chip-objective]")
        .forEach(button => {
            button.addEventListener("click", () => {
                selectedObjectiveId = button.dataset.canyonChipObjective;
                buildCanyonBattlefield();
            });
        });
}

function renderAssignedTeam(teamName, legion, selectedTeam) {
    const team =
        getCanyonTeamAssignments(legion)
            .find(candidate => candidate.name === teamName);

    if (!team) return "<p>No team assigned.</p>";

    const isSelectedTeam =
        selectedTeam?.name === team.name;

    return `
        <div class="objective-assignment-list ${isSelectedTeam ? "selected" : ""}">
            <div class="objective-assignment-row">
                <strong>${escapeHtml(team.leader ? team.leader.displayName : "Unassigned leader")}</strong>
                <span>Leader</span>
                <span>${team.totalPower.toLocaleString()}</span>
                <small>${team.members.length} members</small>
            </div>
            ${team.members.map(member => `
                <div class="objective-assignment-row">
                    <strong>${escapeHtml(member.displayName)}</strong>
                    <span>${getTroopPower(member).toLocaleString()}</span>
                    <span>Legion ${legion}</span>
                </div>
            `).join("")}
        </div>
    `;
}

function renderRouteSummary(teamName, mapName, objectives) {
    const route =
        getCanyonRoute(teamName);

    const routeObjectives =
        getCanyonPhaseRouteObjectives(teamName, mapName, objectives);

    if (!route) return "";

    return `
        <div class="canyon-route-summary">
            <strong>${escapeHtml(route.name)}</strong>
            <p>${escapeHtml(route.summary)}</p>
            <div class="canyon-route-step-list">
                ${routeObjectives.map((objective, index) => `
                    <button
                        type="button"
                        class="canyon-route-step ${teamName.toLowerCase()}"
                        data-canyon-chip-objective="${objective.id}">
                        <small>${index + 1}</small>
                    </button>
                `).join("")}
            </div>
        </div>
    `;
}

function renderCanyonTeams(container, legion, selectedTeam) {
    container.innerHTML =
        getCanyonTeamAssignments(legion)
            .map(team => renderCanyonTeam(team, selectedTeam))
            .join("");
}

function renderCanyonObjective(objective, selectedTeam, mapName, canyonMap) {
    const unlocked =
        isObjectiveUnlocked(objective);

    const team =
        getRouteTeamForObjective(objective, mapName, canyonMap) ??
        CANYON_TEAMS.find(candidate => candidate.name === objective.team);

    const selected =
        objective.id === selectedObjectiveId;

    const teamFocus =
        selectedTeam &&
        isObjectiveOnTeamRoute(objective, selectedTeam.name, mapName, canyonMap);

    const activePath =
        isObjectiveOnTeamActiveRoute(objective, team?.name, mapName, canyonMap);

    const territoryClass =
        objective.mapName === mapName
            ? "home-territory"
            : objective.mapName === "Center"
                ? "center-territory"
                : "enemy-territory";

    return `
        <button
            type="button"
            class="canyon-objective ${team?.className ?? ""} ${territoryClass} ${selected ? "selected" : ""} ${teamFocus ? "assigned" : ""} ${activePath ? "active-path" : "inactive-path"} ${unlocked ? "" : "locked"}"
            style="left: ${objective.x}%; top: ${objective.y}%"
            title="${escapeAttribute(objective.displayName ?? objective.label)}"
            aria-label="${escapeAttribute(objective.displayName ?? objective.label)}"
            data-canyon-objective-id="${objective.id}">
        </button>
    `;
}

function renderCanyonTeam(team, selectedTeam) {
    const route =
        getCanyonRoute(team.name);

    return `
        <article class="canyon-team-card ${team.className} ${selectedTeam?.name === team.name ? "selected" : ""}">
            <div class="canyon-team-heading">
                <h3>${escapeHtml(team.name)}</h3>
                <span>${team.totalPower.toLocaleString()}</span>
            </div>
            <p>
                ${escapeHtml(route?.name ?? team.lane)}
            </p>
            <p>
                Leader:
                <strong>${team.leader ? escapeHtml(team.leader.displayName) : "Unassigned"}</strong>
            </p>
            <div class="canyon-team-members">
                ${team.members.map(member => `
                    <div>
                        <span>${escapeHtml(member.displayName)}</span>
                        <small>${getTroopPower(member).toLocaleString()}</small>
                    </div>
                `).join("")}
            </div>
        </article>
    `;
}

function renderLeaderOptions(legion, selectedLeaderId) {
    return `
        <option value="">Auto: highest available power</option>
        ${getCanyonEligibleCombatants(legion).map(combatant => `
            <option value="${escapeAttribute(combatant.id)}" ${selectedLeaderId === combatant.id ? "selected" : ""}>
                ${escapeHtml(combatant.displayName)} - ${getTroopPower(combatant).toLocaleString()}
            </option>
        `).join("")}
    `;
}

function getCanyonRoute(teamName, canyonMap = getCanyonMaps().full) {
    return canyonMap?.routes?.[teamName] ?? null;
}

function getCanyonRouteObjectives(teamName, mapName, objectives, canyonMap = getCanyonMaps().full) {
    const route =
        getCanyonRoute(teamName, canyonMap);

    if (!route) return [];

    const routeObjectiveIds =
        getRouteObjectiveIds(route, mapName);

    return routeObjectiveIds
        .map(id => objectives.find(objective => objective.id === id))
        .filter(Boolean);
}

function getCanyonPhaseRouteObjectives(teamName, mapName, objectives, canyonMap = getCanyonMaps().full) {
    const route =
        getCanyonRoute(teamName, canyonMap);

    if (!route) return [];

    return getRoutePhaseWaypointIds(route, mapName)
        .map(id => objectives.find(objective => objective.id === id))
        .filter(Boolean)
        .filter(isObjectiveUnlocked);
}

function getRouteTeamForObjective(objective, mapName, canyonMap = getCanyonMaps().full) {
    if (!objective) return null;

    return CANYON_TEAMS.find(team =>
        isObjectiveOnTeamRoute(objective, team.name, mapName, canyonMap)
    ) ?? null;
}

function isObjectiveOnAnyActiveRoute(objective, mapName, canyonMap = getCanyonMaps().full) {
    return CANYON_TEAMS.some(team =>
        isObjectiveOnTeamActiveRoute(objective, team.name, mapName, canyonMap)
    );
}

function isObjectiveOnTeamActiveRoute(objective, teamName, mapName, canyonMap = getCanyonMaps().full) {
    const route =
        getCanyonRoute(teamName, canyonMap);

    if (!objective || !route) return false;

    return getRoutePhaseWaypointIds(route, mapName)
        .includes(objective.id);
}

function isObjectiveOnTeamRoute(objective, teamName, mapName, canyonMap = getCanyonMaps().full) {
    const route =
        getCanyonRoute(teamName, canyonMap);

    if (!objective || !route) return false;

    return getRouteObjectiveIds(route, mapName)
        .includes(objective.id);
}

function getRoutePhaseWaypointIds(route, mapName) {
    const configuredPhaseIds =
        route.phasesByMap?.[mapName]?.[activeCanyonPhase];

    if (configuredPhaseIds) return configuredPhaseIds;

    const phaseWaypoints =
        route.phases?.[activeCanyonPhase] ?? route.waypointNumbers ?? [];

    return phaseWaypoints.map(waypoint =>
        typeof waypoint === "number"
            ? `${mapName.toLowerCase()}-${waypoint}`
            : waypoint
    );
}

function getRouteObjectiveIds(route, mapName) {
    const configuredPhases =
        route.phasesByMap?.[mapName];

    if (configuredPhases) {
        return [
            ...new Set(
                Object.values(configuredPhases)
                    .flat()
            )
        ];
    }

    return [
        ...(route.waypointNumbers ?? [])
            .map(number => `${mapName.toLowerCase()}-${number}`),
        ...(route.centerObjectiveIds ?? [])
    ];
}

function getActiveCanyonLegion() {
    const chief =
        getSelectedCanyonChief();

    const chiefLegion =
        getCanyonLegion(chief);

    if (chiefLegion) return chiefLegion;

    return Number.isFinite(selectedCommanderLegion)
        ? selectedCommanderLegion
        : 1;
}

function getSelectedCanyonChief() {
    const chief =
        selectedCanyonChief
            ? getRosterPerson(selectedCanyonChief)
            : null;

    if (chief && getCanyonLegion(chief)) {
        return {
            ...chief,
            displayName: chief.displayName ?? chief.name
        };
    }

    selectedCanyonChief = null;
    localStorage.removeItem("canyonChief");
    return null;
}

function normalizeCanyonConfig(config = {}) {
    return {
        legionMaps: {
            1:
                config.legionMaps?.[1] ??
                config.legionMaps?.["1"] ??
                config.activeLegion ??
                CANYON_MAPS[0],
            2:
                config.legionMaps?.[2] ??
                config.legionMaps?.["2"] ??
                CANYON_MAPS[1]
        },
        teamLeaders: {
            1: normalizeTeamLeaders(config.teamLeaders?.[1] ?? config.teamLeaders?.["1"]),
            2: normalizeTeamLeaders(config.teamLeaders?.[2] ?? config.teamLeaders?.["2"])
        }
    };
}

function normalizeTeamLeaders(leaders = {}) {
    return Object.fromEntries(
        CANYON_TEAMS.map(team => [
            team.name,
            leaders[team.name] ?? ""
        ])
    );
}

function getCanyonMapForLegion(config, legion) {
    return config.legionMaps?.[legion] ?? CANYON_MAPS[0];
}

function isObjectiveInPlan(objective, mapName) {
    return (
        objective.mapName === mapName ||
        objective.mapName === "Center"
    );
}

function isObjectiveUnlocked(objective) {
    return CANYON_PHASES[activeCanyonPhase].order >=
        CANYON_PHASES[objective.unlockPhase].order;
}

function renderObjectiveValue(objective) {
    if (objective.type === "citadel") {
        return "1,800 estimated points per minute plus a 50,000-point end bonus.";
    }

    if (objective.value) {
        return `${objective.value.toLocaleString()} estimated points per minute.`;
    }

    return "Home spawn and staging objective.";
}

function getObjectiveStrategy(objective) {
    const strategies = {
        bastion:
            "Use Bastion as the reset point. Avoid long unsupported marches from here after lanes are established.",
        airport:
            "Airports are route-control objectives. Hold lane airports to control movement into friendly territory and stage pushes toward Fortress or Citadel.",
        stronghold:
            "High-value strongholds are important lane anchors. Use them to stage Fortress pressure and protect route access.",
        "point-building":
            "Use this as lane income and a fallback anchor. Do not overcommit if Fortress or Citadel is about to unlock.",
        fortress:
            "Fortress unlocks in the second battle stage and should be treated as a critical income and fuel-control target.",
        citadel:
            "Frozen Citadel opens in the final stage. Prepare adjacent routes before it unlocks, then commit strong coordinated queues."
    };

    return strategies[objective.type] ?? "Hold this objective when it supports lane control.";
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
    return escapeHtml(value);
}
