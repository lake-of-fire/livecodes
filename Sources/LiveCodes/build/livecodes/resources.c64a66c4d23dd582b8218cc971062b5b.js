var j=`<div id="resources-container" class="modal-container"><div class="modal-title">External Resources</div><div id="resources-screen-container" class="modal-screen-container"><div class="modal-screen"><label for="resources-search-input">Search Packages <span class="nowrap label-description">(powered by jsDelivr)</span></label> <input type="text" id="resources-search-input" placeholder="e.g. jquery, lodash@4, bootstrap@5.2.3, ..."><div id="resources-result-container"><ul id="resources-search-results"></ul></div><div id="resources-textarea-container"><div class="description center">Add stylesheet/script URLs and click 'Load'. Each URL should be in a separate line.</div><label for="external-stylesheets">External Stylesheets</label> <textarea id="external-stylesheets" placeholder="https://" data-resource="stylesheets"></textarea> <label for="external-scripts">External Scripts</label> <textarea id="external-scripts" placeholder="https://" data-resource="scripts"></textarea></div><label>Fonts <span class="nowrap label-description">(powered by Google Fonts)</span></label><div id="fonts-container"><select><option value="">Loading...</option></select> <button class="btn">Add</button></div><label>CSS Presets</label><div class="input-container"><span><input type="radio" id="resources-css-preset-none" name="css-preset" value="" checked> <label class="radio-label" for="resources-css-preset-none">None</label> </span><span><input type="radio" id="resources-css-preset-normalize-css" name="css-preset" value="normalize.css"> <label class="radio-label" for="resources-css-preset-normalize-css">Normalize.css</label> </span><span><input type="radio" id="resources-css-preset-reset-css" name="css-preset" value="reset-css"> <label class="radio-label" for="resources-css-preset-reset-css">Reset CSS</label></span></div><button id="resources-load-btn" class="wide-button">Load</button></div></div></div>`;var K=n=>n.replace(/{{APP_VERSION}}/g,"7").replace(/{{SDK_VERSION}}/g,"0.0.3").replace(/{{COMMIT_SHA}}/g,"4eaa0ef").replace(/{{REPO_URL}}/g,"https://github.com/live-codes/livecodes").replace(/{{DOCS_BASE_URL}}/g,"/docs/");var U=K(j);var F=n=>`https://ofcncog2cu-dsn.algolia.net/1/indexes/npm-search/${encodeURIComponent(n)}?x-algolia-agent=Browser`,O={"X-Algolia-Application-Id":"OFCNCOG2CU","X-Algolia-API-Key":"f54e21fa3a2a0160595bb058179bfb1e"},D=["name","description","homepage","repository.url","version"],R="https://data.jsdelivr.com/v1",C={"User-Agent":"https://livecodes.io"},f=n=>{let l=n.startsWith("@"),a=l?n.slice(1):n,[t,i]=a.split("@");return[(l?"@":"")+t,i]},Z=async(n,l=10)=>{let a={page:0,hitsPerPage:l,attributesToHighlight:[],attributesToRetrieve:D,analyticsTags:["jsdelivr"]},[t,i]=f(n),e;if(i){let c=await H(n);typeof c=="string"&&(e=f(c)[1])}let o=await fetch(F("query"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8",...O},body:JSON.stringify({query:t,...a})}).then(c=>{if(!c.ok)throw new Error("failed to fetch");return c}).then(c=>c.json()).catch(c=>({error:!0,message:c.mesage||String(c)}));if("error"in o)return o;let L=o.hits.map(c=>(c.name===t&&e&&(c.version=e),c.repository?.url&&(c.repo=c.repository?.url),c));return L.sort((c,y)=>c.name===t?-1:y.name===t?1:0),L},H=async n=>{let l=`${R}/package/resolve/npm/${n}`,a=await fetch(l,{headers:C}).then(e=>{if(!e.ok)throw new Error("failed to fetch");return e}).then(e=>e.json()).catch(e=>({error:!0,message:e.mesage||String(e)}));if("error"in a)return a;let t=f(n)[0],i=a.version;return i?`${t}@${i}`:t},Q=async n=>{let[l,a]=f(n),t;if(a){let o=await H(n);typeof o=="string"&&(t=f(o)[1])}let i=F(l)+"&attributesToRetrieve="+D.join(","),e=await fetch(i,{method:"GET",headers:O}).then(o=>{if(!o.ok)throw new Error("failed to fetch");return o}).then(o=>o.json()).catch(o=>({error:!0,message:o.mesage||String(o)}));return"error"in e||(t&&(e.version=t),e.repository?.url&&(e.repo=e.repository?.url)),e},X=async n=>{let l=await H(n),a=`${R}/package/npm/${l}/flat`,t=await fetch(a,{headers:C}).then(e=>{if(!e.ok)throw new Error("failed to fetch");return e}).then(e=>e.json()).catch(e=>({error:!0,message:e.mesage||String(e)}));if("error"in t)return t;let i=`https://cdn.jsdelivr.net/npm/${l}`;return{...t.default?{default:i+t.default}:{},files:t.files.map(e=>i+e.name)}},Y=async n=>{let l=await H(n),a=`${R}/package/npm/${l}/entrypoints`,t=await fetch(a,{headers:C}).then(e=>{if(!e.ok)throw new Error("failed to fetch");return e}).then(e=>e.json()).catch(e=>({error:!0,message:e.mesage||String(e)}));if("error"in t)return t;let i=`https://cdn.jsdelivr.net/npm/${l}`;return{...t.js?.file?{js:i+t.js?.file}:{},...t.css?.file?{css:i+t.css?.file}:{}}},B={search:Z,getPkgInfo:Q,getPkgFiles:X,getPkgDefaultFiles:Y};var N=(n,l)=>{let a;return(...t)=>{a&&clearTimeout(a),a=setTimeout(()=>n.apply(null,t),typeof l=="function"?l():l)}};var W=n=>{let l=()=>{n.style.display="none",e(),window.watchingEscape=!1},a=o=>{!n.contains(o.target)&&i(n)&&l()},t=o=>{o.key==="Escape"&&(l(),o.preventDefault())},i=o=>!!o&&!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length),e=()=>{document.removeEventListener("click",a),document.removeEventListener("keydown",t)};return document.addEventListener("click",a),document.addEventListener("keydown",t),window.watchingEscape=!0,{clear:()=>e()}};var $=()=>document.querySelectorAll("#resources-container textarea"),_=()=>document.querySelectorAll('#resources-container input[type="radio"]'),z=()=>document.querySelector("#resources-container #resources-load-btn");var me=({baseUrl:n,modal:l,eventsManager:a,deps:t})=>{let i=document.createElement("div");i.innerHTML=U;let e=i.firstChild;l.show(e);let o=$();o.forEach(r=>{let u=t.getConfig()[r.dataset.resource];r.value=u.length!==0?u.join(`
`)+`
`:""});let L=_();L.forEach(r=>{t.getConfig().cssPreset===r.value&&(r.checked=!0)});let c=document.querySelector("#resources-container #resources-search-input"),y=document.querySelector("#resources-container #resources-result-container"),d=document.querySelector("#resources-container #resources-search-results"),T=document.querySelector("#resources-container #fonts-container select"),h=document.querySelector("#resources-container #fonts-container button"),b=(r,u)=>{if(!r||v(r,u))return;let p=u==="stylesheets"?o[0]:o[1];p.value=p.value.trim()===""?r.trim()+`
`:p.value.split(`
`).map(s=>s.trim()).filter(s=>s!=="").join(`
`)+`
`+r.trim()+`
`,document.querySelector(`#resources-search-results a.add-resource[data-resource-url="${r}"]`)?.classList.add("resource-added")},v=(r,u)=>r?!!(u==="stylesheets"?o[0]:o[1]).value.split(`
`).map(s=>s.trim()).find(s=>s===r.trim()):!1,V=({name:r,version:u,description:p,files:s})=>{let E=document.createElement("li"),g=document.createElement("div");g.classList.add("search-result-item-title"),g.textContent=r,E.appendChild(g);let q=document.createElement("span");q.classList.add("label-description"),q.textContent="v"+u,g.appendChild(q);let k=document.createElement("div");k.classList.add("search-result-item-description"),k.textContent=p||"",E.appendChild(k);let S=document.createElement("div");S.classList.add("search-result-item-files"),E.appendChild(S);let w=document.createElement("span");if(w.classList.add("search-result-item-script"),S.appendChild(w),s?.js){let M=v(s.js,"scripts"),m=document.createElement("a");m.classList.add("add-resource"),m.classList.toggle("resource-added",M),m.href="#",m.onclick=M?null:()=>b(s.js||"","scripts"),m.title=s.js,m.dataset.resourceUrl=s.js,m.innerHTML=`<img src="${n}assets/images/javascript.svg" />`,w.appendChild(m)}let I=document.createElement("span");if(I.classList.add("search-result-item-stylesheet"),S.appendChild(I),s?.css){let M=v(s.css,"stylesheets"),m=document.createElement("a");m.classList.add("add-resource"),m.classList.toggle("resource-added",M),m.href="#",m.onclick=M?null:()=>b(s.css||"","stylesheets"),m.title=s.css,m.dataset.resourceUrl=s.css,m.innerHTML=`<img src="${n}assets/images/css.svg" />`,I.appendChild(m)}let A=document.createElement("span");A.classList.add("search-result-item-Browse"),S.appendChild(A);let x=document.createElement("a");return x.href=`https://cdn.jsdelivr.net/npm/${r}/`,x.target="_blank",x.title="Browse package files on jsDelivr",x.textContent="Browse",A.appendChild(x),E},J=async()=>{let r=c.value,u=await B.search(c.value,5);if(r!==c.value){d.innerHTML='<li><div class="search-result-item-description">Loading...</div></li>';return}if("error"in u){d.innerHTML='<li><div class="search-result-item-error">Failed to load results!</div></li>';return}if(u.length===0){d.innerHTML=`<li><div class="search-result-item-description">No results found for: <strong>${r}</strong></div></li>`;return}let p=(await Promise.all(u.map(async s=>{let E=s.version!=null?`${s.name}@${s.version}`:s.name,g=await B.getPkgDefaultFiles(E);if(!("error"in g))return{...s,files:g}}))).filter(Boolean);if(r===c.value){if(p.length===0){d.innerHTML='<li><div class="search-result-item-error">Failed to load results!</div></li>';return}d.innerHTML="",p.forEach(s=>d.appendChild(V(s)))}},P;c?.focus(),c.addEventListener("input",async()=>{if(d.innerHTML='<li><div class="search-result-item-description">Loading...</div></li>',P?.clear(),c.value.length>0)y.style.display="unset",P=W(y);else{y.style.display="none";return}N(J,300)()}),import(n+"google-fonts.0d0bc37857dba82d020f93ca95511304.js").then(r=>{T.innerHTML='<option value="">Select font ...</option>',r.googleFonts.getFonts().forEach(p=>{let s=document.createElement("option");s.innerText=p,T.appendChild(s)}),a.addEventListener(h,"click",()=>{T.value!==""&&(b(r.googleFonts.getStylesheetUrl(T.value),"stylesheets"),T.value="",h.innerText="\u2714",setTimeout(()=>{h.innerText="Add"},1e3))})}),a.addEventListener(z(),"click",async()=>{o.forEach(r=>{let u=r.dataset.resource;t.setConfig({...t.getConfig(),[u]:r.value?.split(`
`).map(p=>p.trim()).filter(p=>p!=="")||[]})}),L.forEach(r=>{r.checked&&t.setConfig({...t.getConfig(),cssPreset:r.value})}),t.loadResources()})};export{me as createExternalResourcesUI};
