export function renderRosterPage(combatants = []) {

    const container = document.getElementById("roster-page");

    if (!container) return;

    if (combatants.length === 0) {

        container.innerHTML = `
            <div class="card">

                <h2>Combatant Roster</h2>

                <p>
                    No combatants have been imported yet.
                </p>

            </div>
        `;

        return;

    }

    const sortedCombatants = [...combatants]
        .sort((a, b) =>
            getTroopPower(b) - getTroopPower(a)
        );

    container.innerHTML = `
        <div class="card">

            <h2>Combatant Roster</h2>

            <div id="roster-list">
                <div class="roster-row roster-heading">
                    <span>Name</span>
                    <span>Troop Power</span>
                    <span>Foundry Assignment</span>
                    <span>Canyon Assignment</span>
                </div>
            </div>

        </div>
    `;

    const rosterList =
        document.getElementById("roster-list");

    sortedCombatants.forEach(player => {

        const row =
            document.createElement("div");

        row.className = "roster-row";

        row.innerHTML = `
            <span>${player.name}</span>
            <span>${getTroopPower(player).toLocaleString()}</span>
            <span>${player.foundryAssignment ?? player.assignment ?? ""}</span>
            <span>${player.canyonAssignment ?? ""}</span>
        `;

        rosterList.appendChild(row);

    });

}

function getTroopPower(combatant) {
    return combatant.troopPower ?? combatant.power ?? 0;
}
