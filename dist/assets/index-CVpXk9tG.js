var px=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var G2=px(ie=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function C({tag:t="span",className:e,id:r,content:n,title:a,elementRoot:o,tabIndex:s=!1,attributes:x={},style:E=!1,innerHTML:T=!1,onClick:u=!1,doc:D=document}={}){if(!D||!D.createElement)return console.warn("no document or createElement"),console.warn(D),"";const O=D.createElement(t);if(e&&O.setAttribute("class",e),r?O.setAttribute("id",r):window.getUniqueControlID&&O.setAttribute("id",document.getUniqueControlID()),n&&(O.innerHTML=n),a&&O.setAttribute("title",a),o&&(O.elementRoot=o),s===!0?O.setAttribute("tabIndex","0"):s!==!1&&O.setAttribute("tabIndex",s),Object.keys(x).forEach(g=>O.setAttribute(g,x[g])),E&&O.setAttribute("style",E),T){const g=document.createElement("template");g.innerHTML=T,O.appendChild(g.content)}return u&&O.addEventListener("click",u),O}function ne(t,e=[]){Array.isArray(e)?e.forEach(r=>{Array.isArray(r)?ne(t,r):t.appendChild(r)}):t.appendChild(e)}function xe(t){return C({innerHTML:t}).firstElementChild}function Jn(t,e){t.parentNode.insertBefore(e,t.nextSibling)}const Sx="*{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:var(--global-transition)}:host{margin-right:8px;display:inline-block;width:max-content;min-width:40px;--fancy-gradient: linear-gradient( 135deg, var(--blue-l55), var(--purple-l45), var(--orange-l50), var(--purple-l45), var(--blue-l55), var(--purple-l45) );--fancy-animation: gradFade 120s linear infinite;--fancy-background-size: 500% 500%}@keyframes gradFade{0%{background-position:0% 0%}to{background-position:100% 100%}}:host(:active) .wrapper{top:1px;left:1px;box-shadow:none}:host([disabled]:active) .wrapper{top:0;left:0}.wrapper{display:inline-block;position:relative;top:0;left:0;margin:0;padding:2px;height:100%;width:100%;border-style:solid;border-width:0px;border-radius:5px;animation:var(--fancy-animation);box-shadow:var(--l2-shadow);background:var(--fancy-gradient);background-size:var(--fancy-background-size)}.wrapper:hover,.wrapper *:hover,.wrapper:focus,.wrapper *:focus{cursor:pointer}.wrapper:focus{outline:var(--global-focus-style)}.buttonContent{display:flex;align-items:center;padding:0;border-radius:3px;background-color:transparent;width:100%;height:100%}.buttonText{display:inline-block;width:max-content;height:max-content;margin:5px 10px;color:#fff;animation:var(--fancy-animation);background-color:transparent}.wrapper[secondary] .buttonContent{background-color:#fffffff2}.wrapper[secondary] .buttonText{background:var(--fancy-gradient);background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper:hover .buttonContent,.wrapper:active .buttonContent{background-color:#ffffff1a}.wrapper[secondary]:hover .buttonContent,.wrapper[secondary]:active .buttonContent{background-color:#fff}.wrapper[minimal]{padding:1px;box-shadow:var(--l1-shadow);background:linear-gradient(135deg,var(--blue-l85),var(--blue-l90));animation:var(--fancy-animation)}.wrapper[minimal] .buttonContent{background-color:#fffffff2}.wrapper[minimal] .buttonText{background:linear-gradient(135deg,var(--blue-l70),var(--blue-l90));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[minimal]:hover,.wrapper[minimal]:active{box-shadow:var(--l2-shadow);background:linear-gradient(135deg,var(--blue-l65),var(--blue-l70))}.wrapper[minimal]:hover .buttonContent,.wrapper[minimal]:active .buttonContent{background-color:#fff}.wrapper[minimal]:hover .buttonText,.wrapper[minimal]:active .buttonText{background:linear-gradient(135deg,var(--blue-l40),var(--blue-l70));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[danger]{background:linear-gradient(135deg,var(--orange-l50),var(--red));animation:var(--fancy-animation)}.wrapper[danger] .buttonText{background:#fff;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[secondary][danger] .buttonText{background:var(--red);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[disabled],.wrapper[disabled]:hover,.wrapper[disabled]:focus,.wrapper[disabled]:active{background-image:none;background-color:var(--disabled-border);cursor:default;box-shadow:none}.wrapper[disabled] .buttonContent,.wrapper[disabled]:hover .buttonContent,.wrapper[disabled]:focus .buttonContent,.wrapper[disabled]:active .buttonContent{background-color:var(--disabled-background);cursor:default}.wrapper[disabled] .buttonText,.wrapper[disabled]:hover .buttonText,.wrapper[disabled]:focus .buttonText,.wrapper[disabled]:active .buttonText{background-color:var(--disabled-background);background-clip:none;-webkit-text-fill-color:var(--disabled-border);color:var(--disabled-border);cursor:default}";class Cx extends HTMLElement{constructor(e={}){super(),Object.keys(e).forEach(a=>this.setAttribute(a,e[a])),this.wrapper=C({className:"wrapper"}),this.buttonContent=C({className:"buttonContent"}),this.buttonText=C({tag:"slot",className:"buttonText"}),this.hasAttribute("secondary")&&this.wrapper.setAttribute("secondary",""),this.hasAttribute("danger")&&this.wrapper.setAttribute("danger",""),this.hasAttribute("minimal")&&this.wrapper.setAttribute("minimal",""),this.hasAttribute("disabled")?(this.wrapper.setAttribute("disabled",""),this.disabled=!0):(this.wrapper.setAttribute("tabIndex","0"),this.disabled=!1);let r=this.attachShadow({mode:"open"}),n=C({tag:"style",innerHTML:Sx});r.appendChild(n),this.buttonContent.appendChild(this.buttonText),this.wrapper.appendChild(this.buttonContent),r.appendChild(this.wrapper),this.disabled||(this.addEventListener("click",this.toggle),this.addEventListener("keydown",this.keyPress))}static get observedAttributes(){return["disabled","secondary","danger","minimal"]}attributeChangedCallback(e,r,n){e==="disabled"&&(n===""?this.wrapper.setAttribute("disabled",""):r===""&&this.wrapper.removeAttribute("disabled")),e==="secondary"&&(n===""?this.wrapper.setAttribute("secondary",""):r===""&&this.wrapper.removeAttribute("secondary")),e==="danger"&&(n===""?this.wrapper.setAttribute("danger",""):r===""&&this.wrapper.removeAttribute("danger")),e==="minimal"&&(n===""?this.wrapper.setAttribute("minimal",""):r===""&&this.wrapper.removeAttribute("minimal"))}keyPress(e){if(e.keyCode===13){let r=new MouseEvent("click",{shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(r),this.flashAsPressed(this)}}flashAsPressed(e){e.wrapper.style.top="1px",e.wrapper.style.left="1px",e.wrapper.style.boxShadow="none",setTimeout(function(){e.wrapper.style.top="0px",e.wrapper.style.left="0px",e.wrapper.style.boxShadow="2px 2px 2px rgba(0, 0, 0, 0.3)"},100)}}function Fr(t={}){const e=Object.keys(t);return e.length?e[0]:!1}function p1(t,e){let r=1;e=e||"id";let n=""+e+r;for(;t[n];)r+=1,n=""+e+r;return n}function bt(t){return Object.keys(t).length}function nr(t){try{return structuredClone(t)}catch{const r=Array.isArray(t)?[]:{};for(const n of Object.keys(t))t[n]&&typeof t[n]=="object"&&n!=="parent"&&n!=="cache"?r[n]=nr(t[n]):r[n]=t[n];return r}}function ga(t,e){if(t=nr(t),e)return JSON.stringify(t);{let r=JSON.stringify(t,void 0,2);return r=r||"",r=r.replace(/\n/g,`\r
`),r=r.replaceAll(`\r
                  "`,'"'),r=r.replaceAll(`\r
                }`,"}"),r=r.replaceAll(`\r
                "`,'"'),r=r.replaceAll(`\r
              }`,"}"),r=r.replaceAll('},"','}, "'),r}}function S1(t,e){if(typeof t!="object"&&typeof e!="object")return t===e;for(const r of Object.keys(t))if(e[r]){if(typeof t[r]=="object"&&typeof e[r]=="object"){if(!S1(t[r],e[r]))return!1}else if(t[r]!==e[r])return!1}else return!1;return!0}function dt(t,e,r=1){return isNaN(t.x)||isNaN(t.y)||isNaN(e.x)||isNaN(e.y)?!1:!!(t.x===e.x&&t.y===e.y||M0(t.x,e.x,r)&&M0(t.y,e.y,r))}function M0(t,e,r=1){return isNaN(t)||isNaN(e)?!1:t===e||Math.abs(t-e)<=r}function ft(t,e){const r=e?1:-1;return ae(t)+.5*r}function ae(t,e=0){return t&&+(Math.round(`${t}e${e}`)+`e-${e}`)||0}function er(t){t=parseFloat(t);const e=""+t;return(e.indexOf("0000")>-1||e.indexOf("9999")>-1)&&(t=ae(t,3)),t<1e-5&&t>0&&(t=0),t}function C1(t){return t=parseFloat(t),!(isNaN(t)||t!==Math.round(t))}function xo(t=""){return t=String(t),t.replace(/[<>'"\\]/g,"")}function Eo(t=""){if(t=String(t),t==='""'||t==="''")return"";try{return t=t.replace(/^\s+|\s+$/g,""),t.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}function Tr(t="",e=""){return t=String(t),t=t.split(e),t=t.join(""),t||""}function g1(t=""){let e="";for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);n<=90&&n>=65&&(e+="-"),e+=t.charAt(r).toLowerCase()}return e}function gx(t=""){let e="";for(let r=0;r<t.length;r++)t.charAt(r)==="-"?(r++,e+=t.charAt(r).toUpperCase()):e+=t.charAt(r);return e}function R1(t=""){if(typeof t=="string"){if(t==='""'||t==="''")return"";t.indexOf("&")>-1&&(t=t.replace(/&/g,"&amp;")),t.indexOf('"')>-1&&(t=t.replace(/"/g,"&quot;")),t.indexOf("'")>-1&&(t=t.replace(/'/g,"&apos;")),t.indexOf("<")>-1&&(t=t.replace(/</g,"&lt;")),t.indexOf(">")>-1&&(t=t.replace(/>/g,"&gt;"))}return t}function Xe(t){return t===0||t===!1?!0:t==null||typeof t=="object"&&Object.keys(t).length===0?!1:!!t}function ki(t){if(!t)return!0;for(const e of Object.keys(t))if(!Xe(t[e])||t[e]===Number.MAX_SAFE_INTEGER||t[e]===Number.MIN_SAFE_INTEGER)return!0;return!1}function Bn(t,e,r){return r.indexOf(t)===e}function $n(t=10){return new Promise(e=>{setTimeout(()=>{e("fast")},t)})}const ba=["top-left","middle-left","baseline-left","bottom-left","top-center","middle-center","baseline-center","bottom-center","top-right","middle-right","baseline-right","bottom-right"];function Lo(t=0,e=0,r,n){ba.indexOf(n)<0&&(n="baseline-left");let a={deltaX:0,deltaY:0};if(e!==0&&(n.includes("top")&&(a.deltaY=e*-1),n.includes("middle")&&(a.deltaY=e/-2),n.includes("baseline"))){let o=(e+r.height)/r.height,s=r.yMax*o,x=(r.yMax-s)*-1;a.deltaY=x-e}return t!==0&&(n.includes("right")&&(a.deltaX=t*-1),n.includes("center")&&(a.deltaX=t/-2)),a}function sn(t,e={x:0,y:0}){let r=Math.atan2(t.y-e.y,t.x-e.x);return isNaN(r)&&(console.warn(`calculateAngle returned NaN
`+ga(t)+`
${r}`),this.wrapper=C({className:"wrapper"}),this.wrapper.style.backgroundSize=`auto ${o}px`,this.hasAttribute("selected")&&this.wrapper.setAttribute("selected",""),this.showingOtherProject&&this.removeAttribute("selected"),this.glyph&&this.glyph.advanceWidth?(this.thumbnail=C({tag:"span",className:"thumbnail"}),this.thumbnail.width=o,this.thumbnail.height=o):(this.thumbnail=C({className:"thumbnail"}),Bx(Tr(r,"glyph-"))?this.thumbnail.innerHTML=`
					<div class="whitespace-char-thumbnail">white space</div>
				`:n?this.thumbnail.innerHTML=n:this.thumbnail.innerHTML=`
						<div class="whitespace-char-thumbnail">${r}</div>
					`),this.name=C({className:"name"}),n?this.name.innerHTML=r==="glyph-0x20"?"Space":n:this.name.innerHTML=a.replaceAll("Component ","comp-");const s=this.attachShadow({mode:"open"}),x=C({tag:"style",innerHTML:Mx});s.appendChild(x),this.wrapper.appendChild(this.thumbnail),this.wrapper.appendChild(this.name),s.appendChild(this.wrapper),this.redraw()}attributeChangedCallback(){const e=this.shadowRoot?this.shadowRoot.querySelector(".wrapper"):!1;e&&!this.showingOtherProject&&(this.hasAttribute("selected")?e.setAttribute("selected",""):e.removeAttribute("selected"))}redraw(){var e,r;(r=(e=this.glyph)==null?void 0:e.shapes)!=null&&r.length&&(this.thumbnail.innerHTML=this.project.makeItemThumbnail(this.glyph))}}const At={gray:{l97:"hsl(200, 81%, 97%)",l95:"hsl(200, 81%, 94%)",l90:"hsl(200, 60%, 88%)",l85:"hsl(200, 52%, 82%)",l80:"hsl(200, 47%, 76%)",l75:"hsl(200, 42%, 71%)",l70:"hsl(200, 33%, 65%)",l65:"hsl(200, 27%, 60%)",l60:"hsl(200, 22%, 55%)",l55:"hsl(200, 18%, 50%)",l50:"hsl(200, 17%, 45%)",l45:"hsl(200, 17%, 40%)",l40:"hsl(200, 18%, 36%)",l35:"hsl(200, 18%, 31%)",l30:"hsl(200, 17%, 27%)",l25:"hsl(200, 18%, 23%)",l20:"hsl(200, 18%, 19%)",l15:"hsl(200, 17%, 15%)",l10:"hsl(200, 19%, 11%)",l05:"hsl(200, 18%, 7%)"},blue:{l95:"hsl(200, 100%, 94%)",l90:"hsl(200, 94%, 87%)",l85:"hsl(200, 100%, 80%)",l80:"hsl(200, 100%, 73%)",l75:"hsl(200, 100%, 64%)",l70:"hsl(200, 100%, 58%)",l65:"hsl(200, 100%, 49%)",l60:"hsl(200, 100%, 45%)",l55:"hsl(200, 100%, 41%)",l50:"hsl(200, 100%, 37%)",l45:"hsl(200, 100%, 33%)",l40:"hsl(200, 100%, 30%)",l35:"hsl(200, 100%, 25%)",l30:"hsl(200, 100%, 22%)",l25:"hsl(200, 100%, 19%)",l20:"hsl(200, 100%, 15%)",l15:"hsl(200, 100%, 12%)",l10:"hsl(200, 100%, 9%)",l05:"hsl(200, 100%, 6%)"},orange:{l95:"hsl(20, 100%, 95%)",l90:"hsl(20, 100%, 89%)",l85:"hsl(20, 100%, 84%)",l80:"hsl(20, 100%, 78%)",l75:"hsl(20, 100%, 72%)",l70:"hsl(20, 100%, 66%)",l65:"hsl(20, 100%, 56%)",l60:"hsl(20, 100%, 50%)",l55:"hsl(20, 100%, 46%)",l50:"hsl(20, 100%, 42%)",l45:"hsl(20, 100%, 37%)",l40:"hsl(20, 100%, 33%)",l35:"hsl(20, 100%, 29%)",l30:"hsl(20, 100%, 25%)",l25:"hsl(20, 100%, 22%)",l20:"hsl(20, 100%, 17%)",l15:"hsl(20, 100%, 14%)",l10:"hsl(20, 100%, 10%)",l05:"hsl(20, 100%, 6%)"},green:{l95:"hsl(125, 100%, 82%)",l90:"hsl(125, 97%, 74%)",l85:"hsl(125, 83%, 66%)",l80:"hsl(125, 74%, 58%)",l75:"hsl(125, 67%, 50%)",l70:"hsl(125, 82%, 43%)",l65:"hsl(125, 100%, 36%)",l60:"hsl(125, 100%, 33%)",l55:"hsl(125, 100%, 30%)",l50:"hsl(125, 100%, 27%)",l45:"hsl(125, 100%, 24%)",l40:"hsl(125, 95%, 22%)",l35:"hsl(125, 100%, 19%)",l30:"hsl(125, 100%, 16%)",l25:"hsl(125, 100%, 14%)",l20:"hsl(125, 100%, 11%)",l15:"hsl(125, 100%, 9%)",l10:"hsl(125, 100%, 6%)",l05:"hsl(125, 100%, 4%)"},purple:{l95:"hsl(285, 100%, 96%)",l90:"hsl(285, 100%, 92%)",l85:"hsl(285, 100%, 89%)",l80:"hsl(285, 100%, 85%)",l75:"hsl(285, 100%, 81%)",l70:"hsl(285, 100%, 77%)",l65:"hsl(285, 100%, 72%)",l60:"hsl(285, 100%, 66%)",l55:"hsl(285, 100%, 61%)",l50:"hsl(285, 100%, 50%)",l45:"hsl(285, 100%, 45%)",l40:"hsl(285, 100%, 40%)",l35:"hsl(285, 100%, 36%)",l30:"hsl(285, 100%, 31%)",l25:"hsl(285, 100%, 27%)",l20:"hsl(285, 100%, 22%)",l15:"hsl(285, 100%, 17%)",l10:"hsl(285, 100%, 13%)",l05:"hsl(285, 100%, 10%)"}},$o=At.blue.l65,Jr={accent:$o,offWhite:"hsl(200, 81%, 97%)",darkRed:"hsl(0, 100%, 23%)",red:"hsl(0, 100%, 48%)",lightRed:"hsl(0, 100%, 90%)",enabled:{resting:{text:"hsl(0, 0%, 5%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 75%)",fill:"hsl(0, 0%, 39%)",background:"hsl(0, 0%, 98%)"},restingLight:{text:"hsl(0, 0%, 20%)",lightText:"hsl(0, 0%, 30%)",border:"hsla(0, 0%, 75%, 0.2)",fill:"hsl(0, 0%, 39%, 0.4)",background:"hsl(0, 0%, 98%)"},focus:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:"hsl(200, 25%, 15%)",background:"white"},active:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:$o,background:"white"}},disabled:{text:"hsl(0, 0%, 40%)",border:"hsl(0, 0%, 82%)",fill:"hsl(0, 0%, 82%)",background:"hsl(0, 0%, 94%)"}};function va(t){const e={r:0,g:0,b:0,a:1};return typeof t!="string"||(t.charAt(0)==="#"?(t=t.substring(1,7),e.r=parseInt(t.substring(0,2),16),e.g=parseInt(t.substring(2,4),16),e.b=parseInt(t.substring(4,6),16)):t.substring(0,4)==="rgb("&&(t=t.split("(")[1].split(")")[0].split(","),e.r=parseInt(t[0],10),e.g=parseInt(t[1],10),e.b=parseInt(t[2],10),e.a=parseInt(t[3],10)||1)),e}function P0(t){let e=va(t),r=e.r.toString(16).toUpperCase();r.length===1&&(r=`0${r}`);let n=e.g.toString(16).toUpperCase();n.length===1&&(n=`0${n}`);let a=e.b.toString(16).toUpperCase();return a.length===1&&(a=`0${a}`),`#${r}${n}${a}`}function Gx(t,e,r){e=Math.max(0,Math.min(e,1));const n=va(t);return n.r=Math.max(0,Math.min(n.r,255)),n.g=Math.max(0,Math.min(n.g,255)),n.b=Math.max(0,Math.min(n.b,255)),r?(n.r=ae((255-n.r)*e+n.r),n.g=ae((255-n.g)*e+n.g),n.b=ae((255-n.b)*e+n.b)):(n.r=ae(n.r-n.r*e),n.g=ae(n.g-n.g*e),n.b=ae(n.b-n.b*e)),`rgb(${n.r},${n.g},${n.b})`}function Sr(t,e){const r=va(t),n=ae((255-r.r)*(1-e)),a=ae((255-r.g)*(1-e)),o=ae((255-r.b)*(1-e)),s=r.r+n,x=r.g+a,E=r.b+o;return`rgb(${s},${x},${E})`}function Tn(t){const e=parseInt(t);return!e||isNaN(e)?1:e>100?0:e<0?1:(100-t)/100}function G1(){const t=Math.floor(Math.random()*5)*51,e=[],r=Math.floor(Math.random()*3);switch(e[r]=t,r){case 0:e[1]=0,e[2]=255;break;case 1:e[0]=0,e[2]=255;break;case 2:e[0]=255,e[1]=0;break}return"rgb("+e[0]+","+e[1]+","+e[2]+")"}const Px=Object.freeze(Object.defineProperty({__proto__:null,accentColors:At,getColorFromRGBA:Sr,makeRandomSaturatedColor:G1,parseColorString:va,rgbToHex:P0,shiftColor:Gx,transparencyToAlpha:Tn,uiColors:Jr},Symbol.toStringTag,{value:"Module"}));let ke={};function In(t){let e=20;t.name&&t.name.indexOf("page_")===0&&(e=24),t.name&&t.name.indexOf("panel_")===0&&(e=24);let r=t.color||"rgb(76,81,86)",n="";return ke[t.name]&&(ke[t.name].outline?n=ke[t.name].outline:n=ke[t.name]),`
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
	`}ke.panel_layers=`
	<polygon points="12 9 0 4.574 12 0 24 4.5 12 9"/>
	<polygon points="12 14 0 9.5 4 8 12 11 20 8 24 9.5 12 14"/>
	<polygon points="12 19 0 14.5 4 13 12 16 20 13 24 14.5 12 19"/>
	<polygon points="12 24 0 19.5 4 18 12 21 20 18 24 19.5 12 24"/>
`;ke.panel_guides=`
	<polygon points="2 17 5 20 5 17 2 17"/>
	<polygon points="24 22 0 22 0 23 24 23 24 22 24 22"/>
	<polygon points="24 7 0 7 0 8 24 8 24 7 24 7"/>
	<polygon points="24 3 0 3 0 3.5 24 3.5 24 3 24 3"/>
	<polygon points="24 1 0 1 0 2 24 2 24 1 24 1"/>
	<polygon points="24 15 0 15 0 17 24 17 24 15 24 15"/>
	<polygon points="7 0 5 0 5 24 7 24 7 0 7 0"/>
	<polygon points="22.5 0 22 0 22 24 22.5 24 22.5 0 22.5 0"/>
`;ke.panel_contextCharacters=`
	<path d="m8.942,16.997h-2.672v-.55c-.412.432-.882.647-1.407.647-.53,0-.973-.213-1.329-.64s-.534-.966-.534-1.621c0-.668.193-1.221.578-1.661s.875-.66,1.469-.66c.412,0,.82.141,1.224.424v-.737c0-.375-.047-.641-.139-.796s-.259-.233-.5-.233c-.322,0-.544.181-.666.542l-1.829-.383c.539-1.006,1.455-1.508,2.747-1.508.752,0,1.344.179,1.775.535s.646.879.646,1.569v3.57h.639v1.502Zm-2.672-1.801v-1.052c-.172-.216-.367-.324-.585-.324-.2,0-.358.083-.476.252-.118.168-.177.392-.177.669,0,.272.055.482.167.63s.264.221.459.221c.24,0,.444-.132.612-.397Z"/>
	<path d="m9.547,16.997v-1.502h.666v-6.995h-.666v-1.502h2.699v3.651h.027c.299-.496.727-.745,1.285-.745.594,0,1.068.292,1.424.876s.534,1.432.534,2.545c0,1.214-.171,2.146-.513,2.795s-.828.973-1.458.973c-.499,0-.931-.218-1.299-.657v.559h-2.699Zm2.699-3.987v1.416c0,.394.042.686.126.878.084.191.232.288.445.288.249,0,.409-.147.479-.441s.105-.843.105-1.648c0-.726-.04-1.23-.119-1.509-.079-.28-.239-.42-.479-.42-.213,0-.359.109-.439.326s-.119.587-.119,1.11Z"/>
	<path d="m19.429,14.229l1.571.598c-.258,1.581-1.079,2.371-2.461,2.371-.834,0-1.49-.334-1.968-1.001s-.717-1.587-.717-2.76c0-1.057.207-1.909.622-2.559s.958-.973,1.628-.973c.644,0,1.077.29,1.299.869h.027v-.757h1.462v2.823h-1.462c-.032-.505-.11-.878-.235-1.12-.125-.241-.312-.362-.561-.362-.263,0-.44.159-.53.476s-.136.85-.136,1.6c0,.819.044,1.401.133,1.746s.296.517.622.517c.227,0,.392-.118.496-.354s.174-.608.211-1.113Z"/>
	<path d="m18,4v-1h4v-1h-5v2h-1V0h-8v4h-1v-2H2v1h4v1H0v16h6v1H2v1h5v-2h1v4h8v-4h1v2h5v-1h-4v-1h6V4h-6ZM9,1h6v3h-6V1Zm6,22h-6v-3h6v3Zm7-5H2V6h20v12Z"/>
`;ke.panel_history=`
	<path d="m19.075,18.133l-.021.022c-.181.185-.478.189-.663.008l-5.229-5.102c-.185-.181.491-.874.676-.693l5.229,5.102c.185.181.189.478.008.663Z"/>
	<path d="m16.1,9.358l.022.021c.185.181.189.478.008.663l-2.291,2.348c-.181.185-.874-.491-.693-.676l2.291-2.348c.181-.185.478-.189.663-.008Z"/>
	<circle cx="13.165" cy="12.387" r="1.033"/>
	<path d="m19.551,5.842c.149.145.282.3.418.452l1.747-1.747c-.146-.159-.283-.322-.439-.475-2.259-2.204-5.187-3.302-8.112-3.302-3.021,0-6.039,1.171-8.315,3.504-2.196,2.251-3.287,5.166-3.295,8.08h2.475c.008-2.294.865-4.587,2.589-6.354,1.736-1.779,4.06-2.758,6.546-2.758,2.4,0,4.667.923,6.386,2.6Z"/>
	<path d="m1.608,11.33H.2l2.609,4.174,2.609-4.174h-1.166c-.954-.008-1.986-.008-2.644,0Z"/>
	<path d="m21.916,6.021l-.736.736c1.133,1.605,1.769,3.503,1.794,5.509.032,2.62-.958,5.096-2.788,6.971-1.862,1.908-4.355,2.959-7.022,2.959-2.574,0-5.007-.99-6.85-2.788-1.066-1.041-1.855-2.286-2.353-3.645l-.677,1.084c.541,1.201,1.309,2.324,2.309,3.3,2.108,2.057,4.841,3.082,7.571,3.082,2.819,0,5.636-1.093,7.761-3.27,3.747-3.841,4.05-9.742.991-13.938Z"/>
`;ke.panel_attributes=`
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
`;ke.panel_view=`
	<circle cx="12" cy="13" r="4"/>
	<path d="m24,13h-2v-1c0-3.237-4.368-7-10-7S2,8.763,2,12v1H0v-1C0,7.29,5.72,3,12,3s12,4.29,12,9v1Z"/>
`;ke.command_save=`
	<path d="M0,0V17.22l2.78,2.78H20V0H0ZM5,1H15V10H5V1Zm2,18v-3h1v3h-1Zm2,0v-3h5v3h-5ZM19,3h-1v1h1v15h-4v-4H6v4H3.5l-2.5-2.5V1h3V11h12V1h3V3Z"/>
`;ke.command_export=`
	<polygon points="10 19.06 10 5.06 15.25 10.31 16 9.56 9.5 3.06 3 9.56 3.75 10.31 9 5.06 9 19.06 10 19.06"/>
	<rect width="19" height="1"/>
`;ke.command_newTab=`
	<polygon points="10.35 10.35 18.94 1.77 18.94 9 20 9 20 0 11 0 11 1.06 18.23 1.06 9.65 9.65 10.35 10.35"/>
	<polygon points="15 10 14.98 19 1 19 1 5 10 5 11 4 0 4 0 20 15.98 20 16 9 15 10"/>
`;ke.command_info=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M9.28,14.06v-4.76h-1.13v-1.28h2.57v6.04h1.13v1.28h-3.7v-1.28h1.13Zm-.2-8.53c0-.23,.08-.43,.25-.6s.37-.26,.62-.26c.24,0,.44,.08,.61,.25s.26,.37,.26,.61-.09,.45-.26,.62c-.17,.17-.38,.25-.61,.25s-.45-.09-.62-.26-.25-.37-.25-.61Z"/>
`;ke.command_help=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M10.06,12.65h-.82l-.19-3.53c.25,.06,.5,.1,.75,.1,.7,0,1.2-.18,1.5-.53s.46-.77,.46-1.25c0-.56-.17-1-.5-1.31-.33-.31-.75-.47-1.27-.47-.62,0-1.08,.18-1.39,.53s-.45,.8-.45,1.33c0,.11,0,.24,0,.39h-1.49c0-.14,0-.27,0-.37,0-1.09,.32-1.9,.97-2.41s1.42-.77,2.31-.77c1.08,0,1.91,.29,2.5,.87,.59,.58,.89,1.34,.89,2.28s-.28,1.64-.84,2.18-1.22,.81-1.98,.81c-.06,0-.14,0-.25,0l-.2,2.16Zm-1.41,2.99v-1.96h1.96v1.96h-1.96Z"/>
`;ke.command_autoFit=`
	<polygon points="6 9 3 9 4.75 7.25 4 6.5 1 9.5 4.25 12.25 5 11.5 3 10 6 10 6 9"/>
	<polygon points="14 9 17 9 15.25 7.25 16 6.5 19 9.5 15.75 12.25 15 11.5 17 10 14 10 14 9"/>
	<rect y="4" width="1" height="11"/>
	<rect x="19" y="4" width="1" height="11"/>
	<rect x="12" y="9" width="1" height="1"/>
	<rect x="7" y="9" width="1" height="1"/>
	<rect x="9" y="9" width="2" height="1"/>
`;ke.command_verticalBar='<rect x="9" y="0" width="2" height="18"/>';ke.command_horizontalBar='<rect y="9" x="1" height="2" width="19"/>';ke.command_crossProjectActions=`
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
`;ke.page_about=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m11,17v-6h-2v-2h4v8h2v2s-6,0-6,0v-2h2Zm-.95-11.258c0-.468.165-.877.495-1.223s.748-.52,1.255-.52c.477,0,.888.168,1.233.504s.517.749.517,1.238-.173.905-.517,1.244c-.345.342-.756.514-1.233.514-.487,0-.9-.174-1.24-.52s-.51-.758-.51-1.238Z"/>
`;ke.page_help=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m12.398,16h-2v-4.5c2,0,4.202-.5,4.202-3,0-1.5-.6-2.5-2.202-2.5-2,0-2.398,1.3-2.398,2v1h-2v-1c0-1,.398-4,4.398-4,2.602,0,4.602,1.5,4.602,4.5s-2.602,4.5-4.102,4.5l-.5,3Z"/>
	<rect x="10" y="17" width="3" height="3" rx=".75" ry=".75"/>
`;ke.page_exportFont=`
	<polygon points="30.1,9.9 40.1,0 50,9.9 42.5,9.9 42.5,18.8 37.6,18.8 37.6,9.9"/>
	<path d="M15.2,12.7l-9.9,9.9V50h29.8V12.7H15.2z M26.7,29.1h-1.9l0.7-2.9H20L18.8,31h4.7l-0.4,1.8h-4.7l-1.3,5.4h1.7l-0.4,1.8H13l0.4-1.8h1.4l2.9-12h-1.5l0.4-1.8h11.3L26.7,29.1z"/>
`;ke.page_exportSVG=`
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m17.026,6H7v18h15v-12.75l-4.974-5.25Zm-5.835,11.758c-.272.247-.613.371-1.022.371-.359,0-.684-.115-.976-.344v.303h-.949v-1.575h.949c0,.369.051.608.154.718.103.11.238.165.406.165.15,0,.267-.043.351-.128.084-.084.126-.202.126-.353,0-.12-.048-.247-.143-.38-.095-.131-.332-.334-.711-.604-.511-.361-.836-.657-.978-.889-.141-.232-.212-.46-.212-.684,0-.339.124-.617.371-.834.247-.217.561-.326.94-.326.188,0,.353.022.494.065.141.045.309.137.503.279v-.303h.949v1.463h-.949c0-.308-.047-.515-.141-.62s-.228-.158-.402-.158c-.127,0-.227.033-.302.098-.075.065-.113.153-.113.262,0,.135.044.253.131.354.088.101.26.236.519.405.582.383.962.702,1.142.959.18.256.269.53.269.823,0,.375-.136.687-.408.934Zm5.908-3.793h-.437l-1.455,4.201h-1.213l-1.402-4.201h-.455v-.725h2.318v.725h-.464l.727,2.313.719-2.313h-.536v-.725h2.198v.725Zm3.308,3.02c-.062.274-.163.51-.304.706s-.313.341-.514.436-.43.142-.685.142c-.526,0-.941-.217-1.244-.65-.303-.435-.455-1.054-.455-1.857,0-.812.123-1.441.369-1.889.246-.448.591-.672,1.036-.672.299,0,.554.146.766.441h.014v-.366h.783v1.675h-.783c-.007-.31-.054-.542-.142-.695-.088-.154-.205-.23-.35-.23-.176,0-.288.101-.337.303-.049.201-.073.633-.073,1.295,0,.524.012.914.036,1.168.024.255.065.427.125.519.059.091.147.137.263.137.278,0,.42-.272.427-.817h-.328v-.734h1.49c0,.453-.031.817-.092,1.092Z"/>
`;ke.page_importAndExport=`
	<polygon points="17 20 20 24 23 20 21 20 21 17 19 17 19 20 17 20"/>
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m13.684,6h-6.684v12h10v-8.5l-3.316-3.5Zm1.316,9h-5v-1h5v1Zm0-2h-5v-1h5v1Zm0-2h-7v-1h7v1Z"/>
`;ke.page_settings=`
	<path d="m23.404,15.538c.366-1.11.572-2.291.596-3.518l-3.267-1.344c-.041-.326-.101-.645-.176-.959l2.601-2.372c-.448-1.126-1.057-2.169-1.806-3.098l-3.375,1.073c-.227-.21-.465-.408-.714-.594l.47-3.506c-1.043-.567-2.18-.982-3.381-1.221l-1.897,2.993c-.152-.008-.301-.023-.455-.023s-.303.015-.455.023l-1.897-2.993c-1.201.238-2.338.653-3.381,1.221l.47,3.506c-.249.186-.487.384-.714.594l-3.375-1.073c-.749.929-1.358,1.972-1.806,3.098l2.601,2.372c-.075.314-.135.633-.176.959l-3.267,1.344c.024,1.227.23,2.408.596,3.518l3.516.145c.153.308.319.607.505.893l-1.634,3.121c.785.893,1.699,1.665,2.715,2.294l2.777-2.142c.323.141.656.264.998.366l.752,3.43c.58.086,1.17.145,1.774.145s1.194-.059,1.774-.145l.752-3.43c.342-.102.675-.225.998-.366l2.777,2.142c1.016-.628,1.93-1.401,2.715-2.294l-1.634-3.121c.186-.286.353-.585.505-.893l3.516-.145Zm-11.404,1.284c-2.761,0-5-2.239-5-5s2.239-5,5-5,5,2.239,5,5-2.239,5-5,5Z"/>
`;ke.page_globalActions=`
	<path d="m22.198,17.785l-3.6-3.6c1.293-1.339,2.093-3.157,2.093-5.166,0-1.751-.609-3.358-1.621-4.629-.016.554-.129,1.161-.344,1.811-.555,1.67-1.718,3.448-3.277,5.006-2.205,2.205-4.81,3.581-6.833,3.625,1.272,1.016,2.882,1.627,4.636,1.627,1.923,0,3.669-.735,4.989-1.932l1.582,1.582c-3.828,3.509-9.79,3.421-13.497-.287-3.707-3.707-3.795-9.669-.287-13.497l1.705,1.705c-1.197,1.32-1.932,3.067-1.932,4.989,0,1.739.601,3.334,1.6,4.601,1.567.793,4.737-.5,7.343-3.106,1.453-1.453,2.532-3.095,3.04-4.622.377-1.137.382-2.067.055-2.715-1.266-.998-2.861-1.598-4.598-1.598-2.008,0-3.827.799-5.166,2.093L4.485.072c-.097-.097-.253-.097-.35,0s-.097.253,0,.35l.855.855c-4.085,4.406-3.998,11.309.287,15.593,1.774,1.774,4,2.818,6.31,3.157v1.583c-2.439.05-4.32.347-4.32.71v.96c0,.398,2.257.72,5.04.72s5.04-.322,5.04-.72v-.96c0-.362-1.881-.659-4.32-.71v-1.46c.068.001.136.01.205.01,2.747,0,5.487-1.009,7.638-3.003l.978.978c.048.048.112.073.175.073s.127-.024.175-.073c.097-.097.097-.253,0-.35Z"/>
`;ke.page_livePreview=`
	<rect x="20" y="5" width="1" height="15"/>
	<rect x="17" y="3.98" width="3" height="1"/>
	<rect x="21" y="4" width="3" height="1"/>
	<rect x="17" y="19.98" width="3" height="1"/>
	<rect x="21" y="20" width="3" height="1"/>
	<path d="m0,16v-2s2,0,2,0v-6H0v-2h6v2h-2v6h3v-2h2v4S0,16,0,16Z"/>
	<path d="m14,18v2h-4v-2h1v-7h-1v-2h3v.879c.618-.654,1.308-.981,2.069-.981.92,0,1.644.365,2.173,1.096s.794,1.582.794,2.554c0,1.03-.273,1.882-.819,2.558-.546.675-1.274,1.013-2.184,1.013-.742,0-1.42-.29-2.033-.869v2.751s1,0,1,0Zm1.759-5.495c0-.608-.126-1.063-.377-1.365s-.583-.453-.995-.453c-.417,0-.756.154-1.017.463s-.392.77-.392,1.383c0,.551.129.994.388,1.329s.603.503,1.035.503c.398,0,.723-.151.977-.453s.381-.771.381-1.408Z"/>
`;ke.page_kerning=`
	<path d="m16.697,18l-4.164-10.513h-1.534v-1.487h4.892v1.487h-1.432l3.156,7.976,3.072-7.976h-1.446v-1.487h4.758v1.487h-1.505l-4.078,10.513h-1.72Z"/>
	<path d="m11.616,16.5l-3.41-9h1.495v-1.5H3.379v1.5h1.445l-3.327,9H0v1.5h4.873v-1.5h-1.503l.946-2.714h4.456l.92,2.714h-1.538v1.5h4.846v-1.5h-1.384Zm-6.839-4.12l1.667-4.88h.26l1.602,4.88h-3.529Z"/>
	<rect x="11" y="2" width="13" height="1"/>
	<rect x="11" width="1" height="5"/>
	<rect y="21" width="13" height="1"/>
	<rect x="12" y="19" width="1" height="5"/>
`;ke.page_ligatures=`
	<path id="b" data-name="ligatures" d="m21,21v-13s-8,0-8,0c-.002-.479,0-1.249,0-2.083s.2-2.917,2.2-2.917c.642,0,2.572,0,2.572,1.423,0,.899.943,1.524,1.826,1.402.891-.116,1.402-.825,1.402-1.825,0-2-2.376-4-5-4-1.75,0-2.704.202-3.87,1.194-.541.461-1.147,1.187-1.525,2.294-.723-1.025-1.865-1.545-3.438-1.545-3.166,0-4.206,2.057-4.206,5.196v.861l-2.96-.035v3.035h3v10H0v3h24v-3h-3ZM6,7.142c0-1.076,0-2.596,1.383-2.596.701,0,1.107.518,1.218,1.553l1.634-.251v2.152h-4.236v-.858Zm0,13.858v-10h4v10h-4Zm7,0v-10h5v10h-5Z"/>
`;ke.page_components=`
	<path d="m9.831,15.308c-.899-.912-2.012-1.368-3.338-1.368-1.38,0-2.544.544-3.493,1.632v-5.572H0v1.986l1,.014v10H0v2h3.028l-.028-1.602c.279.405.736.773,1.373,1.104.637.332,1.34.497,2.109.497,1.373,0,2.499-.489,3.378-1.468.879-.978,1.318-2.184,1.318-3.617,0-1.493-.449-2.695-1.348-3.607Zm-.531,3.75c0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088,0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.288-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088Z"/>
	<path d="m12.821,18.915c0,1.433.439,2.638,1.318,3.617.879.978,2.005,1.468,3.378,1.468.77,0,1.473-.166,2.109-.497.637-.332,1.094-.7,1.373-1.104l-.028,1.602h3.028s0-2,0-2h-1v-10l1-.014v-1.986s-3,0-3,0v5.572c-.949-1.088-2.113-1.632-3.493-1.632-1.327,0-2.439.456-3.338,1.368-.899.912-1.348,2.114-1.348,3.607Zm1.886.055c0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.289-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088,0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088Z"/>
	<path d="m15,3.131c0-.992-.297-1.762-.89-2.31-.593-.548-1.288-.822-2.086-.822-.008,0-.016.002-.024.002-.008,0-.016-.002-.024-.002-.797,0-1.493.274-2.086.822-.593.548-.89,1.318-.89,2.31,0,.031.006.057.007.087,0,.031-.007.057-.007.088,0,.979.3,1.755.9,2.329.6.574,1.292.861,2.076.861.008,0,.016-.002.024-.002.008,0,.016.002.024.002.784,0,1.477-.287,2.076-.861.6-.574.9-1.35.9-2.329,0-.031-.006-.057-.007-.088,0-.03.007-.057.007-.087Z"/>
	<path d="m15.001,13.5c-.17,0-.335-.087-.429-.243l-2.571-4.285-2.571,4.285c-.142.236-.45.314-.686.172-.237-.142-.313-.449-.171-.686l3.429-5.715,3.429,5.715c.142.236.065.544-.171.686-.081.049-.169.071-.257.071Z"/>
`;ke.page_characters=`
	<path d="m13.548,0h2.452v6l-2.452.004c-.785-2.073-2.148-3.002-4.088-3.002-1.602,0-2.814.466-3.634,1.557s-1.231,2.399-1.231,3.923c0,1.594.434,2.884,1.302,3.87s1.973,1.479,3.316,1.479c1.1,0,3.795-.823,4.796-3.825l2.992,1.001c-1.225,3.805-3.923,5.84-8.094,5.84-2.945,0-5.166-.793-6.662-2.38S0,10.874,0,8.447c0-1.728.389-3.24,1.166-4.536S2.99,1.64,4.306.984s2.759-.984,4.33-.984c1.956,0,3.593.511,4.913,1.532V0Z"/>
	<polygon points="21 21 21 20.5 22 20.5 22 20 23 20 23 17 23 16.5 22.5 16.5 22.5 16 22 16 22 15.5 21.5 15.5 21.5 15 21 15 21 14.5 20.5 14.5 20.5 14 20 14 20 13.5 19.5 13.5 19.5 13 19 13 19 12.5 18.5 12.5 18.5 12 18 12 18 11.5 17.5 11.5 17.5 11 17 11 17 12 17.5 12 17.5 13 18 13 18 14 18.5 14 18.5 15 19 15 19 16 19.5 16 20 16 20 16.5 20.5 16.5 20.5 17.5 20 17.5 20 18 19.5 18 19 18 19 17.5 18.5 17.5 18.5 16.5 19 16.5 19 16 18.5 16 18.5 15 18 15 18 14 17.5 14 17.5 13 17 13 17 19 17 19.5 17.5 19.5 17.5 20 18 20 18 20.5 18.5 20.5 18.5 21 19 21 19 21.5 19.5 21.5 20 21.5 20 21 21 21"/>
	<polygon points="24 22 24 21 23.5 21 23.5 20 23 20 23 20.5 22 20.5 22 21 21 21 21 21.5 20 21.5 20 22 20 22.5 20.5 22.5 20.5 23.5 21.5 23.5 21.5 23 22.5 23 22.5 22.5 23.5 22.5 23.5 22 24 22"/>
`;ke.page_overview=`
	<path d="m7,9.646v1.362h-2.161v-.951c-.701.72-1.483,1.08-2.347,1.08-.671,0-1.254-.231-1.749-.693S0,9.39,0,8.671C0,7.946.263,7.344.789,6.866s1.16-.717,1.901-.717c.691,0,1.359.22,2.004.661v-.773c0-.397-.036-.704-.107-.918s-.238-.408-.499-.58-.603-.258-1.025-.258c-.726,0-1.252.306-1.577.918l-1.387-.387c.615-1.214,1.677-1.821,3.185-1.821.554,0,1.033.079,1.436.238s.705.363.903.612.331.52.4.81.103.752.103,1.386v3.609h.873Zm-2.306-1.539c-.625-.516-1.257-.773-1.898-.773-.401,0-.737.124-1.006.371s-.404.567-.404.959c0,.365.118.671.354.918s.558.371.964.371c.701,0,1.364-.312,1.989-.935v-.91Z"/>
	<path d="m8,11.007v-1.362h.925V1.362h-.925V0h2.343v4.312c.726-.881,1.618-1.321,2.675-1.321,1.016,0,1.868.369,2.557,1.108s1.033,1.712,1.033,2.921c0,1.16-.337,2.136-1.01,2.929s-1.536,1.188-2.587,1.188c-.589,0-1.128-.134-1.616-.403s-.838-.567-1.052-.894v1.168h-2.343Zm2.388-3.883c0,.811.235,1.454.705,1.93s1.012.713,1.627.713c.645,0,1.201-.252,1.669-.757s.701-1.182.701-2.03c0-.822-.232-1.46-.697-1.914s-1.01-.681-1.635-.681c-.615,0-1.163.235-1.646.705s-.724,1.148-.724,2.034Z"/>
	<path d="m24,3v3s-1.25,0-1.25,0c-.064-.564-.393-.999-.75-1.3s-.884-.294-1.356-.294c-.629,0-1.141.243-1.534.729s-.59,1.124-.59,1.914c0,.736.187,1.384.561,1.946s.915.842,1.623.842c.983,0,1.697-.51,2.139-1.531l1.158.596c-.639,1.552-1.758,2.328-3.356,2.328-1.131,0-2.021-.422-2.67-1.265s-.974-1.815-.974-2.917c0-1.176.354-2.147,1.062-2.913s1.524-1.148,2.449-1.148c.792,0,1.693.255,2.239.765v-.753h1.25Z"/>
	<path d="m4.047,17.842l-1.444,1.806h.941v1.406H0v-1.406h1.076l2.196-2.731-2.098-2.511H.189v-1.406h3.43v1.406h-.91l1.314,1.578,1.269-1.578h-.744v-1.406h3.452v1.406h-1.205l-2.002,2.503,2.281,2.739h.925v1.406h-3.452v-1.406h1.008l-1.51-1.806Z"/>
	<path d="m12.492,20.2l-2.503-5.798h-.989v-1.402h3.492v1.402h-.913l1.645,4.198,1.613-4.198h-1.007v-1.402h3.17v1.402h-.613l-3.883,9.598h-2.498v-1.5h1.593l.892-2.3Z"/>
	<path d="m18,21.054v-1.315l4.37-5.433h-3.12v.694h-1.25v-2h6v1.406l-4.387,5.333h3.191v-.74h1.196v2.054h-6Z"/>
`;function bx(t="baseline-left"){let e=At.gray.l25,r=At.blue.l70,n=0;t.includes("center")&&(n=7),t.includes("right")&&(n=14);let a=0;return t.includes("middle")&&(a=8),t.includes("baseline")&&(a=11),t.includes("bottom")&&(a=15),`
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
	`}ke.back='<polygon points="37,23 20,23 25,18 22,15 12,25 22,35 25,32 20,27 37,27"/>';ke.more='<polygon points="0,0 0,10 5,5"/>';ke.selected='<polygon points="6,6 6,14 14,10"/>';ke.notSelected='<rect x="5" y="9.75" width="10" height="0.5"/>';ke.keyboard=`
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
`;function pa(t,e,r={x:0,y:0,z:1},n=1,a="#000"){if(!t.shapes)return console.warn(`Glyph ${t.id} has no shapes to draw`),!1;let o;return e.beginPath(),t.shapes.forEach(s=>{if(o=Ua(s,e,r),!o&&s.objType==="ComponentInstance"&&!Le().getItem(s.link)){console.warn(`>>> Component Instance has bad link: ${s.link} from ${t.id}`);const x=t.shapes.indexOf(s);x>-1&&(t.shapes.splice(x,1),console.warn(">>> Deleted the Instance"))}}),e.closePath(),e.fillStyle=a,e.globalAlpha=n,e.fill("nonzero"),e.globalAlpha=1,t.advanceWidth*r.dz}function Ua(t,e,r){return t.objType==="ComponentInstance"?vx(t,e,r):Ux(t,e,r)}function vx(t,e,r){const n=t.transformedGlyph;if(!n)return!1;let a=!1,o=!1;return n.shapes.forEach(s=>{a=Ua(s,e,r),o=o||!a}),!o}function Ux(t,e,r,n=!1){if(!(t!=null&&t.pathPoints)||t.pathPoints===!1||t.pathPoints.length<2)return!1;let a,o;const s=n?0:9,x=ut(ae(t.pathPoints[0].p.x,s),r),E=st(ae(t.pathPoints[0].p.y,s),r);let T,u,D,O,g,V;e.moveTo(x,E);for(let Y=0;Y<t.pathPoints.length;Y++)a=t.pathPoints[Y],o=t.pathPoints[t.getNextPointNum(Y)],!a.h2.use&&!o.h1.use?(g=ut(ae(o.p.x,s),r),V=st(ae(o.p.y,s),r),e.lineTo(g,V)):(T=ut(ae(a.h2.x,s),r),u=st(ae(a.h2.y,s),r),D=ut(ae(o.h1.x,s),r),O=st(ae(o.h1.y,s),r),g=ut(ae(o.p.x,s),r),V=st(ae(o.p.y,s),r),e.bezierCurveTo(T,u,D,O,g,V));return!0}function wa(t,e="",r=[],n=!1){let a=`current${t.objType}`;a==="currentControlPoint"&&(a=`currentPathPoint.${t.type}`);let o=[a].concat(r);e&&(e+=":&ensp;");let s=C({tag:"label",innerHTML:`${e}x${Ya()}y`}),x=C({tag:"div",className:"doubleInput"}),E=Gt(t,"x",o,"input-number"),T=Gt(t,"y",o,"input-number");return n&&(E.setAttribute("disabled",""),T.setAttribute("disabled","")),x.appendChild(E),x.appendChild(Wa()),x.appendChild(T),[s,x]}function co(t,e=!1){let r=[],n=`current${t.objType}`,a=Ue(`width${Ya()}height`),o=C({tag:"div",className:"doubleInput"}),s=Gt(t,"width",n,"input-number"),x=Gt(t,"height",n,"input-number");if(e&&(s.setAttribute("disabled",""),x.setAttribute("disabled","")),o.appendChild(s),o.appendChild(Wa()),o.appendChild(x),r.push(a),r.push(o),!e){let E=["top-left","baseline-left","bottom-left","top-right","baseline-right","bottom-right","middle-center"];E=ba;let T=Ue("transform origin",`With increases or decreases to width or height,
		the transform origin is the point that stays fixed.
		<br><br>
		This only takes effect when directly entering values
		into the width or height inputs.`),u=C({tag:"option-chooser",attributes:{"selected-id":t.transformOrigin,"selected-name":t.transformOrigin.replace("-"," ")}});E.forEach(g=>{let V=C({tag:"option",attributes:{"selection-id":g},innerHTML:`${bx(g)}${g.replace("-"," ")}`});V.addEventListener("click",()=>{t.transformOrigin=g,z().publish("editCanvasView",t)}),u.appendChild(V)});let D=Ue("lock aspect ratio",`
			When either the width or height is adjusted,
			the overall size will be kept proportional.
			<br><br>
			Maintaining aspect ratio will override value
			locks if need be.
		`),O=fn(t,"ratioLock",n);r.push(T),r.push(u),r.push(D),r.push(O)}return r}function Gt(t,e,r,n,a=[]){let o=Array.isArray(r)?r:[r],s=C({tag:n,className:`singleInput-${e}`,attributes:{"pubsub-topic":o[0]}}),x=n==="input"?t[e]:ae(t[e],3);s.setAttribute("value",x),t.isLockable&&(s.setAttribute("is-locked",t.isLocked(e)),s.addEventListener("lock",T=>{T.detail.isLocked?t.lock(e):t.unlock(e);const u=z();o.forEach(D=>u.publish(D,t))}));function E(T){if(t.isLockable&&t.isLocked(e))return;let u=T.target.value;const D=z();if(e==="leftSideBearing"){let O=D.view;D.view.dx-=(u-t.leftSideBearing)*O.dz,D.publish("editCanvasView",t)}if((t.objType==="Glyph"||t.objType==="VirtualGlyph"||t.objType==="Path")&&(e==="width"||e==="height")){let O={width:!1,height:!1};O.ratioLock=t.ratioLock,O.transformOrigin=t.transformOrigin,e==="width"?O.width=u:O.height=u,t.objType==="Path"?t.setShapeSize(O):t.setGlyphSize(O)}else t[e]=u;t.objType==="VirtualGlyph"?o.forEach(O=>D.publish(O,D.selectedItem)):t.objType==="VirtualShape"?o.forEach(O=>D.publish(O,D.selectedItem)):o.forEach(O=>D.publish(O,t))}return s.addEventListener("change",E),a&&a.forEach(T=>{s.addEventListener(T,E)}),z().subscribe({topic:o,subscriberID:`attributesPanel.${o[0]}.${e}`,callback:T=>{if(T&&(T[e]||T[e]===0)){let u;n==="input"?u=T[e]:u=ae(T[e],3),s.value=u,s.setAttribute("value",u)}}}),s}function fn(t,e,r){let n=C({tag:"input",attributes:{type:"checkbox"}});return t[e]&&n.setAttribute("checked",""),n.addEventListener("change",a=>{let o=a.target.checked;t[e]=!!o,r&&(z().publish(r,t),e==="use"&&(l0(t.type,!!o),t.parent.reconcileHandle(t.type)))}),r&&z().subscribe({topic:r,subscriberID:`attributesPanel.${r}.${e}`,callback:a=>{a[e]?(n.setAttribute("checked",""),e==="use"&&l0(t.type,!0)):(n.removeAttribute("checked"),e==="use"&&l0(t.type,!1))}}),n}function l0(t,e){let r=document.getElementById(`${t}InputGroup`);r&&(r.style.display=e?"grid":"none")}function Ue(t,e=!1,r=!1,n=!1){let a=C({content:t}),o=C({tag:"label"});if(r&&o.setAttribute("for",r),o.appendChild(a),e){let s=C({tag:"info-bubble",content:e});o.appendChild(s),o.classList.add("info")}return n&&o.setAttribute("class",n),o}function wr(){return C({tag:"div",className:"rowPad"})}function Ya(){return'<span class="dimSplit">&#x2044;</span>'}function Wa(){return C({className:"dimSplit",innerHTML:"&#x2044;"})}function tr(t,e,r,n=!1){let a=C({tag:"input",attributes:{type:"checkbox"}});return t[e]&&a.setAttribute("checked",""),n&&a.setAttribute("id",n),a.addEventListener("change",o=>{let s=o.target.checked;t[e]=!!s,r&&r(s)}),a}function P1(t){const e=z(),r=Le(),n=e.project.getItem(t);let a=C({className:"item-link__row",attributes:{"target-item-id":t}});return a.addEventListener("click",()=>{n.displayType==="Glyph"&&(e.nav.page="Characters"),n.displayType==="Component"&&(e.nav.page="Components"),n.displayType==="Ligature"&&(e.nav.page="Ligatures"),e.selectedItemID=t,e.navigate()}),a.appendChild(C({className:"item-link__thumbnail",attributes:{"target-item-id":t},innerHTML:r.makeItemThumbnail(n)})),a.appendChild(C({className:"item-link__title",innerHTML:`${(n==null?void 0:n.name)||"ERROR"}`})),a.appendChild(C({className:"item-link__subtitle",innerHTML:`${(n==null?void 0:n.displayType)||"ERROR"}&ensp;|&ensp;${t}`})),a}/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||function(){var t=function(){try{var r={},n=Object.defineProperty,a=n(r,r,r)&&n}catch{}return a}(),e=function(r){if(this==null)throw TypeError();var n=String(this),a=n.length,o=r?Number(r):0;if(o!=o&&(o=0),!(o<0||o>=a)){var s=n.charCodeAt(o),x;return s>=55296&&s<=56319&&a>o+1&&(x=n.charCodeAt(o+1),x>=56320&&x<=57343)?(s-55296)*1024+x-56320+65536:s}};t?t(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}();var To=0,b1=-3;function ma(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function wx(t,e){this.source=t,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new ma,this.dtree=new ma}var v1=new ma,U1=new ma,Io=new Uint8Array(30),uo=new Uint16Array(30),w1=new Uint8Array(30),Y1=new Uint16Array(30),Yx=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),eA=new ma,Or=new Uint8Array(320);function W1(t,e,r,n){var a,o;for(a=0;a<r;++a)t[a]=0;for(a=0;a<30-r;++a)t[a+r]=a/r|0;for(o=n,a=0;a<30;++a)e[a]=o,o+=1<<t[a]}function Wx(t,e){var r;for(r=0;r<7;++r)t.table[r]=0;for(t.table[7]=24,t.table[8]=152,t.table[9]=112,r=0;r<24;++r)t.trans[r]=256+r;for(r=0;r<144;++r)t.trans[24+r]=r;for(r=0;r<8;++r)t.trans[168+r]=280+r;for(r=0;r<112;++r)t.trans[176+r]=144+r;for(r=0;r<5;++r)e.table[r]=0;for(e.table[5]=32,r=0;r<32;++r)e.trans[r]=r}var tA=new Uint16Array(16);function x0(t,e,r,n){var a,o;for(a=0;a<16;++a)t.table[a]=0;for(a=0;a<n;++a)t.table[e[r+a]]++;for(t.table[0]=0,o=0,a=0;a<16;++a)tA[a]=o,o+=t.table[a];for(a=0;a<n;++a)e[r+a]&&(t.trans[tA[e[r+a]]++]=a)}function kx(t){t.bitcount--||(t.tag=t.source[t.sourceIndex++],t.bitcount=7);var e=t.tag&1;return t.tag>>>=1,e}function Gr(t,e,r){if(!e)return r;for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var n=t.tag&65535>>>16-e;return t.tag>>>=e,t.bitcount-=e,n+r}function b0(t,e){for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var r=0,n=0,a=0,o=t.tag;do n=2*n+(o&1),o>>>=1,++a,r+=e.table[a],n-=e.table[a];while(n>=0);return t.tag=o,t.bitcount-=a,e.trans[r+n]}function Kx(t,e,r){var n,a,o,s,x,E;for(n=Gr(t,5,257),a=Gr(t,5,1),o=Gr(t,4,4),s=0;s<19;++s)Or[s]=0;for(s=0;s<o;++s){var T=Gr(t,3,0);Or[Yx[s]]=T}for(x0(eA,Or,0,19),x=0;x<n+a;){var u=b0(t,eA);switch(u){case 16:var D=Or[x-1];for(E=Gr(t,2,3);E;--E)Or[x++]=D;break;case 17:for(E=Gr(t,3,3);E;--E)Or[x++]=0;break;case 18:for(E=Gr(t,7,11);E;--E)Or[x++]=0;break;default:Or[x++]=u;break}}x0(e,Or,0,n),x0(r,Or,n,a)}function rA(t,e,r){for(;;){var n=b0(t,e);if(n===256)return To;if(n<256)t.dest[t.destLen++]=n;else{var a,o,s,x;for(n-=257,a=Gr(t,Io[n],uo[n]),o=b0(t,r),s=t.destLen-Gr(t,w1[o],Y1[o]),x=s;x<s+a;++x)t.dest[t.destLen++]=t.dest[x]}}}function Vx(t){for(var e,r,n;t.bitcount>8;)t.sourceIndex--,t.bitcount-=8;if(e=t.source[t.sourceIndex+1],e=256*e+t.source[t.sourceIndex],r=t.source[t.sourceIndex+3],r=256*r+t.source[t.sourceIndex+2],e!==(~r&65535))return b1;for(t.sourceIndex+=4,n=e;n;--n)t.dest[t.destLen++]=t.source[t.sourceIndex++];return t.bitcount=0,To}function _x(t,e){var r=new wx(t,e),n,a,o;do{switch(n=kx(r),a=Gr(r,2,0),a){case 0:o=Vx(r);break;case 1:o=rA(r,v1,U1);break;case 2:Kx(r,r.ltree,r.dtree),o=rA(r,r.ltree,r.dtree);break;default:o=b1}if(o!==To)throw new Error("Data error")}while(!n);return r.destLen<r.dest.length?typeof r.dest.slice=="function"?r.dest.slice(0,r.destLen):r.dest.subarray(0,r.destLen):r.dest}Wx(v1,U1);W1(Io,uo,4,3);W1(w1,Y1,2,1);Io[28]=0;uo[28]=258;var zx=_x;function kn(t,e,r,n,a){return Math.pow(1-a,3)*t+3*Math.pow(1-a,2)*a*e+3*(1-a)*Math.pow(a,2)*r+Math.pow(a,3)*n}function jr(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}jr.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};jr.prototype.addPoint=function(t,e){typeof t=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};jr.prototype.addX=function(t){this.addPoint(t,null)};jr.prototype.addY=function(t){this.addPoint(null,t)};jr.prototype.addBezier=function(t,e,r,n,a,o,s,x){var E=[t,e],T=[r,n],u=[a,o],D=[s,x];this.addPoint(t,e),this.addPoint(s,x);for(var O=0;O<=1;O++){var g=6*E[O]-12*T[O]+6*u[O],V=-3*E[O]+9*T[O]-9*u[O]+3*D[O],Y=3*T[O]-3*E[O];if(V===0){if(g===0)continue;var J=-Y/g;0<J&&J<1&&(O===0&&this.addX(kn(E[O],T[O],u[O],D[O],J)),O===1&&this.addY(kn(E[O],T[O],u[O],D[O],J)));continue}var K=Math.pow(g,2)-4*Y*V;if(!(K<0)){var re=(-g+Math.sqrt(K))/(2*V);0<re&&re<1&&(O===0&&this.addX(kn(E[O],T[O],u[O],D[O],re)),O===1&&this.addY(kn(E[O],T[O],u[O],D[O],re)));var Q=(-g-Math.sqrt(K))/(2*V);0<Q&&Q<1&&(O===0&&this.addX(kn(E[O],T[O],u[O],D[O],Q)),O===1&&this.addY(kn(E[O],T[O],u[O],D[O],Q)))}}};jr.prototype.addQuad=function(t,e,r,n,a,o){var s=t+.6666666666666666*(r-t),x=e+2/3*(n-e),E=s+1/3*(a-t),T=x+1/3*(o-e);this.addBezier(t,e,s,x,E,T,a,o)};function Ft(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}Ft.prototype.moveTo=function(t,e){this.commands.push({type:"M",x:t,y:e})};Ft.prototype.lineTo=function(t,e){this.commands.push({type:"L",x:t,y:e})};Ft.prototype.curveTo=Ft.prototype.bezierCurveTo=function(t,e,r,n,a,o){this.commands.push({type:"C",x1:t,y1:e,x2:r,y2:n,x:a,y:o})};Ft.prototype.quadTo=Ft.prototype.quadraticCurveTo=function(t,e,r,n){this.commands.push({type:"Q",x1:t,y1:e,x:r,y:n})};Ft.prototype.close=Ft.prototype.closePath=function(){this.commands.push({type:"Z"})};Ft.prototype.extend=function(t){if(t.commands)t=t.commands;else if(t instanceof jr){var e=t;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,t)};Ft.prototype.getBoundingBox=function(){for(var t=new jr,e=0,r=0,n=0,a=0,o=0;o<this.commands.length;o++){var s=this.commands[o];switch(s.type){case"M":t.addPoint(s.x,s.y),e=n=s.x,r=a=s.y;break;case"L":t.addPoint(s.x,s.y),n=s.x,a=s.y;break;case"Q":t.addQuad(n,a,s.x1,s.y1,s.x,s.y),n=s.x,a=s.y;break;case"C":t.addBezier(n,a,s.x1,s.y1,s.x2,s.y2,s.x,s.y),n=s.x,a=s.y;break;case"Z":n=e,a=r;break;default:throw new Error("Unexpected path command "+s.type)}}return t.isEmpty()&&t.addPoint(0,0),t};Ft.prototype.draw=function(t){t.beginPath();for(var e=0;e<this.commands.length;e+=1){var r=this.commands[e];r.type==="M"?t.moveTo(r.x,r.y):r.type==="L"?t.lineTo(r.x,r.y):r.type==="C"?t.bezierCurveTo(r.x1,r.y1,r.x2,r.y2,r.x,r.y):r.type==="Q"?t.quadraticCurveTo(r.x1,r.y1,r.x,r.y):r.type==="Z"&&t.closePath()}this.fill&&(t.fillStyle=this.fill,t.fill()),this.stroke&&(t.strokeStyle=this.stroke,t.lineWidth=this.strokeWidth,t.stroke())};Ft.prototype.toPathData=function(t){t=t!==void 0?t:2;function e(s){return Math.round(s)===s?""+Math.round(s):s.toFixed(t)}function r(){for(var s=arguments,x="",E=0;E<arguments.length;E+=1){var T=s[E];T>=0&&E>0&&(x+=" "),x+=e(T)}return x}for(var n="",a=0;a<this.commands.length;a+=1){var o=this.commands[a];o.type==="M"?n+="M"+r(o.x,o.y):o.type==="L"?n+="L"+r(o.x,o.y):o.type==="C"?n+="C"+r(o.x1,o.y1,o.x2,o.y2,o.x,o.y):o.type==="Q"?n+="Q"+r(o.x1,o.y1,o.x,o.y):o.type==="Z"&&(n+="Z")}return n};Ft.prototype.toSVG=function(t){var e='<path d="';return e+=this.toPathData(t),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};Ft.prototype.toDOMElement=function(t){var e=this.toPathData(t),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",e),r};function k1(t){throw new Error(t)}function nA(t,e){t||k1(e)}var Fe={fail:k1,argument:nA,assert:nA},aA=32768,iA=2147483648,ea={},pe={},Ge={};function mr(t){return function(){return t}}pe.BYTE=function(t){return Fe.argument(t>=0&&t<=255,"Byte value should be between 0 and 255."),[t]};Ge.BYTE=mr(1);pe.CHAR=function(t){return[t.charCodeAt(0)]};Ge.CHAR=mr(1);pe.CHARARRAY=function(t){typeof t>"u"&&(t="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],r=0;r<t.length;r+=1)e[r]=t.charCodeAt(r);return e};Ge.CHARARRAY=function(t){return typeof t>"u"?0:t.length};pe.USHORT=function(t){return[t>>8&255,t&255]};Ge.USHORT=mr(2);pe.SHORT=function(t){return t>=aA&&(t=-(2*aA-t)),[t>>8&255,t&255]};Ge.SHORT=mr(2);pe.UINT24=function(t){return[t>>16&255,t>>8&255,t&255]};Ge.UINT24=mr(3);pe.ULONG=function(t){return[t>>24&255,t>>16&255,t>>8&255,t&255]};Ge.ULONG=mr(4);pe.LONG=function(t){return t>=iA&&(t=-(2*iA-t)),[t>>24&255,t>>16&255,t>>8&255,t&255]};Ge.LONG=mr(4);pe.FIXED=pe.ULONG;Ge.FIXED=Ge.ULONG;pe.FWORD=pe.SHORT;Ge.FWORD=Ge.SHORT;pe.UFWORD=pe.USHORT;Ge.UFWORD=Ge.USHORT;pe.LONGDATETIME=function(t){return[0,0,0,0,t>>24&255,t>>16&255,t>>8&255,t&255]};Ge.LONGDATETIME=mr(8);pe.TAG=function(t){return Fe.argument(t.length===4,"Tag should be exactly 4 ASCII characters."),[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]};Ge.TAG=mr(4);pe.Card8=pe.BYTE;Ge.Card8=Ge.BYTE;pe.Card16=pe.USHORT;Ge.Card16=Ge.USHORT;pe.OffSize=pe.BYTE;Ge.OffSize=Ge.BYTE;pe.SID=pe.USHORT;Ge.SID=Ge.USHORT;pe.NUMBER=function(t){return t>=-107&&t<=107?[t+139]:t>=108&&t<=1131?(t=t-108,[(t>>8)+247,t&255]):t>=-1131&&t<=-108?(t=-t-108,[(t>>8)+251,t&255]):t>=-32768&&t<=32767?pe.NUMBER16(t):pe.NUMBER32(t)};Ge.NUMBER=function(t){return pe.NUMBER(t).length};pe.NUMBER16=function(t){return[28,t>>8&255,t&255]};Ge.NUMBER16=mr(3);pe.NUMBER32=function(t){return[29,t>>24&255,t>>16&255,t>>8&255,t&255]};Ge.NUMBER32=mr(5);pe.REAL=function(t){var e=t.toString(),r=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(r){var n=parseFloat("1e"+((r[2]?+r[2]:0)+r[1].length));e=(Math.round(t*n)/n).toString()}for(var a="",o=0,s=e.length;o<s;o+=1){var x=e[o];x==="e"?a+=e[++o]==="-"?"c":"b":x==="."?a+="a":x==="-"?a+="e":a+=x}a+=a.length&1?"f":"ff";for(var E=[30],T=0,u=a.length;T<u;T+=2)E.push(parseInt(a.substr(T,2),16));return E};Ge.REAL=function(t){return pe.REAL(t).length};pe.NAME=pe.CHARARRAY;Ge.NAME=Ge.CHARARRAY;pe.STRING=pe.CHARARRAY;Ge.STRING=Ge.CHARARRAY;ea.UTF8=function(t,e,r){for(var n=[],a=r,o=0;o<a;o++,e+=1)n[o]=t.getUint8(e);return String.fromCharCode.apply(null,n)};ea.UTF16=function(t,e,r){for(var n=[],a=r/2,o=0;o<a;o++,e+=2)n[o]=t.getUint16(e);return String.fromCharCode.apply(null,n)};pe.UTF16=function(t){for(var e=[],r=0;r<t.length;r+=1){var n=t.charCodeAt(r);e[e.length]=n>>8&255,e[e.length]=n&255}return e};Ge.UTF16=function(t){return t.length*2};var v0={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};ea.MACSTRING=function(t,e,r,n){var a=v0[n];if(a!==void 0){for(var o="",s=0;s<r;s++){var x=t.getUint8(e+s);x<=127?o+=String.fromCharCode(x):o+=a[x&127]}return o}};var ii=typeof WeakMap=="function"&&new WeakMap,oi,Jx=function(t){if(!oi){oi={};for(var e in v0)oi[e]=new String(e)}var r=oi[t];if(r!==void 0){if(ii){var n=ii.get(r);if(n!==void 0)return n}var a=v0[t];if(a!==void 0){for(var o={},s=0;s<a.length;s++)o[a.charCodeAt(s)]=s+128;return ii&&ii.set(r,o),o}}};pe.MACSTRING=function(t,e){var r=Jx(e);if(r!==void 0){for(var n=[],a=0;a<t.length;a++){var o=t.charCodeAt(a);if(o>=128&&(o=r[o],o===void 0))return;n[a]=o}return n}};Ge.MACSTRING=function(t,e){var r=pe.MACSTRING(t,e);return r!==void 0?r.length:0};function U0(t){return t>=-128&&t<=127}function Zx(t,e,r){for(var n=0,a=t.length;e<a&&n<64&&t[e]===0;)++e,++n;return r.push(128|n-1),e}function Xx(t,e,r){for(var n=0,a=t.length,o=e;o<a&&n<64;){var s=t[o];if(!U0(s)||s===0&&o+1<a&&t[o+1]===0)break;++o,++n}r.push(n-1);for(var x=e;x<o;++x)r.push(t[x]+256&255);return o}function jx(t,e,r){for(var n=0,a=t.length,o=e;o<a&&n<64;){var s=t[o];if(s===0||U0(s)&&o+1<a&&U0(t[o+1]))break;++o,++n}r.push(64|n-1);for(var x=e;x<o;++x){var E=t[x];r.push(E+65536>>8&255,E+256&255)}return o}pe.VARDELTAS=function(t){for(var e=0,r=[];e<t.length;){var n=t[e];n===0?e=Zx(t,e,r):n>=-128&&n<=127?e=Xx(t,e,r):e=jx(t,e,r)}return r};pe.INDEX=function(t){for(var e=1,r=[e],n=[],a=0;a<t.length;a+=1){var o=pe.OBJECT(t[a]);Array.prototype.push.apply(n,o),e+=o.length,r.push(e)}if(n.length===0)return[0,0];for(var s=[],x=1+Math.floor(Math.log(e)/Math.log(2))/8|0,E=[void 0,pe.BYTE,pe.USHORT,pe.UINT24,pe.ULONG][x],T=0;T<r.length;T+=1){var u=E(r[T]);Array.prototype.push.apply(s,u)}return Array.prototype.concat(pe.Card16(t.length),pe.OffSize(x),s,n)};Ge.INDEX=function(t){return pe.INDEX(t).length};pe.DICT=function(t){for(var e=[],r=Object.keys(t),n=r.length,a=0;a<n;a+=1){var o=parseInt(r[a],0),s=t[o];e=e.concat(pe.OPERAND(s.value,s.type)),e=e.concat(pe.OPERATOR(o))}return e};Ge.DICT=function(t){return pe.DICT(t).length};pe.OPERATOR=function(t){return t<1200?[t]:[12,t-1200]};pe.OPERAND=function(t,e){var r=[];if(Array.isArray(e))for(var n=0;n<e.length;n+=1)Fe.argument(t.length===e.length,"Not enough arguments given for type"+e),r=r.concat(pe.OPERAND(t[n],e[n]));else if(e==="SID")r=r.concat(pe.NUMBER(t));else if(e==="offset")r=r.concat(pe.NUMBER32(t));else if(e==="number")r=r.concat(pe.NUMBER(t));else if(e==="real")r=r.concat(pe.REAL(t));else throw new Error("Unknown operand type "+e);return r};pe.OP=pe.BYTE;Ge.OP=Ge.BYTE;var Ai=typeof WeakMap=="function"&&new WeakMap;pe.CHARSTRING=function(t){if(Ai){var e=Ai.get(t);if(e!==void 0)return e}for(var r=[],n=t.length,a=0;a<n;a+=1){var o=t[a];r=r.concat(pe[o.type](o.value))}return Ai&&Ai.set(t,r),r};Ge.CHARSTRING=function(t){return pe.CHARSTRING(t).length};pe.OBJECT=function(t){var e=pe[t.type];return Fe.argument(e!==void 0,"No encoding function for type "+t.type),e(t.value)};Ge.OBJECT=function(t){var e=Ge[t.type];return Fe.argument(e!==void 0,"No sizeOf function for type "+t.type),e(t.value)};pe.TABLE=function(t){for(var e=[],r=t.fields.length,n=[],a=[],o=0;o<r;o+=1){var s=t.fields[o],x=pe[s.type];Fe.argument(x!==void 0,"No encoding function for field type "+s.type+" ("+s.name+")");var E=t[s.name];E===void 0&&(E=s.value);var T=x(E);s.type==="TABLE"?(a.push(e.length),e=e.concat([0,0]),n.push(T)):e=e.concat(T)}for(var u=0;u<n.length;u+=1){var D=a[u],O=e.length;Fe.argument(O<65536,"Table "+t.tableName+" too big."),e[D]=O>>8,e[D+1]=O&255,e=e.concat(n[u])}return e};Ge.TABLE=function(t){for(var e=0,r=t.fields.length,n=0;n<r;n+=1){var a=t.fields[n],o=Ge[a.type];Fe.argument(o!==void 0,"No sizeOf function for field type "+a.type+" ("+a.name+")");var s=t[a.name];s===void 0&&(s=a.value),e+=o(s),a.type==="TABLE"&&(e+=2)}return e};pe.RECORD=pe.TABLE;Ge.RECORD=Ge.TABLE;pe.LITERAL=function(t){return t};Ge.LITERAL=function(t){return t.length};function Wt(t,e,r){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var n=0;n<e.length;n+=1){var a=e[n];this[a.name]=a.value}if(this.tableName=t,this.fields=e,r)for(var o=Object.keys(r),s=0;s<o.length;s+=1){var x=o[s],E=r[x];this[x]!==void 0&&(this[x]=E)}}Wt.prototype.encode=function(){return pe.TABLE(this)};Wt.prototype.sizeOf=function(){return Ge.TABLE(this)};function Na(t,e,r){r===void 0&&(r=e.length);var n=new Array(e.length+1);n[0]={name:t+"Count",type:"USHORT",value:r};for(var a=0;a<e.length;a++)n[a+1]={name:t+a,type:"USHORT",value:e[a]};return n}function w0(t,e,r){var n=e.length,a=new Array(n+1);a[0]={name:t+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a[o+1]={name:t+o,type:"TABLE",value:r(e[o],o)};return a}function Da(t,e,r){var n=e.length,a=[];a[0]={name:t+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a=a.concat(r(e[o],o));return a}function mi(t){t.format===1?Wt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(Na("glyph",t.glyphs))):t.format===2?Wt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(Da("rangeRecord",t.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):Fe.assert(!1,"Coverage format must be 1 or 2.")}mi.prototype=Object.create(Wt.prototype);mi.prototype.constructor=mi;function Ni(t){Wt.call(this,"scriptListTable",Da("scriptRecord",t,function(e,r){var n=e.script,a=n.defaultLangSys;return Fe.assert(!!a,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+r,type:"TAG",value:e.tag},{name:"script"+r,type:"TABLE",value:new Wt("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new Wt("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:a.reqFeatureIndex}].concat(Na("featureIndex",a.featureIndexes)))}].concat(Da("langSys",n.langSysRecords,function(o,s){var x=o.langSys;return[{name:"langSysTag"+s,type:"TAG",value:o.tag},{name:"langSys"+s,type:"TABLE",value:new Wt("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:x.reqFeatureIndex}].concat(Na("featureIndex",x.featureIndexes)))}]})))}]}))}Ni.prototype=Object.create(Wt.prototype);Ni.prototype.constructor=Ni;function Di(t){Wt.call(this,"featureListTable",Da("featureRecord",t,function(e,r){var n=e.feature;return[{name:"featureTag"+r,type:"TAG",value:e.tag},{name:"feature"+r,type:"TABLE",value:new Wt("featureTable",[{name:"featureParams",type:"USHORT",value:n.featureParams}].concat(Na("lookupListIndex",n.lookupListIndexes)))}]}))}Di.prototype=Object.create(Wt.prototype);Di.prototype.constructor=Di;function fi(t,e){Wt.call(this,"lookupListTable",w0("lookup",t,function(r){var n=e[r.lookupType];return Fe.assert(!!n,"Unable to write GSUB lookup type "+r.lookupType+" tables."),new Wt("lookupTable",[{name:"lookupType",type:"USHORT",value:r.lookupType},{name:"lookupFlag",type:"USHORT",value:r.lookupFlag}].concat(w0("subtable",r.subtables,n)))}))}fi.prototype=Object.create(Wt.prototype);fi.prototype.constructor=fi;var Ce={Table:Wt,Record:Wt,Coverage:mi,ScriptList:Ni,FeatureList:Di,LookupList:fi,ushortList:Na,tableList:w0,recordList:Da};function oA(t,e){return t.getUint8(e)}function Oi(t,e){return t.getUint16(e,!1)}function Qx(t,e){return t.getInt16(e,!1)}function po(t,e){return t.getUint32(e,!1)}function K1(t,e){var r=t.getInt16(e,!1),n=t.getUint16(e+2,!1);return r+n/65535}function qx(t,e){for(var r="",n=e;n<e+4;n+=1)r+=String.fromCharCode(t.getInt8(n));return r}function $x(t,e,r){for(var n=0,a=0;a<r;a+=1)n<<=8,n+=t.getUint8(e+a);return n}function eE(t,e,r){for(var n=[],a=e;a<r;a+=1)n.push(t.getUint8(a));return n}function tE(t){for(var e="",r=0;r<t.length;r+=1)e+=String.fromCharCode(t[r]);return e}var rE={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function ee(t,e){this.data=t,this.offset=e,this.relativeOffset=0}ee.prototype.parseByte=function(){var t=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};ee.prototype.parseChar=function(){var t=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};ee.prototype.parseCard8=ee.prototype.parseByte;ee.prototype.parseUShort=function(){var t=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};ee.prototype.parseCard16=ee.prototype.parseUShort;ee.prototype.parseSID=ee.prototype.parseUShort;ee.prototype.parseOffset16=ee.prototype.parseUShort;ee.prototype.parseShort=function(){var t=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};ee.prototype.parseF2Dot14=function(){var t=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,t};ee.prototype.parseULong=function(){var t=po(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};ee.prototype.parseOffset32=ee.prototype.parseULong;ee.prototype.parseFixed=function(){var t=K1(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};ee.prototype.parseString=function(t){var e=this.data,r=this.offset+this.relativeOffset,n="";this.relativeOffset+=t;for(var a=0;a<t;a++)n+=String.fromCharCode(e.getUint8(r+a));return n};ee.prototype.parseTag=function(){return this.parseString(4)};ee.prototype.parseLongDateTime=function(){var t=po(this.data,this.offset+this.relativeOffset+4);return t-=2082844800,this.relativeOffset+=8,t};ee.prototype.parseVersion=function(t){var e=Oi(this.data,this.offset+this.relativeOffset),r=Oi(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,t===void 0&&(t=4096),e+r/t/10};ee.prototype.skip=function(t,e){e===void 0&&(e=1),this.relativeOffset+=rE[t]*e};ee.prototype.parseULongList=function(t){t===void 0&&(t=this.parseULong());for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint32(n),n+=4;return this.relativeOffset+=t*4,e};ee.prototype.parseOffset16List=ee.prototype.parseUShortList=function(t){t===void 0&&(t=this.parseUShort());for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint16(n),n+=2;return this.relativeOffset+=t*2,e};ee.prototype.parseShortList=function(t){for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getInt16(n),n+=2;return this.relativeOffset+=t*2,e};ee.prototype.parseByteList=function(t){for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint8(n++);return this.relativeOffset+=t,e};ee.prototype.parseList=function(t,e){e||(e=t,t=this.parseUShort());for(var r=new Array(t),n=0;n<t;n++)r[n]=e.call(this);return r};ee.prototype.parseList32=function(t,e){e||(e=t,t=this.parseULong());for(var r=new Array(t),n=0;n<t;n++)r[n]=e.call(this);return r};ee.prototype.parseRecordList=function(t,e){e||(e=t,t=this.parseUShort());for(var r=new Array(t),n=Object.keys(e),a=0;a<t;a++){for(var o={},s=0;s<n.length;s++){var x=n[s],E=e[x];o[x]=E.call(this)}r[a]=o}return r};ee.prototype.parseRecordList32=function(t,e){e||(e=t,t=this.parseULong());for(var r=new Array(t),n=Object.keys(e),a=0;a<t;a++){for(var o={},s=0;s<n.length;s++){var x=n[s],E=e[x];o[x]=E.call(this)}r[a]=o}return r};ee.prototype.parseStruct=function(t){if(typeof t=="function")return t.call(this);for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var a=e[n],o=t[a];r[a]=o.call(this)}return r};ee.prototype.parseValueRecord=function(t){if(t===void 0&&(t=this.parseUShort()),t!==0){var e={};return t&1&&(e.xPlacement=this.parseShort()),t&2&&(e.yPlacement=this.parseShort()),t&4&&(e.xAdvance=this.parseShort()),t&8&&(e.yAdvance=this.parseShort()),t&16&&(e.xPlaDevice=void 0,this.parseShort()),t&32&&(e.yPlaDevice=void 0,this.parseShort()),t&64&&(e.xAdvDevice=void 0,this.parseShort()),t&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};ee.prototype.parseValueRecordList=function(){for(var t=this.parseUShort(),e=this.parseUShort(),r=new Array(e),n=0;n<e;n++)r[n]=this.parseValueRecord(t);return r};ee.prototype.parsePointer=function(t){var e=this.parseOffset16();if(e>0)return new ee(this.data,this.offset+e).parseStruct(t)};ee.prototype.parsePointer32=function(t){var e=this.parseOffset32();if(e>0)return new ee(this.data,this.offset+e).parseStruct(t)};ee.prototype.parseListOfLists=function(t){for(var e=this.parseOffset16List(),r=e.length,n=this.relativeOffset,a=new Array(r),o=0;o<r;o++){var s=e[o];if(s===0){a[o]=void 0;continue}if(this.relativeOffset=s,t){for(var x=this.parseOffset16List(),E=new Array(x.length),T=0;T<x.length;T++)this.relativeOffset=s+x[T],E[T]=t.call(this);a[o]=E}else a[o]=this.parseUShortList()}return this.relativeOffset=n,a};ee.prototype.parseCoverage=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort(),r=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(r)};if(e===2){for(var n=new Array(r),a=0;a<r;a++)n[a]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:n}}throw new Error("0x"+t.toString(16)+": Coverage format must be 1 or 2.")};ee.prototype.parseClassDef=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:ee.uShort,end:ee.uShort,classId:ee.uShort})};throw new Error("0x"+t.toString(16)+": ClassDef format must be 1 or 2.")};ee.list=function(t,e){return function(){return this.parseList(t,e)}};ee.list32=function(t,e){return function(){return this.parseList32(t,e)}};ee.recordList=function(t,e){return function(){return this.parseRecordList(t,e)}};ee.recordList32=function(t,e){return function(){return this.parseRecordList32(t,e)}};ee.pointer=function(t){return function(){return this.parsePointer(t)}};ee.pointer32=function(t){return function(){return this.parsePointer32(t)}};ee.tag=ee.prototype.parseTag;ee.byte=ee.prototype.parseByte;ee.uShort=ee.offset16=ee.prototype.parseUShort;ee.uShortList=ee.prototype.parseUShortList;ee.uLong=ee.offset32=ee.prototype.parseULong;ee.uLongList=ee.prototype.parseULongList;ee.struct=ee.prototype.parseStruct;ee.coverage=ee.prototype.parseCoverage;ee.classDef=ee.prototype.parseClassDef;var AA={reserved:ee.uShort,reqFeatureIndex:ee.uShort,featureIndexes:ee.uShortList};ee.prototype.parseScriptList=function(){return this.parsePointer(ee.recordList({tag:ee.tag,script:ee.pointer({defaultLangSys:ee.pointer(AA),langSysRecords:ee.recordList({tag:ee.tag,langSys:ee.pointer(AA)})})}))||[]};ee.prototype.parseFeatureList=function(){return this.parsePointer(ee.recordList({tag:ee.tag,feature:ee.pointer({featureParams:ee.offset16,lookupListIndexes:ee.uShortList})}))||[]};ee.prototype.parseLookupList=function(t){return this.parsePointer(ee.list(ee.pointer(function(){var e=this.parseUShort();Fe.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var r=this.parseUShort(),n=r&16;return{lookupType:e,lookupFlag:r,subtables:this.parseList(ee.pointer(t[e])),markFilteringSet:n?this.parseUShort():void 0}})))||[]};ee.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var t=this.parseUShort(),e=this.parseUShort();Fe.argument(t===1&&e<1,"GPOS/GSUB feature variations table unknown.");var r=this.parseRecordList32({conditionSetOffset:ee.offset32,featureTableSubstitutionOffset:ee.offset32});return r})||[]};var Re={getByte:oA,getCard8:oA,getUShort:Oi,getCard16:Oi,getShort:Qx,getULong:po,getFixed:K1,getTag:qx,getOffset:$x,getBytes:eE,bytesToString:tE,Parser:ee};function nE(t,e){e.parseUShort(),t.length=e.parseULong(),t.language=e.parseULong();var r;t.groupCount=r=e.parseULong(),t.glyphIndexMap={};for(var n=0;n<r;n+=1)for(var a=e.parseULong(),o=e.parseULong(),s=e.parseULong(),x=a;x<=o;x+=1)t.glyphIndexMap[x]=s,s++}function aE(t,e,r,n,a){t.length=e.parseUShort(),t.language=e.parseUShort();var o;t.segCount=o=e.parseUShort()>>1,e.skip("uShort",3),t.glyphIndexMap={};for(var s=new Re.Parser(r,n+a+14),x=new Re.Parser(r,n+a+16+o*2),E=new Re.Parser(r,n+a+16+o*4),T=new Re.Parser(r,n+a+16+o*6),u=n+a+16+o*8,D=0;D<o-1;D+=1)for(var O=void 0,g=s.parseUShort(),V=x.parseUShort(),Y=E.parseShort(),J=T.parseUShort(),K=V;K<=g;K+=1)J!==0?(u=T.offset+T.relativeOffset-2,u+=J,u+=(K-V)*2,O=Re.getUShort(r,u),O!==0&&(O=O+Y&65535)):O=K+Y&65535,t.glyphIndexMap[K]=O}function iE(t,e){var r={};r.version=Re.getUShort(t,e),Fe.argument(r.version===0,"cmap table version should be 0."),r.numTables=Re.getUShort(t,e+2);for(var n=-1,a=r.numTables-1;a>=0;a-=1){var o=Re.getUShort(t,e+4+a*8),s=Re.getUShort(t,e+4+a*8+2);if(o===3&&(s===0||s===1||s===10)||o===0&&(s===0||s===1||s===2||s===3||s===4)){n=Re.getULong(t,e+4+a*8+4);break}}if(n===-1)throw new Error("No valid cmap sub-tables found.");var x=new Re.Parser(t,e+n);if(r.format=x.parseUShort(),r.format===12)nE(r,x);else if(r.format===4)aE(r,x,t,e,n);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+r.format+").");return r}function oE(t,e,r){t.segments.push({end:e,start:e,delta:-(e-r),offset:0,glyphIndex:r})}function AE(t){t.segments.push({end:65535,start:65535,delta:1,offset:0})}function sE(t){var e=!0,r;for(r=t.length-1;r>0;r-=1){var n=t.get(r);if(n.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var a=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(a=a.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),a=a.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var o=new Ce.Table("cmap",a);for(o.segments=[],r=0;r<t.length;r+=1){for(var s=t.get(r),x=0;x<s.unicodes.length;x+=1)oE(o,s.unicodes[x],r);o.segments=o.segments.sort(function(re,Q){return re.start-Q.start})}AE(o);var E=o.segments.length,T=0,u=[],D=[],O=[],g=[],V=[],Y=[];for(r=0;r<E;r+=1){var J=o.segments[r];J.end<=65535&&J.start<=65535?(u=u.concat({name:"end_"+r,type:"USHORT",value:J.end}),D=D.concat({name:"start_"+r,type:"USHORT",value:J.start}),O=O.concat({name:"idDelta_"+r,type:"SHORT",value:J.delta}),g=g.concat({name:"idRangeOffset_"+r,type:"USHORT",value:J.offset}),J.glyphId!==void 0&&(V=V.concat({name:"glyph_"+r,type:"USHORT",value:J.glyphId}))):T+=1,!e&&J.glyphIndex!==void 0&&(Y=Y.concat({name:"cmap12Start_"+r,type:"ULONG",value:J.start}),Y=Y.concat({name:"cmap12End_"+r,type:"ULONG",value:J.end}),Y=Y.concat({name:"cmap12Glyph_"+r,type:"ULONG",value:J.glyphIndex}))}if(o.segCountX2=(E-T)*2,o.searchRange=Math.pow(2,Math.floor(Math.log(E-T)/Math.log(2)))*2,o.entrySelector=Math.log(o.searchRange/2)/Math.log(2),o.rangeShift=o.segCountX2-o.searchRange,o.fields=o.fields.concat(u),o.fields.push({name:"reservedPad",type:"USHORT",value:0}),o.fields=o.fields.concat(D),o.fields=o.fields.concat(O),o.fields=o.fields.concat(g),o.fields=o.fields.concat(V),o.cmap4Length=14+u.length*2+2+D.length*2+O.length*2+g.length*2+V.length*2,!e){var K=16+Y.length*4;o.cmap12Offset=12+2*2+4+o.cmap4Length,o.fields=o.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:K},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:Y.length/3}]),o.fields=o.fields.concat(Y)}return o}var V1={parse:iE,make:sE},Ii=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],lE=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],xE=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],mn=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function _1(t){this.font=t}_1.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),r=this.font.glyphs;if(r){for(var n=0;n<r.length;n+=1)for(var a=r.get(n),o=0;o<a.unicodes.length;o+=1)if(a.unicodes[o]===e)return n}return null};function z1(t){this.cmap=t}z1.prototype.charToGlyphIndex=function(t){return this.cmap.glyphIndexMap[t.codePointAt(0)]||0};function Bi(t,e){this.encoding=t,this.charset=e}Bi.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),r=this.encoding[e];return this.charset.indexOf(r)};function So(t){switch(t.version){case 1:this.names=mn.slice();break;case 2:this.names=new Array(t.numberOfGlyphs);for(var e=0;e<t.numberOfGlyphs;e++)t.glyphNameIndex[e]<mn.length?this.names[e]=mn[t.glyphNameIndex[e]]:this.names[e]=t.names[t.glyphNameIndex[e]-mn.length];break;case 2.5:this.names=new Array(t.numberOfGlyphs);for(var r=0;r<t.numberOfGlyphs;r++)this.names[r]=mn[r+t.glyphNameIndex[r]];break;case 3:this.names=[];break;default:this.names=[];break}}So.prototype.nameToGlyphIndex=function(t){return this.names.indexOf(t)};So.prototype.glyphIndexToName=function(t){return this.names[t]};function EE(t){for(var e,r=t.tables.cmap.glyphIndexMap,n=Object.keys(r),a=0;a<n.length;a+=1){var o=n[a],s=r[o];e=t.glyphs.get(s),e.addUnicode(parseInt(o))}for(var x=0;x<t.glyphs.length;x+=1)e=t.glyphs.get(x),t.cffEncoding?t.isCIDFont?e.name="gid"+x:e.name=t.cffEncoding.charset[x]:t.glyphNames.names&&(e.name=t.glyphNames.glyphIndexToName(x))}function LE(t){t._IndexToUnicodeMap={};for(var e=t.tables.cmap.glyphIndexMap,r=Object.keys(e),n=0;n<r.length;n+=1){var a=r[n],o=e[a];t._IndexToUnicodeMap[o]===void 0?t._IndexToUnicodeMap[o]={unicodes:[parseInt(a)]}:t._IndexToUnicodeMap[o].unicodes.push(parseInt(a))}}function hE(t,e){e.lowMemory?LE(t):EE(t)}function cE(t,e,r,n,a){t.beginPath(),t.moveTo(e,r),t.lineTo(n,a),t.stroke()}var gn={line:cE};function TE(t,e){var r=e||new Ft;return{configurable:!0,get:function(){return typeof r=="function"&&(r=r()),r},set:function(n){r=n}}}function xr(t){this.bindConstructorValues(t)}xr.prototype.bindConstructorValues=function(t){this.index=t.index||0,this.name=t.name||null,this.unicode=t.unicode||void 0,this.unicodes=t.unicodes||t.unicode!==void 0?[t.unicode]:[],"xMin"in t&&(this.xMin=t.xMin),"yMin"in t&&(this.yMin=t.yMin),"xMax"in t&&(this.xMax=t.xMax),"yMax"in t&&(this.yMax=t.yMax),"advanceWidth"in t&&(this.advanceWidth=t.advanceWidth),Object.defineProperty(this,"path",TE(this,t.path))};xr.prototype.addUnicode=function(t){this.unicodes.length===0&&(this.unicode=t),this.unicodes.push(t)};xr.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};xr.prototype.getPath=function(t,e,r,n,a){t=t!==void 0?t:0,e=e!==void 0?e:0,r=r!==void 0?r:72;var o,s;n||(n={});var x=n.xScale,E=n.yScale;if(n.hinting&&a&&a.hinting&&(s=this.path&&a.hinting.exec(this,r)),s)o=a.hinting.getCommands(s),t=Math.round(t),e=Math.round(e),x=E=1;else{o=this.path.commands;var T=1/(this.path.unitsPerEm||1e3)*r;x===void 0&&(x=T),E===void 0&&(E=T)}for(var u=new Ft,D=0;D<o.length;D+=1){var O=o[D];O.type==="M"?u.moveTo(t+O.x*x,e+-O.y*E):O.type==="L"?u.lineTo(t+O.x*x,e+-O.y*E):O.type==="Q"?u.quadraticCurveTo(t+O.x1*x,e+-O.y1*E,t+O.x*x,e+-O.y*E):O.type==="C"?u.curveTo(t+O.x1*x,e+-O.y1*E,t+O.x2*x,e+-O.y2*E,t+O.x*x,e+-O.y*E):O.type==="Z"&&u.closePath()}return u};xr.prototype.getContours=function(){if(this.points===void 0)return[];for(var t=[],e=[],r=0;r<this.points.length;r+=1){var n=this.points[r];e.push(n),n.lastPointOfContour&&(t.push(e),e=[])}return Fe.argument(e.length===0,"There are still points left in the current contour."),t};xr.prototype.getMetrics=function(){for(var t=this.path.commands,e=[],r=[],n=0;n<t.length;n+=1){var a=t[n];a.type!=="Z"&&(e.push(a.x),r.push(a.y)),(a.type==="Q"||a.type==="C")&&(e.push(a.x1),r.push(a.y1)),a.type==="C"&&(e.push(a.x2),r.push(a.y2))}var o={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,r),leftSideBearing:this.leftSideBearing};return isFinite(o.xMin)||(o.xMin=0),isFinite(o.xMax)||(o.xMax=this.advanceWidth),isFinite(o.yMin)||(o.yMin=0),isFinite(o.yMax)||(o.yMax=0),o.rightSideBearing=this.advanceWidth-o.leftSideBearing-(o.xMax-o.xMin),o};xr.prototype.draw=function(t,e,r,n,a){this.getPath(e,r,n,a).draw(t)};xr.prototype.drawPoints=function(t,e,r,n){function a(D,O,g,V){t.beginPath();for(var Y=0;Y<D.length;Y+=1)t.moveTo(O+D[Y].x*V,g+D[Y].y*V),t.arc(O+D[Y].x*V,g+D[Y].y*V,2,0,Math.PI*2,!1);t.closePath(),t.fill()}e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:24;for(var o=1/this.path.unitsPerEm*n,s=[],x=[],E=this.path,T=0;T<E.commands.length;T+=1){var u=E.commands[T];u.x!==void 0&&s.push({x:u.x,y:-u.y}),u.x1!==void 0&&x.push({x:u.x1,y:-u.y1}),u.x2!==void 0&&x.push({x:u.x2,y:-u.y2})}t.fillStyle="blue",a(s,e,r,o),t.fillStyle="red",a(x,e,r,o)};xr.prototype.drawMetrics=function(t,e,r,n){var a;e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:24,a=1/this.path.unitsPerEm*n,t.lineWidth=1,t.strokeStyle="black",gn.line(t,e,-1e4,e,1e4),gn.line(t,-1e4,r,1e4,r);var o=this.xMin||0,s=this.yMin||0,x=this.xMax||0,E=this.yMax||0,T=this.advanceWidth||0;t.strokeStyle="blue",gn.line(t,e+o*a,-1e4,e+o*a,1e4),gn.line(t,e+x*a,-1e4,e+x*a,1e4),gn.line(t,-1e4,r+-s*a,1e4,r+-s*a),gn.line(t,-1e4,r+-E*a,1e4,r+-E*a),t.strokeStyle="green",gn.line(t,e+T*a,-1e4,e+T*a,1e4)};function si(t,e,r){Object.defineProperty(t,e,{get:function(){return t.path,t[r]},set:function(n){t[r]=n},enumerable:!0,configurable:!0})}function Co(t,e){if(this.font=t,this.glyphs={},Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];n.path.unitsPerEm=t.unitsPerEm,this.glyphs[r]=n}this.length=e&&e.length||0}Co.prototype.get=function(t){if(this.glyphs[t]===void 0){this.font._push(t),typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());var e=this.glyphs[t],r=this.font._IndexToUnicodeMap[t];if(r)for(var n=0;n<r.unicodes.length;n++)e.addUnicode(r.unicodes[n]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+t:e.name=this.font.cffEncoding.charset[t]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(t)),this.glyphs[t].advanceWidth=this.font._hmtxTableData[t].advanceWidth,this.glyphs[t].leftSideBearing=this.font._hmtxTableData[t].leftSideBearing}else typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());return this.glyphs[t]};Co.prototype.push=function(t,e){this.glyphs[t]=e,this.length++};function IE(t,e){return new xr({index:e,font:t})}function dE(t,e,r,n,a,o){return function(){var s=new xr({index:e,font:t});return s.path=function(){r(s,n,a);var x=o(t.glyphs,s);return x.unitsPerEm=t.unitsPerEm,x},si(s,"xMin","_xMin"),si(s,"xMax","_xMax"),si(s,"yMin","_yMin"),si(s,"yMax","_yMax"),s}}function uE(t,e,r,n){return function(){var a=new xr({index:e,font:t});return a.path=function(){var o=r(t,a,n);return o.unitsPerEm=t.unitsPerEm,o},a}}var vr={GlyphSet:Co,glyphLoader:IE,ttfGlyphLoader:dE,cffGlyphLoader:uE};function J1(t,e){if(t===e)return!0;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r+=1)if(!J1(t[r],e[r]))return!1;return!0}else return!1}function Y0(t){var e;return t.length<1240?e=107:t.length<33900?e=1131:e=32768,e}function An(t,e,r){var n=[],a=[],o=Re.getCard16(t,e),s,x;if(o!==0){var E=Re.getByte(t,e+2);s=e+(o+1)*E+2;for(var T=e+3,u=0;u<o+1;u+=1)n.push(Re.getOffset(t,T,E)),T+=E;x=s+n[o]}else x=e+2;for(var D=0;D<n.length-1;D+=1){var O=Re.getBytes(t,s+n[D],s+n[D+1]);r&&(O=r(O)),a.push(O)}return{objects:a,startOffset:e,endOffset:x}}function pE(t,e){var r=[],n=Re.getCard16(t,e),a,o;if(n!==0){var s=Re.getByte(t,e+2);a=e+(n+1)*s+2;for(var x=e+3,E=0;E<n+1;E+=1)r.push(Re.getOffset(t,x,s)),x+=s;o=a+r[n]}else o=e+2;return{offsets:r,startOffset:e,endOffset:o}}function SE(t,e,r,n,a){var o=Re.getCard16(r,n),s=0;if(o!==0){var x=Re.getByte(r,n+2);s=n+(o+1)*x+2}var E=Re.getBytes(r,s+e[t],s+e[t+1]);return a&&(E=a(E)),E}function CE(t){for(var e="",r=15,n=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var a=t.parseByte(),o=a>>4,s=a&15;if(o===r||(e+=n[o],s===r))break;e+=n[s]}return parseFloat(e)}function gE(t,e){var r,n,a,o;if(e===28)return r=t.parseByte(),n=t.parseByte(),r<<8|n;if(e===29)return r=t.parseByte(),n=t.parseByte(),a=t.parseByte(),o=t.parseByte(),r<<24|n<<16|a<<8|o;if(e===30)return CE(t);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return r=t.parseByte(),(e-247)*256+r+108;if(e>=251&&e<=254)return r=t.parseByte(),-(e-251)*256-r-108;throw new Error("Invalid b0 "+e)}function RE(t){for(var e={},r=0;r<t.length;r+=1){var n=t[r][0],a=t[r][1],o=void 0;if(a.length===1?o=a[0]:o=a,e.hasOwnProperty(n)&&!isNaN(e[n]))throw new Error("Object "+e+" already has key "+n);e[n]=o}return e}function Z1(t,e,r){e=e!==void 0?e:0;var n=new Re.Parser(t,e),a=[],o=[];for(r=r!==void 0?r:t.length;n.relativeOffset<r;){var s=n.parseByte();s<=21?(s===12&&(s=1200+n.parseByte()),a.push([s,o]),o=[]):o.push(gE(n,s))}return RE(a)}function Sa(t,e){return e<=390?e=Ii[e]:e=t[e-391],e}function X1(t,e,r){for(var n={},a,o=0;o<e.length;o+=1){var s=e[o];if(Array.isArray(s.type)){var x=[];x.length=s.type.length;for(var E=0;E<s.type.length;E++)a=t[s.op]!==void 0?t[s.op][E]:void 0,a===void 0&&(a=s.value!==void 0&&s.value[E]!==void 0?s.value[E]:null),s.type[E]==="SID"&&(a=Sa(r,a)),x[E]=a;n[s.name]=x}else a=t[s.op],a===void 0&&(a=s.value!==void 0?s.value:null),s.type==="SID"&&(a=Sa(r,a)),n[s.name]=a}return n}function yE(t,e){var r={};return r.formatMajor=Re.getCard8(t,e),r.formatMinor=Re.getCard8(t,e+1),r.size=Re.getCard8(t,e+2),r.offsetSize=Re.getCard8(t,e+3),r.startOffset=e,r.endOffset=e+4,r}var j1=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],Q1=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function mE(t,e){var r=Z1(t,0,t.byteLength);return X1(r,j1,e)}function q1(t,e,r,n){var a=Z1(t,e,r);return X1(a,Q1,n)}function sA(t,e,r,n){for(var a=[],o=0;o<r.length;o+=1){var s=new DataView(new Uint8Array(r[o]).buffer),x=mE(s,n);x._subrs=[],x._subrsBias=0,x._defaultWidthX=0,x._nominalWidthX=0;var E=x.private[0],T=x.private[1];if(E!==0&&T!==0){var u=q1(t,T+e,E,n);if(x._defaultWidthX=u.defaultWidthX,x._nominalWidthX=u.nominalWidthX,u.subrs!==0){var D=T+u.subrs,O=An(t,D+e);x._subrs=O.objects,x._subrsBias=Y0(x._subrs)}x._privateDict=u}a.push(x)}return a}function NE(t,e,r,n){var a,o,s=new Re.Parser(t,e);r-=1;var x=[".notdef"],E=s.parseCard8();if(E===0)for(var T=0;T<r;T+=1)a=s.parseSID(),x.push(Sa(n,a));else if(E===1)for(;x.length<=r;){a=s.parseSID(),o=s.parseCard8();for(var u=0;u<=o;u+=1)x.push(Sa(n,a)),a+=1}else if(E===2)for(;x.length<=r;){a=s.parseSID(),o=s.parseCard16();for(var D=0;D<=o;D+=1)x.push(Sa(n,a)),a+=1}else throw new Error("Unknown charset format "+E);return x}function DE(t,e,r){var n,a={},o=new Re.Parser(t,e),s=o.parseCard8();if(s===0)for(var x=o.parseCard8(),E=0;E<x;E+=1)n=o.parseCard8(),a[n]=E;else if(s===1){var T=o.parseCard8();n=1;for(var u=0;u<T;u+=1)for(var D=o.parseCard8(),O=o.parseCard8(),g=D;g<=D+O;g+=1)a[g]=n,n+=1}else throw new Error("Unknown encoding format "+s);return new Bi(a,r)}function lA(t,e,r){var n,a,o,s,x=new Ft,E=[],T=0,u=!1,D=!1,O=0,g=0,V,Y,J,K;if(t.isCIDFont){var re=t.tables.cff.topDict._fdSelect[e.index],Q=t.tables.cff.topDict._fdArray[re];V=Q._subrs,Y=Q._subrsBias,J=Q._defaultWidthX,K=Q._nominalWidthX}else V=t.tables.cff.topDict._subrs,Y=t.tables.cff.topDict._subrsBias,J=t.tables.cff.topDict._defaultWidthX,K=t.tables.cff.topDict._nominalWidthX;var oe=J;function Ae(Ie,fe){D&&x.closePath(),x.moveTo(Ie,fe),D=!0}function le(){var Ie;Ie=E.length%2!==0,Ie&&!u&&(oe=E.shift()+K),T+=E.length>>1,E.length=0,u=!0}function he(Ie){for(var fe,be,we,at,it,de,ht,se,Qe,ot,Oe,xt,Et=0;Et<Ie.length;){var Mt=Ie[Et];switch(Et+=1,Mt){case 1:le();break;case 3:le();break;case 4:E.length>1&&!u&&(oe=E.shift()+K,u=!0),g+=E.pop(),Ae(O,g);break;case 5:for(;E.length>0;)O+=E.shift(),g+=E.shift(),x.lineTo(O,g);break;case 6:for(;E.length>0&&(O+=E.shift(),x.lineTo(O,g),E.length!==0);)g+=E.shift(),x.lineTo(O,g);break;case 7:for(;E.length>0&&(g+=E.shift(),x.lineTo(O,g),E.length!==0);)O+=E.shift(),x.lineTo(O,g);break;case 8:for(;E.length>0;)n=O+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),O=o+E.shift(),g=s+E.shift(),x.curveTo(n,a,o,s,O,g);break;case 10:it=E.pop()+Y,de=V[it],de&&he(de);break;case 11:return;case 12:switch(Mt=Ie[Et],Et+=1,Mt){case 35:n=O+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),ht=o+E.shift(),se=s+E.shift(),Qe=ht+E.shift(),ot=se+E.shift(),Oe=Qe+E.shift(),xt=ot+E.shift(),O=Oe+E.shift(),g=xt+E.shift(),E.shift(),x.curveTo(n,a,o,s,ht,se),x.curveTo(Qe,ot,Oe,xt,O,g);break;case 34:n=O+E.shift(),a=g,o=n+E.shift(),s=a+E.shift(),ht=o+E.shift(),se=s,Qe=ht+E.shift(),ot=s,Oe=Qe+E.shift(),xt=g,O=Oe+E.shift(),x.curveTo(n,a,o,s,ht,se),x.curveTo(Qe,ot,Oe,xt,O,g);break;case 36:n=O+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),ht=o+E.shift(),se=s,Qe=ht+E.shift(),ot=s,Oe=Qe+E.shift(),xt=ot+E.shift(),O=Oe+E.shift(),x.curveTo(n,a,o,s,ht,se),x.curveTo(Qe,ot,Oe,xt,O,g);break;case 37:n=O+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),ht=o+E.shift(),se=s+E.shift(),Qe=ht+E.shift(),ot=se+E.shift(),Oe=Qe+E.shift(),xt=ot+E.shift(),Math.abs(Oe-O)>Math.abs(xt-g)?O=Oe+E.shift():g=xt+E.shift(),x.curveTo(n,a,o,s,ht,se),x.curveTo(Qe,ot,Oe,xt,O,g);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+Mt),E.length=0}break;case 14:E.length>0&&!u&&(oe=E.shift()+K,u=!0),D&&(x.closePath(),D=!1);break;case 18:le();break;case 19:case 20:le(),Et+=T+7>>3;break;case 21:E.length>2&&!u&&(oe=E.shift()+K,u=!0),g+=E.pop(),O+=E.pop(),Ae(O,g);break;case 22:E.length>1&&!u&&(oe=E.shift()+K,u=!0),O+=E.pop(),Ae(O,g);break;case 23:le();break;case 24:for(;E.length>2;)n=O+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),O=o+E.shift(),g=s+E.shift(),x.curveTo(n,a,o,s,O,g);O+=E.shift(),g+=E.shift(),x.lineTo(O,g);break;case 25:for(;E.length>6;)O+=E.shift(),g+=E.shift(),x.lineTo(O,g);n=O+E.shift(),a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),O=o+E.shift(),g=s+E.shift(),x.curveTo(n,a,o,s,O,g);break;case 26:for(E.length%2&&(O+=E.shift());E.length>0;)n=O,a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),O=o,g=s+E.shift(),x.curveTo(n,a,o,s,O,g);break;case 27:for(E.length%2&&(g+=E.shift());E.length>0;)n=O+E.shift(),a=g,o=n+E.shift(),s=a+E.shift(),O=o+E.shift(),g=s,x.curveTo(n,a,o,s,O,g);break;case 28:fe=Ie[Et],be=Ie[Et+1],E.push((fe<<24|be<<16)>>16),Et+=2;break;case 29:it=E.pop()+t.gsubrsBias,de=t.gsubrs[it],de&&he(de);break;case 30:for(;E.length>0&&(n=O,a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),O=o+E.shift(),g=s+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,O,g),E.length!==0);)n=O+E.shift(),a=g,o=n+E.shift(),s=a+E.shift(),g=s+E.shift(),O=o+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,O,g);break;case 31:for(;E.length>0&&(n=O+E.shift(),a=g,o=n+E.shift(),s=a+E.shift(),g=s+E.shift(),O=o+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,O,g),E.length!==0);)n=O,a=g+E.shift(),o=n+E.shift(),s=a+E.shift(),O=o+E.shift(),g=s+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,O,g);break;default:Mt<32?console.log("Glyph "+e.index+": unknown operator "+Mt):Mt<247?E.push(Mt-139):Mt<251?(fe=Ie[Et],Et+=1,E.push((Mt-247)*256+fe+108)):Mt<255?(fe=Ie[Et],Et+=1,E.push(-(Mt-251)*256-fe-108)):(fe=Ie[Et],be=Ie[Et+1],we=Ie[Et+2],at=Ie[Et+3],Et+=4,E.push((fe<<24|be<<16|we<<8|at)/65536))}}}return he(r),e.advanceWidth=oe,x}function fE(t,e,r,n){var a=[],o,s=new Re.Parser(t,e),x=s.parseCard8();if(x===0)for(var E=0;E<r;E++){if(o=s.parseCard8(),o>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+o+" (FD count "+n+")");a.push(o)}else if(x===3){var T=s.parseCard16(),u=s.parseCard16();if(u!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+u);for(var D,O=0;O<T;O++){if(o=s.parseCard8(),D=s.parseCard16(),o>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+o+" (FD count "+n+")");if(D>r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+D);for(;u<D;u++)a.push(o);u=D}if(D!==r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+D)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+x);return a}function OE(t,e,r,n){r.tables.cff={};var a=yE(t,e),o=An(t,a.endOffset,Re.bytesToString),s=An(t,o.endOffset),x=An(t,s.endOffset,Re.bytesToString),E=An(t,x.endOffset);r.gsubrs=E.objects,r.gsubrsBias=Y0(r.gsubrs);var T=sA(t,e,s.objects,x.objects);if(T.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+T.length);var u=T[0];if(r.tables.cff.topDict=u,u._privateDict&&(r.defaultWidthX=u._privateDict.defaultWidthX,r.nominalWidthX=u._privateDict.nominalWidthX),u.ros[0]!==void 0&&u.ros[1]!==void 0&&(r.isCIDFont=!0),r.isCIDFont){var D=u.fdArray,O=u.fdSelect;if(D===0||O===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");D+=e;var g=An(t,D),V=sA(t,e,g.objects,x.objects);u._fdArray=V,O+=e,u._fdSelect=fE(t,O,r.numGlyphs,V.length)}var Y=e+u.private[1],J=q1(t,Y,u.private[0],x.objects);if(r.defaultWidthX=J.defaultWidthX,r.nominalWidthX=J.nominalWidthX,J.subrs!==0){var K=Y+J.subrs,re=An(t,K);r.subrs=re.objects,r.subrsBias=Y0(r.subrs)}else r.subrs=[],r.subrsBias=0;var Q;n.lowMemory?(Q=pE(t,e+u.charStrings),r.nGlyphs=Q.offsets.length):(Q=An(t,e+u.charStrings),r.nGlyphs=Q.objects.length);var oe=NE(t,e+u.charset,r.nGlyphs,x.objects);if(u.encoding===0?r.cffEncoding=new Bi(lE,oe):u.encoding===1?r.cffEncoding=new Bi(xE,oe):r.cffEncoding=DE(t,e+u.encoding,oe),r.encoding=r.encoding||r.cffEncoding,r.glyphs=new vr.GlyphSet(r),n.lowMemory)r._push=function(he){var Ie=SE(he,Q.offsets,t,e+u.charStrings);r.glyphs.push(he,vr.cffGlyphLoader(r,he,lA,Ie))};else for(var Ae=0;Ae<r.nGlyphs;Ae+=1){var le=Q.objects[Ae];r.glyphs.push(Ae,vr.cffGlyphLoader(r,Ae,lA,le))}}function $1(t,e){var r,n=Ii.indexOf(t);return n>=0&&(r=n),n=e.indexOf(t),n>=0?r=n+Ii.length:(r=Ii.length+e.length,e.push(t)),r}function BE(){return new Ce.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function HE(t){var e=new Ce.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var r=0;r<t.length;r+=1)e.names.push({name:"name_"+r,type:"NAME",value:t[r]});return e}function es(t,e,r){for(var n={},a=0;a<t.length;a+=1){var o=t[a],s=e[o.name];s!==void 0&&!J1(s,o.value)&&(o.type==="SID"&&(s=$1(s,r)),n[o.op]={name:o.name,type:o.type,value:s})}return n}function xA(t,e){var r=new Ce.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=es(j1,t,e),r}function EA(t){var e=new Ce.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:t}],e}function FE(t){var e=new Ce.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var r=0;r<t.length;r+=1)e.strings.push({name:"string_"+r,type:"STRING",value:t[r]});return e}function ME(){return new Ce.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function GE(t,e){for(var r=new Ce.Record("Charsets",[{name:"format",type:"Card8",value:0}]),n=0;n<t.length;n+=1){var a=t[n],o=$1(a,e);r.fields.push({name:"glyph_"+n,type:"SID",value:o})}return r}function PE(t){var e=[],r=t.path;e.push({name:"width",type:"NUMBER",value:t.advanceWidth});for(var n=0,a=0,o=0;o<r.commands.length;o+=1){var s=void 0,x=void 0,E=r.commands[o];if(E.type==="Q"){var T=.3333333333333333,u=2/3;E={type:"C",x:E.x,y:E.y,x1:Math.round(T*n+u*E.x1),y1:Math.round(T*a+u*E.y1),x2:Math.round(T*E.x+u*E.x1),y2:Math.round(T*E.y+u*E.y1)}}if(E.type==="M")s=Math.round(E.x-n),x=Math.round(E.y-a),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rmoveto",type:"OP",value:21}),n=Math.round(E.x),a=Math.round(E.y);else if(E.type==="L")s=Math.round(E.x-n),x=Math.round(E.y-a),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rlineto",type:"OP",value:5}),n=Math.round(E.x),a=Math.round(E.y);else if(E.type==="C"){var D=Math.round(E.x1-n),O=Math.round(E.y1-a),g=Math.round(E.x2-E.x1),V=Math.round(E.y2-E.y1);s=Math.round(E.x-E.x2),x=Math.round(E.y-E.y2),e.push({name:"dx1",type:"NUMBER",value:D}),e.push({name:"dy1",type:"NUMBER",value:O}),e.push({name:"dx2",type:"NUMBER",value:g}),e.push({name:"dy2",type:"NUMBER",value:V}),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rrcurveto",type:"OP",value:8}),n=Math.round(E.x),a=Math.round(E.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function bE(t){for(var e=new Ce.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),r=0;r<t.length;r+=1){var n=t.get(r),a=PE(n);e.charStrings.push({name:n.name,type:"CHARSTRING",value:a})}return e}function vE(t,e){var r=new Ce.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=es(Q1,t,e),r}function UE(t,e){for(var r=new Ce.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),n=1/e.unitsPerEm,a={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[n,0,0,n,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},o={},s=[],x,E=1;E<t.length;E+=1)x=t.get(E),s.push(x.name);var T=[];r.header=BE(),r.nameIndex=HE([e.postScriptName]);var u=xA(a,T);r.topDictIndex=EA(u),r.globalSubrIndex=ME(),r.charsets=GE(s,T),r.charStringsIndex=bE(t),r.privateDict=vE(o,T),r.stringIndex=FE(T);var D=r.header.sizeOf()+r.nameIndex.sizeOf()+r.topDictIndex.sizeOf()+r.stringIndex.sizeOf()+r.globalSubrIndex.sizeOf();return a.charset=D,a.encoding=0,a.charStrings=a.charset+r.charsets.sizeOf(),a.private[1]=a.charStrings+r.charStringsIndex.sizeOf(),u=xA(a,T),r.topDictIndex=EA(u),r}var ts={parse:OE,make:UE};function wE(t,e){var r={},n=new Re.Parser(t,e);return r.version=n.parseVersion(),r.fontRevision=Math.round(n.parseFixed()*1e3)/1e3,r.checkSumAdjustment=n.parseULong(),r.magicNumber=n.parseULong(),Fe.argument(r.magicNumber===1594834165,"Font header has wrong magic number."),r.flags=n.parseUShort(),r.unitsPerEm=n.parseUShort(),r.created=n.parseLongDateTime(),r.modified=n.parseLongDateTime(),r.xMin=n.parseShort(),r.yMin=n.parseShort(),r.xMax=n.parseShort(),r.yMax=n.parseShort(),r.macStyle=n.parseUShort(),r.lowestRecPPEM=n.parseUShort(),r.fontDirectionHint=n.parseShort(),r.indexToLocFormat=n.parseShort(),r.glyphDataFormat=n.parseShort(),r}function YE(t){var e=Math.round(new Date().getTime()/1e3)+2082844800,r=e;return t.createdTimestamp&&(r=t.createdTimestamp+2082844800),new Ce.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:r},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],t)}var rs={parse:wE,make:YE};function WE(t,e){var r={},n=new Re.Parser(t,e);return r.version=n.parseVersion(),r.ascender=n.parseShort(),r.descender=n.parseShort(),r.lineGap=n.parseShort(),r.advanceWidthMax=n.parseUShort(),r.minLeftSideBearing=n.parseShort(),r.minRightSideBearing=n.parseShort(),r.xMaxExtent=n.parseShort(),r.caretSlopeRise=n.parseShort(),r.caretSlopeRun=n.parseShort(),r.caretOffset=n.parseShort(),n.relativeOffset+=8,r.metricDataFormat=n.parseShort(),r.numberOfHMetrics=n.parseUShort(),r}function kE(t){return new Ce.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],t)}var ns={parse:WE,make:kE};function KE(t,e,r,n,a){for(var o,s,x=new Re.Parser(t,e),E=0;E<n;E+=1){E<r&&(o=x.parseUShort(),s=x.parseShort());var T=a.get(E);T.advanceWidth=o,T.leftSideBearing=s}}function VE(t,e,r,n,a){t._hmtxTableData={};for(var o,s,x=new Re.Parser(e,r),E=0;E<a;E+=1)E<n&&(o=x.parseUShort(),s=x.parseShort()),t._hmtxTableData[E]={advanceWidth:o,leftSideBearing:s}}function _E(t,e,r,n,a,o,s){s.lowMemory?VE(t,e,r,n,a):KE(e,r,n,a,o)}function zE(t){for(var e=new Ce.Table("hmtx",[]),r=0;r<t.length;r+=1){var n=t.get(r),a=n.advanceWidth||0,o=n.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+r,type:"USHORT",value:a}),e.fields.push({name:"leftSideBearing_"+r,type:"SHORT",value:o})}return e}var as={parse:_E,make:zE};function JE(t){for(var e=new Ce.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:t.length}]),r="",n=12+t.length*4,a=0;a<t.length;++a){var o=r.indexOf(t[a]);o<0&&(o=r.length,r+=t[a]),e.fields.push({name:"offset "+a,type:"USHORT",value:n+o}),e.fields.push({name:"length "+a,type:"USHORT",value:t[a].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),e}function ZE(t,e){var r=new Re.Parser(t,e),n=r.parseULong();Fe.argument(n===1,"Unsupported ltag table version."),r.skip("uLong",1);for(var a=r.parseULong(),o=[],s=0;s<a;s++){for(var x="",E=e+r.parseUShort(),T=r.parseUShort(),u=E;u<E+T;++u)x+=String.fromCharCode(t.getInt8(u));o.push(x)}return o}var is={make:JE,parse:ZE};function XE(t,e){var r={},n=new Re.Parser(t,e);return r.version=n.parseVersion(),r.numGlyphs=n.parseUShort(),r.version===1&&(r.maxPoints=n.parseUShort(),r.maxContours=n.parseUShort(),r.maxCompositePoints=n.parseUShort(),r.maxCompositeContours=n.parseUShort(),r.maxZones=n.parseUShort(),r.maxTwilightPoints=n.parseUShort(),r.maxStorage=n.parseUShort(),r.maxFunctionDefs=n.parseUShort(),r.maxInstructionDefs=n.parseUShort(),r.maxStackElements=n.parseUShort(),r.maxSizeOfInstructions=n.parseUShort(),r.maxComponentElements=n.parseUShort(),r.maxComponentDepth=n.parseUShort()),r}function jE(t){return new Ce.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:t}])}var os={parse:XE,make:jE},As=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],ss={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},QE={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},ls={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function qE(t,e,r){switch(t){case 0:if(e===65535)return"und";if(r)return r[e];break;case 1:return ss[e];case 3:return ls[e]}}var W0="utf-16",$E={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},eL={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function xs(t,e,r){switch(t){case 0:return W0;case 1:return eL[r]||$E[e];case 3:if(e===1||e===10)return W0;break}}function tL(t,e,r){for(var n={},a=new Re.Parser(t,e),o=a.parseUShort(),s=a.parseUShort(),x=a.offset+a.parseUShort(),E=0;E<s;E++){var T=a.parseUShort(),u=a.parseUShort(),D=a.parseUShort(),O=a.parseUShort(),g=As[O]||O,V=a.parseUShort(),Y=a.parseUShort(),J=qE(T,D,r),K=xs(T,u,D);if(K!==void 0&&J!==void 0){var re=void 0;if(K===W0?re=ea.UTF16(t,x+Y,V):re=ea.MACSTRING(t,x+Y,V,K),re){var Q=n[g];Q===void 0&&(Q=n[g]={}),Q[J]=re}}}return o===1&&a.parseUShort(),n}function E0(t){var e={};for(var r in t)e[t[r]]=parseInt(r);return e}function LA(t,e,r,n,a,o){return new Ce.Record("NameRecord",[{name:"platformID",type:"USHORT",value:t},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:r},{name:"nameID",type:"USHORT",value:n},{name:"length",type:"USHORT",value:a},{name:"offset",type:"USHORT",value:o}])}function rL(t,e){var r=t.length,n=e.length-r+1;e:for(var a=0;a<n;a++)for(;a<n;a++){for(var o=0;o<r;o++)if(e[a+o]!==t[o])continue e;return a}return-1}function hA(t,e){var r=rL(t,e);if(r<0){r=e.length;for(var n=0,a=t.length;n<a;++n)e.push(t[n])}return r}function nL(t,e){var r,n=[],a={},o=E0(As);for(var s in t){var x=o[s];if(x===void 0&&(x=s),r=parseInt(x),isNaN(r))throw new Error('Name table entry "'+s+'" does not exist, see nameTableNames for complete list.');a[r]=t[s],n.push(r)}for(var E=E0(ss),T=E0(ls),u=[],D=[],O=0;O<n.length;O++){r=n[O];var g=a[r];for(var V in g){var Y=g[V],J=1,K=E[V],re=QE[K],Q=xs(J,re,K),oe=pe.MACSTRING(Y,Q);oe===void 0&&(J=0,K=e.indexOf(V),K<0&&(K=e.length,e.push(V)),re=4,oe=pe.UTF16(Y));var Ae=hA(oe,D);u.push(LA(J,re,K,r,oe.length,Ae));var le=T[V];if(le!==void 0){var he=pe.UTF16(Y),Ie=hA(he,D);u.push(LA(3,1,le,r,he.length,Ie))}}}u.sort(function(we,at){return we.platformID-at.platformID||we.encodingID-at.encodingID||we.languageID-at.languageID||we.nameID-at.nameID});for(var fe=new Ce.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:u.length},{name:"stringOffset",type:"USHORT",value:6+u.length*12}]),be=0;be<u.length;be++)fe.fields.push({name:"record_"+be,type:"RECORD",value:u[be]});return fe.fields.push({name:"strings",type:"LITERAL",value:D}),fe}var Es={parse:tL,make:nL},k0=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function aL(t){for(var e=0;e<k0.length;e+=1){var r=k0[e];if(t>=r.begin&&t<r.end)return e}return-1}function iL(t,e){var r={},n=new Re.Parser(t,e);r.version=n.parseUShort(),r.xAvgCharWidth=n.parseShort(),r.usWeightClass=n.parseUShort(),r.usWidthClass=n.parseUShort(),r.fsType=n.parseUShort(),r.ySubscriptXSize=n.parseShort(),r.ySubscriptYSize=n.parseShort(),r.ySubscriptXOffset=n.parseShort(),r.ySubscriptYOffset=n.parseShort(),r.ySuperscriptXSize=n.parseShort(),r.ySuperscriptYSize=n.parseShort(),r.ySuperscriptXOffset=n.parseShort(),r.ySuperscriptYOffset=n.parseShort(),r.yStrikeoutSize=n.parseShort(),r.yStrikeoutPosition=n.parseShort(),r.sFamilyClass=n.parseShort(),r.panose=[];for(var a=0;a<10;a++)r.panose[a]=n.parseByte();return r.ulUnicodeRange1=n.parseULong(),r.ulUnicodeRange2=n.parseULong(),r.ulUnicodeRange3=n.parseULong(),r.ulUnicodeRange4=n.parseULong(),r.achVendID=String.fromCharCode(n.parseByte(),n.parseByte(),n.parseByte(),n.parseByte()),r.fsSelection=n.parseUShort(),r.usFirstCharIndex=n.parseUShort(),r.usLastCharIndex=n.parseUShort(),r.sTypoAscender=n.parseShort(),r.sTypoDescender=n.parseShort(),r.sTypoLineGap=n.parseShort(),r.usWinAscent=n.parseUShort(),r.usWinDescent=n.parseUShort(),r.version>=1&&(r.ulCodePageRange1=n.parseULong(),r.ulCodePageRange2=n.parseULong()),r.version>=2&&(r.sxHeight=n.parseShort(),r.sCapHeight=n.parseShort(),r.usDefaultChar=n.parseUShort(),r.usBreakChar=n.parseUShort(),r.usMaxContent=n.parseUShort()),r}function oL(t){return new Ce.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],t)}var K0={parse:iL,make:oL,unicodeRanges:k0,getUnicodeRange:aL};function AL(t,e){var r={},n=new Re.Parser(t,e);switch(r.version=n.parseVersion(),r.italicAngle=n.parseFixed(),r.underlinePosition=n.parseShort(),r.underlineThickness=n.parseShort(),r.isFixedPitch=n.parseULong(),r.minMemType42=n.parseULong(),r.maxMemType42=n.parseULong(),r.minMemType1=n.parseULong(),r.maxMemType1=n.parseULong(),r.version){case 1:r.names=mn.slice();break;case 2:r.numberOfGlyphs=n.parseUShort(),r.glyphNameIndex=new Array(r.numberOfGlyphs);for(var a=0;a<r.numberOfGlyphs;a++)r.glyphNameIndex[a]=n.parseUShort();r.names=[];for(var o=0;o<r.numberOfGlyphs;o++)if(r.glyphNameIndex[o]>=mn.length){var s=n.parseChar();r.names.push(n.parseString(s))}break;case 2.5:r.numberOfGlyphs=n.parseUShort(),r.offset=new Array(r.numberOfGlyphs);for(var x=0;x<r.numberOfGlyphs;x++)r.offset[x]=n.parseChar();break}return r}function sL(){return new Ce.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var Ls={parse:AL,make:sL},gr=new Array(9);gr[1]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(ee.coverage),deltaGlyphId:this.parseUShort()};if(r===2)return{substFormat:2,coverage:this.parsePointer(ee.coverage),substitute:this.parseOffset16List()};Fe.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};gr[2]=function(){var e=this.parseUShort();return Fe.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(ee.coverage),sequences:this.parseListOfLists()}};gr[3]=function(){var e=this.parseUShort();return Fe.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(ee.coverage),alternateSets:this.parseListOfLists()}};gr[4]=function(){var e=this.parseUShort();return Fe.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(ee.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var Zn={sequenceIndex:ee.uShort,lookupListIndex:ee.uShort};gr[5]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:r,coverage:this.parsePointer(ee.coverage),ruleSets:this.parseListOfLists(function(){var o=this.parseUShort(),s=this.parseUShort();return{input:this.parseUShortList(o-1),lookupRecords:this.parseRecordList(s,Zn)}})};if(r===2)return{substFormat:r,coverage:this.parsePointer(ee.coverage),classDef:this.parsePointer(ee.classDef),classSets:this.parseListOfLists(function(){var o=this.parseUShort(),s=this.parseUShort();return{classes:this.parseUShortList(o-1),lookupRecords:this.parseRecordList(s,Zn)}})};if(r===3){var n=this.parseUShort(),a=this.parseUShort();return{substFormat:r,coverages:this.parseList(n,ee.pointer(ee.coverage)),lookupRecords:this.parseRecordList(a,Zn)}}Fe.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};gr[6]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(ee.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Zn)}})};if(r===2)return{substFormat:2,coverage:this.parsePointer(ee.coverage),backtrackClassDef:this.parsePointer(ee.classDef),inputClassDef:this.parsePointer(ee.classDef),lookaheadClassDef:this.parsePointer(ee.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Zn)}})};if(r===3)return{substFormat:3,backtrackCoverage:this.parseList(ee.pointer(ee.coverage)),inputCoverage:this.parseList(ee.pointer(ee.coverage)),lookaheadCoverage:this.parseList(ee.pointer(ee.coverage)),lookupRecords:this.parseRecordList(Zn)};Fe.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};gr[7]=function(){var e=this.parseUShort();Fe.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var r=this.parseUShort(),n=new ee(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:r,extension:gr[r].call(n)}};gr[8]=function(){var e=this.parseUShort();return Fe.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(ee.coverage),backtrackCoverage:this.parseList(ee.pointer(ee.coverage)),lookaheadCoverage:this.parseList(ee.pointer(ee.coverage)),substitutes:this.parseUShortList()}};function lL(t,e){e=e||0;var r=new ee(t,e),n=r.parseVersion(1);return Fe.argument(n===1||n===1.1,"Unsupported GSUB table version."),n===1?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(gr)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(gr),variations:r.parseFeatureVariationsList()}}var sa=new Array(9);sa[1]=function(e){return e.substFormat===1?new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.ushortList("substitute",e.substitute)))};sa[2]=function(e){return Fe.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.tableList("seqSet",e.sequences,function(r){return new Ce.Table("sequenceSetTable",Ce.ushortList("sequence",r))})))};sa[3]=function(e){return Fe.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.tableList("altSet",e.alternateSets,function(r){return new Ce.Table("alternateSetTable",Ce.ushortList("alternate",r))})))};sa[4]=function(e){return Fe.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new Ce.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.tableList("ligSet",e.ligatureSets,function(r){return new Ce.Table("ligatureSetTable",Ce.tableList("ligature",r,function(n){return new Ce.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:n.ligGlyph}].concat(Ce.ushortList("component",n.components,n.components.length+1)))}))})))};sa[6]=function(e){if(e.substFormat===1){var r=new Ce.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new Ce.Coverage(e.coverage)}].concat(Ce.tableList("chainRuleSet",e.chainRuleSets,function(o){return new Ce.Table("chainRuleSetTable",Ce.tableList("chainRule",o,function(s){var x=Ce.ushortList("backtrackGlyph",s.backtrack,s.backtrack.length).concat(Ce.ushortList("inputGlyph",s.input,s.input.length+1)).concat(Ce.ushortList("lookaheadGlyph",s.lookahead,s.lookahead.length)).concat(Ce.ushortList("substitution",[],s.lookupRecords.length));return s.lookupRecords.forEach(function(E,T){x=x.concat({name:"sequenceIndex"+T,type:"USHORT",value:E.sequenceIndex}).concat({name:"lookupListIndex"+T,type:"USHORT",value:E.lookupListIndex})}),new Ce.Table("chainRuleTable",x)}))})));return r}else if(e.substFormat===2)Fe.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var n=[{name:"substFormat",type:"USHORT",value:e.substFormat}];n.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(o,s){n.push({name:"backtrackCoverage"+s,type:"TABLE",value:new Ce.Coverage(o)})}),n.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(o,s){n.push({name:"inputCoverage"+s,type:"TABLE",value:new Ce.Coverage(o)})}),n.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(o,s){n.push({name:"lookaheadCoverage"+s,type:"TABLE",value:new Ce.Coverage(o)})}),n.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(o,s){n=n.concat({name:"sequenceIndex"+s,type:"USHORT",value:o.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:o.lookupListIndex})});var a=new Ce.Table("chainContextTable",n);return a}Fe.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function xL(t){return new Ce.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Ce.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new Ce.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new Ce.LookupList(t.lookups,sa)}])}var hs={parse:lL,make:xL};function EL(t,e){var r=new Re.Parser(t,e),n=r.parseULong();Fe.argument(n===1,"Unsupported META table version."),r.parseULong(),r.parseULong();for(var a=r.parseULong(),o={},s=0;s<a;s++){var x=r.parseTag(),E=r.parseULong(),T=r.parseULong(),u=ea.UTF8(t,e+E,T);o[x]=u}return o}function LL(t){var e=Object.keys(t).length,r="",n=16+e*12,a=new Ce.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:n},{name:"numTags",type:"ULONG",value:e}]);for(var o in t){var s=r.length;r+=t[o],a.fields.push({name:"tag "+o,type:"TAG",value:o}),a.fields.push({name:"offset "+o,type:"ULONG",value:n+s}),a.fields.push({name:"length "+o,type:"ULONG",value:t[o].length})}return a.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),a}var cs={parse:EL,make:LL};function cA(t){return Math.log(t)/Math.log(2)|0}function go(t){for(;t.length%4!==0;)t.push(0);for(var e=0,r=0;r<t.length;r+=4)e+=(t[r]<<24)+(t[r+1]<<16)+(t[r+2]<<8)+t[r+3];return e%=Math.pow(2,32),e}function TA(t,e,r,n){return new Ce.Record("Table Record",[{name:"tag",type:"TAG",value:t!==void 0?t:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:r!==void 0?r:0},{name:"length",type:"ULONG",value:n!==void 0?n:0}])}function Ts(t){var e=new Ce.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=t,e.numTables=t.length;var r=Math.pow(2,cA(e.numTables));e.searchRange=16*r,e.entrySelector=cA(r),e.rangeShift=e.numTables*16-e.searchRange;for(var n=[],a=[],o=e.sizeOf()+TA().sizeOf()*e.numTables;o%4!==0;)o+=1,a.push({name:"padding",type:"BYTE",value:0});for(var s=0;s<t.length;s+=1){var x=t[s];Fe.argument(x.tableName.length===4,"Table name"+x.tableName+" is invalid.");var E=x.sizeOf(),T=TA(x.tableName,go(x.encode()),o,E);for(n.push({name:T.tag+" Table Record",type:"RECORD",value:T}),a.push({name:x.tableName+" table",type:"RECORD",value:x}),o+=E,Fe.argument(!isNaN(o),"Something went wrong calculating the offset.");o%4!==0;)o+=1,a.push({name:"padding",type:"BYTE",value:0})}return n.sort(function(u,D){return u.value.tag>D.value.tag?1:-1}),e.fields=e.fields.concat(n),e.fields=e.fields.concat(a),e}function IA(t,e,r){for(var n=0;n<e.length;n+=1){var a=t.charToGlyphIndex(e[n]);if(a>0){var o=t.glyphs.get(a);return o.getMetrics()}}return r}function hL(t){for(var e=0,r=0;r<t.length;r+=1)e+=t[r];return e/t.length}function cL(t){for(var e=[],r=[],n=[],a=[],o=[],s=[],x=[],E,T=0,u=0,D=0,O=0,g=0,V=0;V<t.glyphs.length;V+=1){var Y=t.glyphs.get(V),J=Y.unicode|0;if(isNaN(Y.advanceWidth))throw new Error("Glyph "+Y.name+" ("+V+"): advanceWidth is not a number.");(E>J||E===void 0)&&J>0&&(E=J),T<J&&(T=J);var K=K0.getUnicodeRange(J);if(K<32)u|=1<<K;else if(K<64)D|=1<<K-32;else if(K<96)O|=1<<K-64;else if(K<123)g|=1<<K-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(Y.name!==".notdef"){var re=Y.getMetrics();e.push(re.xMin),r.push(re.yMin),n.push(re.xMax),a.push(re.yMax),s.push(re.leftSideBearing),x.push(re.rightSideBearing),o.push(Y.advanceWidth)}}var Q={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,n),yMax:Math.max.apply(null,a),advanceWidthMax:Math.max.apply(null,o),advanceWidthAvg:hL(o),minLeftSideBearing:Math.min.apply(null,s),maxLeftSideBearing:Math.max.apply(null,s),minRightSideBearing:Math.min.apply(null,x)};Q.ascender=t.ascender,Q.descender=t.descender;var oe=rs.make({flags:3,unitsPerEm:t.unitsPerEm,xMin:Q.xMin,yMin:Q.yMin,xMax:Q.xMax,yMax:Q.yMax,lowestRecPPEM:3,createdTimestamp:t.createdTimestamp}),Ae=ns.make({ascender:Q.ascender,descender:Q.descender,advanceWidthMax:Q.advanceWidthMax,minLeftSideBearing:Q.minLeftSideBearing,minRightSideBearing:Q.minRightSideBearing,xMaxExtent:Q.maxLeftSideBearing+(Q.xMax-Q.xMin),numberOfHMetrics:t.glyphs.length}),le=os.make(t.glyphs.length),he=K0.make(Object.assign({xAvgCharWidth:Math.round(Q.advanceWidthAvg),usFirstCharIndex:E,usLastCharIndex:T,ulUnicodeRange1:u,ulUnicodeRange2:D,ulUnicodeRange3:O,ulUnicodeRange4:g,sTypoAscender:Q.ascender,sTypoDescender:Q.descender,sTypoLineGap:0,usWinAscent:Q.yMax,usWinDescent:Math.abs(Q.yMin),ulCodePageRange1:1,sxHeight:IA(t,"xyvw",{yMax:Math.round(Q.ascender/2)}).yMax,sCapHeight:IA(t,"HIKLEFJMNTZBDPRAGOQSUVWXY",Q).yMax,usDefaultChar:t.hasChar(" ")?32:0,usBreakChar:t.hasChar(" ")?32:0},t.tables.os2)),Ie=as.make(t.glyphs),fe=V1.make(t.glyphs),be=t.getEnglishName("fontFamily"),we=t.getEnglishName("fontSubfamily"),at=be+" "+we,it=t.getEnglishName("postScriptName");it||(it=be.replace(/\s/g,"")+"-"+we);var de={};for(var ht in t.names)de[ht]=t.names[ht];de.uniqueID||(de.uniqueID={en:t.getEnglishName("manufacturer")+":"+at}),de.postScriptName||(de.postScriptName={en:it}),de.preferredFamily||(de.preferredFamily=t.names.fontFamily),de.preferredSubfamily||(de.preferredSubfamily=t.names.fontSubfamily);var se=[],Qe=Es.make(de,se),ot=se.length>0?is.make(se):void 0,Oe=Ls.make(),xt=ts.make(t.glyphs,{version:t.getEnglishName("version"),fullName:at,familyName:be,weightName:we,postScriptName:it,unitsPerEm:t.unitsPerEm,fontBBox:[0,Q.yMin,Q.ascender,Q.advanceWidthMax]}),Et=t.metas&&Object.keys(t.metas).length>0?cs.make(t.metas):void 0,Mt=[oe,Ae,le,he,Qe,fe,Oe,xt,Ie];ot&&Mt.push(ot),t.tables.gsub&&Mt.push(hs.make(t.tables.gsub)),Et&&Mt.push(Et);for(var $r=Ts(Mt),A0=$r.encode(),Bt=go(A0),en=$r.fields,Wn=!1,tn=0;tn<en.length;tn+=1)if(en[tn].name==="head table"){en[tn].value.checkSumAdjustment=2981146554-Bt,Wn=!0;break}if(!Wn)throw new Error("Could not find head table with checkSum to adjust.");return $r}var TL={make:Ts,fontToTable:cL,computeCheckSum:go};function L0(t,e){for(var r=0,n=t.length-1;r<=n;){var a=r+n>>>1,o=t[a].tag;if(o===e)return a;o<e?r=a+1:n=a-1}return-r-1}function dA(t,e){for(var r=0,n=t.length-1;r<=n;){var a=r+n>>>1,o=t[a];if(o===e)return a;o<e?r=a+1:n=a-1}return-r-1}function uA(t,e){for(var r,n=0,a=t.length-1;n<=a;){var o=n+a>>>1;r=t[o];var s=r.start;if(s===e)return r;s<e?n=o+1:a=o-1}if(n>0)return r=t[n-1],e>r.end?0:r}function ka(t,e){this.font=t,this.tableName=e}ka.prototype={searchTag:L0,binSearch:dA,getTable:function(t){var e=this.font.tables[this.tableName];return!e&&t&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var t=this.getTable();return t?t.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var t=this.getTable();if(t){for(var e=!1,r=0;r<t.scripts.length;r++){var n=t.scripts[r].tag;if(n==="DFLT")return n;n==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(t,e){var r=this.getTable(e);if(r){t=t||"DFLT";var n=r.scripts,a=L0(r.scripts,t);if(a>=0)return n[a].script;if(e){var o={tag:t,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return n.splice(-1-a,0,o),o.script}}},getLangSysTable:function(t,e,r){var n=this.getScriptTable(t,r);if(n){if(!e||e==="dflt"||e==="DFLT")return n.defaultLangSys;var a=L0(n.langSysRecords,e);if(a>=0)return n.langSysRecords[a].langSys;if(r){var o={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return n.langSysRecords.splice(-1-a,0,o),o.langSys}}},getFeatureTable:function(t,e,r,n){var a=this.getLangSysTable(t,e,n);if(a){for(var o,s=a.featureIndexes,x=this.font.tables[this.tableName].features,E=0;E<s.length;E++)if(o=x[s[E]],o.tag===r)return o.feature;if(n){var T=x.length;return Fe.assert(T===0||r>=x[T-1].tag,"Features must be added in alphabetical order."),o={tag:r,feature:{params:0,lookupListIndexes:[]}},x.push(o),s.push(T),o.feature}}},getLookupTables:function(t,e,r,n,a){var o=this.getFeatureTable(t,e,r,a),s=[];if(o){for(var x,E=o.lookupListIndexes,T=this.font.tables[this.tableName].lookups,u=0;u<E.length;u++)x=T[E[u]],x.lookupType===n&&s.push(x);if(s.length===0&&a){x={lookupType:n,lookupFlag:0,subtables:[],markFilteringSet:void 0};var D=T.length;return T.push(x),E.push(D),[x]}}return s},getGlyphClass:function(t,e){switch(t.format){case 1:return t.startGlyph<=e&&e<t.startGlyph+t.classes.length?t.classes[e-t.startGlyph]:0;case 2:var r=uA(t.ranges,e);return r?r.classId:0}},getCoverageIndex:function(t,e){switch(t.format){case 1:var r=dA(t.glyphs,e);return r>=0?r:-1;case 2:var n=uA(t.ranges,e);return n?n.index+e-n.start:-1}},expandCoverage:function(t){if(t.format===1)return t.glyphs;for(var e=[],r=t.ranges,n=0;n<r.length;n++)for(var a=r[n],o=a.start,s=a.end,x=o;x<=s;x++)e.push(x);return e}};function Ka(t){ka.call(this,t,"gpos")}Ka.prototype=ka.prototype;Ka.prototype.init=function(){var t=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(t)};Ka.prototype.getKerningValue=function(t,e,r){for(var n=0;n<t.length;n++)for(var a=t[n].subtables,o=0;o<a.length;o++){var s=a[o],x=this.getCoverageIndex(s.coverage,e);if(!(x<0))switch(s.posFormat){case 1:for(var E=s.pairSets[x],T=0;T<E.length;T++){var u=E[T];if(u.secondGlyph===r)return u.value1&&u.value1.xAdvance||0}break;case 2:var D=this.getGlyphClass(s.classDef1,e),O=this.getGlyphClass(s.classDef2,r),g=s.classRecords[D][O];return g.value1&&g.value1.xAdvance||0}}return 0};Ka.prototype.getKerningTables=function(t,e){if(this.font.tables.gpos)return this.getLookupTables(t,e,"kern",2)};function Er(t){ka.call(this,t,"gsub")}function IL(t,e){var r=t.length;if(r!==e.length)return!1;for(var n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Ro(t,e,r){for(var n=t.subtables,a=0;a<n.length;a++){var o=n[a];if(o.substFormat===e)return o}if(r)return n.push(r),r}Er.prototype=ka.prototype;Er.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Er.prototype.getSingle=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,1),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++){var E=s[x],T=this.expandCoverage(E.coverage),u=void 0;if(E.substFormat===1){var D=E.deltaGlyphId;for(u=0;u<T.length;u++){var O=T[u];n.push({sub:O,by:O+D})}}else{var g=E.substitute;for(u=0;u<T.length;u++)n.push({sub:T[u],by:g[u]})}}return n};Er.prototype.getMultiple=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,2),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++){var E=s[x],T=this.expandCoverage(E.coverage),u=void 0;for(u=0;u<T.length;u++){var D=T[u],O=E.sequences[u];n.push({sub:D,by:O})}}return n};Er.prototype.getAlternates=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,3),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++)for(var E=s[x],T=this.expandCoverage(E.coverage),u=E.alternateSets,D=0;D<T.length;D++)n.push({sub:T[D],by:u[D]});return n};Er.prototype.getLigatures=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,4),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++)for(var E=s[x],T=this.expandCoverage(E.coverage),u=E.ligatureSets,D=0;D<T.length;D++)for(var O=T[D],g=u[D],V=0;V<g.length;V++){var Y=g[V];n.push({sub:[O].concat(Y.components),by:Y.ligGlyph})}return n};Er.prototype.addSingle=function(t,e,r,n){var a=this.getLookupTables(r,n,t,1,!0)[0],o=Ro(a,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Fe.assert(o.coverage.format===1,"Single: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.substitute.splice(x,0,0)),o.substitute[x]=e.by};Er.prototype.addMultiple=function(t,e,r,n){Fe.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var a=this.getLookupTables(r,n,t,2,!0)[0],o=Ro(a,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Fe.assert(o.coverage.format===1,"Multiple: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.sequences.splice(x,0,0)),o.sequences[x]=e.by};Er.prototype.addAlternate=function(t,e,r,n){var a=this.getLookupTables(r,n,t,3,!0)[0],o=Ro(a,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Fe.assert(o.coverage.format===1,"Alternate: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.alternateSets.splice(x,0,0)),o.alternateSets[x]=e.by};Er.prototype.addLigature=function(t,e,r,n){var a=this.getLookupTables(r,n,t,4,!0)[0],o=a.subtables[0];o||(o={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},a.subtables[0]=o),Fe.assert(o.coverage.format===1,"Ligature: unable to modify coverage table format "+o.coverage.format);var s=e.sub[0],x=e.sub.slice(1),E={ligGlyph:e.by,components:x},T=this.binSearch(o.coverage.glyphs,s);if(T>=0){for(var u=o.ligatureSets[T],D=0;D<u.length;D++)if(IL(u[D].components,x))return;u.push(E)}else T=-1-T,o.coverage.glyphs.splice(T,0,s),o.ligatureSets.splice(T,0,[E])};Er.prototype.getFeature=function(t,e,r){if(/ss\d\d/.test(t))return this.getSingle(t,e,r);switch(t){case"aalt":case"salt":return this.getSingle(t,e,r).concat(this.getAlternates(t,e,r));case"dlig":case"liga":case"rlig":return this.getLigatures(t,e,r);case"ccmp":return this.getMultiple(t,e,r).concat(this.getLigatures(t,e,r));case"stch":return this.getMultiple(t,e,r)}};Er.prototype.add=function(t,e,r,n){if(/ss\d\d/.test(t))return this.addSingle(t,e,r,n);switch(t){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(t,e,r,n):this.addAlternate(t,e,r,n);case"dlig":case"liga":case"rlig":return this.addLigature(t,e,r,n);case"ccmp":return e.by instanceof Array?this.addMultiple(t,e,r,n):this.addLigature(t,e,r,n)}};function dL(){return typeof window<"u"}function Is(t){for(var e=new ArrayBuffer(t.length),r=new Uint8Array(e),n=0;n<t.length;++n)r[n]=t[n];return e}function uL(t){for(var e=new Buffer(t.byteLength),r=new Uint8Array(t),n=0;n<e.length;++n)e[n]=r[n];return e}function ca(t,e){if(!t)throw e}function pA(t,e,r,n,a){var o;return(e&n)>0?(o=t.parseByte(),e&a||(o=-o),o=r+o):(e&a)>0?o=r:o=r+t.parseShort(),o}function ds(t,e,r){var n=new Re.Parser(e,r);t.numberOfContours=n.parseShort(),t._xMin=n.parseShort(),t._yMin=n.parseShort(),t._xMax=n.parseShort(),t._yMax=n.parseShort();var a,o;if(t.numberOfContours>0){for(var s=t.endPointIndices=[],x=0;x<t.numberOfContours;x+=1)s.push(n.parseUShort());t.instructionLength=n.parseUShort(),t.instructions=[];for(var E=0;E<t.instructionLength;E+=1)t.instructions.push(n.parseByte());var T=s[s.length-1]+1;a=[];for(var u=0;u<T;u+=1)if(o=n.parseByte(),a.push(o),(o&8)>0)for(var D=n.parseByte(),O=0;O<D;O+=1)a.push(o),u+=1;if(Fe.argument(a.length===T,"Bad flags."),s.length>0){var g=[],V;if(T>0){for(var Y=0;Y<T;Y+=1)o=a[Y],V={},V.onCurve=!!(o&1),V.lastPointOfContour=s.indexOf(Y)>=0,g.push(V);for(var J=0,K=0;K<T;K+=1)o=a[K],V=g[K],V.x=pA(n,o,J,2,16),J=V.x;for(var re=0,Q=0;Q<T;Q+=1)o=a[Q],V=g[Q],V.y=pA(n,o,re,4,32),re=V.y}t.points=g}else t.points=[]}else if(t.numberOfContours===0)t.points=[];else{t.isComposite=!0,t.points=[],t.components=[];for(var oe=!0;oe;){a=n.parseUShort();var Ae={glyphIndex:n.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(a&1)>0?(a&2)>0?(Ae.dx=n.parseShort(),Ae.dy=n.parseShort()):Ae.matchedPoints=[n.parseUShort(),n.parseUShort()]:(a&2)>0?(Ae.dx=n.parseChar(),Ae.dy=n.parseChar()):Ae.matchedPoints=[n.parseByte(),n.parseByte()],(a&8)>0?Ae.xScale=Ae.yScale=n.parseF2Dot14():(a&64)>0?(Ae.xScale=n.parseF2Dot14(),Ae.yScale=n.parseF2Dot14()):(a&128)>0&&(Ae.xScale=n.parseF2Dot14(),Ae.scale01=n.parseF2Dot14(),Ae.scale10=n.parseF2Dot14(),Ae.yScale=n.parseF2Dot14()),t.components.push(Ae),oe=!!(a&32)}if(a&256){t.instructionLength=n.parseUShort(),t.instructions=[];for(var le=0;le<t.instructionLength;le+=1)t.instructions.push(n.parseByte())}}}function h0(t,e){for(var r=[],n=0;n<t.length;n+=1){var a=t[n],o={x:e.xScale*a.x+e.scale01*a.y+e.dx,y:e.scale10*a.x+e.yScale*a.y+e.dy,onCurve:a.onCurve,lastPointOfContour:a.lastPointOfContour};r.push(o)}return r}function pL(t){for(var e=[],r=[],n=0;n<t.length;n+=1){var a=t[n];r.push(a),a.lastPointOfContour&&(e.push(r),r=[])}return Fe.argument(r.length===0,"There are still points left in the current contour."),e}function us(t){var e=new Ft;if(!t)return e;for(var r=pL(t),n=0;n<r.length;++n){var a=r[n],o=null,s=a[a.length-1],x=a[0];if(s.onCurve)e.moveTo(s.x,s.y);else if(x.onCurve)e.moveTo(x.x,x.y);else{var E={x:(s.x+x.x)*.5,y:(s.y+x.y)*.5};e.moveTo(E.x,E.y)}for(var T=0;T<a.length;++T)if(o=s,s=x,x=a[(T+1)%a.length],s.onCurve)e.lineTo(s.x,s.y);else{var u=x;o.onCurve||((s.x+o.x)*.5,(s.y+o.y)*.5),x.onCurve||(u={x:(s.x+x.x)*.5,y:(s.y+x.y)*.5}),e.quadraticCurveTo(s.x,s.y,u.x,u.y)}e.closePath()}return e}function ps(t,e){if(e.isComposite)for(var r=0;r<e.components.length;r+=1){var n=e.components[r],a=t.get(n.glyphIndex);if(a.getPath(),a.points){var o=void 0;if(n.matchedPoints===void 0)o=h0(a.points,n);else{if(n.matchedPoints[0]>e.points.length-1||n.matchedPoints[1]>a.points.length-1)throw Error("Matched points out of range in "+e.name);var s=e.points[n.matchedPoints[0]],x=a.points[n.matchedPoints[1]],E={xScale:n.xScale,scale01:n.scale01,scale10:n.scale10,yScale:n.yScale,dx:0,dy:0};x=h0([x],E)[0],E.dx=s.x-x.x,E.dy=s.y-x.y,o=h0(a.points,E)}e.points=e.points.concat(o)}}return us(e.points)}function SL(t,e,r,n){for(var a=new vr.GlyphSet(n),o=0;o<r.length-1;o+=1){var s=r[o],x=r[o+1];s!==x?a.push(o,vr.ttfGlyphLoader(n,o,ds,t,e+s,ps)):a.push(o,vr.glyphLoader(n,o))}return a}function CL(t,e,r,n){var a=new vr.GlyphSet(n);return n._push=function(o){var s=r[o],x=r[o+1];s!==x?a.push(o,vr.ttfGlyphLoader(n,o,ds,t,e+s,ps)):a.push(o,vr.glyphLoader(n,o))},a}function gL(t,e,r,n,a){return a.lowMemory?CL(t,e,r,n):SL(t,e,r,n)}var Ss={getPath:us,parse:gL},Cs,Hn,gs,V0;function Rs(t){this.font=t,this.getCommands=function(e){return Ss.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function RL(t){return t}function ys(t){return Math.sign(t)*Math.round(Math.abs(t))}function yL(t){return Math.sign(t)*Math.round(Math.abs(t*2))/2}function mL(t){return Math.sign(t)*(Math.round(Math.abs(t)+.5)-.5)}function NL(t){return Math.sign(t)*Math.ceil(Math.abs(t))}function DL(t){return Math.sign(t)*Math.floor(Math.abs(t))}var ms=function(t){var e=this.srPeriod,r=this.srPhase,n=this.srThreshold,a=1;return t<0&&(t=-t,a=-1),t+=n-r,t=Math.trunc(t/e)*e,t+=r,t<0?r*a:t*a},br={x:1,y:0,axis:"x",distance:function(t,e,r,n){return(r?t.xo:t.x)-(n?e.xo:e.x)},interpolate:function(t,e,r,n){var a,o,s,x,E,T,u;if(!n||n===this){if(a=t.xo-e.xo,o=t.xo-r.xo,E=e.x-e.xo,T=r.x-r.xo,s=Math.abs(a),x=Math.abs(o),u=s+x,u===0){t.x=t.xo+(E+T)/2;return}t.x=t.xo+(E*x+T*s)/u;return}if(a=n.distance(t,e,!0,!0),o=n.distance(t,r,!0,!0),E=n.distance(e,e,!1,!0),T=n.distance(r,r,!1,!0),s=Math.abs(a),x=Math.abs(o),u=s+x,u===0){br.setRelative(t,t,(E+T)/2,n,!0);return}br.setRelative(t,t,(E*x+T*s)/u,n,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(t,e,r,n,a){if(!n||n===this){t.x=(a?e.xo:e.x)+r;return}var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,E=s+r*n.y;t.x=x+(t.y-E)/n.normalSlope},slope:0,touch:function(t){t.xTouched=!0},touched:function(t){return t.xTouched},untouch:function(t){t.xTouched=!1}},Kr={x:0,y:1,axis:"y",distance:function(t,e,r,n){return(r?t.yo:t.y)-(n?e.yo:e.y)},interpolate:function(t,e,r,n){var a,o,s,x,E,T,u;if(!n||n===this){if(a=t.yo-e.yo,o=t.yo-r.yo,E=e.y-e.yo,T=r.y-r.yo,s=Math.abs(a),x=Math.abs(o),u=s+x,u===0){t.y=t.yo+(E+T)/2;return}t.y=t.yo+(E*x+T*s)/u;return}if(a=n.distance(t,e,!0,!0),o=n.distance(t,r,!0,!0),E=n.distance(e,e,!1,!0),T=n.distance(r,r,!1,!0),s=Math.abs(a),x=Math.abs(o),u=s+x,u===0){Kr.setRelative(t,t,(E+T)/2,n,!0);return}Kr.setRelative(t,t,(E*x+T*s)/u,n,!0)},normalSlope:0,setRelative:function(t,e,r,n,a){if(!n||n===this){t.y=(a?e.yo:e.y)+r;return}var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,E=s+r*n.y;t.y=E+n.normalSlope*(t.x-x)},slope:Number.POSITIVE_INFINITY,touch:function(t){t.yTouched=!0},touched:function(t){return t.yTouched},untouch:function(t){t.yTouched=!1}};Object.freeze(br);Object.freeze(Kr);function Va(t,e){this.x=t,this.y=e,this.axis=void 0,this.slope=e/t,this.normalSlope=-t/e,Object.freeze(this)}Va.prototype.distance=function(t,e,r,n){return this.x*br.distance(t,e,r,n)+this.y*Kr.distance(t,e,r,n)};Va.prototype.interpolate=function(t,e,r,n){var a,o,s,x,E,T,u;if(s=n.distance(t,e,!0,!0),x=n.distance(t,r,!0,!0),a=n.distance(e,e,!1,!0),o=n.distance(r,r,!1,!0),E=Math.abs(s),T=Math.abs(x),u=E+T,u===0){this.setRelative(t,t,(a+o)/2,n,!0);return}this.setRelative(t,t,(a*T+o*E)/u,n,!0)};Va.prototype.setRelative=function(t,e,r,n,a){n=n||this;var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,E=s+r*n.y,T=n.normalSlope,u=this.slope,D=t.x,O=t.y;t.x=(u*D-T*x+E-O)/(u-T),t.y=u*(t.x-D)+O};Va.prototype.touch=function(t){t.xTouched=!0,t.yTouched=!0};function _a(t,e){var r=Math.sqrt(t*t+e*e);return t/=r,e/=r,t===1&&e===0?br:t===0&&e===1?Kr:new Va(t,e)}function _r(t,e,r,n){this.x=this.xo=Math.round(t*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=r,this.onCurve=n,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}_r.prototype.nextTouched=function(t){for(var e=this.nextPointOnContour;!t.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};_r.prototype.prevTouched=function(t){for(var e=this.prevPointOnContour;!t.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var fa=Object.freeze(new _r(0,0)),fL={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function xn(t,e){switch(this.env=t,this.stack=[],this.prog=e,t){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=br,this.round=ys}}Rs.prototype.exec=function(t,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var r=this.font,n=this._prepState;if(!n||n.ppem!==e){var a=this._fpgmState;if(!a){xn.prototype=fL,a=this._fpgmState=new xn("fpgm",r.tables.fpgm),a.funcs=[],a.font=r,ie.DEBUG&&(console.log("---EXEC FPGM---"),a.step=-1);try{Hn(a)}catch(T){console.log("Hinting error in FPGM:"+T),this._errorState=3;return}}xn.prototype=a,n=this._prepState=new xn("prep",r.tables.prep),n.ppem=e;var o=r.tables.cvt;if(o)for(var s=n.cvt=new Array(o.length),x=e/r.unitsPerEm,E=0;E<o.length;E++)s[E]=o[E]*x;else n.cvt=[];ie.DEBUG&&(console.log("---EXEC PREP---"),n.step=-1);try{Hn(n)}catch(T){this._errorState<2&&console.log("Hinting error in PREP:"+T),this._errorState=2}}if(!(this._errorState>1))try{return gs(t,n)}catch(T){this._errorState<1&&(console.log("Hinting error:"+T),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};gs=function(t,e){var r=e.ppem/e.font.unitsPerEm,n=r,a=t.components,o,s,x;if(xn.prototype=e,!a)x=new xn("glyf",t.instructions),ie.DEBUG&&(console.log("---EXEC GLYPH---"),x.step=-1),V0(t,x,r,n),s=x.gZone;else{var E=e.font;s=[],o=[];for(var T=0;T<a.length;T++){var u=a[T],D=E.glyphs.get(u.glyphIndex);x=new xn("glyf",D.instructions),ie.DEBUG&&(console.log("---EXEC COMP "+T+"---"),x.step=-1),V0(D,x,r,n);for(var O=Math.round(u.dx*r),g=Math.round(u.dy*n),V=x.gZone,Y=x.contours,J=0;J<V.length;J++){var K=V[J];K.xTouched=K.yTouched=!1,K.xo=K.x=K.x+O,K.yo=K.y=K.y+g}var re=s.length;s.push.apply(s,V);for(var Q=0;Q<Y.length;Q++)o.push(Y[Q]+re)}t.instructions&&!x.inhibitGridFit&&(x=new xn("glyf",t.instructions),x.gZone=x.z0=x.z1=x.z2=s,x.contours=o,s.push(new _r(0,0),new _r(Math.round(t.advanceWidth*r),0)),ie.DEBUG&&(console.log("---EXEC COMPOSITE---"),x.step=-1),Hn(x),s.length-=2)}return s};V0=function(t,e,r,n){for(var a=t.points||[],o=a.length,s=e.gZone=e.z0=e.z1=e.z2=[],x=e.contours=[],E,T=0;T<o;T++)E=a[T],s[T]=new _r(E.x*r,E.y*n,E.lastPointOfContour,E.onCurve);for(var u,D,O=0;O<o;O++)E=s[O],u||(u=E,x.push(O)),E.lastPointOfContour?(E.nextPointOnContour=u,u.prevPointOnContour=E,u=void 0):(D=s[O+1],E.nextPointOnContour=D,D.prevPointOnContour=E);if(!e.inhibitGridFit){if(ie.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var g=0;g<o;g++)console.log(g,s[g].x,s[g].y)}if(s.push(new _r(0,0),new _r(Math.round(t.advanceWidth*r),0)),Hn(e),s.length-=2,ie.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var V=0;V<o;V++)console.log(V,s[V].x,s[V].y)}}};Hn=function(t){var e=t.prog;if(e){var r=e.length,n;for(t.ip=0;t.ip<r;t.ip++){if(ie.DEBUG&&t.step++,n=Cs[e[t.ip]],!n)throw new Error("unknown instruction: 0x"+Number(e[t.ip]).toString(16));n(t)}}};function Ji(t){for(var e=t.tZone=new Array(t.gZone.length),r=0;r<e.length;r++)e[r]=new _r(0,0)}function Ns(t,e){var r=t.prog,n=t.ip,a=1,o;do if(o=r[++n],o===88)a++;else if(o===89)a--;else if(o===64)n+=r[n+1]+1;else if(o===65)n+=2*r[n+1]+1;else if(o>=176&&o<=183)n+=o-176+1;else if(o>=184&&o<=191)n+=(o-184+1)*2;else if(e&&a===1&&o===27)break;while(a>0);t.ip=n}function SA(t,e){ie.DEBUG&&console.log(e.step,"SVTCA["+t.axis+"]"),e.fv=e.pv=e.dpv=t}function CA(t,e){ie.DEBUG&&console.log(e.step,"SPVTCA["+t.axis+"]"),e.pv=e.dpv=t}function gA(t,e){ie.DEBUG&&console.log(e.step,"SFVTCA["+t.axis+"]"),e.fv=t}function RA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log("SPVTL["+t+"]",n,a);var x,E;t?(x=o.y-s.y,E=s.x-o.x):(x=s.x-o.x,E=s.y-o.y),e.pv=e.dpv=_a(x,E)}function yA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log("SFVTL["+t+"]",n,a);var x,E;t?(x=o.y-s.y,E=s.x-o.x):(x=s.x-o.x,E=s.y-o.y),e.fv=_a(x,E)}function OL(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SPVFS[]",r,n),t.pv=t.dpv=_a(n,r)}function BL(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SPVFS[]",r,n),t.fv=_a(n,r)}function HL(t){var e=t.stack,r=t.pv;ie.DEBUG&&console.log(t.step,"GPV[]"),e.push(r.x*16384),e.push(r.y*16384)}function FL(t){var e=t.stack,r=t.fv;ie.DEBUG&&console.log(t.step,"GFV[]"),e.push(r.x*16384),e.push(r.y*16384)}function ML(t){t.fv=t.pv,ie.DEBUG&&console.log(t.step,"SFVTPV[]")}function GL(t){var e=t.stack,r=e.pop(),n=e.pop(),a=e.pop(),o=e.pop(),s=e.pop(),x=t.z0,E=t.z1,T=x[r],u=x[n],D=E[a],O=E[o],g=t.z2[s];ie.DEBUG&&console.log("ISECT[], ",r,n,a,o,s);var V=T.x,Y=T.y,J=u.x,K=u.y,re=D.x,Q=D.y,oe=O.x,Ae=O.y,le=(V-J)*(Q-Ae)-(Y-K)*(re-oe),he=V*K-Y*J,Ie=re*Ae-Q*oe;g.x=(he*(re-oe)-Ie*(V-J))/le,g.y=(he*(Q-Ae)-Ie*(Y-K))/le}function PL(t){t.rp0=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP0[]",t.rp0)}function bL(t){t.rp1=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP1[]",t.rp1)}function vL(t){t.rp2=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP2[]",t.rp2)}function UL(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP0[]",e),t.zp0=e,e){case 0:t.tZone||Ji(t),t.z0=t.tZone;break;case 1:t.z0=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function wL(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP1[]",e),t.zp1=e,e){case 0:t.tZone||Ji(t),t.z1=t.tZone;break;case 1:t.z1=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function YL(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP2[]",e),t.zp2=e,e){case 0:t.tZone||Ji(t),t.z2=t.tZone;break;case 1:t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function WL(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZPS[]",e),t.zp0=t.zp1=t.zp2=e,e){case 0:t.tZone||Ji(t),t.z0=t.z1=t.z2=t.tZone;break;case 1:t.z0=t.z1=t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function kL(t){t.loop=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SLOOP[]",t.loop)}function KL(t){ie.DEBUG&&console.log(t.step,"RTG[]"),t.round=ys}function VL(t){ie.DEBUG&&console.log(t.step,"RTHG[]"),t.round=mL}function _L(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SMD[]",e),t.minDis=e/64}function zL(t){ie.DEBUG&&console.log(t.step,"ELSE[]"),Ns(t,!1)}function JL(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"JMPR[]",e),t.ip+=e-1}function ZL(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCVTCI[]",e),t.cvCutIn=e/64}function XL(t){var e=t.stack;ie.DEBUG&&console.log(t.step,"DUP[]"),e.push(e[e.length-1])}function c0(t){ie.DEBUG&&console.log(t.step,"POP[]"),t.stack.pop()}function jL(t){ie.DEBUG&&console.log(t.step,"CLEAR[]"),t.stack.length=0}function QL(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SWAP[]"),e.push(r),e.push(n)}function qL(t){var e=t.stack;ie.DEBUG&&console.log(t.step,"DEPTH[]"),e.push(e.length)}function $L(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LOOPCALL[]",r,n);var a=t.ip,o=t.prog;t.prog=t.funcs[r];for(var s=0;s<n;s++)Hn(t),ie.DEBUG&&console.log(++t.step,s+1<n?"next loopcall":"done loopcall",s);t.ip=a,t.prog=o}function eh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"CALL[]",e);var r=t.ip,n=t.prog;t.prog=t.funcs[e],Hn(t),t.ip=r,t.prog=n,ie.DEBUG&&console.log(++t.step,"returning from",e)}function th(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"CINDEX[]",r),e.push(e[e.length-r])}function rh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"MINDEX[]",r),e.push(e.splice(e.length-r,1)[0])}function nh(t){if(t.env!=="fpgm")throw new Error("FDEF not allowed here");var e=t.stack,r=t.prog,n=t.ip,a=e.pop(),o=n;for(ie.DEBUG&&console.log(t.step,"FDEF[]",a);r[++n]!==45;);t.ip=n,t.funcs[a]=r.slice(o+1,n)}function mA(t,e){var r=e.stack.pop(),n=e.z0[r],a=e.fv,o=e.pv;ie.DEBUG&&console.log(e.step,"MDAP["+t+"]",r);var s=o.distance(n,fa);t&&(s=e.round(s)),a.setRelative(n,fa,s,o),a.touch(n),e.rp0=e.rp1=r}function NA(t,e){var r=e.z2,n=r.length-2,a,o,s;ie.DEBUG&&console.log(e.step,"IUP["+t.axis+"]");for(var x=0;x<n;x++)a=r[x],!t.touched(a)&&(o=a.prevTouched(t),o!==a&&(s=a.nextTouched(t),o===s&&t.setRelative(a,a,t.distance(o,o,!1,!0),t,!0),t.interpolate(a,o,s,t)))}function DA(t,e){for(var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=e.loop,E=e.z2;x--;){var T=r.pop(),u=E[T],D=s.distance(a,a,!1,!0);o.setRelative(u,u,D,s),o.touch(u),ie.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-x)+": ":"")+"SHP["+(t?"rp1":"rp2")+"]",T)}e.loop=1}function fA(t,e){var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=r.pop(),E=e.z2[e.contours[x]],T=E;ie.DEBUG&&console.log(e.step,"SHC["+t+"]",x);var u=s.distance(a,a,!1,!0);do T!==a&&o.setRelative(T,T,u,s),T=T.nextPointOnContour;while(T!==E)}function OA(t,e){var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=r.pop();ie.DEBUG&&console.log(e.step,"SHZ["+t+"]",x);var E;switch(x){case 0:E=e.tZone;break;case 1:E=e.gZone;break;default:throw new Error("Invalid zone")}for(var T,u=s.distance(a,a,!1,!0),D=E.length-2,O=0;O<D;O++)T=E[O],o.setRelative(T,T,u,s)}function ah(t){for(var e=t.stack,r=t.loop,n=t.fv,a=e.pop()/64,o=t.z2;r--;){var s=e.pop(),x=o[s];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-r)+": ":"")+"SHPIX[]",s,a),n.setRelative(x,x,a),n.touch(x)}t.loop=1}function ih(t){for(var e=t.stack,r=t.rp1,n=t.rp2,a=t.loop,o=t.z0[r],s=t.z1[n],x=t.fv,E=t.dpv,T=t.z2;a--;){var u=e.pop(),D=T[u];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-a)+": ":"")+"IP[]",u,r,"<->",n),x.interpolate(D,o,s,E),x.touch(D)}t.loop=1}function BA(t,e){var r=e.stack,n=r.pop()/64,a=r.pop(),o=e.z1[a],s=e.z0[e.rp0],x=e.fv,E=e.pv;x.setRelative(o,s,n,E),x.touch(o),ie.DEBUG&&console.log(e.step,"MSIRP["+t+"]",n,a),e.rp1=e.rp0,e.rp2=a,t&&(e.rp0=a)}function oh(t){for(var e=t.stack,r=t.rp0,n=t.z0[r],a=t.loop,o=t.fv,s=t.pv,x=t.z1;a--;){var E=e.pop(),T=x[E];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-a)+": ":"")+"ALIGNRP[]",E),o.setRelative(T,n,0,s),o.touch(T)}t.loop=1}function Ah(t){ie.DEBUG&&console.log(t.step,"RTDG[]"),t.round=yL}function HA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z0[a],s=e.fv,x=e.pv,E=e.cvt[n];ie.DEBUG&&console.log(e.step,"MIAP["+t+"]",n,"(",E,")",a);var T=x.distance(o,fa);t&&(Math.abs(T-E)<e.cvCutIn&&(T=E),T=e.round(T)),s.setRelative(o,fa,T,x),e.zp0===0&&(o.xo=o.x,o.yo=o.y),s.touch(o),e.rp0=e.rp1=a}function sh(t){var e=t.prog,r=t.ip,n=t.stack,a=e[++r];ie.DEBUG&&console.log(t.step,"NPUSHB[]",a);for(var o=0;o<a;o++)n.push(e[++r]);t.ip=r}function lh(t){var e=t.ip,r=t.prog,n=t.stack,a=r[++e];ie.DEBUG&&console.log(t.step,"NPUSHW[]",a);for(var o=0;o<a;o++){var s=r[++e]<<8|r[++e];s&32768&&(s=-((s^65535)+1)),n.push(s)}t.ip=e}function xh(t){var e=t.stack,r=t.store;r||(r=t.store=[]);var n=e.pop(),a=e.pop();ie.DEBUG&&console.log(t.step,"WS",n,a),r[a]=n}function Eh(t){var e=t.stack,r=t.store,n=e.pop();ie.DEBUG&&console.log(t.step,"RS",n);var a=r&&r[n]||0;e.push(a)}function Lh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"WCVTP",r,n),t.cvt[n]=r/64}function hh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"RCVT",r),e.push(t.cvt[r]*64)}function FA(t,e){var r=e.stack,n=r.pop(),a=e.z2[n];ie.DEBUG&&console.log(e.step,"GC["+t+"]",n),r.push(e.dpv.distance(a,fa,t,!1)*64)}function MA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z1[n],s=e.z0[a],x=e.dpv.distance(s,o,t,t);ie.DEBUG&&console.log(e.step,"MD["+t+"]",n,a,"->",x),e.stack.push(Math.round(x*64))}function ch(t){ie.DEBUG&&console.log(t.step,"MPPEM[]"),t.stack.push(t.ppem)}function Th(t){ie.DEBUG&&console.log(t.step,"FLIPON[]"),t.autoFlip=!0}function Ih(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LT[]",r,n),e.push(n<r?1:0)}function dh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LTEQ[]",r,n),e.push(n<=r?1:0)}function uh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"GT[]",r,n),e.push(n>r?1:0)}function ph(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"GTEQ[]",r,n),e.push(n>=r?1:0)}function Sh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"EQ[]",r,n),e.push(r===n?1:0)}function Ch(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"NEQ[]",r,n),e.push(r!==n?1:0)}function gh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"ODD[]",r),e.push(Math.trunc(r)%2?1:0)}function Rh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"EVEN[]",r),e.push(Math.trunc(r)%2?0:1)}function yh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"IF[]",e),e||(Ns(t,!0),ie.DEBUG&&console.log(t.step,"EIF[]"))}function mh(t){ie.DEBUG&&console.log(t.step,"EIF[]")}function Nh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"AND[]",r,n),e.push(r&&n?1:0)}function Dh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"OR[]",r,n),e.push(r||n?1:0)}function fh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"NOT[]",r),e.push(r?0:1)}function T0(t,e){var r=e.stack,n=r.pop(),a=e.fv,o=e.pv,s=e.ppem,x=e.deltaBase+(t-1)*16,E=e.deltaShift,T=e.z0;ie.DEBUG&&console.log(e.step,"DELTAP["+t+"]",n,r);for(var u=0;u<n;u++){var D=r.pop(),O=r.pop(),g=x+((O&240)>>4);if(g===s){var V=(O&15)-8;V>=0&&V++,ie.DEBUG&&console.log(e.step,"DELTAPFIX",D,"by",V*E);var Y=T[D];a.setRelative(Y,Y,V*E,o)}}}function Oh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"SDB[]",r),t.deltaBase=r}function Bh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"SDS[]",r),t.deltaShift=Math.pow(.5,r)}function Hh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"ADD[]",r,n),e.push(n+r)}function Fh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SUB[]",r,n),e.push(n-r)}function Mh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"DIV[]",r,n),e.push(n*64/r)}function Gh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MUL[]",r,n),e.push(n*r/64)}function Ph(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"ABS[]",r),e.push(Math.abs(r))}function bh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"NEG[]",r),e.push(-r)}function vh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"FLOOR[]",r),e.push(Math.floor(r/64)*64)}function Uh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"CEILING[]",r),e.push(Math.ceil(r/64)*64)}function li(t,e){var r=e.stack,n=r.pop();ie.DEBUG&&console.log(e.step,"ROUND[]"),r.push(e.round(n/64)*64)}function wh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"WCVTF[]",r,n),t.cvt[n]=r*t.ppem/t.font.unitsPerEm}function I0(t,e){var r=e.stack,n=r.pop(),a=e.ppem,o=e.deltaBase+(t-1)*16,s=e.deltaShift;ie.DEBUG&&console.log(e.step,"DELTAC["+t+"]",n,r);for(var x=0;x<n;x++){var E=r.pop(),T=r.pop(),u=o+((T&240)>>4);if(u===a){var D=(T&15)-8;D>=0&&D++;var O=D*s;ie.DEBUG&&console.log(e.step,"DELTACFIX",E,"by",O),e.cvt[E]+=O}}}function Yh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SROUND[]",e),t.round=ms;var r;switch(e&192){case 0:r=.5;break;case 64:r=1;break;case 128:r=2;break;default:throw new Error("invalid SROUND value")}switch(t.srPeriod=r,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*r}function Wh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"S45ROUND[]",e),t.round=ms;var r;switch(e&192){case 0:r=Math.sqrt(2)/2;break;case 64:r=Math.sqrt(2);break;case 128:r=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(t.srPeriod=r,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*r}function kh(t){ie.DEBUG&&console.log(t.step,"ROFF[]"),t.round=RL}function Kh(t){ie.DEBUG&&console.log(t.step,"RUTG[]"),t.round=NL}function Vh(t){ie.DEBUG&&console.log(t.step,"RDTG[]"),t.round=DL}function _h(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCANCTRL[]",e)}function GA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log(e.step,"SDPVTL["+t+"]",n,a);var x,E;t?(x=o.y-s.y,E=s.x-o.x):(x=s.x-o.x,E=s.y-o.y),e.dpv=_a(x,E)}function zh(t){var e=t.stack,r=e.pop(),n=0;ie.DEBUG&&console.log(t.step,"GETINFO[]",r),r&1&&(n=35),r&32&&(n|=4096),e.push(n)}function Jh(t){var e=t.stack,r=e.pop(),n=e.pop(),a=e.pop();ie.DEBUG&&console.log(t.step,"ROLL[]"),e.push(n),e.push(r),e.push(a)}function Zh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MAX[]",r,n),e.push(Math.max(n,r))}function Xh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MIN[]",r,n),e.push(Math.min(n,r))}function jh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCANTYPE[]",e)}function Qh(t){var e=t.stack.pop(),r=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"INSTCTRL[]",e,r),e){case 1:t.inhibitGridFit=!!r;return;case 2:t.ignoreCvt=!!r;return;default:throw new Error("invalid INSTCTRL[] selector")}}function an(t,e){var r=e.stack,n=e.prog,a=e.ip;ie.DEBUG&&console.log(e.step,"PUSHB["+t+"]");for(var o=0;o<t;o++)r.push(n[++a]);e.ip=a}function on(t,e){var r=e.ip,n=e.prog,a=e.stack;ie.DEBUG&&console.log(e.ip,"PUSHW["+t+"]");for(var o=0;o<t;o++){var s=n[++r]<<8|n[++r];s&32768&&(s=-((s^65535)+1)),a.push(s)}e.ip=r}function ge(t,e,r,n,a,o){var s=o.stack,x=t&&s.pop(),E=s.pop(),T=o.rp0,u=o.z0[T],D=o.z1[E],O=o.minDis,g=o.fv,V=o.dpv,Y,J,K,re;J=Y=V.distance(D,u,!0,!0),K=J>=0?1:-1,J=Math.abs(J),t&&(re=o.cvt[x],n&&Math.abs(J-re)<o.cvCutIn&&(J=re)),r&&J<O&&(J=O),n&&(J=o.round(J)),g.setRelative(D,u,K*J,V),g.touch(D),ie.DEBUG&&console.log(o.step,(t?"MIRP[":"MDRP[")+(e?"M":"m")+(r?">":"_")+(n?"R":"_")+(a===0?"Gr":a===1?"Bl":a===2?"Wh":"")+"]",t?x+"("+o.cvt[x]+","+re+")":"",E,"(d =",Y,"->",K*J,")"),o.rp1=o.rp0,o.rp2=E,e&&(o.rp0=E)}Cs=[SA.bind(void 0,Kr),SA.bind(void 0,br),CA.bind(void 0,Kr),CA.bind(void 0,br),gA.bind(void 0,Kr),gA.bind(void 0,br),RA.bind(void 0,0),RA.bind(void 0,1),yA.bind(void 0,0),yA.bind(void 0,1),OL,BL,HL,FL,ML,GL,PL,bL,vL,UL,wL,YL,WL,kL,KL,VL,_L,zL,JL,ZL,void 0,void 0,XL,c0,jL,QL,qL,th,rh,void 0,void 0,void 0,$L,eh,nh,void 0,mA.bind(void 0,0),mA.bind(void 0,1),NA.bind(void 0,Kr),NA.bind(void 0,br),DA.bind(void 0,0),DA.bind(void 0,1),fA.bind(void 0,0),fA.bind(void 0,1),OA.bind(void 0,0),OA.bind(void 0,1),ah,ih,BA.bind(void 0,0),BA.bind(void 0,1),oh,Ah,HA.bind(void 0,0),HA.bind(void 0,1),sh,lh,xh,Eh,Lh,hh,FA.bind(void 0,0),FA.bind(void 0,1),void 0,MA.bind(void 0,0),MA.bind(void 0,1),ch,void 0,Th,void 0,void 0,Ih,dh,uh,ph,Sh,Ch,gh,Rh,yh,mh,Nh,Dh,fh,T0.bind(void 0,1),Oh,Bh,Hh,Fh,Mh,Gh,Ph,bh,vh,Uh,li.bind(void 0,0),li.bind(void 0,1),li.bind(void 0,2),li.bind(void 0,3),void 0,void 0,void 0,void 0,wh,T0.bind(void 0,2),T0.bind(void 0,3),I0.bind(void 0,1),I0.bind(void 0,2),I0.bind(void 0,3),Yh,Wh,void 0,void 0,kh,void 0,Kh,Vh,c0,c0,void 0,void 0,void 0,void 0,void 0,_h,GA.bind(void 0,0),GA.bind(void 0,1),zh,void 0,Jh,Zh,Xh,jh,Qh,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,an.bind(void 0,1),an.bind(void 0,2),an.bind(void 0,3),an.bind(void 0,4),an.bind(void 0,5),an.bind(void 0,6),an.bind(void 0,7),an.bind(void 0,8),on.bind(void 0,1),on.bind(void 0,2),on.bind(void 0,3),on.bind(void 0,4),on.bind(void 0,5),on.bind(void 0,6),on.bind(void 0,7),on.bind(void 0,8),ge.bind(void 0,0,0,0,0,0),ge.bind(void 0,0,0,0,0,1),ge.bind(void 0,0,0,0,0,2),ge.bind(void 0,0,0,0,0,3),ge.bind(void 0,0,0,0,1,0),ge.bind(void 0,0,0,0,1,1),ge.bind(void 0,0,0,0,1,2),ge.bind(void 0,0,0,0,1,3),ge.bind(void 0,0,0,1,0,0),ge.bind(void 0,0,0,1,0,1),ge.bind(void 0,0,0,1,0,2),ge.bind(void 0,0,0,1,0,3),ge.bind(void 0,0,0,1,1,0),ge.bind(void 0,0,0,1,1,1),ge.bind(void 0,0,0,1,1,2),ge.bind(void 0,0,0,1,1,3),ge.bind(void 0,0,1,0,0,0),ge.bind(void 0,0,1,0,0,1),ge.bind(void 0,0,1,0,0,2),ge.bind(void 0,0,1,0,0,3),ge.bind(void 0,0,1,0,1,0),ge.bind(void 0,0,1,0,1,1),ge.bind(void 0,0,1,0,1,2),ge.bind(void 0,0,1,0,1,3),ge.bind(void 0,0,1,1,0,0),ge.bind(void 0,0,1,1,0,1),ge.bind(void 0,0,1,1,0,2),ge.bind(void 0,0,1,1,0,3),ge.bind(void 0,0,1,1,1,0),ge.bind(void 0,0,1,1,1,1),ge.bind(void 0,0,1,1,1,2),ge.bind(void 0,0,1,1,1,3),ge.bind(void 0,1,0,0,0,0),ge.bind(void 0,1,0,0,0,1),ge.bind(void 0,1,0,0,0,2),ge.bind(void 0,1,0,0,0,3),ge.bind(void 0,1,0,0,1,0),ge.bind(void 0,1,0,0,1,1),ge.bind(void 0,1,0,0,1,2),ge.bind(void 0,1,0,0,1,3),ge.bind(void 0,1,0,1,0,0),ge.bind(void 0,1,0,1,0,1),ge.bind(void 0,1,0,1,0,2),ge.bind(void 0,1,0,1,0,3),ge.bind(void 0,1,0,1,1,0),ge.bind(void 0,1,0,1,1,1),ge.bind(void 0,1,0,1,1,2),ge.bind(void 0,1,0,1,1,3),ge.bind(void 0,1,1,0,0,0),ge.bind(void 0,1,1,0,0,1),ge.bind(void 0,1,1,0,0,2),ge.bind(void 0,1,1,0,0,3),ge.bind(void 0,1,1,0,1,0),ge.bind(void 0,1,1,0,1,1),ge.bind(void 0,1,1,0,1,2),ge.bind(void 0,1,1,0,1,3),ge.bind(void 0,1,1,1,0,0),ge.bind(void 0,1,1,1,0,1),ge.bind(void 0,1,1,1,0,2),ge.bind(void 0,1,1,1,0,3),ge.bind(void 0,1,1,1,1,0),ge.bind(void 0,1,1,1,1,1),ge.bind(void 0,1,1,1,1,2),ge.bind(void 0,1,1,1,1,3)];function la(t){this.char=t,this.state={},this.activeState=null}function yo(t,e,r){this.contextName=r,this.startIndex=t,this.endOffset=e}function qh(t,e,r){this.contextName=t,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=r}function Rr(t,e){this.context=t,this.index=e,this.length=t.length,this.current=t[e],this.backtrack=t.slice(0,e),this.lookahead=t.slice(e+1)}function Zi(t){this.eventId=t,this.subscribers=[]}function $h(t){var e=this,r=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];r.forEach(function(a){Object.defineProperty(e.events,a,{value:new Zi(a)})}),t&&r.forEach(function(a){var o=t[a];typeof o=="function"&&e.events[a].subscribe(o)});var n=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];n.forEach(function(a){e.events[a].subscribe(e.updateContextsRanges)})}function gt(t){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],$h.call(this,t)}la.prototype.setState=function(t,e){return this.state[t]=e,this.activeState={key:t,value:this.state[t]},this.activeState};la.prototype.getState=function(t){return this.state[t]||null};gt.prototype.inboundIndex=function(t){return t>=0&&t<this.tokens.length};gt.prototype.composeRUD=function(t){var e=this,r=!0,n=t.map(function(o){return e[o[0]].apply(e,o.slice(1).concat(r))}),a=function(o){return typeof o=="object"&&o.hasOwnProperty("FAIL")};if(n.every(a))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:n.filter(a)};this.dispatch("composeRUD",[n.filter(function(o){return!a(o)})])};gt.prototype.replaceRange=function(t,e,r,n){e=e!==null?e:this.tokens.length;var a=r.every(function(s){return s instanceof la});if(!isNaN(t)&&this.inboundIndex(t)&&a){var o=this.tokens.splice.apply(this.tokens,[t,e].concat(r));return n||this.dispatch("replaceToken",[t,e,r]),[o,r]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};gt.prototype.replaceToken=function(t,e,r){if(!isNaN(t)&&this.inboundIndex(t)&&e instanceof la){var n=this.tokens.splice(t,1,e);return r||this.dispatch("replaceToken",[t,e]),[n[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};gt.prototype.removeRange=function(t,e,r){e=isNaN(e)?this.tokens.length:e;var n=this.tokens.splice(t,e);return r||this.dispatch("removeRange",[n,t,e]),n};gt.prototype.removeToken=function(t,e){if(!isNaN(t)&&this.inboundIndex(t)){var r=this.tokens.splice(t,1);return e||this.dispatch("removeToken",[r,t]),r}else return{FAIL:"removeToken: invalid token index."}};gt.prototype.insertToken=function(t,e,r){var n=t.every(function(a){return a instanceof la});return n?(this.tokens.splice.apply(this.tokens,[e,0].concat(t)),r||this.dispatch("insertToken",[t,e]),t):{FAIL:"insertToken: invalid token(s)."}};gt.prototype.registerModifier=function(t,e,r){this.events.newToken.subscribe(function(n,a){var o=[n,a],s=e===null||e.apply(this,o)===!0,x=[n,a];if(s){var E=r.apply(this,x);n.setState(t,E)}}),this.registeredModifiers.push(t)};Zi.prototype.subscribe=function(t){return typeof t=="function"?this.subscribers.push(t)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};Zi.prototype.unsubscribe=function(t){this.subscribers.splice(t,1)};Rr.prototype.setCurrentIndex=function(t){this.index=t,this.current=this.context[t],this.backtrack=this.context.slice(0,t),this.lookahead=this.context.slice(t+1)};Rr.prototype.get=function(t){switch(!0){case t===0:return this.current;case(t<0&&Math.abs(t)<=this.backtrack.length):return this.backtrack.slice(t)[0];case(t>0&&t<=this.lookahead.length):return this.lookahead[t-1];default:return null}};gt.prototype.rangeToText=function(t){if(t instanceof yo)return this.getRangeTokens(t).map(function(e){return e.char}).join("")};gt.prototype.getText=function(){return this.tokens.map(function(t){return t.char}).join("")};gt.prototype.getContext=function(t){var e=this.registeredContexts[t];return e||null};gt.prototype.on=function(t,e){var r=this.events[t];return r?r.subscribe(e):null};gt.prototype.dispatch=function(t,e){var r=this,n=this.events[t];n instanceof Zi&&n.subscribers.forEach(function(a){a.apply(r,e||[])})};gt.prototype.registerContextChecker=function(t,e,r){if(this.getContext(t))return{FAIL:"context name '"+t+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof r!="function")return{FAIL:"missing context end check."};var n=new qh(t,e,r);return this.registeredContexts[t]=n,this.contextCheckers.push(n),n};gt.prototype.getRangeTokens=function(t){var e=t.startIndex+t.endOffset;return[].concat(this.tokens.slice(t.startIndex,e))};gt.prototype.getContextRanges=function(t){var e=this.getContext(t);return e?e.ranges:{FAIL:"context checker '"+t+"' is not registered."}};gt.prototype.resetContextsRanges=function(){var t=this.registeredContexts;for(var e in t)if(t.hasOwnProperty(e)){var r=t[e];r.ranges=[]}};gt.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var t=this.tokens.map(function(n){return n.char}),e=0;e<t.length;e++){var r=new Rr(t,e);this.runContextCheck(r)}this.dispatch("updateContextsRanges",[this.registeredContexts])};gt.prototype.setEndOffset=function(t,e){var r=this.getContext(e).openRange.startIndex,n=new yo(r,t,e),a=this.getContext(e).ranges;return n.rangeId=e+"."+a.length,a.push(n),this.getContext(e).openRange=null,n};gt.prototype.runContextCheck=function(t){var e=this,r=t.index;this.contextCheckers.forEach(function(n){var a=n.contextName,o=e.getContext(a).openRange;if(!o&&n.checkStart(t)&&(o=new yo(r,null,a),e.getContext(a).openRange=o,e.dispatch("contextStart",[a,r])),o&&n.checkEnd(t)){var s=r-o.startIndex+1,x=e.setEndOffset(s,a);e.dispatch("contextEnd",[a,x])}})};gt.prototype.tokenize=function(t){this.tokens=[],this.resetContextsRanges();var e=Array.from(t);this.dispatch("start");for(var r=0;r<e.length;r++){var n=e[r],a=new Rr(e,r);this.dispatch("next",[a]),this.runContextCheck(a);var o=new la(n);this.tokens.push(o),this.dispatch("newToken",[o,a])}return this.dispatch("end",[this.tokens]),this.tokens};function Ln(t){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(t)}function Ds(t){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(t)}function dn(t){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(t)}function di(t){return/[A-z]/.test(t)}function ec(t){return/\s/.test(t)}function Lr(t){this.font=t,this.features={}}function Nn(t){this.id=t.id,this.tag=t.tag,this.substitution=t.substitution}function za(t,e){if(!t)return-1;switch(e.format){case 1:return e.glyphs.indexOf(t);case 2:for(var r=e.ranges,n=0;n<r.length;n++){var a=r[n];if(t>=a.start&&t<=a.end){var o=t-a.start;return a.index+o}}break;default:return-1}return-1}function tc(t,e){var r=za(t,e.coverage);return r===-1?null:t+e.deltaGlyphId}function rc(t,e){var r=za(t,e.coverage);return r===-1?null:e.substitute[r]}function d0(t,e){for(var r=[],n=0;n<t.length;n++){var a=t[n],o=e.current;o=Array.isArray(o)?o[0]:o;var s=za(o,a);s!==-1&&r.push(s)}return r.length!==t.length?-1:r}function nc(t,e){var r=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(t.context.length<r)return[];var n=d0(e.inputCoverage,t);if(n===-1)return[];var a=e.inputCoverage.length-1;if(t.lookahead.length<e.lookaheadCoverage.length)return[];for(var o=t.lookahead.slice(a);o.length&&dn(o[0].char);)o.shift();var s=new Rr(o,0),x=d0(e.lookaheadCoverage,s),E=[].concat(t.backtrack);for(E.reverse();E.length&&dn(E[0].char);)E.shift();if(E.length<e.backtrackCoverage.length)return[];var T=new Rr(E,0),u=d0(e.backtrackCoverage,T),D=n.length===e.inputCoverage.length&&x.length===e.lookaheadCoverage.length&&u.length===e.backtrackCoverage.length,O=[];if(D)for(var g=0;g<e.lookupRecords.length;g++)for(var V=e.lookupRecords[g],Y=V.lookupListIndex,J=this.getLookupByIndex(Y),K=0;K<J.subtables.length;K++){var re=J.subtables[K],Q=this.getLookupMethod(J,re),oe=this.getSubstitutionType(J,re);if(oe==="12")for(var Ae=0;Ae<n.length;Ae++){var le=t.get(Ae),he=Q(le);he&&O.push(he)}}return O}function ac(t,e){var r=t.current,n=za(r,e.coverage);if(n===-1)return null;for(var a,o=e.ligatureSets[n],s=0;s<o.length;s++){a=o[s];for(var x=0;x<a.components.length;x++){var E=t.lookahead[x],T=a.components[x];if(E!==T)break;if(x===a.components.length-1)return a}}return null}function ic(t,e){var r=za(t,e.coverage);return r===-1?null:e.sequences[r]}Lr.prototype.getDefaultScriptFeaturesIndexes=function(){for(var t=this.font.tables.gsub.scripts,e=0;e<t.length;e++){var r=t[e];if(r.tag==="DFLT")return r.script.defaultLangSys.featureIndexes}return[]};Lr.prototype.getScriptFeaturesIndexes=function(t){var e=this.font.tables;if(!e.gsub)return[];if(!t)return this.getDefaultScriptFeaturesIndexes();for(var r=this.font.tables.gsub.scripts,n=0;n<r.length;n++){var a=r[n];if(a.tag===t&&a.script.defaultLangSys)return a.script.defaultLangSys.featureIndexes;var o=a.langSysRecords;if(o)for(var s=0;s<o.length;s++){var x=o[s];if(x.tag===t){var E=x.langSys;return E.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};Lr.prototype.mapTagsToFeatures=function(t,e){for(var r={},n=0;n<t.length;n++){var a=t[n].tag,o=t[n].feature;r[a]=o}this.features[e].tags=r};Lr.prototype.getScriptFeatures=function(t){var e=this.features[t];if(this.features.hasOwnProperty(t))return e;var r=this.getScriptFeaturesIndexes(t);if(!r)return null;var n=this.font.tables.gsub;return e=r.map(function(a){return n.features[a]}),this.features[t]=e,this.mapTagsToFeatures(e,t),e};Lr.prototype.getSubstitutionType=function(t,e){var r=t.lookupType.toString(),n=e.substFormat.toString();return r+n};Lr.prototype.getLookupMethod=function(t,e){var r=this,n=this.getSubstitutionType(t,e);switch(n){case"11":return function(a){return tc.apply(r,[a,e])};case"12":return function(a){return rc.apply(r,[a,e])};case"63":return function(a){return nc.apply(r,[a,e])};case"41":return function(a){return ac.apply(r,[a,e])};case"21":return function(a){return ic.apply(r,[a,e])};default:throw new Error("lookupType: "+t.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};Lr.prototype.lookupFeature=function(t){var e=t.contextParams,r=e.index,n=this.getFeature({tag:t.tag,script:t.script});if(!n)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+t.tag+"' for script '"+t.script+"'.");for(var a=this.getFeatureLookups(n),o=[].concat(e.context),s=0;s<a.length;s++)for(var x=a[s],E=this.getLookupSubtables(x),T=0;T<E.length;T++){var u=E[T],D=this.getSubstitutionType(x,u),O=this.getLookupMethod(x,u),g=void 0;switch(D){case"11":g=O(e.current),g&&o.splice(r,1,new Nn({id:11,tag:t.tag,substitution:g}));break;case"12":g=O(e.current),g&&o.splice(r,1,new Nn({id:12,tag:t.tag,substitution:g}));break;case"63":g=O(e),Array.isArray(g)&&g.length&&o.splice(r,1,new Nn({id:63,tag:t.tag,substitution:g}));break;case"41":g=O(e),g&&o.splice(r,1,new Nn({id:41,tag:t.tag,substitution:g}));break;case"21":g=O(e.current),g&&o.splice(r,1,new Nn({id:21,tag:t.tag,substitution:g}));break}e=new Rr(o,r),!(Array.isArray(g)&&!g.length)&&(g=null)}return o.length?o:null};Lr.prototype.supports=function(t){if(!t.script)return!1;this.getScriptFeatures(t.script);var e=this.features.hasOwnProperty(t.script);if(!t.tag)return e;var r=this.features[t.script].some(function(n){return n.tag===t.tag});return e&&r};Lr.prototype.getLookupSubtables=function(t){return t.subtables||null};Lr.prototype.getLookupByIndex=function(t){var e=this.font.tables.gsub.lookups;return e[t]||null};Lr.prototype.getFeatureLookups=function(t){return t.lookupListIndexes.map(this.getLookupByIndex.bind(this))};Lr.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var r=this.features[e.script];return r?r.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function oc(t){var e=t.current,r=t.get(-1);return r===null&&Ln(e)||!Ln(r)&&Ln(e)}function Ac(t){var e=t.get(1);return e===null||!Ln(e)}var sc={startCheck:oc,endCheck:Ac};function lc(t){var e=t.current,r=t.get(-1);return(Ln(e)||dn(e))&&!Ln(r)}function xc(t){var e=t.get(1);switch(!0){case e===null:return!0;case(!Ln(e)&&!dn(e)):var r=ec(e);if(!r)return!0;if(r){var n=!1;if(n=t.lookahead.some(function(a){return Ln(a)||dn(a)}),!n)return!0}break;default:return!1}}var Ec={startCheck:lc,endCheck:xc};function Lc(t,e,r){e[r].setState(t.tag,t.substitution)}function hc(t,e,r){e[r].setState(t.tag,t.substitution)}function cc(t,e,r){t.substitution.forEach(function(n,a){var o=e[r+a];o.setState(t.tag,n)})}function Tc(t,e,r){var n=e[r];n.setState(t.tag,t.substitution.ligGlyph);for(var a=t.substitution.components.length,o=0;o<a;o++)n=e[r+o+1],n.setState("deleted",!0)}var PA={11:Lc,12:hc,63:cc,41:Tc};function mo(t,e,r){t instanceof Nn&&PA[t.id]&&PA[t.id](t,e,r)}function Ic(t){for(var e=[].concat(t.backtrack),r=e.length-1;r>=0;r--){var n=e[r],a=Ds(n),o=dn(n);if(!a&&!o)return!0;if(a)return!1}return!1}function dc(t){if(Ds(t.current))return!1;for(var e=0;e<t.lookahead.length;e++){var r=t.lookahead[e],n=dn(r);if(!n)return!0}return!1}function uc(t){var e=this,r="arab",n=this.featuresTags[r],a=this.tokenizer.getRangeTokens(t);if(a.length!==1){var o=new Rr(a.map(function(x){return x.getState("glyphIndex")}),0),s=new Rr(a.map(function(x){return x.char}),0);a.forEach(function(x,E){if(!dn(x.char)){o.setCurrentIndex(E),s.setCurrentIndex(E);var T=0;Ic(s)&&(T|=1),dc(s)&&(T|=2);var u;switch(T){case 1:u="fina";break;case 2:u="init";break;case 3:u="medi";break}if(n.indexOf(u)!==-1){var D=e.query.lookupFeature({tag:u,script:r,contextParams:o});if(D instanceof Error)return console.info(D.message);D.forEach(function(O,g){O instanceof Nn&&(mo(O,a,g),o.context[g]=O.substitution)})}}})}}function bA(t,e){var r=t.map(function(n){return n.activeState.value});return new Rr(r,e||0)}function pc(t){var e=this,r="arab",n=this.tokenizer.getRangeTokens(t),a=bA(n);a.context.forEach(function(o,s){a.setCurrentIndex(s);var x=e.query.lookupFeature({tag:"rlig",script:r,contextParams:a});x.length&&(x.forEach(function(E){return mo(E,n,s)}),a=bA(n))})}function Sc(t){var e=t.current,r=t.get(-1);return r===null&&di(e)||!di(r)&&di(e)}function Cc(t){var e=t.get(1);return e===null||!di(e)}var gc={startCheck:Sc,endCheck:Cc};function vA(t,e){var r=t.map(function(n){return n.activeState.value});return new Rr(r,e||0)}function Rc(t){var e=this,r="latn",n=this.tokenizer.getRangeTokens(t),a=vA(n);a.context.forEach(function(o,s){a.setCurrentIndex(s);var x=e.query.lookupFeature({tag:"liga",script:r,contextParams:a});x.length&&(x.forEach(function(E){return mo(E,n,s)}),a=vA(n))})}function Nr(t){this.baseDir=t||"ltr",this.tokenizer=new gt,this.featuresTags={}}Nr.prototype.setText=function(t){this.text=t};Nr.prototype.contextChecks={latinWordCheck:gc,arabicWordCheck:sc,arabicSentenceCheck:Ec};function u0(t){var e=this.contextChecks[t+"Check"];return this.tokenizer.registerContextChecker(t,e.startCheck,e.endCheck)}function yc(){return u0.call(this,"latinWord"),u0.call(this,"arabicWord"),u0.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function mc(){var t=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(r){var n=t.tokenizer.getRangeTokens(r);t.tokenizer.replaceRange(r.startIndex,r.endOffset,n.reverse())})}Nr.prototype.registerFeatures=function(t,e){var r=this,n=e.filter(function(a){return r.query.supports({script:t,tag:a})});this.featuresTags.hasOwnProperty(t)?this.featuresTags[t]=this.featuresTags[t].concat(n):this.featuresTags[t]=n};Nr.prototype.applyFeatures=function(t,e){if(!t)throw new Error("No valid font was provided to apply features");this.query||(this.query=new Lr(t));for(var r=0;r<e.length;r++){var n=e[r];this.query.supports({script:n.script})&&this.registerFeatures(n.script,n.tags)}};Nr.prototype.registerModifier=function(t,e,r){this.tokenizer.registerModifier(t,e,r)};function No(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function Nc(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){No.call(this);var r=this.tokenizer.getContextRanges("arabicWord");r.forEach(function(n){uc.call(t,n)})}}function Dc(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var r=this.featuresTags[e];if(r.indexOf("rlig")!==-1){No.call(this);var n=this.tokenizer.getContextRanges("arabicWord");n.forEach(function(a){pc.call(t,a)})}}}function fc(){var t=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var r=this.featuresTags[e];if(r.indexOf("liga")!==-1){No.call(this);var n=this.tokenizer.getContextRanges("latinWord");n.forEach(function(a){Rc.call(t,a)})}}}Nr.prototype.checkContextReady=function(t){return!!this.tokenizer.getContext(t)};Nr.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(Nc.call(this),Dc.call(this)),this.checkContextReady("latinWord")&&fc.call(this),this.checkContextReady("arabicSentence")&&mc.call(this)};Nr.prototype.processText=function(t){(!this.text||this.text!==t)&&(this.setText(t),yc.call(this),this.applyFeaturesToContexts())};Nr.prototype.getBidiText=function(t){return this.processText(t),this.tokenizer.getText()};Nr.prototype.getTextGlyphs=function(t){this.processText(t);for(var e=[],r=0;r<this.tokenizer.tokens.length;r++){var n=this.tokenizer.tokens[r];if(!n.state.deleted){var a=n.activeState.value;e.push(Array.isArray(a)?a[0]:a)}}return e};function lt(t){t=t||{},t.tables=t.tables||{},t.empty||(ca(t.familyName,"When creating a new Font object, familyName is required."),ca(t.styleName,"When creating a new Font object, styleName is required."),ca(t.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),ca(t.ascender,"When creating a new Font object, ascender is required."),ca(t.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:t.familyName||" "},fontSubfamily:{en:t.styleName||" "},fullName:{en:t.fullName||t.familyName+" "+t.styleName},postScriptName:{en:t.postScriptName||(t.familyName+t.styleName).replace(/\s/g,"")},designer:{en:t.designer||" "},designerURL:{en:t.designerURL||" "},manufacturer:{en:t.manufacturer||" "},manufacturerURL:{en:t.manufacturerURL||" "},license:{en:t.license||" "},licenseURL:{en:t.licenseURL||" "},version:{en:t.version||"Version 0.1"},description:{en:t.description||" "},copyright:{en:t.copyright||" "},trademark:{en:t.trademark||" "}},this.unitsPerEm=t.unitsPerEm||1e3,this.ascender=t.ascender,this.descender=t.descender,this.createdTimestamp=t.createdTimestamp,this.tables=Object.assign(t.tables,{os2:Object.assign({usWeightClass:t.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:t.widthClass||this.usWidthClasses.MEDIUM,fsSelection:t.fsSelection||this.fsSelectionValues.REGULAR},t.tables.os2)})),this.supported=!0,this.glyphs=new vr.GlyphSet(this,t.glyphs||[]),this.encoding=new _1(this),this.position=new Ka(this),this.substitution=new Er(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new Rs(this)}})}lt.prototype.hasChar=function(t){return this.encoding.charToGlyphIndex(t)!==null};lt.prototype.charToGlyphIndex=function(t){return this.encoding.charToGlyphIndex(t)};lt.prototype.charToGlyph=function(t){var e=this.charToGlyphIndex(t),r=this.glyphs.get(e);return r||(r=this.glyphs.get(0)),r};lt.prototype.updateFeatures=function(t){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(r){return t[r]})}:e})};lt.prototype.stringToGlyphs=function(t,e){var r=this,n=new Nr,a=function(D){return r.charToGlyphIndex(D.char)};n.registerModifier("glyphIndex",null,a);var o=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;n.applyFeatures(this,o);for(var s=n.getTextGlyphs(t),x=s.length,E=new Array(x),T=this.glyphs.get(0),u=0;u<x;u+=1)E[u]=this.glyphs.get(s[u])||T;return E};lt.prototype.nameToGlyphIndex=function(t){return this.glyphNames.nameToGlyphIndex(t)};lt.prototype.nameToGlyph=function(t){var e=this.nameToGlyphIndex(t),r=this.glyphs.get(e);return r||(r=this.glyphs.get(0)),r};lt.prototype.glyphIndexToName=function(t){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(t):""};lt.prototype.getKerningValue=function(t,e){t=t.index||t,e=e.index||e;var r=this.position.defaultKerningTables;return r?this.position.getKerningValue(r,t,e):this.kerningPairs[t+","+e]||0};lt.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};lt.prototype.forEachGlyph=function(t,e,r,n,a,o){e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:72,a=Object.assign({},this.defaultRenderOptions,a);var s=1/this.unitsPerEm*n,x=this.stringToGlyphs(t,a),E;if(a.kerning){var T=a.script||this.position.getDefaultScriptName();E=this.position.getKerningTables(T,a.language)}for(var u=0;u<x.length;u+=1){var D=x[u];if(o.call(this,D,e,r,n,a),D.advanceWidth&&(e+=D.advanceWidth*s),a.kerning&&u<x.length-1){var O=E?this.position.getKerningValue(E,D.index,x[u+1].index):this.getKerningValue(D,x[u+1]);e+=O*s}a.letterSpacing?e+=a.letterSpacing*n:a.tracking&&(e+=a.tracking/1e3*n)}return e};lt.prototype.getPath=function(t,e,r,n,a){var o=new Ft;return this.forEachGlyph(t,e,r,n,a,function(s,x,E,T){var u=s.getPath(x,E,T,a,this);o.extend(u)}),o};lt.prototype.getPaths=function(t,e,r,n,a){var o=[];return this.forEachGlyph(t,e,r,n,a,function(s,x,E,T){var u=s.getPath(x,E,T,a,this);o.push(u)}),o};lt.prototype.getAdvanceWidth=function(t,e,r){return this.forEachGlyph(t,0,0,e,r,function(){})};lt.prototype.draw=function(t,e,r,n,a,o){this.getPath(e,r,n,a,o).draw(t)};lt.prototype.drawPoints=function(t,e,r,n,a,o){this.forEachGlyph(e,r,n,a,o,function(s,x,E,T){s.drawPoints(t,x,E,T)})};lt.prototype.drawMetrics=function(t,e,r,n,a,o){this.forEachGlyph(e,r,n,a,o,function(s,x,E,T){s.drawMetrics(t,x,E,T)})};lt.prototype.getEnglishName=function(t){var e=this.names[t];if(e)return e.en};lt.prototype.validate=function(){var t=this;function e(n,a){}function r(n){var a=t.getEnglishName(n);a&&a.trim().length>0}r("fontFamily"),r("weightName"),r("manufacturer"),r("copyright"),r("version"),this.unitsPerEm>0};lt.prototype.toTables=function(){return TL.fontToTable(this)};lt.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};lt.prototype.toArrayBuffer=function(){for(var t=this.toTables(),e=t.encode(),r=new ArrayBuffer(e.length),n=new Uint8Array(r),a=0;a<e.length;a++)n[a]=e[a];return r};lt.prototype.download=function(t){var e=this.getEnglishName("fontFamily"),r=this.getEnglishName("fontSubfamily");t=t||e.replace(/\s/g,"")+"-"+r+".otf";var n=this.toArrayBuffer();if(dL())if(window.URL=window.URL||window.webkitURL,window.URL){var a=new DataView(n),o=new Blob([a],{type:"font/opentype"}),s=document.createElement("a");s.href=window.URL.createObjectURL(o),s.download=t;var x=document.createEvent("MouseEvents");x.initEvent("click",!0,!1),s.dispatchEvent(x)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var E=require("fs"),T=uL(n);E.writeFileSync(t,T)}};lt.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};lt.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};lt.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function fs(t,e){var r=JSON.stringify(t),n=256;for(var a in e){var o=parseInt(a);if(!(!o||o<256)){if(JSON.stringify(e[a])===r)return o;n<=o&&(n=o+1)}}return e[n]=t,n}function Oc(t,e,r){var n=fs(e.name,r);return[{name:"tag_"+t,type:"TAG",value:e.tag},{name:"minValue_"+t,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+t,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+t,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+t,type:"USHORT",value:0},{name:"nameID_"+t,type:"USHORT",value:n}]}function Bc(t,e,r){var n={},a=new Re.Parser(t,e);return n.tag=a.parseTag(),n.minValue=a.parseFixed(),n.defaultValue=a.parseFixed(),n.maxValue=a.parseFixed(),a.skip("uShort",1),n.name=r[a.parseUShort()]||{},n}function Hc(t,e,r,n){for(var a=fs(e.name,n),o=[{name:"nameID_"+t,type:"USHORT",value:a},{name:"flags_"+t,type:"USHORT",value:0}],s=0;s<r.length;++s){var x=r[s].tag;o.push({name:"axis_"+t+" "+x,type:"FIXED",value:e.coordinates[x]<<16})}return o}function Fc(t,e,r,n){var a={},o=new Re.Parser(t,e);a.name=n[o.parseUShort()]||{},o.skip("uShort",1),a.coordinates={};for(var s=0;s<r.length;++s)a.coordinates[r[s].tag]=o.parseFixed();return a}function Mc(t,e){var r=new Ce.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:t.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:t.instances.length},{name:"instanceSize",type:"USHORT",value:4+t.axes.length*4}]);r.offsetToData=r.sizeOf();for(var n=0;n<t.axes.length;n++)r.fields=r.fields.concat(Oc(n,t.axes[n],e));for(var a=0;a<t.instances.length;a++)r.fields=r.fields.concat(Hc(a,t.instances[a],t.axes,e));return r}function Gc(t,e,r){var n=new Re.Parser(t,e),a=n.parseULong();Fe.argument(a===65536,"Unsupported fvar table version.");var o=n.parseOffset16();n.skip("uShort",1);for(var s=n.parseUShort(),x=n.parseUShort(),E=n.parseUShort(),T=n.parseUShort(),u=[],D=0;D<s;D++)u.push(Bc(t,e+o+D*x,r));for(var O=[],g=e+o+s*x,V=0;V<E;V++)O.push(Fc(t,g+V*T,u,r));return{axes:u,instances:O}}var Pc={make:Mc,parse:Gc},bc=function(){return{coverage:this.parsePointer(ee.coverage),attachPoints:this.parseList(ee.pointer(ee.uShortList))}},vc=function(){var t=this.parseUShort();if(Fe.argument(t===1||t===2||t===3,"Unsupported CaretValue table version."),t===1)return{coordinate:this.parseShort()};if(t===2)return{pointindex:this.parseShort()};if(t===3)return{coordinate:this.parseShort()}},Uc=function(){return this.parseList(ee.pointer(vc))},wc=function(){return{coverage:this.parsePointer(ee.coverage),ligGlyphs:this.parseList(ee.pointer(Uc))}},Yc=function(){return this.parseUShort(),this.parseList(ee.pointer(ee.coverage))};function Wc(t,e){e=e||0;var r=new ee(t,e),n=r.parseVersion(1);Fe.argument(n===1||n===1.2||n===1.3,"Unsupported GDEF table version.");var a={version:n,classDef:r.parsePointer(ee.classDef),attachList:r.parsePointer(bc),ligCaretList:r.parsePointer(wc),markAttachClassDef:r.parsePointer(ee.classDef)};return n>=1.2&&(a.markGlyphSets=r.parsePointer(Yc)),a}var kc={parse:Wc},yr=new Array(10);yr[1]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{posFormat:1,coverage:this.parsePointer(ee.coverage),value:this.parseValueRecord()};if(r===2)return{posFormat:2,coverage:this.parsePointer(ee.coverage),values:this.parseValueRecordList()};Fe.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};yr[2]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();Fe.assert(r===1||r===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var n=this.parsePointer(ee.coverage),a=this.parseUShort(),o=this.parseUShort();if(r===1)return{posFormat:r,coverage:n,valueFormat1:a,valueFormat2:o,pairSets:this.parseList(ee.pointer(ee.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(a),value2:this.parseValueRecord(o)}})))};if(r===2){var s=this.parsePointer(ee.classDef),x=this.parsePointer(ee.classDef),E=this.parseUShort(),T=this.parseUShort();return{posFormat:r,coverage:n,valueFormat1:a,valueFormat2:o,classDef1:s,classDef2:x,class1Count:E,class2Count:T,classRecords:this.parseList(E,ee.list(T,function(){return{value1:this.parseValueRecord(a),value2:this.parseValueRecord(o)}}))}}};yr[3]=function(){return{error:"GPOS Lookup 3 not supported"}};yr[4]=function(){return{error:"GPOS Lookup 4 not supported"}};yr[5]=function(){return{error:"GPOS Lookup 5 not supported"}};yr[6]=function(){return{error:"GPOS Lookup 6 not supported"}};yr[7]=function(){return{error:"GPOS Lookup 7 not supported"}};yr[8]=function(){return{error:"GPOS Lookup 8 not supported"}};yr[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function Kc(t,e){e=e||0;var r=new ee(t,e),n=r.parseVersion(1);return Fe.argument(n===1||n===1.1,"Unsupported GPOS table version "+n),n===1?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(yr)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(yr),variations:r.parseFeatureVariationsList()}}var Vc=new Array(10);function _c(t){return new Ce.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Ce.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new Ce.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new Ce.LookupList(t.lookups,Vc)}])}var zc={parse:Kc,make:_c};function Jc(t){var e={};t.skip("uShort");var r=t.parseUShort();Fe.argument(r===0,"Unsupported kern sub-table version."),t.skip("uShort",2);var n=t.parseUShort();t.skip("uShort",3);for(var a=0;a<n;a+=1){var o=t.parseUShort(),s=t.parseUShort(),x=t.parseShort();e[o+","+s]=x}return e}function Zc(t){var e={};t.skip("uShort");var r=t.parseULong();r>1&&console.warn("Only the first kern subtable is supported."),t.skip("uLong");var n=t.parseUShort(),a=n&255;if(t.skip("uShort"),a===0){var o=t.parseUShort();t.skip("uShort",3);for(var s=0;s<o;s+=1){var x=t.parseUShort(),E=t.parseUShort(),T=t.parseShort();e[x+","+E]=T}}return e}function Xc(t,e){var r=new Re.Parser(t,e),n=r.parseUShort();if(n===0)return Jc(r);if(n===1)return Zc(r);throw new Error("Unsupported kern table version ("+n+").")}var jc={parse:Xc};function Qc(t,e,r,n){for(var a=new Re.Parser(t,e),o=n?a.parseUShort:a.parseULong,s=[],x=0;x<r+1;x+=1){var E=o.call(a);n&&(E*=2),s.push(E)}return s}var qc={parse:Qc};function $c(t,e){var r=require("fs");r.readFile(t,function(n,a){if(n)return e(n.message);e(null,Is(a))})}function eT(t,e){var r=new XMLHttpRequest;r.open("get",t,!0),r.responseType="arraybuffer",r.onload=function(){return r.response?e(null,r.response):e("Font could not be loaded: "+r.statusText)},r.onerror=function(){e("Font could not be loaded")},r.send()}function UA(t,e){for(var r=[],n=12,a=0;a<e;a+=1){var o=Re.getTag(t,n),s=Re.getULong(t,n+4),x=Re.getULong(t,n+8),E=Re.getULong(t,n+12);r.push({tag:o,checksum:s,offset:x,length:E,compression:!1}),n+=16}return r}function tT(t,e){for(var r=[],n=44,a=0;a<e;a+=1){var o=Re.getTag(t,n),s=Re.getULong(t,n+4),x=Re.getULong(t,n+8),E=Re.getULong(t,n+12),T=void 0;x<E?T="WOFF":T=!1,r.push({tag:o,offset:s,compression:T,compressedLength:x,length:E}),n+=20}return r}function Dt(t,e){if(e.compression==="WOFF"){var r=new Uint8Array(t.buffer,e.offset+2,e.compressedLength-2),n=new Uint8Array(e.length);if(zx(r,n),n.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var a=new DataView(n.buffer,0);return{data:a,offset:0}}else return{data:t,offset:e.offset}}function Do(t,e){e=e??{};var r,n,a=new lt({empty:!0}),o=new DataView(t,0),s,x=[],E=Re.getTag(o,0);if(E==="\0\0\0"||E==="true"||E==="typ1")a.outlinesFormat="truetype",s=Re.getUShort(o,4),x=UA(o,s);else if(E==="OTTO")a.outlinesFormat="cff",s=Re.getUShort(o,4),x=UA(o,s);else if(E==="wOFF"){var T=Re.getTag(o,4);if(T==="\0\0\0")a.outlinesFormat="truetype";else if(T==="OTTO")a.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+E);s=Re.getUShort(o,12),x=tT(o,s)}else throw new Error("Unsupported OpenType signature "+E);for(var u,D,O,g,V,Y,J,K,re,Q,oe,Ae,le=0;le<s;le+=1){var he=x[le],Ie=void 0;switch(he.tag){case"cmap":Ie=Dt(o,he),a.tables.cmap=V1.parse(Ie.data,Ie.offset),a.encoding=new z1(a.tables.cmap);break;case"cvt ":Ie=Dt(o,he),Ae=new Re.Parser(Ie.data,Ie.offset),a.tables.cvt=Ae.parseShortList(he.length/2);break;case"fvar":D=he;break;case"fpgm":Ie=Dt(o,he),Ae=new Re.Parser(Ie.data,Ie.offset),a.tables.fpgm=Ae.parseByteList(he.length);break;case"head":Ie=Dt(o,he),a.tables.head=rs.parse(Ie.data,Ie.offset),a.unitsPerEm=a.tables.head.unitsPerEm,r=a.tables.head.indexToLocFormat;break;case"hhea":Ie=Dt(o,he),a.tables.hhea=ns.parse(Ie.data,Ie.offset),a.ascender=a.tables.hhea.ascender,a.descender=a.tables.hhea.descender,a.numberOfHMetrics=a.tables.hhea.numberOfHMetrics;break;case"hmtx":J=he;break;case"ltag":Ie=Dt(o,he),n=is.parse(Ie.data,Ie.offset);break;case"maxp":Ie=Dt(o,he),a.tables.maxp=os.parse(Ie.data,Ie.offset),a.numGlyphs=a.tables.maxp.numGlyphs;break;case"name":Q=he;break;case"OS/2":Ie=Dt(o,he),a.tables.os2=K0.parse(Ie.data,Ie.offset);break;case"post":Ie=Dt(o,he),a.tables.post=Ls.parse(Ie.data,Ie.offset),a.glyphNames=new So(a.tables.post);break;case"prep":Ie=Dt(o,he),Ae=new Re.Parser(Ie.data,Ie.offset),a.tables.prep=Ae.parseByteList(he.length);break;case"glyf":O=he;break;case"loca":re=he;break;case"CFF ":u=he;break;case"kern":K=he;break;case"GDEF":g=he;break;case"GPOS":V=he;break;case"GSUB":Y=he;break;case"meta":oe=he;break}}var fe=Dt(o,Q);if(a.tables.name=Es.parse(fe.data,fe.offset,n),a.names=a.tables.name,O&&re){var be=r===0,we=Dt(o,re),at=qc.parse(we.data,we.offset,a.numGlyphs,be),it=Dt(o,O);a.glyphs=Ss.parse(it.data,it.offset,at,a,e)}else if(u){var de=Dt(o,u);ts.parse(de.data,de.offset,a,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var ht=Dt(o,J);if(as.parse(a,ht.data,ht.offset,a.numberOfHMetrics,a.numGlyphs,a.glyphs,e),hE(a,e),K){var se=Dt(o,K);a.kerningPairs=jc.parse(se.data,se.offset)}else a.kerningPairs={};if(g){var Qe=Dt(o,g);a.tables.gdef=kc.parse(Qe.data,Qe.offset)}if(V){var ot=Dt(o,V);a.tables.gpos=zc.parse(ot.data,ot.offset),a.position.init()}if(Y){var Oe=Dt(o,Y);a.tables.gsub=hs.parse(Oe.data,Oe.offset)}if(D){var xt=Dt(o,D);a.tables.fvar=Pc.parse(xt.data,xt.offset,a.names)}if(oe){var Et=Dt(o,oe);a.tables.meta=cs.parse(Et.data,Et.offset),a.metas=a.tables.meta}return a}function rT(t,e,r){r=r??{};var n=typeof window>"u",a=n&&!r.isUrl?$c:eT;return new Promise(function(o,s){a(t,function(x,E){if(x){if(e)return e(x);s(x)}var T;try{T=Do(E,r)}catch(u){if(e)return e(u,null);s(u)}if(e)return e(null,T);o(T)})})}function nT(t,e){var r=require("fs"),n=r.readFileSync(t);return Do(Is(n),e)}var un=Object.freeze({__proto__:null,Font:lt,Glyph:xr,Path:Ft,BoundingBox:jr,_parse:Re,parse:Do,load:rT,loadSync:nT});function aT(t){let e,r;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(t,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t);else throw console.warn("No XML document parser found."),r=new SyntaxError("No XML document parser found."),r;if(e.getElementsByTagName("parsererror").length){const E=e.getElementsByTagName("div")[0].innerHTML;throw r=new SyntaxError(x(E)),r}return{name:e.documentElement.nodeName,attributes:s(e.documentElement.attributes),content:o(e.documentElement)};function o(E){const T=E.childNodes;if(T.length===0)return x(E.nodeValue);const u=[];let D,O,g;for(const V of T)D={},V.nodeName!=="#comment"&&(O=o(V),g=s(V.attributes),V.nodeName==="#text"&&JSON.stringify(g)==="{}"?D=x(O):(D.name=V.nodeName,D.attributes=g,D.content=O),D!==""&&u.push(D));return u}function s(E){if(!E||!E.length)return{};const T={};for(const u of E)T[u.name]=x(u.value);return T}function x(E){try{return E=E.replace(/^\s+|\s+$/g,""),E.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}}let p0=0;function _n(t){const e=document.getElementById("progress-indicator__message"),r=document.getElementById("progress-indicator__bar");p0=(p0+.95)%100,r.style.backgroundPosition=`${p0}%`,t&&(e.innerHTML=t)}function iT(){let t=C({id:"progress-indicator__wrapper"}),e=C({id:"progress-indicator__message",innerHTML:"Working..."}),r=C({tag:"div",id:"progress-indicator__bar"});return ne(t,[e,r]),t}class Dr{constructor(){}changed(){this.cache&&(this.cache={}),this.parent&&this.parent.changed&&this.parent.changed()}get ident(){return this.__ID||""}get objType(){return this._objType||this.constructor.name}get displayType(){if(this.id){if(this.id.startsWith("liga-"))return"Ligature";if(this.id.startsWith("comp-"))return"Component";if(this.id.startsWith("glyph-"))return"Glyph";if(this.id.startsWith("kern-"))return"Kern Group"}return this.objType}set objType(e){this._objType=e}get cache(){return this._cache||(this._cache={}),this._cache}set cache(e={}){this._cache=e}save(e=!1){const r=nr(this);return e?r.objType=this.objType:delete r.objType,r.cache&&delete r.cache,r}clone(){return new this.constructor(this.save(!0))}toString(){return ga(this.save())}print(e=0,r=!1){let n="";for(let x=0;x<e;x++)n+="  ";let a=`${n}{${this.objType} ${r||""}
`;n+="  ";const o=this.save();let s;for(const x of Object.keys(o))s=this[x],s.print?a+=`${n}${x}: ${s.print(e+1)}
`:typeof s!="function"&&(typeof s=="object"?a+=`${n}${x}: ${JSON.stringify(s)}
`:a+=`${n}${x}: ${s}
`);return a+=`${n.substring(2)}}/${this.objType} ${r||""}`,a}get isLockable(){return!1}isLocked(){return!1}lock(){}unlock(){}}function oT(){let t=["💖","🦧","🐆","✅","🐋","😈","🦑"],e="";for(let r=0;r<3;r++)e+=t[Math.floor(Math.random()*t.length)];return e}const AT=Object.freeze(Object.defineProperty({__proto__:null,GlyphElement:Dr,makeRandomID:oT},Symbol.toStringTag,{value:"Module"}));class Os extends Dr{constructor({x:e=0,y:r=0,parent:n=!1}={}){super(),this.parent=n,this.x=e,this.y=r,this.objType="Coord"}save(){return{x:er(this.x),y:er(this.y)}}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{`;return n+=`x: ${Xe(this._x)?this._x:"--"}  `,n+=`y: ${Xe(this._y)?this._y:"--"}`,n+="}",n}get x(){return isNaN(this._x)?(this._x=0,console.warn("Coord.x was NaN, setting to 0"),0):this._x}get y(){return isNaN(this._y)?(this._y=0,console.warn("Coord.y was NaN, setting to 0"),0):this._y}set x(e=0){e=er(e),isNaN(e)?this._x=0:this._x=e,this.changed()}set y(e=0){e=er(e),isNaN(e)?this._y=0:this._y=e,this.changed()}}const sT=Object.freeze(Object.defineProperty({__proto__:null,Coord:Os},Symbol.toStringTag,{value:"Module"}));class rt extends Dr{constructor({coord:e={x:0,y:0},use:r=!0,xLock:n=!1,yLock:a=!1,parent:o=!1,type:s=!1}={}){super(),this.parent=o,this.coord=e,this.use=r,this.xLock=n,this.yLock=a,this.type=s,this.objType="ControlPoint"}save(e=!1){const r={coord:this.coord.save(e)};return this.use||(r.use=!1),this.xLock&&(r.xLock=!0),this.yLock&&(r.yLock=!0),e&&(r.objType=this.objType),this.type==="p"&&delete r.use,!e&&this.__ID&&delete this.__ID,r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{ControlPoint
`;return r+="  ",n+=`${r}coord: ${this.coord.print(e+1)}
`,this.type!=="p"&&(n+=`${r}use: ${this.use}
`),n+=`${r.substring(2)}}`,n}get x(){return this.use?this._coord.x:this.parent.p.x}get y(){return this.use?this._coord.y:this.parent.p.y}get coord(){return this._coord}get use(){return this._use!==!1}get xLock(){return this._xLock}get yLock(){return this._yLock}get type(){return this._type}set x(e){if(this.type==="p"){let r=e-this.x;this.parent.updatePathPointPosition("p",r,0)}else this.coord.x=e,this.use=!0}set y(e){if(this.type==="p"){let r=e-this.y;this.parent.updatePathPointPosition("p",0,r)}else this.coord.y=e,this.use=!0}set coord(e){this._coord=new Os(e),this._coord.parent=this,this.use=!0}set use(e){this._use=!!e,this.changed()}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set type(e){this._type=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1)}rotate(e,r){Ri(this.coord,e,r)}}const lT=Object.freeze(Object.defineProperty({__proto__:null,ControlPoint:rt},Symbol.toStringTag,{value:"Module"}));class Ar extends Dr{constructor({xMin:e,xMax:r,yMin:n,yMax:a}={}){return super(),this.xMin=e,this.xMax=r,this.yMin=n,this.yMax=a,this.objType="Maxes",this}save(e=!1){const r={};return Xe(this._xMin)&&(r.xMin=this._xMin),Xe(this._xMax)&&(r.xMax=this._xMax),Xe(this._yMin)&&(r.yMin=this._yMin),Xe(this._yMax)&&(r.yMax=this._yMax),e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{`;return n+=`xMin:${this._xMin} `,n+=`xMax:${this._xMax} `,n+=`yMin:${this._yMin} `,n+=`yMax:${this._yMax}`,n+="}",n}get xMin(){return Xe(this._xMin)?this._xMin:Number.MAX_SAFE_INTEGER}get xMax(){return Xe(this._xMax)?this._xMax:Number.MIN_SAFE_INTEGER}get yMin(){return Xe(this._yMin)?this._yMin:Number.MAX_SAFE_INTEGER}get yMax(){return Xe(this._yMax)?this._yMax:Number.MIN_SAFE_INTEGER}get center(){return{x:this.width/2+this.xMin,y:this.height/2+this.yMin}}get width(){return this.xMax-this.xMin}get height(){return this.yMax-this.yMin}set xMin(e){e=parseFloat(e),isNaN(e)||(this._xMin=e)}set xMax(e){e=parseFloat(e),isNaN(e)?delete this._xMax:this._xMax=e}set yMin(e){e=parseFloat(e),isNaN(e)?delete this._yMin:this._yMin=e}set yMax(e){e=parseFloat(e),isNaN(e)?delete this._yMax:this._yMax=e}roundAll(e=3){this.xMin=ae(this.xMin,e),this.xMax=ae(this.xMax,e),this.yMin=ae(this.yMin,e),this.yMax=ae(this.yMax,e)}isPointInside(e,r){return e<=this.xMax&&e>=this.xMin&&r<=this.yMax&&r>=this.yMin}}function _0(t,e,r=!0){let n;return r?n=t.xMin<e.xMax&&t.xMax>e.xMin&&t.yMin<e.yMax&&t.yMax>e.yMin:n=t.xMin<=e.xMax&&t.xMax>=e.xMin&&t.yMin<=e.yMax&&t.yMax>=e.yMin,n}function Oa(t){const e=Bs();let r;for(let n=0;n<t.length;n++)r=new Ar(t[n]),e.xMin=Math.min(e.xMin,r.xMin),e.xMax=Math.max(e.xMax,r.xMax),e.yMin=Math.min(e.yMin,r.yMin),e.yMax=Math.max(e.yMax,r.yMax);return new Ar(e)}function fo(t){return t.xMax===0&&t.xMin===0&&t.yMax===0&&t.yMin===0}function Bs(){return{xMin:Number.MAX_SAFE_INTEGER,xMax:Number.MIN_SAFE_INTEGER,yMin:Number.MAX_SAFE_INTEGER,yMax:Number.MIN_SAFE_INTEGER}}function xT(){return{xMin:Number.MIN_SAFE_INTEGER,xMax:Number.MAX_SAFE_INTEGER,yMin:Number.MIN_SAFE_INTEGER,yMax:Number.MAX_SAFE_INTEGER}}const ET=Object.freeze(Object.defineProperty({__proto__:null,Maxes:Ar,getOverallMaxes:Oa,isAllZeros:fo,maxesMaxBounds:xT,maxesMinBounds:Bs,maxesOverlap:_0},Symbol.toStringTag,{value:"Module"}));class kt extends Dr{constructor({p:e,h1:r,h2:n,type:a="corner",parent:o=!1}={}){super(),this.parent=o,this.p=e,this.h1=r,this.h2=n,this.type=a,this.objType="PathPoint",this.hasOverlappingHandle("h1")&&(this.h1.use=!1),this.hasOverlappingHandle("h2")&&(this.h2.use=!1)}save(e=!1){const r={type:this.type,p:this.p.save(e)};return(this.h1.use||!this.h1.use&&!this.hasOverlappingHandle("h1"))&&(r.h1=this.h1.save(e)),(this.h2.use||!this.h2.use&&!this.hasOverlappingHandle("h2"))&&(r.h2=this.h2.save(e)),e&&(r.objType=this.objType),!e&&this.__ID&&delete this.__ID,r}print(e=0,r=!1){let n="";for(let s=0;s<e;s++)n+="  ";let a=parseInt(r)?` ${parseInt(r)}`:"",o=`${n}{PathPoint${a}
`;return n+="  ",o+=`${n}type: ${this.type}
`,o+=`${n}p: ${this.p.print(e+1)}
`,o+=`${n}h1: ${this.h1.print(e+1)}
`,o+=`${n}h2: ${this.h2.print(e+1)}
`,o+=`${n.substring(2)}}/PathPoint${a}`,o}get p(){return this._p}get h1(){return this._h1}get h2(){return this._h2}get type(){return this._type}get pointNumber(){if(!this.parent)return!1;const e=this.parent.pathPoints;if(!e)return!1;for(let r=0;r<e.length;r++)if(e[r]===this)return r;return!1}set p(e={}){e.type="p",this._p=new rt(e),this._p.parent=this}set h1(e={}){e.coord||(e.coord={x:this.p.x-50,y:this.p.y},e.use=!1),e.type="h1",this._h1=new rt(e),this._h1.parent=this}set h2(e={}){e.coord||(e.coord={x:this.p.x+50,y:this.p.y},e.use=!1),e.type="h2",this._h2=new rt(e),this._h2.parent=this}set type(e){e==="symmetric"?this.makeSymmetric():e==="flat"?this.makeFlat():this._type="corner"}updatePathPointPosition(e="p",r=0,n=0){switch(r=parseFloat(r),n=parseFloat(n),r=Number.isFinite(r)?r:0,n=Number.isFinite(n)?n:0,e){case"p":this.p.coord.x+=r,this.p.coord.y+=n,this.h1.coord.x+=r,this.h1.coord.y+=n,this.h2.coord.x+=r,this.h2.coord.y+=n;break;case"h1":this.h1.coord.x+=r,this.h1.coord.y+=n,this.h1.use&&(this.type==="symmetric"?this.makeSymmetric("h1"):this.type==="flat"&&this.makeFlat("h1"));break;case"h2":this.h2.coord.x+=r,this.h2.coord.y+=n,this.h2.use&&(this.type==="symmetric"?this.makeSymmetric("h2"):this.type==="flat"&&this.makeFlat("h2"));break}}makeSymmetric(e){if(this._type="symmetric",!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&dt(this.p.coord,this.h1.coord)&&dt(this.p.coord,this.h2.coord))){this.h2.x-=200,this.h1.x+=200,this.h1.use=!0,this.h2.use=!0;return}this.h1.use=!0,this.h2.use=!0;let r,n,a=!1;switch(e){case"h1":r=this.p.x-this.h1.x+this.p.x,this.h2.x!==r&&(this.h2.x=r,a=!0),n=this.p.y-this.h1.y+this.p.y,this.h2.y!==n&&(this.h2.y=n,a=!0);break;case"h2":r=this.p.x-this.h2.x+this.p.x,this.h1.x!==r&&(this.h1.x=r,a=!0),n=this.p.y-this.h2.y+this.p.y,this.h1.y!==n&&(this.h1.y=n,a=!0);break}return this._type="symmetric",a&&(this.h1.use=!0,this.h2.use=!0),this}makeFlat(e){if(this._type="flat",this.isFlat())return;if(!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&dt(this.p.coord,this.h1.coord)&&dt(this.p.coord,this.h2.coord))){this.h2.x-=300,this.h1.x+=100;return}this.h1.use=!0,this.h2.use=!0;const r=sn(this.h1.coord,this.p.coord),n=sn(this.h2.coord,this.p.coord),a=Vn(this.p.coord,this.h1.coord),o=Vn(this.p.coord,this.h2.coord);let s,x,E,T;return e==="h1"?(E=Math.cos(r)*o,T=Math.tan(r)*E,s=this.p.x+E*-1,x=this.p.y+T*-1,!isNaN(s)&&!isNaN(x)&&(this.h2.x!==s&&(this.h2.x=s),this.h2.y!==x&&(this.h2.y=x))):e==="h2"&&(E=Math.cos(n)*a,T=Math.tan(n)*E,s=this.p.x+E*-1,x=this.p.y+T*-1,!isNaN(s)&&!isNaN(x)&&(this.h1.x!==s&&(this.h1.x=s),this.h1.y!==x&&(this.h1.y=x))),this}isFlat(){if(!this.h1.use||!this.h2.use)return!1;if(this.p.x===this.h1.x&&this.p.x===this.h2.x||this.p.y===this.h1.y&&this.p.y===this.h2.y)return!0;const e=sn(this.h1.coord,this.p.coord),r=sn(this.h2.coord,this.p.coord);return ae(Math.abs(e)+Math.abs(r),2)===3.14}reconcileHandle(e="h1"){let r=e==="h1"?"h2":"h1";this.type==="symmetric"?this.makeSymmetric(r):this.type==="flat"&&this.makeFlat(r)}resolvePointType(){if(this.isFlat()){const e=Vn(this.p.coord,this.h1.coord),r=Vn(this.p.coord,this.h2.coord);e===r?this._type="symmetric":this._type="flat"}else this._type="corner";return this.type}makePointedTo(e,r,n=!1,a="h2",o=!1){const s=this.p.x-e,x=this.p.y-r,E=x>=0?-1:1,T=-1,u=Math.sqrt(s*s+x*x),D=Math.acos(s/u);return n=n||u/3,this[a].x=this.p.x+Math.cos(D)*n*T,this[a].y=this.p.y+Math.sin(D)*n*E,o||(this.type==="corner"?this.makeFlat(a):this.makeSymmetric(a)),this}hasOverlappingHandle(e){return!this[e]||!this[e].coord?!1:dt(this[e].coord,this.p.coord)}rotate(e,r){return this.p.rotate(e,r),this.h1.rotate(e,r),this.h2.rotate(e,r),this}resetHandles(){return this.type="corner",this.h1.use=!0,this.h2.use=!0,this.h2.x=this.p.x-100,this.h2.y=this.p.y,this.h1.x=this.p.x+100,this.h1.y=this.p.y,this}roundAll(e=9){this.p.x=ae(this.p.x,e),this.p.y=ae(this.p.y,e);let r=this.h1.use;this.h1.x=ae(this.h1.x,e),this.h1.y=ae(this.h1.y,e),this.h1.use=r;let n=this.h2.use;return this.h2.x=ae(this.h2.x,e),this.h2.y=ae(this.h2.y,e),this.h2.use=n,this}}const LT=Object.freeze(Object.defineProperty({__proto__:null,PathPoint:kt},Symbol.toStringTag,{value:"Module"}));class Pr{constructor(e=0,r=0){e=parseFloat(e),this.x=isNaN(e)?0:e,r=parseFloat(r),this.y=isNaN(r)?0:r}}const hT=Object.freeze(Object.defineProperty({__proto__:null,XYPoint:Pr},Symbol.toStringTag,{value:"Module"}));class Jt extends Dr{constructor({p1x:e=0,p1y:r=0,p2x:n,p2y:a,p3x:o,p3y:s,p4x:x=0,p4y:E=0,point1ID:T=!1,point2ID:u=!1}={}){super(),this.p1x=er(e),this.p1y=er(r),this.p4x=er(x),this.p4y=er(E),this.p2x=Xe(n)?er(n):this.p1x,this.p2y=Xe(a)?er(a):this.p1y,this.p3x=Xe(o)?er(o):this.p4x,this.p3y=Xe(s)?er(s):this.p4y,T&&(this.point1ID=T),u&&(this.point2ID=u),this.objType="Segment",this.recalculateMaxes()}save(e=!1){const r={p1x:this.p1x,p1y:this.p1y,p2x:this.p2x,p2y:this.p2y,p3x:this.p3x,p3y:this.p3y,p4x:this.p4x,p4y:this.p4y};return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Segment
`;return r+="  ",n+=`${r+"  "}line: ${this.lineType}
`,n+=`${r+"  "}p1: ${this.p1x}/${this.p1y}
`,n+=`${r+"  "}p2: ${this.p2x}/${this.p2y}
`,n+=`${r+"  "}p3: ${this.p3x}/${this.p3y}
`,n+=`${r+"  "}p4: ${this.p4x}/${this.p4y}
`,n+=`${r+"  "}maxes: ${this.maxes.print(e+1)}
`,n+=`${r.substring(2)}}`,n}get lineType(){return Xe(this._lineType)||this.determineLineType(),this._lineType}get length(){return this.cache.length?this.cache.length:(this.cache.length=this.calculateLength(),this.cache.length)}get baseLength(){return da(this.p1x,this.p1y,this.p4x,this.p4y)}get topLength(){const e=da(this.p1x,this.p1y,this.p2x,this.p2y),r=da(this.p2x,this.p2y,this.p3x,this.p3y),n=da(this.p3x,this.p3y,this.p4x,this.p4y);return e+r+n}get quickLength(){return Math.max(this.topLength,this.baseLength)}get maxes(){return(!this.cache.maxes||ki(this.cache.maxes))&&this.recalculateMaxes(),new Ar(this.cache.maxes)}get valuesAsArray(){return[this.p1x,this.p1y,this.p2x,this.p2y,this.p3x,this.p3y,this.p4x,this.p4y]}set maxes(e){this.cache.maxes={},this.cache.maxes=new Ar(e)}split(e=.5){return typeof e=="object"&&Xe(e.x)&&Xe(e.y)?this.splitAtPoint(e):isNaN(e)?!1:this.splitAtTime(e)}splitAtPoint(e){if(this.containsTerminalPoint(e,.1))return!1;if(this.lineType==="horizontal"||this.lineType==="vertical"){let r,n,a=!1;return this.lineType==="horizontal"?ae(e.y,2)===ae(this.p1y,2)&&e.x>Math.min(this.p1x,this.p4x)&&e.x<Math.max(this.p1x,this.p4x)&&(r=e.x,n=this.p1y,a=!0):this.lineType==="vertical"&&ae(e.x,2)===ae(this.p1x,2)&&e.y>Math.min(this.p1y,this.p4y)&&e.y<Math.max(this.p1y,this.p4y)&&(r=this.p1x,n=e.y,a=!0),a?[new Jt({p1x:this.p1x,p1y:this.p1y,p4x:r,p4y:n}),new Jt({p1x:r,p1y:n,p4x:this.p4x,p4y:this.p4y})]:!1}else if(this.pointIsWithinMaxes(e)){const n=this.getSplitFromXYPoint(e,.1);if(n&&n.distance<.1)return this.splitAtTime(n.split)}return!1}splitAtTime(e=.5){const r=1-e,n=this.p1x*r+this.p2x*e,a=this.p1y*r+this.p2y*e,o=this.p2x*r+this.p3x*e,s=this.p2y*r+this.p3y*e,x=this.p3x*r+this.p4x*e,E=this.p3y*r+this.p4y*e,T=n*r+o*e,u=a*r+s*e,D=o*r+x*e,O=s*r+E*e,g=T*r+D*e,V=u*r+O*e;return[new Jt({p1x:this.p1x,p1y:this.p1y,p2x:n,p2y:a,p3x:T,p3y:u,p4x:g,p4y:V}),new Jt({p1x:g,p1y:V,p2x:D,p2y:O,p3x:x,p3y:E,p4x:this.p4x,p4y:this.p4y})]}splitAtManyPoints(e,r=1){const n=[new Jt(nr(this))];let a;for(let o=0;o<e.length;o++)for(let s=0;s<n.length;s++)n[s].containsTerminalPoint(e[o],r)||(a=n[s].splitAtPoint(e[o]),a&&n.splice(s,1,a[0],a[1]));return n}pointIsWithinMaxes(e){const r=this.maxes;return e.x<=r.xMax&&e.x>=r.xMin&&e.y<=r.yMax&&e.y>=r.yMin}convertToLine(){return new Jt({p1x:this.p1x,p1y:this.p1y,p4x:this.p4x,p4y:this.p4y})}getSplitFromXYPoint(e,r=1){const n=this.quickLength*1e3;let a=999999999,o=!1,s,x;for(let E=0;E<1;E+=1/n)if(s=this.findXYPointFromSplit(E),x=Math.sqrt((s.x-e.x)*(s.x-e.x)+(s.y-e.y)*(s.y-e.y)),x<a&&(a=x,o={split:E,distance:x,x:s.x,y:s.y},r&&o.distance<r))return o;return o}calculateLength(){if(this.lineType)return this.baseLength;let e;if(this.quickLength<10)return this.quickLength;{const n=this.split();return e=n[0].calculateLength()+n[1].calculateLength(),e}}findXYPointFromSplit(e=.5){const r=1-e,n=this.p1x*r+this.p2x*e,a=this.p1y*r+this.p2y*e,o=this.p2x*r+this.p3x*e,s=this.p2y*r+this.p3y*e,x=this.p3x*r+this.p4x*e,E=this.p3y*r+this.p4y*e,T=n*r+o*e,u=a*r+s*e,D=o*r+x*e,O=s*r+E*e,g=T*r+D*e,V=u*r+O*e;return new Pr(g,V)}getReverse(){return new Jt({p1x:this.p4x,p1y:this.p4y,p2x:this.p3x,p2y:this.p3y,p3x:this.p2x,p3y:this.p2y,p4x:this.p1x,p4y:this.p1y})}getXYPoint(e){if(e===1)return new Pr(this.p1x,this.p1y);if(e===2)return new Pr(this.p2x,this.p2y);if(e===3)return new Pr(this.p3x,this.p3y);if(e===4)return new Pr(this.p4x,this.p4y)}getFastMaxes(){const e={xMin:Math.min(this.p1x,Math.min(this.p2x,Math.min(this.p3x,this.p4x))),yMin:Math.min(this.p1y,Math.min(this.p2y,Math.min(this.p3y,this.p4y))),xMax:Math.max(this.p1x,Math.max(this.p2x,Math.max(this.p3x,this.p4x))),yMax:Math.max(this.p1y,Math.max(this.p2y,Math.max(this.p3y,this.p4y)))};return new Ar(e)}recalculateMaxes(){function e(K,re){K.xMin>re?K.xMin=re:K.xMax<re&&(K.xMax=re)}function r(K,re){K.yMin>re?K.yMin=re:K.yMax<re&&(K.yMax=re)}function n(K,re,Q,oe,Ae){const le=1-K;return le*le*le*re+3*le*le*K*Q+3*le*K*K*oe+K*K*K*Ae}const a={xMin:Math.min(this.p1x,this.p4x),yMin:Math.min(this.p1y,this.p4y),xMax:Math.max(this.p1x,this.p4x),yMax:Math.max(this.p1y,this.p4y)};if(this.lineType)return this.maxes=a,this.maxes;const o=this.p2x-this.p1x,s=this.p2y-this.p1y;let x=this.p3x-this.p2x,E=this.p3y-this.p2y;const T=this.p4x-this.p3x,u=this.p4y-this.p3y;let D,O,g,V,Y,J;return(this.p2x<a.xMin||this.p2x>a.xMax||this.p3x<a.xMin||this.p3x>a.xMax)&&(o+T!==2*x&&(x+=.01),D=2*(o-x),O=2*(o-2*x+T),g=(2*x-2*o)*(2*x-2*o)-2*o*O,V=Math.sqrt(g),Y=(D+V)/O,J=(D-V)/O,0<Y&&Y<1&&e(a,n(Y,this.p1x,this.p2x,this.p3x,this.p4x)),0<J&&J<1&&e(a,n(J,this.p1x,this.p2x,this.p3x,this.p4x))),(this.p2y<a.yMin||this.p2y>a.yMax||this.p3y<a.yMin||this.p3y>a.yMax)&&(s+u!==2*E&&(E+=.01),D=2*(s-E),O=2*(s-2*E+u),g=(2*E-2*s)*(2*E-2*s)-2*s*O,V=Math.sqrt(g),Y=(D+V)/O,J=(D-V)/O,0<Y&&Y<1&&r(a,n(Y,this.p1y,this.p2y,this.p3y,this.p4y)),0<J&&J<1&&r(a,n(J,this.p1y,this.p2y,this.p3y,this.p4y))),this.maxes=a,this.maxes}isLineOverlappedByLine(e){if(!this.lineType||!e.lineType)return!1;const r=e.containsPointOnLine(this.getXYPoint(1)),n=e.containsPointOnLine(this.getXYPoint(4));return r&&n}containsTerminalPoint(e,r=1){return this.containsStartPoint(e,r)?"start":this.containsEndPoint(e,r)?"end":!1}containsStartPoint(e,r=1){return dt(this.getXYPoint(1),e,r)}containsEndPoint(e,r=1){return dt(this.getXYPoint(4),e,r)}containsPointOnCurve(e,r){if(this.containsTerminalPoint(e,r))return!0;if(this.lineType)return this.containsPointOnLine(e);r=Xe(r)?r:.1;const n=this.getSplitFromXYPoint(e,r);return!!(n&&n.distance<r)}containsPointOnLine(e){if(!this.lineType||this.containsTerminalPoint(e))return!1;function r(n,a,o){return n<=a&&a<=o||o<=a&&a<=n}return!!(r(this.p1x,e.x,this.p4x)&&r(this.p1y,e.y,this.p4y)&&ui(this.getXYPoint(1),this.getXYPoint(4),e))}precedes(e,r=1){const n=this.getXYPoint(4),a=e.getXYPoint(1);return dt(n,a,r)}determineLineType(e){e=Xe(e)?e:1;let r=!1;return ae(this.p1x,e)===ae(this.p2x,e)&&ae(this.p1x,e)===ae(this.p3x,e)&&ae(this.p1x,e)===ae(this.p4x,e)&&(r="vertical"),ae(this.p1y,e)===ae(this.p2y,e)&&ae(this.p1y,e)===ae(this.p3y,e)&&ae(this.p1y,e)===ae(this.p4y,e)&&(r="horizontal"),ui(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(2))&&ui(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(3))&&(r="diagonal"),this._lineType=r,r}roundAll(e=3){return this.p1x=ae(this.p1x,e),this.p1y=ae(this.p1y,e),this.p2x=ae(this.p2x,e),this.p2y=ae(this.p2y,e),this.p3x=ae(this.p3x,e),this.p3y=ae(this.p3y,e),this.p4x=ae(this.p4x,e),this.p4y=ae(this.p4y,e),this}}function da(t,e,r,n){const a=Math.abs(t-r),o=Math.abs(e-n);return Math.sqrt(a*a+o*o)}function ui(t,e,r,n){n=Xe(n)?n:3;const a=(e.x-t.x)*(r.y-t.y),o=(r.x-t.x)*(e.y-t.y);return ae(a,n)===ae(o,n)}const cT=Object.freeze(Object.defineProperty({__proto__:null,Segment:Jt,getLineLength:da,pointsAreCollinear:ui},Symbol.toStringTag,{value:"Module"}));class Ba extends Dr{constructor({segments:e=[]}={}){super(),this.segments=e,this.objType="PolySegment"}save(e=!1){const r={segments:[]};for(let n=0;n<this._segments.length;n++)r.segments[n]=this._segments[n].save(e);return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{PolySegment
`;return r+="  ",n+=`${r}segments: [
`,this.segments.forEach(a=>{n+=a.print(e+2),n+=`
`}),n+=`${r}]
`,n+=`${r.substring(2)}}`,n}get segments(){return this._segments}set segments(e=[]){this._segments=[];for(let r=0;r<e.length;r++)this._segments[r]=new Jt(e[r])}get valuesAsArray(){let e=[];return this.segments.forEach(r=>e.push(r.valuesAsArray)),e}get path(){function e(x,E){const T={h1:{coord:{x:x.p3x,y:x.p3y}},p:{coord:{x:E.p1x,y:E.p1y}},h2:{coord:{x:E.p2x,y:E.p2y}}};return dt(T.h1.coord,T.p.coord)&&(T.h1.use=!1),dt(T.h2.coord,T.p.coord)&&(T.h2.use=!1),x.lineType&&(T.h1.use=!1),E.lineType&&(T.h2.use=!1),T}const r=[],n=nr(this._segments),a=new Pr(n[0].p1x,n[0].p1y),o=new Pr(n.at(-1).p4x,n.at(-1).p4y);dt(a,o)||n.push(new Jt({p1x:o.x,p1y:o.y,p4x:a.x,p4y:a.y})),r.push(e(n.at(-1),n[0]));let s;for(let x=0;x<n.length-1;x++)s=n[x+1],r.push(e(n[x],s));return new ar({pathPoints:r})}containsSegment(e){for(let r=0;r<this._segments.length;r++)if(z0(this._segments[r],e))return!0;return!1}roundAll(e=3){for(let r=0;r<this._segments.length;r++)this._segments[r].roundAll(e);return this}findIntersections(){let e,r,n=[];for(let a=0;a<this._segments.length;a++)for(let o=a;o<this._segments.length;o++)o!==a&&(e=new Jt(this._segments[a]),r=new Jt(this._segments[o]),n=n.concat(Oo(e,r)));return n=n.filter(Bn),n}splitSegmentsAtIntersections(e=this.findIntersections(),r=1){let n,a;e.forEach(function(s,x){n=s.split("/")[0],a=s.split("/")[1],e[x]=new Pr(n,a)});let o=[];for(let s=0;s<this._segments.length;s++)o=o.concat(this._segments[s].splitAtManyPoints(e,r));return this._segments=o,this.cache.splits=e,this}stitchSegmentsTogether(){const e=this.segments;let r=[];const n=[];function a(E){let T,u;for(let D=0;D<e.length;D++)if(T=e[D],T.objType==="Segment"&&T.containsStartPoint(E,0))return u=new Jt(T),T.objType="-"+n.length+"."+r.length,u;for(let D=0;D<e.length;D++)if(T=e[D].getReverse(),e[D].objType==="Segment"&&T.containsStartPoint(E,0))return u=new Jt(T),e[D].objType="R"+n.length+"."+r.length,u;return!1}function o(){for(let E=0;E<e.length;E++)if(e[E].objType==="Segment")return e[E].getXYPoint(1)}let s,x=o();for(let E=0;E<e.length;E++)s=a(x),s?(r.push(s),x=s.getXYPoint(4)):r.length&&(n.push(new Ba({segments:r})),r[r.length-1].containsEndPoint(r[0].getXYPoint(1)),r=[],x=o(),E--);return r.length&&(n.push(new Ba({segments:r})),r[r.length-1].containsEndPoint(r[0].getXYPoint(1))),n}removeZeroLengthSegments(){let e;for(let r=0;r<this._segments.length;r++)e=this._segments[r],dt(e.getXYPoint(1),e.getXYPoint(4))&&(e.lineType?e.objType="LINE ZERO":dt(e.getXYPoint(1),e.getXYPoint(2))&&dt(e.getXYPoint(1),e.getXYPoint(3))&&(e.objType="ZERO"));return this._segments=this._segments.filter(function(r){return r.objType==="Segment"}),this}removeRedundantLineSegments(){for(let e=0;e<this._segments.length;e++)for(let r=0;r<this._segments.length;r++)if(e!==r&&this._segments[e]&&this._segments[r]){let n=this._segments[e],a=this._segments[r];n.isLineOverlappedByLine(a)&&(n.objType="REDUNDANT"),a.isLineOverlappedByLine(n)&&(a.objType="REDUNDANT"),a.objType==="Segment"&&n.objType==="Segment"&&z0(n,a)&&(n.objType="DUPLICATE")}return this._segments=this._segments.filter(function(e){return e.objType==="Segment"}),this}removeNonConnectingSegments(){let e,r;const n=[],a=[];for(let s=0;s<this._segments.length;s++){e=this._segments[s],n[s]=!1,a[s]=!1;for(let x=0;x<this._segments.length&&(r=this._segments[x],!(s!==x&&(r.containsTerminalPoint(e.getXYPoint(1),1)&&(n[s]=!0),r.containsTerminalPoint(e.getXYPoint(4),1)&&(a[s]=!0),n[s]&&a[s])));x++);}for(let s=0;s<this._segments.length;s++)n[s]&&a[s]||(this._segments[s].objType="NON CONNECTED");return this._segments=this._segments.filter(function(s){return s.objType==="Segment"}),this}combineInlineSegments(){let e,r;for(let n=0;n<this.segments.length;n++)e=this.segments[n],r=this.segments[n+1],n===this.segments.length-1&&(r=this.segments[0]),e.lineType===r.lineType&&(this.segments[n]=new Jt({p1x:e.p1x,p1y:e.p1y,p4x:r.p4x,p4y:r.p4y}),this.segments.splice(n+1,1),n--)}}function Oo(t,e,r){if(r=r||0,r===0){const J=Hs(t,e);if(J.length)return J}if(r===0){const J=Fs(t,e);if(J.length)return J}let n=[];r===0&&(t.lineType||e.lineType)&&(n=Ms(t,e));const a=t.getFastMaxes(),o=e.getFastMaxes();if(!_0(a,o))return[];const s=9e-4,x=3;let E=a.xMax-a.xMin,T=a.yMax-a.yMin,u=o.xMax-o.xMin,D=o.yMax-o.yMin;if(E<s&&T<s&&u<s&&D<s){E*=.5,T*=.5,u*=.5,D*=.5;let J=(a.xMin+E+(o.xMin+u))/2,K=(a.yMin+T+(o.yMin+D))/2;return J=ae(J,x),K=ae(K,x),[""+J+"/"+K]}let O=[];const g=t.splitAtTime(.5),V=e.splitAtTime(.5);let Y=[[g[0],V[0]],[g[0],V[1]],[g[1],V[1]],[g[1],V[0]]];return Y=Y.filter(function(J){return _0(J[0].getFastMaxes(),J[1].getFastMaxes(),"inclusive")}),Y.forEach(function(J){O=O.concat(Oo(J[0],J[1],r+1))}),O=O.concat(n),O=O.filter(Bn),O}function z0(t,e,r=1){if(dt(t.getXYPoint(1),e.getXYPoint(1),r)&&dt(t.getXYPoint(4),e.getXYPoint(4),r)){if(t.lineType&&e.lineType)return!0;if(dt(t.getXYPoint(2),e.getXYPoint(2),r)&&dt(t.getXYPoint(3),e.getXYPoint(3),r))return!0}return!1}function Hs(t,e){const r=[];return t.containsPointOnLine(e.getXYPoint(1))&&r.push(""+e.p1x+"/"+e.p1y),t.containsPointOnLine(e.getXYPoint(4))&&r.push(""+e.p4x+"/"+e.p4y),e.containsPointOnLine(t.getXYPoint(1))&&r.push(""+t.p1x+"/"+t.p1y),e.containsPointOnLine(t.getXYPoint(4))&&r.push(""+t.p4x+"/"+t.p4y),r.length,r}function Fs(t,e){if(!t.lineType||!e.lineType)return[];const r=t.p4x-t.p1x,n=t.p4y-t.p1y,a=e.p4x-e.p1x,o=e.p4y-e.p1y,s=(-1*n*(t.p1x-e.p1x)+r*(t.p1y-e.p1y))/(-1*a*n+r*o),x=(a*(t.p1y-e.p1y)-o*(t.p1x-e.p1x))/(-1*a*n+r*o);if(s>=0&&s<=1&&x>=0&&x<=1){const E=er(t.p1x+x*r),T=er(t.p1y+x*n);return t.containsTerminalPoint({x:E,y:T})&&e.containsTerminalPoint({x:E,y:T})?[]:[""+E+"/"+T]}return[]}function Ms(t,e){const r=t.getXYPoint(1),n=t.getXYPoint(4),a=e.getXYPoint(1),o=e.getXYPoint(4),s=[];return t.containsPointOnCurve(a)&&s.push(`${a.x}/${a.y}`),t.containsPointOnCurve(o)&&s.push(`${o.x}/${o.y}`),e.containsPointOnCurve(r)&&s.push(`${r.x}/${r.y}`),e.containsPointOnCurve(n)&&s.push(`${n.x}/${n.y}`),s}const TT=Object.freeze(Object.defineProperty({__proto__:null,PolySegment:Ba,findCrossingLineSegmentIntersections:Fs,findEndPointSegmentIntersections:Ms,findOverlappingLineSegmentIntersections:Hs,findSegmentIntersections:Oo,segmentsAreEqual:z0},Symbol.toStringTag,{value:"Module"}));class ar extends Dr{constructor({name:e="Path",objType:r="Path",pathPoints:n=[],winding:a,xLock:o=!1,yLock:s=!1,wLock:x=!1,hLock:E=!1,transformOrigin:T=!1,ratioLock:u=!1,parent:D=!1}={}){super(),this.name=e,this.pathPoints=n,this.winding=a,this.xLock=o,this.yLock=s,this.wLock=x,this.hLock=E,this.transformOrigin=T,this.ratioLock=u,this.parent=D,this.objType=r}save(e=!1){const r={name:this.name,winding:this.winding,pathPoints:[]};return this.xLock&&(r.xLock=!0),this.yLock&&(r.yLock=!0),this.wLock&&(r.wLock=!0),this.hLock&&(r.hLock=!0),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(r.transformOrigin=this.transformOrigin),this.ratioLock&&(r.ratioLock=!0),this._pathPoints.forEach(n=>{r.pathPoints.push(n.save(e))}),e&&(r.objType=this.objType),!e&&this.__ID&&delete this.__ID,r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Path
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
`,n+=`${r.substring(2)}}/Path`,n}get name(){return this._name}get pathPoints(){return this._pathPoints}get winding(){return Xe(this._winding)||(this.findWinding?this.findWinding():this._winding=0),this._winding}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get xLock(){return this._xLock}get yLock(){return this._yLock}get wLock(){return this._wLock}get hLock(){return this._hLock}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin}get ratioLock(){return this._ratioLock}get maxes(){return this.cache.maxes?ki(this.cache.maxes)?this.recalculateMaxes():fo(this.cache.maxes)&&this.recalculateMaxes():this.recalculateMaxes(),new Ar(this.cache.maxes)}get svgPathData(){return this.cache.svgPathData?this.cache.svgPathData:(this.cache.svgPathData=this.makeSVGPathData(),this.cache.svgPathData)}set name(e){e=xo(e),e!==""&&(this._name=e)}set pathPoints(e){if(this._pathPoints=[],e&&e.length)for(let r=0;r<e.length;r++)this._pathPoints[r]=new kt(e[r]),this._pathPoints[r].parent=this}set winding(e){Xe(e)?this._winding=e:this.findWinding()}set x(e){this.setShapePosition(e,!1)}set y(e){this.setShapePosition(!1,e)}set height(e){this.setShapeSize({height:e})}set width(e){this.setShapeSize({width:e})}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set wLock(e){this._wLock=!!e}set hLock(e){this._hLock=!!e}set transformOrigin(e){ba.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin=!1}set ratioLock(e){this._ratioLock=!!e}set maxes(e){this.cache.maxes={},this.cache.maxes=new Ar(e)}set svgPathData(e){this.cache.svgPathData=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:e==="width"?this.wLock:e==="height"?this.hLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0),e==="width"&&(this.wLock=!0),e==="height"&&(this.hLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1),e==="width"&&(this.wLock=!1),e==="height"&&(this.hLock=!1)}setShapeSize({width:e=!1,height:r=!1,ratioLock:n=!1,transformOrigin:a=!1}={}){e!==!1&&(e=parseFloat(e)),r!==!1&&(r=parseFloat(r));const o=e!==!1?e-this.width:0,s=r!==!1?r-this.height:0;return this.updateShapeSize({width:o,height:s,ratioLock:n,transformOrigin:a}),this}updateShapeSize({width:e=0,height:r=0,ratioLock:n=!1,transformOrigin:a=!1}={}){let o=parseFloat(e),s=parseFloat(r);if(!o&&!s)return;if(n&&o!==s){const J=this.width/this.height;Math.abs(o)>Math.abs(s)?s=o/J:o=s*J}let x=this.width;x===0&&(x=1);let E=this.height;E===0&&(E=1);const T=Math.max(x+o,1),u=Math.max(E+s,1),D=u/E,O=T/x;if(n&&(T<=1||u<=1))return;let g=Lo(o,s,this.maxes,a),V=this.maxes.xMin,Y=this.maxes.yMin;this.pathPoints.forEach(J=>{J.p.coord.x=(J.p.coord.x-this.maxes.xMin)*O+V,J.h1.coord.x=(J.h1.coord.x-this.maxes.xMin)*O+V,J.h2.coord.x=(J.h2.coord.x-this.maxes.xMin)*O+V,J.p.coord.y=(J.p.coord.y-this.maxes.yMin)*D+Y,J.h1.coord.y=(J.h1.coord.y-this.maxes.yMin)*D+Y,J.h2.coord.y=(J.h2.coord.y-this.maxes.yMin)*D+Y}),this.updateShapePosition(g.deltaX,g.deltaY)}setShapePosition(e=!1,r=!1){e!==!1&&(e=parseFloat(e)),r!==!1&&(r=parseFloat(r));const n=e!==!1?e*1-this.maxes.xMin:0,a=r!==!1?r*1-this.maxes.yMax:0;this.updateShapePosition(n,a)}updateShapePosition(e=0,r=0){e=parseFloat(e),r=parseFloat(r);for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].updatePathPointPosition("p",e,r)}rotate(e,r=this.maxes.center){for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].rotate(e,r)}getNextPointNum(e=0){return e=parseInt(e),e+=1,e=e%this.pathPoints.length,e}getPreviousPointNum(e=0){return e=parseInt(e),e-=1,e<0&&(e=e+this.pathPoints.length),e}containsPoint(e,r){for(let n=0;n<this.pathPoints.length;n++)if(dt(e,this.pathPoints[n].p,.01))if(r)r=!1;else return this.pathPoints[n];return!1}makeSVGPathData(e="not specified",r=8){if(!this.pathPoints||!this.pathPoints.length)return"";let n,a,o="",s="M"+ae(this.pathPoints[0].p.x,r)+","+ae(this.pathPoints[0].p.y,r);s.indexOf("NaN")>-1&&console.warn(e+" PathPoint 0 MOVE has NaN: "+s);for(let x=0;x<this.pathPoints.length;x++)n=this.pathPoints[x],a=this.pathPoints[this.getNextPointNum(x)],o=" C"+ae(n.h2.x,r)+","+ae(n.h2.y,r)+","+ae(a.h1.x,r)+","+ae(a.h1.y,r)+","+ae(a.p.x,r)+","+ae(a.p.y,r),o.indexOf("NaN")>-1&&console.warn(e+" PathPoint "+x+" has NaN: "+o),s+=o;return s+="Z",s}makePostScript(e=0,r=0){if(!this.pathPoints)return{re:"",lastX:e,lastY:r};let n,a,o,s,x,E,T,u,D="",O=`${this.pathPoints[0].p.x-e} ${this.pathPoints[0].p.y-r} rmoveto
		`;for(let g=0;g<this.pathPoints.length;g++)n=this.pathPoints[g],a=this.pathPoints[this.getNextPointNum(g)],o=n.h2.x-n.p.x,s=n.h2.y-n.p.y,x=a.h1.x-n.h2.x,E=a.h1.y-n.h2.y,T=a.p.x-a.h1.x,u=a.p.y-a.h1.y,D=`
					${o} ${s} ${x} ${E} ${T} ${u} rrcurveto
			`,O+=D;return{re:O.replaceAll("	",""),lastX:a.p.x,lastY:a.p.y}}makePolySegment(){const e=[];for(let n=0;n<this.pathPoints.length;n++)e.push(this.makeSegment(n));return new Ba({segments:e})}makeSegment(e=0){if(e=e%this.pathPoints.length,this.cache.segments||(this.cache.segments=[]),this.cache.segments[e])return this.cache.segments[e];const r=this.pathPoints[e];let n=Math.round(Math.random()*1e4);r.pointID||(r.pointID=`point-${e}-${n}`);const a=this.getNextPointNum(e),o=this.pathPoints[a];o.pointID||(o.pointID=`point-${a}-${n}`);const s=new Jt({point1ID:r.pointID,p1x:r.p.x,p1y:r.p.y,p2x:r.h2.x,p2y:r.h2.y,p3x:o.h1.x,p3y:o.h1.y,p4x:o.p.x,p4y:o.p.y,point2ID:o.pointID});return this.cache.segments[e]=s,s}addPointsAtPathIntersections(){const e=this.makePolySegment();e.splitSegmentsAtIntersections();const r=e.path;this._pathPoints=r.pathPoints}calculateQuickSegmentLength(e=0){let r=this.makeSegment(e);return r=r.quickLength,r}findWinding(e){let r,n,a,o=-1;const s=this.pathPoints;if(s.length===2)o=s[1].p.x>s[0].p.x?-1:1;else if(s.length>2)for(let x=0;x<s.length;x++)r=(x+1)%s.length,n=(x+2)%s.length,a=(s[r].p.x-s[x].p.x)*(s[n].p.y-s[r].p.y),a-=(s[r].p.y-s[x].p.y)*(s[n].p.x-s[r].p.x),a<0?o--:a>0&&o++;return o===0&&!e&&(this.reverseWinding(),o=this.findWinding(!0)*-1,this.reverseWinding()),this._winding=o,o}reverseWinding(){let e;this.pathPoints&&(this.pathPoints.forEach(r=>{e=r.h1,r.h1=r.h2,r.h2=e}),this.pathPoints.reverse(),this.winding*=-1,(this.winding===0||!Xe(this.winding))&&this.findWinding(!0))}flipNS(e=this.maxes.center.y){this.pathPoints.forEach(r=>{r.p.coord.y+=(e-r.p.coord.y)*2,r.h1.coord.y+=(e-r.h1.coord.y)*2,r.h2.coord.y+=(e-r.h2.coord.y)*2}),this.reverseWinding()}flipEW(e=this.maxes.center.x){this.pathPoints.forEach(r=>{r.p.coord.x+=(e-r.p.coord.x)*2,r.h1.coord.x+=(e-r.h1.coord.x)*2,r.h2.coord.x+=(e-r.h2.coord.x)*2}),this.reverseWinding()}roundAll(e=0){return this.pathPoints.forEach(r=>r.roundAll(e)),this}addPathPoint(e){return e=new kt(e),e.parent=this,this.pathPoints.push(e),this.findWinding(),this.changed(),e}insertPathPoint(e=0,r=.5,n=!1){const a=e===!1?this.pathPoints[0]:this.pathPoints[e],o=this.getNextPointNum(e),s=this.pathPoints[o];let x,E,T,u;if(this.pathPoints.length>1){const D=this.makeSegment(e).split(r),O=D[0],g=D[1];x={coord:{x:O.p4x,y:O.p4y}},E={coord:{x:O.p3x,y:O.p3y}},T={coord:{x:g.p2x,y:g.p2y}},u=new kt({p:x,h1:E,h2:T}),a.type==="symmetric"&&(a.type="flat"),a.h2.x=O.p2x,a.h2.y=O.p2y,s.type==="symmetric"&&(s.type="flat"),s.h1.x=g.p3x,s.h1.y=g.p3y}else x=new rt({coord:{x:a.p.x+100,y:a.p.y+100}}),E=new rt({coord:{x:a.h2.x+100,y:a.h2.y+100}}),T=new rt({coord:{x:a.h1.x+100,y:a.h1.y+100}}),u=new kt({p:x,h1:E,h2:T,type:a.type});return n&&u.roundAll(0),u.parent=this,this.pathPoints.splice(o,0,u),u}findClosestPointOnCurve(e=new Pr,r=!1){let n=1e4,a=!1,o=!1,s=999999999,x,E;for(let u=0;u<this.pathPoints.length;u++){n=this.makeSegment(u).quickLength*100;for(let D=0;D<1;D+=1/n)x=this.findXYPointFromSplit(D,u),E=Math.sqrt((x.x-e.x)*(x.x-e.x)+(x.y-e.y)*(x.y-e.y)),E<s&&(a&&a.point!==u&&(o=nr(a)),s=E,a={point:u,split:D,distance:E,x:x.x,y:x.y})}return r?o:a}findXYPointFromSplit(e,r=0){return this.pathPoints.length>1?this.makeSegment(r).findXYPointFromSplit(e):this.pathPoints[0].p}recalculateMaxes(){this.cache.maxes=new Ar,this.cache.segments||(this.cache.segments=[]);let e=this.pathPoints.map((r,n)=>this.makeSegment(n).maxes);this.cache.maxes=Oa(e)}checkForNaN(){for(let e=0;e<this.pathPoints.length;e++){const r=this.pathPoints[e];if(isNaN(r.p.x)||isNaN(r.p.y)||isNaN(r.h1.x)||isNaN(r.h1.y)||isNaN(r.h2.x)||isNaN(r.h2.y))return!0}return!1}}const IT=Object.freeze(Object.defineProperty({__proto__:null,Path:ar},Symbol.toStringTag,{value:"Module"}));function dT(t){let e=[],r=(t==null?void 0:t.attributes)||{},n=Number(r.r)||Number(r.rx)||100;n=Math.abs(n);let a=Number(r.r)||Number(r.ry)||100;a=Math.abs(a);let o=Number(r.cx)||0,s=Number(r.cy)||0;if(!(n===0&&a===0)){let x={xMin:o-n,xMax:o+n,yMin:s-a,yMax:s+a};e=uT(x)}return[e]}function uT(t){let e=t.xMin,r=t.yMax,n=t.xMax,a=t.yMin,o=(n-e)/2,s=(r-a)/2,x=o*.448,E=s*.448,T={x:e+o,y:r},u={x:e+x,y:r},D={x:n-x,y:r},O={x:n,y:a+s},g={x:n,y:r-E},V={x:n,y:a+E},Y={x:e+o,y:a},J={x:n-x,y:a},K={x:e+x,y:a},re={x:e,y:a+s},Q={x:e,y:a+E},oe={x:e,y:r-E};return[[T,D,g,O],[O,V,J,Y],[Y,K,Q,re],[re,oe,u,T]]}function pT(t){var a;let e=[],r=(a=t==null?void 0:t.attributes)==null?void 0:a.points;r=Us(r);let n=J0(r);if(n.length>4){let o=Number(n[0]),s=Number(n[1]);for(let x=0;x<n.length;x+=2){let E=Number(n[x])||0,T=Number(n[x+1])||0;e.push([{x:o,y:s},!1,!1,{x:E,y:T}]),o=E,s=T}}return[e]}function Gs(t,e,r,n,a,o,s,x,E,T){let u={x:t,y:e},D={x,y:E};if(t===x&&e===E||!r||!n)return[u.x,u.y,D.x,D.y,D.x,D.y];let O=ST(a);o=!!o,s=!!s;let g={},V,Y;if(T)V=T[0],Y=T[1],g={x:T[2],y:T[3]};else{u=xi(u,O*-1),D=xi(D,O*-1);let be=(u.x-D.x)/2,we=(u.y-D.y)/2,at=we*we,it=be*be,de=it/(r*r)+at/(n*n);de>1&&(de=Math.sqrt(de),r*=de,n*=de);let ht=r*r,se=n*n,Qe=o===s?-1:1;Qe*=Math.sqrt(Math.abs((ht*se-ht*at-se*it)/(ht*at+se*it))),g.x=Qe*r*we/n+(u.x+D.x)/2,g.y=Qe*-1*n*be/r+(u.y+D.y)/2,V=Math.asin((u.y-g.y)/n),Y=Math.asin((D.y-g.y)/n),V=u.x<g.x?Math.PI-V:V,Y=D.x<g.x?Math.PI-Y:Y;let ot=Math.PI*2;V<0&&(V=ot+V),Y<0&&(Y=ot+Y),s&&V>Y&&(V=V-ot),!s&&Y>V&&(Y=Y-ot)}let J=Y-V,K=[],re=Math.PI*120/180;if(Math.abs(J)>re){let be=Y,we=D.x,at=D.y;Y=V+re*(s&&Y>V?1:-1),D.x=g.x+r*Math.cos(Y),D.y=g.y+n*Math.sin(Y),K=Gs(D.x,D.y,r,n,a,0,s,we,at,[Y,be,g.x,g.y])}let Q={x:Math.cos(V),y:Math.sin(V)},oe={x:Math.cos(Y),y:Math.sin(Y)};J=Y-V;let Ae=Math.tan(J/4)*4/3,le={x:u.x,y:u.y},he={x:u.x+r*Ae*Q.y,y:u.y-n*Ae*Q.x};he.x=2*le.x-he.x,he.y=2*le.y-he.y;let Ie={x:D.x+r*Ae*oe.y,y:D.y-n*Ae*oe.x},fe={x:D.x,y:D.y};if(K=[he.x,he.y,Ie.x,Ie.y,fe.x,fe.y].concat(K),T)return K;{let be=[];for(let we=0;we<K.length;we++)we%2?be[we]=xi({x:K[we-1],y:K[we]},O).y:be[we]=xi({x:K[we],y:K[we+1]},O).x;return be}}function ST(t){return t*(Math.PI/180)}function xi(t,e,r){if(!t)return;if(e===0)return t;r=r||{},r.x=r.x||0,r.y=r.y||0,t.x-=r.x,t.y-=r.y;let n=t.x*Math.cos(e)-t.y*Math.sin(e),a=t.x*Math.sin(e)+t.y*Math.cos(e);return t.x=n+r.x,t.y=a+r.y,t}function CT(t={}){const e=t.attributes.d||"";if(e.length===0||e.length===1)return[];let r=RT(e);return r=yT(r),r=mT(r),r=NT(r),r=DT(r),r=fT(r),r=OT(r),gT(r)}function gT(t){let e=[],r=[],n=0,a=0;return t.forEach(o=>{o.type==="M"&&(n=o.parameters[0],a=o.parameters[1]),o.type==="L"&&(r.push([{x:n,y:a},!1,!1,{x:o.parameters[0],y:o.parameters[1]}]),n=o.parameters[0],a=o.parameters[1]),o.type==="C"&&(r.push([{x:n,y:a},{x:o.parameters[0],y:o.parameters[1]},{x:o.parameters[2],y:o.parameters[3]},{x:o.parameters[4],y:o.parameters[5]}]),n=o.parameters[4],a=o.parameters[5]),o.type==="Z"&&(e.push(r),r=[])}),r.length&&e.push(r),e}function RT(t){let e=[],r=!1,n=Us(t);for(let a=0;a<n.length;a++)if(wA(n.charAt(a))){r=a;break}if(r===!1)return[{type:"Z"}];for(let a=r+1;a<n.length;a++)wA(n.charAt(a))&&(e.push({type:n.charAt(r),parameters:J0(n.substring(r+1,a))}),r=a);return r<n.length-1&&e.push({type:n.charAt(r),parameters:J0(n.substring(r+1,n.length))}),e}function yT(t){let e=[],r={},n={x:0,y:0},a={x:0,y:0};return t.forEach(o=>{if(o.type==="m"||o.type==="l"){r={type:o.type==="m"?"M":"L",parameters:[]};for(let s=0;s<o.parameters.length;s+=2)a.x=o.parameters[s+0]+n.x,a.y=o.parameters[s+1]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="h"){r={type:"H",parameters:[]};for(let s=0;s<o.parameters.length;s++)a.x=o.parameters[s]+n.x,r.parameters.push(a.x),n.x=a.x;e.push(r)}else if(o.type==="v"){r={type:"V",parameters:[]};for(let s=0;s<o.parameters.length;s++)a.y=o.parameters[s]+n.y,r.parameters.push(a.y),n.y=a.y;e.push(r)}else if(o.type==="c"){r={type:"C",parameters:[]};for(let s=0;s<o.parameters.length;s+=6)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),r.parameters.push(o.parameters[s+2]+n.x),r.parameters.push(o.parameters[s+3]+n.y),a.x=o.parameters[s+4]+n.x,a.y=o.parameters[s+5]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="s"){r={type:"S",parameters:[]};for(let s=0;s<o.parameters.length;s+=4)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),a.x=o.parameters[s+2]+n.x,a.y=o.parameters[s+3]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="q"){r={type:"Q",parameters:[]};for(let s=0;s<o.parameters.length;s+=4)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),a.x=o.parameters[s+2]+n.x,a.y=o.parameters[s+3]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="t"){r={type:"T",parameters:[]};for(let s=0;s<o.parameters.length;s+=2)a.x=o.parameters[s+0]+n.x,a.y=o.parameters[s+1]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="a"){r={type:"A",parameters:[]};for(let s=0;s<o.parameters.length;s+=7)r.parameters.push(o.parameters[s+0]),r.parameters.push(o.parameters[s+1]),r.parameters.push(o.parameters[s+2]),r.parameters.push(o.parameters[s+3]),r.parameters.push(o.parameters[s+4]),a.x=o.parameters[s+5]+n.x,a.y=o.parameters[s+6]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else o.type==="z"?e.push({type:"Z"}):(e.push(o),n=Ja(n,o))}),e}function mT(t){let e=[];return t.forEach(r=>{if(r.type)switch(r.type){case"Z":case"z":e.push({type:"Z"});break;case"H":case"V":case"h":case"v":for(let n=0;n<r.parameters.length;n+=2)e.push({type:r.type,parameters:[r.parameters[n]]});break;case"M":for(let n=0;n<r.parameters.length;n+=2)e.push({type:n<2?"M":"L",parameters:[r.parameters[n],r.parameters[n+1]]});break;case"m":for(let n=0;n<r.parameters.length;n+=2)e.push({type:n<2?"m":"l",parameters:[r.parameters[n],r.parameters[n+1]]});break;case"L":case"T":case"l":case"t":for(let n=0;n<r.parameters.length;n+=2)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1]]});break;case"Q":case"S":case"q":case"s":for(let n=0;n<r.parameters.length;n+=4)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3]]});break;case"C":case"c":for(let n=0;n<r.parameters.length;n+=6)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3],r.parameters[n+4],r.parameters[n+5]]});break;case"A":case"a":for(let n=0;n<r.parameters.length;n+=7)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3],r.parameters[n+4],r.parameters[n+5],r.parameters[n+6]]});break}}),e}function NT(t){let e=[],r={x:0,y:0};return t.forEach(n=>{if(n.type==="H")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[n.parameters[a],r.y]});else if(n.type==="V")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[r.x,n.parameters[a]]});else e.push(n);r=Ja(r,n)}),e}function DT(t){let e=[],r={x:0,y:0},n={x:0,y:0},a={x:0,y:0},o;return t.forEach(s=>{s.type==="S"||s.type==="T"?(o=e.length>1?e.at(-1):!1,o&&o.type==="C"?(n.x=o.parameters[2],n.y=o.parameters[3]):o&&o.type==="Q"?(n.x=o.parameters[0],n.y=o.parameters[1]):(n.x=r.x,n.y=r.y),a={x:r.x-n.x+r.x,y:r.y-n.y+r.y},s.type==="S"?e.push({type:"C",parameters:[a.x,a.y,s.parameters[0],s.parameters[1],s.parameters[2],s.parameters[3]]}):s.type==="T"&&e.push({type:"Q",parameters:[a.x,a.y,s.parameters[0],s.parameters[1]]})):e.push(s),r=Ja(r,s)}),e}function fT(t){let e=[],r={x:0,y:0},n,a,o,s,x,E,T,u,D,O;return t.forEach(g=>{g.type==="Q"?(n=r.x,a=r.y,o=g.parameters[0],s=g.parameters[1],x=g.parameters[2],E=g.parameters[3],T=n+2/3*(o-n),u=a+2/3*(s-a),D=x+2/3*(o-x),O=E+2/3*(s-E),e.push({type:"C",parameters:[T,u,D,O,x,E]})):e.push(g),r=Ja(r,g)}),e}function OT(t){let e=[],r=[],n={x:0,y:0};return t.forEach(a=>{if(a.type==="A")for(let o=0;o<a.parameters.length;o+=7){r=Gs(n.x,n.y,a.parameters[o+0],a.parameters[o+1],a.parameters[o+2],a.parameters[o+3],a.parameters[o+4],a.parameters[o+5],a.parameters[o+6],!1);for(let s=0;s<r.length;s+=6)e.push({type:"C",parameters:[r[s+0],r[s+1],r[s+2],r[s+3],r[s+4],r[s+5]]});n={x:r.at(-2),y:r.at(-1)}}else e.push(a),n=Ja(n,a)}),e}function Ja(t,e){let r={x:t.x||0,y:t.y||0};switch(e.type){case"Z":case"z":break;case"H":r.x=e.parameters.at(-1);break;case"V":r.y=e.parameters.at(-1);break;case"M":case"L":case"C":case"S":case"A":case"Q":case"T":r.x=e.parameters.at(-2),r.y=e.parameters.at(-1);break;case"h":for(let n=0;n<e.parameters.length;n++)r.x+=e.parameters[n];break;case"v":for(let n=0;n<e.parameters.length;n++)r.y+=e.parameters[n];break;case"m":case"l":case"t":for(let n=0;n<e.parameters.length;n+=2)r.x+=e.parameters[n+0],r.y+=e.parameters[n+1];break;case"q":case"s":for(let n=0;n<e.parameters.length;n+=4)r.x+=e.parameters[n+2],r.y+=e.parameters[n+3];break;case"c":for(let n=0;n<e.parameters.length;n+=6)r.x+=e.parameters[n+4],r.y+=e.parameters[n+5];break;case"a":for(let n=0;n<e.parameters.length;n+=7)r.x+=e.parameters[n+5],r.y+=e.parameters[n+6];break}return r}function wA(t){return"MmLlCcSsZzHhVvAaQqTt".indexOf(t)>-1}function BT(t){let e=t.attributes||{},r=Number(e.x)||0,n=Number(e.y)||0,a=Number(e.width)||100,o=Number(e.height)||100,s=r+a,x=n+o,E={x:r,y:n},T={x:s,y:n},u={x:s,y:x},D={x:r,y:x};return[[[E,!1,!1,T],[T,!1,!1,u],[u,!1,!1,D],[D,!1,!1,E]]]}function HT(t){let e,r;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(t,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t);else throw console.warn("No XML document parser found."),r=new SyntaxError("No XML document parser found."),r;if(e.getElementsByTagName("parserError").length){const o=e.getElementsByTagName("div")[0].innerHTML;throw r=new SyntaxError(Hi(o)),r}return{name:e.documentElement.nodeName,attributes:bs(e.documentElement.attributes),content:Ps(e.documentElement)}}function Ps(t){const e=t.childNodes;if(e.length===0)return Hi(t.nodeValue);const r=[];let n,a,o;for(const s of e)n={},s.nodeName!=="#comment"&&(a=Ps(s),o=bs(s.attributes),s.nodeName==="#text"&&JSON.stringify(o)==="{}"?n=Hi(a):(n.name=s.nodeName,n.attributes=o,n.content=a),n!==""&&r.push(n));return r}function bs(t){if(!t||!t.length)return{};const e={};for(const r of t)e[r.name]=Hi(r.value);return e}function Hi(t){try{return t=t.replace(/^\s+|\s+$/g,""),t.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}function FT(t){let e=HT(t);return vs(e)}function vs(t,e=!1){let r=[],n=!1;return t!=null&&t.content?(t.attributes.transform&&console.warn("Transform data is not supported!"),t.content.forEach(a=>{let o=a.name.toLowerCase();(o==="circle"||o==="ellipse")&&(r=r.concat(dT(a))),(o==="path"||o==="glyph")&&(r=r.concat(CT(a))),(o==="polygon"||o==="polyline")&&(r=r.concat(pT(a))),o==="rect"&&(r=r.concat(BT(a))),o==="g"&&(r=r.concat(vs(a,n)))}),r):[]}function Us(t){return t=t.replace(/\s+/g,","),t=t.replace(/e/gi,"e"),t=t.replace(/e-/g,"~~~"),t=t.replace(/-/g,",-"),t=t.replace(/~~~/g,"e-"),t=t.replace(/e\+/g,"~~~"),t=t.replace(/\+/g,","),t=t.replace(/~~~/g,"e+"),t=t.replace(/,+/g,","),t}function J0(t=""){let e=[];return t.charAt(0)===","&&(t=t.substring(1)),t.charAt(t.length-1)===","&&(t=t.substring(0,t.length-1)),t.length>0&&(t=t.split(","),t.forEach(r=>{if(r=r.split("."),r.length===1)e.push(Number(r[0]));else if(r.length===2)e.push(Number(r.join(".")));else if(r.length>2){e.push(+`${r[0]}.${r[1]}`);for(let n=2;n<r.length;n++)e.push(+`0.${r[n]}`)}})),e}class Zr extends Dr{constructor({link:e=!1,name:r="Component Instance",translateX:n=0,translateY:a=0,resizeWidth:o=0,resizeHeight:s=0,isFlippedNS:x=!1,isFlippedEW:E=!1,reverseWinding:T=!1,rotation:u=0,rotateFirst:D=!1,xLock:O=!1,yLock:g=!1,wLock:V=!1,hLock:Y=!1,ratioLock:J=!1,parent:K=!1}={}){super(),this.parent=K,this.name=r,this.link=e,this.translateX=n,this.translateY=a,this.resizeWidth=o,this.resizeHeight=s,this.isFlippedNS=x,this.isFlippedEW=E,this.reverseWinding=T,this.rotation=u,this.rotateFirst=D,this.xLock=O,this.yLock=g,this.wLock=V,this.hLock=Y,this.ratioLock=J,this.objType="ComponentInstance"}save(e=!1){const r={link:this.link};return this.name!=="Component Instance"&&(r.name=this.name),this.translateX!==0&&(r.translateX=this.translateX),this.translateY!==0&&(r.translateY=this.translateY),this.resizeWidth!==0&&(r.resizeWidth=this.resizeWidth),this.resizeHeight!==0&&(r.resizeHeight=this.resizeHeight),this.isFlippedNS!==!1&&(r.isFlippedNS=this.isFlippedNS),this.isFlippedEW!==!1&&(r.isFlippedEW=this.isFlippedEW),this.reverseWinding!==!1&&(r.reverseWinding=this.reverseWinding),this.rotation!==0&&(r.rotation=this.rotation),this.rotateFirst!==!1&&(r.rotateFirst=this.rotateFirst),this.xLock!==!1&&(r.xLock=this.xLock),this.yLock!==!1&&(r.yLock=this.yLock),this.wLock!==!1&&(r.wLock=this.wLock),this.hLock!==!1&&(r.hLock=this.hLock),this.ratioLock!==!1&&(r.ratioLock=this.ratioLock),e&&(r.objType=this.objType),r}get transformedGlyph(){return this.cache.transformedGlyph||(this.cache.transformedGlyph=this.makeTransformedGlyph()),this.cache.transformedGlyph}makeTransformedGlyph(){const e=this.getCrossLinkedItem();if(!e)return console.warn(`Tried to get Component: ${this.link} but it doesn't exist - bad usedIn array maintenance.`),!1;const r=Yn(e);return(this.translateX||this.translateY||this.resizeWidth||this.resizeHeight||this.isFlippedEW||this.isFlippedNS||this.reverseWinding||this.rotation)&&(this.rotateFirst&&r.rotate(Ra(this.rotation*-1),r.maxes.center),this.isFlippedEW&&r.flipEW(),this.isFlippedNS&&r.flipNS(),r.updateGlyphPosition(this.translateX,this.translateY,!0),r.updateGlyphSize({width:this.resizeWidth,height:this.resizeHeight}),this.reverseWinding&&r.reverseWinding(),this.rotateFirst||r.rotate(Ra(this.rotation*-1),r.maxes.center)),r}getCrossLinkedItem(){var n;let e=(n=this==null?void 0:this.parent)==null?void 0:n.parent,r;return e&&e.getItem&&(r=e.getItem(this.link)),r}get link(){return this._link}get name(){return this._name}get translateX(){return this._translateX}get translateY(){return this._translateY}get resizeWidth(){return this._scaleW}get resizeHeight(){return this._scaleH}get isFlippedEW(){return this._isFlippedEW}get isFlippedNS(){return this._isFlippedNS}get reverseWinding(){return this._reverseWinding}get rotation(){return this._rotation}get rotateFirst(){return this._rotateFirst}get xLock(){return this._xLock}get yLock(){return this._yLock}get wLock(){return this._wLock}get hLock(){return this._hLock}get ratioLock(){return this._ratioLock}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get width(){return this.transformedGlyph.maxes.width}get height(){return this.transformedGlyph.maxes.height}get maxes(){return this.transformedGlyph.maxes}get center(){return this.transformedGlyph.maxes.center}get svgPathData(){return this.transformedGlyph.svgPathData}set link(e){this._link=e,this.changed()}set name(e=""){e=xo(e),e!==""&&(this._name=e)}set translateX(e){this._translateX=parseFloat(e),isNaN(this._translateX)&&(this._translateX=0),this.changed()}set translateY(e){this._translateY=parseFloat(e),isNaN(this._translateY)&&(this._translateY=0),this.changed()}set resizeWidth(e){this._scaleW=parseFloat(e),isNaN(this._scaleW)&&(this._scaleW=0),this.changed()}set resizeHeight(e){this._scaleH=parseFloat(e),isNaN(this._scaleH)&&(this._scaleH=0),this.changed()}set isFlippedNS(e){this._isFlippedNS=!!e,this.changed()}set isFlippedEW(e){this._isFlippedEW=!!e,this.changed()}set reverseWinding(e){this._reverseWinding=!!e,this.changed()}set rotation(e){this._rotation=parseFloat(e),isNaN(this._rotation)&&(this._rotation=0),this.changed()}set rotateFirst(e){this._rotateFirst=!!e,this.changed()}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set wLock(e){this._wLock=!!e}set hLock(e){this._hLock=!!e}set ratioLock(e){this._ratioLock=!!e}updateShapePosition(e,r){e=parseFloat(e)||0,r=parseFloat(r)||0,this.translateX=1*this.translateX+e,this.translateY=1*this.translateY+r}updateShapeSize({width:e=!1,height:r=!1,ratioLock:n=!1}){if(e!==!1&&(e=parseFloat(e)||0),r!==!1&&(r=parseFloat(r)||0),n){const a=this.transformedGlyph.maxes,o=a.xMax-a.xMin,s=a.yMax-a.yMin;Math.abs(e)>Math.abs(r)?r=e*(s/o):e=r*(o/s)}this.resizeWidth=1*this.resizeWidth+e,this.resizeHeight=1*this.resizeHeight+r,this.rotation===0&&(this.rotateFirst=!1)}flipEW(e){if(this.isFlippedEW=!this.isFlippedEW,e){const r=this.transformedGlyph.maxes;this.translateX+=e-r.xMax+e-r.xMin}return this.rotation===0&&(this.rotateFirst=!1),this}flipNS(e){if(this.isFlippedNS=!this.isFlippedNS,e){const r=this.transformedGlyph.maxes;this.translateY+=e-r.yMax+e-r.yMin}return this.rotation===0&&(this.rotateFirst=!1),this}rotate(e){const r=Ki(e)*-1;return this.rotation=this.rotation+r,this.resizeHeight===0&&this.resizeWidth===0&&!this.isFlippedEW&&!this.isFlippedNS&&(this.rotateFirst=!0),this}}const MT=Object.freeze(Object.defineProperty({__proto__:null,ComponentInstance:Zr},Symbol.toStringTag,{value:"Module"}));class nt extends Dr{constructor({id:e=!1,parent:r=!1,objType:n="Glyph",name:a=!1,shapes:o=[],advanceWidth:s=0,transformOrigin:x=!1,ratioLock:E=!1,usedIn:T=[],gsub:u=[],contextCharacters:D=""}={}){super(),this.id=e,this.parent=r,this.name=a,this.shapes=o,this.advanceWidth=s,this.transformOrigin=x,this.ratioLock=E,this.usedIn=T,this.gsub=u,this.contextCharacters=D,this.objType=n}save(e=!1){const r={name:this.name,id:this._id,objType:this.objType};this.advanceWidth!==0&&(r.advanceWidth=this.advanceWidth),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(r.transformOrigin=this.transformOrigin),this.ratioLock!==!1&&(r.ratioLock=this.ratioLock),this.usedIn.length&&(r.usedIn=this.usedIn),this.gsub.length&&(r.gsub=this.gsub);let n=this.contextCharacters;if(n.length&&n!==this.char&&(r.contextCharacters=n),this.shapes&&this.shapes.length){r.shapes=[];for(let a=0;a<this.shapes.length;a++)r.shapes.push(this.shapes[a].save(e))}return e||(this.objType==="Glyph"&&delete r.name,delete r.objType),!e&&this.__ID&&delete this.__ID,r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Glyph
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
`),n+=`${r.substring(2)}}/Glyph ${this.id}`,n}get id(){return this._id}get shapes(){return this._shapes}get advanceWidth(){return this._advanceWidth}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin}get ratioLock(){return this._ratioLock}get usedIn(){return this._usedIn||[]}get gsub(){return this._gsub||[]}get contextCharacters(){return!this._contextCharacters||this._contextCharacters===this.char?this.char:this._contextCharacters}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get leftSideBearing(){return this.maxes.xMin}get rightSideBearing(){let e=this.maxes.xMax;return this.advanceWidth-e}get name(){let e=this._name;if(!e&&!this.id)return"[no id]";if(!e){if(this.id.startsWith("liga-")){let r=Tr(this.id,"liga-");r=r.split("-"),e="Ligature ",r.forEach(n=>{n.length===1?e+=n:e+=Cr(n)})}else if(this.id.startsWith("comp-"))e=`Component ${Tr(this.id,"comp-")}`;else if(this.id.startsWith("glyph-")){let r=Tr(this.id,"glyph-");e=Aa(r)}this._name=e}return e}get char(){let e;return this.gsub.length?e=this.gsub.reduce((r,n)=>`${r}${String.fromCodePoint(n)}`,""):e=Cr(Tr(this.id,"glyph-")),e}get chars(){return this.char}get contentType(){if(this.cache.contentType)return this.cache.contentType;let e="unknown",r=0,n=0;return this.shapes.forEach(a=>{a.objType==="ComponentInstance"&&n++,a.objType==="Path"&&r++}),r>0&&n===0&&(e="paths"),n>0&&r===0&&(e="component instances"),r>0&&n>0&&(e="items"),this.cache.contentType=e,e}get pointCount(){let e=0;return this.shapes.forEach(r=>{r.objType==="ComponentInstance"?e+=r.pointCount:r.pathPoints.forEach(n=>{var a,o;e++,(a=n==null?void 0:n.h1)!=null&&a.use&&e++,(o=n==null?void 0:n.h2)!=null&&o.use&&e++})}),e}set id(e){this._id=e}set shapes(e=[]){this._shapes=[],e&&e.length&&e.forEach(r=>{this.addOneShape(r)}),this.changed()}addOneShape(e){return Xe(e.link)?(e.parent=this,this._shapes.push(new Zr(e))):(e.parent=this,this._shapes.push(new ar(e))),this.changed(),this._shapes.at(-1)}set advanceWidth(e){this._advanceWidth=parseFloat(e),isNaN(this._advanceWidth)&&(this._advanceWidth=0)}set transformOrigin(e){ba.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin=!1}set ratioLock(e){this._ratioLock=!!e}set usedIn(e){this._usedIn=e||[]}set gsub(e){this._gsub=e||[]}set contextCharacters(e=!1){!e||e===this.char||typeof e!="string"?delete this._contextCharacters:this._contextCharacters=e}set name(e){this._name=e}set x(e){this.setGlyphPosition(e,!1)}set y(e){this.setGlyphPosition(!1,e)}set width(e){this.setGlyphSize({width:e})}set height(e){this.setGlyphSize({height:e})}set leftSideBearing(e){let r=e-this.leftSideBearing;this.setGlyphPosition(e),this.advanceWidth+=r}set rightSideBearing(e){let r=e-this.rightSideBearing;this.advanceWidth+=r}setGlyphPosition(e,r,n=!0){const a=this.maxes;e!==!1&&(e=parseFloat(e)),r!==!1&&(r=parseFloat(r));const o=e!==!1?e-a.xMin:0,s=r!==!1?r-a.yMax:0;this.updateGlyphPosition(o,s,n)}updateGlyphPosition(e,r,n=!0){e=parseFloat(e)||0,r=parseFloat(r)||0;for(let a=0;a<this.shapes.length;a++){const o=this.shapes[a];o.objType==="ComponentInstance"&&!n||o.updateShapePosition(e,r)}}setGlyphSize({width:e=!1,height:r=!1,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:o=!1}={}){const s=this.maxes;e!==!1&&(e=parseFloat(e)),r!==!1&&(r=parseFloat(r));const x=s.yMax-s.yMin,E=s.xMax-s.xMin;let T=e!==!1?e-E:0,u=r!==!1?r-x:0;n&&(Math.abs(r)>Math.abs(e)?T=E*(r/x)-E:u=x*(e/E)-x),this.updateGlyphSize({width:T,height:u,updateComponentInstances:a,transformOrigin:o})}updateGlyphSize({width:e=0,height:r=0,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:o=!1}={}){const s=this.maxes;let x=parseFloat(e)||0,E=parseFloat(r)||0;const T=s.width,u=s.height;let D=T+x,O=u+E;Math.abs(D)<1&&(D=1),Math.abs(O)<1&&(O=1);let g=O/u,V=D/T;n&&(x!==0&&E===0?(g=V,O=u*g,E=O-u):(V=g,D=T*V,x=D-T));const Y=Lo(x,E,this.maxes,o);this.shapes.forEach(J=>{if(J.objType==="ComponentInstance"&&!a)return;const K=J.maxes,re=K.xMax-K.xMin,Q=re*V;let oe=!1;V!==0&&(oe=Q-re);const Ae=K.yMax-K.yMin,le=Ae*g;let he=!1;g!==0&&(he=le-Ae),J.updateShapeSize({width:oe,height:he,transformOrigin:"bottom-left"});const Ie=K.xMin-s.xMin,fe=Ie*V;let be=!1;V!==0&&(be=fe-Ie);const we=K.yMin-s.yMin,at=we*g;let it=!1;g!==0&&(it=at-we),J.updateShapePosition(be,it,!0)}),this.updateGlyphPosition(Y.deltaX,Y.deltaY)}flipNS(e=this.maxes.center.y){for(let r=0;r<this.shapes.length;r++)this.shapes[r].flipNS(e);return this}flipEW(e=this.maxes.center.x){for(let r=0;r<this.shapes.length;r++)this.shapes[r].flipEW(e);return this}roundAll(e=0){return this.shapes.forEach(r=>{r.roundAll&&r.roundAll(e)}),this}rotate(e,r){r=r||this.maxes.center;for(let n=0;n<this.shapes.length;n++)this.shapes[n].rotate(e,r);return this}reverseWinding(){for(let e=0;e<this.shapes.length;e++)this.shapes[e].reverseWinding();return this}get svgPathData(){var e;return(e=this==null?void 0:this.cache)!=null&&e.svgPathData||(this.cache.svgPathData=this.makeSVGPathData(this)),this.cache.svgPathData}makeSVGPathData(){let e="M0,0";return this.shapes.forEach(r=>{if(r.objType==="ComponentInstance"){const n=r.transformedGlyph;n&&(e+=n.svgPathData)}else e+=r.svgPathData,e+=" "}),Eo(e)==="M0,0"&&(e="M0,0Z"),e}get maxes(){return this.cache.maxes?ki(this.cache.maxes)?this.recalculateGlyphMaxes():fo(this.cache.maxes)&&this.recalculateGlyphMaxes():this.recalculateGlyphMaxes(),this.cache.maxes}recalculateGlyphMaxes(){let e={xMax:0,xMin:0,yMax:0,yMin:0};return this.shapes&&this.shapes.length>0&&(e=Oa(this.shapes.map(r=>r.maxes))),this.cache.maxes=new Ar(e),this.cache.maxes}}const GT=Object.freeze(Object.defineProperty({__proto__:null,Glyph:nt},Symbol.toStringTag,{value:"Module"}));function Ha(t,e=!0){const r=FT(t);if(e&&r.length===0)return lr(`
			Could not find any SVG tags to import.
			Supported tags are: &lt;path&gt;, &lt;rect&gt;, &lt;polygon&gt;, &lt;polyline&gt;, and &lt;ellipse&gt;.`),new nt;let n=0,a=[];r.forEach(s=>{if(s=s.filter(x=>!(x[0].x===x[3].x&&x[0].y===x[3].y&&x[1]===!1&&x[2]===!1)),s.length){n++;const x=s[0][0].x===s.at(-1)[3].x&&s[0][0].y===s.at(-1)[3].y;let E=new ar({name:`Path ${n}`}),T;x||(T=new kt({p:{coord:{x:s[0][0].x,y:s[0][0].y}}}),s[0][1]&&(T.h2=new rt({coord:{x:s[0][1].x,y:s[0][1].y}})),E.addPathPoint(T));for(let u=0;u<s.length-1;u++)E.addPathPoint(YA(s[u],s[u+1]));x?E.addPathPoint(YA(s.at(-1),s[0])):(T=new kt({p:{coord:{x:s.at(-1)[3].x,y:s.at(-1)[3].y}}}),s.at(-1)[2]&&(T.h1=new rt({coord:{x:s.at(-1)[2].x,y:s.at(-1)[2].y}})),E.addPathPoint(T)),a.push(E)}});const o=new nt({shapes:a});return o.changed(!0),o}function YA(t,e){t[3].x!==e[0].x||(t[3].y,e[0].y);let r=new kt({p:{coord:{x:e[0].x,y:e[0].y}}});return t[2]&&(r.h1=new rt({coord:{x:t[2].x,y:t[2].y},use:!0})),e[1]&&(r.h2=new rt({coord:{x:e[1].x,y:e[1].y},use:!0})),r}function Z0(t,e="SVG"){const r=Ha(t);if(r&&r.shapes.length){r.flipNS(),r.reverseWinding();const n=z(),a=wn(r,n.selectedItem);n.history.addState("Pasted SVG to glyph "+n.selectedItem.name);const o=n.multiSelect.shapes;o.clear(),a.forEach(s=>o.add(s)),Le().settings.app.moveShapesOnSVGDragDrop&&o.setShapePosition(0,o.maxes.height),n.publish("currentItem",n.selectedItem),ye(`Pasted ${r.shapes.length} shapes from ${e}`)}else ye("Could not import pasted SVG code.")}async function WA(t){var r;const e=t.clipboardData||window.clipboardData;if(e){let n=e.getData("Text");Z0(n,"<br>the operating system clipboard")}else if((r=navigator==null?void 0:navigator.clipboard)!=null&&r.readText)navigator.clipboard.readText().then(n=>{n?Z0(n,"<br>the operating system clipboard"):ye("Could not import SVG from the operating system clipboard")});else{ye("Could not import SVG from the operating system clipboard");return}}function PT(t){tt(t);let e=t.dataTransfer;e=e.files[0]||"";let r=e.name.split(".");r=r[r.length-1].toLowerCase();const n=new FileReader;r==="svg"?(n.onload=function(){Z0(n.result,"<br>from the dropped SVG file")},n.readAsText(e)):ye("Only SVG files can be dropped on the canvas")}class Wr{constructor(e={}){this.text=e.text||"",this.fontSize=e.fontSize||48,this.lineGap=e.lineGap||12,this.pagePadding=e.pagePadding||10,this.pageWidth=e.pageWidth||"fit",this.pageHeight=e.pageHeight||"auto",this.showCharacterExtras=e.showCharacterExtras||!1,this.showLineExtras=e.showLineExtras||!1,this.showPageExtras=e.showPageExtras||!1,this.widthAdjustment=e.widthAdjustment||0}get text(){let e=this._text;return e.substring(0,2)==="{{"&&(e=e.substring(2,e.length-2),Yt[e])?Yt[e]:this._text}set text(e=""){this._text=e}get displayName(){let e="";return e+=`${this.text.substring(0,40)}...`,e}save(){let e={};return this.fontSize&&this.fontSize!==48&&(e.fontSize=this.fontSize),this.lineGap&&this.lineGap!==12&&(e.lineGap=this.lineGap),this.pagePadding&&this.pagePadding!==10&&(e.pagePadding=this.pagePadding),this.pageWidth&&this.pageWidth!=="fit"&&(e.pageWidth=this.pageWidth),this.pageHeight&&this.pageHeight!=="auto"&&(e.pageHeight=this.pageHeight),this.showCharacterExtras&&(e.showCharacterExtras=this.showCharacterExtras),this.showLineExtras&&(e.showLineExtras=this.showLineExtras),this.showPageExtras&&(e.showPageExtras=this.showPageExtras),this._text&&(e.text=this._text),this.text===Yt.swadesh_207_short&&(e.text="{{swadesh_207_short}}"),this.text===Yt.swadesh_207_frequent&&(e.text="{{swadesh_207_frequent}}"),this.text===Yt.scowl_10_short&&(e.text="{{scowl_10_short}}"),this.text===Yt.scowl_10_frequent&&(e.text="{{scowl_10_frequent}}"),this.text===Yt.scowl_50_short&&(e.text="{{scowl_50_short}}"),this.text===Yt.scowl_50_frequent&&(e.text="{{scowl_50_frequent}}"),this.text===Yt.scowl_70_short&&(e.text="{{scowl_70_short}}"),this.text===Yt.scowl_70_frequent&&(e.text="{{scowl_70_frequent}}"),e}}let Yt={};Yt.swadesh_207_short="I you they we you they this that here there who what where when how not all many some few other one two three four five big long wide thick heavy small short narrow thin woman man child wife husband mother father animal fish bird dog louse snake worm tree forest stick fruit seed leaf root bark flower grass rope skin meat blood bone fat egg horn tail feather hair head ear eye nose mouth tooth tongue fingernail foot leg knee hand wing belly guts neck back breast heart liver drink eat bite suck spit vomit blow breathe laugh see hear know think smell fear sleep live die kill fight hunt hit cut split stab scratch dig swim fly walk come lie sit stand turn fall give hold squeeze rub wash wipe pull push throw tie sew count say sing play float flow freeze swell sun moon star water rain river lake sea salt stone sand dust earth cloud fog sky wind snow ice smoke fire ash burn road mountain red green yellow white black night day year warm cold full new old good bad rotten dirty straight round sharp dull smooth wet dry correct near far right left at in with and if because name";Yt.swadesh_207_frequent="stab black head leaf fingernail snake animal name husband narrow breast feather because heavy play bird blood bone breathe burn ice scratch thick cloud correct cut day wide dirty dog drink dust seed squeeze left egg yellow rotten sleep forest wet few they father flower freeze full straight give good grass tongue sharp short three die wife wipe this fruit liver skin knee sky laugh child walk salt belly smell vomit mountain stone nose many float smoke hold woman smooth rope mother spit split pull bark worm dry sing some suck swell stick guts turn two rub four mouth water where you";Yt.scowl_10_short="able act add leaf age ahead aid major make all am an chaos gap are as at cause gave law tax day lazy bad rubber be bid object able submit box brand jobs doubt bug obvious by can occur ice char city back club code acquire cry cs act cup cycle day feedback broadcast add code edge did adjust badly admit midnight do dry adds due advice hardware body eat debate neck bed see left leg behalf being reject seek cell deem end video deep equal err hes bet queue even few sex eye fan fed off fit fly for fry left fun modify gap age meaningful bigger high girl glad sign go grew bugs length gun apology had forthcoming withdraw he hid highly algorithm technical hot three months eight huge worthwhile why via library ice aid die if big like ill aim in prior chip unique air is it medium five fix size object job jump package key background kid quickly knew asks awkward lucky law album welcome old led half algorithm lie bulk all film log help already also felt blue solve always fly mad dumb me harmful mix firmly common autumn mod dump aims much my name inch and net info hang unhappy nice enjoy bank only government annoy no input unreasonable runs cent numb invent unwanted any boat job lock mod doe of dog oh oil project book old come on too pop or cost got our love how box boy dozen pay update pen helpful graph pi plan equipment pop apple press chips kept put upwards copy quit ran nearby force card re perfect argue perhaps rid dark girl arm turn row sharp err bars art run serve forward cry sad husband disc see satisfy she sit ask slip small so spot square less best sum answer busy tax catch ate doubtful the tie title treatment to output try its putt tune two city equal club luck judge due stuff bug quit bulk sum fun quote up our us but buy van even via vote heavy war we awful who win awkward slowly own two write laws growth exact except boxes exist expand next maybe cycle eye dying style symbol syntax you type buys byte anyway bizarre size";Yt.scowl_10_frequent="establishment accidentally administration afterwards disadvantage ahead straightforward majority mistaking alternatively fundamentally misunderstanding chaos applications broadcasting automatically available withdraw maximum displaying crazy embarrassing rubbish deliberately responsibility objections submitting borrowing observation doubtful contributions obviously thereby communications circumstances characters background conclusion acquiring descriptions electronics introduction consistency recommendation feedback additional knowledge adjust admittedly midnight documentation addressing misunderstands undergraduates hardware everybody disappearing somebody sophisticated guaranteeing definitions registering comprehensive rejecting seeking announcement simultaneously representation consequences interpretation queue nevertheless elsewhere experiencing keyboard facilities professional difficulties significantly reflecting frequently justifying investigate arrangements meaningful suggestions discouraging accordingly algorithms buildings strength terminology beforehand forthcoming thoroughly techniques authorities throughout months hundreds worthwhile philosophy appreciating opportunities likewise mediums fixing bizarre justification packages brackets quickly networks awkward lucky calculations album considerable yourself talking almost development helpful already individuals absolutely themselves always combinations harmful harmless autumn demonstration comparatively mysterious unfortunately unhappy enjoy thinking certainly environment unnecessarily unpleasant unreasonable continuously conventional unwanted anonymous misunderstood whatsoever programmers oh pointless projects looking controlling possibilities potentially improvements boxes destroying dozens updating developing upsetting manipulation upwards occupying disturbing performance perhaps particularly information instruction intervention unnecessary husband successfully asking criticism square answering symbols switching atmosphere output publication excluding sufficiently requirements corrupting buying individually avoiding heavy awful widespread unknown rewrite borrows growth examined exceptions executing complexity extending cycles destroyed style syntax everyone anyplace everything everywhere citizen";Yt.scowl_50_short="salaam abed acme gad aery aft jag bah fain rajah hake alb lam ankh baobab apps aqua agar asp tat auk aver awl axon dray laze bah bobby webcam abductee abed clubfeet subgroups subhead bier abjure lambkin bleep submerse hobnail bola subplot brr albs bobtail bur obverse bobwhite bobby cads cocci apace achoo cis beck clew acme picnicker coda acquirable craw docs bract cud chancy czarina coda oddball redcap adder deb gadfly cadge dhoti ding adjure bodkin addle adman gladness doc midpoint dram ids hardtop duh adverted dweeb dyer adze lea deb beck zed jeep fief aegis meh lei deejay pekoe ell emo wen oleo hep coequal ere espy eta euro bevy clew hex fey wheezy fa halfback serfdom fey doff afghan wolfhound fie flan hafnium fob halfpence frack coifs aft futz daffy gad bugbear dogcatcher hangdog loge dogfish boggy aught gird glop magma cosign agog grog ergs dogtrot ague wigwag gyro haw highboy ashcans archduke hep mirthful flashgun fishhook hie babushka phlox bathmat techno hob dishpan thru ankhs aught hula schwa ashy iamb jib mica ids fie coif brig jihad piing demijohn wiki mil sim ding viol pip cliquish dirk cis clit odium diva antiwar nix sukiyaki baize jag jeep jib josh julep kale backbit crankcase workday hake sackful ginkgo ankh kith lockjaw yukked anklet milkmaid knave kook chickpea krone auks buckteeth haiku inkwell balky la alb milch veld lea milf bilge bullhorn clit killjoy bilk ell palmy ulna lo pulpy catafalque bulrush awls dolt alum salvo bulwark lynx maw iamb gimcrack slumdog meh brimful farmhand mid mkay armlet jimmy limn emo ump kumquat armrest ems emu triumvirate dimwit gamy nary inbox conch wend pone confab bong inhere nib ninja ankh wanly enmesh jinn noel unpin jonquil unripe duns nth nu convoke unwed lynx onyx benzene roan fob doc hod aloe oft agog oho poi emoji gook pol tom yon coon fop toque orb hos sot lout coven cowl lox soy boozy paps soapbox topcoat stepdad jape campfire popgun aphid pip bumpkin plait stepmom grapnel poi apps prig apps inapt pug pwn pyx aqua brad orb orc gird ere serf erg rho brig marjoram dirk purl berm lorn euro carpi marquis brr burs arty drub nervy airway aery furze mesa busby scat misdo apse misfire disgorge ashy sim disjointedly rusk slaw ism snaky sol asp squab disrobe buss sty suet svelte swag hussy eta catbird butch cote outfox outgo nth ti catkin fitly litmus botnet tom potpie tram lats attar tun outvote twain sty futz aqua nub deuce cud ague mufti pug duh quid jujube auk hula ump dun quoit yup bur buss abut muumuu uvula bauxite obloquy abuzz diva aver vim vole chevron ovule divvy bevy swag cowbird howdah wen lawfully gewgaw whey wiki hawker awl bowman pwn wooer cowpox wrack haws newtons wuss dewy frowzy fixate oxbow coxcomb fixer oxford foxglove foxhound axial laxly laxness axon sexpot coxswain sextet nexus boxwood epoxy yaw flyby lyceum hydra ye mayfly cygnet tallyho yip skyjack beryl hymen lynx yon hypo gyro cloys mythic yuk byword pyx piazza zed zing buzzkill drizzly hazmat kazoo gazpacho kudzu zwieback boozy";Yt.scowl_50_frequent="salaaming imperturbability ultraconservatives disadvantageously aerodynamically afforestation tetrahedrons praiseworthiness majorettes groundbreakings electroencephalograms contemporaneously chaotically electroencephalographs aquaculture counterrevolutionaries overenthusiastic interrelationships authoritativeness circumnavigations straightaways axiomatically companionways nonhazardous flibbertigibbets subcontracting molybdenum disencumbering obfuscating subgroups subheadings comprehensibility unobjectionable lambkins bloodthirstiness submersibles abnegating chlorofluorocarbons subprograms transubstantiation obtrusiveness bureaucratically obviousness dumbwaiters labyrinthine electrocardiographs unacceptability lackadaisically counterclaiming acmes picnickers acquisitiveness aristocratically electrodynamics cryptocurrency czarinas daguerreotyping rebroadcasting featherbedding inconsiderateness crowdfunding foreknowledge hardheadedness maladjustment bodkins disconnectedly administratively lightheartedness ambassadorships sandpipers hydroelectricity fountainheads superconductivity hundredweights kudzus rebelliousness electioneering prefabrication gregariousness reinterpretations steeplejacks inconsequentially electromagnetism neurotransmitters exemplifications monkeyshines intermezzos multifariousness beefburger serfdom paraprofessionals afghans halfheartedness aloofness disinformation halfpennies disenfranchisement weatherproofs antiaircraft unfaithfulness misidentifying herringbone dogcatchers hangdog counterintelligence wrongfulness microaggressions bacteriological uncompromisingly phlegmatically nongovernmental dogtrotting wigwagging parapsychology archbishoprics beachcombers archdeacons thoroughgoing bathhouses babushkas arithmetically biotechnology catchphrase philanthropically mouthwatering inconspicuousness annihilators shanghaiing demijohns sportsmanlike deliquescent conversationalists triumvirates contrariwise transfixing sukiyaki prizefighters jitterbugging photojournalists jurisdictional blackballing blackcurrant backdating cantankerousness thankfulness blackguards blockhouses lockjaw yukking huckleberries brinkmanship kookaburras backpedals bankrolling backstretches blackthorns skulduggery anticlockwise buckyballs spellbinders spellcheckers officeholders overindulgence levelheadedness killjoys streetwalkers schoolmistresses invulnerability palpitations milquetoasts chivalrously galvanometers councilwoman discombobulating gimcracks humdingers interdepartmental circumflexes warmhearted interdenominational mkay circumlocutions telecommunication anthropomorphism kumquats armrests bantamweights mysteriousness boysenberries teleconferencing circumnavigating unhesitatingly conjunctivitis dimensionless environmentalism interconnections unpredictability inquisitiveness nonrepresentational counterrevolutions discontinuances overanxious mulligatawny extravaganzas prohibitionists boisterousness psychokinesis grandiloquence atmospherically incontrovertible flamethrowers detoxification spermatozoon shipbuilders slipcovers snapdragons sheepfolds popguns slipknots developmental pneumatically apprehensiveness circumscriptions unscrupulousness sleepwalkers aromatherapy noninterference hypoallergenic porterhouses crackerjacks telemarketing disorderliness predetermination overqualified incorruptibility counterweights counterrevolutionary overzealous crossbreeding conscientiousness disfranchisement thanksgivings disjointedly muskellunges unreasonableness misquotations disreputably transversely swashbucklers syllabification carpetbaggers boastfulness remortgaging catkins shuttlecocking forthrightness breastplates agriculturalists outvoting trustworthiness chintziest longitudinally genuflections lugubriousness brouhahas jujitsu interleukin muumuus antediluvian luxuriousness colloquy puzzlement chevrons skivvying waterboardings shadowboxing weatherproofing viewfinders lawgivers horsewhipping nighthawks sawmills clownishness cowpunchers wrongheadedness newspaperwoman swallowtails knockwursts billowy frowziest counterexamples oxbows unexceptionable oxfords foxgloves inexhaustibly sexless laxness exorbitantly expostulations coxswains extemporaneously waxwings oxyacetylene cyberbullies underemployed ladyfingers lollygagging policyholders skyjackers asymmetrically embryologists cryptocurrencies tyrannosauruses crystallographic electrolytes polyunsaturated pennyweights asphyxia quizzically buzzkills bedazzling hazmat gazpacho mazurkas zwieback lazybones";Yt.scowl_70_short="aah ab ac ad ae aft aga ah ai haj aka al am an ciao ape aqua ar as at aud av aw ax aye azo aba abb bobcat bd be bf pibgorn abhor bi obj bk bl abmho cobnut boa bp br abs btl bu abvolt lbw bx by subzero ca ecbolic cc cd ace cf cg ch cig ck cl cm acne co cp acquit cr cs ct cu cw cyl czar dab db dc dd de gadfly dg edh di adj dk bdl dm ordn do dpi hdqrs dr ads obdt dub adv dwt dye dz ea deb dec ed bee def beg eh lei eject eek el em en eon dep eq er es et feu eve dew ex bey fez fa offbeat offcuts mfd fec ff mfg offhand fib fjeld offkey fl fm hafnium fo fp fr ifs ft fug fwd defy rugby agcy gds age bagful egg ugh gi logjam gl gm gnu go magpie gr gs gt gum dogvane hgwy gym zigzag ha cashbox ahchoo hd he hf hg hhd hi kishke hl chm john ho hp earthquake hr chs ht hub boschvark hwy hyp machzor ria ib hic id die if big ihram aalii bijou oik ail aim in bio dip liq air is it ilium civ iwis fix hiya biz ja jct jet jg jib hajj prajna jo jr adjt jug ka kb kc jackdaw eke nakfa kg ankh ki lockjaw dekko kl km kn koa kph kr ks kt haku kvass kw sky la lb talc eld ale elf lg pelham li killjoy alk ll lm ln lo alp calque dlr ls alt flu lv lwei lx fly colza ma mb emcee mdse me mf mg mho mi ramjet mk ml mm damn mo mp kumquat amrita ms mt mu duumvir dimwit my hamza ana inbox enc and ne inf eng sinh nib conj ink enl unman ann no tnpk cinque nr ans ant nu inv unwed jinx any bonze ob doc od doe of bog oh oi mojo oka col om on oo op loq or os bot fou gov ow ox boy oz pa peepbo pc pd pe pf pg pi kopje pk pl pm apnea pod pp pr ps pt pub pvt pwn pya pzazz qadi sheqel qi ql qoph sqq qr qt qu qwerty bra arb arc rd re barf erg rho interj ark birl rm urn bro rpm cirque arr rs rt cru arvo crwth cry orzo sac sb sc sd sea sf sgd sh si masjid ask isl ism assn so sp sq sri ss st sub svelte swab sym grosz ta tb etc gtd ate artful mtg fth ti muntjac latke atm tn to hatpin cotquean tr ts att tub outvote two qty ditz qua bub buck cue buff aug uh oui juju auk bul um bun duo up tuque bur us ut lituus guv thruway aux buy buzz ova vb avdp ave avg vhf via vlf avn vo livre vs ovum vv ivy evzone wad bawbee bawcock wd we awful gewgaw whf wig blowjob wk awl cwm awn wo twp wry bows wt swum bowwow fwy blowzy coxa oxbow exc flexdollars axed boxful foxglove exhale xi axle taxman laxness axon exp exquisite exr bxs ext xu paxwax boxy ya flyby syce yd ye dayfly tyg anyhow yid skyjack dyke syn yo gyp yr mys byte yuk gyve ywis pyx sayyid coryza zap whizzbang vizcacha samizdat zed fizgig muzhik zig britzka zloty gizmo kibbutznik chutzpah buzzsaw azure mitzvah buzzword cozy";Yt.scowl_70_frequent="aardwolves honorificabilitudinitatibus psychopharmacologies contradistinctively aerothermodynamics tetrafluoroethylene supercalifragilisticexpialidocious tetrahydrocannabinol photoreconnaissance majoritarianism groundbreakings pneumonoultramicroscopicsilicovolcanoconiosis extraordinarily electroencephalographic anthraquinone antidisestablishmentarianisms overenthusiastically floccinaucinihilipilification circumnavigations unseaworthiness chemoprophylaxis companionways succinylsulfathiazole bacteriologically flabbergasting subclassification subdirectories overbearingnesses dumbfounding subglacial abhorrently objectionableness knobkerries subminiaturize subnormalities bourgeoisification subprofessionals tribromoethanols insubstantialities unobtrusiveness subventionary cobwebbiest bxs presbyterianism subzero ecbolic synecdochically cf cg dichlorodiphenyltrichloroethane buckminsterfullerene chlortetracyclines blancmanges chromaticness ecphonesis acquaintanceship colicweed czarevitch hippopotomonstrosesquipedalian rebroadcasting featherbedding departmentalization grandfathering curmudgeonliness goodheartedness adjudications handkerchiefs otherworldlinesses maladministration straightforwardness childproofing headquartering magnetohydrodynamics straightforwards bloodthirstiness individualistically disadvantageously hundredweights dziggetais chickenheartedness thrombophlebitides feeblemindednesses indefatigabilities photodisintegration incomprehensibility deinstitutionalization nonprejudicial triskaidekaphobias contemporaneousnesses inconsequentiality counterrevolutionaries praiseworthiness attorneyships piezoelectricities surfboardings unselfconsciousness chiefdom counteroffensives roofgarden halfheartedness fjords offkey engulfment aloofness halfpennyworth softheartednesses halfwitted interstratifying hummingbirds dogcatchers subkingdoms counterinsurgencies meaningfulness microaggressions logjams glomerulonephritides segmentalization otorhinolaryngologists stringpiece misunderstandings superstrength contradistinguished dogvane songwriters otorhinolaryngology zigzagging archbishoprics archconservative archdeaconries reproachfulness thoroughgoing highhandedness babushkas biotechnological thoroughpaced earthquakes pseudohermaphroditism electroencephalographs boschvark northwestwardly electroencephalography machzor triiodomethane bijouterie unsportsmanlike impressionistically hemidemisemiquavers microsporangium uncommunicativenesses contrariwise interlocutrix semiyearly compartmentalization straitjacketing jct jg jitterbugging hajjes prajna photojournalists jr adjt injudiciousness lackadaisicalness stockbrokerage blackcurrants backdating breakfasting backgrounders backhandedness counterattacking stockjobbers bookkeepers kaffeeklatsches acknowledgments cuckooflowers backpedaling bankruptcies backscratchers breakthroughs skulduggery kvetchers counterclockwise ankylostomiasis albuminurias tetramethyldiarsine algorithmically diphenylhydantoins killjoys phenylketonuria diacetylmorphine caesalpiniaceous unnilquadiums hexylresorcinol convolvulaceous pickerelweeds calxes calzone somnambulistically uncircumcision humdingers uncomfortableness circumgyration warmheartedness circumjacent gymkhanas circumlocutions kumquats steamrollering circumterrestrial multidimensionality circumvallating bantamweights dihydrostreptomycin hamza nonbelligerents undemonstrativeness videoconferencing environmentalists unpretentiousnesses inquisitiveness nonrepresentational deoxyribonuclease conversationalists unwholesomeness nasopharynxes dinitrobenzene unapproachabilities autobiographically chlorofluorocarbons brokenheartedly grandiloquently underemployment photozincography clapboarding stepchildren stepdaughters leapfrogging campgrounds flapjacks pumpkinseeds oversimplifications developmentally disproportionateness disputatiousness impv shipwrecking endocrinotherapy pzazz sheqalim sheqel qindarkas ql qophs seqq hdqrs qto qwerty electrocardiographic interjectionally disembarkation preternaturalness anthropomorphically overqualified electrodynamometers ultraconservatives bilharziases jurisdictional unsatisfactoriness disgracefulness disjointedness contemporaneously misrepresentations transvestitisms upperclasswoman groszy heartbreakingly postconvalescent outdistancing roentgenotherapy pocketknives indiscreetnesses bulletproofing cotquean glottochronologies bodhisattva untrustworthiness quartziferous intellectualization insufficiently superdreadnought kieselguhrs hallelujahs lukewarmness dichlorodifluoromethane chautauqua duumvirate chauvinistically rauwolfias juxtapositional ventriloquy muzzleloading vb avdp incontrovertibilities avg vhf pavlovas czarevna vraisemblance leitmotivs advt improvvisatore heavyweights evzone shadowboxings cowcatchers bowdlerizations weatherboardings sorrowfulness shadowgraphs wholeheartedness showjumping sparrowhawks snowmobiling downheartedness cowpunchers wrongheadedness newspaperwoman yellowthroats knockwursts hollowwares lawyerly frowziness hexamethylenetetramine boxberries excommunications sexdecillion exemplifications exfoliating foxgloves exhibitionistically lexicographically orthodoxly fluxmeter complexnesses inexorabilities exquisiteness boxrooms exsanguinate extemporaneousness heterosexuality maxwells cyanocobalamins cybernetician encephalomyelitis gillyflowers acanthopterygians platyhelminths skyjackings pyknic polymorphonuclear electromyographies hyperparathyroidism psychophysiological demythologizations polyunsaturated polyvalence archaeopteryxes sayyid psychoanalyzing whizzbangs mezcaline samizdat anthropomorphized wayzgoose muzhiks anthropomorphizing blitzkriegs bamboozlement quizmasters kibbutzniks chutzpah buzzsaw gazumping rendezvousing buzzwords zygophyllaceous";const bT=":root{--gray-l97: hsl(200, 81%, 97%);--gray-l95: hsl(200, 81%, 94%);--gray-l90: hsl(200, 60%, 88%);--gray-l85: hsl(200, 52%, 82%);--gray-l80: hsl(200, 47%, 76%);--gray-l75: hsl(200, 42%, 71%);--gray-l70: hsl(200, 33%, 65%);--gray-l65: hsl(200, 27%, 60%);--gray-l60: hsl(200, 22%, 55%);--gray-l55: hsl(200, 18%, 50%);--gray-l50: hsl(200, 17%, 45%);--gray-l45: hsl(200, 17%, 40%);--gray-l40: hsl(200, 18%, 36%);--gray-l35: hsl(200, 18%, 31%);--gray-l30: hsl(200, 17%, 27%);--gray-l25: hsl(200, 18%, 23%);--gray-l20: hsl(200, 18%, 19%);--gray-l15: hsl(200, 17%, 15%);--gray-l10: hsl(200, 19%, 11%);--gray-l05: hsl(350, 17%, 7%);--blue-l98: hsl(200, 100%, 98%);--blue-l95: hsl(200, 100%, 94%);--blue-l90: hsl(200, 100%, 87%);--blue-l85: hsl(200, 100%, 80%);--blue-l80: hsl(200, 100%, 73%);--blue-l75: hsl(199, 100%, 64%);--blue-l70: hsl(200, 100%, 58%);--blue-l65: hsl(200, 100%, 49%);--blue-l60: hsl(200, 100%, 45%);--blue-l55: hsl(200, 100%, 41%);--blue-l50: hsl(200, 100%, 37%);--blue-l45: hsl(200, 100%, 33%);--blue-l40: hsl(200, 100%, 30%);--blue-l35: hsl(200, 100%, 25%);--blue-l30: hsl(200, 100%, 22%);--blue-l25: hsl(200, 100%, 19%);--blue-l20: hsl(200, 100%, 15%);--blue-l15: hsl(200, 100%, 12%);--blue-l10: hsl(200, 100%, 9%);--blue-l05: hsl(200, 100%, 6%);--orange-l98: hsl(20, 100%, 98%);--orange-l95: hsl(20, 100%, 95%);--orange-l90: hsl(20, 100%, 89%);--orange-l85: hsl(20, 100%, 84%);--orange-l80: hsl(20, 100%, 78%);--orange-d80: hsl(20, 50%, 78%);--orange-l75: hsl(20, 100%, 72%);--orange-l70: hsl(20, 100%, 66%);--orange-d70: hsl(20, 50%, 66%);--orange-l65: hsl(20, 100%, 56%);--orange-l60: hsl(20, 100%, 50%);--orange-d60: hsl(20, 50%, 50%);--orange-l55: hsl(20, 100%, 46%);--orange-l50: hsl(20, 100%, 42%);--orange-d50: hsl(20, 50%, 42%);--orange-l45: hsl(20, 100%, 37%);--orange-l40: hsl(20, 100%, 33%);--orange-d40: hsl(20, 50%, 33%);--orange-l35: hsl(20, 100%, 29%);--orange-l30: hsl(20, 100%, 25%);--orange-l25: hsl(20, 100%, 22%);--orange-l20: hsl(20, 100%, 17%);--orange-l15: hsl(20, 100%, 14%);--orange-l10: hsl(20, 100%, 10%);--orange-l05: hsl(20, 100%, 6%);--green-l98: hsl(125, 100%, 98%);--green-l95: hsl(125, 100%, 82%);--green-l90: hsl(125, 97%, 74%);--green-l85: hsl(125, 83%, 66%);--green-l80: hsl(125, 74%, 58%);--green-l75: hsl(125, 67%, 50%);--green-l70: hsl(125, 82%, 43%);--green-l65: hsl(125, 100%, 36%);--green-l60: hsl(125, 100%, 33%);--green-l55: hsl(125, 100%, 30%);--green-l50: hsl(125, 100%, 27%);--green-l45: hsl(125, 100%, 24%);--green-l40: hsl(125, 95%, 22%);--green-l35: hsl(125, 100%, 19%);--green-l30: hsl(125, 100%, 16%);--green-l25: hsl(125, 100%, 14%);--green-l20: hsl(125, 100%, 11%);--green-l15: hsl(125, 100%, 9%);--green-l10: hsl(125, 100%, 6%);--green-l05: hsl(125, 100%, 4%);--purple-l98: hsl(285, 100%, 98%);--purple-l95: hsl(285, 100%, 96%);--purple-l90: hsl(285, 100%, 92%);--purple-l85: hsl(285, 100%, 89%);--purple-l80: hsl(285, 100%, 85%);--purple-l75: hsl(285, 100%, 81%);--purple-l70: hsl(285, 100%, 77%);--purple-l65: hsl(285, 100%, 72%);--purple-l60: hsl(285, 100%, 66%);--purple-l55: hsl(285, 100%, 61%);--purple-l50: hsl(285, 100%, 50%);--purple-l45: hsl(285, 100%, 45%);--purple-l40: hsl(285, 100%, 40%);--purple-l35: hsl(285, 100%, 36%);--purple-l30: hsl(285, 100%, 31%);--purple-l25: hsl(285, 100%, 27%);--purple-l20: hsl(285, 100%, 22%);--purple-l15: hsl(285, 100%, 17%);--purple-l10: hsl(285, 100%, 13%);--purple-l05: hsl(285, 100%, 10%);--offWhite: hsl(200, 81%, 97%);--darkRed: hsl(0, 100%, 23%);--red: hsl(0, 100%, 48%);--lightRed: hsl(0, 100%, 90%);--accent-color: hsl(200, 100%, 37%);--accent-color-light: hsl(200, 100%, 49%);--enabled-resting-text: hsl(0, 0%, 5%);--enabled-resting-lightText: hsl(0, 0%, 10%);--enabled-resting-border: hsl(0, 0%, 75%);--enabled-resting-fill: hsl(0, 0%, 40%);--enabled-resting-background: hsl(0, 0%, 98%);--enabled-restingLight-text: hsl(0, 0%, 20%);--enabled-restingLight-lightText: hsl(0, 0%, 30%);--enabled-restingLight-border: hsl(0, 0%, 80%);--enabled-restingLight-fill: hsl(0, 0%, 60%);--enabled-restingLight-background: hsl(0, 0%, 98%);--enabled-focus-text: hsl(0, 0%, 0%);--enabled-focus-lightText: hsl(0, 0%, 10%);--enabled-focus-border: hsl(200, 25%, 63%);--enabled-focus-fill: hsl(200, 25%, 25%);--enabled-focus-background: white;--enabled-active-text: hsl(0, 0%, 0%);--enabled-active-lightText: hsl(0, 0%, 10%);--enabled-active-border: hsl(0, 0%, 63%);--enabled-active-fill: var(--accent-color);--enabled-active-background: white;--disabled-text: hsl(0, 0%, 40%);--disabled-text-light: hsl(0, 0%, 60%);--disabled-text-dark: hsl(0, 0%, 20%);--disabled-border: hsl(0, 0%, 82%);--disabled-fill: hsl(0, 0%, 82%);--disabled-background: hsl(0, 0%, 94%)}",vT=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">\r
  <path fill="hsl(200, 100%, 41%)" d="m491.109,170.926c-89.722,0-162.715,82.261-162.715,183.377,0,124.258,113.791,137.671,162.715,137.671s162.715-13.413,162.715-137.671c0-101.116-72.993-183.377-162.715-183.377Z"/>\r
  <path fill="hsl(200, 100%, 41%)" d="m920.448,79.552C840.896,0,719.097,0,500,0S159.104,0,79.552,79.552C0,159.104,0,280.903,0,500s0,340.896,79.552,420.448c79.552,79.552,201.351,79.552,420.448,79.552s340.896,0,420.448-79.552c79.552-79.552,79.552-201.351,79.552-420.448s0-340.896-79.552-420.448Zm-146.744,112.456c0,2.761-2.239,5-5,5h-7.034c-.038,0-.074-.01-.112-.011-.004,0-.007.001-.01.001h-45.856c-1.075,0-2.087.506-2.731,1.366l-8.66,11.546c27.074,41.021,42.88,90.25,42.88,143.144,0,70.001-27.646,127.253-79.957,165.578-44.577,32.657-105.478,49.921-176.114,49.921-55.318,0-104.663-10.591-144.875-30.869-10.283,10.57-17.335,24.213-17.335,38.766,0,34.131,21.332,54.11,94.524,54.11,90.099,0,163.146-23.565,231.294-23.565,80.615,0,85.357,57.752,85.357,99.583,0,118.551-27.271,209.05-292.825,209.05-33.161,0-97.221-1.724-132.317-9.312-3.75-.811-6.015-4.609-5.018-8.314l20.862-78.928c.909-3.377,4.229-5.502,7.667-4.855,21.23,3.999,80.354,10.479,108.806,10.479,156.167,0,209.013,8.004,209.245-98.506-.071-11.553,3.771-19.614-12.673-19.614-61.646,0-130.08,16.099-239.25,16.099-126.868,0-158.866-87.434-158.866-144.64,0-26.761,14.174-60.59,39.162-86.528-32.729-36.272-49.828-83.42-49.828-138.455,0-142.651,114.875-258.706,256.071-258.706,59.47,0,114.268,20.59,157.783,55.082l12.693-16.924c7.611-10.15,19.559-16.123,32.245-16.123h67.717c.01,0,.019.003.029.003.032,0,.062-.009.094-.009h7.034c2.761,0,5,2.239,5,5v70.632Z"/>\r
</svg>`,UT=":root{--dark-gradient-background: linear-gradient(135deg, var(--blue-l15), var(--purple-l05));--global-focus-style: 1px dashed var(--purple-l50);--global-transition: all 80ms ease;--animate-fade-in-slide-down: .18s ease-in fade-slide-in;--animate-fade-in: .18s ease-in fade-in;--animate-fade-out: .18s ease-out fade-out;--animate-fade-update: .14s ease-in fade-in-update;--l1-shadow: 0px 0px 2px rgba(0, 0, 0, .1);--l1-shadow-down: 0px 2px 2px rgba(0, 0, 0, .1);--l2-shadow: 0px 0px 4px rgba(0, 0, 0, .2);--l2-shadow-upper-left: -1px -1px 4px rgba(0, 0, 0, .2);--l2-shadow-down: 0px 4px 4px rgba(0, 0, 0, .3);--l3-shadow: 0px 0px 6px rgba(0, 0, 0, .3);--l3-shadow-down: 0px 6px 6px rgba(0, 0, 0, .3)}@font-face{font-family:FiraGo;font-style:normal;font-weight:400;src:url(/app/assets/FiraGO-Regular-aODw3bZ7.woff2)}*{margin:0;padding:0;font-family:FiraGo,Tahoma,Verdana,sans-serif;font-size:14px;font-weight:400;text-align:left;box-sizing:border-box;transition:var(--global-transition)}html,body{background-color:var(--dark-gradient-background);height:100%;width:100%;min-height:100%;min-width:100%;overflow:hidden}::-webkit-scrollbar{width:8px;padding:1px;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--offWhite)}::-webkit-scrollbar-button{height:0px;background-color:transparent}::-webkit-scrollbar-track{width:8px}::-webkit-scrollbar-track-piece{background-color:transparent}::-webkit-scrollbar-thumb{margin:2px;background-color:var(--gray-l80);border-radius:4px}::-webkit-scrollbar-corner{display:none}::-webkit-resizer{display:block;border:2px outset var(--enabled-restingLight-background)}div,p,h1,h2,h3,table,td,label,button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}b,strong{font-weight:700}a,a:visited{background-color:transparent;border-radius:4px;color:var(--blue-l55);text-decoration:none}a:active{color:var(--blue-l40);background-color:#0099e61a}a:focus,a:hover{color:var(--blue-l65);text-decoration:underline;cursor:pointer}a[danger],a[danger]:visited{color:var(--darkRed)}a[danger]:hover,a[danger]:focus{color:var(--red)}p{display:block}span:disabled,span[disabled=disabled]{color:var(--disabled-text)}hr{border-style:solid;border-color:var(--gray-l85)}h1{margin-left:0;color:var(--gray-l55);font-size:2em;margin-bottom:8px;clear:right}h2{color:var(--gray-l45);font-size:1.6em}h3{color:var(--gray-l45);font-size:1.3em;margin-bottom:4px}h4{color:var(--gray-l45);font-size:1.2em;margin-bottom:4px}table{border-collapse:collapse}td{vertical-align:top}svg{overflow:visible}.number{font-family:monospace}label,label:focus,label:active{display:inline}label:hover{color:#000}input,textarea{border:none;padding:0 0 0 4px;height:24px;text-align:left;font-family:monospace;background-color:var(--enabled-restingLight-background);color:var(--enabled-restingLight-text);border:1px solid var(--enabled-restingLight-border);border-radius:4px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}input:hover,textarea:hover{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}input:focus,textarea:focus{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}textarea:hover::-webkit-resizer,textarea:focus::-webkit-resizer{display:block;border:2px outset var(--enabled-focus-background)}info-bubble{width:12px}input:focus,button:focus,textarea:focus,info-bubble:focus,glyph-tile:focus{outline:var(--global-focus-style);outline-offset:-1px}input[type=image]{height:auto;width:auto;background-color:transparent;border-width:0px}input[type=number]{text-align:right;width:70px;border:1px solid white;border:1px solid var(--gray-l90);cursor:default}input[type=text][disabled=disabled],input[type=number][disabled=disabled]{background-color:var(--gray-l90);border:1px solid var(--gray-l90);color:var(--gray-l65)}input[type=checkbox]{accent-color:var(--accent-color);opacity:.75}ul li{margin-left:20px;margin-top:10px}canvas:focus,canvas:focus-visible,edit-canvas:focus,edit-canvas:focus-visible{border:0;border-image:none;outline:0}@keyframes fade-slide-in{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-update{0%{opacity:.6}to{opacity:1}}@keyframes fade-in{0%{opacity:0;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}@keyframes fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.99)}}.span-all-columns{grid-column:-1 / 1!important}button,button:active,button:hover,button:focus{text-align:center;padding:4px 8px;margin:2px 0;cursor:pointer;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--gray-l90);color:var(--enabled-text);box-shadow:var(--l1-shadow)}button:hover{color:var(--enabled-focus-text);border-color:var(--blue-l85);box-shadow:var(--l1-shadow)}button[disabled],button[disabled]:active,button[disabled]:hover,button[disabled]:focus{background-color:var(--gray-l95);border-color:var(--gray-l95);color:var(--disabled-text);cursor:default}.button__call-to-action,.button__call-to-action:hover,.button__call-to-action:active,.button__call-to-action:focus{background-color:var(--blue-l60);color:var(--gray-l95)}.button__call-to-action:hover{color:#fff}",wT="dialog{z-index:1000}#toast,#error{display:none;width:300px;position:absolute;left:520px;margin:5px 0;background-color:var(--green-l90);color:var(--green-l10);padding:4px 8px;z-index:2010;text-align:center;border:1px solid var(--green-l60);border-radius:4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#toast[fancy]{background-color:var(--purple-l30);background:linear-gradient(135deg,var(--purple-l25),var(--purple-l10));color:var(--purple-l95);font-size:1.2em;border-color:var(--purple-l30);padding:10px}#toast a{color:var(--green-l10)}#notation{display:none;position:absolute;right:900px;top:400px;width:auto;height:auto;padding:0;z-index:2020;background-color:#e5eaef;border:5px solid rgb(229,234,239);border-radius:5px 5px 0;box-shadow:var(--l2-shadow-upper-left);animation:var(--animate-fade-in)}.notation__path-add-point{display:grid;grid-template-columns:20px min-content min-content;margin:0 5px 2px}.notation__path-add-point span{font-family:monospace}.notation__path-add-point label{font-family:monospace;color:var(--enabled-restingLight-lightText)}#error{margin-top:10px;border-color:var(--red);color:var(--darkRed);background-color:var(--lightRed);display:grid;grid-template-rows:20px 1fr;padding:10px 12px 12px;row-gap:10px}#error hr{border-color:var(--red);margin:10px 0}.error__header{display:grid;grid-template-columns:1fr 20px}.error__header h3{color:var(--darkRed)}.error__header button{background-color:var(--darkRed);border-color:var(--darkRed);color:var(--lightRed);width:20px;height:20px;line-height:20px;padding:0;margin:0}.error__header button:hover{color:#fff;border-color:var(--red)}#context-menu{display:grid;grid-template-columns:24px 1fr min-content min-content;column-gap:0px;row-gap:5px;width:fit-content;overflow-y:auto;padding:10px;position:absolute;z-index:2030;background-color:var(--enabled-resting-background);border:1px solid var(--enabled-focus-border);border-radius:0 4px 4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#context-menu:focus{outline:0}.context-menu-row{display:contents;padding:5px 10px 5px 5px;height:24px;border-radius:4px}.context-menu-row:hover>span,.context-menu-row:hover>.row-notes,.context-menu-row:hover>.row-notes span,.context-menu-row:hover>.row-notes code{background-color:var(--enabled-focus-background);color:var(--blue-l45);cursor:pointer}.context-menu-row:focus{outline:var(--global-focus-style)}.context-menu-row[disabled]{opacity:.5;color:var(--disabled-text-light)}.context-menu-row[disabled]:hover>span,.context-menu-row[disabled]:hover>.row-notes,.context-menu-row[disabled]:hover>.row-notes span,.context-menu-row[disabled]:hover>.row-notes code{color:var(--disabled-text-light);cursor:default;background-color:transparent}.context-menu-row[disabled] svg g{fill:var(--disabled-text-light)!important}#context-menu .spanAll h2{font-size:.8em;color:var(--enabled-restingLight-lightText);font-family:monospace;padding:0 20px 0 0}.context-menu-row hr,.context-menu-row hr:hover,.context-menu-row hr:active,.context-menu-row hr:focus{margin:8px 0;grid-column:1 / -1;border-width:0px 0px 1px 0px;border-color:var(--gray-l90)}.context-menu-row .row-icon{height:24px;width:24px}.context-menu-row .row-icon svg{height:20px;width:20px;margin:2px}.context-menu-row .row-name{line-height:22px;height:24px;padding:2px 20px 0 10px;display:flex}.context-menu-row .row-name svg{margin-right:10px}.context-menu-row .row-notes{background-color:transparent;width:max-content;height:24px;opacity:.8;display:contents;margin-left:20px}.context-menu-row .row-notes code{height:20px;line-height:18px;margin:2px;font-size:.8em}.context-menu-row .row-notes span{grid-column:span 2;font-size:.8em;line-height:24px;padding:0 0 0 4px;height:24px;margin:0}#modal-dialog{display:block;position:absolute;text-align:center;border-width:0px;padding:0px auto;left:0;top:0;width:100vw;height:100vh;z-index:2000;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background-color:#ffffffbf;animation:var(--animate-fade-in)}.modal-dialog__content{display:grid;grid-template-rows:30px 1fr;width:clamp(500px,66vw,1000px);max-height:calc(100vh - 80px);overflow-y:hidden;margin:40px auto;text-align:left;background-color:var(--enabled-focus-background);border:1px solid var(--blue-l60);border-radius:8px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}.modal-dialog__header{margin:4px;height:20px;display:grid;grid-template-columns:1fr 20px}.modal-dialog__body{display:block;max-height:calc(100vh - 120px);overflow-y:auto;padding:0 20px 20px}.modal-dialog__close-button{background-color:var(--blue-l95);border-color:var(--blue-l85);color:var(--blue-l50);text-align:center;width:20px;height:20px;line-height:14px;font-size:1.2em;padding:0 0 2px;margin:0}.modal-dialog__close-button:hover{background-color:var(--blue-l90);color:var(--blue-l30);border-color:var(--blue-l70);cursor:pointer;padding:0 0 2px;margin:0}.modal-dialog__close-button:active,.modal-dialog__close-button:focus{background-color:var(--blue-l90);color:var(--blue-l50);cursor:pointer;padding:0;margin:0}.modal-dialog__glyph-chooser-scroll-area{height:100%;padding:10px 5px 5px 10px;background-color:var(--offWhite);margin-bottom:10px}",YT="";class X0{constructor(e={}){this.textBlocks=[],this.lineBreakers=e.lineBreakers||[" "," "," "],this.data=[],this.pixelHeight=0,this.canvasMaxes=e.canvasMaxes,this.ctx=e.ctx,this.project=e.project||Le(),this.options=new Wr(e.options),this.hasDrawableCharacters=!1,this.drawPageExtras=e.drawPageExtras||!1,this.drawLineExtras=e.drawLineExtras||!1,this.drawCharacterExtras=e.drawCharacterExtras||!1,this.drawCharacter=e.drawCharacter||!1,this.roundUp=e.roundUp||!1,this.generateData()}get canvasMaxes(){return this._canvasMaxes}set canvasMaxes(e={}){this._canvasMaxes=new Ar({xMin:e.xMin||0,xMax:e.xMax||1/0,yMin:e.yMin||0,yMax:e.yMax||1/0})}draw({showPageExtras:e=!1,showLineExtras:r=!1,showCharacterExtras:n=!1,showCharacter:a=!1}={}){if(this.drawPageExtras&&e&&this.drawPageExtras(this.ctx,this),this.options.text==="")return;let o=-1;this.drawLineExtras&&r&&this.iterator(s=>{s.lineNumber!==o&&(this.drawLineExtras(this.ctx,s,this),o=s.lineNumber)}),this.drawCharacterExtras&&n&&this.iterator(s=>{this.drawCharacterExtras(this.ctx,s,this.roundUp)}),this.drawCharacter&&a&&this.iterator(s=>{this.drawCharacter(this.ctx,s)})}iterator(e){for(let r=0;r<this.data.length;r++)for(let n=0;n<this.data[r].length;n++)e(this.data[r][n],this)}drawCanvasMaxes(e){e.fillStyle="transparent",e.strokeStyle="lime",e.lineWidth=1,e.strokeRect(this.canvasMaxes.xMin,this.canvasMaxes.yMin,this.canvasMaxes.width,this.canvasMaxes.height)}generateData(){var Q;let e,r,n,a,o=0,s,x,E;for(this.data=[],this.textBlocks=this.options.text.split(`
`),n=0;n<this.textBlocks.length;n++)for(e=ws(this.textBlocks[n].split(""),this.project),this.data[n]=[],a=0;a<e.length;a++)r=e[a],r.startsWith("liga-")?(E=this.project.ligatures[r],r=E.chars):E=this.project.getItem(`glyph-${Ur(r)}`),(Q=E==null?void 0:E.shapes)!=null&&Q.length&&(this.hasDrawableCharacters=!0),s=E?E.advanceWidth:this.project.defaultAdvanceWidth,x=Xr(r,e[a+1]),o+=s+x,this.data[n][a]={char:r,item:E,view:!1,widths:{advance:s,kern:x,aggregate:o},isLineBreaker:this.lineBreakers.indexOf(r)>-1,isVisible:!1,lineNumber:!1};let T,u,D,O=0,g=0,V=0,Y=!1;const J=this.options.fontSize/this.project.totalVertical,K=this.project.settings.font.ascent,re={lineHeight:this.project.totalVertical+this.options.lineGap/J,width:this.canvasMaxes.width/J,yMax:this.canvasMaxes.yMax/J,yMin:this.canvasMaxes.yMin/J,xMin:this.canvasMaxes.xMin/J};for(this.options.pageHeight==="auto"&&(re.yMax=Number.Infinity),g=re.xMin,V=re.yMin+K,n=0;n<this.data.length;n++){for(e=this.data[n],a=0;a<e.length;a++){if(T=e[a],T.view===!1){if(Y&&Number.isFinite(re.width)){if(u=WT(e,a),D=u.widths.aggregate+u.widths.advance-T.widths.aggregate,g+D>re.width){if(O++,V+re.lineHeight>re.yMax)return;g=re.xMin,V=re.yMin+K+O*re.lineHeight}Y=!1}T.isVisible=!0,T.lineNumber=O,T.view={dx:g*J,dy:V*J,dz:J},g+=T.widths.advance+T.widths.kern}T.isLineBreaker&&(Y=!0)}if(O++,V+re.lineHeight>re.yMax)return;g=re.xMin,V=re.yMin+K+O*re.lineHeight,this.pixelHeight=O*re.lineHeight*J}}}function WT(t,e){for(let n=e;n<t.length;n++)if(t[n].isLineBreaker)return t[n];return t[t.length-1]}function Xr(t,e){if(!t||!e)return 0;t=ln(t).join(""),e=ln(e).join("");let r=Le().kerning,n,a,o;for(let s of Object.keys(r))for(let x=0;x<r[s].leftGroup.length;x++)if(n=r[s].leftGroup[x],ln(n)[0]===t){for(let E=0;E<r[s].rightGroup.length;E++)if(a=r[s].rightGroup[E],ln(a)[0]===e)return o=r[s].value*-1,o}return 0}function ws(t,e){e=e||Le();const r=e.sortedLigatures;let n,a;for(let o=0;o<t.length;o++)for(let s=0;s<r.length;s++)n=r[s].chars,a=t.slice(o,o+n.length).join(""),a===n&&t.splice(o,n.length,r[s].id);return t}class Za extends HTMLElement{constructor(e={}){super(),this.isSetUp=!1,this.textBlockOptions=new Wr,Object.keys(e).forEach(r=>{r!=="_text"?(r!=="width"&&r!=="height"&&this.setAttribute(g1(r),e[r]),this.textBlockOptions[r]&&(this.textBlockOptions[r]=e[r])):(this.textBlockOptions.text=e._text,this.setAttribute("text",this.textBlockOptions.text))})}connectedCallback(){this.constructor.name!=="DisplayCanvas"&&(this.__proto__=customElements.get("display-canvas").prototype);const e=this.attachShadow({mode:"open"}),r=C({tag:"style",innerHTML:YT});e.appendChild(r),this.canvas=C({tag:"canvas",id:"mainDisplayCanvas"}),e.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.drawCrisp=!1,this.isSetUp=!0,this.resizeAndRedraw?this.resizeAndRedraw():console.warn(`${this.constructor.name}: Methods not available on connectedCallback`),this.setAttribute("changed-on",""+Date.now())}resizeAndRedraw(){this.isSetUp&&(this.updateTextBlock(),this.updateCanvasSize(),this.redraw())}updateCanvasSize(){var s;const e=(s=this==null?void 0:this.parentElement)==null?void 0:s.getClientRects()[0],r=this.textBlockOptions.pageHeight,n=this.textBlockOptions.pageWidth;let a=1e3,o=1e3;r==="auto"?(a=this.textBlock.pixelHeight,a+=this.textBlockOptions.pagePadding):r==="fit"?a=e.height:isNaN(parseInt(r))||(a=parseInt(r)),n==="fit"?o=e.width:isNaN(parseInt(n))||(o=parseInt(n)),this.widthAdjustment&&(o+=this.widthAdjustment),this.height=a,this.width=o,this.canvas.height=a,this.canvas.width=o}updateTextBlock(){let e=this.calculatePageMaxes(),r=!1,n=parseInt(this.getAttribute("project-editor"));isNaN(n)||(r=Lt().projectEditors[n].project),this.textBlock=new X0({options:this.textBlockOptions,canvasMaxes:e,ctx:this.ctx,drawPageExtras:this.drawDisplayPageExtras,drawLineExtras:this.drawDisplayLineExtras,drawCharacterExtras:this.drawDisplayCharacterExtras,drawCharacter:this.drawDisplayCharacter,project:r})}calculatePageMaxes(){var s;const e=(s=this==null?void 0:this.parentElement)==null?void 0:s.getClientRects()[0],r=this.textBlockOptions.pagePadding,n=this.textBlockOptions.pageHeight,a=this.textBlockOptions.pageWidth,o={xMin:r,yMin:r,xMax:1e3,yMax:1e3};return n==="auto"?o.yMax=1/0:n==="fit"?o.yMax=e.height-r:isNaN(parseInt(n))||(o.yMax=parseInt(n)),a==="fit"?o.xMax=e.width-r:isNaN(parseInt(a))||(o.xMax=parseInt(a)),this.widthAdjustment&&(o.xMax+=this.widthAdjustment),o}static get observedAttributes(){return["text","font-size","line-gap","page-padding","show-page-extras","show-line-extras","show-character-extras","show-placeholder-message","width-adjustment","changed-on"]}attributeChangedCallback(e,r,n){this.constructor.name==="DisplayCanvas"&&(e==="text"&&(this.textBlockOptions.text=n,this.resizeAndRedraw()),e==="font-size"&&(this.textBlockOptions.fontSize=Math.max(parseInt(n),1),this.resizeAndRedraw()),e==="line-gap"&&(this.textBlockOptions.lineGap=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="page-padding"&&(this.textBlockOptions.pagePadding=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="show-page-extras"&&(this.textBlockOptions.showPageExtras=n==="true",this.redraw()),e==="show-line-extras"&&(this.textBlockOptions.showLineExtras=n==="true",this.redraw()),e==="show-character-extras"&&(this.textBlockOptions.showCharacterExtras=n==="true",this.redraw()),e==="show-placeholder-message"&&(this.textBlockOptions.showPlaceholderMessage=n==="true",this.redraw()),e==="width-adjustment"&&(this.widthAdjustment=parseInt(n),this.resizeAndRedraw()),e==="changed-on"&&this.resizeAndRedraw())}redraw(){if(this.isSetUp){if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.textBlock.hasDrawableCharacters)this.textBlock.draw({showPageExtras:this.textBlockOptions.showPageExtras,showLineExtras:this.textBlockOptions.showLineExtras,showCharacterExtras:this.textBlockOptions.showCharacterExtras,showCharacter:!0});else if(this.textBlockOptions.showPlaceholderMessage){this.ctx.fillStyle=Jr.disabled.text,this.ctx.font="14px sans-serif",this.ctx.textBaseline="middle";let e=this.textBlock.canvasMaxes.xMin,r=this.height/2;this.ctx.fillText("Project preview text will be shown here.",e,r)}}}iterator(e){const r=this.textBlock.data;for(let n=0;n<r.length;n++)for(let a=0;a<r[n].length;a++)e(r[n][a],this)}drawDisplayPageExtras(e,r){const n=r.canvasMaxes,a=n.yMin||0,o=n.yMax===1/0?r.pixelHeight:n.yMax,s=n.xMin||0,E=(n.xMax||1e3)-s,T=o-a;e.fillStyle="transparent",e.strokeStyle=At.gray.l90,e.lineWidth=1,e.strokeRect(ft(s),ft(a),ae(E),ae(T))}drawDisplayLineExtras(e,r,n){e.strokeStyle=At.gray.l85,e.beginPath(),e.moveTo(n.canvasMaxes.xMin,r.view.dy),e.lineTo(n.canvasMaxes.xMax,r.view.dy),e.closePath(),e.stroke()}drawDisplayCharacterExtras(e,r){const n=Le(),a=n.settings.font,o=r.view.dz;let s=r.widths.advance*o,x=n.totalVertical*o,E=r.view.dy-a.ascent*o,T=r.view.dx;const u=r.widths.kern*o*-1;r.widths.kern&&(e.fillStyle="orange",e.globalAlpha=.3,e.fillRect(T+s-u,E,u,x),e.globalAlpha=1),e.fillStyle="transparent",e.strokeStyle=At.blue.l85,e.lineWidth=1,this.drawCrisp&&(T=ft(T),E=ft(E),s=ae(s),x=ae(x)),e.strokeRect(T,E,s,x)}drawDisplayCharacter(e,r){const n=r.item,a=nr(r.view);n&&(e.fillStyle=Jr.enabled.resting.text,e.strokeStyle="transparent",pa(n,e,a,1,!0))}}const kT=`<?xml version="1.0" encoding="UTF-8"?>\r
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
</svg>`;async function Bo(t,e,r=!1){let n=z().loadedFileHandle;n&&t==="gs2"?(r&&(n=!1),await VT(t,e,n)):KT(t,e)}function KT(t,e){const r="text/plain;charset=utf-8",n=new Blob([e],{type:r,endings:"native"});let a=Fi(t,!0);try{window.navigator.msSaveBlob(n,a)}catch{const s=document.createElement("a");window.URL=window.URL||window.webkitURL,s.href=window.URL.createObjectURL(n),s.download=a;const x=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});s.dispatchEvent(x)}}async function VT(t,e,r=!1){const a={suggestedName:Fi(t),types:[{description:"Glyphr Studio Project file",accept:{"application/json":[".gs2"]}}]};r||(r=await window.showSaveFilePicker(a));const o=await r.createWritable();await o.write(e),await o.close();const s=z();s.loadedFileHandle=r}function Fi(t,e=!1){let n=Le().settings.project.name;return t==="gs2"?(n+=" - Glyphr Studio Project",e&&(n+=` - ${j0()}`)):t==="svg"&&(n+=` - SVG Font - ${j0()}`),n+=`.${t}`,n}function j0(){const t=new Date,e=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),a=t.getHours(),o=(t.getMinutes()<10?"0":"")+t.getMinutes(),s=(t.getSeconds()<10?"0":"")+t.getSeconds();return`${e}.${r}.${n}-${a}.${o}.${s}`}function Ys(){const t=Le(),e=Lt(),r=t.settings.font,n=r.family,a=n.replace(/ /g,"_");let s=j0().split("-");s[0]=s[0].replace(/\./g,"-"),s[1]=s[1].replace(/\./g,":"),s=s.join(" at ");let x=`<?xml version="1.0"?>
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
			<font-face ${_T()}
			>
				<font-face-src>
					<font-face-name name="${n}" />
				</font-face-src>
			</font-face>
${JT()}
${ZT()}
${XT()}
		</font>
	</defs>

	<text x="100" y="150" style="font-size:48px;" font-family="${n}">
		${n}
	</text>
</svg>
`;Bo("svg",x),ye("Exported SVG Font File")}function _T(){const e=Le().settings.font,r=zT(),n="		";let a="";return a+=`
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
	`,a}function zT(){const t=Le(),e={maxGlyph:32,maxes:new Ar};let r;t.settings.project.characterRanges.forEach(a=>{if(a.enabled){for(let o=a.begin;o<a.end;o++)r=t.getItem(`glyph-${qe(o)}`),r&&(e.maxes=Oa([e.maxes,r.maxes]));e.maxGlyph=Math.max(e.maxGlyph,a.end)}});for(const a of Object.keys(t.ligatures))e.maxes=Oa([e.maxes,t.ligatures[a]]);return e}function JT(){const t=Le();let e=t.getItem("glyph-0x0");if(e)return Q0(e,"glyph-0x0","missing-glyph");const r=t.settings.font.ascent,n=ae(r*.618),a=ae(r/100);let o=`
			<missing-glyph horiz-adv-x="${n}" `;return o+=`d="M0,0 v${r} h${n} v-${r} h-${n}z `,o+=`M${a},${a} v${r-a*2} h${n-a*2} `,o+=`v - ${r-a*2} h - ${n-a*2} z"/>
`,o}function ZT(){const t=Le(),e=[],r=[];t.settings.project.characterRanges.forEach(a=>{a.enabled&&a.getMemberIDs().forEach(o=>{if(e.indexOf(o)===-1){const s=t.getItem(`glyph-${o}`);s&&(r.push({xg:s,xc:o}),e.push(o))}})});let n="";if(n+=`			<!-- Glyphs -->
`,r.forEach(a=>{n+=Q0(a.xg,a.xc)}),t.settings.app.exportLigatures){n+=`
`,n+=`			<!-- Ligatures -->
`;for(const a of Object.keys(t.ligatures))n+=Q0(t.ligatures[a],a)}return n}function Q0(t,e,r="glyph"){if(!t.shapes.length&&t.advanceWidth<=0)return console.warn(`Glyph ${e} not exported: No paths or advance width.`),"";if(!e)return console.warn(`Glyph ${e} not exported: Bad ID`),"";if(e==="glyph-0x0"&&r==="glyph")return"";let n=t.svgPathData;n=n||"M0,0Z";let a=R1(t.chars),o="			<";return o+=r,r==="missing-glyph"?(o+=` horiz-adv-x="${t.advanceWidth}" `,o+=`d="${n}" />
`):(o+=` glyph-name="${t.name.replace(/ /g,"_")}" `,o+=`unicode="${a}" `,o+=`horiz-adv-x="${t.advanceWidth}" `,o+=`d="${n}" />
`),o}function XT(){const t=Le();if(!t.settings.app.exportKerning)return"";const e=t.kerning;let r=Object.keys(e);if(!r.length)return"";let n=`			<!-- Kern Pairs -->
`;for(const a of r)for(let o=0;o<e[a].leftGroup.length;o++)for(let s=0;s<e[a].rightGroup.length;s++)n+="			<hkern ",n+=`u1="${Qo(e[a].leftGroup[o])}" `,n+=`u2="${Qo(e[a].rightGroup[s])}" `,n+=`k="${e[a].value}" />
`;return n}const Ws=`<?xml version="1.0" encoding="utf-8"?>\r
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
</svg>`;let xa,Ea;function Ho(t,e=!1,r=z()){xa=t,Ea=!0;let n=C({tag:"div",className:"item-chooser__wrapper"}),a=C({tag:"div",className:"item-chooser__header"});a.appendChild(QT(r)),n.appendChild(a);let o=e||r.nav.page;return o==="Ligatures"?n.appendChild(Xi(r)):o==="Components"?n.appendChild(ji(r)):n.appendChild(Fo(r)),n}function jT(t,e){xa=e,Ea=!0;let r=C({tag:"div",className:"item-chooser__wrapper"});if(t==="Ligatures")r.appendChild(Xi()),r.appendChild(C({tag:"fancy-button",innerHTML:"Create new ligature",onClick:wl}));else if(t==="Components")r.appendChild(ji()),r.appendChild(C({tag:"fancy-button",innerHTML:"Create new component",onClick:Il}));else if(t==="Kerning")r.appendChild(Ks()),r.appendChild(C({tag:"fancy-button",innerHTML:"Create a new kern group",onClick:()=>Pi(!1)}));else{let n=C({tag:"div",className:"item-chooser__header"});r.appendChild(n),n.appendChild(qT()),r.appendChild(Fo())}return r}function QT(t=z()){let e=t.selectedCharacterRange,r=C({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}}),n,a=bt(t.project.ligatures),o=bt(t.project.components);return a&&(n=C({tag:"option",innerHTML:"Ligatures",attributes:{note:`${a}&nbsp;items`}}),n.addEventListener("click",()=>{t.selectedCharacterRange="Ligatures",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(Xi())}),r.appendChild(n)),o&&(n=C({tag:"option",innerHTML:"Components",attributes:{note:`${o}&nbsp;items`}}),n.addEventListener("click",()=>{t.selectedCharacterRange="Components",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(ji())}),r.appendChild(n)),(a||o)&&r.appendChild(C({tag:"hr"})),ks(r,t),r}function qT(t=z()){let e=t.selectedCharacterRange,r=C({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}});return ks(r),r}function ks(t,e=z()){let n=Le().settings.project.characterRanges,a;n.forEach(o=>{o.enabled&&(a=C({tag:"option",innerHTML:o.name,attributes:{note:o.note}}),a.addEventListener("click",()=>{e.selectedCharacterRange=o,document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(Fo())}),t.appendChild(a))})}function Fo(t=z()){let e=C({tag:"div",className:"item-chooser__tile-grid"}),r=t.selectedCharacterRange.getMemberIDs(t.project.settings.app.showNonCharPoints);return r!=null&&r.length&&r.forEach(n=>{const a=`glyph-${n}`;let o=new zi({"displayed-item-id":a,project:t.project});t.selectedGlyphID===a&&o.setAttribute("selected",""),o.addEventListener("click",()=>xa(a)),Ea&&t.subscribe({topic:"whichGlyphIsSelected",subscriberID:`glyphTile.${a}`,callback:s=>{parseInt(s)===parseInt(a)?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function Xi(t=z()){const e=C({tag:"div",className:"item-chooser__tile-grid"}),r=t.project.sortedLigatures,n=Mo(r,t.chooserPage.ligatures,t);return r.length>n.length&&e.appendChild(Go("ligatures",r,t)),n.forEach(a=>{let o=new zi({"displayed-item-id":a.id});t.selectedLigatureID===a.id&&o.setAttribute("selected",""),o.addEventListener("click",()=>xa(a.id)),Ea&&t.subscribe({topic:"whichLigatureIsSelected",subscriberID:`glyphTile.${a.id}`,callback:s=>{s===a.id?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function ji(t=z()){let e=C({tag:"div",className:"item-chooser__tile-grid"});const r=t.project.sortedComponents,n=Mo(r,t.chooserPage.components,t);return r.length>n.length&&e.appendChild(Go("components",r,t)),n.forEach(a=>{let o=new zi({"displayed-item-id":a.id});t.selectedComponentID===a.id&&o.setAttribute("selected",""),o.addEventListener("click",()=>xa(a.id)),Ea&&t.subscribe({topic:"whichComponentIsSelected",subscriberID:`glyphTile.${a.id}`,callback:s=>{s===a.id?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function Ks(t=z()){let e=C({tag:"div",className:"kern-group-chooser__list"});const r=t.project.sortedKernGroups,n=Mo(r,t.chooserPage.kerning,t);return r.length>n.length&&e.appendChild(Go("kerning",r,t)),n.forEach(a=>{let o=Vs(a.id);t.selectedKernGroupID===a.id&&o.setAttribute("selected",""),o.addEventListener("click",()=>xa(a.id)),Ea&&t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:`kernGroupRow.${a.id}`,callback:s=>{s===a.id?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function Vs(t,e=Le()){const r=e.getItem(t),n=C({className:"kern-group-chooser__row"}),a=C({className:"kern-group-chooser__left-members"});a.appendChild(ta(r.leftGroup));const o=C({className:"kern-group-chooser__right-members"});return o.appendChild(ta(r.rightGroup)),ne(n,[C({content:t}),a,C({className:"kern-group-chooser__members-divider",content:"&emsp;|&emsp;"}),o]),n}function Mo(t=[],e=0,r=z()){const n=parseInt(r.project.settings.app.itemChooserPageSize)||256;if(t.length<n)return t;const a=e*n,o=a+n;return t.slice(a,o)}function Go(t,e=[],r=z()){const n={ligatures:Xi,components:ji,kerning:Ks},a=parseInt(r.project.settings.app.itemChooserPageSize)||256,o=r.chooserPage[t],s=Math.ceil(e.length/a),x=C({tag:"button",className:"editor-page__tool",content:"◁"});r.chooserPage[t]===0?x.setAttribute("disabled",""):x.addEventListener("click",()=>{r.chooserPage[t]-=1,r.chooserPage[t]=Math.max(r.chooserPage[t],0);let u;t==="kerning"?u=document.querySelector(".kern-group-chooser__list"):u=document.querySelector(".item-chooser__tile-grid"),u.innerHTML="",u.appendChild(n[t]())});const E=C({tag:"button",className:"editor-page__tool",content:"▷"});r.chooserPage[t]===s-1?E.setAttribute("disabled",""):E.addEventListener("click",()=>{r.chooserPage[t]+=1,r.chooserPage[t]=Math.min(r.chooserPage[t],s-1);let u;t==="kerning"?u=document.querySelector(".kern-group-chooser__list"):u=document.querySelector(".item-chooser__tile-grid"),u.innerHTML="",u.appendChild(n[t]())});const T=C({tag:"div",className:"item-chooser__page-control"});return ne(T,[x,C({content:`Page ${o+1} of ${s}`}),E]),T}function $T(t){let e=C({tag:"div",className:"panel__card",innerHTML:"<h3>Component instance</h3>"}),r=Ue("name"),n=Gt(t,"name","currentComponentInstance","input"),a=eI(t),o=tI(t),s=Ue("flip vertical",`
		Flip top to bottom,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),x=fn(t,"isFlippedNS","currentComponentInstance"),E=Ue("flip horizontal",`
		Flip left to right,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),T=fn(t,"isFlippedEW","currentComponentInstance"),u=Ue("reverse winding",`
		Reverse all the windings,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),D=fn(t,"reverseWinding","currentComponentInstance"),O=Ue("rotate"),g=Gt(t,"rotation","currentComponentInstance","input-number"),V=Ue("rotate first",rI());V.querySelector("info-bubble").setAttribute("bubble-width","540px");let Y=fn(t,"rotateFirst","currentComponentInstance"),J=C({tag:"h3",innerHTML:"Component root"}),K=P1(t.link);return ne(e,[r,n,a,o,s,x,E,T,u,D,O,g]),t.rotation!==0&&ne(e,[V,Y]),ne(e,[wr(),J,K]),ne(e,wr()),ne(e,wp()),e}function eI(t){let e=Ue(`Δ x${Ya()}Δ y`,`
		The difference in x or y position,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),r=C({tag:"div",className:"doubleInput"}),n=Gt(t,"translateX","currentComponentInstance","input-number"),a=Gt(t,"translateY","currentComponentInstance","input-number");return r.appendChild(n),r.appendChild(Wa()),r.appendChild(a),[e,r]}function tI(t){let e=Ue(`Δ width${Ya()}Δ height`,`
		The difference in width or height,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),r=C({tag:"div",className:"doubleInput"}),n=Gt(t,"resizeWidth","currentComponentInstance","input-number"),a=Gt(t,"resizeHeight","currentComponentInstance","input-number");r.appendChild(n),r.appendChild(Wa()),r.appendChild(a);let o=Ue("lock aspect ratio",`
		When either the width or height is adjusted,
		the overall size will be kept proportional.
		<br><br>
		Maintaining aspect ratio will override value
		locks if need be.
	`),s=fn(t,"ratioLock","currentComponentInstance");return[e,r,o,s]}function rI(){return`
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
	`}function nI(t){let e=C({tag:"div",className:"panel__card",innerHTML:`<h3>${t.displayType} ${t.ident}</h3>`}),r=Ue("advance width"),n=C({tag:"div",className:"doubleInput"}),a=Gt(t,"advanceWidth","currentItem","input-number"),o=C({tag:"button",className:"panel-card__action-button",title:`Auto-fit advance width
The advance width will be set to the x-max of the paths in this glyph.`,innerHTML:In({name:"command_autoFit"}),onClick:()=>{let u=z();u.selectedItem.advanceWidth=u.selectedItem.maxes.xMax,u.publish("currentItem",u.selectedItem)}});ne(n,[a,C(),o]);let s=C({tag:"label",className:"info",innerHTML:`
			<span>bearings: left${Ya()}right</span>
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
		`}),x=C({tag:"div",className:"doubleInput"}),E=Gt(t,"leftSideBearing","currentItem","input-number"),T=Gt(t,"rightSideBearing","currentItem","input-number");if(x.appendChild(E),x.appendChild(Wa()),x.appendChild(T),t.displayType!=="Component"?(ne(e,[r,n]),t.shapes.length&&ne(e,[s,x])):ne(e,[Ue("name"),Gt(t,"name","currentItem","input")]),t.shapes.length){const u=!!z().multiSelect.shapes.length;ne(e,wr()),ne(e,C({tag:"h4",content:u?"Overall paths":"Bulk-edit paths"})),ne(e,wa(t,"",[],u)),ne(e,co(t,u))}return ne(e,wr()),ne(e,vp()),ne(e,Up()),e}function aI(t){if(!t.usedIn.length)return"";let e=C({tag:"div",className:"panel__card full-width item-links__rows-area",innerHTML:`
		<h3>Links</h3>
		This ${t.displayType} is linked to the following items.
		It is used as a component root and will show up in these items as a component instance.
		`});return t.usedIn.forEach(r=>{e.appendChild(P1(r))}),z().subscribe({topic:"currentItem",subscriberID:"ItemLinkRow",callback:()=>{const r=z(),n=Le();document.querySelectorAll(".item-link__thumbnail").forEach(o=>{const s=o.getAttribute("target-item-id"),x=r.project.getItem(s);o.innerHTML=n.makeItemThumbnail(x)})}}),e}function iI(t){const e=Le(),r=z();let n=C({tag:"div",className:"panel__card no-card",style:"grid-template-columns: max-content 1fr max-content;"}),a=kA(t,-1),o=r.project.getItemName(a.id,!0),s=C({tag:"fancy-button",className:"thumbnail-button button-left",attributes:{minimal:""},title:`Navigate to:
${o}
${a.id}`});s.innerHTML=e.makeItemThumbnail(a,24)+"<span>Previous&nbsp;item</span>",s.addEventListener("click",()=>{r.selectedItemID=a.id,r.history.addState(`Navigated to ${o}`)});let x=kA(t,1),E=r.project.getItemName(x.id,!0),T=C({tag:"fancy-button",className:"thumbnail-button button-right",attributes:{minimal:""},title:`Navigate to:
${E}
${x.id}`});return T.innerHTML="<span>Next&nbsp;item</span>"+e.makeItemThumbnail(x,24),T.addEventListener("click",()=>{r.selectedItemID=x.id,r.history.addState(`Navigated to ${E}`)}),ne(n,[s,xe("<span></span>"),T]),n}function kA(t,e){const r=Le(),n=t.id;let a;t.id.startsWith("glyph-")?a=r.glyphs:t.id.startsWith("liga-")?a=r.ligatures:t.id.startsWith("comp-")?a=r.components:t.id.startsWith("kern-")&&(a=r.kerning);let o=Object.keys(a);o.sort(),t.id.startsWith("glyph-")&&(o=o.filter(oI));const s=o.indexOf(n),x=o.at((s+e)%o.length);return r.getItem(x)}function oI(t){const e=Le();let r=!1,n=e.settings.project.characterRanges.filter(a=>a.enabled);for(let a=0;a<n.length;a++)if(n[a].getMemberIDs().indexOf(t.substring(6))>-1){r=!0;break}return r}function AI(t){let e=C({tag:"div",className:"panel__card",innerHTML:`<h3>Path ${t.ident}</h3>`}),r=Ue("path name"),n=Gt(t,"name","currentPath","input"),a=C({tag:"label",className:"info",innerHTML:`
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
		`}),o=C({tag:"option-toggle",innerHTML:"<option>Clockwise</option><option>Counter-clockwise</option>",attributes:{"selected-name":S0(t.winding),"selected-value":S0(t.winding)},onClick:()=>{const E=z();t.reverseWinding(),E.history.addState(`Toggled path winding to ${S0(t.winding)}`),E.publish("currentPath",t)}}),s=wa(t),x=co(t);return ne(e,[r,n,a,o,s,x]),ne(e,wr()),ne(e,jl()),e}function S0(t){let e="Unknown";return t>0&&(e="Counter-clockwise"),t<0&&(e="Clockwise"),e}function sI(t){let e=C({tag:"div",className:"panel__card",innerHTML:`<h3>${t.shapes.length} selected paths</h3>`});return ne(e,wa(t)),ne(e,co(t)),ne(e,jl()),e}function lI(t){const e=z();let r=C({tag:"div",className:"panel__card",innerHTML:`<h3>Path point ${t.pointNumber+1} ${t.ident}</h3>`}),n=wa(t.p,"point"),a=Ue("point type"),o=C();ne(o,[C0("symmetric",t.type==="symmetric",()=>{t.type="symmetric",t.makeSymmetric(),e.publish("currentPathPoint",t)}),C0("flat",t.type==="flat",()=>{t.type="flat",t.makeFlat(),e.publish("currentPathPoint",t)}),C0("corner",t.type==="corner",()=>{t.type="corner",e.publish("currentPathPoint",t)})]),e.subscribe({topic:"currentPathPoint",subscriberID:"pointTypeButtons",callback:E=>{document.getElementById(`pointTypeButton-${E.type}`)&&(document.getElementById("pointTypeButton-symmetric").removeAttribute("selected"),document.getElementById("pointTypeButton-flat").removeAttribute("selected"),document.getElementById("pointTypeButton-corner").removeAttribute("selected"),document.getElementById(`pointTypeButton-${E.type}`).setAttribute("selected","")),Mi("h1",E),Mi("h2",E)}});let s=C({id:"h1Group",className:"span-all-columns"});ne(s,KA("h1",t));let x=C({id:"h2Group",className:"span-all-columns"});return ne(x,KA("h2",t)),ne(r,n),ne(r,[a,o]),ne(r,[s,x]),ne(r,wr()),ne(r,Ql()),r}function KA(t="h1",e){let r=C({className:"pre-checkbox"}),n=fn(e[t],"use","currentPathPoint");e.type!=="corner"&&n.setAttribute("disabled",""),ne(r,[n,C({tag:"h4",content:`Use handle ${t.charAt(1)}`})]);let a=C({id:`${t}InputGroup`,style:`display: ${e[t].use?"grid":"none"}`}),o=wa(e[t],t);return ne(a,o),z().subscribe({topic:"currentPathPoint",subscriberID:`controlPointInputGroup.${t}`,callback:s=>{s.type==="symmetric"&&s.makeSymmetric(t),s.type==="flat"&&s.makeFlat(t),Mi("h1",s),Mi("h2",s)}}),[r,a]}function Mi(t="h1",e){let r=e;e.objType==="ControlPoint"&&(r=e.parent);let n=document.getElementById(`${t}Group`);if(n){let a=r[t].use,o=n.querySelector("input");if(o.removeAttribute("checked"),o.removeAttribute("disabled"),a){o.setAttribute("checked",""),r.type!=="corner"&&o.setAttribute("disabled","");let s=document.getElementById(`${t}InputGroup`);s.style.display="grid",s.querySelectorAll("input-number")[0].setAttribute("value",r[t].x),s.querySelectorAll("input-number")[1].setAttribute("value",r[t].y)}}}function xI(t){let e=C({tag:"div",className:"panel__card",innerHTML:`<h3>${t.pathPoints.length} selected path points</h3>`});return ne(e,Ql()),e}function C0(t,e,r){let n=At.gray.l40,a=C({tag:"button",className:"pointTypeButton",id:`pointTypeButton-${t}`,attributes:{title:`point type: ${t}`}});a.addEventListener("click",r),e&&a.setAttribute("selected","");let o=`
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
			`;break}return o+="</g></svg>",a.innerHTML=o,a}function EI(){const t=z();let e=[],r=t.multiSelect.points;if(r.length===1)e.push(lI(r.singleton));else if(r.length>1){let o=r.virtualShape;e.push(xI(o))}let n=t.multiSelect.shapes;n.length===1?n.singleton.objType==="ComponentInstance"?e.push($T(n.singleton)):e.push(AI(n.singleton)):n.length>1&&r.length===0&&e.push(sI(n.virtualGlyph)),e.push(nI(t.selectedItem)),e.push(iI(t.selectedItem));const a=aI(t.selectedItem);return a&&e.push(a),t.subscribe({topic:"whichShapeIsSelected",subscriberID:"attributesPanel",callback:()=>{Ir()}}),t.subscribe({topic:"whichPathPointIsSelected",subscriberID:"attributesPanel",callback:()=>{Ir()}}),e}function LI(t){let e=C({tag:"div",className:"panel__card",innerHTML:"<h3>Kern Group</h3>"}),r=Ue("Value"),n=Gt(t,"value","currentKernGroup","input-number"),a=Ue("Left group"),o=ta(t.leftGroup),s=Ue("Right group"),x=ta(t.rightGroup);return ne(e,[r,n,a,o,s,x]),ne(e,wr()),ne(e,Yp()),e}function hI(){let t=C({tag:"div",className:"panel__card",innerHTML:"<h3>Other kern group actions</h3>"}),e=C({tag:"div",className:"panel__actions-area"});return Qt(e,rr("otherKernGroupActions")),t.appendChild(e),t}function cI(){const t=z();return bt(t.project.kerning)<=0?[]:[LI(t.selectedKernGroup),hI()]}function Gi(t=50,e=!1,r=0,n=100,a=1){let o=C({className:"fancy-slider__wrapper"}),s=C({className:"fancy-slider__slider-readout",innerHTML:t}),x=C({tag:"input",attributes:{type:"range",value:t,style:`accent-color: hsl(${t+200}, 100%, 40%);`,min:r,max:n,step:a},className:"fancy-slider__bar"});return x.addEventListener("input",E=>{const T=parseInt(E.target.value);s.innerHTML=T,x.setAttribute("style",`accent-color: hsl(${T+200}, 100%, 40%);`),e&&e(T)}),ne(o,[x,s]),o}function TI(){const t=z(),e=Le();let r=C({tag:"div",className:"panel__card",innerHTML:"<h3>Characters</h3>"}),n=C({tag:"p",className:"spanAll",content:`Context characters are a small set of letters that are shown around
		the character you are currently editing.`});const a=e.settings.app.contextCharacters;let o=Ue("Show&nbsp;context&nbsp;characters&nbsp;&nbsp;"),s=tr(a,"showCharacters",()=>{z().autoFitView(),VA()}),x=Gt(t.selectedItem,"contextCharacters","editCanvasView","input",["input"]);x.addEventListener("input",()=>z().autoFitView());let E=Ue("Transparency"),T=Gi(a.characterTransparency,Y=>{a.characterTransparency=Y,z().editCanvas.redraw()});x.classList.add("spanAll"),ne(r,[n,x,wr(),o,s,E,T]);let u=C({tag:"div",className:"panel__card",innerHTML:`<h3>Guides and labels</h3>
	`}),D=Ue("Show guides and labels"),O=tr(a,"showGuides",VA),g=Ue("Transparency"),V=Gi(a.guidesTransparency,Y=>{a.guidesTransparency=Y,z().editCanvas.redraw()});return ne(u,[D,O,g,V]),[r,u,Ll(!0)]}function VA(){z().editCanvas.redraw()}class Po{constructor(e={}){this.objType="Guide",this.angle=e.angle===0?0:90,this.name=e.name,this.location=isNaN(parseInt(e.location))?200:parseInt(e.location),this.color=e.color||_A,this.visible=!!e.visible}save(){let e={},r=this.name;return r!=="Horizontal guide"&&r!=="Vertical guide"&&r!=="Guide"&&(e.name=this.name),this.angle!==90&&(e.angle=this.angle),this.location!==200&&(e.location=this.location),this.color!==_A&&(e.color=this.color),this.visible||(e.visible=this.visible),e}get name(){return this._name||(this.angle===90?this._name="Horizontal guide":this.angle===0?this._name="Vertical guide":this._name="Guide"),this._name}set name(e=!1){e||(this.angle===90?e="Horizontal guide":this.angle===0?e="Vertical guide":e="Guide"),this._name=e}}const _A="rgb(127, 0, 255)",q0="rgb(227, 190, 171)",$0="rgb(212, 154, 125)",Ca="rgb(191, 106, 64)";function _s({iconName:t="default",iconOptions:e=!1,title:r="",disabled:n=!1,onClick:a=!1,id:o=!1}={}){let s=C({tag:"button",innerHTML:Ve[t](e),attributes:{title:r}});return a&&s.addEventListener("click",a),n&&s.setAttribute("disabled","disabled"),o&&s.setAttribute("id",o),s}let Ve={};function ze(t,e="30"){return`
		<svg
			version="1.1" viewBox="0 0 ${e} ${e}"
			height="100%" width="100%"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			${t}
			`}let Te={darkFill:At.gray.l25,lightFill:At.gray.l85,blueOutline:At.blue.l70,greenOutline:At.green.l70,grayOutline:At.gray.l70,purpleOutline:At.purple.l40,redX:Jr.red};Ve.copy=()=>{let t="",e=Te.blueOutline,r=Te.grayOutline,n=Te.darkFill;return t+=`
		<polygon fill="${n}" points="1,22 1,10.4 10.4,1 18,1 18,22"/>
		<path fill="${r}" d="M17,2v19H2V10.8L10.8,2H17 M19,0h-9L0,10v13h19V0L19,0z"/>
		<polygon fill="${n}" points="12,29 12,17.4 21.4,8 29,8 29,29"/>
		<path fill="${e}" d="M28,9v19H13V17.8L21.8,9H28 M30,7h-9L11,17v13h19V7L30,7z"/>
	`,ze(t)};Ve.paste=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
	`,ze(t)};Ve.clearClipboard=()=>{let t="",e=Te.blueOutline,r=Te.darkFill,n=Te.redX;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${n}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${n}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,ze(t)};Ve.pastePathsFromAnotherGlyph=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${e}" d="M17.4,20.6h-4.8l-1,3h1.6v1.7H8v-1.7h1.6l3.6-10.2h-1.6V12h6.8v1.5h-1.7l3.7,10.2H22v1.7h-5.2v-1.7h1.7L17.4,20.6z M16.9,19.1l-1.8-5.6H15l-1.8,5.6H16.9z"/>
	`,ze(t)};Ve.pastePathsFromAnotherProject=()=>{let t=Te.lightFill,e=Te.purpleOutline;const r=`
		<path fill="${t}" d="m11.5,1c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m11.5,23c-5.084,0-7.886,0-9.692-1.808-1.808-1.808-1.808-4.608-1.808-9.692S0,3.615,1.808,1.808C3.614,0,6.416,0,11.5,0s7.886,0,9.692,1.808c1.808,1.808,1.808,4.608,1.808,9.692s0,7.885-1.808,9.692c-1.807,1.808-4.608,1.808-9.692,1.808Zm0-21c-4.55,0-7.057,0-8.278,1.222s-1.222,3.729-1.222,8.278,0,7.057,1.222,8.278,3.728,1.222,8.278,1.222,7.057,0,8.278-1.222,1.222-3.729,1.222-8.278,0-7.057-1.222-8.278-3.728-1.222-8.278-1.222Z"/>
		<rect fill="${e}" x="5" y="5" width="3" height="3"/>
		<path fill="${t}" d="m18.5,8c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m28.192,8.808c-1.807-1.808-4.608-1.808-9.692-1.808-.176,0-.329,0-.5,0v-2.001h-3v2.033c-.735.022-1.389.068-2,.133v-2.166h-3v2.961c-.437.228-.841.495-1.192.847-.352.352-.618.756-.847,1.192h-2.961v3h2.166c-.065.611-.111,1.265-.133,2h-2.033v3h2.001c0,.171,0,.324,0,.5,0,5.084,0,7.885,1.808,9.692,1.807,1.808,4.608,1.808,9.692,1.808s7.886,0,9.692-1.808c1.808-1.808,1.808-4.608,1.808-9.692s0-7.885-1.808-9.692Zm-1.414,17.971c-1.222,1.222-3.728,1.222-8.278,1.222s-7.057,0-8.278-1.222-1.222-3.729-1.222-8.278,0-7.057,1.222-8.278,3.728-1.222,8.278-1.222,7.057,0,8.278,1.222,1.222,3.729,1.222,8.278,0,7.057-1.222,8.278Z"/>
		<path fill="${e}" d="m20.233,20h-3.467l-1.092,3h1.525v2h-5.2v-2h1.733l3.467-9h-1.733v-2h6.067v2h-1.733l3.467,9h1.733v2h-5.2v-2h1.517l-1.083-3Zm-.433-1l-1.3-4-1.3,4h2.6Z"/>
	`;return ze(r)};Ve.addPath=function(t=!1){let e="",r=Te.blueOutline,n=Te.darkFill;return t&&(r=Te.greenOutline,n=Te.lightFill),e+=`
		<rect fill="${n}" x="1" y="1"	width="16" height="16"/>
		<path fill="${r}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<rect x="21" y="15" fill="${r}" width="3" height="15"/>
		<rect x="15" y="21" fill="${r}" width="15" height="3"/>
	`,ze(e)};Ve.undo=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<path fill="${r}" d="M20.1,23c4.6-5,6.6-9.6,5.5-12.8C24.9,8.2,22.9,7,20,7c-5.9,0-8.8,5.3-8.9,5.5L10.9,13l2.4,4.1l-12,0.8l4-14.4l2.5,4.2l0.9-1.1c0,0,4-4.6,11.2-4.6c4.1,0,7.9,2.8,8.8,6.5C29.4,10.8,29.3,16.3,20.1,23z"/>
		<path fill="${e}" d="M20,3c3.1,0,6.9,2,7.8,5.7c0.5,2.1-0.1,4.4-1.6,6.7c0.7-2,0.9-3.9,0.3-5.5C25.7,7.4,23.3,6,20,6c-6.5,0-9.6,5.8-9.8,6.1l-0.5,1l0.6,1l1.3,2.2l-8.9,0.6L5.7,6l0.6,1l1.4,2.4l1.8-2.2C9.6,7.2,13.2,3,20,3 M20,1C12.2,1,8,6,8,6L5,1L0,19l15-1l-3-5c0,0,2.6-5,8-5c7.7,0,7.2,9.2-8,21C39.8,15,29.5,1,20,1L20,1z"/>
	`,ze(t)};Ve.linkToGlyph=()=>{let t="",e=Te.greenOutline;return t+=`
		<path fill="${e}" d="M18,8.8L8.8,18c-0.5,0.5-1.3,0.5-1.8,0s-0.5-1.3,0-1.8L16.2,7c0.5-0.5,1.3-0.5,1.8,0S18.5,8.3,18,8.8z"/>
		<path fill="${e}" d="M7.5,21.2c-1.1,1.1-2.8,1.8-4.1,0.5s-0.6-3,0.5-4.1l5.9-5.9c-1.8-0.5-3.8,0.1-5.5,1.8L2,15.7c-2.4,2.4-2.6,5.7-0.5,7.8s5.4,2,7.8-0.5l2.3-2.3c1.7-1.7,2.3-3.7,1.8-5.5L7.5,21.2z"/>
		<path fill="${e}" d="M21.2,7.5c1.1-1.1,1.8-2.8,0.5-4.1s-3-0.6-4.1,0.5l-5.9,5.9c-0.5-1.8,0.1-3.8,1.8-5.5L15.7,2c2.4-2.4,5.7-2.6,7.8-0.5s2,5.4-0.5,7.8l-2.3,2.3c-1.7,1.7-3.7,2.3-5.5,1.8L21.2,7.5z"/>
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>
	`,ze(t)};Ve.round=()=>{let t=Te.redX,e=Te.darkFill,r=`
		<path fill="${t}" d="M17.4,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3C11.1,12.2,10,13,10,13S14.4,17.5,17.4,21.9z"/>
		<path fill="${t}" d="M12.2,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S14.9,16.7,12.2,21.6z"/>
		<path fill="${t}" d="M28,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3c-1.2-1-2.3-0.3-2.3-0.3S24.9,17.5,28,21.9z"/>
		<path fill="${t}" d="M22.7,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S25.5,16.7,22.7,21.6z"/>
		<path fill="${e}" d="M2,20V9H0V7h4v13h2v2H0v-2H2z"/>
		<path fill="${e}" d="M7,22v-2h2v2H7z"/>
	`;return ze(r)};Ve.flipVertical=()=>{let t="",e=Te.blueOutline,r=Te.grayOutline,n=Te.darkFill;return t+=`
		<polygon fill="${n}" points="6.4,13 1,7.6 1,1 14.7,1 29,9.6 29,13"/>
		<path fill="${r}" d="M14.2,2L28,10.1V12H6.8L2,7.2V2h12 M15,0H0v8l6,6h24V9L15,0L15,0z"/>
		<polygon fill="${n}" points="1,29 1,22.4 6.4,17 29,17 29,20.4 14.7,29"/>
		<path fill="${e}" d="M28,18v1.9L14.4,28H2v-5.2L6.8,18H28 M30,16H6l-6,6v8h15l15-9V16L30,16z"/>
	`,ze(t)};Ve.flipHorizontal=()=>{let t="",e=Te.blueOutline,r=Te.grayOutline,n=Te.darkFill;return t+=`
		<polygon fill="${n}" points="1,29 1,15.3 9.6,1 13,1 13,23.6 7.6,29"/>
		<path fill="${r}" d="M12,2v21.2L7.2,28H2V15.6L10.1,2H12 M14,0H9L0,15v15h8l6-6V0L14,0z"/>
		<polygon fill="${n}" points="22.4,29 17,23.6 17,1 20.4,1 29,15.3 29,29"/>
		<path fill="${e}" d="M19.9,2L28,15.6V28h-5.2L18,23.2V2H19.9 M21,0h-5v24l6,6h8V15L21,0L21,0z"/>
	`,ze(t)};Ve.exportGlyphSVG=()=>{let t=Te.blueOutline,r=`
		<polygon fill="${Te.darkFill}" points="3,8 3,30 27,30 27,0 11,0"/>
		<path fill="${t}" d="M9.2,19.9c-0.4,0.4-1,0.6-1.6,0.6c-0.7,0-1.3-0.2-1.8-0.7v0.6H4.9v-2.6h0.9v0.6c0.4,0.8,1,1.2,1.7,1.2 c0.4,0,0.7-0.1,0.9-0.3c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.1-0.6-0.3-0.7c-0.2-0.2-0.6-0.3-1.1-0.5c-0.6-0.2-1.1-0.3-1.4-0.5 c-0.3-0.2-0.6-0.4-0.7-0.7c-0.2-0.3-0.3-0.6-0.3-1c0-0.6,0.2-1.1,0.6-1.5C5.9,13.2,6.4,13,7,13c0.6,0,1.1,0.2,1.6,0.6v-0.5h0.9 v2.2H8.6v-0.5c-0.4-0.6-0.9-0.8-1.5-0.8c-0.4,0-0.7,0.1-0.9,0.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.2,0.1,0.4,0.2,0.5 c0.1,0.1,0.2,0.3,0.4,0.3c0.2,0.1,0.5,0.2,1,0.3c0.6,0.2,1.1,0.3,1.4,0.5c0.3,0.1,0.5,0.4,0.7,0.7c0.2,0.3,0.3,0.7,0.3,1.2 C9.9,19,9.7,19.5,9.2,19.9z"/>
		<path fill="${t}" d="M21.4,13c1,0,1.9,0.3,2.5,0.9v-0.8h0.9v2.4H24c-0.2-0.4-0.5-0.8-0.9-1.1c-0.4-0.3-0.9-0.5-1.5-0.5 c-0.8,0-1.4,0.3-1.9,0.8c-0.5,0.5-0.7,1.2-0.7,1.9c0,0.9,0.3,1.5,0.8,2.1c0.5,0.5,1.2,0.8,1.9,0.8c0.6,0,1.1-0.2,1.5-0.5 c0.5-0.3,0.7-0.7,0.8-1.3h-1.3v-0.9h2.6c0,0.1,0,0.2,0,0.3c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.5,0.9-2.6,0.9c-1.3,0-2.3-0.4-2.9-1.1 c-0.6-0.7-1-1.6-1-2.6c0-1.1,0.3-2,1-2.7C19.4,13.4,20.3,13,21.4,13z"/>
		<polygon fill="${t}" points="14.1,18.9 15.9,14 15,14 15,13.1 17.8,13.1 17.8,14 16.9,14 14.5,20.4 13.5,20.4 11.1,14 10.2,14 10.2,13.1 13.1,13.1 13.1,14 12.2,14"/>
	`;return ze(r)};Ve.deleteGlyph=()=>{let t=Te.redX,r=`
		<path fill="${Te.darkFill}" d="M20.2,18.5H10L7.8,25h3.5v3.6H0V25h3.5l7.8-21.8H7.8V0h14.6v3.2h-3.6l8,21.8H30v3.6H18.8V25h3.5L20.2,18.5zM19.2,15.2L15.4,3.2H15l-4,11.9H19.2z"/>
		<path fill="${t}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${t}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`;return ze(r)};Ve.reverseWinding=()=>{let t="",e=Te.blueOutline,r=Te.grayOutline;return t+=`
		<path fill="${r}" d="M3.7,7.8V5L0,8.7l3.7,3.7V9.6c6.2,0,11.2,5,11.2,11.2h1.9C16.8,13.6,10.9,7.8,3.7,7.8z"/>
		<path fill="${e}" d="M25.2,22.3C25.2,10,15.2,0,3,0v3.2c10.5,0,19.1,8.6,19.1,19.1h-4.8l6.4,6.4l6.4-6.4H25.2z"/>
	`,ze(t)};Ve.switchPathComponent=function(t=!1){let e="",r=Te.blueOutline,n=Te.greenOutline,a=Te.darkFill,o=Te.lightFill;return t&&(r=Te.greenOutline,n=Te.blueOutline,a=Te.lightFill,o=Te.darkFill),e+=`
	<polygon fill="${a}" points="5.1,21 1,17.2 1,1 3.4,1 10,11.3 10,21"/>
	<path fill="${r}" d="M2.9,2L9,11.6V20H5.5L2,16.7V2H2.9 M3.9,0H0v17.6L4.7,22H11V11L3.9,0L3.9,0z"/>
	<polygon fill="${o}" points="21.8,29 16,23.6 16,1 19.8,1 29,15.3 29,29"/>
	<path fill="${n}" d="M19.1,2L28,15.6V28h-5.8L17,23.1V2h2 M20.4,0H15v24l6.4,6H30V15L20.4,0L20.4,0z"/>
	`,ze(e)};Ve.deletePath=function(t=!1){let e="",r=Te.redX,n=Te.blueOutline,a=Te.darkFill;return t&&(n=Te.greenOutline,a=Te.lightFill),e+=`
		<rect fill="${a}" x="1" y="1"	width="16" height="16"/>
		<path fill="${n}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<path fill="${r}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${r}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,ze(e)};Ve.combine_unite=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<path d="M15.164,6.4c-.8-3.104-3.61-5.4-6.964-5.4-3.976,0-7.2,3.223-7.2,7.2,0,3.354,2.296,6.164,5.4,6.964v3.836h12.6V6.4h-3.836Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM18,18h-10v-4c-.702,0-1.373-.127-2-.35-2.327-.826-4-3.044-4-5.65,0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4,.223.627.35,1.298.35,2h4v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.combine_divide=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<path d="M15.164,6.4c-.8-3.104-3.61-5.4-6.964-5.4C4.224,1,1,4.223,1,8.2c0,3.354,2.296,6.164,5.4,6.964v3.836h12.6V6.4h-3.836Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.combine_subtract=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<path d="M15,6.337c-.791-3.068-3.568-5.337-6.883-5.337C4.186,1,1,4.186,1,8.117c0,3.315,2.27,6.092,5.337,6.883V6.337h8.663Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM18,18h-10v-10h10v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.combine_exclude=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<path d="M15.347,7c0,5-3.347,8.347-8.347,8.347v3.653h12V7h-3.653Z" style="fill: ${r};"/>
		<path d="M15,6.337c-.791-3.068-3.568-5.337-6.883-5.337-3.93,0-7.117,3.186-7.117,7.117,0,3.315,2.27,6.092,5.337,6.883V6.337h8.663Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.combine_intersect=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<path d="M15,8.6c0-.554-.078-1.088-.21-1.6h-7.79v7.79c.512.132,1.046.21,1.6.21,3.535,0,6.4-2.865,6.4-6.4Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,ze(t,"20")};Ve.edit=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<path fill="${e}" d="m28.643,1.357c-1.577-1.577-4.109-1.891-5.651-.349L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651Z"/>
		<path fill="${r}" d="m28.643,1.357C27.771.486,26.608,0,25.482,0,24.57,0,23.682.318,22.992,1.008L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651ZM6.268,20.561l15.793-15.793,3.172,3.172-15.793,15.793-3.172-3.172Zm-.662.752l3.082,3.082-5.548,2.466,2.466-5.548ZM27.577,5.594l-1.638,1.638-3.172-3.172,1.638-1.638c.281-.28.643-.423,1.076-.423.611,0,1.264.288,1.747.771.44.44.719,1.018.765,1.586.028.346-.021.842-.416,1.237Z"/>
	`,ze(t)};Ve.delete=()=>{let t="",e=Te.redX;return t+=`
		<path fill="${e}" d="m23.597,28.681c1.121,1.472,6.349-1.368,4.386-3.98C23.74,19.055,12.613,7.416,7.367,3.301,3.535.295,0,2.518,0,2.518c0,0,13.846,13.354,23.597,26.164Z"/>
		<path fill="${e}" d="m6.893,28.339c-1.703,2.813-6.56-.4-4.174-3.566C7.551,18.364,16.797,6.057,23.298,1.396c4.182-2.998,6.702-.235,6.702-.235,0,0-14.277,12.59-23.107,27.178Z"/>
	`,ze(t)};Ve.createNewKernGroup=()=>{let t="",e=Te.greenOutline,r=Te.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<polygon points="13 20.5 13 22.5 0 22.5 0 23.5 13 23.5 13 25.5 14 25.5 14 20.5 13 20.5" fill="${r}"/>
		<polygon points="24 2 10 2 10 0 9 0 9 5 10 5 10 3 24 3 24 2" fill="${r}"/>
		<rect x="21" y="15" width="3" height="15" fill="${e}"/>
		<rect x="21" y="15" width="3" height="15" transform="translate(45 0) rotate(90)" fill="${e}"/>
	`,ze(t)};Ve.deleteSingleLetterPair=()=>{let t="",e=Te.redX,r=Te.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<path d="m26.428,29.033c.625.821,3.542-.763,2.447-2.22-2.367-3.149-8.574-9.642-11.5-11.938-2.138-1.677-4.11-.437-4.11-.437,0,0,7.723,7.449,13.163,14.595Z" fill="${e}"/>
		<path d="m17.111,28.842c-.95,1.569-3.659-.223-2.328-1.989,2.695-3.575,7.853-10.44,11.479-13.04,2.333-1.673,3.739-.131,3.739-.131,0,0-7.964,7.023-12.889,15.16Z" fill="${e}"/>
	`,ze(t)};Ve.findSingleLetterPair=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<path d="m30,28l-5.154-5.154c.728-1.104,1.154-2.425,1.154-3.846,0-3.866-3.134-7-7-7s-7,3.134-7,7,3.134,7,7,7c1.421,0,2.742-.426,3.846-1.154l5.154,5.154,2-2Zm-15.5-9c0-2.481,2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5-4.5-2.019-4.5-4.5Z" fill="${e}"/>
	`,ze(t)};Ve.moveLayerDown=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<rect fill="${e}" x="23" y="21" width="2" height="7"/>
		<path fill="${e}" d="M20,26h8l-4,4C24,30,19.9,25.9,20,26z"/>
		<polygon fill="${e}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${r}" points="15,14 0,7 15,0 30,7"/>
	`,ze(t)};Ve.moveLayerUp=()=>{let t="",e=Te.blueOutline,r=Te.darkFill;return t+=`
		<rect fill="${e}" x="23" y="23" width="2" height="7"/>
		<path fill="${e}" d="M20,25h8l-4-4C24,21,19.9,25.1,20,25z"/>
		<polygon fill="${r}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${e}" points="15,14 0,7 15,0 30,7"/>
	`,ze(t)};Ve.align=function(t){let e="",r=Te.blueOutline,n=Te.darkFill;switch(t){case"bottom":e+=`
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
			`;break}return ze(e,"20")};Ve.resetPathPoint=()=>{let t="",e=Te.blueOutline,r=Te.grayOutline;return t+=`
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
	`,ze(t)};Ve.deletePathPoint=()=>{let t="",e=Te.blueOutline,r=Te.redX;return t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,t+=`
		<path fill="${r}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${r}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>';
	`,ze(t)};Ve.insertPathPoint=()=>{let t="",e=Te.blueOutline;return t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,t+=`
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>';
	`,ze(t)};Ve.selectNextPathPoint=()=>{let t="",e=Te.blueOutline,r=Te.grayOutline;return t+=`
		<rect x="22.5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m29,12v6h-6v-6h6m1-1h-8v8h8v-8h0Z" fill="${e}"/>
		<path d="m19,15s-7-7-7-7v5h-6v4h6v5s7-7,7-7Z" fill="${r}"/>
		<rect y="13" width="3" height="4" fill="${r}"/>
	`,ze(t)};Ve.selectPreviousPathPoint=()=>{let t="",e=Te.blueOutline,r=Te.grayOutline;return t+=`
		<rect x=".5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m7,12v6H1v-6h6m1-1H0v8h8v-8h0Z" fill="${e}"/>
		<path d="m11,15s7-7,7-7v5h6v4h-6s0,5,0,5l-7-7Z" fill="${r}"/>
		<rect x="27" y="13" width="3" height="4" fill="${r}"/>
	`,ze(t)};Ve.default=()=>{let t=`<rect width="30" height="30" fill="${Te.greenOutline}"/>`;return ze(t)};Ve.test=()=>{let t=`
		<path d="M28.05,23.82c-1.65-1.79-9.55-13.02-9.55-17.82V3h1c.28,0,.5-.72,.5-1s-.22-1-.5-1H10.5c-.28,0-.5,.72-.5,1s.22,1,.5,1h1v3c0,4.8-7.9,16.03-9.55,17.82-.58,.55-.95,1.32-.95,2.18,0,1.66,1.34,3,3,3H26c1.66,0,3-1.34,3-3,0-.86-.37-1.63-.95-2.18ZM13.5,6V3h3v3c0,2.76,2.01,6.95,4.25,10.72-3.27,1.69-5.6-.72-7.75-.72-.34,0-1.86-.31-4,1.15,2.34-3.88,4.5-8.28,4.5-11.15Zm3.5,20c-1.66,0-3-1.34-3-3s1.34-3,3-3,3,1.34,3,3-1.34,3-3,3Zm-6-7.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Z" fill="${Te.redX}"/>
		<circle cx="15" cy="14" r="1" fill="${Te.redX}"/>
	`;return ze(t)};function II(){let t=C({className:"panel__card guides-card__view-options",innerHTML:"<h3>View options</h3>"});const e=Le().settings.app.guides,r=e.systemShowGuides,n=e.customShowGuides;ne(t,[tr(e,"drawGuidesOnTop",Xn),C({tag:"label",style:"grid-column: 2 / -1;",content:"Draw guides over shapes"})]);const a=tr(e,"systemShowGuides");a.addEventListener("change",()=>{z().navigate()}),ne(t,[a,C({tag:"h4",content:"Key metrics guides"})]),r&&ne(t,[C(),Ue("Transparency"),Gi(e.systemTransparency,x=>{e.systemTransparency=x,z().editCanvas.redraw()}),C(),Ue("Show labels"),tr(e,"systemShowLabels",Xn),wr()]);const o=tr(e,"customShowGuides");o.addEventListener("change",()=>{z().navigate()}),ne(t,[o,C({tag:"h4",content:"Custom guides"})]),n&&ne(t,[C(),Ue("Transparency"),Gi(e.customTransparency,x=>{e.customTransparency=x,z().editCanvas.redraw()}),C(),Ue("Show labels"),tr(e,"customShowLabels",Xn)]);let s=[t];return r&&s.push(dI()),n&&s.push(uI()),s}function Xn(){Ir(),z().editCanvas.redraw()}function dI(){let t=C({className:"panel__card guides-card__system",innerHTML:"<h3>Key metrics guides</h3>"});const e=Le().settings.font,r=z().selectedItem.advanceWidth;return ne(t,[Rn("ascent","Ascent",e.ascent,$0),Rn("capHeight","Cap height",e.capHeight,q0),Rn("xHeight","X height",e.xHeight,q0),Rn("baseline","Baseline","0",Ca),Rn("descent","Descent",e.descent,$0),Rn("leftSide","Left side","0",Ca),Rn("rightSide","Right side",r,Ca)]),t}function Rn(t,e,r="0000",n){const a=z().systemGuides,o=tr(a,t,E=>{const T=z();let u=T.project.settings.app.guides.systemGuides;E?u.includes(t)||u.push(t):u.includes(t)&&(u=u.filter(D=>D!==t)),T.editCanvas.redraw()});o.setAttribute("title","Show / hide guide"),o.setAttribute("style",`accent-color: ${n};`);let s=C({className:"guide-system-angle",innerHTML:In({name:"command_horizontalBar",color:n})});s.setAttribute("title","Horizontal guideline"),(t==="leftSide"||t==="rightSide")&&(s.innerHTML=In({name:"command_verticalBar",color:n}),s.setAttribute("title","Vertical guideline"));const x=C({className:"guide-system-value",content:r});return x.setAttribute("title",`Guide line position
These are based on this font's key metrics,
which you can edit on the Font Settings page.`),[o,Ue(e),s,x]}function uI(){let t=C({className:"panel__card guides-card__custom",innerHTML:"<h3>Custom guides</h3>"});const e=Le().settings.app.guides.custom;e.length&&(e.forEach((n,a)=>{ne(t,pI(n,a))}),t.appendChild(wr()));const r=C({tag:"fancy-button",attributes:{secondary:""},innerHTML:"Add a custom guide"});return r.addEventListener("click",()=>{Le().settings.app.guides.custom.push(new Po({visible:!0,color:G1()})),Xn()}),t.appendChild(r),t}function pI(t,e){const r=tr(t,"visible",()=>{z().editCanvas.redraw()});r.setAttribute("style",`accent-color: ${t.color}`),r.setAttribute("title","Show / hide guide");const n=Gt(t,"name","editCanvasView","input"),a=_s({iconName:"delete",title:"Delete guide"});a.setAttribute("class","guide-delete-button"),a.addEventListener("click",()=>{Le().settings.app.guides.custom.splice(e,1),Xn()});const o=C({tag:"input",className:"guide-color-button",title:"Change guide color",attributes:{type:"color",style:`background-color: ${t.color};`,value:P0(t.color)}});o.addEventListener("input",E=>{let T=va(E.target.value),u=`rgb(${T.r},${T.g},${T.b})`;o.setAttribute("value",P0(u)),o.style.backgroundColor=u,r.style.accentColor=u,s.querySelector("g").setAttribute("fill",u);const D=Le().settings.app.guides.custom[e];D.color=u,z().editCanvas.redraw()});const s=C({tag:"button",title:"Toggle vertical / horizontal",className:"guide-angle-button",innerHTML:In({name:"command_verticalBar",color:t.color})});t.angle===90&&(s.innerHTML=In({name:"command_horizontalBar",color:t.color})),s.addEventListener("click",()=>{const E=Le().settings.app.guides.custom[e];E.angle===90?(E.angle=0,E.name=E.name.replace("Horizontal","Vertical")):(E.angle=90,E.name=E.name.replace("Vertical","Horizontal")),Xn()});const x=Gt(t,"location","editCanvasView","input-number");return x.setAttribute("title","Guide line position"),[r,n,a,o,s,x]}function SI(){const t=z();let e=C({className:"panel__card history-list"}),r=t.history.length,n=C({tag:"button",className:r>0?"button__call-to-action number":"number",innerHTML:`undo ${r}`,style:"max-width: 30%; grid-column: 1 / -1;"});e.appendChild(n),r>0?n.addEventListener("click",()=>{t.history.restoreState()}):(n.setAttribute("disabled",""),e.appendChild(C({tag:"h3",innerHTML:t.project.getItemName(t.selectedItemID,!0)})));let a="initial";return t.history.queue.forEach(o=>{if(o.title!=="_whole_project_change_post_state_"){o.itemID&&o.itemID!==a&&(e.appendChild(C({tag:"h3",innerHTML:t.project.getItemName(o.itemID,!0)})),a=o.itemID);let s=o.title;o.wholeProjectSave&&(s=`<strong>${o.title}</strong>`),e.appendChild(C({className:"history-list__title",innerHTML:s})),e.appendChild(C({className:"history-list__date number",innerHTML:new Date(o.timeStamp).toLocaleTimeString(),title:new Date(o.timeStamp).toLocaleString()}))}}),e.appendChild(C({className:"history-list__title history-list__initial-entry",innerHTML:"Initial state"})),e.appendChild(C({className:"history-list__date number history-list__initial-entry",innerHTML:new Date(t.history.initialTimeStamp).toLocaleTimeString()})),e}const zs={isCtrlDown:!1,isSpaceDown:!1,isShiftDown:!1,isAltDown:!1};function zA(t){const e=t0(t);Js(e,"down")}function JA(t){let e=t0(t);Js(e,"up")}function Js(t,e){const r=zs;e==="down"&&(t==="ctrl"&&(r.isCtrlDown=!0),t==="space"&&(r.isSpaceDown=!0),t==="shift"&&(r.isShiftDown=!0),t==="alt"&&(r.isAltDown=!0)),e==="up"&&(t==="ctrl"&&(r.isCtrlDown=!1),t==="space"&&(r.isSpaceDown=!1),t==="shift"&&(r.isShiftDown=!1),t==="alt"&&(r.isAltDown=!1))}function CI(){let t=C({className:"panel__card full-width item-links__rows-area"});const e=z(),r=Le();let a=e.selectedItem.shapes;if(Se.newBasicPath){let o=Se.newBasicPath,s=C();s.setAttribute("class","item-link__row layer-panel__new-path"),s.classList.add("layer-panel__selected"),s.appendChild(C({className:"item-link__thumbnail",innerHTML:r.makeItemThumbnail(o)})),s.appendChild(C({className:"item-link__title",innerHTML:o.name})),t.appendChild(s)}if(a.length>0)for(let o=a.length-1;o>=0;o--){let s=a[o],x=C({attributes:{"target-path-index":o}});s.objType==="ComponentInstance"?x.setAttribute("class","item-link__row layer-panel__component-row"):x.setAttribute("class","item-link__row layer-panel__path-row"),e.multiSelect.shapes.isSelected(s)&&x.classList.add("layer-panel__selected"),e.subscribe({topic:"whichShapeIsSelected",subscriberID:`layersPanel.item-link-row-${o}`,callback:()=>{let u=e.multiSelect.shapes.isSelected(s);x.classList.toggle("layer-panel__selected",u)}}),x.addEventListener("click",()=>{zs.isCtrlDown?e.multiSelect.shapes.toggle(s):e.multiSelect.shapes.select(s),e.publish("whichShapeIsSelected",s)});const E=C({className:"item-link__thumbnail",attributes:{"target-path-index":o},innerHTML:r.makeItemThumbnail(s)});x.appendChild(E),x.appendChild(C({className:"item-link__title",innerHTML:`${s.name}`}));let T="Path";s.link&&(T=`Component instance&emsp;|&emsp;${r.getItem(s.link).name}`),x.appendChild(C({className:"item-link__subtitle",innerHTML:T})),t.appendChild(x)}else t.appendChild(C({content:'No paths exist yet.  You can create one with the New Path tools on the canvas, or by pressing "add new path" below.'}));return e.subscribe({topic:["currentPath","currentItem"],subscriberID:"layersPanel",callback:()=>{const o=z(),s=Le();document.querySelectorAll(".item-link__thumbnail").forEach(E=>{const T=E.getAttribute("target-path-index");E.innerHTML=s.makeItemThumbnail(o.selectedItem.shapes[T])})}}),[t,gI()]}function gI(){const t=z();let e=C({className:"panel__card full-width",content:"<h3>Actions</h3>"}),r=C({tag:"div",className:"panel__actions-area"});Qt(r,rr("addShapeActions"));let n=t.multiSelect.shapes.members;return t.selectedItem.shapes.length>1&&n.length===1&&Qt(r,rr("layerActions")),ne(e,r),e}function Xa(){const t=z();let e=C(),r=t.nav.panel;return r!=="Layers"&&(document.removeEventListener("keydown",zA,!1),document.removeEventListener("keyup",JA,!1)),t.nav.page==="Components"&&bt(t.project.components)<=0||t.nav.page==="Ligatures"&&bt(t.project.ligatures)<=0||t.nav.page==="Kerning"&&bt(t.project.kerning)<=0||(r==="Attributes"?(t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),t.nav.page==="Kerning"?ne(e,cI()):ne(e,EI())):r==="Layers"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,CI()),document.addEventListener("keydown",zA,!1),document.addEventListener("keyup",JA,!1)):r==="Context characters"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),ne(e,TI())):r==="History"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,SI())):r==="Guides"&&(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,II()))),e}function Ir(){let t=document.querySelector("#editor-page__panel");if(t){let e=Xa();t.innerHTML="",t.appendChild(e)}}class Qr extends Dr{constructor({leftGroup:e=[],rightGroup:r=[],value:n=0}={}){super(),this.leftGroup=e,this.rightGroup=r,this.value=n,this.objType="KernGroup"}save(e=!1){const r={leftGroup:this.leftGroup.slice(),rightGroup:this.rightGroup.slice(),value:this._value};return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{${this.objType} 
`;return r+="  ",n+=`${r}leftGroup: ${JSON.stringify(this.leftGroup)}
`,n+=`${r}rightGroup: ${JSON.stringify(this.rightGroup)}
`,n+=`${r}value: ${this.value}
`,n+=`${r.substring(2)}}/${this.objType}`,n}get leftGroup(){return this._leftGroup||[]}get rightGroup(){return this._rightGroup||[]}get value(){return this._value||0}get name(){return`${this.leftGroupAsString} | ${this.rightGroupAsString}`}get leftGroupAsString(){let e="";return this.leftGroup&&(e=Cr(this.leftGroup.join(""))),e}get rightGroupAsString(){let e="";return this.rightGroup&&(e=Cr(this.rightGroup.join(""))),e}set leftGroup(e=[]){e=e.map(r=>qt(r)),e=e.filter(Bn),this.changed(),this._leftGroup=e}set rightGroup(e=[]){e=e.map(r=>qt(r)),e=e.filter(Bn),this.changed(),this._rightGroup=e}set value(e){this._value=parseInt(e)||0,this.changed()}}const RI=Object.freeze(Object.defineProperty({__proto__:null,KernGroup:Qr},Symbol.toStringTag,{value:"Module"}));function yI(){const t=z(),e=t.selectedKernGroupID,a=C({tag:"div",id:"app__page",innerHTML:`
		<div class="editor__page">
			<div class="editor-page__left-area">
				<div class="editor-page__nav-area">
					${Kt({level:"l1",superTitle:"PAGE",title:"Kerning"})}
				</div>
				<div id="editor-page__panel"></div>
			</div>
			${e?`
		<div class="editor-page__tools-area"></div>
		<div class="editor-page__edit-canvas-wrapper"></div>
		<div class="editor-page__zoom-area"></div>
	`:'<div class="editor-page__edit-canvas-wrapper" style="grid-column: span 2; overflow-y: scroll;"></div>'}
		</div>
	`});t.showPageTransitions&&a.classList.add("app__page-animation");let o=a.querySelector("#nav-button-l1");o.addEventListener("click",function(){Vt(o)});const s=a.querySelector(".editor-page__nav-area"),x=a.querySelector(".editor-page__edit-canvas-wrapper");if(!e)return ne(x,mI()),s.style.display="block",o.style.width="100%",o.style.borderRadius="4px",a;const E=t.selectedKernGroup,T=Kt({level:"l2",superTitle:"EDITING",title:E.name}),u=Kt({level:"l3",superTitle:"PANEL",title:t.nav.panel});s.appendChild(xe(T)),s.appendChild(xe(u));const D=C({tag:"edit-canvas",id:"editor-page__edit-canvas",attributes:{"editing-item-id":t.selectedKernGroupID}});x.appendChild(D);let O=a.querySelector("#nav-button-l2");O.addEventListener("click",function(){Vt(O)}),t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"nav.kernChooserButton",callback:()=>{var Q;t.selectedKernGroup&&(O.innerHTML=aa((Q=t.selectedKernGroup)==null?void 0:Q.name,"EDITING"))}});let g=a.querySelector("#nav-button-l3");g.addEventListener("click",function(){Vt(g)});const V=a.querySelector("#editor-page__panel");V.appendChild(Xa()),V.addEventListener("scroll",Yr),t.subscribe({topic:["whichKernGroupIsSelected"],subscriberID:"nav.panelChooserButton",callback:()=>{Ir()}}),t.selectedTool="kern";let Y=a.querySelector(".editor-page__tools-area");Y.innerHTML="";let J=tu();J&&ne(Y,J);let K=a.querySelector(".editor-page__zoom-area");K.innerHTML="";let re=e0();return re&&ne(K,re),t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"editCanvas.selectedKernGroup",callback:Q=>{a.querySelector("#editor-page__edit-canvas").setAttribute("editing-item-id",Q)}}),a}function mI(){const t=C({className:"editor-page__first-run",innerHTML:`
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
		`}),e=C({tag:"fancy-button",innerHTML:"Create a new kern group",onClick:()=>Pi(!1)});return t.appendChild(e),t}function NI(t,e,r){const n=bo(),a=Le();return a.addItemByType(new Qr({leftGroup:t,rightGroup:e,value:r}),"KernGroup",n),a.kerning[n]}function bo(t=Le().kerning){let e=bt(t);for(;t[`kern-${e}`];)e++;return`kern-${e}`}function Pi(t=!1){const e=C({innerHTML:`
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
		`}),r=e.querySelector("#kerning__add-new-kern-group__submit-button"),n=e.querySelector("#kerning__add-new-kern-group__left-group"),a=e.querySelector("#kerning__add-new-kern-group__right-group"),o=e.querySelector("#kerning__add-new-kern-group__value");n.addEventListener("change",s),a.addEventListener("change",s),o.addEventListener("change",s),n.addEventListener("keyup",s),a.addEventListener("keyup",s),o.addEventListener("keyup",s),t&&(r.removeAttribute("disabled"),r.addEventListener("click",x));function s(){n.value!==""&&a.value!==""&&o.value?(r.removeAttribute("disabled"),r.addEventListener("click",x)):(r.setAttribute("disabled",""),r.removeEventListener("click",x))}function x(){const E=z();let T=ya(n.value),u=ya(a.value),D=parseInt(o.value);if(t)t.leftGroup=T,t.rightGroup=u,t.value=D,E.history.addState("Edited kern group: "+E.selectedKernGroupID),E.publish("currentKernGroup",E.selectedKernGroup),E.navigate(),We();else{const O=NI(T,u,D);typeof O=="string"?lr(O):(E.selectedItemID=O.id,E.navigate(),E.history.addWholeProjectChangePostState(),We())}}hr(e,500)}function DI(){const t=C({innerHTML:`
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
		`}),e=t.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",En),e.addEventListener("keyup",En);const r=t.querySelector("#kerning__letter-pair__right-group");r.addEventListener("change",En),r.addEventListener("keyup",En),t.querySelector("#kerning__letter-pair__search-button").addEventListener("click",OI),hr(t,800)}function fI(){const t=C({innerHTML:`
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
		`}),e=t.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",En),e.addEventListener("keyup",En);const r=t.querySelector("#kerning__letter-pair__right-group");r.addEventListener("change",En),r.addEventListener("keyup",En),t.querySelector("#kerning__letter-pair__search-button").addEventListener("click",BI),hr(t,800)}function En(){const t=document.querySelector("#kerning__letter-pair__left-group"),e=document.querySelector("#kerning__letter-pair__right-group"),r=document.querySelector("#kerning__letter-pair__search-button");t.value.length&&e.value.length?r.removeAttribute("disabled"):r.setAttribute("disabled","")}function OI(){const t=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),e=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),r=Le().kerning,n=[];Object.keys(r).forEach(o=>{r[o].leftGroup.includes(Ur(t))&&r[o].rightGroup.includes(Ur(e))&&n.push(o)});const a=document.querySelector("#kerning__letter-pair__results");if(a.innerHTML="",n.length){const o=z().selectedKernGroupID;n.forEach(s=>{let x=Vs(s);x.addEventListener("click",()=>{const E=z();E.selectedItemID=s,E.history.addState(`Navigated to ${E.project.getItemName(s,!0)}`),document.querySelectorAll(".kern-group-chooser__row").forEach(u=>u.removeAttribute("selected")),x.setAttribute("selected","")}),s===o&&x.setAttribute("selected",""),a.appendChild(x)})}else a.innerHTML="<i>No Kern Groups exist with that letter pair</i>"}function BI(){const t=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),e=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),r=document.querySelector("#kerning__result-message");r.innerHTML="";const n=Le().kerning;let a,o=[],s=[];Object.keys(n).forEach(x=>{n[x].leftGroup.includes(Ur(t))&&n[x].rightGroup.includes(Ur(e))&&(a=HI(t,e,x),a?s.push(x):o.push(x))}),o.length&&(r.innerHTML=`
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
			`)}function HI(t="",e="",r=!1){let n={},a=Ur(t),o=Ur(e);const s=z();let x=!1;if(r){let E=s.project.getItem(r);E&&(n[r]=E)}else n=s.project.kerning;return Object.keys(n).forEach(E=>{let T=n[E].leftGroup,u=n[E].rightGroup;T.includes(a)&&u.includes(o)&&(T.length===1&&u.length===1?(s.deleteItem(E,s.project.kerning),x=!0):T.length===1?(u.splice(u.indexOf(o),1),x=!0):u.length===1&&(T.splice(T.indexOf(a),1),x=!0))}),x}function ta(t){const e=C();return t.forEach(r=>{e.appendChild(FI(r))}),e}function FI(t){let e=Cr(t),r=Aa(t),n=t;return r&&(n=`${r}
${t}`),C({tag:"code",innerHTML:e,attributes:{title:n}})}let eo={},to={},bi={},ra=0,hn=0;async function MI(t){var D,O,g,V,Y;const e=ri(),r=e.project;eo={},to={},bi={},ra=0,hn=0;const n=t.glyphs.glyphs,a=t.substitution.getLigatures("liga"),o=t.position.getKerningTables();let s=[],x={},E=0;o&&o[0]&&o[0].lookupType===2&&(s=((O=(D=o[0])==null?void 0:D.subtables[0])==null?void 0:O.pairSets)||[],x=((Y=(V=(g=o[0])==null?void 0:g.subtables[0])==null?void 0:V.coverage)==null?void 0:Y.ranges)||{}),s.forEach(J=>E+=J.length),hn=bt(n)+a.length+E;for(const J of Object.keys(n))await g0("character"),GI(n[J],r);for(const J of a){await g0("ligature");let K=!1;try{K=t.glyphs.get(J.by)}catch{console.warn(`Ligature import error: could not get ${J.by} (${J.sub})`)}PI({glyph:K,gsub:J.sub},t)}for(let J=0;J<s.length;J++){const K=s[J];for(let re=0;re<K.length;re++){const Q=K[re],oe=Q.secondGlyph,Ae=Q.value1.xAdvance,le=T(J),he=t.glyphs.glyphs[oe];await g0("kern pair"),bI(le,he,Ae)}}function T(J){let K=x[0];for(let Ae=x.length-1;Ae>=0;Ae--)if(J>=x[Ae].index){K=x[Ae];break}const re=J-K.index,Q=K.start+re;return t.glyphs.glyphs[Q]}vI(t,r),r.glyphs=eo,r.ligatures=to,r.kerning=bi,o0(e),e.nav.page="Overview";const u=Lt();u.selectedProjectEditor=e,u.selectedProjectEditor.navigate()}async function g0(t){_n(`
			Importing ${t}:
			<span class="progress-indicator__counter">${ra}</span>
			 of
			<span class="progress-indicator__counter">${hn}</span>
		`),await $n()}function GI(t,e){if(isNaN(t.unicode)){hn--;return}const r=qe(t.unicode||0),n=Zs(t);if(!n){console.warn("Something went wrong with importing this glyph."),console.log(t),hn--;return}const a=`glyph-${r}`;n.id=a,eo[a]=n,F1(r)&&r!=="0x0"&&(e.settings.app.showNonCharPoints=!0),e.incrementRangeCountFor(r),ra++}function Zs(t){const e=t.advanceWidth;let r=t.path.toSVG(),n;return r?n=Ha(`<svg>${r}</svg>`,!1):n=new nt,n&&(n.advanceWidth=e),n}function PI(t,e){if(t!=null&&t.glyph){const r=Zs(t.glyph);if(!r){console.warn("Something went wrong with importing this glyph."),console.log(t),hn--;return}let n=[];if(t.gsub.forEach(o=>{var s;(s=e.glyphs.get(o))!=null&&s.unicode&&n.push(e.glyphs.get(o).unicode)}),t.gsub.length!==n.length){hn--;return}r.gsub=n,r.objType="Ligature";const a=ja(String.fromCodePoint(...n));r.id=a,to[a]=r,ra++}else hn--}function bI(t,e,r){if(!t||!e){console.warn(`Something went wrong with importing this kern pair:
			${t==null?void 0:t.name} | ${e==null?void 0:e.name} = ${r} `),ra--;return}const n=new Qr({leftGroup:[qe(t.unicode)],rightGroup:[qe(e.unicode)],value:r}),a=bo(bi);n.id=a,bi[a]=n,ra++}function vI(t,e){const r=e.settings.font,n=t.tables.os2,a=Ht(t.names.fontFamily)||"My Font";e.settings.project.name=a,r.name=a,r.upm=1*t.unitsPerEm||r.upm,r.ascent=1*Ht(n.sTypoAscender)||r.ascent,r.descent=-1*Math.abs(Ht(n.sTypoDescender))||r.descent,r.capHeight=1*Ht(n.sCapHeight)||r.capHeight,r.xHeight=1*Ht(n.sxHeight)||r.xHeight,r.overshoot=r.upm>2e3?30:20,r.lineGap=1*Ht(n.sTypoLineGap)||r.lineGap,r.family=a.substring(0,31),r.panose=Ht(n.panose)||"0 0 0 0 0 0 0 0 0 0",r.version=Ht(t.tables.head.fontRevision)||Ht(t.version)||Ht("Version 0.1"),r.style=Ht(t.tables.name.fontSubfamily)||"Regular",r.copyright=Ht(t.tables.name.copyright)||"",r.trademark=Ht(t.tables.name.trademark)||"",r.designer=Ht(t.tables.name.designer)||"",r.designerURL=Ht(t.tables.name.designerURL)||"",r.manufacturer=Ht(t.tables.name.manufacturer)||"",r.manufacturerURL=Ht(t.tables.name.manufacturerURL)||"",r.license=Ht(t.tables.name.license)||"",r.licenseURL=Ht(t.tables.name.licenseURL)||"",r.description=Ht(t.tables.name.description)||""}function Ht(t){try{let e=!1;return Array.isArray(t)?e=t.join(" "):typeof t=="object"&&typeof t.en=="string"?e=t.en:(typeof t=="string"||typeof t=="number")&&(e=t),e}catch{return!1}}const ro=`{\r
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
              "p": {"coord": {"x": 985,"y": 54}},\r
              "h1": {"coord": {"x": 892,"y": 2}},\r
              "h2": {"coord": {"x": 1035,"y": 54}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1155,"y": -116}},\r
              "h1": {"coord": {"x": 1105,"y": -116}, "use": false},\r
              "h2": {"coord": {"x": 1157,"y": -118}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1162,"y": -116}},\r
              "h1": {"coord": {"x": 1160,"y": -118}},\r
              "h2": {"coord": {"x": 1212,"y": -116}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1278,"y": 0}},\r
              "h1": {"coord": {"x": 1228,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1280,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1278,"y": 7}},\r
              "h1": {"coord": {"x": 1280,"y": 5}},\r
              "h2": {"coord": {"x": 1328,"y": 7}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -3,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 729,"y": 158}},\r
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
              "h2": {"coord": {"x": 1081,"y": 548}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 987,"y": 299}},\r
              "h1": {"coord": {"x": 1065,"y": 402}},\r
              "h2": {"coord": {"x": 1037,"y": 299}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 848,"y": 437}},\r
              "h1": {"coord": {"x": 798,"y": 437}, "use": false},\r
              "h2": {"coord": {"x": 846,"y": 439}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 841,"y": 437}},\r
              "h1": {"coord": {"x": 843,"y": 439}},\r
              "h2": {"coord": {"x": 891,"y": 437}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 322}},\r
              "h1": {"coord": {"x": 675,"y": 322}, "use": false},\r
              "h2": {"coord": {"x": 723,"y": 320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 314}},\r
              "h1": {"coord": {"x": 723,"y": 316}},\r
              "h2": {"coord": {"x": 775,"y": 314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 192}},\r
              "h1": {"coord": {"x": 797,"y": 192}, "use": false},\r
              "h2": {"coord": {"x": 794,"y": 170}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x52": {\r
      "id": "glyph-0x52",\r
      "advanceWidth": 1103,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 175}},\r
              "h1": {"coord": {"x": 1061,"y": 175}},\r
              "h2": {"coord": {"x": 1108,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 175}},\r
              "h1": {"coord": {"x": 880,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": 674}},\r
              "h1": {"coord": {"x": 592,"y": 674}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 716}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 942,"y": 1059}},\r
              "h1": {"coord": {"x": 942,"y": 915}},\r
              "h2": {"coord": {"x": 942,"y": 1181}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 1490}},\r
              "h1": {"coord": {"x": 902,"y": 1483}},\r
              "h2": {"coord": {"x": 623,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 1490}},\r
              "h1": {"coord": {"x": 523,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 623,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1490}},\r
              "h1": {"coord": {"x": -6,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 94,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1490}},\r
              "h1": {"coord": {"x": -6,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
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
              "p": {"coord": {"x": 145,"y": 1316}},\r
              "h1": {"coord": {"x": 95,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 174}},\r
              "h1": {"coord": {"x": 95,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 174}, "use": false}\r
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
              "h2": {"coord": {"x": 425,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 5}},\r
              "h1": {"coord": {"x": 427,"y": 2}},\r
              "h2": {"coord": {"x": 477,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 169}},\r
              "h1": {"coord": {"x": 377,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 427,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 174}},\r
              "h1": {"coord": {"x": 425,"y": 174}},\r
              "h2": {"coord": {"x": 472,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 174}},\r
              "h1": {"coord": {"x": 267,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 666}},\r
              "h1": {"coord": {"x": 267,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 666}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 445,"y": 666}},\r
              "h1": {"coord": {"x": 395,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 495,"y": 666}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 1}},\r
              "h1": {"coord": {"x": 756,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 856,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 809,"y": 1}},\r
              "h1": {"coord": {"x": 759,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 859,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 809,"y": 1}},\r
              "h1": {"coord": {"x": 759,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 859,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 1}},\r
              "h1": {"coord": {"x": 1008,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 1061,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 6}},\r
              "h1": {"coord": {"x": 1063,"y": 3}},\r
              "h2": {"coord": {"x": 1113,"y": 6}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 170}},\r
              "h1": {"coord": {"x": 1013,"y": 170}, "use": false},\r
              "h2": {"coord": {"x": 1063,"y": 173}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -3,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 1318}},\r
              "h1": {"coord": {"x": 267,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 1318}},\r
              "h1": {"coord": {"x": 510,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 727,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 791,"y": 1059}},\r
              "h1": {"coord": {"x": 791,"y": 1226}},\r
              "h2": {"coord": {"x": 791,"y": 939}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 561,"y": 841}},\r
              "h1": {"coord": {"x": 703,"y": 841}},\r
              "h2": {"coord": {"x": 611,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 503,"y": 841}},\r
              "h1": {"coord": {"x": 453,"y": 841}, "use": false},\r
              "h2": {"coord": {"x": 553,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 503,"y": 840}},\r
              "h1": {"coord": {"x": 453,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 553,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 840}},\r
              "h1": {"coord": {"x": 267,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 1318}},\r
              "h1": {"coord": {"x": 267,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x53": {\r
      "id": "glyph-0x53",\r
      "advanceWidth": 981,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 849}},\r
              "h1": {"coord": {"x": 910,"y": 849}},\r
              "h2": {"coord": {"x": 540,"y": 849}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 850}},\r
              "h1": {"coord": {"x": 440,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": 850}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 228,"y": 1054}},\r
              "h1": {"coord": {"x": 228,"y": 988}},\r
              "h2": {"coord": {"x": 228,"y": 1201}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 1316}},\r
              "h1": {"coord": {"x": 296,"y": 1316}},\r
              "h2": {"coord": {"x": 553,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 684,"y": 1316}},\r
              "h1": {"coord": {"x": 624,"y": 1316}},\r
              "h2": {"coord": {"x": 734,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 684,"y": 1234}},\r
              "h1": {"coord": {"x": 634,"y": 1234}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 1231}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 689,"y": 1229}},\r
              "h1": {"coord": {"x": 686,"y": 1229}},\r
              "h2": {"coord": {"x": 739,"y": 1229}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 853,"y": 1229}},\r
              "h1": {"coord": {"x": 803,"y": 1229}, "use": false},\r
              "h2": {"coord": {"x": 856,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 1234}},\r
              "h1": {"coord": {"x": 858,"y": 1231}},\r
              "h2": {"coord": {"x": 908,"y": 1234}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 1407}},\r
              "h1": {"coord": {"x": 808,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 858,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 775,"y": 1490}},\r
              "h1": {"coord": {"x": 821,"y": 1490}},\r
              "h2": {"coord": {"x": 825,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 1490}},\r
              "h1": {"coord": {"x": 440,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 310,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 54,"y": 1054}},\r
              "h1": {"coord": {"x": 54,"y": 1395}},\r
              "h2": {"coord": {"x": 54,"y": 880}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 676}},\r
              "h1": {"coord": {"x": 207,"y": 676}},\r
              "h2": {"coord": {"x": 741,"y": 676}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 767,"y": 394}},\r
              "h1": {"coord": {"x": 767,"y": 552}},\r
              "h2": {"coord": {"x": 767,"y": 324}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 174}},\r
              "h1": {"coord": {"x": 762,"y": 174}},\r
              "h2": {"coord": {"x": 536,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 174}},\r
              "h1": {"coord": {"x": 164,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 254}},\r
              "h1": {"coord": {"x": 164,"y": 254}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 257}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 259}},\r
              "h1": {"coord": {"x": 212,"y": 259}},\r
              "h2": {"coord": {"x": 259,"y": 259}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 259}},\r
              "h1": {"coord": {"x": -5,"y": 259}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 259}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 254}},\r
              "h1": {"coord": {"x": 40,"y": 257}},\r
              "h2": {"coord": {"x": 90,"y": 254}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 83}},\r
              "h1": {"coord": {"x": -10,"y": 83}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 38}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 121,"y": 0}},\r
              "h1": {"coord": {"x": 76,"y": 1}},\r
              "h2": {"coord": {"x": 171,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 121,"y": 0}},\r
              "h1": {"coord": {"x": 71,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 171,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 0}},\r
              "h1": {"coord": {"x": 436,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 956,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 941,"y": 394}},\r
              "h1": {"coord": {"x": 941,"y": 331}},\r
              "h2": {"coord": {"x": 941,"y": 517}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x54": {\r
      "id": "glyph-0x54",\r
      "advanceWidth": 1104,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1064,"y": 1490}},\r
              "h1": {"coord": {"x": 1014,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1114,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1490}},\r
              "h1": {"coord": {"x": -10,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1215}},\r
              "h1": {"coord": {"x": -10,"y": 1215}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1212}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1210}},\r
              "h1": {"coord": {"x": 42,"y": 1210}},\r
              "h2": {"coord": {"x": 95,"y": 1210}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 210,"y": 1210}},\r
              "h1": {"coord": {"x": 160,"y": 1210}, "use": false},\r
              "h2": {"coord": {"x": 213,"y": 1210}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1215}},\r
              "h1": {"coord": {"x": 215,"y": 1212}},\r
              "h2": {"coord": {"x": 265,"y": 1215}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1315}},\r
              "h1": {"coord": {"x": 165,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 265,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 458,"y": 1315}},\r
              "h1": {"coord": {"x": 408,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 508,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 458,"y": 176}},\r
              "h1": {"coord": {"x": 408,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 508,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 359,"y": 176}},\r
              "h1": {"coord": {"x": 309,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 176}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 354,"y": 171}},\r
              "h1": {"coord": {"x": 354,"y": 174}},\r
              "h2": {"coord": {"x": 404,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 354,"y": 5}},\r
              "h1": {"coord": {"x": 304,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 354,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 359,"y": 0}},\r
              "h1": {"coord": {"x": 356,"y": 0}},\r
              "h2": {"coord": {"x": 409,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 723,"y": 0}},\r
              "h1": {"coord": {"x": 673,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 728,"y": 5}},\r
              "h1": {"coord": {"x": 728,"y": 2}},\r
              "h2": {"coord": {"x": 778,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 728,"y": 171}},\r
              "h1": {"coord": {"x": 678,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 723,"y": 176}},\r
              "h1": {"coord": {"x": 726,"y": 176}},\r
              "h2": {"coord": {"x": 773,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 176}},\r
              "h1": {"coord": {"x": 584,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 1315}},\r
              "h1": {"coord": {"x": 584,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 888,"y": 1315}},\r
              "h1": {"coord": {"x": 838,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 938,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 888,"y": 1215}},\r
              "h1": {"coord": {"x": 838,"y": 1215}, "use": false},\r
              "h2": {"coord": {"x": 888,"y": 1212}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 893,"y": 1210}},\r
              "h1": {"coord": {"x": 890,"y": 1210}},\r
              "h2": {"coord": {"x": 943,"y": 1210}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 1210}},\r
              "h1": {"coord": {"x": 1008,"y": 1210}, "use": false},\r
              "h2": {"coord": {"x": 1061,"y": 1210}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 1215}},\r
              "h1": {"coord": {"x": 1063,"y": 1212}},\r
              "h2": {"coord": {"x": 1113,"y": 1215}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x55": {\r
      "id": "glyph-0x55",\r
      "advanceWidth": 1301,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1256,"y": 1490}},\r
              "h1": {"coord": {"x": 1259,"y": 1490}},\r
              "h2": {"coord": {"x": 1306,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 1490}},\r
              "h1": {"coord": {"x": 842,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 889,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1485}},\r
              "h1": {"coord": {"x": 887,"y": 1488}},\r
              "h2": {"coord": {"x": 937,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1319}},\r
              "h1": {"coord": {"x": 837,"y": 1319}, "use": false},\r
              "h2": {"coord": {"x": 887,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 1314}},\r
              "h1": {"coord": {"x": 889,"y": 1314}},\r
              "h2": {"coord": {"x": 942,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 984,"y": 1314}},\r
              "h1": {"coord": {"x": 934,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1034,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 984,"y": 506}},\r
              "h1": {"coord": {"x": 934,"y": 506}, "use": false},\r
              "h2": {"coord": {"x": 984,"y": 379}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 907,"y": 237}},\r
              "h1": {"coord": {"x": 959,"y": 291}},\r
              "h2": {"coord": {"x": 854,"y": 182}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": 155}},\r
              "h1": {"coord": {"x": 768,"y": 155}},\r
              "h2": {"coord": {"x": 518,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 235}},\r
              "h1": {"coord": {"x": 434,"y": 181}},\r
              "h2": {"coord": {"x": 336,"y": 288}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 506}},\r
              "h1": {"coord": {"x": 312,"y": 377}},\r
              "h2": {"coord": {"x": 362,"y": 506}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 1314}},\r
              "h1": {"coord": {"x": 262,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 409,"y": 1314}},\r
              "h1": {"coord": {"x": 359,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 412,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 414,"y": 1319}},\r
              "h1": {"coord": {"x": 414,"y": 1316}},\r
              "h2": {"coord": {"x": 464,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 414,"y": 1485}},\r
              "h1": {"coord": {"x": 364,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 414,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 409,"y": 1490}},\r
              "h1": {"coord": {"x": 412,"y": 1490}},\r
              "h2": {"coord": {"x": 459,"y": 1490}, "use": false}\r
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
              "p": {"coord": {"x": 40,"y": 1319}},\r
              "h1": {"coord": {"x": -10,"y": 1319}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1314}},\r
              "h1": {"coord": {"x": 42,"y": 1314}},\r
              "h2": {"coord": {"x": 95,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 138,"y": 1314}},\r
              "h1": {"coord": {"x": 88,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 188,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 138,"y": 506}},\r
              "h1": {"coord": {"x": 88,"y": 506}, "use": false},\r
              "h2": {"coord": {"x": 138,"y": 332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 256,"y": 118}},\r
              "h1": {"coord": {"x": 176,"y": 205}},\r
              "h2": {"coord": {"x": 340,"y": 25}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": -20}},\r
              "h1": {"coord": {"x": 466,"y": -20}},\r
              "h2": {"coord": {"x": 728,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 864,"y": 12}},\r
              "h1": {"coord": {"x": 800,"y": -9}},\r
              "h2": {"coord": {"x": 931,"y": 35}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1033,"y": 116}},\r
              "h1": {"coord": {"x": 988,"y": 69}},\r
              "h2": {"coord": {"x": 1117,"y": 205}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1159,"y": 506}},\r
              "h1": {"coord": {"x": 1159,"y": 332}},\r
              "h2": {"coord": {"x": 1209,"y": 506}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1159,"y": 1314}},\r
              "h1": {"coord": {"x": 1109,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1209,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1256,"y": 1314}},\r
              "h1": {"coord": {"x": 1206,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1259,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1261,"y": 1319}},\r
              "h1": {"coord": {"x": 1261,"y": 1316}},\r
              "h2": {"coord": {"x": 1311,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1261,"y": 1485}},\r
              "h1": {"coord": {"x": 1211,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1261,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x56": {\r
      "id": "glyph-0x56",\r
      "advanceWidth": 1276,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1490}},\r
              "h1": {"coord": {"x": 1234,"y": 1490}},\r
              "h2": {"coord": {"x": 1281,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1018,"y": 1490}},\r
              "h1": {"coord": {"x": 968,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1016,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1013,"y": 1486}},\r
              "h1": {"coord": {"x": 1013,"y": 1488}},\r
              "h2": {"coord": {"x": 1063,"y": 1486}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 395}},\r
              "h1": {"coord": {"x": 600,"y": 395}, "use": false},\r
              "h2": {"coord": {"x": 700,"y": 395}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 1486}},\r
              "h1": {"coord": {"x": 213,"y": 1486}, "use": false},\r
              "h2": {"coord": {"x": 263,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 260,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
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
              "p": {"coord": {"x": 131,"y": 1316}},\r
              "h1": {"coord": {"x": 81,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 597,"y": 0}},\r
              "h1": {"coord": {"x": 547,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 647,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 705,"y": 0}},\r
              "h1": {"coord": {"x": 655,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1141,"y": 1316}},\r
              "h1": {"coord": {"x": 1091,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1191,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1316}},\r
              "h1": {"coord": {"x": 1181,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1234,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1321}},\r
              "h1": {"coord": {"x": 1236,"y": 1318}},\r
              "h2": {"coord": {"x": 1286,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1485}},\r
              "h1": {"coord": {"x": 1186,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1236,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x57": {\r
      "id": "glyph-0x57",\r
      "advanceWidth": 1549,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1504,"y": 1490}},\r
              "h1": {"coord": {"x": 1507,"y": 1490}},\r
              "h2": {"coord": {"x": 1554,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1490}},\r
              "h1": {"coord": {"x": 1241,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1288,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1286,"y": 1485}},\r
              "h1": {"coord": {"x": 1286,"y": 1488}},\r
              "h2": {"coord": {"x": 1336,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1067,"y": 385}},\r
              "h1": {"coord": {"x": 1017,"y": 385}, "use": false},\r
              "h2": {"coord": {"x": 1117,"y": 385}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 803,"y": 897}},\r
              "h1": {"coord": {"x": 753,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 853,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 741,"y": 897}},\r
              "h1": {"coord": {"x": 691,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 791,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 392}},\r
              "h1": {"coord": {"x": 434,"y": 392}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 1485}},\r
              "h1": {"coord": {"x": 213,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 263,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 261,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
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
              "p": {"coord": {"x": 123,"y": 1316}},\r
              "h1": {"coord": {"x": 73,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 173,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 366,"y": 0}},\r
              "h1": {"coord": {"x": 316,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 416,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 515,"y": 0}},\r
              "h1": {"coord": {"x": 465,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 565,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 771,"y": 523}},\r
              "h1": {"coord": {"x": 721,"y": 523}, "use": false},\r
              "h2": {"coord": {"x": 821,"y": 523}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 0}},\r
              "h1": {"coord": {"x": 984,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1084,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1183,"y": 0}},\r
              "h1": {"coord": {"x": 1133,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1233,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1428,"y": 1316}},\r
              "h1": {"coord": {"x": 1378,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1478,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1504,"y": 1316}},\r
              "h1": {"coord": {"x": 1454,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1507,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1509,"y": 1321}},\r
              "h1": {"coord": {"x": 1509,"y": 1318}},\r
              "h2": {"coord": {"x": 1559,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1509,"y": 1485}},\r
              "h1": {"coord": {"x": 1459,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1509,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x58": {\r
      "id": "glyph-0x58",\r
      "advanceWidth": 1180,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 19,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1135,"y": 174}},\r
              "h1": {"coord": {"x": 1138,"y": 174}},\r
              "h2": {"coord": {"x": 1185,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 174}},\r
              "h1": {"coord": {"x": 972,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1072,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 702,"y": 759}},\r
              "h1": {"coord": {"x": 652,"y": 759}, "use": false},\r
              "h2": {"coord": {"x": 752,"y": 759}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1010,"y": 1316}},\r
              "h1": {"coord": {"x": 960,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1060,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 1316}},\r
              "h1": {"coord": {"x": 1065,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1118,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 1321}},\r
              "h1": {"coord": {"x": 1120,"y": 1318}},\r
              "h2": {"coord": {"x": 1170,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 1485}},\r
              "h1": {"coord": {"x": 1070,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1120,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 1490}},\r
              "h1": {"coord": {"x": 1118,"y": 1490}},\r
              "h2": {"coord": {"x": 1165,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 902,"y": 1490}},\r
              "h1": {"coord": {"x": 852,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 900,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 898,"y": 1488}},\r
              "h1": {"coord": {"x": 848,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 948,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 897,"y": 1487}},\r
              "h1": {"coord": {"x": 847,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 947,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 945}},\r
              "h1": {"coord": {"x": 550,"y": 945}, "use": false},\r
              "h2": {"coord": {"x": 650,"y": 945}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 303,"y": 1487}},\r
              "h1": {"coord": {"x": 253,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 353,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 302,"y": 1488}},\r
              "h1": {"coord": {"x": 252,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 352,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 298,"y": 1490}},\r
              "h1": {"coord": {"x": 300,"y": 1490}},\r
              "h2": {"coord": {"x": 348,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 85,"y": 1490}},\r
              "h1": {"coord": {"x": 35,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 82,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 80,"y": 1485}},\r
              "h1": {"coord": {"x": 80,"y": 1488}},\r
              "h2": {"coord": {"x": 130,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 80,"y": 1321}},\r
              "h1": {"coord": {"x": 30,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 80,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 85,"y": 1316}},\r
              "h1": {"coord": {"x": 82,"y": 1316}},\r
              "h2": {"coord": {"x": 135,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 190,"y": 1316}},\r
              "h1": {"coord": {"x": 140,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 240,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 777}},\r
              "h1": {"coord": {"x": 438,"y": 777}, "use": false},\r
              "h2": {"coord": {"x": 538,"y": 777}, "use": false}\r
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
              "p": {"coord": {"x": 258,"y": 0}},\r
              "h1": {"coord": {"x": 208,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 260,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 2}},\r
              "h1": {"coord": {"x": 212,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 3}},\r
              "h1": {"coord": {"x": 213,"y": 3}, "use": false},\r
              "h2": {"coord": {"x": 313,"y": 3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 593}},\r
              "h1": {"coord": {"x": 540,"y": 593}, "use": false},\r
              "h2": {"coord": {"x": 640,"y": 593}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 917,"y": 3}},\r
              "h1": {"coord": {"x": 867,"y": 3}, "use": false},\r
              "h2": {"coord": {"x": 967,"y": 3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 918,"y": 2}},\r
              "h1": {"coord": {"x": 868,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 968,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 0}},\r
              "h1": {"coord": {"x": 920,"y": 0}},\r
              "h2": {"coord": {"x": 972,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1135,"y": 0}},\r
              "h1": {"coord": {"x": 1085,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1138,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1140,"y": 5}},\r
              "h1": {"coord": {"x": 1140,"y": 2}},\r
              "h2": {"coord": {"x": 1190,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1140,"y": 169}},\r
              "h1": {"coord": {"x": 1090,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1140,"y": 172}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x59": {\r
      "id": "glyph-0x59",\r
      "advanceWidth": 1276,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 14,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1490}},\r
              "h1": {"coord": {"x": 1234,"y": 1490}},\r
              "h2": {"coord": {"x": 1281,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1018,"y": 1490}},\r
              "h1": {"coord": {"x": 968,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1016,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1014,"y": 1488}},\r
              "h1": {"coord": {"x": 964,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 1064,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1014,"y": 1487}},\r
              "h1": {"coord": {"x": 964,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 1064,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 891}},\r
              "h1": {"coord": {"x": 604,"y": 891}, "use": false},\r
              "h2": {"coord": {"x": 704,"y": 891}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 1488}},\r
              "h1": {"coord": {"x": 212,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 1488}},\r
              "h1": {"coord": {"x": 212,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 260,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
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
              "p": {"coord": {"x": 145,"y": 1316}},\r
              "h1": {"coord": {"x": 95,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 657}},\r
              "h1": {"coord": {"x": 522,"y": 657}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 657}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 171}},\r
              "h1": {"coord": {"x": 522,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 171}},\r
              "h1": {"coord": {"x": 443,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 490,"y": 171}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 166}},\r
              "h1": {"coord": {"x": 488,"y": 169}},\r
              "h2": {"coord": {"x": 538,"y": 166}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 2}},\r
              "h1": {"coord": {"x": 438,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 488,"y": -1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": -3}},\r
              "h1": {"coord": {"x": 490,"y": -3}},\r
              "h2": {"coord": {"x": 543,"y": -3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": -3}},\r
              "h1": {"coord": {"x": 769,"y": -3}, "use": false},\r
              "h2": {"coord": {"x": 822,"y": -3}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 2}},\r
              "h1": {"coord": {"x": 824,"y": -1}},\r
              "h2": {"coord": {"x": 874,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 166}},\r
              "h1": {"coord": {"x": 774,"y": 166}, "use": false},\r
              "h2": {"coord": {"x": 824,"y": 169}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 171}},\r
              "h1": {"coord": {"x": 822,"y": 171}},\r
              "h2": {"coord": {"x": 869,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 745,"y": 171}},\r
              "h1": {"coord": {"x": 695,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 795,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 745,"y": 687}},\r
              "h1": {"coord": {"x": 695,"y": 687}, "use": false},\r
              "h2": {"coord": {"x": 795,"y": 687}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1124,"y": 1316}},\r
              "h1": {"coord": {"x": 1074,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1174,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1316}},\r
              "h1": {"coord": {"x": 1181,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1234,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1321}},\r
              "h1": {"coord": {"x": 1236,"y": 1318}},\r
              "h2": {"coord": {"x": 1286,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1485}},\r
              "h1": {"coord": {"x": 1186,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1236,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x5A": {\r
      "id": "glyph-0x5A",\r
      "advanceWidth": 1146,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1101,"y": 242}},\r
              "h1": {"coord": {"x": 1104,"y": 242}},\r
              "h2": {"coord": {"x": 1151,"y": 242}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 933,"y": 242}},\r
              "h1": {"coord": {"x": 883,"y": 242}, "use": false},\r
              "h2": {"coord": {"x": 930,"y": 242}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 928,"y": 237}},\r
              "h1": {"coord": {"x": 928,"y": 240}},\r
              "h2": {"coord": {"x": 978,"y": 237}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 928,"y": 175}},\r
              "h1": {"coord": {"x": 878,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 978,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 334,"y": 175}},\r
              "h1": {"coord": {"x": 284,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1086,"y": 1460}},\r
              "h1": {"coord": {"x": 1036,"y": 1460}, "use": false},\r
              "h2": {"coord": {"x": 1136,"y": 1460}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1086,"y": 1490}},\r
              "h1": {"coord": {"x": 1036,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1136,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 86,"y": 1490}},\r
              "h1": {"coord": {"x": 36,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 83,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 81,"y": 1485}},\r
              "h1": {"coord": {"x": 81,"y": 1488}},\r
              "h2": {"coord": {"x": 131,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 81,"y": 1253}},\r
              "h1": {"coord": {"x": 31,"y": 1253}, "use": false},\r
              "h2": {"coord": {"x": 81,"y": 1250}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 86,"y": 1248}},\r
              "h1": {"coord": {"x": 83,"y": 1248}},\r
              "h2": {"coord": {"x": 136,"y": 1248}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 255,"y": 1248}},\r
              "h1": {"coord": {"x": 205,"y": 1248}, "use": false},\r
              "h2": {"coord": {"x": 258,"y": 1248}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 1253}},\r
              "h1": {"coord": {"x": 260,"y": 1250}},\r
              "h2": {"coord": {"x": 310,"y": 1253}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 1315}},\r
              "h1": {"coord": {"x": 210,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 310,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 793,"y": 1315}},\r
              "h1": {"coord": {"x": 743,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 843,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 30}},\r
              "h1": {"coord": {"x": -9,"y": 30}, "use": false},\r
              "h2": {"coord": {"x": 91,"y": 30}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1101,"y": 0}},\r
              "h1": {"coord": {"x": 1051,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1104,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1106,"y": 5}},\r
              "h1": {"coord": {"x": 1106,"y": 2}},\r
              "h2": {"coord": {"x": 1156,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1106,"y": 237}},\r
              "h1": {"coord": {"x": 1056,"y": 237}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 240}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x61": {\r
      "id": "glyph-0x61",\r
      "advanceWidth": 949,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 165}},\r
              "h1": {"coord": {"x": 854,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 954,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 165}},\r
              "h1": {"coord": {"x": 769,"y": 165}},\r
              "h2": {"coord": {"x": 869,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 820,"y": 605}},\r
              "h1": {"coord": {"x": 820,"y": 571}},\r
              "h2": {"coord": {"x": 820,"y": 755}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 356,"y": 1040}},\r
              "h1": {"coord": {"x": 858,"y": 1040}},\r
              "h2": {"coord": {"x": 232,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 67,"y": 992}},\r
              "h1": {"coord": {"x": 100,"y": 1005}},\r
              "h2": {"coord": {"x": 50,"y": 985}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 51,"y": 965}},\r
              "h1": {"coord": {"x": 48,"y": 979}},\r
              "h2": {"coord": {"x": 101,"y": 965}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 134,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 134,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 88,"y": 825}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 109,"y": 826}},\r
              "h1": {"coord": {"x": 96,"y": 823}},\r
              "h2": {"coord": {"x": 144,"y": 834}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 356,"y": 879}},\r
              "h1": {"coord": {"x": 240,"y": 879}},\r
              "h2": {"coord": {"x": 645,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 647,"y": 651}},\r
              "h1": {"coord": {"x": 647,"y": 827}},\r
              "h2": {"coord": {"x": 647,"y": 645}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 647,"y": 589}},\r
              "h1": {"coord": {"x": 647,"y": 619}},\r
              "h2": {"coord": {"x": 585,"y": 639}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 415,"y": 671}},\r
              "h1": {"coord": {"x": 505,"y": 671}},\r
              "h2": {"coord": {"x": 197,"y": 671}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 292}},\r
              "h1": {"coord": {"x": 40,"y": 512}},\r
              "h2": {"coord": {"x": 40,"y": 184}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -20}},\r
              "h1": {"coord": {"x": 125,"y": -20}},\r
              "h2": {"coord": {"x": 522,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 669,"y": 37}},\r
              "h1": {"coord": {"x": 606,"y": 7}},\r
              "h2": {"coord": {"x": 684,"y": 15}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 737,"y": 1}},\r
              "h1": {"coord": {"x": 709,"y": 1}},\r
              "h2": {"coord": {"x": 787,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 1}},\r
              "h1": {"coord": {"x": 854,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 907,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 909,"y": 6}},\r
              "h1": {"coord": {"x": 909,"y": 3}},\r
              "h2": {"coord": {"x": 959,"y": 6}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 909,"y": 160}},\r
              "h1": {"coord": {"x": 859,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 909,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 165}},\r
              "h1": {"coord": {"x": 907,"y": 165}},\r
              "h2": {"coord": {"x": 954,"y": 165}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 212}},\r
              "h1": {"coord": {"x": 604,"y": 212}, "use": false},\r
              "h2": {"coord": {"x": 654,"y": 164}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 117}},\r
              "h1": {"coord": {"x": 593,"y": 117}},\r
              "h2": {"coord": {"x": 355,"y": 117}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 203,"y": 293}},\r
              "h1": {"coord": {"x": 203,"y": 116}},\r
              "h2": {"coord": {"x": 203,"y": 437}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 415,"y": 534}},\r
              "h1": {"coord": {"x": 287,"y": 534}},\r
              "h2": {"coord": {"x": 543,"y": 534}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 340}},\r
              "h1": {"coord": {"x": 654,"y": 458}},\r
              "h2": {"coord": {"x": 654,"y": 271}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x62": {\r
      "id": "glyph-0x62",\r
      "advanceWidth": 1085,\r
      "usedIn": [\r
        "glyph-0x64"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": -5,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 0}},\r
              "h1": {"coord": {"x": 162,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 82}},\r
              "h1": {"coord": {"x": 293,"y": 37}},\r
              "h2": {"coord": {"x": 343,"y": 82}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 93}},\r
              "h1": {"coord": {"x": 243,"y": 93}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 25}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": -20}},\r
              "h1": {"coord": {"x": 451,"y": -20}},\r
              "h2": {"coord": {"x": 893,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 384}},\r
              "h1": {"coord": {"x": 1045,"y": 159}},\r
              "h2": {"coord": {"x": 1095,"y": 384}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 589}},\r
              "h1": {"coord": {"x": 995,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1095,"y": 589}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 589}},\r
              "h1": {"coord": {"x": 995,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1044,"y": 851}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 593,"y": 1040}},\r
              "h1": {"coord": {"x": 840,"y": 1040}},\r
              "h2": {"coord": {"x": 477,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 915}},\r
              "h1": {"coord": {"x": 373,"y": 992}},\r
              "h2": {"coord": {"x": 344,"y": 915}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1408}},\r
              "h1": {"coord": {"x": 243,"y": 1408}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1490}},\r
              "h1": {"coord": {"x": 257,"y": 1490}},\r
              "h2": {"coord": {"x": 262,"y": 1490}, "use": false}\r
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
              "p": {"coord": {"x": 40,"y": 1332}},\r
              "h1": {"coord": {"x": -10,"y": 1332}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1329}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1327}},\r
              "h1": {"coord": {"x": 42,"y": 1327}},\r
              "h2": {"coord": {"x": 95,"y": 1327}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1327}},\r
              "h1": {"coord": {"x": 80,"y": 1327}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1327}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 164}},\r
              "h1": {"coord": {"x": 80,"y": 164}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 164}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 164}},\r
              "h1": {"coord": {"x": -5,"y": 164}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 164}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 159}},\r
              "h1": {"coord": {"x": 40,"y": 162}},\r
              "h2": {"coord": {"x": 90,"y": 159}, "use": false}\r
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
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 605}},\r
              "h1": {"coord": {"x": 243,"y": 605}, "use": false},\r
              "h2": {"coord": {"x": 299,"y": 776}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 593,"y": 896}},\r
              "h1": {"coord": {"x": 439,"y": 896}},\r
              "h2": {"coord": {"x": 750,"y": 896}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 576}},\r
              "h1": {"coord": {"x": 880,"y": 766}},\r
              "h2": {"coord": {"x": 930,"y": 576}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 396}},\r
              "h1": {"coord": {"x": 830,"y": 396}, "use": false},\r
              "h2": {"coord": {"x": 880,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 133}},\r
              "h1": {"coord": {"x": 663,"y": 133}},\r
              "h2": {"coord": {"x": 484,"y": 133}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 403}},\r
              "h1": {"coord": {"x": 300,"y": 179}},\r
              "h2": {"coord": {"x": 343,"y": 403}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x70": {\r
      "id": "glyph-0x70",\r
      "advanceWidth": 1090,\r
      "usedIn": [\r
        "glyph-0x71"\r
      ],\r
      "contextCharacters": "gpgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1016}},\r
              "h1": {"coord": {"x": -10,"y": 1016}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1016}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 863}},\r
              "h1": {"coord": {"x": -10,"y": 863}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 858}},\r
              "h1": {"coord": {"x": 42,"y": 858}},\r
              "h2": {"coord": {"x": 95,"y": 858}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 858}},\r
              "h1": {"coord": {"x": 80,"y": 858}},\r
              "h2": {"coord": {"x": 130,"y": 507}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": -265}},\r
              "h1": {"coord": {"x": 80,"y": -265}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": -265}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": -265}},\r
              "h1": {"coord": {"x": -4,"y": -265}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": -270}},\r
              "h1": {"coord": {"x": 41,"y": -267}},\r
              "h2": {"coord": {"x": 91,"y": -270}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": -424}},\r
              "h1": {"coord": {"x": -9,"y": -424}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": -427}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": -429}},\r
              "h1": {"coord": {"x": 43,"y": -429}},\r
              "h2": {"coord": {"x": 96,"y": -429}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": -429}},\r
              "h1": {"coord": {"x": 162,"y": -429}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": -429}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": -347}},\r
              "h1": {"coord": {"x": 294,"y": -392}},\r
              "h2": {"coord": {"x": 344,"y": -347}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 99}},\r
              "h1": {"coord": {"x": 244,"y": 99}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 28}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 595,"y": -19}},\r
              "h1": {"coord": {"x": 453,"y": -19}},\r
              "h2": {"coord": {"x": 898,"y": -19}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1050,"y": 385}},\r
              "h1": {"coord": {"x": 1050,"y": 160}},\r
              "h2": {"coord": {"x": 1100,"y": 385}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1050,"y": 589}},\r
              "h1": {"coord": {"x": 1000,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1049,"y": 851}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 598,"y": 1041}},\r
              "h1": {"coord": {"x": 845,"y": 1041}},\r
              "h2": {"coord": {"x": 480,"y": 1041}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 910}},\r
              "h1": {"coord": {"x": 372,"y": 990}},\r
              "h2": {"coord": {"x": 343,"y": 910}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 940}},\r
              "h1": {"coord": {"x": 243,"y": 940}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 985}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1021}},\r
              "h1": {"coord": {"x": 257,"y": 1021}},\r
              "h2": {"coord": {"x": 262,"y": 1021}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1021}},\r
              "h1": {"coord": {"x": -5,"y": 1021}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1021}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1016}},\r
              "h1": {"coord": {"x": 40,"y": 1019}},\r
              "h2": {"coord": {"x": 90,"y": 1016}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -7,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 298,"y": 417}},\r
              "h1": {"coord": {"x": 298,"y": 182}},\r
              "h2": {"coord": {"x": 298,"y": 422}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 298,"y": 595}},\r
              "h1": {"coord": {"x": 298,"y": 550}},\r
              "h2": {"coord": {"x": 298,"y": 772}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 598,"y": 897}},\r
              "h1": {"coord": {"x": 441,"y": 897}},\r
              "h2": {"coord": {"x": 755,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 577}},\r
              "h1": {"coord": {"x": 885,"y": 767}},\r
              "h2": {"coord": {"x": 935,"y": 577}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 397}},\r
              "h1": {"coord": {"x": 835,"y": 397}, "use": false},\r
              "h2": {"coord": {"x": 885,"y": 156}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 595,"y": 134}},\r
              "h1": {"coord": {"x": 668,"y": 134}},\r
              "h2": {"coord": {"x": 487,"y": 134}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x64": {\r
      "id": "glyph-0x64",\r
      "advanceWidth": 1085,\r
      "shapes": [\r
        {\r
          "link": "glyph-0x62",\r
          "isFlippedEW": true\r
        }\r
      ]\r
    },\r
    "glyph-0x63": {\r
      "id": "glyph-0x63",\r
      "advanceWidth": 898,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 849,"y": 272}},\r
              "h1": {"coord": {"x": 854,"y": 270}},\r
              "h2": {"coord": {"x": 824,"y": 282}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 720,"y": 331}},\r
              "h1": {"coord": {"x": 753,"y": 316}},\r
              "h2": {"coord": {"x": 717,"y": 332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 327}},\r
              "h1": {"coord": {"x": 714,"y": 330}},\r
              "h2": {"coord": {"x": 714,"y": 173}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 585,"y": 142}},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 592}},\r
              "h1": {"coord": {"x": 154,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 592}},\r
              "h1": {"coord": {"x": 154,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 205,"y": 767}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 324,"y": 897}},\r
              "h2": {"coord": {"x": 529,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 429,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 429,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 590,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 739}},\r
              "h1": {"coord": {"x": 670,"y": 847}},\r
              "h2": {"coord": {"x": 698,"y": 729}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 736}},\r
              "h1": {"coord": {"x": 705,"y": 733}},\r
              "h2": {"coord": {"x": 742,"y": 750}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 837,"y": 799}},\r
              "h1": {"coord": {"x": 801,"y": 783}},\r
              "h2": {"coord": {"x": 840,"y": 800}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 842,"y": 808}},\r
              "h1": {"coord": {"x": 844,"y": 801}},\r
              "h2": {"coord": {"x": 801,"y": 949}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 670,"y": 1040}},\r
              "h2": {"coord": {"x": 529,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 429,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 429,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 233,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 590}},\r
              "h1": {"coord": {"x": 40,"y": 838}},\r
              "h2": {"coord": {"x": 90,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 590}},\r
              "h1": {"coord": {"x": -10,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 169,"y": -20}},\r
              "h2": {"coord": {"x": 785,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 262}},\r
              "h1": {"coord": {"x": 858,"y": 205}},\r
              "h2": {"coord": {"x": 858,"y": 267}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x71": {\r
      "id": "glyph-0x71",\r
      "advanceWidth": 1090,\r
      "contextCharacters": "gqpgy",\r
      "shapes": [\r
        {\r
          "link": "glyph-0x70",\r
          "isFlippedEW": true\r
        }\r
      ]\r
    },\r
    "glyph-0x6F": {\r
      "id": "glyph-0x6F",\r
      "advanceWidth": 959,\r
      "contextCharacters": "bgo",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 592}},\r
              "h1": {"coord": {"x": 869,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 918,"y": 839}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480,"y": 1040}},\r
              "h1": {"coord": {"x": 725,"y": 1040}},\r
              "h2": {"coord": {"x": 235,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 592}},\r
              "h1": {"coord": {"x": 42,"y": 839}},\r
              "h2": {"coord": {"x": 91,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": -10,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 170,"y": -20}},\r
              "h2": {"coord": {"x": 530,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 790,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 390}},\r
              "h1": {"coord": {"x": 918,"y": 175}},\r
              "h2": {"coord": {"x": 969,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 390}},\r
              "h1": {"coord": {"x": 869,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 592}},\r
              "h1": {"coord": {"x": 869,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 592}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 480,"y": 142}},\r
              "h1": {"coord": {"x": 587,"y": 142}},\r
              "h2": {"coord": {"x": 430,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 590}},\r
              "h1": {"coord": {"x": 154,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 205,"y": 590}},\r
              "h1": {"coord": {"x": 155,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 205,"y": 766}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480,"y": 897}},\r
              "h1": {"coord": {"x": 324,"y": 897}},\r
              "h2": {"coord": {"x": 636,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 590}},\r
              "h1": {"coord": {"x": 755,"y": 766}},\r
              "h2": {"coord": {"x": 805,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 590}},\r
              "h1": {"coord": {"x": 705,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 392}},\r
              "h1": {"coord": {"x": 705,"y": 392}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 158}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x65": {\r
      "id": "glyph-0x65",\r
      "advanceWidth": 932,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -1,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 429,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 530,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 714,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 877,"y": 155}},\r
              "h1": {"coord": {"x": 843,"y": 106}},\r
              "h2": {"coord": {"x": 886,"y": 168}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 734,"y": 244}},\r
              "h1": {"coord": {"x": 745,"y": 255}},\r
              "h2": {"coord": {"x": 680,"y": 187}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": 142}},\r
              "h1": {"coord": {"x": 564,"y": 142}},\r
              "h2": {"coord": {"x": 530,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 462}},\r
              "h1": {"coord": {"x": 154,"y": 462}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 462}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 489}},\r
              "h1": {"coord": {"x": 830,"y": 489}, "use": false},\r
              "h2": {"coord": {"x": 887,"y": 489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 502}},\r
              "h1": {"coord": {"x": 892,"y": 495}},\r
              "h2": {"coord": {"x": 942,"y": 502}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 573}},\r
              "h1": {"coord": {"x": 841,"y": 573}, "use": false},\r
              "h2": {"coord": {"x": 941,"y": 573}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 573}},\r
              "h1": {"coord": {"x": 841,"y": 573}, "use": false},\r
              "h2": {"coord": {"x": 886,"y": 887}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 482,"y": 1040}},\r
              "h1": {"coord": {"x": 724,"y": 1040}},\r
              "h2": {"coord": {"x": 532,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 1040}},\r
              "h1": {"coord": {"x": 431,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 531,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 1040}},\r
              "h1": {"coord": {"x": 431,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 236,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": 41,"y": 839}},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": -10,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 169,"y": -20}},\r
              "h2": {"coord": {"x": 529,"y": -20}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 481,"y": 897}},\r
              "h1": {"coord": {"x": 335,"y": 897}},\r
              "h2": {"coord": {"x": 531,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 897}},\r
              "h1": {"coord": {"x": 431,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 531,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 482,"y": 897}},\r
              "h1": {"coord": {"x": 432,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 624,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 636}},\r
              "h1": {"coord": {"x": 711,"y": 788}},\r
              "h2": {"coord": {"x": 775,"y": 636}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 207,"y": 622}},\r
              "h1": {"coord": {"x": 157,"y": 622}, "use": false},\r
              "h2": {"coord": {"x": 221,"y": 781}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x66": {\r
      "id": "glyph-0x66",\r
      "advanceWidth": 771,\r
      "usedIn": [\r
        "liga-f-i",\r
        "liga-f-f-i",\r
        "liga-f-f",\r
        "liga-f-f",\r
        "liga-f-l"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 855}},\r
              "h1": {"coord": {"x": 246,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 855}},\r
              "h1": {"coord": {"x": 451,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 504,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 860}},\r
              "h1": {"coord": {"x": 506,"y": 857}},\r
              "h2": {"coord": {"x": 556,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 1015}},\r
              "h1": {"coord": {"x": 456,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 506,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 1020}},\r
              "h1": {"coord": {"x": 504,"y": 1020}},\r
              "h2": {"coord": {"x": 551,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1020}},\r
              "h1": {"coord": {"x": 246,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1111}},\r
              "h1": {"coord": {"x": 246,"y": 1111}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1287}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 514,"y": 1339}},\r
              "h1": {"coord": {"x": 368,"y": 1339}},\r
              "h2": {"coord": {"x": 568,"y": 1339}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 671,"y": 1327}},\r
              "h1": {"coord": {"x": 627,"y": 1333}},\r
              "h2": {"coord": {"x": 684,"y": 1325}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 692,"y": 1326}},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 646,"y": 1343}, "use": false},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 646,"y": 1343}, "use": false},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 730,"y": 1466}},\r
              "h1": {"coord": {"x": 680,"y": 1466}, "use": false},\r
              "h2": {"coord": {"x": 733,"y": 1480}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 713,"y": 1493}},\r
              "h1": {"coord": {"x": 731,"y": 1489}},\r
              "h2": {"coord": {"x": 646,"y": 1508}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 514,"y": 1510}},\r
              "h1": {"coord": {"x": 541,"y": 1510}},\r
              "h2": {"coord": {"x": 136,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1076}},\r
              "h1": {"coord": {"x": 131,"y": 1226}},\r
              "h2": {"coord": {"x": 181,"y": 1076}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1020}},\r
              "h1": {"coord": {"x": 81,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 855}},\r
              "h1": {"coord": {"x": 81,"y": 855}},\r
              "h2": {"coord": {"x": 181,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 165}},\r
              "h1": {"coord": {"x": 81,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
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
    "glyph-0x67": {\r
      "id": "glyph-0x67",\r
      "advanceWidth": 1048,\r
      "contextCharacters": "bgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 1020}},\r
              "h1": {"coord": {"x": 953,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 1053,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 1020}},\r
              "h1": {"coord": {"x": 822,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 849,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 991}},\r
              "h1": {"coord": {"x": 828,"y": 1009}},\r
              "h2": {"coord": {"x": 864,"y": 991}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 781,"y": 947}},\r
              "h1": {"coord": {"x": 731,"y": 947}, "use": false},\r
              "h2": {"coord": {"x": 704,"y": 1005}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1040}},\r
              "h1": {"coord": {"x": 609,"y": 1040}},\r
              "h2": {"coord": {"x": 249,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 571}},\r
              "h1": {"coord": {"x": 40,"y": 830}},\r
              "h2": {"coord": {"x": 40,"y": 471}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 319}},\r
              "h1": {"coord": {"x": 71,"y": 385}},\r
              "h2": {"coord": {"x": 85,"y": 272}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 59,"y": 162}},\r
              "h1": {"coord": {"x": 59,"y": 211}},\r
              "h2": {"coord": {"x": 59,"y": 58}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 348,"y": -100}},\r
              "h1": {"coord": {"x": 118,"y": -100}},\r
              "h2": {"coord": {"x": 546,"y": -100}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 773,"y": -44}},\r
              "h1": {"coord": {"x": 661,"y": -44}},\r
              "h2": {"coord": {"x": 803,"y": -44}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 796,"y": -79}},\r
              "h1": {"coord": {"x": 796,"y": -58}},\r
              "h2": {"coord": {"x": 796,"y": -272}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -287}},\r
              "h1": {"coord": {"x": 708,"y": -287}},\r
              "h2": {"coord": {"x": 373,"y": -287}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 228,"y": -271}},\r
              "h1": {"coord": {"x": 267,"y": -278}},\r
              "h2": {"coord": {"x": 222,"y": -270}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": -279}},\r
              "h1": {"coord": {"x": 216,"y": -273}},\r
              "h2": {"coord": {"x": 264,"y": -279}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 176,"y": -418}},\r
              "h1": {"coord": {"x": 126,"y": -418}, "use": false},\r
              "h2": {"coord": {"x": 174,"y": -425}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": -433}},\r
              "h1": {"coord": {"x": 178,"y": -432}},\r
              "h2": {"coord": {"x": 249,"y": -447}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -450}},\r
              "h1": {"coord": {"x": 365,"y": -450}},\r
              "h2": {"coord": {"x": 907,"y": -450}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": -44}},\r
              "h1": {"coord": {"x": 956,"y": -259}},\r
              "h2": {"coord": {"x": 956,"y": 32}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 137}},\r
              "h1": {"coord": {"x": 947,"y": 137}},\r
              "h2": {"coord": {"x": 677,"y": 137}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 382,"y": 67}},\r
              "h1": {"coord": {"x": 545,"y": 67}},\r
              "h2": {"coord": {"x": 249,"y": 67}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 210,"y": 165}},\r
              "h1": {"coord": {"x": 210,"y": 103}},\r
              "h2": {"coord": {"x": 210,"y": 191}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 242,"y": 236}},\r
              "h1": {"coord": {"x": 223,"y": 217}},\r
              "h2": {"coord": {"x": 315,"y": 199}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 180}},\r
              "h1": {"coord": {"x": 405,"y": 180}},\r
              "h2": {"coord": {"x": 633,"y": 180}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 270}},\r
              "h1": {"coord": {"x": 743,"y": 211}},\r
              "h2": {"coord": {"x": 919,"y": 340}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 571}},\r
              "h1": {"coord": {"x": 969,"y": 444}},\r
              "h2": {"coord": {"x": 969,"y": 670}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 838}},\r
              "h1": {"coord": {"x": 939,"y": 762}},\r
              "h2": {"coord": {"x": 937,"y": 838}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 899,"y": 857}},\r
              "h1": {"coord": {"x": 849,"y": 857}, "use": false},\r
              "h2": {"coord": {"x": 949,"y": 857}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 857}},\r
              "h1": {"coord": {"x": 953,"y": 857}, "use": false},\r
              "h2": {"coord": {"x": 1006,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1008,"y": 862}},\r
              "h1": {"coord": {"x": 1008,"y": 859}},\r
              "h2": {"coord": {"x": 1058,"y": 862}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1008,"y": 1015}},\r
              "h1": {"coord": {"x": 958,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1008,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 1020}},\r
              "h1": {"coord": {"x": 1006,"y": 1020}},\r
              "h2": {"coord": {"x": 1053,"y": 1020}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 568}},\r
              "h1": {"coord": {"x": 209,"y": 343}},\r
              "h2": {"coord": {"x": 209,"y": 751}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 901}},\r
              "h1": {"coord": {"x": 342,"y": 901}},\r
              "h2": {"coord": {"x": 668,"y": 901}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 568}},\r
              "h1": {"coord": {"x": 800,"y": 751}},\r
              "h2": {"coord": {"x": 800,"y": 343}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 319}},\r
              "h1": {"coord": {"x": 594,"y": 319}},\r
              "h2": {"coord": {"x": 416,"y": 319}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x68": {\r
      "id": "glyph-0x68",\r
      "advanceWidth": 1088,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 14,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 165}},\r
              "h1": {"coord": {"x": 1046,"y": 165}},\r
              "h2": {"coord": {"x": 1093,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 165}},\r
              "h1": {"coord": {"x": 933,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 983,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 1039}},\r
              "h1": {"coord": {"x": 839,"y": 1039}},\r
              "h2": {"coord": {"x": 434,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 975}},\r
              "h1": {"coord": {"x": 355,"y": 1015}},\r
              "h2": {"coord": {"x": 345,"y": 975}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 1408}},\r
              "h1": {"coord": {"x": 245,"y": 1408}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 258,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
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
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
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
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 791}},\r
              "h1": {"coord": {"x": 245,"y": 791}, "use": false},\r
              "h2": {"coord": {"x": 366,"y": 875}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 894}},\r
              "h1": {"coord": {"x": 482,"y": 894}},\r
              "h2": {"coord": {"x": 574,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 816,"y": 876}},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 766,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 165}},\r
              "h1": {"coord": {"x": 766,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 165}},\r
              "h1": {"coord": {"x": 681,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 160}},\r
              "h1": {"coord": {"x": 726,"y": 163}},\r
              "h2": {"coord": {"x": 776,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 5}},\r
              "h1": {"coord": {"x": 676,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 0}},\r
              "h1": {"coord": {"x": 728,"y": 0}},\r
              "h2": {"coord": {"x": 781,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 0}},\r
              "h1": {"coord": {"x": 993,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1046,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 5}},\r
              "h1": {"coord": {"x": 1048,"y": 2}},\r
              "h2": {"coord": {"x": 1098,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 160}},\r
              "h1": {"coord": {"x": 998,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1048,"y": 163}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x69": {\r
      "id": "glyph-0x69",\r
      "advanceWidth": 412,\r
      "usedIn": [\r
        "liga-f-i"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 55,"y": 165}},\r
              "h1": {"coord": {"x": 5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 52,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 160}},\r
              "h1": {"coord": {"x": 50,"y": 163}},\r
              "h2": {"coord": {"x": 100,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 5}},\r
              "h1": {"coord": {"x": 0,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 50,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 55,"y": 0}},\r
              "h1": {"coord": {"x": 52,"y": 0}},\r
              "h2": {"coord": {"x": 105,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 367,"y": 0}},\r
              "h1": {"coord": {"x": 317,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 5}},\r
              "h1": {"coord": {"x": 372,"y": 2}},\r
              "h2": {"coord": {"x": 422,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 160}},\r
              "h1": {"coord": {"x": 322,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 367,"y": 165}},\r
              "h1": {"coord": {"x": 370,"y": 165}},\r
              "h2": {"coord": {"x": 417,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 938}},\r
              "h1": {"coord": {"x": 245,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1020}},\r
              "h1": {"coord": {"x": 259,"y": 1020}},\r
              "h2": {"coord": {"x": 263,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 92,"y": 1187}},\r
              "h1": {"coord": {"x": 69,"y": 1204}},\r
              "h2": {"coord": {"x": 112.10440353665814,"y": 1172.1402234729048}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 171,"y": 1164}},\r
              "h1": {"coord": {"x": 139,"y": 1164}},\r
              "h2": {"coord": {"x": 203,"y": 1164}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 1187}},\r
              "h1": {"coord": {"x": 230,"y": 1172}},\r
              "h2": {"coord": {"x": 273,"y": 1204}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 286,"y": 1261}},\r
              "h1": {"coord": {"x": 286,"y": 1230}},\r
              "h2": {"coord": {"x": 286,"y": 1325}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 171,"y": 1377}},\r
              "h1": {"coord": {"x": 234,"y": 1377}},\r
              "h2": {"coord": {"x": 108,"y": 1377}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 56,"y": 1261}},\r
              "h1": {"coord": {"x": 56,"y": 1325}},\r
              "h2": {"coord": {"x": 56,"y": 1230}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6A": {\r
      "id": "glyph-0x6A",\r
      "advanceWidth": 300,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 57,"y": 1187}},\r
              "h1": {"coord": {"x": 34,"y": 1204}},\r
              "h2": {"coord": {"x": 77.10440353665814,"y": 1172.1402234729048}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 136,"y": 1165}},\r
              "h1": {"coord": {"x": 104,"y": 1165}},\r
              "h2": {"coord": {"x": 168,"y": 1165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1187}},\r
              "h1": {"coord": {"x": 195,"y": 1172}},\r
              "h2": {"coord": {"x": 238,"y": 1204}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 251,"y": 1261}},\r
              "h1": {"coord": {"x": 251,"y": 1230}},\r
              "h2": {"coord": {"x": 251,"y": 1325}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 136,"y": 1378}},\r
              "h1": {"coord": {"x": 199,"y": 1378}},\r
              "h2": {"coord": {"x": 73,"y": 1378}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 21,"y": 1261}},\r
              "h1": {"coord": {"x": 21,"y": 1325}},\r
              "h2": {"coord": {"x": 21,"y": 1230}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": -322,"y": -419}},\r
              "h1": {"coord": {"x": -340,"y": -415}},\r
              "h2": {"coord": {"x": -255,"y": -434}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -123,"y": -436}},\r
              "h1": {"coord": {"x": -150,"y": -436}},\r
              "h2": {"coord": {"x": 255,"y": -436}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": -1}},\r
              "h1": {"coord": {"x": 260,"y": -151}},\r
              "h2": {"coord": {"x": 310,"y": -1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 938}},\r
              "h1": {"coord": {"x": 210,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 260,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 178,"y": 1020}},\r
              "h1": {"coord": {"x": 224,"y": 1020}},\r
              "h2": {"coord": {"x": 228,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 10,"y": 1020}},\r
              "h1": {"coord": {"x": -40,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 7,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 5,"y": 1015}},\r
              "h1": {"coord": {"x": 5,"y": 1018}},\r
              "h2": {"coord": {"x": 55,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 5,"y": 861}},\r
              "h1": {"coord": {"x": -45,"y": 861}, "use": false},\r
              "h2": {"coord": {"x": 5,"y": 858}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 10,"y": 856}},\r
              "h1": {"coord": {"x": 7,"y": 856}},\r
              "h2": {"coord": {"x": 60,"y": 856}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 95,"y": 856}},\r
              "h1": {"coord": {"x": 45,"y": 856}, "use": false},\r
              "h2": {"coord": {"x": 145,"y": 856}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 95,"y": -37}},\r
              "h1": {"coord": {"x": 45,"y": -37}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": -213}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -123,"y": -265}},\r
              "h1": {"coord": {"x": 23,"y": -265}},\r
              "h2": {"coord": {"x": -177,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -280,"y": -253}},\r
              "h1": {"coord": {"x": -236,"y": -259}},\r
              "h2": {"coord": {"x": -293,"y": -251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -301,"y": -252}},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -355,"y": -269}, "use": false},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -355,"y": -269}, "use": false},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -339,"y": -392}},\r
              "h1": {"coord": {"x": -389,"y": -392}, "use": false},\r
              "h2": {"coord": {"x": -342,"y": -406}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6B": {\r
      "id": "glyph-0x6B",\r
      "advanceWidth": 846,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
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
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 524}},\r
              "h1": {"coord": {"x": 246,"y": 524}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 524}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 540}},\r
              "h1": {"coord": {"x": 262,"y": 540}, "use": false},\r
              "h2": {"coord": {"x": 400,"y": 394}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 623,"y": 26}},\r
              "h1": {"coord": {"x": 613,"y": 40}},\r
              "h2": {"coord": {"x": 636,"y": 8}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 685,"y": 0}},\r
              "h1": {"coord": {"x": 662,"y": 0}},\r
              "h2": {"coord": {"x": 735,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 0}},\r
              "h1": {"coord": {"x": 751,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 804,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 5}},\r
              "h1": {"coord": {"x": 806,"y": 2}},\r
              "h2": {"coord": {"x": 856,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 160}},\r
              "h1": {"coord": {"x": 756,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 806,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 165}},\r
              "h1": {"coord": {"x": 804,"y": 165}},\r
              "h2": {"coord": {"x": 851,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 165}},\r
              "h1": {"coord": {"x": 676,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 776,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 650}},\r
              "h1": {"coord": {"x": 375,"y": 650}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 650}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 854}},\r
              "h1": {"coord": {"x": 584,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 854}},\r
              "h1": {"coord": {"x": 751,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 804,"y": 854}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 859}},\r
              "h1": {"coord": {"x": 806,"y": 856}},\r
              "h2": {"coord": {"x": 856,"y": 859}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 1014}},\r
              "h1": {"coord": {"x": 756,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 806,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 1019}},\r
              "h1": {"coord": {"x": 804,"y": 1019}},\r
              "h2": {"coord": {"x": 851,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 632,"y": 1019}},\r
              "h1": {"coord": {"x": 582,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 609,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 574,"y": 995}},\r
              "h1": {"coord": {"x": 589,"y": 1010}},\r
              "h2": {"coord": {"x": 562,"y": 983}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 724}},\r
              "h1": {"coord": {"x": 376,"y": 802}},\r
              "h2": {"coord": {"x": 346,"y": 724}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1407}},\r
              "h1": {"coord": {"x": 246,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 259,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
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
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6C": {\r
      "id": "glyph-0x6C",\r
      "advanceWidth": 426,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
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
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1407}},\r
              "h1": {"coord": {"x": 246,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 259,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
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
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6D": {\r
      "id": "glyph-0x6D",\r
      "advanceWidth": 1556,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 165}},\r
              "h1": {"coord": {"x": 1461,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1561,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 165}},\r
              "h1": {"coord": {"x": 1401,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1501,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 635}},\r
              "h1": {"coord": {"x": 1401,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1501,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 635}},\r
              "h1": {"coord": {"x": 1401,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1451,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 1039}},\r
              "h1": {"coord": {"x": 1337,"y": 1039}},\r
              "h2": {"coord": {"x": 920,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 773,"y": 960}},\r
              "h1": {"coord": {"x": 835,"y": 1009}},\r
              "h2": {"coord": {"x": 707,"y": 1010}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 1039}},\r
              "h1": {"coord": {"x": 616,"y": 1039}},\r
              "h2": {"coord": {"x": 403,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 275,"y": 989}},\r
              "h1": {"coord": {"x": 332,"y": 1021}},\r
              "h2": {"coord": {"x": 260,"y": 1007}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1019}},\r
              "h1": {"coord": {"x": 238,"y": 1019}},\r
              "h2": {"coord": {"x": 262,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1019}},\r
              "h1": {"coord": {"x": -5,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1014}},\r
              "h1": {"coord": {"x": 40,"y": 1017}},\r
              "h2": {"coord": {"x": 90,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 859}},\r
              "h1": {"coord": {"x": -10,"y": 859}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 856}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 854}},\r
              "h1": {"coord": {"x": 42,"y": 854}},\r
              "h2": {"coord": {"x": 95,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 854}},\r
              "h1": {"coord": {"x": 79,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 165}},\r
              "h1": {"coord": {"x": 79,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
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
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 165}},\r
              "h1": {"coord": {"x": 244,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 344,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 830}},\r
              "h1": {"coord": {"x": 244,"y": 830}, "use": false},\r
              "h2": {"coord": {"x": 363,"y": 881}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 894}},\r
              "h1": {"coord": {"x": 449,"y": 894}},\r
              "h2": {"coord": {"x": 531,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 635}},\r
              "h1": {"coord": {"x": 743,"y": 876}},\r
              "h2": {"coord": {"x": 793,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 635}},\r
              "h1": {"coord": {"x": 693,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 793,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 165}},\r
              "h1": {"coord": {"x": 693,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 793,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 165}},\r
              "h1": {"coord": {"x": 651,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 698,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 160}},\r
              "h1": {"coord": {"x": 696,"y": 163}},\r
              "h2": {"coord": {"x": 746,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 5}},\r
              "h1": {"coord": {"x": 646,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 696,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 0}},\r
              "h1": {"coord": {"x": 698,"y": 0}},\r
              "h2": {"coord": {"x": 751,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 0}},\r
              "h1": {"coord": {"x": 903,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 956,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 5}},\r
              "h1": {"coord": {"x": 958,"y": 2}},\r
              "h2": {"coord": {"x": 1008,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 160}},\r
              "h1": {"coord": {"x": 908,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 958,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 165}},\r
              "h1": {"coord": {"x": 956,"y": 165}},\r
              "h2": {"coord": {"x": 1003,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 165}},\r
              "h1": {"coord": {"x": 860,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 960,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 635}},\r
              "h1": {"coord": {"x": 860,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 960,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 635}},\r
              "h1": {"coord": {"x": 860,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 910,"y": 714}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 865,"y": 849}},\r
              "h1": {"coord": {"x": 896,"y": 787}},\r
              "h2": {"coord": {"x": 927,"y": 884}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 894}},\r
              "h1": {"coord": {"x": 996,"y": 894}},\r
              "h2": {"coord": {"x": 1072,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 635}},\r
              "h1": {"coord": {"x": 1284,"y": 876}},\r
              "h2": {"coord": {"x": 1334,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 635}},\r
              "h1": {"coord": {"x": 1234,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 165}},\r
              "h1": {"coord": {"x": 1234,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1199,"y": 165}},\r
              "h1": {"coord": {"x": 1149,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1196,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1194,"y": 160}},\r
              "h1": {"coord": {"x": 1194,"y": 163}},\r
              "h2": {"coord": {"x": 1244,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1194,"y": 5}},\r
              "h1": {"coord": {"x": 1144,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 1194,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1199,"y": 0}},\r
              "h1": {"coord": {"x": 1196,"y": 0}},\r
              "h2": {"coord": {"x": 1249,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 0}},\r
              "h1": {"coord": {"x": 1461,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1514,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1516,"y": 5}},\r
              "h1": {"coord": {"x": 1516,"y": 2}},\r
              "h2": {"coord": {"x": 1566,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1516,"y": 160}},\r
              "h1": {"coord": {"x": 1466,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1516,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 165}},\r
              "h1": {"coord": {"x": 1514,"y": 165}},\r
              "h2": {"coord": {"x": 1561,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6E": {\r
      "id": "glyph-0x6E",\r
      "advanceWidth": 1088,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 165}},\r
              "h1": {"coord": {"x": 1046,"y": 165}},\r
              "h2": {"coord": {"x": 1093,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 165}},\r
              "h1": {"coord": {"x": 933,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 983,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 1039}},\r
              "h1": {"coord": {"x": 839,"y": 1039}},\r
              "h2": {"coord": {"x": 429,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 287,"y": 969}},\r
              "h1": {"coord": {"x": 348,"y": 1012}},\r
              "h2": {"coord": {"x": 274,"y": 998}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1019}},\r
              "h1": {"coord": {"x": 246,"y": 1019}},\r
              "h2": {"coord": {"x": 262,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1019}},\r
              "h1": {"coord": {"x": -5,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1014}},\r
              "h1": {"coord": {"x": 40,"y": 1017}},\r
              "h2": {"coord": {"x": 90,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 859}},\r
              "h1": {"coord": {"x": -10,"y": 859}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 856}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 854}},\r
              "h1": {"coord": {"x": 42,"y": 854}},\r
              "h2": {"coord": {"x": 95,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 854}},\r
              "h1": {"coord": {"x": 79,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 165}},\r
              "h1": {"coord": {"x": 79,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
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
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 165}},\r
              "h1": {"coord": {"x": 244,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 344,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 790}},\r
              "h1": {"coord": {"x": 244,"y": 790}, "use": false},\r
              "h2": {"coord": {"x": 365,"y": 874}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 894}},\r
              "h1": {"coord": {"x": 482,"y": 894}},\r
              "h2": {"coord": {"x": 574,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 816,"y": 876}},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 165}},\r
              "h1": {"coord": {"x": 766,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 165}},\r
              "h1": {"coord": {"x": 681,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 160}},\r
              "h1": {"coord": {"x": 726,"y": 163}},\r
              "h2": {"coord": {"x": 776,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 5}},\r
              "h1": {"coord": {"x": 676,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 0}},\r
              "h1": {"coord": {"x": 728,"y": 0}},\r
              "h2": {"coord": {"x": 781,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 0}},\r
              "h1": {"coord": {"x": 993,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1046,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 5}},\r
              "h1": {"coord": {"x": 1048,"y": 2}},\r
              "h2": {"coord": {"x": 1098,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 160}},\r
              "h1": {"coord": {"x": 998,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1048,"y": 163}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x72": {\r
      "id": "glyph-0x72",\r
      "advanceWidth": 866,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 69,"y": 165}},\r
              "h1": {"coord": {"x": 19,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 66,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 64,"y": 160}},\r
              "h1": {"coord": {"x": 64,"y": 163}},\r
              "h2": {"coord": {"x": 114,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 64,"y": 5}},\r
              "h1": {"coord": {"x": 14,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 64,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 69,"y": 0}},\r
              "h1": {"coord": {"x": 66,"y": 0}},\r
              "h2": {"coord": {"x": 119,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 380,"y": 0}},\r
              "h1": {"coord": {"x": 330,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 383,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 5}},\r
              "h1": {"coord": {"x": 385,"y": 2}},\r
              "h2": {"coord": {"x": 435,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 160}},\r
              "h1": {"coord": {"x": 335,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 385,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 380,"y": 165}},\r
              "h1": {"coord": {"x": 383,"y": 165}},\r
              "h2": {"coord": {"x": 430,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 698}},\r
              "h1": {"coord": {"x": 245,"y": 698}, "use": false},\r
              "h2": {"coord": {"x": 340,"y": 814}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 596,"y": 864}},\r
              "h1": {"coord": {"x": 464,"y": 864}},\r
              "h2": {"coord": {"x": 613,"y": 864}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 737,"y": 844}},\r
              "h1": {"coord": {"x": 675,"y": 864}},\r
              "h2": {"coord": {"x": 751,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 852}},\r
              "h1": {"coord": {"x": 756,"y": 838}},\r
              "h2": {"coord": {"x": 814,"y": 852}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 823,"y": 979}},\r
              "h1": {"coord": {"x": 773,"y": 979}, "use": false},\r
              "h2": {"coord": {"x": 829,"y": 991}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1001}},\r
              "h1": {"coord": {"x": 827,"y": 997}},\r
              "h2": {"coord": {"x": 869,"y": 1001}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 1002}},\r
              "h1": {"coord": {"x": 764,"y": 1002}, "use": false},\r
              "h2": {"coord": {"x": 864,"y": 1002}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 1002}},\r
              "h1": {"coord": {"x": 764,"y": 1002}, "use": false},\r
              "h2": {"coord": {"x": 752,"y": 1026}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 596,"y": 1040}},\r
              "h1": {"coord": {"x": 679,"y": 1040}},\r
              "h2": {"coord": {"x": 455,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 922}},\r
              "h1": {"coord": {"x": 359,"y": 991}},\r
              "h2": {"coord": {"x": 345,"y": 922}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 938}},\r
              "h1": {"coord": {"x": 245,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1020}},\r
              "h1": {"coord": {"x": 259,"y": 1020}},\r
              "h2": {"coord": {"x": 263,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x73": {\r
      "id": "glyph-0x73",\r
      "advanceWidth": 925,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 307,"y": 390}},\r
              "h1": {"coord": {"x": 257,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 416}},\r
              "h1": {"coord": {"x": 600,"y": 416}},\r
              "h2": {"coord": {"x": 742,"y": 416}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 735,"y": 381}},\r
              "h1": {"coord": {"x": 735,"y": 402}},\r
              "h2": {"coord": {"x": 735,"y": 188}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 374,"y": 143}},\r
              "h1": {"coord": {"x": 631,"y": 143}},\r
              "h2": {"coord": {"x": 322,"y": 143}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 97,"y": 159}},\r
              "h1": {"coord": {"x": 136,"y": 152}},\r
              "h2": {"coord": {"x": 91,"y": 160}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 83,"y": 151}},\r
              "h1": {"coord": {"x": 85,"y": 157}},\r
              "h2": {"coord": {"x": 133,"y": 151}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 12}},\r
              "h1": {"coord": {"x": -5,"y": 12}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": 5}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 54,"y": -3}},\r
              "h1": {"coord": {"x": 47,"y": -2}},\r
              "h2": {"coord": {"x": 118,"y": -17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 374,"y": -20}},\r
              "h1": {"coord": {"x": 314,"y": -20}},\r
              "h2": {"coord": {"x": 814,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 406}},\r
              "h1": {"coord": {"x": 885,"y": 191}},\r
              "h2": {"coord": {"x": 885,"y": 482}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 730,"y": 587}},\r
              "h1": {"coord": {"x": 876,"y": 587}},\r
              "h2": {"coord": {"x": 606,"y": 587}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 351,"y": 547}},\r
              "h1": {"coord": {"x": 514,"y": 547}},\r
              "h2": {"coord": {"x": 218,"y": 547}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 199,"y": 645}},\r
              "h1": {"coord": {"x": 199,"y": 583}},\r
              "h2": {"coord": {"x": 199,"y": 695}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 879}},\r
              "h1": {"coord": {"x": 186,"y": 879}},\r
              "h2": {"coord": {"x": 676,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 807,"y": 826}},\r
              "h1": {"coord": {"x": 772,"y": 834}},\r
              "h2": {"coord": {"x": 820,"y": 823}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 828,"y": 825}},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 782,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 782,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 865,"y": 965}},\r
              "h1": {"coord": {"x": 815,"y": 965}, "use": false},\r
              "h2": {"coord": {"x": 868,"y": 979}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 849,"y": 992}},\r
              "h1": {"coord": {"x": 866,"y": 985}},\r
              "h2": {"coord": {"x": 816,"y": 1005}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 1040}},\r
              "h1": {"coord": {"x": 684,"y": 1040}},\r
              "h2": {"coord": {"x": 55,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 612}},\r
              "h1": {"coord": {"x": 40,"y": 666}},\r
              "h2": {"coord": {"x": 40,"y": 510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 307,"y": 390}},\r
              "h1": {"coord": {"x": 99,"y": 390}},\r
              "h2": {"coord": {"x": 357,"y": 390}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x74": {\r
      "id": "glyph-0x74",\r
      "advanceWidth": 546,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 855}},\r
              "h1": {"coord": {"x": 451,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 504,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 860}},\r
              "h1": {"coord": {"x": 506,"y": 857}},\r
              "h2": {"coord": {"x": 556,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 1015}},\r
              "h1": {"coord": {"x": 456,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 506,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 1020}},\r
              "h1": {"coord": {"x": 504,"y": 1020}},\r
              "h2": {"coord": {"x": 551,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 1020}},\r
              "h1": {"coord": {"x": 268,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 368,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 1382}},\r
              "h1": {"coord": {"x": 268,"y": 1382}, "use": false},\r
              "h2": {"coord": {"x": 318,"y": 1387}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 310,"y": 1390}},\r
              "h1": {"coord": {"x": 315,"y": 1390}},\r
              "h2": {"coord": {"x": 360,"y": 1390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 162,"y": 1390}},\r
              "h1": {"coord": {"x": 112,"y": 1390}, "use": false},\r
              "h2": {"coord": {"x": 157,"y": 1390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 1382}},\r
              "h1": {"coord": {"x": 153,"y": 1387}},\r
              "h2": {"coord": {"x": 203,"y": 1382}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 1020}},\r
              "h1": {"coord": {"x": 103,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 203,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 855}},\r
              "h1": {"coord": {"x": 103,"y": 855}},\r
              "h2": {"coord": {"x": 203,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 91}},\r
              "h1": {"coord": {"x": 103,"y": 91}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 41}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 244,"y": 0}},\r
              "h1": {"coord": {"x": 194,"y": 0}},\r
              "h2": {"coord": {"x": 294,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 446,"y": 0}},\r
              "h1": {"coord": {"x": 396,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 449,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 5}},\r
              "h1": {"coord": {"x": 451,"y": 2}},\r
              "h2": {"coord": {"x": 501,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 160}},\r
              "h1": {"coord": {"x": 401,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 451,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 446,"y": 165}},\r
              "h1": {"coord": {"x": 449,"y": 165}},\r
              "h2": {"coord": {"x": 496,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 327,"y": 165}},\r
              "h1": {"coord": {"x": 277,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 322,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 174}},\r
              "h1": {"coord": {"x": 318,"y": 169}},\r
              "h2": {"coord": {"x": 368,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 855}},\r
              "h1": {"coord": {"x": 268,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 368,"y": 855}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x75": {\r
      "id": "glyph-0x75",\r
      "advanceWidth": 1022,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 366}},\r
              "h1": {"coord": {"x": -10,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 47,"y": 149}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 487,"y": -20}},\r
              "h1": {"coord": {"x": 192,"y": -20}},\r
              "h2": {"coord": {"x": 594,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 735,"y": 50}},\r
              "h1": {"coord": {"x": 674,"y": 7}},\r
              "h2": {"coord": {"x": 748,"y": 21}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 811,"y": 0}},\r
              "h1": {"coord": {"x": 777,"y": 0}},\r
              "h2": {"coord": {"x": 861,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 0}},\r
              "h1": {"coord": {"x": 927,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 5}},\r
              "h1": {"coord": {"x": 982,"y": 2}},\r
              "h2": {"coord": {"x": 1032,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 160}},\r
              "h1": {"coord": {"x": 932,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 165}},\r
              "h1": {"coord": {"x": 980,"y": 165}},\r
              "h2": {"coord": {"x": 1027,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 893,"y": 165}},\r
              "h1": {"coord": {"x": 843,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 943,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 855}},\r
              "h1": {"coord": {"x": 842,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 942,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 855}},\r
              "h1": {"coord": {"x": 927,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 860}},\r
              "h1": {"coord": {"x": 982,"y": 857}},\r
              "h2": {"coord": {"x": 1032,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 1014}},\r
              "h1": {"coord": {"x": 932,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 1019}},\r
              "h1": {"coord": {"x": 980,"y": 1019}},\r
              "h2": {"coord": {"x": 1027,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 810,"y": 1019}},\r
              "h1": {"coord": {"x": 760,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 765,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 937}},\r
              "h1": {"coord": {"x": 729,"y": 982}},\r
              "h2": {"coord": {"x": 779,"y": 937}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 229}},\r
              "h1": {"coord": {"x": 679,"y": 229}, "use": false},\r
              "h2": {"coord": {"x": 658,"y": 145}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 487,"y": 125}},\r
              "h1": {"coord": {"x": 541,"y": 125}},\r
              "h2": {"coord": {"x": 449,"y": 125}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 384}},\r
              "h1": {"coord": {"x": 206,"y": 143}},\r
              "h2": {"coord": {"x": 256,"y": 384}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 205,"y": 855}},\r
              "h1": {"coord": {"x": 155,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 255,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 855}},\r
              "h1": {"coord": {"x": 240,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 860}},\r
              "h1": {"coord": {"x": 295,"y": 857}},\r
              "h2": {"coord": {"x": 345,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 1015}},\r
              "h1": {"coord": {"x": 245,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 1020}},\r
              "h1": {"coord": {"x": 293,"y": 1020}},\r
              "h2": {"coord": {"x": 340,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 122,"y": 1020}},\r
              "h1": {"coord": {"x": 72,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 76,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 937}},\r
              "h1": {"coord": {"x": 40,"y": 983}},\r
              "h2": {"coord": {"x": 90,"y": 937}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 366}},\r
              "h1": {"coord": {"x": -10,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 366}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x76": {\r
      "id": "glyph-0x76",\r
      "advanceWidth": 1089,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1044,"y": 1020}},\r
              "h1": {"coord": {"x": 1047,"y": 1020}},\r
              "h2": {"coord": {"x": 1094,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 906,"y": 1020}},\r
              "h1": {"coord": {"x": 856,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 831,"y": 972}},\r
              "h1": {"coord": {"x": 844,"y": 1000}},\r
              "h2": {"coord": {"x": 881,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 831,"y": 972}},\r
              "h1": {"coord": {"x": 781,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 881,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 571,"y": 292}},\r
              "h1": {"coord": {"x": 521,"y": 292}, "use": false},\r
              "h2": {"coord": {"x": 621,"y": 292}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 224,"y": 1020}},\r
              "h1": {"coord": {"x": 174,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 274,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1020}},\r
              "h1": {"coord": {"x": -10,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 521,"y": 0}},\r
              "h1": {"coord": {"x": 471,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 571,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 632,"y": 0}},\r
              "h1": {"coord": {"x": 582,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 682,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 855}},\r
              "h1": {"coord": {"x": 903,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1003,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1044,"y": 855}},\r
              "h1": {"coord": {"x": 994,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1047,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1049,"y": 860}},\r
              "h1": {"coord": {"x": 1049,"y": 857}},\r
              "h2": {"coord": {"x": 1099,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1049,"y": 1015}},\r
              "h1": {"coord": {"x": 999,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1049,"y": 1018}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x77": {\r
      "id": "glyph-0x77",\r
      "advanceWidth": 1374,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1329,"y": 1020}},\r
              "h1": {"coord": {"x": 1332,"y": 1020}},\r
              "h2": {"coord": {"x": 1379,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1191,"y": 1020}},\r
              "h1": {"coord": {"x": 1141,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 1158,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1116,"y": 972}},\r
              "h1": {"coord": {"x": 1129,"y": 1000}},\r
              "h2": {"coord": {"x": 1166,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1116,"y": 972}},\r
              "h1": {"coord": {"x": 1066,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 1166,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 970}},\r
              "h1": {"coord": {"x": 1065,"y": 970}, "use": false},\r
              "h2": {"coord": {"x": 1112,"y": 962}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1109,"y": 946}},\r
              "h1": {"coord": {"x": 1110,"y": 955}},\r
              "h2": {"coord": {"x": 1159,"y": 946}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 944,"y": 312}},\r
              "h1": {"coord": {"x": 894,"y": 312}, "use": false},\r
              "h2": {"coord": {"x": 994,"y": 312}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 820}},\r
              "h1": {"coord": {"x": 676,"y": 820}, "use": false},\r
              "h2": {"coord": {"x": 776,"y": 820}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 680,"y": 820}},\r
              "h1": {"coord": {"x": 630,"y": 820}, "use": false},\r
              "h2": {"coord": {"x": 730,"y": 820}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 334}},\r
              "h1": {"coord": {"x": 401,"y": 334}, "use": false},\r
              "h2": {"coord": {"x": 501,"y": 334}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1020}},\r
              "h1": {"coord": {"x": 164,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1020}},\r
              "h1": {"coord": {"x": -10,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 391,"y": 0}},\r
              "h1": {"coord": {"x": 341,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 441,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 502,"y": 0}},\r
              "h1": {"coord": {"x": 452,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 552,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 458}},\r
              "h1": {"coord": {"x": 650,"y": 458}, "use": false},\r
              "h2": {"coord": {"x": 750,"y": 458}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 926,"y": 0}},\r
              "h1": {"coord": {"x": 876,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 976,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1037,"y": 0}},\r
              "h1": {"coord": {"x": 987,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1087,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1245,"y": 855}},\r
              "h1": {"coord": {"x": 1195,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1295,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1329,"y": 855}},\r
              "h1": {"coord": {"x": 1279,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1332,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1334,"y": 860}},\r
              "h1": {"coord": {"x": 1334,"y": 857}},\r
              "h2": {"coord": {"x": 1384,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1334,"y": 1015}},\r
              "h1": {"coord": {"x": 1284,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 1018}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x78": {\r
      "id": "glyph-0x78",\r
      "advanceWidth": 977,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": -5,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 183,"y": 0}},\r
              "h1": {"coord": {"x": 133,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 217,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 259,"y": 50}},\r
              "h1": {"coord": {"x": 246,"y": 21}},\r
              "h2": {"coord": {"x": 309,"y": 50}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 485,"y": 387}},\r
              "h1": {"coord": {"x": 435,"y": 387}, "use": false},\r
              "h2": {"coord": {"x": 535,"y": 387}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 711,"y": 43}},\r
              "h1": {"coord": {"x": 661,"y": 43}, "use": false},\r
              "h2": {"coord": {"x": 761,"y": 43}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 43}},\r
              "h1": {"coord": {"x": 662,"y": 43}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 784,"y": 0}},\r
              "h1": {"coord": {"x": 753,"y": 0}},\r
              "h2": {"coord": {"x": 834,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 0}},\r
              "h1": {"coord": {"x": 872,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 925,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 927,"y": 5}},\r
              "h1": {"coord": {"x": 927,"y": 2}},\r
              "h2": {"coord": {"x": 977,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 927,"y": 160}},\r
              "h1": {"coord": {"x": 877,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 927,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 165}},\r
              "h1": {"coord": {"x": 925,"y": 165}},\r
              "h2": {"coord": {"x": 972,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 823,"y": 165}},\r
              "h1": {"coord": {"x": 773,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 516}},\r
              "h1": {"coord": {"x": 540,"y": 516}, "use": false},\r
              "h2": {"coord": {"x": 640,"y": 516}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 825,"y": 855}},\r
              "h1": {"coord": {"x": 775,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 875,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 855}},\r
              "h1": {"coord": {"x": 882,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 935,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 937,"y": 860}},\r
              "h1": {"coord": {"x": 937,"y": 857}},\r
              "h2": {"coord": {"x": 987,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 937,"y": 1014}},\r
              "h1": {"coord": {"x": 887,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 937,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 1019}},\r
              "h1": {"coord": {"x": 935,"y": 1019}},\r
              "h2": {"coord": {"x": 982,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 1019}},\r
              "h1": {"coord": {"x": 744,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 761,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 719,"y": 972}},\r
              "h1": {"coord": {"x": 732,"y": 1000}},\r
              "h2": {"coord": {"x": 769,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 719,"y": 972}},\r
              "h1": {"coord": {"x": 669,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 769,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 495,"y": 659}},\r
              "h1": {"coord": {"x": 445,"y": 659}, "use": false},\r
              "h2": {"coord": {"x": 545,"y": 659}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 972}},\r
              "h1": {"coord": {"x": 238,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 972}},\r
              "h1": {"coord": {"x": 238,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 275,"y": 1000}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1019}},\r
              "h1": {"coord": {"x": 246,"y": 1019}},\r
              "h2": {"coord": {"x": 263,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 75,"y": 1019}},\r
              "h1": {"coord": {"x": 25,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 72,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 70,"y": 1014}},\r
              "h1": {"coord": {"x": 70,"y": 1017}},\r
              "h2": {"coord": {"x": 120,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 70,"y": 860}},\r
              "h1": {"coord": {"x": 20,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 75,"y": 855}},\r
              "h1": {"coord": {"x": 72,"y": 855}},\r
              "h2": {"coord": {"x": 125,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 178,"y": 855}},\r
              "h1": {"coord": {"x": 128,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 228,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 391,"y": 531}},\r
              "h1": {"coord": {"x": 341,"y": 531}, "use": false},\r
              "h2": {"coord": {"x": 441,"y": 531}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 140,"y": 165}},\r
              "h1": {"coord": {"x": 90,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 190,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
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
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x79": {\r
      "id": "glyph-0x79",\r
      "advanceWidth": 1067,\r
      "contextCharacters": "bgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 474,"y": -279}},\r
              "h1": {"coord": {"x": 763,"y": -279}},\r
              "h2": {"coord": {"x": 420,"y": -279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 277,"y": -267}},\r
              "h1": {"coord": {"x": 321,"y": -273}},\r
              "h2": {"coord": {"x": 264,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 256,"y": -266}},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 202,"y": -283}, "use": false},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 202,"y": -283}, "use": false},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": -406}},\r
              "h1": {"coord": {"x": 168,"y": -406}, "use": false},\r
              "h2": {"coord": {"x": 215,"y": -420}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 235,"y": -433}},\r
              "h1": {"coord": {"x": 217,"y": -429}},\r
              "h2": {"coord": {"x": 302,"y": -448}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 478,"y": -450}},\r
              "h1": {"coord": {"x": 451,"y": -450}},\r
              "h2": {"coord": {"x": 969,"y": -450}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": -57}},\r
              "h1": {"coord": {"x": 1021,"y": -212}},\r
              "h2": {"coord": {"x": 1077,"y": -57}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": -57}},\r
              "h1": {"coord": {"x": 977,"y": -57}, "use": false},\r
              "h2": {"coord": {"x": 1077,"y": -57}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": 938}},\r
              "h1": {"coord": {"x": 977,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 1027,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 945,"y": 1020}},\r
              "h1": {"coord": {"x": 991,"y": 1020}},\r
              "h2": {"coord": {"x": 995,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1020}},\r
              "h1": {"coord": {"x": 737,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 784,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 782,"y": 1015}},\r
              "h1": {"coord": {"x": 782,"y": 1018}},\r
              "h2": {"coord": {"x": 832,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 782,"y": 860}},\r
              "h1": {"coord": {"x": 732,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 782,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 855}},\r
              "h1": {"coord": {"x": 784,"y": 855}},\r
              "h2": {"coord": {"x": 837,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 862,"y": 855}},\r
              "h1": {"coord": {"x": 812,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 912,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 862,"y": 277}},\r
              "h1": {"coord": {"x": 812,"y": 277}, "use": false},\r
              "h2": {"coord": {"x": 812,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 139}},\r
              "h1": {"coord": {"x": 678,"y": 139}},\r
              "h2": {"coord": {"x": 540,"y": 139}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 285,"y": 386}},\r
              "h1": {"coord": {"x": 285,"y": 151}},\r
              "h2": {"coord": {"x": 335,"y": 386}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 285,"y": 938}},\r
              "h1": {"coord": {"x": 235,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 285,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 203,"y": 1020}},\r
              "h1": {"coord": {"x": 249,"y": 1020}},\r
              "h2": {"coord": {"x": 253,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 386}},\r
              "h1": {"coord": {"x": 80,"y": 386}, "use": false},\r
              "h2": {"coord": {"x": 130,"y": 169}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": -18}},\r
              "h1": {"coord": {"x": 265,"y": -18}},\r
              "h2": {"coord": {"x": 693,"y": -18}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 855,"y": 51}},\r
              "h1": {"coord": {"x": 785,"y": 7}},\r
              "h2": {"coord": {"x": 855,"y": 4}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 855,"y": -51}},\r
              "h1": {"coord": {"x": 855,"y": -42}},\r
              "h2": {"coord": {"x": 855,"y": -227}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x7A": {\r
      "id": "glyph-0x7A",\r
      "advanceWidth": 971,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 926,"y": 241}},\r
              "h1": {"coord": {"x": 929,"y": 241}},\r
              "h2": {"coord": {"x": 976,"y": 241}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 772,"y": 241}},\r
              "h1": {"coord": {"x": 722,"y": 241}, "use": false},\r
              "h2": {"coord": {"x": 769,"y": 241}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 767,"y": 236}},\r
              "h1": {"coord": {"x": 767,"y": 239}},\r
              "h2": {"coord": {"x": 817,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 767,"y": 154}},\r
              "h1": {"coord": {"x": 717,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 817,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 331,"y": 154}},\r
              "h1": {"coord": {"x": 281,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 381,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 980}},\r
              "h1": {"coord": {"x": 880,"y": 980}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 980}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 980}},\r
              "h1": {"coord": {"x": 880,"y": 980}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 980}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 1020}},\r
              "h1": {"coord": {"x": 880,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 142,"y": 1020}},\r
              "h1": {"coord": {"x": 92,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 97,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 60,"y": 938}},\r
              "h1": {"coord": {"x": 60,"y": 983}},\r
              "h2": {"coord": {"x": 110,"y": 938}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 60,"y": 779}},\r
              "h1": {"coord": {"x": 10,"y": 779}, "use": false},\r
              "h2": {"coord": {"x": 60,"y": 776}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 65,"y": 774}},\r
              "h1": {"coord": {"x": 62,"y": 774}},\r
              "h2": {"coord": {"x": 115,"y": 774}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 219,"y": 774}},\r
              "h1": {"coord": {"x": 169,"y": 774}, "use": false},\r
              "h2": {"coord": {"x": 222,"y": 774}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 224,"y": 779}},\r
              "h1": {"coord": {"x": 224,"y": 776}},\r
              "h2": {"coord": {"x": 274,"y": 779}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 224,"y": 867}},\r
              "h1": {"coord": {"x": 174,"y": 867}, "use": false},\r
              "h2": {"coord": {"x": 274,"y": 867}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 663,"y": 867}},\r
              "h1": {"coord": {"x": 613,"y": 867}, "use": false},\r
              "h2": {"coord": {"x": 713,"y": 867}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 40}},\r
              "h1": {"coord": {"x": -10,"y": 40}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 40}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 849,"y": 0}},\r
              "h1": {"coord": {"x": 799,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 894,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 931,"y": 82}},\r
              "h1": {"coord": {"x": 931,"y": 37}},\r
              "h2": {"coord": {"x": 981,"y": 82}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 931,"y": 236}},\r
              "h1": {"coord": {"x": 881,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 931,"y": 239}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x2C": {\r
      "id": "glyph-0x2C",\r
      "advanceWidth": 310,\r
      "shapes": [\r
        {\r
          "link": "comp-1",\r
          "translateX": 40\r
        }\r
      ]\r
    },\r
    "glyph-0x2E": {\r
      "id": "glyph-0x2E",\r
      "advanceWidth": 310,\r
      "shapes": [\r
        {\r
          "link": "comp-0",\r
          "translateX": 40\r
        }\r
      ]\r
    },\r
    "glyph-0x3A": {\r
      "id": "glyph-0x3A",\r
      "advanceWidth": 310,\r
      "shapes": [\r
        {\r
          "link": "comp-0",\r
          "translateX": 40,\r
          "translateY": 200\r
        },\r
        {\r
          "link": "comp-0",\r
          "name": "Component Instance (copy)",\r
          "translateX": 40,\r
          "translateY": 800\r
        }\r
      ]\r
    },\r
    "glyph-0x3B": {\r
      "id": "glyph-0x3B",\r
      "advanceWidth": 310,\r
      "shapes": [\r
        {\r
          "link": "comp-1",\r
          "translateX": 40\r
        },\r
        {\r
          "link": "comp-0",\r
          "translateX": 40,\r
          "translateY": 600\r
        }\r
      ]\r
    },\r
    "glyph-0x20": {\r
      "id": "glyph-0x20",\r
      "advanceWidth": 400\r
    },\r
    "glyph-0x30": {\r
      "id": "glyph-0x30",\r
      "advanceWidth": 1160,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -4,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 1530}},\r
              "h1": {"coord": {"x": 530,"y": 1530}, "use": false},\r
              "h2": {"coord": {"x": 47,"y": 1530}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 704}},\r
              "h1": {"coord": {"x": 40,"y": 974}},\r
              "h2": {"coord": {"x": 40,"y": 218}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 0}},\r
              "h1": {"coord": {"x": 198,"y": 0}},\r
              "h2": {"coord": {"x": 949,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 704}},\r
              "h1": {"coord": {"x": 1120,"y": 184}},\r
              "h2": {"coord": {"x": 1120,"y": 999}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 1530}},\r
              "h1": {"coord": {"x": 1117,"y": 1530}},\r
              "h2": {"coord": {"x": 630,"y": 1530}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 155}},\r
              "h1": {"coord": {"x": 530,"y": 155}, "use": false},\r
              "h2": {"coord": {"x": 249,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 701}},\r
              "h1": {"coord": {"x": 214,"y": 441}},\r
              "h2": {"coord": {"x": 214,"y": 1027}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 1375}},\r
              "h1": {"coord": {"x": 249,"y": 1375}},\r
              "h2": {"coord": {"x": 930,"y": 1375}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 945,"y": 701}},\r
              "h1": {"coord": {"x": 945,"y": 1027}},\r
              "h2": {"coord": {"x": 945,"y": 445}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 580,"y": 155}},\r
              "h1": {"coord": {"x": 936,"y": 155}},\r
              "h2": {"coord": {"x": 630,"y": 155}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x27": {\r
      "id": "glyph-0x27",\r
      "advanceWidth": 190,\r
      "usedIn": [\r
        "glyph-0x22",\r
        "glyph-0x22"\r
      ],\r
      "contextCharacters": "it's",\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 20,"y": 1540}},\r
              "h1": {"coord": {"x": -30,"y": 1540}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 1540}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 170,"y": 1540}},\r
              "h1": {"coord": {"x": 120,"y": 1540}, "use": false},\r
              "h2": {"coord": {"x": 220,"y": 1540}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 1240}},\r
              "h1": {"coord": {"x": 100,"y": 1240}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 1240}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1240}},\r
              "h1": {"coord": {"x": -10,"y": 1240}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1240}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x22": {\r
      "id": "glyph-0x22",\r
      "advanceWidth": 370,\r
      "contextCharacters": "\\"hello\\"",\r
      "shapes": [\r
        {\r
          "link": "glyph-0x27"\r
        },\r
        {\r
          "link": "glyph-0x27",\r
          "translateX": 180\r
        }\r
      ]\r
    },\r
    "glyph-0x2D": {\r
      "id": "glyph-0x2D",\r
      "advanceWidth": 540,\r
      "usedIn": [\r
        "glyph-0x3D",\r
        "glyph-0x3D",\r
        "glyph-0x5F",\r
        "glyph-0x2B",\r
        "glyph-0x2B",\r
        "glyph-0x2B"\r
      ],\r
      "contextCharacters": "g-y",\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 20,"y": 630}},\r
              "h1": {"coord": {"x": -30,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 520,"y": 630}},\r
              "h1": {"coord": {"x": 470,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 570,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 520,"y": 480}},\r
              "h1": {"coord": {"x": 470,"y": 480}, "use": false},\r
              "h2": {"coord": {"x": 570,"y": 480}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 20,"y": 480}},\r
              "h1": {"coord": {"x": -30,"y": 480}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 480}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x3D": {\r
      "id": "glyph-0x3D",\r
      "advanceWidth": 590,\r
      "shapes": [\r
        {\r
          "link": "glyph-0x2D",\r
          "translateY": -160,\r
          "resizeWidth": 50\r
        },\r
        {\r
          "link": "glyph-0x2D",\r
          "translateY": 80,\r
          "resizeWidth": 50\r
        }\r
      ]\r
    },\r
    "glyph-0x5F": {\r
      "id": "glyph-0x5F",\r
      "advanceWidth": 640,\r
      "shapes": [\r
        {\r
          "link": "glyph-0x2D",\r
          "translateY": -650,\r
          "resizeWidth": 100\r
        }\r
      ]\r
    },\r
    "glyph-0x60": {\r
      "id": "glyph-0x60",\r
      "advanceWidth": 340,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 0,"y": 1540}},\r
              "h1": {"coord": {"x": -50,"y": 1540}, "use": false},\r
              "h2": {"coord": {"x": 50,"y": 1540}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 190,"y": 1540}},\r
              "h1": {"coord": {"x": 140,"y": 1540}, "use": false},\r
              "h2": {"coord": {"x": 240,"y": 1540}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 340,"y": 1240}},\r
              "h1": {"coord": {"x": 290,"y": 1240}, "use": false},\r
              "h2": {"coord": {"x": 390,"y": 1240}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 230,"y": 1240}},\r
              "h1": {"coord": {"x": 180,"y": 1240}, "use": false},\r
              "h2": {"coord": {"x": 280,"y": 1240}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x31": {\r
      "id": "glyph-0x31",\r
      "advanceWidth": 373,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 167,"y": 1230}},\r
              "h1": {"coord": {"x": 117,"y": 1230}, "use": false},\r
              "h2": {"coord": {"x": 217,"y": 1230}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 167,"y": 5}},\r
              "h1": {"coord": {"x": 117,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 167,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 172,"y": 0}},\r
              "h1": {"coord": {"x": 169,"y": 0}},\r
              "h2": {"coord": {"x": 222,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 328,"y": 0}},\r
              "h1": {"coord": {"x": 278,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 331,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 333,"y": 5}},\r
              "h1": {"coord": {"x": 333,"y": 2}},\r
              "h2": {"coord": {"x": 383,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 333,"y": 1410}},\r
              "h1": {"coord": {"x": 283,"y": 1410}, "use": false},\r
              "h2": {"coord": {"x": 333,"y": 1454}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 253,"y": 1490}},\r
              "h1": {"coord": {"x": 297,"y": 1490}},\r
              "h2": {"coord": {"x": 303,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 137,"y": 1490}},\r
              "h1": {"coord": {"x": 87,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 113,"y": 1390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 1276}},\r
              "h1": {"coord": {"x": 56,"y": 1299}},\r
              "h2": {"coord": {"x": 39,"y": 1273}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1268}},\r
              "h1": {"coord": {"x": 41,"y": 1269}},\r
              "h2": {"coord": {"x": 94,"y": 1268}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x32": {\r
      "id": "glyph-0x32",\r
      "advanceWidth": 895,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 741,"y": 791}},\r
              "h1": {"coord": {"x": 691,"y": 791}, "use": false},\r
              "h2": {"coord": {"x": 848,"y": 898}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 855,"y": 1074}},\r
              "h1": {"coord": {"x": 855,"y": 980}},\r
              "h2": {"coord": {"x": 855,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 413,"y": 1510}},\r
              "h1": {"coord": {"x": 661,"y": 1510}},\r
              "h2": {"coord": {"x": 265,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 56,"y": 1319}},\r
              "h1": {"coord": {"x": 134,"y": 1434}},\r
              "h2": {"coord": {"x": 106,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 179,"y": 1224}},\r
              "h1": {"coord": {"x": 129,"y": 1224}, "use": false},\r
              "h2": {"coord": {"x": 227,"y": 1312}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 413,"y": 1371}},\r
              "h1": {"coord": {"x": 314,"y": 1371}},\r
              "h2": {"coord": {"x": 564,"y": 1371}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 687,"y": 1072}},\r
              "h1": {"coord": {"x": 687,"y": 1243}},\r
              "h2": {"coord": {"x": 687,"y": 1004}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 610,"y": 875}},\r
              "h1": {"coord": {"x": 684,"y": 949}},\r
              "h2": {"coord": {"x": 430,"y": 695}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 161}},\r
              "h1": {"coord": {"x": 40,"y": 511}},\r
              "h2": {"coord": {"x": 90,"y": 161}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": -10,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": -10,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
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
              "p": {"coord": {"x": 825,"y": 0}},\r
              "h1": {"coord": {"x": 775,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 828,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 830,"y": 5}},\r
              "h1": {"coord": {"x": 830,"y": 2}},\r
              "h2": {"coord": {"x": 880,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 830,"y": 160}},\r
              "h1": {"coord": {"x": 780,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 830,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 825,"y": 165}},\r
              "h1": {"coord": {"x": 828,"y": 165}},\r
              "h2": {"coord": {"x": 875,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 227,"y": 165}},\r
              "h1": {"coord": {"x": 177,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 155,"y": 397}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 741,"y": 791}},\r
              "h1": {"coord": {"x": 575,"y": 625}},\r
              "h2": {"coord": {"x": 791,"y": 791}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x33": {\r
      "id": "glyph-0x33",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 817,"y": 775}},\r
              "h1": {"coord": {"x": 767,"y": 775}, "use": false},\r
              "h2": {"coord": {"x": 919,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 941,"y": 1143}},\r
              "h1": {"coord": {"x": 941,"y": 992}},\r
              "h2": {"coord": {"x": 941,"y": 1266}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 1433}},\r
              "h1": {"coord": {"x": 893,"y": 1366}},\r
              "h2": {"coord": {"x": 723,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 494,"y": 1520}},\r
              "h1": {"coord": {"x": 618,"y": 1520}},\r
              "h2": {"coord": {"x": 370,"y": 1520}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 1294}},\r
              "h1": {"coord": {"x": 176,"y": 1500}},\r
              "h2": {"coord": {"x": 100,"y": 1294}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 180,"y": 1223}},\r
              "h1": {"coord": {"x": 130,"y": 1223}, "use": false},\r
              "h2": {"coord": {"x": 251,"y": 1347}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 494,"y": 1376}},\r
              "h1": {"coord": {"x": 352,"y": 1376}},\r
              "h2": {"coord": {"x": 580,"y": 1376}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1145}},\r
              "h1": {"coord": {"x": 787,"y": 1362}},\r
              "h2": {"coord": {"x": 787,"y": 975}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 538,"y": 844}},\r
              "h1": {"coord": {"x": 792,"y": 854}},\r
              "h2": {"coord": {"x": 588,"y": 844}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 483,"y": 844}},\r
              "h1": {"coord": {"x": 433,"y": 844}, "use": false},\r
              "h2": {"coord": {"x": 457,"y": 844}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 436,"y": 797}},\r
              "h1": {"coord": {"x": 436,"y": 823}},\r
              "h2": {"coord": {"x": 486,"y": 797}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 436,"y": 737}},\r
              "h1": {"coord": {"x": 386,"y": 737}, "use": false},\r
              "h2": {"coord": {"x": 436,"y": 711}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 483,"y": 690}},\r
              "h1": {"coord": {"x": 457,"y": 690}},\r
              "h2": {"coord": {"x": 533,"y": 690}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 499,"y": 690}},\r
              "h1": {"coord": {"x": 449,"y": 690}, "use": false},\r
              "h2": {"coord": {"x": 799,"y": 690}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 379}},\r
              "h1": {"coord": {"x": 814,"y": 562}},\r
              "h2": {"coord": {"x": 814,"y": 154}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 489,"y": 139}},\r
              "h1": {"coord": {"x": 578,"y": 139}},\r
              "h2": {"coord": {"x": 341,"y": 139}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 195,"y": 308}},\r
              "h1": {"coord": {"x": 259,"y": 215}},\r
              "h2": {"coord": {"x": 245,"y": 308}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 235}},\r
              "h1": {"coord": {"x": 0,"y": 235}, "use": false},\r
              "h2": {"coord": {"x": 74,"y": 173}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 169,"y": 81}},\r
              "h1": {"coord": {"x": 114,"y": 122}},\r
              "h2": {"coord": {"x": 250,"y": 22}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 489,"y": -10}},\r
              "h1": {"coord": {"x": 361,"y": -10}},\r
              "h2": {"coord": {"x": 617,"y": -10}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 828,"y": 81}},\r
              "h1": {"coord": {"x": 747,"y": 22}},\r
              "h2": {"coord": {"x": 923,"y": 151}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 973,"y": 381}},\r
              "h1": {"coord": {"x": 973,"y": 254}},\r
              "h2": {"coord": {"x": 973,"y": 551}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 817,"y": 775}},\r
              "h1": {"coord": {"x": 946,"y": 696}},\r
              "h2": {"coord": {"x": 867,"y": 775}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x34": {\r
      "id": "glyph-0x34",\r
      "advanceWidth": 795,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 87,"y": 623}},\r
              "h1": {"coord": {"x": 37,"y": 623}, "use": false},\r
              "h2": {"coord": {"x": 137,"y": 623}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 589,"y": 623}},\r
              "h1": {"coord": {"x": 539,"y": 623}, "use": false},\r
              "h2": {"coord": {"x": 639,"y": 623}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 589,"y": 5}},\r
              "h1": {"coord": {"x": 539,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 589,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 594,"y": 0}},\r
              "h1": {"coord": {"x": 591,"y": 0}},\r
              "h2": {"coord": {"x": 644,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 750,"y": 0}},\r
              "h1": {"coord": {"x": 700,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 753,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 5}},\r
              "h1": {"coord": {"x": 755,"y": 2}},\r
              "h2": {"coord": {"x": 805,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 1353}},\r
              "h1": {"coord": {"x": 705,"y": 1353}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 1397}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 675,"y": 1433}},\r
              "h1": {"coord": {"x": 719,"y": 1433}},\r
              "h2": {"coord": {"x": 725,"y": 1433}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 594,"y": 1433}},\r
              "h1": {"coord": {"x": 544,"y": 1433}, "use": false},\r
              "h2": {"coord": {"x": 591,"y": 1433}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 589,"y": 1428}},\r
              "h1": {"coord": {"x": 589,"y": 1431}},\r
              "h2": {"coord": {"x": 639,"y": 1428}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 589,"y": 783}},\r
              "h1": {"coord": {"x": 539,"y": 783}, "use": false},\r
              "h2": {"coord": {"x": 639,"y": 783}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 783}},\r
              "h1": {"coord": {"x": 156,"y": 783}, "use": false},\r
              "h2": {"coord": {"x": 256,"y": 783}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 1353}},\r
              "h1": {"coord": {"x": 156,"y": 1353}, "use": false},\r
              "h2": {"coord": {"x": 206,"y": 1397}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 1433}},\r
              "h1": {"coord": {"x": 170,"y": 1433}},\r
              "h2": {"coord": {"x": 176,"y": 1433}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1433}},\r
              "h1": {"coord": {"x": -5,"y": 1433}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1433}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1428}},\r
              "h1": {"coord": {"x": 40,"y": 1431}},\r
              "h2": {"coord": {"x": 90,"y": 1428}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 670}},\r
              "h1": {"coord": {"x": -10,"y": 670}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 644}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 87,"y": 623}},\r
              "h1": {"coord": {"x": 61,"y": 623}},\r
              "h2": {"coord": {"x": 137,"y": 623}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x35": {\r
      "id": "glyph-0x35",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 512,"y": 840}},\r
              "h1": {"coord": {"x": 462,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 562,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 512,"y": 840}},\r
              "h1": {"coord": {"x": 462,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 562,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 243,"y": 840}},\r
              "h1": {"coord": {"x": 193,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 243,"y": 1325}},\r
              "h1": {"coord": {"x": 193,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 874,"y": 1325}},\r
              "h1": {"coord": {"x": 824,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 877,"y": 1325}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 879,"y": 1330}},\r
              "h1": {"coord": {"x": 879,"y": 1327}},\r
              "h2": {"coord": {"x": 929,"y": 1330}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 879,"y": 1485}},\r
              "h1": {"coord": {"x": 829,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 879,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 874,"y": 1490}},\r
              "h1": {"coord": {"x": 877,"y": 1490}},\r
              "h2": {"coord": {"x": 924,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 1490}},\r
              "h1": {"coord": {"x": 107,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 113,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 77,"y": 1410}},\r
              "h1": {"coord": {"x": 77,"y": 1454}},\r
              "h2": {"coord": {"x": 127,"y": 1410}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 77,"y": 760}},\r
              "h1": {"coord": {"x": 27,"y": 760}, "use": false},\r
              "h2": {"coord": {"x": 77,"y": 716}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 680}},\r
              "h1": {"coord": {"x": 113,"y": 680}},\r
              "h2": {"coord": {"x": 207,"y": 680}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 509,"y": 680}},\r
              "h1": {"coord": {"x": 459,"y": 680}, "use": false},\r
              "h2": {"coord": {"x": 809,"y": 680}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 804,"y": 369}},\r
              "h1": {"coord": {"x": 804,"y": 552}},\r
              "h2": {"coord": {"x": 804,"y": 144}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 129}},\r
              "h1": {"coord": {"x": 568,"y": 129}},\r
              "h2": {"coord": {"x": 331,"y": 129}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": 298}},\r
              "h1": {"coord": {"x": 249,"y": 205}},\r
              "h2": {"coord": {"x": 235,"y": 298}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 225}},\r
              "h1": {"coord": {"x": -10,"y": 225}, "use": false},\r
              "h2": {"coord": {"x": 64,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 159,"y": 71}},\r
              "h1": {"coord": {"x": 104,"y": 112}},\r
              "h2": {"coord": {"x": 240,"y": 12}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 351,"y": -20}},\r
              "h2": {"coord": {"x": 607,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 818,"y": 71}},\r
              "h1": {"coord": {"x": 737,"y": 12}},\r
              "h2": {"coord": {"x": 913,"y": 141}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 371}},\r
              "h1": {"coord": {"x": 963,"y": 244}},\r
              "h2": {"coord": {"x": 963,"y": 629}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 512,"y": 840}},\r
              "h1": {"coord": {"x": 900,"y": 839}},\r
              "h2": {"coord": {"x": 562,"y": 840}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x36": {\r
      "id": "glyph-0x36",\r
      "advanceWidth": 1047,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": 840}},\r
              "h1": {"coord": {"x": 492,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 416,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 706}},\r
              "h1": {"coord": {"x": 302,"y": 789}},\r
              "h2": {"coord": {"x": 234,"y": 938}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 347,"y": 1138}},\r
              "h1": {"coord": {"x": 281,"y": 1044}},\r
              "h2": {"coord": {"x": 433,"y": 1261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 1331}},\r
              "h1": {"coord": {"x": 511,"y": 1331}},\r
              "h2": {"coord": {"x": 814,"y": 1331}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 1331}},\r
              "h1": {"coord": {"x": 714,"y": 1331}, "use": false},\r
              "h2": {"coord": {"x": 814,"y": 1331}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 765,"y": 1331}},\r
              "h1": {"coord": {"x": 715,"y": 1331}, "use": false},\r
              "h2": {"coord": {"x": 815,"y": 1331}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 870,"y": 1331}},\r
              "h1": {"coord": {"x": 820,"y": 1331}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 1331}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 876,"y": 1336}},\r
              "h1": {"coord": {"x": 876,"y": 1333}},\r
              "h2": {"coord": {"x": 926,"y": 1336}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 876,"y": 1491}},\r
              "h1": {"coord": {"x": 826,"y": 1491}, "use": false},\r
              "h2": {"coord": {"x": 876,"y": 1494}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 870,"y": 1496}},\r
              "h1": {"coord": {"x": 873,"y": 1496}},\r
              "h2": {"coord": {"x": 920,"y": 1496}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 1496}},\r
              "h1": {"coord": {"x": 714,"y": 1496}, "use": false},\r
              "h2": {"coord": {"x": 509,"y": 1496}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1236}},\r
              "h1": {"coord": {"x": 334,"y": 1406}},\r
              "h2": {"coord": {"x": 164,"y": 1161}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 523}},\r
              "h1": {"coord": {"x": 40,"y": 953}},\r
              "h2": {"coord": {"x": 40,"y": 361}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 178}},\r
              "h1": {"coord": {"x": 68,"y": 261}},\r
              "h2": {"coord": {"x": 149,"y": 138}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 219,"y": 73}},\r
              "h1": {"coord": {"x": 180,"y": 102}},\r
              "h2": {"coord": {"x": 229,"y": 64}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 244,"y": 56}},\r
              "h1": {"coord": {"x": 238,"y": 58}},\r
              "h2": {"coord": {"x": 323,"y": 6}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": -20}},\r
              "h1": {"coord": {"x": 424,"y": -20}},\r
              "h2": {"coord": {"x": 670,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 862,"y": 71}},\r
              "h1": {"coord": {"x": 781,"y": 12}},\r
              "h2": {"coord": {"x": 957,"y": 141}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1007,"y": 371}},\r
              "h1": {"coord": {"x": 1007,"y": 244}},\r
              "h2": {"coord": {"x": 1007,"y": 630}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": 840}},\r
              "h1": {"coord": {"x": 798,"y": 840}},\r
              "h2": {"coord": {"x": 592,"y": 840}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 3,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 247,"y": 369}},\r
              "h1": {"coord": {"x": 247,"y": 144}},\r
              "h2": {"coord": {"x": 247,"y": 552}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": 701}},\r
              "h1": {"coord": {"x": 379,"y": 701}},\r
              "h2": {"coord": {"x": 705,"y": 701}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 838,"y": 369}},\r
              "h1": {"coord": {"x": 838,"y": 552}},\r
              "h2": {"coord": {"x": 838,"y": 144}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 542,"y": 119}},\r
              "h1": {"coord": {"x": 631,"y": 119}},\r
              "h2": {"coord": {"x": 453,"y": 119}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x37": {\r
      "id": "glyph-0x37",\r
      "advanceWidth": 972,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1490}},\r
              "h1": {"coord": {"x": 769,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1490}},\r
              "h1": {"coord": {"x": 769,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 1490}, "use": false}\r
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
              "p": {"coord": {"x": 40,"y": 1335}},\r
              "h1": {"coord": {"x": -10,"y": 1335}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1330}},\r
              "h1": {"coord": {"x": 42,"y": 1330}},\r
              "h2": {"coord": {"x": 95,"y": 1330}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 1330}},\r
              "h1": {"coord": {"x": 651,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 751,"y": 1330}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 840}},\r
              "h1": {"coord": {"x": 434,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 840}},\r
              "h1": {"coord": {"x": 156,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 203,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 201,"y": 835}},\r
              "h1": {"coord": {"x": 201,"y": 838}},\r
              "h2": {"coord": {"x": 251,"y": 835}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 201,"y": 680}},\r
              "h1": {"coord": {"x": 151,"y": 680}, "use": false},\r
              "h2": {"coord": {"x": 201,"y": 677}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 675}},\r
              "h1": {"coord": {"x": 203,"y": 675}},\r
              "h2": {"coord": {"x": 256,"y": 675}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 411,"y": 675}},\r
              "h1": {"coord": {"x": 361,"y": 675}, "use": false},\r
              "h2": {"coord": {"x": 461,"y": 675}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 30}},\r
              "h1": {"coord": {"x": 76,"y": 30}, "use": false},\r
              "h2": {"coord": {"x": 176,"y": 30}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 125,"y": 0}},\r
              "h1": {"coord": {"x": 75,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 175,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 0}},\r
              "h1": {"coord": {"x": 247,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 347,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 1460}},\r
              "h1": {"coord": {"x": 882,"y": 1460}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 1460}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 931,"y": 1490}},\r
              "h1": {"coord": {"x": 881,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 981,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1490}},\r
              "h1": {"coord": {"x": 769,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 1490}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x38": {\r
      "id": "glyph-0x38",\r
      "advanceWidth": 1009,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 371}},\r
              "h1": {"coord": {"x": -10,"y": 371}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 244}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": 71}},\r
              "h1": {"coord": {"x": 90,"y": 141}},\r
              "h2": {"coord": {"x": 266,"y": 12}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": -20}},\r
              "h1": {"coord": {"x": 377,"y": -20}},\r
              "h2": {"coord": {"x": 633,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 71}},\r
              "h1": {"coord": {"x": 743,"y": 12}},\r
              "h2": {"coord": {"x": 919,"y": 141}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 371}},\r
              "h1": {"coord": {"x": 969,"y": 244}},\r
              "h2": {"coord": {"x": 969,"y": 536}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 756,"y": 766}},\r
              "h1": {"coord": {"x": 884,"y": 682}},\r
              "h2": {"coord": {"x": 772,"y": 775}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 802,"y": 794}},\r
              "h1": {"coord": {"x": 788,"y": 783}},\r
              "h2": {"coord": {"x": 890,"y": 859}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 936,"y": 1074}},\r
              "h1": {"coord": {"x": 936,"y": 956}},\r
              "h2": {"coord": {"x": 936,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1510}},\r
              "h1": {"coord": {"x": 743,"y": 1510}},\r
              "h2": {"coord": {"x": 267,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 73,"y": 1074}},\r
              "h1": {"coord": {"x": 73,"y": 1315}},\r
              "h2": {"coord": {"x": 73,"y": 956}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 208,"y": 794}},\r
              "h1": {"coord": {"x": 120,"y": 859}},\r
              "h2": {"coord": {"x": 222,"y": 783}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 254,"y": 766}},\r
              "h1": {"coord": {"x": 238,"y": 775}},\r
              "h2": {"coord": {"x": 126,"y": 682}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 371}},\r
              "h1": {"coord": {"x": 40,"y": 536}},\r
              "h2": {"coord": {"x": 90,"y": 371}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 230,"y": 1072}},\r
              "h1": {"coord": {"x": 180,"y": 1072}, "use": false},\r
              "h2": {"coord": {"x": 230,"y": 1243}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1381}},\r
              "h1": {"coord": {"x": 354,"y": 1381}},\r
              "h2": {"coord": {"x": 656,"y": 1381}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 779,"y": 1072}},\r
              "h1": {"coord": {"x": 779,"y": 1243}},\r
              "h2": {"coord": {"x": 779,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 526,"y": 840}},\r
              "h1": {"coord": {"x": 616,"y": 844}},\r
              "h2": {"coord": {"x": 519,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 840}},\r
              "h1": {"coord": {"x": 512,"y": 840}},\r
              "h2": {"coord": {"x": 498,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 840}},\r
              "h1": {"coord": {"x": 491,"y": 840}},\r
              "h2": {"coord": {"x": 394,"y": 844}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 230,"y": 1072}},\r
              "h1": {"coord": {"x": 230,"y": 879}},\r
              "h2": {"coord": {"x": 280,"y": 1072}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 3",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 701}},\r
              "h1": {"coord": {"x": 455,"y": 701}, "use": false},\r
              "h2": {"coord": {"x": 668,"y": 701}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 369}},\r
              "h1": {"coord": {"x": 800,"y": 552}},\r
              "h2": {"coord": {"x": 800,"y": 144}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 119}},\r
              "h1": {"coord": {"x": 594,"y": 119}},\r
              "h2": {"coord": {"x": 416,"y": 119}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 369}},\r
              "h1": {"coord": {"x": 209,"y": 144}},\r
              "h2": {"coord": {"x": 209,"y": 552}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 701}},\r
              "h1": {"coord": {"x": 342,"y": 701}},\r
              "h2": {"coord": {"x": 555,"y": 701}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x39": {\r
      "id": "glyph-0x39",\r
      "advanceWidth": 1009,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1006}},\r
              "h1": {"coord": {"x": 919,"y": 1006}, "use": false},\r
              "h2": {"coord": {"x": 1019,"y": 1006}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1007}},\r
              "h1": {"coord": {"x": 919,"y": 1007}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 1015}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1029}},\r
              "h1": {"coord": {"x": 969,"y": 1022}},\r
              "h2": {"coord": {"x": 1019,"y": 1029}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 968,"y": 1032}},\r
              "h1": {"coord": {"x": 918,"y": 1032}, "use": false},\r
              "h2": {"coord": {"x": 1018,"y": 1032}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 968,"y": 1033}},\r
              "h1": {"coord": {"x": 918,"y": 1033}, "use": false},\r
              "h2": {"coord": {"x": 954,"y": 1279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1475}},\r
              "h1": {"coord": {"x": 752,"y": 1475}},\r
              "h2": {"coord": {"x": 249,"y": 1475}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1006}},\r
              "h1": {"coord": {"x": 40,"y": 1265}},\r
              "h2": {"coord": {"x": 40,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": 706}},\r
              "h1": {"coord": {"x": 90,"y": 776}},\r
              "h2": {"coord": {"x": 266,"y": 647}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 615}},\r
              "h1": {"coord": {"x": 377,"y": 615}},\r
              "h2": {"coord": {"x": 618,"y": 615}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 793,"y": 685}},\r
              "h1": {"coord": {"x": 716,"y": 639}},\r
              "h2": {"coord": {"x": 782,"y": 518}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 702,"y": 348}},\r
              "h1": {"coord": {"x": 757,"y": 427}},\r
              "h2": {"coord": {"x": 617,"y": 226}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 165}},\r
              "h1": {"coord": {"x": 505,"y": 166}},\r
              "h2": {"coord": {"x": 400,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 165}},\r
              "h1": {"coord": {"x": 300,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 400,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 254,"y": 165}},\r
              "h1": {"coord": {"x": 204,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 251,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 249,"y": 160}},\r
              "h1": {"coord": {"x": 249,"y": 163}},\r
              "h2": {"coord": {"x": 299,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 249,"y": 5}},\r
              "h1": {"coord": {"x": 199,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 249,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 254,"y": 0}},\r
              "h1": {"coord": {"x": 251,"y": 0}},\r
              "h2": {"coord": {"x": 304,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 0}},\r
              "h1": {"coord": {"x": 300,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 400,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 0}},\r
              "h1": {"coord": {"x": 300,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 561,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 833,"y": 250}},\r
              "h1": {"coord": {"x": 716,"y": 81}},\r
              "h2": {"coord": {"x": 885,"y": 325}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1006}},\r
              "h1": {"coord": {"x": 969,"y": 484}},\r
              "h2": {"coord": {"x": 1019,"y": 1006}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1006}},\r
              "h1": {"coord": {"x": 919,"y": 1006}, "use": false},\r
              "h2": {"coord": {"x": 1019,"y": 1006}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1006}},\r
              "h1": {"coord": {"x": 919,"y": 1006}, "use": false},\r
              "h2": {"coord": {"x": 1019,"y": 1006}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 754}},\r
              "h1": {"coord": {"x": 455,"y": 754}, "use": false},\r
              "h2": {"coord": {"x": 416,"y": 754}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 1004}},\r
              "h1": {"coord": {"x": 209,"y": 779}},\r
              "h2": {"coord": {"x": 209,"y": 1187}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1336}},\r
              "h1": {"coord": {"x": 342,"y": 1336}},\r
              "h2": {"coord": {"x": 668,"y": 1336}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1004}},\r
              "h1": {"coord": {"x": 800,"y": 1187}},\r
              "h2": {"coord": {"x": 800,"y": 779}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 754}},\r
              "h1": {"coord": {"x": 594,"y": 754}},\r
              "h2": {"coord": {"x": 555,"y": 754}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x21": {\r
      "id": "glyph-0x21",\r
      "advanceWidth": 280,\r
      "usedIn": [\r
        "glyph-0x203C",\r
        "glyph-0x203C"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 194,"y": 1509}},\r
              "h1": {"coord": {"x": 144,"y": 1509}, "use": false},\r
