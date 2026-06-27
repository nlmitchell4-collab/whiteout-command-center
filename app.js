// Navigation
const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".nav-button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        pages.forEach(page => page.classList.remove("active"));
        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        document
            .getElementById(button.dataset.page)
            .classList.add("active");

    });

});

// ======================================
// Battlefield Engine
// ======================================

div.textContent = obj.name;

div.style.gridColumn = obj.location.col;
div.style.gridRow = obj.location.row;

div.onclick = () => {

    document.getElementById("objective-panel").innerHTML = `

        <h2>${obj.name}</h2>

        <p><strong>Team:</strong> ${obj.team}</p>

        <p><strong>Priority:</strong> ${obj.phase.opening}</p>

        <p>${obj.strategy.opening}</p>

        <hr>

        <p>${obj.why}</p>

    `;

};

const map=document.getElementById("battlefield-map");

objectives.forEach(obj=>{

    const div=document.createElement("div");

    div.className="objective";

    div.textContent=obj.name;

    div.style.gridColumn=obj.col;
    div.style.gridRow=obj.row;

    div.onclick=()=>{

        document.getElementById("objective-panel").innerHTML=`

            <h2>${obj.name}</h2>

            <p>
                Strategy details coming in the next commit.
            </p>

        `;

    };

    map.appendChild(div);

});