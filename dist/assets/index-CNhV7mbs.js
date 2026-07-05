const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-D1jUrjqn.js","assets/index.esm-DTvuET_I.js","assets/index.esm-BmM_r-Dc.js"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,i=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},a=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),o=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},s=(i,a,o,s)=>{if(a&&typeof a==`object`||typeof a==`function`)for(var c=n(a),l=0,u=c.length,d;l<u;l++)d=c[l],!r.call(i,d)&&d!==o&&e(i,d,{get:(e=>a[e]).bind(null,d),enumerable:!(s=t(a,d))||s.enumerable});return i},c=t=>r.call(t,`module.exports`)?t[`module.exports`]:s(e({},`__esModule`,{value:!0}),t),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=i((()=>{}));function d(){return sessionStorage.getItem(`admin`)===`true`}function f(e){return e===p?(sessionStorage.setItem(`admin`,`true`),!0):!1}var p,m=i((()=>{p=`NWOFoundry2026`}));function h(e){let t=prompt(`Administrator Password`);t!==null&&(f(t)?e():alert(`Incorrect password.`))}var g=i((()=>{m()}));function _(){let e=document.querySelectorAll(`.page`),t=document.querySelectorAll(`.nav-button`);t.forEach(n=>{n.addEventListener(`click`,()=>{let r=()=>{e.forEach(e=>e.classList.remove(`active`)),t.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),document.getElementById(n.dataset.page).classList.add(`active`)};if(n.dataset.page===`import`&&!d()){h(r);return}r()})})}var v=i((()=>{m(),g()})),y,b=i((()=>{y=[{id:`nick`,displayName:`Nicholas`},{id:`kazuma`,displayName:`Kazuma`},{id:`nooch`,displayName:`Nooch`}]})),x,S=i((()=>{x=[]})),C,w=i((()=>{C={opening:{boiler:[{chief:`nick`,assignment:`Lead`},{chief:`kazuma`,assignment:`Support`}],"workshop-west":[{chief:`nooch`,assignment:`Lead`}],"prototype-west":[]},mid:{"prototype-west":[{chief:`nick`,assignment:`Lead`}],"prototype-east":[{chief:`kazuma`,assignment:`Lead`}],mercenary:[{chief:`nooch`,assignment:`Lead`}]},final:{imperial:[{chief:`nick`,assignment:`Support`}]}}})),T,E=i((()=>{T={strategyName:`Legion 2 Standard`,version:`0.2.0`,commander:`Kazuma`,eventDate:``,eventDuration:60,phases:{opening:{label:`0–15 Minutes`},mid:{label:`15–45 Minutes`},final:{label:`45 Minutes–End`}}}})),D,ee=i((()=>{D=[{id:`boiler`,name:`Boiler`,x:30,y:5,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Building capture speed buff.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Still valuable throughout the match.`},final:{priority:`Medium`,strategy:`Defend only if nearby.`,why:`Imperial takes priority.`}}},{id:`repair-north`,name:`North Repair`,x:58,y:5,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if available.`,why:`Extra points.`},mid:{priority:`Medium`,strategy:`Maintain if uncontested.`,why:`Secondary objective.`},final:{priority:`Low`,strategy:`Abandon if needed.`,why:`Imperial comes first.`}}},{id:`workshop-northwest`,name:`NW Workshop`,x:20,y:15,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture early.`,why:`Combat buffs.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Supports Prototype.`},final:{priority:`Medium`,strategy:`Hold if practical.`,why:`Secondary objective.`}}},{id:`mercenary`,name:`Mercenary Camp`,x:45,y:15,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`High`,strategy:`Capture immediately.`,why:`High point value.`},final:{priority:`Medium`,strategy:`Hold if uncontested.`,why:`Support objective.`}}},{id:`workshop-northeast`,name:`NE Workshop`,x:70,y:20,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture early.`,why:`Combat buffs.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Supports Prototype.`},final:{priority:`Medium`,strategy:`Hold if practical.`,why:`Secondary objective.`}}},{id:`prototype-west`,name:`West Prototype`,x:20,y:30,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Major scoring objective.`},mid:{priority:`Critical`,strategy:`Hold at all costs.`,why:`Excellent point generation.`},final:{priority:`Critical`,strategy:`Never abandon unless ordered.`,why:`Still one of the highest priorities.`}}},{id:`repair-west`,name:`West Repair`,x:10,y:40,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Medium`,strategy:`Maintain if uncontested.`,why:`Useful support.`},final:{priority:`Low`,strategy:`Ignore if needed.`,why:`Imperial first.`}}},{id:`imperial`,name:`Imperial Institute`,x:45,y:35,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`Low`,strategy:`Prepare rotation.`,why:`Unlocks in Final.`},final:{priority:`Critical`,strategy:`Primary objective.`,why:`Highest value objective.`}}},{id:`repair-east`,name:`East Repair`,x:80,y:35,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Medium`,strategy:`Maintain if uncontested.`,why:`Useful support.`},final:{priority:`Low`,strategy:`Ignore if needed.`,why:`Imperial first.`}}},{id:`prototype-east`,name:`East Prototype`,x:70,y:45,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Major scoring objective.`},mid:{priority:`Critical`,strategy:`Hold at all costs.`,why:`Excellent point generation.`},final:{priority:`Critical`,strategy:`Never abandon unless ordered.`,why:`Still one of the highest priorities.`}}},{id:`workshop-southwest`,name:`SW Workshop`,x:26,y:55,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture early.`,why:`Combat buffs.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Supports Transit.`},final:{priority:`Medium`,strategy:`Hold if practical.`,why:`Secondary objective.`}}},{id:`workshop-southeast`,name:`SE Workshop`,x:61,y:60,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture early.`,why:`Combat buffs.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Supports Transit.`},final:{priority:`Medium`,strategy:`Hold if practical.`,why:`Secondary objective.`}}},{id:`munitions`,name:`Munitions Factory`,x:45,y:60,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`Critical`,strategy:`Capture immediately.`,why:`Powerful combat buff.`},final:{priority:`High`,strategy:`Maintain control.`,why:`Strong late-game buff.`}}},{id:`repair-south`,name:`South Repair`,x:31,y:75,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Medium`,strategy:`Maintain if uncontested.`,why:`Useful support.`},final:{priority:`Low`,strategy:`Ignore if needed.`,why:`Imperial first.`}}},{id:`transit`,name:`Transit Station`,x:60,y:75,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Major mobility advantage.`},mid:{priority:`Critical`,strategy:`Maintain control.`,why:`Fast rotations.`},final:{priority:`High`,strategy:`Support Imperial.`,why:`Quick reinforcement.`}}}]})),O,k,A,j,te=i((()=>{O=`modulepreload`,k=function(e){return`/`+e},A={},j=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=k(t,n),t=s(t),t in A)return;A[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:O,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}}));function M(){return ne().length===0}function ne(){return Object.entries(ae).filter(([,e])=>!e).map(([e])=>e)}function re(){return{configured:M(),missingKeys:ne()}}async function ie(){if(!M())return null;if(!F){let{initializeApp:e}=await j(async()=>{let{initializeApp:e}=await import(`./index.esm-D1jUrjqn.js`);return{initializeApp:e}},__vite__mapDeps([0,1]));F=e(P)}return F}async function N(){if(!M())return null;if(!I){let[e,{getFirestore:t}]=await Promise.all([ie(),j(()=>import(`./index.esm-BmM_r-Dc.js`),__vite__mapDeps([2,1]))]);I=t(e)}return I}var P,ae,F,I,oe=i((()=>{te(),P={apiKey:`AIzaSyDnOfdz8WQsvxr5oJaFzS8EdNJtdsQYgqQ`,authDomain:`wos-command-center.firebaseapp.com`,projectId:`wos-command-center`,storageBucket:`wos-command-center.firebasestorage.app`,messagingSenderId:`853155306331`,appId:`1:853155306331:web:f37dc257fa6950d0f2d87e`},ae={VITE_FIREBASE_API_KEY:P.apiKey,VITE_FIREBASE_PROJECT_ID:P.projectId,VITE_FIREBASE_APP_ID:P.appId},F=null,I=null}));function se(){let e=globalThis.location?.hostname;return e===`localhost`||e===`127.0.0.1`||e===``}function ce(e,t){if(!e.exists())return B[t];let n=e.data();return Array.isArray(B[t])?Array.isArray(n.items)?n.items:B[t]:n.value??n}function le(e,t){return Promise.race([e,new Promise((e,n)=>{setTimeout(()=>n(Error(t)),be)})])}function ue(e){return e?.code===`unavailable`||e?.message?.toLowerCase().includes(`client is offline`)||e?.message?.toLowerCase().includes(`offline`)}function de(e){return ue(e)?Error(`Combatants were not saved. Firestore is configured, but the app cannot reach Firebase from this browser. Check network access, Firestore setup, and Firebase Hosting env build settings.`):Error(`Combatants were not saved to Firebase. ${e.message}`)}async function fe(){if(!M()){if(!se()){let e=re();console.warn(`Firebase is not configured. Using bundled local data fallback.`,e.missingKeys)}return B}try{let[e,{doc:t,getDoc:n}]=await Promise.all([N(),j(()=>import(`./index.esm-BmM_r-Dc.js`),__vite__mapDeps([2,1]))]);if(!e)return B;let r=await Promise.all(Object.entries(ye).map(async([r,i])=>[r,ce(await le(n(t(e,ve,i)),`Timed out loading ${i} from Firebase.`),r)]));B={...B,...Object.fromEntries(r)}}catch(e){console.warn(`Using bundled command data fallback.`,e)}return B}async function pe(e,t){let n=ye[e];if(!n)throw Error(`Unknown command data key: ${e}`);if(!M()){if(!se()){let e=re();throw Error(`Firebase is not configured. Missing: ${e.missingKeys.join(`, `)}. Production combatant changes cannot be saved.`)}return B={...B,[e]:t},B[e]}let[r,{doc:i,serverTimestamp:a,setDoc:o}]=await Promise.all([N(),j(()=>import(`./index.esm-BmM_r-Dc.js`),__vite__mapDeps([2,1]))]);if(!r)return B={...B,[e]:t},B[e];let s=Array.isArray(t)?{items:t}:{value:t};try{await le(o(i(r,ve,n),{...s,updatedAt:a()},{merge:!0}),`Timed out saving ${n} to Firebase.`)}catch(e){throw de(e)}return B={...B,[e]:t},B[e]}function me(){return B.chiefs}function he(){return B.combatants}function L(){let e=he();return e.length>0?e.map(e=>({...e,displayName:e.name,source:`combatants`})):me().map(e=>({...e,name:e.displayName,source:`chiefs`}))}function R(e){return L().find(t=>t.id===e)}function ge(){return B.foundryAssignments}function _e(){return B.foundryConfig}function z(){return B.foundryObjectives}var B,ve,ye,be,V=i((()=>{b(),S(),w(),E(),ee(),oe(),te(),B={chiefs:y,combatants:x,foundryAssignments:C,foundryConfig:T,foundryObjectives:D},ve=`commandData`,ye={chiefs:`chiefs`,combatants:`combatants`,foundryAssignments:`foundryAssignments`,foundryConfig:`foundryConfig`,foundryObjectives:`foundryObjectives`},be=8e3}));function xe(e,t){if(!e)return[];let n=[],r=we(e,t);r.length>0&&n.push(...r);let i=ge()[t];return i&&Object.entries(i).forEach(([t,r])=>{r.forEach(r=>{r.chief===e&&n.push({objectiveId:t,assignment:r.assignment})})}),n}function Se(e,t,n){return xe(e,t).find(e=>e.objectiveId===n)}function Ce(e,t){return L().filter(e=>e.source===`combatants`).map(e=>({combatant:e,assignments:we(e.id,t)})).flatMap(t=>t.assignments.filter(t=>t.objectiveId===e).map(e=>({combatant:t.combatant,assignment:e})))}function we(e,t){let n=R(e);if(!n||n.source!==`combatants`)return[];let r=n.assignment?.trim();if(!r||H(r)===`no engagement`)return[];let i=Te(r);return i?Ee(n,i,t).map((e,t)=>({objectiveId:e,assignment:`${r} primary ${t+1}`,combatant:n})):[{objectiveId:Ne(r),assignment:r,combatant:n}]}function Te(e){let t=H(e);return t===`legion 1`?1:t===`legion 2`?2:null}function Ee(e,t,n){let r=n??`opening`,i=De(t,r);if(i.length<=Fe)return i.map(e=>e.id);let a=Oe(i,r);return a[Me(e,t)%a.length].objectives.map(e=>e.id)}function De(e,t){return(Pe[t]?.[e]??[]).map(e=>z().find(t=>t.id===e)).filter(Boolean)}function Oe(e,t){let n=[];for(let r=0;r<e.length-2;r+=1)for(let i=r+1;i<e.length-1;i+=1)for(let a=i+1;a<e.length;a+=1){let o=[e[r],e[i],e[a]];n.push({objectives:o,score:ke(o,t)})}return n.sort((e,t)=>t.score-e.score)}function ke(e,t){let n=e.reduce((e,n)=>e+Ae(n,t),0),r=je(e[0],e[1])+je(e[0],e[2])+je(e[1],e[2]);return n*100-r}function Ae(e,t){return Ie[e.phases[t]?.priority?.toLowerCase()??`low`]??Ie.low}function je(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function Me(e,t){let n=L().filter(e=>e.source===`combatants`&&e.legion===t&&H(e.assignment)!==`no engagement`).sort((e,t)=>(t.power??0)-(e.power??0)||e.displayName.localeCompare(t.displayName));return Math.max(0,n.findIndex(t=>t.id===e.id))}function Ne(e){let t=H(e);return z().find(e=>H(e.id)===t||H(e.name)===t||t.includes(H(e.name)))?.id??null}function H(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim()}var Pe,Fe,Ie,Le=i((()=>{V(),Pe={opening:{1:[`boiler`,`workshop-northwest`,`prototype-west`,`repair-west`,`workshop-southwest`,`repair-south`,`transit`],2:[`boiler`,`repair-north`,`workshop-northeast`,`prototype-east`,`repair-east`,`workshop-southeast`,`transit`]},mid:{1:[`boiler`,`workshop-northwest`,`prototype-west`,`repair-west`,`workshop-southwest`,`repair-south`,`mercenary`,`munitions`,`transit`],2:[`boiler`,`repair-north`,`workshop-northeast`,`prototype-east`,`repair-east`,`workshop-southeast`,`mercenary`,`munitions`,`transit`]},final:{1:[`prototype-west`,`workshop-southwest`,`repair-west`,`repair-south`,`imperial`,`transit`],2:[`prototype-east`,`workshop-southeast`,`repair-east`,`repair-north`,`imperial`,`transit`]}},Fe=3,Ie={critical:4,high:3,medium:2,low:1}}));function Re(){let e=document.getElementById(`my-objectives`),t=Qe();if(!e||(e.innerHTML=``,!t))return;let n=xe(t,Ue());if(n.length===0){e.innerHTML=`<p>No assignments this phase.</p>`;return}n.forEach(t=>{let n=z().find(e=>e.id===t.objectiveId),r=document.createElement(`div`);r.className=`assignment-card`,r.innerHTML=`

            <strong>${n?n.name:`General Assignment`}</strong>

            <div>${t.assignment}</div>

        `,r.onclick=()=>{n&&(We(n),U())},e.appendChild(r)})}var ze=i((()=>{V(),Y(),Le(),Xe()}));function Be(){let e=document.getElementById(`assignment-summary`);if(!e)return;let t=Qe(),n=$e();if(!t){e.innerHTML=`
            <div class="summary-card">
                <h2>Legion ${n}</h2>
                <h3>${_e().phases[Ue()].label}</h3>
            </div>
        `;return}let r=R(t);if(!r){e.innerHTML=``;return}let i=Ue(),a=xe(t,i),o=_e().phases[i].label;e.innerHTML=`

        <div class="summary-card">

            <h2>${r.displayName}</h2>

            ${Ve(r)}

            <h3>${o}</h3>

            <div id="summary-list"></div>

        </div>

    `;let s=document.getElementById(`summary-list`);a.forEach(e=>{let t=z().find(t=>t.id===e.objectiveId);s.innerHTML+=`

            <div class="summary-item">

                <strong>${t?t.name:`General Assignment`}</strong><br>

                ${e.assignment}

            </div>

        `})}function Ve(e){return e.source===`combatants`?`
        <p>
            ${e.power?`${e.power.toLocaleString()} power`:``}
            ${e.legion?` | Legion ${e.legion}`:``}
        </p>
    `:``}var He=i((()=>{V(),Y(),Le(),Xe()}));function Ue(){return W}function We(e){G=e}function Ge(e){return{critical:`🔴`,high:`🟠`,medium:`🟡`,low:`⚪`}[e.toLowerCase()]||`⚪`}function Ke(e){let t={opening:0,mid:1,final:2};return t[W]>=t[e.unlockPhase]}function U(){let e=document.getElementById(`battlefield-map`);if(!e)return;e.innerHTML=``;let t=Qe(),n=xe(t,W);z().forEach(r=>{let i=document.createElement(`div`);i.dataset.id=r.id,i.className=`objective`,i.style.left=r.x+`%`,i.style.top=r.y+`%`;let a=r.phases[W];i.classList.add(a.priority.toLowerCase());let o=Ke(r);if(o||i.classList.add(`locked`),t){let e=n.some(e=>e.objectiveId===r.id);i.classList.add(e?`assigned`:`unassigned`)}G&&G.id===r.id&&i.classList.add(`selected`),i.innerHTML=`

            <div class="objective-priority">

                ${o?Ge(a.priority):`🔒`}

            </div>

            <div class="objective-name">

                ${r.name}

            </div>

        `,i.onclick=()=>{G=r,U()},e.appendChild(i)}),G||=z()[0],qe(G),Be(),Re()}function qe(e){let t=document.getElementById(`objective-panel`);if(!t||!e)return;let n=e.phases[W],r=Se(Qe(),W,e.id),i=Ce(e.id,W);t.innerHTML=`

        <div class="detail-card">

            <h2>

                ${e.name}

            </h2>

            <div class="badge ${n.priority.toLowerCase()}">

                ${n.priority}

            </div>

            <h3>Your Assignment</h3>

            <p>

                ${r?r.assignment:`Not Assigned`}

            </p>

            <h3>Assigned Combatants</h3>

            ${Je(i)}

            <h3>Strategy</h3>

            <p>

                ${n.strategy}

            </p>

            <h3>Why</h3>

            <p>

                ${n.why}

            </p>

        </div>

    `}function Je(e){return e.length===0?`<p>No combatants assigned.</p>`:`
        <div class="objective-assignment-list">
            ${e.map(({combatant:e,assignment:t})=>`
                <div class="objective-assignment-row">
                    <strong>${e.displayName}</strong>
                    <span>${e.power?e.power.toLocaleString():``}</span>
                    <span>${e.legion?`Legion ${e.legion}`:``}</span>
                    <small>${t.assignment}</small>
                </div>
            `).join(``)}
        </div>
    `}function Ye(){let e=document.querySelectorAll(`.phase-button`);e.forEach(t=>{t.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),W=t.dataset.phase,U()}})}var W,G,Xe=i((()=>{V(),Y(),Le(),ze(),He(),W=`opening`,G=null}));function Ze(){let e=document.getElementById(`chief-search`),t=document.getElementById(`chief-list`);if(!e||!t)return;let n=localStorage.getItem(`chief`);if(n){let t=L().find(e=>e.id===n);t&&(q=t.id,e.value=t.displayName)}K(),e.addEventListener(`focus`,()=>{et(e.value)}),e.addEventListener(`input`,()=>{et(e.value),L().find(t=>t.displayName.toLowerCase()===e.value.toLowerCase())||(q=null,localStorage.removeItem(`chief`),K(),U())}),e.addEventListener(`change`,()=>{let t=L().find(t=>t.displayName.toLowerCase()===e.value.toLowerCase());if(!t){q=null,localStorage.removeItem(`chief`),K(),U();return}q=t.id,localStorage.setItem(`chief`,t.id),K(),U(),nt()}),document.addEventListener(`click`,n=>{n.target===e||t.contains(n.target)||nt()})}function Qe(){return q}function $e(){let e=R(q);return e?.legion?e.legion:Number.isFinite(J)?J:1}function K(){let e=document.getElementById(`legion-context`);if(!e)return;let t=R(q);if(t){e.innerHTML=`
            <label>Legion</label>
            <div class="legion-pill">
                ${t.legion?`Legion ${t.legion}`:`Unassigned`}
            </div>
        `;return}let n=Number.isFinite(J)?J:1;e.innerHTML=`
        <label for="legion-select">
            Legion
        </label>

        <select id="legion-select">
            <option value="1" ${n===1?`selected`:``}>
                Legion 1
            </option>
            <option value="2" ${n===2?`selected`:``}>
                Legion 2
            </option>
        </select>
    `,e.querySelector(`#legion-select`).addEventListener(`change`,e=>{J=Number.parseInt(e.target.value,10),localStorage.setItem(`legion`,String(J)),U()})}function et(e){let t=document.getElementById(`chief-list`);if(!t)return;let n=e.trim().toLowerCase(),r=L().slice().sort((e,t)=>e.displayName.localeCompare(t.displayName)).filter(e=>!n||e.displayName.toLowerCase().includes(n));if(r.length===0){t.innerHTML=`<div class="chief-result-empty">No chiefs found.</div>`,t.hidden=!1;return}t.innerHTML=r.map(e=>`
            <button
                type="button"
                class="chief-result"
                data-chief-id="${e.id}">
                <span>${rt(e.displayName)}</span>
                <small>
                    ${e.legion?`Legion ${e.legion}`:``}
                    ${e.power?` ${e.power.toLocaleString()}`:``}
                </small>
            </button>
        `).join(``),t.querySelectorAll(`[data-chief-id]`).forEach(e=>{e.addEventListener(`click`,()=>{tt(e.dataset.chiefId)})}),t.hidden=!1}function tt(e){let t=R(e),n=document.getElementById(`chief-search`);!t||!n||(q=t.id,n.value=t.displayName,localStorage.setItem(`chief`,t.id),K(),nt(),U())}function nt(){let e=document.getElementById(`chief-list`);e&&(e.hidden=!0)}function rt(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}var q,J,Y=i((()=>{V(),Xe(),q=null,J=Number.parseInt(localStorage.getItem(`legion`)??`1`,10)})),it=a(((e,t)=>{var n=function(e){var t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i,a=typeof Symbol==`function`?Symbol:{},o=a.iterator||`@@iterator`,s=a.asyncIterator||`@@asyncIterator`,c=a.toStringTag||`@@toStringTag`;function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},``)}catch{l=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var a=t&&t.prototype instanceof _?t:_,o=Object.create(a.prototype);return r(o,`_invoke`,{value:E(e,n,new k(i||[]))}),o}e.wrap=u;function d(e,t,n){try{return{type:`normal`,arg:e.call(t,n)}}catch(e){return{type:`throw`,arg:e}}}var f=`suspendedStart`,p=`suspendedYield`,m=`executing`,h=`completed`,g={};function _(){}function v(){}function y(){}var b={};l(b,o,function(){return this});var x=Object.getPrototypeOf,S=x&&x(x(A([])));S&&S!==t&&n.call(S,o)&&(b=S);var C=y.prototype=_.prototype=Object.create(b);v.prototype=y,r(C,`constructor`,{value:y,configurable:!0}),r(y,`constructor`,{value:v,configurable:!0}),v.displayName=l(y,c,`GeneratorFunction`);function w(e){[`next`,`throw`,`return`].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}e.isGeneratorFunction=function(e){var t=typeof e==`function`&&e.constructor;return t?t===v||(t.displayName||t.name)===`GeneratorFunction`:!1},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,`GeneratorFunction`)),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}};function T(e,t){function i(r,a,o,s){var c=d(e[r],e,a);if(c.type===`throw`)s(c.arg);else{var l=c.arg,u=l.value;return u&&typeof u==`object`&&n.call(u,`__await`)?t.resolve(u.__await).then(function(e){i(`next`,e,o,s)},function(e){i(`throw`,e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return i(`throw`,e,o,s)})}}var a;function o(e,n){function r(){return new t(function(t,r){i(e,n,t,r)})}return a=a?a.then(r,r):r()}r(this,`_invoke`,{value:o})}w(T.prototype),l(T.prototype,s,function(){return this}),e.AsyncIterator=T,e.async=function(t,n,r,i,a){a===void 0&&(a=Promise);var o=new T(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})};function E(e,t,n){var r=f;return function(i,a){if(r===m)throw Error(`Generator is already running`);if(r===h){if(i===`throw`)throw a;return j()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=D(o,n);if(s){if(s===g)continue;return s}}if(n.method===`next`)n.sent=n._sent=n.arg;else if(n.method===`throw`){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else n.method===`return`&&n.abrupt(`return`,n.arg);r=m;var c=d(e,t,n);if(c.type===`normal`){if(r=n.done?h:p,c.arg===g)continue;return{value:c.arg,done:n.done}}else c.type===`throw`&&(r=h,n.method=`throw`,n.arg=c.arg)}}}function D(e,t){var n=t.method,r=e.iterator[n];if(r===i)return t.delegate=null,n===`throw`&&e.iterator.return&&(t.method=`return`,t.arg=i,D(e,t),t.method===`throw`)||n!==`return`&&(t.method=`throw`,t.arg=TypeError(`The iterator does not provide a '`+n+`' method`)),g;var a=d(r,e.iterator,t.arg);if(a.type===`throw`)return t.method=`throw`,t.arg=a.arg,t.delegate=null,g;var o=a.arg;if(!o)return t.method=`throw`,t.arg=TypeError(`iterator result is not an object`),t.delegate=null,g;if(o.done)t[e.resultName]=o.value,t.next=e.nextLoc,t.method!==`return`&&(t.method=`next`,t.arg=i);else return o;return t.delegate=null,g}w(C),l(C,c,`Generator`),l(C,o,function(){return this}),l(C,`toString`,function(){return`[object Generator]`});function ee(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type=`normal`,delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:`root`}],e.forEach(ee,this),this.reset(!0)}e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}};function A(e){if(e){var t=e[o];if(t)return t.call(e);if(typeof e.next==`function`)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=i,t.done=!0,t};return a.next=a}}return{next:j}}e.values=A;function j(){return{value:i,done:!0}}return k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method=`next`,this.arg=i,this.tryEntries.forEach(O),!e)for(var t in this)t.charAt(0)===`t`&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type===`throw`)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type=`throw`,s.arg=e,t.next=n,r&&(t.method=`next`,t.arg=i),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if(o.tryLoc===`root`)return r(`end`);if(o.tryLoc<=this.prev){var c=n.call(o,`catchLoc`),l=n.call(o,`finallyLoc`);if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else throw Error(`try statement without catch or finally`)}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,`finallyLoc`)&&this.prev<i.finallyLoc){var a=i;break}}a&&(e===`break`||e===`continue`)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method=`next`,this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if(e.type===`throw`)throw e.arg;return e.type===`break`||e.type===`continue`?this.next=e.arg:e.type===`return`?(this.rval=this.arg=e.arg,this.method=`return`,this.next=`end`):e.type===`normal`&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if(r.type===`throw`){var i=r.arg;O(n)}return i}}throw Error(`illegal catch attempt`)},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},this.method===`next`&&(this.arg=i),g}},e}(typeof t==`object`?t.exports:{});try{regeneratorRuntime=n}catch{typeof globalThis==`object`?globalThis.regeneratorRuntime=n:Function(`r`,`regeneratorRuntime = r`)(n)}})),at=a(((e,t)=>{t.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`})),ot=a(((e,t)=>{var n=at(),r=0;t.exports=({id:e,action:t,payload:i={}})=>{let a=e;return a===void 0&&(a=n(`Job`,r),r+=1),{id:a,action:t,payload:i}}})),st=a((e=>{var t=!1;e.logging=t,e.setLogging=e=>{t=e},e.log=(...n)=>t?console.log.apply(e,n):null})),ct=a(((e,t)=>{var n=ot(),{log:r}=st(),i=at(),a=0;t.exports=()=>{let t=i(`Scheduler`,a),o={},s={},c=[];a+=1;let l=()=>c.length,u=()=>Object.keys(o).length,d=()=>{if(c.length!==0){let e=Object.keys(o);for(let t=0;t<e.length;t+=1)if(s[e[t]]===void 0){c[0](o[e[t]]);break}}},f=(i,a)=>new Promise((o,l)=>{let u=n({action:i,payload:a});c.push(async t=>{c.shift(),s[t.id]=u;try{o(await t[i].apply(e,[...a,u.id]))}catch(e){l(e)}finally{delete s[t.id],d()}}),r(`[${t}]: Add ${u.id} to JobQueue`),r(`[${t}]: JobQueue length=${c.length}`),d()});return{addWorker:e=>(o[e.id]=e,r(`[${t}]: Add ${e.id}`),r(`[${t}]: Number of workers=${u()}`),d(),e.id),addJob:async(e,...n)=>{if(u()===0)throw Error(`[${t}]: You need to have at least one worker before adding jobs`);return f(e,n)},terminate:async()=>{Object.keys(o).forEach(async e=>{await o[e].terminate()}),c=[]},getQueueLen:l,getNumWorkers:u}}})),lt=a(((e,t)=>{t.exports=e=>{let t={};return typeof WorkerGlobalScope<`u`?t.type=`webworker`:typeof document==`object`?t.type=`browser`:typeof process==`object`&&typeof l==`function`&&(t.type=`node`),e===void 0?t:t[e]}})),ut=a(((e,t)=>{var n=lt()(`type`)===`browser`?e=>new URL(e,window.location.href).href:e=>e;t.exports=e=>{let t={...e};return[`corePath`,`workerPath`,`langPath`].forEach(r=>{e[r]&&(t[r]=n(t[r]))}),t}})),dt=a(((e,t)=>{t.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}})),ft=o({author:()=>``,browser:()=>St,bugs:()=>kt,collective:()=>jt,contributors:()=>Ct,default:()=>Mt,dependencies:()=>Et,description:()=>ht,devDependencies:()=>Tt,homepage:()=>At,jsdelivr:()=>bt,license:()=>wt,main:()=>gt,name:()=>pt,overrides:()=>Dt,repository:()=>Ot,scripts:()=>xt,type:()=>_t,types:()=>vt,unpkg:()=>yt,version:()=>mt}),pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt=i((()=>{pt=`tesseract.js`,mt=`7.0.0`,ht=`Pure Javascript Multilingual OCR`,gt=`src/index.js`,_t=`commonjs`,vt=`src/index.d.ts`,yt=`dist/tesseract.min.js`,bt=`dist/tesseract.min.js`,xt={start:`node scripts/server.js`,build:`rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs`,"profile:tesseract":`webpack-bundle-analyzer dist/tesseract-stats.json`,"profile:worker":`webpack-bundle-analyzer dist/worker-stats.json`,prepublishOnly:`npm run build`,wait:`rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js`,test:`npm-run-all -p -r start test:all`,"test:all":`npm-run-all wait test:browser test:node:all`,"test:browser":`karma start karma.conf.js`,"test:node":`nyc mocha --exit --bail --require ./scripts/test-helper.mjs`,"test:node:all":`npm run test:node -- ./tests/*.test.mjs`,lint:`eslint src`,"lint:fix":`eslint --fix src`,postinstall:`opencollective-postinstall || true`},St={"./src/worker/node/index.js":`./src/worker/browser/index.js`},Ct=[`jeromewu`],wt=`Apache-2.0`,Tt={"@babel/core":`^7.21.4`,"@babel/eslint-parser":`^7.21.3`,"@babel/preset-env":`^7.21.4`,"@rollup/plugin-commonjs":`^24.1.0`,acorn:`^8.8.2`,"babel-loader":`^9.1.2`,buffer:`^6.0.3`,cors:`^2.8.5`,eslint:`^7.32.0`,"eslint-config-airbnb-base":`^14.2.1`,"eslint-plugin-import":`^2.27.5`,"expect.js":`^0.3.1`,express:`^4.18.2`,mocha:`^10.2.0`,"npm-run-all":`^4.1.5`,karma:`^6.4.2`,"karma-chrome-launcher":`^3.2.0`,"karma-firefox-launcher":`^2.1.2`,"karma-mocha":`^2.0.1`,"karma-webpack":`^5.0.0`,nyc:`^15.1.0`,rimraf:`^5.0.0`,rollup:`^3.20.7`,"wait-on":`^7.0.1`,webpack:`^5.79.0`,"webpack-bundle-analyzer":`^4.8.0`,"webpack-cli":`^5.0.1`,"webpack-dev-middleware":`^6.0.2`,"rollup-plugin-sourcemaps":`^0.6.3`},Et={"bmp-js":`^0.1.0`,"idb-keyval":`^6.2.0`,"is-url":`^1.2.4`,"node-fetch":`^2.6.9`,"opencollective-postinstall":`^2.0.3`,"regenerator-runtime":`^0.13.3`,"tesseract.js-core":`^7.0.0`,"wasm-feature-detect":`^1.8.0`,zlibjs:`^0.3.1`},Dt={"@rollup/pluginutils":`^5.0.2`},Ot={type:`git`,url:`https://github.com/naptha/tesseract.js.git`},kt={url:`https://github.com/naptha/tesseract.js/issues`},At=`https://github.com/naptha/tesseract.js`,jt={type:`opencollective`,url:`https://opencollective.com/tesseractjs`},Mt={name:pt,version:mt,description:ht,main:gt,type:_t,types:vt,unpkg:yt,jsdelivr:bt,scripts:xt,browser:St,author:``,contributors:Ct,license:wt,devDependencies:Tt,dependencies:Et,overrides:Dt,repository:Ot,bugs:kt,homepage:At,collective:jt}})),Pt=a(((e,t)=>{t.exports={workerBlobURL:!0,logger:()=>{}}})),Ft=a(((e,t)=>{var n=(Nt(),c(ft).default).version;t.exports={...Pt(),workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${n}/dist/worker.min.js`}})),It=a(((e,t)=>{t.exports=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){let t=new Blob([`importScripts("${e}");`],{type:`application/javascript`});n=new Worker(URL.createObjectURL(t))}else n=new Worker(e);return n}})),Lt=a(((e,t)=>{t.exports=e=>{e.terminate()}})),Rt=a(((e,t)=>{t.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}})),zt=a(((e,t)=>{t.exports=async(e,t)=>{e.postMessage(t)}})),Bt=a(((e,t)=>{var n=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:e}}})=>{n(Error(`File could not be read! Code=${e}`))},r.readAsArrayBuffer(e)}),r=async e=>{let t=e;return e===void 0?`undefined`:(typeof e==`string`?t=/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(`,`)[1]).split(``).map(e=>e.charCodeAt(0)):await(await fetch(e)).arrayBuffer():typeof HTMLElement<`u`&&e instanceof HTMLElement?(e.tagName===`IMG`&&(t=await r(e.src)),e.tagName===`VIDEO`&&(t=await r(e.poster)),e.tagName===`CANVAS`&&await new Promise(r=>{e.toBlob(async e=>{t=await n(e),r()})})):typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?t=await n(await e.convertToBlob()):(e instanceof File||e instanceof Blob)&&(t=await n(e)),new Uint8Array(t))};t.exports=r})),Vt=a(((e,t)=>{t.exports={defaultOptions:Ft(),spawnWorker:It(),terminateWorker:Lt(),onMessage:Rt(),send:zt(),loadImage:Bt()}})),Ht=a(((e,t)=>{var n=ut(),r=ot(),{log:i}=st(),a=at(),o=dt(),{defaultOptions:s,spawnWorker:c,terminateWorker:l,onMessage:u,loadImage:d,send:f}=Vt(),p=0;t.exports=async(e=`eng`,t=o.LSTM_ONLY,m={},h={})=>{let g=a(`Worker`,p),{logger:_,errorHandler:v,...y}=n({...s,...m}),b={},x=typeof e==`string`?e.split(`+`):e,S=t,C=h,w=[o.DEFAULT,o.LSTM_ONLY].includes(t)&&!y.legacyCore,T,E,D=new Promise((e,t)=>{E=e,T=t}),ee=e=>{T(e.message)},O=c(y);O.onerror=ee,p+=1;let k=({id:e,action:t,payload:n})=>new Promise((r,a)=>{i(`[${g}]: Start ${e}, action=${t}`);let o=`${t}-${e}`;b[o]={resolve:r,reject:a},f(O,{workerId:g,jobId:e,action:t,payload:n})}),A=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),j=e=>k(r({id:e,action:`load`,payload:{options:{lstmOnly:w,corePath:y.corePath,logging:y.logging}}})),te=(e,t,n)=>k(r({id:n,action:`FS`,payload:{method:`writeFile`,args:[e,t]}})),M=(e,t)=>k(r({id:t,action:`FS`,payload:{method:`readFile`,args:[e,{encoding:`utf8`}]}})),ne=(e,t)=>k(r({id:t,action:`FS`,payload:{method:`unlink`,args:[e]}})),re=(e,t,n)=>k(r({id:n,action:`FS`,payload:{method:e,args:t}})),ie=(e,t)=>k(r({id:t,action:`loadLanguage`,payload:{langs:e,options:{langPath:y.langPath,dataPath:y.dataPath,cachePath:y.cachePath,cacheMethod:y.cacheMethod,gzip:y.gzip,lstmOnly:[o.DEFAULT,o.LSTM_ONLY].includes(S)&&!y.legacyLang}}})),N=(e,t,n,i)=>k(r({id:i,action:`initialize`,payload:{langs:e,oem:t,config:n}})),P=(e=`eng`,t,n,r)=>{if(w&&[o.TESSERACT_ONLY,o.TESSERACT_LSTM_COMBINED].includes(t))throw Error(`Legacy model requested but code missing.`);let i=t||S;S=i;let a=n||C;C=a;let s=(typeof e==`string`?e.split(`+`):e).filter(e=>!x.includes(e));return x.push(...s),s.length>0?ie(s,r).then(()=>N(e,i,a,r)):N(e,i,a,r)},ae=(e={},t)=>k(r({id:t,action:`setParameters`,payload:{params:e}})),F=async(e,t={},n={text:!0},i)=>k(r({id:i,action:`recognize`,payload:{image:await d(e),options:t,output:n}})),I=async(e,t)=>{if(w)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return k(r({id:t,action:`detect`,payload:{image:await d(e)}}))},oe=async()=>(O!==null&&(l(O),O=null),Promise.resolve());u(O,({workerId:e,jobId:t,status:n,action:r,data:a})=>{let o=`${r}-${t}`;if(n===`resolve`)i(`[${e}]: Complete ${t}`),b[o].resolve({jobId:t,data:a}),delete b[o];else if(n===`reject`)if(b[o].reject(a),delete b[o],r===`load`&&T(a),v)v(a);else throw Error(a);else n===`progress`&&_({...a,userJobId:t})});let se={id:g,worker:O,load:A,writeText:te,readText:M,removeFile:ne,FS:re,reinitialize:P,setParameters:ae,recognize:F,detect:I,terminate:oe};return j().then(()=>ie(e)).then(()=>N(e,t,h)).then(()=>E(se)).catch(()=>{}),D}})),Ut=a(((e,t)=>{var n=Ht();t.exports={recognize:async(e,t,r)=>{let i=await n(t,1,r);return i.recognize(e).finally(async()=>{await i.terminate()})},detect:async(e,t)=>{let r=await n(`osd`,0,t);return r.detect(e).finally(async()=>{await r.terminate()})}}})),Wt=a(((e,t)=>{t.exports={AFR:`afr`,AMH:`amh`,ARA:`ara`,ASM:`asm`,AZE:`aze`,AZE_CYRL:`aze_cyrl`,BEL:`bel`,BEN:`ben`,BOD:`bod`,BOS:`bos`,BUL:`bul`,CAT:`cat`,CEB:`ceb`,CES:`ces`,CHI_SIM:`chi_sim`,CHI_TRA:`chi_tra`,CHR:`chr`,CYM:`cym`,DAN:`dan`,DEU:`deu`,DZO:`dzo`,ELL:`ell`,ENG:`eng`,ENM:`enm`,EPO:`epo`,EST:`est`,EUS:`eus`,FAS:`fas`,FIN:`fin`,FRA:`fra`,FRK:`frk`,FRM:`frm`,GLE:`gle`,GLG:`glg`,GRC:`grc`,GUJ:`guj`,HAT:`hat`,HEB:`heb`,HIN:`hin`,HRV:`hrv`,HUN:`hun`,IKU:`iku`,IND:`ind`,ISL:`isl`,ITA:`ita`,ITA_OLD:`ita_old`,JAV:`jav`,JPN:`jpn`,KAN:`kan`,KAT:`kat`,KAT_OLD:`kat_old`,KAZ:`kaz`,KHM:`khm`,KIR:`kir`,KOR:`kor`,KUR:`kur`,LAO:`lao`,LAT:`lat`,LAV:`lav`,LIT:`lit`,MAL:`mal`,MAR:`mar`,MKD:`mkd`,MLT:`mlt`,MSA:`msa`,MYA:`mya`,NEP:`nep`,NLD:`nld`,NOR:`nor`,ORI:`ori`,PAN:`pan`,POL:`pol`,POR:`por`,PUS:`pus`,RON:`ron`,RUS:`rus`,SAN:`san`,SIN:`sin`,SLK:`slk`,SLV:`slv`,SPA:`spa`,SPA_OLD:`spa_old`,SQI:`sqi`,SRP:`srp`,SRP_LATN:`srp_latn`,SWA:`swa`,SWE:`swe`,SYR:`syr`,TAM:`tam`,TEL:`tel`,TGK:`tgk`,TGL:`tgl`,THA:`tha`,TIR:`tir`,TUR:`tur`,UIG:`uig`,UKR:`ukr`,URD:`urd`,UZB:`uzb`,UZB_CYRL:`uzb_cyrl`,VIE:`vie`,YID:`yid`}})),Gt=a(((e,t)=>{t.exports={OSD_ONLY:`0`,AUTO_OSD:`1`,AUTO_ONLY:`2`,AUTO:`3`,SINGLE_COLUMN:`4`,SINGLE_BLOCK_VERT_TEXT:`5`,SINGLE_BLOCK:`6`,SINGLE_LINE:`7`,SINGLE_WORD:`8`,CIRCLE_WORD:`9`,SINGLE_CHAR:`10`,SPARSE_TEXT:`11`,SPARSE_TEXT_OSD:`12`,RAW_LINE:`13`}})),Kt=a(((e,t)=>{it();var n=ct(),r=Ht(),i=Ut(),a=Wt(),o=dt(),s=Gt(),{setLogging:c}=st();t.exports={languages:a,OEM:o,PSM:s,createScheduler:n,createWorker:r,setLogging:c,...i}}));async function qt(){return Yt||(Yt=await(0,Jt.createWorker)(`eng`),Yt)}var Jt,Yt,Xt=i((()=>{Jt=Kt(),Yt=null}));async function Zt(e){return new Promise(t=>{let n=new Image;n.onload=()=>{let e=document.createElement(`canvas`),r=e.getContext(`2d`),i=369/n.width;e.width=369,e.height=Math.round(n.height*i),r.imageSmoothingEnabled=!1,r.drawImage(n,0,0,e.width,e.height);let a=r.getImageData(0,0,e.width,e.height),o=a.data;for(let e=0;e<o.length;e+=4){let t=.299*o[e]+.587*o[e+1]+.114*o[e+2];o[e]=t,o[e+1]=t,o[e+2]=t}r.putImageData(a,0,0),t(e)},n.src=URL.createObjectURL(e)})}var Qt=i((()=>{})),X,$t=i((()=>{X={targetWidth:369,anchorSearch:{x:0,y:0,width:369,height:200},anchorText:`Troop Power`,firstRowOffset:18,listTopFallback:145,rowHeight:68,rowGap:4,minRowGap:24,avatarProbe:{x:18,width:60,height:52,threshold:18},regions:{name:{x:78,y:8,width:175,height:24},power:{x:96,y:29,width:88,height:24,scale:4,numericOnly:!0},status:{x:78,y:47,width:190,height:20},engagement:{x:246,y:8,width:110,height:54}}}}));function en(e,t){let n=document.createElement(`canvas`),r=n.getContext(`2d`),i=t.scale??1;return n.width=t.width*i,n.height=t.height*i,r.imageSmoothingEnabled=!1,r.drawImage(e,t.x,t.y,t.width,t.height,0,0,n.width,n.height),t.numericOnly&&tn(n),n}function tn(e){let t=e.getContext(`2d`),n=t.getImageData(0,0,e.width,e.height),r=n.data;for(let e=0;e<r.length;e+=4){let t=.299*r[e]+.587*r[e+1]+.114*r[e+2]>150?255:0;r[e]=t,r[e+1]=t,r[e+2]=t,r[e+3]=255}t.putImageData(n,0,0)}function nn(e,t){let n=[],r=Math.max(X.listTopFallback,(t?.bottom??0)+X.firstRowOffset),i=-1/0;for(let t=r;t<=e.height-X.rowHeight;t+=1){if(t-i<X.minRowGap||rn(e,t)<X.avatarProbe.threshold)continue;let r=an(e,t);n.push({y:r,canvas:en(e,{x:0,y:r,width:e.width,height:Math.min(X.rowHeight,e.height-r)})}),i=r,t=r+X.rowHeight-1}return n}function rn(e,t){let n=X.avatarProbe,r=e.getContext(`2d`).getImageData(n.x,t,n.width,Math.min(n.height,e.height-t)).data,i=0,a=0,o=0;for(let e=0;e<r.length;e+=4){let t=.299*r[e]+.587*r[e+1]+.114*r[e+2];i+=t,a+=t*t,o+=1}let s=i/o,c=a/o-s*s;return Math.sqrt(Math.max(c,0))}function an(e,t){let n=t,r=-1/0;for(let i=Math.max(0,t-8);i<=Math.min(e.height-X.rowHeight,t+8);i+=1){let t=rn(e,i);t>r&&(r=t,n=i)}return n}var on=i((()=>{$t()}));async function sn(e){let t=await qt(),n=[];for(let r of e){let e=await Zt(r),i=cn(e),{data:a}=await t.recognize(i),o=ln(a),s=hn(a.text),c=nn(e,o),l=[];for(let e=0;e<c.length;e+=1){let n=await un(t,c[e],r.name,e,s);n&&l.push(n)}n.push({filename:r.name,anchorText:a.text,anchorFound:!!o,screenshotLegion:s,combatants:l,rowCount:c.length})}return n}function cn(e){return en(e,X.anchorSearch)}function ln(e){let t=e.words??[],n=X.anchorText.toLowerCase().split(/\s+/);for(let e=0;e<t.length;e+=1){let r=Z(t[e].text),i=Z(t[e+1]?.text??``);if(r.includes(n[0])&&i.includes(n[1]))return{x:t[e].bbox.x0,y:Math.min(t[e].bbox.y0,t[e+1].bbox.y0),bottom:Math.max(t[e].bbox.y1,t[e+1].bbox.y1)}}return Z(e.text).includes(X.anchorText.toLowerCase())?{x:X.anchorSearch.x,y:X.listTopFallback-X.firstRowOffset,bottom:X.listTopFallback-X.firstRowOffset}:null}async function un(e,t,n,r,i){let a=await dn(e,t.canvas,X.regions.name),o=await dn(e,t.canvas,X.regions.power),s=await dn(e,t.canvas,X.regions.status),c=await dn(e,t.canvas,X.regions.engagement),l=fn(a),u=mn(o),d=gn(s,c,i),f=pn(c);return!l||u===null||u<=0||vn(l)||yn(f)?null:{id:bn(l),name:l,power:u,legion:d.legion,legionSource:d.source,status:pn(s),engagement:f,sourceFile:n,sourceRow:r,sourceY:t.y}}async function dn(e,t,n){n.numericOnly&&await e.setParameters({tessedit_char_whitelist:`0123456789,.`,tessedit_pageseg_mode:`7`});let{data:{text:r}}=await e.recognize(en(t,n));return n.numericOnly&&await e.setParameters({tessedit_char_whitelist:``,tessedit_pageseg_mode:`3`}),r}function Z(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim()}function fn(e){return String(e).replace(/[^\S\r\n]+/g,` `).replace(/\n+/g,` `).replace(/[^\p{L}\p{N}\s'._-]/gu,``).trim()}function pn(e){return String(e).replace(/[^\S\r\n]+/g,` `).replace(/\n+/g,` `).trim()}function mn(e){let t=(String(e).replace(/[oO]/g,`0`).replace(/[lI|]/g,`1`).match(/\d[\d,.\s]*/g)??[]).map(e=>Number.parseInt(e.replace(/[^\d]/g,``),10)).filter(e=>Number.isFinite(e)&&e>=100&&e<=1e8);return t.length===0?null:t.sort((e,t)=>t-e)[0]}function hn(e){let t=Z(e).match(/legion\s*(\d+)\s*combatants/);if(!t)return null;let n=Number.parseInt(t[1],10);return Number.isFinite(n)?n:null}function gn(e,t,n){let r=Z(t);if(n!==null&&_n(r))return{legion:n,source:`row-action`};let i=Z(e).match(/legion\s*(\d+)\s*dispatched/);if(i){let e=Number.parseInt(i[1],10);return{legion:Number.isFinite(e)?e:null,source:`dispatched-status`}}return{legion:null,source:`unknown`}}function _n(e){return e.includes(`join`)||e.includes(`substitute`)||e.includes(`substitue`)||e.includes(`j0in`)}function vn(e){return[`leader`,`officers`,`troop power`,`join`,`substitute`].includes(Z(e))}function yn(e){let t=Z(e);return t.includes(`no engagement`)||t.includes(`no engagements`)||t.includes(`noengagement`)}function bn(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}var xn=i((()=>{Xt(),Qt(),$t(),on()}));async function Sn(e,t){switch(e){case`foundry`:return sn(t);default:throw Error(`${e} parser not implemented.`)}}var Cn=i((()=>{xn()}));async function wn(e,t){return Sn(e,t)}var Tn=i((()=>{Cn()}));function En(){let e=document.getElementById(`import-page`);e&&(e.innerHTML=`
        <div class="card">

            <h2>Import Combatants</h2>

            <p>
                Select an event and upload one or more screenshots.
            </p>

            <label for="event-select">
                Event
            </label>

            <select id="event-select">

                <option value="foundry">
                    Foundry
                </option>

                <option value="canyon">
                    Canyon Clash
                </option>

                <option value="bearTrap">
                    Bear Trap
                </option>

                <option value="frostDragon">
                    Frost Dragon
                </option>

                <option value="crazyJoe">
                    Crazy Joe
                </option>

            </select>

            <br><br>

            <input
                id="combatant-upload"
                type="file"
                accept="image/*"
                multiple
            >

            <br><br>

            <button
                id="process-images"
                class="primary"
            >
                Process Screenshots
            </button>

            <button
                id="load-current-combatants"
                type="button">
                Load Current Combatants
            </button>

            <hr>

            <div id="import-results">
                Nothing processed.
            </div>

        </div>
    `,document.getElementById(`process-images`).addEventListener(`click`,async()=>{let e=document.getElementById(`event-select`).value,t=[...document.getElementById(`combatant-upload`).files];if(t.length===0){alert(`Please select one or more screenshots.`);return}let n=document.getElementById(`import-results`);n.innerHTML=`<p>Processing...</p>`;try{let r=await wn(e,t);$=r.flatMap(e=>e.combatants??[]).map(Fn),On(n,r)}catch(e){console.error(e),n.innerHTML=`
                    <p class="error">
                        ${e.message}
                    </p>
                `}}),document.getElementById(`load-current-combatants`).addEventListener(`click`,()=>{let e=document.getElementById(`import-results`);$=he().map(Fn),Dn(e)}))}function Dn(e){e.innerHTML=`
        <div class="ocr-result">
            <h3>Current Combatants</h3>
            <p>${$.length} combatants loaded for editing.</p>
        </div>

        ${kn($)}
    `,jn(e)}function On(e,t){e.innerHTML=`
        ${t.map(e=>`
            <div class="ocr-result">

                <h3>${Vn(e.filename)}</h3>

                <p>
                    Anchor ${e.anchorFound?`found`:`not found`}.
                    ${e.screenshotLegion?`Legion ${e.screenshotLegion}.`:``}
                    ${e.combatants?.length??0} combatants parsed.
                </p>

                <pre>${Vn(e.anchorText??`No anchor detected.`)}</pre>

            </div>
        `).join(``)}

        ${kn($)}
    `,jn(e)}function kn(e=[]){return`
        <div class="review-panel">
            <h3>Review Combatants</h3>

            ${e.length===0?`<p>No combatants loaded.</p>`:``}

            <div class="review-grid">
                <div class="review-row review-header">
                    <div class="review-heading">Name</div>
                    <div class="review-heading">Power</div>
                    <div class="review-heading">Assignment</div>
                    <div class="review-heading">Status</div>
                    <div class="review-heading">Engagement</div>
                    <div class="review-heading"></div>
                </div>

                ${e.map((e,t)=>`
                    <div class="review-row">
                        <input
                            data-review-index="${t}"
                            data-review-field="name"
                            value="${Q(e.name)}">

                        <input
                            data-review-index="${t}"
                            data-review-field="power"
                            inputmode="numeric"
                            value="${Q(String(e.power??``))}">

                        <div class="review-assignment-options">
                            ${An(t,e,`Legion 1`)}
                            ${An(t,e,`Legion 2`)}
                            ${An(t,e,`No engagement`)}
                        </div>

                        <input
                            data-review-index="${t}"
                            data-review-field="status"
                            value="${Q(e.status??``)}">

                        <input
                            data-review-index="${t}"
                            data-review-field="engagement"
                            value="${Q(e.engagement??``)}">

                        <button
                            type="button"
                            class="remove-review-row"
                            data-remove-review-index="${t}">
                            Remove
                        </button>
                    </div>
                `).join(``)}
            </div>

            <div class="button-row">
                <button
                    id="add-reviewed-combatant"
                    type="button">
                    Add Combatant
                </button>

                <button
                    id="save-reviewed-combatants"
                    type="button"
                    class="primary">
                    Save Reviewed Combatants
                </button>

                <span id="review-save-status"></span>
            </div>
        </div>
    `}function An(e,t,n){let r=Rn(t.assignment);return`
        <label class="review-radio-option">
            <input
                class="review-assignment-choice"
                type="radio"
                name="assignment-${e}"
                data-review-index="${e}"
                data-review-field="assignment"
                value="${Q(n)}"
                ${r===n?`checked`:``}>
            <span>${Vn(n)}</span>
        </label>
    `}function jn(e){e.querySelectorAll(`[data-review-index]`).forEach(e=>{e.addEventListener(`change`,()=>{Mn(e)})}),e.querySelectorAll(`[data-remove-review-index]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Number.parseInt(e.dataset.removeReviewIndex,10);$.splice(t,1);let n=document.getElementById(`import-results`);n.innerHTML=kn($),jn(n)})});let t=e.querySelector(`#save-reviewed-combatants`),n=e.querySelector(`#add-reviewed-combatant`);n&&n.addEventListener(`click`,()=>{$.push(In()),Dn(document.getElementById(`import-results`))}),t&&t.addEventListener(`click`,async()=>{let t=e.querySelector(`#review-save-status`);t.textContent=`Saving...`;try{await pe(`combatants`,$.map(Pn)),t.textContent=`Saved.`}catch(e){console.error(e),t.textContent=e.message}})}function Mn(e){let t=Number.parseInt(e.dataset.reviewIndex,10),n=e.dataset.reviewField;!$[t]||!n||($[t]={...$[t],[n]:Nn(n,e.value)})}function Nn(e,t){if(e===`power`){let e=Number.parseInt(String(t).replace(/,/g,``),10);return Number.isFinite(e)?e:null}return t.trim()}function Pn(e){let t=e.name?.trim()??``,n=Rn(e.assignment);return{...e,id:Bn(t),name:t,power:Number.parseInt(e.power,10)||0,legion:zn(n),assignment:n}}function Fn(e){return{...e,assignment:e.assignment??Ln(e)}}function In(){return{id:``,name:``,power:0,legion:null,assignment:`No engagement`,status:``,engagement:``,sourceFile:`manual`,sourceRow:null,sourceY:null}}function Ln(e){return e.legion?`Legion ${e.legion}`:`No engagement`}function Rn(e){return e===`Legion 1`||e===`Legion 2`?e:`No engagement`}function zn(e){return e===`Legion 1`?1:e===`Legion 2`?2:null}function Bn(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}function Vn(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function Q(e){return Vn(e)}var $,Hn=i((()=>{Tn(),V(),$=[]}));async function Un(){_(),En(),await Wn(),Ze(),Ye(),U()}async function Wn(){try{await Promise.race([fe(),new Promise((e,t)=>{setTimeout(()=>t(Error(`Command data load timed out.`)),6e3)})])}catch(e){console.warn(`Using available command data fallback.`,e)}}var Gn=i((()=>{v(),V(),Y(),Xe(),Hn(),document.addEventListener(`DOMContentLoaded`,()=>{Un()})}));a((()=>{u(),Gn(),Y(),oe(),Hn(),document.addEventListener(`DOMContentLoaded`,()=>{})}))();export{i as t};