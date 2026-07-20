const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-C1ZIbMjd.js","assets/index.esm-DU3C6dKd.js","assets/index.esm-u78z89Si.js"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,i=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},a=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),o=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},s=(i,a,o,s)=>{if(a&&typeof a==`object`||typeof a==`function`)for(var c=n(a),l=0,u=c.length,d;l<u;l++)d=c[l],!r.call(i,d)&&d!==o&&e(i,d,{get:(e=>a[e]).bind(null,d),enumerable:!(s=t(a,d))||s.enumerable});return i},c=t=>r.call(t,`module.exports`)?t[`module.exports`]:s(e({},`__esModule`,{value:!0}),t),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=i((()=>{}));function d(){return sessionStorage.getItem(`admin`)===`true`}function f(e){return e===ee?(sessionStorage.setItem(`admin`,`true`),!0):!1}var ee,p=i((()=>{ee=`NWOFoundry2026`}));function m(e){let t=prompt(`Administrator Password`);t!==null&&(f(t)?e():alert(`Incorrect password.`))}var h=i((()=>{p()}));function g(){let e=document.querySelectorAll(`.page`),t=document.querySelectorAll(`.nav-button, .subnav-button`),n=n=>{let r=document.getElementById(n);if(!r)return;e.forEach(e=>e.classList.remove(`active`)),t.forEach(e=>e.classList.remove(`active`)),document.querySelectorAll(`[data-page="${n}"]`).forEach(e=>{let t=e.dataset.navGroup;t&&document.querySelectorAll(`[data-nav-group="${t}"]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)});let i=v(n);[`foundry`,`canyon`].includes(i)&&(document.querySelector(`[data-nav-group="main"][data-page="events"]`)?.classList.add(`active`),document.querySelector(`[data-nav-group="${i}"][data-page="${n}"]`)?.classList.add(`active`)),r.classList.add(`active`)},r=e=>{let t=()=>{n(e);let t=`#${e}`;globalThis.location.hash!==t&&globalThis.history.pushState(null,``,t)};if(e===`import`&&!d()){m(t);return}t()};t.forEach(e=>{e.addEventListener(`click`,()=>{r(e.dataset.page)})}),globalThis.addEventListener(`hashchange`,()=>{r(_())}),r(_())}function _(){return globalThis.location.hash.replace(`#`,``)||`events`}function v(e){return document.querySelector(`[data-page="${e}"]`)?.dataset.navGroup??null}var y=i((()=>{p(),h()})),b,x=i((()=>{b=[{id:`nick`,displayName:`Nicholas`},{id:`kazuma`,displayName:`Kazuma`},{id:`nooch`,displayName:`Nooch`}]})),S,C=i((()=>{S=[]})),w,te=i((()=>{w={opening:{boiler:[{chief:`nick`,assignment:`Lead`},{chief:`kazuma`,assignment:`Support`}],"workshop-west":[{chief:`nooch`,assignment:`Lead`}],"prototype-west":[]},mid:{"prototype-west":[{chief:`nick`,assignment:`Lead`}],"prototype-east":[{chief:`kazuma`,assignment:`Lead`}],mercenary:[{chief:`nooch`,assignment:`Lead`}]},final:{imperial:[{chief:`nick`,assignment:`Support`}]}}})),T,ne=i((()=>{T={strategyName:`Legion 2 Standard`,version:`0.2.0`,commander:`Kazuma`,eventDate:``,eventDuration:60,phases:{opening:{label:`0–15 Minutes`},mid:{label:`15–45 Minutes`},final:{label:`45 Minutes–End`}}}})),E,D=i((()=>{E=[{id:`boiler`,name:`Boiler`,x:30,y:5,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Building capture speed buff.`},mid:{priority:`Critical`,strategy:`Maintain control.`,why:`Critical Phase 2 control objective.`},final:{priority:`Critical`,strategy:`Maintain control.`,why:`Critical Phase 3 control objective.`}}},{id:`repair-north`,name:`North Repair`,x:58,y:5,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if available.`,why:`Extra points.`},mid:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Lower Phase 2 priority.`},final:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Medium Phase 3 support value.`}}},{id:`workshop-northwest`,name:`NW Workshop`,x:20,y:15,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},mid:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},final:{priority:`Medium`,strategy:`Gather for points.`,why:`Secondary objective.`}}},{id:`mercenary`,name:`Mercenary Camp`,x:45,y:15,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`Critical`,strategy:`Capture immediately.`,why:`Critical Phase 2 objective.`},final:{priority:`High`,strategy:`Maintain control.`,why:`High Phase 3 objective.`}}},{id:`workshop-northeast`,name:`NE Workshop`,x:70,y:20,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},mid:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},final:{priority:`Medium`,strategy:`Gather for points.`,why:`Secondary objective.`}}},{id:`prototype-west`,name:`West Prototype`,x:20,y:30,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture immediately.`,why:`High Phase 1 objective.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`High Phase 2 objective.`},final:{priority:`High`,strategy:`Maintain control if practical.`,why:`Equal high-priority Prototype objective.`}}},{id:`repair-west`,name:`West Repair`,x:10,y:40,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Lower Phase 2 priority.`},final:{priority:`Low`,strategy:`Hold as a secondary objective.`,why:`Low Phase 3 support value.`}}},{id:`imperial`,name:`Imperial Foundry`,x:45,y:35,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`High`,strategy:`Capture and contest.`,why:`High Phase 2 objective.`},final:{priority:`Critical`,strategy:`Primary objective.`,why:`Highest value objective.`}}},{id:`repair-east`,name:`East Repair`,x:80,y:35,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Lower Phase 2 priority.`},final:{priority:`Low`,strategy:`Hold as a secondary objective.`,why:`Low Phase 3 support value.`}}},{id:`prototype-east`,name:`East Prototype`,x:70,y:45,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture immediately.`,why:`High Phase 1 objective.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`High Phase 2 objective.`},final:{priority:`High`,strategy:`Maintain control if practical.`,why:`Equal high-priority Prototype objective.`}}},{id:`workshop-southwest`,name:`SW Workshop`,x:26,y:55,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},mid:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},final:{priority:`Medium`,strategy:`Gather for points.`,why:`Secondary objective.`}}},{id:`workshop-southeast`,name:`SE Workshop`,x:61,y:60,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},mid:{priority:`Low`,strategy:`Locked.`,why:`Unlocks in Phase 3.`},final:{priority:`Medium`,strategy:`Gather for points.`,why:`Secondary objective.`}}},{id:`munitions`,name:`Munitions Factory`,x:45,y:60,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`Critical`,strategy:`Capture immediately.`,why:`Powerful combat buff.`},final:{priority:`High`,strategy:`Maintain control.`,why:`High Phase 3 objective.`}}},{id:`repair-south`,name:`South Repair`,x:31,y:75,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Low`,strategy:`Rotate away unless needed.`,why:`Lower Phase 2 priority.`},final:{priority:`Low`,strategy:`Hold as a secondary objective.`,why:`Medium Phase 3 support value.`}}},{id:`transit`,name:`Transit Station`,x:60,y:75,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Major mobility advantage.`},mid:{priority:`Medium`,strategy:`Hold if practical.`,why:`Medium Phase 2 rotation value.`},final:{priority:`Low`,strategy:`Use only when needed for rotations.`,why:`Lower Phase 3 priority.`}}}]})),O,k,re,A,ie=i((()=>{O=`modulepreload`,k=function(e){return`/`+e},re={},A=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=k(t,n),t=s(t),t in re)return;re[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:O,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}}));function j(){return ae().length===0}function ae(){return Object.entries(le).filter(([,e])=>!e).map(([e])=>e)}function oe(){return{configured:j(),missingKeys:ae()}}async function se(){if(!j())return null;if(!N){let{initializeApp:e}=await A(async()=>{let{initializeApp:e}=await import(`./index.esm-C1ZIbMjd.js`);return{initializeApp:e}},__vite__mapDeps([0,1]));N=e(M)}return N}async function ce(){if(!j())return null;if(!P){let[e,{getFirestore:t}]=await Promise.all([se(),A(()=>import(`./index.esm-u78z89Si.js`),__vite__mapDeps([2,1]))]);P=t(e)}return P}var M,le,N,P,ue=i((()=>{ie(),M={apiKey:`AIzaSyDnOfdz8WQsvxr5oJaFzS8EdNJtdsQYgqQ`,authDomain:`wos-command-center.firebaseapp.com`,projectId:`wos-command-center`,storageBucket:`wos-command-center.firebasestorage.app`,messagingSenderId:`853155306331`,appId:`1:853155306331:web:f37dc257fa6950d0f2d87e`},le={VITE_FIREBASE_API_KEY:M.apiKey,VITE_FIREBASE_PROJECT_ID:M.projectId,VITE_FIREBASE_APP_ID:M.appId},N=null,P=null}));function de(){let e=globalThis.location?.hostname;return e===`localhost`||e===`127.0.0.1`||e===``}function fe(e,t){if(!e.exists())return R[t];let n=e.data();return Array.isArray(R[t])?Array.isArray(n.items)?n.items:R[t]:n.value??n}function pe(e,t){return Promise.race([e,new Promise((e,n)=>{setTimeout(()=>n(Error(t)),we)})])}function me(e){return e?.code===`unavailable`||e?.message?.toLowerCase().includes(`client is offline`)||e?.message?.toLowerCase().includes(`offline`)}function he(e){return me(e)?Error(`Combatants were not saved. Firestore is configured, but the app cannot reach Firebase from this browser. Check network access, Firestore setup, and Firebase Hosting env build settings.`):Error(`Combatants were not saved to Firebase. ${e.message}`)}async function ge(){if(!j()){if(!de()){let e=oe();console.warn(`Firebase is not configured. Using bundled local data fallback.`,e.missingKeys)}return R}try{let[e,{doc:t,getDoc:n}]=await Promise.all([ce(),A(()=>import(`./index.esm-u78z89Si.js`),__vite__mapDeps([2,1]))]);if(!e)return R;let r=await Promise.all(Object.entries(Ce).map(async([r,i])=>[r,fe(await pe(n(t(e,Se,i)),`Timed out loading ${i} from Firebase.`),r)]));R={...R,...Object.fromEntries(r)}}catch(e){console.warn(`Using bundled command data fallback.`,e)}return R}async function _e(e,t){let n=Ce[e];if(!n)throw Error(`Unknown command data key: ${e}`);if(!j()){if(!de()){let e=oe();throw Error(`Firebase is not configured. Missing: ${e.missingKeys.join(`, `)}. Production combatant changes cannot be saved.`)}return R={...R,[e]:t},R[e]}let[r,{doc:i,serverTimestamp:a,setDoc:o}]=await Promise.all([ce(),A(()=>import(`./index.esm-u78z89Si.js`),__vite__mapDeps([2,1]))]);if(!r)return R={...R,[e]:t},R[e];let s=Array.isArray(t)?{items:t}:{value:t};try{await pe(o(i(r,Se,n),{...s,updatedAt:a()},{merge:!0}),`Timed out saving ${n} to Firebase.`)}catch(e){throw he(e)}return R={...R,[e]:t},R[e]}function ve(){return R.chiefs}function ye(){return R.combatants}function F(){let e=ye();return e.length>0?e.map(e=>({...e,displayName:e.name,source:`combatants`})):ve().map(e=>({...e,name:e.displayName,source:`chiefs`}))}function I(e){return F().find(t=>t.id===e)}function be(){return R.foundryAssignments}function xe(){return R.foundryConfig}function L(){return R.foundryObjectives}var R,Se,Ce,we,z=i((()=>{x(),C(),te(),ne(),D(),ue(),ie(),R={chiefs:b,combatants:S,foundryAssignments:w,foundryConfig:T,foundryObjectives:E},Se=`commandData`,Ce={chiefs:`chiefs`,combatants:`combatants`,foundryAssignments:`foundryAssignments`,foundryConfig:`foundryConfig`,foundryObjectives:`foundryObjectives`},we=8e3}));function Te(e,t){if(!e)return[];let n=[],r=ke(e,t);r.length>0&&n.push(...r);let i=be()[t];return i&&Object.entries(i).forEach(([t,r])=>{r.forEach(r=>{r.chief===e&&n.push({objectiveId:t,assignment:r.assignment})})}),n}function Ee(e,t,n){return Te(e,t).find(e=>e.objectiveId===n)}function De(e,t,n=null){return F().filter(e=>e.source===`combatants`&&(!n||e.legion===n)).map(e=>({combatant:e,assignments:ke(e.id,t)})).flatMap(t=>t.assignments.filter(t=>t.objectiveId===e).map(e=>({combatant:t.combatant,assignment:e})))}function Oe(e,t){let n=new Map;return F().filter(t=>t.source===`combatants`&&t.legion===e).forEach(e=>{ke(e.id,t).forEach(t=>{t.objectiveId&&(n.has(t.objectiveId)||n.set(t.objectiveId,[]),n.get(t.objectiveId).push({combatant:e,assignment:t}))})}),[...n.entries()].map(([e,t])=>({objectiveId:e,assignments:t}))}function ke(e,t){let n=I(e);if(!n||n.source!==`combatants`)return[];let r=n.assignment?.trim();if(!r||H(r)===`no engagement`)return[];let i=Ae(r);return i?je(n,i,t).map((e,t)=>({objectiveId:e,assignment:`${r} primary ${t+1}`,combatant:n})):[{objectiveId:et(r),assignment:r,combatant:n}]}function Ae(e){let t=H(e);return t===`legion 1`?1:t===`legion 2`?2:null}function je(e,t,n){return Me(t,n).get(e.id)??[]}function Me(e,t){let n=t??`opening`,r=Ne(e,n),i=$e(e),a=new Map(i.map(e=>[e.id,[]]));if(r.length===0||i.length===0)return a;let o=Je(r,n,i.length),s=new Map(r.map(e=>[e.id,0])),c=new Map(r.map(e=>[e.id,0]));for(let t=0;t<nt-1;t+=1)i.forEach(i=>{let l=a.get(i.id),u=Pe(t,r,i,e,n,l,s,c,o);u&&Re(u,i,l,s,c)});return Fe(r,i,e,n,a,s,c,o),i.forEach(t=>{let i=a.get(t.id);if(i.length>=nt)return;let l=Be(r,t,e,n,i,s,c,o);l&&Re(l,t,i,s,c)}),a}function Ne(e,t){return(tt[t]?.[e]??[]).map(e=>L().find(t=>t.id===e)).filter(Boolean)}function Pe(e,t,n,r,i,a,o,s,c){return e===0?ze(t,n,r,i,a,o,s,c):Be(t,n,r,i,a,o,s,c)}function Fe(e,t,n,r,i,a,o,s){Ie(e,r).forEach(c=>{if((a.get(c.id)??0)>0)return;let l=Le(c,e,t,n,r,i,a,s);l&&Re(c,l,i.get(l.id),a,o)})}function Ie(e,t){return[...e].sort((e,n)=>B(e,t)-B(n,t)||e.name.localeCompare(n.name))}function Le(e,t,n,r,i,a,o,s){return[...n].filter(n=>{let c=a.get(n.id);return c.length<nt&&Ve(e,c,o,s)&&qe(e,n,r,i)&&He(e,c,t)}).sort((n,r)=>Ze(e,n,a,t)-Ze(e,r,a,t)||V(n)-V(r)||n.displayName.localeCompare(r.displayName))[0]??null}function Re(e,t,n,r,i){n.push(e.id),r.set(e.id,(r.get(e.id)??0)+1),i.set(e.id,(i.get(e.id)??0)+V(t))}function ze(e,t,n,r,i,a,o,s){return[...e].filter(e=>Ve(e,i,a,s)&&qe(e,t,n,r)).sort((e,t)=>B(t,r)-B(e,r)||Ge(e,a,o)-Ge(t,a,o)||(a.get(e.id)??0)-(a.get(t.id)??0)||e.name.localeCompare(t.name))[0]??null}function Be(e,t,n,r,i,a,o,s){let c=e.find(e=>e.id===i[0]);return c?[...e].filter(o=>Ve(o,i,a,s)&&qe(o,t,n,r)&&He(o,i,e)).sort((e,t)=>Ke(t,c,r,a,o)-Ke(e,c,r,a,o)||e.name.localeCompare(t.name))[0]??null:null}function Ve(e,t,n,r){return t.includes(e.id)?!1:(n.get(e.id)??0)<(r.get(e.id)??0)}function He(e,t,n){return t.every(t=>{let r=n.find(e=>e.id===t);return!r||!Ue(e,r)})}function Ue(e,t){let n=We(e),r=We(t);return n===`west`&&r===`east`||n===`east`&&r===`west`}function We(e){return e.x<=40?`west`:e.x>=60?`east`:`center`}function Ge(e,t,n){let r=t.get(e.id)??0;return r===0?0:(n.get(e.id)??0)/r}function Ke(e,t,n,r,i){return B(e,n)*rt-Xe(t,e)*at-Ge(e,r,i)*ot}function B(e,t){return st[e.phases[t]?.priority?.toLowerCase()??`low`]??st.low}function qe(e,t,n,r){return Qe(t,n)?B(e,r)>=st.high:!0}function Je(e,t,n){return new Map(e.map(e=>[e.id,Ye(e,t,n)]))}function Ye(e,t,n){let r=ct[e.phases[t]?.priority?.toLowerCase()??`low`]??ct.low;return Math.max(1,Math.floor(n*r))}function Xe(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function Ze(e,t,n,r){let i=n.get(t.id)??[];return i.length===0?0:i.reduce((t,n)=>{let i=r.find(e=>e.id===n);return i?t+Xe(e,i):t},0)}function Qe(e,t){let n=$e(t),r=Math.max(1,Math.ceil(n.length*it)),i=n.findIndex(t=>t.id===e.id);return i>=0&&i<r}function $e(e){return F().filter(t=>t.source===`combatants`&&t.legion===e&&H(t.assignment)!==`no engagement`).sort((e,t)=>V(t)-V(e)||e.displayName.localeCompare(t.displayName))}function V(e){return e.troopPower??e.power??0}function et(e){let t=H(e);return L().find(e=>H(e.id)===t||H(e.name)===t||t.includes(H(e.name)))?.id??null}function H(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim()}var U,tt,nt,rt,it,at,ot,st,ct,lt=i((()=>{z(),U={opening:[`boiler`,`prototype-west`,`prototype-east`,`repair-north`,`repair-east`,`repair-west`,`repair-south`,`transit`],mid:[`boiler`,`prototype-west`,`prototype-east`,`repair-north`,`repair-east`,`repair-west`,`repair-south`,`mercenary`,`munitions`,`imperial`,`transit`],final:[`boiler`,`imperial`,`prototype-west`,`prototype-east`,`munitions`,`mercenary`,`workshop-northwest`,`workshop-northeast`,`workshop-southwest`,`workshop-southeast`,`repair-east`,`repair-north`,`repair-west`,`repair-south`,`transit`]},tt={opening:{1:U.opening,2:U.opening},mid:{1:U.mid,2:U.mid},final:{1:U.final,2:U.final}},nt=3,rt=100,it=.25,at=3,ot=1e-6,st={critical:4,high:3,medium:2,low:1},ct={critical:.4,high:.35,medium:.15,low:.1}}));function ut(){let e=document.getElementById(`my-objectives`),t=Tt();if(!e)return;e.innerHTML=``;let n=t?Te(t,gt()):Oe(Et(),gt()).map(e=>({objectiveId:e.objectiveId,assignment:`${e.assignments.length} assigned combatants`}));if(n.length===0){e.innerHTML=`<p>No assignments this phase.</p>`;return}n.forEach(t=>{let n=L().find(e=>e.id===t.objectiveId),r=document.createElement(`div`);r.className=`assignment-card`,r.innerHTML=`

            <strong>${n?n.name:`General Assignment`}</strong>

            <div class="assignment-card-meta">${t.assignment}</div>

        `,r.onclick=()=>{n&&(_t(n),W())},e.appendChild(r)})}var dt=i((()=>{z(),Pt(),lt(),q()}));function ft(){let e=document.getElementById(`assignment-summary`);if(!e)return;let t=Tt(),n=Et();if(!t){e.innerHTML=`
            <div class="summary-card">
                <h2>Legion ${n}</h2>
                <h3>${xe().phases[gt()].label}</h3>
            </div>
        `;return}let r=I(t);if(!r){e.innerHTML=``;return}let i=gt(),a=Te(t,i),o=xe().phases[i].label;e.innerHTML=`

        <div class="summary-card">

            <h2>${r.displayName}</h2>

            ${pt(r)}

            <h3>${o}</h3>

            <div id="summary-list"></div>

        </div>

    `;let s=document.getElementById(`summary-list`);a.forEach(e=>{let t=L().find(t=>t.id===e.objectiveId);s.innerHTML+=`

            <div class="summary-item">

                <strong>${t?t.name:`General Assignment`}</strong><br>

                ${e.assignment}

            </div>

        `})}function pt(e){return e.source===`combatants`?`
        <p>
            ${mt(e)?`${mt(e).toLocaleString()} troop power`:``}
            ${e.legion?` | Legion ${e.legion}`:``}
        </p>
    `:``}function mt(e){return e.troopPower??e.power??0}var ht=i((()=>{z(),Pt(),lt(),q()}));function gt(){return G}function _t(e){K=e}function vt(e){return{critical:`🔴`,high:`🟠`,medium:`🟡`,low:`⚪`}[e.toLowerCase()]||`⚪`}function yt(e){let t={opening:0,mid:1,final:2};return t[G]>=t[e.unlockPhase]}function W(){let e=document.getElementById(`battlefield-map`);if(!e)return;e.innerHTML=``;let t=Tt(),n=Te(t,G),r=Et(),i=t?[]:Oe(r,G);L().forEach(r=>{let a=document.createElement(`div`);a.dataset.id=r.id,a.className=`objective`,a.style.left=r.x+`%`,a.style.top=r.y+`%`;let o=r.phases[G];a.classList.add(o.priority.toLowerCase());let s=yt(r);if(s||a.classList.add(`locked`),t){let e=n.some(e=>e.objectiveId===r.id);a.classList.add(e?`assigned`:`unassigned`)}else{let e=i.some(e=>e.objectiveId===r.id);a.classList.add(e?`assigned`:`unassigned`)}K&&K.id===r.id&&a.classList.add(`selected`),a.innerHTML=`

            <div class="objective-priority">

                ${s?vt(o.priority):`🔒`}

            </div>

            <div class="objective-name">

                ${r.name}

            </div>

        `,a.onclick=()=>{K=r,W()},e.appendChild(a)}),K||=L()[0],bt(K),ft(),ut()}function bt(e){let t=document.getElementById(`objective-panel`);if(!t||!e)return;let n=e.phases[G],r=Ee(Tt(),G,e.id),i=De(e.id,G,Et());t.innerHTML=`

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

            ${xt(i)}

            <h3>Strategy</h3>

            <p>

                ${n.strategy}

            </p>

            <h3>Why</h3>

            <p>

                ${n.why}

            </p>

        </div>

    `}function xt(e){return e.length===0?`<p>No combatants assigned.</p>`:`
        <div class="objective-assignment-list">
            ${e.map(({combatant:e,assignment:t})=>`
                <div class="objective-assignment-row">
                    <strong>${e.displayName}</strong>
                    <span>${St(e)?St(e).toLocaleString():``}</span>
                    <span>${e.legion?`Legion ${e.legion}`:``}</span>
                    <small>${t.assignment}</small>
                </div>
            `).join(``)}
        </div>
    `}function St(e){return e.troopPower??e.power??0}function Ct(){let e=document.querySelectorAll(`.phase-button`);e.forEach(t=>{t.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),G=t.dataset.phase,W()}})}var G,K,q=i((()=>{z(),Pt(),lt(),dt(),ht(),G=`opening`,K=null}));function wt(){let e=document.getElementById(`chief-search`),t=document.getElementById(`chief-list`);if(!e||!t)return;let n=localStorage.getItem(`chief`);if(n){let t=F().find(e=>e.id===n);t&&(J=t.id,e.value=t.displayName)}Dt(),e.addEventListener(`focus`,()=>{Ot(e.value)}),e.addEventListener(`input`,()=>{Ot(e.value),J&&e.value.trim()!==jt()&&(J=null,localStorage.removeItem(`chief`),Dt())}),e.addEventListener(`change`,()=>{let t=F().find(t=>t.displayName.toLowerCase()===e.value.toLowerCase());if(!t){J=null,localStorage.removeItem(`chief`),Dt(),W();return}J=t.id,localStorage.setItem(`chief`,t.id),Dt(),W(),At()}),document.addEventListener(`click`,n=>{n.target===e||t.contains(n.target)||At()})}function Tt(){return J}function Et(){let e=I(J);return e?.legion?e.legion:Number.isFinite(Y)?Y:1}function Dt(){let e=document.getElementById(`legion-context`);if(!e)return;let t=I(J);if(t){e.innerHTML=`
            <label>Legion</label>
            <div class="legion-pill">
                ${t.legion?`Legion ${t.legion}`:`Unassigned`}
            </div>
        `;return}let n=Number.isFinite(Y)?Y:1;e.innerHTML=`
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
    `,e.querySelector(`#legion-select`).addEventListener(`change`,e=>{Y=Number.parseInt(e.target.value,10),localStorage.setItem(`legion`,String(Y)),W()})}function Ot(e){let t=document.getElementById(`chief-list`);if(!t)return;let n=e.trim().toLowerCase(),r=F().slice().sort((e,t)=>e.displayName.localeCompare(t.displayName)).filter(e=>!n||e.displayName.toLowerCase().includes(n));if(r.length===0){t.innerHTML=`<div class="chief-result-empty">No chiefs found.</div>`,t.hidden=!1;return}t.innerHTML=r.map(e=>`
            <button
                type="button"
                class="chief-result"
                data-chief-id="${e.id}">
                <span>${Mt(e.displayName)}</span>
                <small>
                    ${e.legion?`Legion ${e.legion}`:``}
                    ${Nt(e)?` ${Nt(e).toLocaleString()}`:``}
                </small>
            </button>
        `).join(``),t.querySelectorAll(`[data-chief-id]`).forEach(e=>{e.addEventListener(`click`,()=>{kt(e.dataset.chiefId)})}),t.hidden=!1}function kt(e){let t=I(e),n=document.getElementById(`chief-search`);!t||!n||(J=t.id,n.value=t.displayName,localStorage.setItem(`chief`,t.id),Dt(),At(),W())}function At(){let e=document.getElementById(`chief-list`);e&&(e.hidden=!0)}function jt(){return I(J)?.displayName??``}function Mt(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function Nt(e){return e.troopPower??e.power??0}var J,Y,Pt=i((()=>{z(),q(),J=null,Y=Number.parseInt(localStorage.getItem(`legion`)??`1`,10)})),Ft=a(((e,t)=>{var n=function(e){var t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i,a=typeof Symbol==`function`?Symbol:{},o=a.iterator||`@@iterator`,s=a.asyncIterator||`@@asyncIterator`,c=a.toStringTag||`@@toStringTag`;function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},``)}catch{l=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var a=t&&t.prototype instanceof g?t:g,o=Object.create(a.prototype);return r(o,`_invoke`,{value:te(e,n,new D(i||[]))}),o}e.wrap=u;function d(e,t,n){try{return{type:`normal`,arg:e.call(t,n)}}catch(e){return{type:`throw`,arg:e}}}var f=`suspendedStart`,ee=`suspendedYield`,p=`executing`,m=`completed`,h={};function g(){}function _(){}function v(){}var y={};l(y,o,function(){return this});var b=Object.getPrototypeOf,x=b&&b(b(O([])));x&&x!==t&&n.call(x,o)&&(y=x);var S=v.prototype=g.prototype=Object.create(y);_.prototype=v,r(S,`constructor`,{value:v,configurable:!0}),r(v,`constructor`,{value:_,configurable:!0}),_.displayName=l(v,c,`GeneratorFunction`);function C(e){[`next`,`throw`,`return`].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}e.isGeneratorFunction=function(e){var t=typeof e==`function`&&e.constructor;return t?t===_||(t.displayName||t.name)===`GeneratorFunction`:!1},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,`GeneratorFunction`)),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}};function w(e,t){function i(r,a,o,s){var c=d(e[r],e,a);if(c.type===`throw`)s(c.arg);else{var l=c.arg,u=l.value;return u&&typeof u==`object`&&n.call(u,`__await`)?t.resolve(u.__await).then(function(e){i(`next`,e,o,s)},function(e){i(`throw`,e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return i(`throw`,e,o,s)})}}var a;function o(e,n){function r(){return new t(function(t,r){i(e,n,t,r)})}return a=a?a.then(r,r):r()}r(this,`_invoke`,{value:o})}C(w.prototype),l(w.prototype,s,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,i,a){a===void 0&&(a=Promise);var o=new w(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})};function te(e,t,n){var r=f;return function(i,a){if(r===p)throw Error(`Generator is already running`);if(r===m){if(i===`throw`)throw a;return k()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=T(o,n);if(s){if(s===h)continue;return s}}if(n.method===`next`)n.sent=n._sent=n.arg;else if(n.method===`throw`){if(r===f)throw r=m,n.arg;n.dispatchException(n.arg)}else n.method===`return`&&n.abrupt(`return`,n.arg);r=p;var c=d(e,t,n);if(c.type===`normal`){if(r=n.done?m:ee,c.arg===h)continue;return{value:c.arg,done:n.done}}else c.type===`throw`&&(r=m,n.method=`throw`,n.arg=c.arg)}}}function T(e,t){var n=t.method,r=e.iterator[n];if(r===i)return t.delegate=null,n===`throw`&&e.iterator.return&&(t.method=`return`,t.arg=i,T(e,t),t.method===`throw`)||n!==`return`&&(t.method=`throw`,t.arg=TypeError(`The iterator does not provide a '`+n+`' method`)),h;var a=d(r,e.iterator,t.arg);if(a.type===`throw`)return t.method=`throw`,t.arg=a.arg,t.delegate=null,h;var o=a.arg;if(!o)return t.method=`throw`,t.arg=TypeError(`iterator result is not an object`),t.delegate=null,h;if(o.done)t[e.resultName]=o.value,t.next=e.nextLoc,t.method!==`return`&&(t.method=`next`,t.arg=i);else return o;return t.delegate=null,h}C(S),l(S,c,`Generator`),l(S,o,function(){return this}),l(S,`toString`,function(){return`[object Generator]`});function ne(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type=`normal`,delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:`root`}],e.forEach(ne,this),this.reset(!0)}e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}};function O(e){if(e){var t=e[o];if(t)return t.call(e);if(typeof e.next==`function`)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=i,t.done=!0,t};return a.next=a}}return{next:k}}e.values=O;function k(){return{value:i,done:!0}}return D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method=`next`,this.arg=i,this.tryEntries.forEach(E),!e)for(var t in this)t.charAt(0)===`t`&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type===`throw`)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type=`throw`,s.arg=e,t.next=n,r&&(t.method=`next`,t.arg=i),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if(o.tryLoc===`root`)return r(`end`);if(o.tryLoc<=this.prev){var c=n.call(o,`catchLoc`),l=n.call(o,`finallyLoc`);if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else throw Error(`try statement without catch or finally`)}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,`finallyLoc`)&&this.prev<i.finallyLoc){var a=i;break}}a&&(e===`break`||e===`continue`)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method=`next`,this.next=a.finallyLoc,h):this.complete(o)},complete:function(e,t){if(e.type===`throw`)throw e.arg;return e.type===`break`||e.type===`continue`?this.next=e.arg:e.type===`return`?(this.rval=this.arg=e.arg,this.method=`return`,this.next=`end`):e.type===`normal`&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if(r.type===`throw`){var i=r.arg;E(n)}return i}}throw Error(`illegal catch attempt`)},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},this.method===`next`&&(this.arg=i),h}},e}(typeof t==`object`?t.exports:{});try{regeneratorRuntime=n}catch{typeof globalThis==`object`?globalThis.regeneratorRuntime=n:Function(`r`,`regeneratorRuntime = r`)(n)}})),It=a(((e,t)=>{t.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`})),Lt=a(((e,t)=>{var n=It(),r=0;t.exports=({id:e,action:t,payload:i={}})=>{let a=e;return a===void 0&&(a=n(`Job`,r),r+=1),{id:a,action:t,payload:i}}})),Rt=a((e=>{var t=!1;e.logging=t,e.setLogging=e=>{t=e},e.log=(...n)=>t?console.log.apply(e,n):null})),zt=a(((e,t)=>{var n=Lt(),{log:r}=Rt(),i=It(),a=0;t.exports=()=>{let t=i(`Scheduler`,a),o={},s={},c=[];a+=1;let l=()=>c.length,u=()=>Object.keys(o).length,d=()=>{if(c.length!==0){let e=Object.keys(o);for(let t=0;t<e.length;t+=1)if(s[e[t]]===void 0){c[0](o[e[t]]);break}}},f=(i,a)=>new Promise((o,l)=>{let u=n({action:i,payload:a});c.push(async t=>{c.shift(),s[t.id]=u;try{o(await t[i].apply(e,[...a,u.id]))}catch(e){l(e)}finally{delete s[t.id],d()}}),r(`[${t}]: Add ${u.id} to JobQueue`),r(`[${t}]: JobQueue length=${c.length}`),d()});return{addWorker:e=>(o[e.id]=e,r(`[${t}]: Add ${e.id}`),r(`[${t}]: Number of workers=${u()}`),d(),e.id),addJob:async(e,...n)=>{if(u()===0)throw Error(`[${t}]: You need to have at least one worker before adding jobs`);return f(e,n)},terminate:async()=>{Object.keys(o).forEach(async e=>{await o[e].terminate()}),c=[]},getQueueLen:l,getNumWorkers:u}}})),Bt=a(((e,t)=>{t.exports=e=>{let t={};return typeof WorkerGlobalScope<`u`?t.type=`webworker`:typeof document==`object`?t.type=`browser`:typeof process==`object`&&typeof l==`function`&&(t.type=`node`),e===void 0?t:t[e]}})),Vt=a(((e,t)=>{var n=Bt()(`type`)===`browser`?e=>new URL(e,window.location.href).href:e=>e;t.exports=e=>{let t={...e};return[`corePath`,`workerPath`,`langPath`].forEach(r=>{e[r]&&(t[r]=n(t[r]))}),t}})),Ht=a(((e,t)=>{t.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}})),Ut=o({author:()=>``,browser:()=>$t,bugs:()=>sn,collective:()=>ln,contributors:()=>en,default:()=>un,dependencies:()=>rn,description:()=>Kt,devDependencies:()=>nn,homepage:()=>cn,jsdelivr:()=>Zt,license:()=>tn,main:()=>qt,name:()=>Wt,overrides:()=>an,repository:()=>on,scripts:()=>Qt,type:()=>Jt,types:()=>Yt,unpkg:()=>Xt,version:()=>Gt}),Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn=i((()=>{Wt=`tesseract.js`,Gt=`7.0.0`,Kt=`Pure Javascript Multilingual OCR`,qt=`src/index.js`,Jt=`commonjs`,Yt=`src/index.d.ts`,Xt=`dist/tesseract.min.js`,Zt=`dist/tesseract.min.js`,Qt={start:`node scripts/server.js`,build:`rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs`,"profile:tesseract":`webpack-bundle-analyzer dist/tesseract-stats.json`,"profile:worker":`webpack-bundle-analyzer dist/worker-stats.json`,prepublishOnly:`npm run build`,wait:`rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js`,test:`npm-run-all -p -r start test:all`,"test:all":`npm-run-all wait test:browser test:node:all`,"test:browser":`karma start karma.conf.js`,"test:node":`nyc mocha --exit --bail --require ./scripts/test-helper.mjs`,"test:node:all":`npm run test:node -- ./tests/*.test.mjs`,lint:`eslint src`,"lint:fix":`eslint --fix src`,postinstall:`opencollective-postinstall || true`},$t={"./src/worker/node/index.js":`./src/worker/browser/index.js`},en=[`jeromewu`],tn=`Apache-2.0`,nn={"@babel/core":`^7.21.4`,"@babel/eslint-parser":`^7.21.3`,"@babel/preset-env":`^7.21.4`,"@rollup/plugin-commonjs":`^24.1.0`,acorn:`^8.8.2`,"babel-loader":`^9.1.2`,buffer:`^6.0.3`,cors:`^2.8.5`,eslint:`^7.32.0`,"eslint-config-airbnb-base":`^14.2.1`,"eslint-plugin-import":`^2.27.5`,"expect.js":`^0.3.1`,express:`^4.18.2`,mocha:`^10.2.0`,"npm-run-all":`^4.1.5`,karma:`^6.4.2`,"karma-chrome-launcher":`^3.2.0`,"karma-firefox-launcher":`^2.1.2`,"karma-mocha":`^2.0.1`,"karma-webpack":`^5.0.0`,nyc:`^15.1.0`,rimraf:`^5.0.0`,rollup:`^3.20.7`,"wait-on":`^7.0.1`,webpack:`^5.79.0`,"webpack-bundle-analyzer":`^4.8.0`,"webpack-cli":`^5.0.1`,"webpack-dev-middleware":`^6.0.2`,"rollup-plugin-sourcemaps":`^0.6.3`},rn={"bmp-js":`^0.1.0`,"idb-keyval":`^6.2.0`,"is-url":`^1.2.4`,"node-fetch":`^2.6.9`,"opencollective-postinstall":`^2.0.3`,"regenerator-runtime":`^0.13.3`,"tesseract.js-core":`^7.0.0`,"wasm-feature-detect":`^1.8.0`,zlibjs:`^0.3.1`},an={"@rollup/pluginutils":`^5.0.2`},on={type:`git`,url:`https://github.com/naptha/tesseract.js.git`},sn={url:`https://github.com/naptha/tesseract.js/issues`},cn=`https://github.com/naptha/tesseract.js`,ln={type:`opencollective`,url:`https://opencollective.com/tesseractjs`},un={name:Wt,version:Gt,description:Kt,main:qt,type:Jt,types:Yt,unpkg:Xt,jsdelivr:Zt,scripts:Qt,browser:$t,author:``,contributors:en,license:tn,devDependencies:nn,dependencies:rn,overrides:an,repository:on,bugs:sn,homepage:cn,collective:ln}})),fn=a(((e,t)=>{t.exports={workerBlobURL:!0,logger:()=>{}}})),pn=a(((e,t)=>{var n=(dn(),c(Ut).default).version;t.exports={...fn(),workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${n}/dist/worker.min.js`}})),mn=a(((e,t)=>{t.exports=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){let t=new Blob([`importScripts("${e}");`],{type:`application/javascript`});n=new Worker(URL.createObjectURL(t))}else n=new Worker(e);return n}})),hn=a(((e,t)=>{t.exports=e=>{e.terminate()}})),gn=a(((e,t)=>{t.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}})),_n=a(((e,t)=>{t.exports=async(e,t)=>{e.postMessage(t)}})),vn=a(((e,t)=>{var n=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:e}}})=>{n(Error(`File could not be read! Code=${e}`))},r.readAsArrayBuffer(e)}),r=async e=>{let t=e;return e===void 0?`undefined`:(typeof e==`string`?t=/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(`,`)[1]).split(``).map(e=>e.charCodeAt(0)):await(await fetch(e)).arrayBuffer():typeof HTMLElement<`u`&&e instanceof HTMLElement?(e.tagName===`IMG`&&(t=await r(e.src)),e.tagName===`VIDEO`&&(t=await r(e.poster)),e.tagName===`CANVAS`&&await new Promise(r=>{e.toBlob(async e=>{t=await n(e),r()})})):typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?t=await n(await e.convertToBlob()):(e instanceof File||e instanceof Blob)&&(t=await n(e)),new Uint8Array(t))};t.exports=r})),yn=a(((e,t)=>{t.exports={defaultOptions:pn(),spawnWorker:mn(),terminateWorker:hn(),onMessage:gn(),send:_n(),loadImage:vn()}})),bn=a(((e,t)=>{var n=Vt(),r=Lt(),{log:i}=Rt(),a=It(),o=Ht(),{defaultOptions:s,spawnWorker:c,terminateWorker:l,onMessage:u,loadImage:d,send:f}=yn(),ee=0;t.exports=async(e=`eng`,t=o.LSTM_ONLY,p={},m={})=>{let h=a(`Worker`,ee),{logger:g,errorHandler:_,...v}=n({...s,...p}),y={},b=typeof e==`string`?e.split(`+`):e,x=t,S=m,C=[o.DEFAULT,o.LSTM_ONLY].includes(t)&&!v.legacyCore,w,te,T=new Promise((e,t)=>{te=e,w=t}),ne=e=>{w(e.message)},E=c(v);E.onerror=ne,ee+=1;let D=({id:e,action:t,payload:n})=>new Promise((r,a)=>{i(`[${h}]: Start ${e}, action=${t}`);let o=`${t}-${e}`;y[o]={resolve:r,reject:a},f(E,{workerId:h,jobId:e,action:t,payload:n})}),O=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),k=e=>D(r({id:e,action:`load`,payload:{options:{lstmOnly:C,corePath:v.corePath,logging:v.logging}}})),re=(e,t,n)=>D(r({id:n,action:`FS`,payload:{method:`writeFile`,args:[e,t]}})),A=(e,t)=>D(r({id:t,action:`FS`,payload:{method:`readFile`,args:[e,{encoding:`utf8`}]}})),ie=(e,t)=>D(r({id:t,action:`FS`,payload:{method:`unlink`,args:[e]}})),j=(e,t,n)=>D(r({id:n,action:`FS`,payload:{method:e,args:t}})),ae=(e,t)=>D(r({id:t,action:`loadLanguage`,payload:{langs:e,options:{langPath:v.langPath,dataPath:v.dataPath,cachePath:v.cachePath,cacheMethod:v.cacheMethod,gzip:v.gzip,lstmOnly:[o.DEFAULT,o.LSTM_ONLY].includes(x)&&!v.legacyLang}}})),oe=(e,t,n,i)=>D(r({id:i,action:`initialize`,payload:{langs:e,oem:t,config:n}})),se=(e=`eng`,t,n,r)=>{if(C&&[o.TESSERACT_ONLY,o.TESSERACT_LSTM_COMBINED].includes(t))throw Error(`Legacy model requested but code missing.`);let i=t||x;x=i;let a=n||S;S=a;let s=(typeof e==`string`?e.split(`+`):e).filter(e=>!b.includes(e));return b.push(...s),s.length>0?ae(s,r).then(()=>oe(e,i,a,r)):oe(e,i,a,r)},ce=(e={},t)=>D(r({id:t,action:`setParameters`,payload:{params:e}})),M=async(e,t={},n={text:!0},i)=>D(r({id:i,action:`recognize`,payload:{image:await d(e),options:t,output:n}})),le=async(e,t)=>{if(C)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return D(r({id:t,action:`detect`,payload:{image:await d(e)}}))},N=async()=>(E!==null&&(l(E),E=null),Promise.resolve());u(E,({workerId:e,jobId:t,status:n,action:r,data:a})=>{let o=`${r}-${t}`;if(n===`resolve`)i(`[${e}]: Complete ${t}`),y[o].resolve({jobId:t,data:a}),delete y[o];else if(n===`reject`)if(y[o].reject(a),delete y[o],r===`load`&&w(a),_)_(a);else throw Error(a);else n===`progress`&&g({...a,userJobId:t})});let P={id:h,worker:E,load:O,writeText:re,readText:A,removeFile:ie,FS:j,reinitialize:se,setParameters:ce,recognize:M,detect:le,terminate:N};return k().then(()=>ae(e)).then(()=>oe(e,t,m)).then(()=>te(P)).catch(()=>{}),T}})),xn=a(((e,t)=>{var n=bn();t.exports={recognize:async(e,t,r)=>{let i=await n(t,1,r);return i.recognize(e).finally(async()=>{await i.terminate()})},detect:async(e,t)=>{let r=await n(`osd`,0,t);return r.detect(e).finally(async()=>{await r.terminate()})}}})),Sn=a(((e,t)=>{t.exports={AFR:`afr`,AMH:`amh`,ARA:`ara`,ASM:`asm`,AZE:`aze`,AZE_CYRL:`aze_cyrl`,BEL:`bel`,BEN:`ben`,BOD:`bod`,BOS:`bos`,BUL:`bul`,CAT:`cat`,CEB:`ceb`,CES:`ces`,CHI_SIM:`chi_sim`,CHI_TRA:`chi_tra`,CHR:`chr`,CYM:`cym`,DAN:`dan`,DEU:`deu`,DZO:`dzo`,ELL:`ell`,ENG:`eng`,ENM:`enm`,EPO:`epo`,EST:`est`,EUS:`eus`,FAS:`fas`,FIN:`fin`,FRA:`fra`,FRK:`frk`,FRM:`frm`,GLE:`gle`,GLG:`glg`,GRC:`grc`,GUJ:`guj`,HAT:`hat`,HEB:`heb`,HIN:`hin`,HRV:`hrv`,HUN:`hun`,IKU:`iku`,IND:`ind`,ISL:`isl`,ITA:`ita`,ITA_OLD:`ita_old`,JAV:`jav`,JPN:`jpn`,KAN:`kan`,KAT:`kat`,KAT_OLD:`kat_old`,KAZ:`kaz`,KHM:`khm`,KIR:`kir`,KOR:`kor`,KUR:`kur`,LAO:`lao`,LAT:`lat`,LAV:`lav`,LIT:`lit`,MAL:`mal`,MAR:`mar`,MKD:`mkd`,MLT:`mlt`,MSA:`msa`,MYA:`mya`,NEP:`nep`,NLD:`nld`,NOR:`nor`,ORI:`ori`,PAN:`pan`,POL:`pol`,POR:`por`,PUS:`pus`,RON:`ron`,RUS:`rus`,SAN:`san`,SIN:`sin`,SLK:`slk`,SLV:`slv`,SPA:`spa`,SPA_OLD:`spa_old`,SQI:`sqi`,SRP:`srp`,SRP_LATN:`srp_latn`,SWA:`swa`,SWE:`swe`,SYR:`syr`,TAM:`tam`,TEL:`tel`,TGK:`tgk`,TGL:`tgl`,THA:`tha`,TIR:`tir`,TUR:`tur`,UIG:`uig`,UKR:`ukr`,URD:`urd`,UZB:`uzb`,UZB_CYRL:`uzb_cyrl`,VIE:`vie`,YID:`yid`}})),Cn=a(((e,t)=>{t.exports={OSD_ONLY:`0`,AUTO_OSD:`1`,AUTO_ONLY:`2`,AUTO:`3`,SINGLE_COLUMN:`4`,SINGLE_BLOCK_VERT_TEXT:`5`,SINGLE_BLOCK:`6`,SINGLE_LINE:`7`,SINGLE_WORD:`8`,CIRCLE_WORD:`9`,SINGLE_CHAR:`10`,SPARSE_TEXT:`11`,SPARSE_TEXT_OSD:`12`,RAW_LINE:`13`}})),wn=a(((e,t)=>{Ft();var n=zt(),r=bn(),i=xn(),a=Sn(),o=Ht(),s=Cn(),{setLogging:c}=Rt();t.exports={languages:a,OEM:o,PSM:s,createScheduler:n,createWorker:r,setLogging:c,...i}}));async function Tn(){return Dn||(Dn=await(0,En.createWorker)(`eng`),Dn)}var En,Dn,On=i((()=>{En=wn(),Dn=null}));async function kn(e){return new Promise(t=>{let n=new Image;n.onload=()=>{let e=document.createElement(`canvas`),r=e.getContext(`2d`),i=369/n.width;e.width=369,e.height=Math.round(n.height*i),r.imageSmoothingEnabled=!1,r.drawImage(n,0,0,e.width,e.height);let a=r.getImageData(0,0,e.width,e.height),o=a.data;for(let e=0;e<o.length;e+=4){let t=.299*o[e]+.587*o[e+1]+.114*o[e+2];o[e]=t,o[e+1]=t,o[e+2]=t}r.putImageData(a,0,0),t(e)},n.src=URL.createObjectURL(e)})}var An=i((()=>{})),X,jn=i((()=>{X={targetWidth:369,anchorSearch:{x:0,y:0,width:369,height:200},anchorText:`Troop Power`,firstRowOffset:18,listTopFallback:145,rowHeight:68,rowGap:4,minRowGap:24,avatarProbe:{x:18,width:60,height:52,threshold:18},regions:{name:{x:78,y:8,width:175,height:24},power:{x:96,y:29,width:88,height:24,scale:4,numericOnly:!0},status:{x:78,y:47,width:190,height:20},engagement:{x:246,y:8,width:110,height:54}}}}));function Mn(e,t){let n=document.createElement(`canvas`),r=n.getContext(`2d`),i=t.scale??1;return n.width=t.width*i,n.height=t.height*i,r.imageSmoothingEnabled=!1,r.drawImage(e,t.x,t.y,t.width,t.height,0,0,n.width,n.height),t.numericOnly&&Nn(n),n}function Nn(e){let t=e.getContext(`2d`),n=t.getImageData(0,0,e.width,e.height),r=n.data;for(let e=0;e<r.length;e+=4){let t=.299*r[e]+.587*r[e+1]+.114*r[e+2]>150?255:0;r[e]=t,r[e+1]=t,r[e+2]=t,r[e+3]=255}t.putImageData(n,0,0)}function Pn(e,t){let n=[],r=Math.max(X.listTopFallback,(t?.bottom??0)+X.firstRowOffset),i=-1/0;for(let t=r;t<=e.height-X.rowHeight;t+=1){if(t-i<X.minRowGap||Fn(e,t)<X.avatarProbe.threshold)continue;let r=In(e,t);n.push({y:r,canvas:Mn(e,{x:0,y:r,width:e.width,height:Math.min(X.rowHeight,e.height-r)})}),i=r,t=r+X.rowHeight-1}return n}function Fn(e,t){let n=X.avatarProbe,r=e.getContext(`2d`).getImageData(n.x,t,n.width,Math.min(n.height,e.height-t)).data,i=0,a=0,o=0;for(let e=0;e<r.length;e+=4){let t=.299*r[e]+.587*r[e+1]+.114*r[e+2];i+=t,a+=t*t,o+=1}let s=i/o,c=a/o-s*s;return Math.sqrt(Math.max(c,0))}function In(e,t){let n=t,r=-1/0;for(let i=Math.max(0,t-8);i<=Math.min(e.height-X.rowHeight,t+8);i+=1){let t=Fn(e,i);t>r&&(r=t,n=i)}return n}var Ln=i((()=>{jn()}));async function Rn(e){let t=await Tn(),n=[];for(let r of e){let e=await kn(r),i=zn(e),{data:a}=await t.recognize(i),o=Bn(a),s=Kn(a.text),c=Pn(e,o),l=[];for(let e=0;e<c.length;e+=1){let n=await Vn(t,c[e],r.name,e,s);n&&l.push(n)}n.push({filename:r.name,anchorText:a.text,anchorFound:!!o,screenshotLegion:s,combatants:l,rowCount:c.length})}return n}function zn(e){return Mn(e,X.anchorSearch)}function Bn(e){let t=e.words??[],n=X.anchorText.toLowerCase().split(/\s+/);for(let e=0;e<t.length;e+=1){let r=Z(t[e].text),i=Z(t[e+1]?.text??``);if(r.includes(n[0])&&i.includes(n[1]))return{x:t[e].bbox.x0,y:Math.min(t[e].bbox.y0,t[e+1].bbox.y0),bottom:Math.max(t[e].bbox.y1,t[e+1].bbox.y1)}}return Z(e.text).includes(X.anchorText.toLowerCase())?{x:X.anchorSearch.x,y:X.listTopFallback-X.firstRowOffset,bottom:X.listTopFallback-X.firstRowOffset}:null}async function Vn(e,t,n,r,i){let a=await Hn(e,t.canvas,X.regions.name),o=await Hn(e,t.canvas,X.regions.power),s=await Hn(e,t.canvas,X.regions.status),c=await Hn(e,t.canvas,X.regions.engagement),l=Un(a),u=Gn(o),d=qn(s,c,i),f=Wn(c);return!l||u===null||u<=0||Yn(l)||Xn(f)?null:{id:Zn(l),name:l,power:u,legion:d.legion,legionSource:d.source,status:Wn(s),engagement:f,sourceFile:n,sourceRow:r,sourceY:t.y}}async function Hn(e,t,n){n.numericOnly&&await e.setParameters({tessedit_char_whitelist:`0123456789,.`,tessedit_pageseg_mode:`7`});let{data:{text:r}}=await e.recognize(Mn(t,n));return n.numericOnly&&await e.setParameters({tessedit_char_whitelist:``,tessedit_pageseg_mode:`3`}),r}function Z(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim()}function Un(e){return String(e).replace(/[^\S\r\n]+/g,` `).replace(/\n+/g,` `).replace(/[^\p{L}\p{N}\s'._-]/gu,``).trim()}function Wn(e){return String(e).replace(/[^\S\r\n]+/g,` `).replace(/\n+/g,` `).trim()}function Gn(e){let t=(String(e).replace(/[oO]/g,`0`).replace(/[lI|]/g,`1`).match(/\d[\d,.\s]*/g)??[]).map(e=>Number.parseInt(e.replace(/[^\d]/g,``),10)).filter(e=>Number.isFinite(e)&&e>=100&&e<=1e8);return t.length===0?null:t.sort((e,t)=>t-e)[0]}function Kn(e){let t=Z(e).match(/legion\s*(\d+)\s*combatants/);if(!t)return null;let n=Number.parseInt(t[1],10);return Number.isFinite(n)?n:null}function qn(e,t,n){let r=Z(t);if(n!==null&&Jn(r))return{legion:n,source:`row-action`};let i=Z(e).match(/legion\s*(\d+)\s*dispatched/);if(i){let e=Number.parseInt(i[1],10);return{legion:Number.isFinite(e)?e:null,source:`dispatched-status`}}return{legion:null,source:`unknown`}}function Jn(e){return e.includes(`join`)||e.includes(`substitute`)||e.includes(`substitue`)||e.includes(`j0in`)}function Yn(e){return[`leader`,`officers`,`troop power`,`join`,`substitute`].includes(Z(e))}function Xn(e){let t=Z(e);return t.includes(`no engagement`)||t.includes(`no engagements`)||t.includes(`noengagement`)}function Zn(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}var Qn=i((()=>{On(),An(),jn(),Ln()}));async function $n(e,t){switch(e){case`foundry`:return Rn(t);default:throw Error(`${e} parser not implemented.`)}}var er=i((()=>{Qn()}));async function tr(e,t){return $n(e,t)}var nr=i((()=>{er()}));function rr(e=[]){let t=document.getElementById(`roster-page`);if(!t)return;let n=ir(e);if(n.length===0){t.innerHTML=`
            <div class="card">

                <h2>Combatant Roster</h2>

                <p>
                    No combatants have been imported yet.
                </p>

            </div>
        `;return}let r=[...n].sort((e,t)=>ar(t)-ar(e));t.innerHTML=`
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
            <span>${ar(e).toLocaleString()}</span>
            <span>${e.foundryAssignment??e.assignment??``}</span>
            <span>${e.canyonAssignment??``}</span>
        `,i.appendChild(t)})}function ir(e){return Array.isArray(e)&&e.length>0?e:F()}function ar(e){return e.troopPower??e.power??0}var or=i((()=>{z()}));function sr(){let e=document.getElementById(`import-page`);e&&(e.innerHTML=`
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
    `,document.getElementById(`process-images`).addEventListener(`click`,async()=>{let e=document.getElementById(`event-select`).value,t=[...document.getElementById(`combatant-upload`).files];if(t.length===0){alert(`Please select one or more screenshots.`);return}let n=document.getElementById(`import-results`);n.innerHTML=`<p>Processing...</p>`;try{let r=await tr(e,t);$=r.flatMap(e=>e.combatants??[]).map(hr),lr(n,r)}catch(e){console.error(e),n.innerHTML=`
                    <p class="error">
                        ${e.message}
                    </p>
                `}}),document.getElementById(`load-current-combatants`).addEventListener(`click`,()=>{let e=document.getElementById(`import-results`);$=ye().map(hr),cr(e)}))}function cr(e){e.innerHTML=`
        <div class="ocr-result">
            <h3>Current Combatants</h3>
            <p>${$.length} combatants loaded for editing.</p>
        </div>

        ${ur($)}
    `,dr(e)}function lr(e,t){e.innerHTML=`
        ${t.map(e=>`
            <div class="ocr-result">

                <h3>${Cr(e.filename)}</h3>

                <p>
                    Anchor ${e.anchorFound?`found`:`not found`}.
                    ${e.screenshotLegion?`Legion ${e.screenshotLegion}.`:``}
                    ${e.combatants?.length??0} combatants parsed.
                </p>

                <pre>${Cr(e.anchorText??`No anchor detected.`)}</pre>

            </div>
        `).join(``)}

        ${ur($)}
    `,dr(e)}function ur(e=[]){return`
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
                            value="${wr(e.name)}">

                        <input
                            data-review-index="${t}"
                            data-review-field="troopPower"
                            inputmode="numeric"
                            value="${wr(String(yr(e)??``))}">

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
                            value="${wr(String(e.heroTotalPower??``))}">

                        <input
                            data-review-index="${t}"
                            data-review-field="labyrinthLevels"
                            inputmode="numeric"
                            value="${wr(String(e.labyrinthLevels??``))}">

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
    `}function Q(e,t,n,r){let i=vr(n===`foundryAssignment`?br(t):t[n]);return`
        <label class="review-radio-option">
            <input
                class="review-assignment-choice"
                type="radio"
                name="${n}-${e}"
                data-review-index="${e}"
                data-review-field="${n}"
                value="${wr(r)}"
                ${i===r?`checked`:``}>
            <span>${Cr(r)}</span>
        </label>
    `}function dr(e){e.querySelectorAll(`[data-review-index]`).forEach(e=>{e.addEventListener(`change`,()=>{fr(e)})}),e.querySelectorAll(`[data-remove-review-index]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Number.parseInt(e.dataset.removeReviewIndex,10);$.splice(t,1);let n=document.getElementById(`import-results`);n.innerHTML=ur($),dr(n)})});let t=e.querySelector(`#save-reviewed-combatants`),n=e.querySelector(`#add-reviewed-combatant`);n&&n.addEventListener(`click`,()=>{$.push(gr()),cr(document.getElementById(`import-results`))}),t&&t.addEventListener(`click`,async()=>{let t=e.querySelector(`#review-save-status`);t.textContent=`Saving...`;try{if($.some(e=>!e.name?.trim())){t.textContent=`Name is required for every combatant.`;return}await _e(`combatants`,$.map(mr)),W(),rr(ye()),t.textContent=`Saved. Battlefield assignments refreshed.`}catch(e){console.error(e),t.textContent=e.message}})}function fr(e){let t=Number.parseInt(e.dataset.reviewIndex,10),n=e.dataset.reviewField;!$[t]||!n||($[t]={...$[t],[n]:pr(n,e.value)})}function pr(e,t){if(e===`troopPower`||e===`heroTotalPower`||e===`labyrinthLevels`){let e=Number.parseInt(String(t).replace(/,/g,``),10);return Number.isFinite(e)?e:null}return t.trim()}function mr(e){let t=e.name?.trim()??``,n=vr(br(e)),r=vr(e.canyonAssignment),i=Number.parseInt(yr(e),10)||0;return{...e,id:Sr(t),name:t,troopPower:i,power:i,legion:xr(n),foundryAssignment:n,assignment:n,canyonAssignment:r,heroTotalPower:Number.parseInt(e.heroTotalPower,10)||0,labyrinthLevels:Number.parseInt(e.labyrinthLevels,10)||0}}function hr(e){return{...e,troopPower:yr(e),foundryAssignment:e.foundryAssignment??e.assignment??_r(e),canyonAssignment:e.canyonAssignment??`No engagement`}}function gr(){return{id:``,name:``,troopPower:0,power:0,legion:null,foundryAssignment:`No engagement`,assignment:`No engagement`,canyonAssignment:`No engagement`,heroTotalPower:0,labyrinthLevels:0,sourceFile:`manual`,sourceRow:null,sourceY:null}}function _r(e){return e.legion?`Legion ${e.legion}`:`No engagement`}function vr(e){return e===`Legion 1`||e===`Legion 2`?e:`No engagement`}function yr(e){return e.troopPower??e.power??0}function br(e){return e.foundryAssignment??e.assignment}function xr(e){return e===`Legion 1`?1:e===`Legion 2`?2:null}function Sr(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}function Cr(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function wr(e){return Cr(e)}var $,Tr=i((()=>{nr(),z(),q(),or(),$=[]}));async function Er(){g(),sr(),await Dr(),wt(),Ct(),W(),rr(ye())}async function Dr(){try{await Promise.race([ge(),new Promise((e,t)=>{setTimeout(()=>t(Error(`Command data load timed out.`)),6e3)})])}catch(e){console.warn(`Using available command data fallback.`,e)}}var Or=i((()=>{y(),z(),Pt(),q(),Tr(),or(),document.addEventListener(`DOMContentLoaded`,()=>{Er()})}));a((()=>{u(),Or(),Pt(),ue(),Tr(),or(),document.addEventListener(`DOMContentLoaded`,()=>{})}))();export{i as t};