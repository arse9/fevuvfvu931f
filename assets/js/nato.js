(()=>{var e={839:(e,t,n)=>{"use strict";t.rj=void 0;const o=n(483),r=new Uint8Array(25718.875);function i(e,t){for(let n=e/8;n<Math.ceil(t/8);n++)r[n]=255}!function(...e){for(const t of e){const e=t.charCodeAt(0),n=Math.floor(e/8),o=e%8;r[n]=r[n]^1<<o}}(" ","\n","\t","\v","*","/","&",":",";",".",",","?","=","་","፡","​");for(const e of o.UNICODE_RANGES)i(e[0],e[1]);t.rj=function(e){let t=0,n=!1;for(let o=0;o<e.length;o++){const i=e.charCodeAt(o),a=Math.floor(i/8),c=i%8,u=r[a],l=1==(u>>c&1);t+=l&&(n||255===u),n=!l}return t+=n,t}},764:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BURMESE_UNICODE_RANGE=void 0,t.BURMESE_UNICODE_RANGE=[[4096,4255]]},729:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CJK_UNICODE_RANGES=void 0,t.CJK_UNICODE_RANGES=[[19968,40959],[13312,19903],[131072,173791],[173824,177983],[177984,178207],[178208,183983],[183984,191471],[196608,201551],[201552,205743],[63744,64255],[194560,195103],[12032,12255],[11904,12031],[12288,12351],[13056,13311],[65072,65103]]},483:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UNICODE_RANGES=void 0;const o=n(764),r=n(729),i=n(142),a=n(462),c=n(143),u=n(621),l=n(535);t.UNICODE_RANGES=[...u.THAI_UNICODE_RANGE,...c.LAO_UNICODE_RANGE,...o.BURMESE_UNICODE_RANGE,...a.KHMER_UNICODE_RANGE,...i.JAVANESE_UNICODE_RANGE,...l.VAI_UNICODE_RANGE,...r.CJK_UNICODE_RANGES]},142:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JAVANESE_UNICODE_RANGE=void 0,t.JAVANESE_UNICODE_RANGE=[[43392,43487]]},462:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KHMER_UNICODE_RANGE=void 0,t.KHMER_UNICODE_RANGE=[[6016,6143]]},143:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LAO_UNICODE_RANGE=void 0,t.LAO_UNICODE_RANGE=[[3712,3839]]},621:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.THAI_UNICODE_RANGE=void 0,t.THAI_UNICODE_RANGE=[[3584,3711]]},535:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VAI_UNICODE_RANGE=void 0,t.VAI_UNICODE_RANGE=[[42240,42559]]},576:function(e){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var t;t=function(){return function(){var e={686:function(e,t,n){"use strict";n.d(t,{default:function(){return w}});var o=n(279),r=n.n(o),i=n(370),a=n.n(i),c=n(817),u=n.n(c);function l(e){try{return document.execCommand(e)}catch(e){return!1}}var s=function(e){var t=u()(e);return l("cut"),t},d=function(e,t){var n=function(e){var t="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[t?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=e,n}(e);t.container.appendChild(n);var o=u()(n);return l("copy"),n.remove(),o},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof e?n=d(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?n=d(e.value,t):(n=u()(e),l("copy")),n};function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,o=e.container,r=e.target,i=e.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==m(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?f(i,{container:o}):r?"cut"===n?s(r):f(r,{container:o}):void 0};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o,r,i=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o=this,!(r=n)||"object"!==h(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o):r}}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function E(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,o,r=v(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this)).resolveOptions(t),n.listenClick(e),n}return t=i,n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy",o=p({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(o?"success":"error",{action:n,text:o,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return E("action",e)}},{key:"defaultTarget",value:function(e){var t=E("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return E("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],o=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(e,t)}},{key:"cut",value:function(e){return s(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],n&&g(t.prototype,n),o&&g(t,o),i}(r()),w=_},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var o=n(828);function r(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function i(e,t,n,r){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,o,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,o,i)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var o=n(879),r=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(o.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(o.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(e),o.removeAllRanges(),o.addRange(r),t=o.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function r(){o.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,a=o.length;i<a;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(686)}().default},e.exports=t()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";var e,t="loading"in HTMLImageElement.prototype,o="loading"in HTMLIFrameElement.prototype,r="onscroll"in window;function i(e){var t,n,o=[];"picture"===e.parentNode.tagName.toLowerCase()&&((n=(t=e.parentNode).querySelector("source[data-lazy-remove]"))&&t.removeChild(n),o=Array.prototype.slice.call(e.parentNode.querySelectorAll("source"))),o.push(e),o.forEach((function(e){e.hasAttribute("data-lazy-srcset")&&(e.setAttribute("srcset",e.getAttribute("data-lazy-srcset")),e.removeAttribute("data-lazy-srcset"))})),e.setAttribute("src",e.getAttribute("data-lazy-src")),e.removeAttribute("data-lazy-src")}function a(n){var i=document.createElement("div");for(i.innerHTML=function(n){var i=n.textContent||n.innerHTML,a="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 "+((i.match(/width=['"](\d+)['"]/)||!1)[1]||1)+" "+((i.match(/height=['"](\d+)['"]/)||!1)[1]||1)+"%27%3E%3C/svg%3E";return(/<img/gim.test(i)&&!t||/<iframe/gim.test(i)&&!o)&&r&&(i=void 0===e?i.replace(/(?:\r\n|\r|\n|\t| )src=/g,' lazyload="1" src='):(i=i.replace("<source",'<source srcset="'+a+'" data-lazy-remove="true"></source>\n<source')).replace(/(?:\r\n|\r|\n|\t| )srcset=/g," data-lazy-srcset=").replace(/(?:\r\n|\r|\n|\t| )src=/g,' src="'+a+'" data-lazy-src=')),i}(n);i.firstChild;){var a=i.firstChild;if(r&&void 0!==e&&a.tagName&&(("img"===a.tagName.toLowerCase()||"picture"===a.tagName.toLowerCase())&&!t||"iframe"===a.tagName.toLowerCase()&&!o)){var c="picture"===a.tagName.toLowerCase()?i.querySelector("img"):a;e.observe(c)}n.parentNode.insertBefore(a,n)}n.parentNode.removeChild(n)}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),"IntersectionObserver"in window&&(e=new IntersectionObserver((function(e,t){e.forEach((function(e){if(0!==e.intersectionRatio){var n=e.target;t.unobserve(n),i(n)}}))}),{rootMargin:"0px 0px 256px 0px",threshold:.01}));var c=function(){document.querySelectorAll("noscript.loading-lazy").forEach((function(e){return a(e)})),void 0!==window.matchMedia&&window.matchMedia("print").addListener((function(e){e.matches&&document.querySelectorAll('img[loading="lazy"][data-lazy-src],iframe[loading="lazy"][data-lazy-src]').forEach((function(e){i(e)}))}))};/comp|inter/.test(document.readyState)?c():"addEventListener"in document?document.addEventListener("DOMContentLoaded",(function(){c()})):document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&c()}));var u=document.getElementById("input"),l=document.getElementById("output"),s=(document.getElementById("play-input"),document.getElementById("stop-input"),document.querySelector(".play-morse"),document.querySelector(".stop-morse"),document.getElementById("input-word-count")),d=document.getElementById("input-character-count"),f=document.getElementById("output-word-count"),m=document.getElementById("output-character-count"),p=(document.getElementById("input-bit-count"),document.getElementById("input-byte-count"),document.getElementById("output-bit-count"),document.getElementById("output-byte-count"),document.getElementById("play-sos"),document.getElementById("stop-sos"),document.getElementById("dash"),document.getElementById("dot"),document.getElementById("space"),document.getElementById("separator"),document.getElementById("alphabet"),document.getElementById("unit"),document.getElementById("type"),document.getElementById("wpm"),document.getElementById("frequency"),window.speechSynthesis),h=5,g=100,y=null,v=function(e,t){e.classList.remove("hidden"),t.classList.add("hidden")},b=function(){y&&p&&p.cancel()},E=function(e,t,n,o,r,i){r&&function(e){e.addEventListener("input",(function(){h=e.value,y&&(y.rate=h/10)}))}(r),i&&function(e){e.addEventListener("input",(function(){g=e.value,y&&(y.volume=g/100)}))}(i),t.addEventListener("click",(function(){!function(e){if(e.length>0&&p){b();var r=e.replace(/\(Space\)/g,",");(y=new SpeechSynthesisUtterance(r)).lang=o,y.rate=h/10,y.volume=g/100,y.onend=function(){return v(t,n)},p.speak(y),function(e,t){e.classList.add("hidden"),t.classList.remove("hidden")}(t,n)}}(e.value)})),n.addEventListener("click",(function(){b(),v(t,n)}))},_=n(576),w=document.querySelectorAll(".clipboard"),S=window.CustomEvent;function A(e,t){var n="on"+t.type.toLowerCase();return"function"==typeof e[n]&&e[n](t),e.dispatchEvent(t)}function I(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement?e.parentElement:e.parentNode?e.parentNode.host:null}return null}function N(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function M(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function O(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function k(e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(t.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var o=e.querySelectorAll("*"),r=0;r<o.length&&!(o[r].tagName&&o[r].shadowRoot&&(n=k(o[r].shadowRoot)));r++);return n}function D(e){return e.isConnected||document.body.contains(e)}function L(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var n=T.formSubmitter;if(!n){var o=e.target;n=("getRootNode"in o&&o.getRootNode()||document).activeElement}return n&&n.form===t?n:null}function x(e){if(!e.defaultPrevented){var t=e.target,n=T.imagemapUseValue,o=L(e);null===n&&o&&(n=o.value);var r=I(t);if(r)"dialog"===(o&&o.getAttribute("formmethod")||t.getAttribute("method"))&&(e.preventDefault(),null!=n?r.close(n):r.close())}}function C(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",x,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,n=!1,o=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),r=function(r){if(r.target===e){var i="DOMNodeRemoved";n|=r.type.substr(0,14)===i,window.clearTimeout(t),t=window.setTimeout(o,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}S&&"object"!=typeof S||((S=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),C.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&D(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),T.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=k(this.dialog_)),N(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!D(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!T.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,T.needsCentering(this.dialog_)?(T.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new S("close",{bubbles:!1,cancelable:!1});A(this.dialog_,t)}};var T={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],o=null;try{o=n.cssRules}catch(e){}if(o)for(var r=0;r<o.length;++r){var i=o[r],a=null;try{a=document.querySelectorAll(i.selectorText)}catch(e){}if(a&&M(a,e)){var c=i.style.getPropertyValue("top"),u=i.style.getPropertyValue("bottom");if(c&&"auto"!==c||u&&"auto"!==u)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!T.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new C(e)},registerDialog:function(e){e.showModal||T.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var n=[];t.forEach((function(e){for(var t,o=0;t=e.removedNodes[o];++o)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))})),n.length&&e(n)})))}};if(T.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},T.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},T.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var o=this.pendingDialogStack[0];o?(o.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},T.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=I(e);){for(var t,n=0;t=this.pendingDialogStack[n];++n)if(t.dialog===e)return 0===n;e=e.parentElement}return!1},T.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),N(t),void 0!==this.forwardTab_)){var n=this.pendingDialogStack[0];return n.dialog.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}},T.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new S("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&A(n.dialog,t)&&n.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},T.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},T.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},T.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},T.dm=new T.DialogManager,T.formSubmitter=null,T.imagemapUseValue=null,void 0===window.HTMLDialogElement){var R=document.createElement("form");if(R.setAttribute("method","dialog"),"dialog"!==R.method){var B=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(B){var U=B.get;B.get=function(){return O(this)?"dialog":U.call(this)};var j=B.set;B.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):j.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",B)}}document.addEventListener("click",(function(e){if(T.formSubmitter=null,T.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e)t=e.composedPath().shift()||t;if(t&&O(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;T.imagemapUseValue=e.offsetX+","+e.offsetY}I(t)&&(T.formSubmitter=t)}}}),!1),document.addEventListener("submit",(function(e){var t=e.target;if(!I(t)){var n=L(e);"dialog"===(n&&n.getAttribute("formmethod")||t.getAttribute("method"))&&e.preventDefault()}}));var P=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!O(this))return P.call(this);var e=I(this);e&&e.close()}}const H=T;var G=["dot","dash","space","separator","wpm","frequency","type","alphabet"],z=function(e){return"".concat("morse-code-settings-").concat(e)},F=function(e,t){localStorage.setItem(z(e),t)},q=function(){G.forEach((function(e){var t=document.getElementById(e);t&&F(e,t.value)}))},K=document.getElementById("dark-mode"),V=document.documentElement,J=function(){V.classList.add("dark"),localStorage.setItem("theme","dark"),V.setAttribute("data-theme","dark"),K.checked=!0},Y=function(){V.classList.remove("dark"),localStorage.setItem("theme","light"),V.setAttribute("data-theme","light"),K.checked=!1},Z=function(){K.checked?J():Y()},X=n(839);function Q(e){return function(e){if(Array.isArray(e))return ee(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||$(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(c.push(o.value),c.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return c}}(e,t)||$(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){if(e){if("string"==typeof e)return ee(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var te=document.getElementById("play-input"),ne=document.getElementById("stop-input"),oe=document.getElementById("play-output"),re=document.getElementById("stop-output"),ie=document.getElementById("speed"),ae=document.getElementById("volume"),ce={A:"Alfa",B:"Bravo",C:"Charlie",D:"Delta",E:"Echo",F:"Foxtrot",G:"Golf",H:"Hotel",I:"India",J:"Juliett",K:"Kilo",L:"Lima",M:"Mike",N:"November",O:"Oscar",P:"Papa",Q:"Quebec",R:"Romeo",S:"Sierra",T:"Tango",U:"Uniform",V:"Victor",W:"Whiskey",X:"Xray",Y:"Yankee",Z:"Zulu",0:"Zero",1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Niner"},ue=Object.fromEntries(Object.entries(ce).map((function(e){var t=W(e,2),n=t[0];return[t[1].toUpperCase(),n]}))),le=function(e,t,n){var o=(0,X.rj)(e),r=Q(e).length;t.innerText=o.toString(),n.innerText=r.toString()},se=function(){le(u.value,s,d),le(l.value,f,m)};u.addEventListener("input",(function(){var e;l.value=(e=u.value,Array.from(e.toUpperCase()).map((function(e){return" "===e?"(Space)":ce[e]||e})).join(" ").replace(/\s\s+/g," ").trim()),se()})),l.addEventListener("input",(function(){u.value=l.value.split(/\s+/).map((function(e){return"(Space)"===e?" ":ue[e.toUpperCase()]||e})).join(""),se()})),se(),E(u,te,ne,"en-US",ie,ae),E(l,oe,re,"en-US",ie,ae),function(){!function(e,t,n){try{var o=document.getElementById(e),r=document.getElementById(t),i=document.getElementById(n);return!!(o&&r&&i)&&("function"!=typeof HTMLDialogElement&&H.registerDialog(o),r.addEventListener("click",(function(){return o.showModal()})),i.addEventListener("click",(function(){return o.close()})),!0)}catch(e){return console.error("Error occurred:",e),!1}}("settings-modal","settings-open","settings-close");var e=document.getElementById("settings-close");e&&e.addEventListener("click",q),G.forEach((function(e){var t=document.getElementById(e);t&&t.addEventListener("change",(function(){return F(e,t.value)}))}))}(),w.forEach((function(e){new _(e).on("success",(function(e){if(e.text){var t=e.trigger,n=t.getAttribute("data-tip");t.setAttribute("data-tip",t.getAttribute("data-copied")),setTimeout((function(){t.setAttribute("data-tip",n)}),1e3)}}))})),document.querySelectorAll(".show-more-rows").forEach((function(e){e.addEventListener("click",(function(){e.parentNode.querySelectorAll(".hidden").forEach((function(e){e.classList.remove("hidden")})),e.classList.add("hidden")}))})),K.addEventListener("change",Z),"dark"===localStorage.getItem("theme")||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?J():Y()})()})();