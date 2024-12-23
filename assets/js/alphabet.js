(()=>{"use strict";var e=function(e){return e.getAttribute("href")},t=function(t){return document.querySelector(e(t))},o=function(t){window.history.pushState?window.history.pushState(null,null,e(t)):window.location.hash=e(t)},n=document.getElementById("dark-mode"),i=document.documentElement,a=function(){i.classList.add("dark"),localStorage.setItem("theme","dark"),i.setAttribute("data-theme","dark"),n.checked=!0},r=function(){i.classList.remove("dark"),localStorage.setItem("theme","light"),i.setAttribute("data-theme","light"),n.checked=!1},s=function(){n.checked?a():r()},d=window.CustomEvent;function l(e,t){var o="on"+t.type.toLowerCase();return"function"==typeof e[o]&&e[o](t),e.dispatchEvent(t)}function c(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement?e.parentElement:e.parentNode?e.parentNode.host:null}return null}function u(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function h(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function m(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function g(e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])');var o=e.querySelector(t.join(", "));if(!o&&"attachShadow"in Element.prototype)for(var n=e.querySelectorAll("*"),i=0;i<n.length&&!(n[i].tagName&&n[i].shadowRoot&&(o=g(n[i].shadowRoot)));i++);return o}function f(e){return e.isConnected||document.body.contains(e)}function p(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var o=y.formSubmitter;if(!o){var n=e.target;o=("getRootNode"in n&&n.getRootNode()||document).activeElement}return o&&o.form===t?o:null}function v(e){if(!e.defaultPrevented){var t=e.target,o=y.imagemapUseValue,n=p(e);null===o&&n&&(o=n.value);var i=c(t);if(i)"dialog"===(n&&n.getAttribute("formmethod")||t.getAttribute("method"))&&(e.preventDefault(),null!=o?i.close(o):i.close())}}function b(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",v,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,o=!1,n=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),i=function(i){if(i.target===e){var a="DOMNodeRemoved";o|=i.type.substr(0,14)===a,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,i)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}d&&"object"!=typeof d||((d=function(e,t){t=t||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),o}).prototype=window.Event.prototype),b.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&f(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),y.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=g(this.dialog_)),u(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!f(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!y.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),o=function(e,o){return!(void 0===t[e]||t[e]===o)};if(t.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,y.needsCentering(this.dialog_)?(y.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new d("close",{bubbles:!1,cancelable:!1});l(this.dialog_,t)}};var y={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],n=null;try{n=o.cssRules}catch(e){}if(n)for(var i=0;i<n.length;++i){var a=n[i],r=null;try{r=document.querySelectorAll(a.selectorText)}catch(e){}if(r&&h(r,e)){var s=a.style.getPropertyValue("top"),d=a.style.getPropertyValue("bottom");if(s&&"auto"!==s||d&&"auto"!==d)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!y.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new b(e)},registerDialog:function(e){e.showModal||y.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var o=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&o.push(t),o=o.concat(t.querySelectorAll("dialog")))})),o.length&&e(o)})))}};if(y.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},y.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},y.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,o=0;e=this.pendingDialogStack[o];++o)e.updateZIndex(--t,--t),0===o&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},y.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=c(e);){for(var t,o=0;t=this.pendingDialogStack[o];++o)if(t.dialog===e)return 0===o;e=e.parentElement}return!1},y.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),u(t),void 0!==this.forwardTab_)){var o=this.pendingDialogStack[0];return o.dialog.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?o.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}},y.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new d("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&l(o.dialog,t)&&o.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},y.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},y.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},y.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},y.dm=new y.DialogManager,y.formSubmitter=null,y.imagemapUseValue=null,void 0===window.HTMLDialogElement){var w=document.createElement("form");if(w.setAttribute("method","dialog"),"dialog"!==w.method){var _=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(_){var E=_.get;_.get=function(){return m(this)?"dialog":E.call(this)};var k=_.set;_.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):k.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",_)}}document.addEventListener("click",(function(e){if(y.formSubmitter=null,y.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e)t=e.composedPath().shift()||t;if(t&&m(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;y.imagemapUseValue=e.offsetX+","+e.offsetY}c(t)&&(y.formSubmitter=t)}}}),!1),document.addEventListener("submit",(function(e){var t=e.target;if(!c(t)){var o=p(e);"dialog"===(o&&o.getAttribute("formmethod")||t.getAttribute("method"))&&e.preventDefault()}}));var M=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!m(this))return M.call(this);var e=c(this);e&&e.close()}}const D=y;var S,L=["dot","dash","space","separator","wpm","frequency","type","alphabet"],T=function(e){return"".concat("morse-code-settings-").concat(e)},x=function(e,t){localStorage.setItem(T(e),t)},A=function(){L.forEach((function(e){var t=document.getElementById(e);t&&x(e,t.value)}))};!function(){!function(e,t,o){try{var n=document.getElementById(e),i=document.getElementById(t),a=document.getElementById(o);return!!(n&&i&&a)&&("function"!=typeof HTMLDialogElement&&D.registerDialog(n),i.addEventListener("click",(function(){return n.showModal()})),a.addEventListener("click",(function(){return n.close()})),!0)}catch(e){return console.error("Error occurred:",e),!1}}("settings-modal","settings-open","settings-close");var e=document.getElementById("settings-close");e&&e.addEventListener("click",A),L.forEach((function(e){var t=document.getElementById(e);t&&t.addEventListener("change",(function(){return x(e,t.value)}))}))}(),document.querySelectorAll(".show-more-rows").forEach((function(e){e.addEventListener("click",(function(){e.parentNode.querySelectorAll(".hidden").forEach((function(e){e.classList.remove("hidden")})),e.classList.add("hidden")}))})),(S=document.querySelectorAll(".tab")).length>0&&S.forEach((function(e){e.addEventListener("click",(function(n){n.preventDefault(),function(e){e.forEach((function(e){e.classList.remove("tab-active"),t(e).classList.add("hidden")}))}(S),function(e){e.classList.add("tab-active"),t(e).classList.remove("hidden"),o(e)}(e)}))})),n.addEventListener("change",s),"dark"===localStorage.getItem("theme")||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?a():r()})();