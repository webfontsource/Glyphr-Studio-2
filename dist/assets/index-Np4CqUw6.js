var fx=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var X2=fx(ie=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function C({tag:t="span",className:e,id:r,content:n,title:a,elementRoot:o,tabIndex:s=!1,attributes:x={},style:E=!1,innerHTML:T=!1,onClick:p=!1,doc:R=document}={}){if(!R||!R.createElement)return console.warn("no document or createElement"),console.warn(R),"";const N=R.createElement(t);if(e&&N.setAttribute("class",e),r?N.setAttribute("id",r):window.getUniqueControlID&&N.setAttribute("id",document.getUniqueControlID()),n&&(N.innerHTML=n),a&&N.setAttribute("title",a),o&&(N.elementRoot=o),s===!0?N.setAttribute("tabIndex","0"):s!==!1&&N.setAttribute("tabIndex",s),Object.keys(x).forEach(g=>N.setAttribute(g,x[g])),E&&N.setAttribute("style",E),T){const g=document.createElement("template");g.innerHTML=T,N.appendChild(g.content)}return p&&N.addEventListener("click",p),N}function ne(t,e=[]){Array.isArray(e)?e.forEach(r=>{Array.isArray(r)?ne(t,r):t.appendChild(r)}):t.appendChild(e)}function se(t){return C({innerHTML:t}).firstElementChild}function Xn(t,e){t.parentNode.insertBefore(e,t.nextSibling)}const Ox="*{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:var(--global-transition)}:host{margin-right:8px;display:inline-block;width:max-content;min-width:40px;--fancy-gradient: linear-gradient( 135deg, var(--blue-l55), var(--purple-l45), var(--orange-l50), var(--purple-l45), var(--blue-l55), var(--purple-l45) );--fancy-animation: gradFade 120s linear infinite;--fancy-background-size: 500% 500%}@keyframes gradFade{0%{background-position:0% 0%}to{background-position:100% 100%}}:host(:active) .wrapper{top:1px;left:1px;box-shadow:none}:host([disabled]:active) .wrapper{top:0;left:0}.wrapper{display:inline-block;position:relative;top:0;left:0;margin:0;padding:2px;height:100%;width:100%;border-style:solid;border-width:0px;border-radius:5px;animation:var(--fancy-animation);box-shadow:var(--l2-shadow);background:var(--fancy-gradient);background-size:var(--fancy-background-size)}.wrapper:hover,.wrapper *:hover,.wrapper:focus,.wrapper *:focus{cursor:pointer}.wrapper:focus{outline:var(--global-focus-style)}.buttonContent{display:flex;align-items:center;padding:0;border-radius:3px;background-color:transparent;width:100%;height:100%}.buttonText{display:inline-block;width:max-content;height:max-content;margin:5px 10px;color:#fff;animation:var(--fancy-animation);background-color:transparent}.wrapper[secondary] .buttonContent{background-color:#fffffff2}.wrapper[secondary] .buttonText{background:var(--fancy-gradient);background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper:hover .buttonContent,.wrapper:active .buttonContent{background-color:#ffffff1a}.wrapper[secondary]:hover .buttonContent,.wrapper[secondary]:active .buttonContent{background-color:#fff}.wrapper[minimal]{padding:1px;box-shadow:var(--l1-shadow);background:linear-gradient(135deg,var(--blue-l85),var(--blue-l90));animation:var(--fancy-animation)}.wrapper[minimal] .buttonContent{background-color:#fffffff2}.wrapper[minimal] .buttonText{background:linear-gradient(135deg,var(--blue-l70),var(--blue-l90));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[minimal]:hover,.wrapper[minimal]:active{box-shadow:var(--l2-shadow);background:linear-gradient(135deg,var(--blue-l65),var(--blue-l70))}.wrapper[minimal]:hover .buttonContent,.wrapper[minimal]:active .buttonContent{background-color:#fff}.wrapper[minimal]:hover .buttonText,.wrapper[minimal]:active .buttonText{background:linear-gradient(135deg,var(--blue-l40),var(--blue-l70));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[danger]{background:linear-gradient(135deg,var(--orange-l50),var(--red));animation:var(--fancy-animation)}.wrapper[danger] .buttonText{background:#fff;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[secondary][danger] .buttonText{background:var(--red);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[disabled],.wrapper[disabled]:hover,.wrapper[disabled]:focus,.wrapper[disabled]:active{background-image:none;background-color:var(--disabled-border);cursor:default;box-shadow:none}.wrapper[disabled] .buttonContent,.wrapper[disabled]:hover .buttonContent,.wrapper[disabled]:focus .buttonContent,.wrapper[disabled]:active .buttonContent{background-color:var(--disabled-background);cursor:default}.wrapper[disabled] .buttonText,.wrapper[disabled]:hover .buttonText,.wrapper[disabled]:focus .buttonText,.wrapper[disabled]:active .buttonText{background-color:var(--disabled-background);background-clip:none;-webkit-text-fill-color:var(--disabled-border);color:var(--disabled-border);cursor:default}";class Bx extends HTMLElement{constructor(e={}){super(),Object.keys(e).forEach(a=>this.setAttribute(a,e[a])),this.wrapper=C({className:"wrapper"}),this.buttonContent=C({className:"buttonContent"}),this.buttonText=C({tag:"slot",className:"buttonText"}),this.hasAttribute("secondary")&&this.wrapper.setAttribute("secondary",""),this.hasAttribute("danger")&&this.wrapper.setAttribute("danger",""),this.hasAttribute("minimal")&&this.wrapper.setAttribute("minimal",""),this.hasAttribute("disabled")?(this.wrapper.setAttribute("disabled",""),this.disabled=!0):(this.wrapper.setAttribute("tabIndex","0"),this.disabled=!1);let r=this.attachShadow({mode:"open"}),n=C({tag:"style",innerHTML:Ox});r.appendChild(n),this.buttonContent.appendChild(this.buttonText),this.wrapper.appendChild(this.buttonContent),r.appendChild(this.wrapper),this.disabled||(this.addEventListener("click",this.toggle),this.addEventListener("keydown",this.keyPress))}static get observedAttributes(){return["disabled","secondary","danger","minimal"]}attributeChangedCallback(e,r,n){e==="disabled"&&(n===""?this.wrapper.setAttribute("disabled",""):r===""&&this.wrapper.removeAttribute("disabled")),e==="secondary"&&(n===""?this.wrapper.setAttribute("secondary",""):r===""&&this.wrapper.removeAttribute("secondary")),e==="danger"&&(n===""?this.wrapper.setAttribute("danger",""):r===""&&this.wrapper.removeAttribute("danger")),e==="minimal"&&(n===""?this.wrapper.setAttribute("minimal",""):r===""&&this.wrapper.removeAttribute("minimal"))}keyPress(e){if(e.keyCode===13){let r=new MouseEvent("click",{shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(r),this.flashAsPressed(this)}}flashAsPressed(e){e.wrapper.style.top="1px",e.wrapper.style.left="1px",e.wrapper.style.boxShadow="none",setTimeout(function(){e.wrapper.style.top="0px",e.wrapper.style.left="0px",e.wrapper.style.boxShadow="2px 2px 2px rgba(0, 0, 0, 0.3)"},100)}}function Mr(t={}){const e=Object.keys(t);return e.length?e[0]:!1}function f1(t,e){let r=1;e=e||"id";let n=""+e+r;for(;t[n];)r+=1,n=""+e+r;return n}function vt(t){return Object.keys(t).length}function ar(t){try{return structuredClone(t)}catch{const r=Array.isArray(t)?[]:{};for(const n of Object.keys(t))t[n]&&typeof t[n]=="object"&&n!=="parent"&&n!=="cache"?r[n]=ar(t[n]):r[n]=t[n];return r}}function Ra(t,e){if(t=ar(t),e)return JSON.stringify(t);{let r=JSON.stringify(t,void 0,2);return r=r||"",r=r.replace(/\n/g,`\r
`),r=r.replaceAll(`\r
                  "`,'"'),r=r.replaceAll(`\r
                }`,"}"),r=r.replaceAll(`\r
                "`,'"'),r=r.replaceAll(`\r
              }`,"}"),r=r.replaceAll('},"','}, "'),r}}function O1(t,e){if(typeof t!="object"&&typeof e!="object")return t===e;for(const r of Object.keys(t))if(e[r]){if(typeof t[r]=="object"&&typeof e[r]=="object"){if(!O1(t[r],e[r]))return!1}else if(t[r]!==e[r])return!1}else return!1;return!0}function ut(t,e,r=1){return isNaN(t.x)||isNaN(t.y)||isNaN(e.x)||isNaN(e.y)?!1:!!(t.x===e.x&&t.y===e.y||P0(t.x,e.x,r)&&P0(t.y,e.y,r))}function P0(t,e,r=1){return isNaN(t)||isNaN(e)?!1:t===e||Math.abs(t-e)<=r}function Ot(t,e){const r=e?1:-1;return ae(t)+.5*r}function ae(t,e=0){return t&&+(Math.round(`${t}e${e}`)+`e-${e}`)||0}function tr(t){t=parseFloat(t);const e=""+t;return(e.indexOf("0000")>-1||e.indexOf("9999")>-1)&&(t=ae(t,3)),t<1e-5&&t>0&&(t=0),t}function B1(t){return t=parseFloat(t),!(isNaN(t)||t!==Math.round(t))}function Lo(t=""){return t=String(t),t.replace(/[<>'"\\]/g,"")}function ho(t=""){if(t=String(t),t==='""'||t==="''")return"";try{return t=t.replace(/^\s+|\s+$/g,""),t.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}function dr(t="",e=""){return t=String(t),t=t.split(e),t=t.join(""),t||""}function H1(t=""){let e="";for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);n<=90&&n>=65&&(e+="-"),e+=t.charAt(r).toLowerCase()}return e}function Ii(t=""){let e="";for(let r=0;r<t.length;r++)t.charAt(r)==="-"?(r++,e+=t.charAt(r).toUpperCase()):e+=t.charAt(r);return e}function F1(t=""){if(typeof t=="string"){if(t==='""'||t==="''")return"";t.indexOf("&")>-1&&(t=t.replace(/&/g,"&amp;")),t.indexOf('"')>-1&&(t=t.replace(/"/g,"&quot;")),t.indexOf("'")>-1&&(t=t.replace(/'/g,"&apos;")),t.indexOf("<")>-1&&(t=t.replace(/</g,"&lt;")),t.indexOf(">")>-1&&(t=t.replace(/>/g,"&gt;"))}return t}function je(t){return t===0||t===!1?!0:t==null||typeof t=="object"&&Object.keys(t).length===0?!1:!!t}function Ki(t){if(!t)return!0;for(const e of Object.keys(t))if(!je(t[e])||t[e]===Number.MAX_SAFE_INTEGER||t[e]===Number.MIN_SAFE_INTEGER)return!0;return!1}function Fn(t,e,r){return r.indexOf(t)===e}function ta(t=10){return new Promise(e=>{setTimeout(()=>{e("fast")},t)})}const va=["top-left","middle-left","baseline-left","bottom-left","top-center","middle-center","baseline-center","bottom-center","top-right","middle-right","baseline-right","bottom-right"];function co(t=0,e=0,r,n){va.indexOf(n)<0&&(n="baseline-left");let a={deltaX:0,deltaY:0};if(e!==0&&(n.includes("top")&&(a.deltaY=e*-1),n.includes("middle")&&(a.deltaY=e/-2),n.includes("baseline"))){let o=(e+r.height)/r.height,s=r.yMax*o,x=(r.yMax-s)*-1;a.deltaY=x-e}return t!==0&&(n.includes("right")&&(a.deltaX=t*-1),n.includes("center")&&(a.deltaX=t/-2)),a}function ln(t,e={x:0,y:0}){let r=Math.atan2(t.y-e.y,t.x-e.x);return isNaN(r)&&(console.warn(`calculateAngle returned NaN
`+Ra(t)+`
${r}`),this.wrapper=C({className:"wrapper"}),this.wrapper.style.backgroundSize=`auto ${o}px`,this.hasAttribute("selected")&&this.wrapper.setAttribute("selected",""),this.showingOtherProject&&this.removeAttribute("selected"),this.glyph&&this.glyph.advanceWidth?(this.thumbnail=C({tag:"span",className:"thumbnail"}),this.thumbnail.width=o,this.thumbnail.height=o):(this.thumbnail=C({className:"thumbnail"}),Ux(dr(r,"glyph-"))?this.thumbnail.innerHTML=`
					<div class="whitespace-char-thumbnail">white space</div>
				`:n?this.thumbnail.innerHTML=n:this.thumbnail.innerHTML=`
						<div class="whitespace-char-thumbnail">${r}</div>
					`),this.name=C({className:"name"}),n?this.name.innerHTML=r==="glyph-0x20"?"Space":n:this.name.innerHTML=a.replaceAll("Component ","comp-");const s=this.attachShadow({mode:"open"}),x=C({tag:"style",innerHTML:Wx});s.appendChild(x),this.wrapper.appendChild(this.thumbnail),this.wrapper.appendChild(this.name),s.appendChild(this.wrapper),this.redraw()}attributeChangedCallback(){const e=this.shadowRoot?this.shadowRoot.querySelector(".wrapper"):!1;e&&!this.showingOtherProject&&(this.hasAttribute("selected")?e.setAttribute("selected",""):e.removeAttribute("selected"))}redraw(){var e,r;(r=(e=this.glyph)==null?void 0:e.shapes)!=null&&r.length&&(this.thumbnail.innerHTML=this.project.makeItemThumbnail(this.glyph))}}const st={gray:{l97:"hsl(200, 81%, 97%)",l95:"hsl(200, 81%, 94%)",l90:"hsl(200, 60%, 88%)",l85:"hsl(200, 52%, 82%)",l80:"hsl(200, 47%, 76%)",l75:"hsl(200, 42%, 71%)",l70:"hsl(200, 33%, 65%)",l65:"hsl(200, 27%, 60%)",l60:"hsl(200, 22%, 55%)",l55:"hsl(200, 18%, 50%)",l50:"hsl(200, 17%, 45%)",l45:"hsl(200, 17%, 40%)",l40:"hsl(200, 18%, 36%)",l35:"hsl(200, 18%, 31%)",l30:"hsl(200, 17%, 27%)",l25:"hsl(200, 18%, 23%)",l20:"hsl(200, 18%, 19%)",l15:"hsl(200, 17%, 15%)",l10:"hsl(200, 19%, 11%)",l05:"hsl(200, 18%, 7%)"},blue:{l95:"hsl(200, 100%, 94%)",l90:"hsl(200, 94%, 87%)",l85:"hsl(200, 100%, 80%)",l80:"hsl(200, 100%, 73%)",l75:"hsl(200, 100%, 64%)",l70:"hsl(200, 100%, 58%)",l65:"hsl(200, 100%, 49%)",l60:"hsl(200, 100%, 45%)",l55:"hsl(200, 100%, 41%)",l50:"hsl(200, 100%, 37%)",l45:"hsl(200, 100%, 33%)",l40:"hsl(200, 100%, 30%)",l35:"hsl(200, 100%, 25%)",l30:"hsl(200, 100%, 22%)",l25:"hsl(200, 100%, 19%)",l20:"hsl(200, 100%, 15%)",l15:"hsl(200, 100%, 12%)",l10:"hsl(200, 100%, 9%)",l05:"hsl(200, 100%, 6%)"},orange:{l95:"hsl(20, 100%, 95%)",l90:"hsl(20, 100%, 89%)",l85:"hsl(20, 100%, 84%)",l80:"hsl(20, 100%, 78%)",l75:"hsl(20, 100%, 72%)",l70:"hsl(20, 100%, 66%)",l65:"hsl(20, 100%, 56%)",l60:"hsl(20, 100%, 50%)",l55:"hsl(20, 100%, 46%)",l50:"hsl(20, 100%, 42%)",l45:"hsl(20, 100%, 37%)",l40:"hsl(20, 100%, 33%)",l35:"hsl(20, 100%, 29%)",l30:"hsl(20, 100%, 25%)",l25:"hsl(20, 100%, 22%)",l20:"hsl(20, 100%, 17%)",l15:"hsl(20, 100%, 14%)",l10:"hsl(20, 100%, 10%)",l05:"hsl(20, 100%, 6%)"},green:{l95:"hsl(125, 100%, 82%)",l90:"hsl(125, 97%, 74%)",l85:"hsl(125, 83%, 66%)",l80:"hsl(125, 74%, 58%)",l75:"hsl(125, 67%, 50%)",l70:"hsl(125, 82%, 43%)",l65:"hsl(125, 100%, 36%)",l60:"hsl(125, 100%, 33%)",l55:"hsl(125, 100%, 30%)",l50:"hsl(125, 100%, 27%)",l45:"hsl(125, 100%, 24%)",l40:"hsl(125, 95%, 22%)",l35:"hsl(125, 100%, 19%)",l30:"hsl(125, 100%, 16%)",l25:"hsl(125, 100%, 14%)",l20:"hsl(125, 100%, 11%)",l15:"hsl(125, 100%, 9%)",l10:"hsl(125, 100%, 6%)",l05:"hsl(125, 100%, 4%)"},purple:{l95:"hsl(285, 100%, 96%)",l90:"hsl(285, 100%, 92%)",l85:"hsl(285, 100%, 89%)",l80:"hsl(285, 100%, 85%)",l75:"hsl(285, 100%, 81%)",l70:"hsl(285, 100%, 77%)",l65:"hsl(285, 100%, 72%)",l60:"hsl(285, 100%, 66%)",l55:"hsl(285, 100%, 61%)",l50:"hsl(285, 100%, 50%)",l45:"hsl(285, 100%, 45%)",l40:"hsl(285, 100%, 40%)",l35:"hsl(285, 100%, 36%)",l30:"hsl(285, 100%, 31%)",l25:"hsl(285, 100%, 27%)",l20:"hsl(285, 100%, 22%)",l15:"hsl(285, 100%, 17%)",l10:"hsl(285, 100%, 13%)",l05:"hsl(285, 100%, 10%)"}},nA=st.blue.l65,Zr={accent:nA,offWhite:"hsl(200, 81%, 97%)",darkRed:"hsl(0, 100%, 23%)",red:"hsl(0, 100%, 48%)",lightRed:"hsl(0, 100%, 90%)",enabled:{resting:{text:"hsl(0, 0%, 5%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 75%)",fill:"hsl(0, 0%, 39%)",background:"hsl(0, 0%, 98%)"},restingLight:{text:"hsl(0, 0%, 20%)",lightText:"hsl(0, 0%, 30%)",border:"hsla(0, 0%, 75%, 0.2)",fill:"hsl(0, 0%, 39%, 0.4)",background:"hsl(0, 0%, 98%)"},focus:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:"hsl(200, 25%, 15%)",background:"white"},active:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:nA,background:"white"}},disabled:{text:"hsl(0, 0%, 40%)",border:"hsl(0, 0%, 82%)",fill:"hsl(0, 0%, 82%)",background:"hsl(0, 0%, 94%)"}};function Ua(t){const e={r:0,g:0,b:0,a:1};return typeof t!="string"||(t.charAt(0)==="#"?(t=t.substring(1,7),e.r=parseInt(t.substring(0,2),16),e.g=parseInt(t.substring(2,4),16),e.b=parseInt(t.substring(4,6),16)):t.substring(0,4)==="rgb("&&(t=t.split("(")[1].split(")")[0].split(","),e.r=parseInt(t[0],10),e.g=parseInt(t[1],10),e.b=parseInt(t[2],10),e.a=parseInt(t[3],10)||1)),e}function v0(t){let e=Ua(t),r=e.r.toString(16).toUpperCase();r.length===1&&(r=`0${r}`);let n=e.g.toString(16).toUpperCase();n.length===1&&(n=`0${n}`);let a=e.b.toString(16).toUpperCase();return a.length===1&&(a=`0${a}`),`#${r}${n}${a}`}function kx(t,e,r){e=Math.max(0,Math.min(e,1));const n=Ua(t);return n.r=Math.max(0,Math.min(n.r,255)),n.g=Math.max(0,Math.min(n.g,255)),n.b=Math.max(0,Math.min(n.b,255)),r?(n.r=ae((255-n.r)*e+n.r),n.g=ae((255-n.g)*e+n.g),n.b=ae((255-n.b)*e+n.b)):(n.r=ae(n.r-n.r*e),n.g=ae(n.g-n.g*e),n.b=ae(n.b-n.b*e)),`rgb(${n.r},${n.g},${n.b})`}function Cr(t,e){const r=Ua(t),n=ae((255-r.r)*(1-e)),a=ae((255-r.g)*(1-e)),o=ae((255-r.b)*(1-e)),s=r.r+n,x=r.g+a,E=r.b+o;return`rgb(${s},${x},${E})`}function In(t){const e=parseInt(t);return!e||isNaN(e)?1:e>100?0:e<0?1:(100-t)/100}function K1(){const t=Math.floor(Math.random()*5)*51,e=[],r=Math.floor(Math.random()*3);switch(e[r]=t,r){case 0:e[1]=0,e[2]=255;break;case 1:e[0]=0,e[2]=255;break;case 2:e[0]=255,e[1]=0;break}return"rgb("+e[0]+","+e[1]+","+e[2]+")"}const Kx=Object.freeze(Object.defineProperty({__proto__:null,accentColors:st,getColorFromRGBA:Cr,makeRandomSaturatedColor:K1,parseColorString:Ua,rgbToHex:v0,shiftColor:kx,transparencyToAlpha:In,uiColors:Zr},Symbol.toStringTag,{value:"Module"}));let Ke={};function dn(t){let e=20;t.name&&t.name.indexOf("page_")===0&&(e=24),t.name&&t.name.indexOf("panel_")===0&&(e=24);let r=t.color||"rgb(76,81,86)",n="";return Ke[t.name]&&(Ke[t.name].outline?n=Ke[t.name].outline:n=Ke[t.name]),`
		<svg version="1.1"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px" width="${e}px" height="${e}px" viewBox="0 0 ${e} ${e}"
		>
			<defs></defs>
			<rect fill="transparent" width="${e}" height="${e}"/>
			<g pointer-events="none" fill="${r}">
				${n}
			</g>
		</svg>
	`}Ke.panel_layers=`
	<polygon points="12 9 0 4.574 12 0 24 4.5 12 9"/>
	<polygon points="12 14 0 9.5 4 8 12 11 20 8 24 9.5 12 14"/>
	<polygon points="12 19 0 14.5 4 13 12 16 20 13 24 14.5 12 19"/>
	<polygon points="12 24 0 19.5 4 18 12 21 20 18 24 19.5 12 24"/>
`;Ke.panel_guides=`
	<polygon points="2 17 5 20 5 17 2 17"/>
	<polygon points="24 22 0 22 0 23 24 23 24 22 24 22"/>
	<polygon points="24 7 0 7 0 8 24 8 24 7 24 7"/>
	<polygon points="24 3 0 3 0 3.5 24 3.5 24 3 24 3"/>
	<polygon points="24 1 0 1 0 2 24 2 24 1 24 1"/>
	<polygon points="24 15 0 15 0 17 24 17 24 15 24 15"/>
	<polygon points="7 0 5 0 5 24 7 24 7 0 7 0"/>
	<polygon points="22.5 0 22 0 22 24 22.5 24 22.5 0 22.5 0"/>
`;Ke.panel_contextCharacters=`
	<path d="m8.942,16.997h-2.672v-.55c-.412.432-.882.647-1.407.647-.53,0-.973-.213-1.329-.64s-.534-.966-.534-1.621c0-.668.193-1.221.578-1.661s.875-.66,1.469-.66c.412,0,.82.141,1.224.424v-.737c0-.375-.047-.641-.139-.796s-.259-.233-.5-.233c-.322,0-.544.181-.666.542l-1.829-.383c.539-1.006,1.455-1.508,2.747-1.508.752,0,1.344.179,1.775.535s.646.879.646,1.569v3.57h.639v1.502Zm-2.672-1.801v-1.052c-.172-.216-.367-.324-.585-.324-.2,0-.358.083-.476.252-.118.168-.177.392-.177.669,0,.272.055.482.167.63s.264.221.459.221c.24,0,.444-.132.612-.397Z"/>
	<path d="m9.547,16.997v-1.502h.666v-6.995h-.666v-1.502h2.699v3.651h.027c.299-.496.727-.745,1.285-.745.594,0,1.068.292,1.424.876s.534,1.432.534,2.545c0,1.214-.171,2.146-.513,2.795s-.828.973-1.458.973c-.499,0-.931-.218-1.299-.657v.559h-2.699Zm2.699-3.987v1.416c0,.394.042.686.126.878.084.191.232.288.445.288.249,0,.409-.147.479-.441s.105-.843.105-1.648c0-.726-.04-1.23-.119-1.509-.079-.28-.239-.42-.479-.42-.213,0-.359.109-.439.326s-.119.587-.119,1.11Z"/>
	<path d="m19.429,14.229l1.571.598c-.258,1.581-1.079,2.371-2.461,2.371-.834,0-1.49-.334-1.968-1.001s-.717-1.587-.717-2.76c0-1.057.207-1.909.622-2.559s.958-.973,1.628-.973c.644,0,1.077.29,1.299.869h.027v-.757h1.462v2.823h-1.462c-.032-.505-.11-.878-.235-1.12-.125-.241-.312-.362-.561-.362-.263,0-.44.159-.53.476s-.136.85-.136,1.6c0,.819.044,1.401.133,1.746s.296.517.622.517c.227,0,.392-.118.496-.354s.174-.608.211-1.113Z"/>
	<path d="m18,4v-1h4v-1h-5v2h-1V0h-8v4h-1v-2H2v1h4v1H0v16h6v1H2v1h5v-2h1v4h8v-4h1v2h5v-1h-4v-1h6V4h-6ZM9,1h6v3h-6V1Zm6,22h-6v-3h6v3Zm7-5H2V6h20v12Z"/>
`;Ke.panel_history=`
	<path d="m19.075,18.133l-.021.022c-.181.185-.478.189-.663.008l-5.229-5.102c-.185-.181.491-.874.676-.693l5.229,5.102c.185.181.189.478.008.663Z"/>
	<path d="m16.1,9.358l.022.021c.185.181.189.478.008.663l-2.291,2.348c-.181.185-.874-.491-.693-.676l2.291-2.348c.181-.185.478-.189.663-.008Z"/>
	<circle cx="13.165" cy="12.387" r="1.033"/>
	<path d="m19.551,5.842c.149.145.282.3.418.452l1.747-1.747c-.146-.159-.283-.322-.439-.475-2.259-2.204-5.187-3.302-8.112-3.302-3.021,0-6.039,1.171-8.315,3.504-2.196,2.251-3.287,5.166-3.295,8.08h2.475c.008-2.294.865-4.587,2.589-6.354,1.736-1.779,4.06-2.758,6.546-2.758,2.4,0,4.667.923,6.386,2.6Z"/>
	<path d="m1.608,11.33H.2l2.609,4.174,2.609-4.174h-1.166c-.954-.008-1.986-.008-2.644,0Z"/>
	<path d="m21.916,6.021l-.736.736c1.133,1.605,1.769,3.503,1.794,5.509.032,2.62-.958,5.096-2.788,6.971-1.862,1.908-4.355,2.959-7.022,2.959-2.574,0-5.007-.99-6.85-2.788-1.066-1.041-1.855-2.286-2.353-3.645l-.677,1.084c.541,1.201,1.309,2.324,2.309,3.3,2.108,2.057,4.841,3.082,7.571,3.082,2.819,0,5.636-1.093,7.761-3.27,3.747-3.841,4.05-9.742.991-13.938Z"/>
`;Ke.panel_attributes=`
	<polygon points="12 10 0 10 0 11 12 11 12 10 12 10"/>
	<polygon points="12 12 0 12 0 13 12 13 12 12 12 12"/>
	<polygon points="12 14 0 14 0 15 12 15 12 14 12 14"/>
	<polygon points="24 2 12 2 12 3 24 3 24 2 24 2"/>
	<polygon points="24 4 12 4 12 5 24 5 24 4 24 4"/>
	<polygon points="24 6 12 6 12 7 24 7 24 6 24 6"/>
	<path d="m14,10v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1v-5c0-.552-.448-1-1-1h-8c-.552,0-1,.448-1,1Zm1,4l2-3,2,3h-4Zm6,0l-2-3h4l-2,3Z"/>
	<polygon points="12 18 0 18 0 19 12 19 12 18 12 18"/>
	<polygon points="12 20 0 20 0 21 12 21 12 20 12 20"/>
	<polygon points="12 22 0 22 0 23 12 23 12 22 12 22"/>
	<path d="m14,18v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1v-5c0-.552-.448-1-1-1h-8c-.552,0-1,.448-1,1Zm1,4l2-3,2,3h-4Zm6,0l-2-3h4l-2,3Z"/>
	<path d="m9,1H1c-.552,0-1,.448-1,1v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1V2c0-.552-.448-1-1-1Zm-4.5,5.5l-2.5-2.5,1-1,1.5,1.5,2.5-2.5,1,1-3.5,3.5Z"/>
`;Ke.panel_view=`
	<circle cx="12" cy="13" r="4"/>
	<path d="m24,13h-2v-1c0-3.237-4.368-7-10-7S2,8.763,2,12v1H0v-1C0,7.29,5.72,3,12,3s12,4.29,12,9v1Z"/>
`;Ke.command_save=`
	<path d="M0,0V17.22l2.78,2.78H20V0H0ZM5,1H15V10H5V1Zm2,18v-3h1v3h-1Zm2,0v-3h5v3h-5ZM19,3h-1v1h1v15h-4v-4H6v4H3.5l-2.5-2.5V1h3V11h12V1h3V3Z"/>
`;Ke.command_export=`
	<polygon points="10 19.06 10 5.06 15.25 10.31 16 9.56 9.5 3.06 3 9.56 3.75 10.31 9 5.06 9 19.06 10 19.06"/>
	<rect width="19" height="1"/>
`;Ke.command_newTab=`
	<polygon points="10.35 10.35 18.94 1.77 18.94 9 20 9 20 0 11 0 11 1.06 18.23 1.06 9.65 9.65 10.35 10.35"/>
	<polygon points="15 10 14.98 19 1 19 1 5 10 5 11 4 0 4 0 20 15.98 20 16 9 15 10"/>
`;Ke.command_info=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M9.28,14.06v-4.76h-1.13v-1.28h2.57v6.04h1.13v1.28h-3.7v-1.28h1.13Zm-.2-8.53c0-.23,.08-.43,.25-.6s.37-.26,.62-.26c.24,0,.44,.08,.61,.25s.26,.37,.26,.61-.09,.45-.26,.62c-.17,.17-.38,.25-.61,.25s-.45-.09-.62-.26-.25-.37-.25-.61Z"/>
`;Ke.command_help=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M10.06,12.65h-.82l-.19-3.53c.25,.06,.5,.1,.75,.1,.7,0,1.2-.18,1.5-.53s.46-.77,.46-1.25c0-.56-.17-1-.5-1.31-.33-.31-.75-.47-1.27-.47-.62,0-1.08,.18-1.39,.53s-.45,.8-.45,1.33c0,.11,0,.24,0,.39h-1.49c0-.14,0-.27,0-.37,0-1.09,.32-1.9,.97-2.41s1.42-.77,2.31-.77c1.08,0,1.91,.29,2.5,.87,.59,.58,.89,1.34,.89,2.28s-.28,1.64-.84,2.18-1.22,.81-1.98,.81c-.06,0-.14,0-.25,0l-.2,2.16Zm-1.41,2.99v-1.96h1.96v1.96h-1.96Z"/>
`;Ke.command_autoFit=`
	<polygon points="6 9 3 9 4.75 7.25 4 6.5 1 9.5 4.25 12.25 5 11.5 3 10 6 10 6 9"/>
	<polygon points="14 9 17 9 15.25 7.25 16 6.5 19 9.5 15.75 12.25 15 11.5 17 10 14 10 14 9"/>
	<rect y="4" width="1" height="11"/>
	<rect x="19" y="4" width="1" height="11"/>
	<rect x="12" y="9" width="1" height="1"/>
	<rect x="7" y="9" width="1" height="1"/>
	<rect x="9" y="9" width="2" height="1"/>
`;Ke.command_verticalBar='<rect x="9" y="0" width="2" height="18"/>';Ke.command_horizontalBar='<rect y="9" x="1" height="2" width="19"/>';Ke.command_crossProjectActions=`
  <path d="m18.916,7.084c-.962-.962-2.426-1.07-4.92-1.082-.013-2.48-.121-3.959-1.08-4.918-1.084-1.084-2.8-1.084-5.916-1.084S2.168,0,1.084,1.084,0,3.884,0,7s0,4.832,1.084,5.916c.959.959,2.437,1.068,4.918,1.081.012,2.493.12,3.958,1.082,4.919,1.084,1.084,2.8,1.084,5.916,1.084s4.832,0,5.916-1.084,1.084-2.8,1.084-5.916,0-4.832-1.084-5.916Zm-17.916-.084c0-2.849,0-4.418.791-5.209s2.36-.791,5.209-.791,4.418,0,5.209.791c.691.691.777,1.996.788,4.209-2.356,0-3.91.002-4.997.472v-.472h-2v2h.472c-.47,1.087-.472,2.641-.472,4.997-2.211-.011-3.518-.097-4.209-.788-.791-.791-.791-2.36-.791-5.209Zm17.209,11.209c-.791.791-2.36.791-5.209.791s-4.418,0-5.209-.791-.791-2.36-.791-5.209,0-4.418.791-5.209,2.36-.791,5.209-.791,4.418,0,5.209.791.791,2.36.791,5.209,0,4.418-.791,5.209Z"/>
  <rect x="9" y="9" width="2" height="2"/>
  <rect x="12" y="9" width="2" height="2"/>
  <rect x="9" y="12" width="2" height="2"/>
  <rect x="9" y="15" width="2" height="2"/>
  <rect x="12" y="12" width="2" height="2"/>
  <rect x="15" y="9" width="2" height="2"/>
  <rect x="3" y="3" width="2" height="2"/>
  <rect x="6" y="3" width="2" height="2"/>
  <rect x="3" y="6" width="2" height="2"/>
  <rect x="3" y="9" width="2" height="2"/>
  <rect x="9" y="3" width="2" height="2"/>
`;Ke.page_about=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m11,17v-6h-2v-2h4v8h2v2s-6,0-6,0v-2h2Zm-.95-11.258c0-.468.165-.877.495-1.223s.748-.52,1.255-.52c.477,0,.888.168,1.233.504s.517.749.517,1.238-.173.905-.517,1.244c-.345.342-.756.514-1.233.514-.487,0-.9-.174-1.24-.52s-.51-.758-.51-1.238Z"/>
`;Ke.page_help=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m12.398,16h-2v-4.5c2,0,4.202-.5,4.202-3,0-1.5-.6-2.5-2.202-2.5-2,0-2.398,1.3-2.398,2v1h-2v-1c0-1,.398-4,4.398-4,2.602,0,4.602,1.5,4.602,4.5s-2.602,4.5-4.102,4.5l-.5,3Z"/>
	<rect x="10" y="17" width="3" height="3" rx=".75" ry=".75"/>
`;Ke.page_exportFont=`
	<polygon points="30.1,9.9 40.1,0 50,9.9 42.5,9.9 42.5,18.8 37.6,18.8 37.6,9.9"/>
	<path d="M15.2,12.7l-9.9,9.9V50h29.8V12.7H15.2z M26.7,29.1h-1.9l0.7-2.9H20L18.8,31h4.7l-0.4,1.8h-4.7l-1.3,5.4h1.7l-0.4,1.8H13l0.4-1.8h1.4l2.9-12h-1.5l0.4-1.8h11.3L26.7,29.1z"/>
`;Ke.page_exportSVG=`
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m17.026,6H7v18h15v-12.75l-4.974-5.25Zm-5.835,11.758c-.272.247-.613.371-1.022.371-.359,0-.684-.115-.976-.344v.303h-.949v-1.575h.949c0,.369.051.608.154.718.103.11.238.165.406.165.15,0,.267-.043.351-.128.084-.084.126-.202.126-.353,0-.12-.048-.247-.143-.38-.095-.131-.332-.334-.711-.604-.511-.361-.836-.657-.978-.889-.141-.232-.212-.46-.212-.684,0-.339.124-.617.371-.834.247-.217.561-.326.94-.326.188,0,.353.022.494.065.141.045.309.137.503.279v-.303h.949v1.463h-.949c0-.308-.047-.515-.141-.62s-.228-.158-.402-.158c-.127,0-.227.033-.302.098-.075.065-.113.153-.113.262,0,.135.044.253.131.354.088.101.26.236.519.405.582.383.962.702,1.142.959.18.256.269.53.269.823,0,.375-.136.687-.408.934Zm5.908-3.793h-.437l-1.455,4.201h-1.213l-1.402-4.201h-.455v-.725h2.318v.725h-.464l.727,2.313.719-2.313h-.536v-.725h2.198v.725Zm3.308,3.02c-.062.274-.163.51-.304.706s-.313.341-.514.436-.43.142-.685.142c-.526,0-.941-.217-1.244-.65-.303-.435-.455-1.054-.455-1.857,0-.812.123-1.441.369-1.889.246-.448.591-.672,1.036-.672.299,0,.554.146.766.441h.014v-.366h.783v1.675h-.783c-.007-.31-.054-.542-.142-.695-.088-.154-.205-.23-.35-.23-.176,0-.288.101-.337.303-.049.201-.073.633-.073,1.295,0,.524.012.914.036,1.168.024.255.065.427.125.519.059.091.147.137.263.137.278,0,.42-.272.427-.817h-.328v-.734h1.49c0,.453-.031.817-.092,1.092Z"/>
`;Ke.page_importAndExport=`
	<polygon points="17 20 20 24 23 20 21 20 21 17 19 17 19 20 17 20"/>
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m13.684,6h-6.684v12h10v-8.5l-3.316-3.5Zm1.316,9h-5v-1h5v1Zm0-2h-5v-1h5v1Zm0-2h-7v-1h7v1Z"/>
`;Ke.page_settings=`
	<path d="m23.404,15.538c.366-1.11.572-2.291.596-3.518l-3.267-1.344c-.041-.326-.101-.645-.176-.959l2.601-2.372c-.448-1.126-1.057-2.169-1.806-3.098l-3.375,1.073c-.227-.21-.465-.408-.714-.594l.47-3.506c-1.043-.567-2.18-.982-3.381-1.221l-1.897,2.993c-.152-.008-.301-.023-.455-.023s-.303.015-.455.023l-1.897-2.993c-1.201.238-2.338.653-3.381,1.221l.47,3.506c-.249.186-.487.384-.714.594l-3.375-1.073c-.749.929-1.358,1.972-1.806,3.098l2.601,2.372c-.075.314-.135.633-.176.959l-3.267,1.344c.024,1.227.23,2.408.596,3.518l3.516.145c.153.308.319.607.505.893l-1.634,3.121c.785.893,1.699,1.665,2.715,2.294l2.777-2.142c.323.141.656.264.998.366l.752,3.43c.58.086,1.17.145,1.774.145s1.194-.059,1.774-.145l.752-3.43c.342-.102.675-.225.998-.366l2.777,2.142c1.016-.628,1.93-1.401,2.715-2.294l-1.634-3.121c.186-.286.353-.585.505-.893l3.516-.145Zm-11.404,1.284c-2.761,0-5-2.239-5-5s2.239-5,5-5,5,2.239,5,5-2.239,5-5,5Z"/>
`;Ke.page_globalActions=`
	<path d="m22.198,17.785l-3.6-3.6c1.293-1.339,2.093-3.157,2.093-5.166,0-1.751-.609-3.358-1.621-4.629-.016.554-.129,1.161-.344,1.811-.555,1.67-1.718,3.448-3.277,5.006-2.205,2.205-4.81,3.581-6.833,3.625,1.272,1.016,2.882,1.627,4.636,1.627,1.923,0,3.669-.735,4.989-1.932l1.582,1.582c-3.828,3.509-9.79,3.421-13.497-.287-3.707-3.707-3.795-9.669-.287-13.497l1.705,1.705c-1.197,1.32-1.932,3.067-1.932,4.989,0,1.739.601,3.334,1.6,4.601,1.567.793,4.737-.5,7.343-3.106,1.453-1.453,2.532-3.095,3.04-4.622.377-1.137.382-2.067.055-2.715-1.266-.998-2.861-1.598-4.598-1.598-2.008,0-3.827.799-5.166,2.093L4.485.072c-.097-.097-.253-.097-.35,0s-.097.253,0,.35l.855.855c-4.085,4.406-3.998,11.309.287,15.593,1.774,1.774,4,2.818,6.31,3.157v1.583c-2.439.05-4.32.347-4.32.71v.96c0,.398,2.257.72,5.04.72s5.04-.322,5.04-.72v-.96c0-.362-1.881-.659-4.32-.71v-1.46c.068.001.136.01.205.01,2.747,0,5.487-1.009,7.638-3.003l.978.978c.048.048.112.073.175.073s.127-.024.175-.073c.097-.097.097-.253,0-.35Z"/>
`;Ke.page_livePreview=`
	<rect x="20" y="5" width="1" height="15"/>
	<rect x="17" y="3.98" width="3" height="1"/>
	<rect x="21" y="4" width="3" height="1"/>
	<rect x="17" y="19.98" width="3" height="1"/>
	<rect x="21" y="20" width="3" height="1"/>
	<path d="m0,16v-2s2,0,2,0v-6H0v-2h6v2h-2v6h3v-2h2v4S0,16,0,16Z"/>
	<path d="m14,18v2h-4v-2h1v-7h-1v-2h3v.879c.618-.654,1.308-.981,2.069-.981.92,0,1.644.365,2.173,1.096s.794,1.582.794,2.554c0,1.03-.273,1.882-.819,2.558-.546.675-1.274,1.013-2.184,1.013-.742,0-1.42-.29-2.033-.869v2.751s1,0,1,0Zm1.759-5.495c0-.608-.126-1.063-.377-1.365s-.583-.453-.995-.453c-.417,0-.756.154-1.017.463s-.392.77-.392,1.383c0,.551.129.994.388,1.329s.603.503,1.035.503c.398,0,.723-.151.977-.453s.381-.771.381-1.408Z"/>
`;Ke.page_kerning=`
	<path d="m16.697,18l-4.164-10.513h-1.534v-1.487h4.892v1.487h-1.432l3.156,7.976,3.072-7.976h-1.446v-1.487h4.758v1.487h-1.505l-4.078,10.513h-1.72Z"/>
	<path d="m11.616,16.5l-3.41-9h1.495v-1.5H3.379v1.5h1.445l-3.327,9H0v1.5h4.873v-1.5h-1.503l.946-2.714h4.456l.92,2.714h-1.538v1.5h4.846v-1.5h-1.384Zm-6.839-4.12l1.667-4.88h.26l1.602,4.88h-3.529Z"/>
	<rect x="11" y="2" width="13" height="1"/>
	<rect x="11" width="1" height="5"/>
	<rect y="21" width="13" height="1"/>
	<rect x="12" y="19" width="1" height="5"/>
`;Ke.page_ligatures=`
	<path id="b" data-name="ligatures" d="m21,21v-13s-8,0-8,0c-.002-.479,0-1.249,0-2.083s.2-2.917,2.2-2.917c.642,0,2.572,0,2.572,1.423,0,.899.943,1.524,1.826,1.402.891-.116,1.402-.825,1.402-1.825,0-2-2.376-4-5-4-1.75,0-2.704.202-3.87,1.194-.541.461-1.147,1.187-1.525,2.294-.723-1.025-1.865-1.545-3.438-1.545-3.166,0-4.206,2.057-4.206,5.196v.861l-2.96-.035v3.035h3v10H0v3h24v-3h-3ZM6,7.142c0-1.076,0-2.596,1.383-2.596.701,0,1.107.518,1.218,1.553l1.634-.251v2.152h-4.236v-.858Zm0,13.858v-10h4v10h-4Zm7,0v-10h5v10h-5Z"/>
`;Ke.page_components=`
	<path d="m9.831,15.308c-.899-.912-2.012-1.368-3.338-1.368-1.38,0-2.544.544-3.493,1.632v-5.572H0v1.986l1,.014v10H0v2h3.028l-.028-1.602c.279.405.736.773,1.373,1.104.637.332,1.34.497,2.109.497,1.373,0,2.499-.489,3.378-1.468.879-.978,1.318-2.184,1.318-3.617,0-1.493-.449-2.695-1.348-3.607Zm-.531,3.75c0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088,0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.288-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088Z"/>
	<path d="m12.821,18.915c0,1.433.439,2.638,1.318,3.617.879.978,2.005,1.468,3.378,1.468.77,0,1.473-.166,2.109-.497.637-.332,1.094-.7,1.373-1.104l-.028,1.602h3.028s0-2,0-2h-1v-10l1-.014v-1.986s-3,0-3,0v5.572c-.949-1.088-2.113-1.632-3.493-1.632-1.327,0-2.439.456-3.338,1.368-.899.912-1.348,2.114-1.348,3.607Zm1.886.055c0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.289-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088,0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088Z"/>
	<path d="m15,3.131c0-.992-.297-1.762-.89-2.31-.593-.548-1.288-.822-2.086-.822-.008,0-.016.002-.024.002-.008,0-.016-.002-.024-.002-.797,0-1.493.274-2.086.822-.593.548-.89,1.318-.89,2.31,0,.031.006.057.007.087,0,.031-.007.057-.007.088,0,.979.3,1.755.9,2.329.6.574,1.292.861,2.076.861.008,0,.016-.002.024-.002.008,0,.016.002.024.002.784,0,1.477-.287,2.076-.861.6-.574.9-1.35.9-2.329,0-.031-.006-.057-.007-.088,0-.03.007-.057.007-.087Z"/>
	<path d="m15.001,13.5c-.17,0-.335-.087-.429-.243l-2.571-4.285-2.571,4.285c-.142.236-.45.314-.686.172-.237-.142-.313-.449-.171-.686l3.429-5.715,3.429,5.715c.142.236.065.544-.171.686-.081.049-.169.071-.257.071Z"/>
`;Ke.page_characters=`
	<path d="m13.548,0h2.452v6l-2.452.004c-.785-2.073-2.148-3.002-4.088-3.002-1.602,0-2.814.466-3.634,1.557s-1.231,2.399-1.231,3.923c0,1.594.434,2.884,1.302,3.87s1.973,1.479,3.316,1.479c1.1,0,3.795-.823,4.796-3.825l2.992,1.001c-1.225,3.805-3.923,5.84-8.094,5.84-2.945,0-5.166-.793-6.662-2.38S0,10.874,0,8.447c0-1.728.389-3.24,1.166-4.536S2.99,1.64,4.306.984s2.759-.984,4.33-.984c1.956,0,3.593.511,4.913,1.532V0Z"/>
	<polygon points="21 21 21 20.5 22 20.5 22 20 23 20 23 17 23 16.5 22.5 16.5 22.5 16 22 16 22 15.5 21.5 15.5 21.5 15 21 15 21 14.5 20.5 14.5 20.5 14 20 14 20 13.5 19.5 13.5 19.5 13 19 13 19 12.5 18.5 12.5 18.5 12 18 12 18 11.5 17.5 11.5 17.5 11 17 11 17 12 17.5 12 17.5 13 18 13 18 14 18.5 14 18.5 15 19 15 19 16 19.5 16 20 16 20 16.5 20.5 16.5 20.5 17.5 20 17.5 20 18 19.5 18 19 18 19 17.5 18.5 17.5 18.5 16.5 19 16.5 19 16 18.5 16 18.5 15 18 15 18 14 17.5 14 17.5 13 17 13 17 19 17 19.5 17.5 19.5 17.5 20 18 20 18 20.5 18.5 20.5 18.5 21 19 21 19 21.5 19.5 21.5 20 21.5 20 21 21 21"/>
	<polygon points="24 22 24 21 23.5 21 23.5 20 23 20 23 20.5 22 20.5 22 21 21 21 21 21.5 20 21.5 20 22 20 22.5 20.5 22.5 20.5 23.5 21.5 23.5 21.5 23 22.5 23 22.5 22.5 23.5 22.5 23.5 22 24 22"/>
`;Ke.page_overview=`
	<path d="m7,9.646v1.362h-2.161v-.951c-.701.72-1.483,1.08-2.347,1.08-.671,0-1.254-.231-1.749-.693S0,9.39,0,8.671C0,7.946.263,7.344.789,6.866s1.16-.717,1.901-.717c.691,0,1.359.22,2.004.661v-.773c0-.397-.036-.704-.107-.918s-.238-.408-.499-.58-.603-.258-1.025-.258c-.726,0-1.252.306-1.577.918l-1.387-.387c.615-1.214,1.677-1.821,3.185-1.821.554,0,1.033.079,1.436.238s.705.363.903.612.331.52.4.81.103.752.103,1.386v3.609h.873Zm-2.306-1.539c-.625-.516-1.257-.773-1.898-.773-.401,0-.737.124-1.006.371s-.404.567-.404.959c0,.365.118.671.354.918s.558.371.964.371c.701,0,1.364-.312,1.989-.935v-.91Z"/>
	<path d="m8,11.007v-1.362h.925V1.362h-.925V0h2.343v4.312c.726-.881,1.618-1.321,2.675-1.321,1.016,0,1.868.369,2.557,1.108s1.033,1.712,1.033,2.921c0,1.16-.337,2.136-1.01,2.929s-1.536,1.188-2.587,1.188c-.589,0-1.128-.134-1.616-.403s-.838-.567-1.052-.894v1.168h-2.343Zm2.388-3.883c0,.811.235,1.454.705,1.93s1.012.713,1.627.713c.645,0,1.201-.252,1.669-.757s.701-1.182.701-2.03c0-.822-.232-1.46-.697-1.914s-1.01-.681-1.635-.681c-.615,0-1.163.235-1.646.705s-.724,1.148-.724,2.034Z"/>
	<path d="m24,3v3s-1.25,0-1.25,0c-.064-.564-.393-.999-.75-1.3s-.884-.294-1.356-.294c-.629,0-1.141.243-1.534.729s-.59,1.124-.59,1.914c0,.736.187,1.384.561,1.946s.915.842,1.623.842c.983,0,1.697-.51,2.139-1.531l1.158.596c-.639,1.552-1.758,2.328-3.356,2.328-1.131,0-2.021-.422-2.67-1.265s-.974-1.815-.974-2.917c0-1.176.354-2.147,1.062-2.913s1.524-1.148,2.449-1.148c.792,0,1.693.255,2.239.765v-.753h1.25Z"/>
	<path d="m4.047,17.842l-1.444,1.806h.941v1.406H0v-1.406h1.076l2.196-2.731-2.098-2.511H.189v-1.406h3.43v1.406h-.91l1.314,1.578,1.269-1.578h-.744v-1.406h3.452v1.406h-1.205l-2.002,2.503,2.281,2.739h.925v1.406h-3.452v-1.406h1.008l-1.51-1.806Z"/>
	<path d="m12.492,20.2l-2.503-5.798h-.989v-1.402h3.492v1.402h-.913l1.645,4.198,1.613-4.198h-1.007v-1.402h3.17v1.402h-.613l-3.883,9.598h-2.498v-1.5h1.593l.892-2.3Z"/>
	<path d="m18,21.054v-1.315l4.37-5.433h-3.12v.694h-1.25v-2h6v1.406l-4.387,5.333h3.191v-.74h1.196v2.054h-6Z"/>
`;function _x(t="baseline-left"){let e=st.gray.l25,r=st.blue.l70,n=0;t.includes("center")&&(n=7),t.includes("right")&&(n=14);let a=0;return t.includes("middle")&&(a=8),t.includes("baseline")&&(a=11),t.includes("bottom")&&(a=15),`
	<svg version="1.1"
	xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20">
	<defs></defs>
	<rect fill="transparent" width="20" height="20"/>
	<g pointer-events="none" width="20" height="20">
			<path d="m2,2v16h15V2H2Zm14,15H3v-3h13v3Zm0-4H3V3h13v10Z"/>
			<rect x="${n}" y="${a}" width="5" height="5" style="fill: ${e};"/>
			<rect x="${n+1}" y="${a+1}" width="3" height="3" style="fill: ${r};"/>
		</g>
	</svg>
	`}Ke.back='<polygon points="37,23 20,23 25,18 22,15 12,25 22,35 25,32 20,27 37,27"/>';Ke.more='<polygon points="0,0 0,10 5,5"/>';Ke.selected='<polygon points="6,6 6,14 14,10"/>';Ke.notSelected='<rect x="5" y="9.75" width="10" height="0.5"/>';Ke.keyboard=`
	<rect x="12" y="29" width="26" height="7"/>
	<rect y="29" width="10" height="7"/>
	<rect y="21" width="8" height="6"/>
	<rect x="10" y="21" width="6" height="6"/>
	<rect x="18" y="21" width="6" height="6"/>
	<rect x="26" y="21" width="6" height="6"/>
	<rect x="34" y="21" width="6" height="6"/>
	<rect x="42" y="21" width="8" height="6"/>
	<rect x="6" y="13" width="6" height="6"/>
	<rect x="14" y="13" width="6" height="6"/>
	<rect x="22" y="13" width="6" height="6"/>
	<rect x="38" y="13" width="6" height="6"/>
	<rect x="30" y="13" width="6" height="6"/>
	<rect x="46" y="13" width="4" height="6"/>
	<rect y="13" width="4" height="6"/>
	<rect x="40" y="29" width="10" height="7"/>
`;function Sa(t,e,r={x:0,y:0,z:1},n=1,a="#000"){if(!t.shapes)return console.warn(`Glyph ${t.id} has no shapes to draw`),!1;let o;return e.beginPath(),t.shapes.forEach(s=>{if(o=wa(s,e,r),!o&&s.objType==="ComponentInstance"&&!xe().getItem(s.link)){console.warn(`>>> Component Instance has bad link: ${s.link} from ${t.id}`);const x=t.shapes.indexOf(s);x>-1&&(t.shapes.splice(x,1),console.warn(">>> Deleted the Instance"))}}),e.closePath(),e.fillStyle=a,e.globalAlpha=n,e.fill("nonzero"),e.globalAlpha=1,t.advanceWidth*r.dz}function wa(t,e,r){return t.objType==="ComponentInstance"?Vx(t,e,r):Jx(t,e,r)}function Vx(t,e,r){const n=t.transformedGlyph;if(!n)return!1;let a=!1,o=!1;return n.shapes.forEach(s=>{a=wa(s,e,r),o=o||!a}),!o}function Jx(t,e,r,n=!1){if(!(t!=null&&t.pathPoints)||t.pathPoints===!1||t.pathPoints.length<2)return!1;let a,o;const s=n?0:9,x=pt(ae(t.pathPoints[0].p.x,s),r),E=lt(ae(t.pathPoints[0].p.y,s),r);let T,p,R,N,g,K;e.moveTo(x,E);for(let Y=0;Y<t.pathPoints.length;Y++)a=t.pathPoints[Y],o=t.pathPoints[t.getNextPointNum(Y)],!a.h2.use&&!o.h1.use?(g=pt(ae(o.p.x,s),r),K=lt(ae(o.p.y,s),r),e.lineTo(g,K)):(T=pt(ae(a.h2.x,s),r),p=lt(ae(a.h2.y,s),r),R=pt(ae(o.h1.x,s),r),N=lt(ae(o.h1.y,s),r),g=pt(ae(o.p.x,s),r),K=lt(ae(o.p.y,s),r),e.bezierCurveTo(T,p,R,N,g,K));return!0}function Ya(t,e="",r=[],n=!1){let a=`current${t.objType}`;a==="currentControlPoint"&&(a=`currentPathPoint.${t.type}`);let o=[a].concat(r);e&&(e+=":&ensp;");let s=C({tag:"label",innerHTML:`${e}x${Wa()}y`}),x=C({tag:"div",className:"doubleInput"}),E=Pt(t,"x",o,"input-number"),T=Pt(t,"y",o,"input-number");return n&&(E.setAttribute("disabled",""),T.setAttribute("disabled","")),x.appendChild(E),x.appendChild(ka()),x.appendChild(T),[s,x]}function Io(t,e=!1){let r=[],n=`current${t.objType}`,a=Ue(`width${Wa()}height`),o=C({tag:"div",className:"doubleInput"}),s=Pt(t,"width",n,"input-number"),x=Pt(t,"height",n,"input-number");if(e&&(s.setAttribute("disabled",""),x.setAttribute("disabled","")),o.appendChild(s),o.appendChild(ka()),o.appendChild(x),r.push(a),r.push(o),!e){let E=["top-left","baseline-left","bottom-left","top-right","baseline-right","bottom-right","middle-center"];E=va;let T=Ue("transform origin",`With increases or decreases to width or height,
		the transform origin is the point that stays fixed.
		<br><br>
		This only takes effect when directly entering values
		into the width or height inputs.`),p=C({tag:"option-chooser",attributes:{"selected-id":t.transformOrigin,"selected-name":t.transformOrigin.replace("-"," ")}});E.forEach(g=>{let K=C({tag:"option",attributes:{"selection-id":g},innerHTML:`${_x(g)}${g.replace("-"," ")}`});K.addEventListener("click",()=>{t.transformOrigin=g,z().publish("editCanvasView",t)}),p.appendChild(K)});let R=Ue("lock aspect ratio",`
			When either the width or height is adjusted,
			the overall size will be kept proportional.
			<br><br>
			Maintaining aspect ratio will override value
			locks if need be.
		`),N=On(t,"ratioLock",n);r.push(T),r.push(p),r.push(R),r.push(N)}return r}function Pt(t,e,r,n,a=[]){let o=Array.isArray(r)?r:[r],s=C({tag:n,className:`singleInput-${e}`,attributes:{"pubsub-topic":o[0]}}),x=n==="input"?t[e]:ae(t[e],3);s.setAttribute("value",x),t.isLockable&&(s.setAttribute("is-locked",t.isLocked(e)),s.addEventListener("lock",T=>{T.detail.isLocked?t.lock(e):t.unlock(e);const p=z();o.forEach(R=>p.publish(R,t))}));function E(T){if(t.isLockable&&t.isLocked(e))return;let p=T.target.value;const R=z();if(e==="leftSideBearing"){let N=R.view;R.view.dx-=(p-t.leftSideBearing)*N.dz,R.publish("editCanvasView",t)}if((t.objType==="Glyph"||t.objType==="VirtualGlyph"||t.objType==="Path")&&(e==="width"||e==="height")){let N={width:!1,height:!1};N.ratioLock=t.ratioLock,N.transformOrigin=t.transformOrigin,e==="width"?N.width=p:N.height=p,t.objType==="Path"?t.setShapeSize(N):t.setGlyphSize(N)}else t[e]=p;t.objType==="VirtualGlyph"?o.forEach(N=>R.publish(N,R.selectedItem)):t.objType==="VirtualShape"?o.forEach(N=>R.publish(N,R.selectedItem)):o.forEach(N=>R.publish(N,t))}return s.addEventListener("change",E),a&&a.forEach(T=>{s.addEventListener(T,E)}),z().subscribe({topic:o,subscriberID:`attributesPanel.${o[0]}.${e}`,callback:T=>{if(T&&(T[e]||T[e]===0)){let p;n==="input"?p=T[e]:p=ae(T[e],3),s.value=p,s.setAttribute("value",p)}}}),s}function On(t,e,r){let n=C({tag:"input",attributes:{type:"checkbox"}});return t[e]&&n.setAttribute("checked",""),n.addEventListener("change",a=>{let o=a.target.checked;t[e]=!!o,r&&(z().publish(r,t),e==="use"&&(E0(t.type,!!o),t.parent.reconcileHandle(t.type)))}),r&&z().subscribe({topic:r,subscriberID:`attributesPanel.${r}.${e}`,callback:a=>{a[e]?(n.setAttribute("checked",""),e==="use"&&E0(t.type,!0)):(n.removeAttribute("checked"),e==="use"&&E0(t.type,!1))}}),n}function E0(t,e){let r=document.getElementById(`${t}InputGroup`);r&&(r.style.display=e?"grid":"none")}function Ue(t,e=!1,r=!1,n=!1){let a=C({content:t}),o=C({tag:"label"});if(r&&o.setAttribute("for",r),o.appendChild(a),e){let s=C({tag:"info-bubble",content:e});o.appendChild(s),o.classList.add("info")}return n&&o.setAttribute("class",n),o}function Yr(){return C({tag:"div",className:"rowPad"})}function Wa(){return'<span class="dimSplit">&#x2044;</span>'}function ka(){return C({className:"dimSplit",innerHTML:"&#x2044;"})}function rr(t,e,r,n=!1){let a=C({tag:"input",attributes:{type:"checkbox"}});return t[e]&&a.setAttribute("checked",""),n&&a.setAttribute("id",n),a.addEventListener("change",o=>{let s=o.target.checked;t[e]=!!s,r&&r(s)}),a}function _1(t){const e=z(),r=xe(),n=e.project.getItem(t);let a=C({className:"item-link__row",attributes:{"target-item-id":t}});return a.addEventListener("click",()=>{n.displayType==="Glyph"&&(e.nav.page="Characters"),n.displayType==="Component"&&(e.nav.page="Components"),n.displayType==="Ligature"&&(e.nav.page="Ligatures"),e.selectedItemID=t,e.navigate()}),a.appendChild(C({className:"item-link__thumbnail",attributes:{"target-item-id":t},innerHTML:r.makeItemThumbnail(n)})),a.appendChild(C({className:"item-link__title",innerHTML:`${(n==null?void 0:n.name)||"ERROR"}`})),a.appendChild(C({className:"item-link__subtitle",innerHTML:`${(n==null?void 0:n.displayType)||"ERROR"}&ensp;|&ensp;${t}`})),a}/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||function(){var t=function(){try{var r={},n=Object.defineProperty,a=n(r,r,r)&&n}catch{}return a}(),e=function(r){if(this==null)throw TypeError();var n=String(this),a=n.length,o=r?Number(r):0;if(o!=o&&(o=0),!(o<0||o>=a)){var s=n.charCodeAt(o),x;return s>=55296&&s<=56319&&a>o+1&&(x=n.charCodeAt(o+1),x>=56320&&x<=57343)?(s-55296)*1024+x-56320+65536:s}};t?t(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}();var uo=0,V1=-3;function Na(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function zx(t,e){this.source=t,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new Na,this.dtree=new Na}var J1=new Na,z1=new Na,po=new Uint8Array(30),So=new Uint16Array(30),Z1=new Uint8Array(30),X1=new Uint16Array(30),Zx=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),aA=new Na,Br=new Uint8Array(320);function j1(t,e,r,n){var a,o;for(a=0;a<r;++a)t[a]=0;for(a=0;a<30-r;++a)t[a+r]=a/r|0;for(o=n,a=0;a<30;++a)e[a]=o,o+=1<<t[a]}function Xx(t,e){var r;for(r=0;r<7;++r)t.table[r]=0;for(t.table[7]=24,t.table[8]=152,t.table[9]=112,r=0;r<24;++r)t.trans[r]=256+r;for(r=0;r<144;++r)t.trans[24+r]=r;for(r=0;r<8;++r)t.trans[168+r]=280+r;for(r=0;r<112;++r)t.trans[176+r]=144+r;for(r=0;r<5;++r)e.table[r]=0;for(e.table[5]=32,r=0;r<32;++r)e.trans[r]=r}var iA=new Uint16Array(16);function L0(t,e,r,n){var a,o;for(a=0;a<16;++a)t.table[a]=0;for(a=0;a<n;++a)t.table[e[r+a]]++;for(t.table[0]=0,o=0,a=0;a<16;++a)iA[a]=o,o+=t.table[a];for(a=0;a<n;++a)e[r+a]&&(t.trans[iA[e[r+a]]++]=a)}function jx(t){t.bitcount--||(t.tag=t.source[t.sourceIndex++],t.bitcount=7);var e=t.tag&1;return t.tag>>>=1,e}function Pr(t,e,r){if(!e)return r;for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var n=t.tag&65535>>>16-e;return t.tag>>>=e,t.bitcount-=e,n+r}function U0(t,e){for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var r=0,n=0,a=0,o=t.tag;do n=2*n+(o&1),o>>>=1,++a,r+=e.table[a],n-=e.table[a];while(n>=0);return t.tag=o,t.bitcount-=a,e.trans[r+n]}function Qx(t,e,r){var n,a,o,s,x,E;for(n=Pr(t,5,257),a=Pr(t,5,1),o=Pr(t,4,4),s=0;s<19;++s)Br[s]=0;for(s=0;s<o;++s){var T=Pr(t,3,0);Br[Zx[s]]=T}for(L0(aA,Br,0,19),x=0;x<n+a;){var p=U0(t,aA);switch(p){case 16:var R=Br[x-1];for(E=Pr(t,2,3);E;--E)Br[x++]=R;break;case 17:for(E=Pr(t,3,3);E;--E)Br[x++]=0;break;case 18:for(E=Pr(t,7,11);E;--E)Br[x++]=0;break;default:Br[x++]=p;break}}L0(e,Br,0,n),L0(r,Br,n,a)}function oA(t,e,r){for(;;){var n=U0(t,e);if(n===256)return uo;if(n<256)t.dest[t.destLen++]=n;else{var a,o,s,x;for(n-=257,a=Pr(t,po[n],So[n]),o=U0(t,r),s=t.destLen-Pr(t,Z1[o],X1[o]),x=s;x<s+a;++x)t.dest[t.destLen++]=t.dest[x]}}}function qx(t){for(var e,r,n;t.bitcount>8;)t.sourceIndex--,t.bitcount-=8;if(e=t.source[t.sourceIndex+1],e=256*e+t.source[t.sourceIndex],r=t.source[t.sourceIndex+3],r=256*r+t.source[t.sourceIndex+2],e!==(~r&65535))return V1;for(t.sourceIndex+=4,n=e;n;--n)t.dest[t.destLen++]=t.source[t.sourceIndex++];return t.bitcount=0,uo}function $x(t,e){var r=new zx(t,e),n,a,o;do{switch(n=jx(r),a=Pr(r,2,0),a){case 0:o=qx(r);break;case 1:o=oA(r,J1,z1);break;case 2:Qx(r,r.ltree,r.dtree),o=oA(r,r.ltree,r.dtree);break;default:o=V1}if(o!==uo)throw new Error("Data error")}while(!n);return r.destLen<r.dest.length?typeof r.dest.slice=="function"?r.dest.slice(0,r.destLen):r.dest.subarray(0,r.destLen):r.dest}Xx(J1,z1);j1(po,So,4,3);j1(Z1,X1,2,1);po[28]=0;So[28]=258;var eE=$x;function _n(t,e,r,n,a){return Math.pow(1-a,3)*t+3*Math.pow(1-a,2)*a*e+3*(1-a)*Math.pow(a,2)*r+Math.pow(a,3)*n}function Qr(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}Qr.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};Qr.prototype.addPoint=function(t,e){typeof t=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};Qr.prototype.addX=function(t){this.addPoint(t,null)};Qr.prototype.addY=function(t){this.addPoint(null,t)};Qr.prototype.addBezier=function(t,e,r,n,a,o,s,x){var E=[t,e],T=[r,n],p=[a,o],R=[s,x];this.addPoint(t,e),this.addPoint(s,x);for(var N=0;N<=1;N++){var g=6*E[N]-12*T[N]+6*p[N],K=-3*E[N]+9*T[N]-9*p[N]+3*R[N],Y=3*T[N]-3*E[N];if(K===0){if(g===0)continue;var V=-Y/g;0<V&&V<1&&(N===0&&this.addX(_n(E[N],T[N],p[N],R[N],V)),N===1&&this.addY(_n(E[N],T[N],p[N],R[N],V)));continue}var _=Math.pow(g,2)-4*Y*K;if(!(_<0)){var $=(-g+Math.sqrt(_))/(2*K);0<$&&$<1&&(N===0&&this.addX(_n(E[N],T[N],p[N],R[N],$)),N===1&&this.addY(_n(E[N],T[N],p[N],R[N],$)));var Q=(-g-Math.sqrt(_))/(2*K);0<Q&&Q<1&&(N===0&&this.addX(_n(E[N],T[N],p[N],R[N],Q)),N===1&&this.addY(_n(E[N],T[N],p[N],R[N],Q)))}}};Qr.prototype.addQuad=function(t,e,r,n,a,o){var s=t+.6666666666666666*(r-t),x=e+2/3*(n-e),E=s+1/3*(a-t),T=x+1/3*(o-e);this.addBezier(t,e,s,x,E,T,a,o)};function Mt(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}Mt.prototype.moveTo=function(t,e){this.commands.push({type:"M",x:t,y:e})};Mt.prototype.lineTo=function(t,e){this.commands.push({type:"L",x:t,y:e})};Mt.prototype.curveTo=Mt.prototype.bezierCurveTo=function(t,e,r,n,a,o){this.commands.push({type:"C",x1:t,y1:e,x2:r,y2:n,x:a,y:o})};Mt.prototype.quadTo=Mt.prototype.quadraticCurveTo=function(t,e,r,n){this.commands.push({type:"Q",x1:t,y1:e,x:r,y:n})};Mt.prototype.close=Mt.prototype.closePath=function(){this.commands.push({type:"Z"})};Mt.prototype.extend=function(t){if(t.commands)t=t.commands;else if(t instanceof Qr){var e=t;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,t)};Mt.prototype.getBoundingBox=function(){for(var t=new Qr,e=0,r=0,n=0,a=0,o=0;o<this.commands.length;o++){var s=this.commands[o];switch(s.type){case"M":t.addPoint(s.x,s.y),e=n=s.x,r=a=s.y;break;case"L":t.addPoint(s.x,s.y),n=s.x,a=s.y;break;case"Q":t.addQuad(n,a,s.x1,s.y1,s.x,s.y),n=s.x,a=s.y;break;case"C":t.addBezier(n,a,s.x1,s.y1,s.x2,s.y2,s.x,s.y),n=s.x,a=s.y;break;case"Z":n=e,a=r;break;default:throw new Error("Unexpected path command "+s.type)}}return t.isEmpty()&&t.addPoint(0,0),t};Mt.prototype.draw=function(t){t.beginPath();for(var e=0;e<this.commands.length;e+=1){var r=this.commands[e];r.type==="M"?t.moveTo(r.x,r.y):r.type==="L"?t.lineTo(r.x,r.y):r.type==="C"?t.bezierCurveTo(r.x1,r.y1,r.x2,r.y2,r.x,r.y):r.type==="Q"?t.quadraticCurveTo(r.x1,r.y1,r.x,r.y):r.type==="Z"&&t.closePath()}this.fill&&(t.fillStyle=this.fill,t.fill()),this.stroke&&(t.strokeStyle=this.stroke,t.lineWidth=this.strokeWidth,t.stroke())};Mt.prototype.toPathData=function(t){t=t!==void 0?t:2;function e(s){return Math.round(s)===s?""+Math.round(s):s.toFixed(t)}function r(){for(var s=arguments,x="",E=0;E<arguments.length;E+=1){var T=s[E];T>=0&&E>0&&(x+=" "),x+=e(T)}return x}for(var n="",a=0;a<this.commands.length;a+=1){var o=this.commands[a];o.type==="M"?n+="M"+r(o.x,o.y):o.type==="L"?n+="L"+r(o.x,o.y):o.type==="C"?n+="C"+r(o.x1,o.y1,o.x2,o.y2,o.x,o.y):o.type==="Q"?n+="Q"+r(o.x1,o.y1,o.x,o.y):o.type==="Z"&&(n+="Z")}return n};Mt.prototype.toSVG=function(t){var e='<path d="';return e+=this.toPathData(t),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};Mt.prototype.toDOMElement=function(t){var e=this.toPathData(t),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",e),r};function Q1(t){throw new Error(t)}function AA(t,e){t||Q1(e)}var Fe={fail:Q1,argument:AA,assert:AA},sA=32768,lA=2147483648,ra={},ue={},Ge={};function Nr(t){return function(){return t}}ue.BYTE=function(t){return Fe.argument(t>=0&&t<=255,"Byte value should be between 0 and 255."),[t]};Ge.BYTE=Nr(1);ue.CHAR=function(t){return[t.charCodeAt(0)]};Ge.CHAR=Nr(1);ue.CHARARRAY=function(t){typeof t>"u"&&(t="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],r=0;r<t.length;r+=1)e[r]=t.charCodeAt(r);return e};Ge.CHARARRAY=function(t){return typeof t>"u"?0:t.length};ue.USHORT=function(t){return[t>>8&255,t&255]};Ge.USHORT=Nr(2);ue.SHORT=function(t){return t>=sA&&(t=-(2*sA-t)),[t>>8&255,t&255]};Ge.SHORT=Nr(2);ue.UINT24=function(t){return[t>>16&255,t>>8&255,t&255]};Ge.UINT24=Nr(3);ue.ULONG=function(t){return[t>>24&255,t>>16&255,t>>8&255,t&255]};Ge.ULONG=Nr(4);ue.LONG=function(t){return t>=lA&&(t=-(2*lA-t)),[t>>24&255,t>>16&255,t>>8&255,t&255]};Ge.LONG=Nr(4);ue.FIXED=ue.ULONG;Ge.FIXED=Ge.ULONG;ue.FWORD=ue.SHORT;Ge.FWORD=Ge.SHORT;ue.UFWORD=ue.USHORT;Ge.UFWORD=Ge.USHORT;ue.LONGDATETIME=function(t){return[0,0,0,0,t>>24&255,t>>16&255,t>>8&255,t&255]};Ge.LONGDATETIME=Nr(8);ue.TAG=function(t){return Fe.argument(t.length===4,"Tag should be exactly 4 ASCII characters."),[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]};Ge.TAG=Nr(4);ue.Card8=ue.BYTE;Ge.Card8=Ge.BYTE;ue.Card16=ue.USHORT;Ge.Card16=Ge.USHORT;ue.OffSize=ue.BYTE;Ge.OffSize=Ge.BYTE;ue.SID=ue.USHORT;Ge.SID=Ge.USHORT;ue.NUMBER=function(t){return t>=-107&&t<=107?[t+139]:t>=108&&t<=1131?(t=t-108,[(t>>8)+247,t&255]):t>=-1131&&t<=-108?(t=-t-108,[(t>>8)+251,t&255]):t>=-32768&&t<=32767?ue.NUMBER16(t):ue.NUMBER32(t)};Ge.NUMBER=function(t){return ue.NUMBER(t).length};ue.NUMBER16=function(t){return[28,t>>8&255,t&255]};Ge.NUMBER16=Nr(3);ue.NUMBER32=function(t){return[29,t>>24&255,t>>16&255,t>>8&255,t&255]};Ge.NUMBER32=Nr(5);ue.REAL=function(t){var e=t.toString(),r=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(r){var n=parseFloat("1e"+((r[2]?+r[2]:0)+r[1].length));e=(Math.round(t*n)/n).toString()}for(var a="",o=0,s=e.length;o<s;o+=1){var x=e[o];x==="e"?a+=e[++o]==="-"?"c":"b":x==="."?a+="a":x==="-"?a+="e":a+=x}a+=a.length&1?"f":"ff";for(var E=[30],T=0,p=a.length;T<p;T+=2)E.push(parseInt(a.substr(T,2),16));return E};Ge.REAL=function(t){return ue.REAL(t).length};ue.NAME=ue.CHARARRAY;Ge.NAME=Ge.CHARARRAY;ue.STRING=ue.CHARARRAY;Ge.STRING=Ge.CHARARRAY;ra.UTF8=function(t,e,r){for(var n=[],a=r,o=0;o<a;o++,e+=1)n[o]=t.getUint8(e);return String.fromCharCode.apply(null,n)};ra.UTF16=function(t,e,r){for(var n=[],a=r/2,o=0;o<a;o++,e+=2)n[o]=t.getUint16(e);return String.fromCharCode.apply(null,n)};ue.UTF16=function(t){for(var e=[],r=0;r<t.length;r+=1){var n=t.charCodeAt(r);e[e.length]=n>>8&255,e[e.length]=n&255}return e};Ge.UTF16=function(t){return t.length*2};var w0={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};ra.MACSTRING=function(t,e,r,n){var a=w0[n];if(a!==void 0){for(var o="",s=0;s<r;s++){var x=t.getUint8(e+s);x<=127?o+=String.fromCharCode(x):o+=a[x&127]}return o}};var oi=typeof WeakMap=="function"&&new WeakMap,Ai,tE=function(t){if(!Ai){Ai={};for(var e in w0)Ai[e]=new String(e)}var r=Ai[t];if(r!==void 0){if(oi){var n=oi.get(r);if(n!==void 0)return n}var a=w0[t];if(a!==void 0){for(var o={},s=0;s<a.length;s++)o[a.charCodeAt(s)]=s+128;return oi&&oi.set(r,o),o}}};ue.MACSTRING=function(t,e){var r=tE(e);if(r!==void 0){for(var n=[],a=0;a<t.length;a++){var o=t.charCodeAt(a);if(o>=128&&(o=r[o],o===void 0))return;n[a]=o}return n}};Ge.MACSTRING=function(t,e){var r=ue.MACSTRING(t,e);return r!==void 0?r.length:0};function Y0(t){return t>=-128&&t<=127}function rE(t,e,r){for(var n=0,a=t.length;e<a&&n<64&&t[e]===0;)++e,++n;return r.push(128|n-1),e}function nE(t,e,r){for(var n=0,a=t.length,o=e;o<a&&n<64;){var s=t[o];if(!Y0(s)||s===0&&o+1<a&&t[o+1]===0)break;++o,++n}r.push(n-1);for(var x=e;x<o;++x)r.push(t[x]+256&255);return o}function aE(t,e,r){for(var n=0,a=t.length,o=e;o<a&&n<64;){var s=t[o];if(s===0||Y0(s)&&o+1<a&&Y0(t[o+1]))break;++o,++n}r.push(64|n-1);for(var x=e;x<o;++x){var E=t[x];r.push(E+65536>>8&255,E+256&255)}return o}ue.VARDELTAS=function(t){for(var e=0,r=[];e<t.length;){var n=t[e];n===0?e=rE(t,e,r):n>=-128&&n<=127?e=nE(t,e,r):e=aE(t,e,r)}return r};ue.INDEX=function(t){for(var e=1,r=[e],n=[],a=0;a<t.length;a+=1){var o=ue.OBJECT(t[a]);Array.prototype.push.apply(n,o),e+=o.length,r.push(e)}if(n.length===0)return[0,0];for(var s=[],x=1+Math.floor(Math.log(e)/Math.log(2))/8|0,E=[void 0,ue.BYTE,ue.USHORT,ue.UINT24,ue.ULONG][x],T=0;T<r.length;T+=1){var p=E(r[T]);Array.prototype.push.apply(s,p)}return Array.prototype.concat(ue.Card16(t.length),ue.OffSize(x),s,n)};Ge.INDEX=function(t){return ue.INDEX(t).length};ue.DICT=function(t){for(var e=[],r=Object.keys(t),n=r.length,a=0;a<n;a+=1){var o=parseInt(r[a],0),s=t[o];e=e.concat(ue.OPERAND(s.value,s.type)),e=e.concat(ue.OPERATOR(o))}return e};Ge.DICT=function(t){return ue.DICT(t).length};ue.OPERATOR=function(t){return t<1200?[t]:[12,t-1200]};ue.OPERAND=function(t,e){var r=[];if(Array.isArray(e))for(var n=0;n<e.length;n+=1)Fe.argument(t.length===e.length,"Not enough arguments given for type"+e),r=r.concat(ue.OPERAND(t[n],e[n]));else if(e==="SID")r=r.concat(ue.NUMBER(t));else if(e==="offset")r=r.concat(ue.NUMBER32(t));else if(e==="number")r=r.concat(ue.NUMBER(t));else if(e==="real")r=r.concat(ue.REAL(t));else throw new Error("Unknown operand type "+e);return r};ue.OP=ue.BYTE;Ge.OP=Ge.BYTE;var si=typeof WeakMap=="function"&&new WeakMap;ue.CHARSTRING=function(t){if(si){var e=si.get(t);if(e!==void 0)return e}for(var r=[],n=t.length,a=0;a<n;a+=1){var o=t[a];r=r.concat(ue[o.type](o.value))}return si&&si.set(t,r),r};Ge.CHARSTRING=function(t){return ue.CHARSTRING(t).length};ue.OBJECT=function(t){var e=ue[t.type];return Fe.argument(e!==void 0,"No encoding function for type "+t.type),e(t.value)};Ge.OBJECT=function(t){var e=Ge[t.type];return Fe.argument(e!==void 0,"No sizeOf function for type "+t.type),e(t.value)};ue.TABLE=function(t){for(var e=[],r=t.fields.length,n=[],a=[],o=0;o<r;o+=1){var s=t.fields[o],x=ue[s.type];Fe.argument(x!==void 0,"No encoding function for field type "+s.type+" ("+s.name+")");var E=t[s.name];E===void 0&&(E=s.value);var T=x(E);s.type==="TABLE"?(a.push(e.length),e=e.concat([0,0]),n.push(T)):e=e.concat(T)}for(var p=0;p<n.length;p+=1){var R=a[p],N=e.length;Fe.argument(N<65536,"Table "+t.tableName+" too big."),e[R]=N>>8,e[R+1]=N&255,e=e.concat(n[p])}return e};Ge.TABLE=function(t){for(var e=0,r=t.fields.length,n=0;n<r;n+=1){var a=t.fields[n],o=Ge[a.type];Fe.argument(o!==void 0,"No sizeOf function for field type "+a.type+" ("+a.name+")");var s=t[a.name];s===void 0&&(s=a.value),e+=o(s),a.type==="TABLE"&&(e+=2)}return e};ue.RECORD=ue.TABLE;Ge.RECORD=Ge.TABLE;ue.LITERAL=function(t){return t};Ge.LITERAL=function(t){return t.length};function kt(t,e,r){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var n=0;n<e.length;n+=1){var a=e[n];this[a.name]=a.value}if(this.tableName=t,this.fields=e,r)for(var o=Object.keys(r),s=0;s<o.length;s+=1){var x=o[s],E=r[x];this[x]!==void 0&&(this[x]=E)}}kt.prototype.encode=function(){return ue.TABLE(this)};kt.prototype.sizeOf=function(){return Ge.TABLE(this)};function Da(t,e,r){r===void 0&&(r=e.length);var n=new Array(e.length+1);n[0]={name:t+"Count",type:"USHORT",value:r};for(var a=0;a<e.length;a++)n[a+1]={name:t+a,type:"USHORT",value:e[a]};return n}function W0(t,e,r){var n=e.length,a=new Array(n+1);a[0]={name:t+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a[o+1]={name:t+o,type:"TABLE",value:r(e[o],o)};return a}function fa(t,e,r){var n=e.length,a=[];a[0]={name:t+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a=a.concat(r(e[o],o));return a}function Ni(t){t.format===1?kt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(Da("glyph",t.glyphs))):t.format===2?kt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(fa("rangeRecord",t.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):Fe.assert(!1,"Coverage format must be 1 or 2.")}Ni.prototype=Object.create(kt.prototype);Ni.prototype.constructor=Ni;function Di(t){kt.call(this,"scriptListTable",fa("scriptRecord",t,function(e,r){var n=e.script,a=n.defaultLangSys;return Fe.assert(!!a,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+r,type:"TAG",value:e.tag},{name:"script"+r,type:"TABLE",value:new kt("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new kt("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:a.reqFeatureIndex}].concat(Da("featureIndex",a.featureIndexes)))}].concat(fa("langSys",n.langSysRecords,function(o,s){var x=o.langSys;return[{name:"langSysTag"+s,type:"TAG",value:o.tag},{name:"langSys"+s,type:"TABLE",value:new kt("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:x.reqFeatureIndex}].concat(Da("featureIndex",x.featureIndexes)))}]})))}]}))}Di.prototype=Object.create(kt.prototype);Di.prototype.constructor=Di;function fi(t){kt.call(this,"featureListTable",fa("featureRecord",t,function(e,r){var n=e.feature;return[{name:"featureTag"+r,type:"TAG",value:e.tag},{name:"feature"+r,type:"TABLE",value:new kt("featureTable",[{name:"featureParams",type:"USHORT",value:n.featureParams}].concat(Da("lookupListIndex",n.lookupListIndexes)))}]}))}fi.prototype=Object.create(kt.prototype);fi.prototype.constructor=fi;function Oi(t,e){kt.call(this,"lookupListTable",W0("lookup",t,function(r){var n=e[r.lookupType];return Fe.assert(!!n,"Unable to write GSUB lookup type "+r.lookupType+" tables."),new kt("lookupTable",[{name:"lookupType",type:"USHORT",value:r.lookupType},{name:"lookupFlag",type:"USHORT",value:r.lookupFlag}].concat(W0("subtable",r.subtables,n)))}))}Oi.prototype=Object.create(kt.prototype);Oi.prototype.constructor=Oi;var Ce={Table:kt,Record:kt,Coverage:Ni,ScriptList:Di,FeatureList:fi,LookupList:Oi,ushortList:Da,tableList:W0,recordList:fa};function xA(t,e){return t.getUint8(e)}function Bi(t,e){return t.getUint16(e,!1)}function iE(t,e){return t.getInt16(e,!1)}function Co(t,e){return t.getUint32(e,!1)}function q1(t,e){var r=t.getInt16(e,!1),n=t.getUint16(e+2,!1);return r+n/65535}function oE(t,e){for(var r="",n=e;n<e+4;n+=1)r+=String.fromCharCode(t.getInt8(n));return r}function AE(t,e,r){for(var n=0,a=0;a<r;a+=1)n<<=8,n+=t.getUint8(e+a);return n}function sE(t,e,r){for(var n=[],a=e;a<r;a+=1)n.push(t.getUint8(a));return n}function lE(t){for(var e="",r=0;r<t.length;r+=1)e+=String.fromCharCode(t[r]);return e}var xE={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function te(t,e){this.data=t,this.offset=e,this.relativeOffset=0}te.prototype.parseByte=function(){var t=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};te.prototype.parseChar=function(){var t=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};te.prototype.parseCard8=te.prototype.parseByte;te.prototype.parseUShort=function(){var t=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};te.prototype.parseCard16=te.prototype.parseUShort;te.prototype.parseSID=te.prototype.parseUShort;te.prototype.parseOffset16=te.prototype.parseUShort;te.prototype.parseShort=function(){var t=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};te.prototype.parseF2Dot14=function(){var t=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,t};te.prototype.parseULong=function(){var t=Co(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};te.prototype.parseOffset32=te.prototype.parseULong;te.prototype.parseFixed=function(){var t=q1(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};te.prototype.parseString=function(t){var e=this.data,r=this.offset+this.relativeOffset,n="";this.relativeOffset+=t;for(var a=0;a<t;a++)n+=String.fromCharCode(e.getUint8(r+a));return n};te.prototype.parseTag=function(){return this.parseString(4)};te.prototype.parseLongDateTime=function(){var t=Co(this.data,this.offset+this.relativeOffset+4);return t-=2082844800,this.relativeOffset+=8,t};te.prototype.parseVersion=function(t){var e=Bi(this.data,this.offset+this.relativeOffset),r=Bi(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,t===void 0&&(t=4096),e+r/t/10};te.prototype.skip=function(t,e){e===void 0&&(e=1),this.relativeOffset+=xE[t]*e};te.prototype.parseULongList=function(t){t===void 0&&(t=this.parseULong());for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint32(n),n+=4;return this.relativeOffset+=t*4,e};te.prototype.parseOffset16List=te.prototype.parseUShortList=function(t){t===void 0&&(t=this.parseUShort());for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint16(n),n+=2;return this.relativeOffset+=t*2,e};te.prototype.parseShortList=function(t){for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getInt16(n),n+=2;return this.relativeOffset+=t*2,e};te.prototype.parseByteList=function(t){for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint8(n++);return this.relativeOffset+=t,e};te.prototype.parseList=function(t,e){e||(e=t,t=this.parseUShort());for(var r=new Array(t),n=0;n<t;n++)r[n]=e.call(this);return r};te.prototype.parseList32=function(t,e){e||(e=t,t=this.parseULong());for(var r=new Array(t),n=0;n<t;n++)r[n]=e.call(this);return r};te.prototype.parseRecordList=function(t,e){e||(e=t,t=this.parseUShort());for(var r=new Array(t),n=Object.keys(e),a=0;a<t;a++){for(var o={},s=0;s<n.length;s++){var x=n[s],E=e[x];o[x]=E.call(this)}r[a]=o}return r};te.prototype.parseRecordList32=function(t,e){e||(e=t,t=this.parseULong());for(var r=new Array(t),n=Object.keys(e),a=0;a<t;a++){for(var o={},s=0;s<n.length;s++){var x=n[s],E=e[x];o[x]=E.call(this)}r[a]=o}return r};te.prototype.parseStruct=function(t){if(typeof t=="function")return t.call(this);for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var a=e[n],o=t[a];r[a]=o.call(this)}return r};te.prototype.parseValueRecord=function(t){if(t===void 0&&(t=this.parseUShort()),t!==0){var e={};return t&1&&(e.xPlacement=this.parseShort()),t&2&&(e.yPlacement=this.parseShort()),t&4&&(e.xAdvance=this.parseShort()),t&8&&(e.yAdvance=this.parseShort()),t&16&&(e.xPlaDevice=void 0,this.parseShort()),t&32&&(e.yPlaDevice=void 0,this.parseShort()),t&64&&(e.xAdvDevice=void 0,this.parseShort()),t&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};te.prototype.parseValueRecordList=function(){for(var t=this.parseUShort(),e=this.parseUShort(),r=new Array(e),n=0;n<e;n++)r[n]=this.parseValueRecord(t);return r};te.prototype.parsePointer=function(t){var e=this.parseOffset16();if(e>0)return new te(this.data,this.offset+e).parseStruct(t)};te.prototype.parsePointer32=function(t){var e=this.parseOffset32();if(e>0)return new te(this.data,this.offset+e).parseStruct(t)};te.prototype.parseListOfLists=function(t){for(var e=this.parseOffset16List(),r=e.length,n=this.relativeOffset,a=new Array(r),o=0;o<r;o++){var s=e[o];if(s===0){a[o]=void 0;continue}if(this.relativeOffset=s,t){for(var x=this.parseOffset16List(),E=new Array(x.length),T=0;T<x.length;T++)this.relativeOffset=s+x[T],E[T]=t.call(this);a[o]=E}else a[o]=this.parseUShortList()}return this.relativeOffset=n,a};te.prototype.parseCoverage=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort(),r=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(r)};if(e===2){for(var n=new Array(r),a=0;a<r;a++)n[a]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:n}}throw new Error("0x"+t.toString(16)+": Coverage format must be 1 or 2.")};te.prototype.parseClassDef=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:te.uShort,end:te.uShort,classId:te.uShort})};throw new Error("0x"+t.toString(16)+": ClassDef format must be 1 or 2.")};te.list=function(t,e){return function(){return this.parseList(t,e)}};te.list32=function(t,e){return function(){return this.parseList32(t,e)}};te.recordList=function(t,e){return function(){return this.parseRecordList(t,e)}};te.recordList32=function(t,e){return function(){return this.parseRecordList32(t,e)}};te.pointer=function(t){return function(){return this.parsePointer(t)}};te.pointer32=function(t){return function(){return this.parsePointer32(t)}};te.tag=te.prototype.parseTag;te.byte=te.prototype.parseByte;te.uShort=te.offset16=te.prototype.parseUShort;te.uShortList=te.prototype.parseUShortList;te.uLong=te.offset32=te.prototype.parseULong;te.uLongList=te.prototype.parseULongList;te.struct=te.prototype.parseStruct;te.coverage=te.prototype.parseCoverage;te.classDef=te.prototype.parseClassDef;var EA={reserved:te.uShort,reqFeatureIndex:te.uShort,featureIndexes:te.uShortList};te.prototype.parseScriptList=function(){return this.parsePointer(te.recordList({tag:te.tag,script:te.pointer({defaultLangSys:te.pointer(EA),langSysRecords:te.recordList({tag:te.tag,langSys:te.pointer(EA)})})}))||[]};te.prototype.parseFeatureList=function(){return this.parsePointer(te.recordList({tag:te.tag,feature:te.pointer({featureParams:te.offset16,lookupListIndexes:te.uShortList})}))||[]};te.prototype.parseLookupList=function(t){return this.parsePointer(te.list(te.pointer(function(){var e=this.parseUShort();Fe.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var r=this.parseUShort(),n=r&16;return{lookupType:e,lookupFlag:r,subtables:this.parseList(te.pointer(t[e])),markFilteringSet:n?this.parseUShort():void 0}})))||[]};te.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var t=this.parseUShort(),e=this.parseUShort();Fe.argument(t===1&&e<1,"GPOS/GSUB feature variations table unknown.");var r=this.parseRecordList32({conditionSetOffset:te.offset32,featureTableSubstitutionOffset:te.offset32});return r})||[]};var Re={getByte:xA,getCard8:xA,getUShort:Bi,getCard16:Bi,getShort:iE,getULong:Co,getFixed:q1,getTag:oE,getOffset:AE,getBytes:sE,bytesToString:lE,Parser:te};function EE(t,e){e.parseUShort(),t.length=e.parseULong(),t.language=e.parseULong();var r;t.groupCount=r=e.parseULong(),t.glyphIndexMap={};for(var n=0;n<r;n+=1)for(var a=e.parseULong(),o=e.parseULong(),s=e.parseULong(),x=a;x<=o;x+=1)t.glyphIndexMap[x]=s,s++}function LE(t,e,r,n,a){t.length=e.parseUShort(),t.language=e.parseUShort();var o;t.segCount=o=e.parseUShort()>>1,e.skip("uShort",3),t.glyphIndexMap={};for(var s=new Re.Parser(r,n+a+14),x=new Re.Parser(r,n+a+16+o*2),E=new Re.Parser(r,n+a+16+o*4),T=new Re.Parser(r,n+a+16+o*6),p=n+a+16+o*8,R=0;R<o-1;R+=1)for(var N=void 0,g=s.parseUShort(),K=x.parseUShort(),Y=E.parseShort(),V=T.parseUShort(),_=K;_<=g;_+=1)V!==0?(p=T.offset+T.relativeOffset-2,p+=V,p+=(_-K)*2,N=Re.getUShort(r,p),N!==0&&(N=N+Y&65535)):N=_+Y&65535,t.glyphIndexMap[_]=N}function hE(t,e){var r={};r.version=Re.getUShort(t,e),Fe.argument(r.version===0,"cmap table version should be 0."),r.numTables=Re.getUShort(t,e+2);for(var n=-1,a=r.numTables-1;a>=0;a-=1){var o=Re.getUShort(t,e+4+a*8),s=Re.getUShort(t,e+4+a*8+2);if(o===3&&(s===0||s===1||s===10)||o===0&&(s===0||s===1||s===2||s===3||s===4)){n=Re.getULong(t,e+4+a*8+4);break}}if(n===-1)throw new Error("No valid cmap sub-tables found.");var x=new Re.Parser(t,e+n);if(r.format=x.parseUShort(),r.format===12)EE(r,x);else if(r.format===4)LE(r,x,t,e,n);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+r.format+").");return r}function cE(t,e,r){t.segments.push({end:e,start:e,delta:-(e-r),offset:0,glyphIndex:r})}function TE(t){t.segments.push({end:65535,start:65535,delta:1,offset:0})}function IE(t){var e=!0,r;for(r=t.length-1;r>0;r-=1){var n=t.get(r);if(n.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var a=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(a=a.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),a=a.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var o=new Ce.Table("cmap",a);for(o.segments=[],r=0;r<t.length;r+=1){for(var s=t.get(r),x=0;x<s.unicodes.length;x+=1)cE(o,s.unicodes[x],r);o.segments=o.segments.sort(function($,Q){return $.start-Q.start})}TE(o);var E=o.segments.length,T=0,p=[],R=[],N=[],g=[],K=[],Y=[];for(r=0;r<E;r+=1){var V=o.segments[r];V.end<=65535&&V.start<=65535?(p=p.concat({name:"end_"+r,type:"USHORT",value:V.end}),R=R.concat({name:"start_"+r,type:"USHORT",value:V.start}),N=N.concat({name:"idDelta_"+r,type:"SHORT",value:V.delta}),g=g.concat({name:"idRangeOffset_"+r,type:"USHORT",value:V.offset}),V.glyphId!==void 0&&(K=K.concat({name:"glyph_"+r,type:"USHORT",value:V.glyphId}))):T+=1,!e&&V.glyphIndex!==void 0&&(Y=Y.concat({name:"cmap12Start_"+r,type:"ULONG",value:V.start}),Y=Y.concat({name:"cmap12End_"+r,type:"ULONG",value:V.end}),Y=Y.concat({name:"cmap12Glyph_"+r,type:"ULONG",value:V.glyphIndex}))}if(o.segCountX2=(E-T)*2,o.searchRange=Math.pow(2,Math.floor(Math.log(E-T)/Math.log(2)))*2,o.entrySelector=Math.log(o.searchRange/2)/Math.log(2),o.rangeShift=o.segCountX2-o.searchRange,o.fields=o.fields.concat(p),o.fields.push({name:"reservedPad",type:"USHORT",value:0}),o.fields=o.fields.concat(R),o.fields=o.fields.concat(N),o.fields=o.fields.concat(g),o.fields=o.fields.concat(K),o.cmap4Length=14+p.length*2+2+R.length*2+N.length*2+g.length*2+K.length*2,!e){var _=16+Y.length*4;o.cmap12Offset=12+2*2+4+o.cmap4Length,o.fields=o.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:_},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:Y.length/3}]),o.fields=o.fields.concat(Y)}return o}var $1={parse:hE,make:IE},di=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],dE=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],uE=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Nn=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function es(t){this.font=t}es.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),r=this.font.glyphs;if(r){for(var n=0;n<r.length;n+=1)for(var a=r.get(n),o=0;o<a.unicodes.length;o+=1)if(a.unicodes[o]===e)return n}return null};function ts(t){this.cmap=t}ts.prototype.charToGlyphIndex=function(t){return this.cmap.glyphIndexMap[t.codePointAt(0)]||0};function Hi(t,e){this.encoding=t,this.charset=e}Hi.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),r=this.encoding[e];return this.charset.indexOf(r)};function go(t){switch(t.version){case 1:this.names=Nn.slice();break;case 2:this.names=new Array(t.numberOfGlyphs);for(var e=0;e<t.numberOfGlyphs;e++)t.glyphNameIndex[e]<Nn.length?this.names[e]=Nn[t.glyphNameIndex[e]]:this.names[e]=t.names[t.glyphNameIndex[e]-Nn.length];break;case 2.5:this.names=new Array(t.numberOfGlyphs);for(var r=0;r<t.numberOfGlyphs;r++)this.names[r]=Nn[r+t.glyphNameIndex[r]];break;case 3:this.names=[];break;default:this.names=[];break}}go.prototype.nameToGlyphIndex=function(t){return this.names.indexOf(t)};go.prototype.glyphIndexToName=function(t){return this.names[t]};function pE(t){for(var e,r=t.tables.cmap.glyphIndexMap,n=Object.keys(r),a=0;a<n.length;a+=1){var o=n[a],s=r[o];e=t.glyphs.get(s),e.addUnicode(parseInt(o))}for(var x=0;x<t.glyphs.length;x+=1)e=t.glyphs.get(x),t.cffEncoding?t.isCIDFont?e.name="gid"+x:e.name=t.cffEncoding.charset[x]:t.glyphNames.names&&(e.name=t.glyphNames.glyphIndexToName(x))}function SE(t){t._IndexToUnicodeMap={};for(var e=t.tables.cmap.glyphIndexMap,r=Object.keys(e),n=0;n<r.length;n+=1){var a=r[n],o=e[a];t._IndexToUnicodeMap[o]===void 0?t._IndexToUnicodeMap[o]={unicodes:[parseInt(a)]}:t._IndexToUnicodeMap[o].unicodes.push(parseInt(a))}}function CE(t,e){e.lowMemory?SE(t):pE(t)}function gE(t,e,r,n,a){t.beginPath(),t.moveTo(e,r),t.lineTo(n,a),t.stroke()}var Rn={line:gE};function RE(t,e){var r=e||new Mt;return{configurable:!0,get:function(){return typeof r=="function"&&(r=r()),r},set:function(n){r=n}}}function Er(t){this.bindConstructorValues(t)}Er.prototype.bindConstructorValues=function(t){this.index=t.index||0,this.name=t.name||null,this.unicode=t.unicode||void 0,this.unicodes=t.unicodes||t.unicode!==void 0?[t.unicode]:[],"xMin"in t&&(this.xMin=t.xMin),"yMin"in t&&(this.yMin=t.yMin),"xMax"in t&&(this.xMax=t.xMax),"yMax"in t&&(this.yMax=t.yMax),"advanceWidth"in t&&(this.advanceWidth=t.advanceWidth),Object.defineProperty(this,"path",RE(this,t.path))};Er.prototype.addUnicode=function(t){this.unicodes.length===0&&(this.unicode=t),this.unicodes.push(t)};Er.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};Er.prototype.getPath=function(t,e,r,n,a){t=t!==void 0?t:0,e=e!==void 0?e:0,r=r!==void 0?r:72;var o,s;n||(n={});var x=n.xScale,E=n.yScale;if(n.hinting&&a&&a.hinting&&(s=this.path&&a.hinting.exec(this,r)),s)o=a.hinting.getCommands(s),t=Math.round(t),e=Math.round(e),x=E=1;else{o=this.path.commands;var T=1/(this.path.unitsPerEm||1e3)*r;x===void 0&&(x=T),E===void 0&&(E=T)}for(var p=new Mt,R=0;R<o.length;R+=1){var N=o[R];N.type==="M"?p.moveTo(t+N.x*x,e+-N.y*E):N.type==="L"?p.lineTo(t+N.x*x,e+-N.y*E):N.type==="Q"?p.quadraticCurveTo(t+N.x1*x,e+-N.y1*E,t+N.x*x,e+-N.y*E):N.type==="C"?p.curveTo(t+N.x1*x,e+-N.y1*E,t+N.x2*x,e+-N.y2*E,t+N.x*x,e+-N.y*E):N.type==="Z"&&p.closePath()}return p};Er.prototype.getContours=function(){if(this.points===void 0)return[];for(var t=[],e=[],r=0;r<this.points.length;r+=1){var n=this.points[r];e.push(n),n.lastPointOfContour&&(t.push(e),e=[])}return Fe.argument(e.length===0,"There are still points left in the current contour."),t};Er.prototype.getMetrics=function(){for(var t=this.path.commands,e=[],r=[],n=0;n<t.length;n+=1){var a=t[n];a.type!=="Z"&&(e.push(a.x),r.push(a.y)),(a.type==="Q"||a.type==="C")&&(e.push(a.x1),r.push(a.y1)),a.type==="C"&&(e.push(a.x2),r.push(a.y2))}var o={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,r),leftSideBearing:this.leftSideBearing};return isFinite(o.xMin)||(o.xMin=0),isFinite(o.xMax)||(o.xMax=this.advanceWidth),isFinite(o.yMin)||(o.yMin=0),isFinite(o.yMax)||(o.yMax=0),o.rightSideBearing=this.advanceWidth-o.leftSideBearing-(o.xMax-o.xMin),o};Er.prototype.draw=function(t,e,r,n,a){this.getPath(e,r,n,a).draw(t)};Er.prototype.drawPoints=function(t,e,r,n){function a(R,N,g,K){t.beginPath();for(var Y=0;Y<R.length;Y+=1)t.moveTo(N+R[Y].x*K,g+R[Y].y*K),t.arc(N+R[Y].x*K,g+R[Y].y*K,2,0,Math.PI*2,!1);t.closePath(),t.fill()}e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:24;for(var o=1/this.path.unitsPerEm*n,s=[],x=[],E=this.path,T=0;T<E.commands.length;T+=1){var p=E.commands[T];p.x!==void 0&&s.push({x:p.x,y:-p.y}),p.x1!==void 0&&x.push({x:p.x1,y:-p.y1}),p.x2!==void 0&&x.push({x:p.x2,y:-p.y2})}t.fillStyle="blue",a(s,e,r,o),t.fillStyle="red",a(x,e,r,o)};Er.prototype.drawMetrics=function(t,e,r,n){var a;e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:24,a=1/this.path.unitsPerEm*n,t.lineWidth=1,t.strokeStyle="black",Rn.line(t,e,-1e4,e,1e4),Rn.line(t,-1e4,r,1e4,r);var o=this.xMin||0,s=this.yMin||0,x=this.xMax||0,E=this.yMax||0,T=this.advanceWidth||0;t.strokeStyle="blue",Rn.line(t,e+o*a,-1e4,e+o*a,1e4),Rn.line(t,e+x*a,-1e4,e+x*a,1e4),Rn.line(t,-1e4,r+-s*a,1e4,r+-s*a),Rn.line(t,-1e4,r+-E*a,1e4,r+-E*a),t.strokeStyle="green",Rn.line(t,e+T*a,-1e4,e+T*a,1e4)};function li(t,e,r){Object.defineProperty(t,e,{get:function(){return t.path,t[r]},set:function(n){t[r]=n},enumerable:!0,configurable:!0})}function Ro(t,e){if(this.font=t,this.glyphs={},Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];n.path.unitsPerEm=t.unitsPerEm,this.glyphs[r]=n}this.length=e&&e.length||0}Ro.prototype.get=function(t){if(this.glyphs[t]===void 0){this.font._push(t),typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());var e=this.glyphs[t],r=this.font._IndexToUnicodeMap[t];if(r)for(var n=0;n<r.unicodes.length;n++)e.addUnicode(r.unicodes[n]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+t:e.name=this.font.cffEncoding.charset[t]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(t)),this.glyphs[t].advanceWidth=this.font._hmtxTableData[t].advanceWidth,this.glyphs[t].leftSideBearing=this.font._hmtxTableData[t].leftSideBearing}else typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());return this.glyphs[t]};Ro.prototype.push=function(t,e){this.glyphs[t]=e,this.length++};function yE(t,e){return new Er({index:e,font:t})}function mE(t,e,r,n,a,o){return function(){var s=new Er({index:e,font:t});return s.path=function(){r(s,n,a);var x=o(t.glyphs,s);return x.unitsPerEm=t.unitsPerEm,x},li(s,"xMin","_xMin"),li(s,"xMax","_xMax"),li(s,"yMin","_yMin"),li(s,"yMax","_yMax"),s}}function NE(t,e,r,n){return function(){var a=new Er({index:e,font:t});return a.path=function(){var o=r(t,a,n);return o.unitsPerEm=t.unitsPerEm,o},a}}var Ur={GlyphSet:Ro,glyphLoader:yE,ttfGlyphLoader:mE,cffGlyphLoader:NE};function rs(t,e){if(t===e)return!0;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r+=1)if(!rs(t[r],e[r]))return!1;return!0}else return!1}function k0(t){var e;return t.length<1240?e=107:t.length<33900?e=1131:e=32768,e}function sn(t,e,r){var n=[],a=[],o=Re.getCard16(t,e),s,x;if(o!==0){var E=Re.getByte(t,e+2);s=e+(o+1)*E+2;for(var T=e+3,p=0;p<o+1;p+=1)n.push(Re.getOffset(t,T,E)),T+=E;x=s+n[o]}else x=e+2;for(var R=0;R<n.length-1;R+=1){var N=Re.getBytes(t,s+n[R],s+n[R+1]);r&&(N=r(N)),a.push(N)}return{objects:a,startOffset:e,endOffset:x}}function DE(t,e){var r=[],n=Re.getCard16(t,e),a,o;if(n!==0){var s=Re.getByte(t,e+2);a=e+(n+1)*s+2;for(var x=e+3,E=0;E<n+1;E+=1)r.push(Re.getOffset(t,x,s)),x+=s;o=a+r[n]}else o=e+2;return{offsets:r,startOffset:e,endOffset:o}}function fE(t,e,r,n,a){var o=Re.getCard16(r,n),s=0;if(o!==0){var x=Re.getByte(r,n+2);s=n+(o+1)*x+2}var E=Re.getBytes(r,s+e[t],s+e[t+1]);return a&&(E=a(E)),E}function OE(t){for(var e="",r=15,n=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var a=t.parseByte(),o=a>>4,s=a&15;if(o===r||(e+=n[o],s===r))break;e+=n[s]}return parseFloat(e)}function BE(t,e){var r,n,a,o;if(e===28)return r=t.parseByte(),n=t.parseByte(),r<<8|n;if(e===29)return r=t.parseByte(),n=t.parseByte(),a=t.parseByte(),o=t.parseByte(),r<<24|n<<16|a<<8|o;if(e===30)return OE(t);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return r=t.parseByte(),(e-247)*256+r+108;if(e>=251&&e<=254)return r=t.parseByte(),-(e-251)*256-r-108;throw new Error("Invalid b0 "+e)}function HE(t){for(var e={},r=0;r<t.length;r+=1){var n=t[r][0],a=t[r][1],o=void 0;if(a.length===1?o=a[0]:o=a,e.hasOwnProperty(n)&&!isNaN(e[n]))throw new Error("Object "+e+" already has key "+n);e[n]=o}return e}function ns(t,e,r){e=e!==void 0?e:0;var n=new Re.Parser(t,e),a=[],o=[];for(r=r!==void 0?r:t.length;n.relativeOffset<r;){var s=n.parseByte();s<=21?(s===12&&(s=1200+n.parseByte()),a.push([s,o]),o=[]):o.push(BE(n,s))}return HE(a)}function Ca(t,e){return e<=390?e=di[e]:e=t[e-391],e}function as(t,e,r){for(var n={},a,o=0;o<e.length;o+=1){var s=e[o];if(Array.isArray(s.type)){var x=[];x.length=s.type.length;for(var E=0;E<s.type.length;E++)a=t[s.op]!==void 0?t[s.op][E]:void 0,a===void 0&&(a=s.value!==void 0&&s.value[E]!==void 0?s.value[E]:null),s.type[E]==="SID"&&(a=Ca(r,a)),x[E]=a;n[s.name]=x}else a=t[s.op],a===void 0&&(a=s.value!==void 0?s.value:null),s.type==="SID"&&(a=Ca(r,a)),n[s.name]=a}return n}function FE(t,e){var r={};return r.formatMajor=Re.getCard8(t,e),r.formatMinor=Re.getCard8(t,e+1),r.size=Re.getCard8(t,e+2),r.offsetSize=Re.getCard8(t,e+3),r.startOffset=e,r.endOffset=e+4,r}var is=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],os=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function ME(t,e){var r=ns(t,0,t.byteLength);return as(r,is,e)}function As(t,e,r,n){var a=ns(t,e,r);return as(a,os,n)}function LA(t,e,r,n){for(var a=[],o=0;o<r.length;o+=1){var s=new DataView(new Uint8Array(r[o]).buffer),x=ME(s,n);x._subrs=[],x._subrsBias=0,x._defaultWidthX=0,x._nominalWidthX=0;var E=x.private[0],T=x.private[1];if(E!==0&&T!==0){var p=As(t,T+e,E,n);if(x._defaultWidthX=p.defaultWidthX,x._nominalWidthX=p.nominalWidthX,p.subrs!==0){var R=T+p.subrs,N=sn(t,R+e);x._subrs=N.objects,x._subrsBias=k0(x._subrs)}x._privateDict=p}a.push(x)}return a}function GE(t,e,r,n){var a,o,s=new Re.Parser(t,e);r-=1;var x=[".notdef"],E=s.parseCard8();if(E===0)for(var T=0;T<r;T+=1)a=s.parseSID(),x.push(Ca(n,a));else if(E===1)for(;x.length<=r;){a=s.parseSID(),o=s.parseCard8();for(var p=0;p<=o;p+=1)x.push(Ca(n,a)),a+=1}else if(E===2)for(;x.length<=r;){a=s.parseSID(),o=s.parseCard16();for(var R=0;R<=o;R+=1)x.push(Ca(n,a)),a+=1}else throw new Error("Unknown charset format "+E);return x}function PE(t,e,r){var n,a={},o=new Re.Parser(t,e),s=o.parseCard8();if(s===0)for(var x=o.parseCard8(),E=0;E<x;E+=1)n=o.parseCard8(),a[n]=E;else if(s===1){var T=o.parseCard8();n=1;for(var p=0;p<T;p+=1)for(var R=o.parseCard8(),N=o.parseCard8(),g=R;g<=R+N;g+=1)a[g]=n,n+=1}else throw new Error("Unknown encoding format "+s);return new Hi(a,r)}function hA(t,e,r){var n,a,o,s,x=new Mt,E=[],T=0,p=!1,R=!1,N=0,g=0,K,Y,V,_;if(t.isCIDFont){var $=t.tables.cff.topDict._fdSelect[e.index],Q=t.tables.cff.topDict._fdArray[$];K=Q._subrs,Y=Q._subrsBias,V=Q._defaultWidthX,_=Q._nominalWidthX}else K=t.tables.cff.topDict._subrs,Y=t.tables.cff.topDict._subrsBias,V=t.tables.cff.topDict._defaultWidthX,_=t.tables.cff.topDict._nominalWidthX;var Te=V;function he(pe,me){R&&x.closePath(),x.moveTo(pe,me),R=!0}function Ae(){var pe;pe=E.length%2!==0,pe&&!p&&(Te=E.shift()+_),T+=E.length>>1,E.length=0,p=!0}function ce(pe){for(var me,we,Ye,it,ot,Ie,ct,oe,qe,At,Oe,Et,Lt=0;Lt<pe.length;){var Gt=pe[Lt];switch(Lt+=1,Gt){case 1:Ae();break;case 3:Ae();break;case 4:E.length>1&&!p&&(Te=E.shift()+_,p=!0),g+=E.pop(),he(N,g);break;case 5:for(;E.length>0;)N+=E.shift(),g+=E.shift(),x.lineTo(N,g);break;case 6:for(;E.length>0&&(N+=E.shift(),x.lineTo(N,g),E.length!==0);)g+=E.shift(),x.lineTo(N,g);break;case 7:for(;E.length>0&&(g+=E.shift(),x.lineTo(N,g),E.length!==0);)N+=E.shift(),x.lineTo(N,g);break;case 8:for(;E.length>0;)n=N+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),N=o+E.shift(),g=s+E.shift(),x.curveTo(n,a,o,s,N,g);break;case 10:ot=E.pop()+Y,Ie=K[ot],Ie&&ce(Ie);break;case 11:return;case 12:switch(Gt=pe[Lt],Lt+=1,Gt){case 35:n=N+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),ct=o+E.shift(),oe=s+E.shift(),qe=ct+E.shift(),At=oe+E.shift(),Oe=qe+E.shift(),Et=At+E.shift(),N=Oe+E.shift(),g=Et+E.shift(),E.shift(),x.curveTo(n,a,o,s,ct,oe),x.curveTo(qe,At,Oe,Et,N,g);break;case 34:n=N+E.shift(),a=g,o=n+E.shift(),s=a+E.shift(),ct=o+E.shift(),oe=s,qe=ct+E.shift(),At=s,Oe=qe+E.shift(),Et=g,N=Oe+E.shift(),x.curveTo(n,a,o,s,ct,oe),x.curveTo(qe,At,Oe,Et,N,g);break;case 36:n=N+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),ct=o+E.shift(),oe=s,qe=ct+E.shift(),At=s,Oe=qe+E.shift(),Et=At+E.shift(),N=Oe+E.shift(),x.curveTo(n,a,o,s,ct,oe),x.curveTo(qe,At,Oe,Et,N,g);break;case 37:n=N+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),ct=o+E.shift(),oe=s+E.shift(),qe=ct+E.shift(),At=oe+E.shift(),Oe=qe+E.shift(),Et=At+E.shift(),Math.abs(Oe-N)>Math.abs(Et-g)?N=Oe+E.shift():g=Et+E.shift(),x.curveTo(n,a,o,s,ct,oe),x.curveTo(qe,At,Oe,Et,N,g);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+Gt),E.length=0}break;case 14:E.length>0&&!p&&(Te=E.shift()+_,p=!0),R&&(x.closePath(),R=!1);break;case 18:Ae();break;case 19:case 20:Ae(),Lt+=T+7>>3;break;case 21:E.length>2&&!p&&(Te=E.shift()+_,p=!0),g+=E.pop(),N+=E.pop(),he(N,g);break;case 22:E.length>1&&!p&&(Te=E.shift()+_,p=!0),N+=E.pop(),he(N,g);break;case 23:Ae();break;case 24:for(;E.length>2;)n=N+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),N=o+E.shift(),g=s+E.shift(),x.curveTo(n,a,o,s,N,g);N+=E.shift(),g+=E.shift(),x.lineTo(N,g);break;case 25:for(;E.length>6;)N+=E.shift(),g+=E.shift(),x.lineTo(N,g);n=N+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),N=o+E.shift(),g=s+E.shift(),x.curveTo(n,a,o,s,N,g);break;case 26:for(E.length%2&&(N+=E.shift());E.length>0;)n=N,a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),N=o,g=s+E.shift(),x.curveTo(n,a,o,s,N,g);break;case 27:for(E.length%2&&(g+=E.shift());E.length>0;)n=N+E.shift(),a=g,o=n+E.shift(),s=a+E.shift(),N=o+E.shift(),g=s,x.curveTo(n,a,o,s,N,g);break;case 28:me=pe[Lt],we=pe[Lt+1],E.push((me<<24|we<<16)>>16),Lt+=2;break;case 29:ot=E.pop()+t.gsubrsBias,Ie=t.gsubrs[ot],Ie&&ce(Ie);break;case 30:for(;E.length>0&&(n=N,a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),N=o+E.shift(),g=s+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,N,g),E.length!==0);)n=N+E.shift(),a=g,o=n+E.shift(),s=a+E.shift(),g=s+E.shift(),N=o+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,N,g);break;case 31:for(;E.length>0&&(n=N+E.shift(),a=g,o=n+E.shift(),s=a+E.shift(),g=s+E.shift(),N=o+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,N,g),E.length!==0);)n=N,a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),N=o+E.shift(),g=s+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,N,g);break;default:Gt<32?console.log("Glyph "+e.index+": unknown operator "+Gt):Gt<247?E.push(Gt-139):Gt<251?(me=pe[Lt],Lt+=1,E.push((Gt-247)*256+me+108)):Gt<255?(me=pe[Lt],Lt+=1,E.push(-(Gt-251)*256-me-108)):(me=pe[Lt],we=pe[Lt+1],Ye=pe[Lt+2],it=pe[Lt+3],Lt+=4,E.push((me<<24|we<<16|Ye<<8|it)/65536))}}}return ce(r),e.advanceWidth=Te,x}function bE(t,e,r,n){var a=[],o,s=new Re.Parser(t,e),x=s.parseCard8();if(x===0)for(var E=0;E<r;E++){if(o=s.parseCard8(),o>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+o+" (FD count "+n+")");a.push(o)}else if(x===3){var T=s.parseCard16(),p=s.parseCard16();if(p!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+p);for(var R,N=0;N<T;N++){if(o=s.parseCard8(),R=s.parseCard16(),o>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+o+" (FD count "+n+")");if(R>r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+R);for(;p<R;p++)a.push(o);p=R}if(R!==r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+R)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+x);return a}function vE(t,e,r,n){r.tables.cff={};var a=FE(t,e),o=sn(t,a.endOffset,Re.bytesToString),s=sn(t,o.endOffset),x=sn(t,s.endOffset,Re.bytesToString),E=sn(t,x.endOffset);r.gsubrs=E.objects,r.gsubrsBias=k0(r.gsubrs);var T=LA(t,e,s.objects,x.objects);if(T.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+T.length);var p=T[0];if(r.tables.cff.topDict=p,p._privateDict&&(r.defaultWidthX=p._privateDict.defaultWidthX,r.nominalWidthX=p._privateDict.nominalWidthX),p.ros[0]!==void 0&&p.ros[1]!==void 0&&(r.isCIDFont=!0),r.isCIDFont){var R=p.fdArray,N=p.fdSelect;if(R===0||N===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");R+=e;var g=sn(t,R),K=LA(t,e,g.objects,x.objects);p._fdArray=K,N+=e,p._fdSelect=bE(t,N,r.numGlyphs,K.length)}var Y=e+p.private[1],V=As(t,Y,p.private[0],x.objects);if(r.defaultWidthX=V.defaultWidthX,r.nominalWidthX=V.nominalWidthX,V.subrs!==0){var _=Y+V.subrs,$=sn(t,_);r.subrs=$.objects,r.subrsBias=k0(r.subrs)}else r.subrs=[],r.subrsBias=0;var Q;n.lowMemory?(Q=DE(t,e+p.charStrings),r.nGlyphs=Q.offsets.length):(Q=sn(t,e+p.charStrings),r.nGlyphs=Q.objects.length);var Te=GE(t,e+p.charset,r.nGlyphs,x.objects);if(p.encoding===0?r.cffEncoding=new Hi(dE,Te):p.encoding===1?r.cffEncoding=new Hi(uE,Te):r.cffEncoding=PE(t,e+p.encoding,Te),r.encoding=r.encoding||r.cffEncoding,r.glyphs=new Ur.GlyphSet(r),n.lowMemory)r._push=function(ce){var pe=fE(ce,Q.offsets,t,e+p.charStrings);r.glyphs.push(ce,Ur.cffGlyphLoader(r,ce,hA,pe))};else for(var he=0;he<r.nGlyphs;he+=1){var Ae=Q.objects[he];r.glyphs.push(he,Ur.cffGlyphLoader(r,he,hA,Ae))}}function ss(t,e){var r,n=di.indexOf(t);return n>=0&&(r=n),n=e.indexOf(t),n>=0?r=n+di.length:(r=di.length+e.length,e.push(t)),r}function UE(){return new Ce.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function wE(t){var e=new Ce.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var r=0;r<t.length;r+=1)e.names.push({name:"name_"+r,type:"NAME",value:t[r]});return e}function ls(t,e,r){for(var n={},a=0;a<t.length;a+=1){var o=t[a],s=e[o.name];s!==void 0&&!rs(s,o.value)&&(o.type==="SID"&&(s=ss(s,r)),n[o.op]={name:o.name,type:o.type,value:s})}return n}function cA(t,e){var r=new Ce.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=ls(is,t,e),r}function TA(t){var e=new Ce.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:t}],e}function YE(t){var e=new Ce.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var r=0;r<t.length;r+=1)e.strings.push({name:"string_"+r,type:"STRING",value:t[r]});return e}function WE(){return new Ce.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function kE(t,e){for(var r=new Ce.Record("Charsets",[{name:"format",type:"Card8",value:0}]),n=0;n<t.length;n+=1){var a=t[n],o=ss(a,e);r.fields.push({name:"glyph_"+n,type:"SID",value:o})}return r}function KE(t){var e=[],r=t.path;e.push({name:"width",type:"NUMBER",value:t.advanceWidth});for(var n=0,a=0,o=0;o<r.commands.length;o+=1){var s=void 0,x=void 0,E=r.commands[o];if(E.type==="Q"){var T=.3333333333333333,p=2/3;E={type:"C",x:E.x,y:E.y,x1:Math.round(T*n+p*E.x1),y1:Math.round(T*a+p*E.y1),x2:Math.round(T*E.x+p*E.x1),y2:Math.round(T*E.y+p*E.y1)}}if(E.type==="M")s=Math.round(E.x-n),x=Math.round(E.y-a),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rmoveto",type:"OP",value:21}),n=Math.round(E.x),a=Math.round(E.y);else if(E.type==="L")s=Math.round(E.x-n),x=Math.round(E.y-a),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rlineto",type:"OP",value:5}),n=Math.round(E.x),a=Math.round(E.y);else if(E.type==="C"){var R=Math.round(E.x1-n),N=Math.round(E.y1-a),g=Math.round(E.x2-E.x1),K=Math.round(E.y2-E.y1);s=Math.round(E.x-E.x2),x=Math.round(E.y-E.y2),e.push({name:"dx1",type:"NUMBER",value:R}),e.push({name:"dy1",type:"NUMBER",value:N}),e.push({name:"dx2",type:"NUMBER",value:g}),e.push({name:"dy2",type:"NUMBER",value:K}),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rrcurveto",type:"OP",value:8}),n=Math.round(E.x),a=Math.round(E.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function _E(t){for(var e=new Ce.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),r=0;r<t.length;r+=1){var n=t.get(r),a=KE(n);e.charStrings.push({name:n.name,type:"CHARSTRING",value:a})}return e}function VE(t,e){var r=new Ce.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=ls(os,t,e),r}function JE(t,e){for(var r=new Ce.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),n=1/e.unitsPerEm,a={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[n,0,0,n,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},o={},s=[],x,E=1;E<t.length;E+=1)x=t.get(E),s.push(x.name);var T=[];r.header=UE(),r.nameIndex=wE([e.postScriptName]);var p=cA(a,T);r.topDictIndex=TA(p),r.globalSubrIndex=WE(),r.charsets=kE(s,T),r.charStringsIndex=_E(t),r.privateDict=VE(o,T),r.stringIndex=YE(T);var R=r.header.sizeOf()+r.nameIndex.sizeOf()+r.topDictIndex.sizeOf()+r.stringIndex.sizeOf()+r.globalSubrIndex.sizeOf();return a.charset=R,a.encoding=0,a.charStrings=a.charset+r.charsets.sizeOf(),a.private[1]=a.charStrings+r.charStringsIndex.sizeOf(),p=cA(a,T),r.topDictIndex=TA(p),r}var xs={parse:vE,make:JE};function zE(t,e){var r={},n=new Re.Parser(t,e);return r.version=n.parseVersion(),r.fontRevision=Math.round(n.parseFixed()*1e3)/1e3,r.checkSumAdjustment=n.parseULong(),r.magicNumber=n.parseULong(),Fe.argument(r.magicNumber===1594834165,"Font header has wrong magic number."),r.flags=n.parseUShort(),r.unitsPerEm=n.parseUShort(),r.created=n.parseLongDateTime(),r.modified=n.parseLongDateTime(),r.xMin=n.parseShort(),r.yMin=n.parseShort(),r.xMax=n.parseShort(),r.yMax=n.parseShort(),r.macStyle=n.parseUShort(),r.lowestRecPPEM=n.parseUShort(),r.fontDirectionHint=n.parseShort(),r.indexToLocFormat=n.parseShort(),r.glyphDataFormat=n.parseShort(),r}function ZE(t){var e=Math.round(new Date().getTime()/1e3)+2082844800,r=e;return t.createdTimestamp&&(r=t.createdTimestamp+2082844800),new Ce.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:r},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],t)}var Es={parse:zE,make:ZE};function XE(t,e){var r={},n=new Re.Parser(t,e);return r.version=n.parseVersion(),r.ascender=n.parseShort(),r.descender=n.parseShort(),r.lineGap=n.parseShort(),r.advanceWidthMax=n.parseUShort(),r.minLeftSideBearing=n.parseShort(),r.minRightSideBearing=n.parseShort(),r.xMaxExtent=n.parseShort(),r.caretSlopeRise=n.parseShort(),r.caretSlopeRun=n.parseShort(),r.caretOffset=n.parseShort(),n.relativeOffset+=8,r.metricDataFormat=n.parseShort(),r.numberOfHMetrics=n.parseUShort(),r}function jE(t){return new Ce.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],t)}var Ls={parse:XE,make:jE};function QE(t,e,r,n,a){for(var o,s,x=new Re.Parser(t,e),E=0;E<n;E+=1){E<r&&(o=x.parseUShort(),s=x.parseShort());var T=a.get(E);T.advanceWidth=o,T.leftSideBearing=s}}function qE(t,e,r,n,a){t._hmtxTableData={};for(var o,s,x=new Re.Parser(e,r),E=0;E<a;E+=1)E<n&&(o=x.parseUShort(),s=x.parseShort()),t._hmtxTableData[E]={advanceWidth:o,leftSideBearing:s}}function $E(t,e,r,n,a,o,s){s.lowMemory?qE(t,e,r,n,a):QE(e,r,n,a,o)}function eL(t){for(var e=new Ce.Table("hmtx",[]),r=0;r<t.length;r+=1){var n=t.get(r),a=n.advanceWidth||0,o=n.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+r,type:"USHORT",value:a}),e.fields.push({name:"leftSideBearing_"+r,type:"SHORT",value:o})}return e}var hs={parse:$E,make:eL};function tL(t){for(var e=new Ce.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:t.length}]),r="",n=12+t.length*4,a=0;a<t.length;++a){var o=r.indexOf(t[a]);o<0&&(o=r.length,r+=t[a]),e.fields.push({name:"offset "+a,type:"USHORT",value:n+o}),e.fields.push({name:"length "+a,type:"USHORT",value:t[a].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),e}function rL(t,e){var r=new Re.Parser(t,e),n=r.parseULong();Fe.argument(n===1,"Unsupported ltag table version."),r.skip("uLong",1);for(var a=r.parseULong(),o=[],s=0;s<a;s++){for(var x="",E=e+r.parseUShort(),T=r.parseUShort(),p=E;p<E+T;++p)x+=String.fromCharCode(t.getInt8(p));o.push(x)}return o}var cs={make:tL,parse:rL};function nL(t,e){var r={},n=new Re.Parser(t,e);return r.version=n.parseVersion(),r.numGlyphs=n.parseUShort(),r.version===1&&(r.maxPoints=n.parseUShort(),r.maxContours=n.parseUShort(),r.maxCompositePoints=n.parseUShort(),r.maxCompositeContours=n.parseUShort(),r.maxZones=n.parseUShort(),r.maxTwilightPoints=n.parseUShort(),r.maxStorage=n.parseUShort(),r.maxFunctionDefs=n.parseUShort(),r.maxInstructionDefs=n.parseUShort(),r.maxStackElements=n.parseUShort(),r.maxSizeOfInstructions=n.parseUShort(),r.maxComponentElements=n.parseUShort(),r.maxComponentDepth=n.parseUShort()),r}function aL(t){return new Ce.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:t}])}var Ts={parse:nL,make:aL},Is=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],ds={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},iL={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},us={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function oL(t,e,r){switch(t){case 0:if(e===65535)return"und";if(r)return r[e];break;case 1:return ds[e];case 3:return us[e]}}var K0="utf-16",AL={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},sL={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function ps(t,e,r){switch(t){case 0:return K0;case 1:return sL[r]||AL[e];case 3:if(e===1||e===10)return K0;break}}function lL(t,e,r){for(var n={},a=new Re.Parser(t,e),o=a.parseUShort(),s=a.parseUShort(),x=a.offset+a.parseUShort(),E=0;E<s;E++){var T=a.parseUShort(),p=a.parseUShort(),R=a.parseUShort(),N=a.parseUShort(),g=Is[N]||N,K=a.parseUShort(),Y=a.parseUShort(),V=oL(T,R,r),_=ps(T,p,R);if(_!==void 0&&V!==void 0){var $=void 0;if(_===K0?$=ra.UTF16(t,x+Y,K):$=ra.MACSTRING(t,x+Y,K,_),$){var Q=n[g];Q===void 0&&(Q=n[g]={}),Q[V]=$}}}return o===1&&a.parseUShort(),n}function h0(t){var e={};for(var r in t)e[t[r]]=parseInt(r);return e}function IA(t,e,r,n,a,o){return new Ce.Record("NameRecord",[{name:"platformID",type:"USHORT",value:t},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:r},{name:"nameID",type:"USHORT",value:n},{name:"length",type:"USHORT",value:a},{name:"offset",type:"USHORT",value:o}])}function xL(t,e){var r=t.length,n=e.length-r+1;e:for(var a=0;a<n;a++)for(;a<n;a++){for(var o=0;o<r;o++)if(e[a+o]!==t[o])continue e;return a}return-1}function dA(t,e){var r=xL(t,e);if(r<0){r=e.length;for(var n=0,a=t.length;n<a;++n)e.push(t[n])}return r}function EL(t,e){var r,n=[],a={},o=h0(Is);for(var s in t){var x=o[s];if(x===void 0&&(x=s),r=parseInt(x),isNaN(r))throw new Error('Name table entry "'+s+'" does not exist, see nameTableNames for complete list.');a[r]=t[s],n.push(r)}for(var E=h0(ds),T=h0(us),p=[],R=[],N=0;N<n.length;N++){r=n[N];var g=a[r];for(var K in g){var Y=g[K],V=1,_=E[K],$=iL[_],Q=ps(V,$,_),Te=ue.MACSTRING(Y,Q);Te===void 0&&(V=0,_=e.indexOf(K),_<0&&(_=e.length,e.push(K)),$=4,Te=ue.UTF16(Y));var he=dA(Te,R);p.push(IA(V,$,_,r,Te.length,he));var Ae=T[K];if(Ae!==void 0){var ce=ue.UTF16(Y),pe=dA(ce,R);p.push(IA(3,1,Ae,r,ce.length,pe))}}}p.sort(function(Ye,it){return Ye.platformID-it.platformID||Ye.encodingID-it.encodingID||Ye.languageID-it.languageID||Ye.nameID-it.nameID});for(var me=new Ce.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:p.length},{name:"stringOffset",type:"USHORT",value:6+p.length*12}]),we=0;we<p.length;we++)me.fields.push({name:"record_"+we,type:"RECORD",value:p[we]});return me.fields.push({name:"strings",type:"LITERAL",value:R}),me}var Ss={parse:lL,make:EL},_0=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function LL(t){for(var e=0;e<_0.length;e+=1){var r=_0[e];if(t>=r.begin&&t<r.end)return e}return-1}function hL(t,e){var r={},n=new Re.Parser(t,e);r.version=n.parseUShort(),r.xAvgCharWidth=n.parseShort(),r.usWeightClass=n.parseUShort(),r.usWidthClass=n.parseUShort(),r.fsType=n.parseUShort(),r.ySubscriptXSize=n.parseShort(),r.ySubscriptYSize=n.parseShort(),r.ySubscriptXOffset=n.parseShort(),r.ySubscriptYOffset=n.parseShort(),r.ySuperscriptXSize=n.parseShort(),r.ySuperscriptYSize=n.parseShort(),r.ySuperscriptXOffset=n.parseShort(),r.ySuperscriptYOffset=n.parseShort(),r.yStrikeoutSize=n.parseShort(),r.yStrikeoutPosition=n.parseShort(),r.sFamilyClass=n.parseShort(),r.panose=[];for(var a=0;a<10;a++)r.panose[a]=n.parseByte();return r.ulUnicodeRange1=n.parseULong(),r.ulUnicodeRange2=n.parseULong(),r.ulUnicodeRange3=n.parseULong(),r.ulUnicodeRange4=n.parseULong(),r.achVendID=String.fromCharCode(n.parseByte(),n.parseByte(),n.parseByte(),n.parseByte()),r.fsSelection=n.parseUShort(),r.usFirstCharIndex=n.parseUShort(),r.usLastCharIndex=n.parseUShort(),r.sTypoAscender=n.parseShort(),r.sTypoDescender=n.parseShort(),r.sTypoLineGap=n.parseShort(),r.usWinAscent=n.parseUShort(),r.usWinDescent=n.parseUShort(),r.version>=1&&(r.ulCodePageRange1=n.parseULong(),r.ulCodePageRange2=n.parseULong()),r.version>=2&&(r.sxHeight=n.parseShort(),r.sCapHeight=n.parseShort(),r.usDefaultChar=n.parseUShort(),r.usBreakChar=n.parseUShort(),r.usMaxContent=n.parseUShort()),r}function cL(t){return new Ce.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],t)}var V0={parse:hL,make:cL,unicodeRanges:_0,getUnicodeRange:LL};function TL(t,e){var r={},n=new Re.Parser(t,e);switch(r.version=n.parseVersion(),r.italicAngle=n.parseFixed(),r.underlinePosition=n.parseShort(),r.underlineThickness=n.parseShort(),r.isFixedPitch=n.parseULong(),r.minMemType42=n.parseULong(),r.maxMemType42=n.parseULong(),r.minMemType1=n.parseULong(),r.maxMemType1=n.parseULong(),r.version){case 1:r.names=Nn.slice();break;case 2:r.numberOfGlyphs=n.parseUShort(),r.glyphNameIndex=new Array(r.numberOfGlyphs);for(var a=0;a<r.numberOfGlyphs;a++)r.glyphNameIndex[a]=n.parseUShort();r.names=[];for(var o=0;o<r.numberOfGlyphs;o++)if(r.glyphNameIndex[o]>=Nn.length){var s=n.parseChar();r.names.push(n.parseString(s))}break;case 2.5:r.numberOfGlyphs=n.parseUShort(),r.offset=new Array(r.numberOfGlyphs);for(var x=0;x<r.numberOfGlyphs;x++)r.offset[x]=n.parseChar();break}return r}function IL(){return new Ce.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var Cs={parse:TL,make:IL},Rr=new Array(9);Rr[1]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(te.coverage),deltaGlyphId:this.parseUShort()};if(r===2)return{substFormat:2,coverage:this.parsePointer(te.coverage),substitute:this.parseOffset16List()};Fe.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};Rr[2]=function(){var e=this.parseUShort();return Fe.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),sequences:this.parseListOfLists()}};Rr[3]=function(){var e=this.parseUShort();return Fe.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),alternateSets:this.parseListOfLists()}};Rr[4]=function(){var e=this.parseUShort();return Fe.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var jn={sequenceIndex:te.uShort,lookupListIndex:te.uShort};Rr[5]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:r,coverage:this.parsePointer(te.coverage),ruleSets:this.parseListOfLists(function(){var o=this.parseUShort(),s=this.parseUShort();return{input:this.parseUShortList(o-1),lookupRecords:this.parseRecordList(s,jn)}})};if(r===2)return{substFormat:r,coverage:this.parsePointer(te.coverage),classDef:this.parsePointer(te.classDef),classSets:this.parseListOfLists(function(){var o=this.parseUShort(),s=this.parseUShort();return{classes:this.parseUShortList(o-1),lookupRecords:this.parseRecordList(s,jn)}})};if(r===3){var n=this.parseUShort(),a=this.parseUShort();return{substFormat:r,coverages:this.parseList(n,te.pointer(te.coverage)),lookupRecords:this.parseRecordList(a,jn)}}Fe.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};Rr[6]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(te.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(jn)}})};if(r===2)return{substFormat:2,coverage:this.parsePointer(te.coverage),backtrackClassDef:this.parsePointer(te.classDef),inputClassDef:this.parsePointer(te.classDef),lookaheadClassDef:this.parsePointer(te.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(jn)}})};if(r===3)return{substFormat:3,backtrackCoverage:this.parseList(te.pointer(te.coverage)),inputCoverage:this.parseList(te.pointer(te.coverage)),lookaheadCoverage:this.parseList(te.pointer(te.coverage)),lookupRecords:this.parseRecordList(jn)};Fe.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};Rr[7]=function(){var e=this.parseUShort();Fe.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var r=this.parseUShort(),n=new te(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:r,extension:Rr[r].call(n)}};Rr[8]=function(){var e=this.parseUShort();return Fe.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),backtrackCoverage:this.parseList(te.pointer(te.coverage)),lookaheadCoverage:this.parseList(te.pointer(te.coverage)),substitutes:this.parseUShortList()}};function dL(t,e){e=e||0;var r=new te(t,e),n=r.parseVersion(1);return Fe.argument(n===1||n===1.1,"Unsupported GSUB table version."),n===1?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Rr)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Rr),variations:r.parseFeatureVariationsList()}}var la=new Array(9);la[1]=function(e){return e.substFormat===1?new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.ushortList("substitute",e.substitute)))};la[2]=function(e){return Fe.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.tableList("seqSet",e.sequences,function(r){return new Ce.Table("sequenceSetTable",Ce.ushortList("sequence",r))})))};la[3]=function(e){return Fe.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.tableList("altSet",e.alternateSets,function(r){return new Ce.Table("alternateSetTable",Ce.ushortList("alternate",r))})))};la[4]=function(e){return Fe.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.tableList("ligSet",e.ligatureSets,function(r){return new Ce.Table("ligatureSetTable",Ce.tableList("ligature",r,function(n){return new Ce.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:n.ligGlyph}].concat(Ce.ushortList("component",n.components,n.components.length+1)))}))})))};la[6]=function(e){if(e.substFormat===1){var r=new Ce.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.tableList("chainRuleSet",e.chainRuleSets,function(o){return new Ce.Table("chainRuleSetTable",Ce.tableList("chainRule",o,function(s){var x=Ce.ushortList("backtrackGlyph",s.backtrack,s.backtrack.length).concat(Ce.ushortList("inputGlyph",s.input,s.input.length+1)).concat(Ce.ushortList("lookaheadGlyph",s.lookahead,s.lookahead.length)).concat(Ce.ushortList("substitution",[],s.lookupRecords.length));return s.lookupRecords.forEach(function(E,T){x=x.concat({name:"sequenceIndex"+T,type:"USHORT",value:E.sequenceIndex}).concat({name:"lookupListIndex"+T,type:"USHORT",value:E.lookupListIndex})}),new Ce.Table("chainRuleTable",x)}))})));return r}else if(e.substFormat===2)Fe.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var n=[{name:"substFormat",type:"USHORT",value:e.substFormat}];n.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(o,s){n.push({name:"backtrackCoverage"+s,type:"TABLE",value:new Ce.Coverage(o)})}),n.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(o,s){n.push({name:"inputCoverage"+s,type:"TABLE",value:new Ce.Coverage(o)})}),n.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(o,s){n.push({name:"lookaheadCoverage"+s,type:"TABLE",value:new Ce.Coverage(o)})}),n.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(o,s){n=n.concat({name:"sequenceIndex"+s,type:"USHORT",value:o.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:o.lookupListIndex})});var a=new Ce.Table("chainContextTable",n);return a}Fe.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function uL(t){return new Ce.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Ce.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new Ce.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new Ce.LookupList(t.lookups,la)}])}var gs={parse:dL,make:uL};function pL(t,e){var r=new Re.Parser(t,e),n=r.parseULong();Fe.argument(n===1,"Unsupported META table version."),r.parseULong(),r.parseULong();for(var a=r.parseULong(),o={},s=0;s<a;s++){var x=r.parseTag(),E=r.parseULong(),T=r.parseULong(),p=ra.UTF8(t,e+E,T);o[x]=p}return o}function SL(t){var e=Object.keys(t).length,r="",n=16+e*12,a=new Ce.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:n},{name:"numTags",type:"ULONG",value:e}]);for(var o in t){var s=r.length;r+=t[o],a.fields.push({name:"tag "+o,type:"TAG",value:o}),a.fields.push({name:"offset "+o,type:"ULONG",value:n+s}),a.fields.push({name:"length "+o,type:"ULONG",value:t[o].length})}return a.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),a}var Rs={parse:pL,make:SL};function uA(t){return Math.log(t)/Math.log(2)|0}function yo(t){for(;t.length%4!==0;)t.push(0);for(var e=0,r=0;r<t.length;r+=4)e+=(t[r]<<24)+(t[r+1]<<16)+(t[r+2]<<8)+t[r+3];return e%=Math.pow(2,32),e}function pA(t,e,r,n){return new Ce.Record("Table Record",[{name:"tag",type:"TAG",value:t!==void 0?t:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:r!==void 0?r:0},{name:"length",type:"ULONG",value:n!==void 0?n:0}])}function ys(t){var e=new Ce.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=t,e.numTables=t.length;var r=Math.pow(2,uA(e.numTables));e.searchRange=16*r,e.entrySelector=uA(r),e.rangeShift=e.numTables*16-e.searchRange;for(var n=[],a=[],o=e.sizeOf()+pA().sizeOf()*e.numTables;o%4!==0;)o+=1,a.push({name:"padding",type:"BYTE",value:0});for(var s=0;s<t.length;s+=1){var x=t[s];Fe.argument(x.tableName.length===4,"Table name"+x.tableName+" is invalid.");var E=x.sizeOf(),T=pA(x.tableName,yo(x.encode()),o,E);for(n.push({name:T.tag+" Table Record",type:"RECORD",value:T}),a.push({name:x.tableName+" table",type:"RECORD",value:x}),o+=E,Fe.argument(!isNaN(o),"Something went wrong calculating the offset.");o%4!==0;)o+=1,a.push({name:"padding",type:"BYTE",value:0})}return n.sort(function(p,R){return p.value.tag>R.value.tag?1:-1}),e.fields=e.fields.concat(n),e.fields=e.fields.concat(a),e}function SA(t,e,r){for(var n=0;n<e.length;n+=1){var a=t.charToGlyphIndex(e[n]);if(a>0){var o=t.glyphs.get(a);return o.getMetrics()}}return r}function CL(t){for(var e=0,r=0;r<t.length;r+=1)e+=t[r];return e/t.length}function gL(t){for(var e=[],r=[],n=[],a=[],o=[],s=[],x=[],E,T=0,p=0,R=0,N=0,g=0,K=0;K<t.glyphs.length;K+=1){var Y=t.glyphs.get(K),V=Y.unicode|0;if(isNaN(Y.advanceWidth))throw new Error("Glyph "+Y.name+" ("+K+"): advanceWidth is not a number.");(E>V||E===void 0)&&V>0&&(E=V),T<V&&(T=V);var _=V0.getUnicodeRange(V);if(_<32)p|=1<<_;else if(_<64)R|=1<<_-32;else if(_<96)N|=1<<_-64;else if(_<123)g|=1<<_-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(Y.name!==".notdef"){var $=Y.getMetrics();e.push($.xMin),r.push($.yMin),n.push($.xMax),a.push($.yMax),s.push($.leftSideBearing),x.push($.rightSideBearing),o.push(Y.advanceWidth)}}var Q={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,n),yMax:Math.max.apply(null,a),advanceWidthMax:Math.max.apply(null,o),advanceWidthAvg:CL(o),minLeftSideBearing:Math.min.apply(null,s),maxLeftSideBearing:Math.max.apply(null,s),minRightSideBearing:Math.min.apply(null,x)};Q.ascender=t.ascender,Q.descender=t.descender;var Te=Es.make({flags:3,unitsPerEm:t.unitsPerEm,xMin:Q.xMin,yMin:Q.yMin,xMax:Q.xMax,yMax:Q.yMax,lowestRecPPEM:3,createdTimestamp:t.createdTimestamp}),he=Ls.make({ascender:Q.ascender,descender:Q.descender,advanceWidthMax:Q.advanceWidthMax,minLeftSideBearing:Q.minLeftSideBearing,minRightSideBearing:Q.minRightSideBearing,xMaxExtent:Q.maxLeftSideBearing+(Q.xMax-Q.xMin),numberOfHMetrics:t.glyphs.length}),Ae=Ts.make(t.glyphs.length),ce=V0.make(Object.assign({xAvgCharWidth:Math.round(Q.advanceWidthAvg),usFirstCharIndex:E,usLastCharIndex:T,ulUnicodeRange1:p,ulUnicodeRange2:R,ulUnicodeRange3:N,ulUnicodeRange4:g,sTypoAscender:Q.ascender,sTypoDescender:Q.descender,sTypoLineGap:0,usWinAscent:Q.yMax,usWinDescent:Math.abs(Q.yMin),ulCodePageRange1:1,sxHeight:SA(t,"xyvw",{yMax:Math.round(Q.ascender/2)}).yMax,sCapHeight:SA(t,"HIKLEFJMNTZBDPRAGOQSUVWXY",Q).yMax,usDefaultChar:t.hasChar(" ")?32:0,usBreakChar:t.hasChar(" ")?32:0},t.tables.os2)),pe=hs.make(t.glyphs),me=$1.make(t.glyphs),we=t.getEnglishName("fontFamily"),Ye=t.getEnglishName("fontSubfamily"),it=we+" "+Ye,ot=t.getEnglishName("postScriptName");ot||(ot=we.replace(/\s/g,"")+"-"+Ye);var Ie={};for(var ct in t.names)Ie[ct]=t.names[ct];Ie.uniqueID||(Ie.uniqueID={en:t.getEnglishName("manufacturer")+":"+it}),Ie.postScriptName||(Ie.postScriptName={en:ot}),Ie.preferredFamily||(Ie.preferredFamily=t.names.fontFamily),Ie.preferredSubfamily||(Ie.preferredSubfamily=t.names.fontSubfamily);var oe=[],qe=Ss.make(Ie,oe),At=oe.length>0?cs.make(oe):void 0,Oe=Cs.make(),Et=xs.make(t.glyphs,{version:t.getEnglishName("version"),fullName:it,familyName:we,weightName:Ye,postScriptName:ot,unitsPerEm:t.unitsPerEm,fontBBox:[0,Q.yMin,Q.ascender,Q.advanceWidthMax]}),Lt=t.metas&&Object.keys(t.metas).length>0?Rs.make(t.metas):void 0,Gt=[Te,he,Ae,ce,qe,me,Oe,Et,pe];At&&Gt.push(At),t.tables.gsub&&Gt.push(gs.make(t.tables.gsub)),Lt&&Gt.push(Lt);for(var en=ys(Gt),l0=en.encode(),Ht=yo(l0),tn=en.fields,Kn=!1,rn=0;rn<tn.length;rn+=1)if(tn[rn].name==="head table"){tn[rn].value.checkSumAdjustment=2981146554-Ht,Kn=!0;break}if(!Kn)throw new Error("Could not find head table with checkSum to adjust.");return en}var RL={make:ys,fontToTable:gL,computeCheckSum:yo};function c0(t,e){for(var r=0,n=t.length-1;r<=n;){var a=r+n>>>1,o=t[a].tag;if(o===e)return a;o<e?r=a+1:n=a-1}return-r-1}function CA(t,e){for(var r=0,n=t.length-1;r<=n;){var a=r+n>>>1,o=t[a];if(o===e)return a;o<e?r=a+1:n=a-1}return-r-1}function gA(t,e){for(var r,n=0,a=t.length-1;n<=a;){var o=n+a>>>1;r=t[o];var s=r.start;if(s===e)return r;s<e?n=o+1:a=o-1}if(n>0)return r=t[n-1],e>r.end?0:r}function Ka(t,e){this.font=t,this.tableName=e}Ka.prototype={searchTag:c0,binSearch:CA,getTable:function(t){var e=this.font.tables[this.tableName];return!e&&t&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var t=this.getTable();return t?t.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var t=this.getTable();if(t){for(var e=!1,r=0;r<t.scripts.length;r++){var n=t.scripts[r].tag;if(n==="DFLT")return n;n==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(t,e){var r=this.getTable(e);if(r){t=t||"DFLT";var n=r.scripts,a=c0(r.scripts,t);if(a>=0)return n[a].script;if(e){var o={tag:t,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return n.splice(-1-a,0,o),o.script}}},getLangSysTable:function(t,e,r){var n=this.getScriptTable(t,r);if(n){if(!e||e==="dflt"||e==="DFLT")return n.defaultLangSys;var a=c0(n.langSysRecords,e);if(a>=0)return n.langSysRecords[a].langSys;if(r){var o={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return n.langSysRecords.splice(-1-a,0,o),o.langSys}}},getFeatureTable:function(t,e,r,n){var a=this.getLangSysTable(t,e,n);if(a){for(var o,s=a.featureIndexes,x=this.font.tables[this.tableName].features,E=0;E<s.length;E++)if(o=x[s[E]],o.tag===r)return o.feature;if(n){var T=x.length;return Fe.assert(T===0||r>=x[T-1].tag,"Features must be added in alphabetical order."),o={tag:r,feature:{params:0,lookupListIndexes:[]}},x.push(o),s.push(T),o.feature}}},getLookupTables:function(t,e,r,n,a){var o=this.getFeatureTable(t,e,r,a),s=[];if(o){for(var x,E=o.lookupListIndexes,T=this.font.tables[this.tableName].lookups,p=0;p<E.length;p++)x=T[E[p]],x.lookupType===n&&s.push(x);if(s.length===0&&a){x={lookupType:n,lookupFlag:0,subtables:[],markFilteringSet:void 0};var R=T.length;return T.push(x),E.push(R),[x]}}return s},getGlyphClass:function(t,e){switch(t.format){case 1:return t.startGlyph<=e&&e<t.startGlyph+t.classes.length?t.classes[e-t.startGlyph]:0;case 2:var r=gA(t.ranges,e);return r?r.classId:0}},getCoverageIndex:function(t,e){switch(t.format){case 1:var r=CA(t.glyphs,e);return r>=0?r:-1;case 2:var n=gA(t.ranges,e);return n?n.index+e-n.start:-1}},expandCoverage:function(t){if(t.format===1)return t.glyphs;for(var e=[],r=t.ranges,n=0;n<r.length;n++)for(var a=r[n],o=a.start,s=a.end,x=o;x<=s;x++)e.push(x);return e}};function _a(t){Ka.call(this,t,"gpos")}_a.prototype=Ka.prototype;_a.prototype.init=function(){var t=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(t)};_a.prototype.getKerningValue=function(t,e,r){for(var n=0;n<t.length;n++)for(var a=t[n].subtables,o=0;o<a.length;o++){var s=a[o],x=this.getCoverageIndex(s.coverage,e);if(!(x<0))switch(s.posFormat){case 1:for(var E=s.pairSets[x],T=0;T<E.length;T++){var p=E[T];if(p.secondGlyph===r)return p.value1&&p.value1.xAdvance||0}break;case 2:var R=this.getGlyphClass(s.classDef1,e),N=this.getGlyphClass(s.classDef2,r),g=s.classRecords[R][N];return g.value1&&g.value1.xAdvance||0}}return 0};_a.prototype.getKerningTables=function(t,e){if(this.font.tables.gpos)return this.getLookupTables(t,e,"kern",2)};function Lr(t){Ka.call(this,t,"gsub")}function yL(t,e){var r=t.length;if(r!==e.length)return!1;for(var n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function mo(t,e,r){for(var n=t.subtables,a=0;a<n.length;a++){var o=n[a];if(o.substFormat===e)return o}if(r)return n.push(r),r}Lr.prototype=Ka.prototype;Lr.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Lr.prototype.getSingle=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,1),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++){var E=s[x],T=this.expandCoverage(E.coverage),p=void 0;if(E.substFormat===1){var R=E.deltaGlyphId;for(p=0;p<T.length;p++){var N=T[p];n.push({sub:N,by:N+R})}}else{var g=E.substitute;for(p=0;p<T.length;p++)n.push({sub:T[p],by:g[p]})}}return n};Lr.prototype.getMultiple=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,2),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++){var E=s[x],T=this.expandCoverage(E.coverage),p=void 0;for(p=0;p<T.length;p++){var R=T[p],N=E.sequences[p];n.push({sub:R,by:N})}}return n};Lr.prototype.getAlternates=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,3),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++)for(var E=s[x],T=this.expandCoverage(E.coverage),p=E.alternateSets,R=0;R<T.length;R++)n.push({sub:T[R],by:p[R]});return n};Lr.prototype.getLigatures=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,4),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++)for(var E=s[x],T=this.expandCoverage(E.coverage),p=E.ligatureSets,R=0;R<T.length;R++)for(var N=T[R],g=p[R],K=0;K<g.length;K++){var Y=g[K];n.push({sub:[N].concat(Y.components),by:Y.ligGlyph})}return n};Lr.prototype.addSingle=function(t,e,r,n){var a=this.getLookupTables(r,n,t,1,!0)[0],o=mo(a,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Fe.assert(o.coverage.format===1,"Single: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.substitute.splice(x,0,0)),o.substitute[x]=e.by};Lr.prototype.addMultiple=function(t,e,r,n){Fe.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var a=this.getLookupTables(r,n,t,2,!0)[0],o=mo(a,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Fe.assert(o.coverage.format===1,"Multiple: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.sequences.splice(x,0,0)),o.sequences[x]=e.by};Lr.prototype.addAlternate=function(t,e,r,n){var a=this.getLookupTables(r,n,t,3,!0)[0],o=mo(a,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Fe.assert(o.coverage.format===1,"Alternate: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.alternateSets.splice(x,0,0)),o.alternateSets[x]=e.by};Lr.prototype.addLigature=function(t,e,r,n){var a=this.getLookupTables(r,n,t,4,!0)[0],o=a.subtables[0];o||(o={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},a.subtables[0]=o),Fe.assert(o.coverage.format===1,"Ligature: unable to modify coverage table format "+o.coverage.format);var s=e.sub[0],x=e.sub.slice(1),E={ligGlyph:e.by,components:x},T=this.binSearch(o.coverage.glyphs,s);if(T>=0){for(var p=o.ligatureSets[T],R=0;R<p.length;R++)if(yL(p[R].components,x))return;p.push(E)}else T=-1-T,o.coverage.glyphs.splice(T,0,s),o.ligatureSets.splice(T,0,[E])};Lr.prototype.getFeature=function(t,e,r){if(/ss\d\d/.test(t))return this.getSingle(t,e,r);switch(t){case"aalt":case"salt":return this.getSingle(t,e,r).concat(this.getAlternates(t,e,r));case"dlig":case"liga":case"rlig":return this.getLigatures(t,e,r);case"ccmp":return this.getMultiple(t,e,r).concat(this.getLigatures(t,e,r));case"stch":return this.getMultiple(t,e,r)}};Lr.prototype.add=function(t,e,r,n){if(/ss\d\d/.test(t))return this.addSingle(t,e,r,n);switch(t){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(t,e,r,n):this.addAlternate(t,e,r,n);case"dlig":case"liga":case"rlig":return this.addLigature(t,e,r,n);case"ccmp":return e.by instanceof Array?this.addMultiple(t,e,r,n):this.addLigature(t,e,r,n)}};function mL(){return typeof window<"u"}function ms(t){for(var e=new ArrayBuffer(t.length),r=new Uint8Array(e),n=0;n<t.length;++n)r[n]=t[n];return e}function NL(t){for(var e=new Buffer(t.byteLength),r=new Uint8Array(t),n=0;n<e.length;++n)e[n]=r[n];return e}function Ta(t,e){if(!t)throw e}function RA(t,e,r,n,a){var o;return(e&n)>0?(o=t.parseByte(),e&a||(o=-o),o=r+o):(e&a)>0?o=r:o=r+t.parseShort(),o}function Ns(t,e,r){var n=new Re.Parser(e,r);t.numberOfContours=n.parseShort(),t._xMin=n.parseShort(),t._yMin=n.parseShort(),t._xMax=n.parseShort(),t._yMax=n.parseShort();var a,o;if(t.numberOfContours>0){for(var s=t.endPointIndices=[],x=0;x<t.numberOfContours;x+=1)s.push(n.parseUShort());t.instructionLength=n.parseUShort(),t.instructions=[];for(var E=0;E<t.instructionLength;E+=1)t.instructions.push(n.parseByte());var T=s[s.length-1]+1;a=[];for(var p=0;p<T;p+=1)if(o=n.parseByte(),a.push(o),(o&8)>0)for(var R=n.parseByte(),N=0;N<R;N+=1)a.push(o),p+=1;if(Fe.argument(a.length===T,"Bad flags."),s.length>0){var g=[],K;if(T>0){for(var Y=0;Y<T;Y+=1)o=a[Y],K={},K.onCurve=!!(o&1),K.lastPointOfContour=s.indexOf(Y)>=0,g.push(K);for(var V=0,_=0;_<T;_+=1)o=a[_],K=g[_],K.x=RA(n,o,V,2,16),V=K.x;for(var $=0,Q=0;Q<T;Q+=1)o=a[Q],K=g[Q],K.y=RA(n,o,$,4,32),$=K.y}t.points=g}else t.points=[]}else if(t.numberOfContours===0)t.points=[];else{t.isComposite=!0,t.points=[],t.components=[];for(var Te=!0;Te;){a=n.parseUShort();var he={glyphIndex:n.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(a&1)>0?(a&2)>0?(he.dx=n.parseShort(),he.dy=n.parseShort()):he.matchedPoints=[n.parseUShort(),n.parseUShort()]:(a&2)>0?(he.dx=n.parseChar(),he.dy=n.parseChar()):he.matchedPoints=[n.parseByte(),n.parseByte()],(a&8)>0?he.xScale=he.yScale=n.parseF2Dot14():(a&64)>0?(he.xScale=n.parseF2Dot14(),he.yScale=n.parseF2Dot14()):(a&128)>0&&(he.xScale=n.parseF2Dot14(),he.scale01=n.parseF2Dot14(),he.scale10=n.parseF2Dot14(),he.yScale=n.parseF2Dot14()),t.components.push(he),Te=!!(a&32)}if(a&256){t.instructionLength=n.parseUShort(),t.instructions=[];for(var Ae=0;Ae<t.instructionLength;Ae+=1)t.instructions.push(n.parseByte())}}}function T0(t,e){for(var r=[],n=0;n<t.length;n+=1){var a=t[n],o={x:e.xScale*a.x+e.scale01*a.y+e.dx,y:e.scale10*a.x+e.yScale*a.y+e.dy,onCurve:a.onCurve,lastPointOfContour:a.lastPointOfContour};r.push(o)}return r}function DL(t){for(var e=[],r=[],n=0;n<t.length;n+=1){var a=t[n];r.push(a),a.lastPointOfContour&&(e.push(r),r=[])}return Fe.argument(r.length===0,"There are still points left in the current contour."),e}function Ds(t){var e=new Mt;if(!t)return e;for(var r=DL(t),n=0;n<r.length;++n){var a=r[n],o=null,s=a[a.length-1],x=a[0];if(s.onCurve)e.moveTo(s.x,s.y);else if(x.onCurve)e.moveTo(x.x,x.y);else{var E={x:(s.x+x.x)*.5,y:(s.y+x.y)*.5};e.moveTo(E.x,E.y)}for(var T=0;T<a.length;++T)if(o=s,s=x,x=a[(T+1)%a.length],s.onCurve)e.lineTo(s.x,s.y);else{var p=x;o.onCurve||((s.x+o.x)*.5,(s.y+o.y)*.5),x.onCurve||(p={x:(s.x+x.x)*.5,y:(s.y+x.y)*.5}),e.quadraticCurveTo(s.x,s.y,p.x,p.y)}e.closePath()}return e}function fs(t,e){if(e.isComposite)for(var r=0;r<e.components.length;r+=1){var n=e.components[r],a=t.get(n.glyphIndex);if(a.getPath(),a.points){var o=void 0;if(n.matchedPoints===void 0)o=T0(a.points,n);else{if(n.matchedPoints[0]>e.points.length-1||n.matchedPoints[1]>a.points.length-1)throw Error("Matched points out of range in "+e.name);var s=e.points[n.matchedPoints[0]],x=a.points[n.matchedPoints[1]],E={xScale:n.xScale,scale01:n.scale01,scale10:n.scale10,yScale:n.yScale,dx:0,dy:0};x=T0([x],E)[0],E.dx=s.x-x.x,E.dy=s.y-x.y,o=T0(a.points,E)}e.points=e.points.concat(o)}}return Ds(e.points)}function fL(t,e,r,n){for(var a=new Ur.GlyphSet(n),o=0;o<r.length-1;o+=1){var s=r[o],x=r[o+1];s!==x?a.push(o,Ur.ttfGlyphLoader(n,o,Ns,t,e+s,fs)):a.push(o,Ur.glyphLoader(n,o))}return a}function OL(t,e,r,n){var a=new Ur.GlyphSet(n);return n._push=function(o){var s=r[o],x=r[o+1];s!==x?a.push(o,Ur.ttfGlyphLoader(n,o,Ns,t,e+s,fs)):a.push(o,Ur.glyphLoader(n,o))},a}function BL(t,e,r,n,a){return a.lowMemory?OL(t,e,r,n):fL(t,e,r,n)}var Os={getPath:Ds,parse:BL},Bs,Mn,Hs,J0;function Fs(t){this.font=t,this.getCommands=function(e){return Os.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function HL(t){return t}function Ms(t){return Math.sign(t)*Math.round(Math.abs(t))}function FL(t){return Math.sign(t)*Math.round(Math.abs(t*2))/2}function ML(t){return Math.sign(t)*(Math.round(Math.abs(t)+.5)-.5)}function GL(t){return Math.sign(t)*Math.ceil(Math.abs(t))}function PL(t){return Math.sign(t)*Math.floor(Math.abs(t))}var Gs=function(t){var e=this.srPeriod,r=this.srPhase,n=this.srThreshold,a=1;return t<0&&(t=-t,a=-1),t+=n-r,t=Math.trunc(t/e)*e,t+=r,t<0?r*a:t*a},vr={x:1,y:0,axis:"x",distance:function(t,e,r,n){return(r?t.xo:t.x)-(n?e.xo:e.x)},interpolate:function(t,e,r,n){var a,o,s,x,E,T,p;if(!n||n===this){if(a=t.xo-e.xo,o=t.xo-r.xo,E=e.x-e.xo,T=r.x-r.xo,s=Math.abs(a),x=Math.abs(o),p=s+x,p===0){t.x=t.xo+(E+T)/2;return}t.x=t.xo+(E*x+T*s)/p;return}if(a=n.distance(t,e,!0,!0),o=n.distance(t,r,!0,!0),E=n.distance(e,e,!1,!0),T=n.distance(r,r,!1,!0),s=Math.abs(a),x=Math.abs(o),p=s+x,p===0){vr.setRelative(t,t,(E+T)/2,n,!0);return}vr.setRelative(t,t,(E*x+T*s)/p,n,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(t,e,r,n,a){if(!n||n===this){t.x=(a?e.xo:e.x)+r;return}var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,E=s+r*n.y;t.x=x+(t.y-E)/n.normalSlope},slope:0,touch:function(t){t.xTouched=!0},touched:function(t){return t.xTouched},untouch:function(t){t.xTouched=!1}},_r={x:0,y:1,axis:"y",distance:function(t,e,r,n){return(r?t.yo:t.y)-(n?e.yo:e.y)},interpolate:function(t,e,r,n){var a,o,s,x,E,T,p;if(!n||n===this){if(a=t.yo-e.yo,o=t.yo-r.yo,E=e.y-e.yo,T=r.y-r.yo,s=Math.abs(a),x=Math.abs(o),p=s+x,p===0){t.y=t.yo+(E+T)/2;return}t.y=t.yo+(E*x+T*s)/p;return}if(a=n.distance(t,e,!0,!0),o=n.distance(t,r,!0,!0),E=n.distance(e,e,!1,!0),T=n.distance(r,r,!1,!0),s=Math.abs(a),x=Math.abs(o),p=s+x,p===0){_r.setRelative(t,t,(E+T)/2,n,!0);return}_r.setRelative(t,t,(E*x+T*s)/p,n,!0)},normalSlope:0,setRelative:function(t,e,r,n,a){if(!n||n===this){t.y=(a?e.yo:e.y)+r;return}var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,E=s+r*n.y;t.y=E+n.normalSlope*(t.x-x)},slope:Number.POSITIVE_INFINITY,touch:function(t){t.yTouched=!0},touched:function(t){return t.yTouched},untouch:function(t){t.yTouched=!1}};Object.freeze(vr);Object.freeze(_r);function Va(t,e){this.x=t,this.y=e,this.axis=void 0,this.slope=e/t,this.normalSlope=-t/e,Object.freeze(this)}Va.prototype.distance=function(t,e,r,n){return this.x*vr.distance(t,e,r,n)+this.y*_r.distance(t,e,r,n)};Va.prototype.interpolate=function(t,e,r,n){var a,o,s,x,E,T,p;if(s=n.distance(t,e,!0,!0),x=n.distance(t,r,!0,!0),a=n.distance(e,e,!1,!0),o=n.distance(r,r,!1,!0),E=Math.abs(s),T=Math.abs(x),p=E+T,p===0){this.setRelative(t,t,(a+o)/2,n,!0);return}this.setRelative(t,t,(a*T+o*E)/p,n,!0)};Va.prototype.setRelative=function(t,e,r,n,a){n=n||this;var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,E=s+r*n.y,T=n.normalSlope,p=this.slope,R=t.x,N=t.y;t.x=(p*R-T*x+E-N)/(p-T),t.y=p*(t.x-R)+N};Va.prototype.touch=function(t){t.xTouched=!0,t.yTouched=!0};function Ja(t,e){var r=Math.sqrt(t*t+e*e);return t/=r,e/=r,t===1&&e===0?vr:t===0&&e===1?_r:new Va(t,e)}function Jr(t,e,r,n){this.x=this.xo=Math.round(t*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=r,this.onCurve=n,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Jr.prototype.nextTouched=function(t){for(var e=this.nextPointOnContour;!t.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};Jr.prototype.prevTouched=function(t){for(var e=this.prevPointOnContour;!t.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var Oa=Object.freeze(new Jr(0,0)),bL={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function En(t,e){switch(this.env=t,this.stack=[],this.prog=e,t){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=vr,this.round=Ms}}Fs.prototype.exec=function(t,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var r=this.font,n=this._prepState;if(!n||n.ppem!==e){var a=this._fpgmState;if(!a){En.prototype=bL,a=this._fpgmState=new En("fpgm",r.tables.fpgm),a.funcs=[],a.font=r,ie.DEBUG&&(console.log("---EXEC FPGM---"),a.step=-1);try{Mn(a)}catch(T){console.log("Hinting error in FPGM:"+T),this._errorState=3;return}}En.prototype=a,n=this._prepState=new En("prep",r.tables.prep),n.ppem=e;var o=r.tables.cvt;if(o)for(var s=n.cvt=new Array(o.length),x=e/r.unitsPerEm,E=0;E<o.length;E++)s[E]=o[E]*x;else n.cvt=[];ie.DEBUG&&(console.log("---EXEC PREP---"),n.step=-1);try{Mn(n)}catch(T){this._errorState<2&&console.log("Hinting error in PREP:"+T),this._errorState=2}}if(!(this._errorState>1))try{return Hs(t,n)}catch(T){this._errorState<1&&(console.log("Hinting error:"+T),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};Hs=function(t,e){var r=e.ppem/e.font.unitsPerEm,n=r,a=t.components,o,s,x;if(En.prototype=e,!a)x=new En("glyf",t.instructions),ie.DEBUG&&(console.log("---EXEC GLYPH---"),x.step=-1),J0(t,x,r,n),s=x.gZone;else{var E=e.font;s=[],o=[];for(var T=0;T<a.length;T++){var p=a[T],R=E.glyphs.get(p.glyphIndex);x=new En("glyf",R.instructions),ie.DEBUG&&(console.log("---EXEC COMP "+T+"---"),x.step=-1),J0(R,x,r,n);for(var N=Math.round(p.dx*r),g=Math.round(p.dy*n),K=x.gZone,Y=x.contours,V=0;V<K.length;V++){var _=K[V];_.xTouched=_.yTouched=!1,_.xo=_.x=_.x+N,_.yo=_.y=_.y+g}var $=s.length;s.push.apply(s,K);for(var Q=0;Q<Y.length;Q++)o.push(Y[Q]+$)}t.instructions&&!x.inhibitGridFit&&(x=new En("glyf",t.instructions),x.gZone=x.z0=x.z1=x.z2=s,x.contours=o,s.push(new Jr(0,0),new Jr(Math.round(t.advanceWidth*r),0)),ie.DEBUG&&(console.log("---EXEC COMPOSITE---"),x.step=-1),Mn(x),s.length-=2)}return s};J0=function(t,e,r,n){for(var a=t.points||[],o=a.length,s=e.gZone=e.z0=e.z1=e.z2=[],x=e.contours=[],E,T=0;T<o;T++)E=a[T],s[T]=new Jr(E.x*r,E.y*n,E.lastPointOfContour,E.onCurve);for(var p,R,N=0;N<o;N++)E=s[N],p||(p=E,x.push(N)),E.lastPointOfContour?(E.nextPointOnContour=p,p.prevPointOnContour=E,p=void 0):(R=s[N+1],E.nextPointOnContour=R,R.prevPointOnContour=E);if(!e.inhibitGridFit){if(ie.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var g=0;g<o;g++)console.log(g,s[g].x,s[g].y)}if(s.push(new Jr(0,0),new Jr(Math.round(t.advanceWidth*r),0)),Mn(e),s.length-=2,ie.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var K=0;K<o;K++)console.log(K,s[K].x,s[K].y)}}};Mn=function(t){var e=t.prog;if(e){var r=e.length,n;for(t.ip=0;t.ip<r;t.ip++){if(ie.DEBUG&&t.step++,n=Bs[e[t.ip]],!n)throw new Error("unknown instruction: 0x"+Number(e[t.ip]).toString(16));n(t)}}};function Zi(t){for(var e=t.tZone=new Array(t.gZone.length),r=0;r<e.length;r++)e[r]=new Jr(0,0)}function Ps(t,e){var r=t.prog,n=t.ip,a=1,o;do if(o=r[++n],o===88)a++;else if(o===89)a--;else if(o===64)n+=r[n+1]+1;else if(o===65)n+=2*r[n+1]+1;else if(o>=176&&o<=183)n+=o-176+1;else if(o>=184&&o<=191)n+=(o-184+1)*2;else if(e&&a===1&&o===27)break;while(a>0);t.ip=n}function yA(t,e){ie.DEBUG&&console.log(e.step,"SVTCA["+t.axis+"]"),e.fv=e.pv=e.dpv=t}function mA(t,e){ie.DEBUG&&console.log(e.step,"SPVTCA["+t.axis+"]"),e.pv=e.dpv=t}function NA(t,e){ie.DEBUG&&console.log(e.step,"SFVTCA["+t.axis+"]"),e.fv=t}function DA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log("SPVTL["+t+"]",n,a);var x,E;t?(x=o.y-s.y,E=s.x-o.x):(x=s.x-o.x,E=s.y-o.y),e.pv=e.dpv=Ja(x,E)}function fA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log("SFVTL["+t+"]",n,a);var x,E;t?(x=o.y-s.y,E=s.x-o.x):(x=s.x-o.x,E=s.y-o.y),e.fv=Ja(x,E)}function vL(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SPVFS[]",r,n),t.pv=t.dpv=Ja(n,r)}function UL(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SPVFS[]",r,n),t.fv=Ja(n,r)}function wL(t){var e=t.stack,r=t.pv;ie.DEBUG&&console.log(t.step,"GPV[]"),e.push(r.x*16384),e.push(r.y*16384)}function YL(t){var e=t.stack,r=t.fv;ie.DEBUG&&console.log(t.step,"GFV[]"),e.push(r.x*16384),e.push(r.y*16384)}function WL(t){t.fv=t.pv,ie.DEBUG&&console.log(t.step,"SFVTPV[]")}function kL(t){var e=t.stack,r=e.pop(),n=e.pop(),a=e.pop(),o=e.pop(),s=e.pop(),x=t.z0,E=t.z1,T=x[r],p=x[n],R=E[a],N=E[o],g=t.z2[s];ie.DEBUG&&console.log("ISECT[], ",r,n,a,o,s);var K=T.x,Y=T.y,V=p.x,_=p.y,$=R.x,Q=R.y,Te=N.x,he=N.y,Ae=(K-V)*(Q-he)-(Y-_)*($-Te),ce=K*_-Y*V,pe=$*he-Q*Te;g.x=(ce*($-Te)-pe*(K-V))/Ae,g.y=(ce*(Q-he)-pe*(Y-_))/Ae}function KL(t){t.rp0=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP0[]",t.rp0)}function _L(t){t.rp1=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP1[]",t.rp1)}function VL(t){t.rp2=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP2[]",t.rp2)}function JL(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP0[]",e),t.zp0=e,e){case 0:t.tZone||Zi(t),t.z0=t.tZone;break;case 1:t.z0=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function zL(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP1[]",e),t.zp1=e,e){case 0:t.tZone||Zi(t),t.z1=t.tZone;break;case 1:t.z1=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function ZL(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP2[]",e),t.zp2=e,e){case 0:t.tZone||Zi(t),t.z2=t.tZone;break;case 1:t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function XL(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZPS[]",e),t.zp0=t.zp1=t.zp2=e,e){case 0:t.tZone||Zi(t),t.z0=t.z1=t.z2=t.tZone;break;case 1:t.z0=t.z1=t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function jL(t){t.loop=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SLOOP[]",t.loop)}function QL(t){ie.DEBUG&&console.log(t.step,"RTG[]"),t.round=Ms}function qL(t){ie.DEBUG&&console.log(t.step,"RTHG[]"),t.round=ML}function $L(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SMD[]",e),t.minDis=e/64}function eh(t){ie.DEBUG&&console.log(t.step,"ELSE[]"),Ps(t,!1)}function th(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"JMPR[]",e),t.ip+=e-1}function rh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCVTCI[]",e),t.cvCutIn=e/64}function nh(t){var e=t.stack;ie.DEBUG&&console.log(t.step,"DUP[]"),e.push(e[e.length-1])}function I0(t){ie.DEBUG&&console.log(t.step,"POP[]"),t.stack.pop()}function ah(t){ie.DEBUG&&console.log(t.step,"CLEAR[]"),t.stack.length=0}function ih(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SWAP[]"),e.push(r),e.push(n)}function oh(t){var e=t.stack;ie.DEBUG&&console.log(t.step,"DEPTH[]"),e.push(e.length)}function Ah(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LOOPCALL[]",r,n);var a=t.ip,o=t.prog;t.prog=t.funcs[r];for(var s=0;s<n;s++)Mn(t),ie.DEBUG&&console.log(++t.step,s+1<n?"next loopcall":"done loopcall",s);t.ip=a,t.prog=o}function sh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"CALL[]",e);var r=t.ip,n=t.prog;t.prog=t.funcs[e],Mn(t),t.ip=r,t.prog=n,ie.DEBUG&&console.log(++t.step,"returning from",e)}function lh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"CINDEX[]",r),e.push(e[e.length-r])}function xh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"MINDEX[]",r),e.push(e.splice(e.length-r,1)[0])}function Eh(t){if(t.env!=="fpgm")throw new Error("FDEF not allowed here");var e=t.stack,r=t.prog,n=t.ip,a=e.pop(),o=n;for(ie.DEBUG&&console.log(t.step,"FDEF[]",a);r[++n]!==45;);t.ip=n,t.funcs[a]=r.slice(o+1,n)}function OA(t,e){var r=e.stack.pop(),n=e.z0[r],a=e.fv,o=e.pv;ie.DEBUG&&console.log(e.step,"MDAP["+t+"]",r);var s=o.distance(n,Oa);t&&(s=e.round(s)),a.setRelative(n,Oa,s,o),a.touch(n),e.rp0=e.rp1=r}function BA(t,e){var r=e.z2,n=r.length-2,a,o,s;ie.DEBUG&&console.log(e.step,"IUP["+t.axis+"]");for(var x=0;x<n;x++)a=r[x],!t.touched(a)&&(o=a.prevTouched(t),o!==a&&(s=a.nextTouched(t),o===s&&t.setRelative(a,a,t.distance(o,o,!1,!0),t,!0),t.interpolate(a,o,s,t)))}function HA(t,e){for(var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=e.loop,E=e.z2;x--;){var T=r.pop(),p=E[T],R=s.distance(a,a,!1,!0);o.setRelative(p,p,R,s),o.touch(p),ie.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-x)+": ":"")+"SHP["+(t?"rp1":"rp2")+"]",T)}e.loop=1}function FA(t,e){var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=r.pop(),E=e.z2[e.contours[x]],T=E;ie.DEBUG&&console.log(e.step,"SHC["+t+"]",x);var p=s.distance(a,a,!1,!0);do T!==a&&o.setRelative(T,T,p,s),T=T.nextPointOnContour;while(T!==E)}function MA(t,e){var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=r.pop();ie.DEBUG&&console.log(e.step,"SHZ["+t+"]",x);var E;switch(x){case 0:E=e.tZone;break;case 1:E=e.gZone;break;default:throw new Error("Invalid zone")}for(var T,p=s.distance(a,a,!1,!0),R=E.length-2,N=0;N<R;N++)T=E[N],o.setRelative(T,T,p,s)}function Lh(t){for(var e=t.stack,r=t.loop,n=t.fv,a=e.pop()/64,o=t.z2;r--;){var s=e.pop(),x=o[s];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-r)+": ":"")+"SHPIX[]",s,a),n.setRelative(x,x,a),n.touch(x)}t.loop=1}function hh(t){for(var e=t.stack,r=t.rp1,n=t.rp2,a=t.loop,o=t.z0[r],s=t.z1[n],x=t.fv,E=t.dpv,T=t.z2;a--;){var p=e.pop(),R=T[p];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-a)+": ":"")+"IP[]",p,r,"<->",n),x.interpolate(R,o,s,E),x.touch(R)}t.loop=1}function GA(t,e){var r=e.stack,n=r.pop()/64,a=r.pop(),o=e.z1[a],s=e.z0[e.rp0],x=e.fv,E=e.pv;x.setRelative(o,s,n,E),x.touch(o),ie.DEBUG&&console.log(e.step,"MSIRP["+t+"]",n,a),e.rp1=e.rp0,e.rp2=a,t&&(e.rp0=a)}function ch(t){for(var e=t.stack,r=t.rp0,n=t.z0[r],a=t.loop,o=t.fv,s=t.pv,x=t.z1;a--;){var E=e.pop(),T=x[E];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-a)+": ":"")+"ALIGNRP[]",E),o.setRelative(T,n,0,s),o.touch(T)}t.loop=1}function Th(t){ie.DEBUG&&console.log(t.step,"RTDG[]"),t.round=FL}function PA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z0[a],s=e.fv,x=e.pv,E=e.cvt[n];ie.DEBUG&&console.log(e.step,"MIAP["+t+"]",n,"(",E,")",a);var T=x.distance(o,Oa);t&&(Math.abs(T-E)<e.cvCutIn&&(T=E),T=e.round(T)),s.setRelative(o,Oa,T,x),e.zp0===0&&(o.xo=o.x,o.yo=o.y),s.touch(o),e.rp0=e.rp1=a}function Ih(t){var e=t.prog,r=t.ip,n=t.stack,a=e[++r];ie.DEBUG&&console.log(t.step,"NPUSHB[]",a);for(var o=0;o<a;o++)n.push(e[++r]);t.ip=r}function dh(t){var e=t.ip,r=t.prog,n=t.stack,a=r[++e];ie.DEBUG&&console.log(t.step,"NPUSHW[]",a);for(var o=0;o<a;o++){var s=r[++e]<<8|r[++e];s&32768&&(s=-((s^65535)+1)),n.push(s)}t.ip=e}function uh(t){var e=t.stack,r=t.store;r||(r=t.store=[]);var n=e.pop(),a=e.pop();ie.DEBUG&&console.log(t.step,"WS",n,a),r[a]=n}function ph(t){var e=t.stack,r=t.store,n=e.pop();ie.DEBUG&&console.log(t.step,"RS",n);var a=r&&r[n]||0;e.push(a)}function Sh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"WCVTP",r,n),t.cvt[n]=r/64}function Ch(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"RCVT",r),e.push(t.cvt[r]*64)}function bA(t,e){var r=e.stack,n=r.pop(),a=e.z2[n];ie.DEBUG&&console.log(e.step,"GC["+t+"]",n),r.push(e.dpv.distance(a,Oa,t,!1)*64)}function vA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z1[n],s=e.z0[a],x=e.dpv.distance(s,o,t,t);ie.DEBUG&&console.log(e.step,"MD["+t+"]",n,a,"->",x),e.stack.push(Math.round(x*64))}function gh(t){ie.DEBUG&&console.log(t.step,"MPPEM[]"),t.stack.push(t.ppem)}function Rh(t){ie.DEBUG&&console.log(t.step,"FLIPON[]"),t.autoFlip=!0}function yh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LT[]",r,n),e.push(n<r?1:0)}function mh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LTEQ[]",r,n),e.push(n<=r?1:0)}function Nh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"GT[]",r,n),e.push(n>r?1:0)}function Dh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"GTEQ[]",r,n),e.push(n>=r?1:0)}function fh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"EQ[]",r,n),e.push(r===n?1:0)}function Oh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"NEQ[]",r,n),e.push(r!==n?1:0)}function Bh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"ODD[]",r),e.push(Math.trunc(r)%2?1:0)}function Hh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"EVEN[]",r),e.push(Math.trunc(r)%2?0:1)}function Fh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"IF[]",e),e||(Ps(t,!0),ie.DEBUG&&console.log(t.step,"EIF[]"))}function Mh(t){ie.DEBUG&&console.log(t.step,"EIF[]")}function Gh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"AND[]",r,n),e.push(r&&n?1:0)}function Ph(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"OR[]",r,n),e.push(r||n?1:0)}function bh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"NOT[]",r),e.push(r?0:1)}function d0(t,e){var r=e.stack,n=r.pop(),a=e.fv,o=e.pv,s=e.ppem,x=e.deltaBase+(t-1)*16,E=e.deltaShift,T=e.z0;ie.DEBUG&&console.log(e.step,"DELTAP["+t+"]",n,r);for(var p=0;p<n;p++){var R=r.pop(),N=r.pop(),g=x+((N&240)>>4);if(g===s){var K=(N&15)-8;K>=0&&K++,ie.DEBUG&&console.log(e.step,"DELTAPFIX",R,"by",K*E);var Y=T[R];a.setRelative(Y,Y,K*E,o)}}}function vh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"SDB[]",r),t.deltaBase=r}function Uh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"SDS[]",r),t.deltaShift=Math.pow(.5,r)}function wh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"ADD[]",r,n),e.push(n+r)}function Yh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SUB[]",r,n),e.push(n-r)}function Wh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"DIV[]",r,n),e.push(n*64/r)}function kh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MUL[]",r,n),e.push(n*r/64)}function Kh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"ABS[]",r),e.push(Math.abs(r))}function _h(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"NEG[]",r),e.push(-r)}function Vh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"FLOOR[]",r),e.push(Math.floor(r/64)*64)}function Jh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"CEILING[]",r),e.push(Math.ceil(r/64)*64)}function xi(t,e){var r=e.stack,n=r.pop();ie.DEBUG&&console.log(e.step,"ROUND[]"),r.push(e.round(n/64)*64)}function zh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"WCVTF[]",r,n),t.cvt[n]=r*t.ppem/t.font.unitsPerEm}function u0(t,e){var r=e.stack,n=r.pop(),a=e.ppem,o=e.deltaBase+(t-1)*16,s=e.deltaShift;ie.DEBUG&&console.log(e.step,"DELTAC["+t+"]",n,r);for(var x=0;x<n;x++){var E=r.pop(),T=r.pop(),p=o+((T&240)>>4);if(p===a){var R=(T&15)-8;R>=0&&R++;var N=R*s;ie.DEBUG&&console.log(e.step,"DELTACFIX",E,"by",N),e.cvt[E]+=N}}}function Zh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SROUND[]",e),t.round=Gs;var r;switch(e&192){case 0:r=.5;break;case 64:r=1;break;case 128:r=2;break;default:throw new Error("invalid SROUND value")}switch(t.srPeriod=r,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*r}function Xh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"S45ROUND[]",e),t.round=Gs;var r;switch(e&192){case 0:r=Math.sqrt(2)/2;break;case 64:r=Math.sqrt(2);break;case 128:r=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(t.srPeriod=r,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*r}function jh(t){ie.DEBUG&&console.log(t.step,"ROFF[]"),t.round=HL}function Qh(t){ie.DEBUG&&console.log(t.step,"RUTG[]"),t.round=GL}function qh(t){ie.DEBUG&&console.log(t.step,"RDTG[]"),t.round=PL}function $h(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCANCTRL[]",e)}function UA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log(e.step,"SDPVTL["+t+"]",n,a);var x,E;t?(x=o.y-s.y,E=s.x-o.x):(x=s.x-o.x,E=s.y-o.y),e.dpv=Ja(x,E)}function ec(t){var e=t.stack,r=e.pop(),n=0;ie.DEBUG&&console.log(t.step,"GETINFO[]",r),r&1&&(n=35),r&32&&(n|=4096),e.push(n)}function tc(t){var e=t.stack,r=e.pop(),n=e.pop(),a=e.pop();ie.DEBUG&&console.log(t.step,"ROLL[]"),e.push(n),e.push(r),e.push(a)}function rc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MAX[]",r,n),e.push(Math.max(n,r))}function nc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MIN[]",r,n),e.push(Math.min(n,r))}function ac(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCANTYPE[]",e)}function ic(t){var e=t.stack.pop(),r=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"INSTCTRL[]",e,r),e){case 1:t.inhibitGridFit=!!r;return;case 2:t.ignoreCvt=!!r;return;default:throw new Error("invalid INSTCTRL[] selector")}}function on(t,e){var r=e.stack,n=e.prog,a=e.ip;ie.DEBUG&&console.log(e.step,"PUSHB["+t+"]");for(var o=0;o<t;o++)r.push(n[++a]);e.ip=a}function An(t,e){var r=e.ip,n=e.prog,a=e.stack;ie.DEBUG&&console.log(e.ip,"PUSHW["+t+"]");for(var o=0;o<t;o++){var s=n[++r]<<8|n[++r];s&32768&&(s=-((s^65535)+1)),a.push(s)}e.ip=r}function ge(t,e,r,n,a,o){var s=o.stack,x=t&&s.pop(),E=s.pop(),T=o.rp0,p=o.z0[T],R=o.z1[E],N=o.minDis,g=o.fv,K=o.dpv,Y,V,_,$;V=Y=K.distance(R,p,!0,!0),_=V>=0?1:-1,V=Math.abs(V),t&&($=o.cvt[x],n&&Math.abs(V-$)<o.cvCutIn&&(V=$)),r&&V<N&&(V=N),n&&(V=o.round(V)),g.setRelative(R,p,_*V,K),g.touch(R),ie.DEBUG&&console.log(o.step,(t?"MIRP[":"MDRP[")+(e?"M":"m")+(r?">":"_")+(n?"R":"_")+(a===0?"Gr":a===1?"Bl":a===2?"Wh":"")+"]",t?x+"("+o.cvt[x]+","+$+")":"",E,"(d =",Y,"->",_*V,")"),o.rp1=o.rp0,o.rp2=E,e&&(o.rp0=E)}Bs=[yA.bind(void 0,_r),yA.bind(void 0,vr),mA.bind(void 0,_r),mA.bind(void 0,vr),NA.bind(void 0,_r),NA.bind(void 0,vr),DA.bind(void 0,0),DA.bind(void 0,1),fA.bind(void 0,0),fA.bind(void 0,1),vL,UL,wL,YL,WL,kL,KL,_L,VL,JL,zL,ZL,XL,jL,QL,qL,$L,eh,th,rh,void 0,void 0,nh,I0,ah,ih,oh,lh,xh,void 0,void 0,void 0,Ah,sh,Eh,void 0,OA.bind(void 0,0),OA.bind(void 0,1),BA.bind(void 0,_r),BA.bind(void 0,vr),HA.bind(void 0,0),HA.bind(void 0,1),FA.bind(void 0,0),FA.bind(void 0,1),MA.bind(void 0,0),MA.bind(void 0,1),Lh,hh,GA.bind(void 0,0),GA.bind(void 0,1),ch,Th,PA.bind(void 0,0),PA.bind(void 0,1),Ih,dh,uh,ph,Sh,Ch,bA.bind(void 0,0),bA.bind(void 0,1),void 0,vA.bind(void 0,0),vA.bind(void 0,1),gh,void 0,Rh,void 0,void 0,yh,mh,Nh,Dh,fh,Oh,Bh,Hh,Fh,Mh,Gh,Ph,bh,d0.bind(void 0,1),vh,Uh,wh,Yh,Wh,kh,Kh,_h,Vh,Jh,xi.bind(void 0,0),xi.bind(void 0,1),xi.bind(void 0,2),xi.bind(void 0,3),void 0,void 0,void 0,void 0,zh,d0.bind(void 0,2),d0.bind(void 0,3),u0.bind(void 0,1),u0.bind(void 0,2),u0.bind(void 0,3),Zh,Xh,void 0,void 0,jh,void 0,Qh,qh,I0,I0,void 0,void 0,void 0,void 0,void 0,$h,UA.bind(void 0,0),UA.bind(void 0,1),ec,void 0,tc,rc,nc,ac,ic,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,on.bind(void 0,1),on.bind(void 0,2),on.bind(void 0,3),on.bind(void 0,4),on.bind(void 0,5),on.bind(void 0,6),on.bind(void 0,7),on.bind(void 0,8),An.bind(void 0,1),An.bind(void 0,2),An.bind(void 0,3),An.bind(void 0,4),An.bind(void 0,5),An.bind(void 0,6),An.bind(void 0,7),An.bind(void 0,8),ge.bind(void 0,0,0,0,0,0),ge.bind(void 0,0,0,0,0,1),ge.bind(void 0,0,0,0,0,2),ge.bind(void 0,0,0,0,0,3),ge.bind(void 0,0,0,0,1,0),ge.bind(void 0,0,0,0,1,1),ge.bind(void 0,0,0,0,1,2),ge.bind(void 0,0,0,0,1,3),ge.bind(void 0,0,0,1,0,0),ge.bind(void 0,0,0,1,0,1),ge.bind(void 0,0,0,1,0,2),ge.bind(void 0,0,0,1,0,3),ge.bind(void 0,0,0,1,1,0),ge.bind(void 0,0,0,1,1,1),ge.bind(void 0,0,0,1,1,2),ge.bind(void 0,0,0,1,1,3),ge.bind(void 0,0,1,0,0,0),ge.bind(void 0,0,1,0,0,1),ge.bind(void 0,0,1,0,0,2),ge.bind(void 0,0,1,0,0,3),ge.bind(void 0,0,1,0,1,0),ge.bind(void 0,0,1,0,1,1),ge.bind(void 0,0,1,0,1,2),ge.bind(void 0,0,1,0,1,3),ge.bind(void 0,0,1,1,0,0),ge.bind(void 0,0,1,1,0,1),ge.bind(void 0,0,1,1,0,2),ge.bind(void 0,0,1,1,0,3),ge.bind(void 0,0,1,1,1,0),ge.bind(void 0,0,1,1,1,1),ge.bind(void 0,0,1,1,1,2),ge.bind(void 0,0,1,1,1,3),ge.bind(void 0,1,0,0,0,0),ge.bind(void 0,1,0,0,0,1),ge.bind(void 0,1,0,0,0,2),ge.bind(void 0,1,0,0,0,3),ge.bind(void 0,1,0,0,1,0),ge.bind(void 0,1,0,0,1,1),ge.bind(void 0,1,0,0,1,2),ge.bind(void 0,1,0,0,1,3),ge.bind(void 0,1,0,1,0,0),ge.bind(void 0,1,0,1,0,1),ge.bind(void 0,1,0,1,0,2),ge.bind(void 0,1,0,1,0,3),ge.bind(void 0,1,0,1,1,0),ge.bind(void 0,1,0,1,1,1),ge.bind(void 0,1,0,1,1,2),ge.bind(void 0,1,0,1,1,3),ge.bind(void 0,1,1,0,0,0),ge.bind(void 0,1,1,0,0,1),ge.bind(void 0,1,1,0,0,2),ge.bind(void 0,1,1,0,0,3),ge.bind(void 0,1,1,0,1,0),ge.bind(void 0,1,1,0,1,1),ge.bind(void 0,1,1,0,1,2),ge.bind(void 0,1,1,0,1,3),ge.bind(void 0,1,1,1,0,0),ge.bind(void 0,1,1,1,0,1),ge.bind(void 0,1,1,1,0,2),ge.bind(void 0,1,1,1,0,3),ge.bind(void 0,1,1,1,1,0),ge.bind(void 0,1,1,1,1,1),ge.bind(void 0,1,1,1,1,2),ge.bind(void 0,1,1,1,1,3)];function xa(t){this.char=t,this.state={},this.activeState=null}function No(t,e,r){this.contextName=r,this.startIndex=t,this.endOffset=e}function oc(t,e,r){this.contextName=t,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=r}function yr(t,e){this.context=t,this.index=e,this.length=t.length,this.current=t[e],this.backtrack=t.slice(0,e),this.lookahead=t.slice(e+1)}function Xi(t){this.eventId=t,this.subscribers=[]}function Ac(t){var e=this,r=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];r.forEach(function(a){Object.defineProperty(e.events,a,{value:new Xi(a)})}),t&&r.forEach(function(a){var o=t[a];typeof o=="function"&&e.events[a].subscribe(o)});var n=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];n.forEach(function(a){e.events[a].subscribe(e.updateContextsRanges)})}function Rt(t){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],Ac.call(this,t)}xa.prototype.setState=function(t,e){return this.state[t]=e,this.activeState={key:t,value:this.state[t]},this.activeState};xa.prototype.getState=function(t){return this.state[t]||null};Rt.prototype.inboundIndex=function(t){return t>=0&&t<this.tokens.length};Rt.prototype.composeRUD=function(t){var e=this,r=!0,n=t.map(function(o){return e[o[0]].apply(e,o.slice(1).concat(r))}),a=function(o){return typeof o=="object"&&o.hasOwnProperty("FAIL")};if(n.every(a))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:n.filter(a)};this.dispatch("composeRUD",[n.filter(function(o){return!a(o)})])};Rt.prototype.replaceRange=function(t,e,r,n){e=e!==null?e:this.tokens.length;var a=r.every(function(s){return s instanceof xa});if(!isNaN(t)&&this.inboundIndex(t)&&a){var o=this.tokens.splice.apply(this.tokens,[t,e].concat(r));return n||this.dispatch("replaceToken",[t,e,r]),[o,r]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};Rt.prototype.replaceToken=function(t,e,r){if(!isNaN(t)&&this.inboundIndex(t)&&e instanceof xa){var n=this.tokens.splice(t,1,e);return r||this.dispatch("replaceToken",[t,e]),[n[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};Rt.prototype.removeRange=function(t,e,r){e=isNaN(e)?this.tokens.length:e;var n=this.tokens.splice(t,e);return r||this.dispatch("removeRange",[n,t,e]),n};Rt.prototype.removeToken=function(t,e){if(!isNaN(t)&&this.inboundIndex(t)){var r=this.tokens.splice(t,1);return e||this.dispatch("removeToken",[r,t]),r}else return{FAIL:"removeToken: invalid token index."}};Rt.prototype.insertToken=function(t,e,r){var n=t.every(function(a){return a instanceof xa});return n?(this.tokens.splice.apply(this.tokens,[e,0].concat(t)),r||this.dispatch("insertToken",[t,e]),t):{FAIL:"insertToken: invalid token(s)."}};Rt.prototype.registerModifier=function(t,e,r){this.events.newToken.subscribe(function(n,a){var o=[n,a],s=e===null||e.apply(this,o)===!0,x=[n,a];if(s){var E=r.apply(this,x);n.setState(t,E)}}),this.registeredModifiers.push(t)};Xi.prototype.subscribe=function(t){return typeof t=="function"?this.subscribers.push(t)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};Xi.prototype.unsubscribe=function(t){this.subscribers.splice(t,1)};yr.prototype.setCurrentIndex=function(t){this.index=t,this.current=this.context[t],this.backtrack=this.context.slice(0,t),this.lookahead=this.context.slice(t+1)};yr.prototype.get=function(t){switch(!0){case t===0:return this.current;case(t<0&&Math.abs(t)<=this.backtrack.length):return this.backtrack.slice(t)[0];case(t>0&&t<=this.lookahead.length):return this.lookahead[t-1];default:return null}};Rt.prototype.rangeToText=function(t){if(t instanceof No)return this.getRangeTokens(t).map(function(e){return e.char}).join("")};Rt.prototype.getText=function(){return this.tokens.map(function(t){return t.char}).join("")};Rt.prototype.getContext=function(t){var e=this.registeredContexts[t];return e||null};Rt.prototype.on=function(t,e){var r=this.events[t];return r?r.subscribe(e):null};Rt.prototype.dispatch=function(t,e){var r=this,n=this.events[t];n instanceof Xi&&n.subscribers.forEach(function(a){a.apply(r,e||[])})};Rt.prototype.registerContextChecker=function(t,e,r){if(this.getContext(t))return{FAIL:"context name '"+t+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof r!="function")return{FAIL:"missing context end check."};var n=new oc(t,e,r);return this.registeredContexts[t]=n,this.contextCheckers.push(n),n};Rt.prototype.getRangeTokens=function(t){var e=t.startIndex+t.endOffset;return[].concat(this.tokens.slice(t.startIndex,e))};Rt.prototype.getContextRanges=function(t){var e=this.getContext(t);return e?e.ranges:{FAIL:"context checker '"+t+"' is not registered."}};Rt.prototype.resetContextsRanges=function(){var t=this.registeredContexts;for(var e in t)if(t.hasOwnProperty(e)){var r=t[e];r.ranges=[]}};Rt.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var t=this.tokens.map(function(n){return n.char}),e=0;e<t.length;e++){var r=new yr(t,e);this.runContextCheck(r)}this.dispatch("updateContextsRanges",[this.registeredContexts])};Rt.prototype.setEndOffset=function(t,e){var r=this.getContext(e).openRange.startIndex,n=new No(r,t,e),a=this.getContext(e).ranges;return n.rangeId=e+"."+a.length,a.push(n),this.getContext(e).openRange=null,n};Rt.prototype.runContextCheck=function(t){var e=this,r=t.index;this.contextCheckers.forEach(function(n){var a=n.contextName,o=e.getContext(a).openRange;if(!o&&n.checkStart(t)&&(o=new No(r,null,a),e.getContext(a).openRange=o,e.dispatch("contextStart",[a,r])),o&&n.checkEnd(t)){var s=r-o.startIndex+1,x=e.setEndOffset(s,a);e.dispatch("contextEnd",[a,x])}})};Rt.prototype.tokenize=function(t){this.tokens=[],this.resetContextsRanges();var e=Array.from(t);this.dispatch("start");for(var r=0;r<e.length;r++){var n=e[r],a=new yr(e,r);this.dispatch("next",[a]),this.runContextCheck(a);var o=new xa(n);this.tokens.push(o),this.dispatch("newToken",[o,a])}return this.dispatch("end",[this.tokens]),this.tokens};function hn(t){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(t)}function bs(t){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(t)}function un(t){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(t)}function ui(t){return/[A-z]/.test(t)}function sc(t){return/\s/.test(t)}function hr(t){this.font=t,this.features={}}function Dn(t){this.id=t.id,this.tag=t.tag,this.substitution=t.substitution}function za(t,e){if(!t)return-1;switch(e.format){case 1:return e.glyphs.indexOf(t);case 2:for(var r=e.ranges,n=0;n<r.length;n++){var a=r[n];if(t>=a.start&&t<=a.end){var o=t-a.start;return a.index+o}}break;default:return-1}return-1}function lc(t,e){var r=za(t,e.coverage);return r===-1?null:t+e.deltaGlyphId}function xc(t,e){var r=za(t,e.coverage);return r===-1?null:e.substitute[r]}function p0(t,e){for(var r=[],n=0;n<t.length;n++){var a=t[n],o=e.current;o=Array.isArray(o)?o[0]:o;var s=za(o,a);s!==-1&&r.push(s)}return r.length!==t.length?-1:r}function Ec(t,e){var r=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(t.context.length<r)return[];var n=p0(e.inputCoverage,t);if(n===-1)return[];var a=e.inputCoverage.length-1;if(t.lookahead.length<e.lookaheadCoverage.length)return[];for(var o=t.lookahead.slice(a);o.length&&un(o[0].char);)o.shift();var s=new yr(o,0),x=p0(e.lookaheadCoverage,s),E=[].concat(t.backtrack);for(E.reverse();E.length&&un(E[0].char);)E.shift();if(E.length<e.backtrackCoverage.length)return[];var T=new yr(E,0),p=p0(e.backtrackCoverage,T),R=n.length===e.inputCoverage.length&&x.length===e.lookaheadCoverage.length&&p.length===e.backtrackCoverage.length,N=[];if(R)for(var g=0;g<e.lookupRecords.length;g++)for(var K=e.lookupRecords[g],Y=K.lookupListIndex,V=this.getLookupByIndex(Y),_=0;_<V.subtables.length;_++){var $=V.subtables[_],Q=this.getLookupMethod(V,$),Te=this.getSubstitutionType(V,$);if(Te==="12")for(var he=0;he<n.length;he++){var Ae=t.get(he),ce=Q(Ae);ce&&N.push(ce)}}return N}function Lc(t,e){var r=t.current,n=za(r,e.coverage);if(n===-1)return null;for(var a,o=e.ligatureSets[n],s=0;s<o.length;s++){a=o[s];for(var x=0;x<a.components.length;x++){var E=t.lookahead[x],T=a.components[x];if(E!==T)break;if(x===a.components.length-1)return a}}return null}function hc(t,e){var r=za(t,e.coverage);return r===-1?null:e.sequences[r]}hr.prototype.getDefaultScriptFeaturesIndexes=function(){for(var t=this.font.tables.gsub.scripts,e=0;e<t.length;e++){var r=t[e];if(r.tag==="DFLT")return r.script.defaultLangSys.featureIndexes}return[]};hr.prototype.getScriptFeaturesIndexes=function(t){var e=this.font.tables;if(!e.gsub)return[];if(!t)return this.getDefaultScriptFeaturesIndexes();for(var r=this.font.tables.gsub.scripts,n=0;n<r.length;n++){var a=r[n];if(a.tag===t&&a.script.defaultLangSys)return a.script.defaultLangSys.featureIndexes;var o=a.langSysRecords;if(o)for(var s=0;s<o.length;s++){var x=o[s];if(x.tag===t){var E=x.langSys;return E.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};hr.prototype.mapTagsToFeatures=function(t,e){for(var r={},n=0;n<t.length;n++){var a=t[n].tag,o=t[n].feature;r[a]=o}this.features[e].tags=r};hr.prototype.getScriptFeatures=function(t){var e=this.features[t];if(this.features.hasOwnProperty(t))return e;var r=this.getScriptFeaturesIndexes(t);if(!r)return null;var n=this.font.tables.gsub;return e=r.map(function(a){return n.features[a]}),this.features[t]=e,this.mapTagsToFeatures(e,t),e};hr.prototype.getSubstitutionType=function(t,e){var r=t.lookupType.toString(),n=e.substFormat.toString();return r+n};hr.prototype.getLookupMethod=function(t,e){var r=this,n=this.getSubstitutionType(t,e);switch(n){case"11":return function(a){return lc.apply(r,[a,e])};case"12":return function(a){return xc.apply(r,[a,e])};case"63":return function(a){return Ec.apply(r,[a,e])};case"41":return function(a){return Lc.apply(r,[a,e])};case"21":return function(a){return hc.apply(r,[a,e])};default:throw new Error("lookupType: "+t.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};hr.prototype.lookupFeature=function(t){var e=t.contextParams,r=e.index,n=this.getFeature({tag:t.tag,script:t.script});if(!n)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+t.tag+"' for script '"+t.script+"'.");for(var a=this.getFeatureLookups(n),o=[].concat(e.context),s=0;s<a.length;s++)for(var x=a[s],E=this.getLookupSubtables(x),T=0;T<E.length;T++){var p=E[T],R=this.getSubstitutionType(x,p),N=this.getLookupMethod(x,p),g=void 0;switch(R){case"11":g=N(e.current),g&&o.splice(r,1,new Dn({id:11,tag:t.tag,substitution:g}));break;case"12":g=N(e.current),g&&o.splice(r,1,new Dn({id:12,tag:t.tag,substitution:g}));break;case"63":g=N(e),Array.isArray(g)&&g.length&&o.splice(r,1,new Dn({id:63,tag:t.tag,substitution:g}));break;case"41":g=N(e),g&&o.splice(r,1,new Dn({id:41,tag:t.tag,substitution:g}));break;case"21":g=N(e.current),g&&o.splice(r,1,new Dn({id:21,tag:t.tag,substitution:g}));break}e=new yr(o,r),!(Array.isArray(g)&&!g.length)&&(g=null)}return o.length?o:null};hr.prototype.supports=function(t){if(!t.script)return!1;this.getScriptFeatures(t.script);var e=this.features.hasOwnProperty(t.script);if(!t.tag)return e;var r=this.features[t.script].some(function(n){return n.tag===t.tag});return e&&r};hr.prototype.getLookupSubtables=function(t){return t.subtables||null};hr.prototype.getLookupByIndex=function(t){var e=this.font.tables.gsub.lookups;return e[t]||null};hr.prototype.getFeatureLookups=function(t){return t.lookupListIndexes.map(this.getLookupByIndex.bind(this))};hr.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var r=this.features[e.script];return r?r.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function cc(t){var e=t.current,r=t.get(-1);return r===null&&hn(e)||!hn(r)&&hn(e)}function Tc(t){var e=t.get(1);return e===null||!hn(e)}var Ic={startCheck:cc,endCheck:Tc};function dc(t){var e=t.current,r=t.get(-1);return(hn(e)||un(e))&&!hn(r)}function uc(t){var e=t.get(1);switch(!0){case e===null:return!0;case(!hn(e)&&!un(e)):var r=sc(e);if(!r)return!0;if(r){var n=!1;if(n=t.lookahead.some(function(a){return hn(a)||un(a)}),!n)return!0}break;default:return!1}}var pc={startCheck:dc,endCheck:uc};function Sc(t,e,r){e[r].setState(t.tag,t.substitution)}function Cc(t,e,r){e[r].setState(t.tag,t.substitution)}function gc(t,e,r){t.substitution.forEach(function(n,a){var o=e[r+a];o.setState(t.tag,n)})}function Rc(t,e,r){var n=e[r];n.setState(t.tag,t.substitution.ligGlyph);for(var a=t.substitution.components.length,o=0;o<a;o++)n=e[r+o+1],n.setState("deleted",!0)}var wA={11:Sc,12:Cc,63:gc,41:Rc};function Do(t,e,r){t instanceof Dn&&wA[t.id]&&wA[t.id](t,e,r)}function yc(t){for(var e=[].concat(t.backtrack),r=e.length-1;r>=0;r--){var n=e[r],a=bs(n),o=un(n);if(!a&&!o)return!0;if(a)return!1}return!1}function mc(t){if(bs(t.current))return!1;for(var e=0;e<t.lookahead.length;e++){var r=t.lookahead[e],n=un(r);if(!n)return!0}return!1}function Nc(t){var e=this,r="arab",n=this.featuresTags[r],a=this.tokenizer.getRangeTokens(t);if(a.length!==1){var o=new yr(a.map(function(x){return x.getState("glyphIndex")}),0),s=new yr(a.map(function(x){return x.char}),0);a.forEach(function(x,E){if(!un(x.char)){o.setCurrentIndex(E),s.setCurrentIndex(E);var T=0;yc(s)&&(T|=1),mc(s)&&(T|=2);var p;switch(T){case 1:p="fina";break;case 2:p="init";break;case 3:p="medi";break}if(n.indexOf(p)!==-1){var R=e.query.lookupFeature({tag:p,script:r,contextParams:o});if(R instanceof Error)return console.info(R.message);R.forEach(function(N,g){N instanceof Dn&&(Do(N,a,g),o.context[g]=N.substitution)})}}})}}function YA(t,e){var r=t.map(function(n){return n.activeState.value});return new yr(r,e||0)}function Dc(t){var e=this,r="arab",n=this.tokenizer.getRangeTokens(t),a=YA(n);a.context.forEach(function(o,s){a.setCurrentIndex(s);var x=e.query.lookupFeature({tag:"rlig",script:r,contextParams:a});x.length&&(x.forEach(function(E){return Do(E,n,s)}),a=YA(n))})}function fc(t){var e=t.current,r=t.get(-1);return r===null&&ui(e)||!ui(r)&&ui(e)}function Oc(t){var e=t.get(1);return e===null||!ui(e)}var Bc={startCheck:fc,endCheck:Oc};function WA(t,e){var r=t.map(function(n){return n.activeState.value});return new yr(r,e||0)}function Hc(t){var e=this,r="latn",n=this.tokenizer.getRangeTokens(t),a=WA(n);a.context.forEach(function(o,s){a.setCurrentIndex(s);var x=e.query.lookupFeature({tag:"liga",script:r,contextParams:a});x.length&&(x.forEach(function(E){return Do(E,n,s)}),a=WA(n))})}function Dr(t){this.baseDir=t||"ltr",this.tokenizer=new Rt,this.featuresTags={}}Dr.prototype.setText=function(t){this.text=t};Dr.prototype.contextChecks={latinWordCheck:Bc,arabicWordCheck:Ic,arabicSentenceCheck:pc};function S0(t){var e=this.contextChecks[t+"Check"];return this.tokenizer.registerContextChecker(t,e.startCheck,e.endCheck)}function Fc(){return S0.call(this,"latinWord"),S0.call(this,"arabicWord"),S0.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function Mc(){var t=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(r){var n=t.tokenizer.getRangeTokens(r);t.tokenizer.replaceRange(r.startIndex,r.endOffset,n.reverse())})}Dr.prototype.registerFeatures=function(t,e){var r=this,n=e.filter(function(a){return r.query.supports({script:t,tag:a})});this.featuresTags.hasOwnProperty(t)?this.featuresTags[t]=this.featuresTags[t].concat(n):this.featuresTags[t]=n};Dr.prototype.applyFeatures=function(t,e){if(!t)throw new Error("No valid font was provided to apply features");this.query||(this.query=new hr(t));for(var r=0;r<e.length;r++){var n=e[r];this.query.supports({script:n.script})&&this.registerFeatures(n.script,n.tags)}};Dr.prototype.registerModifier=function(t,e,r){this.tokenizer.registerModifier(t,e,r)};function fo(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function Gc(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){fo.call(this);var r=this.tokenizer.getContextRanges("arabicWord");r.forEach(function(n){Nc.call(t,n)})}}function Pc(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var r=this.featuresTags[e];if(r.indexOf("rlig")!==-1){fo.call(this);var n=this.tokenizer.getContextRanges("arabicWord");n.forEach(function(a){Dc.call(t,a)})}}}function bc(){var t=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var r=this.featuresTags[e];if(r.indexOf("liga")!==-1){fo.call(this);var n=this.tokenizer.getContextRanges("latinWord");n.forEach(function(a){Hc.call(t,a)})}}}Dr.prototype.checkContextReady=function(t){return!!this.tokenizer.getContext(t)};Dr.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(Gc.call(this),Pc.call(this)),this.checkContextReady("latinWord")&&bc.call(this),this.checkContextReady("arabicSentence")&&Mc.call(this)};Dr.prototype.processText=function(t){(!this.text||this.text!==t)&&(this.setText(t),Fc.call(this),this.applyFeaturesToContexts())};Dr.prototype.getBidiText=function(t){return this.processText(t),this.tokenizer.getText()};Dr.prototype.getTextGlyphs=function(t){this.processText(t);for(var e=[],r=0;r<this.tokenizer.tokens.length;r++){var n=this.tokenizer.tokens[r];if(!n.state.deleted){var a=n.activeState.value;e.push(Array.isArray(a)?a[0]:a)}}return e};function xt(t){t=t||{},t.tables=t.tables||{},t.empty||(Ta(t.familyName,"When creating a new Font object, familyName is required."),Ta(t.styleName,"When creating a new Font object, styleName is required."),Ta(t.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),Ta(t.ascender,"When creating a new Font object, ascender is required."),Ta(t.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:t.familyName||" "},fontSubfamily:{en:t.styleName||" "},fullName:{en:t.fullName||t.familyName+" "+t.styleName},postScriptName:{en:t.postScriptName||(t.familyName+t.styleName).replace(/\s/g,"")},designer:{en:t.designer||" "},designerURL:{en:t.designerURL||" "},manufacturer:{en:t.manufacturer||" "},manufacturerURL:{en:t.manufacturerURL||" "},license:{en:t.license||" "},licenseURL:{en:t.licenseURL||" "},version:{en:t.version||"Version 0.1"},description:{en:t.description||" "},copyright:{en:t.copyright||" "},trademark:{en:t.trademark||" "}},this.unitsPerEm=t.unitsPerEm||1e3,this.ascender=t.ascender,this.descender=t.descender,this.createdTimestamp=t.createdTimestamp,this.tables=Object.assign(t.tables,{os2:Object.assign({usWeightClass:t.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:t.widthClass||this.usWidthClasses.MEDIUM,fsSelection:t.fsSelection||this.fsSelectionValues.REGULAR},t.tables.os2)})),this.supported=!0,this.glyphs=new Ur.GlyphSet(this,t.glyphs||[]),this.encoding=new es(this),this.position=new _a(this),this.substitution=new Lr(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new Fs(this)}})}xt.prototype.hasChar=function(t){return this.encoding.charToGlyphIndex(t)!==null};xt.prototype.charToGlyphIndex=function(t){return this.encoding.charToGlyphIndex(t)};xt.prototype.charToGlyph=function(t){var e=this.charToGlyphIndex(t),r=this.glyphs.get(e);return r||(r=this.glyphs.get(0)),r};xt.prototype.updateFeatures=function(t){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(r){return t[r]})}:e})};xt.prototype.stringToGlyphs=function(t,e){var r=this,n=new Dr,a=function(R){return r.charToGlyphIndex(R.char)};n.registerModifier("glyphIndex",null,a);var o=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;n.applyFeatures(this,o);for(var s=n.getTextGlyphs(t),x=s.length,E=new Array(x),T=this.glyphs.get(0),p=0;p<x;p+=1)E[p]=this.glyphs.get(s[p])||T;return E};xt.prototype.nameToGlyphIndex=function(t){return this.glyphNames.nameToGlyphIndex(t)};xt.prototype.nameToGlyph=function(t){var e=this.nameToGlyphIndex(t),r=this.glyphs.get(e);return r||(r=this.glyphs.get(0)),r};xt.prototype.glyphIndexToName=function(t){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(t):""};xt.prototype.getKerningValue=function(t,e){t=t.index||t,e=e.index||e;var r=this.position.defaultKerningTables;return r?this.position.getKerningValue(r,t,e):this.kerningPairs[t+","+e]||0};xt.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};xt.prototype.forEachGlyph=function(t,e,r,n,a,o){e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:72,a=Object.assign({},this.defaultRenderOptions,a);var s=1/this.unitsPerEm*n,x=this.stringToGlyphs(t,a),E;if(a.kerning){var T=a.script||this.position.getDefaultScriptName();E=this.position.getKerningTables(T,a.language)}for(var p=0;p<x.length;p+=1){var R=x[p];if(o.call(this,R,e,r,n,a),R.advanceWidth&&(e+=R.advanceWidth*s),a.kerning&&p<x.length-1){var N=E?this.position.getKerningValue(E,R.index,x[p+1].index):this.getKerningValue(R,x[p+1]);e+=N*s}a.letterSpacing?e+=a.letterSpacing*n:a.tracking&&(e+=a.tracking/1e3*n)}return e};xt.prototype.getPath=function(t,e,r,n,a){var o=new Mt;return this.forEachGlyph(t,e,r,n,a,function(s,x,E,T){var p=s.getPath(x,E,T,a,this);o.extend(p)}),o};xt.prototype.getPaths=function(t,e,r,n,a){var o=[];return this.forEachGlyph(t,e,r,n,a,function(s,x,E,T){var p=s.getPath(x,E,T,a,this);o.push(p)}),o};xt.prototype.getAdvanceWidth=function(t,e,r){return this.forEachGlyph(t,0,0,e,r,function(){})};xt.prototype.draw=function(t,e,r,n,a,o){this.getPath(e,r,n,a,o).draw(t)};xt.prototype.drawPoints=function(t,e,r,n,a,o){this.forEachGlyph(e,r,n,a,o,function(s,x,E,T){s.drawPoints(t,x,E,T)})};xt.prototype.drawMetrics=function(t,e,r,n,a,o){this.forEachGlyph(e,r,n,a,o,function(s,x,E,T){s.drawMetrics(t,x,E,T)})};xt.prototype.getEnglishName=function(t){var e=this.names[t];if(e)return e.en};xt.prototype.validate=function(){var t=this;function e(n,a){}function r(n){var a=t.getEnglishName(n);a&&a.trim().length>0}r("fontFamily"),r("weightName"),r("manufacturer"),r("copyright"),r("version"),this.unitsPerEm>0};xt.prototype.toTables=function(){return RL.fontToTable(this)};xt.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};xt.prototype.toArrayBuffer=function(){for(var t=this.toTables(),e=t.encode(),r=new ArrayBuffer(e.length),n=new Uint8Array(r),a=0;a<e.length;a++)n[a]=e[a];return r};xt.prototype.download=function(t){var e=this.getEnglishName("fontFamily"),r=this.getEnglishName("fontSubfamily");t=t||e.replace(/\s/g,"")+"-"+r+".otf";var n=this.toArrayBuffer();if(mL())if(window.URL=window.URL||window.webkitURL,window.URL){var a=new DataView(n),o=new Blob([a],{type:"font/opentype"}),s=document.createElement("a");s.href=window.URL.createObjectURL(o),s.download=t;var x=document.createEvent("MouseEvents");x.initEvent("click",!0,!1),s.dispatchEvent(x)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var E=require("fs"),T=NL(n);E.writeFileSync(t,T)}};xt.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};xt.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};xt.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function vs(t,e){var r=JSON.stringify(t),n=256;for(var a in e){var o=parseInt(a);if(!(!o||o<256)){if(JSON.stringify(e[a])===r)return o;n<=o&&(n=o+1)}}return e[n]=t,n}function vc(t,e,r){var n=vs(e.name,r);return[{name:"tag_"+t,type:"TAG",value:e.tag},{name:"minValue_"+t,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+t,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+t,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+t,type:"USHORT",value:0},{name:"nameID_"+t,type:"USHORT",value:n}]}function Uc(t,e,r){var n={},a=new Re.Parser(t,e);return n.tag=a.parseTag(),n.minValue=a.parseFixed(),n.defaultValue=a.parseFixed(),n.maxValue=a.parseFixed(),a.skip("uShort",1),n.name=r[a.parseUShort()]||{},n}function wc(t,e,r,n){for(var a=vs(e.name,n),o=[{name:"nameID_"+t,type:"USHORT",value:a},{name:"flags_"+t,type:"USHORT",value:0}],s=0;s<r.length;++s){var x=r[s].tag;o.push({name:"axis_"+t+" "+x,type:"FIXED",value:e.coordinates[x]<<16})}return o}function Yc(t,e,r,n){var a={},o=new Re.Parser(t,e);a.name=n[o.parseUShort()]||{},o.skip("uShort",1),a.coordinates={};for(var s=0;s<r.length;++s)a.coordinates[r[s].tag]=o.parseFixed();return a}function Wc(t,e){var r=new Ce.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:t.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:t.instances.length},{name:"instanceSize",type:"USHORT",value:4+t.axes.length*4}]);r.offsetToData=r.sizeOf();for(var n=0;n<t.axes.length;n++)r.fields=r.fields.concat(vc(n,t.axes[n],e));for(var a=0;a<t.instances.length;a++)r.fields=r.fields.concat(wc(a,t.instances[a],t.axes,e));return r}function kc(t,e,r){var n=new Re.Parser(t,e),a=n.parseULong();Fe.argument(a===65536,"Unsupported fvar table version.");var o=n.parseOffset16();n.skip("uShort",1);for(var s=n.parseUShort(),x=n.parseUShort(),E=n.parseUShort(),T=n.parseUShort(),p=[],R=0;R<s;R++)p.push(Uc(t,e+o+R*x,r));for(var N=[],g=e+o+s*x,K=0;K<E;K++)N.push(Yc(t,g+K*T,p,r));return{axes:p,instances:N}}var Kc={make:Wc,parse:kc},_c=function(){return{coverage:this.parsePointer(te.coverage),attachPoints:this.parseList(te.pointer(te.uShortList))}},Vc=function(){var t=this.parseUShort();if(Fe.argument(t===1||t===2||t===3,"Unsupported CaretValue table version."),t===1)return{coordinate:this.parseShort()};if(t===2)return{pointindex:this.parseShort()};if(t===3)return{coordinate:this.parseShort()}},Jc=function(){return this.parseList(te.pointer(Vc))},zc=function(){return{coverage:this.parsePointer(te.coverage),ligGlyphs:this.parseList(te.pointer(Jc))}},Zc=function(){return this.parseUShort(),this.parseList(te.pointer(te.coverage))};function Xc(t,e){e=e||0;var r=new te(t,e),n=r.parseVersion(1);Fe.argument(n===1||n===1.2||n===1.3,"Unsupported GDEF table version.");var a={version:n,classDef:r.parsePointer(te.classDef),attachList:r.parsePointer(_c),ligCaretList:r.parsePointer(zc),markAttachClassDef:r.parsePointer(te.classDef)};return n>=1.2&&(a.markGlyphSets=r.parsePointer(Zc)),a}var jc={parse:Xc},mr=new Array(10);mr[1]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{posFormat:1,coverage:this.parsePointer(te.coverage),value:this.parseValueRecord()};if(r===2)return{posFormat:2,coverage:this.parsePointer(te.coverage),values:this.parseValueRecordList()};Fe.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};mr[2]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();Fe.assert(r===1||r===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var n=this.parsePointer(te.coverage),a=this.parseUShort(),o=this.parseUShort();if(r===1)return{posFormat:r,coverage:n,valueFormat1:a,valueFormat2:o,pairSets:this.parseList(te.pointer(te.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(a),value2:this.parseValueRecord(o)}})))};if(r===2){var s=this.parsePointer(te.classDef),x=this.parsePointer(te.classDef),E=this.parseUShort(),T=this.parseUShort();return{posFormat:r,coverage:n,valueFormat1:a,valueFormat2:o,classDef1:s,classDef2:x,class1Count:E,class2Count:T,classRecords:this.parseList(E,te.list(T,function(){return{value1:this.parseValueRecord(a),value2:this.parseValueRecord(o)}}))}}};mr[3]=function(){return{error:"GPOS Lookup 3 not supported"}};mr[4]=function(){return{error:"GPOS Lookup 4 not supported"}};mr[5]=function(){return{error:"GPOS Lookup 5 not supported"}};mr[6]=function(){return{error:"GPOS Lookup 6 not supported"}};mr[7]=function(){return{error:"GPOS Lookup 7 not supported"}};mr[8]=function(){return{error:"GPOS Lookup 8 not supported"}};mr[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function Qc(t,e){e=e||0;var r=new te(t,e),n=r.parseVersion(1);return Fe.argument(n===1||n===1.1,"Unsupported GPOS table version "+n),n===1?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(mr)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(mr),variations:r.parseFeatureVariationsList()}}var qc=new Array(10);function $c(t){return new Ce.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Ce.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new Ce.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new Ce.LookupList(t.lookups,qc)}])}var eT={parse:Qc,make:$c};function tT(t){var e={};t.skip("uShort");var r=t.parseUShort();Fe.argument(r===0,"Unsupported kern sub-table version."),t.skip("uShort",2);var n=t.parseUShort();t.skip("uShort",3);for(var a=0;a<n;a+=1){var o=t.parseUShort(),s=t.parseUShort(),x=t.parseShort();e[o+","+s]=x}return e}function rT(t){var e={};t.skip("uShort");var r=t.parseULong();r>1&&console.warn("Only the first kern subtable is supported."),t.skip("uLong");var n=t.parseUShort(),a=n&255;if(t.skip("uShort"),a===0){var o=t.parseUShort();t.skip("uShort",3);for(var s=0;s<o;s+=1){var x=t.parseUShort(),E=t.parseUShort(),T=t.parseShort();e[x+","+E]=T}}return e}function nT(t,e){var r=new Re.Parser(t,e),n=r.parseUShort();if(n===0)return tT(r);if(n===1)return rT(r);throw new Error("Unsupported kern table version ("+n+").")}var aT={parse:nT};function iT(t,e,r,n){for(var a=new Re.Parser(t,e),o=n?a.parseUShort:a.parseULong,s=[],x=0;x<r+1;x+=1){var E=o.call(a);n&&(E*=2),s.push(E)}return s}var oT={parse:iT};function AT(t,e){var r=require("fs");r.readFile(t,function(n,a){if(n)return e(n.message);e(null,ms(a))})}function sT(t,e){var r=new XMLHttpRequest;r.open("get",t,!0),r.responseType="arraybuffer",r.onload=function(){return r.response?e(null,r.response):e("Font could not be loaded: "+r.statusText)},r.onerror=function(){e("Font could not be loaded")},r.send()}function kA(t,e){for(var r=[],n=12,a=0;a<e;a+=1){var o=Re.getTag(t,n),s=Re.getULong(t,n+4),x=Re.getULong(t,n+8),E=Re.getULong(t,n+12);r.push({tag:o,checksum:s,offset:x,length:E,compression:!1}),n+=16}return r}function lT(t,e){for(var r=[],n=44,a=0;a<e;a+=1){var o=Re.getTag(t,n),s=Re.getULong(t,n+4),x=Re.getULong(t,n+8),E=Re.getULong(t,n+12),T=void 0;x<E?T="WOFF":T=!1,r.push({tag:o,offset:s,compression:T,compressedLength:x,length:E}),n+=20}return r}function ft(t,e){if(e.compression==="WOFF"){var r=new Uint8Array(t.buffer,e.offset+2,e.compressedLength-2),n=new Uint8Array(e.length);if(eE(r,n),n.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var a=new DataView(n.buffer,0);return{data:a,offset:0}}else return{data:t,offset:e.offset}}function Oo(t,e){e=e??{};var r,n,a=new xt({empty:!0}),o=new DataView(t,0),s,x=[],E=Re.getTag(o,0);if(E==="\0\0\0"||E==="true"||E==="typ1")a.outlinesFormat="truetype",s=Re.getUShort(o,4),x=kA(o,s);else if(E==="OTTO")a.outlinesFormat="cff",s=Re.getUShort(o,4),x=kA(o,s);else if(E==="wOFF"){var T=Re.getTag(o,4);if(T==="\0\0\0")a.outlinesFormat="truetype";else if(T==="OTTO")a.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+E);s=Re.getUShort(o,12),x=lT(o,s)}else throw new Error("Unsupported OpenType signature "+E);for(var p,R,N,g,K,Y,V,_,$,Q,Te,he,Ae=0;Ae<s;Ae+=1){var ce=x[Ae],pe=void 0;switch(ce.tag){case"cmap":pe=ft(o,ce),a.tables.cmap=$1.parse(pe.data,pe.offset),a.encoding=new ts(a.tables.cmap);break;case"cvt ":pe=ft(o,ce),he=new Re.Parser(pe.data,pe.offset),a.tables.cvt=he.parseShortList(ce.length/2);break;case"fvar":R=ce;break;case"fpgm":pe=ft(o,ce),he=new Re.Parser(pe.data,pe.offset),a.tables.fpgm=he.parseByteList(ce.length);break;case"head":pe=ft(o,ce),a.tables.head=Es.parse(pe.data,pe.offset),a.unitsPerEm=a.tables.head.unitsPerEm,r=a.tables.head.indexToLocFormat;break;case"hhea":pe=ft(o,ce),a.tables.hhea=Ls.parse(pe.data,pe.offset),a.ascender=a.tables.hhea.ascender,a.descender=a.tables.hhea.descender,a.numberOfHMetrics=a.tables.hhea.numberOfHMetrics;break;case"hmtx":V=ce;break;case"ltag":pe=ft(o,ce),n=cs.parse(pe.data,pe.offset);break;case"maxp":pe=ft(o,ce),a.tables.maxp=Ts.parse(pe.data,pe.offset),a.numGlyphs=a.tables.maxp.numGlyphs;break;case"name":Q=ce;break;case"OS/2":pe=ft(o,ce),a.tables.os2=V0.parse(pe.data,pe.offset);break;case"post":pe=ft(o,ce),a.tables.post=Cs.parse(pe.data,pe.offset),a.glyphNames=new go(a.tables.post);break;case"prep":pe=ft(o,ce),he=new Re.Parser(pe.data,pe.offset),a.tables.prep=he.parseByteList(ce.length);break;case"glyf":N=ce;break;case"loca":$=ce;break;case"CFF ":p=ce;break;case"kern":_=ce;break;case"GDEF":g=ce;break;case"GPOS":K=ce;break;case"GSUB":Y=ce;break;case"meta":Te=ce;break}}var me=ft(o,Q);if(a.tables.name=Ss.parse(me.data,me.offset,n),a.names=a.tables.name,N&&$){var we=r===0,Ye=ft(o,$),it=oT.parse(Ye.data,Ye.offset,a.numGlyphs,we),ot=ft(o,N);a.glyphs=Os.parse(ot.data,ot.offset,it,a,e)}else if(p){var Ie=ft(o,p);xs.parse(Ie.data,Ie.offset,a,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var ct=ft(o,V);if(hs.parse(a,ct.data,ct.offset,a.numberOfHMetrics,a.numGlyphs,a.glyphs,e),CE(a,e),_){var oe=ft(o,_);a.kerningPairs=aT.parse(oe.data,oe.offset)}else a.kerningPairs={};if(g){var qe=ft(o,g);a.tables.gdef=jc.parse(qe.data,qe.offset)}if(K){var At=ft(o,K);a.tables.gpos=eT.parse(At.data,At.offset),a.position.init()}if(Y){var Oe=ft(o,Y);a.tables.gsub=gs.parse(Oe.data,Oe.offset)}if(R){var Et=ft(o,R);a.tables.fvar=Kc.parse(Et.data,Et.offset,a.names)}if(Te){var Lt=ft(o,Te);a.tables.meta=Rs.parse(Lt.data,Lt.offset),a.metas=a.tables.meta}return a}function xT(t,e,r){r=r??{};var n=typeof window>"u",a=n&&!r.isUrl?AT:sT;return new Promise(function(o,s){a(t,function(x,E){if(x){if(e)return e(x);s(x)}var T;try{T=Oo(E,r)}catch(p){if(e)return e(p,null);s(p)}if(e)return e(null,T);o(T)})})}function ET(t,e){var r=require("fs"),n=r.readFileSync(t);return Oo(ms(n),e)}var pn=Object.freeze({__proto__:null,Font:xt,Glyph:Er,Path:Mt,BoundingBox:Qr,_parse:Re,parse:Oo,load:xT,loadSync:ET});function LT(t){let e,r;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(t,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t);else throw console.warn("No XML document parser found."),r=new SyntaxError("No XML document parser found."),r;if(e.getElementsByTagName("parsererror").length){const E=e.getElementsByTagName("div")[0].innerHTML;throw r=new SyntaxError(x(E)),r}return{name:e.documentElement.nodeName,attributes:s(e.documentElement.attributes),content:o(e.documentElement)};function o(E){const T=E.childNodes;if(T.length===0)return x(E.nodeValue);const p=[];let R,N,g;for(const K of T)R={},K.nodeName!=="#comment"&&(N=o(K),g=s(K.attributes),K.nodeName==="#text"&&JSON.stringify(g)==="{}"?R=x(N):(R.name=K.nodeName,R.attributes=g,R.content=N),R!==""&&p.push(R));return p}function s(E){if(!E||!E.length)return{};const T={};for(const p of E)T[p.name]=x(p.value);return T}function x(E){try{return E=E.replace(/^\s+|\s+$/g,""),E.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}}let C0=0;async function Bo(t){const e=document.getElementById("progress-indicator__message");if(e){const r=document.getElementById("progress-indicator__bar");r&&(C0=(C0+.95)%100,r.style.backgroundPosition=`${C0}%`,t&&(e.innerHTML=t)),await ta()}}function hT(){let t=C({id:"progress-indicator__wrapper"}),e=C({id:"progress-indicator__message",innerHTML:"Working..."}),r=C({tag:"div",id:"progress-indicator__bar"});return ne(t,[e,r]),t}class fr{constructor(){}changed(){this.cache&&(this.cache={}),this.parent&&this.parent.changed&&this.parent.changed()}get ident(){return this.__ID||""}get objType(){return this._objType||this.constructor.name}get displayType(){if(this.id){if(this.id.startsWith("liga-"))return"Ligature";if(this.id.startsWith("comp-"))return"Component";if(this.id.startsWith("glyph-"))return"Glyph";if(this.id.startsWith("kern-"))return"Kern Group"}return this.objType}set objType(e){this._objType=e}get cache(){return this._cache||(this._cache={}),this._cache}set cache(e={}){this._cache=e}save(e=!1){const r=ar(this);return e?r.objType=this.objType:delete r.objType,r.cache&&delete r.cache,r}clone(){return new this.constructor(this.save(!0))}toString(){return Ra(this.save())}print(e=0,r=!1){let n="";for(let x=0;x<e;x++)n+="  ";let a=`${n}{${this.objType} ${r||""}
`;n+="  ";const o=this.save();let s;for(const x of Object.keys(o))s=this[x],s.print?a+=`${n}${x}: ${s.print(e+1)}
`:typeof s!="function"&&(typeof s=="object"?a+=`${n}${x}: ${JSON.stringify(s)}
`:a+=`${n}${x}: ${s}
`);return a+=`${n.substring(2)}}/${this.objType} ${r||""}`,a}get isLockable(){return!1}isLocked(){return!1}lock(){}unlock(){}}function cT(){let t=["💖","🦧","🐆","✅","🐋","😈","🦑"],e="";for(let r=0;r<3;r++)e+=t[Math.floor(Math.random()*t.length)];return e}const TT=Object.freeze(Object.defineProperty({__proto__:null,GlyphElement:fr,makeRandomID:cT},Symbol.toStringTag,{value:"Module"}));class Us extends fr{constructor({x:e=0,y:r=0,parent:n=!1}={}){super(),this.parent=n,this.x=e,this.y=r,this.objType="Coord"}save(){return{x:tr(this.x),y:tr(this.y)}}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{`;return n+=`x: ${je(this._x)?this._x:"--"}  `,n+=`y: ${je(this._y)?this._y:"--"}`,n+="}",n}get x(){return isNaN(this._x)?(this._x=0,console.warn("Coord.x was NaN, setting to 0"),0):this._x}get y(){return isNaN(this._y)?(this._y=0,console.warn("Coord.y was NaN, setting to 0"),0):this._y}set x(e=0){e=tr(e),isNaN(e)?this._x=0:this._x=e,this.changed()}set y(e=0){e=tr(e),isNaN(e)?this._y=0:this._y=e,this.changed()}}const IT=Object.freeze(Object.defineProperty({__proto__:null,Coord:Us},Symbol.toStringTag,{value:"Module"}));class nt extends fr{constructor({coord:e={x:0,y:0},use:r=!0,xLock:n=!1,yLock:a=!1,parent:o=!1,type:s=!1}={}){super(),this.parent=o,this.coord=e,this.use=r,this.xLock=n,this.yLock=a,this.type=s,this.objType="ControlPoint"}save(e=!1){const r={coord:this.coord.save(e)};return this.use||(r.use=!1),this.xLock&&(r.xLock=!0),this.yLock&&(r.yLock=!0),e&&(r.objType=this.objType),this.type==="p"&&delete r.use,!e&&this.__ID&&delete this.__ID,r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{ControlPoint
`;return r+="  ",n+=`${r}coord: ${this.coord.print(e+1)}
`,this.type!=="p"&&(n+=`${r}use: ${this.use}
`),n+=`${r.substring(2)}}`,n}get x(){return this.use?this._coord.x:this.parent.p.x}get y(){return this.use?this._coord.y:this.parent.p.y}get coord(){return this._coord}get use(){return this._use!==!1}get xLock(){return this._xLock}get yLock(){return this._yLock}get type(){return this._type}set x(e){if(this.type==="p"){let r=e-this.x;this.parent.updatePathPointPosition("p",r,0)}else this.coord.x=e,this.use=!0}set y(e){if(this.type==="p"){let r=e-this.y;this.parent.updatePathPointPosition("p",0,r)}else this.coord.y=e,this.use=!0}set coord(e){this._coord=new Us(e),this._coord.parent=this,this.use=!0}set use(e){this._use=!!e,this.changed()}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set type(e){this._type=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1)}rotate(e,r){yi(this.coord,e,r)}}const dT=Object.freeze(Object.defineProperty({__proto__:null,ControlPoint:nt},Symbol.toStringTag,{value:"Module"}));class sr extends fr{constructor({xMin:e,xMax:r,yMin:n,yMax:a}={}){return super(),this.xMin=e,this.xMax=r,this.yMin=n,this.yMax=a,this.objType="Maxes",this}save(e=!1){const r={};return je(this._xMin)&&(r.xMin=this._xMin),je(this._xMax)&&(r.xMax=this._xMax),je(this._yMin)&&(r.yMin=this._yMin),je(this._yMax)&&(r.yMax=this._yMax),e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{`;return n+=`xMin:${this._xMin} `,n+=`xMax:${this._xMax} `,n+=`yMin:${this._yMin} `,n+=`yMax:${this._yMax}`,n+="}",n}get xMin(){return je(this._xMin)?this._xMin:Number.MAX_SAFE_INTEGER}get xMax(){return je(this._xMax)?this._xMax:Number.MIN_SAFE_INTEGER}get yMin(){return je(this._yMin)?this._yMin:Number.MAX_SAFE_INTEGER}get yMax(){return je(this._yMax)?this._yMax:Number.MIN_SAFE_INTEGER}get center(){return{x:this.width/2+this.xMin,y:this.height/2+this.yMin}}get width(){return this.xMax-this.xMin}get height(){return this.yMax-this.yMin}set xMin(e){e=parseFloat(e),isNaN(e)||(this._xMin=e)}set xMax(e){e=parseFloat(e),isNaN(e)?delete this._xMax:this._xMax=e}set yMin(e){e=parseFloat(e),isNaN(e)?delete this._yMin:this._yMin=e}set yMax(e){e=parseFloat(e),isNaN(e)?delete this._yMax:this._yMax=e}roundAll(e=3){this.xMin=ae(this.xMin,e),this.xMax=ae(this.xMax,e),this.yMin=ae(this.yMin,e),this.yMax=ae(this.yMax,e)}isPointInside(e,r){return e<=this.xMax&&e>=this.xMin&&r<=this.yMax&&r>=this.yMin}}function z0(t,e,r=!0){let n;return r?n=t.xMin<e.xMax&&t.xMax>e.xMin&&t.yMin<e.yMax&&t.yMax>e.yMin:n=t.xMin<=e.xMax&&t.xMax>=e.xMin&&t.yMin<=e.yMax&&t.yMax>=e.yMin,n}function Ba(t){const e=ws();let r;for(let n=0;n<t.length;n++)r=new sr(t[n]),e.xMin=Math.min(e.xMin,r.xMin),e.xMax=Math.max(e.xMax,r.xMax),e.yMin=Math.min(e.yMin,r.yMin),e.yMax=Math.max(e.yMax,r.yMax);return new sr(e)}function Ho(t){return t.xMax===0&&t.xMin===0&&t.yMax===0&&t.yMin===0}function ws(){return{xMin:Number.MAX_SAFE_INTEGER,xMax:Number.MIN_SAFE_INTEGER,yMin:Number.MAX_SAFE_INTEGER,yMax:Number.MIN_SAFE_INTEGER}}function uT(){return{xMin:Number.MIN_SAFE_INTEGER,xMax:Number.MAX_SAFE_INTEGER,yMin:Number.MIN_SAFE_INTEGER,yMax:Number.MAX_SAFE_INTEGER}}const pT=Object.freeze(Object.defineProperty({__proto__:null,Maxes:sr,getOverallMaxes:Ba,isAllZeros:Ho,maxesMaxBounds:uT,maxesMinBounds:ws,maxesOverlap:z0},Symbol.toStringTag,{value:"Module"}));class Kt extends fr{constructor({p:e,h1:r,h2:n,type:a="corner",parent:o=!1}={}){super(),this.parent=o,this.p=e,this.h1=r,this.h2=n,this.type=a,this.objType="PathPoint",this.hasOverlappingHandle("h1")&&(this.h1.use=!1),this.hasOverlappingHandle("h2")&&(this.h2.use=!1)}save(e=!1){const r={type:this.type,p:this.p.save(e)};return(this.h1.use||!this.h1.use&&!this.hasOverlappingHandle("h1"))&&(r.h1=this.h1.save(e)),(this.h2.use||!this.h2.use&&!this.hasOverlappingHandle("h2"))&&(r.h2=this.h2.save(e)),e&&(r.objType=this.objType),!e&&this.__ID&&delete this.__ID,r}print(e=0,r=!1){let n="";for(let s=0;s<e;s++)n+="  ";let a=parseInt(r)?` ${parseInt(r)}`:"",o=`${n}{PathPoint${a}
`;return n+="  ",o+=`${n}type: ${this.type}
`,o+=`${n}p: ${this.p.print(e+1)}
`,o+=`${n}h1: ${this.h1.print(e+1)}
`,o+=`${n}h2: ${this.h2.print(e+1)}
`,o+=`${n.substring(2)}}/PathPoint${a}`,o}get p(){return this._p}get h1(){return this._h1}get h2(){return this._h2}get type(){return this._type}get pointNumber(){if(!this.parent)return!1;const e=this.parent.pathPoints;if(!e)return!1;for(let r=0;r<e.length;r++)if(e[r]===this)return r;return!1}set p(e={}){e.type="p",this._p=new nt(e),this._p.parent=this}set h1(e={}){e.coord||(e.coord={x:this.p.x-50,y:this.p.y},e.use=!1),e.type="h1",this._h1=new nt(e),this._h1.parent=this}set h2(e={}){e.coord||(e.coord={x:this.p.x+50,y:this.p.y},e.use=!1),e.type="h2",this._h2=new nt(e),this._h2.parent=this}set type(e){e==="symmetric"?this.makeSymmetric():e==="flat"?this.makeFlat():this._type="corner"}updatePathPointPosition(e="p",r=0,n=0){switch(r=parseFloat(r),n=parseFloat(n),r=Number.isFinite(r)?r:0,n=Number.isFinite(n)?n:0,e){case"p":this.p.coord.x+=r,this.p.coord.y+=n,this.h1.coord.x+=r,this.h1.coord.y+=n,this.h2.coord.x+=r,this.h2.coord.y+=n;break;case"h1":this.h1.coord.x+=r,this.h1.coord.y+=n,this.h1.use&&(this.type==="symmetric"?this.makeSymmetric("h1"):this.type==="flat"&&this.makeFlat("h1"));break;case"h2":this.h2.coord.x+=r,this.h2.coord.y+=n,this.h2.use&&(this.type==="symmetric"?this.makeSymmetric("h2"):this.type==="flat"&&this.makeFlat("h2"));break}}makeSymmetric(e){if(this._type="symmetric",!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&ut(this.p.coord,this.h1.coord)&&ut(this.p.coord,this.h2.coord))){this.h2.x-=200,this.h1.x+=200,this.h1.use=!0,this.h2.use=!0;return}this.h1.use=!0,this.h2.use=!0;let r,n,a=!1;switch(e){case"h1":r=this.p.x-this.h1.x+this.p.x,this.h2.x!==r&&(this.h2.x=r,a=!0),n=this.p.y-this.h1.y+this.p.y,this.h2.y!==n&&(this.h2.y=n,a=!0);break;case"h2":r=this.p.x-this.h2.x+this.p.x,this.h1.x!==r&&(this.h1.x=r,a=!0),n=this.p.y-this.h2.y+this.p.y,this.h1.y!==n&&(this.h1.y=n,a=!0);break}return this._type="symmetric",a&&(this.h1.use=!0,this.h2.use=!0),this}makeFlat(e){if(this._type="flat",this.isFlat())return;if(!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&ut(this.p.coord,this.h1.coord)&&ut(this.p.coord,this.h2.coord))){this.h2.x-=300,this.h1.x+=100;return}this.h1.use=!0,this.h2.use=!0;const r=ln(this.h1.coord,this.p.coord),n=ln(this.h2.coord,this.p.coord),a=zn(this.p.coord,this.h1.coord),o=zn(this.p.coord,this.h2.coord);let s,x,E,T;return e==="h1"?(E=Math.cos(r)*o,T=Math.tan(r)*E,s=this.p.x+E*-1,x=this.p.y+T*-1,!isNaN(s)&&!isNaN(x)&&(this.h2.x!==s&&(this.h2.x=s),this.h2.y!==x&&(this.h2.y=x))):e==="h2"&&(E=Math.cos(n)*a,T=Math.tan(n)*E,s=this.p.x+E*-1,x=this.p.y+T*-1,!isNaN(s)&&!isNaN(x)&&(this.h1.x!==s&&(this.h1.x=s),this.h1.y!==x&&(this.h1.y=x))),this}isFlat(){if(!this.h1.use||!this.h2.use)return!1;if(this.p.x===this.h1.x&&this.p.x===this.h2.x||this.p.y===this.h1.y&&this.p.y===this.h2.y)return!0;const e=ln(this.h1.coord,this.p.coord),r=ln(this.h2.coord,this.p.coord);return ae(Math.abs(e)+Math.abs(r),2)===3.14}reconcileHandle(e="h1"){let r=e==="h1"?"h2":"h1";this.type==="symmetric"?this.makeSymmetric(r):this.type==="flat"&&this.makeFlat(r)}resolvePointType(){if(this.isFlat()){const e=zn(this.p.coord,this.h1.coord),r=zn(this.p.coord,this.h2.coord);e===r?this._type="symmetric":this._type="flat"}else this._type="corner";return this.type}makePointedTo(e,r,n=!1,a="h2",o=!1){const s=this.p.x-e,x=this.p.y-r,E=x>=0?-1:1,T=-1,p=Math.sqrt(s*s+x*x),R=Math.acos(s/p);return n=n||p/3,this[a].x=this.p.x+Math.cos(R)*n*T,this[a].y=this.p.y+Math.sin(R)*n*E,o||(this.type==="corner"?this.makeFlat(a):this.makeSymmetric(a)),this}hasOverlappingHandle(e){return!this[e]||!this[e].coord?!1:ut(this[e].coord,this.p.coord)}rotate(e,r){return this.p.rotate(e,r),this.h1.rotate(e,r),this.h2.rotate(e,r),this}resetHandles(){return this.type="corner",this.h1.use=!0,this.h2.use=!0,this.h2.x=this.p.x-100,this.h2.y=this.p.y,this.h1.x=this.p.x+100,this.h1.y=this.p.y,this}roundAll(e=9){this.p.x=ae(this.p.x,e),this.p.y=ae(this.p.y,e);let r=this.h1.use;this.h1.x=ae(this.h1.x,e),this.h1.y=ae(this.h1.y,e),this.h1.use=r;let n=this.h2.use;return this.h2.x=ae(this.h2.x,e),this.h2.y=ae(this.h2.y,e),this.h2.use=n,this}}const ST=Object.freeze(Object.defineProperty({__proto__:null,PathPoint:Kt},Symbol.toStringTag,{value:"Module"}));class br{constructor(e=0,r=0){e=parseFloat(e),this.x=isNaN(e)?0:e,r=parseFloat(r),this.y=isNaN(r)?0:r}}const CT=Object.freeze(Object.defineProperty({__proto__:null,XYPoint:br},Symbol.toStringTag,{value:"Module"}));class Zt extends fr{constructor({p1x:e=0,p1y:r=0,p2x:n,p2y:a,p3x:o,p3y:s,p4x:x=0,p4y:E=0,point1ID:T=!1,point2ID:p=!1}={}){super(),this.p1x=tr(e),this.p1y=tr(r),this.p4x=tr(x),this.p4y=tr(E),this.p2x=je(n)?tr(n):this.p1x,this.p2y=je(a)?tr(a):this.p1y,this.p3x=je(o)?tr(o):this.p4x,this.p3y=je(s)?tr(s):this.p4y,T&&(this.point1ID=T),p&&(this.point2ID=p),this.objType="Segment",this.recalculateMaxes()}save(e=!1){const r={p1x:this.p1x,p1y:this.p1y,p2x:this.p2x,p2y:this.p2y,p3x:this.p3x,p3y:this.p3y,p4x:this.p4x,p4y:this.p4y};return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Segment
`;return r+="  ",n+=`${r+"  "}line: ${this.lineType}
`,n+=`${r+"  "}p1: ${this.p1x}/${this.p1y}
`,n+=`${r+"  "}p2: ${this.p2x}/${this.p2y}
`,n+=`${r+"  "}p3: ${this.p3x}/${this.p3y}
`,n+=`${r+"  "}p4: ${this.p4x}/${this.p4y}
`,n+=`${r+"  "}maxes: ${this.maxes.print(e+1)}
`,n+=`${r.substring(2)}}`,n}get lineType(){return je(this._lineType)||this.determineLineType(),this._lineType}get length(){return this.cache.length?this.cache.length:(this.cache.length=this.calculateLength(),this.cache.length)}get baseLength(){return pa(this.p1x,this.p1y,this.p4x,this.p4y)}get topLength(){const e=pa(this.p1x,this.p1y,this.p2x,this.p2y),r=pa(this.p2x,this.p2y,this.p3x,this.p3y),n=pa(this.p3x,this.p3y,this.p4x,this.p4y);return e+r+n}get quickLength(){return Math.max(this.topLength,this.baseLength)}get maxes(){return(!this.cache.maxes||Ki(this.cache.maxes))&&this.recalculateMaxes(),new sr(this.cache.maxes)}get valuesAsArray(){return[this.p1x,this.p1y,this.p2x,this.p2y,this.p3x,this.p3y,this.p4x,this.p4y]}set maxes(e){this.cache.maxes={},this.cache.maxes=new sr(e)}split(e=.5){return typeof e=="object"&&je(e.x)&&je(e.y)?this.splitAtPoint(e):isNaN(e)?!1:this.splitAtTime(e)}splitAtPoint(e){if(this.containsTerminalPoint(e,.1))return!1;if(this.lineType==="horizontal"||this.lineType==="vertical"){let r,n,a=!1;return this.lineType==="horizontal"?ae(e.y,2)===ae(this.p1y,2)&&e.x>Math.min(this.p1x,this.p4x)&&e.x<Math.max(this.p1x,this.p4x)&&(r=e.x,n=this.p1y,a=!0):this.lineType==="vertical"&&ae(e.x,2)===ae(this.p1x,2)&&e.y>Math.min(this.p1y,this.p4y)&&e.y<Math.max(this.p1y,this.p4y)&&(r=this.p1x,n=e.y,a=!0),a?[new Zt({p1x:this.p1x,p1y:this.p1y,p4x:r,p4y:n}),new Zt({p1x:r,p1y:n,p4x:this.p4x,p4y:this.p4y})]:!1}else if(this.pointIsWithinMaxes(e)){const n=this.getSplitFromXYPoint(e,.1);if(n&&n.distance<.1)return this.splitAtTime(n.split)}return!1}splitAtTime(e=.5){const r=1-e,n=this.p1x*r+this.p2x*e,a=this.p1y*r+this.p2y*e,o=this.p2x*r+this.p3x*e,s=this.p2y*r+this.p3y*e,x=this.p3x*r+this.p4x*e,E=this.p3y*r+this.p4y*e,T=n*r+o*e,p=a*r+s*e,R=o*r+x*e,N=s*r+E*e,g=T*r+R*e,K=p*r+N*e;return[new Zt({p1x:this.p1x,p1y:this.p1y,p2x:n,p2y:a,p3x:T,p3y:p,p4x:g,p4y:K}),new Zt({p1x:g,p1y:K,p2x:R,p2y:N,p3x:x,p3y:E,p4x:this.p4x,p4y:this.p4y})]}splitAtManyPoints(e,r=1){const n=[new Zt(ar(this))];let a;for(let o=0;o<e.length;o++)for(let s=0;s<n.length;s++)n[s].containsTerminalPoint(e[o],r)||(a=n[s].splitAtPoint(e[o]),a&&n.splice(s,1,a[0],a[1]));return n}pointIsWithinMaxes(e){const r=this.maxes;return e.x<=r.xMax&&e.x>=r.xMin&&e.y<=r.yMax&&e.y>=r.yMin}convertToLine(){return new Zt({p1x:this.p1x,p1y:this.p1y,p4x:this.p4x,p4y:this.p4y})}getSplitFromXYPoint(e,r=1){const n=this.quickLength*1e3;let a=999999999,o=!1,s,x;for(let E=0;E<1;E+=1/n)if(s=this.findXYPointFromSplit(E),x=Math.sqrt((s.x-e.x)*(s.x-e.x)+(s.y-e.y)*(s.y-e.y)),x<a&&(a=x,o={split:E,distance:x,x:s.x,y:s.y},r&&o.distance<r))return o;return o}calculateLength(){if(this.lineType)return this.baseLength;let e;if(this.quickLength<10)return this.quickLength;{const n=this.split();return e=n[0].calculateLength()+n[1].calculateLength(),e}}findXYPointFromSplit(e=.5){const r=1-e,n=this.p1x*r+this.p2x*e,a=this.p1y*r+this.p2y*e,o=this.p2x*r+this.p3x*e,s=this.p2y*r+this.p3y*e,x=this.p3x*r+this.p4x*e,E=this.p3y*r+this.p4y*e,T=n*r+o*e,p=a*r+s*e,R=o*r+x*e,N=s*r+E*e,g=T*r+R*e,K=p*r+N*e;return new br(g,K)}getReverse(){return new Zt({p1x:this.p4x,p1y:this.p4y,p2x:this.p3x,p2y:this.p3y,p3x:this.p2x,p3y:this.p2y,p4x:this.p1x,p4y:this.p1y})}getXYPoint(e){if(e===1)return new br(this.p1x,this.p1y);if(e===2)return new br(this.p2x,this.p2y);if(e===3)return new br(this.p3x,this.p3y);if(e===4)return new br(this.p4x,this.p4y)}getFastMaxes(){const e={xMin:Math.min(this.p1x,Math.min(this.p2x,Math.min(this.p3x,this.p4x))),yMin:Math.min(this.p1y,Math.min(this.p2y,Math.min(this.p3y,this.p4y))),xMax:Math.max(this.p1x,Math.max(this.p2x,Math.max(this.p3x,this.p4x))),yMax:Math.max(this.p1y,Math.max(this.p2y,Math.max(this.p3y,this.p4y)))};return new sr(e)}recalculateMaxes(){function e(_,$){_.xMin>$?_.xMin=$:_.xMax<$&&(_.xMax=$)}function r(_,$){_.yMin>$?_.yMin=$:_.yMax<$&&(_.yMax=$)}function n(_,$,Q,Te,he){const Ae=1-_;return Ae*Ae*Ae*$+3*Ae*Ae*_*Q+3*Ae*_*_*Te+_*_*_*he}const a={xMin:Math.min(this.p1x,this.p4x),yMin:Math.min(this.p1y,this.p4y),xMax:Math.max(this.p1x,this.p4x),yMax:Math.max(this.p1y,this.p4y)};if(this.lineType)return this.maxes=a,this.maxes;const o=this.p2x-this.p1x,s=this.p2y-this.p1y;let x=this.p3x-this.p2x,E=this.p3y-this.p2y;const T=this.p4x-this.p3x,p=this.p4y-this.p3y;let R,N,g,K,Y,V;return(this.p2x<a.xMin||this.p2x>a.xMax||this.p3x<a.xMin||this.p3x>a.xMax)&&(o+T!==2*x&&(x+=.01),R=2*(o-x),N=2*(o-2*x+T),g=(2*x-2*o)*(2*x-2*o)-2*o*N,K=Math.sqrt(g),Y=(R+K)/N,V=(R-K)/N,0<Y&&Y<1&&e(a,n(Y,this.p1x,this.p2x,this.p3x,this.p4x)),0<V&&V<1&&e(a,n(V,this.p1x,this.p2x,this.p3x,this.p4x))),(this.p2y<a.yMin||this.p2y>a.yMax||this.p3y<a.yMin||this.p3y>a.yMax)&&(s+p!==2*E&&(E+=.01),R=2*(s-E),N=2*(s-2*E+p),g=(2*E-2*s)*(2*E-2*s)-2*s*N,K=Math.sqrt(g),Y=(R+K)/N,V=(R-K)/N,0<Y&&Y<1&&r(a,n(Y,this.p1y,this.p2y,this.p3y,this.p4y)),0<V&&V<1&&r(a,n(V,this.p1y,this.p2y,this.p3y,this.p4y))),this.maxes=a,this.maxes}isLineOverlappedByLine(e){if(!this.lineType||!e.lineType)return!1;const r=e.containsPointOnLine(this.getXYPoint(1)),n=e.containsPointOnLine(this.getXYPoint(4));return r&&n}containsTerminalPoint(e,r=1){return this.containsStartPoint(e,r)?"start":this.containsEndPoint(e,r)?"end":!1}containsStartPoint(e,r=1){return ut(this.getXYPoint(1),e,r)}containsEndPoint(e,r=1){return ut(this.getXYPoint(4),e,r)}containsPointOnCurve(e,r){if(this.containsTerminalPoint(e,r))return!0;if(this.lineType)return this.containsPointOnLine(e);r=je(r)?r:.1;const n=this.getSplitFromXYPoint(e,r);return!!(n&&n.distance<r)}containsPointOnLine(e){if(!this.lineType||this.containsTerminalPoint(e))return!1;function r(n,a,o){return n<=a&&a<=o||o<=a&&a<=n}return!!(r(this.p1x,e.x,this.p4x)&&r(this.p1y,e.y,this.p4y)&&pi(this.getXYPoint(1),this.getXYPoint(4),e))}precedes(e,r=1){const n=this.getXYPoint(4),a=e.getXYPoint(1);return ut(n,a,r)}determineLineType(e){e=je(e)?e:1;let r=!1;return ae(this.p1x,e)===ae(this.p2x,e)&&ae(this.p1x,e)===ae(this.p3x,e)&&ae(this.p1x,e)===ae(this.p4x,e)&&(r="vertical"),ae(this.p1y,e)===ae(this.p2y,e)&&ae(this.p1y,e)===ae(this.p3y,e)&&ae(this.p1y,e)===ae(this.p4y,e)&&(r="horizontal"),pi(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(2))&&pi(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(3))&&(r="diagonal"),this._lineType=r,r}roundAll(e=3){return this.p1x=ae(this.p1x,e),this.p1y=ae(this.p1y,e),this.p2x=ae(this.p2x,e),this.p2y=ae(this.p2y,e),this.p3x=ae(this.p3x,e),this.p3y=ae(this.p3y,e),this.p4x=ae(this.p4x,e),this.p4y=ae(this.p4y,e),this}}function pa(t,e,r,n){const a=Math.abs(t-r),o=Math.abs(e-n);return Math.sqrt(a*a+o*o)}function pi(t,e,r,n){n=je(n)?n:3;const a=(e.x-t.x)*(r.y-t.y),o=(r.x-t.x)*(e.y-t.y);return ae(a,n)===ae(o,n)}const gT=Object.freeze(Object.defineProperty({__proto__:null,Segment:Zt,getLineLength:pa,pointsAreCollinear:pi},Symbol.toStringTag,{value:"Module"}));class Ha extends fr{constructor({segments:e=[]}={}){super(),this.segments=e,this.objType="PolySegment"}save(e=!1){const r={segments:[]};for(let n=0;n<this._segments.length;n++)r.segments[n]=this._segments[n].save(e);return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{PolySegment
`;return r+="  ",n+=`${r}segments: [
`,this.segments.forEach(a=>{n+=a.print(e+2),n+=`
`}),n+=`${r}]
`,n+=`${r.substring(2)}}`,n}get segments(){return this._segments}set segments(e=[]){this._segments=[];for(let r=0;r<e.length;r++)this._segments[r]=new Zt(e[r])}get valuesAsArray(){let e=[];return this.segments.forEach(r=>e.push(r.valuesAsArray)),e}get path(){function e(x,E){const T={h1:{coord:{x:x.p3x,y:x.p3y}},p:{coord:{x:E.p1x,y:E.p1y}},h2:{coord:{x:E.p2x,y:E.p2y}}};return ut(T.h1.coord,T.p.coord)&&(T.h1.use=!1),ut(T.h2.coord,T.p.coord)&&(T.h2.use=!1),x.lineType&&(T.h1.use=!1),E.lineType&&(T.h2.use=!1),T}const r=[],n=ar(this._segments),a=new br(n[0].p1x,n[0].p1y),o=new br(n.at(-1).p4x,n.at(-1).p4y);ut(a,o)||n.push(new Zt({p1x:o.x,p1y:o.y,p4x:a.x,p4y:a.y})),r.push(e(n.at(-1),n[0]));let s;for(let x=0;x<n.length-1;x++)s=n[x+1],r.push(e(n[x],s));return new ir({pathPoints:r})}containsSegment(e){for(let r=0;r<this._segments.length;r++)if(Z0(this._segments[r],e))return!0;return!1}roundAll(e=3){for(let r=0;r<this._segments.length;r++)this._segments[r].roundAll(e);return this}findIntersections(){let e,r,n=[];for(let a=0;a<this._segments.length;a++)for(let o=a;o<this._segments.length;o++)o!==a&&(e=new Zt(this._segments[a]),r=new Zt(this._segments[o]),n=n.concat(Fo(e,r)));return n=n.filter(Fn),n}splitSegmentsAtIntersections(e=this.findIntersections(),r=1){let n,a;e.forEach(function(s,x){n=s.split("/")[0],a=s.split("/")[1],e[x]=new br(n,a)});let o=[];for(let s=0;s<this._segments.length;s++)o=o.concat(this._segments[s].splitAtManyPoints(e,r));return this._segments=o,this.cache.splits=e,this}stitchSegmentsTogether(){const e=this.segments;let r=[];const n=[];function a(E){let T,p;for(let R=0;R<e.length;R++)if(T=e[R],T.objType==="Segment"&&T.containsStartPoint(E,0))return p=new Zt(T),T.objType="-"+n.length+"."+r.length,p;for(let R=0;R<e.length;R++)if(T=e[R].getReverse(),e[R].objType==="Segment"&&T.containsStartPoint(E,0))return p=new Zt(T),e[R].objType="R"+n.length+"."+r.length,p;return!1}function o(){for(let E=0;E<e.length;E++)if(e[E].objType==="Segment")return e[E].getXYPoint(1)}let s,x=o();for(let E=0;E<e.length;E++)s=a(x),s?(r.push(s),x=s.getXYPoint(4)):r.length&&(n.push(new Ha({segments:r})),r[r.length-1].containsEndPoint(r[0].getXYPoint(1)),r=[],x=o(),E--);return r.length&&(n.push(new Ha({segments:r})),r[r.length-1].containsEndPoint(r[0].getXYPoint(1))),n}removeZeroLengthSegments(){let e;for(let r=0;r<this._segments.length;r++)e=this._segments[r],ut(e.getXYPoint(1),e.getXYPoint(4))&&(e.lineType?e.objType="LINE ZERO":ut(e.getXYPoint(1),e.getXYPoint(2))&&ut(e.getXYPoint(1),e.getXYPoint(3))&&(e.objType="ZERO"));return this._segments=this._segments.filter(function(r){return r.objType==="Segment"}),this}removeRedundantLineSegments(){for(let e=0;e<this._segments.length;e++)for(let r=0;r<this._segments.length;r++)if(e!==r&&this._segments[e]&&this._segments[r]){let n=this._segments[e],a=this._segments[r];n.isLineOverlappedByLine(a)&&(n.objType="REDUNDANT"),a.isLineOverlappedByLine(n)&&(a.objType="REDUNDANT"),a.objType==="Segment"&&n.objType==="Segment"&&Z0(n,a)&&(n.objType="DUPLICATE")}return this._segments=this._segments.filter(function(e){return e.objType==="Segment"}),this}removeNonConnectingSegments(){let e,r;const n=[],a=[];for(let s=0;s<this._segments.length;s++){e=this._segments[s],n[s]=!1,a[s]=!1;for(let x=0;x<this._segments.length&&(r=this._segments[x],!(s!==x&&(r.containsTerminalPoint(e.getXYPoint(1),1)&&(n[s]=!0),r.containsTerminalPoint(e.getXYPoint(4),1)&&(a[s]=!0),n[s]&&a[s])));x++);}for(let s=0;s<this._segments.length;s++)n[s]&&a[s]||(this._segments[s].objType="NON CONNECTED");return this._segments=this._segments.filter(function(s){return s.objType==="Segment"}),this}combineInlineSegments(){let e,r;for(let n=0;n<this.segments.length;n++)e=this.segments[n],r=this.segments[n+1],n===this.segments.length-1&&(r=this.segments[0]),e.lineType===r.lineType&&(this.segments[n]=new Zt({p1x:e.p1x,p1y:e.p1y,p4x:r.p4x,p4y:r.p4y}),this.segments.splice(n+1,1),n--)}}function Fo(t,e,r){if(r=r||0,r===0){const V=Ys(t,e);if(V.length)return V}if(r===0){const V=Ws(t,e);if(V.length)return V}let n=[];r===0&&(t.lineType||e.lineType)&&(n=ks(t,e));const a=t.getFastMaxes(),o=e.getFastMaxes();if(!z0(a,o))return[];const s=9e-4,x=3;let E=a.xMax-a.xMin,T=a.yMax-a.yMin,p=o.xMax-o.xMin,R=o.yMax-o.yMin;if(E<s&&T<s&&p<s&&R<s){E*=.5,T*=.5,p*=.5,R*=.5;let V=(a.xMin+E+(o.xMin+p))/2,_=(a.yMin+T+(o.yMin+R))/2;return V=ae(V,x),_=ae(_,x),[""+V+"/"+_]}let N=[];const g=t.splitAtTime(.5),K=e.splitAtTime(.5);let Y=[[g[0],K[0]],[g[0],K[1]],[g[1],K[1]],[g[1],K[0]]];return Y=Y.filter(function(V){return z0(V[0].getFastMaxes(),V[1].getFastMaxes(),"inclusive")}),Y.forEach(function(V){N=N.concat(Fo(V[0],V[1],r+1))}),N=N.concat(n),N=N.filter(Fn),N}function Z0(t,e,r=1){if(ut(t.getXYPoint(1),e.getXYPoint(1),r)&&ut(t.getXYPoint(4),e.getXYPoint(4),r)){if(t.lineType&&e.lineType)return!0;if(ut(t.getXYPoint(2),e.getXYPoint(2),r)&&ut(t.getXYPoint(3),e.getXYPoint(3),r))return!0}return!1}function Ys(t,e){const r=[];return t.containsPointOnLine(e.getXYPoint(1))&&r.push(""+e.p1x+"/"+e.p1y),t.containsPointOnLine(e.getXYPoint(4))&&r.push(""+e.p4x+"/"+e.p4y),e.containsPointOnLine(t.getXYPoint(1))&&r.push(""+t.p1x+"/"+t.p1y),e.containsPointOnLine(t.getXYPoint(4))&&r.push(""+t.p4x+"/"+t.p4y),r.length,r}function Ws(t,e){if(!t.lineType||!e.lineType)return[];const r=t.p4x-t.p1x,n=t.p4y-t.p1y,a=e.p4x-e.p1x,o=e.p4y-e.p1y,s=(-1*n*(t.p1x-e.p1x)+r*(t.p1y-e.p1y))/(-1*a*n+r*o),x=(a*(t.p1y-e.p1y)-o*(t.p1x-e.p1x))/(-1*a*n+r*o);if(s>=0&&s<=1&&x>=0&&x<=1){const E=tr(t.p1x+x*r),T=tr(t.p1y+x*n);return t.containsTerminalPoint({x:E,y:T})&&e.containsTerminalPoint({x:E,y:T})?[]:[""+E+"/"+T]}return[]}function ks(t,e){const r=t.getXYPoint(1),n=t.getXYPoint(4),a=e.getXYPoint(1),o=e.getXYPoint(4),s=[];return t.containsPointOnCurve(a)&&s.push(`${a.x}/${a.y}`),t.containsPointOnCurve(o)&&s.push(`${o.x}/${o.y}`),e.containsPointOnCurve(r)&&s.push(`${r.x}/${r.y}`),e.containsPointOnCurve(n)&&s.push(`${n.x}/${n.y}`),s}const RT=Object.freeze(Object.defineProperty({__proto__:null,PolySegment:Ha,findCrossingLineSegmentIntersections:Ws,findEndPointSegmentIntersections:ks,findOverlappingLineSegmentIntersections:Ys,findSegmentIntersections:Fo,segmentsAreEqual:Z0},Symbol.toStringTag,{value:"Module"}));class ir extends fr{constructor({name:e="Path",objType:r="Path",pathPoints:n=[],winding:a,xLock:o=!1,yLock:s=!1,wLock:x=!1,hLock:E=!1,transformOrigin:T=!1,ratioLock:p=!1,parent:R=!1}={}){super(),this.name=e,this.pathPoints=n,this.winding=a,this.xLock=o,this.yLock=s,this.wLock=x,this.hLock=E,this.transformOrigin=T,this.ratioLock=p,this.parent=R,this.objType=r}save(e=!1){const r={name:this.name,winding:this.winding,pathPoints:[]};return this.xLock&&(r.xLock=!0),this.yLock&&(r.yLock=!0),this.wLock&&(r.wLock=!0),this.hLock&&(r.hLock=!0),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(r.transformOrigin=this.transformOrigin),this.ratioLock&&(r.ratioLock=!0),this._pathPoints.forEach(n=>{r.pathPoints.push(n.save(e))}),e&&(r.objType=this.objType),!e&&this.__ID&&delete this.__ID,r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Path
`;return r+="  ",n+=`${r}winding: ${this.winding}
`,this.name!=="Path"&&(n+=`${r}name: ${this.name}
`),this.xLock&&(n+=`${r}xLock: ${this.xLock}
`),this.yLock&&(n+=`${r}yLock: ${this.yLock}
`),this.wLock&&(n+=`${r}wLock: ${this.wLock}
`),this.hLock&&(n+=`${r}hLock: ${this.hLock}
`),this.ratioLock&&(n+=`${r}ratioLock: ${this.ratioLock}
`),n+=`${r}pathPoints: [
`,this._pathPoints.forEach((a,o)=>{n+=a.print(e+2,o),n+=`
`}),n+=`${r}]
`,n+=`${r.substring(2)}}/Path`,n}get name(){return this._name}get pathPoints(){return this._pathPoints}get winding(){return je(this._winding)||(this.findWinding?this.findWinding():this._winding=0),this._winding}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get xLock(){return this._xLock}get yLock(){return this._yLock}get wLock(){return this._wLock}get hLock(){return this._hLock}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin}get ratioLock(){return this._ratioLock}get maxes(){return this.cache.maxes?Ki(this.cache.maxes)?this.recalculateMaxes():Ho(this.cache.maxes)&&this.recalculateMaxes():this.recalculateMaxes(),new sr(this.cache.maxes)}get svgPathData(){return this.cache.svgPathData?this.cache.svgPathData:(this.cache.svgPathData=this.makeSVGPathData(),this.cache.svgPathData)}set name(e){e=Lo(e),e!==""&&(this._name=e)}set pathPoints(e){if(this._pathPoints=[],e&&e.length)for(let r=0;r<e.length;r++)this._pathPoints[r]=new Kt(e[r]),this._pathPoints[r].parent=this}set winding(e){je(e)?this._winding=e:this.findWinding()}set x(e){this.setShapePosition(e,!1)}set y(e){this.setShapePosition(!1,e)}set height(e){this.setShapeSize({height:e})}set width(e){this.setShapeSize({width:e})}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set wLock(e){this._wLock=!!e}set hLock(e){this._hLock=!!e}set transformOrigin(e){va.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin=!1}set ratioLock(e){this._ratioLock=!!e}set maxes(e){this.cache.maxes={},this.cache.maxes=new sr(e)}set svgPathData(e){this.cache.svgPathData=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:e==="width"?this.wLock:e==="height"?this.hLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0),e==="width"&&(this.wLock=!0),e==="height"&&(this.hLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1),e==="width"&&(this.wLock=!1),e==="height"&&(this.hLock=!1)}setShapeSize({width:e=!1,height:r=!1,ratioLock:n=!1,transformOrigin:a=!1}={}){e!==!1&&(e=parseFloat(e)),r!==!1&&(r=parseFloat(r));const o=e!==!1?e-this.width:0,s=r!==!1?r-this.height:0;return this.updateShapeSize({width:o,height:s,ratioLock:n,transformOrigin:a}),this}updateShapeSize({width:e=0,height:r=0,ratioLock:n=!1,transformOrigin:a=!1}={}){let o=parseFloat(e),s=parseFloat(r);if(!o&&!s)return;if(n&&o!==s){const V=this.width/this.height;Math.abs(o)>Math.abs(s)?s=o/V:o=s*V}let x=this.width;x===0&&(x=1);let E=this.height;E===0&&(E=1);const T=Math.max(x+o,1),p=Math.max(E+s,1),R=p/E,N=T/x;if(n&&(T<=1||p<=1))return;let g=co(o,s,this.maxes,a),K=this.maxes.xMin,Y=this.maxes.yMin;this.pathPoints.forEach(V=>{V.p.coord.x=(V.p.coord.x-this.maxes.xMin)*N+K,V.h1.coord.x=(V.h1.coord.x-this.maxes.xMin)*N+K,V.h2.coord.x=(V.h2.coord.x-this.maxes.xMin)*N+K,V.p.coord.y=(V.p.coord.y-this.maxes.yMin)*R+Y,V.h1.coord.y=(V.h1.coord.y-this.maxes.yMin)*R+Y,V.h2.coord.y=(V.h2.coord.y-this.maxes.yMin)*R+Y}),this.updateShapePosition(g.deltaX,g.deltaY)}setShapePosition(e=!1,r=!1){e!==!1&&(e=parseFloat(e)),r!==!1&&(r=parseFloat(r));const n=e!==!1?e*1-this.maxes.xMin:0,a=r!==!1?r*1-this.maxes.yMax:0;this.updateShapePosition(n,a)}updateShapePosition(e=0,r=0){e=parseFloat(e),r=parseFloat(r);for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].updatePathPointPosition("p",e,r)}rotate(e,r=this.maxes.center){for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].rotate(e,r)}getNextPointNum(e=0){return e=parseInt(e),e+=1,e=e%this.pathPoints.length,e}getPreviousPointNum(e=0){return e=parseInt(e),e-=1,e<0&&(e=e+this.pathPoints.length),e}containsPoint(e,r){for(let n=0;n<this.pathPoints.length;n++)if(ut(e,this.pathPoints[n].p,.01))if(r)r=!1;else return this.pathPoints[n];return!1}makeSVGPathData(e="not specified",r=8){if(!this.pathPoints||!this.pathPoints.length)return"";let n,a,o="",s="M"+ae(this.pathPoints[0].p.x,r)+","+ae(this.pathPoints[0].p.y,r);s.indexOf("NaN")>-1&&console.warn(e+" PathPoint 0 MOVE has NaN: "+s);for(let x=0;x<this.pathPoints.length;x++)n=this.pathPoints[x],a=this.pathPoints[this.getNextPointNum(x)],o=" C"+ae(n.h2.x,r)+","+ae(n.h2.y,r)+","+ae(a.h1.x,r)+","+ae(a.h1.y,r)+","+ae(a.p.x,r)+","+ae(a.p.y,r),o.indexOf("NaN")>-1&&console.warn(e+" PathPoint "+x+" has NaN: "+o),s+=o;return s+="Z",s}makePostScript(e=0,r=0){if(!this.pathPoints)return{re:"",lastX:e,lastY:r};let n,a,o,s,x,E,T,p,R="",N=`${this.pathPoints[0].p.x-e} ${this.pathPoints[0].p.y-r} rmoveto
		`;for(let g=0;g<this.pathPoints.length;g++)n=this.pathPoints[g],a=this.pathPoints[this.getNextPointNum(g)],o=n.h2.x-n.p.x,s=n.h2.y-n.p.y,x=a.h1.x-n.h2.x,E=a.h1.y-n.h2.y,T=a.p.x-a.h1.x,p=a.p.y-a.h1.y,R=`
					${o} ${s} ${x} ${E} ${T} ${p} rrcurveto
			`,N+=R;return{re:N.replaceAll("	",""),lastX:a.p.x,lastY:a.p.y}}makePolySegment(){const e=[];for(let n=0;n<this.pathPoints.length;n++)e.push(this.makeSegment(n));return new Ha({segments:e})}makeSegment(e=0){if(e=e%this.pathPoints.length,this.cache.segments||(this.cache.segments=[]),this.cache.segments[e])return this.cache.segments[e];const r=this.pathPoints[e];let n=Math.round(Math.random()*1e4);r.pointID||(r.pointID=`point-${e}-${n}`);const a=this.getNextPointNum(e),o=this.pathPoints[a];o.pointID||(o.pointID=`point-${a}-${n}`);const s=new Zt({point1ID:r.pointID,p1x:r.p.x,p1y:r.p.y,p2x:r.h2.x,p2y:r.h2.y,p3x:o.h1.x,p3y:o.h1.y,p4x:o.p.x,p4y:o.p.y,point2ID:o.pointID});return this.cache.segments[e]=s,s}addPointsAtPathIntersections(){const e=this.makePolySegment();e.splitSegmentsAtIntersections();const r=e.path;this._pathPoints=r.pathPoints}calculateQuickSegmentLength(e=0){let r=this.makeSegment(e);return r=r.quickLength,r}findWinding(e){let r,n,a,o=-1;const s=this.pathPoints;if(s.length===2)o=s[1].p.x>s[0].p.x?-1:1;else if(s.length>2)for(let x=0;x<s.length;x++)r=(x+1)%s.length,n=(x+2)%s.length,a=(s[r].p.x-s[x].p.x)*(s[n].p.y-s[r].p.y),a-=(s[r].p.y-s[x].p.y)*(s[n].p.x-s[r].p.x),a<0?o--:a>0&&o++;return o===0&&!e&&(this.reverseWinding(),o=this.findWinding(!0)*-1,this.reverseWinding()),this._winding=o,o}reverseWinding(){let e;this.pathPoints&&(this.pathPoints.forEach(r=>{e=r.h1,r.h1=r.h2,r.h2=e}),this.pathPoints.reverse(),this.winding*=-1,(this.winding===0||!je(this.winding))&&this.findWinding(!0))}flipNS(e=this.maxes.center.y){this.pathPoints.forEach(r=>{r.p.coord.y+=(e-r.p.coord.y)*2,r.h1.coord.y+=(e-r.h1.coord.y)*2,r.h2.coord.y+=(e-r.h2.coord.y)*2}),this.reverseWinding()}flipEW(e=this.maxes.center.x){this.pathPoints.forEach(r=>{r.p.coord.x+=(e-r.p.coord.x)*2,r.h1.coord.x+=(e-r.h1.coord.x)*2,r.h2.coord.x+=(e-r.h2.coord.x)*2}),this.reverseWinding()}roundAll(e=0){return this.pathPoints.forEach(r=>r.roundAll(e)),this}addPathPoint(e){return e=new Kt(e),e.parent=this,this.pathPoints.push(e),this.findWinding(),this.changed(),e}insertPathPoint(e=0,r=.5,n=!1){const a=e===!1?this.pathPoints[0]:this.pathPoints[e],o=this.getNextPointNum(e),s=this.pathPoints[o];let x,E,T,p;if(this.pathPoints.length>1){const R=this.makeSegment(e).split(r),N=R[0],g=R[1];x={coord:{x:N.p4x,y:N.p4y}},E={coord:{x:N.p3x,y:N.p3y}},T={coord:{x:g.p2x,y:g.p2y}},p=new Kt({p:x,h1:E,h2:T}),a.type==="symmetric"&&(a.type="flat"),a.h2.x=N.p2x,a.h2.y=N.p2y,s.type==="symmetric"&&(s.type="flat"),s.h1.x=g.p3x,s.h1.y=g.p3y}else x=new nt({coord:{x:a.p.x+100,y:a.p.y+100}}),E=new nt({coord:{x:a.h2.x+100,y:a.h2.y+100}}),T=new nt({coord:{x:a.h1.x+100,y:a.h1.y+100}}),p=new Kt({p:x,h1:E,h2:T,type:a.type});return n&&p.roundAll(0),p.parent=this,this.pathPoints.splice(o,0,p),p}findClosestPointOnCurve(e=new br,r=!1){let n=1e4,a=!1,o=!1,s=999999999,x,E;for(let p=0;p<this.pathPoints.length;p++){n=this.makeSegment(p).quickLength*100;for(let R=0;R<1;R+=1/n)x=this.findXYPointFromSplit(R,p),E=Math.sqrt((x.x-e.x)*(x.x-e.x)+(x.y-e.y)*(x.y-e.y)),E<s&&(a&&a.point!==p&&(o=ar(a)),s=E,a={point:p,split:R,distance:E,x:x.x,y:x.y})}return r?o:a}findXYPointFromSplit(e,r=0){return this.pathPoints.length>1?this.makeSegment(r).findXYPointFromSplit(e):this.pathPoints[0].p}recalculateMaxes(){this.cache.maxes=new sr,this.cache.segments||(this.cache.segments=[]);let e=this.pathPoints.map((r,n)=>this.makeSegment(n).maxes);this.cache.maxes=Ba(e)}checkForNaN(){for(let e=0;e<this.pathPoints.length;e++){const r=this.pathPoints[e];if(isNaN(r.p.x)||isNaN(r.p.y)||isNaN(r.h1.x)||isNaN(r.h1.y)||isNaN(r.h2.x)||isNaN(r.h2.y))return!0}return!1}}const yT=Object.freeze(Object.defineProperty({__proto__:null,Path:ir},Symbol.toStringTag,{value:"Module"}));function KA(t){let e=[],r=(t==null?void 0:t.attributes)||{},n=Number(r.r)||Number(r.rx)||100;n=Math.abs(n);let a=Number(r.r)||Number(r.ry)||100;a=Math.abs(a);let o=Number(r.cx)||0,s=Number(r.cy)||0;if(!(n===0&&a===0)){let x={xMin:o-n,xMax:o+n,yMin:s-a,yMax:s+a};e=mT(x)}return[e]}function mT(t){let e=t.xMin,r=t.yMax,n=t.xMax,a=t.yMin,o=(n-e)/2,s=(r-a)/2,x=o*.448,E=s*.448,T={x:Pe(e+o),y:Pe(r)},p={x:Pe(e+x),y:Pe(r)},R={x:Pe(n-x),y:Pe(r)},N={x:Pe(n),y:Pe(a+s)},g={x:Pe(n),y:Pe(r-E)},K={x:Pe(n),y:Pe(a+E)},Y={x:Pe(e+o),y:Pe(a)},V={x:Pe(n-x),y:Pe(a)},_={x:Pe(e+x),y:Pe(a)},$={x:Pe(e),y:Pe(a+s)},Q={x:Pe(e),y:Pe(a+E)},Te={x:Pe(e),y:Pe(r-E)};return[[T,R,g,N],[N,K,V,Y],[Y,_,Q,$],[$,Te,p,T]]}function Ks(t,e,r,n,a,o,s,x,E,T){let p={x:t,y:e},R={x,y:E};if(t===x&&e===E||!r||!n)return[p.x,p.y,R.x,R.y,R.x,R.y];let N=NT(a);o=!!o,s=!!s;let g={},K,Y;if(T)K=T[0],Y=T[1],g={x:T[2],y:T[3]};else{p=Ei(p,N*-1),R=Ei(R,N*-1);let we=(p.x-R.x)/2,Ye=(p.y-R.y)/2,it=Ye*Ye,ot=we*we,Ie=ot/(r*r)+it/(n*n);Ie>1&&(Ie=Math.sqrt(Ie),r*=Ie,n*=Ie);let ct=r*r,oe=n*n,qe=o===s?-1:1;qe*=Math.sqrt(Math.abs((ct*oe-ct*it-oe*ot)/(ct*it+oe*ot))),g.x=qe*r*Ye/n+(p.x+R.x)/2,g.y=qe*-1*n*we/r+(p.y+R.y)/2,K=Math.asin((p.y-g.y)/n),Y=Math.asin((R.y-g.y)/n),K=p.x<g.x?Math.PI-K:K,Y=R.x<g.x?Math.PI-Y:Y;let At=Math.PI*2;K<0&&(K=At+K),Y<0&&(Y=At+Y),s&&K>Y&&(K=K-At),!s&&Y>K&&(Y=Y-At)}let V=Y-K,_=[],$=Math.PI*120/180;if(Math.abs(V)>$){let we=Y,Ye=R.x,it=R.y;Y=K+$*(s&&Y>K?1:-1),R.x=g.x+r*Math.cos(Y),R.y=g.y+n*Math.sin(Y),_=Ks(R.x,R.y,r,n,a,0,s,Ye,it,[Y,we,g.x,g.y])}let Q={x:Math.cos(K),y:Math.sin(K)},Te={x:Math.cos(Y),y:Math.sin(Y)};V=Y-K;let he=Math.tan(V/4)*4/3,Ae={x:p.x,y:p.y},ce={x:p.x+r*he*Q.y,y:p.y-n*he*Q.x};ce.x=2*Ae.x-ce.x,ce.y=2*Ae.y-ce.y;let pe={x:R.x+r*he*Te.y,y:R.y-n*he*Te.x},me={x:R.x,y:R.y};if(_=[ce.x,ce.y,pe.x,pe.y,me.x,me.y].concat(_),T)return _;{let we=[];for(let Ye=0;Ye<_.length;Ye++)Ye%2?we[Ye]=Ei({x:_[Ye-1],y:_[Ye]},N).y:we[Ye]=Ei({x:_[Ye],y:_[Ye+1]},N).x,we[Ye]=Pe(we[Ye]);return we}}function NT(t){return t*(Math.PI/180)}function Ei(t,e,r){if(!t)return;if(e===0)return t;r=r||{},r.x=r.x||0,r.y=r.y||0;const n={x:0,y:0};return n.x=Math.cos(e)*(t.x-r.x)-Math.sin(e)*(t.y-r.y)+r.x,n.y=Math.sin(e)*(t.x-r.x)+Math.cos(e)*(t.y-r.y)+r.y,n}function _A(t={}){const e=t.attributes.d||"";if(e.length===0||e.length===1)return[];let r=fT(e);return r=OT(r),r=BT(r),r=HT(r),r=FT(r),r=MT(r),r=GT(r),DT(r)}function DT(t){let e=[],r=[],n=0,a=0;return t.forEach(o=>{const s=o.parameters||[];s.forEach((x,E)=>s[E]=Pe(x)),o.type==="M"&&(n=s[0],a=s[1]),o.type==="L"&&(r.push([{x:n,y:a},!1,!1,{x:s[0],y:s[1]}]),n=s[0],a=s[1]),o.type==="C"&&(r.push([{x:n,y:a},{x:s[0],y:s[1]},{x:s[2],y:s[3]},{x:s[4],y:s[5]}]),n=s[4],a=s[5]),o.type==="Z"&&(e.push(r),r=[])}),r.length&&e.push(r),e}function fT(t){let e=[],r=!1,n=zs(t);for(let a=0;a<n.length;a++)if(VA(n.charAt(a))){r=a;break}if(r===!1)return[{type:"Z"}];for(let a=r+1;a<n.length;a++)VA(n.charAt(a))&&(e.push({type:n.charAt(r),parameters:X0(n.substring(r+1,a))}),r=a);return r<n.length-1&&e.push({type:n.charAt(r),parameters:X0(n.substring(r+1,n.length))}),e}function OT(t){let e=[],r={},n={x:0,y:0},a={x:0,y:0};return t.forEach(o=>{if(o.type==="m"||o.type==="l"){r={type:o.type==="m"?"M":"L",parameters:[]};for(let s=0;s<o.parameters.length;s+=2)a.x=o.parameters[s+0]+n.x,a.y=o.parameters[s+1]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="h"){r={type:"H",parameters:[]};for(let s=0;s<o.parameters.length;s++)a.x=o.parameters[s]+n.x,r.parameters.push(a.x),n.x=a.x;e.push(r)}else if(o.type==="v"){r={type:"V",parameters:[]};for(let s=0;s<o.parameters.length;s++)a.y=o.parameters[s]+n.y,r.parameters.push(a.y),n.y=a.y;e.push(r)}else if(o.type==="c"){r={type:"C",parameters:[]};for(let s=0;s<o.parameters.length;s+=6)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),r.parameters.push(o.parameters[s+2]+n.x),r.parameters.push(o.parameters[s+3]+n.y),a.x=o.parameters[s+4]+n.x,a.y=o.parameters[s+5]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="s"){r={type:"S",parameters:[]};for(let s=0;s<o.parameters.length;s+=4)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),a.x=o.parameters[s+2]+n.x,a.y=o.parameters[s+3]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="q"){r={type:"Q",parameters:[]};for(let s=0;s<o.parameters.length;s+=4)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),a.x=o.parameters[s+2]+n.x,a.y=o.parameters[s+3]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="t"){r={type:"T",parameters:[]};for(let s=0;s<o.parameters.length;s+=2)a.x=o.parameters[s+0]+n.x,a.y=o.parameters[s+1]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="a"){r={type:"A",parameters:[]};for(let s=0;s<o.parameters.length;s+=7)r.parameters.push(o.parameters[s+0]),r.parameters.push(o.parameters[s+1]),r.parameters.push(o.parameters[s+2]),r.parameters.push(o.parameters[s+3]),r.parameters.push(o.parameters[s+4]),a.x=o.parameters[s+5]+n.x,a.y=o.parameters[s+6]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else o.type==="z"?e.push({type:"Z"}):(e.push(o),n=Za(n,o))}),e}function BT(t){let e=[];return t.forEach(r=>{if(r.type)switch(r.type){case"Z":case"z":e.push({type:"Z"});break;case"H":case"V":case"h":case"v":for(let n=0;n<r.parameters.length;n+=2)e.push({type:r.type,parameters:[r.parameters[n]]});break;case"M":for(let n=0;n<r.parameters.length;n+=2)e.push({type:n<2?"M":"L",parameters:[r.parameters[n],r.parameters[n+1]]});break;case"m":for(let n=0;n<r.parameters.length;n+=2)e.push({type:n<2?"m":"l",parameters:[r.parameters[n],r.parameters[n+1]]});break;case"L":case"T":case"l":case"t":for(let n=0;n<r.parameters.length;n+=2)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1]]});break;case"Q":case"S":case"q":case"s":for(let n=0;n<r.parameters.length;n+=4)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3]]});break;case"C":case"c":for(let n=0;n<r.parameters.length;n+=6)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3],r.parameters[n+4],r.parameters[n+5]]});break;case"A":case"a":for(let n=0;n<r.parameters.length;n+=7)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3],r.parameters[n+4],r.parameters[n+5],r.parameters[n+6]]});break}}),e}function HT(t){let e=[],r={x:0,y:0};return t.forEach(n=>{if(n.type==="H")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[n.parameters[a],r.y]});else if(n.type==="V")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[r.x,n.parameters[a]]});else e.push(n);r=Za(r,n)}),e}function FT(t){let e=[],r={x:0,y:0},n={x:0,y:0},a={x:0,y:0},o;return t.forEach(s=>{s.type==="S"||s.type==="T"?(o=e.length>1?e.at(-1):!1,o&&o.type==="C"?(n.x=o.parameters[2],n.y=o.parameters[3]):o&&o.type==="Q"?(n.x=o.parameters[0],n.y=o.parameters[1]):(n.x=r.x,n.y=r.y),a={x:r.x-n.x+r.x,y:r.y-n.y+r.y},s.type==="S"?e.push({type:"C",parameters:[a.x,a.y,s.parameters[0],s.parameters[1],s.parameters[2],s.parameters[3]]}):s.type==="T"&&e.push({type:"Q",parameters:[a.x,a.y,s.parameters[0],s.parameters[1]]})):e.push(s),r=Za(r,s)}),e}function MT(t){let e=[],r={x:0,y:0},n,a,o,s,x,E,T,p,R,N;return t.forEach(g=>{g.type==="Q"?(n=r.x,a=r.y,o=g.parameters[0],s=g.parameters[1],x=g.parameters[2],E=g.parameters[3],T=n+2/3*(o-n),p=a+2/3*(s-a),R=x+2/3*(o-x),N=E+2/3*(s-E),e.push({type:"C",parameters:[T,p,R,N,x,E]})):e.push(g),r=Za(r,g)}),e}function GT(t){let e=[],r=[],n={x:0,y:0};return t.forEach(a=>{if(a.type==="A")for(let o=0;o<a.parameters.length;o+=7){r=Ks(n.x,n.y,a.parameters[o+0],a.parameters[o+1],a.parameters[o+2],a.parameters[o+3],a.parameters[o+4],a.parameters[o+5],a.parameters[o+6],!1);for(let s=0;s<r.length;s+=6)e.push({type:"C",parameters:[r[s+0],r[s+1],r[s+2],r[s+3],r[s+4],r[s+5]]});n={x:r.at(-2),y:r.at(-1)}}else e.push(a),n=Za(n,a)}),e}function Za(t,e){let r={x:t.x||0,y:t.y||0};switch(e.type){case"Z":case"z":break;case"H":r.x=e.parameters.at(-1);break;case"V":r.y=e.parameters.at(-1);break;case"M":case"L":case"C":case"S":case"A":case"Q":case"T":r.x=e.parameters.at(-2),r.y=e.parameters.at(-1);break;case"h":for(let n=0;n<e.parameters.length;n++)r.x+=e.parameters[n];break;case"v":for(let n=0;n<e.parameters.length;n++)r.y+=e.parameters[n];break;case"m":case"l":case"t":for(let n=0;n<e.parameters.length;n+=2)r.x+=e.parameters[n+0],r.y+=e.parameters[n+1];break;case"q":case"s":for(let n=0;n<e.parameters.length;n+=4)r.x+=e.parameters[n+2],r.y+=e.parameters[n+3];break;case"c":for(let n=0;n<e.parameters.length;n+=6)r.x+=e.parameters[n+4],r.y+=e.parameters[n+5];break;case"a":for(let n=0;n<e.parameters.length;n+=7)r.x+=e.parameters[n+5],r.y+=e.parameters[n+6];break}return r}function VA(t){return"MmLlCcSsZzHhVvAaQqTt".indexOf(t)>-1}function JA(t){var a;let e=[],r=(a=t==null?void 0:t.attributes)==null?void 0:a.points;r=zs(r);let n=X0(r);if(n.length>4){let o=Number(n[0]),s=Number(n[1]);for(let x=0;x<n.length;x+=2){let E=Number(n[x])||0,T=Number(n[x+1])||0;e.push([{x:Pe(o),y:Pe(s)},!1,!1,{x:Pe(E),y:Pe(T)}]),o=E,s=T}}return[e]}function PT(t){let e=t.attributes||{},r=Pe(e.x)||0,n=Pe(e.y)||0,a=Pe(e.width)||100,o=Pe(e.height)||100,s=r+a,x=n+o,E={x:r,y:n},T={x:s,y:n},p={x:s,y:x},R={x:r,y:x};return[[[E,!1,!1,T],[T,!1,!1,p],[p,!1,!1,R],[R,!1,!1,E]]]}function bT(t){var o;if(!t||!(t!=null&&t.attributes))return[];const e=["matrix","translate","scale","rotate","skewx","skewy"];let r=[],n,a;return(o=t.attributes)!=null&&o.transform&&(n=t.attributes.transform.replaceAll(","," "),n=n.replaceAll("  "," "),n=n.toLowerCase(),n=n.split(")"),n.forEach(s=>{let x=s.split("(");x.length===2&&(x[0]=x[0].trim(),x[1]=x[1].trim(),e.indexOf(x[0])>-1&&(a=x[1].split(" "),a=a.map(E=>Number(E)),r.push({name:x[0],args:a})))})),t.attributes["transform-origin"]&&(n=t.attributes["transform-origin"],n=n.replaceAll(","," "),n=n.replaceAll("  "," "),a=n.split(" "),a=a.map(s=>Number(s)),r.push({name:"origin",args:a})),r}function vT(t=[],e=[]){JSON.stringify(t);const r=structuredClone(t);JSON.stringify(r);let n=e.reverse(),a=[0,0];for(let o=0;o<n.length;o++)if(n[o].name==="origin"){a=n.splice(o,1),a=a[0].args;break}return JSON.stringify(n),`${a.toString()}`,n.forEach(o=>{if(zA[o.name]){`${o.name}`;const s=zA[o.name];r.forEach((x,E)=>{x.forEach((T,p)=>{const R=s(T,o.args,a);r[E][p]=R})})}}),JSON.stringify(r),r}const zA={matrix:UT,translate:wT,scale:YT,rotate:WT,skewx:kT,skewy:KT};function UT(t=[],e=[],r=[]){const n=[];for(;e.length<6;)e.push(0);`${e.toString()}`;function a(o){if(o===!1)return!1;const s=o.x,x=o.y,E={x:0,y:0};return E.x=Pe(1*e[0]*s+1*e[2]*x+1*e[4]),E.y=Pe(1*e[1]*s+1*e[3]*x+1*e[5]),E}return n[0]=a(t[0]),n[1]=a(t[1]),n[2]=a(t[2]),n[3]=a(t[3]),n}function wT(t=[],e=[],r=[]){const n=[],a=e[0]||0,o=e[1]||0;`${t[0].x}${t[0].y}`;function s(x){if(x===!1)return!1;const E={x:0,y:0};return E.x=Pe(x.x+a),E.y=Pe(x.y+o),E}return n[0]=s(t[0]),n[1]=s(t[1]),n[2]=s(t[2]),n[3]=s(t[3]),n}function YT(t=[],e=[],r=[]){const n=e[0];let a=e[1];a||(a=n);const o=[];`${e.toString()}`;function s(x){if(x===!1)return!1;const E={x:0,y:0};return E.x=Pe(x.x*n),E.y=Pe(x.y*a),E}return o[0]=s(t[0]),o[1]=s(t[1]),o[2]=s(t[2]),o[3]=s(t[3]),o}function WT(t=[],e=[],r=[]){`${r.toString()}`;const n=Mo(e[0]),a={x:0,y:0};e[1]||(e[1]=0),e[2]||(e[2]=0),a.x=e[1]+r[0],a.y=e[2]+r[1];const o=[];`${e.toString()}`;function s(x){if(!x)return!1;const E={x:0,y:0};return E.x=Pe(Math.cos(n)*(x.x-a.x)-Math.sin(n)*(x.y-a.y)+a.x),E.y=Pe(Math.sin(n)*(x.x-a.x)+Math.cos(n)*(x.y-a.y)+a.y),E}return o[0]=s(t[0]),o[1]=s(t[1]),o[2]=s(t[2]),o[3]=s(t[3]),o}function kT(t=[],e=[],r=[]){const n=[];`${e.toString()}`;const a=Mo(e[0]),o=Math.tan(a);function s(x){if(!x)return!1;const E=x.x,T=x.y,p={x:0,y:0};return p.x=Pe(E+o*T),p.y=Pe(T),p}return n[0]=s(t[0]),n[1]=s(t[1]),n[2]=s(t[2]),n[3]=s(t[3]),n}function KT(t=[],e=[],r=[]){const n=[];`${e.toString()}`;const a=Mo(e[0]),o=Math.tan(a);function s(x){if(!x)return!1;const E=x.x,T=x.y,p={x:0,y:0};return p.x=Pe(E),p.y=Pe(T+o*E),p}return n[0]=s(t[0]),n[1]=s(t[1]),n[2]=s(t[2]),n[3]=s(t[3]),n}function Mo(t){return Math.PI/180*parseFloat(t)}function _T(t){let e,r;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(t,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t);else throw console.warn("No XML document parser found."),r=new SyntaxError("No XML document parser found."),r;if(e.getElementsByTagName("parserError").length){const o=e.getElementsByTagName("div")[0].innerHTML;throw r=new SyntaxError(Fi(o)),r}return{name:e.documentElement.nodeName,attributes:Vs(e.documentElement.attributes),content:_s(e.documentElement)}}function _s(t){const e=t.childNodes;if(e.length===0)return Fi(t.nodeValue);const r=[];let n,a,o;for(const s of e)n={},s.nodeName!=="#comment"&&(a=_s(s),o=Vs(s.attributes),s.nodeName==="#text"&&JSON.stringify(o)==="{}"?n=Fi(a):(n.name=s.nodeName,n.attributes=o,n.content=a),n!==""&&r.push(n));return r}function Vs(t){if(!t||!t.length)return{};const e={};for(const r of t)e[r.name]=Fi(r.value);return e}function Fi(t){try{return t=t.replace(/^\s+|\s+$/g,""),t.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}const VT=!1;function JT(t){let e=_T(t);return Js(e)}function Js(t){if(!(t!=null&&t.content))return[];let e=[];return t.content.forEach(r=>{const n=r.name.toLowerCase(),a=bT(r);if(ZA[n]){let o=ZA[n](r);a&&(o=vT(o,a)),e=e.concat(o)}}),e}const ZA={circle:KA,ellipse:KA,path:_A,glyph:_A,polygon:JA,polyline:JA,rect:PT,g:Js};function zs(t){return t=t.replace(/\s+/g,","),t=t.replace(/e/gi,"e"),t=t.replace(/e-/g,"~~~"),t=t.replace(/-/g,",-"),t=t.replace(/~~~/g,"e-"),t=t.replace(/e\+/g,"~~~"),t=t.replace(/\+/g,","),t=t.replace(/~~~/g,"e+"),t=t.replace(/,+/g,","),t}function X0(t=""){let e=[];return t.charAt(0)===","&&(t=t.substring(1)),t.charAt(t.length-1)===","&&(t=t.substring(0,t.length-1)),t.length>0&&(t=t.split(","),t.forEach(r=>{if(r=r.split("."),r.length===1)e.push(Number(r[0]));else if(r.length===2)e.push(Number(r.join(".")));else if(r.length>2){e.push(+`${r[0]}.${r[1]}`);for(let n=2;n<r.length;n++)e.push(+`0.${r[n]}`)}})),e}function Pe(t){return t=zT(t),t=Zs(t,VT),t}function Zs(t,e=!1){return t?e===!1?parseFloat(t):(t=parseFloat(t),+(Math.round(`${t}e${e}`)+`e-${e}`)||0):0}function zT(t){const e=String(t);return(e.indexOf("00000")>-1||e.indexOf("99999")>-1)&&(t=Zs(t,5)),t}class Xr extends fr{constructor({link:e=!1,name:r="Component Instance",translateX:n=0,translateY:a=0,resizeWidth:o=0,resizeHeight:s=0,isFlippedNS:x=!1,isFlippedEW:E=!1,reverseWinding:T=!1,rotation:p=0,rotateFirst:R=!1,xLock:N=!1,yLock:g=!1,wLock:K=!1,hLock:Y=!1,ratioLock:V=!1,parent:_=!1}={}){super(),this.parent=_,this.name=r,this.link=e,this.translateX=n,this.translateY=a,this.resizeWidth=o,this.resizeHeight=s,this.isFlippedNS=x,this.isFlippedEW=E,this.reverseWinding=T,this.rotation=p,this.rotateFirst=R,this.xLock=N,this.yLock=g,this.wLock=K,this.hLock=Y,this.ratioLock=V,this.objType="ComponentInstance"}save(e=!1){const r={link:this.link};return this.name!=="Component Instance"&&(r.name=this.name),this.translateX!==0&&(r.translateX=this.translateX),this.translateY!==0&&(r.translateY=this.translateY),this.resizeWidth!==0&&(r.resizeWidth=this.resizeWidth),this.resizeHeight!==0&&(r.resizeHeight=this.resizeHeight),this.isFlippedNS!==!1&&(r.isFlippedNS=this.isFlippedNS),this.isFlippedEW!==!1&&(r.isFlippedEW=this.isFlippedEW),this.reverseWinding!==!1&&(r.reverseWinding=this.reverseWinding),this.rotation!==0&&(r.rotation=this.rotation),this.rotateFirst!==!1&&(r.rotateFirst=this.rotateFirst),this.xLock!==!1&&(r.xLock=this.xLock),this.yLock!==!1&&(r.yLock=this.yLock),this.wLock!==!1&&(r.wLock=this.wLock),this.hLock!==!1&&(r.hLock=this.hLock),this.ratioLock!==!1&&(r.ratioLock=this.ratioLock),e&&(r.objType=this.objType),r}get transformedGlyph(){return this.cache.transformedGlyph||(this.cache.transformedGlyph=this.makeTransformedGlyph()),this.cache.transformedGlyph}makeTransformedGlyph(){const e=this.getCrossLinkedItem();if(!e)return console.warn(`Tried to get Component: ${this.link} but it doesn't exist - bad usedIn array maintenance.`),!1;const r=kn(e);return(this.translateX||this.translateY||this.resizeWidth||this.resizeHeight||this.isFlippedEW||this.isFlippedNS||this.reverseWinding||this.rotation)&&(this.rotateFirst&&r.rotate(ya(this.rotation*-1),r.maxes.center),this.isFlippedEW&&r.flipEW(),this.isFlippedNS&&r.flipNS(),r.updateGlyphPosition(this.translateX,this.translateY,!0),r.updateGlyphSize({width:this.resizeWidth,height:this.resizeHeight}),this.reverseWinding&&r.reverseWinding(),this.rotateFirst||r.rotate(ya(this.rotation*-1),r.maxes.center)),r}getCrossLinkedItem(){var n;let e=(n=this==null?void 0:this.parent)==null?void 0:n.parent,r;return e&&e.getItem&&(r=e.getItem(this.link)),r}get link(){return this._link}get name(){return this._name}get translateX(){return this._translateX}get translateY(){return this._translateY}get resizeWidth(){return this._scaleW}get resizeHeight(){return this._scaleH}get isFlippedEW(){return this._isFlippedEW}get isFlippedNS(){return this._isFlippedNS}get reverseWinding(){return this._reverseWinding}get rotation(){return this._rotation}get rotateFirst(){return this._rotateFirst}get xLock(){return this._xLock}get yLock(){return this._yLock}get wLock(){return this._wLock}get hLock(){return this._hLock}get ratioLock(){return this._ratioLock}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get width(){return this.transformedGlyph.maxes.width}get height(){return this.transformedGlyph.maxes.height}get maxes(){return this.transformedGlyph.maxes}get center(){return this.transformedGlyph.maxes.center}get svgPathData(){return this.transformedGlyph.svgPathData}set link(e){this._link=e,this.changed()}set name(e=""){e=Lo(e),e!==""&&(this._name=e)}set translateX(e){this._translateX=parseFloat(e),isNaN(this._translateX)&&(this._translateX=0),this.changed()}set translateY(e){this._translateY=parseFloat(e),isNaN(this._translateY)&&(this._translateY=0),this.changed()}set resizeWidth(e){this._scaleW=parseFloat(e),isNaN(this._scaleW)&&(this._scaleW=0),this.changed()}set resizeHeight(e){this._scaleH=parseFloat(e),isNaN(this._scaleH)&&(this._scaleH=0),this.changed()}set isFlippedNS(e){this._isFlippedNS=!!e,this.changed()}set isFlippedEW(e){this._isFlippedEW=!!e,this.changed()}set reverseWinding(e){this._reverseWinding=!!e,this.changed()}set rotation(e){this._rotation=parseFloat(e),isNaN(this._rotation)&&(this._rotation=0),this.changed()}set rotateFirst(e){this._rotateFirst=!!e,this.changed()}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set wLock(e){this._wLock=!!e}set hLock(e){this._hLock=!!e}set ratioLock(e){this._ratioLock=!!e}updateShapePosition(e,r){e=parseFloat(e)||0,r=parseFloat(r)||0,this.translateX=1*this.translateX+e,this.translateY=1*this.translateY+r}updateShapeSize({width:e=!1,height:r=!1,ratioLock:n=!1}){if(e!==!1&&(e=parseFloat(e)||0),r!==!1&&(r=parseFloat(r)||0),n){const a=this.transformedGlyph.maxes,o=a.xMax-a.xMin,s=a.yMax-a.yMin;Math.abs(e)>Math.abs(r)?r=e*(s/o):e=r*(o/s)}this.resizeWidth=1*this.resizeWidth+e,this.resizeHeight=1*this.resizeHeight+r,this.rotation===0&&(this.rotateFirst=!1)}flipEW(e){if(this.isFlippedEW=!this.isFlippedEW,e){const r=this.transformedGlyph.maxes;this.translateX+=e-r.xMax+e-r.xMin}return this.rotation===0&&(this.rotateFirst=!1),this}flipNS(e){if(this.isFlippedNS=!this.isFlippedNS,e){const r=this.transformedGlyph.maxes;this.translateY+=e-r.yMax+e-r.yMin}return this.rotation===0&&(this.rotateFirst=!1),this}rotate(e){const r=_i(e)*-1;return this.rotation=this.rotation+r,this.resizeHeight===0&&this.resizeWidth===0&&!this.isFlippedEW&&!this.isFlippedNS&&(this.rotateFirst=!0),this}}const ZT=Object.freeze(Object.defineProperty({__proto__:null,ComponentInstance:Xr},Symbol.toStringTag,{value:"Module"}));class at extends fr{constructor({id:e=!1,parent:r=!1,objType:n="Glyph",name:a=!1,shapes:o=[],advanceWidth:s=0,transformOrigin:x=!1,ratioLock:E=!1,usedIn:T=[],gsub:p=[],contextCharacters:R=""}={}){super(),this.id=e,this.parent=r,this.name=a,this.shapes=o,this.advanceWidth=s,this.transformOrigin=x,this.ratioLock=E,this.usedIn=T,this.gsub=p,this.contextCharacters=R,this.objType=n}save(e=!1){const r={name:this.name,id:this._id,objType:this.objType};this.advanceWidth!==0&&(r.advanceWidth=this.advanceWidth),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(r.transformOrigin=this.transformOrigin),this.ratioLock!==!1&&(r.ratioLock=this.ratioLock),this.usedIn.length&&(r.usedIn=this.usedIn),this.gsub.length&&(r.gsub=this.gsub);let n=this.contextCharacters;if(n.length&&n!==this.char&&(r.contextCharacters=n),this.shapes&&this.shapes.length){r.shapes=[];for(let a=0;a<this.shapes.length;a++)r.shapes.push(this.shapes[a].save(e))}return e||(this.objType==="Glyph"&&delete r.name,delete r.objType),!e&&this.__ID&&delete this.__ID,r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Glyph
`;return r+="  ",n+=`${r}id: ${this.id}
`,n+=`${r}name: ${this.name}
`,this.advanceWidth!==0&&(n+=`${r}advanceWidth: ${this.advanceWidth}
`),this.transformOrigin!==!1&&(n+=`${r}transformOrigin: ${this.transformOrigin}
`),this.ratioLock!==!1&&(n+=`${r}ratioLock: ${this.ratioLock}
`),this.usedIn.length&&(n+=`${r}usedIn: ${JSON.stringify(this.usedIn)}
`),this.gsub.length&&(n+=`${r}gsub: ${JSON.stringify(this.gsub)}
`),this.shapes&&this.shapes.length?(n+=`${r}shapes: [
`,this._shapes.forEach(a=>{n+=a.print(e+2),n+=`
`}),n+=`${r}]
`):n+=`${r}shapes: []
`,this.maxes&&(n+=`${r}maxes: ${this.maxes.print(e+1)}
`),n+=`${r.substring(2)}}/Glyph ${this.id}`,n}get id(){return this._id}get shapes(){return this._shapes}get advanceWidth(){return this._advanceWidth}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin}get ratioLock(){return this._ratioLock}get usedIn(){return this._usedIn||[]}get gsub(){return this._gsub||[]}get contextCharacters(){return!this._contextCharacters||this._contextCharacters===this.char?this.char:this._contextCharacters}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get leftSideBearing(){return this.maxes.xMin}get rightSideBearing(){let e=this.maxes.xMax;return this.advanceWidth-e}get name(){let e=this._name;if(!e&&!this.id)return"[no id]";if(!e){if(this.id.startsWith("liga-")){let r=dr(this.id,"liga-");r=r.split("-"),e="Ligature ",r.forEach(n=>{n.length===1?e+=n:e+=gr(n)})}else if(this.id.startsWith("comp-"))e=`Component ${dr(this.id,"comp-")}`;else if(this.id.startsWith("glyph-")){let r=dr(this.id,"glyph-");e=sa(r)}this._name=e}return e}get char(){let e;return this.gsub.length?e=this.gsub.reduce((r,n)=>`${r}${String.fromCodePoint(n)}`,""):e=gr(dr(this.id,"glyph-")),e}get chars(){return this.char}get contentType(){if(this.cache.contentType)return this.cache.contentType;let e="unknown",r=0,n=0;return this.shapes.forEach(a=>{a.objType==="ComponentInstance"&&n++,a.objType==="Path"&&r++}),r>0&&n===0&&(e="paths"),n>0&&r===0&&(e="component instances"),r>0&&n>0&&(e="items"),this.cache.contentType=e,e}get pointCount(){let e=0;return this.shapes.forEach(r=>{r.objType==="ComponentInstance"?e+=r.pointCount:r.pathPoints.forEach(n=>{var a,o;e++,(a=n==null?void 0:n.h1)!=null&&a.use&&e++,(o=n==null?void 0:n.h2)!=null&&o.use&&e++})}),e}set id(e){this._id=e}set shapes(e=[]){this._shapes=[],e&&e.length&&e.forEach(r=>{this.addOneShape(r)}),this.changed()}addOneShape(e){return je(e.link)?(e.parent=this,this._shapes.push(new Xr(e))):(e.parent=this,this._shapes.push(new ir(e))),this.changed(),this._shapes.at(-1)}set advanceWidth(e){this._advanceWidth=parseFloat(e),isNaN(this._advanceWidth)&&(this._advanceWidth=0)}set transformOrigin(e){va.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin=!1}set ratioLock(e){this._ratioLock=!!e}set usedIn(e){this._usedIn=e||[]}set gsub(e){this._gsub=e||[]}set contextCharacters(e=!1){!e||e===this.char||typeof e!="string"?delete this._contextCharacters:this._contextCharacters=e}set name(e){this._name=e}set x(e){this.setGlyphPosition(e,!1)}set y(e){this.setGlyphPosition(!1,e)}set width(e){this.setGlyphSize({width:e})}set height(e){this.setGlyphSize({height:e})}set leftSideBearing(e){let r=e-this.leftSideBearing;this.setGlyphPosition(e),this.advanceWidth+=r}set rightSideBearing(e){let r=e-this.rightSideBearing;this.advanceWidth+=r}setGlyphPosition(e,r,n=!0){const a=this.maxes;e!==!1&&(e=parseFloat(e)),r!==!1&&(r=parseFloat(r));const o=e!==!1?e-a.xMin:0,s=r!==!1?r-a.yMax:0;this.updateGlyphPosition(o,s,n)}updateGlyphPosition(e,r,n=!0){e=parseFloat(e)||0,r=parseFloat(r)||0;for(let a=0;a<this.shapes.length;a++){const o=this.shapes[a];o.objType==="ComponentInstance"&&!n||o.updateShapePosition(e,r)}}setGlyphSize({width:e=!1,height:r=!1,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:o=!1}={}){const s=this.maxes;e!==!1&&(e=parseFloat(e)),r!==!1&&(r=parseFloat(r));const x=s.yMax-s.yMin,E=s.xMax-s.xMin;let T=e!==!1?e-E:0,p=r!==!1?r-x:0;n&&(Math.abs(r)>Math.abs(e)?T=E*(r/x)-E:p=x*(e/E)-x),this.updateGlyphSize({width:T,height:p,updateComponentInstances:a,transformOrigin:o})}updateGlyphSize({width:e=0,height:r=0,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:o=!1}={}){const s=this.maxes;let x=parseFloat(e)||0,E=parseFloat(r)||0;const T=s.width,p=s.height;let R=T+x,N=p+E;Math.abs(R)<1&&(R=1),Math.abs(N)<1&&(N=1);let g=N/p,K=R/T;n&&(x!==0&&E===0?(g=K,N=p*g,E=N-p):(K=g,R=T*K,x=R-T));const Y=co(x,E,this.maxes,o);this.shapes.forEach(V=>{if(V.objType==="ComponentInstance"&&!a)return;const _=V.maxes,$=_.xMax-_.xMin,Q=$*K;let Te=!1;K!==0&&(Te=Q-$);const he=_.yMax-_.yMin,Ae=he*g;let ce=!1;g!==0&&(ce=Ae-he),V.updateShapeSize({width:Te,height:ce,transformOrigin:"bottom-left"});const pe=_.xMin-s.xMin,me=pe*K;let we=!1;K!==0&&(we=me-pe);const Ye=_.yMin-s.yMin,it=Ye*g;let ot=!1;g!==0&&(ot=it-Ye),V.updateShapePosition(we,ot,!0)}),this.updateGlyphPosition(Y.deltaX,Y.deltaY)}flipNS(e=this.maxes.center.y){for(let r=0;r<this.shapes.length;r++)this.shapes[r].flipNS(e);return this}flipEW(e=this.maxes.center.x){for(let r=0;r<this.shapes.length;r++)this.shapes[r].flipEW(e);return this}roundAll(e=0){return this.shapes.forEach(r=>{r.roundAll&&r.roundAll(e)}),this}rotate(e,r){r=r||this.maxes.center;for(let n=0;n<this.shapes.length;n++)this.shapes[n].rotate(e,r);return this}reverseWinding(){for(let e=0;e<this.shapes.length;e++)this.shapes[e].reverseWinding();return this}get svgPathData(){var e;return(e=this==null?void 0:this.cache)!=null&&e.svgPathData||(this.cache.svgPathData=this.makeSVGPathData(this)),this.cache.svgPathData}makeSVGPathData(){let e="M0,0";return this.shapes.forEach(r=>{if(r.objType==="ComponentInstance"){const n=r.transformedGlyph;n&&(e+=n.svgPathData)}else e+=r.svgPathData,e+=" "}),ho(e)==="M0,0"&&(e="M0,0Z"),e}get maxes(){return this.cache.maxes?Ki(this.cache.maxes)?this.recalculateGlyphMaxes():Ho(this.cache.maxes)&&this.recalculateGlyphMaxes():this.recalculateGlyphMaxes(),this.cache.maxes}recalculateGlyphMaxes(){let e={xMax:0,xMin:0,yMax:0,yMin:0};return this.shapes&&this.shapes.length>0&&(e=Ba(this.shapes.map(r=>r.maxes))),this.cache.maxes=new sr(e),this.cache.maxes}}const XT=Object.freeze(Object.defineProperty({__proto__:null,Glyph:at},Symbol.toStringTag,{value:"Module"}));function Fa(t,e=!0){const r=JT(t);if(e&&r.length===0)return xr(`
			Could not find any SVG tags to import.
			Supported tags are: &lt;path&gt;, &lt;rect&gt;, &lt;polygon&gt;, &lt;polyline&gt;, and &lt;ellipse&gt;.`),new at;let n=0,a=[];r.forEach(s=>{if(s=s.filter(x=>!(x[0].x===x[3].x&&x[0].y===x[3].y&&x[1]===!1&&x[2]===!1)),s.length){n++;const x=s[0][0].x===s.at(-1)[3].x&&s[0][0].y===s.at(-1)[3].y;let E=new ir({name:`Path ${n}`}),T;x||(T=new Kt({p:{coord:{x:s[0][0].x,y:s[0][0].y}}}),s[0][1]&&(T.h2=new nt({coord:{x:s[0][1].x,y:s[0][1].y}})),E.addPathPoint(T));for(let p=0;p<s.length-1;p++)E.addPathPoint(XA(s[p],s[p+1]));x?E.addPathPoint(XA(s.at(-1),s[0])):(T=new Kt({p:{coord:{x:s.at(-1)[3].x,y:s.at(-1)[3].y}}}),s.at(-1)[2]&&(T.h1=new nt({coord:{x:s.at(-1)[2].x,y:s.at(-1)[2].y}})),E.addPathPoint(T)),a.push(E)}});const o=new at({shapes:a});return o.changed(!0),o}function XA(t,e){t[3].x!==e[0].x||(t[3].y,e[0].y);let r=new Kt({p:{coord:{x:e[0].x,y:e[0].y}}});return t[2]&&(r.h1=new nt({coord:{x:t[2].x,y:t[2].y},use:!0})),e[1]&&(r.h2=new nt({coord:{x:e[1].x,y:e[1].y},use:!0})),r}function j0(t,e="SVG"){const r=Fa(t);if(r&&r.shapes.length){r.flipNS(),r.reverseWinding();const n=z(),a=Wn(r,n.selectedItem);n.history.addState("Pasted SVG to glyph "+n.selectedItem.name);const o=n.multiSelect.shapes;o.clear(),a.forEach(s=>o.add(s)),xe().settings.app.moveShapesOnSVGDragDrop&&o.setShapePosition(0,o.maxes.height),n.publish("currentItem",n.selectedItem),ye(`Pasted ${r.shapes.length} shapes from ${e}`)}else ye("Could not import pasted SVG code.")}async function jA(t){var r;const e=t.clipboardData||window.clipboardData;if(e){let n=e.getData("Text");j0(n,"<br>the operating system clipboard")}else if((r=navigator==null?void 0:navigator.clipboard)!=null&&r.readText)navigator.clipboard.readText().then(n=>{n?j0(n,"<br>the operating system clipboard"):ye("Could not import SVG from the operating system clipboard")});else{ye("Could not import SVG from the operating system clipboard");return}}function jT(t){rt(t);let e=t.dataTransfer;e=e.files[0]||"";let r=e.name.split(".");r=r[r.length-1].toLowerCase();const n=new FileReader;r==="svg"?(n.onload=function(){j0(n.result,"<br>from the dropped SVG file")},n.readAsText(e)):ye("Only SVG files can be dropped on the canvas")}class kr{constructor(e={}){this.text=e.text||"",this.fontSize=e.fontSize||48,this.lineGap=e.lineGap||12,this.pagePadding=e.pagePadding||10,this.pageWidth=e.pageWidth||"fit",this.pageHeight=e.pageHeight||"auto",this.showCharacterExtras=e.showCharacterExtras||!1,this.showLineExtras=e.showLineExtras||!1,this.showPageExtras=e.showPageExtras||!1,this.widthAdjustment=e.widthAdjustment||0}get text(){let e=this._text;return e.substring(0,2)==="{{"&&(e=e.substring(2,e.length-2),Wt[e])?Wt[e]:this._text}set text(e=""){this._text=e}get displayName(){let e="";return e+=`${this.text.substring(0,40)}...`,e}save(){let e={};return this.fontSize&&this.fontSize!==48&&(e.fontSize=this.fontSize),this.lineGap&&this.lineGap!==12&&(e.lineGap=this.lineGap),this.pagePadding&&this.pagePadding!==10&&(e.pagePadding=this.pagePadding),this.pageWidth&&this.pageWidth!=="fit"&&(e.pageWidth=this.pageWidth),this.pageHeight&&this.pageHeight!=="auto"&&(e.pageHeight=this.pageHeight),this.showCharacterExtras&&(e.showCharacterExtras=this.showCharacterExtras),this.showLineExtras&&(e.showLineExtras=this.showLineExtras),this.showPageExtras&&(e.showPageExtras=this.showPageExtras),this._text&&(e.text=this._text),this.text===Wt.swadesh_207_short&&(e.text="{{swadesh_207_short}}"),this.text===Wt.swadesh_207_frequent&&(e.text="{{swadesh_207_frequent}}"),this.text===Wt.scowl_10_short&&(e.text="{{scowl_10_short}}"),this.text===Wt.scowl_10_frequent&&(e.text="{{scowl_10_frequent}}"),this.text===Wt.scowl_50_short&&(e.text="{{scowl_50_short}}"),this.text===Wt.scowl_50_frequent&&(e.text="{{scowl_50_frequent}}"),this.text===Wt.scowl_70_short&&(e.text="{{scowl_70_short}}"),this.text===Wt.scowl_70_frequent&&(e.text="{{scowl_70_frequent}}"),e}}let Wt={};Wt.swadesh_207_short="I you they we you they this that here there who what where when how not all many some few other one two three four five big long wide thick heavy small short narrow thin woman man child wife husband mother father animal fish bird dog louse snake worm tree forest stick fruit seed leaf root bark flower grass rope skin meat blood bone fat egg horn tail feather hair head ear eye nose mouth tooth tongue fingernail foot leg knee hand wing belly guts neck back breast heart liver drink eat bite suck spit vomit blow breathe laugh see hear know think smell fear sleep live die kill fight hunt hit cut split stab scratch dig swim fly walk come lie sit stand turn fall give hold squeeze rub wash wipe pull push throw tie sew count say sing play float flow freeze swell sun moon star water rain river lake sea salt stone sand dust earth cloud fog sky wind snow ice smoke fire ash burn road mountain red green yellow white black night day year warm cold full new old good bad rotten dirty straight round sharp dull smooth wet dry correct near far right left at in with and if because name";Wt.swadesh_207_frequent="stab black head leaf fingernail snake animal name husband narrow breast feather because heavy play bird blood bone breathe burn ice scratch thick cloud correct cut day wide dirty dog drink dust seed squeeze left egg yellow rotten sleep forest wet few they father flower freeze full straight give good grass tongue sharp short three die wife wipe this fruit liver skin knee sky laugh child walk salt belly smell vomit mountain stone nose many float smoke hold woman smooth rope mother spit split pull bark worm dry sing some suck swell stick guts turn two rub four mouth water where you";Wt.scowl_10_short="able act add leaf age ahead aid major make all am an chaos gap are as at cause gave law tax day lazy bad rubber be bid object able submit box brand jobs doubt bug obvious by can occur ice char city back club code acquire cry cs act cup cycle day feedback broadcast add code edge did adjust badly admit midnight do dry adds due advice hardware body eat debate neck bed see left leg behalf being reject seek cell deem end video deep equal err hes bet queue even few sex eye fan fed off fit fly for fry left fun modify gap age meaningful bigger high girl glad sign go grew bugs length gun apology had forthcoming withdraw he hid highly algorithm technical hot three months eight huge worthwhile why via library ice aid die if big like ill aim in prior chip unique air is it medium five fix size object job jump package key background kid quickly knew asks awkward lucky law album welcome old led half algorithm lie bulk all film log help already also felt blue solve always fly mad dumb me harmful mix firmly common autumn mod dump aims much my name inch and net info hang unhappy nice enjoy bank only government annoy no input unreasonable runs cent numb invent unwanted any boat job lock mod doe of dog oh oil project book old come on too pop or cost got our love how box boy dozen pay update pen helpful graph pi plan equipment pop apple press chips kept put upwards copy quit ran nearby force card re perfect argue perhaps rid dark girl arm turn row sharp err bars art run serve forward cry sad husband disc see satisfy she sit ask slip small so spot square less best sum answer busy tax catch ate doubtful the tie title treatment to output try its putt tune two city equal club luck judge due stuff bug quit bulk sum fun quote up our us but buy van even via vote heavy war we awful who win awkward slowly own two write laws growth exact except boxes exist expand next maybe cycle eye dying style symbol syntax you type buys byte anyway bizarre size";Wt.scowl_10_frequent="establishment accidentally administration afterwards disadvantage ahead straightforward majority mistaking alternatively fundamentally misunderstanding chaos applications broadcasting automatically available withdraw maximum displaying crazy embarrassing rubbish deliberately responsibility objections submitting borrowing observation doubtful contributions obviously thereby communications circumstances characters background conclusion acquiring descriptions electronics introduction consistency recommendation feedback additional knowledge adjust admittedly midnight documentation addressing misunderstands undergraduates hardware everybody disappearing somebody sophisticated guaranteeing definitions registering comprehensive rejecting seeking announcement simultaneously representation consequences interpretation queue nevertheless elsewhere experiencing keyboard facilities professional difficulties significantly reflecting frequently justifying investigate arrangements meaningful suggestions discouraging accordingly algorithms buildings strength terminology beforehand forthcoming thoroughly techniques authorities throughout months hundreds worthwhile philosophy appreciating opportunities likewise mediums fixing bizarre justification packages brackets quickly networks awkward lucky calculations album considerable yourself talking almost development helpful already individuals absolutely themselves always combinations harmful harmless autumn demonstration comparatively mysterious unfortunately unhappy enjoy thinking certainly environment unnecessarily unpleasant unreasonable continuously conventional unwanted anonymous misunderstood whatsoever programmers oh pointless projects looking controlling possibilities potentially improvements boxes destroying dozens updating developing upsetting manipulation upwards occupying disturbing performance perhaps particularly information instruction intervention unnecessary husband successfully asking criticism square answering symbols switching atmosphere output publication excluding sufficiently requirements corrupting buying individually avoiding heavy awful widespread unknown rewrite borrows growth examined exceptions executing complexity extending cycles destroyed style syntax everyone anyplace everything everywhere citizen";Wt.scowl_50_short="salaam abed acme gad aery aft jag bah fain rajah hake alb lam ankh baobab apps aqua agar asp tat auk aver awl axon dray laze bah bobby webcam abductee abed clubfeet subgroups subhead bier abjure lambkin bleep submerse hobnail bola subplot brr albs bobtail bur obverse bobwhite bobby cads cocci apace achoo cis beck clew acme picnicker coda acquirable craw docs bract cud chancy czarina coda oddball redcap adder deb gadfly cadge dhoti ding adjure bodkin addle adman gladness doc midpoint dram ids hardtop duh adverted dweeb dyer adze lea deb beck zed jeep fief aegis meh lei deejay pekoe ell emo wen oleo hep coequal ere espy eta euro bevy clew hex fey wheezy fa halfback serfdom fey doff afghan wolfhound fie flan hafnium fob halfpence frack coifs aft futz daffy gad bugbear dogcatcher hangdog loge dogfish boggy aught gird glop magma cosign agog grog ergs dogtrot ague wigwag gyro haw highboy ashcans archduke hep mirthful flashgun fishhook hie babushka phlox bathmat techno hob dishpan thru ankhs aught hula schwa ashy iamb jib mica ids fie coif brig jihad piing demijohn wiki mil sim ding viol pip cliquish dirk cis clit odium diva antiwar nix sukiyaki baize jag jeep jib josh julep kale backbit crankcase workday hake sackful ginkgo ankh kith lockjaw yukked anklet milkmaid knave kook chickpea krone auks buckteeth haiku inkwell balky la alb milch veld lea milf bilge bullhorn clit killjoy bilk ell palmy ulna lo pulpy catafalque bulrush awls dolt alum salvo bulwark lynx maw iamb gimcrack slumdog meh brimful farmhand mid mkay armlet jimmy limn emo ump kumquat armrest ems emu triumvirate dimwit gamy nary inbox conch wend pone confab bong inhere nib ninja ankh wanly enmesh jinn noel unpin jonquil unripe duns nth nu convoke unwed lynx onyx benzene roan fob doc hod aloe oft agog oho poi emoji gook pol tom yon coon fop toque orb hos sot lout coven cowl lox soy boozy paps soapbox topcoat stepdad jape campfire popgun aphid pip bumpkin plait stepmom grapnel poi apps prig apps inapt pug pwn pyx aqua brad orb orc gird ere serf erg rho brig marjoram dirk purl berm lorn euro carpi marquis brr burs arty drub nervy airway aery furze mesa busby scat misdo apse misfire disgorge ashy sim disjointedly rusk slaw ism snaky sol asp squab disrobe buss sty suet svelte swag hussy eta catbird butch cote outfox outgo nth ti catkin fitly litmus botnet tom potpie tram lats attar tun outvote twain sty futz aqua nub deuce cud ague mufti pug duh quid jujube auk hula ump dun quoit yup bur buss abut muumuu uvula bauxite obloquy abuzz diva aver vim vole chevron ovule divvy bevy swag cowbird howdah wen lawfully gewgaw whey wiki hawker awl bowman pwn wooer cowpox wrack haws newtons wuss dewy frowzy fixate oxbow coxcomb fixer oxford foxglove foxhound axial laxly laxness axon sexpot coxswain sextet nexus boxwood epoxy yaw flyby lyceum hydra ye mayfly cygnet tallyho yip skyjack beryl hymen lynx yon hypo gyro cloys mythic yuk byword pyx piazza zed zing buzzkill drizzly hazmat kazoo gazpacho kudzu zwieback boozy";Wt.scowl_50_frequent="salaaming imperturbability ultraconservatives disadvantageously aerodynamically afforestation tetrahedrons praiseworthiness majorettes groundbreakings electroencephalograms contemporaneously chaotically electroencephalographs aquaculture counterrevolutionaries overenthusiastic interrelationships authoritativeness circumnavigations straightaways axiomatically companionways nonhazardous flibbertigibbets subcontracting molybdenum disencumbering obfuscating subgroups subheadings comprehensibility unobjectionable lambkins bloodthirstiness submersibles abnegating chlorofluorocarbons subprograms transubstantiation obtrusiveness bureaucratically obviousness dumbwaiters labyrinthine electrocardiographs unacceptability lackadaisically counterclaiming acmes picnickers acquisitiveness aristocratically electrodynamics cryptocurrency czarinas daguerreotyping rebroadcasting featherbedding inconsiderateness crowdfunding foreknowledge hardheadedness maladjustment bodkins disconnectedly administratively lightheartedness ambassadorships sandpipers hydroelectricity fountainheads superconductivity hundredweights kudzus rebelliousness electioneering prefabrication gregariousness reinterpretations steeplejacks inconsequentially electromagnetism neurotransmitters exemplifications monkeyshines intermezzos multifariousness beefburger serfdom paraprofessionals afghans halfheartedness aloofness disinformation halfpennies disenfranchisement weatherproofs antiaircraft unfaithfulness misidentifying herringbone dogcatchers hangdog counterintelligence wrongfulness microaggressions bacteriological uncompromisingly phlegmatically nongovernmental dogtrotting wigwagging parapsychology archbishoprics beachcombers archdeacons thoroughgoing bathhouses babushkas arithmetically biotechnology catchphrase philanthropically mouthwatering inconspicuousness annihilators shanghaiing demijohns sportsmanlike deliquescent conversationalists triumvirates contrariwise transfixing sukiyaki prizefighters jitterbugging photojournalists jurisdictional blackballing blackcurrant backdating cantankerousness thankfulness blackguards blockhouses lockjaw yukking huckleberries brinkmanship kookaburras backpedals bankrolling backstretches blackthorns skulduggery anticlockwise buckyballs spellbinders spellcheckers officeholders overindulgence levelheadedness killjoys streetwalkers schoolmistresses invulnerability palpitations milquetoasts chivalrously galvanometers councilwoman discombobulating gimcracks humdingers interdepartmental circumflexes warmhearted interdenominational mkay circumlocutions telecommunication anthropomorphism kumquats armrests bantamweights mysteriousness boysenberries teleconferencing circumnavigating unhesitatingly conjunctivitis dimensionless environmentalism interconnections unpredictability inquisitiveness nonrepresentational counterrevolutions discontinuances overanxious mulligatawny extravaganzas prohibitionists boisterousness psychokinesis grandiloquence atmospherically incontrovertible flamethrowers detoxification spermatozoon shipbuilders slipcovers snapdragons sheepfolds popguns slipknots developmental pneumatically apprehensiveness circumscriptions unscrupulousness sleepwalkers aromatherapy noninterference hypoallergenic porterhouses crackerjacks telemarketing disorderliness predetermination overqualified incorruptibility counterweights counterrevolutionary overzealous crossbreeding conscientiousness disfranchisement thanksgivings disjointedly muskellunges unreasonableness misquotations disreputably transversely swashbucklers syllabification carpetbaggers boastfulness remortgaging catkins shuttlecocking forthrightness breastplates agriculturalists outvoting trustworthiness chintziest longitudinally genuflections lugubriousness brouhahas jujitsu interleukin muumuus antediluvian luxuriousness colloquy puzzlement chevrons skivvying waterboardings shadowboxing weatherproofing viewfinders lawgivers horsewhipping nighthawks sawmills clownishness cowpunchers wrongheadedness newspaperwoman swallowtails knockwursts billowy frowziest counterexamples oxbows unexceptionable oxfords foxgloves inexhaustibly sexless laxness exorbitantly expostulations coxswains extemporaneously waxwings oxyacetylene cyberbullies underemployed ladyfingers lollygagging policyholders skyjackers asymmetrically embryologists cryptocurrencies tyrannosauruses crystallographic electrolytes polyunsaturated pennyweights asphyxia quizzically buzzkills bedazzling hazmat gazpacho mazurkas zwieback lazybones";Wt.scowl_70_short="aah ab ac ad ae aft aga ah ai haj aka al am an ciao ape aqua ar as at aud av aw ax aye azo aba abb bobcat bd be bf pibgorn abhor bi obj bk bl abmho cobnut boa bp br abs btl bu abvolt lbw bx by subzero ca ecbolic cc cd ace cf cg ch cig ck cl cm acne co cp acquit cr cs ct cu cw cyl czar dab db dc dd de gadfly dg edh di adj dk bdl dm ordn do dpi hdqrs dr ads obdt dub adv dwt dye dz ea deb dec ed bee def beg eh lei eject eek el em en eon dep eq er es et feu eve dew ex bey fez fa offbeat offcuts mfd fec ff mfg offhand fib fjeld offkey fl fm hafnium fo fp fr ifs ft fug fwd defy rugby agcy gds age bagful egg ugh gi logjam gl gm gnu go magpie gr gs gt gum dogvane hgwy gym zigzag ha cashbox ahchoo hd he hf hg hhd hi kishke hl chm john ho hp earthquake hr chs ht hub boschvark hwy hyp machzor ria ib hic id die if big ihram aalii bijou oik ail aim in bio dip liq air is it ilium civ iwis fix hiya biz ja jct jet jg jib hajj prajna jo jr adjt jug ka kb kc jackdaw eke nakfa kg ankh ki lockjaw dekko kl km kn koa kph kr ks kt haku kvass kw sky la lb talc eld ale elf lg pelham li killjoy alk ll lm ln lo alp calque dlr ls alt flu lv lwei lx fly colza ma mb emcee mdse me mf mg mho mi ramjet mk ml mm damn mo mp kumquat amrita ms mt mu duumvir dimwit my hamza ana inbox enc and ne inf eng sinh nib conj ink enl unman ann no tnpk cinque nr ans ant nu inv unwed jinx any bonze ob doc od doe of bog oh oi mojo oka col om on oo op loq or os bot fou gov ow ox boy oz pa peepbo pc pd pe pf pg pi kopje pk pl pm apnea pod pp pr ps pt pub pvt pwn pya pzazz qadi sheqel qi ql qoph sqq qr qt qu qwerty bra arb arc rd re barf erg rho interj ark birl rm urn bro rpm cirque arr rs rt cru arvo crwth cry orzo sac sb sc sd sea sf sgd sh si masjid ask isl ism assn so sp sq sri ss st sub svelte swab sym grosz ta tb etc gtd ate artful mtg fth ti muntjac latke atm tn to hatpin cotquean tr ts att tub outvote two qty ditz qua bub buck cue buff aug uh oui juju auk bul um bun duo up tuque bur us ut lituus guv thruway aux buy buzz ova vb avdp ave avg vhf via vlf avn vo livre vs ovum vv ivy evzone wad bawbee bawcock wd we awful gewgaw whf wig blowjob wk awl cwm awn wo twp wry bows wt swum bowwow fwy blowzy coxa oxbow exc flexdollars axed boxful foxglove exhale xi axle taxman laxness axon exp exquisite exr bxs ext xu paxwax boxy ya flyby syce yd ye dayfly tyg anyhow yid skyjack dyke syn yo gyp yr mys byte yuk gyve ywis pyx sayyid coryza zap whizzbang vizcacha samizdat zed fizgig muzhik zig britzka zloty gizmo kibbutznik chutzpah buzzsaw azure mitzvah buzzword cozy";Wt.scowl_70_frequent="aardwolves honorificabilitudinitatibus psychopharmacologies contradistinctively aerothermodynamics tetrafluoroethylene supercalifragilisticexpialidocious tetrahydrocannabinol photoreconnaissance majoritarianism groundbreakings pneumonoultramicroscopicsilicovolcanoconiosis extraordinarily electroencephalographic anthraquinone antidisestablishmentarianisms overenthusiastically floccinaucinihilipilification circumnavigations unseaworthiness chemoprophylaxis companionways succinylsulfathiazole bacteriologically flabbergasting subclassification subdirectories overbearingnesses dumbfounding subglacial abhorrently objectionableness knobkerries subminiaturize subnormalities bourgeoisification subprofessionals tribromoethanols insubstantialities unobtrusiveness subventionary cobwebbiest bxs presbyterianism subzero ecbolic synecdochically cf cg dichlorodiphenyltrichloroethane buckminsterfullerene chlortetracyclines blancmanges chromaticness ecphonesis acquaintanceship colicweed czarevitch hippopotomonstrosesquipedalian rebroadcasting featherbedding departmentalization grandfathering curmudgeonliness goodheartedness adjudications handkerchiefs otherworldlinesses maladministration straightforwardness childproofing headquartering magnetohydrodynamics straightforwards bloodthirstiness individualistically disadvantageously hundredweights dziggetais chickenheartedness thrombophlebitides feeblemindednesses indefatigabilities photodisintegration incomprehensibility deinstitutionalization nonprejudicial triskaidekaphobias contemporaneousnesses inconsequentiality counterrevolutionaries praiseworthiness attorneyships piezoelectricities surfboardings unselfconsciousness chiefdom counteroffensives roofgarden halfheartedness fjords offkey engulfment aloofness halfpennyworth softheartednesses halfwitted interstratifying hummingbirds dogcatchers subkingdoms counterinsurgencies meaningfulness microaggressions logjams glomerulonephritides segmentalization otorhinolaryngologists stringpiece misunderstandings superstrength contradistinguished dogvane songwriters otorhinolaryngology zigzagging archbishoprics archconservative archdeaconries reproachfulness thoroughgoing highhandedness babushkas biotechnological thoroughpaced earthquakes pseudohermaphroditism electroencephalographs boschvark northwestwardly electroencephalography machzor triiodomethane bijouterie unsportsmanlike impressionistically hemidemisemiquavers microsporangium uncommunicativenesses contrariwise interlocutrix semiyearly compartmentalization straitjacketing jct jg jitterbugging hajjes prajna photojournalists jr adjt injudiciousness lackadaisicalness stockbrokerage blackcurrants backdating breakfasting backgrounders backhandedness counterattacking stockjobbers bookkeepers kaffeeklatsches acknowledgments cuckooflowers backpedaling bankruptcies backscratchers breakthroughs skulduggery kvetchers counterclockwise ankylostomiasis albuminurias tetramethyldiarsine algorithmically diphenylhydantoins killjoys phenylketonuria diacetylmorphine caesalpiniaceous unnilquadiums hexylresorcinol convolvulaceous pickerelweeds calxes calzone somnambulistically uncircumcision humdingers uncomfortableness circumgyration warmheartedness circumjacent gymkhanas circumlocutions kumquats steamrollering circumterrestrial multidimensionality circumvallating bantamweights dihydrostreptomycin hamza nonbelligerents undemonstrativeness videoconferencing environmentalists unpretentiousnesses inquisitiveness nonrepresentational deoxyribonuclease conversationalists unwholesomeness nasopharynxes dinitrobenzene unapproachabilities autobiographically chlorofluorocarbons brokenheartedly grandiloquently underemployment photozincography clapboarding stepchildren stepdaughters leapfrogging campgrounds flapjacks pumpkinseeds oversimplifications developmentally disproportionateness disputatiousness impv shipwrecking endocrinotherapy pzazz sheqalim sheqel qindarkas ql qophs seqq hdqrs qto qwerty electrocardiographic interjectionally disembarkation preternaturalness anthropomorphically overqualified electrodynamometers ultraconservatives bilharziases jurisdictional unsatisfactoriness disgracefulness disjointedness contemporaneously misrepresentations transvestitisms upperclasswoman groszy heartbreakingly postconvalescent outdistancing roentgenotherapy pocketknives indiscreetnesses bulletproofing cotquean glottochronologies bodhisattva untrustworthiness quartziferous intellectualization insufficiently superdreadnought kieselguhrs hallelujahs lukewarmness dichlorodifluoromethane chautauqua duumvirate chauvinistically rauwolfias juxtapositional ventriloquy muzzleloading vb avdp incontrovertibilities avg vhf pavlovas czarevna vraisemblance leitmotivs advt improvvisatore heavyweights evzone shadowboxings cowcatchers bowdlerizations weatherboardings sorrowfulness shadowgraphs wholeheartedness showjumping sparrowhawks snowmobiling downheartedness cowpunchers wrongheadedness newspaperwoman yellowthroats knockwursts hollowwares lawyerly frowziness hexamethylenetetramine boxberries excommunications sexdecillion exemplifications exfoliating foxgloves exhibitionistically lexicographically orthodoxly fluxmeter complexnesses inexorabilities exquisiteness boxrooms exsanguinate extemporaneousness heterosexuality maxwells cyanocobalamins cybernetician encephalomyelitis gillyflowers acanthopterygians platyhelminths skyjackings pyknic polymorphonuclear electromyographies hyperparathyroidism psychophysiological demythologizations polyunsaturated polyvalence archaeopteryxes sayyid psychoanalyzing whizzbangs mezcaline samizdat anthropomorphized wayzgoose muzhiks anthropomorphizing blitzkriegs bamboozlement quizmasters kibbutzniks chutzpah buzzsaw gazumping rendezvousing buzzwords zygophyllaceous";const QT=":root{--gray-l97: hsl(200, 81%, 97%);--gray-l95: hsl(200, 81%, 94%);--gray-l90: hsl(200, 60%, 88%);--gray-l85: hsl(200, 52%, 82%);--gray-l80: hsl(200, 47%, 76%);--gray-l75: hsl(200, 42%, 71%);--gray-l70: hsl(200, 33%, 65%);--gray-l65: hsl(200, 27%, 60%);--gray-l60: hsl(200, 22%, 55%);--gray-l55: hsl(200, 18%, 50%);--gray-l50: hsl(200, 17%, 45%);--gray-l45: hsl(200, 17%, 40%);--gray-l40: hsl(200, 18%, 36%);--gray-l35: hsl(200, 18%, 31%);--gray-l30: hsl(200, 17%, 27%);--gray-l25: hsl(200, 18%, 23%);--gray-l20: hsl(200, 18%, 19%);--gray-l15: hsl(200, 17%, 15%);--gray-l10: hsl(200, 19%, 11%);--gray-l05: hsl(350, 17%, 7%);--blue-l98: hsl(200, 100%, 98%);--blue-l95: hsl(200, 100%, 94%);--blue-l90: hsl(200, 100%, 87%);--blue-l85: hsl(200, 100%, 80%);--blue-l80: hsl(200, 100%, 73%);--blue-l75: hsl(199, 100%, 64%);--blue-l70: hsl(200, 100%, 58%);--blue-l65: hsl(200, 100%, 49%);--blue-l60: hsl(200, 100%, 45%);--blue-l55: hsl(200, 100%, 41%);--blue-l50: hsl(200, 100%, 37%);--blue-l45: hsl(200, 100%, 33%);--blue-l40: hsl(200, 100%, 30%);--blue-l35: hsl(200, 100%, 25%);--blue-l30: hsl(200, 100%, 22%);--blue-l25: hsl(200, 100%, 19%);--blue-l20: hsl(200, 100%, 15%);--blue-l15: hsl(200, 100%, 12%);--blue-l10: hsl(200, 100%, 9%);--blue-l05: hsl(200, 100%, 6%);--orange-l98: hsl(20, 100%, 98%);--orange-l95: hsl(20, 100%, 95%);--orange-l90: hsl(20, 100%, 89%);--orange-l85: hsl(20, 100%, 84%);--orange-l80: hsl(20, 100%, 78%);--orange-d80: hsl(20, 50%, 78%);--orange-l75: hsl(20, 100%, 72%);--orange-l70: hsl(20, 100%, 66%);--orange-d70: hsl(20, 50%, 66%);--orange-l65: hsl(20, 100%, 56%);--orange-l60: hsl(20, 100%, 50%);--orange-d60: hsl(20, 50%, 50%);--orange-l55: hsl(20, 100%, 46%);--orange-l50: hsl(20, 100%, 42%);--orange-d50: hsl(20, 50%, 42%);--orange-l45: hsl(20, 100%, 37%);--orange-l40: hsl(20, 100%, 33%);--orange-d40: hsl(20, 50%, 33%);--orange-l35: hsl(20, 100%, 29%);--orange-l30: hsl(20, 100%, 25%);--orange-l25: hsl(20, 100%, 22%);--orange-l20: hsl(20, 100%, 17%);--orange-l15: hsl(20, 100%, 14%);--orange-l10: hsl(20, 100%, 10%);--orange-l05: hsl(20, 100%, 6%);--green-l98: hsl(125, 100%, 98%);--green-l95: hsl(125, 100%, 82%);--green-l90: hsl(125, 97%, 74%);--green-l85: hsl(125, 83%, 66%);--green-l80: hsl(125, 74%, 58%);--green-l75: hsl(125, 67%, 50%);--green-l70: hsl(125, 82%, 43%);--green-l65: hsl(125, 100%, 36%);--green-l60: hsl(125, 100%, 33%);--green-l55: hsl(125, 100%, 30%);--green-l50: hsl(125, 100%, 27%);--green-l45: hsl(125, 100%, 24%);--green-l40: hsl(125, 95%, 22%);--green-l35: hsl(125, 100%, 19%);--green-l30: hsl(125, 100%, 16%);--green-l25: hsl(125, 100%, 14%);--green-l20: hsl(125, 100%, 11%);--green-l15: hsl(125, 100%, 9%);--green-l10: hsl(125, 100%, 6%);--green-l05: hsl(125, 100%, 4%);--purple-l98: hsl(285, 100%, 98%);--purple-l95: hsl(285, 100%, 96%);--purple-l90: hsl(285, 100%, 92%);--purple-l85: hsl(285, 100%, 89%);--purple-l80: hsl(285, 100%, 85%);--purple-l75: hsl(285, 100%, 81%);--purple-l70: hsl(285, 100%, 77%);--purple-l65: hsl(285, 100%, 72%);--purple-l60: hsl(285, 100%, 66%);--purple-l55: hsl(285, 100%, 61%);--purple-l50: hsl(285, 100%, 50%);--purple-l45: hsl(285, 100%, 45%);--purple-l40: hsl(285, 100%, 40%);--purple-l35: hsl(285, 100%, 36%);--purple-l30: hsl(285, 100%, 31%);--purple-l25: hsl(285, 100%, 27%);--purple-l20: hsl(285, 100%, 22%);--purple-l15: hsl(285, 100%, 17%);--purple-l10: hsl(285, 100%, 13%);--purple-l05: hsl(285, 100%, 10%);--offWhite: hsl(200, 81%, 97%);--darkRed: hsl(0, 100%, 23%);--red: hsl(0, 100%, 48%);--lightRed: hsl(0, 100%, 90%);--accent-color: hsl(200, 100%, 37%);--accent-color-light: hsl(200, 100%, 49%);--enabled-resting-text: hsl(0, 0%, 5%);--enabled-resting-lightText: hsl(0, 0%, 10%);--enabled-resting-border: hsl(0, 0%, 75%);--enabled-resting-fill: hsl(0, 0%, 40%);--enabled-resting-background: hsl(0, 0%, 98%);--enabled-restingLight-text: hsl(0, 0%, 20%);--enabled-restingLight-lightText: hsl(0, 0%, 30%);--enabled-restingLight-border: hsl(0, 0%, 80%);--enabled-restingLight-fill: hsl(0, 0%, 60%);--enabled-restingLight-background: hsl(0, 0%, 98%);--enabled-focus-text: hsl(0, 0%, 0%);--enabled-focus-lightText: hsl(0, 0%, 10%);--enabled-focus-border: hsl(200, 25%, 63%);--enabled-focus-fill: hsl(200, 25%, 25%);--enabled-focus-background: white;--enabled-active-text: hsl(0, 0%, 0%);--enabled-active-lightText: hsl(0, 0%, 10%);--enabled-active-border: hsl(0, 0%, 63%);--enabled-active-fill: var(--accent-color);--enabled-active-background: white;--disabled-text: hsl(0, 0%, 40%);--disabled-text-light: hsl(0, 0%, 60%);--disabled-text-dark: hsl(0, 0%, 20%);--disabled-border: hsl(0, 0%, 82%);--disabled-fill: hsl(0, 0%, 82%);--disabled-background: hsl(0, 0%, 94%)}",qT=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">\r
  <path fill="hsl(200, 100%, 41%)" d="m491.109,170.926c-89.722,0-162.715,82.261-162.715,183.377,0,124.258,113.791,137.671,162.715,137.671s162.715-13.413,162.715-137.671c0-101.116-72.993-183.377-162.715-183.377Z"/>\r
  <path fill="hsl(200, 100%, 41%)" d="m920.448,79.552C840.896,0,719.097,0,500,0S159.104,0,79.552,79.552C0,159.104,0,280.903,0,500s0,340.896,79.552,420.448c79.552,79.552,201.351,79.552,420.448,79.552s340.896,0,420.448-79.552c79.552-79.552,79.552-201.351,79.552-420.448s0-340.896-79.552-420.448Zm-146.744,112.456c0,2.761-2.239,5-5,5h-7.034c-.038,0-.074-.01-.112-.011-.004,0-.007.001-.01.001h-45.856c-1.075,0-2.087.506-2.731,1.366l-8.66,11.546c27.074,41.021,42.88,90.25,42.88,143.144,0,70.001-27.646,127.253-79.957,165.578-44.577,32.657-105.478,49.921-176.114,49.921-55.318,0-104.663-10.591-144.875-30.869-10.283,10.57-17.335,24.213-17.335,38.766,0,34.131,21.332,54.11,94.524,54.11,90.099,0,163.146-23.565,231.294-23.565,80.615,0,85.357,57.752,85.357,99.583,0,118.551-27.271,209.05-292.825,209.05-33.161,0-97.221-1.724-132.317-9.312-3.75-.811-6.015-4.609-5.018-8.314l20.862-78.928c.909-3.377,4.229-5.502,7.667-4.855,21.23,3.999,80.354,10.479,108.806,10.479,156.167,0,209.013,8.004,209.245-98.506-.071-11.553,3.771-19.614-12.673-19.614-61.646,0-130.08,16.099-239.25,16.099-126.868,0-158.866-87.434-158.866-144.64,0-26.761,14.174-60.59,39.162-86.528-32.729-36.272-49.828-83.42-49.828-138.455,0-142.651,114.875-258.706,256.071-258.706,59.47,0,114.268,20.59,157.783,55.082l12.693-16.924c7.611-10.15,19.559-16.123,32.245-16.123h67.717c.01,0,.019.003.029.003.032,0,.062-.009.094-.009h7.034c2.761,0,5,2.239,5,5v70.632Z"/>\r
</svg>`,$T=":root{--dark-gradient-background: linear-gradient(135deg, var(--blue-l15), var(--purple-l05));--global-focus-style: 1px dashed var(--purple-l50);--global-transition: all 80ms ease;--animate-fade-in-slide-down: .18s ease-in fade-slide-in;--animate-fade-in: .18s ease-in fade-in;--animate-fade-out: .18s ease-out fade-out;--animate-fade-update: .14s ease-in fade-in-update;--l1-shadow: 0px 0px 2px rgba(0, 0, 0, .1);--l1-shadow-down: 0px 2px 2px rgba(0, 0, 0, .1);--l2-shadow: 0px 0px 4px rgba(0, 0, 0, .2);--l2-shadow-upper-left: -1px -1px 4px rgba(0, 0, 0, .2);--l2-shadow-down: 0px 4px 4px rgba(0, 0, 0, .3);--l3-shadow: 0px 0px 6px rgba(0, 0, 0, .3);--l3-shadow-down: 0px 6px 6px rgba(0, 0, 0, .3)}@font-face{font-family:FiraGo;font-style:normal;font-weight:400;src:url(/app/assets/FiraGO-Regular-aODw3bZ7.woff2)}*{margin:0;padding:0;font-family:FiraGo,Tahoma,Verdana,sans-serif;font-size:14px;font-weight:400;text-align:left;box-sizing:border-box;transition:var(--global-transition)}html,body{background-color:var(--dark-gradient-background);height:100%;width:100%;min-height:100%;min-width:100%;overflow:hidden}::-webkit-scrollbar{width:8px;padding:1px;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--offWhite)}::-webkit-scrollbar-button{height:0px;background-color:transparent}::-webkit-scrollbar-track{width:8px}::-webkit-scrollbar-track-piece{background-color:transparent}::-webkit-scrollbar-thumb{margin:2px;background-color:var(--gray-l80);border-radius:4px}::-webkit-scrollbar-corner{display:none}::-webkit-resizer{display:block;border:2px outset var(--enabled-restingLight-background)}div,p,h1,h2,h3,table,td,label,button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}b,strong{font-weight:700}a,a:visited{background-color:transparent;border-radius:4px;color:var(--blue-l55);text-decoration:none}a:active{color:var(--blue-l40);background-color:#0099e61a}a:focus,a:hover{color:var(--blue-l65);text-decoration:underline;cursor:pointer}a[danger],a[danger]:visited{color:var(--darkRed)}a[danger]:hover,a[danger]:focus{color:var(--red)}p{display:block}span:disabled,span[disabled=disabled]{color:var(--disabled-text)}hr{border-style:solid;border-color:var(--gray-l85)}h1{margin-left:0;color:var(--gray-l55);font-size:2em;margin-bottom:8px;clear:right}h2{color:var(--gray-l45);font-size:1.6em}h3{color:var(--gray-l45);font-size:1.3em;margin-bottom:4px}h4{color:var(--gray-l45);font-size:1.2em;margin-bottom:4px}table{border-collapse:collapse}td{vertical-align:top}svg{overflow:visible}.number{font-family:monospace}label,label:focus,label:active{display:inline}label:hover{color:#000}input,textarea{border:none;padding:0 0 0 4px;height:24px;text-align:left;font-family:monospace;background-color:var(--enabled-restingLight-background);color:var(--enabled-restingLight-text);border:1px solid var(--enabled-restingLight-border);border-radius:4px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}input:hover,textarea:hover{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}input:focus,textarea:focus{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}textarea:hover::-webkit-resizer,textarea:focus::-webkit-resizer{display:block;border:2px outset var(--enabled-focus-background)}info-bubble{width:12px}input:focus,button:focus,textarea:focus,info-bubble:focus,glyph-tile:focus{outline:var(--global-focus-style);outline-offset:-1px}input[type=image]{height:auto;width:auto;background-color:transparent;border-width:0px}input[type=number]{text-align:right;width:70px;border:1px solid white;border:1px solid var(--gray-l90);cursor:default}input[type=text][disabled=disabled],input[type=number][disabled=disabled]{background-color:var(--gray-l90);border:1px solid var(--gray-l90);color:var(--gray-l65)}input[type=checkbox]{accent-color:var(--accent-color);opacity:.75}ul li{margin-left:20px;margin-top:10px}canvas:focus,canvas:focus-visible,edit-canvas:focus,edit-canvas:focus-visible{border:0;border-image:none;outline:0}@keyframes fade-slide-in{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-update{0%{opacity:.6}to{opacity:1}}@keyframes fade-in{0%{opacity:0;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}@keyframes fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.99)}}.span-all-columns{grid-column:-1 / 1!important}button,button:active,button:hover,button:focus{text-align:center;padding:4px 8px;margin:2px 0;cursor:pointer;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--gray-l90);color:var(--enabled-text);box-shadow:var(--l1-shadow)}button:hover{color:var(--enabled-focus-text);border-color:var(--blue-l85);box-shadow:var(--l1-shadow)}button[disabled],button[disabled]:active,button[disabled]:hover,button[disabled]:focus{background-color:var(--gray-l95);border-color:var(--gray-l95);color:var(--disabled-text);cursor:default}.button__call-to-action,.button__call-to-action:hover,.button__call-to-action:active,.button__call-to-action:focus{background-color:var(--blue-l60);color:var(--gray-l95)}.button__call-to-action:hover{color:#fff}",eI="dialog{z-index:1000}#toast,#error{display:none;width:300px;position:absolute;left:520px;margin:5px 0;background-color:var(--green-l90);color:var(--green-l10);padding:4px 8px;z-index:2010;text-align:center;border:1px solid var(--green-l60);border-radius:4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#toast[fancy]{background-color:var(--purple-l30);background:linear-gradient(135deg,var(--purple-l25),var(--purple-l10));color:var(--purple-l95);font-size:1.2em;border-color:var(--purple-l30);padding:10px}#toast a{color:var(--green-l10)}#notation{display:none;position:absolute;right:900px;top:400px;width:auto;height:auto;padding:0;z-index:2020;background-color:#e5eaef;border:5px solid rgb(229,234,239);border-radius:5px 5px 0;box-shadow:var(--l2-shadow-upper-left);animation:var(--animate-fade-in)}.notation__path-add-point{display:grid;grid-template-columns:20px min-content min-content;margin:0 5px 2px}.notation__path-add-point span{font-family:monospace}.notation__path-add-point label{font-family:monospace;color:var(--enabled-restingLight-lightText)}#error{margin-top:10px;border-color:var(--red);color:var(--darkRed);background-color:var(--lightRed);display:grid;grid-template-rows:20px 1fr;padding:10px 12px 12px;row-gap:10px}#error hr{border-color:var(--red);margin:10px 0}.error__header{display:grid;grid-template-columns:1fr 20px}.error__header h3{color:var(--darkRed)}.error__header button{background-color:var(--darkRed);border-color:var(--darkRed);color:var(--lightRed);width:20px;height:20px;line-height:20px;padding:0;margin:0}.error__header button:hover{color:#fff;border-color:var(--red)}#context-menu{display:grid;grid-template-columns:24px 1fr min-content min-content;column-gap:0px;row-gap:5px;width:fit-content;overflow-y:auto;padding:10px;position:absolute;z-index:2030;background-color:var(--enabled-resting-background);border:1px solid var(--enabled-focus-border);border-radius:0 4px 4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#context-menu:focus{outline:0}.context-menu-row{display:contents;padding:5px 10px 5px 5px;height:24px;border-radius:4px}.context-menu-row:hover>span,.context-menu-row:hover>.row-notes,.context-menu-row:hover>.row-notes span,.context-menu-row:hover>.row-notes code{background-color:var(--enabled-focus-background);color:var(--blue-l45);cursor:pointer}.context-menu-row:focus{outline:var(--global-focus-style)}.context-menu-row[disabled]{opacity:.5;color:var(--disabled-text-light)}.context-menu-row[disabled]:hover>span,.context-menu-row[disabled]:hover>.row-notes,.context-menu-row[disabled]:hover>.row-notes span,.context-menu-row[disabled]:hover>.row-notes code{color:var(--disabled-text-light);cursor:default;background-color:transparent}.context-menu-row[disabled] svg g{fill:var(--disabled-text-light)!important}#context-menu .spanAll h2{font-size:.8em;color:var(--enabled-restingLight-lightText);font-family:monospace;padding:0 20px 0 0}.context-menu-row hr,.context-menu-row hr:hover,.context-menu-row hr:active,.context-menu-row hr:focus{margin:8px 0;grid-column:1 / -1;border-width:0px 0px 1px 0px;border-color:var(--gray-l90)}.context-menu-row .row-icon{height:24px;width:24px}.context-menu-row .row-icon svg{height:20px;width:20px;margin:2px}.context-menu-row .row-name{line-height:22px;height:24px;padding:2px 20px 0 10px;display:flex}.context-menu-row .row-name svg{margin-right:10px}.context-menu-row .row-notes{background-color:transparent;width:max-content;height:24px;opacity:.8;display:contents;margin-left:20px}.context-menu-row .row-notes code{height:20px;line-height:18px;margin:2px;font-size:.8em;min-height:24px;min-width:24px}.context-menu-row .row-notes span{grid-column:span 2;font-size:.8em;line-height:24px;padding:0 0 0 4px;height:24px;margin:0}#modal-dialog{display:block;position:absolute;text-align:center;border-width:0px;padding:0px auto;left:0;top:0;width:100vw;height:100vh;z-index:2000;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background-color:#ffffffbf;animation:var(--animate-fade-in)}.modal-dialog__content{display:grid;grid-template-rows:30px 1fr;width:clamp(500px,66vw,1000px);max-height:calc(100vh - 80px);overflow-y:hidden;margin:40px auto;text-align:left;background-color:var(--enabled-focus-background);border:1px solid var(--blue-l60);border-radius:8px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}.modal-dialog__header{margin:4px;height:20px;display:grid;grid-template-columns:1fr 20px}.modal-dialog__body{display:block;max-height:calc(100vh - 120px);overflow-y:auto;padding:0 20px 20px}.modal-dialog__close-button{background-color:var(--blue-l95);border-color:var(--blue-l85);color:var(--blue-l50);text-align:center;width:20px;height:20px;line-height:14px;font-size:1.2em;padding:0 0 2px;margin:0}.modal-dialog__close-button:hover{background-color:var(--blue-l90);color:var(--blue-l30);border-color:var(--blue-l70);cursor:pointer;padding:0 0 2px;margin:0}.modal-dialog__close-button:active,.modal-dialog__close-button:focus{background-color:var(--blue-l90);color:var(--blue-l50);cursor:pointer;padding:0;margin:0}.modal-dialog__glyph-chooser-scroll-area{height:100%;padding:10px 5px 5px 10px;background-color:var(--offWhite);margin-bottom:10px}",tI="";class Q0{constructor(e={}){this.textBlocks=[],this.lineBreakers=e.lineBreakers||[" "," "," "],this.data=[],this.pixelHeight=0,this.canvasMaxes=e.canvasMaxes,this.ctx=e.ctx,this.project=e.project||xe(),this.options=new kr(e.options),this.hasDrawableCharacters=!1,this.drawPageExtras=e.drawPageExtras||!1,this.drawLineExtras=e.drawLineExtras||!1,this.drawCharacterExtras=e.drawCharacterExtras||!1,this.drawCharacter=e.drawCharacter||!1,this.roundUp=e.roundUp||!1,this.generateData()}get canvasMaxes(){return this._canvasMaxes}set canvasMaxes(e={}){this._canvasMaxes=new sr({xMin:e.xMin||0,xMax:e.xMax||1/0,yMin:e.yMin||0,yMax:e.yMax||1/0})}draw({showPageExtras:e=!1,showLineExtras:r=!1,showCharacterExtras:n=!1,showCharacter:a=!1}={}){if(this.drawPageExtras&&e&&this.drawPageExtras(this.ctx,this),this.options.text==="")return;let o=-1;this.drawLineExtras&&r&&this.iterator(s=>{s.lineNumber!==o&&(this.drawLineExtras(this.ctx,s,this),o=s.lineNumber)}),this.drawCharacterExtras&&n&&this.iterator(s=>{this.drawCharacterExtras(this.ctx,s,this.roundUp)}),this.drawCharacter&&a&&this.iterator(s=>{this.drawCharacter(this.ctx,s)})}iterator(e){for(let r=0;r<this.data.length;r++)for(let n=0;n<this.data[r].length;n++)e(this.data[r][n],this)}drawCanvasMaxes(e){e.fillStyle="transparent",e.strokeStyle="lime",e.lineWidth=1,e.strokeRect(this.canvasMaxes.xMin,this.canvasMaxes.yMin,this.canvasMaxes.width,this.canvasMaxes.height)}generateData(){var Q;let e,r,n,a,o=0,s,x,E;for(this.data=[],this.textBlocks=this.options.text.split(`
`),n=0;n<this.textBlocks.length;n++)for(e=Xs(this.textBlocks[n].split(""),this.project),this.data[n]=[],a=0;a<e.length;a++)r=e[a],r.startsWith("liga-")?(E=this.project.ligatures[r],r=E.chars):E=this.project.getItem(`glyph-${wr(r)}`),(Q=E==null?void 0:E.shapes)!=null&&Q.length&&(this.hasDrawableCharacters=!0),s=E?E.advanceWidth:this.project.defaultAdvanceWidth,x=jr(r,e[a+1]),o+=s+x,this.data[n][a]={char:r,item:E,view:!1,widths:{advance:s,kern:x,aggregate:o},isLineBreaker:this.lineBreakers.indexOf(r)>-1,isVisible:!1,lineNumber:!1};let T,p,R,N=0,g=0,K=0,Y=!1;const V=this.options.fontSize/this.project.totalVertical,_=this.project.settings.font.ascent,$={lineHeight:this.project.totalVertical+this.options.lineGap/V,width:this.canvasMaxes.width/V,yMax:this.canvasMaxes.yMax/V,yMin:this.canvasMaxes.yMin/V,xMin:this.canvasMaxes.xMin/V};for(this.options.pageHeight==="auto"&&($.yMax=Number.Infinity),g=$.xMin,K=$.yMin+_,n=0;n<this.data.length;n++){for(e=this.data[n],a=0;a<e.length;a++){if(T=e[a],T.view===!1){if(Y&&Number.isFinite($.width)){if(p=rI(e,a),R=p.widths.aggregate+p.widths.advance-T.widths.aggregate,g+R>$.width){if(N++,K+$.lineHeight>$.yMax)return;g=$.xMin,K=$.yMin+_+N*$.lineHeight}Y=!1}T.isVisible=!0,T.lineNumber=N,T.view={dx:g*V,dy:K*V,dz:V},g+=T.widths.advance+T.widths.kern}T.isLineBreaker&&(Y=!0)}if(N++,K+$.lineHeight>$.yMax)return;g=$.xMin,K=$.yMin+_+N*$.lineHeight,this.pixelHeight=N*$.lineHeight*V}}}function rI(t,e){for(let n=e;n<t.length;n++)if(t[n].isLineBreaker)return t[n];return t[t.length-1]}function jr(t,e){if(!t||!e)return 0;t=xn(t).join(""),e=xn(e).join("");let r=xe().kerning,n,a,o;for(let s of Object.keys(r))for(let x=0;x<r[s].leftGroup.length;x++)if(n=r[s].leftGroup[x],xn(n)[0]===t){for(let E=0;E<r[s].rightGroup.length;E++)if(a=r[s].rightGroup[E],xn(a)[0]===e)return o=r[s].value*-1,o}return 0}function Xs(t,e){e=e||xe();const r=e.sortedLigatures;let n,a;for(let o=0;o<t.length;o++)for(let s=0;s<r.length;s++)n=r[s].chars,a=t.slice(o,o+n.length).join(""),a===n&&t.splice(o,n.length,r[s].id);return t}class Xa extends HTMLElement{constructor(e={}){super(),this.isSetUp=!1,this.initialAttributes=e,this.observedAttrs=["text","font-size","line-gap","page-padding","show-page-extras","show-line-extras","show-character-extras","show-placeholder-message","width-adjustment"]}connectedCallback(){this.constructor.name!=="DisplayCanvas"&&(this.__proto__=customElements.get("display-canvas").prototype),this.textBlockOptions=new kr,Object.keys(this.initialAttributes).forEach(n=>{let a=this.initialAttributes[n];n!=="_text"?(n!=="width"&&n!=="height"&&this.setAttribute(H1(n),a),this.textBlockOptions[Ii(n)]&&(this.textBlockOptions[Ii(n)]=a)):(this.textBlockOptions.text=this.initialAttributes._text,this.setAttribute("text",this.textBlockOptions.text))}),this.observedAttrs.forEach(n=>{if(this.hasAttribute(n)){let a=this.getAttribute(n);n.startsWith("show")?a==="false"?a=!1:a=!0:n!=="text"&&(a=parseFloat(a)),this.textBlockOptions[Ii(n)]=a}});const e=this.attachShadow({mode:"open"}),r=C({tag:"style",innerHTML:tI});e.appendChild(r),this.canvas=C({tag:"canvas",id:"mainDisplayCanvas"}),e.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.drawCrisp=!1,this.isSetUp=!0,this.resizeAndRedraw?this.resizeAndRedraw():console.warn(`${this.constructor.name}: Methods not available on connectedCallback`)}resizeAndRedraw(){this.isSetUp&&(this.updateTextBlock(),this.updateCanvasSize(),this.redraw())}updateCanvasSize(){var s;const e=(s=this==null?void 0:this.parentElement)==null?void 0:s.getClientRects()[0],r=this.textBlockOptions.pageHeight,n=this.textBlockOptions.pageWidth;let a=1e3,o=1e3;r==="auto"?(a=this.textBlock.pixelHeight,a+=this.textBlockOptions.pagePadding):r==="fit"?a=e.height:isNaN(parseInt(r))||(a=parseInt(r)),n==="fit"?o=e.width:isNaN(parseInt(n))||(o=parseInt(n)),this.widthAdjustment&&(o+=this.widthAdjustment),this.height=a,this.width=o,this.canvas.height=a,this.canvas.width=o}updateTextBlock(){let e=this.calculatePageMaxes(),r=!1,n=parseInt(this.getAttribute("project-editor"));isNaN(n)||(r=ht().projectEditors[n].project),this.textBlock=new Q0({options:this.textBlockOptions,canvasMaxes:e,ctx:this.ctx,drawPageExtras:this.drawDisplayPageExtras,drawLineExtras:this.drawDisplayLineExtras,drawCharacterExtras:this.drawDisplayCharacterExtras,drawCharacter:this.drawDisplayCharacter,project:r})}calculatePageMaxes(){var s;const e=(s=this==null?void 0:this.parentElement)==null?void 0:s.getClientRects()[0],r=this.textBlockOptions.pagePadding,n=this.textBlockOptions.pageHeight,a=this.textBlockOptions.pageWidth,o={xMin:r,yMin:r,xMax:1e3,yMax:1e3};return n==="auto"?o.yMax=1/0:n==="fit"?o.yMax=e.height-r:isNaN(parseInt(n))||(o.yMax=parseInt(n)),a==="fit"?o.xMax=e.width-r:isNaN(parseInt(a))||(o.xMax=parseInt(a)),this.widthAdjustment&&(o.xMax+=this.widthAdjustment),o}static get observedAttributes(){return this.observedAttrs}attributeChangedCallback(e,r,n){this.constructor.name==="DisplayCanvas"&&(e==="text"&&(this.textBlockOptions.text=n,this.resizeAndRedraw()),e==="font-size"&&(this.textBlockOptions.fontSize=Math.max(parseInt(n),1),this.resizeAndRedraw()),e==="line-gap"&&(this.textBlockOptions.lineGap=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="page-padding"&&(this.textBlockOptions.pagePadding=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="show-page-extras"&&(this.textBlockOptions.showPageExtras=n==="true",this.redraw()),e==="show-line-extras"&&(this.textBlockOptions.showLineExtras=n==="true",this.redraw()),e==="show-character-extras"&&(this.textBlockOptions.showCharacterExtras=n==="true",this.redraw()),e==="show-placeholder-message"&&(this.textBlockOptions.showPlaceholderMessage=n==="true",this.redraw()),e==="width-adjustment"&&(this.widthAdjustment=parseInt(n),this.resizeAndRedraw()))}redraw(){if(this.isSetUp){if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.textBlock.hasDrawableCharacters)this.textBlock.draw({showPageExtras:this.textBlockOptions.showPageExtras,showLineExtras:this.textBlockOptions.showLineExtras,showCharacterExtras:this.textBlockOptions.showCharacterExtras,showCharacter:!0});else if(this.textBlockOptions.showPlaceholderMessage){this.ctx.fillStyle=Zr.disabled.text,this.ctx.font="14px sans-serif",this.ctx.textBaseline="middle";let e=this.textBlock.canvasMaxes.xMin,r=this.height/2;this.ctx.fillText("Project preview text will be shown here.",e,r)}}}iterator(e){const r=this.textBlock.data;for(let n=0;n<r.length;n++)for(let a=0;a<r[n].length;a++)e(r[n][a],this)}drawDisplayPageExtras(e,r){const n=r.canvasMaxes,a=n.yMin||0,o=n.yMax===1/0?r.pixelHeight:n.yMax,s=n.xMin||0,E=(n.xMax||1e3)-s,T=o-a;e.fillStyle="transparent",e.strokeStyle=st.gray.l90,e.lineWidth=1,e.strokeRect(Ot(s),Ot(a),ae(E),ae(T))}drawDisplayLineExtras(e,r,n){e.strokeStyle=st.gray.l85,e.beginPath(),e.moveTo(n.canvasMaxes.xMin,r.view.dy),e.lineTo(n.canvasMaxes.xMax,r.view.dy),e.closePath(),e.stroke()}drawDisplayCharacterExtras(e,r){const n=xe(),a=n.settings.font,o=r.view.dz;let s=r.widths.advance*o,x=n.totalVertical*o,E=r.view.dy-a.ascent*o,T=r.view.dx;const p=r.widths.kern*o*-1;r.widths.kern&&(e.fillStyle="orange",e.globalAlpha=.3,e.fillRect(T+s-p,E,p,x),e.globalAlpha=1),e.fillStyle="transparent",e.strokeStyle=st.blue.l85,e.lineWidth=1,this.drawCrisp&&(T=Ot(T),E=Ot(E),s=ae(s),x=ae(x)),e.strokeRect(T,E,s,x)}drawDisplayCharacter(e,r){const n=r.item,a=ar(r.view);n&&(e.fillStyle=Zr.enabled.resting.text,e.strokeStyle="transparent",Sa(n,e,a,1,!0))}}const nI=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147 29">\r
	<g id="g">\r
		<path\r
			d="m13,6l-1,2c-1.15-.9-3-2-5-2C3,6,0,9,0,13c0,2,.45,3.04,1.32,4-.66.69-1.32,1.35-1.32,2.1,0,1.51,1.13,3.94,4.48,3.94,4.52,0,5.52-1,6.52-1,.43,0,1,.69,1,1,0,3-3,3-6,3-.75,0-2,0-3-1-.1-.02-1.1,2-1,2,1,1,3,1,4,1,7.01,0,8-2.86,8-6,0-1,0-2-1-2-4,0-5.64,1-8.02,1-1.93,0-2.98-1.08-2.98-2,0-.39.67-.75.94-1.03,1.1.54,2.6,1.01,4.1,1.01,4,0,7-2,7-6,0-2-.28-2.9-1-4l1-1h2v-2h-3Zm-6,11c-2,0-5-1-5-4s2.63-5,5-5,5,2,5,5-2,4-5,4Z" />\r
	</g>\r
	<path id="l" d="m20,19h-1V1c0-.66-.34-1-1-1h-2v2h1v17h-1v2h4v-2Z" />\r
	<g id="y">\r
		<path\r
			d="m33,6h-2v2h1v9c-.72,1.47-2.55,2-4,2-.55,0-4,.4-4-3V7c0-.66-.34-1-1-1h-3v2h2v8c0,3.14,1.48,5,6,5,1.65,0,2.99-.37,4-1v2c0,3-1.83,4-6,4-2,0-3-1-3-1l-1,2c1,1,3,1,4,1,7.1,0,8-3,8-6V7c0-.66-.34-1-1-1Z" />\r
	</g>\r
	<path id="p"\r
		d="m35,25v2h2c.65,0,1-.35,1-1v-6s2,1,4,1c3,0,6-2,6-5v-5c0-3-2-5-6-5-2,0-4,1-4,1,0,0-.35-1-1-1h-2v2h1v17h-1Zm7-17c2,0,4,1,4,3v5c0,2-1.73,3-4,3s-4-1-4-3v-5c0-2,2-3,4-3Z" />\r
	<path id="h"\r
		d="m63,19h-1s0-7,0-7c0-4-1.64-6-6-6-1.47,0-3.14.42-4,1V1c0-.66-.35-1-1-1h-2v2h1v17h-1v2h4v-2h-1v-9c1-1.21,3-2,4-2s4,0,4,4v7h-1v2h4v-2Z" />\r
	<path id="r"\r
		d="m75,7s-1-1-4-1c-2,0-3,1-4,2v-1c0-.66-.33-1-1-1h-2v2h1v11h-1v2h4v-2h-1v-8c.66-1.66,2-3,4-3,1,0,2,0,3,1l1-2Z" />\r
	<path id="s"\r
		d="m85,13c-2,0-2-2-2-3s2-2,4-2c1.68,0,3,0,4,1l1-2c-1-1-2.21-1-4-1-7,0-7,3.22-7,4,0,2,0,5,3,5,4,0,7-1,7,1,0,2.78-1.28,3-5,3-1,0-3,0-4-1-.1-0-1.1,2-1,2,1,1,3,1,5,1,6.37,0,7-1.9,7-5,0-5-5.63-3-8-3Z" />\r
	<path id="t" d="m100,6h-3V1h-2v5h-2v2h2v12c0,.72.27,1,1,1h3v-2h-2v-11h3v-2Z" />\r
	<path id="u"\r
		d="m114,6h-2c-.65,0-1,.35-1,1v10c0,2-3.23,2-4,2-1,0-4-.53-4-4v-7h1v-2h-2c-.65,0-1,.34-1,1v8c.11,3.13,1.77,6,6,6,1.53,0,4-1,4-1,0,0,.51,1,1,1h2v-2h-1v-11h1v-2Z" />\r
	<path id="d"\r
		d="m128,2V0h-2c-.65,0-1,.35-1,1v6s-2-1-4-1c-3,0-6,2-6,5v5c0,3,2,5,6,5,2,0,4-1,4-1,0,0,.35,1,1,1h2v-2h-1V2h1Zm-7,17c-2,0-4-1-4-3v-5c0-2,1.73-3,4-3s4,1,4,3v5c0,2-2,3-4,3Z" />\r
	<path id="i" d="m133,19h-1V7c0-.66-.35-1-1-1h-2v2h1v11h-1v2h4v-2Z" />\r
	<path id="i-2" d="m131,4.5c2,0,1.25-1.5,1.25-1.5,0,0-.35-1-1.25-1s-1.25,1-1.25,1c0,0-.75,1.5,1.25,1.5Z" />\r
	<path id="o"\r
		d="m146,12c0-4-3-6-6-6s-6,2-6,6v4c0,3,3,5,6,5s6-2,6-5v-4Zm-6,7c-2,0-4-1-4-3v-4c0-2,2-4,4-4s4,2,4,4v4c0,2-2,3-4,3Z" />\r
</svg>`;async function Go(t,e,r=!1){let n=z().loadedFileHandle;n&&t==="gs2"?(r&&(n=!1),await iI(t,e,n)):aI(t,e)}function aI(t,e){const r="text/plain;charset=utf-8",n=new Blob([e],{type:r,endings:"native"});let a=Mi(t,!0);try{window.navigator.msSaveBlob(n,a)}catch{const s=document.createElement("a");window.URL=window.URL||window.webkitURL,s.href=window.URL.createObjectURL(n),s.download=a;const x=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});s.dispatchEvent(x)}}async function iI(t,e,r=!1){const a={suggestedName:Mi(t),types:[{description:"Glyphr Studio Project file",accept:{"application/json":[".gs2"]}}]};r||(r=await window.showSaveFilePicker(a));const o=await r.createWritable();await o.write(e),await o.close();const s=z();s.loadedFileHandle=r}function Mi(t,e=!1){let n=xe().settings.project.name;return t==="gs2"?(n+=" - Glyphr Studio Project",e&&(n+=` - ${q0()}`)):t==="svg"&&(n+=` - SVG Font - ${q0()}`),n+=`.${t}`,n}function q0(){const t=new Date,e=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),a=t.getHours(),o=(t.getMinutes()<10?"0":"")+t.getMinutes(),s=(t.getSeconds()<10?"0":"")+t.getSeconds();return`${e}.${r}.${n}-${a}.${o}.${s}`}function js(){const t=xe(),e=ht(),r=t.settings.font,n=r.family,a=n.replace(/ /g,"_");let s=q0().split("-");s[0]=s[0].replace(/\./g,"-"),s[1]=s[1].replace(/\./g,":"),s=s.join(" at ");let x=`<?xml version="1.0"?>
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<metadata>
		Project: ${t.settings.project.name}
		Font exported on ${s}
		Created with Glyphr Studio - the free, web-based font editor
		Version: ${e.version}
		Find out more at www.glyphrstudio.com
	</metadata>
	<defs>
		<font id="${a}" horiz-adv-x="${r.upm}">
			<font-face ${oI()}
			>
				<font-face-src>
					<font-face-name name="${n}" />
				</font-face-src>
			</font-face>
${sI()}
${lI()}
${xI()}
		</font>
	</defs>

	<text x="100" y="150" style="font-size:48px;" font-family="${n}">
		${n}
	</text>
</svg>
`;Go("svg",x),ye("Exported SVG Font File")}function oI(){const e=xe().settings.font,r=AI(),n="		";let a="";return a+=`
		${n}font-family="${e.family}"
		${n}font-style="${e.style}"
		${n}panose-1="${e.panose}"
		${n}units-per-em="${e.upm}"
		${n}ascent="${e.ascent}"
		${n}cap-height="${e.capHeight}"
		${n}x-height="${e.xHeight}"
		${n}descent="${e.descent}"
		${n}bbox="${r.maxes.xMin}, ${r.maxes.yMin}, ${r.maxes.xMax}, ${r.maxes.yMax}"
		${n}unicode-range="U+20-${r.maxGlyph}"
		${n}font-variant="${e.variant}"
		${n}font-weight="${e.weight}"
		${n}font-stretch="${e.stretch}"
		${n}stemv="${e.stemv}"
		${n}stemh="${e.stemh}"
		${n}slope="${e.slope}"
		${n}underline-position="${e.underlinePosition}"
		${n}underline-thickness="${e.underlineThickness}"
		${n}strikethrough-position="${e.strikethroughPosition}"
		${n}strikethrough-thickness="${e.strikethroughThickness}"
		${n}overline-position="${e.overlinePosition}"
		${n}overline-thickness="${e.overlineThickness}"
	`,a}function AI(){const t=xe(),e={maxGlyph:32,maxes:new sr};let r;t.settings.project.characterRanges.forEach(a=>{if(a.enabled){for(let o=a.begin;o<a.end;o++)r=t.getItem(`glyph-${$e(o)}`),r&&(e.maxes=Ba([e.maxes,r.maxes]));e.maxGlyph=Math.max(e.maxGlyph,a.end)}});for(const a of Object.keys(t.ligatures))e.maxes=Ba([e.maxes,t.ligatures[a]]);return e}function sI(){const t=xe();let e=t.getItem("glyph-0x0");if(e)return $0(e,"glyph-0x0","missing-glyph");const r=t.settings.font.ascent,n=ae(r*.618),a=ae(r/100);let o=`
			<missing-glyph horiz-adv-x="${n}" `;return o+=`d="M0,0 v${r} h${n} v-${r} h-${n}z `,o+=`M${a},${a} v${r-a*2} h${n-a*2} `,o+=`v - ${r-a*2} h - ${n-a*2} z"/>
`,o}function lI(){const t=xe(),e=[],r=[];t.settings.project.characterRanges.forEach(a=>{a.enabled&&a.getMemberIDs().forEach(o=>{if(e.indexOf(o)===-1){const s=t.getItem(`glyph-${o}`);s&&(r.push({xg:s,xc:o}),e.push(o))}})});let n="";if(n+=`			<!-- Glyphs -->
`,r.forEach(a=>{n+=$0(a.xg,a.xc)}),t.settings.app.exportLigatures){n+=`
`,n+=`			<!-- Ligatures -->
`;for(const a of Object.keys(t.ligatures))n+=$0(t.ligatures[a],a)}return n}function $0(t,e,r="glyph"){if(!t.shapes.length&&t.advanceWidth<=0)return console.warn(`Glyph ${e} not exported: No paths or advance width.`),"";if(!e)return console.warn(`Glyph ${e} not exported: Bad ID`),"";if(e==="glyph-0x0"&&r==="glyph")return"";let n=t.svgPathData;n=n||"M0,0Z";let a=F1(t.chars),o="			<";return o+=r,r==="missing-glyph"?(o+=` horiz-adv-x="${t.advanceWidth}" `,o+=`d="${n}" />
`):(o+=` glyph-name="${t.name.replace(/ /g,"_")}" `,o+=`unicode="${a}" `,o+=`horiz-adv-x="${t.advanceWidth}" `,o+=`d="${n}" />
`),o}function xI(){const t=xe();if(!t.settings.app.exportKerning)return"";const e=t.kerning;let r=Object.keys(e);if(!r.length)return"";let n=`			<!-- Kern Pairs -->
`;for(const a of r)for(let o=0;o<e[a].leftGroup.length;o++)for(let s=0;s<e[a].rightGroup.length;s++)n+="			<hkern ",n+=`u1="${tA(e[a].leftGroup[o])}" `,n+=`u2="${tA(e[a].rightGroup[s])}" `,n+=`k="${e[a].value}" />
`;return n}const Qs=`<?xml version="1.0" encoding="utf-8"?>\r
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\r
	y="0px" viewBox="0 0 2661 1650" style="enable-background:new 0 0 2651 1640;" xml:space="preserve">\r
	<defs>\r
		<linearGradient id="logoGradient">\r
			<stop offset="0%" stop-color="var(--blue-l60)" />\r
			<stop offset="100%" stop-color="var(--purple-l50)" />\r
		</linearGradient>\r
	</defs>\r
	<path d="M500.77,240.66h-3.93h-6.56h-60.13c-11.89,0-23.1,5.6-30.23,15.12l-11.9,15.87C347.22,239.3,295.84,220,240.08,220\r
	C107.7,220,0,328.81,0,462.55c0,51.6,16.03,95.8,46.72,129.81C23.29,616.68,10,648.4,10,673.49c0,53.63,30,135.61,148.95,135.61\r
	c102.35,0,161.84-29.12,219.64-29.12c15.42,0,11.82,7.56,11.88,18.39c-0.22,99.86-45.09,107.16-191.5,107.16\r
	c-26.68,0-82.11-4.52-102.01-8.27c-3.22-0.61-6.34,1.39-7.19,4.55L70.2,973.47c-0.94,3.47,1.19,7.03,4.7,7.79\r
	c32.9,7.11,92.96,8.73,124.05,8.73c248.97,0,274.54-98.88,274.54-210.02c0-39.22-4.45-93.37-80.03-93.37\r
	c-63.89,0-132.38,36.12-216.85,36.12C108,722.73,88,704,88,672c0-13.64,6.61-26.44,16.25-36.35c37.7,19.01,83.97,28.94,135.83,28.94\r
	c66.22,0,123.32-16.19,165.12-46.8c49.04-35.93,74.96-89.61,74.96-155.24c0-49.59-14.82-95.75-40.2-134.21l9.08-12.11h47.79v-0.02\r
	h3.93c2.76,0,5-2.24,5-5v-65.57C505.77,242.9,503.53,240.66,500.77,240.66z M240.08,592.8c-45.87,0-152.56-12.58-152.56-129.07\r
	c0-94.8,68.44-171.93,152.56-171.93s152.56,77.12,152.56,171.93C392.64,580.22,285.95,592.8,240.08,592.8z" />\r
	<path d="M1131,241h-74h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h32v294.5c-25.36,51.94-93.81,70.5-145,70.5\r
	c-19.59,0-149-6.19-149-126V283c0-23.2-18.8-42-42-42h-74h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v239\r
	c0,110.81,68.5,206,228,206c58.34,0,105.27-13.01,141.09-35.38c0,23.82,0,47.13,0,51.92c0,89.46-46.98,116.23-194.07,116.23\r
	c-27.54,0-77.92-2.77-100.32-6.01c-6.57-0.95-10.59-0.76-12.75,8.05l-0.01,0.04l-0.01,0.04l-17.08,62.78\r
	c-1.74,7.34-0.82,11.67,8.36,13.73C803.11,989,877.33,990,891.02,990c250.21,0,278.58-120.83,281.63-200h0.35V283\r
	C1173,259.8,1154.2,241,1131,241z" />\r
	<path\r
		d="M671,675h-2v0h-39V43c0-23.2-18.8-42-42-42h-79h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v590h-39v0h-2\r
	c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h4c0,0,0,0,0,0H667c0,0,0,0,0,0h4c2.76,0,5-2.24,5-5v-74C676,677.24,673.76,675,671,675z" />\r
	<path d="M2647,250l-2.59-0.83l-0.03,0.01C2612.9,236.87,2575.85,230,2533.5,230c-71.87,0-121.1,25.18-153.5,60.35V283\r
	c0-23.2-18.8-42-42-42h-79h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v240v111h-27v0h-2c-2.76,0-5,2.24-5,5v74\r
	c0,2.76,2.24,5,5,5h4c0,0,0,0,0,0H2417c0,0,0,0,0,0h4c2.76,0,5-2.24,5-5v-74c0-2.76-2.24-5-5-5h-2v0h-39V565V404.42\r
	c22.85-59.07,86.11-84.7,153.5-84.7c8.65,0,39.65,0.05,71.5,10.28c7,2,10,3,14-4l30-65C2652,255,2651,252,2647,250z" />\r
	<path d="M2238,676h-2v0h-26.25V436c0.08,0,0.17,0,0.25,0c0-114.81-73.5-206-228-206c-52.27,0-92.52,12.37-123,32.91V42\r
	c0-23.2-18.8-42-42-42h-79h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v592h-39v0h-2c-2.76,0-5,2.24-5,5v74\r
	c0,2.76,2.24,5,5,5h4c0,0,0,0,0,0H1884c0,0,0,0,0,0h4c2.76,0,5-2.24,5-5v-74c0-2.76-2.24-5-5-5h-2v0h-27V356.6\r
	c36.17-42.63,95.53-52.6,123-52.6c19.59,0,143,9.19,143,132h-0.25v240H2086v0h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h4\r
	c0,0,0,0,0,0H2234c0,0,0,0,0,0h4c2.76,0,5-2.24,5-5v-74C2243,678.24,2240.76,676,2238,676z" />\r
	<path\r
		d="M1721.99,460c-0.48-133.51-104.79-230-230.49-230c-59.98,0-114.17,25.6-154.5,66.12V282c0-23.2-18.8-42-42-42h-79h-2h-2\r
	c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h37v383v161v32h-37h-2h-2c-2.76,0-5,2.24-5,5v74c0,2.76,2.24,5,5,5h2h2h79\r
	c23.2,0,42-18.8,42-42v-74V710.14c31.83,36.2,80.71,59.86,153,59.86c154.5,0,232-91.19,232-206V460H1721.99z M1638,558\r
	c0,122.81-111,134-148,134c-55,0-151-24.19-151-144v-90.89c0-90.09,72.44-153.88,152.5-153.88S1638,369.94,1638,466.61V558z" />\r
	<path d="M2573.61,1327.19c-0.53-125.82-98.88-228.33-223.74-228.33c-0.18,0-0.36,0.02-0.55,0.03c-0.18-0.01-0.36-0.03-0.55-0.03\r
	c-125.2,0-223.75,103.06-223.75,229.35h0.14v101.93h0c0.4,109.7,65.74,208.86,223.74,208.86c0.17,0,0.34-0.01,0.51-0.01\r
	c0.17,0.01,0.34,0.01,0.51,0.01c158,0,223.34-99.15,223.74-208.86h0v-102.95H2573.61z M2349.93,1556.4c-0.17,0-0.34,0.01-0.51,0.02\r
	c-0.17-0.01-0.34-0.02-0.51-0.02c-54.65,0-140.16-8.22-140.16-127.27v-101.93h-0.12c0.46-89.01,60.9-155.57,140.15-155.57\r
	c0.18,0,0.36-0.02,0.55-0.03c0.18,0.01,0.36,0.03,0.55,0.03c79.55,0,140.16,67.07,140.16,156.59h0.06v100.92\r
	C2490.09,1548.17,2404.58,1556.4,2349.93,1556.4z" />\r
	<path d="M2078.54,1544.64l-36.55,0v-393.85c0-23.2-18.81-42-42-42h-85.46c-1.41,0-2.55,1.14-2.55,2.55v78.91\r
	c0,1.41,1.14,2.55,2.55,2.55h43.46v351.85l-38.36,0c-1.41,0-2.55,1.14-2.55,2.55v78.91c0,1.41,1.14,2.55,2.55,2.55h158.92\r
	c1.41,0,2.55-1.14,2.55-2.55v-78.91C2081.09,1545.79,2079.95,1544.64,2078.54,1544.64z" />\r
	<path d="M1938.43,1023.83c10.2,7.48,24.14,11.43,40.31,11.43s30.11-3.95,40.31-11.43c11.97-8.77,18.3-21.88,18.3-37.9\r
	c0-32.65-26.29-59.22-58.61-59.22c-32.32,0-58.61,26.56-58.61,59.22C1920.13,1001.95,1926.46,1015.06,1938.43,1023.83z" />\r
	<path d="M758.32,1108.73l-93.19,0V924.51c0-2.41-1.95-4.36-4.36-4.36h-75.44c-2.41,0-4.36,1.95-4.36,4.36v184.22l-55.04,0\r
	c-1.41,0-2.55,1.14-2.55,2.55v79.06c0,1.41,1.14,2.55,2.55,2.55l55.04,0v389.27c0,25.65,20.79,46.44,46.44,46.44h92.82\r
	c0.1,0,0.2-0.01,0.31-0.02c0.19,0.05,0.39,0.08,0.6,0.08h8.93c1.41,0,2.55-1.14,2.55-2.55v-79.06c0-1.41-1.14-2.55-2.55-2.55h-8.93\r
	c-0.04,0-0.08,0.01-0.12,0.01c-0.26-0.05-0.52-0.08-0.79-0.08h-50.74c-2.41,0-4.36-1.95-4.36-4.36v-347.19l93.19,0\r
	c1.41,0,2.55-1.14,2.55-2.55v-79.06C760.86,1109.87,759.72,1108.73,758.32,1108.73z" />\r
	<path d="M406.88,1329.37c-63.01,0-110.27,20.43-193.58,20.43c-67.68,0-77.11-18.57-77.11-50.13c0-25.32-6.99-118.97,183.68-118.97\r
	c58.91,0,107.84,22.84,125.84,26.91c6.47,1.47,10.6,0.76,12.75-8.05l0.01-0.04l0.01-0.04l17.09-62.8\r
	c1.74-7.34,0.42-10.35-8.37-13.73c-17.07-6.58-84.34-24.41-147.33-24.41C62.33,1098.55,55,1289.15,55,1316.74\r
	c0,52.1,29.61,113.05,135.87,113.05c100.95,0,149.42-13.43,206.42-13.43c15.21,0,11.65,7.45,11.72,18.14\r
	c-0.22,98.49-53,120.98-183.77,120.98c-26.31,0-121.75-4.45-141.38-8.15c-3.18-0.6-6.25,1.37-7.09,4.49l-19.29,70.68\r
	c-0.92,3.43,1.17,6.94,4.64,7.69c32.45,7.02,132.46,8.61,163.12,8.61c224.04,0,260.57-107.71,260.57-217.33\r
	C485.81,1382.78,481.43,1329.37,406.88,1329.37z" />\r
	<path d="M1812.64,952.47h43.16c1.41,0,2.55-1.14,2.55-2.55v-78.37c0-1.41-1.14-2.55-2.55-2.55h-84.89\r
	c-23.05,0-41.73,18.68-41.73,41.73l-0.16,251.69c-40.11-39.23-93.43-63.89-152.31-63.89c-125.76,0-230.12,96.53-230.6,230.11h-0.01\r
	v104.05c0,114.86,77.54,206.1,232.11,206.1c70.76,0,119.09-22.66,150.98-57.55v5.63c0,23.05,18.68,41.73,41.73,41.73h84.89\r
	c1.41,0,2.55-1.14,2.55-2.55v-78.37c0-1.41-1.14-2.55-2.55-2.55h-43.16V952.47z M1578.2,1560.75c-37.02,0-148.07-11.2-148.07-134.06\r
	v-91.43c0-96.71,66.47-163.46,146.57-163.46c78.5,0,149.67,61.3,152.48,148.6v102.67\r
	C1725.82,1537.41,1632.23,1560.75,1578.2,1560.75z" />\r
	<path d="M1312.95,1189.64v-78.37c0-1.41-1.14-2.55-2.55-2.55h-84.89c-23.05,0-41.73,18.69-41.73,41.73l0.01,360.86\r
	c-36.11,42.98-95.75,53.01-123.3,53.01c-19.58,0-142.89-9.18-142.89-131.9h0.25l-0.91-239.97h43.47c1.41,0,2.55-1.14,2.55-2.55\r
	v-78.93c0-1.41-1.14-2.55-2.55-2.55h-85.57c-23.2,0-42.01,18.81-42.01,42.01l0.01,291.09c3.81,110.4,77.39,196.73,227.66,196.73\r
	c54.46,0,95.85-13.44,126.75-35.56c6.46,14.9,21.28,25.32,38.55,25.32l82.16-0.04c2.76,0,5-2.24,5-5v-74c0-2.76-2.24-5-5-5\r
	l-40.16,0.03l-0.55-351.84h43.16C1311.81,1192.19,1312.95,1191.05,1312.95,1189.64z" />\r
</svg>`;let Ea,La;function Po(t,e=!1,r=z()){Ea=t,La=!0;let n=C({tag:"div",className:"item-chooser__wrapper"}),a=C({tag:"div",className:"item-chooser__header"});a.appendChild(LI(r)),n.appendChild(a);let o=e||r.nav.page;return o==="Ligatures"?n.appendChild(ji(r)):o==="Components"?n.appendChild(Qi(r)):n.appendChild(bo(r)),n}function EI(t,e){Ea=e,La=!0;let r=C({tag:"div",className:"item-chooser__wrapper"});if(t==="Ligatures")r.appendChild(ji()),r.appendChild(C({tag:"fancy-button",innerHTML:"Create new ligature",onClick:Ql}));else if(t==="Components")r.appendChild(Qi()),r.appendChild(C({tag:"fancy-button",innerHTML:"Create new component",onClick:vl}));else if(t==="Kerning")r.appendChild($s()),r.appendChild(C({tag:"fancy-button",innerHTML:"Create a new kern group",onClick:()=>bi(!1)}));else{let n=C({tag:"div",className:"item-chooser__header"});r.appendChild(n),n.appendChild(hI()),r.appendChild(bo())}return r}function LI(t=z()){let e=t.selectedCharacterRange,r=C({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}}),n,a=vt(t.project.ligatures),o=vt(t.project.components);return a&&(n=C({tag:"option",innerHTML:"Ligatures",attributes:{note:`${a}&nbsp;items`}}),n.addEventListener("click",()=>{t.selectedCharacterRange="Ligatures",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(ji())}),r.appendChild(n)),o&&(n=C({tag:"option",innerHTML:"Components",attributes:{note:`${o}&nbsp;items`}}),n.addEventListener("click",()=>{t.selectedCharacterRange="Components",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(Qi())}),r.appendChild(n)),(a||o)&&r.appendChild(C({tag:"hr"})),qs(r,t),r}function hI(t=z()){let e=t.selectedCharacterRange,r=C({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}});return qs(r),r}function qs(t,e=z()){let n=xe().settings.project.characterRanges,a;n.forEach(o=>{o.enabled&&(a=C({tag:"option",innerHTML:o.name,attributes:{note:o.note}}),a.addEventListener("click",()=>{e.selectedCharacterRange=o,document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(bo())}),t.appendChild(a))})}function bo(t=z()){let e=C({tag:"div",className:"item-chooser__tile-grid"}),r=t.selectedCharacterRange.getMemberIDs(t.project.settings.app.showNonCharPoints);return r!=null&&r.length&&r.forEach(n=>{const a=`glyph-${n}`;let o=new zi({"displayed-item-id":a,project:t.project});t.selectedGlyphID===a&&o.setAttribute("selected",""),o.addEventListener("click",()=>Ea(a)),La&&t.subscribe({topic:"whichGlyphIsSelected",subscriberID:`glyphTile.${a}`,callback:s=>{parseInt(s)===parseInt(a)?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function ji(t=z()){const e=C({tag:"div",className:"item-chooser__tile-grid"}),r=t.project.sortedLigatures,n=vo(r,t.chooserPage.ligatures,t);return r.length>n.length&&e.appendChild(Uo("ligatures",r,t)),n.forEach(a=>{let o=new zi({"displayed-item-id":a.id});t.selectedLigatureID===a.id&&o.setAttribute("selected",""),o.addEventListener("click",()=>Ea(a.id)),La&&t.subscribe({topic:"whichLigatureIsSelected",subscriberID:`glyphTile.${a.id}`,callback:s=>{s===a.id?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function Qi(t=z()){let e=C({tag:"div",className:"item-chooser__tile-grid"});const r=t.project.sortedComponents,n=vo(r,t.chooserPage.components,t);return r.length>n.length&&e.appendChild(Uo("components",r,t)),n.forEach(a=>{let o=new zi({"displayed-item-id":a.id});t.selectedComponentID===a.id&&o.setAttribute("selected",""),o.addEventListener("click",()=>Ea(a.id)),La&&t.subscribe({topic:"whichComponentIsSelected",subscriberID:`glyphTile.${a.id}`,callback:s=>{s===a.id?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function $s(t=z()){let e=C({tag:"div",className:"kern-group-chooser__list"});const r=t.project.sortedKernGroups,n=vo(r,t.chooserPage.kerning,t);return r.length>n.length&&e.appendChild(Uo("kerning",r,t)),n.forEach(a=>{let o=el(a.id);t.selectedKernGroupID===a.id&&o.setAttribute("selected",""),o.addEventListener("click",()=>Ea(a.id)),La&&t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:`kernGroupRow.${a.id}`,callback:s=>{s===a.id?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function el(t,e=xe()){const r=e.getItem(t),n=C({className:"kern-group-chooser__row"}),a=C({className:"kern-group-chooser__left-members"});a.appendChild(na(r.leftGroup));const o=C({className:"kern-group-chooser__right-members"});return o.appendChild(na(r.rightGroup)),ne(n,[C({content:t}),a,C({className:"kern-group-chooser__members-divider",content:"&emsp;|&emsp;"}),o]),n}function vo(t=[],e=0,r=z()){const n=parseInt(r.project.settings.app.itemChooserPageSize)||256;if(t.length<n)return t;const a=e*n,o=a+n;return t.slice(a,o)}function Uo(t,e=[],r=z()){const n={ligatures:ji,components:Qi,kerning:$s},a=parseInt(r.project.settings.app.itemChooserPageSize)||256,o=r.chooserPage[t],s=Math.ceil(e.length/a),x=C({tag:"button",className:"editor-page__tool",content:"◁"});r.chooserPage[t]===0?x.setAttribute("disabled",""):x.addEventListener("click",()=>{r.chooserPage[t]-=1,r.chooserPage[t]=Math.max(r.chooserPage[t],0);let p;t==="kerning"?p=document.querySelector(".kern-group-chooser__list"):p=document.querySelector(".item-chooser__tile-grid"),p.innerHTML="",p.appendChild(n[t]())});const E=C({tag:"button",className:"editor-page__tool",content:"▷"});r.chooserPage[t]===s-1?E.setAttribute("disabled",""):E.addEventListener("click",()=>{r.chooserPage[t]+=1,r.chooserPage[t]=Math.min(r.chooserPage[t],s-1);let p;t==="kerning"?p=document.querySelector(".kern-group-chooser__list"):p=document.querySelector(".item-chooser__tile-grid"),p.innerHTML="",p.appendChild(n[t]())});const T=C({tag:"div",className:"item-chooser__page-control"});return ne(T,[x,C({content:`Page ${o+1} of ${s}`}),E]),T}function cI(t){let e=C({tag:"div",className:"panel__card",innerHTML:"<h3>Component instance</h3>"}),r=Ue("name"),n=Pt(t,"name","currentComponentInstance","input"),a=TI(t),o=II(t),s=Ue("flip vertical",`
		Flip top to bottom,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),x=On(t,"isFlippedNS","currentComponentInstance"),E=Ue("flip horizontal",`
		Flip left to right,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),T=On(t,"isFlippedEW","currentComponentInstance"),p=Ue("reverse winding",`
		Reverse all the windings,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),R=On(t,"reverseWinding","currentComponentInstance"),N=Ue("rotate"),g=Pt(t,"rotation","currentComponentInstance","input-number"),K=Ue("rotate first",dI());K.querySelector("info-bubble").setAttribute("bubble-width","540px");let Y=On(t,"rotateFirst","currentComponentInstance"),V=C({tag:"h3",innerHTML:"Component root"}),_=_1(t.link);return ne(e,[r,n,a,o,s,x,E,T,p,R,N,g]),t.rotation!==0&&ne(e,[K,Y]),ne(e,[Yr(),V,_]),ne(e,Yr()),ne(e,u2()),e}function TI(t){let e=Ue(`Δ x${Wa()}Δ y`,`
		The difference in x or y position,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),r=C({tag:"div",className:"doubleInput"}),n=Pt(t,"translateX","currentComponentInstance","input-number"),a=Pt(t,"translateY","currentComponentInstance","input-number");return r.appendChild(n),r.appendChild(ka()),r.appendChild(a),[e,r]}function II(t){let e=Ue(`Δ width${Wa()}Δ height`,`
		The difference in width or height,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),r=C({tag:"div",className:"doubleInput"}),n=Pt(t,"resizeWidth","currentComponentInstance","input-number"),a=Pt(t,"resizeHeight","currentComponentInstance","input-number");r.appendChild(n),r.appendChild(ka()),r.appendChild(a);let o=Ue("lock aspect ratio",`
		When either the width or height is adjusted,
		the overall size will be kept proportional.
		<br><br>
		Maintaining aspect ratio will override value
		locks if need be.
	`),s=On(t,"ratioLock","currentComponentInstance");return[e,r,o,s]}function dI(){return`
		<h1>Rotate First - Resize First</h1>
		<div style="width: 500px;">
		Component Instances are rotated around their center point.  But if they are resized, their center point changes.  When Component Instances are rendered, the Root Component is adjusted according to the delta values stored by the Component Instance.
		<br><br>
		This option changes how this Component Instance is rendered.  The default order is to resize, then rotate. When this option is selected to be true, the new order will be rotate, then resize. This order has an impact on the Component Instance's resulting shape.
		<br><br>
		<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAFXCAYAAABUXrzKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFkJJREFUeNrs3btz29aCwOGjTLoUyyb10m1SRC5uHapNE7mIW0ttdmdszexsK6m9jZRitxXdKoWdJq3ov8Da4t42vPUtrC2yLReHAMSH+ab4wMH3zdC2KFkPCAc/HBAEQwAAAAAAAAAAAAAAAAAAAAAA2JTbXsNC2L4vLQJqsoFpZX8eZre4oXnIbvfh5UFnysceZ+97b6HByt5k46ibjaO2RSHo8FSzhPPsdlKEfPz9Mewx3JfZhqdb3Bc/9ia7HViAsJabbDwFURd0WDfmx0WYZx36axSxP84+/uxxIwSIegWZhZBizE/GwlzOxD9kt24R8u+nztyjlwcHS37NqxAPM076v7e93oz/eTRy6D//3uNRhWZ2i/efZe+/90tlB+OoWYyRVcTx1Rp6+3ShqOdf87z4v83i3jgOfvEwmKBTz43Qx6FQvy82Jg8TPjZ+zNXEjdYyQc8fn7+b+H/H3zcr6IOP7RQ7H6+Kn+PZxO8fNjuW5q27y5od9Xxn9ipMP6p2aqY/2xcWAYkZPszezjYAL6bGML//lzU3eo3ia3bnfGS3H/rPb52hj3ldfFyM/EU/9vnPcuzXSsXlJ6LO/5hGf9yG8LzYMX5W7JSHIvbM4DF0UppRxLPYW0MBPV3g49edgcSYx6MC16E85D4t6POVZ+APb+BCGBx6hG26L3YqVxGPLp0MrcdHcx86iofUb3vPHk9Qze/rFue3HPfHR37U4H5orL0f+bz5Dvbk9wk6VMrwTPZywZiv/nzZ/BDhcTGj+G1K0A+X+IxvQ34SUZydd4oZeyg+P2xXfgSrs+LYaC0V8+GAz9vJiN/Xbe+7Yuz92J/ND5QPod0XO9lm6FBR3w39e5EN0Ys1Yt4sNh5xA3Q2I9yNx79ve8NHA34L+UMCD0Mbs3axoTovbvF9pwts5GAfLRfz6U5GYp6LR99a/XEXd4DjQ1T5TsTJ4/treN6JoJOSxsJ7+utvZMrH6l8UM4Z5Hz8e/FY/2re90Q3ey4Oz7L74uH5zbAMGmxd3VJ9mB7L7JDHPj6SVR6rORo4e3PbiDvldMY46YfDMlsu6PjNE0GH5jcxFEeTLqVebG7guZirdMHhM/McweMrcu5Cf+BPGdkbMytn2eh2D+I/sdrH253qKs9Hzx8PLh8U+H2vx7dteee7Ku+Lj7osTSmtJ0ElJd2TPfhN76fmM4XzhDUc+wx5/LC9uiP4nlCfUbep7heVifhLmnXuyve9nOObtGWPtMoxeT+Kszr9GT1sjJR+G/v16Q1/jvPj7sH/BmPI2fLb84L5FZzBeyIJ9iPm+fD9xp/mPkD9MdTnn2SonY+PnVZ1/lS4sQ0obpkaxISgH+PMnn/nmJ7a1FvrYWRenyTdaHzf2fcJqMe+GVR/uiddPeJqYlzPzeReiaYbBRaTOip3t8ryWWl5VTtBJbQN1MTSLnn+Wbb4TcJJ9zPWaX7f1OEsfvVJc/H7aIycaDQ4nHob8+fLP/OLY8VhZ37KXS14n5qM71+/7F5C67cXH0q+KcV/LqysKOinO0stYllG/DONPEcs/9iQMLjXZnnshmtWC3psw8xme4b9wjWr2ZKzsOuifwvyHnzr9IwGDnZHReI9HXtAh2Q1VZ+jfh2Mbj7hBeL7yU3amB33a45PxqMHZAmfJwzbHyuXOzhKfd97JYAzHw+sfJ+4Qjx+GX/fIm6DD3myoYkyPF9xIvNjoIbr8cGLjMeaeX85+Rv2yzk/7EnTY741VnDnHM1/j382xGXncs39rloxx8hj13wQdAKoe9dueV/YDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAglK+9DCw2XhrFq7qxIV9YBLDSxim+1vrH4nXOgdkhv8j+9Uf/Fv8t7Bvh9dBhtZifFG/F11U/Ci8P7i0YGAt5CG+y2+vsNh7wOG5+yW7X2dh5sLAEHXYd8yDqsEDI/8yGyO9Zv//ZDeGn8xC+bgq7oMOexLzTzjdQ53chfNUQdZgV8t+v83+XWifCLuiwJzH/79P8/uahqCPki4Z8nLALOuxFzEuiTn3HRhwXV0uHfNwPb/Kwf9UQdkGHHcVc1KlvyM/jmr9WyIfFsRPD/sNrYRd02FHMRR0hXz3kwi7osFcxF3WE/GkJu6DDzmIu6gj5tsLezW6X2bhq+yUJOmwm5qKOkAu7oEMiMRd1hFzY9yro+bV366aTrRAdo1rM1465qCPkwr5HQe/VcHnEFeHC6BbzJyXqCLmw70XQf71Mfyl8+30I37QEXcyfPuaiThVCXq7/cXsfr7deRcI+8xfeK6Ke/u2ni17x84p53WJeruc/32x+PWse9sLNp3Jd++SlV9lJyG97fzyu9+W6/3Uzne35V418mz4Ya73iZz5J/dfr9dAxM9/kzHxYN5uQXx6VhzLjFOJO1NlqyEO4eZyVx/X+357l635VZ+WTxPH1azY3+/dn+RGHfLw1+z974mEXdMR8GzEXdXazrrdqE3JhF3TEfOtEne2E/K6/btUt5NPC/p/P82WQSzLsgo6Y74Kos/mQt2od8nHxZ4/LIC6LRMMu6Ii5qCPkwp5A2AUdMRd1hFzYPw97S9BBzEUdIa9+2O/6y7hCYRd0xFzUEXImh71VpbALOmIu6gg5CYRd0BFzUUfISSDsgo6YizpVCPnfO0Iu7IKOmIs6lQ55XBcujoRc2AUdMRd1Kh3yv3UsI2EXdMRc1BFy6hB2QUfMRZ3tr7fNYt0V8lTCHq8V//fOTsMu6Ii5qLP9kP/xuO4KeTpjNP4O4+9yR2EXdMRc1BFynkr8Xe4o7IKOmIs6Qs72w/7k41bQEXNRR8jZftg/9teRuK4IOmJ+Wt9lIepCTgphP+mvK08UdkFHzEUdISeBsAs6Yi7qCDkJhF3QEXNRR8hJIOyCjpiLOuuEvLywiJCz47ALOmIu6qwT8tFLf8LOwi7oiLmoI+QkEHZBR8xFnc/Xw0Z2uxJy9irscWzPCLugs1+zoRCOH9/+/RfLZJ2oD/bqY9RfWShLOXkMeenXSyFnt2H/fJsY19FzQWf/vDzIpkAh2w0N/allOL8LoWliuZKfb0L4y+O+UTtbtmcWylLr4nX2ZzYVD5eP62Ncpv+VTdhbJ5YP2xXXubjuxXVwoN1fR18enAo6+7ohvX+M+lcNUV815oPotIcHPEutiw/Z7WIk7F83hZ3dhDyue+MhzydBQdARdTFn+bBf9+8Tdjbp21YIf/24cMgFHVEXc5YP+1kR9raws5GQX9yNb+/mhlzQEXUxZ7X1slssX2Hn6UP+TWvpkAs6oi7mCDsJhFzQEXUxZ9Nhjxvrb1uWERsNuaAj6mLOpsMeN9ZxXRV2NhhyQUfUxRxhJ4GQCzqiLuYIOwmEXNARdTFH2Ekg5IKOqIs5ws7mQ97Jbs83GXJBR9TFHGFnsyE/yn7XR8W2auMEHVEXc4SdzYS8s81vR9ARdTFH2FlG3L7sUcgFHVEXc/Yz7EdFHIR935QXDIovnLJHIRd0RF3M2c/1uNOPg7DvX8hHL+m7NyEXdERdzBF2Egi5oCPqYk4KYR+8XjY1DbmgI+piTgphj9GJ646w1zbkgo6oizmphD2uO8Je25ALOqIu5gi7kCcQckFH1MUcYRfyBEIu6Ij6rqMu5gj7PoS8W/WQCzqivsuoiznCvg8hjy+Y8qzqIRd0RH1XURdzhH1fQt5O6ccVdER9m1EXc4RdyAUdKh51MWd/wt5NMuxxLP90kV9rvUYhLx1Mfc9tr1fDVf4y+4VfGPk1ctuLFc9qHhrhz4dsDci2dd0NvHSxmLN/635cIc+z26Dknax3v16G8M9u9UL+w5vs9jr/9yDkl6lHXNAFnW1GXcwRdiHfadBB1MUcYd/HsAu5oMNWoy7mpBD2OBZ+/yW7Xef/FnJBh1pFXcwRdiEXdKh41MUcYRdyQYeKR13MEXYhF3SoeNTFHGEXckGHikddzBH21cM+OeTxk2SfMFxn4+nBAhd02HzUxRxhXy3sQi7osDdRF3NYPuxCLuiwV1H/eyeEvxyLOXwe9qv+OJkU9hjyn86FXNBhj6I+IOYwOk7i+MjKHV6PhP3/HoZfBEbIBR32KupiDsuEXcgFHfYw6q+yDdKZhQELhz0IOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD77MAigBlue4f9v18e3FsY1HD9b2R/xjFwn42BBwtE0KHKG7RW9ue77HYk6tRknT/J/vwxux2PvScG/X12e5uNhc7Yxzez+y4svN36wiKAueIs5e5xtg5phvwwu33M/nUzIeblODgpxsK7/uw9j/mNhbcfvrQIYKmoLzdTz2f4reKtbnbrZP+/a3GydzGP63e+noeR9TWEf2S370J+6L1ZvO947O1Vvmb5ObrZmGgP3d8sdhwmGz8SkH/8cfG9t+s8vhxypy4brLuhsK4jHnacH/U85DdTNninIxsw2O3YiOvox6GYx3X7bOSw+vz1+nKpQ+75DsTH4q24k3s09L7Zs/6XBwdzdkRqO77M0GH5mfpVP+rTN1aNYiNTznLi447/G/LHJQ/7G6vbXnfiBhO272Ys5kdTT4CL6+xt75diDKz7NadpDo2dt3M+z1Wxk/28+PumuE/QIWGrntBWnuU7/HlezPwfcWN42zvt/9+XB9dD77nI7v+j2GC9CvnhTNjl7DzOuFtDAT2aeTZ7Pnu+WvNrXhVjqhNmHzV7u8Csv1UcHegWnzvubBz3f64a7jALOvXw8uBsjQ3e3UKzl9Gv1566kQrh/HFGNPr5j8bOHo4bvjfFzOOZpw2xAa+G/n25QMzXOwEuX9/fFDH/MCXo/7LEZ4wh/34s8OX9ZujA1Bn+0RNE9cfi7w9F+OMhzOtiIxcPxT8vZviHxX2hf0RAzNmMwwV2QkvNfvQnmz8bzh+KelfsoL4YWr+nf0/5DkDo/5/J562c9T9nfuTrofi/13U9MU7QYVsxzzdOh2HwfN7BzCifWRwWs/ezoZnQtcfa2ULQ569j6z/PvHys/kWx0zrv48+LWzl+uiE/We/90Pf0vv/MkxBeF5+71iecCjrpyWe359nAfrFHMT8sZieh2Ch1hzZK5WPuH/uzlvys4/zpPNNnRFClMXkS8qeWtUeCPFl5KL7cySjPY2kWs/EXY1HvBOej9LmwDCnGfPxpLKuLsV0/5o2h2Ul74gwiP5xYxru8qMepQ+1sWLlj2dzgmIyf+6r4WmcLjLmL/lPT4lPZ8ls8g/3Z0Pd67tcm6Ij5Lr+nwyLmp3OOBpQewupn5sOi7h+DvrkrIZY7s/FrxSNQF/3b4GS2ZnHfyYzId4d2eF2xcQqH3Ek15o2hE2qWn7U8xUk1o9/T7Mf2BrP4ctYUZzX5NeRhc34LgyNCceb7YgNfoxyHx2HyJWWbxdfuhNnPH3e0StCp6cy8vG8VcSZwsbWYj85iOsVG9Y/+hvC292bsuezwlOJj0VfFunfcnyUvclJZ3AFd/OGgaeeBfF/EPu7Avu3/Pfvzvho7qsAYl34l1aCv43KtM3pHv5/7YhY0SX7d6cHze/MrXuX3HYfBU3yeu/47Gxw/5bo2f/0fHEmKs+r1ThbND7vnM/Py0q+DS8vGHY0PxfrfKGI+fG5J2y/ODJ0UxRPK8qeuDEe93OtfRWfN7+h46Ps4DNMf8+sUT925GtqQdoufKT4d533xud6F/NKWsInxE9e1GMiT4p7z7O1Xxfgpx0Jcn38cW7fvNrRexp2FN2Hy89SvxdwMnfrN1Edf8GG730ecZbQW+Mj2UPAfPju0ns+Gyo3ae6/HzobX23LGvIj84jDrXCNhME7GX22tvH/4CnAfjAFBp75Rv99Z0KHa4+c8TD55rQx5PHJ05imVgg7b2yg9zYVloI5jqBk+f7io46qFwC42SA0LAQAAAAAAAAAAAAAAAAAAAAAAAABIQHw539vep+ISylSIa7kDMIh5/nrkUXzxlSOvcCboAFQ35kHUq+cLiwBAzB9j3s3afXkUwp/9V0eNL3J05/A7AFQh5re9Xv/214+98FWjl93bC83DXrj51Cve5zF1AKhczMubqANAxWMu6gCQSMxFHQASibmoA0AiMRd1AEgk5qIOAInEXNT3mivFAaQe88kXjVlPM2v4+V3Idg7iW64oJ+gAVC7moi7oACQSc1EXdAASibmoCzoAicRc1AUdgERiLuqCDkAiMRd1QQcgkZiLuqADkEjMRV3QAUgk5qIu6AAkEnNRF3QAEom5qAs6AInEXNQFHYBEYi7qgg5AIjEXdUEHEPNEYi7qgg4g5onEXNQFHUDME4m5qAs6gJgnRtQFHUDMRR1BBxBzURd0AMRc1KsS9NveXQ2Xx9ts5WlbLZbeCGWjMFxZEMYIYi7qu/PljPe1arg8PlglVtKo6foSjBHE/ImVP38e9bhtucuWj6ivGfRcXLCp+/5VlqMTa8NTqMP6UkfGiJiLegJB/1sn/aXwjcnlk6nD+lJHxoiYi/re+8IiABDzvY56vlzKqB9aMIIOIOaiLugAiLmoCzoAYi7qgg4g5qIu6oIOsHuDiy+9PRNzURd0gIqKF2nIK/4f7/IroiHqgg5QMfnzp/Oox8uaxudXi7qoCzqAqIu6qAs6gKiLuqADIOqiLugAiLqoCzqAqCPqgg4g6qIu6ACIuqgLOgCiLuqCDiDqiLqgA4i6qCccdUEHEHVRF3QARF3UBR0AURd1QQcQdURd0AFEXdSTibqgA4i6qCcQdUEHEHVRTyDqgg4g6qKeQNQFHUDURT2BqAs6gKiTQNQFHUDUSSDqgg4g6iQQdUEHEHUSiLqgA4g6CURd0AFEnQSiLugAok4CURd0AFEngagLOoCok0DUBR1A1Ekg6oIOIOokEHVBBxB1Eoi6oAOIOglEXdABRJ0Eoi7oAKJuuSQQdUEHEHVRTyDqgg4g6qKeQNQFHUDURT2BqAs6gKiLegJRF3QAURf1BKIu6ACIegJRF3QARH2TUc+VUW8IOgCiXjU/vB5+6yxbvg+CDoCoV8nPNyG0Tsq3TrPl2t7klxN0AES94jEXdABEPYGYCzoAop5AzAUdAFFPIObRl3M/4ttW+r+Er//VivhU6rC+1JExQoz6bS9G/S6LeqMf9fiUrPjULHYe88WCHn9psCjrC4i6mLd38W3MCnqnhr+WrhG7koeari/BGEHUax71PYk5AKwmXsb0tvcpu/XCzadeaB72snvrdfv5ptf/+fPbiZUCAFEXcwAQdTEHAFEXcwCoTdTFHABRF3MAEHUxBwBRF3MAqGvUxRwAKh51MQeAikddzAGg4lEXcwCoeNTFHAAqHnUxB4CKR13MAaDiURdzAKh41MUcACoedTEHgIpHXcwBoOJRF3MAqHjUxRwAKh51MQeAikddzAGg4lEXcwCoeNTFHAAqHnUxB4CKR13MAaDiURdzAKh41MUcACoedTEPB9YQACoV9RDuslsj/PkQwuVRCD+8DqH12PDT8PKgLegAUKWoj6ptzAUdgFSiXuuYA0C1o54/pn5iYQAAAAAAAAAAAAAAAAAAAAAAAACwf/5fgAEANYw/F5fXdHUAAAAASUVORK5CYII='/>
		<br><br>
		If a Component Instance is not resized, or not rotated, this option has no effect.
		</div>
	`}function uI(t){let e=C({tag:"div",className:"panel__card",innerHTML:`<h3>${t.displayType} ${t.ident}</h3>`}),r=Ue("advance width"),n=C({tag:"div",className:"doubleInput"}),a=Pt(t,"advanceWidth","currentItem","input-number"),o=C({tag:"button",className:"panel-card__action-button",title:`Auto-fit advance width
The advance width will be set to the x-max of the paths in this glyph.`,innerHTML:dn({name:"command_autoFit"}),onClick:()=>{let p=z();p.selectedItem.advanceWidth=p.selectedItem.maxes.xMax,p.publish("currentItem",p.selectedItem)}});ne(n,[a,C(),o]);let s=C({tag:"label",className:"info",innerHTML:`
			<span>bearings: left${Wa()}right</span>
			<info-bubble>
				<h1>Side Bearings</h1>
				Side bearings are the blank space to the left and right
				of shapes in a glyph. The open space between
				characters is very important for legibility.
				<br><br>
				These are calculated values based on shape positions and the
				Advance Width. They are not properties that are saved with the
				glyph, but it's helpful to think about them as if they were.
				<br>
				<h2>Left side bearing</h2>
				Distance from x=0 to the leftmost side of shapes in the glyph.
				Editing this will move all the shapes in the glyph, and update
				the Advance Width.
				<br>
				<h2>Right side bearing</h2>
				Distance from the rightmost side of shapes in the glyph to the
				Advance Width.
			</info-bubble>
		`}),x=C({tag:"div",className:"doubleInput"}),E=Pt(t,"leftSideBearing","currentItem","input-number"),T=Pt(t,"rightSideBearing","currentItem","input-number");if(x.appendChild(E),x.appendChild(ka()),x.appendChild(T),t.displayType!=="Component"?(ne(e,[r,n]),t.shapes.length&&ne(e,[s,x])):ne(e,[Ue("name"),Pt(t,"name","currentItem","input")]),t.shapes.length){const p=!!z().multiSelect.shapes.length;ne(e,Yr()),ne(e,C({tag:"h4",content:p?"Overall paths":"Bulk-edit paths"})),ne(e,Ya(t,"",[],p)),ne(e,Io(t,p))}return ne(e,Yr()),ne(e,I2()),ne(e,d2()),e}function pI(t){if(!t.usedIn.length)return"";let e=C({tag:"div",className:"panel__card full-width item-links__rows-area",innerHTML:`
		<h3>Links</h3>
		This ${t.displayType} is linked to the following items.
		It is used as a component root and will show up in these items as a component instance.
		`});return t.usedIn.forEach(r=>{e.appendChild(_1(r))}),z().subscribe({topic:"currentItem",subscriberID:"ItemLinkRow",callback:()=>{const r=z(),n=xe();document.querySelectorAll(".item-link__thumbnail").forEach(o=>{const s=o.getAttribute("target-item-id"),x=r.project.getItem(s);o.innerHTML=n.makeItemThumbnail(x)})}}),e}function SI(t){const e=xe(),r=z();let n=C({tag:"div",className:"panel__card no-card",style:"grid-template-columns: max-content 1fr max-content;"}),a=QA(t,-1),o=r.project.getItemName(a.id,!0),s=C({tag:"fancy-button",className:"thumbnail-button button-left",attributes:{minimal:""},title:`Navigate to:
${o}
${a.id}`});s.innerHTML=e.makeItemThumbnail(a,24)+"<span>Previous&nbsp;item</span>",s.addEventListener("click",()=>{r.selectedItemID=a.id,r.history.addState(`Navigated to ${o}`)});let x=QA(t,1),E=r.project.getItemName(x.id,!0),T=C({tag:"fancy-button",className:"thumbnail-button button-right",attributes:{minimal:""},title:`Navigate to:
${E}
${x.id}`});return T.innerHTML="<span>Next&nbsp;item</span>"+e.makeItemThumbnail(x,24),T.addEventListener("click",()=>{r.selectedItemID=x.id,r.history.addState(`Navigated to ${E}`)}),ne(n,[s,se("<span></span>"),T]),n}function QA(t,e){const r=xe(),n=t.id;let a;t.id.startsWith("glyph-")?a=r.glyphs:t.id.startsWith("liga-")?a=r.ligatures:t.id.startsWith("comp-")?a=r.components:t.id.startsWith("kern-")&&(a=r.kerning);let o=Object.keys(a);o.sort(),t.id.startsWith("glyph-")&&(o=o.filter(CI));const s=o.indexOf(n),x=o.at((s+e)%o.length);return r.getItem(x)}function CI(t){const e=xe();let r=!1,n=e.settings.project.characterRanges.filter(a=>a.enabled);for(let a=0;a<n.length;a++)if(n[a].getMemberIDs().indexOf(t.substring(6))>-1){r=!0;break}return r}function gI(t){let e=C({tag:"div",className:"panel__card",innerHTML:`<h3>Path ${t.ident}</h3>`}),r=Ue("path name"),n=Pt(t,"name","currentPath","input"),a=C({tag:"label",className:"info",innerHTML:`
			<span>winding</span>
			<info-bubble>
				<h1>Winding</h1>
				Ordered Path Points that make up a path outline have either a clockwise or counter-clockwise direction.
				This path direction is also known as a path&rsquo;s &ldquo;winding&rdquo;.
				Paths with the same winding will visually combine, opposite windings will cut-out.
				<br><br>
				For example, to create the glyph &lsquo;o&rsquo;, draw two overlapping oval paths.
				If the outside oval has a clockwise winding, select the inside oval and change it&rsquo;s winding to counter-clockwise.
				This will result in the inside oval appearing transparent (or cutting out) in relation to the outside oval.
				<br><br>
				<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr; width: 350px;">
					<span>Same Winding</span>
					<span>Different Winding</span>
					<img
						alt="Paths with the same winding will visually combine"
						class="winding-help-image"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAABkCAYAAACcuzIHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACutJREFUeNrsXS1YI0kQ7SAXcWNYy+hdQQw60ZzYmMWCvhNwYjVg17CI08laTsCJW0vQKwji1jLYQ5ATnM3N6+qamYQkkGRmuqd66vuGQPib6nr1qrqmu1qpWmopWRqVudPzURh/xNWMr8C8u2ney0oUX/eZz+nabUQV0DHI6NfMfKc18ZPD+LrNfN3XH3cb/Rp0qwGsHV9bZvDbyfee4vG+H6SfR7fjv/s+Y5/N+FfXAzVhHPzytX61DcTzUdvo1ppwJqV+ZPATxbf89G/69Ubsa2+Nr72JfyVsTjod69iPdRzUoJttAIzcXnx1EvbCwP99TYP+ENHrMgKj6GuLXt8lGB4YIH4txTjkTB0Dsk4CKH3dkjNpgA0X/9sbIQERurGeGyGz4qUB4WWs59Bv0JERDhKgAVjf4/H5/mcMtoIjxfvYONsf4qvDxok0+JTq5c6A56P9+OMHrScABR1/XNPrU4EYgF7QD+y/3eF3e8bJ+n6BjsIKgY2B1v+6PJOtKmCFdkyyrX0Ox2CGs5UMQw61b/QMEh3xakOgF4C3c8DhGI51YoP9GhbAdqTzGITOv87sGWGWtPcJgBSC+9owi4CPwHakAQcW+xbr2O9ReuCKgAE/HpGuFH7jm1RfXAi9+YLtfHQVXyN1fDWKQ9softftC/eIe8U90703X5x5no+O9c//fjeKDeq+juvBSH08HqnuI3R8NGlA5cEGQ3QrBbZp4Pt8w+A7NWWN5zkbjAbjwYhV0xHg+6XLOt6YiFRJwHUSQ1TB61+6dg6zjNBJQikzOIwG41VZx7CZZffpDuYwu13oG/90UX1DTDICdCKjXGgAIpRWkcFf52B3L6YVTtTacKO44e2OLENkgcdsAD2lAY6vjTDLeoeuAo7yGuQ/uGGpgIN+ABvYgD+X6mC49k8ZeF3XAHec5DVSBx/5DgCGcIrPJxNwCXnrrAu6Ubi9cSPP49kpPF864MBs03JUZgO8Sh8D68BjwEn2ch5s5DfzJkUYAx/YnspHloDnE+BeCyQfgMd5benA843hFs1/pKcbAB5y29KAR7NU2YDDoM7L4V5T5/LFKVEcL+EZquyEmcMHPHmVwjbPanmmKxt43aIAF+o6HCryUgeRwYKBzAMsCM34W5KeysxKJwpZLID4var3V2UA8yr2cpheNC+sZgH5Md9HZlz8lRwq8BQFAMk7dcBjMukTC1w8o83xeWo1l+wsGgqLYnJesyb18eB4fnecT1gFiiUDjmebRT68B6Clh1k4F+V3zVUAdyg+rHLeVfSMnMOs5DJKGmavlgVcoJNDyeURToLLmmFiZix9MsbOxQtdF548SJ/uI8cqM8nnyYr0/JhqlHfLsZwPgwPmKTvv8cWZF6rd+cRyZedYnEPWbFezXOl5pK3/7QDbrU2BHRLAQH37osQK73bHZm8bgv+LDc/tfbljzJ0bqD/Ni6A70DvSn4ZyBwSAA/Cue3YN0t5TouWbduq26XowA3RU1GuaH5Yr6Odh27HQ1wStKzZCueOMJkjUTuNgHtPtrdSSqwoCI6OBDDpD2RTu2LTdke3gFGI780DXca6hTRGhldt12RaEd+khFoyONnCZR2NrE6E1ND8kV2BkVxwLDR/T5oUyhRtaZiYUWaZriw+t64EboXUyxKJBo/wQ254Gug+Fd7+0Ldz29YdDeuJe0BFUsoDRMUE1m3iyoGvqlqSSBW1Ql+3pW3SIlc90CdutZfK5QHRo1els0y2Wg6C5NXI6yXkd53bmmIK1hOXSb8gOr5NHAFhnOuMEb70AXSsLutA5BshbmElcdCzc0zvhkwly9jALupb6J5Kt9FuHQYeqAQ4kkSx04Ew4PpF4uJetNE7PeYjcZQHp4ZVJLZ4/rCWzCun5HGp0roIO8iaQPf7p2Acp0/03VLVYEuTT0ssmqQRr3hiWa3S12HUupeLwymudnjxguuxJgrVYkzWeUdQsUEuZoKullhp0tcgHHcVV6ctranEIdKKOW3xB1n+qLW5TTC3Sn/DqwxIi14XGf8CgG4pfWuOy6NUv3lQPhgy6gXjQ4THMpsNMJ/2JUIqvYYbpNuWDbt3R55s+PC3hBQ27jSS83nqzysHFWTpYQPrTElovGGUnEgPxiwjBdHjU52IagXsSv4h2k3A2Brp0diFXsJAw3HIstBpn92F/CiJqArrdRqTzOulsh7KJazrifpiFpQrvN1aqn2U6euN9SzboeN2aSxMKMK8v+40nwivkWj7TGeO61LQG9+LDfmMAzjz9yoLuMkODcgUbf9+13AEc35NkIT2TXh4p6Civi8R3EUJe5wrToZ2Eax0HiphAUMXg8jnomO186JfG7V9dYAAfumSBzHYbg1mgO9OolAw8zBQxobDN6Og3DPD7EVrHPGscdBRiB+K7CIFdMBg2C8XcJ8/lbZF5AI7GuDcbdMx28ELJCwC437Ct7uYYW1QKpIfWnw8oZSMymwO63QZQORTdbh6CZt5oeG2jZvfxKNvyXu4Egkpwr+ya7sOJOdDNxok5tk7qcejEnFkrh7/ERhmqnUO5nojwijC7d1ou2zHL9XuyWY4i5cliv8hsJ/k05rJPJfSF5XCY8pyj1eftkQDbRdozJZdPysztfu3KZzmsmqFc7rfl/gAOEyv6mHEXcjscDvfpotj/s90ZeTOWS59snQLvSvyJfUUDoixg276QpuAEzYmzwJYBXejFseoARFFHnZd5ZLutK2zyUZs5zT7xh3wIDQBG3mzELIrXOqwuDLwL8d7KANk5zHd2jJqV/JpcDmH1OegCXez7fCN7ABEKATyEi1W9H2OFS7KjwkEprBa0SgSHnADR0j0XdaZVa5QYI/yNVcFbhciAmm6hwmWUsgqqtnKUVViKwo3sHBjOBKc6H3XLKQAy8CRX1jkfWxR4VDaQPTYp4G74kLmygHfqzeC+FngYixpwhQOvm+tsr8rA45BaA64U4FENT/LkIgu8aRMDHwCH/NQJwE3meCisSi0PIMcD6DDwPEGArjzTlQy4tCzSdQNwKfDaupwyiw2kzGrhWDx7RxVeclkE+jKLI4d3Uug57Y02hOQ8jx750CV1vSEcCQRCTxoqsD2QZ7YIPZKMAl1ogeLI6HinHUzac1Uu+1D+FqrKCIXbu1JX5hYZZsYN0cw8GuyKcTDkqimLH6tKChnlWCsBZaqYbOOeyRCPMw3BDgY98ey2apMpOAvnqlgpUil2m5/rdSsFvhRsPGsLX6HnoQYns7vr4APY0onCXVm5W6P0kKsUduB29F6BP05o76crDWSwT6K1T5uE053pJ5ObhV9kd6UOjZ6B3g+BfRguddrEznt0GKCWD5HRsVfWv29YYz6ljjT4noaBBt73P+1tPsbgo5UGbZuDB1wuDLbp4OsYPUMNOuzov+7ZcTI4EfQD2Mih+go9RkoEm13QPTcMWKGpjQHgoUlgkQyIQde7lloEONoJRkagNgjDnPUEw+8ZXYMEgGjkUyQDQkc4U9pTJDIOdbaSQ1UadM/ZD0ZB9562fg8hGN0zH+7JQGjLv2jDGQw2jivAtji0Wk37pSljgGs1pd9GgXpmdQy1Y6EBN/rmAYA4xGTRdrDczBJ6sY7jLVeZ1ZyI8e6Abjo74NrSLMiHIUPYUPNk81lv4cgY4FYbYbfRd8TRoGPL6Nce+z6DcJ5DjTc6GhodB8aZ+i4eOOgu6KYbqanDExnopdlkZK6hKx6+ABBDo+drevH2E0aryImW/wswAEGrvdgr+YXFAAAAAElFTkSuQmCC"
					>
					<img
						alt="Paths with different windings will appear transparent where they overlap"
						class="winding-help-image"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABkCAYAAAB3jIkEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAChtJREFUeNrsXS1020gQ3hQ2oCYpjXADahIc4R6IyZXauCQh5T56xFdw2DH1ATvgjtrGAXZAS63QBtgFCdXp21lZ8k8cO5G0q9md97bKe/3bmf3mm5ldaVYIJ040yIHxM+yGlejXqhrH6inUs7Llb86jMVE/43mnnhPx+WBuoJ6xjl40PirdPDW2yUTpGqzoGDjg7Q+0WjTOouFLwweRLTHu7+j5GNn5Z2TX+y22PYrW63003kb/nBet59ExPT2JW/zFYTRG0ehrAWI39JV+pOe90uf7SCx+fpiTvtvkxKfncaTXe6Ujfj6szFM6DiMdJw5464vgKbDVpdf/GNICyOcw+/8Pi/UhGidn9CSW6CgQBjnqCR3Ppa73QUXc9BM9HzLGPhxP6hnpeFoDEAOpH/Q0AIQHmgEXg60mF+HmWsjnQ4EEdFihhTk9p2eyOP0MneoiGg0Jtn+/kY73BUdCMKFfJx2PvEA52l9Gph25hdJueBmNqfh7GopPl2G0+GH0O/oH5oH5YF6YXzdsqND/slDaDXvRCMWXdhgtvBk6YpzWQvG1F8q5dcO2cg7WoGtGYyaag1D4DXMW4qnFwTwxXzjKfoAbiPYsFL83zXGqTePII6dgC0CEVDDIn+MwyjvMBtzqwHwJgFOVGjwdUrF4ZQDcdgC2XszyBgHOW3i/6Qz33MD8KQQP1pghZnIsXpkAtwmACcs3ygq6S6lAo1XuxVjNAaFPHH6x99YNx5LJTcrhskgzQBbkZJWyAK4iJwx2KFtY3Sf8UlgiIHLUEU5GBchsa4phzO47JooJc2G5TQtC+dBUVq1gBk5stynFIPZrmQq6hmQAbEdwXQTkQAir6RAU6132HHbbgGOt6m0I6FrSK7iG1tj45PntJ5ke1SxX/cH0VHiMzQBfvIXAOdwkoGs8m2YgDHO1A0aSZlT1gg4UjBBkM+iWC6uxJeCb6QFfDDquRcS+oLMXfF6RoGvKBXFMtw18vHO+BHwF5XxYCO45HVicTimar95a4lztpsFXwD4d7+oVg7YO2hnYy5f24u6kWdlra/jgvE+HQUdi2YUPHK2BPTnnwki5XpqW7GDAgTyR4Aw6nFHmkTDjhIO77egYMeNK1wavhW7ktbWcosWUfbRAMZVZvkevNs3Y53V0IN7LMT/22e8EJPlxM5sQy/UNjPUwke+2AI4WcezE2ZYopOjNHe81hqpJL+UcYjFo66Qh8pa4QEMuyb9AG7zGUFP2+1CUlwxEUQKAA+icbZrky74zUOYGehX4xuwdGoUUiOtFbMe9oCia7dKFBnenflEK49iuCPAN2LMe9NuL9WzI7SgUDIQuscG5MXZ2blSy9oQBvR+x2JPOrO2PvtlgjroYdgRrifuHZNUf5eXSEZ8ueNt6eIVfa6v7em/W9pnwh+gPMwbeOS26frlSnZz42hrNiW76BL4tjFfT0slIB+Nh0XULtUTrq/kwZr0ORdItwDuXrcK4g+6wYlLHzGvFwHyFWs9V0+H2zVqYvekzB54xYTaWPvtwC0HzyVS4TTOeL9uePjDv00dhbWjMfKgx4kR1JmXMetcUUTcA74x9mPVUb2DD+gHLcIu2uJyFWgr7mxnvx5A/8Exiu1T6zZ7x4obiajM5Dbzqsx3Gyy4fJKvcGjiziXIKG1ivmgAPKIzb23OW956ZjBfneSfcWQ/XcMg7PBaM57FnO8l4PrGLmRLIKwL4V7beCvBueStNizo3uL3+LXvg4VIcVWDEwPvI/rSCwqzJtB4I7yP/AmOlqq2wB95b4zdoA/abyFLLiawpEuBxF6oaR845NMvjfInxqrncGeZkn8p2aMWWykqodeKkGKEtO88Bz0nBOd6tA54TF2qdOOA5cZKj0F5lkADPhj0kk6X0NybuKISzBfAmNpXyhkqV/WtpG0It/+vB6SWIM4dvzaLOoxPgHTNnvEfjfctj/1paDLzPB8MYeLfsczxiPN9o4NnxhtAS4wXs3/mP2cTcJN6WN4SGy8Dj/i4YhJJ3U3MKCz498AlrC+DhgBrAc+FWjxAL838LnPbwbtOMRxTI/UsnyqFMfNvSt2IrJfWVXxp4E9u+7TRIztizHSLqkbf4pjkNvJEl33ZW9F7y+wTjfR/xtv1KB4cEeOgVByrkXmQQ69UNyu88WVhw71lD0XS0DjwS/i2zqE2HSdTOv1ESilbCVf8p4F0Lv84ceIuWWaaE27oVreFQQ6Raw60zng3hlhhGv4fZEmaJzJZawy0Djz52vhK/Me/L+983/NowYCYN2faX8xktSIyK1qungUfSEWcN3sDD1gVVt7oVvRAj5o3OicSuVjs4rAMPpxho1eozB98/f+gNtwB9MKmw/qwURQWRWGd3o7jLP/IGnrug0BlGA9u5K7uccTTc3uic+hkDjeU/4C56yxJ0l/L6dOfQW43kW3FDN4AAQOQPOrqhm/v9ZV/aG+8v29dYPfG1x9tQAAIAsXLfVg7A68lFcbbcw0tPa7wN1mjlW2jgpkju0QO60a2Yl85o2oxmofNSiB1kbby2aA5sCRPVjG03YB9iqUjLIV0hrx3LkMR/G2Ca2ddo3bApixfO0cKrxlVsLa88pSpRzX0PCsVUFiEDe6FYECwM5xSFdgVaeW8J1CwyZvvVTso5r0vs1BOFiC2eTOGj6SLD1mJiXOxH8lgQ7uBLcpeGA50JoEtXuvaA73Jn0HGvYLWCzk7ma1vNdEg/qPAam9GDBqGoG4asjX7kJQXHqtFJf/6gI/3HZjU+QrUL43Pe54PxsYlOxveWGJ/zwf8ujK8ZfFW5KFgcMATvc92Z3OsDC3BOMz5dhjKaFfH2TgYnHFR0cN3Dgl7EAJRoczyVAHEQu08NbPmxQ+hFMsqF/aAHJdczpV9Fsh5eLuDkZGA5cqxWObvRp9kPZ6BlZgbMP85z1osLcrKypxjIU6mAmGr7CCpjAPoLZihb5Yf50utSg62LQU7WWoTfMgEwCauzF53UlACADelNMQBNZUDMKwHcdM+TC0+xovkABMOlAcf+khcC4ECGLlSIplSFAAnmQyF18KpOAwkAKQSbkgPGTkUhVRvgDrRvv6CNA1p14av6YYca6hTZ/Ry9PdDNCI1lvCraLKCDzre4c2UmeS71abkQD3NP6ofuUEU26onbhJ2eJ52bSMcrXUt/YBQLChFZRviyrwlaO/wYUSPFLIEIoKEjFhoFYhHQHpXANsp9IcjR6tLRAEL0PUYnUDyzbkV74lOzHOhJTXPwH3Skrql2YQ54q8UINU88k090U7qb0OI8/BJLjao39R45SdUAMPrhOwIbbi+izvZDQd0ph7JXjB4dvSUd0fUdev2MMHF/F7fNpT/7M1h3Pq+adOmP9UJX9dixCGgTpWd/tWmOA97uTIGFwvOdSO6qqIjN91bA4PPUz7/UM8gshOax9US6VJVe6U7om6rpudIp/vlW0B0SgTZn2kP+F2AAw6cPzxGbmzkAAAAASUVORK5CYII="
					>
				</div>
			</info-bubble>
		`}),o=C({tag:"option-toggle",innerHTML:"<option>Clockwise</option><option>Counter-clockwise</option>",attributes:{"selected-name":g0(t.winding),"selected-value":g0(t.winding)},onClick:()=>{const E=z();t.reverseWinding(),E.history.addState(`Toggled path winding to ${g0(t.winding)}`),E.publish("currentPath",t)}}),s=Ya(t),x=Io(t);return ne(e,[r,n,a,o,s,x]),ne(e,Yr()),ne(e,sx()),e}function g0(t){let e="Unknown";return t>0&&(e="Counter-clockwise"),t<0&&(e="Clockwise"),e}function RI(t){let e=C({tag:"div",className:"panel__card",innerHTML:`<h3>${t.shapes.length} selected paths</h3>`});return ne(e,Ya(t)),ne(e,Io(t)),ne(e,sx()),e}function yI(t){const e=z();let r=C({tag:"div",className:"panel__card",innerHTML:`<h3>Path point ${t.pointNumber+1} ${t.ident}</h3>`}),n=Ya(t.p,"point"),a=Ue("point type"),o=C();ne(o,[R0("symmetric",t.type==="symmetric",()=>{t.type="symmetric",t.makeSymmetric(),e.publish("currentPathPoint",t)}),R0("flat",t.type==="flat",()=>{t.type="flat",t.makeFlat(),e.publish("currentPathPoint",t)}),R0("corner",t.type==="corner",()=>{t.type="corner",e.publish("currentPathPoint",t)})]),e.subscribe({topic:"currentPathPoint",subscriberID:"pointTypeButtons",callback:E=>{document.getElementById(`pointTypeButton-${E.type}`)&&(document.getElementById("pointTypeButton-symmetric").removeAttribute("selected"),document.getElementById("pointTypeButton-flat").removeAttribute("selected"),document.getElementById("pointTypeButton-corner").removeAttribute("selected"),document.getElementById(`pointTypeButton-${E.type}`).setAttribute("selected","")),Gi("h1",E),Gi("h2",E)}});let s=C({id:"h1Group",className:"span-all-columns"});ne(s,qA("h1",t));let x=C({id:"h2Group",className:"span-all-columns"});return ne(x,qA("h2",t)),ne(r,n),ne(r,[a,o]),ne(r,[s,x]),ne(r,Yr()),ne(r,lx()),r}function qA(t="h1",e){let r=C({className:"pre-checkbox"}),n=On(e[t],"use","currentPathPoint");e.type!=="corner"&&n.setAttribute("disabled",""),ne(r,[n,C({tag:"h4",content:`Use handle ${t.charAt(1)}`})]);let a=C({id:`${t}InputGroup`,style:`display: ${e[t].use?"grid":"none"}`}),o=Ya(e[t],t);return ne(a,o),z().subscribe({topic:"currentPathPoint",subscriberID:`controlPointInputGroup.${t}`,callback:s=>{s.type==="symmetric"&&s.makeSymmetric(t),s.type==="flat"&&s.makeFlat(t),Gi("h1",s),Gi("h2",s)}}),[r,a]}function Gi(t="h1",e){let r=e;e.objType==="ControlPoint"&&(r=e.parent);let n=document.getElementById(`${t}Group`);if(n){let a=r[t].use,o=n.querySelector("input");if(o.removeAttribute("checked"),o.removeAttribute("disabled"),a){o.setAttribute("checked",""),r.type!=="corner"&&o.setAttribute("disabled","");let s=document.getElementById(`${t}InputGroup`);s.style.display="grid",s.querySelectorAll("input-number")[0].setAttribute("value",r[t].x),s.querySelectorAll("input-number")[1].setAttribute("value",r[t].y)}}}function mI(t){let e=C({tag:"div",className:"panel__card",innerHTML:`<h3>${t.pathPoints.length} selected path points</h3>`});return ne(e,lx()),e}function R0(t,e,r){let n=st.gray.l40,a=C({tag:"button",className:"pointTypeButton",id:`pointTypeButton-${t}`,attributes:{title:`point type: ${t}`}});a.addEventListener("click",r),e&&a.setAttribute("selected","");let o=`
	<svg version="1.1"
		xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0" y="0" width="20" height="20" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
		<g fill="${n}">
		<rect x="8" y="8" width="1" height="4"/>
		<rect x="11" y="8" width="1" height="4"/>
		<rect x="8" y="8" width="4" height="1"/>
		<rect x="8" y="11" width="4" height="1"/>
		<rect x="4" y="4" width="1" height="1"/>
		<rect x="5" y="5" width="1" height="1"/>
		<rect x="6" y="6" width="1" height="1"/>
		<rect x="7" y="7" width="1" height="1"/>
		<circle cx="3" cy="3" r="1.5"/>
	`;switch(t){case"corner":o+=`
			<rect x="7" y="12" width="1" height="1"/>
			<rect x="6" y="13" width="1" height="1"/>
			<rect x="5" y="14" width="1" height="1"/>
			<rect x="4" y="15" width="1" height="1"/>
			<circle cx="3" cy="17" r="1.5"/>
			`;break;case"symmetric":o+=`
			<rect x="12" y="12" width="1" height="1"/>
			<rect x="13" y="13" width="1" height="1"/>
			<rect x="14" y="14" width="1" height="1"/>
			<rect x="15" y="15" width="1" height="1"/>
			<circle cx="17" cy="17" r="1.5"/>
			`;break;case"flat":o+=`
			<rect x="12" y="12" width="1" height="1"/>
			<rect x="13" y="13" width="1" height="1"/>
			<circle cx="15" cy="15" r="1.5"/>
			`;break}return o+="</g></svg>",a.innerHTML=o,a}function NI(){const t=z();let e=[],r=t.multiSelect.points;if(r.length===1)e.push(yI(r.singleton));else if(r.length>1){let o=r.virtualShape;e.push(mI(o))}let n=t.multiSelect.shapes;n.length===1?n.singleton.objType==="ComponentInstance"?e.push(cI(n.singleton)):e.push(gI(n.singleton)):n.length>1&&r.length===0&&e.push(RI(n.virtualGlyph)),e.push(uI(t.selectedItem)),e.push(SI(t.selectedItem));const a=pI(t.selectedItem);return a&&e.push(a),t.subscribe({topic:"whichShapeIsSelected",subscriberID:"attributesPanel",callback:()=>{ur()}}),t.subscribe({topic:"whichPathPointIsSelected",subscriberID:"attributesPanel",callback:()=>{ur()}}),e}function DI(t){let e=C({tag:"div",className:"panel__card",innerHTML:"<h3>Kern Group</h3>"}),r=Ue("Value"),n=Pt(t,"value","currentKernGroup","input-number"),a=Ue("Left group"),o=na(t.leftGroup),s=Ue("Right group"),x=na(t.rightGroup);return ne(e,[r,n,a,o,s,x]),ne(e,Yr()),ne(e,p2()),e}function fI(){let t=C({tag:"div",className:"panel__card",innerHTML:"<h3>Other kern group actions</h3>"}),e=C({tag:"div",className:"panel__actions-area"});return qt(e,nr("otherKernGroupActions")),t.appendChild(e),t}function OI(){const t=z();return vt(t.project.kerning)<=0?[]:[DI(t.selectedKernGroup),fI()]}function Pi(t=50,e=!1,r=0,n=100,a=1){let o=C({className:"fancy-slider__wrapper"}),s=C({className:"fancy-slider__slider-readout",innerHTML:t}),x=C({tag:"input",attributes:{type:"range",value:t,style:`accent-color: hsl(${t+200}, 100%, 40%);`,min:r,max:n,step:a},className:"fancy-slider__bar"});return x.addEventListener("input",E=>{const T=parseInt(E.target.value);s.innerHTML=T,x.setAttribute("style",`accent-color: hsl(${T+200}, 100%, 40%);`),e&&e(T)}),ne(o,[x,s]),o}function BI(){const t=z(),e=xe();let r=C({tag:"div",className:"panel__card",innerHTML:"<h3>Characters</h3>"}),n=C({tag:"p",className:"spanAll",content:`Context characters are a small set of letters that are shown around
		the character you are currently editing.`});const a=e.settings.app.contextCharacters;let o=Ue("Show&nbsp;context&nbsp;characters&nbsp;&nbsp;"),s=rr(a,"showCharacters",()=>{z().autoFitView(),$A()}),x=Pt(t.selectedItem,"contextCharacters","editCanvasView","input",["input"]);x.addEventListener("input",()=>z().autoFitView());let E=Ue("Transparency"),T=Pi(a.characterTransparency,Y=>{a.characterTransparency=Y,z().editCanvas.redraw()});x.classList.add("spanAll"),ne(r,[n,x,Yr(),o,s,E,T]);let p=C({tag:"div",className:"panel__card",innerHTML:`<h3>Guides and labels</h3>
	`}),R=Ue("Show guides and labels"),N=rr(a,"showGuides",$A),g=Ue("Transparency"),K=Pi(a.guidesTransparency,Y=>{a.guidesTransparency=Y,z().editCanvas.redraw()});return ne(p,[R,N,g,K]),[r,p,Ml(!0)]}function $A(){z().editCanvas.redraw()}class wo{constructor(e={}){this.objType="Guide",this.angle=e.angle===0?0:90,this.name=e.name,this.location=isNaN(parseInt(e.location))?200:parseInt(e.location),this.color=e.color||e1,this.visible=!!e.visible}save(){let e={},r=this.name;return r!=="Horizontal guide"&&r!=="Vertical guide"&&r!=="Guide"&&(e.name=this.name),this.angle!==90&&(e.angle=this.angle),this.location!==200&&(e.location=this.location),this.color!==e1&&(e.color=this.color),this.visible||(e.visible=this.visible),e}get name(){return this._name||(this.angle===90?this._name="Horizontal guide":this.angle===0?this._name="Vertical guide":this._name="Guide"),this._name}set name(e=!1){e||(this.angle===90?e="Horizontal guide":this.angle===0?e="Vertical guide":e="Guide"),this._name=e}}const e1="rgb(127, 0, 255)",eo="rgb(227, 190, 171)",to="rgb(212, 154, 125)",ga="rgb(191, 106, 64)";function tl({iconName:t="default",iconOptions:e=!1,title:r="",disabled:n=!1,onClick:a=!1,id:o=!1}={}){let s=C({tag:"button",innerHTML:Ve[t](e),attributes:{title:r}});return a&&s.addEventListener("click",a),n&&s.setAttribute("disabled","disabled"),o&&s.setAttribute("id",o),s}let Ve={};function ze(t,e="30"){return`
		<svg
			version="1.1" viewBox="0 0 ${e} ${e}"
			height="100%" width="100%"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			${t}
			`}let Le={darkFill:st.gray.l25,lightFill:st.gray.l85,blueOutline:st.blue.l70,greenOutline:st.green.l70,grayOutline:st.gray.l70,purpleOutline:st.purple.l40,redX:Zr.red};Ve.copy=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline,n=Le.darkFill;return t+=`
		<polygon fill="${n}" points="1,22 1,10.4 10.4,1 18,1 18,22"/>
		<path fill="${r}" d="M17,2v19H2V10.8L10.8,2H17 M19,0h-9L0,10v13h19V0L19,0z"/>
		<polygon fill="${n}" points="12,29 12,17.4 21.4,8 29,8 29,29"/>
		<path fill="${e}" d="M28,9v19H13V17.8L21.8,9H28 M30,7h-9L11,17v13h19V7L30,7z"/>
	`,ze(t)};Ve.paste=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
	`,ze(t)};Ve.clearClipboard=()=>{let t="",e=Le.blueOutline,r=Le.darkFill,n=Le.redX;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${n}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${n}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,ze(t)};Ve.pastePathsFromAnotherGlyph=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${e}" d="M17.4,20.6h-4.8l-1,3h1.6v1.7H8v-1.7h1.6l3.6-10.2h-1.6V12h6.8v1.5h-1.7l3.7,10.2H22v1.7h-5.2v-1.7h1.7L17.4,20.6z M16.9,19.1l-1.8-5.6H15l-1.8,5.6H16.9z"/>
	`,ze(t)};Ve.pastePathsFromAnotherProject=()=>{let t=Le.lightFill,e=Le.purpleOutline;const r=`
		<path fill="${t}" d="m11.5,1c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m11.5,23c-5.084,0-7.886,0-9.692-1.808-1.808-1.808-1.808-4.608-1.808-9.692S0,3.615,1.808,1.808C3.614,0,6.416,0,11.5,0s7.886,0,9.692,1.808c1.808,1.808,1.808,4.608,1.808,9.692s0,7.885-1.808,9.692c-1.807,1.808-4.608,1.808-9.692,1.808Zm0-21c-4.55,0-7.057,0-8.278,1.222s-1.222,3.729-1.222,8.278,0,7.057,1.222,8.278,3.728,1.222,8.278,1.222,7.057,0,8.278-1.222,1.222-3.729,1.222-8.278,0-7.057-1.222-8.278-3.728-1.222-8.278-1.222Z"/>
		<rect fill="${e}" x="5" y="5" width="3" height="3"/>
		<path fill="${t}" d="m18.5,8c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m28.192,8.808c-1.807-1.808-4.608-1.808-9.692-1.808-.176,0-.329,0-.5,0v-2.001h-3v2.033c-.735.022-1.389.068-2,.133v-2.166h-3v2.961c-.437.228-.841.495-1.192.847-.352.352-.618.756-.847,1.192h-2.961v3h2.166c-.065.611-.111,1.265-.133,2h-2.033v3h2.001c0,.171,0,.324,0,.5,0,5.084,0,7.885,1.808,9.692,1.807,1.808,4.608,1.808,9.692,1.808s7.886,0,9.692-1.808c1.808-1.808,1.808-4.608,1.808-9.692s0-7.885-1.808-9.692Zm-1.414,17.971c-1.222,1.222-3.728,1.222-8.278,1.222s-7.057,0-8.278-1.222-1.222-3.729-1.222-8.278,0-7.057,1.222-8.278,3.728-1.222,8.278-1.222,7.057,0,8.278,1.222,1.222,3.729,1.222,8.278,0,7.057-1.222,8.278Z"/>
		<path fill="${e}" d="m20.233,20h-3.467l-1.092,3h1.525v2h-5.2v-2h1.733l3.467-9h-1.733v-2h6.067v2h-1.733l3.467,9h1.733v2h-5.2v-2h1.517l-1.083-3Zm-.433-1l-1.3-4-1.3,4h2.6Z"/>
	`;return ze(r)};Ve.addPath=function(t=!1){let e="",r=Le.blueOutline,n=Le.darkFill;return t&&(r=Le.greenOutline,n=Le.lightFill),e+=`
		<rect fill="${n}" x="1" y="1"	width="16" height="16"/>
		<path fill="${r}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<rect x="21" y="15" fill="${r}" width="3" height="15"/>
		<rect x="15" y="21" fill="${r}" width="15" height="3"/>
	`,ze(e)};Ve.undo=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path fill="${r}" d="M20.1,23c4.6-5,6.6-9.6,5.5-12.8C24.9,8.2,22.9,7,20,7c-5.9,0-8.8,5.3-8.9,5.5L10.9,13l2.4,4.1l-12,0.8l4-14.4l2.5,4.2l0.9-1.1c0,0,4-4.6,11.2-4.6c4.1,0,7.9,2.8,8.8,6.5C29.4,10.8,29.3,16.3,20.1,23z"/>
		<path fill="${e}" d="M20,3c3.1,0,6.9,2,7.8,5.7c0.5,2.1-0.1,4.4-1.6,6.7c0.7-2,0.9-3.9,0.3-5.5C25.7,7.4,23.3,6,20,6c-6.5,0-9.6,5.8-9.8,6.1l-0.5,1l0.6,1l1.3,2.2l-8.9,0.6L5.7,6l0.6,1l1.4,2.4l1.8-2.2C9.6,7.2,13.2,3,20,3 M20,1C12.2,1,8,6,8,6L5,1L0,19l15-1l-3-5c0,0,2.6-5,8-5c7.7,0,7.2,9.2-8,21C39.8,15,29.5,1,20,1L20,1z"/>
	`,ze(t)};Ve.linkToGlyph=()=>{let t="",e=Le.greenOutline;return t+=`
		<path fill="${e}" d="M18,8.8L8.8,18c-0.5,0.5-1.3,0.5-1.8,0s-0.5-1.3,0-1.8L16.2,7c0.5-0.5,1.3-0.5,1.8,0S18.5,8.3,18,8.8z"/>
		<path fill="${e}" d="M7.5,21.2c-1.1,1.1-2.8,1.8-4.1,0.5s-0.6-3,0.5-4.1l5.9-5.9c-1.8-0.5-3.8,0.1-5.5,1.8L2,15.7c-2.4,2.4-2.6,5.7-0.5,7.8s5.4,2,7.8-0.5l2.3-2.3c1.7-1.7,2.3-3.7,1.8-5.5L7.5,21.2z"/>
		<path fill="${e}" d="M21.2,7.5c1.1-1.1,1.8-2.8,0.5-4.1s-3-0.6-4.1,0.5l-5.9,5.9c-0.5-1.8,0.1-3.8,1.8-5.5L15.7,2c2.4-2.4,5.7-2.6,7.8-0.5s2,5.4-0.5,7.8l-2.3,2.3c-1.7,1.7-3.7,2.3-5.5,1.8L21.2,7.5z"/>
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>
	`,ze(t)};Ve.round=()=>{let t=Le.redX,e=Le.darkFill,r=`
		<path fill="${t}" d="M17.4,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3C11.1,12.2,10,13,10,13S14.4,17.5,17.4,21.9z"/>
		<path fill="${t}" d="M12.2,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S14.9,16.7,12.2,21.6z"/>
		<path fill="${t}" d="M28,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3c-1.2-1-2.3-0.3-2.3-0.3S24.9,17.5,28,21.9z"/>
		<path fill="${t}" d="M22.7,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S25.5,16.7,22.7,21.6z"/>
		<path fill="${e}" d="M2,20V9H0V7h4v13h2v2H0v-2H2z"/>
		<path fill="${e}" d="M7,22v-2h2v2H7z"/>
	`;return ze(r)};Ve.flipVertical=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline,n=Le.darkFill;return t+=`
		<polygon fill="${n}" points="6.4,13 1,7.6 1,1 14.7,1 29,9.6 29,13"/>
		<path fill="${r}" d="M14.2,2L28,10.1V12H6.8L2,7.2V2h12 M15,0H0v8l6,6h24V9L15,0L15,0z"/>
		<polygon fill="${n}" points="1,29 1,22.4 6.4,17 29,17 29,20.4 14.7,29"/>
		<path fill="${e}" d="M28,18v1.9L14.4,28H2v-5.2L6.8,18H28 M30,16H6l-6,6v8h15l15-9V16L30,16z"/>
	`,ze(t)};Ve.flipHorizontal=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline,n=Le.darkFill;return t+=`
		<polygon fill="${n}" points="1,29 1,15.3 9.6,1 13,1 13,23.6 7.6,29"/>
		<path fill="${r}" d="M12,2v21.2L7.2,28H2V15.6L10.1,2H12 M14,0H9L0,15v15h8l6-6V0L14,0z"/>
		<polygon fill="${n}" points="22.4,29 17,23.6 17,1 20.4,1 29,15.3 29,29"/>
		<path fill="${e}" d="M19.9,2L28,15.6V28h-5.2L18,23.2V2H19.9 M21,0h-5v24l6,6h8V15L21,0L21,0z"/>
	`,ze(t)};Ve.exportGlyphSVG=()=>{let t=Le.blueOutline,r=`
		<polygon fill="${Le.darkFill}" points="3,8 3,30 27,30 27,0 11,0"/>
		<path fill="${t}" d="M9.2,19.9c-0.4,0.4-1,0.6-1.6,0.6c-0.7,0-1.3-0.2-1.8-0.7v0.6H4.9v-2.6h0.9v0.6c0.4,0.8,1,1.2,1.7,1.2 c0.4,0,0.7-0.1,0.9-0.3c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.1-0.6-0.3-0.7c-0.2-0.2-0.6-0.3-1.1-0.5c-0.6-0.2-1.1-0.3-1.4-0.5 c-0.3-0.2-0.6-0.4-0.7-0.7c-0.2-0.3-0.3-0.6-0.3-1c0-0.6,0.2-1.1,0.6-1.5C5.9,13.2,6.4,13,7,13c0.6,0,1.1,0.2,1.6,0.6v-0.5h0.9 v2.2H8.6v-0.5c-0.4-0.6-0.9-0.8-1.5-0.8c-0.4,0-0.7,0.1-0.9,0.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.2,0.1,0.4,0.2,0.5 c0.1,0.1,0.2,0.3,0.4,0.3c0.2,0.1,0.5,0.2,1,0.3c0.6,0.2,1.1,0.3,1.4,0.5c0.3,0.1,0.5,0.4,0.7,0.7c0.2,0.3,0.3,0.7,0.3,1.2 C9.9,19,9.7,19.5,9.2,19.9z"/>
		<path fill="${t}" d="M21.4,13c1,0,1.9,0.3,2.5,0.9v-0.8h0.9v2.4H24c-0.2-0.4-0.5-0.8-0.9-1.1c-0.4-0.3-0.9-0.5-1.5-0.5 c-0.8,0-1.4,0.3-1.9,0.8c-0.5,0.5-0.7,1.2-0.7,1.9c0,0.9,0.3,1.5,0.8,2.1c0.5,0.5,1.2,0.8,1.9,0.8c0.6,0,1.1-0.2,1.5-0.5 c0.5-0.3,0.7-0.7,0.8-1.3h-1.3v-0.9h2.6c0,0.1,0,0.2,0,0.3c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.5,0.9-2.6,0.9c-1.3,0-2.3-0.4-2.9-1.1 c-0.6-0.7-1-1.6-1-2.6c0-1.1,0.3-2,1-2.7C19.4,13.4,20.3,13,21.4,13z"/>
		<polygon fill="${t}" points="14.1,18.9 15.9,14 15,14 15,13.1 17.8,13.1 17.8,14 16.9,14 14.5,20.4 13.5,20.4 11.1,14 10.2,14 10.2,13.1 13.1,13.1 13.1,14 12.2,14"/>
	`;return ze(r)};Ve.deleteGlyph=()=>{let t=Le.redX,r=`
		<path fill="${Le.darkFill}" d="M20.2,18.5H10L7.8,25h3.5v3.6H0V25h3.5l7.8-21.8H7.8V0h14.6v3.2h-3.6l8,21.8H30v3.6H18.8V25h3.5L20.2,18.5zM19.2,15.2L15.4,3.2H15l-4,11.9H19.2z"/>
		<path fill="${t}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${t}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`;return ze(r)};Ve.reverseWinding=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline;return t+=`
		<path fill="${r}" d="M3.7,7.8V5L0,8.7l3.7,3.7V9.6c6.2,0,11.2,5,11.2,11.2h1.9C16.8,13.6,10.9,7.8,3.7,7.8z"/>
		<path fill="${e}" d="M25.2,22.3C25.2,10,15.2,0,3,0v3.2c10.5,0,19.1,8.6,19.1,19.1h-4.8l6.4,6.4l6.4-6.4H25.2z"/>
	`,ze(t)};Ve.switchPathComponent=function(t=!1){let e="",r=Le.blueOutline,n=Le.greenOutline,a=Le.darkFill,o=Le.lightFill;return t&&(r=Le.greenOutline,n=Le.blueOutline,a=Le.lightFill,o=Le.darkFill),e+=`
	<polygon fill="${a}" points="5.1,21 1,17.2 1,1 3.4,1 10,11.3 10,21"/>
	<path fill="${r}" d="M2.9,2L9,11.6V20H5.5L2,16.7V2H2.9 M3.9,0H0v17.6L4.7,22H11V11L3.9,0L3.9,0z"/>
	<polygon fill="${o}" points="21.8,29 16,23.6 16,1 19.8,1 29,15.3 29,29"/>
	<path fill="${n}" d="M19.1,2L28,15.6V28h-5.8L17,23.1V2h2 M20.4,0H15v24l6.4,6H30V15L20.4,0L20.4,0z"/>
	`,ze(e)};Ve.deletePath=function(t=!1){let e="",r=Le.redX,n=Le.blueOutline,a=Le.darkFill;return t&&(n=Le.greenOutline,a=Le.lightFill),e+=`
		<rect fill="${a}" x="1" y="1"	width="16" height="16"/>
		<path fill="${n}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<path fill="${r}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${r}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,ze(e)};Ve.combine_unite=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15.164,6.4c-.8-3.104-3.61-5.4-6.964-5.4-3.976,0-7.2,3.223-7.2,7.2,0,3.354,2.296,6.164,5.4,6.964v3.836h12.6V6.4h-3.836Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM18,18h-10v-4c-.702,0-1.373-.127-2-.35-2.327-.826-4-3.044-4-5.65,0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4,.223.627.35,1.298.35,2h4v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.combine_divide=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15.164,6.4c-.8-3.104-3.61-5.4-6.964-5.4C4.224,1,1,4.223,1,8.2c0,3.354,2.296,6.164,5.4,6.964v3.836h12.6V6.4h-3.836Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.combine_subtract=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15,6.337c-.791-3.068-3.568-5.337-6.883-5.337C4.186,1,1,4.186,1,8.117c0,3.315,2.27,6.092,5.337,6.883V6.337h8.663Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM18,18h-10v-10h10v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.combine_exclude=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15.347,7c0,5-3.347,8.347-8.347,8.347v3.653h12V7h-3.653Z" style="fill: ${r};"/>
		<path d="M15,6.337c-.791-3.068-3.568-5.337-6.883-5.337-3.93,0-7.117,3.186-7.117,7.117,0,3.315,2.27,6.092,5.337,6.883V6.337h8.663Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.combine_intersect=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15,8.6c0-.554-.078-1.088-.21-1.6h-7.79v7.79c.512.132,1.046.21,1.6.21,3.535,0,6.4-2.865,6.4-6.4Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.edit=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path fill="${e}" d="m28.643,1.357c-1.577-1.577-4.109-1.891-5.651-.349L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651Z"/>
		<path fill="${r}" d="m28.643,1.357C27.771.486,26.608,0,25.482,0,24.57,0,23.682.318,22.992,1.008L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651ZM6.268,20.561l15.793-15.793,3.172,3.172-15.793,15.793-3.172-3.172Zm-.662.752l3.082,3.082-5.548,2.466,2.466-5.548ZM27.577,5.594l-1.638,1.638-3.172-3.172,1.638-1.638c.281-.28.643-.423,1.076-.423.611,0,1.264.288,1.747.771.44.44.719,1.018.765,1.586.028.346-.021.842-.416,1.237Z"/>
	`,ze(t)};Ve.delete=()=>{let t="",e=Le.redX;return t+=`
		<path fill="${e}" d="m23.597,28.681c1.121,1.472,6.349-1.368,4.386-3.98C23.74,19.055,12.613,7.416,7.367,3.301,3.535.295,0,2.518,0,2.518c0,0,13.846,13.354,23.597,26.164Z"/>
		<path fill="${e}" d="m6.893,28.339c-1.703,2.813-6.56-.4-4.174-3.566C7.551,18.364,16.797,6.057,23.298,1.396c4.182-2.998,6.702-.235,6.702-.235,0,0-14.277,12.59-23.107,27.178Z"/>
	`,ze(t)};Ve.createNewKernGroup=()=>{let t="",e=Le.greenOutline,r=Le.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<polygon points="13 20.5 13 22.5 0 22.5 0 23.5 13 23.5 13 25.5 14 25.5 14 20.5 13 20.5" fill="${r}"/>
		<polygon points="24 2 10 2 10 0 9 0 9 5 10 5 10 3 24 3 24 2" fill="${r}"/>
		<rect x="21" y="15" width="3" height="15" fill="${e}"/>
		<rect x="21" y="15" width="3" height="15" transform="translate(45 0) rotate(90)" fill="${e}"/>
	`,ze(t)};Ve.deleteSingleLetterPair=()=>{let t="",e=Le.redX,r=Le.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<path d="m26.428,29.033c.625.821,3.542-.763,2.447-2.22-2.367-3.149-8.574-9.642-11.5-11.938-2.138-1.677-4.11-.437-4.11-.437,0,0,7.723,7.449,13.163,14.595Z" fill="${e}"/>
		<path d="m17.111,28.842c-.95,1.569-3.659-.223-2.328-1.989,2.695-3.575,7.853-10.44,11.479-13.04,2.333-1.673,3.739-.131,3.739-.131,0,0-7.964,7.023-12.889,15.16Z" fill="${e}"/>
	`,ze(t)};Ve.findSingleLetterPair=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<path d="m30,28l-5.154-5.154c.728-1.104,1.154-2.425,1.154-3.846,0-3.866-3.134-7-7-7s-7,3.134-7,7,3.134,7,7,7c1.421,0,2.742-.426,3.846-1.154l5.154,5.154,2-2Zm-15.5-9c0-2.481,2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5-4.5-2.019-4.5-4.5Z" fill="${e}"/>
	`,ze(t)};Ve.moveLayerDown=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<rect fill="${e}" x="23" y="21" width="2" height="7"/>
		<path fill="${e}" d="M20,26h8l-4,4C24,30,19.9,25.9,20,26z"/>
		<polygon fill="${e}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${r}" points="15,14 0,7 15,0 30,7"/>
	`,ze(t)};Ve.moveLayerUp=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<rect fill="${e}" x="23" y="23" width="2" height="7"/>
		<path fill="${e}" d="M20,25h8l-4-4C24,21,19.9,25.1,20,25z"/>
		<polygon fill="${r}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${e}" points="15,14 0,7 15,0 30,7"/>
	`,ze(t)};Ve.align=function(t){let e="",r=Le.blueOutline,n=Le.darkFill;switch(t){case"bottom":e+=`
				<rect x="0" y="18" width="20" height="2" style="fill: ${r};"/>
				<rect x="1" y="11" width="4" height="6" style="fill: ${n};"/>
				<rect x="8" y="1" width="4" height="16" style="fill: ${n};"/>
				<rect x="15" y="5" width="4" height="12" style="fill: ${n};"/>
			`;break;case"middle":e+=`
				<rect x="0" y="9" width="20" height="2" style="fill: ${r};"/>
				<rect x="1" y="7" width="4" height="6" style="fill: ${n};"/>
				<rect x="8" y="2" width="4" height="16" style="fill: ${n};"/>
				<rect x="15" y="4" width="4" height="12" style="fill: ${n};"/>
			`;break;case"top":e+=`
				<rect x="0" width="20" height="2" style="fill: ${r};"/>
				<rect x="1" y="3" width="4" height="6" style="fill: ${n};"/>
				<rect x="8" y="3" width="4" height="16" style="fill: ${n};"/>
				<rect x="15" y="3" width="4" height="12" style="fill: ${n};"/>
			`;break;case"left":e+=`
				<rect x="0" width="2" height="20" style="fill: ${r};"/>
				<rect x="3" y="1" width="6" height="4" style="fill: ${n};"/>
				<rect x="3" y="8" width="16" height="4" style="fill: ${n};"/>
				<rect x="3" y="15" width="12" height="4" style="fill: ${n};"/>
			`;break;case"center":e+=`
				<rect x="9.016" width="2" height="20" style="fill: ${r};"/>
				<rect x="7" y="1" width="6" height="4" style="fill: ${n};"/>
				<rect x="2" y="8" width="16" height="4" style="fill: ${n};"/>
				<rect x="4" y="15" width="12" height="4" style="fill: ${n};"/>
			`;break;case"right":e+=`
				<rect x="18" width="2" height="20" style="fill: ${r};"/>
				<rect x="11" y="1" width="6" height="4" style="fill: ${n};"/>
				<rect x="1" y="8" width="16" height="4" style="fill: ${n};"/>
				<rect x="5" y="15" width="12" height="4" style="fill: ${n};"/>
			`;break}return ze(e,"20")};Ve.resetPathPoint=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline;return t+=`
		<circle display="inline" fill="${r}" cx="20" cy="27" r="3"/>
		<circle display="inline" fill="${r}" cx="27" cy="13" r="3"/>
		<line display="inline" fill="none" stroke="${r}" stroke-miterlimit="10" x1="20" y1="27" x2="13" y2="13"/>
		<line display="inline" fill="none" stroke="${r}" stroke-miterlimit="10" x1="13" y1="13" x2="27" y2="13"/>
	`,t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,ze(t)};Ve.deletePathPoint=()=>{let t="",e=Le.blueOutline,r=Le.redX;return t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,t+=`
		<path fill="${r}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${r}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>';
	`,ze(t)};Ve.insertPathPoint=()=>{let t="",e=Le.blueOutline;return t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,t+=`
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>';
	`,ze(t)};Ve.selectNextPathPoint=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline;return t+=`
		<rect x="22.5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m29,12v6h-6v-6h6m1-1h-8v8h8v-8h0Z" fill="${e}"/>
		<path d="m19,15s-7-7-7-7v5h-6v4h6v5s7-7,7-7Z" fill="${r}"/>
		<rect y="13" width="3" height="4" fill="${r}"/>
	`,ze(t)};Ve.selectPreviousPathPoint=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline;return t+=`
		<rect x=".5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m7,12v6H1v-6h6m1-1H0v8h8v-8h0Z" fill="${e}"/>
		<path d="m11,15s7-7,7-7v5h6v4h-6s0,5,0,5l-7-7Z" fill="${r}"/>
		<rect x="27" y="13" width="3" height="4" fill="${r}"/>
	`,ze(t)};Ve.default=()=>{let t=`<rect width="30" height="30" fill="${Le.greenOutline}"/>`;return ze(t)};Ve.test=()=>{let t=`
		<path d="M28.05,23.82c-1.65-1.79-9.55-13.02-9.55-17.82V3h1c.28,0,.5-.72,.5-1s-.22-1-.5-1H10.5c-.28,0-.5,.72-.5,1s.22,1,.5,1h1v3c0,4.8-7.9,16.03-9.55,17.82-.58,.55-.95,1.32-.95,2.18,0,1.66,1.34,3,3,3H26c1.66,0,3-1.34,3-3,0-.86-.37-1.63-.95-2.18ZM13.5,6V3h3v3c0,2.76,2.01,6.95,4.25,10.72-3.27,1.69-5.6-.72-7.75-.72-.34,0-1.86-.31-4,1.15,2.34-3.88,4.5-8.28,4.5-11.15Zm3.5,20c-1.66,0-3-1.34-3-3s1.34-3,3-3,3,1.34,3,3-1.34,3-3,3Zm-6-7.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Z" fill="${Le.redX}"/>
		<circle cx="15" cy="14" r="1" fill="${Le.redX}"/>
	`;return ze(t)};function HI(){let t=C({className:"panel__card guides-card__view-options",innerHTML:"<h3>View options</h3>"});const e=xe().settings.app.guides,r=e.systemShowGuides,n=e.customShowGuides;ne(t,[rr(e,"drawGuidesOnTop",Qn),C({tag:"label",style:"grid-column: 2 / -1;",content:"Draw guides over shapes"})]);const a=rr(e,"systemShowGuides");a.addEventListener("change",()=>{z().navigate()}),ne(t,[a,C({tag:"h4",content:"Key metrics guides"})]),r&&ne(t,[C(),Ue("Transparency"),Pi(e.systemTransparency,x=>{e.systemTransparency=x,z().editCanvas.redraw()}),C(),Ue("Show labels"),rr(e,"systemShowLabels",Qn),Yr()]);const o=rr(e,"customShowGuides");o.addEventListener("change",()=>{z().navigate()}),ne(t,[o,C({tag:"h4",content:"Custom guides"})]),n&&ne(t,[C(),Ue("Transparency"),Pi(e.customTransparency,x=>{e.customTransparency=x,z().editCanvas.redraw()}),C(),Ue("Show labels"),rr(e,"customShowLabels",Qn)]);let s=[t];return r&&s.push(FI()),n&&s.push(MI()),s}function Qn(){ur(),z().editCanvas.redraw()}function FI(){let t=C({className:"panel__card guides-card__system",innerHTML:"<h3>Key metrics guides</h3>"});const e=xe().settings.font,r=z().selectedItem.advanceWidth;return ne(t,[yn("ascent","Ascent",e.ascent,to),yn("capHeight","Cap height",e.capHeight,eo),yn("xHeight","X height",e.xHeight,eo),yn("baseline","Baseline","0",ga),yn("descent","Descent",e.descent,to),yn("leftSide","Left side","0",ga),yn("rightSide","Right side",r,ga)]),t}function yn(t,e,r="0000",n){const a=z().systemGuides,o=rr(a,t,E=>{const T=z();let p=T.project.settings.app.guides.systemGuides;E?p.includes(t)||p.push(t):p.includes(t)&&(p=p.filter(R=>R!==t)),T.editCanvas.redraw()});o.setAttribute("title","Show / hide guide"),o.setAttribute("style",`accent-color: ${n};`);let s=C({className:"guide-system-angle",innerHTML:dn({name:"command_horizontalBar",color:n})});s.setAttribute("title","Horizontal guideline"),(t==="leftSide"||t==="rightSide")&&(s.innerHTML=dn({name:"command_verticalBar",color:n}),s.setAttribute("title","Vertical guideline"));const x=C({className:"guide-system-value",content:r});return x.setAttribute("title",`Guide line position
These are based on this font's key metrics,
which you can edit on the Font Settings page.`),[o,Ue(e),s,x]}function MI(){let t=C({className:"panel__card guides-card__custom",innerHTML:"<h3>Custom guides</h3>"});const e=xe().settings.app.guides.custom;e.length&&(e.forEach((n,a)=>{ne(t,GI(n,a))}),t.appendChild(Yr()));const r=C({tag:"fancy-button",attributes:{secondary:""},innerHTML:"Add a custom guide"});return r.addEventListener("click",()=>{xe().settings.app.guides.custom.push(new wo({visible:!0,color:K1()})),Qn()}),t.appendChild(r),t}function GI(t,e){const r=rr(t,"visible",()=>{z().editCanvas.redraw()});r.setAttribute("style",`accent-color: ${t.color}`),r.setAttribute("title","Show / hide guide");const n=Pt(t,"name","editCanvasView","input"),a=tl({iconName:"delete",title:"Delete guide"});a.setAttribute("class","guide-delete-button"),a.addEventListener("click",()=>{xe().settings.app.guides.custom.splice(e,1),Qn()});const o=C({tag:"input",className:"guide-color-button",title:"Change guide color",attributes:{type:"color",style:`background-color: ${t.color};`,value:v0(t.color)}});o.addEventListener("input",E=>{let T=Ua(E.target.value),p=`rgb(${T.r},${T.g},${T.b})`;o.setAttribute("value",v0(p)),o.style.backgroundColor=p,r.style.accentColor=p,s.querySelector("g").setAttribute("fill",p);const R=xe().settings.app.guides.custom[e];R.color=p,z().editCanvas.redraw()});const s=C({tag:"button",title:"Toggle vertical / horizontal",className:"guide-angle-button",innerHTML:dn({name:"command_verticalBar",color:t.color})});t.angle===90&&(s.innerHTML=dn({name:"command_horizontalBar",color:t.color})),s.addEventListener("click",()=>{const E=xe().settings.app.guides.custom[e];E.angle===90?(E.angle=0,E.name=E.name.replace("Horizontal","Vertical")):(E.angle=90,E.name=E.name.replace("Vertical","Horizontal")),Qn()});const x=Pt(t,"location","editCanvasView","input-number");return x.setAttribute("title","Guide line position"),[r,n,a,o,s,x]}function PI(){const t=z();let e=C({className:"panel__card history-list"}),r=t.history.length,n=C({tag:"button",className:r>0?"button__call-to-action number":"number",innerHTML:`undo ${r}`,style:"max-width: 30%; grid-column: 1 / -1;"});e.appendChild(n),r>0?n.addEventListener("click",()=>{t.history.restoreState()}):(n.setAttribute("disabled",""),e.appendChild(C({tag:"h3",innerHTML:t.project.getItemName(t.selectedItemID,!0)})));let a="initial";return t.history.queue.forEach(o=>{if(o.title!=="_whole_project_change_post_state_"){o.itemID&&o.itemID!==a&&(e.appendChild(C({tag:"h3",innerHTML:t.project.getItemName(o.itemID,!0)})),a=o.itemID);let s=o.title;o.wholeProjectSave&&(s=`<strong>${o.title}</strong>`),e.appendChild(C({className:"history-list__title",innerHTML:s})),e.appendChild(C({className:"history-list__date number",innerHTML:new Date(o.timeStamp).toLocaleTimeString(),title:new Date(o.timeStamp).toLocaleString()}))}}),e.appendChild(C({className:"history-list__title history-list__initial-entry",innerHTML:"Initial state"})),e.appendChild(C({className:"history-list__date number history-list__initial-entry",innerHTML:new Date(t.history.initialTimeStamp).toLocaleTimeString()})),e}const rl={isCtrlDown:!1,isSpaceDown:!1,isShiftDown:!1,isAltDown:!1};function t1(t){const e=i0(t);nl(e,"down")}function r1(t){let e=i0(t);nl(e,"up")}function nl(t,e){const r=rl;e==="down"&&(t==="ctrl"&&(r.isCtrlDown=!0),t==="space"&&(r.isSpaceDown=!0),t==="shift"&&(r.isShiftDown=!0),t==="alt"&&(r.isAltDown=!0)),e==="up"&&(t==="ctrl"&&(r.isCtrlDown=!1),t==="space"&&(r.isSpaceDown=!1),t==="shift"&&(r.isShiftDown=!1),t==="alt"&&(r.isAltDown=!1))}function bI(){let t=C({className:"panel__card full-width item-links__rows-area"});const e=z(),r=xe();let a=e.selectedItem.shapes;if(Se.newBasicPath){let o=Se.newBasicPath,s=C();s.setAttribute("class","item-link__row layer-panel__new-path"),s.classList.add("layer-panel__selected"),s.appendChild(C({className:"item-link__thumbnail",innerHTML:r.makeItemThumbnail(o)})),s.appendChild(C({className:"item-link__title",innerHTML:o.name})),t.appendChild(s)}if(a.length>0)for(let o=a.length-1;o>=0;o--){let s=a[o],x=C({attributes:{"target-path-index":o}});s.objType==="ComponentInstance"?x.setAttribute("class","item-link__row layer-panel__component-row"):x.setAttribute("class","item-link__row layer-panel__path-row"),e.multiSelect.shapes.isSelected(s)&&x.classList.add("layer-panel__selected"),e.subscribe({topic:"whichShapeIsSelected",subscriberID:`layersPanel.item-link-row-${o}`,callback:()=>{let p=e.multiSelect.shapes.isSelected(s);x.classList.toggle("layer-panel__selected",p)}}),x.addEventListener("click",()=>{rl.isCtrlDown?e.multiSelect.shapes.toggle(s):e.multiSelect.shapes.select(s),e.publish("whichShapeIsSelected",s)});const E=C({className:"item-link__thumbnail",attributes:{"target-path-index":o},innerHTML:r.makeItemThumbnail(s)});x.appendChild(E),x.appendChild(C({className:"item-link__title",innerHTML:`${s.name}`}));let T="Path";s.link&&(T=`Component instance&emsp;|&emsp;${r.getItem(s.link).name}`),x.appendChild(C({className:"item-link__subtitle",innerHTML:T})),t.appendChild(x)}else t.appendChild(C({content:'No paths exist yet.  You can create one with the New Path tools on the canvas, or by pressing "add new path" below.'}));return e.subscribe({topic:["currentPath","currentItem"],subscriberID:"layersPanel",callback:()=>{const o=z(),s=xe();document.querySelectorAll(".item-link__thumbnail").forEach(E=>{const T=E.getAttribute("target-path-index");E.innerHTML=s.makeItemThumbnail(o.selectedItem.shapes[T])})}}),[t,vI()]}function vI(){const t=z();let e=C({className:"panel__card full-width",content:"<h3>Actions</h3>"}),r=C({tag:"div",className:"panel__actions-area"});qt(r,nr("addShapeActions"));let n=t.multiSelect.shapes.members;return t.selectedItem.shapes.length>1&&n.length===1&&qt(r,nr("layerActions")),ne(e,r),e}function ja(){const t=z();let e=C(),r=t.nav.panel;return r!=="Layers"&&(document.removeEventListener("keydown",t1,!1),document.removeEventListener("keyup",r1,!1)),t.nav.page==="Components"&&vt(t.project.components)<=0||t.nav.page==="Ligatures"&&vt(t.project.ligatures)<=0||t.nav.page==="Kerning"&&vt(t.project.kerning)<=0||(r==="Attributes"?(t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),t.nav.page==="Kerning"?ne(e,OI()):ne(e,NI())):r==="Layers"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,bI()),document.addEventListener("keydown",t1,!1),document.addEventListener("keyup",r1,!1)):r==="Context characters"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),ne(e,BI())):r==="History"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,PI())):r==="Guides"&&(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,HI()))),e}function ur(){let t=document.querySelector("#editor-page__panel");if(t){let e=ja();t.innerHTML="",t.appendChild(e)}}class qr extends fr{constructor({leftGroup:e=[],rightGroup:r=[],value:n=0}={}){super(),this.leftGroup=e,this.rightGroup=r,this.value=n,this.objType="KernGroup"}save(e=!1){const r={leftGroup:this.leftGroup.slice(),rightGroup:this.rightGroup.slice(),value:this._value};return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{${this.objType} 
`;return r+="  ",n+=`${r}leftGroup: ${JSON.stringify(this.leftGroup)}
`,n+=`${r}rightGroup: ${JSON.stringify(this.rightGroup)}
`,n+=`${r}value: ${this.value}
`,n+=`${r.substring(2)}}/${this.objType}`,n}get leftGroup(){return this._leftGroup||[]}get rightGroup(){return this._rightGroup||[]}get value(){return this._value||0}get name(){return`${this.leftGroupAsString} | ${this.rightGroupAsString}`}get leftGroupAsString(){let e="";return this.leftGroup&&(e=gr(this.leftGroup.join(""))),e}get rightGroupAsString(){let e="";return this.rightGroup&&(e=gr(this.rightGroup.join(""))),e}set leftGroup(e=[]){e=e.map(r=>$t(r)),e=e.filter(Fn),this.changed(),this._leftGroup=e}set rightGroup(e=[]){e=e.map(r=>$t(r)),e=e.filter(Fn),this.changed(),this._rightGroup=e}set value(e){this._value=parseInt(e)||0,this.changed()}}const UI=Object.freeze(Object.defineProperty({__proto__:null,KernGroup:qr},Symbol.toStringTag,{value:"Module"}));function wI(){const t=z(),e=t.selectedKernGroupID,a=C({tag:"div",id:"app__page",innerHTML:`
		<div class="editor__page">
			<div class="editor-page__left-area">
				<div class="editor-page__nav-area">
					${_t({level:"l1",superTitle:"PAGE",title:"Kerning"})}
				</div>
				<div id="editor-page__panel"></div>
			</div>
			${e?`
		<div class="editor-page__tools-area"></div>
		<div class="editor-page__edit-canvas-wrapper"></div>
		<div class="editor-page__zoom-area"></div>
	`:'<div class="editor-page__edit-canvas-wrapper" style="grid-column: span 2; overflow-y: scroll;"></div>'}
		</div>
	`});t.showPageTransitions&&a.classList.add("app__page-animation");let o=a.querySelector("#nav-button-l1");o.addEventListener("click",function(){Vt(o)});const s=a.querySelector(".editor-page__nav-area"),x=a.querySelector(".editor-page__edit-canvas-wrapper");if(!e)return ne(x,YI()),s.style.display="block",o.style.width="100%",o.style.borderRadius="4px",a;const E=t.selectedKernGroup,T=_t({level:"l2",superTitle:"EDITING",title:E.name}),p=_t({level:"l3",superTitle:"PANEL",title:t.nav.panel});s.appendChild(se(T)),s.appendChild(se(p));const R=C({tag:"edit-canvas",id:"editor-page__edit-canvas",attributes:{"editing-item-id":t.selectedKernGroupID}});x.appendChild(R);let N=a.querySelector("#nav-button-l2");N.addEventListener("click",function(){Vt(N)}),t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"nav.kernChooserButton",callback:()=>{var Q;t.selectedKernGroup&&(N.innerHTML=ia((Q=t.selectedKernGroup)==null?void 0:Q.name,"EDITING"))}});let g=a.querySelector("#nav-button-l3");g.addEventListener("click",function(){Vt(g)});const K=a.querySelector("#editor-page__panel");K.appendChild(ja()),K.addEventListener("scroll",Wr),t.subscribe({topic:["whichKernGroupIsSelected"],subscriberID:"nav.panelChooserButton",callback:()=>{ur()}}),t.selectedTool="kern";let Y=a.querySelector(".editor-page__tools-area");Y.innerHTML="";let V=ap();V&&ne(Y,V);let _=a.querySelector(".editor-page__zoom-area");_.innerHTML="";let $=a0();return $&&ne(_,$),t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"editCanvas.selectedKernGroup",callback:Q=>{a.querySelector("#editor-page__edit-canvas").setAttribute("editing-item-id",Q)}}),a}function YI(){const t=C({className:"editor-page__first-run",innerHTML:`
			<h1>There are no kern pairs in your project</h1>
			<p>
				Kerning is an advanced feature of fonts that recognizes a pair of characters, then
				adjusts the spacing between them to some custom value. The default spacing between
				characters is zero - which is to say, the white space (side bearings) within each
				character are the only space shown.
			</p>
			<p>
				Some letter combinations, like <code>VA</code>
				as an example, if the default side bearing spacing
				is used, the letters visually look very far apart. Kerning can help the visual flow of
				character pairs look more well considered. Many character pairs may need either negative
				or positive kern values to make them "look right".
			</p>
			<h2>Class-based kerning</h2>
			<p>
				Font files encode kerning values as three pieces of information: a left character, a right
				character, and a horizontal adjustment value. Fonts with many characters can end up having
				a huge amount of kern pairs. Glyphr Studio uses a system called Class-based Kerning, where
				groups of characters with similar edges (like
					<code>V</code><code>v</code><code>W</code><code>w</code>
					)
				can be treated as a single left-hand group, and a group of right-hand characters (for example,
				<code>A</code><code>/</code>) can be treated as single group - which can be given a single value.
				When a font is exported, the permutations are saved as individual kern pairs. But, while
				editing, grouping common characters often simplifies the overall kerning process.
			</p>
		`}),e=C({tag:"fancy-button",innerHTML:"Create a new kern group",onClick:()=>bi(!1)});return t.appendChild(e),t}function WI(t,e,r){const n=Yo(),a=xe();return a.addItemByType(new qr({leftGroup:t,rightGroup:e,value:r}),"KernGroup",n),a.kerning[n]}function Yo(t=xe().kerning){let e=vt(t);for(;t[`kern-${e}`];)e++;return`kern-${e}`}function bi(t=!1){const e=C({innerHTML:`
		<h2>${t?"Edit this":"Create a new"} kern group</h2>
		Specify which characters should be in the left-side group,
		the right-side group, then what distance in <code>Em</code>
		units should be used for the kern value.
		<br><br>

		<h3>Left group</h3>
		<input id="kerning__add-new-kern-group__left-group" type="text"
		value="${t?t.leftGroupAsString:""}"
		autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<h3>Right group</h3>
		<input id="kerning__add-new-kern-group__right-group" type="text"
		value="${t?t.rightGroupAsString:""}"
		autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<h3>Value</h3>
		<input id="kerning__add-new-kern-group__value" type="text"
			value="${t?t.value:""}"
			autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<fancy-button disabled id="kerning__add-new-kern-group__submit-button">
			${t?"Save changes":"Add new kern group"}
		</fancy-button>
		`}),r=e.querySelector("#kerning__add-new-kern-group__submit-button"),n=e.querySelector("#kerning__add-new-kern-group__left-group"),a=e.querySelector("#kerning__add-new-kern-group__right-group"),o=e.querySelector("#kerning__add-new-kern-group__value");n.addEventListener("change",s),a.addEventListener("change",s),o.addEventListener("change",s),n.addEventListener("keyup",s),a.addEventListener("keyup",s),o.addEventListener("keyup",s),t&&(r.removeAttribute("disabled"),r.addEventListener("click",x));function s(){n.value!==""&&a.value!==""&&o.value?(r.removeAttribute("disabled"),r.addEventListener("click",x)):(r.setAttribute("disabled",""),r.removeEventListener("click",x))}function x(){const E=z();let T=ma(n.value),p=ma(a.value),R=parseInt(o.value);if(t)t.leftGroup=T,t.rightGroup=p,t.value=R,E.history.addState("Edited kern group: "+E.selectedKernGroupID),E.publish("currentKernGroup",E.selectedKernGroup),E.navigate(),ke();else{const N=WI(T,p,R);typeof N=="string"?xr(N):(E.selectedItemID=N.id,E.navigate(),E.history.addWholeProjectChangePostState(),ke())}}cr(e,500)}function kI(){const t=C({innerHTML:`
		<h2>Find a letter pair</h2>
		Specify a pair of letters below, and search will return all the Kern Groups
		that contain that pair. Clicking on a search result will select that Kern Group
		behind the dialog box.
		<br><br>
		It is good to not have duplicate values for a letter pair - the value that actually
		gets used may not be the expected one.
		<br><br>

		<div class="list__two-column" style="max-width: 100px;">
			<div class="list__column-header">Left group letter</div>
			<div class="list__column-header">Right group letter</div>
			<input
				id="kerning__letter-pair__left-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
			<input
				id="kerning__letter-pair__right-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
		</div>
		<br>

		<fancy-button disabled id="kerning__letter-pair__search-button">
			Search
		</fancy-button>
		<br><br>
		<hr/>
		<br>
		<div id="kerning__letter-pair__results">
			<i>Search results...</i>
		</div>
		`}),e=t.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",Ln),e.addEventListener("keyup",Ln);const r=t.querySelector("#kerning__letter-pair__right-group");r.addEventListener("change",Ln),r.addEventListener("keyup",Ln),t.querySelector("#kerning__letter-pair__search-button").addEventListener("click",_I),cr(t,800)}function KI(){const t=C({innerHTML:`
		<h2>Delete letter pairs</h2>
		Specify a pair of letters below, and search will find and attempt to delete all
		the letter pairs from the applicable Kern Groups.
		<br><br>
		<b>Note</b>: This will only affect Kern Groups where either the left group or the right group has only one member. Kern Groups affect all possible permutations of left group / right group.
		Because of this, if a left group and a right group both have multiple members, including
		the specified letter pair, removing the letters from the letter pair would remove more
		than just the kern value for those two letters.
		<br><br>

		<div class="list__two-column" style="max-width: 100px;">
			<div class="list__column-header">Left group letter</div>
			<div class="list__column-header">Right group letter</div>
			<input
				id="kerning__letter-pair__left-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
			<input
				id="kerning__letter-pair__right-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
		</div>
		<br>

		<fancy-button disabled danger id="kerning__letter-pair__search-button">
			Find and delete
		</fancy-button>
		<div id="kerning__result-message"></div>
		`}),e=t.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",Ln),e.addEventListener("keyup",Ln);const r=t.querySelector("#kerning__letter-pair__right-group");r.addEventListener("change",Ln),r.addEventListener("keyup",Ln),t.querySelector("#kerning__letter-pair__search-button").addEventListener("click",VI),cr(t,800)}function Ln(){const t=document.querySelector("#kerning__letter-pair__left-group"),e=document.querySelector("#kerning__letter-pair__right-group"),r=document.querySelector("#kerning__letter-pair__search-button");t.value.length&&e.value.length?r.removeAttribute("disabled"):r.setAttribute("disabled","")}function _I(){const t=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),e=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),r=xe().kerning,n=[];Object.keys(r).forEach(o=>{r[o].leftGroup.includes(wr(t))&&r[o].rightGroup.includes(wr(e))&&n.push(o)});const a=document.querySelector("#kerning__letter-pair__results");if(a.innerHTML="",n.length){const o=z().selectedKernGroupID;n.forEach(s=>{let x=el(s);x.addEventListener("click",()=>{const E=z();E.selectedItemID=s,E.history.addState(`Navigated to ${E.project.getItemName(s,!0)}`),document.querySelectorAll(".kern-group-chooser__row").forEach(p=>p.removeAttribute("selected")),x.setAttribute("selected","")}),s===o&&x.setAttribute("selected",""),a.appendChild(x)})}else a.innerHTML="<i>No Kern Groups exist with that letter pair</i>"}function VI(){const t=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),e=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),r=document.querySelector("#kerning__result-message");r.innerHTML="";const n=xe().kerning;let a,o=[],s=[];Object.keys(n).forEach(x=>{n[x].leftGroup.includes(wr(t))&&n[x].rightGroup.includes(wr(e))&&(a=JI(t,e,x),a?s.push(x):o.push(x))}),o.length&&(r.innerHTML=`
			<br><br>
			<b>Warning</b><br>
			The following Kern Groups contain the specified letter pair, but
			the letters could not be removed because both the left group and
			the right group contain multiple members.
			<br><br>
			${o.join(", ")}
			<br><br>
			<hr>
		`),s.length>0?(r.innerHTML+=`
			<br>
			Successfully removed letter pair from Kern Group${s.length>1?"s:":":"}
			<br><br>
			${s.join(", ")}
		`,z().navigate()):o.length||(r.innerHTML+=`
				<br>
				<i>No Kern Groups with the specified letter pair was found.</i>
			`)}function JI(t="",e="",r=!1){let n={},a=wr(t),o=wr(e);const s=z();let x=!1;if(r){let E=s.project.getItem(r);E&&(n[r]=E)}else n=s.project.kerning;return Object.keys(n).forEach(E=>{let T=n[E].leftGroup,p=n[E].rightGroup;T.includes(a)&&p.includes(o)&&(T.length===1&&p.length===1?(s.deleteItem(E,s.project.kerning),x=!0):T.length===1?(p.splice(p.indexOf(o),1),x=!0):p.length===1&&(T.splice(T.indexOf(a),1),x=!0))}),x}function na(t){const e=C();return t.forEach(r=>{e.appendChild(zI(r))}),e}function zI(t){let e=gr(t),r=sa(t),n=t;return r&&(n=`${r}
${t}`),C({tag:"code",innerHTML:e,attributes:{title:n}})}const dt={chars:"",currentGlyphChar:"",canvasHotspots:[],leftBlock:!1,rightBlock:!1,labelColors:{link:"rgb(214, 71, 0)",selected:"rgb(128, 43, 0)"}};function ZI(t){const e=z();if(!jI())return;const r=xe(),n=r.settings.font.ascent;dt.currentGlyphChar=e.selectedItem.char,dt.chars=e.selectedItem.contextCharacters;const a=e.view,o=XI(dt.currentGlyphChar);if(ed(),o.left){let s=qn(o.left);s+=jr(o.left.charAt(o.left.length-1),dt.currentGlyphChar);let x=new sr({xMin:a.dx-s*a.dz,xMax:a.dx,yMin:a.dy-n*a.dz,yMax:a.dy});dt.leftBlock=new Q0({options:{text:o.left,fontSize:a.dz*r.totalVertical},canvasMaxes:x,ctx:t,rounding:!1,drawLineExtras:QI,drawCharacterExtras:n1,drawCharacter:a1}),dt.leftBlock.draw({showPageExtras:!1,showLineExtras:!0,showCharacterExtras:!0,showCharacter:!0})}if(o.right){let s=e.selectedItem.advanceWidth;s+=jr(dt.currentGlyphChar,o.right.charAt(0));let x=new sr({xMin:a.dx+s*a.dz,xMax:1/0,yMin:a.dy-n*a.dz,yMax:a.dy});dt.rightBlock=new Q0({options:{text:o.right,fontSize:a.dz*r.totalVertical},canvasMaxes:x,ctx:t,rounding:!0,drawLineExtras:qI,drawCharacterExtras:n1,drawCharacter:a1}),dt.rightBlock.draw({showPageExtras:!1,showLineExtras:!0,showCharacterExtras:!0,showCharacter:!0})}if(r.settings.app.contextCharacters.showGuides){const s=e.selectedItem,x=In(r.settings.app.contextCharacters.guidesTransparency),E=Cr(dt.labelColors.selected,x);il(t,s.name.replace(/latin /i,""),a.dx,s.advanceWidth*a.dz,E,!1);const T=Cr(dt.labelColors.link,x);t.fillStyle=T,Kr(t,0,e.view),Kr(t,e.selectedItem.advanceWidth,e.view)}}function XI(t){const e=dt.chars,r={left:!1,right:!1};if(e){const n=e.indexOf(t);n===-1?(r.left=e,r.right=""):(r.left=e.substring(0,n),r.right=e.substring(n+t.length))}return r}function jI(){const t=z(),e=t.selectedItem;return!(!e||!e.contextCharacters||e.contextCharacters===e.char||!t.project.settings.app.contextCharacters.showCharacters)}function qn(t){let e=0;t=Xs(t.split(""));const r=xe();let n,a;return t.forEach(function(o,s,x){a=r.getItemID(o),n=r.getItem(a),n?(e+=n.advanceWidth,x[s+1]&&(e+=jr(o,x[s+1]))):e+=xe().defaultAdvanceWidth}),e}function QI(t,e,r){const n=z();n.project.settings.app.contextCharacters.showGuides&&al(t,e.view.dx-20,e.view.dy,n.view.dx-e.view.dx+20);let a=jr(r.options.text.charAt(r.options.text.length-1),n.selectedItem.char);if(a){const o=z().view;a*=-1;let s=a;s=o.dx+s*o.dz,qi(t,-a,s,o.dz)}}function qI(t,e,r){const n=z(),o=qn(dt.rightBlock.options.text)*n.view.dz;n.project.settings.app.contextCharacters.showGuides&&al(t,e.view.dx,e.view.dy,o+20);let s=jr(n.selectedItem.char,r.options.text.charAt(0));if(s){const x=z().view;let E=s+n.selectedItem.advanceWidth;E=x.dx+E*x.dz,qi(t,-s,E,x.dz)}}function al(t,e,r,n){const a=xe().settings.app.contextCharacters.guidesTransparency,o=In(a);t.fillStyle=Cr(ga,o),t.fillRect(e,Math.ceil(r),n,1)}function n1(t,e,r="none"){const n=xe().settings.app;if(n.contextCharacters.showGuides){const a=In(n.contextCharacters.guidesTransparency),o=z(),s=e.widths.advance*e.view.dz,x=e.view.dx,E=x+s;let T=Cr(dt.labelColors.link,a),p=e.item.id;o.selectedItemID===e.item.id&&(T=Cr(dt.labelColors.selected,a),p=!1);let R;e.item?R=e.item.name:R=o.project.getItemName(`glyph-${ma(e.char)}`,!0),R=R.replace(/latin /i,""),il(t,R,x,s,T,p),t.fillStyle=T,Kr(t,St(E),o.view),Kr(t,St(x),o.view),e.widths.kern&&qi(t,e.widths.kern,E,e.view.dz)}}function il(t,e,r,n,a,o=!1){const s=t.measureText(e).width,x=lt(xe().settings.font.descent-60),E=r+(n-s)/2,T=x+22;t.font="12px Tahoma, Verdana, sans-serif",t.strokeStyle="white",t.lineWidth=4,t.strokeText(e,E,T),t.fillStyle=a,t.fillText(e,E,T),o&&$I({target:{xMin:r,xMax:r+n,yMin:T-20,yMax:T+20},underline:{xMin:E-1,xMax:E+s+1,y:T+6},onclick:function(){td(o)}})}function qi(t,e,r,n){const a=lt(xe().settings.font.descent),o=st.purple.l70,s=Math.max(n*10,1),x=0;t.font="12px Tahoma, Verdana, sans-serif",t.fillStyle=o,t.fillRect(Math.floor(r),a+x,Math.ceil(e*n),s);const E="kern: "+e,T=t.measureText(E).width,p=r-(e*-1*n-T)/2-T;t.strokeStyle="white",t.lineWidth=4,t.miterLimit=1;let R=25;t.strokeText(E,p,a+x+s+R),t.fillText(E,p,a+x+s+R)}function a1(t,e){e.isVisible&&e.item&&Sa(e.item,t,e.view,In(xe().settings.app.contextCharacters.characterTransparency))}function $I(t){dt.canvasHotspots.push(t)}function ed(){dt.canvasHotspots=[]}function ol(t,e){const r=dt.canvasHotspots;let n;for(let a=0;a<r.length;a++)if(n=r[a],t<=n.target.xMax&&t>=n.target.xMin&&e<=n.target.yMax&&e>=n.target.yMin)return n;return!1}function Al(t,e){dt.canvasHotspots.forEach(r=>{t<=r.target.xMax&&t>=r.target.xMin&&e<=r.target.yMax&&e>=r.target.yMin&&r.onclick()})}function td(t){const e=z(),r=e.view,n=dt.currentGlyphChar,a=e.project.getItem(t),o=a.char,s=dt.chars.indexOf(n),x=dt.chars.indexOf(o);let E,T,p;s<x?(E=1,T=n,p=o):(E=-1,T=o,p=n);const R=dt.chars.substring(s,x),N=qn(R),g=jr(T,p);r.dx+=r.dz*N*E,r.dx+=r.dz*g*E,a.contextCharacters=dt.chars,e.view=r,t.startsWith("liga-")?(e.nav.page="Ligatures",e.selectedItemID=t):(e.nav.page="Characters",e.selectedItemID=t),e.nav.navigate()}function rd(t,e){const r=ol(t,e),n=z().editCanvas.ctx;if(r){const a=xe().settings.app.contextCharacters.guidesTransparency,o=In(a),s=Cr("rgb(204,81,0)",o);n.strokeStyle=s,n.lineWidth=1,n.beginPath(),n.moveTo(r.underline.xMin,Ot(r.underline.y)),n.lineTo(r.underline.xMax,Ot(r.underline.y)),n.stroke(),ve("arrow")}return r.target.xMin}class cn{constructor({begin:e=0,end:r=0,name:n="",enabled:a=!0,count:o=0}){this.begin=e,this.end=r,this.name=n,this.enabled=!!a,this.count=o,this.cachedArray=!1}get begin(){return this._begin||0}set begin(e){this._begin=parseInt(e),this.cachedArray=!1}get end(){return this._end||0}set end(e){this._end=parseInt(e),this.cachedArray=!1}get count(){return this._count||0}set count(e){this._count=parseInt(e)}*generator(e=!1){if(this.begin<=33&&(this.end===126||this.end===127)){let r=0;for(;r<i1.length;)yield i1[r],r++}else{let r=this.begin;if(e)for(;r<=this.end;)yield $e(r++);else{for(;W1(r);)r++;for(;r<=this.end;)yield $e(r++)}}}get isValid(){let e=!isNaN(this.begin),r=this.end!==0&&!isNaN(this.end),n=this.name!=="";return e&&r&&n}save(){let e={name:this.name,begin:this.beginHex,end:this.endHex};return this.enabled||(e.enabled=!1),e}isWithinRange(e){return e<=this.end&&e>=this.begin}get beginHex(){return $e(this.begin)}get endHex(){return $e(this.end)}get note(){return`["${this.beginHex}", "${this.endHex}"]`}get id(){return`${this.name} ${this.note}`}getMemberIDs(e=!1){if(this.cachedArray)return this.cachedArray;const r=[];for(const n of this.generator(e))r.push(n);return this.cachedArray=r,r}}const i1=["0x41","0x42","0x43","0x44","0x45","0x46","0x47","0x48","0x49","0x4A","0x4B","0x4C","0x4D","0x4E","0x4F","0x50","0x51","0x52","0x53","0x54","0x55","0x56","0x57","0x58","0x59","0x5A","0x61","0x62","0x63","0x64","0x65","0x66","0x67","0x68","0x69","0x6A","0x6B","0x6C","0x6D","0x6E","0x6F","0x70","0x71","0x72","0x73","0x74","0x75","0x76","0x77","0x78","0x79","0x7A","0x30","0x31","0x32","0x33","0x34","0x35","0x36","0x37","0x38","0x39","0x21","0x22","0x23","0x24","0x25","0x26","0x27","0x28","0x29","0x2A","0x2B","0x2C","0x2D","0x2E","0x2F","0x3A","0x3B","0x3C","0x3D","0x3E","0x3F","0x40","0x5B","0x5C","0x5D","0x5E","0x5F","0x60","0x7B","0x7C","0x7D","0x7E","0x20"];class Wo{constructor(e){this.tabs=[],this.targetElement=e,this.targetElement.addEventListener("scroll",Wr)}registerTab(e="Tab Name",r=""){let n={name:e,content:r,tabElement:C({className:"tab-control__tab",innerHTML:e,attributes:{tabindex:1},onClick:()=>{this.selectTab(e)}})};this.tabs.push(n)}makeTabs(){const e=C({tag:"div",className:"tab-control__tab-container panel__card full-width"});return this.tabs.forEach(r=>{e.appendChild(r.tabElement)}),e}selectTab(e){this.targetElement.innerHTML="",this.tabs.forEach(r=>{r.name===e?(r.tabElement.setAttribute("selected",""),ne(this.targetElement,r.content)):r.tabElement.removeAttribute("selected")}),Wr()}}function nd(){const t=C({tag:"div",className:"settings-page__tab-content settings-table",id:"tab-content__app",innerHTML:`
			<h1>App preferences</h1>
			<p>These settings adjust how the Glyphr Studio App behaves.</p>
		`});return ne(t,[se("<h3>Saving</h3>"),Me("app","stopPageNavigation",qo),Me("app","formatSaveFile"),Me("app","saveLivePreviews"),Me("app","autoSave"),se('<span class="settings__label">Delete all auto-saved backups:</span>'),C({tag:"info-bubble",content:"Glyphr Studio uses your browser's local storage to keep auto-saved backups. If you use Glyphr Studio from a different browser, or on a different computer, you'll have to go there to restore or delete backups."}),C({tag:"fancy-button",attributes:{danger:"",style:"height: 24px;"},innerHTML:"Delete",onClick:()=>{ht().setLocalStorage("autoSaves",{}),ye("Auto-saved backups were deleted for this browser.")}}),se("<span></span>"),se("<br>"),se("<br>"),se("<h3>Behavior</h3>"),Me("app","unlinkComponentInstances"),se("<br>"),se("<br>"),se("<h3>Visibility</h3>"),Me("app","showNonCharPoints"),Me("app","itemChooserPageSize"),Me("app","previewText"),se("<br>"),se("<br>"),se("<h3>Importing & exporting</h3>"),Me("app","exportLigatures"),Me("app","exportKerning"),Me("app","moveShapesOnSVGDragDrop")]),t}const ad={project:{name:{label:"Project name",description:"Name for this project. Can be different than the Font or Font Family name. Also, this will be used as the name of the saved Glyphr Studio Project (.gs2) file."},latestVersion:{label:"Version",description:"The latest app version that edited this project file.",type:"Read only"},initialVersion:{label:"Initial version",description:"The app version this project file was first created with.",type:"Read only"},id:{label:"Project ID",description:"A unique ID used to identify this project.",type:"Read only"}},app:{stopPageNavigation:{label:"Warn about unsaved changes on window close",description:'This will stop closing the window or tab with an "Are you sure?" message if you have unsaved changes.',type:"Boolean"},formatSaveFile:{label:"Format project file for reading",description:"Glyphr Studio Project files (.gs2) are text files in JSON format. By default, this file is saved to optimize for smaller file size. Setting this option to true formats the file to be more easily read by a human, but could increase the file size by 2x or more.",type:"Boolean"},saveLivePreviews:{label:"Save live previews",description:"Save the text blocks that you have defined for your Live Previews (both the page, and the 2nd window). These could be long, so you may want to turn them off for file size reasons.",type:"Boolean"},autoSave:{label:"Auto-save a copy of the project with each change",description:"When enabled, this option will use your browser's local storage to keep backups. These backups can be restored from the Open Projects page. Your browser's local storage is confined to this browser on this computer. If you use Glyphr Studio from another browser or on another computer, those backups will be available from there.",type:"Boolean"},savePreferences:{label:"Save app preferences locally",description:"App preferences can be saved locally to your computer, then loaded automatically when you come back to this project.",type:"Boolean"},unlinkComponentInstances:{label:"Unlink component instances when deleting their root",description:"When selected, this option will unlink component instances and turn them into normal paths if their component root is deleted (the glyph will look the same, but some component instances will end up as stand-alone path objects).<br>If this option is unselected, component instances will be deleted when their component root is deleted (the glyph will look different because it will have less shapes).",type:"Boolean"},showNonCharPoints:{label:"Show non-graphic control characters",description:"Show the Unicode code points represent things that aren't letters. In Unicode, the C0 and C1 control code or control character sets define control codes for use in text by computer systems that use ASCII and derivatives of ASCII.<br><br>This setting should probably stay turned off, control characters can probably be safely ignored.",type:"Boolean"},itemChooserPageSize:{label:"Number of items to show in the chooser",description:"For Ligatures, Components, and Kern Groups, this is how many items to show in the chooser menu. For projects with large numbers of items, splitting the items apart into pages can help the UI perform better.",type:"Number"},exportLigatures:{label:"Export Ligatures to fonts (.otf and .svg)",description:"Uncheck this option if don't want ligature data exported to fonts.",type:"Boolean"},exportKerning:{label:"Export Kern information to fonts (.svg only)",description:"Uncheck this option if don't want kern data exported to fonts.",type:"Boolean"},moveShapesOnSVGDragDrop:{label:"Move shapes when drag+dropping an SVG file",description:"When importing SVG by dragging and dropping a .svg file onto the canvas, move the imported shapes to the origin (x = 0, y = shapes height).",type:"Boolean"},previewText:{label:"Project preview text",description:"What text to show when previewing a project or switching between projects. If left blank, the string 'Aa Bb Cc Xx Yy Zz' will be used."}},font:{family:{label:"Font family",description:"Base font family name, that will be shared across font styles. This will also be used as the base name for exported font files."},style:{label:"Font style",description:"Describes this font within the overall font family. Usually a combination of how bold this font is and if it is italic.",example:"Thin, ExtraLight, Light, <strong>Regular</strong>, Medium, SemiBold, <strong>Bold</strong>, ExtraBold, Black <br><br>Thin&nbsp;Italic, ExtraLight&nbsp;Italic, Light&nbsp;Italic, <strong>Italic</strong>, Medium&nbsp;Italic, SemiBold&nbsp;Italic, Bold&nbsp;Italic, ExtraBold&nbsp;Italic, Black&nbsp;Italic"},version:{label:"Font version",description:'If this font gets updates regularly, keep track of what version this iteration is. This is recommended to be in Semantic Versioning format, you can learn more at <a href="https://semver.org/" target="_blank">semver.org</a>.',example:"Version 1.0"},description:{label:"Font description",description:"Open-ended text to describe your font."},panose:{label:"Panose-1",description:`PANOSE is a system that uses ten digits to describe the font's visual style.  A good overview can be found on Monotype's GitHub page: <a href="https://monotype.github.io/panose/pan1.htm" target="_blank">monotype.github.io/panose/pan2.htm</a><br>Each digit of the ten digits is separated by a space, and has a special meaning based on its position.`,example:`<strong>0 0 0 0 0 0 0 0 0 0</strong><br>All zeros describe this font as 'any', which basically leaves it undefined. Use this as your default.
			<br><br>
			<strong>2 0 0 0 0 0 0 0 0 0</strong><br>The first digit determines the kind of font family this is, where digit 2 represents Latin typefaces.
			<br><br>
			Check out the interactive PANOSE builder to get more details on what each digit means.`},upm:{label:"Units per Em (UPM)",description:"UPM is the measure of the overall design space for a character in this font. Think of UPM like how many pixels of height you have to work with for each character.<br><br><b>Note!</b> Operating systems are picky about what UPM values they allow. In general, anything 1000 or below will work. Above 1000, many times only powers of 2 will work (like 1024, 2048, 4096, etc.).<br><br>Traditionally, UPM is either 1000 or 2048.",example:"1000, 2048",type:"Em"},ascent:{label:"Ascent",description:"Distance from the baseline to the top of square and tall lowercase letters (Like: b d h k l).",type:"Em"},descent:{label:"Descent",description:"Distance from the baseline to the bottom of letters that have square descenders (Like: p q y depending on style). This is expressed as a negative number.",type:"Em"},capHeight:{label:"Capital letter height",description:"Distance from the baseline to the top of square capital letters (Like: A B D E F H I K L M N P R T U V W X Y Z). Usually this is slightly smaller than the ascent.",type:"Em"},xHeight:{label:"X height",description:"Distance from the baseline to the top of square lowercase letters (Like: v w x z).",type:"Em"},overshoot:{label:"Overshoot",description:"Rounded characters are usually slightly larger than square characters to compensate for visual weight. For example, a lowercase 'o' will extend slightly above and below a lowercase 'x'. Overshoot is the measure of this distance.",type:"Em"},lineGap:{label:"Line gap",description:"When text wraps onto multiple lines, this is the distance between the bottom of one Em Square to the top of the next line's Em Square.",type:"Em"},weight:{label:"Font weight",description:`How bold this font is - a number between 100 and 900:
				<br>100 : Thin
				<br>200 : Extra-Light
				<br>300 : Light
				<br>400 : Regular
				<br>500 : Medium
				<br>600 : Semi-Bold
				<br>700 : Bold
				<br>800 : Extra-Bold
				<br>900 : Black
			`,type:"Number"},italicAngle:{label:"Italic angle",description:"Most common degree of slant for glyphs in an italic font.",type:"Degree"},designer:{label:"Designer",description:"Person or team who created this font."},designerURL:{label:"Designer's URL",description:""},manufacturer:{label:"Manufacturer",description:"Company who created this font."},manufacturerURL:{label:"Manufacturer's URL",description:""},license:{label:"License",description:"License under which this font is released."},licenseURL:{label:"License URL",description:""},copyright:{label:"Copyright",description:""},trademark:{label:"Trademark",description:""},variant:{label:"Font variant",description:"Either 'normal' or 'small-caps'."},stretch:{label:"Font stretch",description:"How condensed or expanded this font is.",example:"normal, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded"},stemv:{label:"Vertical stem",description:"Most common width measurement of vertical stems in this font.",type:"Em"},stemh:{label:"Horizontal stem",description:"Most common height measurement of horizontal stems in this font.",type:"Em"},slope:{label:"Slope",description:"The angle, in degrees counterclockwise from the vertical, of the dominant vertical strokes of the font. The value is negative for fonts that slope to the right.",type:"Degree"},underlinePosition:{label:"Underline position",description:"The ideal position of an underline with relation to the baseline (probably should be negative).",type:"Em"},underlineThickness:{label:"Underline thickness",description:"The ideal height of an underline.",type:"Em"},strikethroughPosition:{label:"Strikethrough position",description:"The ideal position of a strikethrough with relation to the baseline.",type:"Em"},strikethroughThickness:{label:"Strikethrough thickness",description:"The ideal height of a strikethrough.",type:"Em"},overlinePosition:{label:"Overline position",description:"The ideal position of an overline with relation to the baseline.",type:"Em"},overlineThickness:{label:"Overline thickness",description:"The ideal height of an overline.",type:"Em"}}},y0=[{name:"Any"},{name:"No Fit"},{name:"Latin Text",values:[{name:"Serif Style",values:["Any","No Fit","Cove","Obtuse Cove","Square Cove","Obtuse Square Cove","Square","Thin","Oval","Exaggerated","Triangle","Normal Sans","Obtuse Sans","Perpendicular Sans","Flared","Rounded"]},{name:"Weight",values:["Any","No Fit","Very Light","Light","Thin","Book","Medium","Demi","Bold","Heavy","Black","Extra Black"]},{name:"Proportion",values:["Any","No fit","Old Style","Modern","Even Width","Extended","Condensed","Very Extended","Very Condensed","Monospaced"]},{name:"Contrast",values:["Any","No Fit","None","Very Low","Low","Medium Low","Medium","Medium High","High","Very High"]},{name:"Stroke Variation",values:["Any","No Fit","No Variation","Gradual/Diagonal","Gradual/Transitional","Gradual/Vertical","Gradual/Horizontal","Rapid/Vertical","Rapid/Horizontal","Instant/Vertical","Instant/Horizontal"]},{name:"Arm Style",values:["Any","No Fit","Straight Arms/Horizontal","Straight Arms/Wedge","Straight Arms/Vertical","Straight Arms/Single Serif","Straight Arms/Double Serif","Non-Straight/Horizontal","Non-Straight/Wedge","Non-Straight/Vertical","Non-Straight/Single Serif","Non-Straight/Double Serif"]},{name:"Letterform",values:["Any","No Fit","Normal/Contact","Normal/Weighted","Normal/Boxed","Normal/Flattened","Normal/Rounded","Normal/Off Center","Normal/Square","Oblique/Contact","Oblique/Weighted","Oblique/Boxed","Oblique/Flattened","Oblique/Rounded","Oblique/Off Center","Oblique/Square"]},{name:"Midline",values:["Any","No Fit","Standard/Trimmed","Standard/Pointed","Standard/Serifed","High/Trimmed","High/Pointed","High/Serifed","Constant/Trimmed","Constant/Pointed","Constant/Serifed","Low/Trimmed","Low/Pointed","Low/Serifed"]},{name:"X-height",values:["Any","No Fit","Constant/Small","Constant/Standard","Constant/Large","Ducking/Small","Ducking/Standard","Ducking/Large"]}]},{name:"Latin Hand Written",values:[{name:"Tool Kind",values:["Any","No Fit","Flat Nib","Pressure Point","Engraved","Ball (Round Cap)","Brush","Rough","Felt Pen/Brush Tip","Wild Brush - Drips a lot"]},{name:"Weight",values:["Any","No Fit","Very Light","Light","Thin","Book","Medium","Demi","Bold","Heavy","Black","Extra Black (Nord)"]},{name:"Spacing",values:["Any","No fit","Proportional Spaced","Monospaced"]},{name:"Aspect Ratio",values:["Any","No Fit","Very Condensed","Condensed","Normal","Expanded","Very Expanded"]},{name:"Contrast",values:["Any","No Fit","None","Very Low","Low","Medium Low","Medium","Medium High","High","Very High"]},{name:"Topology",values:["Any","No Fit","Roman Disconnected","Roman Trailing","Roman Connected","Cursive Disconnected","Cursive Trailing","Cursive Connected","Blackletter Disconnected","Blackletter Trailing","Blackletter Connected"]},{name:"Form",values:["Any","No Fit","Upright / No Wrapping","Upright / Some Wrapping","Upright / More Wrapping","Upright / Extreme Wrapping","Oblique / No Wrapping","Oblique / Some Wrapping","Oblique / More Wrapping","Oblique / Extreme Wrapping","Exaggerated / No Wrapping","Exaggerated / Some Wrapping","Exaggerated / More Wrapping","Exaggerated / Extreme Wrapping"]},{name:"Finials",values:["Any","No Fit","None / No loops","None / Closed loops","None / Open loops","Sharp / No loops","Sharp / Closed loops","Sharp / Open loops","Tapered / No loops","Tapered / Closed loops","Tapered / Open loops","Round / No loops","Round / Closed loops","Round / Open loops"]},{name:"X-ascent",values:["Any","No Fit","Very Low","Low","Medium","High","Very High"]}]},{name:"Latin Decorative",values:[{name:"Class",values:["Any","No Fit","Derivative","Non-standard Topology","Non-standard Elements","Non-standard Aspect","Initials","Cartoon","Picture Stems","Ornamented","Text and Background","Collage","Montage"]},{name:"Weight",values:["Any","No Fit","Very Light","Light","Thin","Book","Medium","Demi","Bold","Heavy","Black","Extra Black"]},{name:"Aspect",values:["Any","No fit","Super Condensed","Very Condensed","Condensed","Normal","Extended","Very Extended","Super Extended","Monospaced"]},{name:"Contrast",values:["Any","No Fit","None","Very Low","Low","Medium Low","Medium","Medium High","High","Very High","Horizontal Low","Horizontal Medium","Horizontal High","Broken"]},{name:"Serif Variant",values:["Any","No Fit","Cove","Obtuse Cove","Square Cove","Obtuse Square Cove","Square","Thin","Oval","Exaggerated","Triangle","Normal Sans","Obtuse Sans","Perpendicular Sans","Flared","Rounded","Script"]},{name:"Treatment",values:["Any","No Fit","None - Standard Solid Fill","White / No Fill","Patterned Fill","Complex Fill","Shaped Fill","Drawn / Distressed"]},{name:"Lining",values:["Any","No Fit","None","Inline","Outline","Engraved (Multiple Lines)","Shadow","Relief","Backdrop"]},{name:"Topology",values:["Any","No Fit","Standard","Square","Multiple Segment","Deco (E,M,S) Waco midlines","Uneven Weighting","Diverse Arms","Diverse Forms","Lombardic Forms","Upper Case in Lower Case","Implied Topology","Horseshoe E and A","Cursive","Blackletter","Swash Variance"]},{name:"Range of Characters",values:["Any","No Fit","Extended Collection","Litterals","No Lower Case","Small Caps"]}]},{name:"Latin Symbol",values:[{name:"Kind",values:["Any","No Fit","Montages","Pictures","Shapes","Scientific","Music","Expert","Patterns","Boarders","Icons","Logos","Industry specific"]},{name:"Weight",values:["No Fit"]},{name:"Spacing",values:["Any","No fit","Proportional Spaced","Monospaced"]},{name:"Aspect Ratio & Contrast",values:["No Fit"]},{name:"Aspect Ratio of Character 94",values:["Any","No Fit","No Width","Exceptionally Wide","Super Wide","Very Wide","Wide","Normal","Narrow","Very Narrow"]},{name:"Aspect Ratio of Character 119",values:["Any","No Fit","No Width","Exceptionally Wide","Super Wide","Very Wide","Wide","Normal","Narrow","Very Narrow"]},{name:"Aspect Ratio of Character 157",values:["Any","No Fit","No Width","Exceptionally Wide","Super Wide","Very Wide","Wide","Normal","Narrow","Very Narrow"]},{name:"Aspect Ratio of Character 163",values:["Any","No Fit","No Width","Exceptionally Wide","Super Wide","Very Wide","Wide","Normal","Narrow","Very Narrow"]},{name:"Aspect Ratio of Character 211",values:["Any","No Fit","No Width","Exceptionally Wide","Super Wide","Very Wide","Wide","Normal","Narrow","Very Narrow"]}]}];let er;function id(){const t=C({tag:"div",className:"settings-page__tab-content settings-table",id:"tab-content__font",innerHTML:`
			<h1>Font metadata</h1>
			<p>
				These settings will be exported with any font you save,
				and will be used around Glyphr Studio while you are making edits.
			</p>
		`});return ne(t,[Me("font","family"),Me("font","style"),Me("font","version"),Me("font","description"),Me("font","panose"),od(),se("<h2>Font metrics</h2>"),se("<h3>Key metrics</h3>"),Me("font","upm"),Me("font","ascent"),Me("font","descent"),Me("font","capHeight"),Me("font","xHeight"),se("<h3>Other metrics</h3>"),Me("font","overshoot"),Me("font","lineGap"),Me("font","weight"),Me("font","italicAngle"),se("<h2>Links</h2>"),Me("font","designer"),Me("font","designerURL"),Me("font","manufacturer"),Me("font","manufacturerURL"),Me("font","license"),Me("font","licenseURL"),Me("font","copyright"),Me("font","trademark"),se("<h2>Properties for SVG Fonts</h2>"),Me("font","variant"),Me("font","stretch"),Me("font","stemv"),Me("font","stemh"),Me("font","slope"),Me("font","underlinePosition"),Me("font","underlineThickness"),Me("font","strikethroughPosition"),Me("font","strikethroughThickness"),Me("font","overlinePosition"),Me("font","overlineThickness")]),t}function od(){const t=C({tag:"a",content:"Launch the interactive PANOSE builder"});return t.addEventListener("click",Ad),[se("<span></span>"),se("<span></span>"),t,se("<span></span>")]}function Ad(){er=xe().settings.font.panose.split(" ");let t=C({innerHTML:`
			<h1>PANOSE builder</h1>
			<p>
				PANOSE is a system that uses ten digits to describe the font's visual style.  A good overview can be found on <a href="https://monotype.github.io/panose/pan1.htm" target="_blank">Monotype's GitHub page</a>. Each digit has a special meaning based on its position. There are many details that will go into choosing the right values for each digit, so having the PANOSE reference website open will help you choose.
				<br><br>
				This builder only contains the value names for each digit. Once you are done deciding which digit goes in each spot, the result will be saved back to the Settings page.
			</p>
			<div class="settings-page__panose-builder-table">
				<div class="list__column-header">value</div>
				<div class="list__column-header">name</div>
				<div class="list__column-header">options</div>

				<div id="panose-0-value" class="panose-value">#</div>
				<div id="panose-0-name" class="panose-name">Family Kind</div>
				<option-chooser id="panose-0-chooser"></option-chooser>

				<div id="panose-1-value" class="panose-value">#</div>
				<div id="panose-1-name" class="panose-name"></div>
				<option-chooser id="panose-1-chooser"></option-chooser>

				<div id="panose-2-value" class="panose-value">#</div>
				<div id="panose-2-name" class="panose-name"></div>
				<option-chooser id="panose-2-chooser"></option-chooser>

				<div id="panose-3-value" class="panose-value">#</div>
				<div id="panose-3-name" class="panose-name"></div>
				<option-chooser id="panose-3-chooser"></option-chooser>

				<div id="panose-4-value" class="panose-value">#</div>
				<div id="panose-4-name" class="panose-name"></div>
				<option-chooser id="panose-4-chooser"></option-chooser>

				<div id="panose-5-value" class="panose-value">#</div>
				<div id="panose-5-name" class="panose-name"></div>
				<option-chooser id="panose-5-chooser"></option-chooser>

				<div id="panose-6-value" class="panose-value">#</div>
				<div id="panose-6-name" class="panose-name"></div>
				<option-chooser id="panose-6-chooser"></option-chooser>

				<div id="panose-7-value" class="panose-value">#</div>
				<div id="panose-7-name" class="panose-name"></div>
				<option-chooser id="panose-7-chooser"></option-chooser>

				<div id="panose-8-value" class="panose-value">#</div>
				<div id="panose-8-name" class="panose-name"></div>
				<option-chooser id="panose-8-chooser"></option-chooser>

				<div id="panose-9-value" class="panose-value">#</div>
				<div id="panose-9-name" class="panose-name"></div>
				<option-chooser id="panose-9-chooser"></option-chooser>
			</div>
			<br><br>
			<fancy-button id="panose-builder__save-button">Save</fancy-button>
			<fancy-button id="panose-builder__cancel-button" secondary>Cancel</fancy-button>
	`});t.querySelector("#panose-builder__save-button").addEventListener("click",()=>{let e=er.join(" ");xe().settings.font.panose=e,document.getElementById("settings-page-input__font-panose").value=e,ke()}),t.querySelector("#panose-builder__cancel-button").addEventListener("click",ke),cr(t,600),sl()}function sl(){var s;for(;er.length<10;)er.push("0");let t=y0[er[0]],e,r,n,a;for(let x=0;x<10;x++)e=document.getElementById(`panose-${x}-value`),e.innerHTML=er[x],x===0?(document.getElementById("panose-0-name").innerHTML="Family Kind",n=document.getElementById("panose-0-chooser"),n.innerHTML="",ne(n,o(y0.map(E=>E.name))),a=y0[er[0]].name,n.setAttribute("selected-name",a),n.setAttribute("selected-id",`${a} ${er[0]}`)):(n=document.getElementById(`panose-${x}-chooser`),n.innerHTML="",r="",a="",(s=t==null?void 0:t.values)!=null&&s.at(x-1)?(n.removeAttribute("disabled"),r=t.values[x-1].name,ne(n,o(t.values[x-1].values,x)),a=t.values[x-1].values[er[x]],a==="No Fit"&&(e.innerHTML="1",er[x]=1),n.setAttribute("selected-name",a),n.setAttribute("selected-id",`${a} ${er[x]}`),t.values[x-1].values.length===1&&n.setAttribute("disabled","")):(n.setAttribute("disabled",""),n.setAttribute("selected-name",""),n.setAttribute("selected-id","")),document.getElementById(`panose-${x}-name`).innerHTML=r);function o(x,E=0){let T=[];return x.forEach((p,R)=>{p=p||p.name;let N=C({tag:"option",innerHTML:p,attributes:{note:p==="No Fit"?1:R}});N.addEventListener("click",()=>{E===0?R===0?er=[0,0,0,0,0,0,0,0,0,0]:R===1?er=[1,1,1,1,1,1,1,1,1,1]:er=[R,0,0,0,0,0,0,0,0,0]:er[E]=R,sl()}),T.push(N)}),T}}function sd(){const t=C({tag:"div",id:"app__page",innerHTML:`
		<div class="content__page">
			<div class="content-page__left-area">
				<div class="content-page__nav-area">
					${_t({level:"l1",superTitle:"PAGE",title:"Settings"})}
				</div>
				<div id="content-page__panel">
				</div>
			</div>
			<div class="content-page__right-area">
			</div>
		</div>
		`});let e=t.querySelector("#content-page__panel"),r=t.querySelector(".content-page__right-area");const n=new Wo(r);n.registerTab("Project",ld()),n.registerTab("Font",id()),n.registerTab("App",nd()),ne(e,n.makeTabs()),n.selectTab("Project");let a=t.querySelector("#nav-button-l1");return a.addEventListener("click",function(){Vt(a)}),t}function Me(t,e,r=!1){const n=xe().settings,a=ad[t][e],o=a==null?void 0:a.type,s=n[t][e];let x=a.label;x=x.replaceAll(" ","&nbsp;"),x=x.replaceAll("-","&#8209;"),x=`${x}:&emsp;`;const E=C({className:"settings__label",innerHTML:x});let T=se("<span></span>"),p;(o==="Degree"||o==="Em"||o==="Number")&&(p=C({tag:"input-number",attributes:{value:parseInt(s)}}),p.addEventListener("change",N=>{let g=parseInt(N.target.value);isNaN(g)?ye("Could not save value - needs to be a number."):n[t][e]=g,r&&r()})),o||(p=C({tag:"input",attributes:{type:"text",value:o1(s)}}),p.addEventListener("change",N=>{let g=o1(N.target.value);n[t][e]=g,r&&r()})),o==="Boolean"?p=rr(n[t],e,r):T=C({tag:"pre",innerHTML:o||"Text",title:"Expected value type"}),o==="Read only"&&(p=C({innerHTML:s,className:"settings_read-only-value"})),p.setAttribute("id",`settings-page-input__${t}-${e}`);let R;return a!=null&&a.description?(R=C({tag:"info-bubble",innerHTML:(a==null?void 0:a.description)||`${t}.${e}`}),a!=null&&a.example&&(R.innerHTML+=`
			<h4>Example</h4>
			${a.example}
			`)):R=se("<span></span>"),[E,R,p,T]}function o1(t){let e=JSON.stringify(t);return e&&JSON.parse(e)||""}function ld(){const t=C({tag:"div",className:"settings-page__tab-content",id:"tab-content__project",innerHTML:`
			<h1>Project settings</h1>
			<p>These settings affect how this Glyphr Studio Project behaves.</p>
		`}),e=C({tag:"div",className:"settings-table"});ne(e,[Me("project","name"),Me("project","latestVersion"),Me("project","initialVersion"),Me("project","id"),se("<br>")]);const r=C({tag:"div",innerHTML:`
			<h2>Character ranges</h2>
			<p>
				Character ranges are based on the <a href="https://en.wikipedia.org/wiki/Unicode" target="_blank">Unicode Standard</a>,
				which assigns a <a href="https://en.wikipedia.org/wiki/Hexadecimal" target="_blank">hexadecimal number</a>
				to all possible characters in a font.
				<a href="https://en.wikipedia.org/wiki/Unicode_block" target="_blank">Wikipedia's Unicode Block page</a>
				is a good place to get familiar with all the different characters it's possible to have in a font.
			</p>
		`}),n=C({tag:"fancy-button",innerHTML:"Add standard character ranges from Unicode",onClick:Td});n.setAttribute("secondary","");const a=C({tag:"fancy-button",innerHTML:"Add a custom character range",onClick:()=>Ll()});return a.setAttribute("minimal",""),ne(r,[n,se("<span>&emsp;</span>"),a,se("<br>"),se("<br>"),se("<h3>Enabled character ranges</h3>"),se(`
			<p>
				These character ranges will be visible on the Characters page,
				and they will be exported to fonts.
				<br>
				Hiding a character range <strong>will not</strong>
				delete individual glyphs from the project.
			</p>
		`),se('<div id="enabled-range-table__wrapper"></div>'),se("<br>"),se("<br>"),se("<h3>Hidden character ranges</h3>"),se(`
			<p>
				These are ranges with characters that are saved in your project,
				but are not part of enabled character ranges.
				<br>
				These will be saved to your Glyphr Studio Project File, but
				will not be exported to fonts.
			</p>
		`),se('<div id="hidden-range-table__wrapper"></div>')]),$i(),ne(r.querySelector("#enabled-range-table__wrapper"),ll()),ne(r.querySelector("#hidden-range-table__wrapper"),xl()),ne(t,[e,r]),t}function wn(){const t=document.querySelector("#enabled-range-table__wrapper"),e=document.querySelector("#hidden-range-table__wrapper");t.innerHTML="",e.innerHTML="",ne(t,ll()),ne(e,xl())}function ll(){const t=C({tag:"div",className:"range-table__list-area"});ne(t,[se('<span class="list__column-header">Range name</span>'),se('<span class="list__column-header">Start</span>'),se('<span class="list__column-header">End</span>'),se('<span class="list__column-header">Characters</span>'),se('<span class="list__column-header">Actions</span>')]);const r=xe().settings.project.characterRanges;r.length===0&&r.unshift(new cn({name:"Basic Latin",begin:"0x20",end:"0x7F",enabled:!0}));let n=r.filter(a=>a.enabled);return n.forEach(a=>{let o=C();ne(o,[C({tag:"a",innerHTML:"Edit",onClick:()=>{Ll(a)}}),se("<span>&nbsp;&nbsp;</span>")]),n.length<=1?o.appendChild(se(`
				<span disabled="disabled" title="At least one character range must be enabled">Hide</span>
			`)):o.appendChild(C({tag:"a",innerHTML:"Hide",onClick:()=>hd(a)})),ne(t,[se(`<span>${a.name}</span>`),se(`<code>${$e(a.begin)}</code>`),se(`<code>${$e(a.end)}</code>`),se(`<span>${a.count}</span>`),o])}),t}function xl(){const t=C({tag:"div",className:"range-table__list-area"});ne(t,[se('<span class="list__column-header">Range name</span>'),se('<span class="list__column-header">Start</span>'),se('<span class="list__column-header">End</span>'),se('<span class="list__column-header">Characters</span>'),se('<span class="list__column-header">Action</span>')]);let r=xe().settings.project.characterRanges.filter(n=>!n.enabled);return r.length>0?r.forEach(n=>{let a=C();ne(a,[C({tag:"a",innerHTML:"Show",onClick:()=>cd(n)}),se("<span>&nbsp;&nbsp;</span>")]),n.count<=0?a.appendChild(C({tag:"a",innerHTML:"Remove",onClick:()=>El(n)})):a.appendChild(C({tag:"a",innerHTML:"Delete",attributes:{danger:""},onClick:()=>xd(n)})),ne(t,[se(`<span>${n.name}</span>`),se(`<code>${$e(n.begin)}</code>`),se(`<code>${$e(n.end)}</code></span>`),se(`<span>${n.count}</span>`),a])}):ne(t,se(`
			<em class="span-all-columns" style="padding-top: 10px;">
				All characters in this project are members of enabled character ranges.
			</em>
		`)),t}function El(t,e=!0){const r=z(),n=Tl(t,r.selectedCharacterRange),a=r.project.settings.project.characterRanges;let o=a.indexOf(t);if(o>-1){let s=t.name;a.splice(o,1),n&&(r.selectedCharacterRange=!1,r.selectFallbackItem("Characters"));let x=hl();if(wn(),e){ke();let E=3e3,T=`Removed character range:<br>${s}<br>No glyph data was deleted.`;x>0&&(T+=`<br><br>
					Created ${x} new hidden range${x===1?"":"s"} to cover orphaned characters.
				`,E=6e3),ye(T,E)}}else e&&(ke(),ye("Something went wrong with removing this character range."))}function xd(t){const e=C({id:"delete-character-range__wrapper",innerHTML:"<h1>Delete character range</h1>"}),r=Ed(t),n=`
	<p>
		Character ranges are a simple grouping mechanism with beginning and end points.
		They are useful to group characters with IDs that fall within that range.
		Character ranges can be created before actual character objects exist within that range.
		Alternately, character ranges can be created that overlap other character ranges.
		<br><br>
		When deleting a character range, you will have two options:
	</p>
	`,a=C({tag:"div",className:"character-range-delete__checkboxes"});ne(a,[rr(aa,"removeRange",A1),se("<label>Remove character range</label"),se("<span></span>"),se("<p>Data for this character range (name, begin, end) will be removed from the project.</p>"),se("<span></span>"),C({tag:"div",className:"character-range-delete__preview-area",content:`
				&quot;${t.name}&quot;&emsp;
				<code>${$e(t.begin)}</code>
				through
				<code>${$e(t.end)}</code>`}),se("<span>&nbsp;</span>"),se("<span>&nbsp;</span>"),rr(aa,"deleteCharacters",A1),se("<label>Delete characters</label>"),se("<span></span>"),se("<p>Characters with IDs that fall within this range will have their project data deleted.</p>"),se("<span></span>"),C({tag:"div",className:"character-range-delete__preview-area",content:`${r.map(E=>`<code>glyph-${E}</code>`).join("")}`}),se("<span>&nbsp;</span>"),se("<span>&nbsp;</span>")]);const o=C({className:"glyph-range-editor__footer"}),s=C({tag:"fancy-button",id:"character-range-delete__button",innerHTML:"Delete selected items",attributes:{danger:""},onClick:()=>ro(t,r)}),x=C({tag:"fancy-button",attributes:{secondary:""},innerHTML:"Cancel",onClick:ke});ne(o,[s,x,C({className:"delete-note",content:`<span class="info-icon">i</span>Don't worry, this action can be undone`}),se("<span></span>")]),ne(e,[se(n),a,o]),cr(e)}const aa={removeRange:!0,deleteCharacters:!1};function A1(){const t=document.getElementById("character-range-delete__button");aa.removeRange||aa.deleteCharacters?(t.removeAttribute("disabled"),t.addEventListener("click",ro)):(t.setAttribute("disabled",""),t.removeEventListener("click",ro))}function Ed(t){const e=[],r=xe(),n=t.getMemberIDs();return t.count=0,n.forEach(a=>{r.glyphs[`glyph-${a}`]&&e.push(a)}),e}function ro(t,e=[]){const r=aa.removeRange,n=aa.deleteCharacters,a=z(),o=t.name;if(n&&e.length){const s=`Deleted ${e.length} characters and removed character range: ${o}`;a.history.addWholeProjectChangePreState(s),e.forEach(x=>{const E=a.project.getItem(`glyph-${x}`);ux(E,!0),delete a.project.glyphs[`glyph-${x}`]}),a.history.addWholeProjectChangePostState(),a.project.updateAllCharacterRangeCounts(),wn(),ke(),ye(s)}r&&El(t,r&&!n)}function Ll(t=!1){const e=`
		Start and End inputs are Unicode or number IDs for the characters on each end of the range. Glyphr Studio accepts three flavors of this ID number:<br>
		<ul>
			<li><b>Unicode Number</b> - a base-16 number with a U+&nbsp;prefix. For example, <code>U+4E</code> corresponds to Capital&nbsp;N.</li>
			<li><b>Hexadecimal Number</b> - a base-16 number with a 0x&nbsp;prefix. For example, <code>0x4E</code> corresponds to Capital&nbsp;N.</li>
			<li><b>Decimal Number</b> - a base-10 number. For example, <code>78</code> corresponds to Capital&nbsp;N.</li>
		</ul>
	`,r=t?`
	<p>
		Note: All characters must have at least one parent character range.
		If you edit a range to be smaller, a new hidden character range may be created to
		contain orphaned characters.
	</p>
	`:"<span></span>",n=C({className:"glyph-range-editor__wrapper",innerHTML:`
			<h1>${t?"Edit":"Add"} character range</h1>
		`}),a=C({tag:"input",id:"glyph-range-editor__name",attributes:{type:"text"}});a.addEventListener("change",p=>{p.target.value=m0(p.target.value)});const o=C({tag:"input",id:"glyph-range-editor__begin",attributes:{type:"text"}});o.addEventListener("change",p=>{p.target.value=m0(p.target.value)});const s=C({tag:"input",id:"glyph-range-editor__end",attributes:{type:"text"}});s.addEventListener("change",p=>{p.target.value=m0(p.target.value)}),t&&(a.value=t.name,o.value=""+$e(t.begin),s.value=""+$e(t.end));const x=C({className:"glyph-range-editor__footer"}),E=C({tag:"fancy-button",innerHTML:"Save",onClick:()=>Ld(t)}),T=C({tag:"fancy-button",attributes:{secondary:""},innerHTML:"Cancel",onClick:ke});ne(x,[E,T,se("<span></span><span></span>")]),ne(n,[se("<label>Range name</label>"),se("<span></span>"),a,se("<label>Start</label>"),C({tag:"info-bubble",innerHTML:e}),o,se("<label>End</label>"),C({tag:"info-bubble",innerHTML:e}),s,se(r),x]),cr(n,500)}function Ld(t=!1){let e=document.getElementById("glyph-range-editor__name").value,r=parseInt(document.getElementById("glyph-range-editor__begin").value),n=parseInt(document.getElementById("glyph-range-editor__end").value);if(isNaN(r)){xr("Start must be a number, a Unicode code point, or a Hexadecimal number.");return}else if(isNaN(n)){xr("End must be a number, a Unicode code point, or a Hexadecimal number.");return}else if(e===""){xr("Name must not be blank.");return}if(r>n){let s=n;n=r,r=s}const a=t&&(r>t.begin||n<t.end);t?(t.begin=r,t.end=n,t.name=e,ye(`Saved changes to character range:<br>${t.name}`)):Vr({begin:r,end:n,name:e},!1,!1);let o=0;a&&(o=hl()),ke(),o>0?ye(`
		All characters must be in at least one character range.<br>
		Created ${o} new hidden range${o===1?"":"s"} to cover orphaned characters.
		`):(xe().updateAllCharacterRangeCounts(),$i()),wn()}function hl(){const t=xe();let e=0;for(const r in t.glyphs){let n=!1,a=dr(r,"glyph-");for(const o of t.settings.project.characterRanges)if(o.isWithinRange(a)){n=!0;break}n||(t.createRangeForHex(a,!0),e++)}return e>0&&(xe().updateAllCharacterRangeCounts(),$i()),e}function hd(t){const e=z();Tl(t,e.selectedCharacterRange)&&(e.selectedCharacterRange=!1),t.enabled=!1,t.getMemberIDs().indexOf(e.selectedGlyphID.substring(6))>-1&&e.selectFallbackItem("Characters"),wn(),ke(),ye(`Hid character range:<br>${t.name}`)}function cd(t){t.enabled=!0,wn(),ke(),ye(`Enabled character range:<br>${t.name}`)}function m0(t){let e=t.replace(/U\+/gi,"0x"),r=parseInt(e);return isNaN(r)?t:$e(Math.abs(r))}function $i(){xe().settings.project.characterRanges.sort((e,r)=>parseInt(e.begin)-parseInt(r.begin))}function Td(){const t=C({className:"glyph-range-chooser__wrapper",innerHTML:`
			<h1>Add character ranges from Unicode</h1>
			<h3>Preview</h3>
			<h3>Blocks</h3>
			<div class="glyph-range-chooser__preview-area">
				<div class="glyph-range-chooser__preview">
					Select a character range from the right to preview it here.
				</div>
				<h4 id="glyph-range-chooser__preview-selected"></h4>
				<span id="glyph-range-chooser__add-button-wrapper">
					<fancy-button disabled id="glyph-range-chooser__add-button">Add range to project</fancy-button>
				</span>
			</div>
			<div class="glyph-range-chooser__list-area"></div>
		`}),e=t.querySelector(".glyph-range-chooser__list-area");ne(e,[se('<span class="list__column-header">Range name</span>'),se('<span class="list__column-header">Start</span>'),se('<span class="list__column-header">End</span>')]);let r;v1.forEach(n),U1.forEach(n),w1.forEach(n),Y1.forEach(n);function n(a){r=C({className:"list__row-wrapper",onClick:()=>{Id(a)}}),ne(r,[se(`<span>${a.name}</span>`),se(`<code>${$e(a.begin)}</code>`),se(`<code>${$e(a.end)}</code>`)]),ne(e,r)}cr(t)}function Id(t){document.querySelector("#glyph-range-chooser__preview-selected").innerHTML=t.name;const e=C({tag:"fancy-button",id:"glyph-range-chooser__add-button",content:"Add range to project"});e.addEventListener("click",()=>{Vr(t,wn)});const r=document.querySelector("#glyph-range-chooser__add-button-wrapper");r.innerHTML="",r.appendChild(e);const n=document.querySelector(".glyph-range-chooser__preview");n.innerHTML="";let a,o;for(let s=t.begin;s<=t.end;s++)a=""+$e(s),o=sa(a),n.appendChild(C({className:"glyph-range-chooser__preview-tile",title:`${a}
${o}`,innerHTML:gr(a)}))}function Vr(t,e,r=!0){const n=cl(t);if(n)n.enabled=!0,r&&ye("Glyph range is already enabled for your project.");else{const a=xe();let o=a.settings.project.characterRanges;const s=new cn(t);o.push(s),s.name.includes("Controls")&&(a.settings.app.showNonCharPoints=!0),r&&ye(`Enabled character range:<br>${t.name}`),a.updateCharacterRangeCount(s),$i(),wn(),e&&e()}}function cl(t,e=!1){e||(e=xe().settings.project.characterRanges);for(let r=0;r<e.length;r++)if(e[r].begin===t.begin&&e[r].end===t.end)return e[r];return!1}function Tl(t,e){return parseInt(t.begin)===parseInt(e.begin)&&parseInt(t.end)===parseInt(e.end)}class s1{constructor(){this.queue=[],this.initialTimeStamp=!1,this.initialProject=!1}get length(){return this.queue.filter(r=>r.title!=="_whole_project_change_post_state_").length}addState(e="",r=!1){const n=N0({title:e,itemWasDeleted:r});this.queue.unshift(n),this.updateAfterSaveState()}addWholeProjectChangePreState(e=""){e=e||"Update to many items across the project.";const r=N0({title:e,wholeProjectSave:!0});if(this.queue.length)r.itemID=this.queue[0].itemID,r.page=this.queue[0].page;else{const n=z();r.itemID=n.selectedItemID,r.page=n.nav.page}this.queue.unshift(r),this.updateAfterSaveState()}addWholeProjectChangePostState(){const e=N0({title:"_whole_project_change_post_state_",wholeProjectSave:!0});if(this.queue.length)e.itemID=this.queue[0].itemID,e.page=this.queue[0].page;else{const r=z();e.itemID=r.selectedItemID,e.page=r.nav.page}this.queue.unshift(e)}updateAfterSaveState(){const e=z();e.setProjectAsUnsaved(),e.nav.panel==="History"&&ur();const r=document.getElementById("actionButtonUndo");if(r&&r.removeAttribute("disabled"),e.project.settings.app.autoSave){const n=ht();n.settings.dev.mode&&n.settings.dev.autoSave,n.addAutoSaveState()}}restoreState(){var a;const e=z();let r=this.queue;if(r.length===0){e.setProjectAsSaved();const o=document.getElementById("actionButtonUndo");o&&o.setAttribute("disabled","disabled"),ye("No more undo");return}if(r[0]&&r[1]&&r[0].itemID!==r[1].itemID)if(r[1].page&&(e.nav.page=r[1].page),r[1].itemID&&(e.selectedItemID=r[1].itemID),r.shift(),e.navigate(),(a=r[0])!=null&&a.itemWasDeleted)ye(`Restored deleted item<br>${r[0].itemState.name}`);else{ye("Navigated without undo-ing");return}let n;if(r.length===1){let o,s;e.nav.page==="Characters"?(s=this.initialProject.glyphs[e.selectedGlyphID],o=s.save()):e.nav.page==="Ligatures"?(s=this.initialProject.ligatures[e.selectedLigatureID],o=s.save()):e.nav.page==="Components"?(s=this.initialProject.components[e.selectedComponentID],o=s.save()):e.nav.page==="Kerning"&&(s=this.initialProject.kerning[e.selectedKernGroupID],o=s.save()),n={itemState:o,itemID:e.selectedItemID,title:"Initial state"}}else n=r[1];if(e.multiSelect.points.clear(),e.multiSelect.shapes.clear(),n.wholeProjectSave?(e._project=n.itemState,r[0].wholeProjectSave&&r.shift()):e.selectedItem=n.itemState,e.publish("currentItem",e.selectedItem),r.shift(),e.nav.panel==="History"&&ur(),r.length===0){e.setProjectAsSaved();const o=document.getElementById("actionButtonUndo");o&&o.setAttribute("disabled","disabled")}}}function N0({title:t="",itemWasDeleted:e=!1,wholeProjectSave:r=!1}){const n=z();let a,o;return r?(o=new bn(n.project.save(),"makeHistoryEntry"),t=t||"Changes across many items.",a=!1):(o=n.selectedItem,n.nav.page==="Kerning"?o=new qr(o.save()):o=new at(o.save()),t=t||`Change to ${o.name}`,a=n.nav.page),{timeStamp:new Date().getTime(),itemID:n.selectedItemID,itemState:o,title:t,page:a,itemWasDeleted:e,wholeProjectSave:r}}function D0(t){const e=Se,r=z();if(e.mousePosition=Il(t),t.button===3||t.button===4){rt(t);return}if(t.button,t.button===1&&(t.type==="mousedown"&&Jl(t),t.type==="mouseup"&&zl(t)),t.button===0){switch(r.selectedTool){case"resize":e.currentToolHandler=r.eventHandlers.tool_resize;break;case"pathEdit":e.currentToolHandler=r.eventHandlers.tool_pathEdit;break;case"pan":e.currentToolHandler=r.eventHandlers.tool_pan;break;case"pathAddPoint":e.currentToolHandler=r.eventHandlers.tool_pathAddPoint;break;case"newPath":e.currentToolHandler=r.eventHandlers.tool_addPath;break;case"newRectangle":e.currentToolHandler=r.eventHandlers.tool_addRectOval;break;case"newOval":e.currentToolHandler=r.eventHandlers.tool_addRectOval;break;case"kern":e.currentToolHandler=r.eventHandlers.tool_kern;break;case r.selectedTool:e.currentToolHandler=r.eventHandlers.tool_resize}e.currentToolHandler[t.type](t)}}function Il(t){let e={x:!1,y:!1};return t.offsetX||t.offsetY?(e.x=t.offsetX,e.y=t.offsetY):(t.layerX||t.layerY)&&(e.x=t.layerX,e.y=t.layerY),e}function no(){const t=z();t.multiSelect.points.clear(),t.multiSelect.shapes.clear()}function l1(){let e=z().multiSelect.shapes,r=Se.handle,n=St(Se.mousePosition.x),a=gt(Se.mousePosition.y),o=St(Se.lastX),x=gt(Se.lastY)-a,E=o-n,T=e.ratioLock,p=e.maxes;switch(r.includes("e")&&n+E<=p.xMax&&(E=0),r.includes("w")&&(n+E>=p.xMin&&(E=0),p.width+E<0&&(E=p.width*-.9)),r.includes("n")&&a<=p.yMax-x&&(x=0),r.includes("s")&&(a+x>=p.yMin&&(x=0),p.height+x<0&&(x=p.height*-.9)),r){case"n":Bt("n")&&(ve("n-resize"),e.updateShapeSize({width:0,height:x*-1,ratioLock:T,transformOrigin:"bottom-center"}));break;case"ne":Bt("ne")&&(ve("ne-resize"),e.updateShapeSize({width:E*-1,height:x*-1,ratioLock:T,transformOrigin:"bottom-left"}));break;case"e":Bt("e")&&(ve("e-resize"),e.updateShapeSize({width:E*-1,height:0,ratioLock:T,transformOrigin:"middle-left"}));break;case"be":Bt("be")&&(ve("e-resize"),e.updateShapeSize({width:E*-1,height:0,ratioLock:T,transformOrigin:"baseline-left"}));break;case"se":Bt("se")&&(ve("se-resize"),e.updateShapeSize({width:E*-1,height:x,ratioLock:T,transformOrigin:"top-left"}));break;case"s":Bt("s")&&(ve("s-resize"),e.updateShapeSize({width:0,height:x,ratioLock:T,transformOrigin:"top-center"}));break;case"sw":Bt("sw")&&(ve("sw-resize"),e.updateShapeSize({width:E,height:x,ratioLock:T,transformOrigin:"top-right"}));break;case"bw":Bt("bw")&&(ve("ew-resize"),e.updateShapeSize({width:E,height:0,ratioLock:T,transformOrigin:"baseline-right"}));break;case"w":Bt("w")&&(ve("w-resize"),e.updateShapeSize({width:E,height:0,ratioLock:T,transformOrigin:"middle-right"}));break;case"nw":Bt("nw")&&(ve("nw-resize"),e.updateShapeSize({width:E,height:x*-1,ratioLock:T,transformOrigin:"bottom-right"}));break}}function dl(t,e){const r=z();if(ol(t,e)){let n=rd(t,e);ve("pointer"),n!==Se.canvasHotspotHovering&&r.publish("editCanvasView",r.view),Se.canvasHotspotHovering=n}else Se.canvasHotspotHovering&&r.publish("editCanvasView",r.view),Se.canvasHotspotHovering=!1}function Bt(t){const e=z(),r=e.multiSelect.shapes;let n=r;r.length>1&&(n=r.virtualGlyph);let a=n.ratioLock,o=n.xLock,s=n.yLock,x=n.wLock,E=n.hLock,T=n.maxes.yMax,p=n.maxes.yMin,R=bt/2/e.view.dz,N=!0;switch(t){case"nw":N=a?!1:!s&&!E&&!o&&!x;break;case"n":N=!s&&!E;break;case"ne":N=a?!1:!s&&!E&&!x;break;case"e":N=!x;break;case"be":N=!x&&a&&p<R*-1&&T>R;break;case"se":N=a?!1:!E&&!x;break;case"s":N=!E;break;case"sw":N=a?!1:!E&&!o&&!x;break;case"bw":N=!o&&!x&&a&&p<R*-1&&T>R;break;case"w":N=!o&&!x}return N}function dd(t){let e=t.deltaY*-1;const r=z(),n=Il(t);r.nav.isOnEditCanvasPage&&(t.ctrlKey||t.metaKey)&&(rt(t),Pa(),Se.hoverPoint=!1,e>0?r.updateViewZoom(1.1,n):r.updateViewZoom(.9,n))}let bt=7,vi=40,ko=st.blue.l65,ud=st.green.l65,pd=st.gray.l65,Sd="#000",ul="#FFF",Cd=3;function gd(t){let r=z().multiSelect.shapes;if(r.length<1)return;let n=r.maxes,a=e0();pl(t,n,a.thickness,a.accent)}function Rd(t){let e=e0();Nd(t,e.accent,e.thickness)}function yd(t){let r=z().multiSelect.shapes;if(r.length<1)return;let n=r.maxes,a=e0();md(t,n,a.thickness,a.accent)}function e0(){let e=z().multiSelect.shapes,r=1,n=ko;return e.length>1?(r=Cd,n=pd):e.singleton.objType==="ComponentInstance"&&(n=ud),{thickness:r,accent:n}}function pl(t,e,r,n){const a=Ko(e,r);let o=a.rightX-a.leftX,s=a.topY-a.bottomY;t.fillStyle="transparent",t.strokeStyle=n,t.lineWidth=r,t.strokeRect(a.leftX,a.bottomY,o,s)}function md(t,e,r,n){let a=Ko(e,r);if(t.fillStyle=ul,t.lineWidth=1,t.strokeStyle=n,z().multiSelect.shapes.isRotatable()){const s=bt/2;t.lineWidth=r,Sl(t,{x:a.midX+1,y:a.topY},{x:a.midX+1,y:a.topY-vi}),t.lineWidth=1,_o(t,{x:a.midX+1,y:a.topY-vi+s})}Bt("nw")&&Hr(t,a.nw),Bt("n")&&Hr(t,a.n),Bt("ne")&&Hr(t,a.ne),Bt("e")&&Hr(t,a.e),Bt("be")&&Hr(t,a.be),Bt("se")&&Hr(t,a.se),Bt("s")&&Hr(t,a.s),Bt("sw")&&Hr(t,a.sw),Bt("bw")&&Hr(t,a.bw),Bt("w")&&Hr(t,a.w)}function Nd(t,e=ko,r=1){const n=Se;let a=n.rotationStartCenter,o=n.rotationStartMaxesTopY,s=n.mousePosition.x,x=n.mousePosition.y,E=ln({x:St(s),y:gt(x)},a);n.isShiftDown&&(E=M1(E));let p={x:a.x,y:o};yi(p,E,a),yi(p,Math.PI/-2,a);let R=!1;Math.abs(E)>Math.PI/2&&(R=!0);let N={x:pt(p.x),y:lt(p.y)},g={x:pt(a.x),y:lt(a.y)};o=lt(o);let K=zn(g,N);t.fillStyle=e,t.strokeStyle=e,t.globalAlpha=.3,t.beginPath(),t.moveTo(g.x,g.y),t.arc(g.x,g.y,K,Math.PI/-2,E*-1,R),t.closePath(),t.stroke(),t.fill(),t.strokeStyle=e,t.fillStyle=ul,t.lineWidth=r,Sl(t,{x:N.x,y:N.y},{x:g.x,y:g.y}),t.lineWidth=1,_o(t,N);let Y=ae(G1(E),1);R&&(Y-=360),Y=ae(Y,1),t.font='24px FiraGo, "Open Sans", sans-serif',t.fillStyle=e,t.globalAlpha=.8,t.fillText(""+Y+"°",g.x,o-24),t.globalAlpha=1}function x1(t,e,r){if(!r)return!1;const n=z();let a=!1,o=bt,s=Ko(r);return n.multiSelect.shapes.isRotatable()&&t>s.midX&&t<s.midX+o&&e>s.topY-vi&&e<s.topY-vi+o&&(a="rotate"),t>s.nw.x&&t<s.nw.x+o&&e>s.nw.y&&e<s.nw.y+o&&(a="nw"),t>s.n.x&&t<s.n.x+o&&e>s.n.y&&e<s.n.y+o&&(a="n"),t>s.ne.x&&t<s.ne.x+o&&e>s.ne.y&&e<s.ne.y+o&&(a="ne"),t>s.e.x&&t<s.e.x+o&&e>s.e.y&&e<s.e.y+o&&(a="e"),t>s.be.x&&t<s.be.x+o&&e>s.be.y&&e<s.be.y+o&&(a="be"),t>s.se.x&&t<s.se.x+o&&e>s.se.y&&e<s.se.y+o&&(a="se"),t>s.s.x&&t<s.s.x+o&&e>s.s.y&&e<s.s.y+o&&(a="s"),t>s.sw.x&&t<s.sw.x+o&&e>s.sw.y&&e<s.sw.y+o&&(a="sw"),t>s.bw.x&&t<s.bw.x+o&&e>s.bw.y&&e<s.bw.y+o&&(a="bw"),t>s.w.x&&t<s.w.x+o&&e>s.w.y&&e<s.w.y+o&&(a="w"),a}function Ko(t,e){const r=bt,n=bt/2;e=1;const a=1;let o=pt(t.xMin),s=ae(pt(t.xMin)+(pt(t.xMax)-pt(t.xMin))/2),x=pt(t.xMax),E=lt(t.yMax),T=lt(0),p=ae(lt(t.yMax)+(lt(t.yMin)-lt(t.yMax))/2),R=lt(t.yMin);return e>1&&(o-=e,x+=e,E-=e,R+=e),o=Ot(o,!1)-a,s=Ot(s,!1),x=Ot(x,!0)+a,E=Ot(E,!1)-a,p=Ot(p,!1),R=Ot(R,!0)+a,{leftX:o,midX:s,rightX:x,topY:E,midY:p,bottomY:R,nw:{x:o-r,y:E-r},n:{x:Ot(s-n)+a,y:E-r},ne:{x,y:E-r},e:{x,y:Ot(p-n)+a},be:{x,y:Ot(T-n)+a},se:{x,y:R},s:{x:Ot(s-n)+a,y:R},sw:{x:o-r,y:R},bw:{x:o-r,y:Ot(T-n)+a},w:{x:o-r,y:Ot(p-n)+a}}}function f0(t,e){let n=z().multiSelect.shapes,a=n.members.length,o=e0();a>0&&(t.beginPath(),n.drawShapes(t,e),t.closePath(),t.strokeStyle=o.accent,t.lineWidth=o.thickness,t.stroke())}function Dd(t,e,r){t.beginPath(),wa(e,t,r),t.closePath(),t.fillStyle=Sd,t.fill(),t.strokeStyle=ko,t.stroke(),pl(t,e.maxes,1)}function Sl(t,e,r){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(r.x,r.y),t.closePath(),t.stroke()}function Hr(t,e){t.fillRect(e.x,e.y,bt,bt),t.strokeRect(e.x,e.y,bt,bt)}function _o(t,e){t.beginPath(),t.arc(e.x,e.y,bt/2,0,Math.PI*2,!0),t.closePath(),t.fill(),t.stroke()}function E1(t){const e=z();e.multiSelect.shapes.members.forEach(n=>{n.objType!=="ComponentInstance"&&n.pathPoints.forEach(a=>{e.multiSelect.points.isSelected(a)&&Hd(a,t)})})}function Li(t,e=!1){const r=z();let n=r.multiSelect.shapes.members;e&&(n=r.selectedItem.shapes),n.forEach(a=>{a.objType!=="ComponentInstance"&&a.pathPoints.forEach((o,s)=>{if(s===0){let x=a.pathPoints[a.getNextPointNum(0)];Bd(o,t,r.multiSelect.points.isSelected(o),x)}else Od(o,t,r.multiSelect.points.isSelected(o))})})}function fd(t,e){let r=bt;e&&(t.fillStyle=st.blue.l85,t.fillRect(e.x,e.y,r,r))}function Od(t,e,r){let n=7,a=Zr.offWhite,o=Zr.accent;const s=n/2;e.fillStyle=r?a:o,e.strokeStyle=o,e.font="10px Consolas";let x=pt(t.p.x)-s,E=lt(t.p.y)-s;e.fillRect(x,E,n,n),e.strokeRect(x,E,n,n),e.fillStyle=o}function Bd(t,e,r,n){let a=Zr.offWhite,o=Zr.accent;e.fillStyle=r?a:o,e.strokeStyle=o,e.lineWidth=1;const s={x:t.p.x,y:t.p.y};let x={x:t.h2.x,y:t.h2.y};t.h2.use||(x={x:n.p.x,y:n.p.y});const E=bt/2,T=[[E*3,0],[E,E],[-E,E],[-E,-E],[E,-E]],p=[];let R=Math.atan2(x.y-s.y,x.x-s.x)*-1;!R&&R!==0&&(R=t.p.x>t.h2.x?Math.PI:0);for(const N of Object.keys(T))p.push([T[N][0]*Math.cos(R)-T[N][1]*Math.sin(R),T[N][0]*Math.sin(R)+T[N][1]*Math.cos(R)]);e.beginPath(),e.moveTo(p[0][0]+pt(t.p.x),p[0][1]+lt(t.p.y));for(const N of Object.keys(p))N>0&&e.lineTo(p[N][0]+pt(t.p.x),p[N][1]+lt(t.p.y));e.lineTo(p[0][0]+pt(t.p.x),p[0][1]+lt(t.p.y)),e.fill(),e.stroke(),e.fillStyle=o,e.fillRect(Ot(pt(t.p.x)),Ot(lt(t.p.y)),1,1)}function Hd(t,e,r=!0,n=!0){let a=Zr.accent;e.fillStyle=a,e.strokeStyle=a,e.lineWidth=1,e.font="10px Consolas",r&&t.h1.use&&o(t.h1,"1"),n&&t.h2.use&&o(t.h2,"2");function o(s,x){const E=pt(s.x),T=lt(s.y);_o(e,{x:E,y:T}),e.beginPath(),e.moveTo(pt(t.p.x),lt(t.p.y)),e.lineTo(E,T),e.closePath(),e.stroke(),e.fillText(x,E+12,T)}}var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Md(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Gd(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var a=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:function(){return t[n]}})}),r}var Cl={exports:{}};const Pd={},bd=Object.freeze(Object.defineProperty({__proto__:null,default:Pd},Symbol.toStringTag,{value:"Module"})),L1=Gd(bd);/*!
 * Paper.js v0.12.17 - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2020, Jürg Lehni & Jonathan Puckey
 * http://juerglehni.com/ & https://puckey.studio/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 *
 * Date: Thu Nov 3 21:15:36 2022 +0100
 *
 ***
 *
 * Straps.js - Class inheritance library with support for bean-style accessors
 *
 * Copyright (c) 2006 - 2020 Jürg Lehni
 * http://juerglehni.com/
 *
 * Distributed under the MIT license.
 *
 ***
 *
 * Acorn.js
 * https://marijnhaverbeke.nl/acorn/
 *
 * Acorn is a tiny, fast JavaScript parser written in JavaScript,
 * created by Marijn Haverbeke and released under an MIT license.
 *
 */(function(t){(function(e,r){e=e||L1;var n=e.window,a=e.document,o=new function(){var i=/^(statics|enumerable|beans|preserve)$/,A=[],l=A.slice,L=Object.create,h=Object.getOwnPropertyDescriptor,c=Object.defineProperty,d=A.forEach||function(D,y){for(var H=0,P=this.length;H<P;H++)D.call(y,this[H],H,this)},I=function(D,y){for(var H in this)this.hasOwnProperty(H)&&D.call(y,this[H],H,this)},u=Object.assign||function(D){for(var y=1,H=arguments.length;y<H;y++){var P=arguments[y];for(var v in P)P.hasOwnProperty(v)&&(D[v]=P[v])}return D},S=function(D,y,H){if(D){var P=h(D,"length");(P&&typeof P.value=="number"?d:I).call(D,y,H=H||D)}return H};function f(D,y,H,P,v){var F={};function M(U,w){w=w||(w=h(y,U))&&(w.get?w:w.value),typeof w=="string"&&w[0]==="#"&&(w=D[w.substring(1)]||w);var W=typeof w=="function",k=w,Z=v||W&&!w.base?w&&w.get?U in D:D[U]:null,J;(!v||!Z)&&(W&&Z&&(w.base=Z),W&&P!==!1&&(J=U.match(/^([gs]et|is)(([A-Z])(.*))$/))&&(F[J[3].toLowerCase()+J[4]]=J[2]),(!k||W||!k.get||typeof k.get!="function"||!O.isPlainObject(k))&&(k={value:k,writable:!0}),(h(D,U)||{configurable:!0}).configurable&&(k.configurable=!0,k.enumerable=H??!J),c(D,U,k))}if(y){for(var m in y)y.hasOwnProperty(m)&&!i.test(m)&&M(m);for(var m in F){var B=F[m],G=D["set"+B],b=D["get"+B]||G&&D["is"+B];b&&(P===!0||b.length===0)&&M(m,{get:b,set:G})}}return D}function O(){for(var D=0,y=arguments.length;D<y;D++){var H=arguments[D];H&&u(this,H)}return this}return f(O,{inject:function(D){if(D){var y=D.statics===!0?D:D.statics,H=D.beans,P=D.preserve;y!==D&&f(this.prototype,D,D.enumerable,H,P),f(this,y,null,H,P)}for(var v=1,F=arguments.length;v<F;v++)this.inject(arguments[v]);return this},extend:function(){for(var D=this,y,H,P=0,v,F=arguments.length;P<F&&!(y&&H);P++)v=arguments[P],y=y||v.initialize,H=H||v.prototype;return y=y||function(){D.apply(this,arguments)},H=y.prototype=H||L(this.prototype),c(H,"constructor",{value:y,writable:!0,configurable:!0}),f(y,this),arguments.length&&this.inject.apply(y,arguments),y.base=D,y}}).inject({enumerable:!1,initialize:O,set:O,inject:function(){for(var D=0,y=arguments.length;D<y;D++){var H=arguments[D];H&&f(this,H,H.enumerable,H.beans,H.preserve)}return this},extend:function(){var D=L(this);return D.inject.apply(D,arguments)},each:function(D,y){return S(this,D,y)},clone:function(){return new this.constructor(this)},statics:{set:u,each:S,create:L,define:c,describe:h,clone:function(D){return u(new D.constructor,D)},isPlainObject:function(D){var y=D!=null&&D.constructor;return y&&(y===Object||y===O||y.name==="Object")},pick:function(D,y){return D!==r?D:y},slice:function(D,y,H){return l.call(D,y,H)}}})};t.exports=o,o.inject({enumerable:!1,toString:function(){return this._id!=null?(this._class||"Object")+(this._name?" '"+this._name+"'":" @"+this._id):"{ "+o.each(this,function(i,A){if(!/^_/.test(A)){var l=typeof i;this.push(A+": "+(l==="number"?p.instance.number(i):l==="string"?"'"+i+"'":i))}},[]).join(", ")+" }"},getClassName:function(){return this._class||""},importJSON:function(i){return o.importJSON(i,this)},exportJSON:function(i){return o.exportJSON(this,i)},toJSON:function(){return o.serialize(this)},set:function(i,A){return i&&o.filter(this,i,A,this._prioritize),this}},{beans:!1,statics:{exports:{},extend:function i(){var A=i.base.apply(this,arguments),l=A.prototype._class;return l&&!o.exports[l]&&(o.exports[l]=A),A},equals:function(i,A){if(i===A)return!0;if(i&&i.equals)return i.equals(A);if(A&&A.equals)return A.equals(i);if(i&&A&&typeof i=="object"&&typeof A=="object"){if(Array.isArray(i)&&Array.isArray(A)){var l=i.length;if(l!==A.length)return!1;for(;l--;)if(!o.equals(i[l],A[l]))return!1}else{var L=Object.keys(i),l=L.length;if(l!==Object.keys(A).length)return!1;for(;l--;){var h=L[l];if(!(A.hasOwnProperty(h)&&o.equals(i[h],A[h])))return!1}}return!0}return!1},read:function(i,A,l,L){if(this===o){var h=this.peek(i,A);return i.__index++,h}var c=this.prototype,d=c._readIndex,I=A||d&&i.__index||0,u=i.length,S=i[I];if(L=L||u-I,S instanceof this||l&&l.readNull&&S==null&&L<=1)return d&&(i.__index=I+1),S&&l&&l.clone?S.clone():S;if(S=o.create(c),d&&(S.__read=!0),S=S.initialize.apply(S,I>0||I+L<u?o.slice(i,I,I+L):i)||S,d){i.__index=I+S.__read;var f=S.__filtered;f&&(i.__filtered=f,S.__filtered=r),S.__read=r}return S},peek:function(i,A){return i[i.__index=A||i.__index||0]},remain:function(i){return i.length-(i.__index||0)},readList:function(i,A,l,L){for(var h=[],c,d=A||0,I=L?d+L:i.length,u=d;u<I;u++)h.push(Array.isArray(c=i[u])?this.read(c,0,l):this.read(i,u,l,1));return h},readNamed:function(i,A,l,L,h){var c=this.getNamed(i,A),d=c!==r;if(d){var I=i.__filtered;if(!I){var u=this.getSource(i);I=i.__filtered=o.create(u),I.__unfiltered=u}I[A]=r}return this.read(d?[c]:i,l,L,h)},readSupported:function(i,A){var l=this.getSource(i),L=this,h=!1;return l&&Object.keys(l).forEach(function(c){if(c in A){var d=L.readNamed(i,c);d!==r&&(A[c]=d),h=!0}}),h},getSource:function(i){var A=i.__source;if(A===r){var l=i.length===1&&i[0];A=i.__source=l&&o.isPlainObject(l)?l:null}return A},getNamed:function(i,A){var l=this.getSource(i);if(l)return A?l[A]:i.__filtered||l},hasNamed:function(i,A){return!!this.getNamed(i,A)},filter:function(i,A,l,L){var h;function c(f){if(!(l&&f in l)&&!(h&&f in h)){var O=A[f];O!==r&&(i[f]=O)}}if(L){for(var d={},I=0,u,S=L.length;I<S;I++)(u=L[I])in A&&(c(u),d[u]=!0);h=d}return Object.keys(A.__unfiltered||A).forEach(c),i},isPlainValue:function(i,A){return o.isPlainObject(i)||Array.isArray(i)||A&&typeof i=="string"},serialize:function(i,A,l,L){A=A||{};var h=!L,c;if(h&&(A.formatter=new p(A.precision),L={length:0,definitions:{},references:{},add:function(O,D){var y="#"+O._id,H=this.references[y];if(!H){this.length++;var P=D.call(O),v=O._class;v&&P[0]!==v&&P.unshift(v),this.definitions[y]=P,H=this.references[y]=[y]}return H}}),i&&i._serialize){c=i._serialize(A,L);var d=i._class;d&&!i._compactSerialize&&(h||!l)&&c[0]!==d&&c.unshift(d)}else if(Array.isArray(i)){c=[];for(var I=0,u=i.length;I<u;I++)c[I]=o.serialize(i[I],A,l,L)}else if(o.isPlainObject(i)){c={};for(var S=Object.keys(i),I=0,u=S.length;I<u;I++){var f=S[I];c[f]=o.serialize(i[f],A,l,L)}}else typeof i=="number"?c=A.formatter.number(i,A.precision):c=i;return h&&L.length>0?[["dictionary",L.definitions],c]:c},deserialize:function(i,A,l,L,h){var c=i,d=!l,I=d&&i&&i.length&&i[0][0]==="dictionary";if(l=l||{},Array.isArray(i)){var u=i[0],S=u==="dictionary";if(i.length==1&&/^#/.test(u))return l.dictionary[u];u=o.exports[u],c=[];for(var f=u?1:0,O=i.length;f<O;f++)c.push(o.deserialize(i[f],A,l,S,I));if(u){var D=c;A?c=A(u,D,d||h):c=new u(D)}}else if(o.isPlainObject(i)){c={},L&&(l.dictionary=c);for(var y in i)c[y]=o.deserialize(i[y],A,l)}return I?c[1]:c},exportJSON:function(i,A){var l=o.serialize(i,A);return A&&A.asString==!1?l:JSON.stringify(l)},importJSON:function(i,A){return o.deserialize(typeof i=="string"?JSON.parse(i):i,function(l,L,h){var c=h&&A&&A.constructor===l,d=c?A:o.create(l.prototype);if(L.length===1&&d instanceof Ae&&(c||!(d instanceof pe))){var I=L[0];o.isPlainObject(I)&&(I.insert=!1,c&&(L=L.concat([Ae.INSERT])))}return(c?d.set:l).apply(d,L),c&&(A=null),d})},push:function(i,A){var l=A.length;if(l<4096)i.push.apply(i,A);else{var L=i.length;i.length+=l;for(var h=0;h<l;h++)i[L+h]=A[h]}return i},splice:function(i,A,l,L){var h=A&&A.length,c=l===r;l=c?i.length:l,l>i.length&&(l=i.length);for(var d=0;d<h;d++)A[d]._index=l+d;if(c)return o.push(i,A),[];var I=[l,L];A&&o.push(I,A);for(var u=i.splice.apply(i,I),d=0,S=u.length;d<S;d++)u[d]._index=r;for(var d=l+h,S=i.length;d<S;d++)i[d]._index=d;return u},capitalize:function(i){return i.replace(/\b[a-z]/g,function(A){return A.toUpperCase()})},camelize:function(i){return i.replace(/-(.)/g,function(A,l){return l.toUpperCase()})},hyphenate:function(i){return i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}}});var s={on:function(i,A){if(typeof i!="string")o.each(i,function(c,d){this.on(d,c)},this);else{var l=this._eventTypes,L=l&&l[i],h=this._callbacks=this._callbacks||{};h=h[i]=h[i]||[],h.indexOf(A)===-1&&(h.push(A),L&&L.install&&h.length===1&&L.install.call(this,i))}return this},off:function(i,A){if(typeof i!="string"){o.each(i,function(d,I){this.off(I,d)},this);return}var l=this._eventTypes,L=l&&l[i],h=this._callbacks&&this._callbacks[i],c;return h&&(!A||(c=h.indexOf(A))!==-1&&h.length===1?(L&&L.uninstall&&L.uninstall.call(this,i),delete this._callbacks[i]):c!==-1&&h.splice(c,1)),this},once:function(i,A){return this.on(i,function l(){A.apply(this,arguments),this.off(i,l)})},emit:function(i,A){var l=this._callbacks&&this._callbacks[i];if(!l)return!1;var L=o.slice(arguments,1),h=A&&A.target&&!A.currentTarget;l=l.slice(),h&&(A.currentTarget=this);for(var c=0,d=l.length;c<d;c++)if(l[c].apply(this,L)==!1){A&&A.stop&&A.stop();break}return h&&delete A.currentTarget,!0},responds:function(i){return!!(this._callbacks&&this._callbacks[i])},attach:"#on",detach:"#off",fire:"#emit",_installEvents:function(i){var A=this._eventTypes,l=this._callbacks,L=i?"install":"uninstall";if(A){for(var h in l)if(l[h].length>0){var c=A[h],d=c&&c[L];d&&d.call(this,h)}}},statics:{inject:function i(A){var l=A._events;if(l){var L={};o.each(l,function(h,c){var d=typeof h=="string",I=d?h:c,u=o.capitalize(I),S=I.substring(2).toLowerCase();L[S]=d?{}:h,I="_"+I,A["get"+u]=function(){return this[I]},A["set"+u]=function(f){var O=this[I];O&&this.off(S,O),f&&this.on(S,f),this[I]=f}}),A._eventTypes=L}return i.base.apply(this,arguments)}}},x=o.extend({_class:"PaperScope",initialize:function i(){Ze=this,this.settings=new o({applyMatrix:!0,insertItems:!0,handleSize:4,hitTolerance:0}),this.project=null,this.projects=[],this.tools=[],this._id=i._id++,i._scopes[this._id]=this;var A=i.prototype;if(!this.support){var l=Nt.getContext(1,1)||{};A.support={nativeDash:"setLineDash"in l||"mozDash"in l,nativeBlendModes:x0.nativeModes},Nt.release(l)}if(!this.agent){var L=e.navigator.userAgent.toLowerCase(),h=(/(darwin|win|mac|linux|freebsd|sunos)/.exec(L)||[])[0],c=h==="darwin"?"mac":h,d=A.agent=A.browser={platform:c};c&&(d[c]=!0),L.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,function(I,u,S,f,O){if(!d.chrome){var D=u==="opera"?f:/^(node|trident)$/.test(u)?O:S;d.version=D,d.versionNumber=parseFloat(D),u={trident:"msie",jsdom:"node"}[u]||u,d.name=u,d[u]=!0}}),d.chrome&&delete d.webkit,d.atom&&delete d.chrome}},version:"0.12.17",getView:function(){var i=this.project;return i&&i._view},getPaper:function(){return this},execute:function(i,A){},install:function(i){var A=this;o.each(["project","view","tool"],function(L){o.define(i,L,{configurable:!0,get:function(){return A[L]}})});for(var l in this)!/^_/.test(l)&&this[l]&&(i[l]=this[l])},setup:function(i){return Ze=this,this.project=new he(i),this},createCanvas:function(i,A){return Nt.getCanvas(i,A)},activate:function(){Ze=this},clear:function(){for(var i=this.projects,A=this.tools,l=i.length-1;l>=0;l--)i[l].remove();for(var l=A.length-1;l>=0;l--)A[l].remove()},remove:function(){this.clear(),delete x._scopes[this._id]},statics:new function(){function i(A){return A+="Attribute",function(l,L){return l[A](L)||l[A]("data-paper-"+L)}}return{_scopes:{},_id:0,get:function(A){return this._scopes[A]||null},getAttribute:i("get"),hasAttribute:i("has")}}}),E=o.extend(s,{initialize:function(i){this._scope=Ze,this._index=this._scope[this._list].push(this)-1,(i||!this._scope[this._reference])&&this.activate()},activate:function(){if(!this._scope)return!1;var i=this._scope[this._reference];return i&&i!==this&&i.emit("deactivate"),this._scope[this._reference]=this,this.emit("activate",i),!0},isActive:function(){return this._scope[this._reference]===this},remove:function(){return this._index==null?!1:(o.splice(this._scope[this._list],null,this._index,1),this._scope[this._reference]==this&&(this._scope[this._reference]=null),this._scope=null,!0)},getView:function(){return this._scope.getView()}}),T={findItemBoundsCollisions:function(i,A,l){function L(d){for(var I=new Array(d.length),u=0;u<d.length;u++){var S=d[u].getBounds();I[u]=[S.left,S.top,S.right,S.bottom]}return I}var h=L(i),c=!A||A===i?h:L(A);return this.findBoundsCollisions(h,c,l||0)},findCurveBoundsCollisions:function(i,A,l,L){function h(D){for(var y=Math.min,H=Math.max,P=new Array(D.length),v=0;v<D.length;v++){var F=D[v];P[v]=[y(F[0],F[2],F[4],F[6]),y(F[1],F[3],F[5],F[7]),H(F[0],F[2],F[4],F[6]),H(F[1],F[3],F[5],F[7])]}return P}var c=h(i),d=!A||A===i?c:h(A);if(L){for(var I=this.findBoundsCollisions(c,d,l||0,!1,!0),u=this.findBoundsCollisions(c,d,l||0,!0,!0),S=[],f=0,O=I.length;f<O;f++)S[f]={hor:I[f],ver:u[f]};return S}return this.findBoundsCollisions(c,d,l||0)},findBoundsCollisions:function(i,A,l,L,h){var c=!A||i===A,d=c?i:i.concat(A),I=i.length,u=d.length;function S(Ee,de,He){for(var fe=0,De=Ee.length;fe<De;){var Ne=De+fe>>>1;d[Ee[Ne]][de]<He?fe=Ne+1:De=Ne}return fe-1}for(var f=L?1:0,O=f+2,D=L?0:1,y=D+2,H=new Array(u),P=0;P<u;P++)H[P]=P;H.sort(function(Ee,de){return d[Ee][f]-d[de][f]});for(var v=[],F=new Array(I),P=0;P<u;P++){var M=H[P],m=d[M],B=c?M:M-I,G=M<I,b=c||!G,U=G?[]:null;if(v.length){var w=S(v,O,m[f]-l)+1;if(v.splice(0,w),c&&h){U=U.concat(v);for(var W=0;W<v.length;W++){var k=v[W];F[k].push(B)}}else for(var Z=m[y],J=m[D],W=0;W<v.length;W++){var k=v[W],X=d[k],j=k<I,q=c||k>=I;(h||(G&&q||b&&j)&&Z>=X[D]-l&&J<=X[y]+l)&&(G&&q&&U.push(c?k:k-I),b&&j&&F[k].push(B))}}if(G&&(i===A&&U.push(M),F[M]=U),v.length){var ee=m[O],re=S(v,O,ee);v.splice(re+1,0,M)}else v.push(M)}for(var P=0;P<F.length;P++){var le=F[P];le&&le.sort(function(de,He){return de-He})}return F}},p=o.extend({initialize:function(i){this.precision=o.pick(i,5),this.multiplier=Math.pow(10,this.precision)},number:function(i){return this.precision<16?Math.round(i*this.multiplier)/this.multiplier:i},pair:function(i,A,l){return this.number(i)+(l||",")+this.number(A)},point:function(i,A){return this.number(i.x)+(A||",")+this.number(i.y)},size:function(i,A){return this.number(i.width)+(A||",")+this.number(i.height)},rectangle:function(i,A){return this.point(i,A)+(A||",")+this.size(i,A)}});p.instance=new p;var R=new function(){var i=[[.5773502691896257],[0,.7745966692414834],[.33998104358485626,.8611363115940526],[0,.5384693101056831,.906179845938664],[.2386191860831969,.6612093864662645,.932469514203152],[0,.4058451513773972,.7415311855993945,.9491079123427585],[.1834346424956498,.525532409916329,.7966664774136267,.9602898564975363],[0,.3242534234038089,.6133714327005904,.8360311073266358,.9681602395076261],[.14887433898163122,.4333953941292472,.6794095682990244,.8650633666889845,.9739065285171717],[0,.26954315595234496,.5190961292068118,.7301520055740494,.8870625997680953,.978228658146057],[.1252334085114689,.3678314989981802,.5873179542866175,.7699026741943047,.9041172563704749,.9815606342467192],[0,.2304583159551348,.44849275103644687,.6423493394403402,.8015780907333099,.9175983992229779,.9841830547185881],[.10805494870734367,.31911236892788974,.5152486363581541,.6872929048116855,.827201315069765,.9284348836635735,.9862838086968123],[0,.20119409399743451,.3941513470775634,.5709721726085388,.7244177313601701,.8482065834104272,.937273392400706,.9879925180204854],[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]],A=[[1],[.8888888888888888,.5555555555555556],[.6521451548625461,.34785484513745385],[.5688888888888889,.47862867049936647,.23692688505618908],[.46791393457269104,.3607615730481386,.17132449237917036],[.4179591836734694,.3818300505051189,.27970539148927664,.1294849661688697],[.362683783378362,.31370664587788727,.22238103445337448,.10122853629037626],[.3302393550012598,.31234707704000286,.26061069640293544,.1806481606948574,.08127438836157441],[.29552422471475287,.26926671930999635,.21908636251598204,.1494513491505806,.06667134430868814],[.2729250867779006,.26280454451024665,.23319376459199048,.18629021092773426,.1255803694649046,.05566856711617366],[.24914704581340277,.2334925365383548,.20316742672306592,.16007832854334622,.10693932599531843,.04717533638651183],[.2325515532308739,.22628318026289723,.2078160475368885,.17814598076194574,.13887351021978725,.09212149983772845,.04048400476531588],[.2152638534631578,.2051984637212956,.18553839747793782,.15720316715819355,.12151857068790319,.08015808715976021,.03511946033175186],[.2025782419255613,.19843148532711158,.1861610000155622,.16626920581699392,.13957067792615432,.10715922046717194,.07036604748810812,.03075324199611727],[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.062253523938647894,.027152459411754096]],l=Math.abs,L=Math.sqrt,h=Math.pow,c=Math.log2||function(O){return Math.log(O)*Math.LOG2E},d=1e-12,I=112e-18;function u(O,D,y){return O<D?D:O>y?y:O}function S(O,D,y){function H(w){var W=w*134217729,k=w-W,Z=k+W,J=w-Z;return[Z,J]}var P=D*D-O*y,v=D*D+O*y;if(l(P)*3<v){var F=H(O),M=H(D),m=H(y),B=D*D,G=M[0]*M[0]-B+2*M[0]*M[1]+M[1]*M[1],b=O*y,U=F[0]*m[0]-b+F[0]*m[1]+F[1]*m[0]+F[1]*m[1];P=B-b+(G-U)}return P}function f(){var O=Math.max.apply(Math,arguments);return O&&(O<1e-8||O>1e8)?h(2,-Math.round(c(O))):0}return{EPSILON:d,MACHINE_EPSILON:I,CURVETIME_EPSILON:1e-8,GEOMETRIC_EPSILON:1e-7,TRIGONOMETRIC_EPSILON:1e-8,ANGULAR_EPSILON:1e-5,KAPPA:4*(L(2)-1)/3,isZero:function(O){return O>=-d&&O<=d},isMachineZero:function(O){return O>=-I&&O<=I},clamp:u,integrate:function(O,D,y,H){for(var P=i[H-2],v=A[H-2],F=(y-D)*.5,M=F+D,m=0,B=H+1>>1,G=H&1?v[m++]*O(M):0;m<B;){var b=F*P[m];G+=v[m++]*(O(M+b)+O(M-b))}return F*G},findRoot:function(O,D,y,H,P,v,F){for(var M=0;M<v;M++){var m=O(y),B=m/D(y),G=y-B;if(l(B)<F){y=G;break}m>0?(P=y,y=G<=H?(H+P)*.5:G):(H=y,y=G>=P?(H+P)*.5:G)}return u(y,H,P)},solveQuadratic:function(O,D,y,H,P,v){var F,M=1/0;if(l(O)<d){if(l(D)<d)return l(y)<d?-1:0;F=-y/D}else{D*=-.5;var m=S(O,D,y);if(m&&l(m)<I){var B=f(l(O),l(D),l(y));B&&(O*=B,D*=B,y*=B,m=S(O,D,y))}if(m>=-I){var G=m<0?0:L(m),b=D+(D<0?-G:G);b===0?(F=y/O,M=-F):(F=b/O,M=y/b)}}var U=0,w=P==null,W=P-d,k=v+d;return isFinite(F)&&(w||F>W&&F<k)&&(H[U++]=w?F:u(F,P,v)),M!==F&&isFinite(M)&&(w||M>W&&M<k)&&(H[U++]=w?M:u(M,P,v)),U},solveCubic:function(O,D,y,H,P,v,F){var M=f(l(O),l(D),l(y),l(H)),m,B,G,b,U;M&&(O*=M,D*=M,y*=M,H*=M);function w(re){m=re;var le=O*m;B=le+D,G=B*m+y,b=(le+B)*m+G,U=G*m+H}if(l(O)<d)O=D,B=y,G=H,m=1/0;else if(l(H)<d)B=D,G=y,m=0;else{w(-(D/O)/3);var W=U/O,k=h(l(W),1/3),Z=W<0?-1:1,J=-b/O,X=J>0?1.324717957244746*Math.max(k,L(J)):k,j=m-Z*X;if(j!==m){do w(j),j=b===0?m:m-U/b/(1+I);while(Z*j>Z*m);l(O)*m*m>l(H/m)&&(G=-H/m,B=(G-y)/m)}}var q=R.solveQuadratic(O,B,G,P,v,F),ee=v==null;return isFinite(m)&&(q===0||q>0&&m!==P[0]&&m!==P[1])&&(ee||m>v-d&&m<F+d)&&(P[q++]=ee?m:u(m,v,F)),q}}},N={_id:1,_pools:{},get:function(i){if(i){var A=this._pools[i];return A||(A=this._pools[i]={_id:1}),A._id++}else return this._id++}},g=o.extend({_class:"Point",_readIndex:!0,initialize:function(A,l){var L=typeof A,h=this.__read,c=0;if(L==="number"){var d=typeof l=="number";this._set(A,d?l:A),h&&(c=d?2:1)}else if(L==="undefined"||A===null)this._set(0,0),h&&(c=A===null?1:0);else{var I=L==="string"?A.split(/[\s,]+/)||[]:A;c=1,Array.isArray(I)?this._set(+I[0],+(I.length>1?I[1]:I[0])):"x"in I?this._set(I.x||0,I.y||0):"width"in I?this._set(I.width||0,I.height||0):"angle"in I?(this._set(I.length||0,0),this.setAngle(I.angle||0)):(this._set(0,0),c=0)}return h&&(this.__read=c),this},set:"#initialize",_set:function(i,A){return this.x=i,this.y=A,this},equals:function(i){return this===i||i&&(this.x===i.x&&this.y===i.y||Array.isArray(i)&&this.x===i[0]&&this.y===i[1])||!1},clone:function(){return new g(this.x,this.y)},toString:function(){var i=p.instance;return"{ x: "+i.number(this.x)+", y: "+i.number(this.y)+" }"},_serialize:function(i){var A=i.formatter;return[A.number(this.x),A.number(this.y)]},getLength:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},setLength:function(i){if(this.isZero()){var A=this._angle||0;this._set(Math.cos(A)*i,Math.sin(A)*i)}else{var l=i/this.getLength();R.isZero(l)&&this.getAngle(),this._set(this.x*l,this.y*l)}},getAngle:function(){return this.getAngleInRadians.apply(this,arguments)*180/Math.PI},setAngle:function(i){this.setAngleInRadians.call(this,i*Math.PI/180)},getAngleInDegrees:"#getAngle",setAngleInDegrees:"#setAngle",getAngleInRadians:function(){if(arguments.length){var i=g.read(arguments),A=this.getLength()*i.getLength();if(R.isZero(A))return NaN;var l=this.dot(i)/A;return Math.acos(l<-1?-1:l>1?1:l)}else return this.isZero()?this._angle||0:this._angle=Math.atan2(this.y,this.x)},setAngleInRadians:function(i){if(this._angle=i,!this.isZero()){var A=this.getLength();this._set(Math.cos(i)*A,Math.sin(i)*A)}},getQuadrant:function(){return this.x>=0?this.y>=0?1:4:this.y>=0?2:3}},{beans:!1,getDirectedAngle:function(){var i=g.read(arguments);return Math.atan2(this.cross(i),this.dot(i))*180/Math.PI},getDistance:function(){var i=arguments,A=g.read(i),l=A.x-this.x,L=A.y-this.y,h=l*l+L*L,c=o.read(i);return c?h:Math.sqrt(h)},normalize:function(i){i===r&&(i=1);var A=this.getLength(),l=A!==0?i/A:0,L=new g(this.x*l,this.y*l);return l>=0&&(L._angle=this._angle),L},rotate:function(i,A){if(i===0)return this.clone();i=i*Math.PI/180;var l=A?this.subtract(A):this,L=Math.sin(i),h=Math.cos(i);return l=new g(l.x*h-l.y*L,l.x*L+l.y*h),A?l.add(A):l},transform:function(i){return i?i._transformPoint(this):this},add:function(){var i=g.read(arguments);return new g(this.x+i.x,this.y+i.y)},subtract:function(){var i=g.read(arguments);return new g(this.x-i.x,this.y-i.y)},multiply:function(){var i=g.read(arguments);return new g(this.x*i.x,this.y*i.y)},divide:function(){var i=g.read(arguments);return new g(this.x/i.x,this.y/i.y)},modulo:function(){var i=g.read(arguments);return new g(this.x%i.x,this.y%i.y)},negate:function(){return new g(-this.x,-this.y)},isInside:function(){return _.read(arguments).contains(this)},isClose:function(){var i=arguments,A=g.read(i),l=o.read(i);return this.getDistance(A)<=l},isCollinear:function(){var i=g.read(arguments);return g.isCollinear(this.x,this.y,i.x,i.y)},isColinear:"#isCollinear",isOrthogonal:function(){var i=g.read(arguments);return g.isOrthogonal(this.x,this.y,i.x,i.y)},isZero:function(){var i=R.isZero;return i(this.x)&&i(this.y)},isNaN:function(){return isNaN(this.x)||isNaN(this.y)},isInQuadrant:function(i){return this.x*(i>1&&i<4?-1:1)>=0&&this.y*(i>2?-1:1)>=0},dot:function(){var i=g.read(arguments);return this.x*i.x+this.y*i.y},cross:function(){var i=g.read(arguments);return this.x*i.y-this.y*i.x},project:function(){var i=g.read(arguments),A=i.isZero()?0:this.dot(i)/i.dot(i);return new g(i.x*A,i.y*A)},statics:{min:function(){var i=arguments,A=g.read(i),l=g.read(i);return new g(Math.min(A.x,l.x),Math.min(A.y,l.y))},max:function(){var i=arguments,A=g.read(i),l=g.read(i);return new g(Math.max(A.x,l.x),Math.max(A.y,l.y))},random:function(){return new g(Math.random(),Math.random())},isCollinear:function(i,A,l,L){return Math.abs(i*L-A*l)<=Math.sqrt((i*i+A*A)*(l*l+L*L))*1e-8},isOrthogonal:function(i,A,l,L){return Math.abs(i*l+A*L)<=Math.sqrt((i*i+A*A)*(l*l+L*L))*1e-8}}},o.each(["round","ceil","floor","abs"],function(i){var A=Math[i];this[i]=function(){return new g(A(this.x),A(this.y))}},{})),K=g.extend({initialize:function(A,l,L,h){this._x=A,this._y=l,this._owner=L,this._setter=h},_set:function(i,A,l){return this._x=i,this._y=A,l||this._owner[this._setter](this),this},getX:function(){return this._x},setX:function(i){this._x=i,this._owner[this._setter](this)},getY:function(){return this._y},setY:function(i){this._y=i,this._owner[this._setter](this)},isSelected:function(){return!!(this._owner._selection&this._getSelection())},setSelected:function(i){this._owner._changeSelection(this._getSelection(),i)},_getSelection:function(){return this._setter==="setPosition"?4:0}}),Y=o.extend({_class:"Size",_readIndex:!0,initialize:function(A,l){var L=typeof A,h=this.__read,c=0;if(L==="number"){var d=typeof l=="number";this._set(A,d?l:A),h&&(c=d?2:1)}else if(L==="undefined"||A===null)this._set(0,0),h&&(c=A===null?1:0);else{var I=L==="string"?A.split(/[\s,]+/)||[]:A;c=1,Array.isArray(I)?this._set(+I[0],+(I.length>1?I[1]:I[0])):"width"in I?this._set(I.width||0,I.height||0):"x"in I?this._set(I.x||0,I.y||0):(this._set(0,0),c=0)}return h&&(this.__read=c),this},set:"#initialize",_set:function(i,A){return this.width=i,this.height=A,this},equals:function(i){return i===this||i&&(this.width===i.width&&this.height===i.height||Array.isArray(i)&&this.width===i[0]&&this.height===i[1])||!1},clone:function(){return new Y(this.width,this.height)},toString:function(){var i=p.instance;return"{ width: "+i.number(this.width)+", height: "+i.number(this.height)+" }"},_serialize:function(i){var A=i.formatter;return[A.number(this.width),A.number(this.height)]},add:function(){var i=Y.read(arguments);return new Y(this.width+i.width,this.height+i.height)},subtract:function(){var i=Y.read(arguments);return new Y(this.width-i.width,this.height-i.height)},multiply:function(){var i=Y.read(arguments);return new Y(this.width*i.width,this.height*i.height)},divide:function(){var i=Y.read(arguments);return new Y(this.width/i.width,this.height/i.height)},modulo:function(){var i=Y.read(arguments);return new Y(this.width%i.width,this.height%i.height)},negate:function(){return new Y(-this.width,-this.height)},isZero:function(){var i=R.isZero;return i(this.width)&&i(this.height)},isNaN:function(){return isNaN(this.width)||isNaN(this.height)},statics:{min:function(i,A){return new Y(Math.min(i.width,A.width),Math.min(i.height,A.height))},max:function(i,A){return new Y(Math.max(i.width,A.width),Math.max(i.height,A.height))},random:function(){return new Y(Math.random(),Math.random())}}},o.each(["round","ceil","floor","abs"],function(i){var A=Math[i];this[i]=function(){return new Y(A(this.width),A(this.height))}},{})),V=Y.extend({initialize:function(A,l,L,h){this._width=A,this._height=l,this._owner=L,this._setter=h},_set:function(i,A,l){return this._width=i,this._height=A,l||this._owner[this._setter](this),this},getWidth:function(){return this._width},setWidth:function(i){this._width=i,this._owner[this._setter](this)},getHeight:function(){return this._height},setHeight:function(i){this._height=i,this._owner[this._setter](this)}}),_=o.extend({_class:"Rectangle",_readIndex:!0,beans:!0,initialize:function(A,l,L,h){var c=arguments,d=typeof A,I;if(d==="number"?(this._set(A,l,L,h),I=4):d==="undefined"||A===null?(this._set(0,0,0,0),I=A===null?1:0):c.length===1&&(Array.isArray(A)?(this._set.apply(this,A),I=1):A.x!==r||A.width!==r?(this._set(A.x||0,A.y||0,A.width||0,A.height||0),I=1):A.from===r&&A.to===r&&(this._set(0,0,0,0),o.readSupported(c,this)&&(I=1))),I===r){var u=g.readNamed(c,"from"),S=o.peek(c),f=u.x,O=u.y,D,y;if(S&&S.x!==r||o.hasNamed(c,"to")){var H=g.readNamed(c,"to");D=H.x-f,y=H.y-O,D<0&&(f=H.x,D=-D),y<0&&(O=H.y,y=-y)}else{var P=Y.read(c);D=P.width,y=P.height}this._set(f,O,D,y),I=c.__index}var v=c.__filtered;return v&&(this.__filtered=v),this.__read&&(this.__read=I),this},set:"#initialize",_set:function(i,A,l,L){return this.x=i,this.y=A,this.width=l,this.height=L,this},clone:function(){return new _(this.x,this.y,this.width,this.height)},equals:function(i){var A=o.isPlainValue(i)?_.read(arguments):i;return A===this||A&&this.x===A.x&&this.y===A.y&&this.width===A.width&&this.height===A.height||!1},toString:function(){var i=p.instance;return"{ x: "+i.number(this.x)+", y: "+i.number(this.y)+", width: "+i.number(this.width)+", height: "+i.number(this.height)+" }"},_serialize:function(i){var A=i.formatter;return[A.number(this.x),A.number(this.y),A.number(this.width),A.number(this.height)]},getPoint:function(i){var A=i?g:K;return new A(this.x,this.y,this,"setPoint")},setPoint:function(){var i=g.read(arguments);this.x=i.x,this.y=i.y},getSize:function(i){var A=i?Y:V;return new A(this.width,this.height,this,"setSize")},_fw:1,_fh:1,setSize:function(){var i=Y.read(arguments),A=this._sx,l=this._sy,L=i.width,h=i.height;A&&(this.x+=(this.width-L)*A),l&&(this.y+=(this.height-h)*l),this.width=L,this.height=h,this._fw=this._fh=1},getLeft:function(){return this.x},setLeft:function(i){if(!this._fw){var A=i-this.x;this.width-=this._sx===.5?A*2:A}this.x=i,this._sx=this._fw=0},getTop:function(){return this.y},setTop:function(i){if(!this._fh){var A=i-this.y;this.height-=this._sy===.5?A*2:A}this.y=i,this._sy=this._fh=0},getRight:function(){return this.x+this.width},setRight:function(i){if(!this._fw){var A=i-this.x;this.width=this._sx===.5?A*2:A}this.x=i-this.width,this._sx=1,this._fw=0},getBottom:function(){return this.y+this.height},setBottom:function(i){if(!this._fh){var A=i-this.y;this.height=this._sy===.5?A*2:A}this.y=i-this.height,this._sy=1,this._fh=0},getCenterX:function(){return this.x+this.width/2},setCenterX:function(i){this._fw||this._sx===.5?this.x=i-this.width/2:(this._sx&&(this.x+=(i-this.x)*2*this._sx),this.width=(i-this.x)*2),this._sx=.5,this._fw=0},getCenterY:function(){return this.y+this.height/2},setCenterY:function(i){this._fh||this._sy===.5?this.y=i-this.height/2:(this._sy&&(this.y+=(i-this.y)*2*this._sy),this.height=(i-this.y)*2),this._sy=.5,this._fh=0},getCenter:function(i){var A=i?g:K;return new A(this.getCenterX(),this.getCenterY(),this,"setCenter")},setCenter:function(){var i=g.read(arguments);return this.setCenterX(i.x),this.setCenterY(i.y),this},getArea:function(){return this.width*this.height},isEmpty:function(){return this.width===0||this.height===0},contains:function(i){return i&&i.width!==r||(Array.isArray(i)?i:arguments).length===4?this._containsRectangle(_.read(arguments)):this._containsPoint(g.read(arguments))},_containsPoint:function(i){var A=i.x,l=i.y;return A>=this.x&&l>=this.y&&A<=this.x+this.width&&l<=this.y+this.height},_containsRectangle:function(i){var A=i.x,l=i.y;return A>=this.x&&l>=this.y&&A+i.width<=this.x+this.width&&l+i.height<=this.y+this.height},intersects:function(){var i=_.read(arguments),A=o.read(arguments)||0;return i.x+i.width>this.x-A&&i.y+i.height>this.y-A&&i.x<this.x+this.width+A&&i.y<this.y+this.height+A},intersect:function(){var i=_.read(arguments),A=Math.max(this.x,i.x),l=Math.max(this.y,i.y),L=Math.min(this.x+this.width,i.x+i.width),h=Math.min(this.y+this.height,i.y+i.height);return new _(A,l,L-A,h-l)},unite:function(){var i=_.read(arguments),A=Math.min(this.x,i.x),l=Math.min(this.y,i.y),L=Math.max(this.x+this.width,i.x+i.width),h=Math.max(this.y+this.height,i.y+i.height);return new _(A,l,L-A,h-l)},include:function(){var i=g.read(arguments),A=Math.min(this.x,i.x),l=Math.min(this.y,i.y),L=Math.max(this.x+this.width,i.x),h=Math.max(this.y+this.height,i.y);return new _(A,l,L-A,h-l)},expand:function(){var i=Y.read(arguments),A=i.width,l=i.height;return new _(this.x-A/2,this.y-l/2,this.width+A,this.height+l)},scale:function(i,A){return this.expand(this.width*i-this.width,this.height*(A===r?i:A)-this.height)}},o.each([["Top","Left"],["Top","Right"],["Bottom","Left"],["Bottom","Right"],["Left","Center"],["Top","Center"],["Right","Center"],["Bottom","Center"]],function(i,A){var l=i.join(""),L=/^[RL]/.test(l);A>=4&&(i[1]+=L?"Y":"X");var h=i[L?0:1],c=i[L?1:0],d="get"+h,I="get"+c,u="set"+h,S="set"+c,f="get"+l,O="set"+l;this[f]=function(D){var y=D?g:K;return new y(this[d](),this[I](),this,O)},this[O]=function(){var D=g.read(arguments);this[u](D.x),this[S](D.y)}},{beans:!0})),$=_.extend({initialize:function(A,l,L,h,c,d){this._set(A,l,L,h,!0),this._owner=c,this._setter=d},_set:function(i,A,l,L,h){return this._x=i,this._y=A,this._width=l,this._height=L,h||this._owner[this._setter](this),this}},new function(){var i=_.prototype;return o.each(["x","y","width","height"],function(A){var l=o.capitalize(A),L="_"+A;this["get"+l]=function(){return this[L]},this["set"+l]=function(h){this[L]=h,this._dontNotify||this._owner[this._setter](this)}},o.each(["Point","Size","Center","Left","Top","Right","Bottom","CenterX","CenterY","TopLeft","TopRight","BottomLeft","BottomRight","LeftCenter","TopCenter","RightCenter","BottomCenter"],function(A){var l="set"+A;this[l]=function(){this._dontNotify=!0,i[l].apply(this,arguments),this._dontNotify=!1,this._owner[this._setter](this)}},{isSelected:function(){return!!(this._owner._selection&2)},setSelected:function(A){var l=this._owner;l._changeSelection&&l._changeSelection(2,A)}}))}),Q=o.extend({_class:"Matrix",initialize:function i(A,l){var L=arguments,h=L.length,c=!0;if(h>=6?this._set.apply(this,L):h===1||h===2?A instanceof i?this._set(A._a,A._b,A._c,A._d,A._tx,A._ty,l):Array.isArray(A)?this._set.apply(this,l?A.concat([l]):A):c=!1:h?c=!1:this.reset(),!c)throw new Error("Unsupported matrix parameters");return this},set:"#initialize",_set:function(i,A,l,L,h,c,d){return this._a=i,this._b=A,this._c=l,this._d=L,this._tx=h,this._ty=c,d||this._changed(),this},_serialize:function(i,A){return o.serialize(this.getValues(),i,!0,A)},_changed:function(){var i=this._owner;i&&(i._applyMatrix?i.transform(null,!0):i._changed(25))},clone:function(){return new Q(this._a,this._b,this._c,this._d,this._tx,this._ty)},equals:function(i){return i===this||i&&this._a===i._a&&this._b===i._b&&this._c===i._c&&this._d===i._d&&this._tx===i._tx&&this._ty===i._ty},toString:function(){var i=p.instance;return"[["+[i.number(this._a),i.number(this._c),i.number(this._tx)].join(", ")+"], ["+[i.number(this._b),i.number(this._d),i.number(this._ty)].join(", ")+"]]"},reset:function(i){return this._a=this._d=1,this._b=this._c=this._tx=this._ty=0,i||this._changed(),this},apply:function(i,A){var l=this._owner;return l?(l.transform(null,o.pick(i,!0),A),this.isIdentity()):!1},translate:function(){var i=g.read(arguments),A=i.x,l=i.y;return this._tx+=A*this._a+l*this._c,this._ty+=A*this._b+l*this._d,this._changed(),this},scale:function(){var i=arguments,A=g.read(i),l=g.read(i,0,{readNull:!0});return l&&this.translate(l),this._a*=A.x,this._b*=A.x,this._c*=A.y,this._d*=A.y,l&&this.translate(l.negate()),this._changed(),this},rotate:function(i){i*=Math.PI/180;var A=g.read(arguments,1),l=A.x,L=A.y,h=Math.cos(i),c=Math.sin(i),d=l-l*h+L*c,I=L-l*c-L*h,u=this._a,S=this._b,f=this._c,O=this._d;return this._a=h*u+c*f,this._b=h*S+c*O,this._c=-c*u+h*f,this._d=-c*S+h*O,this._tx+=d*u+I*f,this._ty+=d*S+I*O,this._changed(),this},shear:function(){var i=arguments,A=g.read(i),l=g.read(i,0,{readNull:!0});l&&this.translate(l);var L=this._a,h=this._b;return this._a+=A.y*this._c,this._b+=A.y*this._d,this._c+=A.x*L,this._d+=A.x*h,l&&this.translate(l.negate()),this._changed(),this},skew:function(){var i=arguments,A=g.read(i),l=g.read(i,0,{readNull:!0}),L=Math.PI/180,h=new g(Math.tan(A.x*L),Math.tan(A.y*L));return this.shear(h,l)},append:function(i,A){if(i){var l=this._a,L=this._b,h=this._c,c=this._d,d=i._a,I=i._c,u=i._b,S=i._d,f=i._tx,O=i._ty;this._a=d*l+u*h,this._c=I*l+S*h,this._b=d*L+u*c,this._d=I*L+S*c,this._tx+=f*l+O*h,this._ty+=f*L+O*c,A||this._changed()}return this},prepend:function(i,A){if(i){var l=this._a,L=this._b,h=this._c,c=this._d,d=this._tx,I=this._ty,u=i._a,S=i._c,f=i._b,O=i._d,D=i._tx,y=i._ty;this._a=u*l+S*L,this._c=u*h+S*c,this._b=f*l+O*L,this._d=f*h+O*c,this._tx=u*d+S*I+D,this._ty=f*d+O*I+y,A||this._changed()}return this},appended:function(i){return this.clone().append(i)},prepended:function(i){return this.clone().prepend(i)},invert:function(){var i=this._a,A=this._b,l=this._c,L=this._d,h=this._tx,c=this._ty,d=i*L-A*l,I=null;return d&&!isNaN(d)&&isFinite(h)&&isFinite(c)&&(this._a=L/d,this._b=-A/d,this._c=-l/d,this._d=i/d,this._tx=(l*c-L*h)/d,this._ty=(A*h-i*c)/d,I=this),I},inverted:function(){return this.clone().invert()},concatenate:"#append",preConcatenate:"#prepend",chain:"#appended",_shiftless:function(){return new Q(this._a,this._b,this._c,this._d,0,0)},_orNullIfIdentity:function(){return this.isIdentity()?null:this},isIdentity:function(){return this._a===1&&this._b===0&&this._c===0&&this._d===1&&this._tx===0&&this._ty===0},isInvertible:function(){var i=this._a*this._d-this._c*this._b;return i&&!isNaN(i)&&isFinite(this._tx)&&isFinite(this._ty)},isSingular:function(){return!this.isInvertible()},transform:function(i,A,l){return arguments.length<3?this._transformPoint(g.read(arguments)):this._transformCoordinates(i,A,l)},_transformPoint:function(i,A,l){var L=i.x,h=i.y;return A||(A=new g),A._set(L*this._a+h*this._c+this._tx,L*this._b+h*this._d+this._ty,l)},_transformCoordinates:function(i,A,l){for(var L=0,h=2*l;L<h;L+=2){var c=i[L],d=i[L+1];A[L]=c*this._a+d*this._c+this._tx,A[L+1]=c*this._b+d*this._d+this._ty}return A},_transformCorners:function(i){var A=i.x,l=i.y,L=A+i.width,h=l+i.height,c=[A,l,L,l,L,h,A,h];return this._transformCoordinates(c,c,4)},_transformBounds:function(i,A,l){for(var L=this._transformCorners(i),h=L.slice(0,2),c=h.slice(),d=2;d<8;d++){var I=L[d],u=d&1;I<h[u]?h[u]=I:I>c[u]&&(c[u]=I)}return A||(A=new _),A._set(h[0],h[1],c[0]-h[0],c[1]-h[1],l)},inverseTransform:function(){return this._inverseTransform(g.read(arguments))},_inverseTransform:function(i,A,l){var L=this._a,h=this._b,c=this._c,d=this._d,I=this._tx,u=this._ty,S=L*d-h*c,f=null;if(S&&!isNaN(S)&&isFinite(I)&&isFinite(u)){var O=i.x-this._tx,D=i.y-this._ty;A||(A=new g),f=A._set((O*d-D*c)/S,(D*L-O*h)/S,l)}return f},decompose:function(){var i=this._a,A=this._b,l=this._c,L=this._d,h=i*L-A*l,c=Math.sqrt,d=Math.atan2,I=180/Math.PI,u,S,f;if(i!==0||A!==0){var O=c(i*i+A*A);u=Math.acos(i/O)*(A>0?1:-1),S=[O,h/O],f=[d(i*l+A*L,O*O),0]}else if(l!==0||L!==0){var D=c(l*l+L*L);u=Math.asin(l/D)*(L>0?1:-1),S=[h/D,D],f=[0,d(i*l+A*L,D*D)]}else u=0,f=S=[0,0];return{translation:this.getTranslation(),rotation:u*I,scaling:new g(S),skewing:new g(f[0]*I,f[1]*I)}},getValues:function(){return[this._a,this._b,this._c,this._d,this._tx,this._ty]},getTranslation:function(){return new g(this._tx,this._ty)},getScaling:function(){return this.decompose().scaling},getRotation:function(){return this.decompose().rotation},applyToContext:function(i){this.isIdentity()||i.transform(this._a,this._b,this._c,this._d,this._tx,this._ty)}},o.each(["a","b","c","d","tx","ty"],function(i){var A=o.capitalize(i),l="_"+i;this["get"+A]=function(){return this[l]},this["set"+A]=function(L){this[l]=L,this._changed()}},{})),Te=o.extend({_class:"Line",initialize:function(A,l,L,h,c){var d=!1;arguments.length>=4?(this._px=A,this._py=l,this._vx=L,this._vy=h,d=c):(this._px=A.x,this._py=A.y,this._vx=l.x,this._vy=l.y,d=L),d||(this._vx-=this._px,this._vy-=this._py)},getPoint:function(){return new g(this._px,this._py)},getVector:function(){return new g(this._vx,this._vy)},getLength:function(){return this.getVector().getLength()},intersect:function(i,A){return Te.intersect(this._px,this._py,this._vx,this._vy,i._px,i._py,i._vx,i._vy,!0,A)},getSide:function(i,A){return Te.getSide(this._px,this._py,this._vx,this._vy,i.x,i.y,!0,A)},getDistance:function(i){return Math.abs(this.getSignedDistance(i))},getSignedDistance:function(i){return Te.getSignedDistance(this._px,this._py,this._vx,this._vy,i.x,i.y,!0)},isCollinear:function(i){return g.isCollinear(this._vx,this._vy,i._vx,i._vy)},isOrthogonal:function(i){return g.isOrthogonal(this._vx,this._vy,i._vx,i._vy)},statics:{intersect:function(i,A,l,L,h,c,d,I,u,S){u||(l-=i,L-=A,d-=h,I-=c);var f=l*I-L*d;if(!R.isMachineZero(f)){var O=i-h,D=A-c,y=(d*D-I*O)/f,H=(l*D-L*O)/f,P=1e-12,v=-P,F=1+P;if(S||v<y&&y<F&&v<H&&H<F)return S||(y=y<=0?0:y>=1?1:y),new g(i+y*l,A+y*L)}},getSide:function(i,A,l,L,h,c,d,I){d||(l-=i,L-=A);var u=h-i,S=c-A,f=u*L-S*l;return!I&&R.isMachineZero(f)&&(f=(u*l+u*l)/(l*l+L*L),f>=0&&f<=1&&(f=0)),f<0?-1:f>0?1:0},getSignedDistance:function(i,A,l,L,h,c,d){return d||(l-=i,L-=A),l===0?L>0?h-i:i-h:L===0?l<0?c-A:A-c:((h-i)*L-(c-A)*l)/(L>l?L*Math.sqrt(1+l*l/(L*L)):l*Math.sqrt(1+L*L/(l*l)))},getDistance:function(i,A,l,L,h,c,d){return Math.abs(Te.getSignedDistance(i,A,l,L,h,c,d))}}}),he=E.extend({_class:"Project",_list:"projects",_reference:"project",_compactSerialize:!0,initialize:function(A){E.call(this,!0),this._children=[],this._namedChildren={},this._activeLayer=null,this._currentStyle=new rn(null,null,this),this._view=mt.create(this,A||Nt.getCanvas(1,1)),this._selectionItems={},this._selectionCount=0,this._updateVersion=0},_serialize:function(i,A){return o.serialize(this._children,i,!0,A)},_changed:function(i,A){if(i&1){var l=this._view;l&&(l._needsUpdate=!0,!l._requested&&l._autoUpdate&&l.requestUpdate())}var L=this._changes;if(L&&A){var h=this._changesById,c=A._id,d=h[c];d?d.flags|=i:L.push(h[c]={item:A,flags:i})}},clear:function(){for(var i=this._children,A=i.length-1;A>=0;A--)i[A].remove()},isEmpty:function(){return!this._children.length},remove:function i(){return i.base.call(this)?(this._view&&this._view.remove(),!0):!1},getView:function(){return this._view},getCurrentStyle:function(){return this._currentStyle},setCurrentStyle:function(i){this._currentStyle.set(i)},getIndex:function(){return this._index},getOptions:function(){return this._scope.settings},getLayers:function(){return this._children},getActiveLayer:function(){return this._activeLayer||new pe({project:this,insert:!0})},getSymbolDefinitions:function(){var i=[],A={};return this.getItems({class:Ye,match:function(l){var L=l._definition,h=L._id;return A[h]||(A[h]=!0,i.push(L)),!1}}),i},getSymbols:"getSymbolDefinitions",getSelectedItems:function(){var i=this._selectionItems,A=[];for(var l in i){var L=i[l],h=L._selection;h&1&&L.isInserted()?A.push(L):h||this._updateSelection(L)}return A},_updateSelection:function(i){var A=i._id,l=this._selectionItems;i._selection?l[A]!==i&&(this._selectionCount++,l[A]=i):l[A]===i&&(this._selectionCount--,delete l[A])},selectAll:function(){for(var i=this._children,A=0,l=i.length;A<l;A++)i[A].setFullySelected(!0)},deselectAll:function(){var i=this._selectionItems;for(var A in i)i[A].setFullySelected(!1)},addLayer:function(i){return this.insertLayer(r,i)},insertLayer:function(i,A){if(A instanceof pe){A._remove(!1,!0),o.splice(this._children,[A],i,0),A._setProject(this,!0);var l=A._name;l&&A.setName(l),this._changes&&A._changed(5),this._activeLayer||(this._activeLayer=A)}else A=null;return A},_insertItem:function(i,A,l){return A=this.insertLayer(i,A)||(this._activeLayer||this._insertItem(r,new pe(Ae.NO_INSERT),!0)).insertChild(i,A),l&&A.activate&&A.activate(),A},getItems:function(i){return Ae._getItems(this,i)},getItem:function(i){return Ae._getItems(this,i,null,null,!0)[0]||null},importJSON:function(i){this.activate();var A=this._activeLayer;return o.importJSON(i,A&&A.isEmpty()&&A)},removeOn:function(i){var A=this._removeSets;if(A){i==="mouseup"&&(A.mousedrag=null);var l=A[i];if(l){for(var L in l){var h=l[L];for(var c in A){var d=A[c];d&&d!=l&&delete d[h._id]}h.remove()}A[i]=null}}},draw:function(i,A,l){this._updateVersion++,i==null||i.save(),A.applyToContext(i);for(var L=this._children,h=new o({offset:new g(0,0),pixelRatio:l,viewMatrix:A.isIdentity()?null:A,matrices:[new Q],updateMatrix:!0}),c=0,d=L.length;c<d;c++)L[c].draw(i,h);if(i.restore(),this._selectionCount>0){i==null||i.save(),i.strokeWidth=1;var I=this._selectionItems,u=this._scope.settings.handleSize,S=this._updateVersion;for(var f in I)I[f]._drawSelection(i,A,u,I,S);i.restore()}}}),Ae=o.extend(s,{statics:{extend:function i(A){return A._serializeFields&&(A._serializeFields=o.set({},this.prototype._serializeFields,A._serializeFields)),i.base.apply(this,arguments)},INSERT:{insert:!0},NO_INSERT:{insert:!1}},_class:"Item",_name:null,_applyMatrix:!0,_canApplyMatrix:!0,_canScaleStroke:!1,_pivot:null,_visible:!0,_blendMode:"normal",_opacity:1,_locked:!1,_guide:!1,_clipMask:!1,_selection:0,_selectBounds:!0,_selectChildren:!1,_serializeFields:{name:null,applyMatrix:null,matrix:new Q,pivot:null,visible:!0,blendMode:"normal",opacity:1,locked:!1,guide:!1,clipMask:!1,selected:!1,data:{}},_prioritize:["applyMatrix"]},new function(){var i=["onMouseDown","onMouseUp","onMouseDrag","onClick","onDoubleClick","onMouseMove","onMouseEnter","onMouseLeave"];return o.each(i,function(A){this._events[A]={install:function(l){this.getView()._countItemEvent(l,1)},uninstall:function(l){this.getView()._countItemEvent(l,-1)}}},{_events:{onFrame:{install:function(){this.getView()._animateItem(this,!0)},uninstall:function(){this.getView()._animateItem(this,!1)}},onLoad:{},onError:{}},statics:{_itemHandlers:i}})},{initialize:function(){},_initialize:function(i,A){var l=i&&o.isPlainObject(i),L=l&&i.internal===!0,h=this._matrix=new Q,c=l&&i.project||Ze.project,d=Ze.settings;return this._id=L?null:N.get(),this._parent=this._index=null,this._applyMatrix=this._canApplyMatrix&&d.applyMatrix,A&&h.translate(A),h._owner=this,this._style=new rn(c._currentStyle,this,c),L||l&&i.insert==!1||!d.insertItems&&!(l&&i.insert==!0)?this._setProject(c):(l&&i.parent||c)._insertItem(r,this,!0),l&&i!==Ae.NO_INSERT&&i!==Ae.INSERT&&this.set(i,{internal:!0,insert:!0,project:!0,parent:!0}),l},_serialize:function(i,A){var l={},L=this;function h(c){for(var d in c){var I=L[d];o.equals(I,d==="leading"?c.fontSize*1.2:c[d])||(l[d]=o.serialize(I,i,d!=="data",A))}}return h(this._serializeFields),this instanceof ce||h(this._style._defaults),[this._class,l]},_changed:function(i){var A=this._symbol,l=this._parent||A,L=this._project;i&8&&(this._bounds=this._position=this._decomposed=r),i&16&&(this._globalMatrix=r),l&&i&72&&Ae._clearBoundsCache(l),i&2&&Ae._clearBoundsCache(this),L&&L._changed(i,this),A&&A._changed(i)},getId:function(){return this._id},getName:function(){return this._name},setName:function(i){if(this._name&&this._removeNamed(),i===+i+"")throw new Error("Names consisting only of numbers are not supported.");var A=this._getOwner();if(i&&A){var l=A._children,L=A._namedChildren;(L[i]=L[i]||[]).push(this),i in l||(l[i]=this)}this._name=i||r,this._changed(256)},getStyle:function(){return this._style},setStyle:function(i){this.getStyle().set(i)}},o.each(["locked","visible","blendMode","opacity","guide"],function(i){var A=o.capitalize(i),l="_"+i,L={locked:256,visible:265};this["get"+A]=function(){return this[l]},this["set"+A]=function(h){h!=this[l]&&(this[l]=h,this._changed(L[i]||257))}},{}),{beans:!0,getSelection:function(){return this._selection},setSelection:function(i){if(i!==this._selection){this._selection=i;var A=this._project;A&&(A._updateSelection(this),this._changed(257))}},_changeSelection:function(i,A){var l=this._selection;this.setSelection(A?l|i:l&~i)},isSelected:function(){if(this._selectChildren){for(var i=this._children,A=0,l=i.length;A<l;A++)if(i[A].isSelected())return!0}return!!(this._selection&1)},setSelected:function(i){if(this._selectChildren)for(var A=this._children,l=0,L=A.length;l<L;l++)A[l].setSelected(i);this._changeSelection(1,i)},isFullySelected:function(){var i=this._children,A=!!(this._selection&1);if(i&&A){for(var l=0,L=i.length;l<L;l++)if(!i[l].isFullySelected())return!1;return!0}return A},setFullySelected:function(i){var A=this._children;if(A)for(var l=0,L=A.length;l<L;l++)A[l].setFullySelected(i);this._changeSelection(1,i)},isClipMask:function(){return this._clipMask},setClipMask:function(i){this._clipMask!=(i=!!i)&&(this._clipMask=i,i&&(this.setFillColor(null),this.setStrokeColor(null)),this._changed(257),this._parent&&this._parent._changed(2048))},getData:function(){return this._data||(this._data={}),this._data},setData:function(i){this._data=i},getPosition:function(i){var A=i?g:K,l=this._position||(this._position=this._getPositionFromBounds());return new A(l.x,l.y,this,"setPosition")},setPosition:function(){this.translate(g.read(arguments).subtract(this.getPosition(!0)))},_getPositionFromBounds:function(i){return this._pivot?this._matrix._transformPoint(this._pivot):(i||this.getBounds()).getCenter(!0)},getPivot:function(){var i=this._pivot;return i?new K(i.x,i.y,this,"setPivot"):null},setPivot:function(){this._pivot=g.read(arguments,0,{clone:!0,readNull:!0}),this._position=r}},o.each({getStrokeBounds:{stroke:!0},getHandleBounds:{handle:!0},getInternalBounds:{internal:!0}},function(i,A){this[A]=function(l){return this.getBounds(l,i)}},{beans:!0,getBounds:function(i,A){var l=A||i instanceof Q,L=o.set({},l?A:i,this._boundsOptions);(!L.stroke||this.getStrokeScaling())&&(L.cacheItem=this);var h=this._getCachedBounds(l&&i,L).rect;return arguments.length?h:new $(h.x,h.y,h.width,h.height,this,"setBounds")},setBounds:function(){var i=_.read(arguments),A=this.getBounds(),l=this._matrix,L=new Q,h=i.getCenter();L.translate(h),(i.width!=A.width||i.height!=A.height)&&(l.isInvertible()||(l.set(l._backup||new Q().translate(l.getTranslation())),A=this.getBounds()),L.scale(A.width!==0?i.width/A.width:0,A.height!==0?i.height/A.height:0)),h=A.getCenter(),L.translate(-h.x,-h.y),this.transform(L)},_getBounds:function(i,A){var l=this._children;return!l||!l.length?new _:(Ae._updateBoundsCache(this,A.cacheItem),Ae._getBounds(l,i,A))},_getBoundsCacheKey:function(i,A){return[i.stroke?1:0,i.handle?1:0,A?1:0].join("")},_getCachedBounds:function(i,A,l){i=i&&i._orNullIfIdentity();var L=A.internal&&!l,h=A.cacheItem,c=L?null:this._matrix._orNullIfIdentity(),d=h&&(!i||i.equals(c))&&this._getBoundsCacheKey(A,L),I=this._bounds;if(Ae._updateBoundsCache(this._parent||this._symbol,h),d&&I&&d in I){var u=I[d];return{rect:u.rect.clone(),nonscaling:u.nonscaling}}var S=this._getBounds(i||c,A),f=S.rect||S,O=this._style,D=S.nonscaling||O.hasStroke()&&!O.getStrokeScaling();if(d){I||(this._bounds=I={});var u=I[d]={rect:f.clone(),nonscaling:D,internal:L}}return{rect:f,nonscaling:D}},_getStrokeMatrix:function(i,A){var l=this.getStrokeScaling()?null:A&&A.internal?this:this._parent||this._symbol&&this._symbol._item,L=l?l.getViewMatrix().invert():i;return L&&L._shiftless()},statics:{_updateBoundsCache:function(i,A){if(i&&A){var l=A._id,L=i._boundsCache=i._boundsCache||{ids:{},list:[]};L.ids[l]||(L.list.push(A),L.ids[l]=A)}},_clearBoundsCache:function(i){var A=i._boundsCache;if(A){i._bounds=i._position=i._boundsCache=r;for(var l=0,L=A.list,h=L.length;l<h;l++){var c=L[l];c!==i&&(c._bounds=c._position=r,c._boundsCache&&Ae._clearBoundsCache(c))}}},_getBounds:function(i,A,l){var L=1/0,h=-L,c=L,d=h,I=!1;l=l||{};for(var u=0,S=i.length;u<S;u++){var f=i[u];if(f._visible&&!f.isEmpty(!0)){var O=f._getCachedBounds(A&&A.appended(f._matrix),l,!0),D=O.rect;L=Math.min(D.x,L),c=Math.min(D.y,c),h=Math.max(D.x+D.width,h),d=Math.max(D.y+D.height,d),O.nonscaling&&(I=!0)}}return{rect:isFinite(L)?new _(L,c,h-L,d-c):new _,nonscaling:I}}}}),{beans:!0,_decompose:function(){return this._applyMatrix?null:this._decomposed||(this._decomposed=this._matrix.decompose())},getRotation:function(){var i=this._decompose();return i?i.rotation:0},setRotation:function(i){var A=this.getRotation();if(A!=null&&i!=null){var l=this._decomposed;this.rotate(i-A),l&&(l.rotation=i,this._decomposed=l)}},getScaling:function(){var i=this._decompose(),A=i&&i.scaling;return new K(A?A.x:1,A?A.y:1,this,"setScaling")},setScaling:function(){var i=this.getScaling(),A=g.read(arguments,0,{clone:!0,readNull:!0});if(i&&A&&!i.equals(A)){var l=this.getRotation(),L=this._decomposed,h=new Q,c=R.isZero;if(c(i.x)||c(i.y))h.translate(L.translation),l&&h.rotate(l),h.scale(A.x,A.y),this._matrix.set(h);else{var d=this.getPosition(!0);h.translate(d),l&&h.rotate(l),h.scale(A.x/i.x,A.y/i.y),l&&h.rotate(-l),h.translate(d.negate()),this.transform(h)}L&&(L.scaling=A,this._decomposed=L)}},getMatrix:function(){return this._matrix},setMatrix:function(){var i=this._matrix;i.set.apply(i,arguments)},getGlobalMatrix:function(i){var A=this._globalMatrix;if(A)for(var l=this._parent,L=[];l;){if(!l._globalMatrix){A=null;for(var h=0,c=L.length;h<c;h++)L[h]._globalMatrix=null;break}L.push(l),l=l._parent}if(!A){A=this._globalMatrix=this._matrix.clone();var l=this._parent;l&&A.prepend(l.getGlobalMatrix(!0))}return i?A:A.clone()},getViewMatrix:function(){return this.getGlobalMatrix().prepend(this.getView()._matrix)},getApplyMatrix:function(){return this._applyMatrix},setApplyMatrix:function(i){(this._applyMatrix=this._canApplyMatrix&&!!i)&&this.transform(null,!0)},getTransformContent:"#getApplyMatrix",setTransformContent:"#setApplyMatrix"},{getProject:function(){return this._project},_setProject:function(i,A){if(this._project!==i){this._project&&this._installEvents(!1),this._project=i;for(var l=this._children,L=0,h=l&&l.length;L<h;L++)l[L]._setProject(i);A=!0}A&&this._installEvents(!0)},getView:function(){return this._project._view},_installEvents:function i(A){i.base.call(this,A);for(var l=this._children,L=0,h=l&&l.length;L<h;L++)l[L]._installEvents(A)},getLayer:function(){for(var i=this;i=i._parent;)if(i instanceof pe)return i;return null},getParent:function(){return this._parent},setParent:function(i){return i.addChild(this)},_getOwner:"#getParent",getChildren:function(){return this._children},setChildren:function(i){this.removeChildren(),this.addChildren(i)},getFirstChild:function(){return this._children&&this._children[0]||null},getLastChild:function(){return this._children&&this._children[this._children.length-1]||null},getNextSibling:function(){var i=this._getOwner();return i&&i._children[this._index+1]||null},getPreviousSibling:function(){var i=this._getOwner();return i&&i._children[this._index-1]||null},getIndex:function(){return this._index},equals:function(i){return i===this||i&&this._class===i._class&&this._style.equals(i._style)&&this._matrix.equals(i._matrix)&&this._locked===i._locked&&this._visible===i._visible&&this._blendMode===i._blendMode&&this._opacity===i._opacity&&this._clipMask===i._clipMask&&this._guide===i._guide&&this._equals(i)||!1},_equals:function(i){return o.equals(this._children,i._children)},clone:function(i){var A=new this.constructor(Ae.NO_INSERT),l=this._children,L=o.pick(i?i.insert:r,i===r||i===!0),h=o.pick(i?i.deep:r,!0);l&&A.copyAttributes(this),(!l||h)&&A.copyContent(this),l||A.copyAttributes(this),L&&A.insertAbove(this);var c=this._name,d=this._parent;if(c&&d){for(var l=d._children,I=c,u=1;l[c];)c=I+" "+u++;c!==I&&A.setName(c)}return A},copyContent:function(i){for(var A=i._children,l=0,L=A&&A.length;l<L;l++)this.addChild(A[l].clone(!1),!0)},copyAttributes:function(i,A){this.setStyle(i._style);for(var l=["_locked","_visible","_blendMode","_opacity","_clipMask","_guide"],L=0,h=l.length;L<h;L++){var c=l[L];i.hasOwnProperty(c)&&(this[c]=i[c])}A||this._matrix.set(i._matrix,!0),this.setApplyMatrix(i._applyMatrix),this.setPivot(i._pivot),this.setSelection(i._selection);var d=i._data,I=i._name;this._data=d?o.clone(d):null,I&&this.setName(I)},rasterize:function(i,A){var l,L,h;o.isPlainObject(i)?(l=i.resolution,L=i.insert,h=i.raster):(l=i,L=A),h||(h=new we(Ae.NO_INSERT));var c=this.getStrokeBounds(),d=(l||this.getView().getResolution())/72,I=c.getTopLeft().floor(),u=c.getBottomRight().ceil(),S=new Y(u.subtract(I)),f=S.multiply(d);if(h.setSize(f,!0),!f.isZero()){var O=h.getContext(!0),D=new Q().scale(d).translate(I.negate());O==null||O.save(),D.applyToContext(O),this.draw(O,new o({matrices:[D]})),O.restore()}return h._matrix.set(new Q().translate(I.add(S.divide(2))).scale(1/d)),(L===r||L)&&h.insertAbove(this),h},contains:function(){var i=this._matrix;return i.isInvertible()&&!!this._contains(i._inverseTransform(g.read(arguments)))},_contains:function(i){var A=this._children;if(A){for(var l=A.length-1;l>=0;l--)if(A[l].contains(i))return!0;return!1}return i.isInside(this.getInternalBounds())},isInside:function(){return _.read(arguments).contains(this.getBounds())},_asPathItem:function(){return new Oe.Rectangle({rectangle:this.getInternalBounds(),matrix:this._matrix,insert:!1})},intersects:function(i,A){return i instanceof Ae?this._asPathItem().getIntersections(i._asPathItem(),null,A,!0).length>0:!1}},new function(){function i(){var L=arguments;return this._hitTest(g.read(L),ot.getOptions(L))}function A(){var L=arguments,h=g.read(L),c=ot.getOptions(L),d=[];return this._hitTest(h,new o({all:d},c)),d}function l(L,h,c,d){var I=this._children;if(I)for(var u=I.length-1;u>=0;u--){var S=I[u],f=S!==d&&S._hitTest(L,h,c);if(f&&!h.all)return f}return null}return he.inject({hitTest:i,hitTestAll:A,_hitTest:l}),{hitTest:i,hitTestAll:A,_hitTestChildren:l}},{_hitTest:function(i,A,l){if(this._locked||!this._visible||this._guide&&!A.guides||this.isEmpty())return null;var L=this._matrix,h=l?l.appended(L):this.getGlobalMatrix().prepend(this.getView()._matrix),c=Math.max(A.tolerance,1e-12),d=A._tolerancePadding=new Y(Oe._getStrokePadding(c,L._shiftless().invert()));if(i=L._inverseTransform(i),!i||!this._children&&!this.getBounds({internal:!0,stroke:!0,handle:!0}).expand(d.multiply(2))._containsPoint(i))return null;var I=!(A.guides&&!this._guide||A.selected&&!this.isSelected()||A.type&&A.type!==o.hyphenate(this._class)||A.class&&!(this instanceof A.class)),u=A.match,S=this,f,O;function D(m){return m&&u&&!u(m)&&(m=null),m&&A.all&&A.all.push(m),m}function y(m,B){var G=B?f["get"+B]():S.getPosition();if(i.subtract(G).divide(d).length<=1)return new ot(m,S,{name:B?o.hyphenate(B):m,point:G})}var H=A.position,P=A.center,v=A.bounds;if(I&&this._parent&&(H||P||v)){if((P||v)&&(f=this.getInternalBounds()),O=H&&y("position")||P&&y("center","Center"),!O&&v)for(var F=["TopLeft","TopRight","BottomLeft","BottomRight","LeftCenter","TopCenter","RightCenter","BottomCenter"],M=0;M<8&&!O;M++)O=y("bounds",F[M]);O=D(O)}return O||(O=this._hitTestChildren(i,A,h)||I&&D(this._hitTestSelf(i,A,h,this.getStrokeScaling()?null:h._shiftless().invert()))||null),O&&O.point&&(O.point=L.transform(O.point)),O},_hitTestSelf:function(i,A){if(A.fill&&this.hasFill()&&this._contains(i))return new ot("fill",this)},matches:function(i,A){function l(d,I){for(var u in d)if(d.hasOwnProperty(u)){var S=d[u],f=I[u];if(o.isPlainObject(S)&&o.isPlainObject(f)){if(!l(S,f))return!1}else if(!o.equals(S,f))return!1}return!0}var L=typeof i;if(L==="object"){for(var h in i)if(i.hasOwnProperty(h)&&!this.matches(h,i[h]))return!1;return!0}else{if(L==="function")return i(this);if(i==="match")return A(this);var c=/^(empty|editable)$/.test(i)?this["is"+o.capitalize(i)]():i==="type"?o.hyphenate(this._class):this[i];if(i==="class"){if(typeof A=="function")return this instanceof A;c=this._class}if(typeof A=="function")return!!A(c);if(A){if(A.test)return A.test(c);if(o.isPlainObject(A))return l(A,c)}return o.equals(c,A)}},getItems:function(i){return Ae._getItems(this,i,this._matrix)},getItem:function(i){return Ae._getItems(this,i,this._matrix,null,!0)[0]||null},statics:{_getItems:function i(A,l,L,h,c){if(!h){var d=typeof l=="object"&&l,I=d&&d.overlapping,u=d&&d.inside,S=I||u,D=S&&_.read([S]);h={items:[],recursive:d&&d.recursive!==!1,inside:!!u,overlapping:!!I,rect:D,path:I&&new Oe.Rectangle({rectangle:D,insert:!1})},d&&(l=o.filter({},l,{recursive:!0,inside:!0,overlapping:!0}))}var f=A._children,O=h.items,D=h.rect;L=D&&(L||new Q);for(var y=0,H=f&&f.length;y<H;y++){var P=f[y],v=L&&L.appended(P._matrix),F=!0;if(D){var S=P.getBounds(v);if(!D.intersects(S))continue;D.contains(S)||h.overlapping&&(S.contains(D)||h.path.intersects(P,v))||(F=!1)}if(F&&P.matches(l)&&(O.push(P),c)||(h.recursive!==!1&&i(P,l,v,h,c),c&&O.length>0))break}return O}}},{importJSON:function(i){var A=o.importJSON(i,this);return A!==this?this.addChild(A):A},addChild:function(i){return this.insertChild(r,i)},insertChild:function(i,A){var l=A?this.insertChildren(i,[A]):null;return l&&l[0]},addChildren:function(i){return this.insertChildren(this._children.length,i)},insertChildren:function(i,A){var l=this._children;if(l&&A&&A.length>0){A=o.slice(A);for(var L={},h=A.length-1;h>=0;h--){var c=A[h],d=c&&c._id;!c||L[d]?A.splice(h,1):(c._remove(!1,!0),L[d]=!0)}o.splice(l,A,i,0);for(var I=this._project,u=I._changes,h=0,S=A.length;h<S;h++){var c=A[h],f=c._name;c._parent=this,c._setProject(I,!0),f&&c.setName(f),u&&c._changed(5)}this._changed(11)}else A=null;return A},_insertItem:"#insertChild",_insertAt:function(i,A){var l=i&&i._getOwner(),L=i!==this&&l?this:null;return L&&(L._remove(!1,!0),l._insertItem(i._index+A,L)),L},insertAbove:function(i){return this._insertAt(i,1)},insertBelow:function(i){return this._insertAt(i,0)},sendToBack:function(){var i=this._getOwner();return i?i._insertItem(0,this):null},bringToFront:function(){var i=this._getOwner();return i?i._insertItem(r,this):null},appendTop:"#addChild",appendBottom:function(i){return this.insertChild(0,i)},moveAbove:"#insertAbove",moveBelow:"#insertBelow",addTo:function(i){return i._insertItem(r,this)},copyTo:function(i){return this.clone(!1).addTo(i)},reduce:function(i){var A=this._children;if(A&&A.length===1){var l=A[0].reduce(i);return this._parent?(l.insertAbove(this),this.remove()):l.remove(),l}return this},_removeNamed:function(){var i=this._getOwner();if(i){var A=i._children,l=i._namedChildren,L=this._name,h=l[L],c=h?h.indexOf(this):-1;c!==-1&&(A[L]==this&&delete A[L],h.splice(c,1),h.length?A[L]=h[0]:delete l[L])}},_remove:function(i,A){var l=this._getOwner(),L=this._project,h=this._index;return this._style&&this._style._dispose(),l?(this._name&&this._removeNamed(),h!=null&&(L._activeLayer===this&&(L._activeLayer=this.getNextSibling()||this.getPreviousSibling()),o.splice(l._children,null,h,1)),this._installEvents(!1),i&&L._changes&&this._changed(5),A&&l._changed(11,this),this._parent=null,!0):!1},remove:function(){return this._remove(!0,!0)},replaceWith:function(i){var A=i&&i.insertBelow(this);return A&&this.remove(),A},removeChildren:function(i,A){if(!this._children)return null;i=i||0,A=o.pick(A,this._children.length);for(var l=o.splice(this._children,null,i,A-i),L=l.length-1;L>=0;L--)l[L]._remove(!0,!1);return l.length>0&&this._changed(11),l},clear:"#removeChildren",reverseChildren:function(){if(this._children){this._children.reverse();for(var i=0,A=this._children.length;i<A;i++)this._children[i]._index=i;this._changed(11)}},isEmpty:function(i){var A=this._children,l=A?A.length:0;if(i){for(var L=0;L<l;L++)if(!A[L].isEmpty(i))return!1;return!0}return!l},isEditable:function(){for(var i=this;i;){if(!i._visible||i._locked)return!1;i=i._parent}return!0},hasFill:function(){return this.getStyle().hasFill()},hasStroke:function(){return this.getStyle().hasStroke()},hasShadow:function(){return this.getStyle().hasShadow()},_getOrder:function(i){function A(d){var I=[];do I.unshift(d);while(d=d._parent);return I}for(var l=A(this),L=A(i),h=0,c=Math.min(l.length,L.length);h<c;h++)if(l[h]!=L[h])return l[h]._index<L[h]._index?1:-1;return 0},hasChildren:function(){return this._children&&this._children.length>0},isInserted:function(){return this._parent?this._parent.isInserted():!1},isAbove:function(i){return this._getOrder(i)===-1},isBelow:function(i){return this._getOrder(i)===1},isParent:function(i){return this._parent===i},isChild:function(i){return i&&i._parent===this},isDescendant:function(i){for(var A=this;A=A._parent;)if(A===i)return!0;return!1},isAncestor:function(i){return i?i.isDescendant(this):!1},isSibling:function(i){return this._parent===i._parent},isGroupedWith:function(i){for(var A=this._parent;A;){if(A._parent&&/^(Group|Layer|CompoundPath)$/.test(A._class)&&i.isDescendant(A))return!0;A=A._parent}return!1}},o.each(["rotate","scale","shear","skew"],function(i){var A=i==="rotate";this[i]=function(){var l=arguments,L=(A?o:g).read(l),h=g.read(l,0,{readNull:!0});return this.transform(new Q()[i](L,h||this.getPosition(!0)))}},{translate:function(){var i=new Q;return this.transform(i.translate.apply(i,arguments))},transform:function(i,A,l){var L=this._matrix,h=i&&!i.isIdentity(),c=l&&this._canApplyMatrix||this._applyMatrix&&(h||!L.isIdentity()||A&&this._children);if(!h&&!c)return this;if(h){!i.isInvertible()&&L.isInvertible()&&(L._backup=L.getValues()),L.prepend(i,!0);var d=this._style,I=d.getFillColor(!0),u=d.getStrokeColor(!0);I&&I.transform(i),u&&u.transform(i)}if(c&&(c=this._transformContent(L,A,l))){var S=this._pivot;S&&L._transformPoint(S,S,!0),L.reset(!0),l&&this._canApplyMatrix&&(this._applyMatrix=!0)}var f=this._bounds,O=this._position;(h||c)&&this._changed(25);var D=h&&f&&i.decompose();if(D&&D.skewing.isZero()&&D.rotation%90===0){for(var y in f){var H=f[y];if(H.nonscaling)delete f[y];else if(c||!H.internal){var P=H.rect;i._transformBounds(P,P)}}this._bounds=f;var v=f[this._getBoundsCacheKey(this._boundsOptions||{})];v&&(this._position=this._getPositionFromBounds(v.rect))}else h&&O&&this._pivot&&(this._position=i._transformPoint(O,O));return this},_transformContent:function(i,A,l){var L=this._children;if(L){for(var h=0,c=L.length;h<c;h++)L[h].transform(i,A,l);return!0}},globalToLocal:function(){return this.getGlobalMatrix(!0)._inverseTransform(g.read(arguments))},localToGlobal:function(){return this.getGlobalMatrix(!0)._transformPoint(g.read(arguments))},parentToLocal:function(){return this._matrix._inverseTransform(g.read(arguments))},localToParent:function(){return this._matrix._transformPoint(g.read(arguments))},fitBounds:function(i,A){i=_.read(arguments);var l=this.getBounds(),L=l.height/l.width,h=i.height/i.width,c=(A?L>h:L<h)?i.width/l.width:i.height/l.height,d=new _(new g,new Y(l.width*c,l.height*c));d.setCenter(i.getCenter()),this.setBounds(d)}}),{_setStyles:function(i,A,l){var L=this._style,h=this._matrix;if(L.hasFill()&&(i.fillStyle=L.getFillColor().toCanvasStyle(i,h)),L.hasStroke()){i.strokeStyle=L.getStrokeColor().toCanvasStyle(i,h),i.lineWidth=L.getStrokeWidth();var c=L.getStrokeJoin(),d=L.getStrokeCap(),I=L.getMiterLimit();if(c&&(i.lineJoin=c),d&&(i.lineCap=d),I&&(i.miterLimit=I),Ze.support.nativeDash){var u=L.getDashArray(),S=L.getDashOffset();u&&u.length&&("setLineDash"in i?(i.setLineDash(u),i.lineDashOffset=S):(i.mozDash=u,i.mozDashOffset=S))}}if(L.hasShadow()){var f=A.pixelRatio||1,O=l._shiftless().prepend(new Q().scale(f,f)),D=O.transform(new g(L.getShadowBlur(),0)),y=O.transform(this.getShadowOffset());i.shadowColor=L.getShadowColor().toCanvasStyle(i),i.shadowBlur=D.getLength(),i.shadowOffsetX=y.x,i.shadowOffsetY=y.y}},draw:function(i,A,l){if(this._updateVersion=this._project._updateVersion,!(!this._visible||this._opacity===0)){var L=A.matrices,h=A.viewMatrix,c=this._matrix,d=L[L.length-1].appended(c);if(d.isInvertible()){h=h?h.appended(d):d,L.push(d),A.updateMatrix&&(this._globalMatrix=d);var I=this._blendMode,u=R.clamp(this._opacity,0,1),S=I==="normal",f=x0.nativeModes[I],O=S&&u===1||A.dontStart||A.clip||(f||S&&u<1)&&this._canComposite(),D=A.pixelRatio||1,y,H,P;if(!O){var v=this.getStrokeBounds(h);if(!v.width||!v.height){L.pop();return}P=A.offset,H=A.offset=v.getTopLeft().floor(),y=i,i=Nt.getContext(v.getSize().ceil().add(1).multiply(D)),D!==1&&i.scale(D,D)}i==null||i.save();var F=l?l.appended(c):this._canScaleStroke&&!this.getStrokeScaling(!0)&&h,M=!O&&A.clipItem,m=!F||M;if(O?(i.globalAlpha=u,f&&(i.globalCompositeOperation=I)):m&&i.translate(-H.x,-H.y),m&&(O?c:h).applyToContext(i),M&&A.clipItem.draw(i,A.extend({clip:!0})),F){i.setTransform(D,0,0,D,0,0);var B=A.offset;B&&i.translate(-B.x,-B.y)}this._draw(i,A,h,F),i.restore(),L.pop(),A.clip&&!A.dontFinish&&i.clip(this.getFillRule()),O||(x0.process(I,i,y,u,H.subtract(P).multiply(D)),Nt.release(i),A.offset=P)}}},_isUpdated:function(i){var A=this._parent;if(A instanceof Et)return A._isUpdated(i);var l=this._updateVersion===i;return!l&&A&&A._visible&&A._isUpdated(i)&&(this._updateVersion=i,l=!0),l},_drawSelection:function(i,A,l,L,h){var c=this._selection,d=c&1,I=c&2||d&&this._selectBounds,u=c&4;if(this._drawSelected||(d=!1),(d||I||u)&&this._isUpdated(h)){var S,f=this.getSelectedColor(!0)||(S=this.getLayer())&&S.getSelectedColor(!0),O=A.appended(this.getGlobalMatrix(!0)),D=l/2;if(i.strokeStyle=i.fillStyle=f?f.toCanvasStyle(i):"#009dec",d&&this._drawSelected(i,O,L),u){var y=this.getPosition(!0),H=this._parent,P=H?H.localToGlobal(y):y,v=P.x,F=P.y;i.beginPath(),i.arc(v,F,D,0,Math.PI*2,!0),i.stroke();for(var M=[[0,-1],[1,0],[0,1],[-1,0]],m=D,B=l+1,G=0;G<4;G++){var b=M[G],U=b[0],w=b[1];i.moveTo(v+U*m,F+w*m),i.lineTo(v+U*B,F+w*B),i.stroke()}}if(I){var W=O._transformCorners(this.getInternalBounds());i.beginPath();for(var G=0;G<8;G++)i[G?"lineTo":"moveTo"](W[G],W[++G]);i.closePath(),i.stroke();for(var G=0;G<8;G++)i.fillRect(W[G]-D,W[++G]-D,l,l)}}},_canComposite:function(){return!1}},o.each(["down","drag","up","move"],function(i){this["removeOn"+o.capitalize(i)]=function(){var A={};return A[i]=!0,this.removeOn(A)}},{removeOn:function(i){for(var A in i)if(i[A]){var l="mouse"+A,L=this._project,h=L._removeSets=L._removeSets||{};h[l]=h[l]||{},h[l][this._id]=this}return this}}),{tween:function(i,A,l){l||(l=A,A=i,i=null,l||(l=A,A=null));var L=l&&l.easing,h=l&&l.start,c=l!=null&&(typeof l=="number"?l:l.duration),d=new mx(this,i,A,c,L,h);function I(u){d._handleFrame(u.time*1e3),d.running||this.off("frame",I)}return c&&this.on("frame",I),d},tweenTo:function(i,A){return this.tween(null,i,A)},tweenFrom:function(i,A){return this.tween(i,null,A)}}),ce=Ae.extend({_class:"Group",_selectBounds:!1,_selectChildren:!0,_serializeFields:{children:[]},initialize:function(A){this._children=[],this._namedChildren={},this._initialize(A)||this.addChildren(Array.isArray(A)?A:arguments)},_changed:function i(A){i.base.call(this,A),A&2050&&(this._clipItem=r)},_getClipItem:function(){var i=this._clipItem;if(i===r){i=null;for(var A=this._children,l=0,L=A.length;l<L;l++)if(A[l]._clipMask){i=A[l];break}this._clipItem=i}return i},isClipped:function(){return!!this._getClipItem()},setClipped:function(i){var A=this.getFirstChild();A&&A.setClipMask(i)},_getBounds:function i(A,l){var L=this._getClipItem();return L?L._getCachedBounds(L._matrix.prepended(A),o.set({},l,{stroke:!1})):i.base.call(this,A,l)},_hitTestChildren:function i(A,l,L){var h=this._getClipItem();return(!h||h.contains(A))&&i.base.call(this,A,l,L,h)},_draw:function(i,A){var l=A.clip,L=!l&&this._getClipItem();A=A.extend({clipItem:L,clip:!1}),l?(i.beginPath(),A.dontStart=A.dontFinish=!0):L&&L.draw(i,A.extend({clip:!0}));for(var h=this._children,c=0,d=h.length;c<d;c++){var I=h[c];I!==L&&I.draw(i,A)}}}),pe=ce.extend({_class:"Layer",initialize:function(){ce.apply(this,arguments)},_getOwner:function(){return this._parent||this._index!=null&&this._project},isInserted:function i(){return this._parent?i.base.call(this):this._index!=null},activate:function(){this._project._activeLayer=this},_hitTestSelf:function(){}}),me=Ae.extend({_class:"Shape",_applyMatrix:!1,_canApplyMatrix:!1,_canScaleStroke:!0,_serializeFields:{type:null,size:null,radius:null},initialize:function(A,l){this._initialize(A,l)},_equals:function(i){return this._type===i._type&&this._size.equals(i._size)&&o.equals(this._radius,i._radius)},copyContent:function(i){this.setType(i._type),this.setSize(i._size),this.setRadius(i._radius)},getType:function(){return this._type},setType:function(i){this._type=i},getShape:"#getType",setShape:"#setType",getSize:function(){var i=this._size;return new V(i.width,i.height,this,"setSize")},setSize:function(){var i=Y.read(arguments);if(!this._size)this._size=i.clone();else if(!this._size.equals(i)){var A=this._type,l=i.width,L=i.height;A==="rectangle"?this._radius.set(Y.min(this._radius,i.divide(2).abs())):A==="circle"?(l=L=(l+L)/2,this._radius=l/2):A==="ellipse"&&this._radius._set(l/2,L/2),this._size._set(l,L),this._changed(9)}},getRadius:function(){var i=this._radius;return this._type==="circle"?i:new V(i.width,i.height,this,"setRadius")},setRadius:function(i){var A=this._type;if(A==="circle"){if(i===this._radius)return;var l=i*2;this._radius=i,this._size._set(l,l)}else if(i=Y.read(arguments),!this._radius)this._radius=i.clone();else{if(this._radius.equals(i))return;if(this._radius.set(i),A==="rectangle"){var l=Y.max(this._size,i.multiply(2));this._size.set(l)}else A==="ellipse"&&this._size._set(i.width*2,i.height*2)}this._changed(9)},isEmpty:function(){return!1},toPath:function(i){var A=new Oe[o.capitalize(this._type)]({center:new g,size:this._size,radius:this._radius,insert:!1});return A.copyAttributes(this),Ze.settings.applyMatrix&&A.setApplyMatrix(!0),(i===r||i)&&A.insertAbove(this),A},toShape:"#clone",_asPathItem:function(){return this.toPath(!1)},_draw:function(i,A,l,L){var h=this._style,c=h.hasFill(),d=h.hasStroke(),I=A.dontFinish||A.clip,u=!L;if(c||d||I){var S=this._type,f=this._radius,O=S==="circle";if(A.dontStart||i.beginPath(),u&&O)i.arc(0,0,f,0,Math.PI*2,!0);else{var D=O?f:f.width,y=O?f:f.height,H=this._size,P=H.width,v=H.height;if(u&&S==="rectangle"&&D===0&&y===0)i.rect(-P/2,-v/2,P,v);else{var F=P/2,M=v/2,m=1-.5522847498307936,B=D*m,G=y*m,b=[-F,-M+y,-F,-M+G,-F+B,-M,-F+D,-M,F-D,-M,F-B,-M,F,-M+G,F,-M+y,F,M-y,F,M-G,F-B,M,F-D,M,-F+D,M,-F+B,M,-F,M-G,-F,M-y];L&&L.transform(b,b,32),i.moveTo(b[0],b[1]),i.bezierCurveTo(b[2],b[3],b[4],b[5],b[6],b[7]),F!==D&&i.lineTo(b[8],b[9]),i.bezierCurveTo(b[10],b[11],b[12],b[13],b[14],b[15]),M!==y&&i.lineTo(b[16],b[17]),i.bezierCurveTo(b[18],b[19],b[20],b[21],b[22],b[23]),F!==D&&i.lineTo(b[24],b[25]),i.bezierCurveTo(b[26],b[27],b[28],b[29],b[30],b[31])}}i.closePath()}!I&&(c||d)&&(this._setStyles(i,A,l),c&&(i.fill(h.getFillRule()),i.shadowColor="rgba(0,0,0,0)"),d&&i.stroke())},_canComposite:function(){return!(this.hasFill()&&this.hasStroke())},_getBounds:function(i,A){var l=new _(this._size).setCenter(0,0),L=this._style,h=A.stroke&&L.hasStroke()&&L.getStrokeWidth();return i&&(l=i._transformBounds(l)),h?l.expand(Oe._getStrokePadding(h,this._getStrokeMatrix(i,A))):l}},new function(){function i(l,L,h){var c=l._radius;if(!c.isZero())for(var d=l._size.divide(2),I=1;I<=4;I++){var u=new g(I>1&&I<4?-1:1,I>2?-1:1),S=u.multiply(d),f=S.subtract(u.multiply(c)),O=new _(h?S.add(u.multiply(h)):S,f);if(O.contains(L))return{point:f,quadrant:I}}}function A(l,L,h,c){var d=l.divide(L);return(!c||d.isInQuadrant(c))&&d.subtract(d.normalize()).multiply(L).divide(h).length<=1}return{_contains:function l(L){if(this._type==="rectangle"){var h=i(this,L);return h?L.subtract(h.point).divide(this._radius).getLength()<=1:l.base.call(this,L)}else return L.divide(this.size).getLength()<=.5},_hitTestSelf:function l(L,h,c,d){var I=!1,u=this._style,S=h.stroke&&u.hasStroke(),f=h.fill&&u.hasFill();if(S||f){var O=this._type,D=this._radius,y=S?u.getStrokeWidth()/2:0,H=h._tolerancePadding.add(Oe._getStrokePadding(y,!u.getStrokeScaling()&&d));if(O==="rectangle"){var P=H.multiply(2),v=i(this,L,P);if(v)I=A(L.subtract(v.point),D,H,v.quadrant);else{var F=new _(this._size).setCenter(0,0),M=F.expand(P),m=F.expand(P.negate());I=M._containsPoint(L)&&!m._containsPoint(L)}}else I=A(L,D,H)}return I?new ot(S?"stroke":"fill",this):l.base.apply(this,arguments)}}},{statics:new function(){function i(A,l,L,h,c){var d=o.create(me.prototype);return d._type=A,d._size=L,d._radius=h,d._initialize(o.getNamed(c),l),d}return{Circle:function(){var A=arguments,l=g.readNamed(A,"center"),L=o.readNamed(A,"radius");return i("circle",l,new Y(L*2),L,A)},Rectangle:function(){var A=arguments,l=_.readNamed(A,"rectangle"),L=Y.min(Y.readNamed(A,"radius"),l.getSize(!0).divide(2));return i("rectangle",l.getCenter(!0),l.getSize(!0),L,A)},Ellipse:function(){var A=arguments,l=me._readEllipse(A),L=l.radius;return i("ellipse",l.center,L.multiply(2),L,A)},_readEllipse:function(A){var l,L;if(o.hasNamed(A,"radius"))l=g.readNamed(A,"center"),L=Y.readNamed(A,"radius");else{var h=_.readNamed(A,"rectangle");l=h.getCenter(!0),L=h.getSize(!0).divide(2)}return{center:l,radius:L}}}}}),we=Ae.extend({_class:"Raster",_applyMatrix:!1,_canApplyMatrix:!1,_boundsOptions:{stroke:!1,handle:!1},_serializeFields:{crossOrigin:null,source:null},_prioritize:["crossOrigin"],_smoothing:"low",beans:!0,initialize:function(A,l){if(!this._initialize(A,l!==r&&g.read(arguments))){var L,h=typeof A,c=h==="string"?a.getElementById(A):h==="object"?A:null;if(c&&c!==Ae.NO_INSERT){if(c.getContext||c.naturalHeight!=null)L=c;else if(c){var d=Y.read(arguments);d.isZero()||(L=Nt.getCanvas(d))}}L?this.setImage(L):this.setSource(A)}this._size||(this._size=new Y,this._loaded=!1)},_equals:function(i){return this.getSource()===i.getSource()},copyContent:function(i){var A=i._image,l=i._canvas;if(A)this._setImage(A);else if(l){var L=Nt.getCanvas(i._size);L.getContext("2d").drawImage(l,0,0),this._setImage(L)}this._crossOrigin=i._crossOrigin},getSize:function(){var i=this._size;return new V(i?i.width:0,i?i.height:0,this,"setSize")},setSize:function(i,A){var l=Y.read(arguments);if(l.equals(this._size))A&&this.clear();else if(l.width>0&&l.height>0){var L=!A&&this.getElement();this._setImage(Nt.getCanvas(l)),L&&this.getContext(!0).drawImage(L,0,0,l.width,l.height)}else this._canvas&&Nt.release(this._canvas),this._size=l.clone()},getWidth:function(){return this._size?this._size.width:0},setWidth:function(i){this.setSize(i,this.getHeight())},getHeight:function(){return this._size?this._size.height:0},setHeight:function(i){this.setSize(this.getWidth(),i)},getLoaded:function(){return this._loaded},isEmpty:function(){var i=this._size;return!i||i.width===0&&i.height===0},getResolution:function(){var i=this._matrix,A=new g(0,0).transform(i),l=new g(1,0).transform(i).subtract(A),L=new g(0,1).transform(i).subtract(A);return new Y(72/l.getLength(),72/L.getLength())},getPpi:"#getResolution",getImage:function(){return this._image},setImage:function(i){var A=this;function l(L){var h=A.getView(),c=L&&L.type||"load";h&&A.responds(c)&&(Ze=h._scope,A.emit(c,new ai(L)))}this._setImage(i),this._loaded?setTimeout(l,0):i&&Ut.add(i,{load:function(L){A._setImage(i),l(L)},error:l})},_setImage:function(i){this._canvas&&Nt.release(this._canvas),i&&i.getContext?(this._image=null,this._canvas=i,this._loaded=!0):(this._image=i,this._canvas=null,this._loaded=!!(i&&i.src&&i.complete)),this._size=new Y(i?i.naturalWidth||i.width:0,i?i.naturalHeight||i.height:0),this._context=null,this._changed(1033)},getCanvas:function(){if(!this._canvas){var i=Nt.getContext(this._size);try{this._image&&i.drawImage(this._image,0,0),this._canvas=i.canvas}catch{Nt.release(i)}}return this._canvas},setCanvas:"#setImage",getContext:function(i){return this._context||(this._context=this.getCanvas().getContext("2d")),i&&(this._image=null,this._changed(1025)),this._context},setContext:function(i){this._context=i},getSource:function(){var i=this._image;return i&&i.src||this.toDataURL()},setSource:function(i){var A=new e.Image,l=this._crossOrigin;l&&(A.crossOrigin=l),i&&(A.src=i),this.setImage(A)},getCrossOrigin:function(){var i=this._image;return i&&i.crossOrigin||this._crossOrigin||""},setCrossOrigin:function(i){this._crossOrigin=i;var A=this._image;A&&(A.crossOrigin=i)},getSmoothing:function(){return this._smoothing},setSmoothing:function(i){this._smoothing=typeof i=="string"?i:i?"low":"off",this._changed(257)},getElement:function(){return this._canvas||this._loaded&&this._image}},{beans:!1,getSubCanvas:function(){var i=_.read(arguments),A=Nt.getContext(i.getSize());return A.drawImage(this.getCanvas(),i.x,i.y,i.width,i.height,0,0,i.width,i.height),A.canvas},getSubRaster:function(){var i=_.read(arguments),A=new we(Ae.NO_INSERT);return A._setImage(this.getSubCanvas(i)),A.translate(i.getCenter().subtract(this.getSize().divide(2))),A._matrix.prepend(this._matrix),A.insertAbove(this),A},toDataURL:function(){var i=this._image,A=i&&i.src;if(/^data:/.test(A))return A;var l=this.getCanvas();return l?l.toDataURL.apply(l,arguments):null},drawImage:function(i){var A=g.read(arguments,1);this.getContext(!0).drawImage(i,A.x,A.y)},getAverageColor:function(i){var A,l;if(i?i instanceof At?(l=i,A=i.getBounds()):typeof i=="object"&&("width"in i?A=new _(i):"x"in i&&(A=new _(i.x-.5,i.y-.5,1,1))):A=this.getBounds(),!A)return null;var L=32,h=Math.min(A.width,L),c=Math.min(A.height,L),d=we._sampleContext;d?d.clearRect(0,0,L+1,L+1):d=we._sampleContext=Nt.getContext(new Y(L)),d==null||d.save();var I=new Q().scale(h/A.width,c/A.height).translate(-A.x,-A.y);I.applyToContext(d),l&&l.draw(d,new o({clip:!0,matrices:[I]})),this._matrix.applyToContext(d);var u=this.getElement(),S=this._size;u&&d.drawImage(u,-S.width/2,-S.height/2),d.restore();for(var f=d.getImageData(.5,.5,Math.ceil(h),Math.ceil(c)).data,O=[0,0,0],D=0,y=0,H=f.length;y<H;y+=4){var P=f[y+3];D+=P,P/=255,O[0]+=f[y]*P,O[1]+=f[y+1]*P,O[2]+=f[y+2]*P}for(var y=0;y<3;y++)O[y]/=D;return D?Ht.read(O):null},getPixel:function(){var i=g.read(arguments),A=this.getContext().getImageData(i.x,i.y,1,1).data;return new Ht("rgb",[A[0]/255,A[1]/255,A[2]/255],A[3]/255)},setPixel:function(){var i=arguments,A=g.read(i),l=Ht.read(i),L=l._convert("rgb"),h=l._alpha,c=this.getContext(!0),d=c.createImageData(1,1),I=d.data;I[0]=L[0]*255,I[1]=L[1]*255,I[2]=L[2]*255,I[3]=h!=null?h*255:255,c.putImageData(d,A.x,A.y)},clear:function(){var i=this._size;this.getContext(!0).clearRect(0,0,i.width+1,i.height+1)},createImageData:function(){var i=Y.read(arguments);return this.getContext().createImageData(i.width,i.height)},getImageData:function(){var i=_.read(arguments);return i.isEmpty()&&(i=new _(this._size)),this.getContext().getImageData(i.x,i.y,i.width,i.height)},putImageData:function(i){var A=g.read(arguments,1);this.getContext(!0).putImageData(i,A.x,A.y)},setImageData:function(i){this.setSize(i),this.getContext(!0).putImageData(i,0,0)},_getBounds:function(i,A){var l=new _(this._size).setCenter(0,0);return i?i._transformBounds(l):l},_hitTestSelf:function(i){if(this._contains(i)){var A=this;return new ot("pixel",A,{offset:i.add(A._size.divide(2)).round(),color:{get:function(){return A.getPixel(this.offset)}}})}},_draw:function(i,A,l){var L=this.getElement();if(L&&L.width>0&&L.height>0){i.globalAlpha=R.clamp(this._opacity,0,1),this._setStyles(i,A,l);var h=this._smoothing,c=h==="off";yt.setPrefixed(i,c?"imageSmoothingEnabled":"imageSmoothingQuality",c?!1:h),i.drawImage(L,-this._size.width/2,-this._size.height/2)}},_canComposite:function(){return!0}}),Ye=Ae.extend({_class:"SymbolItem",_applyMatrix:!1,_canApplyMatrix:!1,_boundsOptions:{stroke:!0},_serializeFields:{symbol:null},initialize:function(A,l){this._initialize(A,l!==r&&g.read(arguments,1))||this.setDefinition(A instanceof it?A:new it(A))},_equals:function(i){return this._definition===i._definition},copyContent:function(i){this.setDefinition(i._definition)},getDefinition:function(){return this._definition},setDefinition:function(i){this._definition=i,this._changed(9)},getSymbol:"#getDefinition",setSymbol:"#setDefinition",isEmpty:function(){return this._definition._item.isEmpty()},_getBounds:function(i,A){var l=this._definition._item;return l._getCachedBounds(l._matrix.prepended(i),A)},_hitTestSelf:function(i,A,l){var L=A.extend({all:!1}),h=this._definition._item._hitTest(i,L,l);return h&&(h.item=this),h},_draw:function(i,A){this._definition._item.draw(i,A)}}),it=o.extend({_class:"SymbolDefinition",initialize:function(A,l){this._id=N.get(),this.project=Ze.project,A&&this.setItem(A,l)},_serialize:function(i,A){return A.add(this,function(){return o.serialize([this._class,this._item],i,!1,A)})},_changed:function(i){i&8&&Ae._clearBoundsCache(this),i&1&&this.project._changed(i)},getItem:function(){return this._item},setItem:function(i,A){i._symbol&&(i=i.clone()),this._item&&(this._item._symbol=null),this._item=i,i.remove(),i.setSelected(!1),A||i.setPosition(new g),i._symbol=this,this._changed(9)},getDefinition:"#getItem",setDefinition:"#setItem",place:function(i){return new Ye(this,i)},clone:function(){return new it(this._item.clone(!1))},equals:function(i){return i===this||i&&this._item.equals(i._item)||!1}}),ot=o.extend({_class:"HitResult",initialize:function(A,l,L){this.type=A,this.item=l,L&&this.inject(L)},statics:{getOptions:function(i){var A=i&&o.read(i);return new o({type:null,tolerance:Ze.settings.hitTolerance,fill:!A,stroke:!A,segments:!A,handles:!1,ends:!1,position:!1,center:!1,bounds:!1,guides:!1,selected:!1},A)}}}),Ie=o.extend({_class:"Segment",beans:!0,_selection:0,initialize:function(A,l,L,h,c,d){var I=arguments.length,u,S,f,O;I>0&&(A==null||typeof A=="object"?I===1&&A&&"point"in A?(u=A.point,S=A.handleIn,f=A.handleOut,O=A.selection):(u=A,S=l,f=L,O=h):(u=[A,l],S=L!==r?[L,h]:null,f=c!==r?[c,d]:null)),new ct(u,this,"_point"),new ct(S,this,"_handleIn"),new ct(f,this,"_handleOut"),O&&this.setSelection(O)},_serialize:function(i,A){var l=this._point,L=this._selection,h=L||this.hasHandles()?[l,this._handleIn,this._handleOut]:l;return L&&h.push(L),o.serialize(h,i,!0,A)},_changed:function(i){var A=this._path;if(A){var l=A._curves,L=this._index,h;l&&((!i||i===this._point||i===this._handleIn)&&(h=L>0?l[L-1]:A._closed?l[l.length-1]:null)&&h._changed(),(!i||i===this._point||i===this._handleOut)&&(h=l[L])&&h._changed()),A._changed(41)}},getPoint:function(){return this._point},setPoint:function(){this._point.set(g.read(arguments))},getHandleIn:function(){return this._handleIn},setHandleIn:function(){this._handleIn.set(g.read(arguments))},getHandleOut:function(){return this._handleOut},setHandleOut:function(){this._handleOut.set(g.read(arguments))},hasHandles:function(){return!this._handleIn.isZero()||!this._handleOut.isZero()},isSmooth:function(){var i=this._handleIn,A=this._handleOut;return!i.isZero()&&!A.isZero()&&i.isCollinear(A)},clearHandles:function(){this._handleIn._set(0,0),this._handleOut._set(0,0)},getSelection:function(){return this._selection},setSelection:function(i){var A=this._selection,l=this._path;this._selection=i=i||0,l&&i!==A&&(l._updateSelection(this,A,i),l._changed(257))},_changeSelection:function(i,A){var l=this._selection;this.setSelection(A?l|i:l&~i)},isSelected:function(){return!!(this._selection&7)},setSelected:function(i){this._changeSelection(7,i)},getIndex:function(){return this._index!==r?this._index:null},getPath:function(){return this._path||null},getCurve:function(){var i=this._path,A=this._index;return i?(A>0&&!i._closed&&A===i._segments.length-1&&A--,i.getCurves()[A]||null):null},getLocation:function(){var i=this.getCurve();return i?new qe(i,this===i._segment1?0:1):null},getNext:function(){var i=this._path&&this._path._segments;return i&&(i[this._index+1]||this._path._closed&&i[0])||null},smooth:function(i,A,l){var L=i||{},h=L.type,c=L.factor,d=this.getPrevious(),I=this.getNext(),u=(d||this)._point,S=this._point,f=(I||this)._point,O=u.getDistance(S),D=S.getDistance(f);if(!h||h==="catmull-rom"){var y=c===r?.5:c,H=Math.pow(O,y),P=H*H,v=Math.pow(D,y),F=v*v;if(!A&&d){var M=2*F+3*v*H+P,m=3*v*(v+H);this.setHandleIn(m!==0?new g((F*u._x+M*S._x-P*f._x)/m-S._x,(F*u._y+M*S._y-P*f._y)/m-S._y):new g)}if(!l&&I){var M=2*P+3*H*v+F,m=3*H*(H+v);this.setHandleOut(m!==0?new g((P*f._x+M*S._x-F*u._x)/m-S._x,(P*f._y+M*S._y-F*u._y)/m-S._y):new g)}}else if(h==="geometric"){if(d&&I){var B=u.subtract(f),G=c===r?.4:c,b=G*O/(O+D);A||this.setHandleIn(B.multiply(b)),l||this.setHandleOut(B.multiply(b-G))}}else throw new Error("Smoothing method '"+h+"' not supported.")},getPrevious:function(){var i=this._path&&this._path._segments;return i&&(i[this._index-1]||this._path._closed&&i[i.length-1])||null},isFirst:function(){return!this._index},isLast:function(){var i=this._path;return i&&this._index===i._segments.length-1||!1},reverse:function(){var i=this._handleIn,A=this._handleOut,l=i.clone();i.set(A),A.set(l)},reversed:function(){return new Ie(this._point,this._handleOut,this._handleIn)},remove:function(){return this._path?!!this._path.removeSegment(this._index):!1},clone:function(){return new Ie(this._point,this._handleIn,this._handleOut)},equals:function(i){return i===this||i&&this._class===i._class&&this._point.equals(i._point)&&this._handleIn.equals(i._handleIn)&&this._handleOut.equals(i._handleOut)||!1},toString:function(){var i=["point: "+this._point];return this._handleIn.isZero()||i.push("handleIn: "+this._handleIn),this._handleOut.isZero()||i.push("handleOut: "+this._handleOut),"{ "+i.join(", ")+" }"},transform:function(i){this._transformCoordinates(i,new Array(6),!0),this._changed()},interpolate:function(i,A,l){var L=1-l,h=l,c=i._point,d=A._point,I=i._handleIn,u=A._handleIn,S=A._handleOut,f=i._handleOut;this._point._set(L*c._x+h*d._x,L*c._y+h*d._y,!0),this._handleIn._set(L*I._x+h*u._x,L*I._y+h*u._y,!0),this._handleOut._set(L*f._x+h*S._x,L*f._y+h*S._y,!0),this._changed()},_transformCoordinates:function(i,A,l){var L=this._point,h=!l||!this._handleIn.isZero()?this._handleIn:null,c=!l||!this._handleOut.isZero()?this._handleOut:null,d=L._x,I=L._y,u=2;return A[0]=d,A[1]=I,h&&(A[u++]=h._x+d,A[u++]=h._y+I),c&&(A[u++]=c._x+d,A[u++]=c._y+I),i&&(i._transformCoordinates(A,A,u/2),d=A[0],I=A[1],l?(L._x=d,L._y=I,u=2,h&&(h._x=A[u++]-d,h._y=A[u++]-I),c&&(c._x=A[u++]-d,c._y=A[u++]-I)):(h||(A[u++]=d,A[u++]=I),c||(A[u++]=d,A[u++]=I))),A}}),ct=g.extend({initialize:function(A,l,L){var h,c,d;if(!A)h=c=0;else if((h=A[0])!==r)c=A[1];else{var I=A;(h=I.x)===r&&(I=g.read(arguments),h=I.x),c=I.y,d=I.selected}this._x=h,this._y=c,this._owner=l,l[L]=this,d&&this.setSelected(!0)},_set:function(i,A){return this._x=i,this._y=A,this._owner._changed(this),this},getX:function(){return this._x},setX:function(i){this._x=i,this._owner._changed(this)},getY:function(){return this._y},setY:function(i){this._y=i,this._owner._changed(this)},isZero:function(){var i=R.isZero;return i(this._x)&&i(this._y)},isSelected:function(){return!!(this._owner._selection&this._getSelection())},setSelected:function(i){this._owner._changeSelection(this._getSelection(),i)},_getSelection:function(){var i=this._owner;return this===i._point?1:this===i._handleIn?2:this===i._handleOut?4:0}}),oe=o.extend({_class:"Curve",beans:!0,initialize:function(A,l,L,h,c,d,I,u){var S=arguments.length,f,O,D,y,H,P;S===3?(this._path=A,f=l,O=L):S?S===1?"segment1"in A?(f=new Ie(A.segment1),O=new Ie(A.segment2)):"point1"in A?(D=A.point1,H=A.handle1,P=A.handle2,y=A.point2):Array.isArray(A)&&(D=[A[0],A[1]],y=[A[6],A[7]],H=[A[2]-A[0],A[3]-A[1]],P=[A[4]-A[6],A[5]-A[7]]):S===2?(f=new Ie(A),O=new Ie(l)):S===4?(D=A,H=l,P=L,y=h):S===8&&(D=[A,l],y=[I,u],H=[L-A,h-l],P=[c-I,d-u]):(f=new Ie,O=new Ie),this._segment1=f||new Ie(D,null,H),this._segment2=O||new Ie(y,P,null)},_serialize:function(i,A){return o.serialize(this.hasHandles()?[this.getPoint1(),this.getHandle1(),this.getHandle2(),this.getPoint2()]:[this.getPoint1(),this.getPoint2()],i,!0,A)},_changed:function(){this._length=this._bounds=r},clone:function(){return new oe(this._segment1,this._segment2)},toString:function(){var i=["point1: "+this._segment1._point];return this._segment1._handleOut.isZero()||i.push("handle1: "+this._segment1._handleOut),this._segment2._handleIn.isZero()||i.push("handle2: "+this._segment2._handleIn),i.push("point2: "+this._segment2._point),"{ "+i.join(", ")+" }"},classify:function(){return oe.classify(this.getValues())},remove:function(){var i=!1;if(this._path){var A=this._segment2,l=A._handleOut;i=A.remove(),i&&this._segment1._handleOut.set(l)}return i},getPoint1:function(){return this._segment1._point},setPoint1:function(){this._segment1._point.set(g.read(arguments))},getPoint2:function(){return this._segment2._point},setPoint2:function(){this._segment2._point.set(g.read(arguments))},getHandle1:function(){return this._segment1._handleOut},setHandle1:function(){this._segment1._handleOut.set(g.read(arguments))},getHandle2:function(){return this._segment2._handleIn},setHandle2:function(){this._segment2._handleIn.set(g.read(arguments))},getSegment1:function(){return this._segment1},getSegment2:function(){return this._segment2},getPath:function(){return this._path},getIndex:function(){return this._segment1._index},getNext:function(){var i=this._path&&this._path._curves;return i&&(i[this._segment1._index+1]||this._path._closed&&i[0])||null},getPrevious:function(){var i=this._path&&this._path._curves;return i&&(i[this._segment1._index-1]||this._path._closed&&i[i.length-1])||null},isFirst:function(){return!this._segment1._index},isLast:function(){var i=this._path;return i&&this._segment1._index===i._curves.length-1||!1},isSelected:function(){return this.getPoint1().isSelected()&&this.getHandle1().isSelected()&&this.getHandle2().isSelected()&&this.getPoint2().isSelected()},setSelected:function(i){this.getPoint1().setSelected(i),this.getHandle1().setSelected(i),this.getHandle2().setSelected(i),this.getPoint2().setSelected(i)},getValues:function(i){return oe.getValues(this._segment1,this._segment2,i)},getPoints:function(){for(var i=this.getValues(),A=[],l=0;l<8;l+=2)A.push(new g(i[l],i[l+1]));return A}},{getLength:function(){return this._length==null&&(this._length=oe.getLength(this.getValues(),0,1)),this._length},getArea:function(){return oe.getArea(this.getValues())},getLine:function(){return new Te(this._segment1._point,this._segment2._point)},getPart:function(i,A){return new oe(oe.getPart(this.getValues(),i,A))},getPartLength:function(i,A){return oe.getLength(this.getValues(),i,A)},divideAt:function(i){return this.divideAtTime(i&&i.curve===this?i.time:this.getTimeAt(i))},divideAtTime:function(i,A){var l=1e-8,L=1-l,h=null;if(i>=l&&i<=L){var c=oe.subdivide(this.getValues(),i),d=c[0],I=c[1],u=A||this.hasHandles(),S=this._segment1,f=this._segment2,O=this._path;u&&(S._handleOut._set(d[2]-d[0],d[3]-d[1]),f._handleIn._set(I[4]-I[6],I[5]-I[7]));var D=d[6],y=d[7],H=new Ie(new g(D,y),u&&new g(d[4]-D,d[5]-y),u&&new g(I[2]-D,I[3]-y));O?(O.insert(S._index+1,H),h=this.getNext()):(this._segment2=H,this._changed(),h=new oe(H,f))}return h},splitAt:function(i){var A=this._path;return A?A.splitAt(i):null},splitAtTime:function(i){return this.splitAt(this.getLocationAtTime(i))},divide:function(i,A){return this.divideAtTime(i===r?.5:A?i:this.getTimeAt(i))},split:function(i,A){return this.splitAtTime(i===r?.5:A?i:this.getTimeAt(i))},reversed:function(){return new oe(this._segment2.reversed(),this._segment1.reversed())},clearHandles:function(){this._segment1._handleOut._set(0,0),this._segment2._handleIn._set(0,0)},statics:{getValues:function(i,A,l,L){var h=i._point,c=i._handleOut,d=A._handleIn,I=A._point,u=h.x,S=h.y,f=I.x,O=I.y,D=L?[u,S,u,S,f,O,f,O]:[u,S,u+c._x,S+c._y,f+d._x,O+d._y,f,O];return l&&l._transformCoordinates(D,D,4),D},subdivide:function(i,A){var l=i[0],L=i[1],h=i[2],c=i[3],d=i[4],I=i[5],u=i[6],S=i[7];A===r&&(A=.5);var f=1-A,O=f*l+A*h,D=f*L+A*c,y=f*h+A*d,H=f*c+A*I,P=f*d+A*u,v=f*I+A*S,F=f*O+A*y,M=f*D+A*H,m=f*y+A*P,B=f*H+A*v,G=f*F+A*m,b=f*M+A*B;return[[l,L,O,D,F,M,G,b],[G,b,m,B,P,v,u,S]]},getMonoCurves:function(i,A){var l=[],L=A?0:1,h=i[L+0],c=i[L+2],d=i[L+4],I=i[L+6];if(h>=c==c>=d&&c>=d==d>=I||oe.isStraight(i))l.push(i);else{var u=3*(c-d)-h+I,S=2*(h+d)-4*c,f=c-h,O=1e-8,D=1-O,y=[],H=R.solveQuadratic(u,S,f,y,O,D);if(!H)l.push(i);else{y.sort();var P=y[0],v=oe.subdivide(i,P);l.push(v[0]),H>1&&(P=(y[1]-P)/(1-P),v=oe.subdivide(v[1],P),l.push(v[0])),l.push(v[1])}}return l},solveCubic:function(i,A,l,L,h,c){var d=i[A],I=i[A+2],u=i[A+4],S=i[A+6],f=0;if(!(d<l&&S<l&&I<l&&u<l||d>l&&S>l&&I>l&&u>l)){var O=3*(I-d),D=3*(u-I)-O,y=S-d-O-D;f=R.solveCubic(y,D,O,d-l,L,h,c)}return f},getTimeOf:function(i,A){var l=new g(i[0],i[1]),L=new g(i[6],i[7]),h=1e-12,c=1e-7,d=A.isClose(l,h)?0:A.isClose(L,h)?1:null;if(d===null)for(var I=[A.x,A.y],u=[],S=0;S<2;S++)for(var f=oe.solveCubic(i,S,I[S],u,0,1),O=0;O<f;O++){var D=u[O];if(A.isClose(oe.getPoint(i,D),c))return D}return A.isClose(l,c)?0:A.isClose(L,c)?1:null},getNearestTime:function(i,A){if(oe.isStraight(i)){var l=i[0],L=i[1],h=i[6],c=i[7],d=h-l,I=c-L,u=d*d+I*I;if(u===0)return 0;var S=((A.x-l)*d+(A.y-L)*I)/u;return S<1e-12?0:S>.999999999999?1:oe.getTimeOf(i,new g(l+S*d,L+S*I))}var f=100,O=1/0,D=0;function y(v){if(v>=0&&v<=1){var F=A.getDistance(oe.getPoint(i,v),!0);if(F<O)return O=F,D=v,!0}}for(var H=0;H<=f;H++)y(H/f);for(var P=1/(f*2);P>1e-8;)!y(D-P)&&!y(D+P)&&(P/=2);return D},getPart:function(i,A,l){var L=A>l;if(L){var h=A;A=l,l=h}return A>0&&(i=oe.subdivide(i,A)[1]),l<1&&(i=oe.subdivide(i,(l-A)/(1-A))[0]),L?[i[6],i[7],i[4],i[5],i[2],i[3],i[0],i[1]]:i},isFlatEnough:function(i,A){var l=i[0],L=i[1],h=i[2],c=i[3],d=i[4],I=i[5],u=i[6],S=i[7],f=3*h-2*l-u,O=3*c-2*L-S,D=3*d-2*u-l,y=3*I-2*S-L;return Math.max(f*f,D*D)+Math.max(O*O,y*y)<=16*A*A},getArea:function(i){var A=i[0],l=i[1],L=i[2],h=i[3],c=i[4],d=i[5],I=i[6],u=i[7];return 3*((u-l)*(L+c)-(I-A)*(h+d)+h*(A-c)-L*(l-d)+u*(c+A/3)-I*(d+l/3))/20},getBounds:function(i){for(var A=i.slice(0,2),l=A.slice(),L=[0,0],h=0;h<2;h++)oe._addBounds(i[h],i[h+2],i[h+4],i[h+6],h,0,A,l,L);return new _(A[0],A[1],l[0]-A[0],l[1]-A[1])},_addBounds:function(i,A,l,L,h,c,d,I,u){function S(G,b){var U=G-b,w=G+b;U<d[h]&&(d[h]=U),w>I[h]&&(I[h]=w)}c/=2;var f=d[h]+c,O=I[h]-c;if(i<f||A<f||l<f||L<f||i>O||A>O||l>O||L>O)if(A<i!=A<L&&l<i!=l<L)S(i,0),S(L,0);else{var D=3*(A-l)-i+L,y=2*(i+l)-4*A,H=A-i,P=R.solveQuadratic(D,y,H,u),v=1e-8,F=1-v;S(L,0);for(var M=0;M<P;M++){var m=u[M],B=1-m;v<=m&&m<=F&&S(B*B*B*i+3*B*B*m*A+3*B*m*m*l+m*m*m*L,c)}}}}},o.each(["getBounds","getStrokeBounds","getHandleBounds"],function(i){this[i]=function(){this._bounds||(this._bounds={});var A=this._bounds[i];return A||(A=this._bounds[i]=Oe[i]([this._segment1,this._segment2],!1,this._path)),A.clone()}},{}),o.each({isStraight:function(i,A,l,L){if(A.isZero()&&l.isZero())return!0;var h=L.subtract(i);if(h.isZero())return!1;if(h.isCollinear(A)&&h.isCollinear(l)){var c=new Te(i,L),d=1e-7;if(c.getDistance(i.add(A))<d&&c.getDistance(L.add(l))<d){var I=h.dot(h),u=h.dot(A)/I,S=h.dot(l)/I;return u>=0&&u<=1&&S<=0&&S>=-1}}return!1},isLinear:function(i,A,l,L){var h=L.subtract(i).divide(3);return A.equals(h)&&l.negate().equals(h)}},function(i,A){this[A]=function(l){var L=this._segment1,h=this._segment2;return i(L._point,L._handleOut,h._handleIn,h._point,l)},this.statics[A]=function(l,L){var h=l[0],c=l[1],d=l[6],I=l[7];return i(new g(h,c),new g(l[2]-h,l[3]-c),new g(l[4]-d,l[5]-I),new g(d,I),L)}},{statics:{},hasHandles:function(){return!this._segment1._handleOut.isZero()||!this._segment2._handleIn.isZero()},hasLength:function(i){return(!this.getPoint1().equals(this.getPoint2())||this.hasHandles())&&this.getLength()>(i||0)},isCollinear:function(i){return i&&this.isStraight()&&i.isStraight()&&this.getLine().isCollinear(i.getLine())},isHorizontal:function(){return this.isStraight()&&Math.abs(this.getTangentAtTime(.5).y)<1e-8},isVertical:function(){return this.isStraight()&&Math.abs(this.getTangentAtTime(.5).x)<1e-8}}),{beans:!1,getLocationAt:function(i,A){return this.getLocationAtTime(A?i:this.getTimeAt(i))},getLocationAtTime:function(i){return i!=null&&i>=0&&i<=1?new qe(this,i):null},getTimeAt:function(i,A){return oe.getTimeAt(this.getValues(),i,A)},getParameterAt:"#getTimeAt",getTimesWithTangent:function(){var i=g.read(arguments);return i.isZero()?[]:oe.getTimesWithTangent(this.getValues(),i)},getOffsetAtTime:function(i){return this.getPartLength(0,i)},getLocationOf:function(){return this.getLocationAtTime(this.getTimeOf(g.read(arguments)))},getOffsetOf:function(){var i=this.getLocationOf.apply(this,arguments);return i?i.getOffset():null},getTimeOf:function(){return oe.getTimeOf(this.getValues(),g.read(arguments))},getParameterOf:"#getTimeOf",getNearestLocation:function(){var i=g.read(arguments),A=this.getValues(),l=oe.getNearestTime(A,i),L=oe.getPoint(A,l);return new qe(this,l,L,null,i.getDistance(L))},getNearestPoint:function(){var i=this.getNearestLocation.apply(this,arguments);return i&&i.getPoint()}},new function(){var i=["getPoint","getTangent","getNormal","getWeightedTangent","getWeightedNormal","getCurvature"];return o.each(i,function(A){this[A+"At"]=function(l,L){var h=this.getValues();return oe[A](h,L?l:oe.getTimeAt(h,l))},this[A+"AtTime"]=function(l){return oe[A](this.getValues(),l)}},{statics:{_evaluateMethods:i}})},new function(){function i(L){var h=L[0],c=L[1],d=L[2],I=L[3],u=L[4],S=L[5],f=L[6],O=L[7],D=9*(d-u)+3*(f-h),y=6*(h+u)-12*d,H=3*(d-h),P=9*(I-S)+3*(O-c),v=6*(c+S)-12*I,F=3*(I-c);return function(M){var m=(D*M+y)*M+H,B=(P*M+v)*M+F;return Math.sqrt(m*m+B*B)}}function A(L,h){return Math.max(2,Math.min(16,Math.ceil(Math.abs(h-L)*32)))}function l(L,h,c,d){if(h==null||h<0||h>1)return null;var I=L[0],u=L[1],S=L[2],f=L[3],O=L[4],D=L[5],y=L[6],H=L[7],P=R.isZero;P(S-I)&&P(f-u)&&(S=I,f=u),P(O-y)&&P(D-H)&&(O=y,D=H);var v=3*(S-I),F=3*(O-S)-v,M=y-I-v-F,m=3*(f-u),B=3*(D-f)-m,G=H-u-m-B,b,U;if(c===0)b=h===0?I:h===1?y:((M*h+F)*h+v)*h+I,U=h===0?u:h===1?H:((G*h+B)*h+m)*h+u;else{var w=1e-8,W=1-w;if(h<w?(b=v,U=m):h>W?(b=3*(y-O),U=3*(H-D)):(b=(3*M*h+2*F)*h+v,U=(3*G*h+2*B)*h+m),d){b===0&&U===0&&(h<w||h>W)&&(b=O-S,U=D-f);var k=Math.sqrt(b*b+U*U);k&&(b/=k,U/=k)}if(c===3){var O=6*M*h+2*F,D=6*G*h+2*B,Z=Math.pow(b*b+U*U,3/2);b=Z!==0?(b*D-U*O)/Z:0,U=0}}return c===2?new g(U,-b):new g(b,U)}return{statics:{classify:function(L){var h=L[0],c=L[1],d=L[2],I=L[3],u=L[4],S=L[5],f=L[6],O=L[7],D=h*(O-S)+c*(u-f)+f*S-O*u,y=d*(c-O)+I*(f-h)+h*O-c*f,H=u*(I-c)+S*(h-d)+d*c-I*h,P=3*H,v=P-y,F=v-y+D,M=Math.sqrt(F*F+v*v+P*P),m=M!==0?1/M:0,B=R.isZero,G="serpentine";F*=m,v*=m,P*=m;function b(k,Z,J){var X=Z!==r,j=X&&Z>0&&Z<1,q=X&&J>0&&J<1;return X&&(!(j||q)||k==="loop"&&!(j&&q))&&(k="arch",j=q=!1),{type:k,roots:j||q?j&&q?Z<J?[Z,J]:[J,Z]:[j?Z:J]:null}}if(B(F))return B(v)?b(B(P)?"line":"quadratic"):b(G,P/(3*v));var U=3*v*v-4*F*P;if(B(U))return b("cusp",v/(2*F));var w=U>0?Math.sqrt(U/3):Math.sqrt(-U),W=2*F;return b(U>0?G:"loop",(v+w)/W,(v-w)/W)},getLength:function(L,h,c,d){if(h===r&&(h=0),c===r&&(c=1),oe.isStraight(L)){var I=L;c<1&&(I=oe.subdivide(I,c)[0],h/=c),h>0&&(I=oe.subdivide(I,h)[1]);var u=I[6]-I[0],S=I[7]-I[1];return Math.sqrt(u*u+S*S)}return R.integrate(d||i(L),h,c,A(h,c))},getTimeAt:function(L,h,c){if(c===r&&(c=h<0?1:0),h===0)return c;var d=Math.abs,I=1e-12,u=h>0,S=u?c:0,f=u?1:c,O=i(L),D=oe.getLength(L,S,f,O),y=d(h)-D;if(d(y)<I)return u?f:S;if(y>I)return null;var H=h/D,P=0;function v(F){return P+=R.integrate(O,c,F,A(c,F)),c=F,P-h}return R.findRoot(v,O,c+H,S,f,32,1e-12)},getPoint:function(L,h){return l(L,h,0,!1)},getTangent:function(L,h){return l(L,h,1,!0)},getWeightedTangent:function(L,h){return l(L,h,1,!1)},getNormal:function(L,h){return l(L,h,2,!0)},getWeightedNormal:function(L,h){return l(L,h,2,!1)},getCurvature:function(L,h){return l(L,h,3,!1).x},getPeaks:function(L){var h=L[0],c=L[1],d=L[2],I=L[3],u=L[4],S=L[5],f=L[6],O=L[7],D=-h+3*d-3*u+f,y=3*h-6*d+3*u,H=-3*h+3*d,P=-c+3*I-3*S+O,v=3*c-6*I+3*S,F=-3*c+3*I,M=1e-8,m=1-M,B=[];return R.solveCubic(9*(D*D+P*P),9*(D*y+v*P),2*(y*y+v*v)+3*(H*D+F*P),H*y+v*F,B,M,m),B.sort()}}}},new function(){function i(y,H,P,v,F,M,m){var B=!m&&P.getPrevious()===F,G=!m&&P!==F&&P.getNext()===F,b=1e-8,U=1-b;if(v!==null&&v>=(B?b:0)&&v<=(G?U:1)&&M!==null&&M>=(G?b:0)&&M<=(B?U:1)){var w=new qe(P,v,null,m),W=new qe(F,M,null,m);w._intersection=W,W._intersection=w,(!H||H(w))&&qe.insert(y,w,!0)}}function A(y,H,P,v,F,M,m,B,G,b,U,w,W){if(++G>=4096||++B>=40)return G;var k=1e-9,Z=H[0],J=H[1],X=H[6],j=H[7],q=Te.getSignedDistance,ee=q(Z,J,X,j,H[2],H[3]),re=q(Z,J,X,j,H[4],H[5]),le=ee*re>0?3/4:4/9,Ee=le*Math.min(0,ee,re),de=le*Math.max(0,ee,re),He=q(Z,J,X,j,y[0],y[1]),fe=q(Z,J,X,j,y[2],y[3]),De=q(Z,J,X,j,y[4],y[5]),Ne=q(Z,J,X,j,y[6],y[7]),be=l(He,fe,De,Ne),Be=be[0],tt=be[1],We,Xe;if(ee===0&&re===0&&He===0&&fe===0&&De===0&&Ne===0||(We=L(Be,tt,Ee,de))==null||(Xe=L(Be.reverse(),tt.reverse(),Ee,de))==null)return G;var Qe=b+(U-b)*We,Je=b+(U-b)*Xe;if(Math.max(W-w,Je-Qe)<k){var Xt=(Qe+Je)/2,jt=(w+W)/2;i(F,M,m?v:P,m?jt:Xt,m?P:v,m?Xt:jt)}else{y=oe.getPart(y,We,Xe);var Ar=W-w;if(Xe-We>.8)if(Je-Qe>Ar){var wt=oe.subdivide(y,.5),Xt=(Qe+Je)/2;G=A(H,wt[0],v,P,F,M,!m,B,G,w,W,Qe,Xt),G=A(H,wt[1],v,P,F,M,!m,B,G,w,W,Xt,Je)}else{var wt=oe.subdivide(H,.5),jt=(w+W)/2;G=A(wt[0],y,v,P,F,M,!m,B,G,w,jt,Qe,Je),G=A(wt[1],y,v,P,F,M,!m,B,G,jt,W,Qe,Je)}else Ar===0||Ar>=k?G=A(H,y,v,P,F,M,!m,B,G,w,W,Qe,Je):G=A(y,H,P,v,F,M,m,B,G,Qe,Je,w,W)}return G}function l(y,H,P,v){var F=[0,y],M=[1/3,H],m=[2/3,P],B=[1,v],G=H-(2*y+v)/3,b=P-(y+2*v)/3,U;if(G*b<0)U=[[F,M,B],[F,m,B]];else{var w=G/b;U=[w>=2?[F,M,B]:w<=.5?[F,m,B]:[F,M,m,B],[F,B]]}return(G||b)<0?U.reverse():U}function L(y,H,P,v){return y[0][1]<P?h(y,!0,P):H[0][1]>v?h(H,!1,v):y[0][0]}function h(y,H,P){for(var v=y[0][0],F=y[0][1],M=1,m=y.length;M<m;M++){var B=y[M][0],G=y[M][1];if(H?G>=P:G<=P)return G===P?B:v+(P-F)*(B-v)/(G-F);v=B,F=G}return null}function c(y,H,P,v,F){var M=R.isZero;if(M(v)&&M(F)){var m=oe.getTimeOf(y,new g(H,P));return m===null?[]:[m]}for(var B=Math.atan2(-F,v),G=Math.sin(B),b=Math.cos(B),U=[],w=[],W=0;W<8;W+=2){var k=y[W]-H,Z=y[W+1]-P;U.push(k*b-Z*G,k*G+Z*b)}return oe.solveCubic(U,1,0,w,0,1),w}function d(y,H,P,v,F,M,m){for(var B=H[0],G=H[1],b=H[6],U=H[7],w=c(y,B,G,b-B,U-G),W=0,k=w.length;W<k;W++){var Z=w[W],J=oe.getPoint(y,Z),X=oe.getTimeOf(H,J);X!==null&&i(F,M,m?v:P,m?X:Z,m?P:v,m?Z:X)}}function I(y,H,P,v,F,M){var m=Te.intersect(y[0],y[1],y[6],y[7],H[0],H[1],H[6],H[7]);m&&i(F,M,P,oe.getTimeOf(y,m),v,oe.getTimeOf(H,m))}function u(y,H,P,v,F,M){var m=1e-12,B=Math.min,G=Math.max;if(G(y[0],y[2],y[4],y[6])+m>B(H[0],H[2],H[4],H[6])&&B(y[0],y[2],y[4],y[6])-m<G(H[0],H[2],H[4],H[6])&&G(y[1],y[3],y[5],y[7])+m>B(H[1],H[3],H[5],H[7])&&B(y[1],y[3],y[5],y[7])-m<G(H[1],H[3],H[5],H[7])){var b=O(y,H);if(b)for(var U=0;U<2;U++){var w=b[U];i(F,M,P,w[0],v,w[1],!0)}else{var W=oe.isStraight(y),k=oe.isStraight(H),Z=W&&k,J=W&&!k,X=F.length;if((Z?I:W||k?d:A)(J?H:y,J?y:H,J?v:P,J?P:v,F,M,J,0,0,0,1,0,1),!Z||F.length===X)for(var U=0;U<4;U++){var j=U>>1,q=U&1,ee=j*6,re=q*6,le=new g(y[ee],y[ee+1]),Ee=new g(H[re],H[re+1]);le.isClose(Ee,m)&&i(F,M,P,j,v,q)}}}return F}function S(y,H,P,v){var F=oe.classify(y);if(F.type==="loop"){var M=F.roots;i(P,v,H,M[0],H,M[1])}return P}function f(y,H,P,v,F,M){var m=1e-7,B=!H;B&&(H=y);for(var G=y.length,b=H.length,U=new Array(G),w=B?U:new Array(b),W=[],k=0;k<G;k++)U[k]=y[k].getValues(v);if(!B)for(var k=0;k<b;k++)w[k]=H[k].getValues(F);for(var Z=T.findCurveBoundsCollisions(U,w,m),J=0;J<G;J++){var X=y[J],j=U[J];B&&S(j,X,W,P);var q=Z[J];if(q)for(var ee=0;ee<q.length;ee++){if(M&&W.length)return W;var re=q[ee];if(!B||re>J){var le=H[re],Ee=w[re];u(j,Ee,X,le,W,P)}}}return W}function O(y,H){function P(Ne){var be=Ne[6]-Ne[0],Be=Ne[7]-Ne[1];return be*be+Be*Be}var v=Math.abs,F=Te.getDistance,M=1e-8,m=1e-7,B=oe.isStraight(y),G=oe.isStraight(H),b=B&&G,U=P(y)<P(H),w=U?H:y,W=U?y:H,k=w[0],Z=w[1],J=w[6]-k,X=w[7]-Z;if(F(k,Z,J,X,W[0],W[1],!0)<m&&F(k,Z,J,X,W[6],W[7],!0)<m)!b&&F(k,Z,J,X,w[2],w[3],!0)<m&&F(k,Z,J,X,w[4],w[5],!0)<m&&F(k,Z,J,X,W[2],W[3],!0)<m&&F(k,Z,J,X,W[4],W[5],!0)<m&&(B=G=b=!0);else if(b)return null;if(B^G)return null;for(var j=[y,H],q=[],ee=0;ee<4&&q.length<2;ee++){var re=ee&1,le=re^1,Ee=ee>>1,de=oe.getTimeOf(j[re],new g(j[le][Ee?6:0],j[le][Ee?7:1]));if(de!=null){var He=re?[Ee,de]:[de,Ee];(!q.length||v(He[0]-q[0][0])>M&&v(He[1]-q[0][1])>M)&&q.push(He)}if(ee>2&&!q.length)break}if(q.length!==2)q=null;else if(!b){var fe=oe.getPart(y,q[0][0],q[1][0]),De=oe.getPart(H,q[0][1],q[1][1]);(v(De[2]-fe[2])>m||v(De[3]-fe[3])>m||v(De[4]-fe[4])>m||v(De[5]-fe[5])>m)&&(q=null)}return q}function D(y,H){var P=y[0],v=y[1],F=y[2],M=y[3],m=y[4],B=y[5],G=y[6],b=y[7],U=H.normalize(),w=U.x,W=U.y,k=3*G-9*m+9*F-3*P,Z=3*b-9*B+9*M-3*v,J=6*m-12*F+6*P,X=6*B-12*M+6*v,j=3*F-3*P,q=3*M-3*v,ee=2*k*W-2*Z*w,re=[];if(Math.abs(ee)<R.CURVETIME_EPSILON){var le=k*q-Z*j,ee=k*X-Z*J;if(ee!=0){var Ee=-le/ee;Ee>=0&&Ee<=1&&re.push(Ee)}}else{var de=(J*J-4*k*j)*W*W+(-2*J*X+4*Z*j+4*k*q)*w*W+(X*X-4*Z*q)*w*w,He=J*W-X*w;if(de>=0&&ee!=0){var fe=Math.sqrt(de),De=-(He+fe)/ee,Ne=(-He+fe)/ee;De>=0&&De<=1&&re.push(De),Ne>=0&&Ne<=1&&re.push(Ne)}}return re}return{getIntersections:function(y){var H=this.getValues(),P=y&&y!==this&&y.getValues();return P?u(H,P,this,y,[]):S(H,this,[])},statics:{getOverlaps:O,getIntersections:f,getCurveLineIntersections:c,getTimesWithTangent:D}}}),qe=o.extend({_class:"CurveLocation",initialize:function(A,l,L,h,c){if(l>=.99999999){var d=A.getNext();d&&(l=0,A=d)}this._setCurve(A),this._time=l,this._point=L||A.getPointAtTime(l),this._overlap=h,this._distance=c,this._intersection=this._next=this._previous=null},_setPath:function(i){this._path=i,this._version=i?i._version:0},_setCurve:function(i){this._setPath(i._path),this._curve=i,this._segment=null,this._segment1=i._segment1,this._segment2=i._segment2},_setSegment:function(i){var A=i.getCurve();A?this._setCurve(A):(this._setPath(i._path),this._segment1=i,this._segment2=null),this._segment=i,this._time=i===this._segment1?0:1,this._point=i._point.clone()},getSegment:function(){var i=this._segment;if(!i){var A=this.getCurve(),l=this.getTime();l===0?i=A._segment1:l===1?i=A._segment2:l!=null&&(i=A.getPartLength(0,l)<A.getPartLength(l,1)?A._segment1:A._segment2),this._segment=i}return i},getCurve:function(){var i=this._path,A=this;i&&i._version!==this._version&&(this._time=this._offset=this._curveOffset=this._curve=null);function l(L){var h=L&&L.getCurve();if(h&&(A._time=h.getTimeOf(A._point))!=null)return A._setCurve(h),h}return this._curve||l(this._segment)||l(this._segment1)||l(this._segment2.getPrevious())},getPath:function(){var i=this.getCurve();return i&&i._path},getIndex:function(){var i=this.getCurve();return i&&i.getIndex()},getTime:function(){var i=this.getCurve(),A=this._time;return i&&A==null?this._time=i.getTimeOf(this._point):A},getParameter:"#getTime",getPoint:function(){return this._point},getOffset:function(){var i=this._offset;if(i==null){i=0;var A=this.getPath(),l=this.getIndex();if(A&&l!=null)for(var L=A.getCurves(),h=0;h<l;h++)i+=L[h].getLength();this._offset=i+=this.getCurveOffset()}return i},getCurveOffset:function(){var i=this._curveOffset;if(i==null){var A=this.getCurve(),l=this.getTime();this._curveOffset=i=l!=null&&A&&A.getPartLength(0,l)}return i},getIntersection:function(){return this._intersection},getDistance:function(){return this._distance},divide:function(){var i=this.getCurve(),A=i&&i.divideAtTime(this.getTime());return A&&this._setSegment(A._segment1),A},split:function(){var i=this.getCurve(),A=i._path,l=i&&i.splitAtTime(this.getTime());return l&&this._setSegment(A.getLastSegment()),l},equals:function(i,A){var l=this===i;if(!l&&i instanceof qe){var L=this.getCurve(),h=i.getCurve(),c=L._path,d=h._path;if(c===d){var I=Math.abs,u=1e-7,S=I(this.getOffset()-i.getOffset()),f=!A&&this._intersection,O=!A&&i._intersection;l=(S<u||c&&I(c.getLength()-S)<u)&&(!f&&!O||f&&O&&f.equals(O,!0))}}return l},toString:function(){var i=[],A=this.getPoint(),l=p.instance;A&&i.push("point: "+A);var L=this.getIndex();L!=null&&i.push("index: "+L);var h=this.getTime();return h!=null&&i.push("time: "+l.number(h)),this._distance!=null&&i.push("distance: "+l.number(this._distance)),"{ "+i.join(", ")+" }"},isTouching:function(){var i=this._intersection;if(i&&this.getTangent().isCollinear(i.getTangent())){var A=this.getCurve(),l=i.getCurve();return!(A.isStraight()&&l.isStraight()&&A.getLine().intersect(l.getLine()))}return!1},isCrossing:function(){var i=this._intersection;if(!i)return!1;var A=this.getTime(),l=i.getTime(),L=1e-8,h=1-L,c=A>=L&&A<=h,d=l>=L&&l<=h;if(c&&d)return!this.isTouching();var I=this.getCurve(),u=I&&A<L?I.getPrevious():I,S=i.getCurve(),f=S&&l<L?S.getPrevious():S;if(A>h&&(I=I.getNext()),l>h&&(S=S.getNext()),!u||!I||!f||!S)return!1;var O=[];function D(w,W){var k=w.getValues(),Z=oe.classify(k).roots||oe.getPeaks(k),J=Z.length,X=oe.getLength(k,W&&J?Z[J-1]:0,!W&&J?Z[0]:1);O.push(J?X:X/32)}function y(w,W,k){return W<k?w>W&&w<k:w>W||w<k}c||(D(u,!0),D(I,!1)),d||(D(f,!0),D(S,!1));var H=this.getPoint(),P=Math.min.apply(Math,O),v=c?I.getTangentAtTime(A):I.getPointAt(P).subtract(H),F=c?v.negate():u.getPointAt(-P).subtract(H),M=d?S.getTangentAtTime(l):S.getPointAt(P).subtract(H),m=d?M.negate():f.getPointAt(-P).subtract(H),B=F.getAngle(),G=v.getAngle(),b=m.getAngle(),U=M.getAngle();return!!(c?y(B,b,U)^y(G,b,U)&&y(B,U,b)^y(G,U,b):y(b,B,G)^y(U,B,G)&&y(b,G,B)^y(U,G,B))},hasOverlap:function(){return!!this._overlap}},o.each(oe._evaluateMethods,function(i){var A=i+"At";this[i]=function(){var l=this.getCurve(),L=this.getTime();return L!=null&&l&&l[A](L,!0)}},{preserve:!0}),new function(){function i(A,l,L){var h=A.length,c=0,d=h-1;function I(H,P){for(var v=H+P;v>=-1&&v<=h;v+=P){var F=A[(v%h+h)%h];if(!l.getPoint().isClose(F.getPoint(),1e-7))break;if(l.equals(F))return F}return null}for(;c<=d;){var u=c+d>>>1,S=A[u],f;if(L&&(f=l.equals(S)?S:I(u,-1)||I(u,1)))return l._overlap&&(f._overlap=f._intersection._overlap=!0),f;var O=l.getPath(),D=S.getPath(),y=O!==D?O._id-D._id:l.getIndex()+l.getTime()-(S.getIndex()+S.getTime());y<0?d=u-1:c=u+1}return A.splice(c,0,l),l}return{statics:{insert:i,expand:function(A){for(var l=A.slice(),L=A.length-1;L>=0;L--)i(l,A[L]._intersection,!1);return l}}}}),At=Ae.extend({_class:"PathItem",_selectBounds:!1,_canScaleStroke:!0,beans:!0,initialize:function(){},statics:{create:function(i){var A,l,L;if(o.isPlainObject(i)?(l=i.segments,A=i.pathData):Array.isArray(i)?l=i:typeof i=="string"&&(A=i),l){var h=l[0];L=h&&Array.isArray(h[0])}else A&&(L=(A.match(/m/gi)||[]).length>1||/z\s*\S+/i.test(A));var c=L?Et:Oe;return new c(i)}},_asPathItem:function(){return this},isClockwise:function(){return this.getArea()>=0},setClockwise:function(i){this.isClockwise()!=(i=!!i)&&this.reverse()},setPathData:function(i){var A=i&&i.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/ig),l,L=!1,h,c,d=new g,I=new g;function u(m,B){var G=+l[m];return L&&(G+=d[B]),G}function S(m){return new g(u(m,"x"),u(m+1,"y"))}this.clear();for(var f=0,O=A&&A.length;f<O;f++){var D=A[f],y=D[0],H=y.toLowerCase();l=D.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);var P=l&&l.length;switch(L=y===H,h==="z"&&!/[mz]/.test(H)&&this.moveTo(d),H){case"m":case"l":for(var v=H==="m",F=0;F<P;F+=2)this[v?"moveTo":"lineTo"](d=S(F)),v&&(I=d,v=!1);c=d;break;case"h":case"v":var M=H==="h"?"x":"y";d=d.clone();for(var F=0;F<P;F++)d[M]=u(F,M),this.lineTo(d);c=d;break;case"c":for(var F=0;F<P;F+=6)this.cubicCurveTo(S(F),c=S(F+2),d=S(F+4));break;case"s":for(var F=0;F<P;F+=4)this.cubicCurveTo(/[cs]/.test(h)?d.multiply(2).subtract(c):d,c=S(F),d=S(F+2)),h=H;break;case"q":for(var F=0;F<P;F+=4)this.quadraticCurveTo(c=S(F),d=S(F+2));break;case"t":for(var F=0;F<P;F+=2)this.quadraticCurveTo(c=/[qt]/.test(h)?d.multiply(2).subtract(c):d,d=S(F)),h=H;break;case"a":for(var F=0;F<P;F+=7)this.arcTo(d=S(F+5),new Y(+l[F],+l[F+1]),+l[F+2],+l[F+4],+l[F+3]);break;case"z":this.closePath(1e-12),d=I;break}h=H}},_canComposite:function(){return!(this.hasFill()&&this.hasStroke())},_contains:function(i){var A=i.isInside(this.getBounds({internal:!0,handle:!0}))?this._getWinding(i):{};return A.onPath||!!(this.getFillRule()==="evenodd"?A.windingL&1||A.windingR&1:A.winding)},getIntersections:function(i,A,l,L){var h=this===i||!i,c=this._matrix._orNullIfIdentity(),d=h?c:(l||i._matrix)._orNullIfIdentity();return h||this.getBounds(c).intersects(i.getBounds(d),1e-12)?oe.getIntersections(this.getCurves(),!h&&i.getCurves(),A,c,d,L):[]},getCrossings:function(i){return this.getIntersections(i,function(A){return A.isCrossing()})},getNearestLocation:function(){for(var i=g.read(arguments),A=this.getCurves(),l=1/0,L=null,h=0,c=A.length;h<c;h++){var d=A[h].getNearestLocation(i);d._distance<l&&(l=d._distance,L=d)}return L},getNearestPoint:function(){var i=this.getNearestLocation.apply(this,arguments);return i&&i.getPoint()},interpolate:function(i,A,l){var L=!this._children,h=L?"_segments":"_children",c=i[h],d=A[h],I=this[h];if(!c||!d||c.length!==d.length)throw new Error("Invalid operands in interpolate() call: "+i+", "+A);var u=I.length,S=d.length;if(u<S)for(var f=L?Ie:Oe,O=u;O<S;O++)this.add(new f);else u>S&&this[L?"removeSegments":"removeChildren"](S,u);for(var O=0;O<S;O++)I[O].interpolate(c[O],d[O],l);L&&(this.setClosed(i._closed),this._changed(9))},compare:function(i){var A=!1;if(i){var l=this._children||[this],L=i._children?i._children.slice():[i],h=l.length,c=L.length,d=[],I=0;A=!0;for(var u=T.findItemBoundsCollisions(l,L,R.GEOMETRIC_EPSILON),S=h-1;S>=0&&A;S--){var f=l[S];A=!1;var O=u[S];if(O)for(var D=O.length-1;D>=0&&!A;D--)f.compare(L[O[D]])&&(d[O[D]]||(d[O[D]]=!0,I++),A=!0)}A=A&&I===c}return A}}),Oe=At.extend({_class:"Path",_serializeFields:{segments:[],closed:!1},initialize:function(A){this._closed=!1,this._segments=[],this._version=0;var l=arguments,L=Array.isArray(A)?typeof A[0]=="object"?A:l:A&&A.size===r&&(A.x!==r||A.point!==r)?l:null;L&&L.length>0?this.setSegments(L):(this._curves=r,this._segmentSelection=0,!L&&typeof A=="string"&&(this.setPathData(A),A=null)),this._initialize(!L&&A)},_equals:function(i){return this._closed===i._closed&&o.equals(this._segments,i._segments)},copyContent:function(i){this.setSegments(i._segments),this._closed=i._closed},_changed:function i(A){if(i.base.call(this,A),A&8){if(this._length=this._area=r,A&32)this._version++;else if(this._curves)for(var l=0,L=this._curves.length;l<L;l++)this._curves[l]._changed()}else A&64&&(this._bounds=r)},getStyle:function(){var i=this._parent;return(i instanceof Et?i:this)._style},getSegments:function(){return this._segments},setSegments:function(i){var A=this.isFullySelected(),l=i&&i.length;if(this._segments.length=0,this._segmentSelection=0,this._curves=r,l){var L=i[l-1];typeof L=="boolean"&&(this.setClosed(L),l--),this._add(Ie.readList(i,0,{},l))}A&&this.setFullySelected(!0)},getFirstSegment:function(){return this._segments[0]},getLastSegment:function(){return this._segments[this._segments.length-1]},getCurves:function(){var i=this._curves,A=this._segments;if(!i){var l=this._countCurves();i=this._curves=new Array(l);for(var L=0;L<l;L++)i[L]=new oe(this,A[L],A[L+1]||A[0])}return i},getFirstCurve:function(){return this.getCurves()[0]},getLastCurve:function(){var i=this.getCurves();return i[i.length-1]},isClosed:function(){return this._closed},setClosed:function(i){if(this._closed!=(i=!!i)){if(this._closed=i,this._curves){var A=this._curves.length=this._countCurves();i&&(this._curves[A-1]=new oe(this,this._segments[A-1],this._segments[0]))}this._changed(41)}}},{beans:!0,getPathData:function(i,A){var l=this._segments,L=l.length,h=new p(A),c=new Array(6),d=!0,I,u,S,f,O,D,y,H,P=[];function v(M,m){if(M._transformCoordinates(i,c),I=c[0],u=c[1],d)P.push("M"+h.pair(I,u)),d=!1;else if(O=c[2],D=c[3],O===I&&D===u&&y===S&&H===f){if(!m){var B=I-S,G=u-f;P.push(B===0?"v"+h.number(G):G===0?"h"+h.number(B):"l"+h.pair(B,G))}}else P.push("c"+h.pair(y-S,H-f)+" "+h.pair(O-S,D-f)+" "+h.pair(I-S,u-f));S=I,f=u,y=c[4],H=c[5]}if(!L)return"";for(var F=0;F<L;F++)v(l[F]);return this._closed&&L>0&&(v(l[0],!0),P.push("z")),P.join("")},isEmpty:function(){return!this._segments.length},_transformContent:function(i){for(var A=this._segments,l=new Array(6),L=0,h=A.length;L<h;L++)A[L]._transformCoordinates(i,l,!0);return!0},_add:function(i,d){for(var l=this._segments,L=this._curves,h=i.length,c=d==null,d=c?l.length:d,I=0;I<h;I++){var u=i[I];u._path&&(u=i[I]=u.clone()),u._path=this,u._index=d+I,u._selection&&this._updateSelection(u,0,u._selection)}if(c)o.push(l,i);else{l.splice.apply(l,[d,0].concat(i));for(var I=d+h,S=l.length;I<S;I++)l[I]._index=I}if(L){var f=this._countCurves(),O=d>0&&d+h-1===f?d-1:d,D=O,y=Math.min(O+h,f);i._curves&&(L.splice.apply(L,[O,0].concat(i._curves)),D+=i._curves.length);for(var I=D;I<y;I++)L.splice(I,0,new oe(this,null,null));this._adjustCurves(O,y)}return this._changed(41),i},_adjustCurves:function(i,A){for(var l=this._segments,L=this._curves,h,c=i;c<A;c++)h=L[c],h._path=this,h._segment1=l[c],h._segment2=l[c+1]||l[0],h._changed();(h=L[this._closed&&!i?l.length-1:i-1])&&(h._segment2=l[i]||l[0],h._changed()),(h=L[A])&&(h._segment1=l[A],h._changed())},_countCurves:function(){var i=this._segments.length;return!this._closed&&i>0?i-1:i},add:function(i){var A=arguments;return A.length>1&&typeof i!="number"?this._add(Ie.readList(A)):this._add([Ie.read(A)])[0]},insert:function(i,A){var l=arguments;return l.length>2&&typeof A!="number"?this._add(Ie.readList(l,1),i):this._add([Ie.read(l,1)],i)[0]},addSegment:function(){return this._add([Ie.read(arguments)])[0]},insertSegment:function(i){return this._add([Ie.read(arguments,1)],i)[0]},addSegments:function(i){return this._add(Ie.readList(i))},insertSegments:function(i,A){return this._add(Ie.readList(A),i)},removeSegment:function(i){return this.removeSegments(i,i+1)[0]||null},removeSegments:function(i,A,l){i=i||0,A=o.pick(A,this._segments.length);var L=this._segments,h=this._curves,c=L.length,d=L.splice(i,A-i),I=d.length;if(!I)return d;for(var u=0;u<I;u++){var S=d[u];S._selection&&this._updateSelection(S,S._selection,0),S._index=S._path=null}for(var u=i,f=L.length;u<f;u++)L[u]._index=u;if(h){for(var O=i>0&&A===c+(this._closed?1:0)?i-1:i,h=h.splice(O,I),u=h.length-1;u>=0;u--)h[u]._path=null;l&&(d._curves=h.slice(1)),this._adjustCurves(O,O)}return this._changed(41),d},clear:"#removeSegments",hasHandles:function(){for(var i=this._segments,A=0,l=i.length;A<l;A++)if(i[A].hasHandles())return!0;return!1},clearHandles:function(){for(var i=this._segments,A=0,l=i.length;A<l;A++)i[A].clearHandles()},getLength:function(){if(this._length==null){for(var i=this.getCurves(),A=0,l=0,L=i.length;l<L;l++)A+=i[l].getLength();this._length=A}return this._length},getArea:function(){var i=this._area;if(i==null){var A=this._segments,l=this._closed;i=0;for(var L=0,h=A.length;L<h;L++){var c=L+1===h;i+=oe.getArea(oe.getValues(A[L],A[c?0:L+1],null,c&&!l))}this._area=i}return i},isFullySelected:function(){var i=this._segments.length;return this.isSelected()&&i>0&&this._segmentSelection===i*7},setFullySelected:function(i){i&&this._selectSegments(!0),this.setSelected(i)},setSelection:function i(A){A&1||this._selectSegments(!1),i.base.call(this,A)},_selectSegments:function(i){var A=this._segments,l=A.length,L=i?7:0;this._segmentSelection=L*l;for(var h=0;h<l;h++)A[h]._selection=L},_updateSelection:function(i,A,l){i._selection=l;var L=this._segmentSelection+=l-A;L>0&&this.setSelected(!0)},divideAt:function(i){var A=this.getLocationAt(i),l;return A&&(l=A.getCurve().divideAt(A.getCurveOffset()))?l._segment1:null},splitAt:function(i){var A=this.getLocationAt(i),l=A&&A.index,L=A&&A.time,h=1e-8,c=1-h;L>c&&(l++,L=0);var d=this.getCurves();if(l>=0&&l<d.length){L>=h&&d[l++].divideAtTime(L);var I=this.removeSegments(l,this._segments.length,!0),u;return this._closed?(this.setClosed(!1),u=this):(u=new Oe(Ae.NO_INSERT),u.insertAbove(this),u.copyAttributes(this)),u._add(I,0),this.addSegment(I[0]),u}return null},split:function(i,A){var l,L=A===r?i:(l=this.getCurves()[i])&&l.getLocationAtTime(A);return L!=null?this.splitAt(L):null},join:function(i,A){var l=A||0;if(i&&i!==this){var L=i._segments,h=this.getLastSegment(),c=i.getLastSegment();if(!c)return this;h&&h._point.isClose(c._point,l)&&i.reverse();var d=i.getFirstSegment();if(h&&h._point.isClose(d._point,l))h.setHandleOut(d._handleOut),this._add(L.slice(1));else{var I=this.getFirstSegment();I&&I._point.isClose(d._point,l)&&i.reverse(),c=i.getLastSegment(),I&&I._point.isClose(c._point,l)?(I.setHandleIn(c._handleIn),this._add(L.slice(0,L.length-1),0)):this._add(L.slice())}i._closed&&this._add([L[0]]),i.remove()}var u=this.getFirstSegment(),S=this.getLastSegment();return u!==S&&u._point.isClose(S._point,l)&&(u.setHandleIn(S._handleIn),S.remove(),this.setClosed(!0)),this},reduce:function(i){for(var A=this.getCurves(),l=i&&i.simplify,L=l?1e-7:0,h=A.length-1;h>=0;h--){var c=A[h];!c.hasHandles()&&(!c.hasLength(L)||l&&c.isCollinear(c.getNext()))&&c.remove()}return this},reverse:function(){this._segments.reverse();for(var i=0,A=this._segments.length;i<A;i++){var l=this._segments[i],L=l._handleIn;l._handleIn=l._handleOut,l._handleOut=L,l._index=i}this._curves=null,this._changed(9)},flatten:function(i){for(var A=new Lt(this,i||.25,256,!0),l=A.parts,L=l.length,h=[],c=0;c<L;c++)h.push(new Ie(l[c].curve.slice(0,2)));!this._closed&&L>0&&h.push(new Ie(l[L-1].curve.slice(6))),this.setSegments(h)},simplify:function(i){var A=new Gt(this).fit(i||2.5);return A&&this.setSegments(A),!!A},smooth:function(i){var A=this,l=i||{},L=l.type||"asymmetric",h=this._segments,c=h.length,d=this._closed;function I(Be,tt){var We=Be&&Be.index;if(We!=null){var Xe=Be.path;if(Xe&&Xe!==A)throw new Error(Be._class+" "+We+" of "+Xe+" is not part of "+A);tt&&Be instanceof oe&&We++}else We=typeof Be=="number"?Be:tt;return Math.min(We<0&&d?We%c:We<0?We+c:We,c-1)}var u=d&&l.from===r&&l.to===r,S=I(l.from,0),f=I(l.to,c-1);if(S>f)if(d)S-=c;else{var O=S;S=f,f=O}if(/^(?:asymmetric|continuous)$/.test(L)){var D=L==="asymmetric",y=Math.min,H=f-S+1,P=H-1,v=u?y(H,4):1,F=v,M=v,m=[];if(d||(F=y(1,S),M=y(1,c-f-1)),P+=F+M,P<=1)return;for(var B=0,G=S-F;B<=P;B++,G++)m[B]=h[(G<0?G+c:G)%c]._point;for(var b=m[0]._x+2*m[1]._x,U=m[0]._y+2*m[1]._y,w=2,W=P-1,k=[b],Z=[U],J=[w],X=[],j=[],B=1;B<P;B++){var q=B<W,ee=q||D?1:2,re=q?4:D?2:7,le=q?4:D?3:8,Ee=q?2:D?0:1,de=ee/w;w=J[B]=re-de,b=k[B]=le*m[B]._x+Ee*m[B+1]._x-de*b,U=Z[B]=le*m[B]._y+Ee*m[B+1]._y-de*U}X[W]=k[W]/J[W],j[W]=Z[W]/J[W];for(var B=P-2;B>=0;B--)X[B]=(k[B]-X[B+1])/J[B],j[B]=(Z[B]-j[B+1])/J[B];X[P]=(3*m[P]._x-X[W])/2,j[P]=(3*m[P]._y-j[W])/2;for(var B=F,He=P-M,G=S;B<=He;B++,G++){var fe=h[G<0?G+c:G],De=fe._point,Ne=X[B]-De._x,be=j[B]-De._y;(u||B<He)&&fe.setHandleOut(Ne,be),(u||B>F)&&fe.setHandleIn(-Ne,-be)}}else for(var B=S;B<=f;B++)h[B<0?B+c:B].smooth(l,!u&&B===S,!u&&B===f)},toShape:function(i){if(!this._closed)return null;var A=this._segments,l,L,h,c;function d(D,y){var H=A[D],P=H.getNext(),v=A[y],F=v.getNext();return H._handleOut.isZero()&&P._handleIn.isZero()&&v._handleOut.isZero()&&F._handleIn.isZero()&&P._point.subtract(H._point).isCollinear(F._point.subtract(v._point))}function I(D){var y=A[D],H=y.getPrevious(),P=y.getNext();return H._handleOut.isZero()&&y._handleIn.isZero()&&y._handleOut.isZero()&&P._handleIn.isZero()&&y._point.subtract(H._point).isOrthogonal(P._point.subtract(y._point))}function u(D){var y=A[D],H=y.getNext(),P=y._handleOut,v=H._handleIn,F=.5522847498307936;if(P.isOrthogonal(v)){var M=y._point,m=H._point,B=new Te(M,P,!0).intersect(new Te(m,v,!0),!0);return B&&R.isZero(P.getLength()/B.subtract(M).getLength()-F)&&R.isZero(v.getLength()/B.subtract(m).getLength()-F)}return!1}function S(D,y){return A[D]._point.getDistance(A[y]._point)}if(!this.hasHandles()&&A.length===4&&d(0,2)&&d(1,3)&&I(1)?(l=me.Rectangle,L=new Y(S(0,3),S(0,1)),c=A[1]._point.add(A[2]._point).divide(2)):A.length===8&&u(0)&&u(2)&&u(4)&&u(6)&&d(1,5)&&d(3,7)?(l=me.Rectangle,L=new Y(S(1,6),S(0,3)),h=L.subtract(new Y(S(0,7),S(1,2))).divide(2),c=A[3]._point.add(A[4]._point).divide(2)):A.length===4&&u(0)&&u(1)&&u(2)&&u(3)&&(R.isZero(S(0,2)-S(1,3))?(l=me.Circle,h=S(0,2)/2):(l=me.Ellipse,h=new Y(S(2,0)/2,S(3,1)/2)),c=A[1]._point),l){var f=this.getPosition(!0),O=new l({center:f,size:L,radius:h,insert:!1});return O.copyAttributes(this,!0),O._matrix.prepend(this._matrix),O.rotate(c.subtract(f).getAngle()+90),(i===r||i)&&O.insertAbove(this),O}return null},toPath:"#clone",compare:function i(A){if(!A||A instanceof Et)return i.base.call(this,A);var l=this.getCurves(),L=A.getCurves(),h=l.length,c=L.length;if(!h||!c)return h==c;for(var d=l[0].getValues(),I=[],u=0,S,f=0,O,D=0;D<c;D++){var v=L[D].getValues();I.push(v);var y=oe.getOverlaps(d,v);if(y){S=!D&&y[0][0]>0?c-1:D,O=y[0][1];break}}for(var H=Math.abs,P=1e-8,v=I[S],F;d&&v;){var y=oe.getOverlaps(d,v);if(y){var M=y[0][0];if(H(M-f)<P){f=y[1][0],f===1&&(d=++u<h?l[u].getValues():null,f=0);var m=y[0][1];if(H(m-O)<P){if(F||(F=[S,m]),O=y[1][1],O===1&&(++S>=c&&(S=0),v=I[S]||L[S].getValues(),O=0),!d)return F[0]===S&&F[1]===O;continue}}}break}return!1},_hitTestSelf:function(i,A,l,L){var h=this,c=this.getStyle(),d=this._segments,I=d.length,u=this._closed,S=A._tolerancePadding,f=S,O,D,y,H,P,v,F=A.stroke&&c.hasStroke(),M=A.fill&&c.hasFill(),m=A.curves,B=F?c.getStrokeWidth()/2:M&&A.tolerance>0||m?0:null;B!==null&&(B>0?(O=c.getStrokeJoin(),D=c.getStrokeCap(),y=c.getMiterLimit(),f=f.add(Oe._getStrokePadding(B,L))):O=D="round");function G(X,j){return i.subtract(X).divide(j).length<=1}function b(X,j,q){if(!A.selected||j.isSelected()){var ee=X._point;if(j!==ee&&(j=j.add(ee)),G(j,f))return new ot(q,h,{segment:X,point:j})}}function U(X,j){return(j||A.segments)&&b(X,X._point,"segment")||!j&&A.handles&&(b(X,X._handleIn,"handle-in")||b(X,X._handleOut,"handle-out"))}function w(X){H.add(X)}function W(X){var j=u||X._index>0&&X._index<I-1;if((j?O:D)==="round")return G(X._point,f);if(H=new Oe({internal:!0,closed:!0}),j?X.isSmooth()||Oe._addBevelJoin(X,O,B,y,null,L,w,!0):D==="square"&&Oe._addSquareCap(X,D,B,null,L,w,!0),!H.isEmpty()){var q;return H.contains(i)||(q=H.getNearestLocation(i))&&G(q.getPoint(),S)}}if(A.ends&&!A.segments&&!u){if(v=U(d[0],!0)||U(d[I-1],!0))return v}else if(A.segments||A.handles){for(var k=0;k<I;k++)if(v=U(d[k]))return v}if(B!==null){if(P=this.getNearestLocation(i),P){var Z=P.getTime();Z===0||Z===1&&I>1?W(P.getSegment())||(P=null):G(P.getPoint(),f)||(P=null)}if(!P&&O==="miter"&&I>1)for(var k=0;k<I;k++){var J=d[k];if(i.getDistance(J._point)<=y*B&&W(J)){P=J.getLocation();break}}}return!P&&M&&this._contains(i)||P&&!F&&!m?new ot("fill",this):P?new ot(F?"stroke":"curve",this,{location:P,point:P.getPoint()}):null}},o.each(oe._evaluateMethods,function(i){this[i+"At"]=function(A){var l=this.getLocationAt(A);return l&&l[i]()}},{beans:!1,getLocationOf:function(){for(var i=g.read(arguments),A=this.getCurves(),l=0,L=A.length;l<L;l++){var h=A[l].getLocationOf(i);if(h)return h}return null},getOffsetOf:function(){var i=this.getLocationOf.apply(this,arguments);return i?i.getOffset():null},getLocationAt:function(i){if(typeof i=="number"){for(var A=this.getCurves(),l=0,L=0,h=A.length;L<h;L++){var c=l,d=A[L];if(l+=d.getLength(),l>i)return d.getLocationAt(i-c)}if(A.length>0&&i<=this.getLength())return new qe(A[A.length-1],1)}else if(i&&i.getPath&&i.getPath()===this)return i;return null},getOffsetsWithTangent:function(){var i=g.read(arguments);if(i.isZero())return[];for(var A=[],l=0,L=this.getCurves(),h=0,c=L.length;h<c;h++){for(var d=L[h],I=d.getTimesWithTangent(i),u=0,S=I.length;u<S;u++){var f=l+d.getOffsetAtTime(I[u]);A.indexOf(f)<0&&A.push(f)}l+=d.length}return A}}),new function(){function i(l,L,h,c){if(c<=0)return;var d=c/2,I=c-2,u=d-1,S=new Array(6),f,O;function D(M){var m=S[M],B=S[M+1];(f!=m||O!=B)&&(l.beginPath(),l.moveTo(f,O),l.lineTo(m,B),l.stroke(),l.beginPath(),l.arc(m,B,d,0,Math.PI*2,!0),l.fill())}for(var y=0,H=L.length;y<H;y++){var P=L[y],v=P._selection;if(P._transformCoordinates(h,S),f=S[0],O=S[1],v&2&&D(2),v&4&&D(4),l.fillRect(f-d,O-d,c,c),I>0&&!(v&1)){var F=l.fillStyle;l.fillStyle="#ffffff",l.fillRect(f-u,O-u,I,I),l.fillStyle=F}}}function A(l,L,h){var c=L._segments,d=c.length,I=new Array(6),u=!0,S,f,O,D,y,H,P,v;function F(m){if(h)m._transformCoordinates(h,I),S=I[0],f=I[1];else{var B=m._point;S=B._x,f=B._y}if(u)l.moveTo(S,f),u=!1;else{if(h)y=I[2],H=I[3];else{var G=m._handleIn;y=S+G._x,H=f+G._y}y===S&&H===f&&P===O&&v===D?l.lineTo(S,f):l.bezierCurveTo(P,v,y,H,S,f)}if(O=S,D=f,h)P=I[4],v=I[5];else{var G=m._handleOut;P=O+G._x,v=D+G._y}}for(var M=0;M<d;M++)F(c[M]);L._closed&&d>0&&F(c[0])}return{_draw:function(l,L,h,c){var d=L.dontStart,I=L.dontFinish||L.clip,u=this.getStyle(),S=u.hasFill(),f=u.hasStroke(),O=u.getDashArray(),D=!Ze.support.nativeDash&&f&&O&&O.length;d||l.beginPath(),(S||f&&!D||I)&&(A(l,this,c),this._closed&&l.closePath());function y(m){return O[(m%D+D)%D]}if(!I&&(S||f)&&(this._setStyles(l,L,h),S&&(l.fill(u.getFillRule()),l.shadowColor="rgba(0,0,0,0)"),f)){if(D){d||l.beginPath();for(var H=new Lt(this,.25,32,!1,c),P=H.length,v=-u.getDashOffset(),F,M=0;v>0;)v-=y(M--)+y(M--);for(;v<P;)F=v+y(M++),(v>0||F>0)&&H.drawPart(l,Math.max(v,0),Math.max(F,0)),v=F+y(M++)}l.stroke()}},_drawSelected:function(l,L){l.beginPath(),A(l,this,L),l.stroke(),i(l,this._segments,L,Ze.settings.handleSize)}}},new function(){function i(A){var l=A._segments;if(!l.length)throw new Error("Use a moveTo() command first");return l[l.length-1]}return{moveTo:function(){var A=this._segments;A.length===1&&this.removeSegment(0),A.length||this._add([new Ie(g.read(arguments))])},moveBy:function(){throw new Error("moveBy() is unsupported on Path items.")},lineTo:function(){this._add([new Ie(g.read(arguments))])},cubicCurveTo:function(){var A=arguments,l=g.read(A),L=g.read(A),h=g.read(A),c=i(this);c.setHandleOut(l.subtract(c._point)),this._add([new Ie(h,L.subtract(h))])},quadraticCurveTo:function(){var A=arguments,l=g.read(A),L=g.read(A),h=i(this)._point;this.cubicCurveTo(l.add(h.subtract(l).multiply(1/3)),l.add(L.subtract(l).multiply(1/3)),L)},curveTo:function(){var A=arguments,l=g.read(A),L=g.read(A),h=o.pick(o.read(A),.5),c=1-h,d=i(this)._point,I=l.subtract(d.multiply(c*c)).subtract(L.multiply(h*h)).divide(2*h*c);if(I.isNaN())throw new Error("Cannot put a curve through points with parameter = "+h);this.quadraticCurveTo(I,L)},arcTo:function(){var A=arguments,l=Math.abs,L=Math.sqrt,h=i(this),c=h._point,d=g.read(A),I,u=o.peek(A),S=o.pick(u,!0),f,O,D,y;if(typeof S=="boolean")var H=c.add(d).divide(2),I=H.add(H.subtract(c).rotate(S?-90:90));else if(o.remain(A)<=2)I=d,d=g.read(A);else if(!c.equals(d)){var P=Y.read(A),v=R.isZero;if(v(P.width)||v(P.height))return this.lineTo(d);var F=o.read(A),S=!!o.read(A),M=!!o.read(A),H=c.add(d).divide(2),m=c.subtract(H).rotate(-F),B=m.x,G=m.y,b=l(P.width),U=l(P.height),w=b*b,W=U*U,k=B*B,Z=G*G,J=L(k/w+Z/W);if(J>1&&(b*=J,U*=J,w=b*b,W=U*U),J=(w*W-w*Z-W*k)/(w*Z+W*k),l(J)<1e-12&&(J=0),J<0)throw new Error("Cannot create an arc with the given arguments");f=new g(b*G/U,-U*B/b).multiply((M===S?-1:1)*L(J)).rotate(F).add(H),y=new Q().translate(f).rotate(F).scale(b,U),D=y._inverseTransform(c),O=D.getDirectedAngle(y._inverseTransform(d)),!S&&O>0?O-=360:S&&O<0&&(O+=360)}if(I){var X=new Te(c.add(I).divide(2),I.subtract(c).rotate(90),!0),j=new Te(I.add(d).divide(2),d.subtract(I).rotate(90),!0),q=new Te(c,d),ee=q.getSide(I);if(f=X.intersect(j,!0),!f){if(!ee)return this.lineTo(d);throw new Error("Cannot create an arc with the given arguments")}D=c.subtract(f),O=D.getDirectedAngle(d.subtract(f));var re=q.getSide(f,!0);re===0?O=ee*l(O):ee===re&&(O+=O<0?360:-360)}if(O){for(var le=1e-5,Ee=l(O),de=Ee>=360?4:Math.ceil((Ee-le)/90),He=O/de,fe=He*Math.PI/360,De=4/3*Math.sin(fe)/(1+Math.cos(fe)),Ne=[],be=0;be<=de;be++){var m=d,Be=null;if(be<de&&(Be=D.rotate(90).multiply(De),y?(m=y._transformPoint(D),Be=y._transformPoint(D.add(Be)).subtract(m)):m=f.add(D)),!be)h.setHandleOut(Be);else{var tt=D.rotate(-90).multiply(De);y&&(tt=y._transformPoint(D.add(tt)).subtract(m)),Ne.push(new Ie(m,tt,Be))}D=D.rotate(He)}this._add(Ne)}},lineBy:function(){var A=g.read(arguments),l=i(this)._point;this.lineTo(l.add(A))},curveBy:function(){var A=arguments,l=g.read(A),L=g.read(A),h=o.read(A),c=i(this)._point;this.curveTo(c.add(l),c.add(L),h)},cubicCurveBy:function(){var A=arguments,l=g.read(A),L=g.read(A),h=g.read(A),c=i(this)._point;this.cubicCurveTo(c.add(l),c.add(L),c.add(h))},quadraticCurveBy:function(){var A=arguments,l=g.read(A),L=g.read(A),h=i(this)._point;this.quadraticCurveTo(h.add(l),h.add(L))},arcBy:function(){var A=arguments,l=i(this)._point,L=l.add(g.read(A)),h=o.pick(o.peek(A),!0);typeof h=="boolean"?this.arcTo(L,h):this.arcTo(L,l.add(g.read(A)))},closePath:function(A){this.setClosed(!0),this.join(this,A)}}},{_getBounds:function(i,A){var l=A.handle?"getHandleBounds":A.stroke?"getStrokeBounds":"getBounds";return Oe[l](this._segments,this._closed,this,i,A)},statics:{getBounds:function(i,A,l,L,h,c){var d=i[0];if(!d)return new _;var I=new Array(6),u=d._transformCoordinates(L,new Array(6)),S=u.slice(0,2),f=S.slice(),O=new Array(2);function D(P){P._transformCoordinates(L,I);for(var v=0;v<2;v++)oe._addBounds(u[v],u[v+4],I[v+2],I[v],v,c?c[v]:0,S,f,O);var F=u;u=I,I=F}for(var y=1,H=i.length;y<H;y++)D(i[y]);return A&&D(d),new _(S[0],S[1],f[0]-S[0],f[1]-S[1])},getStrokeBounds:function(i,A,l,L,h){var c=l.getStyle(),d=c.hasStroke(),I=c.getStrokeWidth(),u=d&&l._getStrokeMatrix(L,h),S=d&&Oe._getStrokePadding(I,u),f=Oe.getBounds(i,A,l,L,h,S);if(!d)return f;var O=I/2,D=c.getStrokeJoin(),y=c.getStrokeCap(),H=c.getMiterLimit(),P=new _(new Y(S));function v(b){f=f.include(b)}function F(b){f=f.unite(P.setCenter(b._point.transform(L)))}function M(b,U){U==="round"||b.isSmooth()?F(b):Oe._addBevelJoin(b,U,O,H,L,u,v)}function m(b,U){U==="round"?F(b):Oe._addSquareCap(b,U,O,L,u,v)}var B=i.length-(A?0:1);if(B>0){for(var G=1;G<B;G++)M(i[G],D);A?M(i[0],D):(m(i[0],y),m(i[i.length-1],y))}return f},_getStrokePadding:function(i,A){if(!A)return[i,i];var l=new g(i,0).transform(A),L=new g(0,i).transform(A),h=l.getAngleInRadians(),c=l.getLength(),d=L.getLength(),I=Math.sin(h),u=Math.cos(h),S=Math.tan(h),f=Math.atan2(d*S,c),O=Math.atan2(d,S*c);return[Math.abs(c*Math.cos(f)*u+d*Math.sin(f)*I),Math.abs(d*Math.sin(O)*u+c*Math.cos(O)*I)]},_addBevelJoin:function(i,A,l,L,h,c,d,I){var u=i.getCurve(),S=u.getPrevious(),f=u.getPoint1().transform(h),O=S.getNormalAtTime(1).multiply(l).transform(c),D=u.getNormalAtTime(0).multiply(l).transform(c),y=O.getDirectedAngle(D);if((y<0||y>=180)&&(O=O.negate(),D=D.negate()),I&&d(f),d(f.add(O)),A==="miter"){var H=new Te(f.add(O),new g(-O.y,O.x),!0).intersect(new Te(f.add(D),new g(-D.y,D.x),!0),!0);H&&f.getDistance(H)<=L*l&&d(H)}d(f.add(D))},_addSquareCap:function(i,A,l,L,h,c,d){var I=i._point.transform(L),u=i.getLocation(),S=u.getNormal().multiply(u.getTime()===0?l:-l).transform(h);A==="square"&&(d&&(c(I.subtract(S)),c(I.add(S))),I=I.add(S.rotate(-90))),c(I.add(S)),c(I.subtract(S))},getHandleBounds:function(i,A,l,L,h){var c=l.getStyle(),d=h.stroke&&c.hasStroke(),I,u;if(d){var S=l._getStrokeMatrix(L,h),f=c.getStrokeWidth()/2,O=f;c.getStrokeJoin()==="miter"&&(O=f*c.getMiterLimit()),c.getStrokeCap()==="square"&&(O=Math.max(O,f*Math.SQRT2)),I=Oe._getStrokePadding(f,S),u=Oe._getStrokePadding(O,S)}for(var D=new Array(6),y=1/0,H=-y,P=y,v=H,F=0,M=i.length;F<M;F++){var m=i[F];m._transformCoordinates(L,D);for(var B=0;B<6;B+=2){var G=B?I:u,b=G?G[0]:0,U=G?G[1]:0,w=D[B],W=D[B+1],k=w-b,Z=w+b,J=W-U,X=W+U;k<y&&(y=k),Z>H&&(H=Z),J<P&&(P=J),X>v&&(v=X)}}return new _(y,P,H-y,v-P)}}});Oe.inject({statics:new function(){var i=.5522847498307936,A=[new Ie([-1,0],[0,i],[0,-i]),new Ie([0,-1],[-i,0],[i,0]),new Ie([1,0],[0,-i],[0,i]),new Ie([0,1],[i,0],[-i,0])];function l(h,c,d){var I=o.getNamed(d),u=new Oe(I&&(I.insert==!0?Ae.INSERT:I.insert==!1?Ae.NO_INSERT:null));return u._add(h),u._closed=c,u.set(I,Ae.INSERT)}function L(h,c,d){for(var I=new Array(4),u=0;u<4;u++){var S=A[u];I[u]=new Ie(S._point.multiply(c).add(h),S._handleIn.multiply(c),S._handleOut.multiply(c))}return l(I,!0,d)}return{Line:function(){var h=arguments;return l([new Ie(g.readNamed(h,"from")),new Ie(g.readNamed(h,"to"))],!1,h)},Circle:function(){var h=arguments,c=g.readNamed(h,"center"),d=o.readNamed(h,"radius");return L(c,new Y(d),h)},Rectangle:function(){var h=arguments,c=_.readNamed(h,"rectangle"),d=Y.readNamed(h,"radius",0,{readNull:!0}),I=c.getBottomLeft(!0),u=c.getTopLeft(!0),S=c.getTopRight(!0),f=c.getBottomRight(!0),O;if(!d||d.isZero())O=[new Ie(I),new Ie(u),new Ie(S),new Ie(f)];else{d=Y.min(d,c.getSize(!0).divide(2));var D=d.width,y=d.height,H=D*i,P=y*i;O=[new Ie(I.add(D,0),null,[-H,0]),new Ie(I.subtract(0,y),[0,P]),new Ie(u.add(0,y),null,[0,-P]),new Ie(u.add(D,0),[-H,0],null),new Ie(S.subtract(D,0),null,[H,0]),new Ie(S.add(0,y),[0,-P],null),new Ie(f.subtract(0,y),null,[0,P]),new Ie(f.subtract(D,0),[H,0])]}return l(O,!0,h)},RoundRectangle:"#Rectangle",Ellipse:function(){var h=arguments,c=me._readEllipse(h);return L(c.center,c.radius,h)},Oval:"#Ellipse",Arc:function(){var h=arguments,c=g.readNamed(h,"from"),d=g.readNamed(h,"through"),I=g.readNamed(h,"to"),u=o.getNamed(h),S=new Oe(u&&u.insert==!1&&Ae.NO_INSERT);return S.moveTo(c),S.arcTo(d,I),S.set(u)},RegularPolygon:function(){for(var h=arguments,c=g.readNamed(h,"center"),d=o.readNamed(h,"sides"),I=o.readNamed(h,"radius"),u=360/d,S=d%3===0,f=new g(0,S?-I:I),O=S?-1:.5,D=new Array(d),y=0;y<d;y++)D[y]=new Ie(c.add(f.rotate((y+O)*u)));return l(D,!0,h)},Star:function(){for(var h=arguments,c=g.readNamed(h,"center"),d=o.readNamed(h,"points")*2,I=o.readNamed(h,"radius1"),u=o.readNamed(h,"radius2"),S=360/d,f=new g(0,-1),O=new Array(d),D=0;D<d;D++)O[D]=new Ie(c.add(f.rotate(S*D).multiply(D%2?u:I)));return l(O,!0,h)}}}});var Et=At.extend({_class:"CompoundPath",_serializeFields:{children:[]},beans:!0,initialize:function(A){this._children=[],this._namedChildren={},this._initialize(A)||(typeof A=="string"?this.setPathData(A):this.addChildren(Array.isArray(A)?A:arguments))},insertChildren:function i(A,l){var L=l,h=L[0];h&&typeof h[0]=="number"&&(L=[L]);for(var c=l.length-1;c>=0;c--){var d=L[c];L===l&&!(d instanceof Oe)&&(L=o.slice(L)),Array.isArray(d)?L[c]=new Oe({segments:d,insert:!1}):d instanceof Et&&(L.splice.apply(L,[c,1].concat(d.removeChildren())),d.remove())}return i.base.call(this,A,L)},reduce:function i(A){for(var l=this._children,L=l.length-1;L>=0;L--){var h=l[L].reduce(A);h.isEmpty()&&h.remove()}if(!l.length){var h=new Oe(Ae.NO_INSERT);return h.copyAttributes(this),h.insertAbove(this),this.remove(),h}return i.base.call(this)},isClosed:function(){for(var i=this._children,A=0,l=i.length;A<l;A++)if(!i[A]._closed)return!1;return!0},setClosed:function(i){for(var A=this._children,l=0,L=A.length;l<L;l++)A[l].setClosed(i)},getFirstSegment:function(){var i=this.getFirstChild();return i&&i.getFirstSegment()},getLastSegment:function(){var i=this.getLastChild();return i&&i.getLastSegment()},getCurves:function(){for(var i=this._children,A=[],l=0,L=i.length;l<L;l++)o.push(A,i[l].getCurves());return A},getFirstCurve:function(){var i=this.getFirstChild();return i&&i.getFirstCurve()},getLastCurve:function(){var i=this.getLastChild();return i&&i.getLastCurve()},getArea:function(){for(var i=this._children,A=0,l=0,L=i.length;l<L;l++)A+=i[l].getArea();return A},getLength:function(){for(var i=this._children,A=0,l=0,L=i.length;l<L;l++)A+=i[l].getLength();return A},getPathData:function(i,A){for(var l=this._children,L=[],h=0,c=l.length;h<c;h++){var d=l[h],I=d._matrix;L.push(d.getPathData(i&&!I.isIdentity()?i.appended(I):i,A))}return L.join("")},_hitTestChildren:function i(A,l,L){return i.base.call(this,A,l.class===Oe||l.type==="path"?l:o.set({},l,{fill:!1}),L)},_draw:function(i,A,l,L){var h=this._children;if(h.length){A=A.extend({dontStart:!0,dontFinish:!0}),i.beginPath();for(var c=0,d=h.length;c<d;c++)h[c].draw(i,A,L);if(!A.clip){this._setStyles(i,A,l);var I=this._style;I.hasFill()&&(i.fill(I.getFillRule()),i.shadowColor="rgba(0,0,0,0)"),I.hasStroke()&&i.stroke()}}},_drawSelected:function(i,A,l){for(var L=this._children,h=0,c=L.length;h<c;h++){var d=L[h],I=d._matrix;l[d._id]||d._drawSelected(i,I.isIdentity()?A:A.appended(I))}}},new function(){function i(A,l){var L=A._children;if(l&&!L.length)throw new Error("Use a moveTo() command first");return L[L.length-1]}return o.each(["lineTo","cubicCurveTo","quadraticCurveTo","curveTo","arcTo","lineBy","cubicCurveBy","quadraticCurveBy","curveBy","arcBy"],function(A){this[A]=function(){var l=i(this,!0);l[A].apply(l,arguments)}},{moveTo:function(){var A=i(this),l=A&&A.isEmpty()?A:new Oe(Ae.NO_INSERT);l!==A&&this.addChild(l),l.moveTo.apply(l,arguments)},moveBy:function(){var A=i(this,!0),l=A&&A.getLastSegment(),L=g.read(arguments);this.moveTo(l?L.add(l._point):L)},closePath:function(A){i(this,!0).closePath(A)}})},o.each(["reverse","flatten","simplify","smooth"],function(i){this[i]=function(A){for(var l=this._children,L,h=0,c=l.length;h<c;h++)L=l[h][i](A)||L;return L}},{}));At.inject(new function(){var i=Math.min,A=Math.max,l=Math.abs,L={unite:{1:!0,2:!0},intersect:{2:!0},subtract:{1:!0},exclude:{1:!0,"-1":!0}};function h(F){return F._children||[F]}function c(F,M){var m=F.clone(!1).reduce({simplify:!0}).transform(null,!0,!0);if(M){for(var B=h(m),G=0,b=B.length;G<b;G++){var F=B[G];!F._closed&&!F.isEmpty()&&(F.closePath(1e-12),F.getFirstSegment().setHandleIn(0,0),F.getLastSegment().setHandleOut(0,0))}m=m.resolveCrossings().reorient(m.getFillRule()==="nonzero",!0)}return m}function d(F,M,m,B,G){var b=new Et(Ae.NO_INSERT);return b.addChildren(F,!0),b=b.reduce({simplify:M}),G&&G.insert==!1||b.insertAbove(B&&m.isSibling(B)&&m.getIndex()<B.getIndex()?B:m),b.copyAttributes(m,!0),b}function I(F){return F.hasOverlap()||F.isCrossing()}function u(F,M,m,B){if(B&&(B.trace==!1||B.stroke)&&/^(subtract|intersect)$/.test(m))return S(F,M,m);var G=c(F,!0),b=M&&F!==M&&c(M,!0),U=L[m];U[m]=!0,b&&(U.subtract||U.exclude)^(b.isClockwise()^G.isClockwise())&&b.reverse();var w=y(qe.expand(G.getIntersections(b,I))),W=h(G),k=b&&h(b),Z=[],J=[],X;function j(Be){for(var tt=0,We=Be.length;tt<We;tt++){var Xe=Be[tt];o.push(Z,Xe._segments),o.push(J,Xe.getCurves()),Xe._overlapsOnly=!0}}function q(Be){for(var tt=[],We=0,Xe=Be&&Be.length;We<Xe;We++)tt.push(J[Be[We]]);return tt}if(w.length){j(W),k&&j(k);for(var ee=new Array(J.length),re=0,le=J.length;re<le;re++)ee[re]=J[re].getValues();for(var Ee=T.findCurveBoundsCollisions(ee,ee,0,!0),de={},re=0;re<J.length;re++){var He=J[re],fe=He._path._id,De=de[fe]=de[fe]||{};De[He.getIndex()]={hor:q(Ee[re].hor),ver:q(Ee[re].ver)}}for(var re=0,le=w.length;re<le;re++)P(w[re]._segment,G,b,de,U);for(var re=0,le=Z.length;re<le;re++){var Ne=Z[re],be=Ne._intersection;Ne._winding||P(Ne,G,b,de,U),be&&be._overlap||(Ne._path._overlapsOnly=!1)}X=v(Z,U)}else X=D(k?W.concat(k):W.slice(),function(Be){return!!U[Be]});return d(X,!0,F,M,B)}function S(F,M,m){var B=c(F),G=c(M),b=B.getIntersections(G,I),U=m==="subtract",w=m==="divide",W={},k=[];function Z(j){if(!W[j._id]&&(w||G.contains(j.getPointAt(j.getLength()/2))^U))return k.unshift(j),W[j._id]=!0}for(var J=b.length-1;J>=0;J--){var X=b[J].split();X&&(Z(X)&&X.getFirstSegment().setHandleIn(0,0),B.getLastSegment().setHandleOut(0,0))}return Z(B),d(k,!1,F,M)}function f(F,M){for(var m=F;m;){if(m===M)return;m=m._previous}for(;F._next&&F._next!==M;)F=F._next;if(!F._next){for(;M._previous;)M=M._previous;F._next=M,M._previous=F}}function O(F){for(var M=F.length-1;M>=0;M--)F[M].clearHandles()}function D(F,M,m){var B=F&&F.length;if(B){var G=o.each(F,function(Ee,de){this[Ee._id]={container:null,winding:Ee.isClockwise()?1:-1,index:de}},{}),b=F.slice().sort(function(Ee,de){return l(de.getArea())-l(Ee.getArea())}),U=b[0],w=T.findItemBoundsCollisions(b,null,R.GEOMETRIC_EPSILON);m==null&&(m=U.isClockwise());for(var W=0;W<B;W++){var k=b[W],Z=G[k._id],J=0,X=w[W];if(X){for(var j=null,q=X.length-1;q>=0;q--)if(X[q]<W){j=j||k.getInteriorPoint();var ee=b[X[q]];if(ee.contains(j)){var re=G[ee._id];J=re.winding,Z.winding+=J,Z.container=re.exclude?re.container:ee;break}}}if(M(Z.winding)===M(J))Z.exclude=!0,F[Z.index]=null;else{var le=Z.container;k.setClockwise(le?!le.isClockwise():m)}}}return F}function y(F,M,m){var B=M&&[],G=1e-8,b=1-G,U=!1,w=m||[],W=m&&{},k,Z,J;function X(tt){return tt._path._id+"."+tt._segment1._index}for(var j=(m&&m.length)-1;j>=0;j--){var q=m[j];q._path&&(W[X(q)]=!0)}for(var j=F.length-1;j>=0;j--){var ee=F[j],re=ee._time,le=re,Ee=M&&!M(ee),q=ee._curve,de;if(q&&(q!==Z?(U=!q.hasHandles()||W&&W[X(q)],k=[],J=null,Z=q):J>=G&&(re/=J)),Ee){k&&k.push(ee);continue}else M&&B.unshift(ee);if(J=le,re<G)de=q._segment1;else if(re>b)de=q._segment2;else{var He=q.divideAtTime(re,!0);U&&w.push(q,He),de=He._segment1;for(var fe=k.length-1;fe>=0;fe--){var De=k[fe];De._time=(De._time-re)/(1-re)}}ee._setSegment(de);var Ne=de._intersection,be=ee._intersection;if(Ne){f(Ne,be);for(var Be=Ne;Be;)f(Be._intersection,Ne),Be=Be._next}else de._intersection=be}return m||O(w),B||F}function H(F,M,m,B,G){var b=Array.isArray(M)?M:M[m?"hor":"ver"],U=m?1:0,w=U^1,W=[F.x,F.y],k=W[U],Z=W[w],J=1e-9,X=1e-6,j=k-J,q=k+J,ee=0,re=0,le=0,Ee=0,de=!1,He=!1,fe=1,De=[],Ne,be;function Be(Tt){var Yt=Tt[w+0],pr=Tt[w+6];if(!(Z<i(Yt,pr)||Z>A(Yt,pr))){var Qt=Tt[U+0],nn=Tt[U+2],ca=Tt[U+4],an=Tt[U+6];if(Yt===pr){(Qt<q&&an>j||an<q&&Qt>j)&&(de=!0);return}var Cn=Z===Yt?0:Z===pr||j>A(Qt,nn,ca,an)||q<i(Qt,nn,ca,an)?1:oe.solveCubic(Tt,w,Z,De,0,1)>0?De[0]:1,Sr=Cn===0?Qt:Cn===1?an:oe.getPoint(Tt,Cn)[m?"y":"x"],Or=Yt>pr?1:-1,ii=Ne[w]>Ne[w+6]?1:-1,gn=Ne[U+6];return Z!==Yt?(Sr<j?le+=Or:Sr>q?Ee+=Or:de=!0,Sr>k-X&&Sr<k+X&&(fe/=2)):(Or!==ii?Qt<j?le+=Or:Qt>q&&(Ee+=Or):Qt!=gn&&(gn<q&&Sr>q?(Ee+=Or,de=!0):gn>j&&Sr<j&&(le+=Or,de=!0)),fe/=4),Ne=Tt,!G&&Sr>j&&Sr<q&&oe.getTangent(Tt,Cn)[m?"x":"y"]===0&&H(F,M,!m,B,!0)}}function tt(Tt){var Yt=Tt[w+0],pr=Tt[w+2],Qt=Tt[w+4],nn=Tt[w+6];if(Z<=A(Yt,pr,Qt,nn)&&Z>=i(Yt,pr,Qt,nn)){for(var ca=Tt[U+0],an=Tt[U+2],Cn=Tt[U+4],Sr=Tt[U+6],Or=j>A(ca,an,Cn,Sr)||q<i(ca,an,Cn,Sr)?[Tt]:oe.getMonoCurves(Tt,m),ii,gn=0,Dx=Or.length;gn<Dx;gn++)if(ii=Be(Or[gn]))return ii}}for(var We=0,Xe=b.length;We<Xe;We++){var Qe=b[We],Je=Qe._path,Xt=Qe.getValues(),jt;if((!We||b[We-1]._path!==Je)&&(Ne=null,Je._closed||(be=oe.getValues(Je.getLastCurve().getSegment2(),Qe.getSegment1(),null,!B),be[w]!==be[w+6]&&(Ne=be)),!Ne)){Ne=Xt;for(var Ar=Je.getLastCurve();Ar&&Ar!==Qe;){var wt=Ar.getValues();if(wt[w]!==wt[w+6]){Ne=wt;break}Ar=Ar.getPrevious()}}if(jt=tt(Xt))return jt;if(We+1===Xe||b[We+1]._path!==Je){if(be&&(jt=tt(be)))return jt;de&&!le&&!Ee&&(le=Ee=Je.isClockwise(B)^m?1:-1),ee+=le,re+=Ee,le=Ee=0,de&&(He=!0,de=!1),be=null}}return ee=l(ee),re=l(re),{winding:A(ee,re),windingL:ee,windingR:re,quality:fe,onPath:He}}function P(F,M,m,B,G){var b=[],U=F,w=0,J;do{var W=F.getCurve();if(W){var k=W.getLength();b.push({segment:F,curve:W,length:k}),w+=k}F=F.getNext()}while(F&&!F._intersection&&F!==U);for(var Z=[.5,.25,.75],J={winding:0,quality:-1},X=.001,j=1-X,q=0;q<Z.length&&J.quality<.5;q++)for(var k=w*Z[q],ee=0,re=b.length;ee<re;ee++){var le=b[ee],Ee=le.length;if(k<=Ee){var W=le.curve,de=W._path,He=de._parent,fe=He instanceof Et?He:de,De=R.clamp(W.getTimeAt(k),X,j),Ne=W.getPointAtTime(De),be=l(W.getTangentAtTime(De).y)<Math.SQRT1_2,Be=null;if(G.subtract&&m){var tt=fe===M?m:M,We=tt._getWinding(Ne,be,!0);if(fe===M&&We.winding||fe===m&&!We.winding){if(We.quality<1)continue;Be={winding:0,quality:1}}}Be=Be||H(Ne,B[de._id][W.getIndex()],be,!0),Be.quality>J.quality&&(J=Be);break}k-=Ee}for(var ee=b.length-1;ee>=0;ee--)b[ee].segment._winding=J}function v(F,M){var m=[],B;function G(Xe){var Qe;return!!(Xe&&!Xe._visited&&(!M||M[(Qe=Xe._winding||{}).winding]&&!(M.unite&&Qe.winding===2&&Qe.windingL&&Qe.windingR)))}function b(Xe){if(Xe){for(var Qe=0,Je=B.length;Qe<Je;Qe++)if(Xe===B[Qe])return!0}return!1}function U(Xe){for(var Qe=Xe._segments,Je=0,Xt=Qe.length;Je<Xt;Je++)Qe[Je]._visited=!0}function w(Xe,Qe){var Je=Xe._intersection,Xt=Je,jt=[];Qe&&(B=[Xe]);function Ar(wt,Tt){for(;wt&&wt!==Tt;){var Yt=wt._segment,pr=Yt&&Yt._path;if(pr){var Qt=Yt.getNext()||pr.getFirstSegment(),nn=Qt._intersection;Yt!==Xe&&(b(Yt)||b(Qt)||Qt&&G(Yt)&&(G(Qt)||nn&&G(nn._segment)))&&jt.push(Yt),Qe&&B.push(Yt)}wt=wt._next}}if(Je){for(Ar(Je);Je&&Je._previous;)Je=Je._previous;Ar(Je,Xt)}return jt}F.sort(function(Xe,Qe){var Je=Xe._intersection,Xt=Qe._intersection,jt=!!(Je&&Je._overlap),Ar=!!(Xt&&Xt._overlap),wt=Xe._path,Tt=Qe._path;return jt^Ar?jt?1:-1:!Je^!Xt?Je?1:-1:wt!==Tt?wt._id-Tt._id:Xe._index-Qe._index});for(var W=0,k=F.length;W<k;W++){var Z=F[W],J=G(Z),X=null,j=!1,q=!0,ee=[],re,le,Ee;if(J&&Z._path._overlapsOnly){var de=Z._path,He=Z._intersection._segment._path;de.compare(He)&&(de.getArea()&&m.push(de.clone(!1)),U(de),U(He),J=!1)}for(;J;){var fe=!X,De=w(Z,fe),Ne=De.shift(),j=!fe&&(b(Z)||b(Ne)),be=!j&&Ne;if(fe&&(X=new Oe(Ae.NO_INSERT),re=null),j){(Z.isFirst()||Z.isLast())&&(q=Z._path._closed),Z._visited=!0;break}if(be&&re&&(ee.push(re),re=null),re||(be&&De.push(Z),re={start:X._segments.length,crossings:De,visited:le=[],handleIn:Ee}),be&&(Z=Ne),!G(Z)){X.removeSegments(re.start);for(var Be=0,tt=le.length;Be<tt;Be++)le[Be]._visited=!1;le.length=0;do Z=re&&re.crossings.shift(),(!Z||!Z._path)&&(Z=null,re=ee.pop(),re&&(le=re.visited,Ee=re.handleIn));while(re&&!G(Z));if(!Z)break}var We=Z.getNext();X.add(new Ie(Z._point,Ee,We&&Z._handleOut)),Z._visited=!0,le.push(Z),Z=We||Z._path.getFirstSegment(),Ee=We&&We._handleIn}j&&(q&&(X.getFirstSegment().setHandleIn(Ee),X.setClosed(q)),X.getArea()!==0&&m.push(X))}return m}return{_getWinding:function(F,M,m){return H(F,this.getCurves(),M,m)},unite:function(F,M){return u(this,F,"unite",M)},intersect:function(F,M){return u(this,F,"intersect",M)},subtract:function(F,M){return u(this,F,"subtract",M)},exclude:function(F,M){return u(this,F,"exclude",M)},divide:function(F,M){return M&&(M.trace==!1||M.stroke)?S(this,F,"divide"):d([this.subtract(F,M),this.intersect(F,M)],!0,this,F,M)},resolveCrossings:function(){var F=this._children,M=F||[this];function m(re,le){var Ee=re&&re._intersection;return Ee&&Ee._overlap&&Ee._path===le}var B=!1,G=!1,b=this.getIntersections(null,function(re){return re.hasOverlap()&&(B=!0)||re.isCrossing()&&(G=!0)}),U=B&&G&&[];if(b=qe.expand(b),B)for(var w=y(b,function(re){return re.hasOverlap()},U),W=w.length-1;W>=0;W--){var k=w[W],Z=k._path,J=k._segment,X=J.getPrevious(),j=J.getNext();m(X,Z)&&m(j,Z)&&(J.remove(),X._handleOut._set(0,0),j._handleIn._set(0,0),X!==J&&!X.getCurve().hasLength()&&(j._handleIn.set(X._handleIn),X.remove()))}G&&(y(b,B&&function(re){var le=re.getCurve(),Ee=re.getSegment(),de=re._intersection,He=de._curve,fe=de._segment;if(le&&He&&le._path&&He._path)return!0;Ee&&(Ee._intersection=null),fe&&(fe._intersection=null)},U),U&&O(U),M=v(o.each(M,function(re){o.push(this,re._segments)},[])));var q=M.length,ee;return q>1&&F?(M!==F&&this.setChildren(M),ee=this):q===1&&!F&&(M[0]!==this&&this.setSegments(M[0].removeSegments()),ee=this),ee||(ee=new Et(Ae.NO_INSERT),ee.addChildren(M),ee=ee.reduce(),ee.copyAttributes(this),this.replaceWith(ee)),ee},reorient:function(F,M){var m=this._children;return m&&m.length?this.setChildren(D(this.removeChildren(),function(B){return!!(F?B:B&1)},M)):M!==r&&this.setClockwise(M),this},getInteriorPoint:function(){var F=this.getBounds(),M=F.getCenter(!0);if(!this.contains(M)){for(var m=this.getCurves(),B=M.y,G=[],b=[],U=0,w=m.length;U<w;U++){var W=m[U].getValues(),k=W[1],Z=W[3],J=W[5],X=W[7];if(B>=i(k,Z,J,X)&&B<=A(k,Z,J,X))for(var j=oe.getMonoCurves(W),q=0,ee=j.length;q<ee;q++){var re=j[q],le=re[1],Ee=re[7];if(le!==Ee&&(B>=le&&B<=Ee||B>=Ee&&B<=le)){var de=B===le?re[0]:B===Ee?re[6]:oe.solveCubic(re,1,B,b,0,1)===1?oe.getPoint(re,b[0]).x:(re[0]+re[6])/2;G.push(de)}}}G.length>1&&(G.sort(function(He,fe){return He-fe}),M.x=(G[0]+G[1])/2)}return M}}});var Lt=o.extend({_class:"PathFlattener",initialize:function(i,A,l,L,h){var c=[],d=[],I=0,u=1/(l||32),S=i._segments,f=S[0],O;function D(v,F){var M=oe.getValues(v,F,h);c.push(M),y(M,v._index,0,1)}function y(v,F,M,m){if(m-M>u&&!(L&&oe.isStraight(v))&&!oe.isFlatEnough(v,A||.25)){var B=oe.subdivide(v,.5),G=(M+m)/2;y(B[0],F,M,G),y(B[1],F,G,m)}else{var b=v[6]-v[0],U=v[7]-v[1],w=Math.sqrt(b*b+U*U);w>0&&(I+=w,d.push({offset:I,curve:v,index:F,time:m}))}}for(var H=1,P=S.length;H<P;H++)O=S[H],D(f,O),f=O;i._closed&&D(O||f,S[0]),this.curves=c,this.parts=d,this.length=I,this.index=0},_get:function(i){for(var A=this.parts,l=A.length,L,h=this.index;L=h,!(!h||A[--h].offset<i););for(;L<l;L++){var c=A[L];if(c.offset>=i){this.index=L;var d=A[L-1],I=d&&d.index===c.index?d.time:0,u=d?d.offset:0;return{index:c.index,time:I+(c.time-I)*(i-u)/(c.offset-u)}}}return{index:A[l-1].index,time:1}},drawPart:function(i,A,l){for(var L=this._get(A),h=this._get(l),c=L.index,d=h.index;c<=d;c++){var I=oe.getPart(this.curves[c],c===L.index?L.time:0,c===h.index?h.time:1);c===L.index&&i.moveTo(I[0],I[1]),i.bezierCurveTo.apply(i,I.slice(2))}}},o.each(oe._evaluateMethods,function(i){this[i+"At"]=function(A){var l=this._get(A);return oe[i](this.curves[l.index],l.time)}},{})),Gt=o.extend({initialize:function(i){for(var A=this.points=[],l=i._segments,L=i._closed,h=0,c,d=l.length;h<d;h++){var I=l[h].point;(!c||!c.equals(I))&&A.push(c=I.clone())}L&&(A.unshift(A[A.length-1]),A.push(A[1])),this.closed=L},fit:function(i){var A=this.points,l=A.length,L=null;return l>0&&(L=[new Ie(A[0])],l>1&&(this.fitCubic(L,i,0,l-1,A[1].subtract(A[0]),A[l-2].subtract(A[l-1])),this.closed&&(L.shift(),L.pop()))),L},fitCubic:function(i,A,l,L,h,c){var d=this.points;if(L-l===1){var I=d[l],u=d[L],S=I.getDistance(u)/3;this.addCurve(i,[I,I.add(h.normalize(S)),u.add(c.normalize(S)),u]);return}for(var f=this.chordLengthParameterize(l,L),O=Math.max(A,A*A),D,y=!0,H=0;H<=4;H++){var P=this.generateBezier(l,L,f,h,c),v=this.findMaxError(l,L,P,f);if(v.error<A&&y){this.addCurve(i,P);return}if(D=v.index,v.error>=O)break;y=this.reparameterize(l,L,f,P),O=v.error}var F=d[D-1].subtract(d[D+1]);this.fitCubic(i,A,l,D,h,F),this.fitCubic(i,A,D,L,F.negate(),c)},addCurve:function(i,A){var l=i[i.length-1];l.setHandleOut(A[1].subtract(A[0])),i.push(new Ie(A[3],A[2].subtract(A[3])))},generateBezier:function(i,A,l,L,h){for(var c=1e-12,d=Math.abs,I=this.points,u=I[i],S=I[A],f=[[0,0],[0,0]],O=[0,0],D=0,y=A-i+1;D<y;D++){var H=l[D],P=1-H,v=3*H*P,F=P*P*P,M=v*P,m=v*H,B=H*H*H,G=L.normalize(M),b=h.normalize(m),U=I[i+D].subtract(u.multiply(F+M)).subtract(S.multiply(m+B));f[0][0]+=G.dot(G),f[0][1]+=G.dot(b),f[1][0]=f[0][1],f[1][1]+=b.dot(b),O[0]+=G.dot(U),O[1]+=b.dot(U)}var w=f[0][0]*f[1][1]-f[1][0]*f[0][1],W,k;if(d(w)>c){var Z=f[0][0]*O[1]-f[1][0]*O[0],J=O[0]*f[1][1]-O[1]*f[0][1];W=J/w,k=Z/w}else{var X=f[0][0]+f[0][1],j=f[1][0]+f[1][1];W=k=d(X)>c?O[0]/X:d(j)>c?O[1]/j:0}var q=S.getDistance(u),ee=c*q,re,le;if(W<ee||k<ee)W=k=q/3;else{var Ee=S.subtract(u);re=L.normalize(W),le=h.normalize(k),re.dot(Ee)-le.dot(Ee)>q*q&&(W=k=q/3,re=le=null)}return[u,u.add(re||L.normalize(W)),S.add(le||h.normalize(k)),S]},reparameterize:function(i,A,l,L){for(var h=i;h<=A;h++)l[h-i]=this.findRoot(L,this.points[h],l[h-i]);for(var h=1,c=l.length;h<c;h++)if(l[h]<=l[h-1])return!1;return!0},findRoot:function(i,A,l){for(var L=[],h=[],c=0;c<=2;c++)L[c]=i[c+1].subtract(i[c]).multiply(3);for(var c=0;c<=1;c++)h[c]=L[c+1].subtract(L[c]).multiply(2);var d=this.evaluate(3,i,l),I=this.evaluate(2,L,l),u=this.evaluate(1,h,l),S=d.subtract(A),f=I.dot(I)+S.dot(u);return R.isMachineZero(f)?l:l-S.dot(I)/f},evaluate:function(i,A,l){for(var L=A.slice(),h=1;h<=i;h++)for(var c=0;c<=i-h;c++)L[c]=L[c].multiply(1-l).add(L[c+1].multiply(l));return L[0]},chordLengthParameterize:function(i,A){for(var l=[0],L=i+1;L<=A;L++)l[L-i]=l[L-i-1]+this.points[L].getDistance(this.points[L-1]);for(var L=1,h=A-i;L<=h;L++)l[L]/=l[h];return l},findMaxError:function(i,A,l,L){for(var h=Math.floor((A-i+1)/2),c=0,d=i+1;d<A;d++){var I=this.evaluate(3,l,L[d-i]),u=I.subtract(this.points[d]),S=u.x*u.x+u.y*u.y;S>=c&&(c=S,h=d)}return{error:c,index:h}}}),en=Ae.extend({_class:"TextItem",_applyMatrix:!1,_canApplyMatrix:!1,_serializeFields:{content:null},_boundsOptions:{stroke:!1,handle:!1},initialize:function(A){this._content="",this._lines=[];var l=A&&o.isPlainObject(A)&&A.x===r&&A.y===r;this._initialize(l&&A,!l&&g.read(arguments))},_equals:function(i){return this._content===i._content},copyContent:function(i){this.setContent(i._content)},getContent:function(){return this._content},setContent:function(i){this._content=""+i,this._lines=this._content.split(/\r\n|\n|\r/mg),this._changed(521)},isEmpty:function(){return!this._content},getCharacterStyle:"#getStyle",setCharacterStyle:"#setStyle",getParagraphStyle:"#getStyle",setParagraphStyle:"#setStyle"}),l0=en.extend({_class:"PointText",initialize:function(){en.apply(this,arguments)},getPoint:function(){var i=this._matrix.getTranslation();return new K(i.x,i.y,this,"setPoint")},setPoint:function(){var i=g.read(arguments);this.translate(i.subtract(this._matrix.getTranslation()))},_draw:function(i,A,l){if(this._content){this._setStyles(i,A,l);var L=this._lines,h=this._style,c=h.hasFill(),d=h.hasStroke(),I=h.getLeading(),u=i.shadowColor;i.font=h.getFontStyle(),i.textAlign=h.getJustification();for(var S=0,f=L.length;S<f;S++){i.shadowColor=u;var O=L[S];c&&(i.fillText(O,0,0),i.shadowColor="rgba(0,0,0,0)"),d&&i.strokeText(O,0,0),i.translate(0,I)}}},_getBounds:function(i,A){var l=this._style,L=this._lines,h=L.length,c=l.getJustification(),d=l.getLeading(),I=this.getView().getTextWidth(l.getFontStyle(),L),u=0;c!=="left"&&(u-=I/(c==="center"?2:1));var S=new _(u,h?-.75*d:0,I,h*d);return i?i._transformBounds(S,S):S}}),Ht=o.extend(new function(){var i={gray:["gray"],rgb:["red","green","blue"],hsb:["hue","saturation","brightness"],hsl:["hue","saturation","lightness"],gradient:["gradient","origin","destination","highlight"]},A={},l={transparent:[0,0,0,0]},L;function h(I){var u=I.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i)||I.match(/^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i),S="rgb",f;if(u){var O=u[4]?4:3;f=new Array(O);for(var D=0;D<O;D++){var y=u[D+1];f[D]=parseInt(y.length==1?y+y:y,16)/255}}else if(u=I.match(/^(rgb|hsl)a?\((.*)\)$/)){S=u[1],f=u[2].trim().split(/[,\s]+/g);for(var H=S==="hsl",D=0,P=Math.min(f.length,4);D<P;D++){var v=f[D],y=parseFloat(v);if(H)if(D===0){var F=v.match(/([a-z]*)$/)[1];y*={turn:360,rad:180/Math.PI,grad:.9}[F]||1}else D<3&&(y/=100);else D<3&&(y/=/%$/.test(v)?100:255);f[D]=y}}else{var M=l[I];if(!M)if(n){L||(L=Nt.getContext(1,1,{willReadFrequently:!0}),L.globalCompositeOperation="copy"),L.fillStyle="rgba(0,0,0,0)",L.fillStyle=I,L.fillRect(0,0,1,1);var m=L.getImageData(0,0,1,1).data;M=l[I]=[m[0]/255,m[1]/255,m[2]/255]}else M=[0,0,0];f=M.slice()}return[S,f]}var c=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]],d={"rgb-hsb":function(I,u,S){var f=Math.max(I,u,S),O=Math.min(I,u,S),D=f-O,y=D===0?0:(f==I?(u-S)/D+(u<S?6:0):f==u?(S-I)/D+2:(I-u)/D+4)*60;return[y,f===0?0:D/f,f]},"hsb-rgb":function(I,u,S){I=(I/60%6+6)%6;var O=Math.floor(I),f=I-O,O=c[O],D=[S,S*(1-u),S*(1-u*f),S*(1-u*(1-f))];return[D[O[0]],D[O[1]],D[O[2]]]},"rgb-hsl":function(I,u,S){var f=Math.max(I,u,S),O=Math.min(I,u,S),D=f-O,y=D===0,H=y?0:(f==I?(u-S)/D+(u<S?6:0):f==u?(S-I)/D+2:(I-u)/D+4)*60,P=(f+O)/2,v=y?0:P<.5?D/(f+O):D/(2-f-O);return[H,v,P]},"hsl-rgb":function(I,u,S){if(I=(I/360%1+1)%1,u===0)return[S,S,S];for(var f=[I+1/3,I,I-1/3],O=S<.5?S*(1+u):S+u-S*u,D=2*S-O,y=[],H=0;H<3;H++){var P=f[H];P<0&&(P+=1),P>1&&(P-=1),y[H]=6*P<1?D+(O-D)*6*P:2*P<1?O:3*P<2?D+(O-D)*(2/3-P)*6:D}return y},"rgb-gray":function(I,u,S){return[I*.2989+u*.587+S*.114]},"gray-rgb":function(I){return[I,I,I]},"gray-hsb":function(I){return[0,0,I]},"gray-hsl":function(I){return[0,0,I]},"gradient-rgb":function(){return[]},"rgb-gradient":function(){return[]}};return o.each(i,function(I,u){A[u]=[],o.each(I,function(S,f){var O=o.capitalize(S),D=/^(hue|saturation)$/.test(S),y=A[u][f]=u==="gradient"?S==="gradient"?function(H){var P=this._components[0];return H=tn.read(Array.isArray(H)?H:arguments,0,{readNull:!0}),P!==H&&(P&&P._removeOwner(this),H&&H._addOwner(this)),H}:function(){return g.read(arguments,0,{readNull:S==="highlight",clone:!0})}:function(H){return H==null||isNaN(H)?0:+H};this["get"+O]=function(){return this._type===u||D&&/^hs[bl]$/.test(this._type)?this._components[f]:this._convert(u)[f]},this["set"+O]=function(H){this._type!==u&&!(D&&/^hs[bl]$/.test(this._type))&&(this._components=this._convert(u),this._properties=i[u],this._type=u),this._components[f]=y.call(this,H),this._changed()}},this)},{_class:"Color",_readIndex:!0,initialize:function I(u){var S=arguments,f=this.__read,O=0,D,y,H,P;Array.isArray(u)&&(S=u,u=S[0]);var v=u!=null&&typeof u;if(v==="string"&&u in i&&(D=u,u=S[1],Array.isArray(u)?(y=u,H=S[2]):(f&&(O=1),S=o.slice(S,1),v=typeof u)),!y){if(P=v==="number"?S:v==="object"&&u.length!=null?u:null,P){D||(D=P.length>=3?"rgb":"gray");var F=i[D].length;H=P[F],f&&(O+=P===arguments?F+(H!=null?1:0):1),P.length>F&&(P=o.slice(P,0,F))}else if(v==="string"){var M=h(u);D=M[0],y=M[1],y.length===4&&(H=y[3],y.length--)}else if(v==="object")if(u.constructor===I){if(D=u._type,y=u._components.slice(),H=u._alpha,D==="gradient")for(var m=1,B=y.length;m<B;m++){var G=y[m];G&&(y[m]=G.clone())}}else if(u.constructor===tn)D="gradient",P=S;else{D="hue"in u?"lightness"in u?"hsl":"hsb":"gradient"in u||"stops"in u||"radial"in u?"gradient":"gray"in u?"gray":"rgb";var b=i[D],U=A[D];this._components=y=[];for(var m=0,B=b.length;m<B;m++){var w=u[b[m]];w==null&&!m&&D==="gradient"&&"stops"in u&&(w={stops:u.stops,radial:u.radial}),w=U[m].call(this,w),w!=null&&(y[m]=w)}H=u.alpha}f&&D&&(O=1)}if(this._type=D||"rgb",!y){this._components=y=[];for(var U=A[this._type],m=0,B=U.length;m<B;m++){var w=U[m].call(this,P&&P[m]);w!=null&&(y[m]=w)}}return this._components=y,this._properties=i[this._type],this._alpha=H,f&&(this.__read=O),this},set:"#initialize",_serialize:function(I,u){var S=this.getComponents();return o.serialize(/^(gray|rgb)$/.test(this._type)?S:[this._type].concat(S),I,!0,u)},_changed:function(){this._canvasStyle=null,this._owner&&(this._setter?this._owner[this._setter](this):this._owner._changed(129))},_convert:function(I){var u;return this._type===I?this._components.slice():(u=d[this._type+"-"+I])?u.apply(this,this._components):d["rgb-"+I].apply(this,d[this._type+"-rgb"].apply(this,this._components))},convert:function(I){return new Ht(I,this._convert(I),this._alpha)},getType:function(){return this._type},setType:function(I){this._components=this._convert(I),this._properties=i[I],this._type=I},getComponents:function(){var I=this._components.slice();return this._alpha!=null&&I.push(this._alpha),I},getAlpha:function(){return this._alpha!=null?this._alpha:1},setAlpha:function(I){this._alpha=I==null?null:Math.min(Math.max(I,0),1),this._changed()},hasAlpha:function(){return this._alpha!=null},equals:function(I){var u=o.isPlainValue(I,!0)?Ht.read(arguments):I;return u===this||u&&this._class===u._class&&this._type===u._type&&this.getAlpha()===u.getAlpha()&&o.equals(this._components,u._components)||!1},toString:function(){for(var I=this._properties,u=[],S=this._type==="gradient",f=p.instance,O=0,D=I.length;O<D;O++){var y=this._components[O];y!=null&&u.push(I[O]+": "+(S?y:f.number(y)))}return this._alpha!=null&&u.push("alpha: "+f.number(this._alpha)),"{ "+u.join(", ")+" }"},toCSS:function(I){var u=this._convert("rgb"),S=I||this._alpha==null?1:this._alpha;function f(O){return Math.round((O<0?0:O>1?1:O)*255)}return u=[f(u[0]),f(u[1]),f(u[2])],S<1&&u.push(S<0?0:S),I?"#"+((1<<24)+(u[0]<<16)+(u[1]<<8)+u[2]).toString(16).slice(1):(u.length==4?"rgba(":"rgb(")+u.join(",")+")"},toCanvasStyle:function(I,u){if(this._canvasStyle)return this._canvasStyle;if(this._type!=="gradient")return this._canvasStyle=this.toCSS();var S=this._components,f=S[0],O=f._stops,D=S[1],y=S[2],H=S[3],P=u&&u.inverted(),v;if(P&&(D=P._transformPoint(D),y=P._transformPoint(y),H&&(H=P._transformPoint(H))),f._radial){var F=y.getDistance(D);if(H){var M=H.subtract(D);M.getLength()>F&&(H=D.add(M.normalize(F-.1)))}var m=H||D;v=I.createRadialGradient(m.x,m.y,0,D.x,D.y,F)}else v=I.createLinearGradient(D.x,D.y,y.x,y.y);for(var B=0,G=O.length;B<G;B++){var b=O[B],U=b._offset;v.addColorStop(U??B/(G-1),b._color.toCanvasStyle())}return this._canvasStyle=v},transform:function(I){if(this._type==="gradient"){for(var u=this._components,S=1,f=u.length;S<f;S++){var O=u[S];I._transformPoint(O,O,!0)}this._changed()}},statics:{_types:i,random:function(){var I=Math.random;return new Ht(I(),I(),I())},_setOwner:function(I,u,S){return I&&(I._owner&&u&&I._owner!==u&&(I=I.clone()),!I._owner^!u&&(I._owner=u||null,I._setter=S||null)),I}}})},new function(){var i={add:function(A,l){return A+l},subtract:function(A,l){return A-l},multiply:function(A,l){return A*l},divide:function(A,l){return A/l}};return o.each(i,function(A,l){this[l]=function(L){L=Ht.read(arguments);for(var h=this._type,c=this._components,d=L._convert(h),I=0,u=c.length;I<u;I++)d[I]=A(c[I],d[I]);return new Ht(h,d,this._alpha!=null?A(this._alpha,L.getAlpha()):null)}},{})}),tn=o.extend({_class:"Gradient",initialize:function(A,l){this._id=N.get(),A&&o.isPlainObject(A)&&(this.set(A),A=l=null),this._stops==null&&this.setStops(A||["white","black"]),this._radial==null&&this.setRadial(typeof l=="string"&&l==="radial"||l||!1)},_serialize:function(i,A){return A.add(this,function(){return o.serialize([this._stops,this._radial],i,!0,A)})},_changed:function(){for(var i=0,A=this._owners&&this._owners.length;i<A;i++)this._owners[i]._changed()},_addOwner:function(i){this._owners||(this._owners=[]),this._owners.push(i)},_removeOwner:function(i){var A=this._owners?this._owners.indexOf(i):-1;A!=-1&&(this._owners.splice(A,1),this._owners.length||(this._owners=r))},clone:function(){for(var i=[],A=0,l=this._stops.length;A<l;A++)i[A]=this._stops[A].clone();return new tn(i,this._radial)},getStops:function(){return this._stops},setStops:function(i){if(i.length<2)throw new Error("Gradient stop list needs to contain at least two stops.");var A=this._stops;if(A)for(var l=0,L=A.length;l<L;l++)A[l]._owner=r;A=this._stops=Kn.readList(i,0,{clone:!0});for(var l=0,L=A.length;l<L;l++)A[l]._owner=this;this._changed()},getRadial:function(){return this._radial},setRadial:function(i){this._radial=i,this._changed()},equals:function(i){if(i===this)return!0;if(i&&this._class===i._class){var A=this._stops,l=i._stops,L=A.length;if(L===l.length){for(var h=0;h<L;h++)if(!A[h].equals(l[h]))return!1;return!0}}return!1}}),Kn=o.extend({_class:"GradientStop",initialize:function(A,l){var L=A,h=l;typeof A=="object"&&l===r&&(Array.isArray(A)&&typeof A[0]!="number"?(L=A[0],h=A[1]):("color"in A||"offset"in A||"rampPoint"in A)&&(L=A.color,h=A.offset||A.rampPoint||0)),this.setColor(L),this.setOffset(h)},clone:function(){return new Kn(this._color.clone(),this._offset)},_serialize:function(i,A){var l=this._color,L=this._offset;return o.serialize(L==null?[l]:[l,L],i,!0,A)},_changed:function(){this._owner&&this._owner._changed(129)},getOffset:function(){return this._offset},setOffset:function(i){this._offset=i,this._changed()},getRampPoint:"#getOffset",setRampPoint:"#setOffset",getColor:function(){return this._color},setColor:function(){Ht._setOwner(this._color,null),this._color=Ht._setOwner(Ht.read(arguments,0),this,"setColor"),this._changed()},equals:function(i){return i===this||i&&this._class===i._class&&this._color.equals(i._color)&&this._offset==i._offset||!1}}),rn=o.extend(new function(){var i={fillColor:null,fillRule:"nonzero",strokeColor:null,strokeWidth:1,strokeCap:"butt",strokeJoin:"miter",strokeScaling:!0,miterLimit:10,dashOffset:0,dashArray:[],shadowColor:null,shadowBlur:0,shadowOffset:new g,selectedColor:null},A=o.set({},i,{fontFamily:"sans-serif",fontWeight:"normal",fontSize:12,leading:null,justification:"left"}),l=o.set({},A,{fillColor:new Ht}),L={strokeWidth:193,strokeCap:193,strokeJoin:193,strokeScaling:201,miterLimit:193,fontFamily:9,fontWeight:9,fontSize:9,font:9,leading:9,justification:9},h={beans:!0},c={_class:"Style",beans:!0,initialize:function(I,u,S){this._values={},this._owner=u,this._project=u&&u._project||S||Ze.project,this._defaults=!u||u instanceof ce?A:u instanceof en?l:i,I&&this.set(I)}};return o.each(A,function(d,I){var u=/Color$/.test(I),S=I==="shadowOffset",f=o.capitalize(I),O=L[I],D="set"+f,y="get"+f;c[D]=function(H){var P=this._owner,v=P&&P._children,F=v&&v.length>0&&!(P instanceof Et);if(F)for(var M=0,m=v.length;M<m;M++)v[M]._style[D](H);if((I==="selectedColor"||!F)&&I in this._defaults){var B=this._values[I];B!==H&&(u&&(B&&(Ht._setOwner(B,null),B._canvasStyle=null),H&&H.constructor===Ht&&(H=Ht._setOwner(H,P,F&&D))),this._values[I]=H,P&&P._changed(O||129))}},c[y]=function(H){var P=this._owner,v=P&&P._children,F=v&&v.length>0&&!(P instanceof Et),M;if(F&&!H)for(var m=0,B=v.length;m<B;m++){var G=v[m]._style[y]();if(!m)M=G;else if(!o.equals(M,G))return r}else if(I in this._defaults){var M=this._values[I];if(M===r)M=this._defaults[I],M&&M.clone&&(M=M.clone());else{var b=u?Ht:S?g:null;b&&!(M&&M.constructor===b)&&(this._values[I]=M=b.read([M],0,{readNull:!0,clone:!0}))}}return M&&u&&(M=Ht._setOwner(M,P,F&&D)),M},h[y]=function(H){return this._style[y](H)},h[D]=function(H){this._style[D](H)}}),o.each({Font:"FontFamily",WindingRule:"FillRule"},function(d,I){var u="get"+I,S="set"+I;c[u]=h[u]="#get"+d,c[S]=h[S]="#set"+d}),Ae.inject(h),c},{set:function(i){var A=i instanceof rn,l=A?i._values:i;if(l){for(var L in l)if(L in this._defaults){var h=l[L];this[L]=h&&A&&h.clone?h.clone():h}}},equals:function(i){function A(l,L,h){var c=l._values,d=L._values,I=L._defaults;for(var u in c){var S=c[u],f=d[u];if(!(h&&u in d)&&!o.equals(S,f===r?I[u]:f))return!1}return!0}return i===this||i&&this._class===i._class&&A(this,i)&&A(i,this,!0)||!1},_dispose:function(){var i;i=this.getFillColor(),i&&(i._canvasStyle=null),i=this.getStrokeColor(),i&&(i._canvasStyle=null),i=this.getShadowColor(),i&&(i._canvasStyle=null)},hasFill:function(){var i=this.getFillColor();return!!i&&i.alpha>0},hasStroke:function(){var i=this.getStrokeColor();return!!i&&i.alpha>0&&this.getStrokeWidth()>0},hasShadow:function(){var i=this.getShadowColor();return!!i&&i.alpha>0&&(this.getShadowBlur()>0||!this.getShadowOffset().isZero())},getView:function(){return this._project._view},getFontStyle:function(){var i=this.getFontSize();return this.getFontWeight()+" "+i+(/[a-z]/i.test(i+"")?" ":"px ")+this.getFontFamily()},getFont:"#getFontFamily",setFont:"#setFontFamily",getLeading:function i(){var A=i.base.call(this),l=this.getFontSize();return/pt|em|%|px/.test(l)&&(l=this.getView().getPixelSize(l)),A??l*1.2}}),yt=new function(){function i(A,l,L,h){for(var c=["","webkit","moz","Moz","ms","o"],d=l[0].toUpperCase()+l.substring(1),I=0;I<6;I++){var u=c[I],S=u?u+d:l;if(S in A){if(L)A[S]=h;else return A[S];break}}}return{getStyles:function(A){var l=A&&A.nodeType!==9?A.ownerDocument:A,L=l&&l.defaultView;return L&&L.getComputedStyle(A,"")},getBounds:function(A,l){var L=A.ownerDocument,h=L.body,c=L.documentElement,d;try{d=A.getBoundingClientRect()}catch{d={left:0,top:0,width:0,height:0}}var I=d.left-(c.clientLeft||h.clientLeft||0),u=d.top-(c.clientTop||h.clientTop||0);if(!l){var S=L.defaultView;I+=S.pageXOffset||c.scrollLeft||h.scrollLeft,u+=S.pageYOffset||c.scrollTop||h.scrollTop}return new _(I,u,d.width,d.height)},getViewportBounds:function(A){var l=A.ownerDocument,L=l.defaultView,h=l.documentElement;return new _(0,0,L.innerWidth||h.clientWidth,L.innerHeight||h.clientHeight)},getOffset:function(A,l){return yt.getBounds(A,l).getPoint()},getSize:function(A){return yt.getBounds(A,!0).getSize()},isInvisible:function(A){return yt.getSize(A).equals(new Y(0,0))},isInView:function(A){return!yt.isInvisible(A)&&yt.getViewportBounds(A).intersects(yt.getBounds(A,!0))},isInserted:function(A){return a.body.contains(A)},getPrefixed:function(A,l){return A&&i(A,l)},setPrefixed:function(A,l,L){if(typeof l=="object")for(var h in l)i(A,h,!0,l[h]);else i(A,l,!0,L)}}},Ut={add:function(i,A){if(i)for(var l in A)for(var L=A[l],h=l.split(/[\s,]+/g),c=0,d=h.length;c<d;c++){var I=h[c],u=i===a&&(I==="touchstart"||I==="touchmove")?{passive:!1}:!1;i.addEventListener(I,L,u)}},remove:function(i,A){if(i)for(var l in A)for(var L=A[l],h=l.split(/[\s,]+/g),c=0,d=h.length;c<d;c++)i.removeEventListener(h[c],L,!1)},getPoint:function(i){var A=i.targetTouches?i.targetTouches.length?i.targetTouches[0]:i.changedTouches[0]:i;return new g(A.pageX||A.clientX+a.documentElement.scrollLeft,A.pageY||A.clientY+a.documentElement.scrollTop)},getTarget:function(i){return i.target||i.srcElement},getRelatedTarget:function(i){return i.relatedTarget||i.toElement},getOffset:function(i,A){return Ut.getPoint(i).subtract(yt.getOffset(A||Ut.getTarget(i)))}};Ut.requestAnimationFrame=new function(){var i=yt.getPrefixed(n,"requestAnimationFrame"),A=!1,l=[],L;function h(){var c=l;l=[];for(var d=0,I=c.length;d<I;d++)c[d]();A=i&&l.length,A&&i(h)}return function(c){l.push(c),i?A||(i(h),A=!0):L||(L=setInterval(h,1e3/60))}};var mt=o.extend(s,{_class:"View",initialize:function i(A,l){function L(O){return l[O]||parseInt(l.getAttribute(O),10)}function h(){var O=yt.getSize(l);return O.isNaN()||O.isZero()?new Y(L("width"),L("height")):O}var c;if(n&&l){this._id=l.getAttribute("id"),this._id==null&&l.setAttribute("id",this._id="paper-view-"+i._id++),Ut.add(l,this._viewEvents);var d="none";if(yt.setPrefixed(l.style,{userDrag:d,userSelect:d,touchCallout:d,contentZooming:d,tapHighlightColor:"rgba(0,0,0,0)"}),x.hasAttribute(l,"resize")){var I=this;Ut.add(n,this._windowEvents={resize:function(){I.setViewSize(h())}})}if(c=h(),x.hasAttribute(l,"stats")&&typeof Stats<"u"){this._stats=new Stats;var u=this._stats.domElement,S=u.style,f=yt.getOffset(l);S.position="absolute",S.left=f.x+"px",S.top=f.y+"px",a.body.appendChild(u)}}else c=new Y(l),l=null;this._project=A,this._scope=A._scope,this._element=l,this._pixelRatio||(this._pixelRatio=n&&n.devicePixelRatio||1),this._setElementSize(c.width,c.height),this._viewSize=c,i._views.push(this),i._viewsById[this._id]=this,(this._matrix=new Q)._owner=this,i._focused||(i._focused=this),this._frameItems={},this._frameItemCount=0,this._itemEvents={native:{},virtual:{}},this._autoUpdate=!Ze.agent.node,this._needsUpdate=!1},remove:function(){if(!this._project)return!1;mt._focused===this&&(mt._focused=null),mt._views.splice(mt._views.indexOf(this),1),delete mt._viewsById[this._id];var i=this._project;return i._view===this&&(i._view=null),Ut.remove(this._element,this._viewEvents),Ut.remove(n,this._windowEvents),this._element=this._project=null,this.off("frame"),this._animate=!1,this._frameItems={},!0},_events:o.each(Ae._itemHandlers.concat(["onResize","onKeyDown","onKeyUp"]),function(i){this[i]={}},{onFrame:{install:function(){this.play()},uninstall:function(){this.pause()}}}),_animate:!1,_time:0,_count:0,getAutoUpdate:function(){return this._autoUpdate},setAutoUpdate:function(i){this._autoUpdate=i,i&&this.requestUpdate()},update:function(){},draw:function(){this.update()},requestUpdate:function(){if(!this._requested){var i=this;Ut.requestAnimationFrame(function(){if(i._requested=!1,i._animate){i.requestUpdate();var A=i._element;(!yt.getPrefixed(a,"hidden")||x.getAttribute(A,"keepalive")==="true")&&yt.isInView(A)&&i._handleFrame()}i._autoUpdate&&i.update()}),this._requested=!0}},play:function(){this._animate=!0,this.requestUpdate()},pause:function(){this._animate=!1},_handleFrame:function(){Ze=this._scope;var i=Date.now()/1e3,A=this._last?i-this._last:0;this._last=i,this.emit("frame",new o({delta:A,time:this._time+=A,count:this._count++})),this._stats&&this._stats.update()},_animateItem:function(i,A){var l=this._frameItems;A?(l[i._id]={item:i,time:0,count:0},++this._frameItemCount===1&&this.on("frame",this._handleFrameItems)):(delete l[i._id],--this._frameItemCount===0&&this.off("frame",this._handleFrameItems))},_handleFrameItems:function(i){for(var A in this._frameItems){var l=this._frameItems[A];l.item.emit("frame",new o(i,{time:l.time+=i.delta,count:l.count++}))}},_changed:function(){this._project._changed(4097),this._bounds=this._decomposed=r},getElement:function(){return this._element},getPixelRatio:function(){return this._pixelRatio},getResolution:function(){return this._pixelRatio*72},getViewSize:function(){var i=this._viewSize;return new V(i.width,i.height,this,"setViewSize")},setViewSize:function(){var i=Y.read(arguments),A=i.subtract(this._viewSize);A.isZero()||(this._setElementSize(i.width,i.height),this._viewSize.set(i),this._changed(),this.emit("resize",{size:i,delta:A}),this._autoUpdate&&this.update())},_setElementSize:function(i,A){var l=this._element;l&&(l.width!==i&&(l.width=i),l.height!==A&&(l.height=A))},getBounds:function(){return this._bounds||(this._bounds=this._matrix.inverted()._transformBounds(new _(new g,this._viewSize))),this._bounds},getSize:function(){return this.getBounds().getSize()},isVisible:function(){return yt.isInView(this._element)},isInserted:function(){return yt.isInserted(this._element)},getPixelSize:function(i){var A=this._element,l;if(A){var L=A.parentNode,h=a.createElement("div");h.style.fontSize=i,L.appendChild(h),l=parseFloat(yt.getStyles(h).fontSize),L.removeChild(h)}else l=parseFloat(l);return l},getTextWidth:function(i,A){return 0}},o.each(["rotate","scale","shear","skew"],function(i){var A=i==="rotate";this[i]=function(){var l=arguments,L=(A?o:g).read(l),h=g.read(l,0,{readNull:!0});return this.transform(new Q()[i](L,h||this.getCenter(!0)))}},{_decompose:function(){return this._decomposed||(this._decomposed=this._matrix.decompose())},translate:function(){var i=new Q;return this.transform(i.translate.apply(i,arguments))},getCenter:function(){return this.getBounds().getCenter()},setCenter:function(){var i=g.read(arguments);this.translate(this.getCenter().subtract(i))},getZoom:function(){var i=this._decompose().scaling;return(i.x+i.y)/2},setZoom:function(i){this.transform(new Q().scale(i/this.getZoom(),this.getCenter()))},getRotation:function(){return this._decompose().rotation},setRotation:function(i){var A=this.getRotation();A!=null&&i!=null&&this.rotate(i-A)},getScaling:function(){var i=this._decompose().scaling;return new K(i.x,i.y,this,"setScaling")},setScaling:function(){var i=this.getScaling(),A=g.read(arguments,0,{clone:!0,readNull:!0});i&&A&&this.scale(A.x/i.x,A.y/i.y)},getMatrix:function(){return this._matrix},setMatrix:function(){var i=this._matrix;i.set.apply(i,arguments)},transform:function(i){this._matrix.append(i)},scrollBy:function(){this.translate(g.read(arguments).negate())}}),{projectToView:function(){return this._matrix._transformPoint(g.read(arguments))},viewToProject:function(){return this._matrix._inverseTransform(g.read(arguments))},getEventPoint:function(i){return this.viewToProject(Ut.getOffset(i,this._element))}},{statics:{_views:[],_viewsById:{},_id:0,create:function(i,A){a&&typeof A=="string"&&(A=a.getElementById(A));var l=n?Cx:mt;return new l(i,A)}}},new function(){if(!n)return;var i,A,l=!1,L=!1;function h(J){var X=Ut.getTarget(J);return X.getAttribute&&mt._viewsById[X.getAttribute("id")]}function c(){var J=mt._focused;if(!J||!J.isVisible()){for(var X=0,j=mt._views.length;X<j;X++)if((J=mt._views[X]).isVisible()){mt._focused=A=J;break}}}function d(J,X,j){J._handleMouseEvent("mousemove",X,j)}var I=n.navigator,u,S,f;I.pointerEnabled||I.msPointerEnabled?(u="pointerdown MSPointerDown",S="pointermove MSPointerMove",f="pointerup pointercancel MSPointerUp MSPointerCancel"):(u="touchstart",S="touchmove",f="touchend touchcancel","ontouchstart"in n&&I.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i)||(u+=" mousedown",S+=" mousemove",f+=" mouseup"));var O={},D={mouseout:function(J){var X=mt._focused,j=Ut.getRelatedTarget(J);if(X&&(!j||j.nodeName==="HTML")){var q=Ut.getOffset(J,X._element),ee=q.x,re=Math.abs,le=re(ee),Ee=1<<25,de=le-Ee;q.x=re(de)<le?de*(ee<0?-1:1):ee,d(X,J,X.viewToProject(q))}},scroll:c};O[u]=function(J){var X=mt._focused=h(J);l||(l=!0,X._handleMouseEvent("mousedown",J))},D[S]=function(J){var X=mt._focused;if(!L){var j=h(J);j?X!==j&&(X&&d(X,J),i||(i=X),X=mt._focused=A=j):A&&A===X&&(i&&!i.isInserted()&&(i=null),X=mt._focused=i,i=null,c())}X&&d(X,J)},D[u]=function(){L=!0},D[f]=function(J){var X=mt._focused;X&&l&&X._handleMouseEvent("mouseup",J),L=l=!1},Ut.add(a,D),Ut.add(n,{load:c});var y=!1,H=!1,P={doubleclick:"click",mousedrag:"mousemove"},v=!1,F,M,m,B,G,b,U,w;function W(J,X,j,q,ee,re,le){var Ee=!1,de;function He(fe,De){if(fe.responds(De)){if(de||(de=new Rx(De,q,ee,X||fe,re?ee.subtract(re):null)),fe.emit(De,de)&&(y=!0,de.prevented&&(H=!0),de.stopped))return Ee=!0}else{var Ne=P[De];if(Ne)return He(fe,Ne)}}for(;J&&J!==le&&!He(J,j);)J=J._parent;return Ee}function k(J,X,j,q,ee,re){return J._project.removeOn(j),H=y=!1,G&&W(G,null,j,q,ee,re)||X&&X!==G&&!X.isDescendant(G)&&W(X,null,j==="mousedrag"?"mousemove":j,q,ee,re,G)||W(J,G||X||J,j,q,ee,re)}var Z={mousedown:{mousedown:1,mousedrag:1,click:1,doubleclick:1},mouseup:{mouseup:1,mousedrag:1,click:1,doubleclick:1},mousemove:{mousedrag:1,mousemove:1,mouseenter:1,mouseleave:1}};return{_viewEvents:O,_handleMouseEvent:function(J,X,j){var q=this._itemEvents,ee=q.native[J],re=J==="mousemove",le=this._scope.tool,Ee=this;function de(tt){return q.virtual[tt]||Ee.responds(tt)||le&&le.responds(tt)}re&&l&&de("mousedrag")&&(J="mousedrag"),j||(j=this.getEventPoint(X));var He=this.getBounds().contains(j),fe=ee&&He&&Ee._project.hitTest(j,{tolerance:0,fill:!0,stroke:!0}),De=fe&&fe.item||null,Ne=!1,be={};if(be[J.substr(5)]=!0,ee&&De!==B&&(B&&W(B,null,"mouseleave",X,j),De&&W(De,null,"mouseenter",X,j),B=De),v^He&&(W(this,null,He?"mouseenter":"mouseleave",X,j),Ne=!0),(He||be.drag)&&!j.equals(M)&&(k(this,De,re?J:"mousemove",X,j,M),Ne=!0),v=He,be.down&&He||be.up&&F){if(k(this,De,J,X,j,F),be.down){if(w=De===b&&Date.now()-U<300,m=b=De,!H&&De){for(var Be=De;Be&&!Be.responds("mousedrag");)Be=Be._parent;Be&&(G=De)}F=j}else be.up&&(!H&&De===m&&(U=Date.now(),k(this,De,w?"doubleclick":"click",X,j,F),w=!1),m=G=null);v=!1,Ne=!0}M=j,Ne&&le&&(y=le._handleMouseEvent(J,X,j,be)||y),X.cancelable!==!1&&(y&&!be.move||be.down&&de("mouseup"))&&X.preventDefault()},_handleKeyEvent:function(J,X,j,q){var ee=this._scope,re=ee.tool,le;function Ee(de){de.responds(J)&&(Ze=ee,de.emit(J,le=le||new gx(J,X,j,q)))}this.isVisible()&&(Ee(this),re&&re.responds(J)&&Ee(re))},_countItemEvent:function(J,X){var j=this._itemEvents,q=j.native,ee=j.virtual;for(var re in Z)q[re]=(q[re]||0)+(Z[re][J]||0)*X;ee[J]=(ee[J]||0)+X},statics:{updateFocus:c,_resetState:function(){l=L=y=v=!1,i=A=F=M=m=B=G=b=U=w=null}}}}),Cx=mt.extend({_class:"CanvasView",initialize:function(A,l){if(!(l instanceof n.HTMLCanvasElement)){var L=Y.read(arguments,1);if(L.isZero())throw new Error("Cannot create CanvasView with the provided argument: "+o.slice(arguments,1));l=Nt.getCanvas(L)}var h=this._context=l.getContext("2d");if(h==null||h.save(),this._pixelRatio=1,!/^off|false$/.test(x.getAttribute(l,"hidpi"))){var c=n.devicePixelRatio||1,d=yt.getPrefixed(h,"backingStorePixelRatio")||1;this._pixelRatio=c/d}mt.call(this,A,l),this._needsUpdate=!0},remove:function i(){return this._context.restore(),i.base.call(this)},_setElementSize:function i(A,l){var L=this._pixelRatio;if(i.base.call(this,A*L,l*L),L!==1){var h=this._element,c=this._context;if(!x.hasAttribute(h,"resize")){var d=h.style;d.width=A+"px",d.height=l+"px"}c.restore(),c==null||c.save(),c.scale(L,L)}},getContext:function(){return this._context},getPixelSize:function i(A){var l=Ze.agent,L;if(l&&l.firefox)L=i.base.call(this,A);else{var h=this._context,c=h.font;h.font=A+" serif",L=parseFloat(h.font),h.font=c}return L},getTextWidth:function(i,A){var l=this._context,L=l.font,h=0;l.font=i;for(var c=0,d=A.length;c<d;c++)h=Math.max(h,l.measureText(A[c]).width);return l.font=L,h},update:function(){if(!this._needsUpdate)return!1;var i=this._project,A=this._context,l=this._viewSize;return A.clearRect(0,0,l.width+1,l.height+1),i&&i.draw(A,this._matrix,this._pixelRatio),this._needsUpdate=!1,!0}}),ai=o.extend({_class:"Event",initialize:function(A){this.event=A,this.type=A&&A.type},prevented:!1,stopped:!1,preventDefault:function(){this.prevented=!0,this.event.preventDefault()},stopPropagation:function(){this.stopped=!0,this.event.stopPropagation()},stop:function(){this.stopPropagation(),this.preventDefault()},getTimeStamp:function(){return this.event.timeStamp},getModifiers:function(){return $o.modifiers}}),gx=ai.extend({_class:"KeyEvent",initialize:function(A,l,L,h){this.type=A,this.event=l,this.key=L,this.character=h},toString:function(){return"{ type: '"+this.type+"', key: '"+this.key+"', character: '"+this.character+"', modifiers: "+this.getModifiers()+" }"}}),$o=new function(){var i={"	":"tab"," ":"space","\b":"backspace","":"delete",Spacebar:"space",Del:"delete",Win:"meta",Esc:"escape"},A={tab:"	",space:" ",enter:"\r"},l={},L={},h,c,d=new o({shift:!1,control:!1,alt:!1,meta:!1,capsLock:!1,space:!1}).inject({option:{get:function(){return this.alt}},command:{get:function(){var S=Ze&&Ze.agent;return S&&S.mac?this.meta:this.control}}});function I(S){var f=S.key||S.keyIdentifier;return f=/^U\+/.test(f)?String.fromCharCode(parseInt(f.substr(2),16)):/^Arrow[A-Z]/.test(f)?f.substr(5):f==="Unidentified"||f===r?String.fromCharCode(S.keyCode):f,i[f]||(f.length>1?o.hyphenate(f):f.toLowerCase())}function u(S,f,O,D){var y=mt._focused,H;if(l[f]=S,S?L[f]=O:delete L[f],f.length>1&&(H=o.camelize(f))in d){d[H]=S;var P=Ze&&Ze.agent;if(H==="meta"&&P&&P.mac)if(S)h={};else{for(var v in h)v in L&&u(!1,v,h[v],D);h=null}}else S&&h&&(h[f]=O);y&&y._handleKeyEvent(S?"keydown":"keyup",D,f,O)}return Ut.add(a,{keydown:function(S){var f=I(S),O=Ze&&Ze.agent;f.length>1||O&&O.chrome&&(S.altKey||O.mac&&S.metaKey||!O.mac&&S.ctrlKey)?u(!0,f,A[f]||(f.length>1?"":f),S):c=f},keypress:function(S){if(c){var f=I(S),O=S.charCode,D=O>=32?String.fromCharCode(O):f.length>1?"":f;f!==c&&(f=D.toLowerCase()),u(!0,f,D,S),c=null}},keyup:function(S){var f=I(S);f in L&&u(!1,f,L[f],S)}}),Ut.add(n,{blur:function(S){for(var f in L)u(!1,f,L[f],S)}}),{modifiers:d,isDown:function(S){return!!l[S]}}},Rx=ai.extend({_class:"MouseEvent",initialize:function(A,l,L,h,c){this.type=A,this.event=l,this.point=L,this.target=h,this.delta=c},toString:function(){return"{ type: '"+this.type+"', point: "+this.point+", target: "+this.target+(this.delta?", delta: "+this.delta:"")+", modifiers: "+this.getModifiers()+" }"}}),yx=ai.extend({_class:"ToolEvent",_item:null,initialize:function(A,l,L){this.tool=A,this.type=l,this.event=L},_choosePoint:function(i,A){return i||(A?A.clone():null)},getPoint:function(){return this._choosePoint(this._point,this.tool._point)},setPoint:function(i){this._point=i},getLastPoint:function(){return this._choosePoint(this._lastPoint,this.tool._lastPoint)},setLastPoint:function(i){this._lastPoint=i},getDownPoint:function(){return this._choosePoint(this._downPoint,this.tool._downPoint)},setDownPoint:function(i){this._downPoint=i},getMiddlePoint:function(){return!this._middlePoint&&this.tool._lastPoint?this.tool._point.add(this.tool._lastPoint).divide(2):this._middlePoint},setMiddlePoint:function(i){this._middlePoint=i},getDelta:function(){return!this._delta&&this.tool._lastPoint?this.tool._point.subtract(this.tool._lastPoint):this._delta},setDelta:function(i){this._delta=i},getCount:function(){return this.tool[/^mouse(down|up)$/.test(this.type)?"_downCount":"_moveCount"]},setCount:function(i){this.tool[/^mouse(down|up)$/.test(this.type)?"downCount":"count"]=i},getItem:function(){if(!this._item){var i=this.tool._scope.project.hitTest(this.getPoint());if(i){for(var A=i.item,l=A._parent;/^(Group|CompoundPath)$/.test(l._class);)A=l,l=l._parent;this._item=A}}return this._item},setItem:function(i){this._item=i},toString:function(){return"{ type: "+this.type+", point: "+this.getPoint()+", count: "+this.getCount()+", modifiers: "+this.getModifiers()+" }"}});E.extend({_class:"Tool",_list:"tools",_reference:"tool",_events:["onMouseDown","onMouseUp","onMouseDrag","onMouseMove","onActivate","onDeactivate","onEditOptions","onKeyDown","onKeyUp"],initialize:function(A){E.call(this),this._moveCount=-1,this._downCount=-1,this.set(A)},getMinDistance:function(){return this._minDistance},setMinDistance:function(i){this._minDistance=i,i!=null&&this._maxDistance!=null&&i>this._maxDistance&&(this._maxDistance=i)},getMaxDistance:function(){return this._maxDistance},setMaxDistance:function(i){this._maxDistance=i,this._minDistance!=null&&i!=null&&i<this._minDistance&&(this._minDistance=i)},getFixedDistance:function(){return this._minDistance==this._maxDistance?this._minDistance:null},setFixedDistance:function(i){this._minDistance=this._maxDistance=i},_handleMouseEvent:function(i,A,l,L){Ze=this._scope,L.drag&&!this.responds(i)&&(i="mousemove");var h=L.move||L.drag,c=this.responds(i),d=this.minDistance,I=this.maxDistance,u=!1,S=this;function f(D,y){var H=l,P=h?S._point:S._downPoint||H;if(h){if(S._moveCount>=0&&H.equals(P))return!1;if(P&&(D!=null||y!=null)){var v=H.subtract(P),F=v.getLength();if(F<(D||0))return!1;y&&(H=P.add(v.normalize(Math.min(F,y))))}S._moveCount++}return S._point=H,S._lastPoint=P||H,L.down&&(S._moveCount=-1,S._downPoint=H,S._downCount++),!0}function O(){c&&(u=S.emit(i,new yx(S,i,A))||u)}if(L.down)f(),O();else if(L.up)f(null,I),O();else if(c)for(;f(d,I);)O();return u}});var mx=o.extend(s,{_class:"Tween",statics:{easings:new o({linear:function(i){return i},easeInQuad:function(i){return i*i},easeOutQuad:function(i){return i*(2-i)},easeInOutQuad:function(i){return i<.5?2*i*i:-1+2*(2-i)*i},easeInCubic:function(i){return i*i*i},easeOutCubic:function(i){return--i*i*i+1},easeInOutCubic:function(i){return i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1},easeInQuart:function(i){return i*i*i*i},easeOutQuart:function(i){return 1- --i*i*i*i},easeInOutQuart:function(i){return i<.5?8*i*i*i*i:1-8*--i*i*i*i},easeInQuint:function(i){return i*i*i*i*i},easeOutQuint:function(i){return 1+--i*i*i*i*i},easeInOutQuint:function(i){return i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i}})},initialize:function i(A,l,L,h,c,d){this.object=A;var I=typeof c,u=I==="function";this.type=u?I:I==="string"?c:"linear",this.easing=u?c:i.easings[this.type],this.duration=h,this.running=!1,this._then=null,this._startTime=null;var S=l||L;this._keys=S?Object.keys(S):[],this._parsedKeys=this._parseKeys(this._keys),this._from=S&&this._getState(l),this._to=S&&this._getState(L),d!==!1&&this.start()},then:function(i){return this._then=i,this},start:function(){return this._startTime=null,this.running=!0,this},stop:function(){return this.running=!1,this},update:function(i){if(this.running){i>=1&&(i=1,this.running=!1);for(var A=this.easing(i),l=this._keys,L=function(f){return typeof f=="function"?f(A,i):f},h=0,c=l&&l.length;h<c;h++){var d=l[h],I=L(this._from[d]),u=L(this._to[d]),S=I&&u&&I.__add&&u.__add?u.__subtract(I).__multiply(A).__add(I):(u-I)*A+I;this._setProperty(this._parsedKeys[d],S)}this.responds("update")&&this.emit("update",new o({progress:i,factor:A})),!this.running&&this._then&&this._then(this.object)}return this},_events:{onUpdate:{}},_handleFrame:function(i){var A=this._startTime,l=A?(i-A)/this.duration:0;A||(this._startTime=i),this.update(l)},_getState:function(i){for(var A=this._keys,l={},L=0,h=A.length;L<h;L++){var c=A[L],d=this._parsedKeys[c],I=this._getProperty(d),u;if(i){var S=this._resolveValue(I,i[c]);this._setProperty(d,S),u=this._getProperty(d),u=u&&u.clone?u.clone():u,this._setProperty(d,I)}else u=I&&I.clone?I.clone():I;l[c]=u}return l},_resolveValue:function(i,A){if(A){if(Array.isArray(A)&&A.length===2){var l=A[0];return l&&l.match&&l.match(/^[+\-\*\/]=/)?this._calculate(i,l[0],A[1]):A}else if(typeof A=="string"){var L=A.match(/^[+\-*/]=(.*)/);if(L){var h=JSON.parse(L[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": '));return this._calculate(i,A[0],h)}}}return A},_calculate:function(i,A,l){return Ze.PaperScript.calculateBinary(i,A,l)},_parseKeys:function(i){for(var A={},l=0,L=i.length;l<L;l++){var h=i[l],c=h.replace(/\.([^.]*)/g,"/$1").replace(/\[['"]?([^'"\]]*)['"]?\]/g,"/$1");A[h]=c.split("/")}return A},_getProperty:function(i,A){for(var l=this.object,L=0,h=i.length-(A||0);L<h&&l;L++)l=l[i[L]];return l},_setProperty:function(i,A){var l=this._getProperty(i,1);l&&(l[i[i.length-1]]=A)}}),Nx={request:function(i){var A=new e.XMLHttpRequest;return A.open((i.method||"get").toUpperCase(),i.url,o.pick(i.async,!0)),i.mimeType&&A.overrideMimeType(i.mimeType),A.onload=function(){var l=A.status;l===0||l===200?i.onLoad&&i.onLoad.call(A,A.responseText):A.onerror()},A.onerror=function(){var l=A.status,L='Could not load "'+i.url+'" (Status: '+l+")";if(i.onError)i.onError(L,l);else throw new Error(L)},A.send(null)}},Nt=o.exports.CanvasProvider={canvases:[],getCanvas:function(i,A,l){if(!n)return null;var L,h=!0;typeof i=="object"&&(A=i.height,i=i.width),this.canvases.length?L=this.canvases.pop():(L=a.createElement("canvas"),h=!1);var c=L==null?void 0:L.getContext("2d",l||{});return L.width===i&&L.height===A?h&&c.clearRect(0,0,i+1,A+1):(L.width=i,L.height=A),c==null||c.save(),L},getContext:function(i,A,l){var L=this==null?void 0:this.getCanvas(i,A,l);return L?L.getContext("2d",l||{}):null},release:function(i){var A=i&&i.canvas?i.canvas:i;A&&A.getContext&&(A.getContext("2d").restore(),this.canvases.push(A))}},x0=new function(){var i=Math.min,A=Math.max,l=Math.abs,L,h,c,d,I,u,S,f,O,D,y;function H(G,b,U){return .2989*G+.587*b+.114*U}function P(G,b,U,k){var W=k-H(G,b,U);O=G+W,D=b+W,y=U+W;var k=H(O,D,y),Z=i(O,D,y),J=A(O,D,y);if(Z<0){var X=k-Z;O=k+(O-k)*k/X,D=k+(D-k)*k/X,y=k+(y-k)*k/X}if(J>255){var j=255-k,q=J-k;O=k+(O-k)*j/q,D=k+(D-k)*j/q,y=k+(y-k)*j/q}}function v(G,b,U){return A(G,b,U)-i(G,b,U)}function F(G,b,U,w){var W=[G,b,U],k=A(G,b,U),Z=i(G,b,U),J;Z=Z===G?0:Z===b?1:2,k=k===G?0:k===b?1:2,J=i(Z,k)===0?A(Z,k)===1?2:1:0,W[k]>W[Z]?(W[J]=(W[J]-W[Z])*w/(W[k]-W[Z]),W[k]=w):W[J]=W[k]=0,W[Z]=0,O=W[0],D=W[1],y=W[2]}var M={multiply:function(){O=I*L/255,D=u*h/255,y=S*c/255},screen:function(){O=I+L-I*L/255,D=u+h-u*h/255,y=S+c-S*c/255},overlay:function(){O=I<128?2*I*L/255:255-2*(255-I)*(255-L)/255,D=u<128?2*u*h/255:255-2*(255-u)*(255-h)/255,y=S<128?2*S*c/255:255-2*(255-S)*(255-c)/255},"soft-light":function(){var G=L*I/255;O=G+I*(255-(255-I)*(255-L)/255-G)/255,G=h*u/255,D=G+u*(255-(255-u)*(255-h)/255-G)/255,G=c*S/255,y=G+S*(255-(255-S)*(255-c)/255-G)/255},"hard-light":function(){O=L<128?2*L*I/255:255-2*(255-L)*(255-I)/255,D=h<128?2*h*u/255:255-2*(255-h)*(255-u)/255,y=c<128?2*c*S/255:255-2*(255-c)*(255-S)/255},"color-dodge":function(){O=I===0?0:L===255?255:i(255,255*I/(255-L)),D=u===0?0:h===255?255:i(255,255*u/(255-h)),y=S===0?0:c===255?255:i(255,255*S/(255-c))},"color-burn":function(){O=I===255?255:L===0?0:A(0,255-(255-I)*255/L),D=u===255?255:h===0?0:A(0,255-(255-u)*255/h),y=S===255?255:c===0?0:A(0,255-(255-S)*255/c)},darken:function(){O=I<L?I:L,D=u<h?u:h,y=S<c?S:c},lighten:function(){O=I>L?I:L,D=u>h?u:h,y=S>c?S:c},difference:function(){O=I-L,O<0&&(O=-O),D=u-h,D<0&&(D=-D),y=S-c,y<0&&(y=-y)},exclusion:function(){O=I+L*(255-I-I)/255,D=u+h*(255-u-u)/255,y=S+c*(255-S-S)/255},hue:function(){F(L,h,c,v(I,u,S)),P(O,D,y,H(I,u,S))},saturation:function(){F(I,u,S,v(L,h,c)),P(O,D,y,H(I,u,S))},luminosity:function(){P(I,u,S,H(L,h,c))},color:function(){P(L,h,c,H(I,u,S))},add:function(){O=i(I+L,255),D=i(u+h,255),y=i(S+c,255)},subtract:function(){O=A(I-L,0),D=A(u-h,0),y=A(S-c,0)},average:function(){O=(I+L)/2,D=(u+h)/2,y=(S+c)/2},negation:function(){O=255-l(255-L-I),D=255-l(255-h-u),y=255-l(255-c-S)}},m=this.nativeModes=o.each(["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","darker","copy","xor"],function(G){this[G]=!0},{}),B=Nt==null?void 0:Nt.getContext(1,1,{willReadFrequently:!0});B&&(o.each(M,function(G,b){var U=b==="darken",w=!1;B==null||B.save();try{B.fillStyle=U?"#300":"#a00",B.fillRect(0,0,1,1),B.globalCompositeOperation=b,B.globalCompositeOperation===b&&(B.fillStyle=U?"#a00":"#300",B.fillRect(0,0,1,1),w=B.getImageData(0,0,1,1).data[0]!==U?170:51)}catch{}B.restore(),m[b]=w}),Nt.release(B)),this.process=function(G,b,U,w,W){var k=b.canvas,Z=G==="normal";if(Z||m[G])U.save(),U.setTransform(1,0,0,1,0,0),U.globalAlpha=w,Z||(U.globalCompositeOperation=G),U.drawImage(k,W.x,W.y),U.restore();else{var J=M[G];if(!J)return;for(var X=U.getImageData(W.x,W.y,k.width,k.height),j=X.data,q=b.getImageData(0,0,k.width,k.height).data,ee=0,re=j.length;ee<re;ee+=4){L=q[ee],I=j[ee],h=q[ee+1],u=j[ee+1],c=q[ee+2],S=j[ee+2],d=q[ee+3],f=j[ee+3],J();var le=d*w/255,Ee=1-le;j[ee]=le*O+Ee*I,j[ee+1]=le*D+Ee*u,j[ee+2]=le*y+Ee*S,j[ee+3]=d*w+Ee*f}U.putImageData(X,W.x,W.y)}}},Dt=new function(){var i="http://www.w3.org/2000/svg",A="http://www.w3.org/2000/xmlns",l="http://www.w3.org/1999/xlink",L={href:l,xlink:A,xmlns:A+"/","xmlns:xlink":A+"/"};function h(I,u,S){return d(a.createElementNS(i,I),u,S)}function c(I,u){var S=L[u],f=S?I.getAttributeNS(S,u):I.getAttribute(u);return f==="null"?null:f}function d(I,u,S){for(var f in u){var O=u[f],D=L[f];typeof O=="number"&&S&&(O=S.number(O)),D?I.setAttributeNS(D,f,O):I.setAttribute(f,O)}return I}return{svg:i,xmlns:A,xlink:l,create:h,get:c,set:d}},eA=o.each({fillColor:["fill","color"],fillRule:["fill-rule","string"],strokeColor:["stroke","color"],strokeWidth:["stroke-width","number"],strokeCap:["stroke-linecap","string"],strokeJoin:["stroke-linejoin","string"],strokeScaling:["vector-effect","lookup",{true:"none",false:"non-scaling-stroke"},function(i,A){return!A&&(i instanceof At||i instanceof me||i instanceof en)}],miterLimit:["stroke-miterlimit","number"],dashArray:["stroke-dasharray","array"],dashOffset:["stroke-dashoffset","number"],fontFamily:["font-family","string"],fontWeight:["font-weight","string"],fontSize:["font-size","number"],justification:["text-anchor","lookup",{left:"start",center:"middle",right:"end"}],opacity:["opacity","number"],blendMode:["mix-blend-mode","style"]},function(i,A){var l=o.capitalize(A),L=i[2];this[A]={type:i[1],property:A,attribute:i[0],toSVG:L,fromSVG:L&&o.each(L,function(h,c){this[h]=c},{}),exportFilter:i[3],get:"get"+l,set:"set"+l}},{});new function(){var i;function A(M,m,B){var G=new o,b=M.getTranslation();if(m){var U;M.isInvertible()?(M=M._shiftless(),U=M._inverseTransform(b),b=null):U=new g,G[B?"cx":"x"]=U.x,G[B?"cy":"y"]=U.y}if(!M.isIdentity()){var w=M.decompose();if(w){var W=[],k=w.rotation,Z=w.scaling,J=w.skewing;b&&!b.isZero()&&W.push("translate("+i.point(b)+")"),k&&W.push("rotate("+i.number(k)+")"),(!R.isZero(Z.x-1)||!R.isZero(Z.y-1))&&W.push("scale("+i.point(Z)+")"),J.x&&W.push("skewX("+i.number(J.x)+")"),J.y&&W.push("skewY("+i.number(J.y)+")"),G.transform=W.join(" ")}else G.transform="matrix("+M.getValues().join(",")+")"}return G}function l(M,m){for(var B=A(M._matrix),G=M._children,b=Dt.create("g",B,i),U=0,w=G.length;U<w;U++){var W=G[U],k=v(W,m);if(k)if(W.isClipMask()){var Z=Dt.create("clipPath");Z.appendChild(k),H(W,Z,"clip"),Dt.set(b,{"clip-path":"url(#"+Z.id+")"})}else b.appendChild(k)}return b}function L(M,m){var B=A(M._matrix,!0),G=M.getSize(),b=M.getImage();return B.x-=G.width/2,B.y-=G.height/2,B.width=G.width,B.height=G.height,B.href=m.embedImages==!1&&b&&b.src||M.toDataURL(),Dt.create("image",B,i)}function h(M,m){var B=m.matchShapes;if(B){var G=M.toShape(!1);if(G)return c(G)}var b=M._segments,U=b.length,w,W=A(M._matrix);if(B&&U>=2&&!M.hasHandles())if(U>2){w=M._closed?"polygon":"polyline";for(var k=[],Z=0;Z<U;Z++)k.push(i.point(b[Z]._point));W.points=k.join(" ")}else{w="line";var J=b[0]._point,X=b[1]._point;W.set({x1:J.x,y1:J.y,x2:X.x,y2:X.y})}else w="path",W.d=M.getPathData(null,m.precision);return Dt.create(w,W,i)}function c(M){var m=M._type,B=M._radius,G=A(M._matrix,!0,m!=="rectangle");if(m==="rectangle"){m="rect";var b=M._size,U=b.width,w=b.height;G.x-=U/2,G.y-=w/2,G.width=U,G.height=w,B.isZero()&&(B=null)}return B&&(m==="circle"?G.r=B:(G.rx=B.width,G.ry=B.height)),Dt.create(m,G,i)}function d(M,m){var B=A(M._matrix),G=M.getPathData(null,m.precision);return G&&(B.d=G),Dt.create("path",B,i)}function I(M,m){var B=A(M._matrix,!0),G=M._definition,b=y(G,"symbol"),U=G._item,w=U.getStrokeBounds();return b||(b=Dt.create("symbol",{viewBox:i.rectangle(w)}),b.appendChild(v(U,m)),H(G,b,"symbol")),B.href="#"+b.id,B.x+=w.x,B.y+=w.y,B.width=w.width,B.height=w.height,B.overflow="visible",Dt.create("use",B,i)}function u(M){var m=y(M,"color");if(!m){var B=M.getGradient(),G=B._radial,b=M.getOrigin(),U=M.getDestination(),w;if(G){w={cx:b.x,cy:b.y,r:b.getDistance(U)};var W=M.getHighlight();W&&(w.fx=W.x,w.fy=W.y)}else w={x1:b.x,y1:b.y,x2:U.x,y2:U.y};w.gradientUnits="userSpaceOnUse",m=Dt.create((G?"radial":"linear")+"Gradient",w,i);for(var k=B._stops,Z=0,J=k.length;Z<J;Z++){var X=k[Z],j=X._color,q=j.getAlpha(),ee=X._offset;w={offset:ee??Z/(J-1)},j&&(w["stop-color"]=j.toCSS(!0)),q<1&&(w["stop-opacity"]=q),m.appendChild(Dt.create("stop",w,i))}H(M,m,"color")}return"url(#"+m.id+")"}function S(M){var m=Dt.create("text",A(M._matrix,!0),i);return m.textContent=M._content,m}var f={Group:l,Layer:l,Raster:L,Path:h,Shape:c,CompoundPath:d,SymbolItem:I,PointText:S};function O(M,m,B){var G={},b=!B&&M.getParent(),U=[];return M._name!=null&&(G.id=M._name),o.each(eA,function(w){var W=w.get,k=w.type,Z=M[W]();if(w.exportFilter?w.exportFilter(M,Z):!b||!o.equals(b[W](),Z)){if(k==="color"&&Z!=null){var J=Z.getAlpha();J<1&&(G[w.attribute+"-opacity"]=J)}k==="style"?U.push(w.attribute+": "+Z):G[w.attribute]=Z==null?"none":k==="color"?Z.gradient?u(Z):Z.toCSS(!0):k==="array"?Z.join(","):k==="lookup"?w.toSVG[Z]:Z}}),U.length&&(G.style=U.join(";")),G.opacity===1&&delete G.opacity,M._visible||(G.visibility="hidden"),Dt.set(m,G,i)}var D;function y(M,m){return D||(D={ids:{},svgs:{}}),M&&D.svgs[m+"-"+(M._id||M.__id||(M.__id=N.get("svg")))]}function H(M,m,B){D||y();var G=D.ids[B]=(D.ids[B]||0)+1;m.id=B+"-"+G,D.svgs[B+"-"+(M._id||M.__id)]=m}function P(M,m){var B=M,G=null;if(D){B=M.nodeName.toLowerCase()==="svg"&&M;for(var b in D.svgs)G||(B||(B=Dt.create("svg"),B.appendChild(M)),G=B.insertBefore(Dt.create("defs"),B.firstChild)),G.appendChild(D.svgs[b]);D=null}return m.asString?new e.XMLSerializer().serializeToString(B):B}function v(M,m,B){var G=f[M._class],b=G&&G(M,m);if(b){var U=m.onExport;U&&(b=U(M,b,m)||b);var w=JSON.stringify(M._data);w&&w!=="{}"&&w!=="null"&&b.setAttribute("data-paper-data",w)}return b&&O(M,b,B)}function F(M){return M||(M={}),i=new p(M.precision),M}Ae.inject({exportSVG:function(M){return M=F(M),P(v(this,M,!0),M)}}),he.inject({exportSVG:function(M){M=F(M);var m=this._children,B=this.getView(),G=o.pick(M.bounds,"view"),b=M.matrix||G==="view"&&B._matrix,U=b&&Q.read([b]),w=G==="view"?new _([0,0],B.getViewSize()):G==="content"?Ae._getBounds(m,U,{stroke:!0}).rect:_.read([G],0,{readNull:!0}),W={version:"1.1",xmlns:Dt.svg,"xmlns:xlink":Dt.xlink};w&&(W.width=w.width,W.height=w.height,(w.x||w.x===0||w.y||w.y===0)&&(W.viewBox=i.rectangle(w)));var k=Dt.create("svg",W,i),Z=k;U&&!U.isIdentity()&&(Z=k.appendChild(Dt.create("g",A(U),i)));for(var J=0,X=m.length;J<X;J++)Z.appendChild(v(m[J],M,!0));return P(k,M)}})},new function(){var i={},A;function l(m,B,G,b,U,w){var W=Dt.get(m,B)||w,k=W==null?b?null:G?"":0:G?W:parseFloat(W);return/%\s*$/.test(W)?k/100*(U?1:A[/x|^width/.test(B)?"width":"height"]):k}function L(m,B,G,b,U,w,W){return B=l(m,B||"x",!1,b,U,w),G=l(m,G||"y",!1,b,U,W),b&&(B==null||G==null)?null:new g(B,G)}function h(m,B,G,b,U){return B=l(m,B||"width",!1,b,U),G=l(m,G||"height",!1,b,U),b&&(B==null||G==null)?null:new Y(B,G)}function c(m,B,G){return m==="none"?null:B==="number"?parseFloat(m):B==="array"?m?m.split(/[\s,]+/g).map(parseFloat):[]:B==="color"?v(m)||m:B==="lookup"?G[m]:m}function d(m,B,G,b){var U=m.childNodes,w=B==="clippath",W=B==="defs",k=new ce,Z=k._project,J=Z._currentStyle,X=[];if(!w&&!W&&(k=P(k,m,b),Z._currentStyle=k._style.clone()),b)for(var j=m.querySelectorAll("defs"),q=0,ee=j.length;q<ee;q++)F(j[q],G,!1);for(var q=0,ee=U.length;q<ee;q++){var re=U[q],le;re.nodeType===1&&!/^defs$/i.test(re.nodeName)&&(le=F(re,G,!1))&&!(le instanceof it)&&X.push(le)}return k.addChildren(X),w&&(k=P(k.reduce(),m,b)),Z._currentStyle=J,(w||W)&&(k.remove(),k=null),k}function I(m,B){for(var G=m.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g),b=[],U=0,w=G.length;U<w;U+=2)b.push(new g(parseFloat(G[U]),parseFloat(G[U+1])));var W=new Oe(b);return B==="polygon"&&W.closePath(),W}function u(m){return At.create(m.getAttribute("d"))}function S(m,B){var G=(l(m,"href",!0)||"").substring(1),b=B==="radialgradient",U;if(G)U=i[G].getGradient(),U._radial^b&&(U=U.clone(),U._radial=b);else{for(var w=m.childNodes,W=[],k=0,Z=w.length;k<Z;k++){var J=w[k];J.nodeType===1&&W.push(P(new Kn,J))}U=new tn(W,b)}var X,j,q,ee=l(m,"gradientUnits",!0)!=="userSpaceOnUse";b?(X=L(m,"cx","cy",!1,ee,"50%","50%"),j=X.add(l(m,"r",!1,!1,ee,"50%"),0),q=L(m,"fx","fy",!0,ee)):(X=L(m,"x1","y1",!1,ee,"0%","0%"),j=L(m,"x2","y2",!1,ee,"100%","0%"));var re=P(new Ht(U,X,j,q),m);return re._scaleToBounds=ee,null}var f={"#document":function(m,B,G,b){for(var U=m.childNodes,w=0,W=U.length;w<W;w++){var k=U[w];if(k.nodeType===1)return F(k,G,b)}},g:d,svg:d,clippath:d,polygon:I,polyline:I,path:u,lineargradient:S,radialgradient:S,image:function(m){var B=new we(l(m,"href",!0));return B.on("load",function(){var G=h(m);this.setSize(G);var b=L(m).add(G.divide(2));this._matrix.append(new Q().translate(b))}),B},symbol:function(m,B,G,b){return new it(d(m,B,G,b),!0)},defs:d,use:function(m){var B=(l(m,"href",!0)||"").substring(1),G=i[B],b=L(m);return G?G instanceof it?G.place(b):G.clone().translate(b):null},circle:function(m){return new me.Circle(L(m,"cx","cy"),l(m,"r"))},ellipse:function(m){return new me.Ellipse({center:L(m,"cx","cy"),radius:h(m,"rx","ry")})},rect:function(m){return new me.Rectangle(new _(L(m),h(m)),h(m,"rx","ry"))},line:function(m){return new Oe.Line(L(m,"x1","y1"),L(m,"x2","y2"))},text:function(m){var B=new l0(L(m).add(L(m,"dx","dy")));return B.setContent(m.textContent.trim()||""),B},switch:d};function O(m,B,G,b){if(m.transform){for(var U=(b.getAttribute(G)||"").split(/\)\s*/g),w=new Q,W=0,k=U.length;W<k;W++){var Z=U[W];if(!Z)break;for(var J=Z.split(/\(\s*/),X=J[0],j=J[1].split(/[\s,]+/g),q=0,ee=j.length;q<ee;q++)j[q]=parseFloat(j[q]);switch(X){case"matrix":w.append(new Q(j[0],j[1],j[2],j[3],j[4],j[5]));break;case"rotate":w.rotate(j[0],j[1]||0,j[2]||0);break;case"translate":w.translate(j[0],j[1]||0);break;case"scale":w.scale(j);break;case"skewX":w.skew(j[0],0);break;case"skewY":w.skew(0,j[0]);break}}m.transform(w)}}function D(m,B,G){var b=G==="fill-opacity"?"getFillColor":"getStrokeColor",U=m[b]&&m[b]();U&&U.setAlpha(parseFloat(B))}var y=o.set(o.each(eA,function(m){this[m.attribute]=function(B,G){if(B[m.set]&&(B[m.set](c(G,m.type,m.fromSVG)),m.type==="color")){var b=B[m.get]();if(b&&b._scaleToBounds){var U=B.getBounds();b.transform(new Q().translate(U.getPoint()).scale(U.getSize()))}}}},{}),{id:function(m,B){i[B]=m,m.setName&&m.setName(B)},"clip-path":function(m,B){var G=v(B);if(G)if(G=G.clone(),G.setClipMask(!0),m instanceof ce)m.insertChild(0,G);else return new ce(G,m)},gradientTransform:O,transform:O,"fill-opacity":D,"stroke-opacity":D,visibility:function(m,B){m.setVisible&&m.setVisible(B==="visible")},display:function(m,B){m.setVisible&&m.setVisible(B!==null)},"stop-color":function(m,B){m.setColor&&m.setColor(B)},"stop-opacity":function(m,B){m._color&&m._color.setAlpha(parseFloat(B))},offset:function(m,B){if(m.setOffset){var G=B.match(/(.*)%$/);m.setOffset(G?G[1]/100:parseFloat(B))}},viewBox:function(m,B,G,b,U){var w=new _(c(B,"array")),W=h(b,null,null,!0),k,Z;if(m instanceof ce){var J=W?W.divide(w.getSize()):1,Z=new Q().scale(J).translate(w.getPoint().negate());k=m}else m instanceof it&&(W&&w.setSize(W),k=m._item);if(k){if(H(b,"overflow",U)!=="visible"){var X=new me.Rectangle(w);X.setClipMask(!0),k.addChild(X)}Z&&k.transform(Z)}}});function H(m,B,G){var b=m.attributes[B],U=b&&b.value;if(!U&&m.style){var w=o.camelize(B);U=m.style[w],!U&&G.node[w]!==G.parent[w]&&(U=G.node[w])}return U?U==="none"?null:U:r}function P(m,B,G){var b=B.parentNode,U={node:yt.getStyles(B)||{},parent:!G&&!/^defs$/i.test(b.tagName)&&yt.getStyles(b)||{}};return o.each(y,function(w,W){var k=H(B,W,U);m=k!==r&&w(m,k,W,B,U)||m}),m}function v(m){var B=m&&m.match(/\((?:["'#]*)([^"')]+)/),G=B&&B[1],b=G&&i[n?G.replace(n.location.href.split("#")[0]+"#",""):G];return b&&b._scaleToBounds&&(b=b.clone(),b._scaleToBounds=!0),b}function F(m,B,G){var b=m.nodeName.toLowerCase(),U=b!=="#document",w=a.body,W,k,Z;G&&U&&(A=Ze.getView().getSize(),A=h(m,null,null,!0)||A,W=Dt.create("svg",{style:"stroke-width: 1px; stroke-miterlimit: 10"}),k=m.parentNode,Z=m.nextSibling,W.appendChild(m),w.appendChild(W));var J=Ze.settings,X=J.applyMatrix,j=J.insertItems;J.applyMatrix=!1,J.insertItems=!1;var q=f[b],ee=q&&q(m,b,B,G)||null;if(J.insertItems=j,J.applyMatrix=X,ee){U&&!(ee instanceof ce)&&(ee=P(ee,m,G));var re=B.onImport,le=U&&m.getAttribute("data-paper-data");re&&(ee=re(m,ee,B)||ee),B.expandShapes&&ee instanceof me&&(ee.remove(),ee=ee.toPath()),le&&(ee._data=JSON.parse(le))}return W&&(w.removeChild(W),k&&(Z?k.insertBefore(m,Z):k.appendChild(m))),G&&(i={},ee&&o.pick(B.applyMatrix,X)&&ee.matrix.apply(!0,!0)),ee}function M(m,B,G){if(!m)return null;B=typeof B=="function"?{onLoad:B}:B||{};var b=Ze,U=null;function w(J){try{var X=typeof J=="object"?J:new e.DOMParser().parseFromString(J.trim(),"image/svg+xml");if(!X.nodeName)throw X=null,new Error("Unsupported SVG source: "+m);Ze=b,U=F(X,B,!0),(!B||B.insert!==!1)&&G._insertItem(r,U);var j=B.onLoad;j&&j(U,J)}catch(q){W(q)}}function W(J,X){var j=B.onError;if(j)j(J,X);else throw new Error(J)}if(typeof m=="string"&&!/^[\s\S]*</.test(m)){var k=a.getElementById(m);k?w(k):Nx.request({url:m,async:!0,onLoad:w,onError:W})}else if(typeof File<"u"&&m instanceof File){var Z=new FileReader;return Z.onload=function(){w(Z.result)},Z.onerror=function(){W(Z.error)},Z.readAsText(m)}else w(m);return U}Ae.inject({importSVG:function(m,B){return M(m,B,this)}}),he.inject({importSVG:function(m,B){return this.activate(),M(m,B,this)}})};var Ze=new(x.inject(o.exports,{Base:o,Numerical:R,Key:$o,DomEvent:Ut,DomElement:yt,document:a,window:n,Symbol:it,PlacedSymbol:Ye}));return Ze.agent.node&&L1(Ze),typeof r=="function"&&r.amd?r("paper",Ze):t&&(t.exports=Ze),Ze}).call(Fd,typeof self=="object"?self:null)})(Cl);var vd=Cl.exports;const Ud=Md(vd),$n=Ud;$n.setup();function wd(t=[],e="unite"){var o;if(t.length===0)return"No paths were found to combine.";if(["divide","subtract","intersect","unite","exclude","intersect"].indexOf(e)<0)return`Unknown combine operation: ${e}`;let r=[];t.forEach(s=>{r=r.concat(Wd(s))});let n;if(e==="divide"){let s=Yd(r);n=new $n.CompoundPath({children:s})}else if(e==="subtract"){const s=r.pop();let x=[];r.forEach(E=>x.push(E.subtract(s))),n=new $n.CompoundPath({children:x})}else e==="intersect"?(n=r.shift(),r.forEach(s=>n=n.intersect(s))):(n=new $n.Path,r.forEach(s=>{e==="unite"&&(n=n.unite(s)),e==="exclude"&&(n=n.exclude(s)),e==="intersect"&&(n=n.intersect(s))}));let a=[];return n!=null&&n.children?n.children.forEach(s=>{a=a.concat(h1(s))}):(o=n==null?void 0:n.segments)!=null&&o.length&&(a=h1(n)),a}function Yd(t=[]){for(let e=0;e<t.length;e++){let r=t[e];for(let n=0;n<e;n++){const a=t[n];if(r.intersects(a)){new $n.Layer([a,r]).exportSVG();const o=a.divide(r);let s=o.children||[o];s=s.filter(T=>T.segments.length),s.forEach(T=>T.closed="true");const x=r.subtract(a);let E=x.children||[x];E=E.filter(T=>T.segments.length),s.length&&(t.splice(n,1),t.splice(n,0,...s),n+=s.length-1,e+=s.length-1),t.splice(e,1,...E),r=t[e]}}}return t}function Wd(t){const e=t.svgPathData;return new $n.Path(e)}function h1(t){const e=kd(t);if(e==="")return[];let r=Fa(`<svg><path d="${e}"></path></svg>`,!1);if(r.shapes)r=r.shapes;else return[];return r}function kd(t){return t.exportSVG().getAttribute("d")}class gl{constructor(){this.members=[],this.singleHandle=!1}isSelected(e){return this.members.indexOf(e)>-1}isSelectable(e){return["PathPoint","Path","ComponentInstance"].includes(e==null?void 0:e.objType)&&!this.isSelected(e)}select(e){this.isSelectable(e)?(this.members=[e],this.publishChanges()):this.clear()}add(e){this.isSelectable(e)&&(this.members.push(e),this.publishChanges())}clear(){this.members=[],this.virtualGlyph&&(this.virtualGlyph.ratioLock=!1),this.singleHandle=!1,this.publishChanges()}remove(e){this.members=this.members.filter(function(r){return r!==e}),this.publishChanges()}removeMissing(){this.members=this.members.filter(function(e){return typeof e=="object"}),this.publishChanges()}get count(){return this.members.length}toggle(e){this.isSelected(e)?this.remove(e):this.add(e),this.publishChanges()}get type(){return this.members.length===0?!1:this.members.length===1?this.members[0].objType:"multi"}get length(){return this.members.length}set members(e){this._members=e}get members(){return this._members||[]}get singleton(){let e=!1;return this.members.length===1&&(e=this.members[0]),e}}class Kd extends gl{constructor(){super(),this._virtualShape=new ir({name:"Multi-selected Path Points",objType:"VirtualShape"})}get virtualShape(){return this._virtualShape._pathPoints=this.members,this._virtualShape.changed(),this._virtualShape}get hasMultipleParents(){for(let e=0;e<this.members.length;e++){let r=this.members[e].parent;for(let n=0;n<this.members.length;n++)if(e!==n&&r!==this.members[n].parent)return!0}return!1}publishChanges(e="whichPathPointIsSelected"){z().publish(e,this.members)}changed(){this.members.forEach(e=>{e.changed()})}updateShapePosition(e,r){this.virtualShape.updateShapePosition(e,r),this.changed()}deleteShapesPoints(){let e,r,n,a=Number.MAX_SAFE_INTEGER;for(let o=0;o<this.members.length;o++)e=this.members[o],r=e.parent,n=e.pointNumber,n>-1&&(r.pathPoints.splice(n,1),r.changed(),a=Math.min(n,a));return this.clear(),a}get highestSelectedPointNumber(){if(!this.members[0])return!1;this.members.sort((n,a)=>n.pointNumber-a.pointNumber);let e=this.members.at(-1).pointNumber,r=this.members[0].parent;if(e===r.pathPoints.length-1){for(e=0;this.isSelected(r.pathPoints[e]);)e++;e-=1}return e}get lowestSelectedPointNumber(){if(!this.members[0])return!1;this.members.sort((n,a)=>n.pointNumber-a.pointNumber);let e=this.members[0].pointNumber,r=this.members[0].parent;if(e===0){for(e=r.pathPoints.length-1;this.isSelected(r.pathPoints[e]);)e--;e+=1}return e}setPointType(e){for(let r=0;r<this.members.length;r++)this.members[r].setPointType(e);this.changed()}resetHandles(){for(let e=0;e<this.members.length;e++)this.members[e].resetHandles();this.changed()}roundAll(e=9){for(let r=0;r<this.members.length;r++)this.members[r].roundAll(e);this.changed()}resolvePointType(){for(let e=0;e<this.members.length;e++)this.members[e].resolvePointType();this.changed()}updatePathPointPosition(e,r){if(this.singleHandle)this.singleton.updatePathPointPosition(this.singleHandle,e,r);else for(let n=0;n<this.members.length;n++)this.members[n].updatePathPointPosition("p",e,r);this.changed()}}class _d extends gl{constructor(){super(),this._virtualGlyph=new at({name:"Multi-selected Shapes",id:"Multi-selected Shapes",objType:"VirtualGlyph"})}get virtualGlyph(){return this._virtualGlyph._shapes=this.members,this._virtualGlyph.changed(),this._virtualGlyph}get allPathPoints(){let e=[];return this.members.forEach(r=>{r!=null&&r.pathPoints&&(e=e.concat(r.pathPoints))}),e}publishChanges(e="whichShapeIsSelected"){z().publish(e,this.members)}changed(){this.members.forEach(e=>{e.changed()})}get maxes(){return this.virtualGlyph.maxes}get ratioLock(){return this.members.length===1?this.members[0].ratioLock:this.virtualGlyph.ratioLock}selectAll(){const e=z().selectedItem;e.shapes&&e.shapes.forEach(r=>{this.add(r)})}contains(e){if(this.members.length===0)return!1;let r=!1;for(let n=0;n<this.members.length;n++)if(r=this.members[n].objType===e,r)return!0;return!1}combine(e="unite"){let r=!0;const n=kn(this.virtualGlyph),a=wd(n.shapes,e);return Array.isArray(a)?(this.deleteShapes(),a.forEach(o=>Pl(o)),ye(`Combine shapes: ${e} complete!`,2e3)):(r=!1,ye(`Combine shapes error:<br>${a}`,2e3)),r}deleteShapes(){const e=z(),r=xe(),n=e.selectedItem.shapes;let a;this.members.length===0?this.clear():this.members.forEach(o=>{o.objType==="ComponentInstance"&&A0(r.getItem(o.link),o.parent.id),a=n.indexOf(o),a>-1&&n.splice(a,1)}),this.select(n.at(-1))}align(e){const r=this.maxes;this.virtualGlyph.shapes.forEach(n=>{if(e==="top"){let a=r.yMax-n.maxes.yMax;n.updateShapePosition(0,a)}if(e==="middle"){let a=r.center.y-n.maxes.center.y;n.updateShapePosition(0,a)}if(e==="bottom"){let a=r.yMin-n.maxes.yMin;n.updateShapePosition(0,a)}if(e==="left"){let a=r.xMin-n.maxes.xMin;n.updateShapePosition(a,0)}if(e==="center"){let a=r.center.x-n.maxes.center.x;n.updateShapePosition(a,0)}if(e==="right"){let a=r.xMax-n.maxes.xMax;n.updateShapePosition(a,0)}})}updateShapePosition(e,r){this.virtualGlyph.updateGlyphPosition(e,r),this.changed()}setShapePosition(e,r){this.virtualGlyph.setGlyphPosition(e,r),this.changed()}updateShapeSize(e){this.virtualGlyph.updateGlyphSize(e),this.changed()}setShapeSize(e){this.virtualGlyph.setGlyphSize(e),this.changed()}rotate(e,r){this.virtualGlyph.rotate(e,r),this.changed()}isRotatable(){return this.members.length===1?!0:!this.contains("Component Instance")}flipNS(e){this.virtualGlyph.flipNS(e),this.changed()}flipEW(e){this.virtualGlyph.flipEW(e),this.changed()}getAttribute(e){return this.members.length===1?this.members[0][e]:this.members.length>1&&this.virtualGlyph[e]||!1}isOverBoundingBoxHandle(e,r){let n=!1;return this.members.length===0?n=!1:this.members.length===1?n=x1(e,r,this.members[0].maxes):n=x1(e,r,this.virtualGlyph.maxes),n}getCenter(){return this.virtualGlyph.maxes.center}drawShapes(e,r){let n=!1,a=!1;for(let o=0;o<this.members.length;o++)a=wa(this.members[o],e,r),n=n||!a;return!n}reverseWinding(){for(let e=0;e<this.members.length;e++)this.members[e].reverseWinding();this.changed()}}const Vd=["editCanvasView","whichToolIsSelected","whichGlyphIsSelected","whichLigatureIsSelected","whichComponentIsSelected","whichKernGroupIsSelected","whichShapeIsSelected","whichPathPointIsSelected","currentItem","currentGlyph","currentVirtualGlyph","currentLigature","currentComponent","currentKernGroup","currentPath","currentVirtualShape","currentComponentInstance","currentPathPoint","currentPathPoint.p","currentPathPoint.h1","currentPathPoint.h2"];function Jd(t,e){var a,o;let r=this.subscribers;if(r[t]){n(t,e),t==="whichToolIsSelected"&&e!=="pathAddPoint"&&Pa(),(t==="whichGlyphIsSelected"||t==="whichLigatureIsSelected"||t==="whichComponentIsSelected")&&(this.multiSelect.shapes.clear(),this.multiSelect.points.clear());let s=!1;if((a=this.selectedItem)!=null&&a.objType&&(s=`current${this.selectedItem.objType}`),t==="currentVirtualGlyph"&&(n("currentItem",this.selectedItem),n(s,this.selectedItem)),t==="currentItem"||t==="currentGlyph"||t==="currentLigature"||t==="currentComponent"||t==="currentKernGroup"){n("currentItem",e),n("currentVirtualGlyph",e),n(s,e);let x=this.multiSelect.shapes.singleton,E=this.multiSelect.points.singleton;x&&(x.objType==="Path"?n("currentPath",x):n("currentComponentInstance",x)),E&&n("currentPathPoint",E),((o=this.selectedItem)==null?void 0:o.objType)!=="KernGroup"&&o0(e)}t==="currentPath"&&(n("currentItem",e.parent),n(s,e.parent)),t==="currentComponentInstance"&&(n("currentItem",e.parent),n(s,e.parent)),t.includes("currentPathPoint")&&(n("currentPath",e.parent),n("currentItem",e.parent.parent),n(s,e.parent.parent),t==="currentPathPoint"&&(n("currentPathPoint.p",e.p),n("currentPathPoint.h1",e.h1),n("currentPathPoint.h2",e.h2)),t==="currentPathPoint.p"&&(n("currentPathPoint",e.parent),n("currentPathPoint.p",e),n("currentPathPoint.h1",e.parent.h1),n("currentPathPoint.h2",e.parent.h2)))}function n(s,x){r[s]&&Object.keys(r[s]).forEach(E=>{r[s][E](x)})}}function zd({topic:t=!1,subscriberID:e="",callback:r=!1}){if(!t){console.warn("Subscriber was not provided a topic");return}if(!r){console.warn("Subscriber was not provided a callback");return}if(!e){console.warn("Subscriber was not provided a subscriberID");return}let n=typeof t=="string"?[t]:t;n[0]==="*"&&(n=Vd),n.forEach(a=>{this.subscribers[a]||(this.subscribers[a]={}),this.subscribers[a][e]=r})}function Zd({topicToRemove:t=!1,idToRemove:e=!1}){t&&this.subscribers[t]&&delete this.subscribers[t],e&&Object.keys(this.subscribers).forEach(r=>{Object.keys(this.subscribers[r]).forEach(n=>{n.indexOf(e)>-1&&delete this.subscribers[r][n]})})}class t0{constructor(e=!1){this.loadedFileHandle=!1,this.project=!1,e.project&&(this.project=e.project),this.history=new s1,this.projectSaved=!0,this.stopPageNavigation=!0,this.subscribers={},this.publish=Jd,this.subscribe=zd,this.unsubscribe=Zd,this.selectedGlyphID=!1,this.selectedComponentID=!1,this.selectedLigatureID=!1,this.selectedKernGroupID=!1,this.selectedCharacterRange=!1,this.chooserPage={glyphs:0,components:0,ligatures:0,kerning:0},this.nav=new Yu,this.showPageTransitions=!0,this.editCanvas=!1,this._views={},this.defaultView={dx:200,dy:500,dz:.5,default:!0},this.defaultKernView={dx:500,dy:500,dz:.5,default:!0},this.systemGuides={ascent:!1,capHeight:!1,xHeight:!1,baseline:!0,descent:!1,leftSide:!0,rightSide:!0},this.popOutWindow=!1,this.livePreviews=!1,this.eventHandlers={},this.selectedTool="resize",this.multiSelect={points:new Kd,shapes:new _d},this.clipboard=!1,this.closeAllDialogsOverride=!1}navigate(){this.nav.navigate()}get project(){return this._project||(this._project=new bn({},"ProjectEditor GET .project"),this.initializeHistory(this._project)),this._project}set project(e){e?(this._project=e,this.initializeHistory(e),this.selectedGlyphID="glyph-0x41"):this._project=!1}initializeHistory(e){this.history=new s1,this.history.queue=[],this.history.initialTimeStamp=new Date().getTime(),this.history.initialProject=e}get selectedItem(){return this.nav.page==="Characters"?this.selectedGlyph:this.nav.page==="Ligatures"?this.selectedLigature:this.nav.page==="Components"?this.selectedComponent:this.nav.page==="Kerning"?this.selectedKernGroup:!1}get selectedItemID(){return this.nav.page==="Characters"?this.selectedGlyphID:this.nav.page==="Components"?this.selectedComponentID:this.nav.page==="Ligatures"?this.selectedLigatureID:this.nav.page==="Kerning"?this.selectedKernGroupID:!1}get selectedGlyph(){const e=this.selectedGlyphID;return this.project.glyphs[e]||(this.project.addItemByType(new at,"Glyph",e),this.history.addWholeProjectChangePostState()),this.project.glyphs[e]}get selectedGlyphID(){if(!this._selectedGlyphID){const e=this.selectedCharacterRange.begin;if(e===32)return"glyph-0x41";this._selectedGlyphID=`glyph-${$e(e)}`}return this._selectedGlyphID}get selectedLigature(){const e=this.selectedLigatureID;return this.project.ligatures[e]}get selectedLigatureID(){return this._selectedLigatureID||(this._selectedLigatureID=Mr(this.project.ligatures)),this._selectedLigatureID}get selectedComponent(){return this.project.components[this.selectedComponentID]}get selectedComponentID(){return this._selectedComponentID||(this._selectedComponentID=Mr(this.project.components)),this._selectedComponentID}get selectedKernGroup(){return this.project.kerning[this.selectedKernGroupID]}get selectedKernGroupID(){return this._selectedKernGroupID||(this._selectedKernGroupID=Mr(this.project.kerning)),this._selectedKernGroupID}get selectedCharacterRange(){var r,n;const e=this.project.settings.project.characterRanges;if((!this._selectedCharacterRange||!((r=this._selectedCharacterRange)!=null&&r.isValid)||!((n=this._selectedCharacterRange)!=null&&n.enabled))&&e.length){let a=cl({begin:32,end:127},e);if(a&&a.enabled)this._selectedCharacterRange=a;else for(let o=0;o<e.length;o++)if(e[o].enabled){this._selectedCharacterRange=new cn(e[o]);break}}return this._selectedCharacterRange||(this._selectedCharacterRange=new cn({begin:32,end:127,name:"Basic Latin (default)"})),this._selectedCharacterRange}set selectedItem(e){this.nav.page==="Characters"?this.selectedGlyph=e:this.nav.page==="Ligatures"?this.selectedLigature=e:this.nav.page==="Components"?this.selectedComponent=e:this.nav.page==="Kerning"&&(this.selectedKernGroup=e)}set selectedItemID(e){e.startsWith("glyph-")?this.selectedGlyphID=e:e.startsWith("comp-")?this.selectedComponentID=e:e.startsWith("liga-")?this.selectedLigatureID=e:e.startsWith("kern-")&&(this.selectedKernGroupID=e)}set selectedGlyph(e={}){let r=this.selectedGlyphID;e=new at(e),e.parent=this.project,this.project.glyphs[r]=e}set selectedGlyphID(e){typeof e!="string"||!e.startsWith("glyph-")?this._selectedGlyphID=!1:this.project.glyphs[e]?this._selectedGlyphID=e:e.startsWith("glyph-")&&(this.project.glyphs[e]=new at({id:e,parent:this.project}),this._selectedGlyphID=e),this.publish("whichGlyphIsSelected",this.selectedGlyphID)}set selectedLigature(e={}){let r=this.selectedLigatureID;e=new at(e),e.parent=this.project,this.project.ligatures[r]=e}set selectedLigatureID(e){typeof e!="string"||!e.startsWith("liga-")?this._selectedLigatureID=!1:this.project.ligatures[e]?this._selectedLigatureID=e:(console.warn(`Ligature ID ${e} does not exist in the project.`),this._selectedLigatureID=Mr(this.project.ligatures)),this._selectedLigatureID&&this.publish("whichLigatureIsSelected",this.selectedLigatureID)}set selectedComponent(e={}){let r=this.selectedComponentID;e=new at(e),e.parent=this.project,this.project.components[r]=e}set selectedComponentID(e){typeof e!="string"||!e.startsWith("comp-")?this._selectedComponentID=!1:this.project.components[e]?this._selectedComponentID=e:(console.warn(`Component ID ${e} does not exist in the project.`),this._selectedComponentID=Mr(this.project.components)),this._selectedComponentID&&this.publish("whichComponentIsSelected",this.selectedComponentID)}set selectedKernGroup(e={}){let r=this.selectedKernGroupID;e=new qr(e),this.project.kerning[r]=e}set selectedKernGroupID(e){if(typeof e!="string"||!e.startsWith("kern-")){this._selectedKernGroupID=!1;return}this.project.kerning[e]?this._selectedKernGroupID=e:(console.warn(`Kern ID ${e} does not exist in the project.`),this._selectedKernGroupID=Mr(this.project.kerning)),this._selectedKernGroupID&&this.publish("whichKernGroupIsSelected",this.selectedKernGroupID)}set selectedCharacterRange(e){this._selectedCharacterRange=new cn(e)}deleteSelectedItemFromProject(e=!1){const r=e||this.nav.page;let n;const a=this.project.settings.app.unlinkComponentInstances;r==="Characters"?(n=this.selectedGlyphID,this.deleteItem(n,this.project.glyphs,a)):r==="Components"?(n=this.selectedComponentID,this.deleteItem(n,this.project.components,a)):r==="Ligatures"?(n=this.selectedLigatureID,this.deleteItem(n,this.project.ligatures,a)):r==="Kerning"&&(n=this.selectedKernGroupID,this.deleteItem(n,this.project.kerning)),this.selectFallbackItem(r)&&(this.nav.page="Characters",this.navigate())}deleteItem(e,r,n=!1){var s,x;const a=this.project.getItem(e);let o=`Deleted ${a.displayType} ${e} : ${a.name}`;(s=a==null?void 0:a.usedIn)!=null&&s.length?(o+=", and unlinked instances where it was used as a component.",this.history.addWholeProjectChangePreState(o)):this.history.addState(o,!0),ux(a,n),delete r[e],(x=a==null?void 0:a.usedIn)!=null&&x.length&&this.history.addWholeProjectChangePostState()}selectFallbackItem(e=!1){const r=e||this.nav.page;let n=!1;if(r==="Components"?(this.selectedComponentID=Mr(this.project.components),this.selectedComponentID||(n=!0)):r==="Ligatures"?(this.selectedLigatureID=Mr(this.project.ligatures),this.selectedLigatureID||(n=!0)):r==="Kerning"&&(this.selectedKernGroupID=Mr(this.project.kerning),this.selectedKernGroupID||(n=!0)),r==="Characters"||n){const a=this.selectedCharacterRange;if(a){let o=a.getMemberIDs();for(let s=0;s<o.length;s++){let x=`glyph-${o[s]}`;if(this.project.glyphs[x]){this.selectedGlyphID=x;break}}}}return n}selectPathsThatHaveSelectedPoints(){const r=this.multiSelect.points.members;if(r.length===0)return;const n=this.multiSelect.shapes,a=this.selectedItem.shapes;let o,s=!1;for(let x=0;x<r.length;x++){o=r[x].parent;for(let E=0;E<a.length;E++)a[E].objType!=="ComponentInstance"&&o===a[E]&&(n.add(a[E]),s=!0)}s&&n.publishChanges()}set selectedTool(e){this._selectedTool=e}get selectedTool(){return this._selectedTool}set view(e){let r=this.selectedItemID;this._views[r]||(this._views[r]=this.view),Number.isFinite(e.dx)&&(this._views[r].dx=e.dx),Number.isFinite(e.dy)&&(this._views[r].dy=e.dy),Number.isFinite(e.dz)&&(this._views[r].dz=e.dz),this._views[r].default&&delete this._views[r].default}get view(){let e=this.selectedItemID,r=!1;return this._views[e]?r=this._views[e]:this.nav.page==="Kerning"?r=ar(this.defaultKernView):r=ar(this.defaultView),r}viewExists(e){return!!this._views[e]}updateViewZoom(e,r={}){e=parseFloat(e);const n=this.view,a=r.x,o=r.y;this.view={dz:e*n.dz,dx:a?a-(a-n.dx)*e:n.dx,dy:o?o-(o-n.dy)*e:n.dy},this.publish("editCanvasView",this.view)}setViewZoom(e){const r=parseFloat(e)/100;this.view={dz:r},this.publish("editCanvasView",this.view)}makeAutoFitView(e=!1){const r=this.selectedItem.objType==="KernGroup",n=this.project.defaultAdvanceWidth/2;let a=n*2,o=0;const s=this.project.totalVertical+n*2;if(r)a+=m2(this.selectedItem),o=Ga(this.selectedItem.leftGroup),o-=this.selectedItem.value;else if(this.project.settings.app.contextCharacters.showCharacters){let K=this.selectedItem.contextCharacters,Y=this.selectedItem.char;if(K===Y)a+=this.selectedItem.advanceWidth;else{let V=K.indexOf(Y);V===-1&&(K+=Y,V=1);let _=K.substring(0,V),$=K.substring(V+1);a+=qn(_),a+=this.selectedItem.advanceWidth,a+=qn($),a+=jr(_.charAt(_.length),Y),a+=jr(Y,$.charAt(0)),o=qn(_)}}else a+=this.selectedItem.advanceWidth||this.project.defaultAdvanceWidth;const x=Math.min(e.height/s,e.width/a),E=n*x,T=s*x;let p=(e.height-T)/2;p+=E,p+=this.project.settings.font.ascent*x;let R=a*x;R===0&&(R=e.width/3);let N=(e.width-R)/2;return N+=o*x,N+=E,{dx:ae(N,3),dy:ae(p,3),dz:ae(x,3)}}autoFitIfViewIsDefault(){this.nav.isOnEditCanvasPage&&this.selectedItemID&&this.view.default&&this.autoFitView()}autoFitView(){const e=this.getEditCanvasWrapperBounds();return e?(this.view=this.makeAutoFitView(e),this.publish("editCanvasView",this.view)):(console.warn("autoFitView called before DOM was ready"),this.view=ar(this.defaultView)),this.view}getEditCanvasWrapperBounds(){let e=document.querySelector(".editor-page__edit-canvas-wrapper");return e?e.getBoundingClientRect():!1}get livePreviews(){var e,r,n,a;return(!Array.isArray(this._livePreviews)||this._livePreviews.length===0||!this._livePreviews)&&(this._livePreviews=[],(n=(r=(e=this.project)==null?void 0:e.settings)==null?void 0:r.app)!=null&&n.livePreviews.length&&(this._livePreviews=this.project.settings.app.livePreviews.map(o=>new kr(o))),(a=this._livePreviews[0])!=null&&a.text||(this._livePreviews[0]=new kr({text:"the five boxing wizards jump quickly"}))),this._livePreviews}set livePreviews(e){Array.isArray(e)?this._livePreviews=e.map(r=>new kr(r)):this._livePreviews=[]}get livePreviewPageOptions(){return this.livePreviews.length||(this.livePreviews[0]=new kr({text:"the five boxing wizards jump quickly"})),this.livePreviews[0]}set livePreviewPageOptions(e={}){this.livePreviews[0]=new kr(e)}async saveProjectFile(e=!1){let r=this.project.save();const n=new bn({},"saveProjectFile");r=Xd(r,n,"settings"),this.project.settings.app.saveLivePreviews?(r.settings.app.livePreviews=[],this.livePreviews.forEach(a=>{r.settings.app.livePreviews.push(a.save())})):delete r.settings.app.livePreviews,this.project.settings.app.formatSaveFile?r=Ra(r):r=JSON.stringify(r),await Go("gs2",r,e),ye("Saved Glyphr Studio Project File"),this.setProjectAsSaved()}setProjectAsSaved(){}setProjectAsUnsaved(){}}function Xd(t,e,r){return Object.keys(t[r]).forEach(n=>{t[r][n]===e[r][n]&&delete t[r][n]}),t}let ao={},io={},Ui={},Bn=0,Tn=0;async function jd(t,e=!1){const r=e?new t0:ni(),n=r.project;ao={},io={},Ui={},Bn=0,Tn=0;const a=t.glyphs.glyphs||{},o=t.substitution.getLigatures("liga")||[],s=t.position.getKerningTables()||[];let x=0;const E=[];function T(R){const N=[];return R.lookupType===2?R==null||R.subtables.forEach(g=>{if(g.posFormat===1){const K=(g==null?void 0:g.pairSets)||[],Y=p(g==null?void 0:g.coverage);K.forEach(V=>x+=V.length),N.push({pairSets:K,glyphList:Y})}else g.posFormat===2&&console.warn("In a GPOS table: Lookup Type 2, found a subtable with Pair Position: Format 2. Can only import Format 1.")}):console.warn(`Found a GPOS table: Lookup Type ${R.lookupType}. Only Lookup Type 2 is supported.`),N}function p(R){if(!R)return[];let N=[];const g=R.format;if(g===1)N=(R==null?void 0:R.glyphs)||[];else if(g===2){const K=(R==null?void 0:R.ranges)||[];for(let Y=0;Y<K.length;Y++){const V=K[Y];for(let _=V.start;_<=V.end;_++)N.push(_)}}return N}s.forEach(R=>E.push(T(R))),Tn=vt(a)+o.length+x;for(const R of Object.keys(a))await O0("character"),Qd(a[R],n);for(const R of o){await O0("ligature");let N=!1;try{N=t.glyphs.get(R.by)}catch{console.warn(`Ligature import error: could not get ${R.by} (${R.sub})`)}qd({glyph:N,gsub:R.sub},t)}for(let R=0;R<E.length;R++)for(let N=0;N<E[R].length;N++){const g=E[R][N].pairSets,K=E[R][N].glyphList;for(let Y=0;Y<g.length;Y++){const V=g[Y],_=K[Y],$=t.glyphs.glyphs[_];for(let Q=0;Q<V.length;Q++){const Te=V[Q],he=Te.secondGlyph,Ae=Te.value1.xAdvance*-1,ce=t.glyphs.glyphs[he];await O0("kern pair"),$d($,ce,Ae)}}}if(eu(t,n),n.glyphs=ao,n.ligatures=io,n.kerning=Ui,e)return r.project;{s0(r),r.nav.page="Overview";const R=ht();R.selectedProjectEditor=r,R.selectedProjectEditor.navigate()}}async function O0(t){await Bo(`
			Importing ${t}:
			<span class="progress-indicator__counter">${Bn}</span>
			 of
			<span class="progress-indicator__counter">${Tn}</span>
		`)}function Qd(t,e){if(isNaN(t.unicode)){Tn--;return}const r=$e(t.unicode||0),n=Rl(t);if(!n){console.warn("Something went wrong with importing this glyph."),Tn--;return}const a=`glyph-${r}`;n.id=a,ao[a]=n,W1(r)&&r!=="0x0"&&(e.settings.app.showNonCharPoints=!0),e.incrementRangeCountFor(r),Bn++}function Rl(t){const e=t.advanceWidth;let r=t.path.toSVG(),n;return r?n=Fa(`<svg>${r}</svg>`,!1):n=new at,n&&(n.advanceWidth=e),n}function qd(t,e){if(t!=null&&t.glyph){const r=Rl(t.glyph);if(!r){console.warn("Something went wrong with importing this glyph."),Tn--;return}let n=[];if(t.gsub.forEach(o=>{var s;(s=e.glyphs.get(o))!=null&&s.unicode&&n.push(e.glyphs.get(o).unicode)}),t.gsub.length!==n.length){Tn--;return}r.gsub=n,r.objType="Ligature";const a=Qa(String.fromCodePoint(...n));r.id=a,io[a]=r,Bn++}else Tn--}function $d(t,e,r){if(!t||!e){console.warn(`Something went wrong with importing this kern pair:
${t==null?void 0:t.name} | ${e==null?void 0:e.name} = ${r} `),Bn--;return}if(!t.unicode||!e.unicode){console.warn(`Only kern values containing characters with Unicode Code Points can be imported (can't kern ligatures) :
${t==null?void 0:t.name} | ${e==null?void 0:e.name} = ${r} `),Bn--;return}const n=new qr({leftGroup:[$e(t.unicode)],rightGroup:[$e(e.unicode)],value:r}),a=Yo(Ui);n.id=a,Ui[a]=n,Bn++}function eu(t,e){const r=e.settings.font,n=t.tables.os2,a=Ft(t.names.fontFamily)||"My Font";e.settings.project.name=a,r.name=a,r.upm=1*t.unitsPerEm||r.upm,r.ascent=1*Ft(n.sTypoAscender)||r.ascent,r.descent=-1*Math.abs(Ft(n.sTypoDescender))||r.descent,r.capHeight=1*Ft(n.sCapHeight)||r.capHeight,r.xHeight=1*Ft(n.sxHeight)||r.xHeight,r.overshoot=r.upm>2e3?30:20,r.lineGap=1*Ft(n.sTypoLineGap)||r.lineGap,r.family=a.substring(0,31),r.panose=Ft(n.panose)||"0 0 0 0 0 0 0 0 0 0",r.version=Ft(t.tables.head.fontRevision)||Ft(t.version)||Ft("Version 0.1"),r.style=Ft(t.tables.name.fontSubfamily)||"Regular",r.copyright=Ft(t.tables.name.copyright)||"",r.trademark=Ft(t.tables.name.trademark)||"",r.designer=Ft(t.tables.name.designer)||"",r.designerURL=Ft(t.tables.name.designerURL)||"",r.manufacturer=Ft(t.tables.name.manufacturer)||"",r.manufacturerURL=Ft(t.tables.name.manufacturerURL)||"",r.license=Ft(t.tables.name.license)||"",r.licenseURL=Ft(t.tables.name.licenseURL)||"",r.description=Ft(t.tables.name.description)||""}function Ft(t){try{let e=!1;return Array.isArray(t)?e=t.join(" "):typeof t=="object"&&typeof t.en=="string"?e=t.en:(typeof t=="string"||typeof t=="number")&&(e=t),e}catch{return!1}}const oo=`{\r
  "settings": {\r
    "project": {\r
      "name": "Oblegg",\r
      "latestVersion": "2.1.2",\r
      "initialVersion": "2.1.2",\r
      "id": "g2_OBLEGG2",\r
      "characterRanges": [\r
        {\r
          "name": "Basic Latin",\r
          "begin": "0x20",\r
          "end": "0x7F"\r
        },\r
        {\r
          "name": "General Punctuation",\r
          "begin": "0x2000",\r
          "end": "0x206F"\r
        }\r
      ]\r
    },\r
    "app": {\r
      "savePreferences": false,\r
      "stopPageNavigation": true,\r
      "autoSave": true,\r
      "showNonCharPoints": false,\r
      "itemChooserPageSize": 256,\r
      "formatSaveFile": true,\r
      "moveShapesOnSVGDragDrop": true,\r
      "guides": {\r
        "drawGuidesOnTop": false,\r
        "systemShowGuides": true,\r
        "systemShowLabels": false,\r
        "systemTransparency": 70,\r
        "systemGuides": [\r
          "baseline",\r
          "leftSide",\r
          "rightSide"\r
        ],\r
        "customShowGuides": true,\r
        "customShowLabels": false,\r
        "customTransparency": 70,\r
        "custom": []\r
      },\r
      "contextCharacters": {\r
        "showCharacters": true,\r
        "characterTransparency": 20,\r
        "showGuides": true,\r
        "guidesTransparency": 70\r
      },\r
      "saveLivePreviews": true,\r
      "livePreviews": [\r
        {\r
          "text": "the five boxing wizards jump quickly"\r
        },\r
        {\r
          "fontSize": 128,\r
          "text": "pack my box with five dozen liquor waffle coffins."\r
        },\r
        {\r
          "fontSize": 28,\r
          "text": "{{scowl_10_short}}"\r
        }\r
      ],\r
      "previewText": false\r
    },\r
    "font": {\r
      "family": "Oblegg",\r
      "style": "Regular",\r
      "version": "1.0",\r
      "description": "Test font for Glyphr Studio v2",\r
      "panose": "0 0 0 0 0 0 0 0 0 0",\r
      "upm": 2048,\r
      "ascent": 1490,\r
      "descent": -430,\r
      "capHeight": 1490,\r
      "xHeight": 1020,\r
      "overshoot": 20,\r
      "lineGap": 250,\r
      "italicAngle": 0,\r
      "designer": "Matt LaGrandeur",\r
      "designerURL": "mattlag.com",\r
      "manufacturer": "Matt LaGrandeur",\r
      "manufacturerURL": "mattlag.com",\r
      "license": "OFL",\r
      "licenseURL": "",\r
      "copyright": "2023",\r
      "trademark": "",\r
      "variant": "normal",\r
      "weight": 400,\r
      "stretch": "normal",\r
      "stemv": 0,\r
      "stemh": 0,\r
      "slope": 0,\r
      "underlinePosition": -50,\r
      "underlineThickness": 10,\r
      "strikethroughPosition": 300,\r
      "strikethroughThickness": 10,\r
      "overlinePosition": 750,\r
      "overlineThickness": 10\r
    }\r
  },\r
  "glyphs": {\r
    "glyph-0x41": {\r
      "id": "glyph-0x41",\r
      "advanceWidth": 1252,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 15,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1207,"y": 174}},\r
              "h1": {"coord": {"x": 1210,"y": 174}},\r
              "h2": {"coord": {"x": 1257,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1113,"y": 174}},\r
              "h1": {"coord": {"x": 1063,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1163,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 1316}},\r
              "h1": {"coord": {"x": 705,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1316}},\r
              "h1": {"coord": {"x": 750,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 803,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 805,"y": 1321}},\r
              "h1": {"coord": {"x": 805,"y": 1318}},\r
              "h2": {"coord": {"x": 855,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 805,"y": 1485}},\r
              "h1": {"coord": {"x": 755,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1490}},\r
              "h1": {"coord": {"x": 803,"y": 1490}},\r
              "h2": {"coord": {"x": 850,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 439,"y": 1490}},\r
              "h1": {"coord": {"x": 389,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 436,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 434,"y": 1485}},\r
              "h1": {"coord": {"x": 434,"y": 1488}},\r
              "h2": {"coord": {"x": 484,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 434,"y": 1321}},\r
              "h1": {"coord": {"x": 384,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 434,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 439,"y": 1316}},\r
              "h1": {"coord": {"x": 436,"y": 1316}},\r
              "h2": {"coord": {"x": 489,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 1316}},\r
              "h1": {"coord": {"x": 434,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 174}},\r
              "h1": {"coord": {"x": 76,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 176,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 289,"y": 174}},\r
              "h1": {"coord": {"x": 239,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 339,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 378,"y": 456}},\r
              "h1": {"coord": {"x": 328,"y": 456}, "use": false},\r
              "h2": {"coord": {"x": 428,"y": 456}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 851,"y": 456}},\r
              "h1": {"coord": {"x": 801,"y": 456}, "use": false},\r
              "h2": {"coord": {"x": 901,"y": 456}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 940,"y": 174}},\r
              "h1": {"coord": {"x": 890,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 990,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 174}},\r
              "h1": {"coord": {"x": 822,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 867,"y": 169}},\r
              "h1": {"coord": {"x": 867,"y": 172}},\r
              "h2": {"coord": {"x": 917,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 867,"y": 5}},\r
              "h1": {"coord": {"x": 817,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 867,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 0}},\r
              "h1": {"coord": {"x": 869,"y": 0}},\r
              "h2": {"coord": {"x": 922,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1207,"y": 0}},\r
              "h1": {"coord": {"x": 1157,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1210,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1212,"y": 5}},\r
              "h1": {"coord": {"x": 1212,"y": 2}},\r
              "h2": {"coord": {"x": 1262,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1212,"y": 169}},\r
              "h1": {"coord": {"x": 1162,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1212,"y": 172}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -4,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 432,"y": 630}},\r
              "h1": {"coord": {"x": 382,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 482,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 614,"y": 1211}},\r
              "h1": {"coord": {"x": 564,"y": 1211}, "use": false},\r
              "h2": {"coord": {"x": 664,"y": 1211}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 797,"y": 630}},\r
              "h1": {"coord": {"x": 747,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 630}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x42": {\r
      "id": "glyph-0x42",\r
      "advanceWidth": 1052,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 783}},\r
              "h1": {"coord": {"x": 978,"y": 686}},\r
              "h2": {"coord": {"x": 906,"y": 862}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 940,"y": 1058}},\r
              "h1": {"coord": {"x": 940,"y": 969}},\r
              "h2": {"coord": {"x": 940,"y": 1180}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 1490}},\r
              "h1": {"coord": {"x": 907,"y": 1483}},\r
              "h2": {"coord": {"x": 628,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 1490}},\r
              "h1": {"coord": {"x": 528,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 628,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1323}},\r
              "h1": {"coord": {"x": -10,"y": 1323}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1318}},\r
              "h1": {"coord": {"x": 42,"y": 1318}},\r
              "h2": {"coord": {"x": 95,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 1318}},\r
              "h1": {"coord": {"x": 100,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 172}},\r
              "h1": {"coord": {"x": 100,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 172}},\r
              "h1": {"coord": {"x": -5,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 167}},\r
              "h1": {"coord": {"x": 40,"y": 170}},\r
              "h2": {"coord": {"x": 90,"y": 167}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 628,"y": 0}},\r
              "h1": {"coord": {"x": 578,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 938,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1012,"y": 396}},\r
              "h1": {"coord": {"x": 1012,"y": 230}},\r
              "h2": {"coord": {"x": 1012,"y": 489}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 565,"y": 1318}},\r
              "h1": {"coord": {"x": 515,"y": 1318}},\r
              "h2": {"coord": {"x": 732,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 796,"y": 1058}},\r
              "h1": {"coord": {"x": 796,"y": 1225}},\r
              "h2": {"coord": {"x": 796,"y": 938}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 566,"y": 840}},\r
              "h1": {"coord": {"x": 708,"y": 840}},\r
              "h2": {"coord": {"x": 616,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 840}},\r
              "h1": {"coord": {"x": 272,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 1318}},\r
              "h1": {"coord": {"x": 272,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 1318}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 3",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 628,"y": 172}},\r
              "h1": {"coord": {"x": 774,"y": 172}},\r
              "h2": {"coord": {"x": 578,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 172}},\r
              "h1": {"coord": {"x": 272,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 665}},\r
              "h1": {"coord": {"x": 272,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 628,"y": 665}},\r
              "h1": {"coord": {"x": 578,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 799,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 864,"y": 396}},\r
              "h1": {"coord": {"x": 864,"y": 568}},\r
              "h2": {"coord": {"x": 864,"y": 273}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x43": {\r
      "id": "glyph-0x43",\r
      "advanceWidth": 1062,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 852,"y": 1256}},\r
              "h1": {"coord": {"x": 849,"y": 1256}},\r
              "h2": {"coord": {"x": 902,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1017,"y": 1256}},\r
              "h1": {"coord": {"x": 967,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 1020,"y": 1256}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 1261}},\r
              "h1": {"coord": {"x": 1022,"y": 1258}},\r
              "h2": {"coord": {"x": 1072,"y": 1261}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 1407}},\r
              "h1": {"coord": {"x": 972,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 1022,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 939,"y": 1490}},\r
              "h1": {"coord": {"x": 985,"y": 1490}},\r
              "h2": {"coord": {"x": 989,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 1490}},\r
              "h1": {"coord": {"x": 654,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 490,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 196,"y": 1230}},\r
              "h1": {"coord": {"x": 314,"y": 1400}},\r
              "h2": {"coord": {"x": 144,"y": 1155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 78,"y": 965}},\r
              "h1": {"coord": {"x": 104,"y": 1066}},\r
              "h2": {"coord": {"x": 53,"y": 870}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 657}},\r
              "h1": {"coord": {"x": 40,"y": 766}},\r
              "h2": {"coord": {"x": 40,"y": 431}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 207,"y": 159}},\r
              "h1": {"coord": {"x": 95,"y": 268}},\r
              "h2": {"coord": {"x": 317,"y": 52}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 0}},\r
              "h1": {"coord": {"x": 479,"y": 0}},\r
              "h2": {"coord": {"x": 754,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 939,"y": 0}},\r
              "h1": {"coord": {"x": 889,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 985,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 83}},\r
              "h1": {"coord": {"x": 1022,"y": 37}},\r
              "h2": {"coord": {"x": 1072,"y": 83}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 224}},\r
              "h1": {"coord": {"x": 972,"y": 224}, "use": false},\r
              "h2": {"coord": {"x": 1022,"y": 227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1017,"y": 229}},\r
              "h1": {"coord": {"x": 1020,"y": 229}},\r
              "h2": {"coord": {"x": 1067,"y": 229}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 852,"y": 229}},\r
              "h1": {"coord": {"x": 802,"y": 229}, "use": false},\r
              "h2": {"coord": {"x": 849,"y": 229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 224}},\r
              "h1": {"coord": {"x": 847,"y": 227}},\r
              "h2": {"coord": {"x": 897,"y": 224}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 172}},\r
              "h1": {"coord": {"x": 797,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 897,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 172}},\r
              "h1": {"coord": {"x": 654,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 350,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 657}},\r
              "h1": {"coord": {"x": 212,"y": 308}},\r
              "h2": {"coord": {"x": 212,"y": 847}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 337,"y": 1132}},\r
              "h1": {"coord": {"x": 256,"y": 1016}},\r
              "h2": {"coord": {"x": 423,"y": 1255}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 1318}},\r
              "h1": {"coord": {"x": 547,"y": 1318}},\r
              "h2": {"coord": {"x": 754,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 1318}},\r
              "h1": {"coord": {"x": 797,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 897,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 1261}},\r
              "h1": {"coord": {"x": 797,"y": 1261}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1258}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x44": {\r
      "id": "glyph-0x44",\r
      "advanceWidth": 1167,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 0}},\r
              "h1": {"coord": {"x": 413,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 688,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 960,"y": 159}},\r
              "h1": {"coord": {"x": 850,"y": 52}},\r
              "h2": {"coord": {"x": 1072,"y": 268}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1127,"y": 657}},\r
              "h1": {"coord": {"x": 1127,"y": 431}},\r
              "h2": {"coord": {"x": 1127,"y": 766}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1090,"y": 965}},\r
              "h1": {"coord": {"x": 1115,"y": 870}},\r
              "h2": {"coord": {"x": 1064,"y": 1066}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 971,"y": 1230}},\r
              "h1": {"coord": {"x": 1023,"y": 1155}},\r
              "h2": {"coord": {"x": 853,"y": 1400}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 1490}},\r
              "h1": {"coord": {"x": 677,"y": 1490}},\r
              "h2": {"coord": {"x": 513,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1323}},\r
              "h1": {"coord": {"x": -10,"y": 1323}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1318}},\r
              "h1": {"coord": {"x": 42,"y": 1318}},\r
              "h2": {"coord": {"x": 95,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 148,"y": 1318}},\r
              "h1": {"coord": {"x": 98,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 198,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 148,"y": 172}},\r
              "h1": {"coord": {"x": 98,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 198,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 172}},\r
              "h1": {"coord": {"x": -5,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 167}},\r
              "h1": {"coord": {"x": 40,"y": 170}},\r
              "h2": {"coord": {"x": 90,"y": 167}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 1318}},\r
              "h1": {"coord": {"x": 270,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 1318}},\r
              "h1": {"coord": {"x": 413,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 620,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 830,"y": 1132}},\r
              "h1": {"coord": {"x": 744,"y": 1255}},\r
              "h2": {"coord": {"x": 911,"y": 1016}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 955,"y": 657}},\r
              "h1": {"coord": {"x": 955,"y": 847}},\r
              "h2": {"coord": {"x": 955,"y": 308}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 172}},\r
              "h1": {"coord": {"x": 817,"y": 172}},\r
              "h2": {"coord": {"x": 513,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 172}},\r
              "h1": {"coord": {"x": 270,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 1318}},\r
              "h1": {"coord": {"x": 270,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x45": {\r
      "id": "glyph-0x45",\r
      "advanceWidth": 1001,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1232}},\r
              "h1": {"coord": {"x": 737,"y": 1232}, "use": false},\r
              "h2": {"coord": {"x": 787,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 792,"y": 1227}},\r
              "h1": {"coord": {"x": 789,"y": 1227}},\r
              "h2": {"coord": {"x": 842,"y": 1227}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": 1227}},\r
              "h1": {"coord": {"x": 906,"y": 1227}, "use": false},\r
              "h2": {"coord": {"x": 959,"y": 1227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 1232}},\r
              "h1": {"coord": {"x": 961,"y": 1229}},\r
              "h2": {"coord": {"x": 1011,"y": 1232}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 1490}},\r
              "h1": {"coord": {"x": 911,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1011,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 101,"y": 1316}},\r
              "h1": {"coord": {"x": 51,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 151,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 101,"y": 174}},\r
              "h1": {"coord": {"x": 51,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 151,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 0}},\r
              "h1": {"coord": {"x": 911,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1011,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 258}},\r
              "h1": {"coord": {"x": 911,"y": 258}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": 263}},\r
              "h1": {"coord": {"x": 959,"y": 263}},\r
              "h2": {"coord": {"x": 1006,"y": 263}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 792,"y": 263}},\r
              "h1": {"coord": {"x": 742,"y": 263}, "use": false},\r
              "h2": {"coord": {"x": 789,"y": 263}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 258}},\r
              "h1": {"coord": {"x": 787,"y": 261}},\r
              "h2": {"coord": {"x": 837,"y": 258}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 174}},\r
              "h1": {"coord": {"x": 737,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 837,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 174}},\r
              "h1": {"coord": {"x": 224,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 665}},\r
              "h1": {"coord": {"x": 224,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 583,"y": 665}},\r
              "h1": {"coord": {"x": 533,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 586,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 588,"y": 670}},\r
              "h1": {"coord": {"x": 588,"y": 667}},\r
              "h2": {"coord": {"x": 638,"y": 670}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 588,"y": 835}},\r
              "h1": {"coord": {"x": 538,"y": 835}, "use": false},\r
              "h2": {"coord": {"x": 588,"y": 838}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 583,"y": 840}},\r
              "h1": {"coord": {"x": 586,"y": 840}},\r
              "h2": {"coord": {"x": 633,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 840}},\r
              "h1": {"coord": {"x": 224,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 1316}},\r
              "h1": {"coord": {"x": 224,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1316}},\r
              "h1": {"coord": {"x": 737,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 837,"y": 1316}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x46": {\r
      "id": "glyph-0x46",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 174}},\r
              "h1": {"coord": {"x": 226,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 665}},\r
              "h1": {"coord": {"x": 226,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 665}},\r
              "h1": {"coord": {"x": 550,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 603,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 605,"y": 670}},\r
              "h1": {"coord": {"x": 605,"y": 667}},\r
              "h2": {"coord": {"x": 655,"y": 670}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 605,"y": 835}},\r
              "h1": {"coord": {"x": 555,"y": 835}, "use": false},\r
              "h2": {"coord": {"x": 605,"y": 838}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 840}},\r
              "h1": {"coord": {"x": 603,"y": 840}},\r
              "h2": {"coord": {"x": 650,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 840}},\r
              "h1": {"coord": {"x": 226,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 1316}},\r
              "h1": {"coord": {"x": 226,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 1316}},\r
              "h1": {"coord": {"x": 739,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 839,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 1232}},\r
              "h1": {"coord": {"x": 739,"y": 1232}, "use": false},\r
              "h2": {"coord": {"x": 789,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 1227}},\r
              "h1": {"coord": {"x": 791,"y": 1227}},\r
              "h2": {"coord": {"x": 844,"y": 1227}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 1227}},\r
              "h1": {"coord": {"x": 908,"y": 1227}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 1227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 1232}},\r
              "h1": {"coord": {"x": 963,"y": 1229}},\r
              "h2": {"coord": {"x": 1013,"y": 1232}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 1490}},\r
              "h1": {"coord": {"x": 913,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1013,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 1316}},\r
              "h1": {"coord": {"x": 53,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 174}},\r
              "h1": {"coord": {"x": 53,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 174}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x47": {\r
      "id": "glyph-0x47",\r
      "advanceWidth": 1299,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 830,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1084,"y": 128}},\r
              "h1": {"coord": {"x": 978,"y": 23}},\r
              "h2": {"coord": {"x": 1134,"y": 128}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1084,"y": 4}},\r
              "h1": {"coord": {"x": 1034,"y": 4}, "use": false},\r
              "h2": {"coord": {"x": 1084,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1089,"y": -1}},\r
              "h1": {"coord": {"x": 1086,"y": -1}},\r
              "h2": {"coord": {"x": 1139,"y": -1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1254,"y": -1}},\r
              "h1": {"coord": {"x": 1204,"y": -1}, "use": false},\r
              "h2": {"coord": {"x": 1257,"y": -1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1259,"y": 4}},\r
              "h1": {"coord": {"x": 1259,"y": 1}},\r
              "h2": {"coord": {"x": 1309,"y": 4}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1259,"y": 625}},\r
              "h1": {"coord": {"x": 1209,"y": 625}, "use": false},\r
              "h2": {"coord": {"x": 1259,"y": 628}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1254,"y": 630}},\r
              "h1": {"coord": {"x": 1257,"y": 630}},\r
              "h2": {"coord": {"x": 1304,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 630}},\r
              "h1": {"coord": {"x": 664,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 711,"y": 630}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 709,"y": 625}},\r
              "h1": {"coord": {"x": 709,"y": 628}},\r
              "h2": {"coord": {"x": 759,"y": 625}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 709,"y": 460}},\r
              "h1": {"coord": {"x": 659,"y": 460}, "use": false},\r
              "h2": {"coord": {"x": 709,"y": 457}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 455}},\r
              "h1": {"coord": {"x": 711,"y": 455}},\r
              "h2": {"coord": {"x": 764,"y": 455}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 455}},\r
              "h1": {"coord": {"x": 1008,"y": 455}, "use": false},\r
              "h2": {"coord": {"x": 1017,"y": 291}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 911,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 859,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1029,"y": 1054}},\r
              "h1": {"coord": {"x": 972,"y": 1215}},\r
              "h2": {"coord": {"x": 1079,"y": 1054}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1202,"y": 1095}},\r
              "h1": {"coord": {"x": 1152,"y": 1095}, "use": false},\r
              "h2": {"coord": {"x": 1130,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 975,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x48": {\r
      "id": "glyph-0x48",\r
      "advanceWidth": 1221,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 19,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 665}},\r
              "h1": {"coord": {"x": 242,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 665}},\r
              "h1": {"coord": {"x": 879,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 174}},\r
              "h1": {"coord": {"x": 879,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 174}},\r
              "h1": {"coord": {"x": 800,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 169}},\r
              "h1": {"coord": {"x": 845,"y": 172}},\r
              "h2": {"coord": {"x": 895,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 5}},\r
              "h1": {"coord": {"x": 795,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 0}},\r
              "h1": {"coord": {"x": 847,"y": 0}},\r
              "h2": {"coord": {"x": 900,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 0}},\r
              "h1": {"coord": {"x": 1126,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 5}},\r
              "h1": {"coord": {"x": 1181,"y": 2}},\r
              "h2": {"coord": {"x": 1231,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 169}},\r
              "h1": {"coord": {"x": 1131,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 174}},\r
              "h1": {"coord": {"x": 1179,"y": 174}},\r
              "h2": {"coord": {"x": 1226,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 174}},\r
              "h1": {"coord": {"x": 1052,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 1316}},\r
              "h1": {"coord": {"x": 1052,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1316}},\r
              "h1": {"coord": {"x": 1126,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1321}},\r
              "h1": {"coord": {"x": 1181,"y": 1318}},\r
              "h2": {"coord": {"x": 1231,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1485}},\r
              "h1": {"coord": {"x": 1131,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1490}},\r
              "h1": {"coord": {"x": 1179,"y": 1490}},\r
              "h2": {"coord": {"x": 1226,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1490}},\r
              "h1": {"coord": {"x": 800,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1485}},\r
              "h1": {"coord": {"x": 845,"y": 1488}},\r
              "h2": {"coord": {"x": 895,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1321}},\r
              "h1": {"coord": {"x": 795,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1316}},\r
              "h1": {"coord": {"x": 847,"y": 1316}},\r
              "h2": {"coord": {"x": 900,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 1316}},\r
              "h1": {"coord": {"x": 879,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 840}},\r
              "h1": {"coord": {"x": 879,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 840}},\r
              "h1": {"coord": {"x": 242,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1316}},\r
              "h1": {"coord": {"x": 242,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1316}},\r
              "h1": {"coord": {"x": 69,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x49": {\r
      "id": "glyph-0x49",\r
      "advanceWidth": 1096,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 0}},\r
              "h1": {"coord": {"x": 1006,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 231}},\r
              "h1": {"coord": {"x": 1006,"y": 231}, "use": false},\r
              "h2": {"coord": {"x": 1056,"y": 234}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1051,"y": 236}},\r
              "h1": {"coord": {"x": 1054,"y": 236}},\r
              "h2": {"coord": {"x": 1101,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 236}},\r
              "h1": {"coord": {"x": 837,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 884,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 231}},\r
              "h1": {"coord": {"x": 882,"y": 234}},\r
              "h2": {"coord": {"x": 932,"y": 231}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 174}},\r
              "h1": {"coord": {"x": 832,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 932,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 629,"y": 174}},\r
              "h1": {"coord": {"x": 579,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 679,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 629,"y": 1316}},\r
              "h1": {"coord": {"x": 579,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 679,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 1316}},\r
              "h1": {"coord": {"x": 832,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 932,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 1256}},\r
              "h1": {"coord": {"x": 832,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 1253}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1251}},\r
              "h1": {"coord": {"x": 884,"y": 1251}},\r
              "h2": {"coord": {"x": 937,"y": 1251}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1051,"y": 1251}},\r
              "h1": {"coord": {"x": 1001,"y": 1251}, "use": false},\r
              "h2": {"coord": {"x": 1054,"y": 1251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 1256}},\r
              "h1": {"coord": {"x": 1056,"y": 1253}},\r
              "h2": {"coord": {"x": 1106,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 1490}},\r
              "h1": {"coord": {"x": 1006,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1490}},\r
              "h1": {"coord": {"x": -10,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1256}},\r
              "h1": {"coord": {"x": -10,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1253}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1251}},\r
              "h1": {"coord": {"x": 42,"y": 1251}},\r
              "h2": {"coord": {"x": 95,"y": 1251}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 1251}},\r
              "h1": {"coord": {"x": 159,"y": 1251}, "use": false},\r
              "h2": {"coord": {"x": 212,"y": 1251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1256}},\r
              "h1": {"coord": {"x": 214,"y": 1253}},\r
              "h2": {"coord": {"x": 264,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1316}},\r
              "h1": {"coord": {"x": 164,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 455,"y": 1316}},\r
              "h1": {"coord": {"x": 405,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 455,"y": 174}},\r
              "h1": {"coord": {"x": 405,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 174}},\r
              "h1": {"coord": {"x": 164,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 231}},\r
              "h1": {"coord": {"x": 164,"y": 231}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 234}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 236}},\r
              "h1": {"coord": {"x": 212,"y": 236}},\r
              "h2": {"coord": {"x": 259,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 236}},\r
              "h1": {"coord": {"x": -5,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 231}},\r
              "h1": {"coord": {"x": 40,"y": 234}},\r
              "h2": {"coord": {"x": 90,"y": 231}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4A": {\r
      "id": "glyph-0x4A",\r
      "advanceWidth": 1009,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 1490}},\r
              "h1": {"coord": {"x": 967,"y": 1490}},\r
              "h2": {"coord": {"x": 1014,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1490}},\r
              "h1": {"coord": {"x": 166,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 213,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 211,"y": 1485}},\r
              "h1": {"coord": {"x": 211,"y": 1488}},\r
              "h2": {"coord": {"x": 261,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 211,"y": 1321}},\r
              "h1": {"coord": {"x": 161,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 211,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1316}},\r
              "h1": {"coord": {"x": 213,"y": 1316}},\r
              "h2": {"coord": {"x": 266,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 1316}},\r
              "h1": {"coord": {"x": 697,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 797,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 710}},\r
              "h1": {"coord": {"x": 697,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 797,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 710}},\r
              "h1": {"coord": {"x": 697,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 747,"y": 701}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 748,"y": 684}},\r
              "h1": {"coord": {"x": 748,"y": 693}},\r
              "h2": {"coord": {"x": 748,"y": 438}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": 154}},\r
              "h1": {"coord": {"x": 688,"y": 156}},\r
              "h2": {"coord": {"x": 364,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": 154}},\r
              "h1": {"coord": {"x": 264,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 364,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 154}},\r
              "h1": {"coord": {"x": 164,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 233}},\r
              "h1": {"coord": {"x": 164,"y": 233}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 238}},\r
              "h1": {"coord": {"x": 212,"y": 238}},\r
              "h2": {"coord": {"x": 259,"y": 238}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 238}},\r
              "h1": {"coord": {"x": -5,"y": 238}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 238}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 233}},\r
              "h1": {"coord": {"x": 40,"y": 236}},\r
              "h2": {"coord": {"x": 90,"y": 233}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 63}},\r
              "h1": {"coord": {"x": -10,"y": 63}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 123,"y": -20}},\r
              "h1": {"coord": {"x": 77,"y": -20}},\r
              "h2": {"coord": {"x": 173,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": -20}},\r
              "h1": {"coord": {"x": 264,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 364,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": -20}},\r
              "h1": {"coord": {"x": 264,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 681,"y": -19}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 684}},\r
              "h1": {"coord": {"x": 920,"y": 166}},\r
              "h2": {"coord": {"x": 920,"y": 693}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 710}},\r
              "h1": {"coord": {"x": 920,"y": 701}},\r
              "h2": {"coord": {"x": 970,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 710}},\r
              "h1": {"coord": {"x": 870,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 970,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 1316}},\r
              "h1": {"coord": {"x": 870,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 970,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 1316}},\r
              "h1": {"coord": {"x": 914,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 967,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1321}},\r
              "h1": {"coord": {"x": 969,"y": 1318}},\r
              "h2": {"coord": {"x": 1019,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1485}},\r
              "h1": {"coord": {"x": 919,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4B": {\r
      "id": "glyph-0x4B",\r
      "advanceWidth": 1100,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 18,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 665}},\r
              "h1": {"coord": {"x": 242,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 361,"y": 665}},\r
              "h1": {"coord": {"x": 311,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 411,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 778,"y": 174}},\r
              "h1": {"coord": {"x": 728,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 828,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 174}},\r
              "h1": {"coord": {"x": 679,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 724,"y": 169}},\r
              "h1": {"coord": {"x": 724,"y": 172}},\r
              "h2": {"coord": {"x": 774,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 724,"y": 5}},\r
              "h1": {"coord": {"x": 674,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 724,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 0}},\r
              "h1": {"coord": {"x": 726,"y": 0}},\r
              "h2": {"coord": {"x": 779,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1055,"y": 0}},\r
              "h1": {"coord": {"x": 1005,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1058,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1060,"y": 5}},\r
              "h1": {"coord": {"x": 1060,"y": 2}},\r
              "h2": {"coord": {"x": 1110,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1060,"y": 169}},\r
              "h1": {"coord": {"x": 1010,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1060,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1055,"y": 174}},\r
              "h1": {"coord": {"x": 1058,"y": 174}},\r
              "h2": {"coord": {"x": 1105,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1004,"y": 174}},\r
              "h1": {"coord": {"x": 954,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1054,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 475,"y": 796}},\r
              "h1": {"coord": {"x": 425,"y": 796}, "use": false},\r
              "h2": {"coord": {"x": 525,"y": 796}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 1316}},\r
              "h1": {"coord": {"x": 841,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 941,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 1316}},\r
              "h1": {"coord": {"x": 935,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 988,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 990,"y": 1321}},\r
              "h1": {"coord": {"x": 990,"y": 1318}},\r
              "h2": {"coord": {"x": 1040,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 990,"y": 1485}},\r
              "h1": {"coord": {"x": 940,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 990,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 1490}},\r
              "h1": {"coord": {"x": 988,"y": 1490}},\r
              "h2": {"coord": {"x": 1035,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 659,"y": 1490}},\r
              "h1": {"coord": {"x": 609,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 656,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 1485}},\r
              "h1": {"coord": {"x": 654,"y": 1488}},\r
              "h2": {"coord": {"x": 704,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 1321}},\r
              "h1": {"coord": {"x": 604,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 654,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 659,"y": 1316}},\r
              "h1": {"coord": {"x": 656,"y": 1316}},\r
              "h2": {"coord": {"x": 709,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 1316}},\r
              "h1": {"coord": {"x": 664,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 764,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 840}},\r
              "h1": {"coord": {"x": 270,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 840}},\r
              "h1": {"coord": {"x": 242,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1316}},\r
              "h1": {"coord": {"x": 242,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1316}},\r
              "h1": {"coord": {"x": 69,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4C": {\r
      "id": "glyph-0x4C",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 256}},\r
              "h1": {"coord": {"x": 913,"y": 256}, "use": false},\r
              "h2": {"coord": {"x": 963,"y": 259}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 261}},\r
              "h1": {"coord": {"x": 961,"y": 261}},\r
              "h2": {"coord": {"x": 1008,"y": 261}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 261}},\r
              "h1": {"coord": {"x": 744,"y": 261}, "use": false},\r
              "h2": {"coord": {"x": 791,"y": 261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 256}},\r
              "h1": {"coord": {"x": 789,"y": 259}},\r
              "h2": {"coord": {"x": 839,"y": 256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 174}},\r
              "h1": {"coord": {"x": 739,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 839,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 174}},\r
              "h1": {"coord": {"x": 226,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 1316}},\r
              "h1": {"coord": {"x": 226,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 1316}},\r
              "h1": {"coord": {"x": 53,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 174}},\r
              "h1": {"coord": {"x": 53,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 0}},\r
              "h1": {"coord": {"x": 913,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1013,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4F": {\r
      "id": "glyph-0x4F",\r
      "advanceWidth": 1300,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 3,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 1187,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 1019,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1260,"y": 684}},\r
              "h1": {"coord": {"x": 1260,"y": 164}},\r
              "h2": {"coord": {"x": 1260,"y": 979}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 1028,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 1003,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1081,"y": 684}},\r
              "h1": {"coord": {"x": 1081,"y": 997}},\r
              "h2": {"coord": {"x": 1081,"y": 437}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4E": {\r
      "id": "glyph-0x4E",\r
      "advanceWidth": 1221,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 0}},\r
              "h1": {"coord": {"x": 879,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 0}},\r
              "h1": {"coord": {"x": 1052,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 1315}},\r
              "h1": {"coord": {"x": 1052,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1315}},\r
              "h1": {"coord": {"x": 1126,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1320}},\r
              "h1": {"coord": {"x": 1181,"y": 1317}},\r
              "h2": {"coord": {"x": 1231,"y": 1320}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1484}},\r
              "h1": {"coord": {"x": 1131,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 1487}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1489}},\r
              "h1": {"coord": {"x": 1179,"y": 1489}},\r
              "h2": {"coord": {"x": 1226,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1489}},\r
              "h1": {"coord": {"x": 800,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1484}},\r
              "h1": {"coord": {"x": 845,"y": 1487}},\r
              "h2": {"coord": {"x": 895,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1320}},\r
              "h1": {"coord": {"x": 795,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1315}},\r
              "h1": {"coord": {"x": 847,"y": 1315}},\r
              "h2": {"coord": {"x": 900,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 1315}},\r
              "h1": {"coord": {"x": 879,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 366}},\r
              "h1": {"coord": {"x": 879,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 366}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 1481}},\r
              "h1": {"coord": {"x": 247,"y": 1481}, "use": false},\r
              "h2": {"coord": {"x": 347,"y": 1481}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 1484}},\r
              "h1": {"coord": {"x": 247,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 297,"y": 1487}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1489}},\r
              "h1": {"coord": {"x": 295,"y": 1489}},\r
              "h2": {"coord": {"x": 343,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1490}},\r
              "h1": {"coord": {"x": 242,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 291,"y": 1489}},\r
              "h1": {"coord": {"x": 241,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 341,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1489}},\r
              "h1": {"coord": {"x": -5,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1484}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1320}},\r
              "h1": {"coord": {"x": -10,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1315}},\r
              "h1": {"coord": {"x": 42,"y": 1315}},\r
              "h2": {"coord": {"x": 95,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1315}},\r
              "h1": {"coord": {"x": 69,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1114}},\r
              "h1": {"coord": {"x": 242,"y": 1114}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1114}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4D": {\r
      "id": "glyph-0x4D",\r
      "advanceWidth": 1336,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 15,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1489}},\r
              "h1": {"coord": {"x": 1294,"y": 1489}},\r
              "h2": {"coord": {"x": 1341,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 1489}},\r
              "h1": {"coord": {"x": 998,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1098,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 1489}},\r
              "h1": {"coord": {"x": 998,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1098,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1047,"y": 1490}},\r
              "h1": {"coord": {"x": 997,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1097,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1046,"y": 1489}},\r
              "h1": {"coord": {"x": 996,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1044,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1484}},\r
              "h1": {"coord": {"x": 1043,"y": 1486}},\r
              "h2": {"coord": {"x": 1093,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1483}},\r
              "h1": {"coord": {"x": 993,"y": 1483}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 1483}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 682,"y": 811}},\r
              "h1": {"coord": {"x": 632,"y": 811}, "use": false},\r
              "h2": {"coord": {"x": 732,"y": 811}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1483}},\r
              "h1": {"coord": {"x": 243,"y": 1483}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 1483}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1484}},\r
              "h1": {"coord": {"x": 243,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1486}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 1489}},\r
              "h1": {"coord": {"x": 292,"y": 1488}},\r
              "h2": {"coord": {"x": 340,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 289,"y": 1490}},\r
              "h1": {"coord": {"x": 239,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 339,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 1489}},\r
              "h1": {"coord": {"x": 238,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 1489}},\r
              "h1": {"coord": {"x": 238,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1489}},\r
              "h1": {"coord": {"x": -5,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1484}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1320}},\r
              "h1": {"coord": {"x": -10,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1315}},\r
              "h1": {"coord": {"x": 42,"y": 1315}},\r
              "h2": {"coord": {"x": 95,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 120,"y": 1315}},\r
              "h1": {"coord": {"x": 70,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 170,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 120,"y": 174}},\r
              "h1": {"coord": {"x": 70,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 170,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": 174}},\r
              "h1": {"coord": {"x": -4,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 169}},\r
              "h1": {"coord": {"x": 41,"y": 172}},\r
              "h2": {"coord": {"x": 91,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 5}},\r
              "h1": {"coord": {"x": -9,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": 0}},\r
              "h1": {"coord": {"x": 43,"y": 0}},\r
              "h2": {"coord": {"x": 96,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 0}},\r
              "h1": {"coord": {"x": 322,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 375,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 377,"y": 5}},\r
              "h1": {"coord": {"x": 377,"y": 2}},\r
              "h2": {"coord": {"x": 427,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 377,"y": 169}},\r
              "h1": {"coord": {"x": 327,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 377,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 174}},\r
              "h1": {"coord": {"x": 375,"y": 174}},\r
              "h2": {"coord": {"x": 422,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 174}},\r
              "h1": {"coord": {"x": 243,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1110}},\r
              "h1": {"coord": {"x": 243,"y": 1110}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 1110}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 678,"y": 451}},\r
              "h1": {"coord": {"x": 628,"y": 451}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 451}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1103}},\r
              "h1": {"coord": {"x": 993,"y": 1103}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 1103}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 174}},\r
              "h1": {"coord": {"x": 993,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 174}},\r
              "h1": {"coord": {"x": 914,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 959,"y": 169}},\r
              "h1": {"coord": {"x": 959,"y": 172}},\r
              "h2": {"coord": {"x": 1009,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 959,"y": 5}},\r
              "h1": {"coord": {"x": 909,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 959,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 0}},\r
              "h1": {"coord": {"x": 961,"y": 0}},\r
              "h2": {"coord": {"x": 1014,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1290,"y": 0}},\r
              "h1": {"coord": {"x": 1240,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1293,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1295,"y": 5}},\r
              "h1": {"coord": {"x": 1295,"y": 2}},\r
              "h2": {"coord": {"x": 1345,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1295,"y": 169}},\r
              "h1": {"coord": {"x": 1245,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1295,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1290,"y": 174}},\r
              "h1": {"coord": {"x": 1293,"y": 174}},\r
              "h2": {"coord": {"x": 1340,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1216,"y": 174}},\r
              "h1": {"coord": {"x": 1166,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1266,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1216,"y": 1315}},\r
              "h1": {"coord": {"x": 1166,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1266,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1315}},\r
              "h1": {"coord": {"x": 1241,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1294,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1296,"y": 1320}},\r
              "h1": {"coord": {"x": 1296,"y": 1317}},\r
              "h2": {"coord": {"x": 1346,"y": 1320}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1296,"y": 1484}},\r
              "h1": {"coord": {"x": 1246,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 1296,"y": 1487}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x50": {\r
      "id": "glyph-0x50",\r
      "advanceWidth": 994,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 666}},\r
              "h1": {"coord": {"x": 523,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 834,"y": 666}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 954,"y": 1059}},\r
              "h1": {"coord": {"x": 954,"y": 897}},\r
              "h2": {"coord": {"x": 954,"y": 1181}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 585,"y": 1490}},\r
              "h1": {"coord": {"x": 914,"y": 1483}},\r
              "h2": {"coord": {"x": 635,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 585,"y": 1490}},\r
              "h1": {"coord": {"x": 535,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 635,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 1316}},\r
              "h1": {"coord": {"x": 107,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 174}},\r
              "h1": {"coord": {"x": 107,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 0}},\r
              "h1": {"coord": {"x": 372,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 472,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 1}},\r
              "h1": {"coord": {"x": 375,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 1}},\r
              "h1": {"coord": {"x": 376,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 2}},\r
              "h1": {"coord": {"x": 376,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 5}},\r
              "h1": {"coord": {"x": 377,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 477,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 169}},\r
              "h1": {"coord": {"x": 377,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 477,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 172}},\r
              "h1": {"coord": {"x": 376,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 173}},\r
              "h1": {"coord": {"x": 376,"y": 173}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 173}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 173}},\r
              "h1": {"coord": {"x": 375,"y": 173}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 173}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 174}},\r
              "h1": {"coord": {"x": 372,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 472,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 174}},\r
              "h1": {"coord": {"x": 279,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 666}},\r
              "h1": {"coord": {"x": 279,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 666}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 1318}},\r
              "h1": {"coord": {"x": 522,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 739,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 803,"y": 1059}},\r
              "h1": {"coord": {"x": 803,"y": 1226}},\r
              "h2": {"coord": {"x": 803,"y": 939}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 841}},\r
              "h1": {"coord": {"x": 715,"y": 841}},\r
              "h2": {"coord": {"x": 623,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 840}},\r
              "h1": {"coord": {"x": 279,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 1318}},\r
              "h1": {"coord": {"x": 279,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 1318}},\r
              "h1": {"coord": {"x": 522,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x51": {\r
      "id": "glyph-0x51",\r
      "advanceWidth": 1318,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1119,"y": 167}},\r
              "h1": {"coord": {"x": 1069,"y": 167}, "use": false},\r
              "h2": {"coord": {"x": 1209,"y": 279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1260,"y": 684}},\r
              "h1": {"coord": {"x": 1260,"y": 446}},\r
              "h2": {"coord": {"x": 1260,"y": 979}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 1187,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 779,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r

