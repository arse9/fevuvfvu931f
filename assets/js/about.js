(()=>{"use strict";var e=document.getElementById("dark-mode"),t=document.documentElement,o=function(){t.classList.add("dark"),localStorage.setItem("theme","dark"),t.setAttribute("data-theme","dark"),e.checked=!0},n=function(){t.classList.remove("dark"),localStorage.setItem("theme","light"),t.setAttribute("data-theme","light"),e.checked=!1},i=function(){e.checked?o():n()},a=window.CustomEvent;function r(e,t){var o="on"+t.type.toLowerCase();return"function"==typeof e[o]&&e[o](t),e.dispatchEvent(t)}function d(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement?e.parentElement:e.parentNode?e.parentNode.host:null}return null}function l(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function s(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function c(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function u(e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])');var o=e.querySelector(t.join(", "));if(!o&&"attachShadow"in Element.prototype)for(var n=e.querySelectorAll("*"),i=0;i<n.length&&!(n[i].tagName&&n[i].shadowRoot&&(o=u(n[i].shadowRoot)));i++);return o}function h(e){return e.isConnected||document.body.contains(e)}function m(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var o=f.formSubmitter;if(!o){var n=e.target;o=("getRootNode"in n&&n.getRootNode()||document).activeElement}return o&&o.form===t?o:null}function g(e){if(!e.defaultPrevented){var t=e.target,o=f.imagemapUseValue,n=m(e);null===o&&n&&(o=n.value);var i=d(t);if(i)"dialog"===(n&&n.getAttribute("formmethod")||t.getAttribute("method"))&&(e.preventDefault(),null!=o?i.close(o):i.close())}}function p(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",g,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,o=!1,n=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),i=function(i){if(i.target===e){var a="DOMNodeRemoved";o|=i.type.substr(0,14)===a,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,i)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}a&&"object"!=typeof a||((a=function(e,t){t=t||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),o}).prototype=window.Event.prototype),p.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&h(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),f.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=u(this.dialog_)),l(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!h(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!f.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),o=function(e,o){return!(void 0===t[e]||t[e]===o)};if(t.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,f.needsCentering(this.dialog_)?(f.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new a("close",{bubbles:!1,cancelable:!1});r(this.dialog_,t)}};var f={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],n=null;try{n=o.cssRules}catch(e){}if(n)for(var i=0;i<n.length;++i){var a=n[i],r=null;try{r=document.querySelectorAll(a.selectorText)}catch(e){}if(r&&s(r,e)){var d=a.style.getPropertyValue("top"),l=a.style.getPropertyValue("bottom");if(d&&"auto"!==d||l&&"auto"!==l)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!f.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new p(e)},registerDialog:function(e){e.showModal||f.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var o=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&o.push(t),o=o.concat(t.querySelectorAll("dialog")))})),o.length&&e(o)})))}};if(f.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},f.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},f.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,o=0;e=this.pendingDialogStack[o];++o)e.updateZIndex(--t,--t),0===o&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},f.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=d(e);){for(var t,o=0;t=this.pendingDialogStack[o];++o)if(t.dialog===e)return 0===o;e=e.parentElement}return!1},f.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),l(t),void 0!==this.forwardTab_)){var o=this.pendingDialogStack[0];return o.dialog.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?o.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}},f.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new a("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&r(o.dialog,t)&&o.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},f.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},f.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},f.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},f.dm=new f.DialogManager,f.formSubmitter=null,f.imagemapUseValue=null,void 0===window.HTMLDialogElement){var b=document.createElement("form");if(b.setAttribute("method","dialog"),"dialog"!==b.method){var v=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(v){var y=v.get;v.get=function(){return c(this)?"dialog":y.call(this)};var E=v.set;v.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):E.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",v)}}document.addEventListener("click",(function(e){if(f.formSubmitter=null,f.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e)t=e.composedPath().shift()||t;if(t&&c(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;f.imagemapUseValue=e.offsetX+","+e.offsetY}d(t)&&(f.formSubmitter=t)}}}),!1),document.addEventListener("submit",(function(e){var t=e.target;if(!d(t)){var o=m(e);"dialog"===(o&&o.getAttribute("formmethod")||t.getAttribute("method"))&&e.preventDefault()}}));var w=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!c(this))return w.call(this);var e=d(this);e&&e.close()}}const _=f;var k=["dot","dash","space","separator","wpm","frequency","type","alphabet"],M=function(e){return"".concat("morse-code-settings-").concat(e)},D=function(e,t){localStorage.setItem(M(e),t)},I=function(){k.forEach((function(e){var t=document.getElementById(e);t&&D(e,t.value)}))},S=function(e,t,o){try{var n=document.getElementById(e),i=document.getElementById(t),a=document.getElementById(o);return!!(n&&i&&a)&&("function"!=typeof HTMLDialogElement&&_.registerDialog(n),i.addEventListener("click",(function(){return n.showModal()})),a.addEventListener("click",(function(){return n.close()})),!0)}catch(e){return console.error("Error occurred:",e),!1}},T=document.getElementById("embed-open"),A=document.getElementById("embed-iframe"),L=document.getElementById("embed-code"),x=document.getElementById("embed-height"),B=document.getElementById("embed-width"),N=[document.getElementById("embed-dash"),document.getElementById("embed-dot"),document.getElementById("embed-space"),document.getElementById("embed-separator"),document.getElementById("embed-alphabet"),document.getElementById("embed-unit"),document.getElementById("embed-frequency"),document.getElementById("embed-type")],O=function(){L.value=document.getElementById("morse-iframe").outerHTML},C=function(){var e=document.getElementById("morse-iframe"),t=e.getAttribute("src").split("#")[0];e.setAttribute("src",t+"#"+N.map((function(e){return encodeURIComponent(e.value)})).join("|")),O()};!function(){S("settings-modal","settings-open","settings-close");var e=document.getElementById("settings-close");e&&e.addEventListener("click",I),k.forEach((function(e){var t=document.getElementById(e);t&&t.addEventListener("change",(function(){return D(e,t.value)}))}))}(),S("embed-modal","embed-open","embed-close")&&T.addEventListener("click",(function(){var e,t;(e=document.createElement("iframe")).setAttribute("id","morse-iframe"),e.setAttribute("src",T.getAttribute("data-url")),e.setAttribute("width",B.value),e.setAttribute("height",x.value),e.style.cssText="display: block; margin: 0 auto; border: 0;",A.innerHTML="",A.appendChild(e),t=document.getElementById("morse-iframe"),B.oninput=function(){t.setAttribute("width",B.value),O()},x.oninput=function(){t.setAttribute("height",x.value),O()},N.forEach((function(e){e.oninput=function(){C()}})),C()})),e.addEventListener("change",i),"dark"===localStorage.getItem("theme")||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?o():n()})();