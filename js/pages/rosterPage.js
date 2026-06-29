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
        .sort((a, b) => b.power - a.power);

    container.innerHTML = `
        <div class="card">

            <h2>Combatant Roster</h2>

            <div id="roster-list"></div>

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
            <span>${player.power.toLocaleString()}</span>
            <span>Legion ${player.legion}</span>
        `;

        rosterList.appendChild(row);

    });

}