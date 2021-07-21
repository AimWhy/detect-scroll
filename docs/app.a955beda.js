parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D7k7":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e){var t=null;return o(e)||e===window?t=e:"string"==typeof e&&(t=document.querySelector(e)),t}function o(t){return"object"===("undefined"==typeof HTMLElement?"undefined":e(HTMLElement))?t instanceof HTMLElement:t&&"object"===e(t)&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getEl=t;
},{}],"Yeg4":[function(require,module,exports) {
"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r){return o(t)||n(t,r)||a(t,r)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,l=[],i=!0,a=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(l.push(n.value),!r||l.length!==r);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(a)throw o}}return l}}function o(t){if(Array.isArray(t))return t}function l(t){return u(t)||c(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,r){if(t){if("string"==typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,r):void 0}}function c(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function u(t){if(Array.isArray(t))return s(t)}function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.eventsSetup=b,exports.eventsInit=m,exports.eventsDestroy=v;var f=["scrollStart","scrollStop"],y=["scrollX","scrollUp","scrollDown","scrollMinY","scrollMaxY"],p=["scrollY","scrollLeft","scrollRight","scrollMinX","scrollMaxX"];function b(t,r,e){return t&&d(t)?t:!t||d(t)?[].concat(f,l(r?y:[]),l(e?p:[])):void console.error("Whoops! 'events' must be an object with at least one prop.")}function m(t,e){d(e)&&Object.entries(e).forEach(function(e){var n=r(e,2),o=n[0],l=n[1];t.addEventListener(o,l,!1)})}function v(t,e){d(e)&&Object.entries(e).forEach(function(e){var n=r(e,2),o=n[0],l=n[1];t.removeEventListener(o,l,!1)})}function d(r){return"object"===t(r)&&Object.keys(r).length>0&&!Array.isArray(r)}
},{}],"S3PC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./src/getElement"),i=require("./src/events");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function o(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(t,i,s){return i&&o(t.prototype,i),s&&o(t,s),t}var l=function(){function o(s){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=n.horizontal,h=void 0===l||l,r=n.vertical,c=void 0===r||r,a=n.debugMode,u=void 0!==a&&a,d=n.events,f=void 0===d?void 0:d;e(this,o),this.el=(0,t.getEl)(s),this.x=this.getX(),this.y=this.getY(),this.lastDispatch=null,this.hasScrolled=!1,this.isWindow=window===s,this.isScrolling=void 0,this.isVertical=c,this.isHorizontal=h,this.rafId=null,this.rafTick=0,this.rafKilled=!1,this.timeout=null,this.destroy=this.destroy.bind(this),this.onScroll=this.onScroll.bind(this),this.events=(0,i.eventsSetup)(f,this.isVertical,this.isHorizontal),this.debugMode=u,this.hasInit=0,this.destroyed=null,this.passiveMode=!0,this.scrollingU=0,this.scrollingD=0,this.scrollingL=0,this.scrollingR=0,this.init()}return n(o,[{key:"init",value:function(){this.isHorizontal&&this.getX(),this.isVertical&&this.getY(),(0,i.eventsInit)(this.el,this.events),this.el.addEventListener("scroll",this.onScroll,{passive:this.passiveMode}),this.debugMode,this.watchScrollPosition(),this.destroyed=0,this.hasInit=1}},{key:"destroy",value:function(){this.el.removeEventListener("scroll",this.onScroll,{passive:this.passiveMode}),(0,i.eventsDestroy)(this.el,this.events),window.clearTimeout(this.timeout),window.cancelAnimationFrame(this.rafId),this.rafKilled=!0,this.events=void 0,this.destroyed=1,this.hasInit=0}},{key:"scrollTimeout",value:function(){var t=this;this.timeout=setTimeout(function(){t.onScrollEnd()},120)}},{key:"watchScrollPosition",value:function(){this.isHorizontal&&this.watchX(),this.isVertical&&this.watchY()}},{key:"getY",value:function(){return this.isWindow?window.pageYOffset:this.el.scrollTop}},{key:"getYMax",value:function(){return(this.isWindow?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):Math.max(this.el.scrollHeight,this.el.offsetHeight,this.el.clientHeight))-window.innerHeight}},{key:"isMaxY",value:function(){return this.getY()>=this.getYMax()}},{key:"isMinY",value:function(){return this.getY()<=0}},{key:"getX",value:function(){return this.isWindow?window.pageXOffset:this.el.scrollLeft}},{key:"getXMax",value:function(){return(this.isWindow?Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth):Math.max(this.el.scrollWidth,this.el.offsetWidth,this.el.clientWidth))-window.innerWidth}},{key:"isMaxX",value:function(){return this.getX()>=this.getXMax()}},{key:"isMinX",value:function(){return this.getX()<=0}},{key:"watchX",value:function(){var t=this.getX(),i=t!==this.x,s=t<this.x,e=t>this.x,o=t!==this.x&&this.isMaxX(),n=t!==this.x&&this.isMinX();this.x=t,i&&(this.onScrollStart(),s&&!this.scrollingL?(this.dispatch("scrollLeft"),this.scrollingL=1,this.scrollingR=0):e&&!this.scrollingR&&(this.dispatch("scrollRight"),this.scrollingL=0,this.scrollingR=1)),n&&this.dispatch("scrollMinX"),o&&this.dispatch("scrollMaxX"),this.x&&this.dispatch("scrollX")}},{key:"watchY",value:function(){var t=this.getY(),i=t!==this.y,s=t<this.y,e=t>this.y,o=t!==this.y&&this.isMaxY(),n=t!==this.y&&this.isMinY();this.y=t,i&&(this.onScrollStart(),e&&!this.scrollingD?(this.dispatch("scrollDown"),this.scrollingD=1,this.scrollingU=0):s&&!this.scrollingU&&(this.dispatch("scrollUp"),this.scrollingD=0,this.scrollingU=1)),n&&this.dispatch("scrollMinY"),o&&this.dispatch("scrollMaxY"),this.y&&this.dispatch("scrollY")}},{key:"dispatch",value:function(t){var i="object"===s(this.events)&&t in this.events,e=Array.isArray(this.events)&&this.events.includes(t);this.lastDispatch!==t&&(i||e)&&(this.el.dispatchEvent(new CustomEvent(t,{detail:{x:this.x,y:this.y}})),this.lastDispatch=t,this.debugMode&&console.info(t)),["scrollX","scrollY"].includes(t)&&(this.el.dispatchEvent(new CustomEvent(t)),this.debugMode&&console.info(t))}},{key:"onScroll",value:function(){var t=this;this.rafKilled||(this.rafId=window.requestAnimationFrame(function(){t.watchScrollPosition(),window.clearTimeout(t.timeout),t.scrollTimeout()}))}},{key:"onScrollStart",value:function(){!this.isScrolling&&this.hasInit&&(this.dispatch("scrollStart"),this.isScrolling=!0),this.hasScrolled=1}},{key:"onScrollEnd",value:function(){this.dispatch("scrollStop"),this.isScrolling=!1,this.scrollingU=!1,this.scrollingD=!1,this.scrollingL=!1,this.scrollingR=!1}}]),o}();exports.default=l;
},{"./src/getElement":"D7k7","./src/events":"Yeg4"}],"A2T1":[function(require,module,exports) {
"use strict";var e=o(require("../index.js"));function o(e){return e&&e.__esModule?e:{default:e}}function t(e,o){e.innerText!==o&&(e.innerText=o)}function n(e,o){e.innerText=o}var r=document.querySelector(".hori"),c=document.querySelector(".tip.window"),l=document.querySelector(".poster"),i=c.querySelector(".stat"),u=c.querySelector(".dire"),d=c.querySelector(".x"),s=c.querySelector(".y");window.detectScroll=new e.default(window,{debugMode:!0,events:{scrollStart:function(){t(i,"is scrolling")},scrollStop:function(){t(i,"is not scrolling"),n(u,"")},scrollUp:function(e){n(u,"up")},scrollDown:function(){n(u,"down")},scrollLeft:function(){n(u,"left")},scrollRight:function(){n(u,"right")},scrollX:function(){n(d,Math.round(window.detectScroll.x))},scrollY:function(e){var o=window.detectScroll?window.detectScroll.y:0;n(s,Math.round(o)),l.style.backgroundImage="conic-gradient(from ".concat(.05*o,"deg, #101115, #298DD9, #DEE4CA, #F7BF46, #EF1A03)"),r.scrollTo(o,0)}}});
},{"../index.js":"S3PC"}]},{},["A2T1"], null)
//# sourceMappingURL=app.a955beda.js.map