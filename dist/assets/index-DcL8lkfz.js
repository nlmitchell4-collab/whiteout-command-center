const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-B-FnmbDB.js","assets/index.esm-Brdh9hSO.js","assets/index.esm-hPlMW2F8.js"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,i=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},a=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),o=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},s=(i,a,o,s)=>{if(a&&typeof a==`object`||typeof a==`function`)for(var c=n(a),l=0,u=c.length,d;l<u;l++)d=c[l],!r.call(i,d)&&d!==o&&e(i,d,{get:(e=>a[e]).bind(null,d),enumerable:!(s=t(a,d))||s.enumerable});return i},c=t=>r.call(t,`module.exports`)?t[`module.exports`]:s(e({},`__esModule`,{value:!0}),t),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=i((()=>{}));function d(){return sessionStorage.getItem(`admin`)===`true`}function f(e){return e===p?(sessionStorage.setItem(`admin`,`true`),!0):!1}var p,m=i((()=>{p=`NWOFoundry2026`}));function h(e){let t=prompt(`Administrator Password`);t!==null&&(f(t)?e():alert(`Incorrect password.`))}var g=i((()=>{m()}));function _(){let e=document.querySelectorAll(`.page`),t=document.querySelectorAll(`.nav-button`);t.forEach(n=>{n.addEventListener(`click`,()=>{let r=()=>{e.forEach(e=>e.classList.remove(`active`)),t.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),document.getElementById(n.dataset.page).classList.add(`active`)};if(n.dataset.page===`import`&&!d()){h(r);return}r()})})}var v=i((()=>{m(),g()})),y,b=i((()=>{y=[{id:`nick`,displayName:`Nicholas`},{id:`kazuma`,displayName:`Kazuma`},{id:`nooch`,displayName:`Nooch`}]})),x,S=i((()=>{x=[]})),C,w=i((()=>{C={opening:{boiler:[{chief:`nick`,assignment:`Lead`},{chief:`kazuma`,assignment:`Support`}],"workshop-west":[{chief:`nooch`,assignment:`Lead`}],"prototype-west":[]},mid:{"prototype-west":[{chief:`nick`,assignment:`Lead`}],"prototype-east":[{chief:`kazuma`,assignment:`Lead`}],mercenary:[{chief:`nooch`,assignment:`Lead`}]},final:{imperial:[{chief:`nick`,assignment:`Support`}]}}})),T,E=i((()=>{T={strategyName:`Legion 2 Standard`,version:`0.2.0`,commander:`Kazuma`,eventDate:``,eventDuration:60,phases:{opening:{label:`0–15 Minutes`},mid:{label:`15–45 Minutes`},final:{label:`45 Minutes–End`}}}})),D,ee=i((()=>{D=[{id:`boiler`,name:`Boiler`,x:30,y:5,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Building capture speed buff.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Still valuable throughout the match.`},final:{priority:`Medium`,strategy:`Defend only if nearby.`,why:`Imperial takes priority.`}}},{id:`repair-north`,name:`North Repair`,x:58,y:5,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if available.`,why:`Extra points.`},mid:{priority:`Medium`,strategy:`Maintain if uncontested.`,why:`Secondary objective.`},final:{priority:`Low`,strategy:`Abandon if needed.`,why:`Imperial comes first.`}}},{id:`workshop-northwest`,name:`NW Workshop`,x:20,y:15,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture early.`,why:`Combat buffs.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Supports Prototype.`},final:{priority:`Medium`,strategy:`Hold if practical.`,why:`Secondary objective.`}}},{id:`mercenary`,name:`Mercenary Camp`,x:45,y:15,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`High`,strategy:`Capture immediately.`,why:`High point value.`},final:{priority:`Medium`,strategy:`Hold if uncontested.`,why:`Support objective.`}}},{id:`workshop-northeast`,name:`NE Workshop`,x:70,y:20,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture early.`,why:`Combat buffs.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Supports Prototype.`},final:{priority:`Medium`,strategy:`Hold if practical.`,why:`Secondary objective.`}}},{id:`prototype-west`,name:`West Prototype`,x:20,y:30,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Major scoring objective.`},mid:{priority:`Critical`,strategy:`Hold at all costs.`,why:`Excellent point generation.`},final:{priority:`Critical`,strategy:`Never abandon unless ordered.`,why:`Still one of the highest priorities.`}}},{id:`repair-west`,name:`West Repair`,x:10,y:40,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Medium`,strategy:`Maintain if uncontested.`,why:`Useful support.`},final:{priority:`Low`,strategy:`Ignore if needed.`,why:`Imperial first.`}}},{id:`imperial`,name:`Imperial Institute`,x:45,y:35,unlockPhase:`final`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`Low`,strategy:`Prepare rotation.`,why:`Unlocks in Final.`},final:{priority:`Critical`,strategy:`Primary objective.`,why:`Highest value objective.`}}},{id:`repair-east`,name:`East Repair`,x:80,y:35,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Medium`,strategy:`Maintain if uncontested.`,why:`Useful support.`},final:{priority:`Low`,strategy:`Ignore if needed.`,why:`Imperial first.`}}},{id:`prototype-east`,name:`East Prototype`,x:70,y:45,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Major scoring objective.`},mid:{priority:`Critical`,strategy:`Hold at all costs.`,why:`Excellent point generation.`},final:{priority:`Critical`,strategy:`Never abandon unless ordered.`,why:`Still one of the highest priorities.`}}},{id:`workshop-southwest`,name:`SW Workshop`,x:26,y:55,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture early.`,why:`Combat buffs.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Supports Transit.`},final:{priority:`Medium`,strategy:`Hold if practical.`,why:`Secondary objective.`}}},{id:`workshop-southeast`,name:`SE Workshop`,x:61,y:60,unlockPhase:`opening`,phases:{opening:{priority:`High`,strategy:`Capture early.`,why:`Combat buffs.`},mid:{priority:`High`,strategy:`Maintain control.`,why:`Supports Transit.`},final:{priority:`Medium`,strategy:`Hold if practical.`,why:`Secondary objective.`}}},{id:`munitions`,name:`Munitions Factory`,x:45,y:60,unlockPhase:`mid`,phases:{opening:{priority:`Low`,strategy:`Locked.`,why:`Unavailable.`},mid:{priority:`Critical`,strategy:`Capture immediately.`,why:`Powerful combat buff.`},final:{priority:`High`,strategy:`Maintain control.`,why:`Strong late-game buff.`}}},{id:`repair-south`,name:`South Repair`,x:31,y:75,unlockPhase:`opening`,phases:{opening:{priority:`Medium`,strategy:`Capture if nearby.`,why:`Additional points.`},mid:{priority:`Medium`,strategy:`Maintain if uncontested.`,why:`Useful support.`},final:{priority:`Low`,strategy:`Ignore if needed.`,why:`Imperial first.`}}},{id:`transit`,name:`Transit Station`,x:60,y:75,unlockPhase:`opening`,phases:{opening:{priority:`Critical`,strategy:`Capture immediately.`,why:`Major mobility advantage.`},mid:{priority:`Critical`,strategy:`Maintain control.`,why:`Fast rotations.`},final:{priority:`High`,strategy:`Support Imperial.`,why:`Quick reinforcement.`}}}]})),O,k,A,j,te=i((()=>{O=`modulepreload`,k=function(e){return`/`+e},A={},j=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=k(t,n),t=s(t),t in A)return;A[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:O,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}}));function M(){return!!(N.apiKey&&N.projectId&&N.appId)}async function ne(){if(!M())return null;if(!P){let{initializeApp:e}=await j(async()=>{let{initializeApp:e}=await import(`./index.esm-B-FnmbDB.js`);return{initializeApp:e}},__vite__mapDeps([0,1]));P=e(N)}return P}async function re(){if(!M())return null;if(!F){let[e,{getFirestore:t}]=await Promise.all([ne(),j(()=>import(`./index.esm-hPlMW2F8.js`),__vite__mapDeps([2,1]))]);F=t(e)}return F}var N,P,F,ie=i((()=>{te(),N={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},P=null,F=null}));function ae(e,t){if(!e.exists())return R[t];let n=e.data();return Array.isArray(R[t])?Array.isArray(n.items)?n.items:R[t]:n.value??n}async function oe(){if(!M())return R;try{let[e,{doc:t,getDoc:n}]=await Promise.all([re(),j(()=>import(`./index.esm-hPlMW2F8.js`),__vite__mapDeps([2,1]))]);if(!e)return R;let r=await Promise.all(Object.entries(me).map(async([r,i])=>[r,ae(await n(t(e,pe,i)),r)]));R={...R,...Object.fromEntries(r)}}catch(e){console.warn(`Using bundled command data fallback.`,e)}return R}async function se(e,t){let n=me[e];if(!n)throw Error(`Unknown command data key: ${e}`);if(!M())return R={...R,[e]:t},R[e];let[r,{doc:i,serverTimestamp:a,setDoc:o}]=await Promise.all([re(),j(()=>import(`./index.esm-hPlMW2F8.js`),__vite__mapDeps([2,1]))]);if(!r)return R={...R,[e]:t},R[e];let s=Array.isArray(t)?{items:t}:{value:t};return await o(i(r,pe,n),{...s,updatedAt:a()},{merge:!0}),R={...R,[e]:t},R[e]}function ce(){return R.chiefs}function le(){return R.combatants}function I(){let e=le();return e.length>0?e.map(e=>({...e,displayName:e.name,source:`combatants`})):ce().map(e=>({...e,name:e.displayName,source:`chiefs`}))}function ue(e){return I().find(t=>t.id===e)}function de(){return R.foundryAssignments}function fe(){return R.foundryConfig}function L(){return R.foundryObjectives}var R,pe,me,z=i((()=>{b(),S(),w(),E(),ee(),ie(),te(),R={chiefs:y,combatants:x,foundryAssignments:C,foundryConfig:T,foundryObjectives:D},pe=`commandData`,me={chiefs:`chiefs`,combatants:`combatants`,foundryAssignments:`foundryAssignments`,foundryConfig:`foundryConfig`,foundryObjectives:`foundryObjectives`}}));function he(e,t){if(!e)return[];let n=[],r=ve(e);r&&n.push(r);let i=de()[t];return i&&Object.entries(i).forEach(([t,r])=>{r.forEach(r=>{r.chief===e&&n.push({objectiveId:t,assignment:r.assignment})})}),n}function ge(e,t,n){return he(e,t).find(e=>e.objectiveId===n)}function _e(e){return I().filter(e=>e.source===`combatants`).map(e=>({combatant:e,assignment:ve(e.id)})).filter(t=>t.assignment?.objectiveId===e)}function ve(e){let t=ue(e);if(!t||t.source!==`combatants`)return null;let n=t.assignment?.trim();return!n||B(n)===`no engagement`?null:{objectiveId:ye(n),assignment:n,combatant:t}}function ye(e){let t=B(e);return L().find(e=>B(e.id)===t||B(e.name)===t||t.includes(B(e.name)))?.id??null}function B(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim()}var be=i((()=>{z()}));function xe(){let e=document.getElementById(`my-objectives`),t=W();if(!e||(e.innerHTML=``,!t))return;let n=he(t,Ee());if(n.length===0){e.innerHTML=`<p>No assignments this phase.</p>`;return}n.forEach(t=>{let n=L().find(e=>e.id===t.objectiveId),r=document.createElement(`div`);r.className=`assignment-card`,r.innerHTML=`

            <strong>${n?n.name:`General Assignment`}</strong>

            <div>${t.assignment}</div>

        `,r.onclick=()=>{n&&(De(n),V())},e.appendChild(r)})}var Se=i((()=>{z(),q(),be(),Ne()}));function Ce(){let e=document.getElementById(`assignment-summary`);if(!e)return;let t=W(),n=Fe();if(!t){e.innerHTML=`
            <div class="summary-card">
                <h2>Legion ${n}</h2>
                <h3>${fe().phases[Ee()].label}</h3>
            </div>
        `;return}let r=ue(t);if(!r){e.innerHTML=``;return}let i=Ee(),a=he(t,i),o=fe().phases[i].label;e.innerHTML=`

        <div class="summary-card">

            <h2>${r.displayName}</h2>

            ${we(r)}

            <h3>${o}</h3>

            <div id="summary-list"></div>

        </div>

    `;let s=document.getElementById(`summary-list`);a.forEach(e=>{let t=L().find(t=>t.id===e.objectiveId);s.innerHTML+=`

            <div class="summary-item">

                <strong>${t?t.name:`General Assignment`}</strong><br>

                ${e.assignment}

            </div>

        `})}function we(e){return e.source===`combatants`?`
        <p>
            ${e.power?`${e.power.toLocaleString()} power`:``}
            ${e.legion?` | Legion ${e.legion}`:``}
        </p>
    `:``}var Te=i((()=>{z(),q(),be(),Ne()}));function Ee(){return H}function De(e){U=e}function Oe(e){return{critical:`🔴`,high:`🟠`,medium:`🟡`,low:`⚪`}[e.toLowerCase()]||`⚪`}function ke(e){let t={opening:0,mid:1,final:2};return t[H]>=t[e.unlockPhase]}function V(){let e=document.getElementById(`battlefield-map`);if(!e)return;e.innerHTML=``;let t=W(),n=he(t,H);L().forEach(r=>{let i=document.createElement(`div`);i.dataset.id=r.id,i.className=`objective`,i.style.left=r.x+`%`,i.style.top=r.y+`%`;let a=r.phases[H];i.classList.add(a.priority.toLowerCase());let o=ke(r);if(o||i.classList.add(`locked`),t){let e=n.some(e=>e.objectiveId===r.id);i.classList.add(e?`assigned`:`unassigned`)}U&&U.id===r.id&&i.classList.add(`selected`),i.innerHTML=`

            <div class="objective-priority">

                ${o?Oe(a.priority):`🔒`}

            </div>

            <div class="objective-name">

                ${r.name}

            </div>

        `,i.onclick=()=>{U=r,V()},e.appendChild(i)}),U||=L()[0],Ae(U),Ce(),xe()}function Ae(e){let t=document.getElementById(`objective-panel`);if(!t||!e)return;let n=e.phases[H],r=ge(W(),H,e.id),i=_e(e.id);t.innerHTML=`

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

            ${je(i)}

            <h3>Strategy</h3>

            <p>

                ${n.strategy}

            </p>

            <h3>Why</h3>

            <p>

                ${n.why}

            </p>

        </div>

    `}function je(e){return e.length===0?`<p>No combatants assigned.</p>`:`
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
    `}function Me(){let e=document.querySelectorAll(`.phase-button`);e.forEach(t=>{t.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),H=t.dataset.phase,V()}})}var H,U,Ne=i((()=>{z(),q(),be(),Se(),Te(),H=`opening`,U=null}));function Pe(){let e=document.getElementById(`chief-search`),t=document.getElementById(`chief-list`),n=document.getElementById(`legion-select`);if(!e||!t)return;t.innerHTML=``,I().slice().sort((e,t)=>e.displayName.localeCompare(t.displayName)).forEach(e=>{let n=document.createElement(`option`);n.value=e.displayName,t.appendChild(n)});let r=localStorage.getItem(`chief`);if(r){let t=I().find(e=>e.id===r);t&&(G=t.id,e.value=t.displayName)}n&&(n.value=String(Number.isFinite(K)?K:1),n.addEventListener(`change`,()=>{K=Number.parseInt(n.value,10),localStorage.setItem(`legion`,String(K)),V()})),Ie(),e.addEventListener(`change`,()=>{let t=I().find(t=>t.displayName.toLowerCase()===e.value.toLowerCase());if(!t){G=null,localStorage.removeItem(`chief`),Ie(),V();return}G=t.id,localStorage.setItem(`chief`,t.id),Ie(),V()})}function W(){return G}function Fe(){let e=ue(G);return e?.legion?e.legion:Number.isFinite(K)?K:1}function Ie(){let e=document.getElementById(`legion-selector`),t=document.getElementById(`legion-identifier`);if(!e||!t)return;let n=ue(G);if(n){e.hidden=!0,t.hidden=!1,t.innerHTML=`
            <label>Legion</label>
            <div class="legion-pill">
                ${n.legion?`Legion ${n.legion}`:`Unassigned`}
            </div>
        `;return}e.hidden=!1,t.hidden=!0,t.innerHTML=``}var G,K,q=i((()=>{z(),Ne(),G=null,K=Number.parseInt(localStorage.getItem(`legion`)??`1`,10)})),Le=a(((e,t)=>{var n=function(e){var t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i,a=typeof Symbol==`function`?Symbol:{},o=a.iterator||`@@iterator`,s=a.asyncIterator||`@@asyncIterator`,c=a.toStringTag||`@@toStringTag`;function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},``)}catch{l=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var a=t&&t.prototype instanceof _?t:_,o=Object.create(a.prototype);return r(o,`_invoke`,{value:E(e,n,new k(i||[]))}),o}e.wrap=u;function d(e,t,n){try{return{type:`normal`,arg:e.call(t,n)}}catch(e){return{type:`throw`,arg:e}}}var f=`suspendedStart`,p=`suspendedYield`,m=`executing`,h=`completed`,g={};function _(){}function v(){}function y(){}var b={};l(b,o,function(){return this});var x=Object.getPrototypeOf,S=x&&x(x(A([])));S&&S!==t&&n.call(S,o)&&(b=S);var C=y.prototype=_.prototype=Object.create(b);v.prototype=y,r(C,`constructor`,{value:y,configurable:!0}),r(y,`constructor`,{value:v,configurable:!0}),v.displayName=l(y,c,`GeneratorFunction`);function w(e){[`next`,`throw`,`return`].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}e.isGeneratorFunction=function(e){var t=typeof e==`function`&&e.constructor;return t?t===v||(t.displayName||t.name)===`GeneratorFunction`:!1},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,`GeneratorFunction`)),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}};function T(e,t){function i(r,a,o,s){var c=d(e[r],e,a);if(c.type===`throw`)s(c.arg);else{var l=c.arg,u=l.value;return u&&typeof u==`object`&&n.call(u,`__await`)?t.resolve(u.__await).then(function(e){i(`next`,e,o,s)},function(e){i(`throw`,e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return i(`throw`,e,o,s)})}}var a;function o(e,n){function r(){return new t(function(t,r){i(e,n,t,r)})}return a=a?a.then(r,r):r()}r(this,`_invoke`,{value:o})}w(T.prototype),l(T.prototype,s,function(){return this}),e.AsyncIterator=T,e.async=function(t,n,r,i,a){a===void 0&&(a=Promise);var o=new T(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})};function E(e,t,n){var r=f;return function(i,a){if(r===m)throw Error(`Generator is already running`);if(r===h){if(i===`throw`)throw a;return j()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=D(o,n);if(s){if(s===g)continue;return s}}if(n.method===`next`)n.sent=n._sent=n.arg;else if(n.method===`throw`){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else n.method===`return`&&n.abrupt(`return`,n.arg);r=m;var c=d(e,t,n);if(c.type===`normal`){if(r=n.done?h:p,c.arg===g)continue;return{value:c.arg,done:n.done}}else c.type===`throw`&&(r=h,n.method=`throw`,n.arg=c.arg)}}}function D(e,t){var n=t.method,r=e.iterator[n];if(r===i)return t.delegate=null,n===`throw`&&e.iterator.return&&(t.method=`return`,t.arg=i,D(e,t),t.method===`throw`)||n!==`return`&&(t.method=`throw`,t.arg=TypeError(`The iterator does not provide a '`+n+`' method`)),g;var a=d(r,e.iterator,t.arg);if(a.type===`throw`)return t.method=`throw`,t.arg=a.arg,t.delegate=null,g;var o=a.arg;if(!o)return t.method=`throw`,t.arg=TypeError(`iterator result is not an object`),t.delegate=null,g;if(o.done)t[e.resultName]=o.value,t.next=e.nextLoc,t.method!==`return`&&(t.method=`next`,t.arg=i);else return o;return t.delegate=null,g}w(C),l(C,c,`Generator`),l(C,o,function(){return this}),l(C,`toString`,function(){return`[object Generator]`});function ee(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type=`normal`,delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:`root`}],e.forEach(ee,this),this.reset(!0)}e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}};function A(e){if(e){var t=e[o];if(t)return t.call(e);if(typeof e.next==`function`)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=i,t.done=!0,t};return a.next=a}}return{next:j}}e.values=A;function j(){return{value:i,done:!0}}return k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method=`next`,this.arg=i,this.tryEntries.forEach(O),!e)for(var t in this)t.charAt(0)===`t`&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type===`throw`)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type=`throw`,s.arg=e,t.next=n,r&&(t.method=`next`,t.arg=i),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if(o.tryLoc===`root`)return r(`end`);if(o.tryLoc<=this.prev){var c=n.call(o,`catchLoc`),l=n.call(o,`finallyLoc`);if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else throw Error(`try statement without catch or finally`)}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,`finallyLoc`)&&this.prev<i.finallyLoc){var a=i;break}}a&&(e===`break`||e===`continue`)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method=`next`,this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if(e.type===`throw`)throw e.arg;return e.type===`break`||e.type===`continue`?this.next=e.arg:e.type===`return`?(this.rval=this.arg=e.arg,this.method=`return`,this.next=`end`):e.type===`normal`&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if(r.type===`throw`){var i=r.arg;O(n)}return i}}throw Error(`illegal catch attempt`)},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},this.method===`next`&&(this.arg=i),g}},e}(typeof t==`object`?t.exports:{});try{regeneratorRuntime=n}catch{typeof globalThis==`object`?globalThis.regeneratorRuntime=n:Function(`r`,`regeneratorRuntime = r`)(n)}})),Re=a(((e,t)=>{t.exports=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`})),ze=a(((e,t)=>{var n=Re(),r=0;t.exports=({id:e,action:t,payload:i={}})=>{let a=e;return a===void 0&&(a=n(`Job`,r),r+=1),{id:a,action:t,payload:i}}})),Be=a((e=>{var t=!1;e.logging=t,e.setLogging=e=>{t=e},e.log=(...n)=>t?console.log.apply(e,n):null})),Ve=a(((e,t)=>{var n=ze(),{log:r}=Be(),i=Re(),a=0;t.exports=()=>{let t=i(`Scheduler`,a),o={},s={},c=[];a+=1;let l=()=>c.length,u=()=>Object.keys(o).length,d=()=>{if(c.length!==0){let e=Object.keys(o);for(let t=0;t<e.length;t+=1)if(s[e[t]]===void 0){c[0](o[e[t]]);break}}},f=(i,a)=>new Promise((o,l)=>{let u=n({action:i,payload:a});c.push(async t=>{c.shift(),s[t.id]=u;try{o(await t[i].apply(e,[...a,u.id]))}catch(e){l(e)}finally{delete s[t.id],d()}}),r(`[${t}]: Add ${u.id} to JobQueue`),r(`[${t}]: JobQueue length=${c.length}`),d()});return{addWorker:e=>(o[e.id]=e,r(`[${t}]: Add ${e.id}`),r(`[${t}]: Number of workers=${u()}`),d(),e.id),addJob:async(e,...n)=>{if(u()===0)throw Error(`[${t}]: You need to have at least one worker before adding jobs`);return f(e,n)},terminate:async()=>{Object.keys(o).forEach(async e=>{await o[e].terminate()}),c=[]},getQueueLen:l,getNumWorkers:u}}})),He=a(((e,t)=>{t.exports=e=>{let t={};return typeof WorkerGlobalScope<`u`?t.type=`webworker`:typeof document==`object`?t.type=`browser`:typeof process==`object`&&typeof l==`function`&&(t.type=`node`),e===void 0?t:t[e]}})),Ue=a(((e,t)=>{var n=He()(`type`)===`browser`?e=>new URL(e,window.location.href).href:e=>e;t.exports=e=>{let t={...e};return[`corePath`,`workerPath`,`langPath`].forEach(r=>{e[r]&&(t[r]=n(t[r]))}),t}})),We=a(((e,t)=>{t.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}})),Ge=o({author:()=>``,browser:()=>tt,bugs:()=>ct,collective:()=>ut,contributors:()=>nt,default:()=>dt,dependencies:()=>at,description:()=>Je,devDependencies:()=>it,homepage:()=>lt,jsdelivr:()=>$e,license:()=>rt,main:()=>Ye,name:()=>Ke,overrides:()=>ot,repository:()=>st,scripts:()=>et,type:()=>Xe,types:()=>Ze,unpkg:()=>Qe,version:()=>qe}),Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft=i((()=>{Ke=`tesseract.js`,qe=`7.0.0`,Je=`Pure Javascript Multilingual OCR`,Ye=`src/index.js`,Xe=`commonjs`,Ze=`src/index.d.ts`,Qe=`dist/tesseract.min.js`,$e=`dist/tesseract.min.js`,et={start:`node scripts/server.js`,build:`rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs`,"profile:tesseract":`webpack-bundle-analyzer dist/tesseract-stats.json`,"profile:worker":`webpack-bundle-analyzer dist/worker-stats.json`,prepublishOnly:`npm run build`,wait:`rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js`,test:`npm-run-all -p -r start test:all`,"test:all":`npm-run-all wait test:browser test:node:all`,"test:browser":`karma start karma.conf.js`,"test:node":`nyc mocha --exit --bail --require ./scripts/test-helper.mjs`,"test:node:all":`npm run test:node -- ./tests/*.test.mjs`,lint:`eslint src`,"lint:fix":`eslint --fix src`,postinstall:`opencollective-postinstall || true`},tt={"./src/worker/node/index.js":`./src/worker/browser/index.js`},nt=[`jeromewu`],rt=`Apache-2.0`,it={"@babel/core":`^7.21.4`,"@babel/eslint-parser":`^7.21.3`,"@babel/preset-env":`^7.21.4`,"@rollup/plugin-commonjs":`^24.1.0`,acorn:`^8.8.2`,"babel-loader":`^9.1.2`,buffer:`^6.0.3`,cors:`^2.8.5`,eslint:`^7.32.0`,"eslint-config-airbnb-base":`^14.2.1`,"eslint-plugin-import":`^2.27.5`,"expect.js":`^0.3.1`,express:`^4.18.2`,mocha:`^10.2.0`,"npm-run-all":`^4.1.5`,karma:`^6.4.2`,"karma-chrome-launcher":`^3.2.0`,"karma-firefox-launcher":`^2.1.2`,"karma-mocha":`^2.0.1`,"karma-webpack":`^5.0.0`,nyc:`^15.1.0`,rimraf:`^5.0.0`,rollup:`^3.20.7`,"wait-on":`^7.0.1`,webpack:`^5.79.0`,"webpack-bundle-analyzer":`^4.8.0`,"webpack-cli":`^5.0.1`,"webpack-dev-middleware":`^6.0.2`,"rollup-plugin-sourcemaps":`^0.6.3`},at={"bmp-js":`^0.1.0`,"idb-keyval":`^6.2.0`,"is-url":`^1.2.4`,"node-fetch":`^2.6.9`,"opencollective-postinstall":`^2.0.3`,"regenerator-runtime":`^0.13.3`,"tesseract.js-core":`^7.0.0`,"wasm-feature-detect":`^1.8.0`,zlibjs:`^0.3.1`},ot={"@rollup/pluginutils":`^5.0.2`},st={type:`git`,url:`https://github.com/naptha/tesseract.js.git`},ct={url:`https://github.com/naptha/tesseract.js/issues`},lt=`https://github.com/naptha/tesseract.js`,ut={type:`opencollective`,url:`https://opencollective.com/tesseractjs`},dt={name:Ke,version:qe,description:Je,main:Ye,type:Xe,types:Ze,unpkg:Qe,jsdelivr:$e,scripts:et,browser:tt,author:``,contributors:nt,license:rt,devDependencies:it,dependencies:at,overrides:ot,repository:st,bugs:ct,homepage:lt,collective:ut}})),pt=a(((e,t)=>{t.exports={workerBlobURL:!0,logger:()=>{}}})),mt=a(((e,t)=>{var n=(ft(),c(Ge).default).version;t.exports={...pt(),workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${n}/dist/worker.min.js`}})),ht=a(((e,t)=>{t.exports=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){let t=new Blob([`importScripts("${e}");`],{type:`application/javascript`});n=new Worker(URL.createObjectURL(t))}else n=new Worker(e);return n}})),gt=a(((e,t)=>{t.exports=e=>{e.terminate()}})),_t=a(((e,t)=>{t.exports=(e,t)=>{e.onmessage=({data:e})=>{t(e)}}})),vt=a(((e,t)=>{t.exports=async(e,t)=>{e.postMessage(t)}})),yt=a(((e,t)=>{var n=e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:e}}})=>{n(Error(`File could not be read! Code=${e}`))},r.readAsArrayBuffer(e)}),r=async e=>{let t=e;return e===void 0?`undefined`:(typeof e==`string`?t=/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(`,`)[1]).split(``).map(e=>e.charCodeAt(0)):await(await fetch(e)).arrayBuffer():typeof HTMLElement<`u`&&e instanceof HTMLElement?(e.tagName===`IMG`&&(t=await r(e.src)),e.tagName===`VIDEO`&&(t=await r(e.poster)),e.tagName===`CANVAS`&&await new Promise(r=>{e.toBlob(async e=>{t=await n(e),r()})})):typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?t=await n(await e.convertToBlob()):(e instanceof File||e instanceof Blob)&&(t=await n(e)),new Uint8Array(t))};t.exports=r})),bt=a(((e,t)=>{t.exports={defaultOptions:mt(),spawnWorker:ht(),terminateWorker:gt(),onMessage:_t(),send:vt(),loadImage:yt()}})),xt=a(((e,t)=>{var n=Ue(),r=ze(),{log:i}=Be(),a=Re(),o=We(),{defaultOptions:s,spawnWorker:c,terminateWorker:l,onMessage:u,loadImage:d,send:f}=bt(),p=0;t.exports=async(e=`eng`,t=o.LSTM_ONLY,m={},h={})=>{let g=a(`Worker`,p),{logger:_,errorHandler:v,...y}=n({...s,...m}),b={},x=typeof e==`string`?e.split(`+`):e,S=t,C=h,w=[o.DEFAULT,o.LSTM_ONLY].includes(t)&&!y.legacyCore,T,E,D=new Promise((e,t)=>{E=e,T=t}),ee=e=>{T(e.message)},O=c(y);O.onerror=ee,p+=1;let k=({id:e,action:t,payload:n})=>new Promise((r,a)=>{i(`[${g}]: Start ${e}, action=${t}`);let o=`${t}-${e}`;b[o]={resolve:r,reject:a},f(O,{workerId:g,jobId:e,action:t,payload:n})}),A=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),j=e=>k(r({id:e,action:`load`,payload:{options:{lstmOnly:w,corePath:y.corePath,logging:y.logging}}})),te=(e,t,n)=>k(r({id:n,action:`FS`,payload:{method:`writeFile`,args:[e,t]}})),M=(e,t)=>k(r({id:t,action:`FS`,payload:{method:`readFile`,args:[e,{encoding:`utf8`}]}})),ne=(e,t)=>k(r({id:t,action:`FS`,payload:{method:`unlink`,args:[e]}})),re=(e,t,n)=>k(r({id:n,action:`FS`,payload:{method:e,args:t}})),N=(e,t)=>k(r({id:t,action:`loadLanguage`,payload:{langs:e,options:{langPath:y.langPath,dataPath:y.dataPath,cachePath:y.cachePath,cacheMethod:y.cacheMethod,gzip:y.gzip,lstmOnly:[o.DEFAULT,o.LSTM_ONLY].includes(S)&&!y.legacyLang}}})),P=(e,t,n,i)=>k(r({id:i,action:`initialize`,payload:{langs:e,oem:t,config:n}})),F=(e=`eng`,t,n,r)=>{if(w&&[o.TESSERACT_ONLY,o.TESSERACT_LSTM_COMBINED].includes(t))throw Error(`Legacy model requested but code missing.`);let i=t||S;S=i;let a=n||C;C=a;let s=(typeof e==`string`?e.split(`+`):e).filter(e=>!x.includes(e));return x.push(...s),s.length>0?N(s,r).then(()=>P(e,i,a,r)):P(e,i,a,r)},ie=(e={},t)=>k(r({id:t,action:`setParameters`,payload:{params:e}})),ae=async(e,t={},n={text:!0},i)=>k(r({id:i,action:`recognize`,payload:{image:await d(e),options:t,output:n}})),oe=async(e,t)=>{if(w)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return k(r({id:t,action:`detect`,payload:{image:await d(e)}}))},se=async()=>(O!==null&&(l(O),O=null),Promise.resolve());u(O,({workerId:e,jobId:t,status:n,action:r,data:a})=>{let o=`${r}-${t}`;if(n===`resolve`)i(`[${e}]: Complete ${t}`),b[o].resolve({jobId:t,data:a}),delete b[o];else if(n===`reject`)if(b[o].reject(a),delete b[o],r===`load`&&T(a),v)v(a);else throw Error(a);else n===`progress`&&_({...a,userJobId:t})});let ce={id:g,worker:O,load:A,writeText:te,readText:M,removeFile:ne,FS:re,reinitialize:F,setParameters:ie,recognize:ae,detect:oe,terminate:se};return j().then(()=>N(e)).then(()=>P(e,t,h)).then(()=>E(ce)).catch(()=>{}),D}})),St=a(((e,t)=>{var n=xt();t.exports={recognize:async(e,t,r)=>{let i=await n(t,1,r);return i.recognize(e).finally(async()=>{await i.terminate()})},detect:async(e,t)=>{let r=await n(`osd`,0,t);return r.detect(e).finally(async()=>{await r.terminate()})}}})),Ct=a(((e,t)=>{t.exports={AFR:`afr`,AMH:`amh`,ARA:`ara`,ASM:`asm`,AZE:`aze`,AZE_CYRL:`aze_cyrl`,BEL:`bel`,BEN:`ben`,BOD:`bod`,BOS:`bos`,BUL:`bul`,CAT:`cat`,CEB:`ceb`,CES:`ces`,CHI_SIM:`chi_sim`,CHI_TRA:`chi_tra`,CHR:`chr`,CYM:`cym`,DAN:`dan`,DEU:`deu`,DZO:`dzo`,ELL:`ell`,ENG:`eng`,ENM:`enm`,EPO:`epo`,EST:`est`,EUS:`eus`,FAS:`fas`,FIN:`fin`,FRA:`fra`,FRK:`frk`,FRM:`frm`,GLE:`gle`,GLG:`glg`,GRC:`grc`,GUJ:`guj`,HAT:`hat`,HEB:`heb`,HIN:`hin`,HRV:`hrv`,HUN:`hun`,IKU:`iku`,IND:`ind`,ISL:`isl`,ITA:`ita`,ITA_OLD:`ita_old`,JAV:`jav`,JPN:`jpn`,KAN:`kan`,KAT:`kat`,KAT_OLD:`kat_old`,KAZ:`kaz`,KHM:`khm`,KIR:`kir`,KOR:`kor`,KUR:`kur`,LAO:`lao`,LAT:`lat`,LAV:`lav`,LIT:`lit`,MAL:`mal`,MAR:`mar`,MKD:`mkd`,MLT:`mlt`,MSA:`msa`,MYA:`mya`,NEP:`nep`,NLD:`nld`,NOR:`nor`,ORI:`ori`,PAN:`pan`,POL:`pol`,POR:`por`,PUS:`pus`,RON:`ron`,RUS:`rus`,SAN:`san`,SIN:`sin`,SLK:`slk`,SLV:`slv`,SPA:`spa`,SPA_OLD:`spa_old`,SQI:`sqi`,SRP:`srp`,SRP_LATN:`srp_latn`,SWA:`swa`,SWE:`swe`,SYR:`syr`,TAM:`tam`,TEL:`tel`,TGK:`tgk`,TGL:`tgl`,THA:`tha`,TIR:`tir`,TUR:`tur`,UIG:`uig`,UKR:`ukr`,URD:`urd`,UZB:`uzb`,UZB_CYRL:`uzb_cyrl`,VIE:`vie`,YID:`yid`}})),wt=a(((e,t)=>{t.exports={OSD_ONLY:`0`,AUTO_OSD:`1`,AUTO_ONLY:`2`,AUTO:`3`,SINGLE_COLUMN:`4`,SINGLE_BLOCK_VERT_TEXT:`5`,SINGLE_BLOCK:`6`,SINGLE_LINE:`7`,SINGLE_WORD:`8`,CIRCLE_WORD:`9`,SINGLE_CHAR:`10`,SPARSE_TEXT:`11`,SPARSE_TEXT_OSD:`12`,RAW_LINE:`13`}})),Tt=a(((e,t)=>{Le();var n=Ve(),r=xt(),i=St(),a=Ct(),o=We(),s=wt(),{setLogging:c}=Be();t.exports={languages:a,OEM:o,PSM:s,createScheduler:n,createWorker:r,setLogging:c,...i}}));async function Et(){return J||(J=await(0,Dt.createWorker)(`eng`),J)}var Dt,J,Ot=i((()=>{Dt=Tt(),J=null}));async function kt(e){return new Promise(t=>{let n=new Image;n.onload=()=>{let e=document.createElement(`canvas`),r=e.getContext(`2d`),i=369/n.width;e.width=369,e.height=Math.round(n.height*i),r.imageSmoothingEnabled=!1,r.drawImage(n,0,0,e.width,e.height);let a=r.getImageData(0,0,e.width,e.height),o=a.data;for(let e=0;e<o.length;e+=4){let t=.299*o[e]+.587*o[e+1]+.114*o[e+2];o[e]=t,o[e+1]=t,o[e+2]=t}r.putImageData(a,0,0),t(e)},n.src=URL.createObjectURL(e)})}var At=i((()=>{})),Y,jt=i((()=>{Y={targetWidth:369,anchorSearch:{x:0,y:0,width:369,height:200},anchorText:`Troop Power`,firstRowOffset:18,listTopFallback:145,rowHeight:68,rowGap:4,minRowGap:24,avatarProbe:{x:18,width:60,height:52,threshold:18},regions:{name:{x:78,y:8,width:175,height:24},power:{x:96,y:29,width:88,height:24,scale:4,numericOnly:!0},status:{x:78,y:47,width:190,height:20},engagement:{x:268,y:27,width:75,height:34}}}}));function Mt(e,t){let n=document.createElement(`canvas`),r=n.getContext(`2d`),i=t.scale??1;return n.width=t.width*i,n.height=t.height*i,r.imageSmoothingEnabled=!1,r.drawImage(e,t.x,t.y,t.width,t.height,0,0,n.width,n.height),t.numericOnly&&Nt(n),n}function Nt(e){let t=e.getContext(`2d`),n=t.getImageData(0,0,e.width,e.height),r=n.data;for(let e=0;e<r.length;e+=4){let t=.299*r[e]+.587*r[e+1]+.114*r[e+2]>150?255:0;r[e]=t,r[e+1]=t,r[e+2]=t,r[e+3]=255}t.putImageData(n,0,0)}function Pt(e,t){let n=[],r=Math.max(Y.listTopFallback,(t?.bottom??0)+Y.firstRowOffset),i=-1/0;for(let t=r;t<=e.height-Y.rowHeight;t+=1){if(t-i<Y.minRowGap||Ft(e,t)<Y.avatarProbe.threshold)continue;let r=It(e,t);n.push({y:r,canvas:Mt(e,{x:0,y:r,width:e.width,height:Math.min(Y.rowHeight,e.height-r)})}),i=r,t=r+Y.rowHeight-1}return n}function Ft(e,t){let n=Y.avatarProbe,r=e.getContext(`2d`).getImageData(n.x,t,n.width,Math.min(n.height,e.height-t)).data,i=0,a=0,o=0;for(let e=0;e<r.length;e+=4){let t=.299*r[e]+.587*r[e+1]+.114*r[e+2];i+=t,a+=t*t,o+=1}let s=i/o,c=a/o-s*s;return Math.sqrt(Math.max(c,0))}function It(e,t){let n=t,r=-1/0;for(let i=Math.max(0,t-8);i<=Math.min(e.height-Y.rowHeight,t+8);i+=1){let t=Ft(e,i);t>r&&(r=t,n=i)}return n}var Lt=i((()=>{jt()}));async function Rt(e){let t=await Et(),n=[];for(let r of e){let e=await kt(r),i=zt(e),{data:a}=await t.recognize(i),o=Bt(a),s=Gt(a.text),c=Pt(e,o),l=[];for(let e=0;e<c.length;e+=1){let n=await Vt(t,c[e],r.name,e,s);n&&l.push(n)}n.push({filename:r.name,anchorText:a.text,anchorFound:!!o,screenshotLegion:s,combatants:l,rowCount:c.length})}return n}function zt(e){return Mt(e,Y.anchorSearch)}function Bt(e){let t=e.words??[],n=Y.anchorText.toLowerCase().split(/\s+/);for(let e=0;e<t.length;e+=1){let r=Z(t[e].text),i=Z(t[e+1]?.text??``);if(r.includes(n[0])&&i.includes(n[1]))return{x:t[e].bbox.x0,y:Math.min(t[e].bbox.y0,t[e+1].bbox.y0),bottom:Math.max(t[e].bbox.y1,t[e+1].bbox.y1)}}return Z(e.text).includes(Y.anchorText.toLowerCase())?{x:Y.anchorSearch.x,y:Y.listTopFallback-Y.firstRowOffset,bottom:Y.listTopFallback-Y.firstRowOffset}:null}async function Vt(e,t,n,r,i){let a=await X(e,t.canvas,Y.regions.name),o=await X(e,t.canvas,Y.regions.power),s=await X(e,t.canvas,Y.regions.status),c=await X(e,t.canvas,Y.regions.engagement),l=Ht(a),u=Wt(o),d=Kt(s,c,i),f=Ut(c);return!l||u===null||u<=0||qt(l)||Jt(f)?null:{id:Yt(l),name:l,power:u,legion:d.legion,legionSource:d.source,status:Ut(s),engagement:f,sourceFile:n,sourceRow:r,sourceY:t.y}}async function X(e,t,n){n.numericOnly&&await e.setParameters({tessedit_char_whitelist:`0123456789,.`,tessedit_pageseg_mode:`7`});let{data:{text:r}}=await e.recognize(Mt(t,n));return n.numericOnly&&await e.setParameters({tessedit_char_whitelist:``,tessedit_pageseg_mode:`3`}),r}function Z(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,` `).trim()}function Ht(e){return String(e).replace(/[^\S\r\n]+/g,` `).replace(/\n+/g,` `).replace(/[^\p{L}\p{N}\s'._-]/gu,``).trim()}function Ut(e){return String(e).replace(/[^\S\r\n]+/g,` `).replace(/\n+/g,` `).trim()}function Wt(e){let t=(String(e).replace(/[oO]/g,`0`).replace(/[lI|]/g,`1`).match(/\d[\d,.\s]*/g)??[]).map(e=>Number.parseInt(e.replace(/[^\d]/g,``),10)).filter(e=>Number.isFinite(e)&&e>=100&&e<=1e8);return t.length===0?null:t.sort((e,t)=>t-e)[0]}function Gt(e){let t=Z(e).match(/legion\s*(\d+)\s*combatants/);if(!t)return null;let n=Number.parseInt(t[1],10);return Number.isFinite(n)?n:null}function Kt(e,t,n){let r=Z(e).match(/legion\s*(\d+)\s*dispatched/);if(r){let e=Number.parseInt(r[1],10);return{legion:Number.isFinite(e)?e:null,source:`dispatched-status`}}let i=Z(t);return n!==null&&(i.includes(`join`)||i.includes(`substitute`))?{legion:n,source:`row-action`}:{legion:null,source:`unknown`}}function qt(e){return[`leader`,`officers`,`troop power`,`join`,`substitute`].includes(Z(e))}function Jt(e){let t=Z(e);return t.includes(`no engagement`)||t.includes(`no engagements`)||t.includes(`noengagement`)}function Yt(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}var Xt=i((()=>{Ot(),At(),jt(),Lt()}));async function Zt(e,t){switch(e){case`foundry`:return Rt(t);default:throw Error(`${e} parser not implemented.`)}}var Qt=i((()=>{Xt()}));async function $t(e,t){return Zt(e,t)}var en=i((()=>{Qt()}));function tn(){let e=document.getElementById(`import-page`);e&&(e.innerHTML=`
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

            <hr>

            <div id="import-results">
                Nothing processed.
            </div>

        </div>
    `,document.getElementById(`process-images`).addEventListener(`click`,async()=>{let e=document.getElementById(`event-select`).value,t=[...document.getElementById(`combatant-upload`).files];if(t.length===0){alert(`Please select one or more screenshots.`);return}let n=document.getElementById(`import-results`);n.innerHTML=`<p>Processing...</p>`;try{let r=await $t(e,t);$=r.flatMap(e=>e.combatants??[]).map(un),nn(n,r)}catch(e){console.error(e),n.innerHTML=`
                    <p class="error">
                        ${e.message}
                    </p>
                `}}))}function nn(e,t){e.innerHTML=`
        ${t.map(e=>`
            <div class="ocr-result">

                <h3>${hn(e.filename)}</h3>

                <p>
                    Anchor ${e.anchorFound?`found`:`not found`}.
                    ${e.screenshotLegion?`Legion ${e.screenshotLegion}.`:``}
                    ${e.combatants?.length??0} combatants parsed.
                </p>

                <pre>${hn(e.anchorText??`No anchor detected.`)}</pre>

            </div>
        `).join(``)}

        ${rn($)}
    `,on(e)}function rn(e=[]){return e.length===0?`<p>No combatants parsed.</p>`:`
        <div class="review-panel">
            <h3>Review Combatants</h3>

            <div class="review-grid">
                <div class="review-heading">Name</div>
                <div class="review-heading">Power</div>
                <div class="review-heading">Assignment</div>
                <div class="review-heading">Status</div>
                <div class="review-heading">Engagement</div>
                <div class="review-heading"></div>

                ${e.map((e,t)=>`
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
                        ${an(t,e,`Legion 1`)}
                        ${an(t,e,`Legion 2`)}
                        ${an(t,e,`No engagement`)}
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
                `).join(``)}
            </div>

            <div class="button-row">
                <button
                    id="save-reviewed-combatants"
                    type="button"
                    class="primary">
                    Save Reviewed Combatants
                </button>

                <span id="review-save-status"></span>
            </div>
        </div>
    `}function an(e,t,n){let r=fn(t.assignment);return`
        <label class="review-radio-option">
            <input
                class="review-assignment-choice"
                type="radio"
                name="assignment-${e}"
                data-review-index="${e}"
                data-review-field="assignment"
                value="${Q(n)}"
                ${r===n?`checked`:``}>
            <span>${hn(n)}</span>
        </label>
    `}function on(e){e.querySelectorAll(`[data-review-index]`).forEach(e=>{e.addEventListener(`change`,()=>{sn(e)})}),e.querySelectorAll(`[data-remove-review-index]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Number.parseInt(e.dataset.removeReviewIndex,10);$.splice(t,1);let n=document.getElementById(`import-results`);n.innerHTML=rn($),on(n)})});let t=e.querySelector(`#save-reviewed-combatants`);t&&t.addEventListener(`click`,async()=>{let t=e.querySelector(`#review-save-status`);t.textContent=`Saving...`;try{await se(`combatants`,$.map(ln)),t.textContent=`Saved.`}catch(e){console.error(e),t.textContent=e.message}})}function sn(e){let t=Number.parseInt(e.dataset.reviewIndex,10),n=e.dataset.reviewField;!$[t]||!n||($[t]={...$[t],[n]:cn(n,e.value)})}function cn(e,t){if(e===`power`){let e=Number.parseInt(String(t).replace(/,/g,``),10);return Number.isFinite(e)?e:null}return t.trim()}function ln(e){let t=e.name?.trim()??``,n=fn(e.assignment);return{...e,id:mn(t),name:t,power:Number.parseInt(e.power,10)||0,legion:pn(n),assignment:n}}function un(e){return{...e,assignment:e.assignment??dn(e)}}function dn(e){return e.legion?`Legion ${e.legion}`:`No engagement`}function fn(e){return e===`Legion 1`||e===`Legion 2`?e:`No engagement`}function pn(e){return e===`Legion 1`?1:e===`Legion 2`?2:null}function mn(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}function hn(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function Q(e){return hn(e)}var $,gn=i((()=>{en(),z(),$=[]}));async function _n(){await oe(),_(),Pe(),Me(),V(),tn()}var vn=i((()=>{v(),z(),q(),Ne(),gn(),document.addEventListener(`DOMContentLoaded`,()=>{_n()})}));a((()=>{u(),vn(),q(),ie(),gn(),document.addEventListener(`DOMContentLoaded`,()=>{})}))();export{i as t};