const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-CnOuCr2t.js","assets/index.esm-BCUFa4rA.js","assets/index.esm-CmUWcYVb.js"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,i=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},a=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),o=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},s=(i,a,o,s)=>{if(a&&typeof a==`object`||typeof a==`function`)for(var c=n(a),l=0,u=c.length,d;l<u;l++)d=c[l],!r.call(i,d)&&d!==o&&e(i,d,{get:(e=>a[e]).bind(null,d),enumerable:!(s=t(a,d))||s.enumerable});return i},c=t=>r.call(t,`module.exports`)?t[`module.exports`]:s(e({},`__esModule`,{value:!0}),t),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=i((()=>{}));function d(){return sessionStorage.getItem(`admin`)===`true`}function f(e){return e===p?(sessionStorage.setItem(`admin`,`true`),!0):!1}var p,m=i((()=>{p=`NWOFoundry2026`}));function h(e){let t=prompt(`Administrator Password`);t!==null&&(f(t)?e():alert(`Incorrect password.`))}var g=i((()=>{m()}));function _(){let e=document.querySelectorAll(`.page`),t=document.querySelectorAll(`.nav-button, .subnav-button`),n=n=>{let r=document.getElementById(n);if(!r)return;e.forEach(e=>e.classList.remove(`active`)),t.forEach(e=>e.classList.remove(`active`)),document.querySelectorAll(`[data-page="${n}"]`).forEach(e=>{let t=e.dataset.navGroup;t&&document.querySelectorAll(`[data-nav-group="${t}"]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)});let i=y(n);[`foundry`,`canyon`].includes(i)&&(document.querySelector(`[data-nav-group="main"][data-page="events"]`)?.classList.add(`active`),document.querySelector(`[data-nav-group="${i}"][data-page="${n}"]`)?.classList.add(`active`)),r.classList.add(`active`)},r=e=>{let t=()=>{n(e);let t=`#${e}`;globalThis.location.hash!==t&&globalThis.history.pushState(null,``,t)};if(e===`import`&&!d()){h(t);return}t()};t.forEach(e=>{e.addEventListener(`click`,()=>{r(e.dataset.page)})}),globalThis.addEventListener(`hashchange`,()=>{r(v())}),r(v())}function v(){return globalThis.location.hash.replace(`#`,``)||`events`}function y(e){return document.querySelector(`[data-page="${e}"]`)?.dataset.navGroup??null}var b=i((()=>{m(),g()})),x,S=i((()=>{x=[{id:`nick`,displayName:`Nicholas`},{id:`kazuma`,displayName:`Kazuma`},{id:`nooch`,displayName:`Nooch`}]})),C,w=i((()=>{C=[]})),T,ee=i((()=>{T={opening:{boiler:[{chief:`nick`,assignment:`Lead`},{chief:`kazuma`,assignment:`Support`}],"workshop-west":[{chief:`nooch`,assignment:`Lead`}],"prototype-west":[]},mid:{"prototype-west":[{chief:`nick`,assignment:`Lead`}],"prototype-east":[{chief:`kazuma`,assignment:`Lead`}],mercenary:[{chief:`nooch`,assignment:`Lead`}]},final:{imperial:[{chief:`nick`,assignment:`Support`}]}}})),te,ne=i((()=>{te={strategyName:`Legion 2 Standard`,version:`0.2.0`,commander:`Kazuma`,eventDate:``,eventDuration:60,phases:{opening:{label:`0–15 Minutes`},mid:{label:`15–45 Minutes`},final:{label:`45 Minutes–End`}}}})),E,D=i((()=>{E=[{id:`boiler`,name:`Boiler`,x:30,y:5,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Building capture speed buff.`},mid:{priority:`Critical`,strategy:`Maintain control.`,why:`Critical Phase 2 control objective.`},final:{priority:`Critical`,strategy:`Maintain control.`,why:`Critical Phase 3 control objective.`}}},{id:`repair-north`,name:`North Repair`,x:58,y:5,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if available.`,why:`Extra points.`},mid:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Lower Phase 2 priority.`},final:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Medium Phase 3 support value.`}}},{id:`workshop-northwest`,name:`NW Workshop`,x:20,y:15,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},mid:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},final:{priority:`Medium`,strategy:`Gather for points.`,why:`Secondary objective.`}}},{id:`mercenary`,name:`Mercenary Camp`,x:45,y:15,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`Critical`,strategy:`Capture immediately.`,why:`Critical Phase 2 objective.`},final:{priority:`High`,strategy:`Maintain control.`,why:`High Phase 3 objective.`}}},{id:`workshop-northeast`,name:`NE Workshop`,x:70,y:20,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},mid:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},final:{priority:`Medium`,strategy:`Gather for points.`,why:`Secondary objective.`}}},{id:`prototype-west`,name:`West Prototype`,x:20,y:30,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture immediately.`,why:`High Phase 1 objective.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`High Phase 2 objective.`},final:{priority:`High`,strategy:`Maintain control if practical.`,why:`Equal high-priority Prototype objective.`}}},{id:`repair-west`,name:`West Repair`,x:10,y:40,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Lower Phase 2 priority.`},final:{priority:`Low`,strategy:`Hold as a secondary objective.`,why:`Low Phase 3 support value.`}}},{id:`imperial`,name:`Imperial Foundry`,x:45,y:35,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`High`,strategy:`Capture and contest.`,why:`High Phase 2 objective.`},final:{priority:`Critical`,strategy:`Primary objective.`,why:`Highest value objective.`}}},{id:`repair-east`,name:`East Repair`,x:80,y:35,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Lower Phase 2 priority.`},final:{priority:`Low`,strategy:`Hold as a secondary objective.`,why:`Low Phase 3 support value.`}}},{id:`prototype-east`,name:`East Prototype`,x:70,y:45,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture immediately.`,why:`High Phase 1 objective.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`High Phase 2 objective.`},final:{priority:`High`,strategy:`Maintain control if practical.`,why:`Equal high-priority Prototype objective.`}}},{id:`workshop-southwest`,name:`SW Workshop`,x:26,y:55,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},mid:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},final:{priority:`Medium`,strategy:`Gather for points.`,why:`Secondary objective.`}}},{id:`workshop-southeast`,name:`SE Workshop`,x:61,y:60,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},mid:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},final:{priority:`Medium`,strategy:`Gather for points.`,why:`Secondary objective.`}}},{id:`munitions`,name:`Munitions Factory`,x:45,y:60,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`Critical`,strategy:`Capture immediately.`,why:`Powerful combat buff.`},final:{priority:`High`,strategy:`Maintain control.`,why:`High Phase 3 objective.`}}},{id:`repair-south`,name:`South Repair`,x:31,y:75,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Lower Phase 2 priority.`},final:{priority:`Low`,strategy:`Hold as a secondary objective.`,why:`Medium Phase 3 support value.`}}},{id:`transit`,name:`Transit Station`,x:60,y:75,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Major mobility advantage.`},mid:{priority:`Medium`,strategy:`Hold if practical.`,why:`Medium Phase 2 rotation value.`},final:{priority:`Low`,strategy:`Use only when needed for rotations.`,why:`Lower Phase 3 priority.`}}}]})),O,k,re,A,ie=i((()=>{O=`modulepreload`,k=function(e){return`/`+e},re={},A=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=k(t,n),t=s(t),t in re)return;re[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:O,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}}));function j(){return ae().length===0}function ae(){return Object.entries(le).filter(([,e])=>!e).map(([e])=>e)}function oe(){return{configured:j(),missingKeys:ae()}}async function se(){if(!j())return null;if(!N){let{initializeApp:e}=await A(async()=>{let{initializeApp:e}=await import(`./index.esm-CnOuCr2t.js`);return{initializeApp:e}},__vite__mapDeps([0,1]));N=e(M)}return N}async function ce(){if(!j())return null;if(!P){let[e,{getFirestore:t}]=await Promise.all([se(),A(()=>import(`./index.esm-CmUWcYVb.js`),__vite__mapDeps([2,1]))]);P=t(e)}return P}var M,le,N,P,ue=i((()=>{ie(),M={apiKey:`AIzaSyDnOfdz8WQsvxr5oJaFzS8EdNJtdsQYgqQ`,authDomain:`wos-command-center.firebaseapp.com`,projectId:`wos-command-center`,storageBucket:`wos-command-center.firebasestorage.app`,messagingSenderId:`853155306331`,appId:`1:853155306331:web:f37dc257fa6950d0f2d87e`},le={VITE_FIREBASE_API_KEY:M.apiKey,VITE_FIREBASE_PROJECT_ID:M.projectId,VITE_FIREBASE_APP_ID:M.appId},N=null,P=null}));function de(){let e=globalThis.location?.hostname;return e===`localhost`||e===`127.0.0.1`||e===``}function fe(e,t){if(!e.exists())return R[t];let n=e.data();return Array.isArray(R[t])?Array.isArray(n.items)?n.items:R[t]:n.value??n}function pe(e,t){return Promise.race([e,new Promise((e,n)=>{setTimeout(()=>n(Error(t)),we)})])}function me(e){return e?.code===`unavailable`||e?.message?.toLowerCase().includes(`client is offline`)||e?.message?.toLowerCase().includes(`offline`)}function he(e){return me(e)?Error(`Combatants were not saved. Firestore is configured, but the app cannot reach Firebase from this browser. Check network access, Firestore setup, and Firebase Hosting env build settings.`):Error(`Combatants were not saved to Firebase. ${e.message}`)}async function ge(){if(!j()){if(!de()){let e=oe();console.warn(`Firebase is not configured. Using bundled local data fallback.`,e.missingKeys)}return R}try{let[e,{doc:t,getDoc:n}]=await Promise.all([ce(),A(()=>import(`./index.esm-CmUWcYVb.js`),__vite__mapDeps([2,1]))]);if(!e)return R;let r=await Promise.all(Object.entries(Ce).map(async([r,i])=>[r,fe(await pe(n(t(e,Se,i)),`Timed out loading ${i} from Firebase.`),r)]));R={...R,...Object.fromEntries(r)}}catch(e){console.warn(`Using bundled command data fallback.`,e)}return R}async function _e(e,t){let n=Ce[e];if(!n)throw Error(`Unknown command data key: ${e}`);if(!j()){if(!de()){let e=oe();throw Error(`Firebase is not configured. Missing: ${e.missingKeys.join(`, `)}. Production combatant changes cannot be saved.`)}return R={...R,[e]:t},R[e]}let[r,{doc:i,serverTimestamp:a,setDoc:o}]=await Promise.all([ce(),A(()=>import(`./index.esm-CmUWcYVb.js`),__vite__mapDeps([2,1]))]);if(!r)return R={...R,[e]:t},R[e];let s=Array.isArray(t)?{items:t}:{value:t};try{await pe(o(i(r,Se,n),{...s,updatedAt:a()},{merge:!0}),`Timed out saving ${n} to Firebase.`)}catch(e){throw he(e)}return R={...R,[e]:t},R[e]}function ve(){return R.chiefs}function ye(){return R.combatants}function F(){let e=ye();return e.length>0?e.map(e=>({...e,displayName:e.name,source:`combatants`})):ve().map(e=>({...e,name:e.displayName,source:`chiefs`}))}function I(e){return F().find(t=>t.id===e)}function be(){return R.foundryAssignments}function xe(){return R.foundryConfig}function L(){return R.foundryObjectives}var R,Se,Ce,we,z=i((()=>{S(),w(),ee(),ne(),D(),ue(),ie(),R={chiefs:x,combatants:C,foundryAssignments:T,foundryConfig:te,foundryObjectives:E},Se=`commandData`,Ce={chiefs:`chiefs`,combatants:`combatants`,foundryAssignments:`foundryAssignments`,foundryConfig:`foundryConfig`,foundryObjectives:`foundryObjectives`},we=8e3}));function Te(e,t){if(!e)return[];let n=[],r=ke(e,t);r.length>0&&n.push(...r);let i=be()[t];return i&&Object.entries(i).forEach(([t,r])=>{r.forEach(r=>{r.chief===e&&n.push({objectiveId:t,assignment:r.assignment})})}),n}function Ee(e,t,n){return Te(e,t).find(e=>e.objectiveId===n)}function De(e,t,n=null){return F().filter(e=>e.source===`combatants`&&(!n||e.legion===n)).map(e=>({combatant:e,assignments:ke(e.id,t)})).flatMap(t=>t.assignments.filter(t=>t.objectiveId===e).map(e=>({combatant:t.combatant,assignment:e})))}function Oe(e,t){let n=new Map;return F().filter(t=>t.source===`combatants`&&t.legion===e).forEach(e=>{ke(e.id,t).forEach(t=>{t.objectiveId&&(n.has(t.objectiveId)||n.set(t.objectiveId,[]),n.get(t.objectiveId).push({combatant:e,assignment:t}))})}),[...n.entries()].map(([e,t])=>({objectiveId:e,assignments:t}))}function ke(e,t){let n=I(e);if(!n||n.source!==`combatants`)return[];let r=n.assignment?.trim();if(!r||V(r)===`no engagement`)return[];let i=Ae(r);return i?je(n,i,t).map((e,t)=>({objectiveId:e,assignment:`${r} primary ${t+1}`,combatant:n})):[{objectiveId:nt(r),assignment:r,combatant:n}]}function Ae(e){let t=V(e);return t===`legion 1`?1:t===`legion 2`?2:null}function je(e,t,n){return Me(t,n).get(e.id)??[]}function Me(e,t){let n=t??`opening`,r=Ne(e,n),i=et(e),a=new Map(i.map(e=>[e.id,[]]));if(r.length===0||i.length===0)return a;let o=Je(r,n,i.length),s=new Map(r.map(e=>[e.id,0])),c=new Map(r.map(e=>[e.id,0]));for(let t=0;t<it;t+=1)i.forEach(i=>{let l=a.get(i.id),u=Pe(t,r,i,e,n,l,s,c,o);u&&(l.push(u.id),s.set(u.id,(s.get(u.id)??0)+1),c.set(u.id,(c.get(u.id)??0)+tt(i)))});return a}function Ne(e,t){return(rt[t]?.[e]??[]).map(e=>L().find(t=>t.id===e)).filter(Boolean)}function Pe(e,t,n,r,i,a,o,s,c){return e===0?Fe(t,n,r,i,a,o,s,c):e===it-1?Le(t,n,r,i,a,o,c)??Ie(t,n,r,i,a,o,s,c):Ie(t,n,r,i,a,o,s,c)}function Fe(e,t,n,r,i,a,o,s){return[...e].filter(e=>Re(e,i,a,s)&&qe(e,t,n,r)).sort((e,i)=>B(i,r)-B(e,r)||He(e,a,o)-He(i,a,o)||(a.get(e.id)??0)-(a.get(i.id)??0)||Ue(e,t,n)-Ue(i,t,n)||e.name.localeCompare(i.name))[0]??null}function Ie(e,t,n,r,i,a,o,s){let c=e.find(e=>e.id===i[0]);return c?[...e].filter(o=>Re(o,i,a,s)&&qe(o,t,n,r)&&ze(o,i,e)).sort((e,i)=>We(i,c,r,a,o)-We(e,c,r,a,o)||Ge(e,t,n)-Ge(i,t,n)||e.name.localeCompare(i.name))[0]??null:null}function Le(e,t,n,r,i,a,o){let s=e.find(e=>e.id===i[0]);return[...e].filter(s=>Re(s,i,a,o)&&qe(s,t,n,r)&&ze(s,i,e)&&(a.get(s.id)??0)===0).sort((e,t)=>B(e,r)-B(t,r)||Ze(e,s)-Ze(t,s)||e.name.localeCompare(t.name))[0]??null}function Re(e,t,n,r){return t.includes(e.id)?!1:(n.get(e.id)??0)<(r.get(e.id)??0)}function ze(e,t,n){return t.every(t=>{let r=n.find(e=>e.id===t);return!r||!Be(e,r)})}function Be(e,t){let n=Ve(e),r=Ve(t);return n===`west`&&r===`east`||n===`east`&&r===`west`}function Ve(e){return e.x<=40?`west`:e.x>=60?`east`:`center`}function He(e,t,n){let r=t.get(e.id)??0;return r===0?0:(n.get(e.id)??0)/r}function Ue(e,t,n){return Qe(t,n)?Ke(e):0}function We(e,t,n,r,i){return B(e,n)*at-Xe(t,e)*ct-He(e,r,i)*lt}function Ge(e,t,n){return Qe(t,n)?Ke(e):Ke(e)*.01}function Ke(e){return Math.hypot(e.x-ut.x,e.y-ut.y)}function B(e,t){return dt[e.phases[t]?.priority?.toLowerCase()??`low`]??dt.low}function qe(e,t,n,r){return $e(t,n)?B(e,r)>=dt.high:!0}function Je(e,t,n){return new Map(e.map(e=>[e.id,Ye(e,t,n)]))}function Ye(e,t,n){let r=ft[e.phases[t]?.priority?.toLowerCase()??`low`]??ft.low;return Math.max(1,Math.floor(n*r))}function Xe(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function Ze(e,t){return t?Xe(e,t):Ke(e)}function Qe(e,t){let n=et(t),r=Math.max(1,Math.ceil(n.length*st)),i=n.findIndex(t=>t.id===e.id);return i>=0&&i>=n.length-r}function $e(e,t){let n=et(t),r=Math.max(1,Math.ceil(n.length*ot)),i=n.findIndex(t=>t.id===e.id);return i>=0&&i<r}function et(e){return F().filter(t=>t.source===`combatants`&&t.legion===e&&V(t.assignment)!==`no engagement`).sort((e,t)=>tt(t)-tt(e)||e.displayName.localeCompare(t.displayName))}function tt(e){return e.troopPower??e.power??0}function nt(e){let t=V(e);return L().find(e=>V(e.id)===t||V(e.name)===t||t.includes(V(e.name)))?.id??null}function V(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim()}var rt,it,at,ot,st,ct,lt,ut,dt,ft,pt=i((()=>{z(),rt={opening:{1:[`boiler`,`prototype-west`,`prototype-east`,`repair-west`,`repair-south`,`transit`],2:[`boiler`,`repair-north`,`prototype-west`,`prototype-east`,`repair-east`,`transit`]},mid:{1:[`boiler`,`prototype-west`,`prototype-east`,`repair-west`,`repair-south`,`mercenary`,`munitions`,`imperial`,`transit`],2:[`boiler`,`repair-north`,`prototype-west`,`prototype-east`,`repair-east`,`mercenary`,`munitions`,`imperial`,`transit`]},final:{1:[`boiler`,`imperial`,`prototype-west`,`prototype-east`,`munitions`,`mercenary`,`workshop-northwest`,`workshop-southwest`,`repair-west`,`repair-south`,`transit`],2:[`boiler`,`imperial`,`prototype-west`,`prototype-east`,`munitions`,`mercenary`,`workshop-northeast`,`workshop-southeast`,`repair-east`,`repair-north`,`transit`]}},it=3,at=100,ot=.25,st=.1,ct=3,lt=1e-6,ut={x:100,y:50},dt={critical:4,high:3,medium:2,low:1},ft={critical:.4,high:.35,medium:.15,low:.1}}));function mt(){let e=document.getElementById(`my-objectives`),t=kt();if(!e)return;e.innerHTML=``;let n=t?Te(t,bt()):Oe(At(),bt()).map(e=>({objectiveId:e.objectiveId,assignment:`${e.assignments.length} assigned combatants`}));if(n.length===0){e.innerHTML=`<p>No assignments this phase.</p>`;return}n.forEach(t=>{let n=L().find(e=>e.id===t.objectiveId),r=document.createElement(`div`);r.className=`assignment-card`,r.innerHTML=`

            <strong>${n?n.name:`General Assignment`}</strong>

            <div class="assignment-card-meta">${t.assignment}</div>

        `,r.onclick=()=>{n&&(xt(n),H())},e.appendChild(r)})}var ht=i((()=>{z(),Y(),pt(),G()}));function gt(){let e=document.getElementById(`assignment-summary`);if(!e)return;let t=kt(),n=At();if(!t){e.innerHTML=`
            <div class="summary-card">
                <h2>Legion ${n}</h2>
                <h3>${xe().phases[bt()].label}</h3>
            </div>
        `;return}let r=I(t);if(!r){e.innerHTML=``;return}let i=bt(),a=Te(t,i),o=xe().phases[i].label;e.innerHTML=`

        <div class="summary-card">

            <h2>${r.displayName}</h2>

            ${_t(r)}

            <h3>${o}</h3>

            <div id="summary-list"></div>

        </div>

    `;let s=document.getElementById(`summary-list`);a.forEach(e=>{let t=L().find(t=>t.id===e.objectiveId);s.innerHTML+=`

            <div class="summary-item">

                <strong>${t?t.name:`General Assignment`}</strong><br>

                ${e.assignment}

            </div>

        `})}function _t(e){return e.source===`combatants`?`
        <p>
            ${vt(e)?`${vt(e).toLocaleString()} troop power`:``}
            ${e.legion?` | Legion ${e.legion}`:``}
        </p>
    `:``}function vt(e){return e.troopPower??e.power??0}var yt=i((()=>{z(),Y(),pt(),G()}));function bt(){return U}function xt(e){W=e}function St(e){return{critical:`🔴`,high:`🟠`,medium:`🟡`,low:`⚪`}[e.toLowerCase()]||`⚪`}function Ct(e){let t={opening:0,mid:1,final:2};return t[U]>=t[e.unlockPhase]}function H(){let e=document.getElementById(`battlefield-map`);if(!e)return;e.innerHTML=``;let t=kt(),n=Te(t,U),r=At(),i=t?[]:Oe(r,U);L().forEach(r=>{let a=document.createElement(`div`);a.dataset.id=r.id,a.className=`objective`,a.style.left=r.x+`%`,a.style.top=r.y+`%`;let o=r.phases[U];a.classList.add(o.priority.toLowerCase());let s=Ct(r);if(s||a.classList.add(`locked`),t){let e=n.some(e=>e.objectiveId===r.id);a.classList.add(e?`assigned`:`unassigned`)}else{let e=i.some(e=>e.objectiveId===r.id);a.classList.add(e?`assigned`:`unassigned`)}W&&W.id===r.id&&a.classList.add(`selected`),a.innerHTML=`

            <div class="objective-priority">

                ${s?St(o.priority):`🔒`}

            </div>

            <div class="objective-name">

                ${r.name}

            </div>

        `,a.onclick=()=>{W=r,H()},e.appendChild(a)}),W||=L()[0],wt(W),gt(),mt()}function wt(e){let t=document.getElementById(`objective-panel`);if(!t||!e)return;let n=e.phases[U],r=Ee(kt(),U,e.id),i=De(e.id,U,At());t.innerHTML=`

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

            ${Tt(i)}

            <h3>Strategy</h3>

            <p>

                ${n.strategy}

            </p>

            <h3>Why</h3>

            <p>

                ${n.why}

            </p>

        </div>

    `}function Tt(e){return e.length===0?`<p>No combatants assigned.</p>`:`
        <div class="objective-assignment-list">
            ${e.map(({combatant:e,assignment:t})=>`
                <div class="objective-assignment-row">
                    <strong>${e.displayName}</strong>
                    <span>${Et(e)?Et(e).toLocaleString():``}</span>
                    <span>${e.legion?`Legion ${e.legion}`:``}</span>
                    <small>${t.assignment}</small>
                </div>
            `).join(``)}
        </div>
    `}function Et(e){return e.troopPower??e.power??0}function Dt(){let e=document.querySelectorAll(`.phase-button`);e.forEach(t=>{t.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),U=t.dataset.phase,H()}})}var U,W,G=i((()=>{z(),Y(),pt(),ht(),yt(),U=`opening`,W=null}));function Ot(){let e=document.getElementById(`chief-search`),t=document.getElementById(`chief-list`);if(!e||!t)return;let n=localStorage.getItem(`chief`);if(n){let t=F().find(e=>e.id===n);t&&(q=t.id,e.value=t.displayName)}K(),e.addEventListener(`focus`,()=>{jt(e.value)}),e.addEventListener(`input`,()=>{jt(e.value),F().find(t=>t.displayName.toLowerCase()===e.value.toLowerCase())||(q=null,localStorage.removeItem(`chief`),K(),H())}),e.addEventListener(`change`,()=>{let t=F().find(t=>t.displayName.toLowerCase()===e.value.toLowerCase());if(!t){q=null,localStorage.removeItem(`chief`),K(),H();return}q=t.id,localStorage.setItem(`chief`,t.id),K(),H(),Nt()}),document.addEventListener(`click`,n=>{n.target===e||t.contains(n.target)||Nt()})}function kt(){return q}function At(){let e=I(q);return e?.legion?e.legion:Number.isFinite(J)?J:1}function K(){let e=document.getElementById(`legion-context`);if(!e)return;let t=I(q);if(t){e.innerHTML=`
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
    `,e.querySelector(`#legion-select`).addEventListener(`change`,e=>{J=Number.parseInt(e.target.value,10),localStorage.setItem(`legion`,String(J)),H()})}function jt(e){let t=document.getElementById(`chief-list`);if(!t)return;let n=e.trim().toLowerCase(),r=F().slice().sort((e,t)=>e.displayName.localeCompare(t.displayName)).filter(e=>!n||e.displayName.toLowerCase().includes(n));if(r.length===0){t.innerHTML=`<div class="chief-result-empty">No chiefs found.</div>`,t.hidden=!1;return}t.innerHTML=r.map(e=>`
            <button
                type="button"
                class="chief-result"
                data-chief-id="${e.id}">
                <span>${Pt(e.displayName)}</span>
                <small>
                    ${e.legion?`Legion ${e.legion}`:``}
                    ${Ft(e)?` ${Ft(e).toLocaleString()}`:``}
                </small>
            </button>
        `).join(``),t.querySelectorAll(`[data-chief-id]`).forEach(e=>{e.addEventListener(`click`,()=>{Mt(e.dataset.chiefId)})}),t.hidden=!1}function Mt(e){let t=I(e),n=document.getElementById(`chief-search`);!t||!n||(q=t.id,n.value=t.displayName,localStorage.setItem(`chief`,t.id),K(),Nt(),H())}function Nt(){let e=document.getElementById(`chief-list`);e&&(e.hidden=!0)}function Pt(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function Ft(e){return e.troopPower??e.power??0}var q,J,Y=i((()=>{z(),G(),q=null,J=Number.parseInt(localStorage.getItem(`legion`)??`1`,10)})),It=a(((e,t)=>{var n=function(e){var t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i,a=typeof Symbol==`function`?Symbol:{},o=a.iterator||`@@iterator`,s=a.asyncIterator||`@@asyncIterator`,c=a.toStringTag||`@@toStringTag`;function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},``)}catch{l=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var a=t&&t.prototype instanceof _?t:_,o=Object.create(a.prototype);return r(o,`_invoke`,{value:ee(e,n,new D(i||[]))}),o}e.wrap=u;function d(e,t,n){try{return{type:`normal`,arg:e.call(t,n)}}catch(e){return{type:`throw`,arg:e}}}var f=`suspendedStart`,p=`suspendedYield`,m=`executing`,h=`completed`,g={};function _(){}function v(){}function y(){}var b={};l(b,o,function(){return this});var x=Object.getPrototypeOf,S=x&&x(x(O([])));S&&S!==t&&n.call(S,o)&&(b=S);var C=y.prototype=_.prototype=Object.create(b);v.prototype=y,r(C,`constructor`,{value:y,configurable:!0}),r(y,`constructor`,{value:v,configurable:!0}),v.displayName=l(y,c,`GeneratorFunction`);function w(e){[`next`,`throw`,`return`].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}e.isGeneratorFunction=function(e){var t=typeof e==`function`&&e.constructor;return t?t===v||(t.displayName||t.name)===`GeneratorFunction`:!1},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,`GeneratorFunction`)),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}};function T(e,t){function i(r,a,o,s){var c=d(e[r],e,a);if(c.type===`throw`)s(c.arg);else{var l=c.arg,u=l.value;return u&&typeof u==`object`&&n.call(u,`__await`)?t.resolve(u.__await).then(function(e){i(`next`,e,o,s)},function(e){i(`throw`,e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return i(`throw`,e,o,s)})}}var a;function o(e,n){function r(){return new t(function(t,r){i(e,n,t,r)})}return a=a?a.then(r,r):r()}r(this,`_invoke`,{value:o})}w(T.prototype),l(T.prototype,s,function(){return this}),e.AsyncIterator=T,e.async=function(t,n,r,i,a){a===void 0&&(a=Promise);var o=new T(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})};function ee(e,t,n){var r=f;return function(i,a){if(r===m)throw Error(`Generator is already running`);if(r===h){if(i===`throw`)throw a;return k()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=te(o,n);if(s){if(s===g)continue;return s}}if(n.method===`next`)n.sent=n._sent=n.arg;else if(n.method===`throw`){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else n.method===`return`&&n.abrupt(`return`,n.arg);r=m;var c=d(e,t,n);if(c.type===`normal`){if(r=n.done?h:p,c.arg===g)continue;return{value:c.arg,done:n.done}}else c.type===`throw`&&(r=h,n.method=`throw`,n.arg=c.arg)}}}function te(e,t){var n=t.method,r=e.iterator[n];if(r===i)return t.delegate=null,n===`throw`&&e.iterator.return&&(t.method=`return`,t.arg=i,te(e,t),t.method===`throw`)||n!==`return`&&(t.method=`throw`,t.arg=TypeError(`The iterator does not provide a '`+n+`' method`)),g;var a=d(r,e.iterator,t.arg);if(a.type===`throw`)return t.method=`throw`,t.arg=a.arg,t.delegate=null,g;var o=a.arg;if(!o)return t.method=`throw`,t.arg=TypeError(`iterator result is not an object`),t.delegate=null,g;if(o.done)t[e.resultName]=o.value,t.next=e.nextLoc,t.method!==`return`&&(t.method=`next`,t.arg=i);else return o;return t.delegate=null,g}w(C),l(C,c,`Generator`),l(C,o,function(){return this}),l(C,`toString`,function(){return`[object Generator]`});function ne(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type=`normal`,delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:`root`}],e.forEach(ne,this),this.reset(!0)}e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}};function O(e){if(e){var t=e[o];if(t)return t.call(e);if(typeof e.next==`function`)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=i,t.done=!0,t};return a.next=a}}return{next:k}}e.values=O;function k(){return{value:i,done:!0}}return D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method=`next`,this.arg=i,this.tryEntries.forEach(E),!e)for(var t in this)t.charAt(0)===`t`&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type===`throw`)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type=`throw`,s.arg=e,t.next=n,r&&(t.method=`next`,t.arg=i),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if(o.tryLoc===`root`)return r(`end`);if(o.tryLoc<=this.prev){var c=n.call(o,`catchLoc`),l=n.call(o,`finallyLoc`);if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else throw Error(`try statement without catch or finally`)}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,`finallyLoc`)&&this.prev<i.finallyLoc){var a=i;break}}a&&(e===`break`||e===`continue`)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method=`next`,this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if(e.type===`throw`)throw e.arg;return e.type===`break`||e.type===`continue`?this.next=e.arg:e.type===`return`?(this.rval=this.arg=e.arg,this.method=`return`,this.next=`end`):e.type===`normal`&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if(r.type===`throw`){var i=r.arg;E(n)}return i}}throw Error(`illegal catch attempt`)},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},this.method===`next`&&(this.arg=i),g}},e}(typeof t==`object`?t.exports:{});try{regeneratorRuntime=n}catch{typeof globalThis==`object`?globalThis.regeneratorRuntime=n:Function(`r`,`regeneratorRuntime = r`)(n)}})),Lt=a(((e,t)=>{t.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`})),Rt=a(((e,t)=>{var n=Lt(),r=0;t.exports=({id:e,action:t,payload:i={}})=>{let a=e;return a===void 0&&(a=n(`Job`,r),r+=1),{id:a,action:t,payload:i}}})),zt=a((e=>{var t=!1;e.logging=t,e.setLogging=e=>{t=e},e.log=(...n)=>t?console.log.apply(e,n):null})),Bt=a(((e,t)=>{var n=Rt(),{log:r}=zt(),i=Lt(),a=0;t.exports=()=>{let t=i(`Scheduler`,a),o={},s={},c=[];a+=1;let l=()=>c.length,u=()=>Object.keys(o).length,d=()=>{if(c.length!==0){let e=Object.keys(o);for(let t=0;t<e.length;t+=1)if(s[e[t]]===void 0){c[0](o[e[t]]);break}}},f=(i,a)=>new Promise((o,l)=>{let u=n({action:i,payload:a});c.push(async t=>{c.shift(),s[t.id]=u;try{o(await t[i].apply(e,[...a,u.id]))}catch(e){l(e)}finally{delete s[t.id],d()}}),r(`[${t}]: Add ${u.id} to JobQueue`),r(`[${t}]: JobQueue length=${c.length}`),d()});return{addWorker:e=>(o[e.id]=e,r(`[${t}]: Add ${e.id}`),r(`[${t}]: Number of workers=${u()}`),d(),e.id),addJob:async(e,...n)=>{if(u()===0)throw Error(`[${t}]: You need to have at least one worker before adding jobs`);return f(e,n)},terminate:async()=>{Object.keys(o).forEach(async e=>{await o[e].terminate()}),c=[]},getQueueLen:l,getNumWorkers:u}}})),Vt=a(((e,t)=>{t.exports=e=>{let t={};return typeof WorkerGlobalScope<`u`?t.type=`webworker`:typeof document==`object`?t.type=`browser`:typeof process==`object`&&typeof l==`function`&&(t.type=`node`),e===void 0?t:t[e]}})),Ht=a(((e,t)=>{var n=Vt()(`type`)===`browser`?e=>new URL(e,window.location.href).href:e=>e;t.exports=e=>{let t={...e};return[`corePath`,`workerPath`,`langPath`].forEach(r=>{e[r]&&(t[r]=n(t[r]))}),t}})),Ut=a(((e,t)=>{t.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}})),Wt=o({author:()=>``,browser:()=>en,bugs:()=>cn,collective:()=>un,contributors:()=>tn,default:()=>dn,dependencies:()=>an,description:()=>qt,devDependencies:()=>rn,homepage:()=>ln,jsdelivr:()=>Qt,license:()=>nn,main:()=>Jt,name:()=>Gt,overrides:()=>on,repository:()=>sn,scripts:()=>$t,type:()=>Yt,types:()=>Xt,unpkg:()=>Zt,version:()=>Kt}),Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn=i((()=>{Gt=`tesseract.js`,Kt=`7.0.0`,qt=`Pure Javascript Multilingual OCR`,Jt=`src/index.js`,Yt=`commonjs`,Xt=`src/index.d.ts`,Zt=`dist/tesseract.min.js`,Qt=`dist/tesseract.min.js`,$t={start:`node scripts/server.js`,build:`rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs`,"profile:tesseract":`webpack-bundle-analyzer dist/tesseract-stats.json`,"profile:worker":`webpack-bundle-analyzer dist/worker-stats.json`,prepublishOnly:`npm run build`,wait:`rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js`,test:`npm-run-all -p -r start test:all`,"test:all":`npm-run-all wait test:browser test:node:all`,"test:browser":`karma start karma.conf.js`,"test:node":`nyc mocha --exit --bail --require ./scripts/test-helper.mjs`,"test:node:all":`npm run test:node -- ./tests/*.test.mjs`,lint:`eslint src`,"lint:fix":`eslint --fix src`,postinstall:`opencollective-postinstall || true`},en={"./src/worker/node/index.js":`./src/worker/browser/index.js`},tn=[`jeromewu`],nn=`Apache-2.0`,rn={"@babel/core":`^7.21.4`,"@babel/eslint-parser":`^7.21.3`,"@babel/preset-env":`^7.21.4`,"@rollup/plugin-commonjs":`^24.1.0`,acorn:`^8.8.2`,"babel-loader":`^9.1.2`,buffer:`^6.0.3`,cors:`^2.8.5`,eslint:`^7.32.0`,"eslint-config-airbnb-base":`^14.2.1`,"eslint-plugin-import":`^2.27.5`,"expect.js":`^0.3.1`,express:`^4.18.2`,mocha:`^10.2.0`,"npm-run-all":`^4.1.5`,karma:`^6.4.2`,"karma-chrome-launcher":`^3.2.0`,"karma-firefox-launcher":`^2.1.2`,"karma-mocha":`^2.0.1`,"karma-webpack":`^5.0.0`,nyc:`^15.1.0`,rimraf:`^5.0.0`,rollup:`^3.20.7`,"wait-on":`^7.0.1`,webpack:`^5.79.0`,"webpack-bundle-analyzer":`^4.8.0`,"webpack-cli":`^5.0.1`,"webpack-dev-middleware":`^6.0.2`,"rollup-plugin-sourcemaps":`^0.6.3`},an={"bmp-js":`^0.1.0`,"idb-keyval":`^6.2.0`,"is-url":`^1.2.4`,"node-fetch":`^2.6.9`,"opencollective-postinstall":`^2.0.3`,"regenerator-runtime":`^0.13.3`,"tesseract.js-core":`^7.0.0`,"wasm-feature-detect":`^1.8.0`,zlibjs:`^0.3.1`},on={"@rollup/pluginutils":`^5.0.2`},sn={type:`git`,url:`https://github.com/naptha/tesseract.js.git`},cn={url:`https://github.com/naptha/tesseract.js/issues`},ln=`https://github.com/naptha/tesseract.js`,un={type:`opencollective`,url:`https://opencollective.com/tesseractjs`},dn={name:Gt,version:Kt,description:qt,main:Jt,type:Yt,types:Xt,unpkg:Zt,jsdelivr:Qt,scripts:$t,browser:en,author:``,contributors:tn,license:nn,devDependencies:rn,dependencies:an,overrides:on,repository:sn,bugs:cn,homepage:ln,collective:un}})),pn=a(((e,t)=>{t.exports={workerBlobURL:!0,logger:()=>{}}})),mn=a(((e,t)=>{var n=(fn(),c(Wt).default).version;t.exports={...pn(),workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${n}/dist/worker.min.js`}})),hn=a(((e,t)=>{t.exports=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){let t=new Blob([`importScripts("${e}");`],{type:`application/javascript`});n=new Worker(URL.createObjectURL(t))}else n=new Worker(e);return n}})),gn=a(((e,t)=>{t.exports=e=>{e.terminate()}})),_n=a(((e,t)=>{t.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}})),vn=a(((e,t)=>{t.exports=async(e,t)=>{e.postMessage(t)}})),yn=a(((e,t)=>{var n=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:e}}})=>{n(Error(`File could not be read! Code=${e}`))},r.readAsArrayBuffer(e)}),r=async e=>{let t=e;return e===void 0?`undefined`:(typeof e==`string`?t=/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(`,`)[1]).split(``).map(e=>e.charCodeAt(0)):await(await fetch(e)).arrayBuffer():typeof HTMLElement<`u`&&e instanceof HTMLElement?(e.tagName===`IMG`&&(t=await r(e.src)),e.tagName===`VIDEO`&&(t=await r(e.poster)),e.tagName===`CANVAS`&&await new Promise(r=>{e.toBlob(async e=>{t=await n(e),r()})})):typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?t=await n(await e.convertToBlob()):(e instanceof File||e instanceof Blob)&&(t=await n(e)),new Uint8Array(t))};t.exports=r})),bn=a(((e,t)=>{t.exports={defaultOptions:mn(),spawnWorker:hn(),terminateWorker:gn(),onMessage:_n(),send:vn(),loadImage:yn()}})),xn=a(((e,t)=>{var n=Ht(),r=Rt(),{log:i}=zt(),a=Lt(),o=Ut(),{defaultOptions:s,spawnWorker:c,terminateWorker:l,onMessage:u,loadImage:d,send:f}=bn(),p=0;t.exports=async(e=`eng`,t=o.LSTM_ONLY,m={},h={})=>{let g=a(`Worker`,p),{logger:_,errorHandler:v,...y}=n({...s,...m}),b={},x=typeof e==`string`?e.split(`+`):e,S=t,C=h,w=[o.DEFAULT,o.LSTM_ONLY].includes(t)&&!y.legacyCore,T,ee,te=new Promise((e,t)=>{ee=e,T=t}),ne=e=>{T(e.message)},E=c(y);E.onerror=ne,p+=1;let D=({id:e,action:t,payload:n})=>new Promise((r,a)=>{i(`[${g}]: Start ${e}, action=${t}`);let o=`${t}-${e}`;b[o]={resolve:r,reject:a},f(E,{workerId:g,jobId:e,action:t,payload:n})}),O=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),k=e=>D(r({id:e,action:`load`,payload:{options:{lstmOnly:w,corePath:y.corePath,logging:y.logging}}})),re=(e,t,n)=>D(r({id:n,action:`FS`,payload:{method:`writeFile`,args:[e,t]}})),A=(e,t)=>D(r({id:t,action:`FS`,payload:{method:`readFile`,args:[e,{encoding:`utf8`}]}})),ie=(e,t)=>D(r({id:t,action:`FS`,payload:{method:`unlink`,args:[e]}})),j=(e,t,n)=>D(r({id:n,action:`FS`,payload:{method:e,args:t}})),ae=(e,t)=>D(r({id:t,action:`loadLanguage`,payload:{langs:e,options:{langPath:y.langPath,dataPath:y.dataPath,cachePath:y.cachePath,cacheMethod:y.cacheMethod,gzip:y.gzip,lstmOnly:[o.DEFAULT,o.LSTM_ONLY].includes(S)&&!y.legacyLang}}})),oe=(e,t,n,i)=>D(r({id:i,action:`initialize`,payload:{langs:e,oem:t,config:n}})),se=(e=`eng`,t,n,r)=>{if(w&&[o.TESSERACT_ONLY,o.TESSERACT_LSTM_COMBINED].includes(t))throw Error(`Legacy model requested but code missing.`);let i=t||S;S=i;let a=n||C;C=a;let s=(typeof e==`string`?e.split(`+`):e).filter(e=>!x.includes(e));return x.push(...s),s.length>0?ae(s,r).then(()=>oe(e,i,a,r)):oe(e,i,a,r)},ce=(e={},t)=>D(r({id:t,action:`setParameters`,payload:{params:e}})),M=async(e,t={},n={text:!0},i)=>D(r({id:i,action:`recognize`,payload:{image:await d(e),options:t,output:n}})),le=async(e,t)=>{if(w)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return D(r({id:t,action:`detect`,payload:{image:await d(e)}}))},N=async()=>(E!==null&&(l(E),E=null),Promise.resolve());u(E,({workerId:e,jobId:t,status:n,action:r,data:a})=>{let o=`${r}-${t}`;if(n===`resolve`)i(`[${e}]: Complete ${t}`),b[o].resolve({jobId:t,data:a}),delete b[o];else if(n===`reject`)if(b[o].reject(a),delete b[o],r===`load`&&T(a),v)v(a);else throw Error(a);else n===`progress`&&_({...a,userJobId:t})});let P={id:g,worker:E,load:O,writeText:re,readText:A,removeFile:ie,FS:j,reinitialize:se,setParameters:ce,recognize:M,detect:le,terminate:N};return k().then(()=>ae(e)).then(()=>oe(e,t,h)).then(()=>ee(P)).catch(()=>{}),te}})),Sn=a(((e,t)=>{var n=xn();t.exports={recognize:async(e,t,r)=>{let i=await n(t,1,r);return i.recognize(e).finally(async()=>{await i.terminate()})},detect:async(e,t)=>{let r=await n(`osd`,0,t);return r.detect(e).finally(async()=>{await r.terminate()})}}})),Cn=a(((e,t)=>{t.exports={AFR:`afr`,AMH:`amh`,ARA:`ara`,ASM:`asm`,AZE:`aze`,AZE_CYRL:`aze_cyrl`,BEL:`bel`,BEN:`ben`,BOD:`bod`,BOS:`bos`,BUL:`bul`,CAT:`cat`,CEB:`ceb`,CES:`ces`,CHI_SIM:`chi_sim`,CHI_TRA:`chi_tra`,CHR:`chr`,CYM:`cym`,DAN:`dan`,DEU:`deu`,DZO:`dzo`,ELL:`ell`,ENG:`eng`,ENM:`enm`,EPO:`epo`,EST:`est`,EUS:`eus`,FAS:`fas`,FIN:`fin`,FRA:`fra`,FRK:`frk`,FRM:`frm`,GLE:`gle`,GLG:`glg`,GRC:`grc`,GUJ:`guj`,HAT:`hat`,HEB:`heb`,HIN:`hin`,HRV:`hrv`,HUN:`hun`,IKU:`iku`,IND:`ind`,ISL:`isl`,ITA:`ita`,ITA_OLD:`ita_old`,JAV:`jav`,JPN:`jpn`,KAN:`kan`,KAT:`kat`,KAT_OLD:`kat_old`,KAZ:`kaz`,KHM:`khm`,KIR:`kir`,KOR:`kor`,KUR:`kur`,LAO:`lao`,LAT:`lat`,LAV:`lav`,LIT:`lit`,MAL:`mal`,MAR:`mar`,MKD:`mkd`,MLT:`mlt`,MSA:`msa`,MYA:`mya`,NEP:`nep`,NLD:`nld`,NOR:`nor`,ORI:`ori`,PAN:`pan`,POL:`pol`,POR:`por`,PUS:`pus`,RON:`ron`,RUS:`rus`,SAN:`san`,SIN:`sin`,SLK:`slk`,SLV:`slv`,SPA:`spa`,SPA_OLD:`spa_old`,SQI:`sqi`,SRP:`srp`,SRP_LATN:`srp_latn`,SWA:`swa`,SWE:`swe`,SYR:`syr`,TAM:`tam`,TEL:`tel`,TGK:`tgk`,TGL:`tgl`,THA:`tha`,TIR:`tir`,TUR:`tur`,UIG:`uig`,UKR:`ukr`,URD:`urd`,UZB:`uzb`,UZB_CYRL:`uzb_cyrl`,VIE:`vie`,YID:`yid`}})),wn=a(((e,t)=>{t.exports={OSD_ONLY:`0`,AUTO_OSD:`1`,AUTO_ONLY:`2`,AUTO:`3`,SINGLE_COLUMN:`4`,SINGLE_BLOCK_VERT_TEXT:`5`,SINGLE_BLOCK:`6`,SINGLE_LINE:`7`,SINGLE_WORD:`8`,CIRCLE_WORD:`9`,SINGLE_CHAR:`10`,SPARSE_TEXT:`11`,SPARSE_TEXT_OSD:`12`,RAW_LINE:`13`}})),Tn=a(((e,t)=>{It();var n=Bt(),r=xn(),i=Sn(),a=Cn(),o=Ut(),s=wn(),{setLogging:c}=zt();t.exports={languages:a,OEM:o,PSM:s,createScheduler:n,createWorker:r,setLogging:c,...i}}));async function En(){return On||(On=await(0,Dn.createWorker)(`eng`),On)}var Dn,On,kn=i((()=>{Dn=Tn(),On=null}));async function An(e){return new Promise(t=>{let n=new Image;n.onload=()=>{let e=document.createElement(`canvas`),r=e.getContext(`2d`),i=369/n.width;e.width=369,e.height=Math.round(n.height*i),r.imageSmoothingEnabled=!1,r.drawImage(n,0,0,e.width,e.height);let a=r.getImageData(0,0,e.width,e.height),o=a.data;for(let e=0;e<o.length;e+=4){let t=.299*o[e]+.587*o[e+1]+.114*o[e+2];o[e]=t,o[e+1]=t,o[e+2]=t}r.putImageData(a,0,0),t(e)},n.src=URL.createObjectURL(e)})}var jn=i((()=>{})),X,Mn=i((()=>{X={targetWidth:369,anchorSearch:{x:0,y:0,width:369,height:200},anchorText:`Troop Power`,firstRowOffset:18,listTopFallback:145,rowHeight:68,rowGap:4,minRowGap:24,avatarProbe:{x:18,width:60,height:52,threshold:18},regions:{name:{x:78,y:8,width:175,height:24},power:{x:96,y:29,width:88,height:24,scale:4,numericOnly:!0},status:{x:78,y:47,width:190,height:20},engagement:{x:246,y:8,width:110,height:54}}}}));function Nn(e,t){let n=document.createElement(`canvas`),r=n.getContext(`2d`),i=t.scale??1;return n.width=t.width*i,n.height=t.height*i,r.imageSmoothingEnabled=!1,r.drawImage(e,t.x,t.y,t.width,t.height,0,0,n.width,n.height),t.numericOnly&&Pn(n),n}function Pn(e){let t=e.getContext(`2d`),n=t.getImageData(0,0,e.width,e.height),r=n.data;for(let e=0;e<r.length;e+=4){let t=.299*r[e]+.587*r[e+1]+.114*r[e+2]>150?255:0;r[e]=t,r[e+1]=t,r[e+2]=t,r[e+3]=255}t.putImageData(n,0,0)}function Fn(e,t){let n=[],r=Math.max(X.listTopFallback,(t?.bottom??0)+X.firstRowOffset),i=-1/0;for(let t=r;t<=e.height-X.rowHeight;t+=1){if(t-i<X.minRowGap||In(e,t)<X.avatarProbe.threshold)continue;let r=Ln(e,t);n.push({y:r,canvas:Nn(e,{x:0,y:r,width:e.width,height:Math.min(X.rowHeight,e.height-r)})}),i=r,t=r+X.rowHeight-1}return n}function In(e,t){let n=X.avatarProbe,r=e.getContext(`2d`).getImageData(n.x,t,n.width,Math.min(n.height,e.height-t)).data,i=0,a=0,o=0;for(let e=0;e<r.length;e+=4){let t=.299*r[e]+.587*r[e+1]+.114*r[e+2];i+=t,a+=t*t,o+=1}let s=i/o,c=a/o-s*s;return Math.sqrt(Math.max(c,0))}function Ln(e,t){let n=t,r=-1/0;for(let i=Math.max(0,t-8);i<=Math.min(e.height-X.rowHeight,t+8);i+=1){let t=In(e,i);t>r&&(r=t,n=i)}return n}var Rn=i((()=>{Mn()}));async function zn(e){let t=await En(),n=[];for(let r of e){let e=await An(r),i=Bn(e),{data:a}=await t.recognize(i),o=Vn(a),s=qn(a.text),c=Fn(e,o),l=[];for(let e=0;e<c.length;e+=1){let n=await Hn(t,c[e],r.name,e,s);n&&l.push(n)}n.push({filename:r.name,anchorText:a.text,anchorFound:!!o,screenshotLegion:s,combatants:l,rowCount:c.length})}return n}function Bn(e){return Nn(e,X.anchorSearch)}function Vn(e){let t=e.words??[],n=X.anchorText.toLowerCase().split(/\s+/);for(let e=0;e<t.length;e+=1){let r=Z(t[e].text),i=Z(t[e+1]?.text??``);if(r.includes(n[0])&&i.includes(n[1]))return{x:t[e].bbox.x0,y:Math.min(t[e].bbox.y0,t[e+1].bbox.y0),bottom:Math.max(t[e].bbox.y1,t[e+1].bbox.y1)}}return Z(e.text).includes(X.anchorText.toLowerCase())?{x:X.anchorSearch.x,y:X.listTopFallback-X.firstRowOffset,bottom:X.listTopFallback-X.firstRowOffset}:null}async function Hn(e,t,n,r,i){let a=await Un(e,t.canvas,X.regions.name),o=await Un(e,t.canvas,X.regions.power),s=await Un(e,t.canvas,X.regions.status),c=await Un(e,t.canvas,X.regions.engagement),l=Wn(a),u=Kn(o),d=Jn(s,c,i),f=Gn(c);return!l||u===null||u<=0||Xn(l)||Zn(f)?null:{id:Qn(l),name:l,power:u,legion:d.legion,legionSource:d.source,status:Gn(s),engagement:f,sourceFile:n,sourceRow:r,sourceY:t.y}}async function Un(e,t,n){n.numericOnly&&await e.setParameters({tessedit_char_whitelist:`0123456789,.`,tessedit_pageseg_mode:`7`});let{data:{text:r}}=await e.recognize(Nn(t,n));return n.numericOnly&&await e.setParameters({tessedit_char_whitelist:``,tessedit_pageseg_mode:`3`}),r}function Z(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim()}function Wn(e){return String(e).replace(/[^\S\r\n]+/g,` `).replace(/\n+/g,` `).replace(/[^\p{L}\p{N}\s'._-]/gu,``).trim()}function Gn(e){return String(e).replace(/[^\S\r\n]+/g,` `).replace(/\n+/g,` `).trim()}function Kn(e){let t=(String(e).replace(/[oO]/g,`0`).replace(/[lI|]/g,`1`).match(/\d[\d,.\s]*/g)??[]).map(e=>Number.parseInt(e.replace(/[^\d]/g,``),10)).filter(e=>Number.isFinite(e)&&e>=100&&e<=1e8);return t.length===0?null:t.sort((e,t)=>t-e)[0]}function qn(e){let t=Z(e).match(/legion\s*(\d+)\s*combatants/);if(!t)return null;let n=Number.parseInt(t[1],10);return Number.isFinite(n)?n:null}function Jn(e,t,n){let r=Z(t);if(n!==null&&Yn(r))return{legion:n,source:`row-action`};let i=Z(e).match(/legion\s*(\d+)\s*dispatched/);if(i){let e=Number.parseInt(i[1],10);return{legion:Number.isFinite(e)?e:null,source:`dispatched-status`}}return{legion:null,source:`unknown`}}function Yn(e){return e.includes(`join`)||e.includes(`substitute`)||e.includes(`substitue`)||e.includes(`j0in`)}function Xn(e){return[`leader`,`officers`,`troop power`,`join`,`substitute`].includes(Z(e))}function Zn(e){let t=Z(e);return t.includes(`no engagement`)||t.includes(`no engagements`)||t.includes(`noengagement`)}function Qn(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}var $n=i((()=>{kn(),jn(),Mn(),Rn()}));async function er(e,t){switch(e){case`foundry`:return zn(t);default:throw Error(`${e} parser not implemented.`)}}var tr=i((()=>{$n()}));async function nr(e,t){return er(e,t)}var rr=i((()=>{tr()}));function ir(e=[]){let t=document.getElementById(`roster-page`);if(!t)return;let n=ar(e);if(n.length===0){t.innerHTML=`
            <div class="card">

                <h2>Combatant Roster</h2>

                <p>
                    No combatants have been imported yet.
                </p>

            </div>
        `;return}let r=[...n].sort((e,t)=>or(t)-or(e));t.innerHTML=`
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
    `;let i=document.getElementById(`roster-list`);r.forEach(e=>{let t=document.createElement(`div`);t.className=`roster-row`,t.innerHTML=`
            <span>${e.name}</span>
            <span>${or(e).toLocaleString()}</span>
            <span>${e.foundryAssignment??e.assignment??``}</span>
            <span>${e.canyonAssignment??``}</span>
        `,i.appendChild(t)})}function ar(e){return Array.isArray(e)&&e.length>0?e:F()}function or(e){return e.troopPower??e.power??0}var sr=i((()=>{z()}));function cr(){let e=document.getElementById(`import-page`);e&&(e.innerHTML=`
        <div class="card">

            <h2>Import & Roster Editor</h2>

            <p>
                Manually maintain shared combatant data or upload screenshots
                when an event parser is available.
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
    `,document.getElementById(`process-images`).addEventListener(`click`,async()=>{let e=document.getElementById(`event-select`).value,t=[...document.getElementById(`combatant-upload`).files];if(t.length===0){alert(`Please select one or more screenshots.`);return}let n=document.getElementById(`import-results`);n.innerHTML=`<p>Processing...</p>`;try{let r=await nr(e,t);$=r.flatMap(e=>e.combatants??[]).map(gr),ur(n,r)}catch(e){console.error(e),n.innerHTML=`
                    <p class="error">
                        ${e.message}
                    </p>
                `}}),document.getElementById(`load-current-combatants`).addEventListener(`click`,()=>{let e=document.getElementById(`import-results`);$=ye().map(gr),lr(e)}))}function lr(e){e.innerHTML=`
        <div class="ocr-result">
            <h3>Current Combatants</h3>
            <p>${$.length} combatants loaded for editing.</p>
        </div>

        ${dr($)}
    `,fr(e)}function ur(e,t){e.innerHTML=`
        ${t.map(e=>`
            <div class="ocr-result">

                <h3>${wr(e.filename)}</h3>

                <p>
                    Anchor ${e.anchorFound?`found`:`not found`}.
                    ${e.screenshotLegion?`Legion ${e.screenshotLegion}.`:``}
                    ${e.combatants?.length??0} combatants parsed.
                </p>

                <pre>${wr(e.anchorText??`No anchor detected.`)}</pre>

            </div>
        `).join(``)}

        ${dr($)}
    `,fr(e)}function dr(e=[]){return`
        <div class="review-panel">
            <h3>Review Combatants</h3>

            ${e.length===0?`<p>No combatants loaded.</p>`:``}

            <div class="review-grid">
                <div class="review-row review-header">
                    <div class="review-heading">Name</div>
                    <div class="review-heading">Troop Power</div>
                    <div class="review-heading">Foundry Assignment</div>
                    <div class="review-heading">Canyon Assignment</div>
                    <div class="review-heading">Hero Total Power</div>
                    <div class="review-heading">Labyrinth Levels</div>
                    <div class="review-heading"></div>
                </div>

                ${e.map((e,t)=>`
                    <div class="review-row">
                        <input
                            data-review-index="${t}"
                            data-review-field="name"
                            required
                            value="${Tr(e.name)}">

                        <input
                            data-review-index="${t}"
                            data-review-field="troopPower"
                            inputmode="numeric"
                            value="${Tr(String(br(e)??``))}">

                        <div class="review-assignment-options">
                            ${Q(t,e,`foundryAssignment`,`Legion 1`)}
                            ${Q(t,e,`foundryAssignment`,`Legion 2`)}
                            ${Q(t,e,`foundryAssignment`,`No engagement`)}
                        </div>

                        <div class="review-assignment-options">
                            ${Q(t,e,`canyonAssignment`,`Legion 1`)}
                            ${Q(t,e,`canyonAssignment`,`Legion 2`)}
                            ${Q(t,e,`canyonAssignment`,`No engagement`)}
                        </div>

                        <input
                            data-review-index="${t}"
                            data-review-field="heroTotalPower"
                            inputmode="numeric"
                            value="${Tr(String(e.heroTotalPower??``))}">

                        <input
                            data-review-index="${t}"
                            data-review-field="labyrinthLevels"
                            inputmode="numeric"
                            value="${Tr(String(e.labyrinthLevels??``))}">

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
    `}function Q(e,t,n,r){let i=yr(n===`foundryAssignment`?xr(t):t[n]);return`
        <label class="review-radio-option">
            <input
                class="review-assignment-choice"
                type="radio"
                name="${n}-${e}"
                data-review-index="${e}"
                data-review-field="${n}"
                value="${Tr(r)}"
                ${i===r?`checked`:``}>
            <span>${wr(r)}</span>
        </label>
    `}function fr(e){e.querySelectorAll(`[data-review-index]`).forEach(e=>{e.addEventListener(`change`,()=>{pr(e)})}),e.querySelectorAll(`[data-remove-review-index]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Number.parseInt(e.dataset.removeReviewIndex,10);$.splice(t,1);let n=document.getElementById(`import-results`);n.innerHTML=dr($),fr(n)})});let t=e.querySelector(`#save-reviewed-combatants`),n=e.querySelector(`#add-reviewed-combatant`);n&&n.addEventListener(`click`,()=>{$.push(_r()),lr(document.getElementById(`import-results`))}),t&&t.addEventListener(`click`,async()=>{let t=e.querySelector(`#review-save-status`);t.textContent=`Saving...`;try{if($.some(e=>!e.name?.trim())){t.textContent=`Name is required for every combatant.`;return}await _e(`combatants`,$.map(hr)),H(),ir(ye()),t.textContent=`Saved. Battlefield assignments refreshed.`}catch(e){console.error(e),t.textContent=e.message}})}function pr(e){let t=Number.parseInt(e.dataset.reviewIndex,10),n=e.dataset.reviewField;!$[t]||!n||($[t]={...$[t],[n]:mr(n,e.value)})}function mr(e,t){if(e===`troopPower`||e===`heroTotalPower`||e===`labyrinthLevels`){let e=Number.parseInt(String(t).replace(/,/g,``),10);return Number.isFinite(e)?e:null}return t.trim()}function hr(e){let t=e.name?.trim()??``,n=yr(xr(e)),r=yr(e.canyonAssignment),i=Number.parseInt(br(e),10)||0;return{...e,id:Cr(t),name:t,troopPower:i,power:i,legion:Sr(n),foundryAssignment:n,assignment:n,canyonAssignment:r,heroTotalPower:Number.parseInt(e.heroTotalPower,10)||0,labyrinthLevels:Number.parseInt(e.labyrinthLevels,10)||0}}function gr(e){return{...e,troopPower:br(e),foundryAssignment:e.foundryAssignment??e.assignment??vr(e),canyonAssignment:e.canyonAssignment??`No engagement`}}function _r(){return{id:``,name:``,troopPower:0,power:0,legion:null,foundryAssignment:`No engagement`,assignment:`No engagement`,canyonAssignment:`No engagement`,heroTotalPower:0,labyrinthLevels:0,sourceFile:`manual`,sourceRow:null,sourceY:null}}function vr(e){return e.legion?`Legion ${e.legion}`:`No engagement`}function yr(e){return e===`Legion 1`||e===`Legion 2`?e:`No engagement`}function br(e){return e.troopPower??e.power??0}function xr(e){return e.foundryAssignment??e.assignment}function Sr(e){return e===`Legion 1`?1:e===`Legion 2`?2:null}function Cr(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}function wr(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function Tr(e){return wr(e)}var $,Er=i((()=>{rr(),z(),G(),sr(),$=[]}));async function Dr(){_(),cr(),await Or(),Ot(),Dt(),H(),ir(ye())}async function Or(){try{await Promise.race([ge(),new Promise((e,t)=>{setTimeout(()=>t(Error(`Command data load timed out.`)),6e3)})])}catch(e){console.warn(`Using available command data fallback.`,e)}}var kr=i((()=>{b(),z(),Y(),G(),Er(),sr(),document.addEventListener(`DOMContentLoaded`,()=>{Dr()})}));a((()=>{u(),kr(),Y(),ue(),Er(),sr(),document.addEventListener(`DOMContentLoaded`,()=>{})}))();export{i as t};