(this["webpackJsonpipfs-image-sharing"]=this["webpackJsonpipfs-image-sharing"]||[]).push([[3],{468:function(t,e,n){"use strict";n.r(e),n.d(e,"getCLS",function(){return a}),n.d(e,"getFCP",function(){return L}),n.d(e,"getFID",function(){return F}),n.d(e,"getLCP",function(){return k}),n.d(e,"getTTFB",function(){return C});function c(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}}function s(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver(function(t){return t.getEntries().map(e)});return n.observe({type:t,buffered:!0}),n}}catch(t){}}function f(e,n){function i(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||(e(t),n&&(removeEventListener("visibilitychange",i,!0),removeEventListener("pagehide",i,!0)))}addEventListener("visibilitychange",i,!0),addEventListener("pagehide",i,!0)}function m(t,e,n){var i;return function(){0<=e.value&&(n||y.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),!e.delta&&void 0!==i||(i=e.value,t(e)))}}function p(){return r<0&&(r=o(),E(),S(function(){setTimeout(function(){r=o(),E()},0)})),{get timeStamp(){return r}}}function u(t,e){l||(l=e,h=t,i=new Date,v(removeEventListener),d())}function d(){var e;0<=h&&h<i-T&&(e={entryType:"first-input",name:l.type,target:l.target,cancelable:l.cancelable,startTime:l.timeStamp,processingStart:l.timeStamp+h},g.forEach(function(t){t(e)}),g=[])}function v(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,b,w)})}var l,h,i,g,S=function(e){addEventListener("pageshow",function(t){t.persisted&&e(t)},!0)},y=new("function"==typeof WeakSet?WeakSet:Set),a=function(t,e){function n(t){t.hadRecentInput||(r.value+=t.value,r.entries.push(t),i())}var i,a,r=c("CLS",0);(a=s("layout-shift",n))&&(i=m(t,r,e),f(function(){a.takeRecords().map(n),i()}),S(function(){r=c("CLS",0),i=m(t,r,e)}))},r=-1,o=function(){return"hidden"===document.visibilityState?0:1/0},E=function(){f(function(t){t=t.timeStamp;r=t},!0)},L=function(e,n){function t(t){"first-contentful-paint"===t.name&&(u&&u.disconnect(),t.startTime<a.timeStamp&&(r.value=t.startTime,r.entries.push(t),y.add(r),i()))}var i,a=p(),r=c("FCP"),o=performance.getEntriesByName("first-contentful-paint")[0],u=o?null:s("paint",t);(o||u)&&(i=m(e,r,n),o&&t(o),S(function(t){r=c("FCP"),i=m(e,r,n),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-t.timeStamp,y.add(r),i()})})}))},w={passive:!0,capture:!0},T=new Date,b=function(t){var e,n,i,a;function r(){u(n,i),a()}function o(){a()}t.cancelable&&(e=(1e12<t.timeStamp?new Date:performance.now())-t.timeStamp,"pointerdown"==t.type?(n=e,i=t,a=function(){removeEventListener("pointerup",r,w),removeEventListener("pointercancel",o,w)},addEventListener("pointerup",r,w),addEventListener("pointercancel",o,w)):u(e,t))},F=function(t,e){function n(t){t.startTime<i.timeStamp&&(a.value=t.processingStart-t.startTime,a.entries.push(t),y.add(a),o())}var i=p(),a=c("FID"),r=s("first-input",n),o=m(t,a,e);r&&f(function(){r.takeRecords().map(n),r.disconnect()},!0),r&&S(function(){a=c("FID"),o=m(t,a,e),g=[],h=-1,l=null,v(addEventListener),g.push(n),d()})},k=function(e,n){function t(t){var e=t.startTime;e<r.timeStamp&&(o.value=e,o.entries.push(t)),i()}var i,a,r=p(),o=c("LCP"),u=s("largest-contentful-paint",t);u&&(i=m(e,o,n),a=function(){y.has(o)||(u.takeRecords().map(t),u.disconnect(),y.add(o),i())},["keydown","click"].forEach(function(t){addEventListener(t,a,{once:!0,capture:!0})}),f(a,!0),S(function(t){o=c("LCP"),i=m(e,o,n),requestAnimationFrame(function(){requestAnimationFrame(function(){o.value=performance.now()-t.timeStamp,y.add(o),i()})})}))},C=function(e){var n=c("TTFB"),t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var t,e=performance.timing,n={entryType:"navigation",startTime:0};for(t in e)"navigationStart"!==t&&"toJSON"!==t&&(n[t]=Math.max(e[t]-e.navigationStart,0));return n}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(t){}};"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}}]);