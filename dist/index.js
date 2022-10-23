/*! For license information please see index.js.LICENSE.txt */
!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"));else if("function"==typeof define&&define.amd)define(["react"],r);else{var t="object"==typeof exports?r(require("react")):r(e.react);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(self,(function(e){return function(){"use strict";var r={251:function(e,r,t){var n=t(156),i=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,a={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,n)&&!f.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:s.current}}r.jsx=a,r.jsxs=a},893:function(e,r,t){e.exports=t(251)},156:function(r){r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,n),o.exports}n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){n.r(i),n.d(i,{CalcOversize:function(){return u}});var e,r,t,o=n(893),s=n(156);!function(e){e.MALE="male",e.FEMALE="female"}(e||(e={})),function(e){e.STANDARD="man_tshirt_standard",e.OVERSIZE="man_tshirt_oversize"}(r||(r={})),function(e){e.STANDARD="woman_tshirt_standard",e.OVERSIZE="woman_tshirt_oversize"}(t||(t={}));var f=[[156,45,60,"2XS","S","M"],[162,50,63,"XS","M","L"],[170,54,72,"S","L","XL"],[176,60,75,"M","XL","2XL"],[182,63,81,"L","2XL","3XL"],[188,66,87,"XL","3XL","4XL"],[192,69,90,"2XL","4XL","5XL"],[198,75,93,"3XL","5XL","6XL"],[202,78,95,"4XL","No size","No size"],[999,999,999,"No size","No size","No size"]],a=[[148,42,54,"2XS","S","M"],[153,45,60,"XS","M","L"],[164,51,70,"S","L","XL"],[172,57,77,"M","XL","2XL"],[178,60,80,"L","2XL","3XL"],[183,63,85,"XL","3XL","4XL"],[190,65,91,"2XL","5XL","No size"],[999,999,999,"No size","No size","No size"]];var c=function(){return c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},c.apply(this,arguments)},u=function(n){var i=n.height,u=n.weight,d=n.gender,l=(0,s.useState)(d&&d===e.FEMALE?t.STANDARD:r.STANDARD),h=l[0],p=(l[1],function(r){var t=r.gender,n=void 0===t?e.MALE:t,i=r.height,o=r.weight;return n===e.FEMALE?function(e){for(var r=e.height,t=e.weight,n=0;n<=a.length;n++)if(r>=a[n][0]&&r<a[n+1][0])return t>=a[n][2]?[a[n+1][3],a[n+1][4],a[n+1][5]]:t<a[n][1]?[a[n-1][3],a[n-1][4],a[n-1][5]]:[a[n][3],a[n][4],a[n][5]]}({gender:n,height:i,weight:o}):function(e){for(var r=e.height,t=e.weight,n=0;n<=f.length;n++)if(r>=f[n][0]&&r<f[n+1][0])return t>=f[n][2]?[f[n+1][3],f[n+1][4],f[n+1][5]]:t<f[n][1]?[f[n-1][3],f[n-1][4],f[n-1][5]]:[f[n][3],f[n][4],f[n][5]]}({gender:n,height:i,weight:o})}({gender:d,height:i,weight:u}));return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["Height: ",i]}),(0,o.jsxs)("p",{children:["Weight: ",u]})]}),(0,o.jsxs)("div",c({id:"sizes-container"},{children:[(0,o.jsxs)("p",{children:["Standard size: ",p[0]]}),(0,o.jsxs)("p",{children:["Overzise: ",p[1]]}),(0,o.jsxs)("p",{children:["Super oversize: ",p[2]]})]})),(0,o.jsx)("div",c({id:"dummy-container"},{children:(0,o.jsx)("img",{src:h,alt:"tshirt-dummy"})}))]})}}(),i}()}));