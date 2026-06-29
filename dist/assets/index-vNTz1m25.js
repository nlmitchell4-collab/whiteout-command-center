var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{}));async function r(e){let t=[];for(let n of e)t.push({filename:n.name,status:`Pending OCR`});return t}var i=e((()=>{}));function a(){let e=document.getElementById(`import-page`);e&&(e.innerHTML=`
        <div class="card">

            <h2>Import Combatants</h2>

            <p>
                Upload one or more Whiteout Survival Foundry registration screenshots.
            </p>

            <input
                id="combatant-upload"
                type="file"
                accept="image/*"
                multiple
            />

            <br><br>

            <button id="process-images" class="primary">
                Process Screenshots
            </button>

            <hr>

            <div id="import-results">
                No screenshots processed.
            </div>

        </div>
    `,document.getElementById(`process-images`).addEventListener(`click`,async()=>{let e=await r([...document.getElementById(`combatant-upload`).files]);document.getElementById(`import-results`).innerHTML=e.map(e=>`
                <div>
                    ${e.filename}
                    -
                    ${e.status}
                </div>
            `).join(``)}))}var o=e((()=>{i()}));function s(){return sessionStorage.getItem(`admin`)===`true`}function c(e){return e===l?(sessionStorage.setItem(`admin`,`true`),!0):!1}var l,u=e((()=>{l=`NWOFoundry2026`}));function d(e){let t=prompt(`Administrator Password`);t!==null&&(c(t)?e():alert(`Incorrect password.`))}var f=e((()=>{u()}));function p(){let e=document.querySelectorAll(`.page`),t=document.querySelectorAll(`.nav-button`);t.forEach(n=>{n.addEventListener(`click`,()=>{let r=()=>{e.forEach(e=>e.classList.remove(`active`)),t.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),document.getElementById(n.dataset.page).classList.add(`active`)};if(n.dataset.page===`import`&&!s()){d(r);return}r()})})}var m=e((()=>{u(),f()})),h=t((()=>{m(),document.addEventListener(`DOMContentLoaded`,()=>{p(),initializeChiefSelector(),initializePhaseSelector(),buildBattlefield(),renderSummary(),renderMyObjectives()})}));t((()=>{n(),h(),o(),document.addEventListener(`DOMContentLoaded`,()=>{a()})}))();