module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s];return n=this,o=(e=c(t)).call.apply(e,[this].concat(u)),r=!o||"object"!==a(o)&&"function"!=typeof o?p(n):o,l(p(r),"getOpacity",function(){var e=r.props,t=e.animateOpacity;return e.canPlay||!t?"1":"0"}),l(p(r),"getTransform",function(){var e,t=r.props,n=t.canPlay,o=t.from,a=t.offset,i=t.perspective,c=t.perspectiveX,p=t.perspectiveY,u=t.perspectiveZ;if(n)e="translate3d(0,0,0) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";else{switch(o){case"top":e="translate3d(0,-".concat(a,",0)");break;case"bottom":e="translate3d(0,".concat(a,",0)");break;case"left":e="translate3d(-".concat(a,",0,0)");break;case"right":e="translate3d(".concat(a,",0,0)");break;default:e="translate3d(0,".concat(a,",0)")}i&&(e="".concat(e," rotateX(").concat(c,"deg) rotateY(").concat(p,"deg) rotateZ(").concat(u,"deg)"))}return e}),l(p(r),"getTransition",function(){var e=r.props,t=e.delay,n=e.duration,o=e.ease,a=e.opacityDelay;return e.canPlay?"opacity ".concat(n,"ms ease ").concat(a||t,"ms, transform ").concat(n,"ms ").concat(o," ").concat(t,"ms"):"opacity 0ms ease 0ms, transform 0ms ease 0ms"}),l(p(r),"getStyles",function(){var e=r.props.display,t=r.getTransition(),n=r.getTransform();return{display:e,opacity:r.getOpacity(),transform:n,transition:t,width:"100%"}}),r}var r,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n["Component"]),r=t,(o=[{key:"render",value:function(){var e=this,t=this.props.children,r=this.getStyles();return n.createElement("div",{ref:function(t){e.elRef=t}},n.createElement("span",{style:r},t))}}])&&i(r.prototype,o),s&&i(r,s),t}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}s.defaultProps={animateOpacity:!0,canPlay:!1,delay:0,display:"inline-block",duration:1250,ease:"ease-out",from:"bottom",offset:"100px",opacityDelay:0,perspective:!1,perspectiveX:0,perspectiveY:0,perspectiveZ:0};var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,b(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.PureComponent),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.animateOpacity,r=e.canPlay,n=e.children,a=e.className,i=e.delay,c=e.display,p=e.duration,u=e.ease,l=e.from,f=e.offset,y=e.opacityDelay,m=e.perspective,b=e.perspectiveFOV,v=e.perspectiveX,d=e.perspectiveY,h=e.perspectiveZ;return o.a.createElement("div",{className:a,style:{perspective:m&&b?"".concat(b,"px"):"unset"}},o.a.createElement(s,{animateOpacity:t,canPlay:r,delay:i,display:c,duration:p,ease:u,from:l,offset:f,opacityDelay:y,perspective:m,perspectiveX:v,perspectiveY:d,perspectiveZ:h},n))}}])&&y(r.prototype,n),a&&y(r,a),t}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}d.defaultProps={animateOpacity:!0,canPlay:!1,className:"",delay:0,duration:1275,ease:[.666,0,.237,1],from:"bottom",offset:"45px",opacityDelay:0,multilineOffsetDelay:200,multilineMasking:!1,perspective:!1,perspectiveFOV:1e3,perspectiveX:0,perspectiveY:0,perspectiveZ:0};var j=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(e=g(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==h(o)&&"function"!=typeof o?w(n):o,S(w(r),"state",{lines:[]}),S(w(r),"generateWords",function(){var e=r.props.copy.map(function(e){return e.split(" ")});r.setState({lines:e})}),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,o.a.PureComponent),r=t,(n=[{key:"componentDidMount",value:function(){this.generateWords()}},{key:"render",value:function(){var e=this.props,t=e.animateOpacity,r=e.canPlay,n=e.characterWordSpacing,a=e.className,i=e.from,c=e.duration,p=e.ease,u=e.multilineMasking,l=e.multilineOffsetDelay,f=e.offset,y=e.opacityDelay,m=e.perspective,b=e.perspectiveFOV,v=e.perspectiveX,d=e.perspectiveY,h=e.perspectiveZ,O=e.wordOffsetDelay,g=this.state.lines;return o.a.createElement("div",{className:a,style:{perspective:m&&b?"".concat(b,"px"):"unset"}},g.map(function(e,a){return o.a.createElement(_,{key:a,multilineMasking:u},e.map(function(e,u){return o.a.createElement(k,{key:u,characterWordSpacing:n},o.a.createElement(s,{animateOpacity:t,ease:p,canPlay:r,delay:a*l+u*O,from:i,duration:c,offset:f,opacityDelay:a*y+u*y,perspective:m,perspectiveX:v,perspectiveY:d,perspectiveZ:h},e))}))}))}}])&&O(r.prototype,n),a&&O(r,a),t}();j.defaultProps={animateOpacity:!0,canPlay:!1,characterOffsetDelay:25,characterWordSpacing:".15em",delay:0,from:"bottom",duration:1275,ease:"cubic-bezier(0.666, 0.0, 0.237, 1.0)",multilineMasking:!1,multilineOffsetDelay:200,offset:"45px",opacityDelay:0,perspective:!1,perspectiveFOV:1e3,perspectiveX:0,perspectiveY:0,perspectiveZ:0,wordOffsetDelay:200};var _=function(e){var t=e.multilineMasking,r=e.children;return o.a.createElement("div",{style:{display:"block",overflow:"".concat(t?"hidden":"visible")}},r)},k=function(e){var t=e.characterWordSpacing,r=e.children;return o.a.createElement("div",{style:{display:"inline-block",marginRight:"".concat(t)}},r)};function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(e=x(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==E(o)&&"function"!=typeof o?M(n):o,X(M(r),"state",{lines:[]}),X(M(r),"generateLines",function(){var e=r.props.copy;r.setState({lines:e})}),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,o.a.PureComponent),r=t,(n=[{key:"componentDidMount",value:function(){this.generateLines()}},{key:"render",value:function(){var e=this.props,t=e.animateOpacity,r=e.canPlay,n=e.className,a=e.display,i=e.duration,c=e.ease,p=e.from,u=e.multilineOffsetDelay,l=e.offset,f=e.opacityDelay,y=e.perspective,m=e.perspectiveFOV,b=e.perspectiveX,v=e.perspectiveY,d=e.perspectiveZ,h=this.state.lines;return o.a.createElement("div",{className:n,style:{perspective:y&&m?"".concat(m,"px"):"unset"}},h.map(function(e,n){return o.a.createElement("div",{role:"presentation",key:n},o.a.createElement(s,{animateOpacity:t,canPlay:r,delay:n*u,display:a,duration:i,ease:c,from:p,offset:l,opacityDelay:f,perspective:y,perspectiveX:b,perspectiveY:v,perspectiveZ:d},e))}))}}])&&D(r.prototype,n),a&&D(r,a),t}();function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Y.defaultProps={animateOpacity:!0,canPlay:!1,className:"",delay:0,duration:1275,ease:"cubic-bezier(0.666, 0.0, 0.237, 1.0)",from:"bottom",offset:"45px",opacityDelay:0,multilineMasking:!1,multilineOffsetDelay:200,perspective:!1,perspectiveFOV:1e3,perspectiveX:0,perspectiveY:0,perspectiveZ:0};var V=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(e=N(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==Z(o)&&"function"!=typeof o?W(n):o,F(W(r),"state",{lines:[]}),F(W(r),"generateCharacters",function(){var e=C(r.props.copy).map(function(e){return e.split(" ")}).map(function(e){return e.map(function(e){return e.split("")})});r.setState({lines:e})}),r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,n["Component"]),r=t,(o=[{key:"componentDidMount",value:function(){this.generateCharacters()}},{key:"render",value:function(){var e=this.props,t=e.animateOpacity,r=e.canPlay,o=e.characterOffsetDelay,a=e.characterWordSpacing,i=e.className,c=e.delay,p=e.duration,u=e.ease,l=e.from,f=e.multilineOffsetDelay,y=e.multilineMasking,m=e.offset,b=e.perspective,v=e.perspectiveFOV,d=e.perspectiveX,h=e.perspectiveY,O=e.perspectiveZ,g=this.state.lines;return n.createElement("div",{className:i,style:{perspective:b&&v?"".concat(v,"px"):"unset"}},g.map(function(e,i){var v=0;return n.createElement(z,{key:i,multilineMasking:y},e.map(function(e,y){return v+=e.length,n.createElement(L,{key:y,characterWordSpacing:a},e.map(function(e,a,y){return n.createElement(q,{key:a},n.createElement(s,{animateOpacity:t,ease:u,canPlay:r,delay:c+i*f+(v-y.length+a)*o,duration:p,from:l,offset:m,perspective:b,perspectiveX:d,perspectiveY:h,perspectiveZ:O},e))}))}))}))}}])&&R(r.prototype,o),a&&R(r,a),t}();V.defaultProps={animateOpacity:!0,characterOffsetDelay:25,characterWordSpacing:".15em",className:"",delay:0,duration:1275,ease:"cubic-bezier(0.666, 0.0, 0.237, 1.0)",from:"bottom",multilineMasking:!1,multilineOffsetDelay:200,offset:"45px",opacityDelay:0,perspective:!1,perspectiveFOV:1e3,perspectiveX:0,perspectiveY:0,perspectiveZ:0};var z=function(e){var t=e.multilineMasking,r=e.children;return n.createElement("div",{style:{display:"block",overflow:"".concat(t?"hidden":"visible")}},r)},L=function(e){var t=e.characterWordSpacing,r=e.children;return n.createElement("div",{style:{display:"inline-block",marginRight:t}},r)},q=function(e){var t=e.children;return n.createElement("div",{style:{display:"inline-block",width:"auto"}},t)};r.d(t,"Reveal",function(){return d}),r.d(t,"WordReveal",function(){return j}),r.d(t,"MultilineReveal",function(){return Y}),r.d(t,"CharacterReveal",function(){return V})}]);