(()=>{var t={839:(t,e,n)=>{"use strict";e.rj=void 0;const o=n(483),r=new Uint8Array(25718.875);function i(t,e){for(let n=t/8;n<Math.ceil(e/8);n++)r[n]=255}!function(...t){for(const e of t){const t=e.charCodeAt(0),n=Math.floor(t/8),o=t%8;r[n]=r[n]^1<<o}}(" ","\n","\t","\v","*","/","&",":",";",".",",","?","=","་","፡","​");for(const t of o.UNICODE_RANGES)i(t[0],t[1]);e.rj=function(t){let e=0,n=!1;for(let o=0;o<t.length;o++){const i=t.charCodeAt(o),a=Math.floor(i/8),c=i%8,u=r[a],l=1==(u>>c&1);e+=l&&(n||255===u),n=!l}return e+=n,e}},764:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BURMESE_UNICODE_RANGE=void 0,e.BURMESE_UNICODE_RANGE=[[4096,4255]]},729:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CJK_UNICODE_RANGES=void 0,e.CJK_UNICODE_RANGES=[[19968,40959],[13312,19903],[131072,173791],[173824,177983],[177984,178207],[178208,183983],[183984,191471],[196608,201551],[201552,205743],[63744,64255],[194560,195103],[12032,12255],[11904,12031],[12288,12351],[13056,13311],[65072,65103]]},483:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UNICODE_RANGES=void 0;const o=n(764),r=n(729),i=n(142),a=n(462),c=n(143),u=n(621),l=n(535);e.UNICODE_RANGES=[...u.THAI_UNICODE_RANGE,...c.LAO_UNICODE_RANGE,...o.BURMESE_UNICODE_RANGE,...a.KHMER_UNICODE_RANGE,...i.JAVANESE_UNICODE_RANGE,...l.VAI_UNICODE_RANGE,...r.CJK_UNICODE_RANGES]},142:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JAVANESE_UNICODE_RANGE=void 0,e.JAVANESE_UNICODE_RANGE=[[43392,43487]]},462:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.KHMER_UNICODE_RANGE=void 0,e.KHMER_UNICODE_RANGE=[[6016,6143]]},143:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LAO_UNICODE_RANGE=void 0,e.LAO_UNICODE_RANGE=[[3712,3839]]},621:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.THAI_UNICODE_RANGE=void 0,e.THAI_UNICODE_RANGE=[[3584,3711]]},535:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VAI_UNICODE_RANGE=void 0,e.VAI_UNICODE_RANGE=[[42240,42559]]},576:function(t){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var e;e=function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return _}});var o=n(279),r=n.n(o),i=n(370),a=n.n(i),c=n(817),u=n.n(c);function l(t){try{return document.execCommand(t)}catch(t){return!1}}var s=function(t){var e=u()(t);return l("cut"),e},d=function(t,e){var n=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=t,n}(t);e.container.appendChild(n);var o=u()(n);return l("copy"),n.remove(),o},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=d(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=d(t.value,e):(n=u()(t),l("copy")),n};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}var p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,r=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==h(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?f(i,{container:o}):r?"cut"===n?s(r):f(r,{container:o}):void 0};function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o,r,i=b(t);if(e){var a=b(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o=this,!(r=n)||"object"!==m(r)&&"function"!=typeof r?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(o):r}}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function E(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(i,t);var e,n,o,r=g(i);function i(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return e=i,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===m(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",o=p({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(o?"success":"error",{action:n,text:o,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return E("action",t)}},{key:"defaultTarget",value:function(t){var e=E("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return E("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],o=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(t,e)}},{key:"cut",value:function(t){return s(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],n&&v(e.prototype,n),o&&v(e,o),i}(r()),_=w},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var o=n(828);function r(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var o=n(879),r=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default},t.exports=e()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";var t=document.getElementById("input"),e=document.getElementById("output"),o=document.getElementById("play-input"),r=document.getElementById("stop-input"),i=(document.querySelector(".play-morse"),document.querySelector(".stop-morse"),document.getElementById("input-word-count")),a=document.getElementById("input-character-count"),c=document.getElementById("output-word-count"),u=document.getElementById("output-character-count"),l=(document.getElementById("input-bit-count"),document.getElementById("input-byte-count"),document.getElementById("output-bit-count"),document.getElementById("output-byte-count"),document.getElementById("play-sos"),document.getElementById("stop-sos"),document.getElementById("dash")),s=document.getElementById("dot"),d=document.getElementById("space"),f=document.getElementById("separator"),h=(document.getElementById("alphabet"),document.getElementById("unit"),document.getElementById("type")),p=(document.getElementById("wpm"),document.getElementById("frequency")),m={A:".-",B:"-...",C:".. .",D:"-..",E:".",F:".-.",G:"--.",H:"....",I:"..",J:"-.-.",K:"-.-",L:"⸺",M:"--",N:"-.",O:". .",P:".....",Q:"..-.",R:". ..",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:".-..",Y:".. ..",Z:"... .",0:"⸻",1:".--.",2:"..-..",3:"...-.",4:"....-",5:"---",6:"......",7:"--..",8:"-....",9:"-..-",".":"..--..",",":".-.-","?":"-..-.","!":"---.","&":". ...",";":"... ..",":":"-.- . .","\\":"..-. .-..","/":"..- -","-":"....  .-...","(":"..... -.",")":"..... .. ..",'"':"..-. -."," ":"/"};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function y(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */y=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new T(o||[]);return r(a,"_invoke",{value:I(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",g={};function b(){}function E(){}function w(){}var _={};l(_,a,(function(){return this}));var S=Object.getPrototypeOf,A=S&&S(S(D([])));A&&A!==n&&o.call(A,a)&&(_=A);var k=w.prototype=b.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(r,i,a,c){var u=d(t[r],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==v(s)&&o.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,o){function r(){return new e((function(e,r){n(t,o,e,r)}))}return i=i?i.then(r,r):r()}})}function I(e,n,o){var r=f;return function(i,a){if(r===p)throw Error("Generator is already running");if(r===m){if("throw"===i)throw a;return{value:t,done:!0}}for(o.method=i,o.arg=a;;){var c=o.delegate;if(c){var u=O(c,o);if(u){if(u===g)continue;return u}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===f)throw r=m,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=p;var l=d(e,n,o);if("normal"===l.type){if(r=o.done?m:h,l.arg===g)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(r=m,o.method="throw",o.arg=l.arg)}}}function O(e,n){var o=n.method,r=e.iterator[o];if(r===t)return n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),g;var i=d(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function D(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(v(e)+" is not iterable")}return E.prototype=w,r(k,"constructor",{value:w,configurable:!0}),r(w,"constructor",{value:E,configurable:!0}),E.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},x(L.prototype),l(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new L(s(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(k),l(k,u,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=D,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(o,r){return c.type="throw",c.arg=e,n.next=o,r&&(n.method="next",n.arg=t),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;M(n)}return r}}throw Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:D(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=t),g}},e}function g(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return b(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function E(t,e,n,o,r,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(o,r)}var w=n(576),_=document.querySelectorAll(".clipboard"),S=window.CustomEvent;function A(t,e){var n="on"+e.type.toLowerCase();return"function"==typeof t[n]&&t[n](e),t.dispatchEvent(e)}function k(t){for(;t;){if("dialog"===t.localName)return t;t=t.parentElement?t.parentElement:t.parentNode?t.parentNode.host:null}return null}function x(t){for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;t&&t.blur&&t!==document.body&&t.blur()}function L(t,e){for(var n=0;n<t.length;++n)if(t[n]===e)return!0;return!1}function I(t){return!(!t||!t.hasAttribute("method"))&&"dialog"===t.getAttribute("method").toLowerCase()}function O(t){var e=["button","input","keygen","select","textarea"].map((function(t){return t+":not([disabled])"}));e.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=t.querySelector(e.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var o=t.querySelectorAll("*"),r=0;r<o.length&&!(o[r].tagName&&o[r].shadowRoot&&(n=O(o[r].shadowRoot)));r++);return n}function N(t){return t.isConnected||document.body.contains(t)}function M(t){if(t.submitter)return t.submitter;var e=t.target;if(!(e instanceof HTMLFormElement))return null;var n=C.formSubmitter;if(!n){var o=t.target;n=("getRootNode"in o&&o.getRootNode()||document).activeElement}return n&&n.form===e?n:null}function T(t){if(!t.defaultPrevented){var e=t.target,n=C.imagemapUseValue,o=M(t);null===n&&o&&(n=o.value);var r=k(e);if(r)"dialog"===(o&&o.getAttribute("formmethod")||e.getAttribute("method"))&&(t.preventDefault(),null!=n?r.close(n):r.close())}}function D(t){if(this.dialog_=t,this.replacedStyleTop_=!1,this.openAsModal_=!1,t.hasAttribute("role")||t.setAttribute("role","dialog"),t.show=this.show.bind(this),t.showModal=this.showModal.bind(this),t.close=this.close.bind(this),t.addEventListener("submit",T,!1),"returnValue"in t||(t.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(t,{attributes:!0,attributeFilter:["open"]})}else{var e,n=!1,o=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),r=function(r){if(r.target===t){var i="DOMNodeRemoved";n|=r.type.substr(0,14)===i,window.clearTimeout(e),e=window.setTimeout(o,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(e){t.addEventListener(e,r)}))}Object.defineProperty(t,"open",{set:this.setOpen.bind(this),get:t.hasAttribute.bind(t,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}S&&"object"!=typeof S||((S=function(t,e){e=e||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail||null),n}).prototype=window.Event.prototype),D.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&N(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),C.dm.removeDialog(this))},setOpen:function(t){t?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(t){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var e=document.createElement("div");this.dialog_.insertBefore(e,this.dialog_.firstChild),e.tabIndex=-1,e.focus(),this.dialog_.removeChild(e)}var n=document.createEvent("MouseEvents");n.initMouseEvent(t.type,t.bubbles,t.cancelable,window,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),this.dialog_.dispatchEvent(n),t.stopPropagation()},focus_:function(){var t=this.dialog_.querySelector("[autofocus]:not([disabled])");!t&&this.dialog_.tabIndex>=0&&(t=this.dialog_),t||(t=O(this.dialog_)),x(document.activeElement),t&&t.focus()},updateZIndex:function(t,e){if(t<e)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=t,this.backdrop_.style.zIndex=e},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!N(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!C.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(t){for(;t&&t!==document.body;){var e=window.getComputedStyle(t),n=function(t,n){return!(void 0===e[t]||e[t]===n)};if(e.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===e.isolation||"fixed"===e.position||"touch"===e.webkitOverflowScrolling)return!0;t=t.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,C.needsCentering(this.dialog_)?(C.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var e=new S("close",{bubbles:!1,cancelable:!1});A(this.dialog_,e)}};var C={reposition:function(t){var e=document.body.scrollTop||document.documentElement.scrollTop,n=e+(window.innerHeight-t.offsetHeight)/2;t.style.top=Math.max(e,n)+"px"},isInlinePositionSetByStylesheet:function(t){for(var e=0;e<document.styleSheets.length;++e){var n=document.styleSheets[e],o=null;try{o=n.cssRules}catch(t){}if(o)for(var r=0;r<o.length;++r){var i=o[r],a=null;try{a=document.querySelectorAll(i.selectorText)}catch(t){}if(a&&L(a,t)){var c=i.style.getPropertyValue("top"),u=i.style.getPropertyValue("bottom");if(c&&"auto"!==c||u&&"auto"!==u)return!0}}}return!1},needsCentering:function(t){return"absolute"===window.getComputedStyle(t).position&&(!("auto"!==t.style.top&&""!==t.style.top||"auto"!==t.style.bottom&&""!==t.style.bottom)&&!C.isInlinePositionSetByStylesheet(t))},forceRegisterDialog:function(t){if((window.HTMLDialogElement||t.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",t),"dialog"!==t.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new D(t)},registerDialog:function(t){t.showModal||C.forceRegisterDialog(t)},DialogManager:function(){this.pendingDialogStack=[];var t=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(e){this.forwardTab_=void 0,e.stopPropagation(),t([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(e){var n=[];e.forEach((function(t){for(var e,o=0;e=t.removedNodes[o];++o)e instanceof Element&&("dialog"===e.localName&&n.push(e),n=n.concat(e.querySelectorAll("dialog")))})),n.length&&t(n)})))}};if(C.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},C.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},C.DialogManager.prototype.updateStacking=function(){for(var t,e=this.zIndexHigh_,n=0;t=this.pendingDialogStack[n];++n)t.updateZIndex(--e,--e),0===n&&(this.overlay.style.zIndex=--e);var o=this.pendingDialogStack[0];o?(o.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},C.DialogManager.prototype.containedByTopDialog_=function(t){for(;t=k(t);){for(var e,n=0;e=this.pendingDialogStack[n];++n)if(e.dialog===t)return 0===n;t=t.parentElement}return!1},C.DialogManager.prototype.handleFocus_=function(t){var e=t.composedPath?t.composedPath()[0]:t.target;if(!this.containedByTopDialog_(e)&&document.activeElement!==document.documentElement&&(t.preventDefault(),t.stopPropagation(),x(e),void 0!==this.forwardTab_)){var n=this.pendingDialogStack[0];return n.dialog.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():e!==document.documentElement&&document.documentElement.focus()),!1}},C.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var e=new S("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&A(n.dialog,e)&&n.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},C.DialogManager.prototype.checkDOM_=function(t){this.pendingDialogStack.slice().forEach((function(e){-1!==t.indexOf(e.dialog)?e.downgradeModal():e.maybeHideModal()}))},C.DialogManager.prototype.pushDialog=function(t){var e=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=e)&&(1===this.pendingDialogStack.unshift(t)&&this.blockDocument(),this.updateStacking(),!0)},C.DialogManager.prototype.removeDialog=function(t){var e=this.pendingDialogStack.indexOf(t);-1!==e&&(this.pendingDialogStack.splice(e,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},C.dm=new C.DialogManager,C.formSubmitter=null,C.imagemapUseValue=null,void 0===window.HTMLDialogElement){var R=document.createElement("form");if(R.setAttribute("method","dialog"),"dialog"!==R.method){var P=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(P){var j=P.get;P.get=function(){return I(this)?"dialog":j.call(this)};var B=P.set;P.set=function(t){return"string"==typeof t&&"dialog"===t.toLowerCase()?this.setAttribute("method",t):B.call(this,t)},Object.defineProperty(HTMLFormElement.prototype,"method",P)}}document.addEventListener("click",(function(t){if(C.formSubmitter=null,C.imagemapUseValue=null,!t.defaultPrevented){var e=t.target;if("composedPath"in t)e=t.composedPath().shift()||e;if(e&&I(e.form)){if(!("submit"===e.type&&["button","input"].indexOf(e.localName)>-1)){if("input"!==e.localName||"image"!==e.type)return;C.imagemapUseValue=t.offsetX+","+t.offsetY}k(e)&&(C.formSubmitter=e)}}}),!1),document.addEventListener("submit",(function(t){var e=t.target;if(!k(e)){var n=M(t);"dialog"===(n&&n.getAttribute("formmethod")||e.getAttribute("method"))&&t.preventDefault()}}));var U=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!I(this))return U.call(this);var t=k(this);t&&t.close()}}const G=C;var H,F,V,q,K,z,Y=["dot","dash","space","separator","wpm","frequency","type","alphabet"],J=function(t){return"".concat("morse-code-settings-").concat(t)},X=function(t,e){localStorage.setItem(J(t),e)},Z=function(){Y.forEach((function(t){var e=document.getElementById(t);e&&X(t,e.value)}))},Q=document.getElementById("dark-mode"),W=document.documentElement,$=function(){W.classList.add("dark"),localStorage.setItem("theme","dark"),W.setAttribute("data-theme","dark"),Q.checked=!0},tt=function(){W.classList.remove("dark"),localStorage.setItem("theme","light"),W.setAttribute("data-theme","light"),Q.checked=!1},et=function(){Q.checked?$():tt()},nt=window.speechSynthesis,ot=5,rt=100,it=null,at=function(t,e){t.classList.remove("hidden"),e.classList.add("hidden")},ct=function(){it&&nt&&nt.cancel()},ut=n(839),lt=document.getElementById("play-output"),st=document.getElementById("stop-output"),dt=function(t,e,n){var o,r,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:" ",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"/";if(arguments.length>3&&void 0!==arguments[3]&&arguments[3]){var c=t.trim();if(""===c)o=0,r=0;else{var u=c.split(a).filter((function(t){return""!==t.trim()}));o=u.length,r=u.reduce((function(t,e){return t+e.trim().split(i).filter(Boolean).length}),0)}}else o=(0,ut.rj)(t),r=t.replace(/\s/g,"").length;e.innerText=o.toString(),n.innerText=r.toString()},ft=function(){var n=f.value||" ",o=d.value||"/";dt(t.value,i,a),dt(e.value,c,u,!0,n,o)},ht=function(){var n=t.value.trim(),o=s.value||".",r=l.value||"-",i=d.value||"/",a=f.value||" ";e.value=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:" ";return Array.from(t).map((function(t){var i=t.toUpperCase();return m.hasOwnProperty(i)?m[i].replace(/\./g,e).replace(/-/g,n).replace(/\//g,o).replace(/ /g,r):"#"})).join(r).trim()}(n,o,r,i,a),ft()};t.addEventListener("input",ht),s.addEventListener("input",ht),l.addEventListener("input",ht),d.addEventListener("input",ht),f.addEventListener("input",ht),ft(),H=t,F=o,V=r,q=document.body.getAttribute("data-locale"),K&&function(t){t.addEventListener("input",(function(){ot=t.value,it&&(it.rate=ot/10)}))}(K),z&&function(t){t.addEventListener("input",(function(){rt=t.value,it&&(it.volume=rt/100)}))}(z),F.addEventListener("click",(function(){!function(t){if(t.length>0&&nt){ct();var e=t.replace(/\(Space\)/g,",");(it=new SpeechSynthesisUtterance(e)).lang=q,it.rate=ot/10,it.volume=rt/100,it.onend=function(){return at(F,V)},nt.speak(it),function(t,e){t.classList.add("hidden"),e.classList.remove("hidden")}(F,V)}}(H.value)})),V.addEventListener("click",(function(){ct(),at(F,V)})),function(t,e,n,o,r){var i=null,a=null,c=null,u=!1,l=function(){e.disabled=""===t.value.trim()},s=function(){var t,o,r,l;u&&(null===(t=i)||void 0===t||t.stop(),null===(o=i)||void 0===o||o.disconnect(),null===(r=a)||void 0===r||r.disconnect(),null===(l=c)||void 0===l||l.close(),i=null,a=null,c=null,u=!1,n.classList.add("hidden"),e.classList.remove("hidden"))},d=function(){var t,e=(t=y().mark((function t(e,n,o){var r,l,d,f,h,p;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=function(t,e){a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.3,t+.001),a.gain.setValueAtTime(.3,t+e-.001),a.gain.linearRampToValueAtTime(0,t+e)},u&&s(),"suspended"!==(c=new(window.AudioContext||window.webkitAudioContext)).state){t.next=7;break}return t.next=7,c.resume();case 7:i=c.createOscillator(),a=c.createGain(),i.type=o||"sine",i.frequency.value=n||800,i.connect(a),a.connect(c.destination),a.gain.value=0,l=.1,d=c.currentTime,u=!0,f=g(e),t.prev=18,f.s();case 20:if((h=f.n()).done){t.next=43;break}p=h.value,t.t0=p,t.next="."===t.t0?25:"-"===t.t0?28:"⸺"===t.t0?31:"⸻"===t.t0?34:" "===t.t0?37:"/"===t.t0?39:41;break;case 25:return r(d,l),d+=2*l,t.abrupt("break",41);case 28:return r(d,3*l),d+=4*l,t.abrupt("break",41);case 31:return r(d,6*l),d+=7*l,t.abrupt("break",41);case 34:return r(d,9*l),d+=10*l,t.abrupt("break",41);case 37:return d+=2*l,t.abrupt("break",41);case 39:return d+=4*l,t.abrupt("break",41);case 41:t.next=20;break;case 43:t.next=48;break;case 45:t.prev=45,t.t1=t.catch(18),f.e(t.t1);case 48:return t.prev=48,f.f(),t.finish(48);case 51:i.onended=s,i.start(),i.stop(d+.01),t.next=60;break;case 56:t.prev=56,t.t2=t.catch(0),console.error("Audio playback failed:",t.t2),s();case 60:case"end":return t.stop()}}),t,null,[[0,56],[18,45,48,51]])})),function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){E(i,o,r,a,c,"next",t)}function c(t){E(i,o,r,a,c,"throw",t)}a(void 0)}))});return function(t,n,o){return e.apply(this,arguments)}}();e.addEventListener("click",(function(){var i=t.value;e.classList.add("hidden"),n.classList.remove("hidden");var a=parseFloat(o.value)||800,c=r.value||"sine";d(i,a,c)})),n.addEventListener("click",s),t.addEventListener("input",l),l(),n.classList.add("hidden")}(e,lt,st,p,h),function(){!function(t,e,n){try{var o=document.getElementById(t),r=document.getElementById(e),i=document.getElementById(n);return!!(o&&r&&i)&&("function"!=typeof HTMLDialogElement&&G.registerDialog(o),r.addEventListener("click",(function(){return o.showModal()})),i.addEventListener("click",(function(){return o.close()})),!0)}catch(t){return console.error("Error occurred:",t),!1}}("settings-modal","settings-open","settings-close");var t=document.getElementById("settings-close");t&&t.addEventListener("click",Z),Y.forEach((function(t){var e=document.getElementById(t);e&&e.addEventListener("change",(function(){return X(t,e.value)}))}))}(),_.forEach((function(t){new w(t).on("success",(function(t){if(t.text){var e=t.trigger,n=e.getAttribute("data-tip");e.setAttribute("data-tip",e.getAttribute("data-copied")),setTimeout((function(){e.setAttribute("data-tip",n)}),1e3)}}))})),document.querySelectorAll(".show-more-rows").forEach((function(t){t.addEventListener("click",(function(){t.parentNode.querySelectorAll(".hidden").forEach((function(t){t.classList.remove("hidden")})),t.classList.add("hidden")}))})),Q.addEventListener("change",et),"dark"===localStorage.getItem("theme")||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?$():tt()})()})();