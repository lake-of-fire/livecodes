var me=Object.create;var F=Object.defineProperty;var ge=Object.getOwnPropertyDescriptor;var fe=Object.getOwnPropertyNames;var ye=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty;var he=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var Le=(e,n,d,m)=>{if(n&&typeof n=="object"||typeof n=="function")for(let u of fe(n))!xe.call(e,u)&&u!==d&&F(e,u,{get:()=>n[u],enumerable:!(m=ge(n,u))||m.enumerable});return e};var Se=(e,n,d)=>(d=e!=null?me(ye(e)):{},Le(n||!e||!e.__esModule?F(d,"default",{value:e,enumerable:!0}):d,e));var Q=he((xt,I)=>{var Z=function(){var e=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",m={};function u(o,s){if(!m[o]){m[o]={};for(var p=0;p<o.length;p++)m[o][o.charAt(p)]=p}return m[o][s]}var f={compressToBase64:function(o){if(o==null)return"";var s=f._compress(o,6,function(p){return n.charAt(p)});switch(s.length%4){default:case 0:return s;case 1:return s+"===";case 2:return s+"==";case 3:return s+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:f._decompress(o.length,32,function(s){return u(n,o.charAt(s))})},compressToUTF16:function(o){return o==null?"":f._compress(o,15,function(s){return e(s+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:f._decompress(o.length,16384,function(s){return o.charCodeAt(s)-32})},compressToUint8Array:function(o){for(var s=f.compress(o),p=new Uint8Array(s.length*2),a=0,l=s.length;a<l;a++){var x=s.charCodeAt(a);p[a*2]=x>>>8,p[a*2+1]=x%256}return p},decompressFromUint8Array:function(o){if(o==null)return f.decompress(o);for(var s=new Array(o.length/2),p=0,a=s.length;p<a;p++)s[p]=o[p*2]*256+o[p*2+1];var l=[];return s.forEach(function(x){l.push(e(x))}),f.decompress(l.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":f._compress(o,6,function(s){return d.charAt(s)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),f._decompress(o.length,32,function(s){return u(d,o.charAt(s))}))},compress:function(o){return f._compress(o,16,function(s){return e(s)})},_compress:function(o,s,p){if(o==null)return"";var a,l,x={},b={},S="",E="",h="",L=2,v=3,g=2,c=[],t=0,r=0,y;for(y=0;y<o.length;y+=1)if(S=o.charAt(y),Object.prototype.hasOwnProperty.call(x,S)||(x[S]=v++,b[S]=!0),E=h+S,Object.prototype.hasOwnProperty.call(x,E))h=E;else{if(Object.prototype.hasOwnProperty.call(b,h)){if(h.charCodeAt(0)<256){for(a=0;a<g;a++)t=t<<1,r==s-1?(r=0,c.push(p(t)),t=0):r++;for(l=h.charCodeAt(0),a=0;a<8;a++)t=t<<1|l&1,r==s-1?(r=0,c.push(p(t)),t=0):r++,l=l>>1}else{for(l=1,a=0;a<g;a++)t=t<<1|l,r==s-1?(r=0,c.push(p(t)),t=0):r++,l=0;for(l=h.charCodeAt(0),a=0;a<16;a++)t=t<<1|l&1,r==s-1?(r=0,c.push(p(t)),t=0):r++,l=l>>1}L--,L==0&&(L=Math.pow(2,g),g++),delete b[h]}else for(l=x[h],a=0;a<g;a++)t=t<<1|l&1,r==s-1?(r=0,c.push(p(t)),t=0):r++,l=l>>1;L--,L==0&&(L=Math.pow(2,g),g++),x[E]=v++,h=String(S)}if(h!==""){if(Object.prototype.hasOwnProperty.call(b,h)){if(h.charCodeAt(0)<256){for(a=0;a<g;a++)t=t<<1,r==s-1?(r=0,c.push(p(t)),t=0):r++;for(l=h.charCodeAt(0),a=0;a<8;a++)t=t<<1|l&1,r==s-1?(r=0,c.push(p(t)),t=0):r++,l=l>>1}else{for(l=1,a=0;a<g;a++)t=t<<1|l,r==s-1?(r=0,c.push(p(t)),t=0):r++,l=0;for(l=h.charCodeAt(0),a=0;a<16;a++)t=t<<1|l&1,r==s-1?(r=0,c.push(p(t)),t=0):r++,l=l>>1}L--,L==0&&(L=Math.pow(2,g),g++),delete b[h]}else for(l=x[h],a=0;a<g;a++)t=t<<1|l&1,r==s-1?(r=0,c.push(p(t)),t=0):r++,l=l>>1;L--,L==0&&(L=Math.pow(2,g),g++)}for(l=2,a=0;a<g;a++)t=t<<1|l&1,r==s-1?(r=0,c.push(p(t)),t=0):r++,l=l>>1;for(;;)if(t=t<<1,r==s-1){c.push(p(t));break}else r++;return c.join("")},decompress:function(o){return o==null?"":o==""?null:f._decompress(o.length,32768,function(s){return o.charCodeAt(s)})},_decompress:function(o,s,p){var a=[],l,x=4,b=4,S=3,E="",h=[],L,v,g,c,t,r,y,i={val:p(0),position:s,index:1};for(L=0;L<3;L+=1)a[L]=L;for(g=0,t=Math.pow(2,2),r=1;r!=t;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=p(i.index++)),g|=(c>0?1:0)*r,r<<=1;switch(l=g){case 0:for(g=0,t=Math.pow(2,8),r=1;r!=t;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=p(i.index++)),g|=(c>0?1:0)*r,r<<=1;y=e(g);break;case 1:for(g=0,t=Math.pow(2,16),r=1;r!=t;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=p(i.index++)),g|=(c>0?1:0)*r,r<<=1;y=e(g);break;case 2:return""}for(a[3]=y,v=y,h.push(y);;){if(i.index>o)return"";for(g=0,t=Math.pow(2,S),r=1;r!=t;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=p(i.index++)),g|=(c>0?1:0)*r,r<<=1;switch(y=g){case 0:for(g=0,t=Math.pow(2,8),r=1;r!=t;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=p(i.index++)),g|=(c>0?1:0)*r,r<<=1;a[b++]=e(g),y=b-1,x--;break;case 1:for(g=0,t=Math.pow(2,16),r=1;r!=t;)c=i.val&i.position,i.position>>=1,i.position==0&&(i.position=s,i.val=p(i.index++)),g|=(c>0?1:0)*r,r<<=1;a[b++]=e(g),y=b-1,x--;break;case 2:return h.join("")}if(x==0&&(x=Math.pow(2,S),S++),a[y])E=a[y];else if(y===b)E=v+v.charAt(0);else return null;h.push(E),a[b++]=v+E.charAt(0),x--,v=E,x==0&&(x=Math.pow(2,S),S++)}}};return f}();typeof define=="function"&&define.amd?define(function(){return Z}):typeof I<"u"&&I!=null&&(I.exports=Z)});var O=()=>{let e=!1,n=navigator.userAgent.toLowerCase();return function(d){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(d)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(d.substr(0,4)))&&(e=!0)}(n||navigator.vendor||window.opera),e};var N=e=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){let n=document.createElement("textarea");n.textContent=e,n.style.position="fixed",document.body.appendChild(n),n.select();try{return document.execCommand("copy")}catch(d){return console.warn("Copy to clipboard failed.",d),!1}finally{document.body.removeChild(n)}}return!1};var R=(e,n)=>new Promise((d,m)=>{if(n&&globalThis[n])return d(globalThis[n]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(e),n&&globalThis[n]?d(globalThis[n]):d(globalThis);let u=document.createElement("script");u.src=e,u.async=!0;let f=()=>{u.removeEventListener("load",o),u.removeEventListener("error",s)},o=()=>{if(f(),!n)return d("loaded: "+e);let p=setInterval(()=>{if(window[n])return clearInterval(p),d(window[n])},5)},s=()=>{f(),m("failed to load: "+e)};u.addEventListener("load",o),u.addEventListener("error",s),document.head.appendChild(u)});var W=["jspm","skypack"],z=["unpkg","jsdelivr","fastly.jsdelivr"],K=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],U={getModuleUrl:(e,{isModule:n=!0,defaultCDN:d="jspm"}={})=>{e=e.replace(/#nobundle/g,"");let m=$(e,n,d);return m||(n?"https://jspm.dev/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,n)=>e.startsWith("http")?e:$(e,!1,n||be())||e,cdnLists:{npm:z,module:W,gh:K},checkCDNs:async(e,n)=>{let d=[n,...U.cdnLists.npm].filter(Boolean);for(let m of d)try{if((await fetch(U.getUrl(e,m),{method:"HEAD"})).ok)return m}catch{}return U.cdnLists.npm[0]}},be=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||U.cdnLists.npm[0]}catch{return U.cdnLists.npm[0]}},$=(e,n,d)=>{let m=n&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",K[0]):e.includes(":")||(e=(d||(n?W[0]:z[0]))+":"+e);for(let u of ve){let[f,o]=u;if(f.test(e))return e.replace(f,o)+m}return null},ve=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://jspm.dev/$2"],[/^(node:)(.+)/i,"https://jspm.dev/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:J,getModuleUrl:Pe}=U;var G=J("flexsearch@0.7.21/dist/flexsearch.bundle.js");var Ee="0.6.64",Fe=J(`malinajs@${Ee}/malina.js`);var B=()=>(Date.now()+""+Math.floor(Math.floor(Math.random()*Date.now()))).substring(0,24);var _=Se(Q());var Y=`<div id="assets-list-container" class="list-container"><div class="modal-title">Assets</div><div class="buttons"><button id="assets-add-asset-button" class="button">Add Asset</button> <button id="assets-delete-all-button" class="button danger">Delete All</button></div><div class="modal-message" id="assets-container" class="items-container"><span id="assets-sort-by-label">Sort By:</span> <a href="#" id="assets-sort-by-last-modified" class="active">Date</a>&nbsp;/&nbsp;<a href="#" id="assets-sort-by-title">File Name</a>&nbsp;(<a href="#" id="assets-sorted-asc" style="display:none">\u25B2</a><a href="#" id="assets-sorted-desc">\u25BC</a>) <select name="type-filter" id="assets-type-filter"><option value="">All types</option></select> <input id="search-assets" type="text" placeholder="Search"> <a href="#" id="assets-reset-filters" class="hint--bottom" data-hint="Reset" style="width:auto"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.533 489.533" style="width:1em;height:1em" xml:space="preserve"><g><path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9
		l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6
		c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6
		C49.575,418.961,150.875,501.261,268.175,488.161z"/></g></svg></a><div class="modal-message no-data"><div>You have no saved assets.</div></div><div class="modal-message no-data" id="assets-no-match"><div>No assets match these filters.</div></div></div></div>`;var X='<div id="add-asset-container" class="modal-container"><div class="modal-title">Add Asset</div><div class="buttons"><button id="assets-button" class="button">Assets</button></div><ul id="add-asset-tabs" class="modal-tabs"><li data-target="add-asset-data-url" class="active">Data URL</li><li data-target="add-asset-gh-pages">GitHub Pages</li></ul><div id="add-asset-screens" class="modal-screen-container"><div id="add-asset-data-url" class="tab-content active"><div class="modal-screen"><div class="description">Add asset as a base64-encoded <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs" target="_blank" rel="noopener">data url</a>.</div><form id="add-asset-data-url-form"><label for="asset-data-url-file-input" class="file-input-label">Add file</label> <input type="file" id="asset-data-url-file-input" class="file-input"></form><div id="data-url-output" class="clickable" style="width:100%"></div></div></div><div id="add-asset-gh-pages" class="tab-content"><div class="modal-screen"><div class="description">Deploy asset to GitHub Pages. The file is pushed to <span class="code">gh-pages</span> branch of the repo <span class="code">livecodes-assets</span> on your GitHub account. If the repo does not already exist, a public repo will be created.</div><form id="add-asset-gh-pages-form"><label for="asset-gh-pages-file-input" id="asset-gh-pages-file-input-label" class="file-input-label">Upload file</label> <input type="file" id="asset-gh-pages-file-input" class="file-input"></form><div id="gh-pages-output" class="clickable" style="width:100%"></div></div></div></div></div>';var ee=e=>e.replace(/{{APP_VERSION}}/g,"7").replace(/{{SDK_VERSION}}/g,"0.0.3").replace(/{{COMMIT_SHA}}/g,"4eaa0ef").replace(/{{REPO_URL}}/g,"https://github.com/live-codes/livecodes").replace(/{{DOCS_BASE_URL}}/g,"/docs/");var te=ee(Y),oe=ee(X);var ne=e=>e.querySelector("#assets-add-asset-button"),se=e=>e.querySelector("#assets-delete-all-button"),re=e=>e.querySelector("#assets-button"),ce=e=>e.querySelector("#asset-data-url-file-input"),ae=e=>e.querySelector("#data-url-output"),le=e=>e.querySelector("#asset-gh-pages-file-input"),ie=e=>e.querySelector("#asset-gh-pages-file-input-label");var pe=e=>e.querySelector("#gh-pages-output");var de=(e,n)=>{N(e)?n.success("URL is copied to clipboard."):n.error("Failed to copy URL.")},He=(e,n)=>{let d=document.createElement("div");d.classList.add("asset-item");let m=document.createElement("div");m.classList.add("asset-title","overflow-text"),m.textContent=e.filename,d.appendChild(m);let u=document.createElement("img");u.src=ue(e,n),u.classList.add("img-preview"),u.onerror=function(){let l=n+"assets/images/image.svg";u.src!==l&&(u.src=l)},d.appendChild(u);let f=document.createElement("div");f.classList.add("asset-details"),d.appendChild(f);let o=document.createElement("div");o.classList.add("light"),o.textContent="Type: "+e.type,f.appendChild(o);let s=O()?new Date(e.lastModified).toLocaleDateString():new Date(e.lastModified).toLocaleString(),p=document.createElement("div");p.classList.add("light"),p.textContent="Date: "+String(s),f.appendChild(p);let a=document.createElement("div");return a.classList.add("light","overflow-text"),a.textContent="URL: "+e.url,f.appendChild(a),d},ke=(e,n,d,m)=>{let u=document.createElement("li");n.appendChild(u);let f=document.createElement("a");f.href="#",f.dataset.id=e.id,f.classList.add("asset-link","hint--top"),f.dataset.hint="Click to copy URL",f.appendChild(He(e,m)),f.onclick=s=>{s.preventDefault(),de(e.url,d)},u.appendChild(f);let o=document.createElement("button");return o.classList.add("delete-button"),u.appendChild(o),{link:f,deleteButton:o}},qe=async(e,n,d)=>{let m="date",u="desc",f,o=[],s=document.querySelector("#assets-list-container #assets-sort-by-last-modified"),p=document.querySelector("#assets-list-container #assets-sort-by-title"),a=document.querySelector("#assets-list-container #assets-sorted-asc"),l=document.querySelector("#assets-list-container #assets-sorted-desc"),x=document.querySelector("#assets-list-container #assets-type-filter"),b=document.querySelector("#assets-list-container #search-assets"),S=document.querySelector("#assets-list-container #assets-reset-filters");Array.from(new Set((await e()).map(c=>c.type))).sort((c,t)=>c.toLowerCase()<t.toLowerCase()?-1:c.toLowerCase()>t.toLowerCase()?1:0).forEach(c=>{let t=document.createElement("option");t.text=c,t.value=c,x.appendChild(t)});let E=async()=>(await e()).filter(c=>f?c.type===f:!0).filter(c=>b.value.trim()!==""?o.includes(c.id):!0).sort((c,t)=>m==="date"&&u==="asc"?c.lastModified-t.lastModified:m==="date"&&u==="desc"?t.lastModified-c.lastModified:m==="filename"&&u==="asc"&&c.filename<t.filename?-1:m==="filename"&&u==="asc"&&c.filename>t.filename||m==="filename"&&u==="desc"&&c.filename<t.filename?1:m==="filename"&&u==="desc"&&c.filename>t.filename?-1:0),h=async()=>{n(await E())},L=()=>{u="asc",a.style.display="unset",l.style.display="none"},v=()=>{u="desc",a.style.display="none",l.style.display="unset"},g=async(c=x.value)=>{f=c,await h()};d.addEventListener(s,"click",async c=>{c.preventDefault(),m!=="date"||u==="asc"?v():L(),m="date",s.classList.add("active"),p.classList.remove("active"),await h()},!1),d.addEventListener(p,"click",async c=>{c.preventDefault(),m!=="filename"?L():u==="asc"?v():L(),m="filename",s.classList.remove("active"),p.classList.add("active"),await h()},!1),d.addEventListener(a,"click",async c=>{c.preventDefault(),v(),await h()},!1),d.addEventListener(l,"click",async c=>{c.preventDefault(),L(),await h()},!1),d.addEventListener(x,"change",async()=>{await g()},!1),R(G,"FlexSearch").then(async c=>{let t=new c.Document({index:["filename","type"],tokenize:"full",worker:!0});await Promise.all((await e()).map(r=>t.add(r))),d.addEventListener(b,"keyup",async()=>{o=(await t.searchAsync(b.value)).map(y=>y.result).flat(),await h()},!1)}),d.addEventListener(S,"click",async c=>{c.preventDefault(),m="date",u="desc",f="",o=[],s.classList.add("active"),p.classList.remove("active"),v(),x.value="",b.value="",await h()},!1)},$t=async({assetsStorage:e,eventsManager:n,showScreen:d,notifications:m,modal:u,baseUrl:f})=>{let o=document.createElement("div");o.innerHTML=te;let s=o.firstChild,p=s.querySelector(".no-data"),a=s.querySelector("#assets-no-match.no-data"),l=s.querySelector("#assets-container"),x=document.createElement("ul");x.classList.add("open-list");let b=await e.getAllData(),S=b,E=ne(s),h=se(s);n.addEventListener(E,"click",()=>{d("add-asset")},!1),n.addEventListener(h,"click",async()=>{m.confirm(`Delete ${S.length} assets?`,async()=>{for(let g of S)await e.deleteItem(g.id);S=[],b=await e.getAllData(),await L(S)})},!1),l.appendChild(x);let L=async g=>{S=g,x.innerHTML="",g.forEach(c=>{let{deleteButton:t}=ke(c,x,m,f);n.addEventListener(t,"click",()=>{m.confirm(`Delete asset: ${c.filename}?`,async()=>{await e.deleteItem(c.id),S=S.filter(y=>y.id!==c.id),t.parentElement.classList.add("hidden"),setTimeout(()=>{L(S)},500)})},!1)}),g.length===0?(x.classList.add("hidden"),h.classList.add("hidden"),(await e.getList()).length===0?(p.classList.remove("hidden"),a.classList.add("hidden")):(p.classList.add("hidden"),a.classList.remove("hidden"))):(x.classList.remove("hidden"),h.classList.remove("hidden"),p.classList.add("hidden"),a.classList.add("hidden"))};await L(b);let v=()=>e.getAllData();u.show(s,{isAsync:!0}),qe(v,L,n)},Wt=({assetsStorage:e,eventsManager:n,showScreen:d,notifications:m,deployAsset:u,getUser:f,baseUrl:o,activeTab:s})=>{let p,a=document.createElement("div");a.innerHTML=oe;let l=a.firstChild,x=l.querySelectorAll("#add-asset-tabs li"),b=y=>{x.forEach(M=>M.classList.remove("active")),y.classList.add("active"),document.querySelectorAll("#add-asset-screens > div").forEach(M=>{M.classList.remove("active")});let i=l.querySelector("#"+y.dataset.target);i?.classList.add("active"),i?.querySelector("input")?.focus()};x.forEach(y=>{n.addEventListener(y,"click",()=>b(y))}),setTimeout(()=>{s&&b(x[s])});let S=re(l),E=ce(l),h=ae(l),L=le(l),v=ie(l),g=pe(l);n.addEventListener(S,"click",()=>{d("assets")},!1);let c=(y,i=!1)=>new Promise((M,T)=>{if(y.files?.length===0)return;let w=y.files[0],C=2*1024*1024;if(w.size>C){T("Error: Exceeded size 2MB");return}let k=new FileReader;n.addEventListener(k,"load",async A=>{let q="";if(i){if(!p){T("Error: Unauthenticated user");return}v.innerText="Uploading...",v.classList.add("disabled");let j=await u(p,{path:w.name,content:A.target?.result.split("base64,")[1]});v.innerText="Upload file",v.classList.remove("disabled"),j?q=j.url:T("Error: Failed to upload file")}q=q||A.target?.result,M({id:B(),filename:w.name,type:Ue(w.type,w.name),url:q,lastModified:Date.now()})}),n.addEventListener(k,"error",()=>{T("Error: Failed to read file")}),k.readAsDataURL(w)}),t=async(y,i,M=!1)=>{await e.updateItem(y.id,y);let T=document.createElement("p"),w=document.createElement("span");w.textContent="Added file: ",w.classList.add("bold"),T.appendChild(w);let C=document.createElement("span");C.textContent+=y.filename,T.appendChild(C),T.classList.add("overflow-text"),i.appendChild(T);let k=document.createElement("p"),A=document.createElement("span");A.textContent="URL: ",A.classList.add("bold"),k.appendChild(A);let q=document.createElement("span");if(q.textContent+=y.url,k.appendChild(q),k.classList.add("overflow-text"),i.appendChild(k),M){let H=document.createElement("p");H.textContent="The asset should be available on this URL soon.",H.classList.add("description","center"),i.appendChild(H)}else{let H=document.createElement("img");H.src=ue(y,o),H.onerror=function(){let P=o+"assets/images/image.svg";H.src!==P&&(H.src=P)},H.classList.add("img-preview-larger"),i.appendChild(H)}let j=document.createElement("p");j.textContent="Click to copy URL",j.classList.add("description","center"),i.appendChild(j);let D=document.createElement("hr");D.style.margin="1em",i.appendChild(D),i.title="Click to copy URL",m.success("File added to assets!"),i.onclick=()=>de(y.url,m)},r=async(y,i,M=!1)=>{await c(y,M).then(T=>t(T,i,M)).catch(T=>{m.error(T)})};return n.addEventListener(E,"change",()=>{r(E,h)},!1),n.addEventListener(v,"click",async y=>{p=await f(async()=>{await d("add-asset",1)}),p||(y.preventDefault(),m.error("Authentication error!"))},!1),n.addEventListener(L,"change",()=>{r(L,g,!0)},!1),l},Ue=(e,n)=>{let d={"audio/aac":"audio","video/x-msvideo":"video","image/bmp":"image","application/x-bzip":"archive","application/x-bzip2":"archive","text/css":"stylesheet","text/csv":"csv","application/gzip":"archive","image/gif":"image","text/html":"html","image/vnd.microsoft.icon":"icon","image/jpeg":"image","text/javascript":"script","application/javascript":"script","application/json":"json","application/ld+json":"json","audio/midi":"audio","audio/x-midi":"audio","audio/mpeg":"audio","video/mp4":"video","video/mpeg":"video","audio/ogg":"audio","video/ogg":"video","application/ogg":"audio","audio/opus":"audio","font/otf":"font","image/png":"image","application/vnd.rar":"archive","image/svg+xml":"image","application/x-tar":"archive","image/tiff":"image","video/mp2t":"video","font/ttf":"font","text/plain":"text","audio/wav":"audio","audio/webm":"audio","video/webm":"video","image/webp":"image","font/woff":"font","font/woff2":"font","application/xhtml+xml":"html","application/xml":"xml","application/zip":"archive","video/3gpp":"video","video/3gpp2":"audio","application/x-7z-compressed":"archive"},m={aac:"audio",bmp:"image",bzip:"archive",bzip2:"archive",css:"stylesheet",csv:"csv",gzip:"archive",gif:"image",html:"html",ico:"icon",jpeg:"image",jpg:"image",js:"script",json:"json",midi:"audio",mpeg:"audio",mp4:"video",ogg:"audio",otf:"font",png:"image",rar:"archive",svg:"image",tar:"archive",tiff:"image",mp2t:"video",ttf:"font",txt:"text",wav:"audio",webm:"audio",webp:"image",woff:"font",woff2:"font",xml:"xml",zip:"archive","3gpp":"video","3gpp2":"audio","7z":"archive"},u=n.split(".")[n.split(".").length-1];return d[e]||m[u]||"other"},ue=(e,n)=>{if(e.type==="image"||e.type==="icon")return e.url;let d=n+"assets/images/";return e.type==="other"?d+"file.svg":d+e.type+".svg"};export{Wt as createAddAssetContainer,$t as createAssetsList};
