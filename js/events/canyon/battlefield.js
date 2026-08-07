import {
    getCanyonConfig,
    saveCommandDataEntry
} from "../../data/commandData.js";
import {
    CANYON_TEAMS,
    getCanyonRosterSummary,
    getCanyonTeamAssignments
} from "./assignments.js";

const CANYON_LEGIONS = [
    "Flameguard",
    "Iceguard",
    "Stormrage"
];

const CANYON_COLORS = [
    "Blue",
    "Green",
    "Red",
    "Yellow"
];

const CANYON_OBJECTIVES = [
    {
        id: "north-bridge",
        name: "North Bridge",
        x: 50,
        y: 18,
        team: "Blue",
        strategy: "Open with a durable team here to contest rotations and block fast center access."
    },
    {
        id: "east-cache",
        name: "East Cache",
        x: 78,
        y: 42,
        team: "Green",
        strategy: "Hold this side objective with enough power to prevent easy back-caps."
    },
    {
        id: "center-ruins",
        name: "Center Ruins",
        x: 50,
        y: 50,
        team: "Red",
        strategy: "Use the highest-pressure team to reinforce center fights and answer collapses."
    },
    {
        id: "south-bridge",
        name: "South Bridge",
        x: 50,
        y: 82,
        team: "Yellow",
        strategy: "Anchor the lower lane and rotate only when the near objective is secure."
    },
    {
        id: "west-cache",
        name: "West Cache",
        x: 22,
        y: 58,
        team: "Blue",
        strategy: "Protect this as the safe fallback and staging lane for regrouping."
    }
];

let selectedCanyonLegion = null;

export function initializeCanyonBattlefield() {
    bindCanyonLegionSelector();
    buildCanyonBattlefield();
}

export function buildCanyonBattlefield() {
    const map =
        document.getElementById("canyon-map");

    const panel =
        document.getElementById("canyon-panel");

    const teamsContainer =
        document.getElementById("canyon-teams");

    if (!map || !panel || !teamsContainer) return;

    const config =
        getCanyonConfig();

    const activeLegion =
        selectedCanyonLegion ?? config.activeLegion ?? CANYON_LEGIONS[0];

    const assignedColor =
        getLegionColor(config, activeLegion);

    map.dataset.activeColor =
        assignedColor.toLowerCase();

    map.innerHTML = `
        <div class="canyon-lane canyon-lane-horizontal"></div>
        <div class="canyon-lane canyon-lane-vertical"></div>
        <div class="canyon-center-label">Center</div>
        ${CANYON_TEAMS.map(team => renderCanyonStart(team, assignedColor)).join("")}
        ${CANYON_OBJECTIVES.map(renderCanyonObjective).join("")}
    `;

    const summary =
        getCanyonRosterSummary();

    panel.innerHTML = `
        <div class="detail-card">
            <h2>${escapeHtml(activeLegion)} Canyon Plan</h2>
            <div class="badge ${assignedColor.toLowerCase()}">${assignedColor} Map</div>
            <p>
                ${summary.combatantCount} Canyon combatants assigned across four balanced teams.
                Leaders are the four highest troop-power combatants, then the remaining roster is
                distributed by team size and total power.
            </p>
            <h3>Primary Strategy</h3>
            <p>
                Keep each team responsible for its nearby lane first. Collapse toward center only
                after the local objective is stable, then return to lane coverage before the next
                rotation window.
            </p>
            <h3>Power Balance</h3>
            <p>
                Team totals are recalculated from current roster data every time the page renders.
                Update Canyon Assignment on Import to include or remove combatants.
            </p>
        </div>
    `;

    teamsContainer.innerHTML =
        getCanyonTeamAssignments()
            .map(renderCanyonTeam)
            .join("");
}

export function bindCanyonConfigControls(container) {
    const activeSelect =
        container.querySelector("#canyon-active-legion");

    const colorSelects =
        container.querySelectorAll("[data-canyon-legion-color]");

    const saveButton =
        container.querySelector("#save-canyon-config");

    if (!activeSelect || !saveButton) return;

    saveButton.addEventListener("click", async () => {
        const status =
            container.querySelector("#canyon-config-status");

        const nextConfig = {
            activeLegion: activeSelect.value,
            legionColors: Object.fromEntries(
                [...colorSelects].map(select => [
                    select.dataset.canyonLegionColor,
                    select.value
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
        getCanyonConfig();

    return `
        <div class="card canyon-config-card">
            <h2>Canyon Clash Settings</h2>
            <p>
                Set the current Canyon legion and map color assignment from WOS.
            </p>

            <label for="canyon-active-legion">Active Legion</label>
            <select id="canyon-active-legion">
                ${CANYON_LEGIONS.map(legion => `
                    <option value="${legion}" ${config.activeLegion === legion ? "selected" : ""}>
                        ${escapeHtml(legion)}
                    </option>
                `).join("")}
            </select>

            <div class="canyon-color-grid">
                ${CANYON_LEGIONS.map(legion => `
                    <label>
                        <span>${escapeHtml(legion)}</span>
                        <select data-canyon-legion-color="${legion}">
                            ${CANYON_COLORS.map(color => `
                                <option value="${color}" ${getLegionColor(config, legion) === color ? "selected" : ""}>
                                    ${color}
                                </option>
                            `).join("")}
                        </select>
                    </label>
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

function bindCanyonLegionSelector() {
    const select =
        document.getElementById("canyon-legion-select");

    if (!select) return;

    select.value =
        selectedCanyonLegion ?? getCanyonConfig().activeLegion ?? CANYON_LEGIONS[0];

    select.addEventListener("change", () => {
        selectedCanyonLegion = select.value;
        buildCanyonBattlefield();
    });
}

function renderCanyonStart(team, assignedColor) {
    const isActive =
        team.name === assignedColor;

    return `
        <div class="canyon-start ${team.className} ${isActive ? "active" : ""}">
            <strong>${escapeHtml(team.name)}</strong>
            <span>${escapeHtml(team.side)}</span>
        </div>
    `;
}

function renderCanyonObjective(objective) {
    return `
        <button
            type="button"
            class="canyon-objective ${objective.team.toLowerCase()}"
            style="left: ${objective.x}%; top: ${objective.y}%"
            title="${objective.strategy}">
            ${escapeHtml(objective.name)}
        </button>
    `;
}

function renderCanyonTeam(team) {
    return `
        <article class="canyon-team-card ${team.className}">
            <div class="canyon-team-heading">
                <h3>${escapeHtml(team.name)}</h3>
                <span>${team.totalPower.toLocaleString()}</span>
            </div>
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

function getLegionColor(config, legion) {
    return config.legionColors?.[legion] ?? "Blue";
}

function getTroopPower(combatant) {
    return combatant.troopPower ?? combatant.power ?? 0;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
