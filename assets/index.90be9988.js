var p=Object.defineProperty;var g=(c,o)=>p(c,"name",{value:o,configurable:!0});import{w as v}from"./iframe.876f0e58.js";var m=v.LOGLEVEL,u=v.console,e={trace:1,debug:2,info:3,warn:4,error:5,silent:10},d=m,f=e[d]||e.info,w={trace:g(function(o){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return f<=e.trace&&u.trace.apply(u,[o].concat(a))},"trace"),debug:g(function(o){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return f<=e.debug&&u.debug.apply(u,[o].concat(a))},"debug"),info:g(function(o){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return f<=e.info&&u.info.apply(u,[o].concat(a))},"info"),warn:g(function(o){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return f<=e.warn&&u.warn.apply(u,[o].concat(a))},"warn"),error:g(function(o){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return f<=e.error&&u.error.apply(u,[o].concat(a))},"error"),log:g(function(o){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return f<e.silent&&u.log.apply(u,[o].concat(a))},"log")},l=new Set,t=g(function(o){return function(n){if(!l.has(n)){l.add(n);for(var a=arguments.length,r=new Array(a>1?a-1:0),i=1;i<a;i++)r[i-1]=arguments[i];return w[o].apply(w,[n].concat(r))}}},"once");t.clear=function(){return l.clear()};t.trace=t("trace");t.debug=t("debug");t.info=t("info");t.warn=t("warn");t.error=t("error");t.log=t("log");export{w as l,t as o};
//# sourceMappingURL=index.90be9988.js.map
