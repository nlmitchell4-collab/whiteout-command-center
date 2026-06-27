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

const objectives = [

    {
        name:"Boiler",
        row:1,
        col:3
    },

    {
        name:"Prototype",
        row:3,
        col:1
    },

    {
        name:"Mercenary",
        row:3,
        col:3
    },

    {
        name:"Prototype",
        row:3,
        col:5
    },

    {
        name:"Imperial",
        row:4,
        col:3
    },

    {
        name:"Munitions",
        row:6,
        col:3
    },

    {
        name:"Transit",
        row:7,
        col:3
    }

];

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