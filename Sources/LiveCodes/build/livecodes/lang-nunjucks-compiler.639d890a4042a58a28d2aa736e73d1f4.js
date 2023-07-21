"use strict";(()=>{var p=(t,e=!0)=>t.replace(/\\/g,e?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var d=(t,e)=>({...e.customSettings[t]});var u=["jspm","skypack"],g=["unpkg","jsdelivr","fastly.jsdelivr"],f=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],n={getModuleUrl:(t,{isModule:e=!0,defaultCDN:r="jspm"}={})=>{t=t.replace(/#nobundle/g,"");let s=m(t,e,r);return s||(e?"https://jspm.dev/"+t:"https://cdn.jsdelivr.net/npm/"+t)},getUrl:(t,e)=>t.startsWith("http")?t:m(t,!1,e||U())||t,cdnLists:{npm:g,module:u,gh:f},checkCDNs:async(t,e)=>{let r=[e,...n.cdnLists.npm].filter(Boolean);for(let s of r)try{if((await fetch(n.getUrl(t,s),{method:"HEAD"})).ok)return s}catch{}return n.cdnLists.npm[0]}},U=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||n.cdnLists.npm[0]}catch{return n.cdnLists.npm[0]}},m=(t,e,r)=>{let s=e&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",f[0]):t.includes(":")||(t=(r||(e?u[0]:g[0]))+":"+t);for(let i of w){let[a,j]=i;if(a.test(t))return t.replace(a,j)+s}return null},w=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://jspm.dev/$2"],[/^(node:)(.+)/i,"https://jspm.dev/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:c,getModuleUrl:B}=n,x=c("@live-codes/browser-compilers@0.7.6/dist/");var v="0.6.64",D=c(`malinajs@${v}/malina.js`);var l=c("nunjucks@3.2.4/browser/");var o=c("prettier@3.0.0/"),h=c("@prettier/plugin-php@0.19.6/standalone.js");var N=o+"standalone.js",b={babel:o+"plugins/babel.js",estree:o+"plugins/estree.js",glimmer:o+"plugins/glimmer.js",html:o+"plugins/html.js",markdown:o+"plugins/markdown.js",postcss:o+"plugins/postcss.js",php:h,pug:x+"prettier/parser-pug.js"};var k=l+"nunjucks.min.js",y=l+"nunjucks-slim.min.js",I={name:"nunjucks",title:"Nunjucks",parser:{name:"html",pluginUrls:[b.html]},compiler:{url:k,factory:(t,e)=>(self.importScripts(e+"waiting"),self.createNunjucksCompiler())},extensions:["njk","nunjucks"],editor:"markup",editorLanguage:"html"};self.createNunjucksCompiler=()=>async(t,{config:e})=>{let r=d("nunjucks",e);self.nunjucks.configure(r);let s=e.customSettings.template?.data||{};if(e.customSettings.template?.prerender!==!1)return self.nunjucks.compile(t).render(s);let i=self.nunjucks.precompileString(t,{name:"template"});return`<!-- ... compiling ... -->

<script src="${y}"><\/script>
<script>
window.addEventListener("load", () => {
${i}
const content = nunjucks.render('template', {
  ...${p(JSON.stringify(s||{}))},
  ...window.livecodes?.templateData,
});
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'nunjucks', content}}, '*');
});
<\/script>
`};})();
