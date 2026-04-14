/*! © 2025 Yahoo Holdings, Inc. For license information, see js/gpt_sandbox_37edf8a4d663d34d15cd.bundle.js.LICENSE.txt. */
(()=>{var e={p:""};(()=>{
if(!window.ymailAssetHost)throw new Error("window.ymailAssetHost must be set before running this application.")
;e.p=window.ymailAssetHost})(),(()=>{"use strict";function e(e,n,t){
if(void 0===t&&(t={}),!e){const e=new Error(n);e.name="Invariant"
;throw!t||0===Object.keys(t).length||(e.data=t),e}return e}let n,t,i,o,s,r
;!function(e){e.APP="APP",e.IFRAME="IFRAME"}(n||(n={})),function(e){e.REQ="REQ",
e.RES="RES"}(t||(t={})),function(e){
e.REFRESH="refresh",e.LOADED="loaded",e.INIT_ERROR="initError"
}(i||(i={})),function(e){e.MAIL="mail",e.BASIC_MAIL="basicMail",e.LOGIN="login",
e.AOL_LOGIN="aolLogin",
e.AOL_MAIL="aolMail",e.AOL_BASIC_MAIL="aolBasicMail",e.NOVATION="novation"
}(o||(o={})),function(e){
e.CLIENT="client",e.VERSION="version",e.YMREQID="ymreqid",
e.HAQ="haq",e.CACHE="cache",e.TEST_ID="testid",e.NCID="ncid"
}(s||(s={})),function(e){e.CONFIG="config"}(r||(r={}));const a="gpt-passback"
;let d;!function(e){
e.SLOT_RENDER_ENDED="slotRenderEnded",e.SLOT_REQUESTED="slotRequested",
e.SLOT_RESPONSE_RECEIVED="slotResponseReceived",
e.IMPRESSION_VIEWABLE="impressionViewable"}(d||(d={}))
;const l="top_right",c="mid_center",E="message_list";let u;!function(e){
e.LREC="LREC",
e.LREC4="LREC4",e.MON="MON",e.SKY="SKY",e.FULL_PANE="FULL_PANE",e.FULL_SCREEN="FULL_SCREEN",
e.HORIZON_DESKTOP="HORIZON_DESKTOP",
e.HORIZON_MOBILE="HORIZON_MOBILE",e.BILLBOARD="BILLBOARD",
e.FLUID="FLUID",e.SPOTLIGHT="SPOTLIGHT",
e.LIGHTHOUSE="LIGHTHOUSE",e.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",
e.LEADERBOARD="LEADERBOARD",
e.NATIVE_MOBILE_LEADERBOARD="NATIVE_MOBILE_LEADERBOARD",
e.PENCIL="PENCIL",e.DESKTOP_LEADERBOARD="DESKTOP_LEADERBOARD",
e.DESKTOP_LEADERBOARD_FOOTER="DESKTOP_LEADERBOARD_FOOTER"}(u||(u={}));const g={
[u.LREC]:[300,250],[u.LREC4]:[300,250],[u.MON]:[300,600],[u.SKY]:[160,600],
[u.FULL_PANE]:[1200,800],[u.FULL_SCREEN]:[1440,1024],[u.HORIZON_DESKTOP]:[3,1],
[u.HORIZON_MOBILE]:[3,1],[u.SPOTLIGHT]:[3,2],[u.LIGHTHOUSE]:[2,2],
[u.MEDIUM_RECTANGLE]:[300,250],[u.BILLBOARD]:[970,250],[u.FLUID]:["fluid"],
[u.LEADERBOARD]:[320,50],[u.NATIVE_MOBILE_LEADERBOARD]:[380,100],
[u.PENCIL]:["fluid"],[u.DESKTOP_LEADERBOARD]:[728,90],
[u.DESKTOP_LEADERBOARD_FOOTER]:[728,90]},L=(u.LREC,u.LREC4,u.MON,u.SKY,{
[u.LREC]:"Slot300_250_1",[u.LREC4]:"Slot300_250_2",[u.MON]:"Slot300_600",
[u.SKY]:"Slot160_600"
}),m=0,O=0,I="RENDER_SUCCEEDED",h="RENDER_FAILED",R="SLOT_REQUESTED",p="SLOT_RESPONSE_RECEIVED",A="IMPRESSION_VIEWABLE",f="index",v={
[o.MAIL]:"yahoo_mail",[o.NOVATION]:"yahoo_mail",[o.BASIC_MAIL]:"yahoo_mail",
[o.AOL_MAIL]:"aol_webmail",[o.AOL_BASIC_MAIL]:"aol_webmail",
[o.LOGIN]:"yahoo_login",[o.AOL_LOGIN]:"aol_login"},w={uk:"emea-",ca:"ca-",us:""
},D=/^(https:\/\/([a-z0-9-]+[.])*(mail|login)\.(aol|yahoo)\.com)$/,_=/^(https:\/\/(?:norrin\.)?(alpha-|canary-)?(gpt|gam)\.mail\.(aol|yahoo|yahoosandbox)\.net)$/
;const b=class{constructor(t){let{mode:i,appName:o,targetOrigin:s,iframeRef:r}=t
;this.messageId=0,
this.listener=null,i&&Object.keys(n).map((e=>n[e])).includes(i)||e(!1,"Valid 'mode' needs to be specified"),
s||e(!1,"Valid 'targetOrigin' needs to be specified"),
i!==n.APP||r||e(!1,"Valid 'iframeRef' needs to be specified"),
this.mode=i,this.targetOrigin=s,this.iframeRef=r,this.appName=o||"MAIL_APP"}
sendMessage(e){var t,i
;if(e.requestId=++this.messageId,this.mode===n.APP)null==(t=this.iframeRef)||null==(i=t.contentWindow)||i.postMessage(e,this.targetOrigin);else if(this.mode===n.IFRAME){
var o,s;null==(o=window)||null==(s=o.parent)||s.postMessage(e,this.targetOrigin)
}}sendRequestMessage(e,n){void 0===n&&(n={}),this.sendMessage({app:this.appName,
type:t.REQ,name:e,data:n})}isReceivedMessageValid(e){var t;const i=this.mode
;return!!Object.keys(n).map((e=>n[e])).includes(i)&&(!!(i!==n.APP||_.test(e.origin)&&e.source===(null==(t=this.iframeRef)?void 0:t.contentWindow))&&!!(i!==n.IFRAME||D.test(e.origin)&&e.source===window.parent))
}attachListener(e){const n=n=>{this.isReceivedMessageValid(n)&&e(n)}
;this.listener&&(window.removeEventListener("message",this.listener),
this.listener=null),window.addEventListener("message",n),this.listener=n}
detachListener(){
this.listener&&(window.removeEventListener("message",this.listener),
this.listener=null)}};function C(){var e,n
;return(null==(e=window)||null==(n=e.AppBootstrapData)?void 0:n.environment)||"production"
}function S(){return"devbox"===C()||"openhouse"===C()}const y=function(e,n){
void 0===n&&(n=1360);const t=document.getElementById(a);if(!t||!e)return
;const i=null==t?void 0:t.children[0],o=null==i?void 0:i.children[0],s=window.innerWidth,r=function(e,n,t){
switch(void 0===t&&(t=1360),n){case u.BILLBOARD:
return e>=970?250:Math.floor(e/3.88);case u.HORIZON_DESKTOP:{
const n=e>480&&e<t?4.44:5.33;return Math.floor(e/n)}case u.HORIZON_MOBILE:{
const n=1.78;return Math.floor(e/n)}case u.SPOTLIGHT:{const n=.89
;return Math.floor(e/n)}case u.MEDIUM_RECTANGLE:
return e>=300?250:Math.floor(e/1.2)}return 0}(innerWidth,e,n)
;if(e!==u.MEDIUM_RECTANGLE){if(e===u.LIGHTHOUSE){
const e=window.innerHeight,n=e/1.78
;return i.style.height="100%",i.style.width=n+"px",
o.height=e.toString(),o.width=n.toString(),void(t.style.textAlign="center")}
i&&o&&(i.style.height=r+"px",
i.style.width="100%",o.height=r.toString(),o.width=s.toString())
}else t.style.textAlign="center"};function M(){
return M=Object.assign||function(e){for(var n=1;n<arguments.length;n++){
var t=arguments[n]
;for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e
},M.apply(this,arguments)}const N=["slot","yieldGroupIds"],B=e=>{
const{client:n,messageClient:t}=e;let i;return e=>{var s,r
;const l=null==e||null==(s=e.data)?void 0:s.id,c=null==e||null==(r=e.data)?void 0:r.size,E=(null==e?void 0:e.name)!==I,m=function(e,n){
if(null==e)return{};var t,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],
n.indexOf(t)>=0||(o[t]=e[t]);return o
}(e.gptEvent||{},N),O=window._YMIframeConfig||{},{narrowScreenWidth:h}=O,R=((e,n,t)=>{
const i=Object.keys(L).find((n=>L[n]===e))||null;if(i)return i
;if(!Array.isArray(n)||!n)return null;if(0===n[0]&&0===n[1])return u.FLUID
;const{positions:o=[]}=t;let s=o.reduce(((e,n)=>{const{positionUnits:t=[]}=n
;return t.forEach((n=>{e.includes(n)||e.push(n)})),e}),[])
;s.length||(s=Object.keys(g));const r=s.find((e=>{const t=g[e]
;return t[0]===n[0]&&t[1]===n[1]}));return r||null})(l,c,O)
;if(E||(n===o.LOGIN||n===o.AOL_LOGIN?(e=>{const n=document.getElementById(a)
;Array.isArray(e)&&n&&(0===e[0]&&0===e[1]?n.setAttribute("style","width:600px;height:1024px;padding-left:200px;padding-right:800px;"):n.setAttribute("style","width:"+e[0]+"px;height:"+e[1]+"px"))
})(c):R===u.NATIVE_MOBILE_LEADERBOARD||R===u.LEADERBOARD?(e=>{
const n=document.getElementById(a)
;n&&e&&n.setAttribute("style","text-align:center")
})(R):R===u.HORIZON_DESKTOP||R===u.HORIZON_MOBILE||R===u.BILLBOARD||R===u.SPOTLIGHT||R===u.LIGHTHOUSE||R===u.MEDIUM_RECTANGLE?(i&&window.removeEventListener("resize",i),
i=()=>{y(R,h)
},i(),window.addEventListener("resize",i)):i&&(window.removeEventListener("resize",i),
i=null)),t){const e=M({},m,{position:R,isEmpty:E,size:c})
;t.sendRequestMessage(d.SLOT_RENDER_ENDED,e)}}},T=e=>{
const{benji:n,messageClient:t,client:i}=e;n.on(R,(e=>{const{messageClient:n}=e
;return()=>{n.sendRequestMessage(d.SLOT_REQUESTED)}})({messageClient:t
})),n.on(I,B({client:i,messageClient:t})),n.on(h,B({client:i,messageClient:t})),
n.on(A,(e=>{const{messageClient:n}=e;return()=>{
n.sendRequestMessage(d.IMPRESSION_VIEWABLE)}})({messageClient:t})),n.on(p,(e=>{
const{messageClient:n}=e;return()=>{
n.sendRequestMessage(d.SLOT_RESPONSE_RECEIVED)}})({messageClient:t}))},P=e=>{
const{spaceId:n,senderDomain:t,senderKaminoLevel1:i,senderKaminoLevel2:o}=e
;return M({},n?{spaceid:n}:null,t?{senderdomain:t}:null,i?{senderkaminolevel1:i
}:null,o?{senderkaminolevel2:o}:null)},H=e=>{
const{adLocation:n,adIndex:t,senderMatchedPremiumDomain:i="",senderDomainCategory:o="",senderDomainSubcategory:s="",region:r}=e
;if(n===E){return{loc:""+c+(1===t||!t?"":"_"+t)}}const a=r&&w[r]||""
;return M({},i?{[a+"senderdomain"]:i}:null,o?{[a+"senderdomaincategory"]:o
}:null,s?{[a+"senderdomainsubcategory"]:s}:null,{loc:n})},U=e=>{
const n=e.positions||[],{senderMatchedPremiumDomain:t,senderDomainCategory:i,senderDomainSubcategory:o,region:s}=e.targetingConfig||{}
;return n.reduce(((e,n)=>{
const{div:r,adLocation:a,adUnitPath:d,size:l,stackGroup:c,adIndex:E}=n
;return e[r]=M({id:r,kvs:H({adLocation:a,adIndex:E,region:s,
senderMatchedPremiumDomain:t,senderDomainCategory:i,senderDomainSubcategory:o}),
path:d,region:f,size:l},c?{stackGroup:c}:null),e}),{})},F=function(e){
void 0===e&&(e={client:o.MAIL,benjiFeatures:[]})
;const{client:n,benjiFeatures:t}=e
;return n===o.LOGIN||n===o.AOL_LOGIN?t.filter((e=>"enableAssertiveYield"!==e)):t
},k=function(e,n){void 0===e&&(e=[]),void 0===n&&(n=!0),e.forEach((e=>{
let{div:t,stackGroup:i}=e,o=document.getElementById(t)||i&&document.getElementById(t+"-collapse")
;if(!o){if(o=document.createElement("div"),o.id=t,i){
const e="ad-stacking-wrapper-"+i;let s=document.getElementById(e)
;return s||(s=document.createElement("div"),
s.id=e,s.style.width="300px",s.style.height="600px",
s.style.overflow="hidden",document.body.appendChild(s)),
n&&t===L[u.MON]&&(o.id=t+"-collapse",
o.style.overflow="hidden"),void s.appendChild(o)}document.body.appendChild(o)}
}))},G=e=>{var n;const{oldPositions:t,removeContainers:i=!0}=e,o=t.map((e=>{
let{div:n}=e;return n}));null==(n=window.benji)||n.destroy(o),i&&function(e){
void 0===e&&(e=[]),e.forEach((e=>{var n;let{div:t,stackGroup:i}=e;var o
;null==(n=document.getElementById(t))||n.remove(),
i&&(null==(o=document.getElementById(t+"-collapse"))||o.remove())}))}(t)},j=e=>{
var n;const{renderConfig:t}=e,i=!t.yahooPrebid;k(t.positions,i);const o=U(t)
;null==(n=window.benji)||n.render(o)},K=e=>{var t
;const{config:s,client:r,haqEnabled:d}=e,c=(e=>{
const{positions:n=[],adUnitPath:t,size:i,div:o=a,targetingConfig:s}=e
;return n.length||n.push({adUnitPath:t,adLocation:null==s?void 0:s.adLocation,
size:i,div:o}),n})(s),E=new b({mode:n.IFRAME,targetOrigin:s.pageUrl
}),g=!s.yahooPrebid
;s.positions=c,E.sendRequestMessage(i.LOADED),k(s.positions,g);const I=(e=>{
const{config:n,client:t=o.MAIL,haqEnabled:i=!0}=e,{targetingConfig:s={},headerBidderConfig:r={},adStackingV2Enabled:a=!1,benjiFeatures:d=[],passBenjiBucketFeaturesEnabled:l=!1,allowFirstPartyAds:c=!1,yahooPrebid:E=!1,limited:u=!1,npa:g=!1,pageUrl:L="",geoCountryCode:I="",tosCountryCode:h="",collapseWhenNoFill:R=!0,perfOffset:p=0,gamBannerVideo:A=!1,mediaTypeSizeBlocking:f=!1,userSegments:w=!1}=n,{age:D=m,gender:_=O,colo:b="",lu:C="",device:S="",region:y="",lang:N="",spaceId:B="",AXId:T="",AXIds:H="",ud:k,ubid:G,tblaId:j="",adBlocker:K="",senderDomain:V,senderKaminoLevel1:x,senderKaminoLevel2:q,dmiConsent:z,partner:Y=""}=s,{buckets:W=[],cobrand:Z="",dv360:Q=""}=r,X=v[t]||v[o.MAIL]
;return{i13n:M({bka:D.toString(),bkg:_.toString(),colo:b,lu:C,site:X,device:S,
region:y,lang:N,axid:T,axids:H},k?{ud:k}:null,G?{ubid:G}:null,{tbla_id:j,
bucket:W},l?{feature:F({client:t,benjiFeatures:d})}:null,{cobrand:Y||Z,
partner:Y||Z,url:L,axidDv360:Q},K?{abk:K}:null,{usercountry:I.toUpperCase(),
toscountry:h.toUpperCase()},P({spaceId:B,senderDomain:V,senderKaminoLevel1:x,
senderKaminoLevel2:q}),{dmi_consent:"true"===z}),feature:{headerBidding:!1,
enableYahooPrebid:E,enableRefreshDebounce:!!E,enableNTSFallback:!1,
enableEdgeToEdge:!1,enableAdStacking:a,collapseWhenNoFill:R,enablef10d509c:i,
disableAssertiveYield:t===o.LOGIN||t===o.AOL_LOGIN,
enableMediaTypeSizeBlocking:f,enableUserSegments:w,
enableBenjiLoggerFullSampling:A,"prebid-inBannerVideo":A},setting:M({
renderOnStart:!0,consent:{allowOnlyLimitedAds:u,allowOnlyNonPersonalizedAds:g,
allowFirstPartyAds:c},tracking:{debug:!1,metrics:!1,performance:!0}},p?{logger:{
perfOffset:p}}:null),positions:U(n),event:{}}})({config:s,client:r,haqEnabled:d
});void 0!==window.benji?window.benji.start(I):window.benji={benjiConfig:I
},null!=(t=window.benji)&&t.isReady?T({client:r,benji:window.benji,
messageClient:E}):window.addEventListener("benji:ready",(()=>{T({client:r,
benji:window.benji,messageClient:E})})),E.attachListener((e=>{var n
;if((null==e||null==(n=e.data)?void 0:n.name)===i.REFRESH){
const{data:n}=e.data,{config:i,spaceIdHasChanged:o,redefineTargeting:s=!1,redefinePositionTargeting:r=!1,targetingConfig:a={}}=n,{spaceId:d,senderKaminoLevel1:E,senderKaminoLevel2:g,senderDomain:m}=a,O="abp"===a.adBlocker
;var t;if(window._YMIframeConfig=i,s)null==(t=window.benji)||t.updateI13N(P({
spaceId:d,senderDomain:m,senderKaminoLevel1:E,senderKaminoLevel2:g}))
;const{positions:I}=i;c&&I&&I.length!==c.length?(G({oldPositions:c,
removeContainers:!0}),j({renderConfig:i})):r?(G({oldPositions:c}),j({
renderConfig:M({},i,{targetingConfig:a})})):((e,n)=>{var t
;const{isABPDetected:i,spaceIdHasChanged:o}=n||{};if(i){
const n=null==e?void 0:e.some((e=>{let{div:n}=e;return n===L[u.LREC]
})),t=null==e?void 0:e.some((e=>{let{div:n}=e;return n===L[u.LREC4]
})),i=null==e?void 0:e.every((e=>{let{adLocation:n}=e;return n.includes(l)}))
;var s,r
;if(n&&t&&i)return o?void(null==(r=window.benji)||r.refresh([L[u.LREC],L[u.LREC4]],{
checkViewport:!1})):void(null==(s=window.benji)||s.refresh([L[u.LREC]],{
checkViewport:!1}))}null==(t=window.benji)||t.refresh(f,{checkViewport:!1})
})(I,{isABPDetected:O,spaceIdHasChanged:o})}}))},V=e=>{new b({mode:n.IFRAME,
targetOrigin:"*"}).sendRequestMessage(i.INIT_ERROR,e)};(()=>{var e
;window.googletag=window.googletag||{cmd:[]}
;const n=(null==(e=window.location.hash)?void 0:e.substring(1))||"",t=(e=>{
const n={};if(e){const t=e.substring(1).split("&");for(let e=0;e<t.length;e++){
const i=t[e].split("=");n[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")
}}return n})(window.location.search),i=t.ymreqid,o=t.client,r="1"===t[s.HAQ]
;let a={};if(!n){const e="Config hash is empty";throw V({error:e,ymreqid:i
}),new Error(e)}try{const e=n.split("=")[1]||"{}"
;a=JSON.parse(decodeURIComponent(e))}catch(d){if(V({
error:"Failed to parse config",ymreqid:i}),S())throw d;return}
window._YMIframeConfig=a,K({config:a,client:o,haqEnabled:r})})()})()})();