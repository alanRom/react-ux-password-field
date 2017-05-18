!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([/*!***************************!*\
  !*** ./demo/src/index.js ***!
  \***************************/
function(t,e,n){"use strict";n(/*! normalize.css/normalize.css */7),n(/*! ./vendor/skeleton.css */5),n(/*! ./vendor/github.css */4),n(/*! ./vendor/syntax.css */6),n(/*! ./vendor/rainbow-custom.min.js */2),n(/*! ./css/style.scss */9),n(/*! ./css/demo.scss */8);var r=n(/*! react */1),a=n(/*! ../../lib/react-ux-password-field.js */3);r.render(r.createElement("form",null,r.createElement("fieldset",null,r.createElement("label",{htmlFor:"password1"},"Password"),r.createElement(a,{id:"password1",name:"password1",placeholder:"Try me out!  Enter a random password.",minScore:1,minLength:5,zxcvbn:"debug"}))),document.getElementById("content"))},/*!************************!*\
  !*** external "React" ***!
  \************************/
function(t,e){t.exports=React},/*!***********************************************!*\
  !*** ./demo/src/vendor/rainbow-custom.min.js ***!
  \***********************************************/
function(t,e){"use strict";window.Rainbow=function(){function t(t){var e,n=t.getAttribute&&t.getAttribute("data-language")||0;if(!n)for(t=t.attributes,e=0;e<t.length;++e)if("data-language"===t[e].nodeName)return t[e].nodeValue;return n}function e(e){var n=t(e)||t(e.parentNode);if(!n){var r=/\blang(?:uage)?-(\w+)/;(e=e.className.match(r)||e.parentNode.className.match(r))&&(n=e[1])}return n}function n(t,e){for(var n in g[v])if(n=parseInt(n,10),(t==n&&e==g[v][n]?0:t<=n&&e>=g[v][n])&&(delete g[v][n],delete d[v][n]),t>=n&&t<g[v][n]||e>n&&e<g[v][n])return!0;return!1}function r(t,e){return'<span class="'+t.replace(/\./g," ")+(p?" "+p:"")+'">'+e+"</span>"}function a(t,e,s,u){if("undefined"==typeof t||null===t)u();else{var l=t.exec(s);if(l){++b,!e.name&&"string"==typeof e.matches[0]&&(e.name=e.matches[0],delete e.matches[0]);var p=l[0],f=l.index,h=l[0].length+f,m=function(){function n(){a(t,e,s,u)}b%100>0?n():setTimeout(n,0)};if(n(f,h))m();else{var y=o(e.matches),w=function t(n,a,o){if(n>=a.length)o(p);else{var s=l[a[n]];if(s){var u=e.matches[a[n]],f=u.language,d=u.name&&u.matches?u.matches:u,g=function(e,i,s){var c;c=0;var u;for(u=1;u<a[n];++u)l[u]&&(c+=l[u].length);i=s?r(s,i):i,p=p.substr(0,c)+p.substr(c).replace(e,i),t(++n,a,o)};f?c(s,f,function(t){g(s,t)}):"string"==typeof u?g(s,s,u):i(s,d.length?d:[d],function(t){g(s,t,u.matches?u.name:0)})}else t(++n,a,o)}};w(0,y,function(t){e.name&&(t=r(e.name,t)),d[v]||(d[v]={},g[v]={}),d[v][f]={replace:l[0],with:t},g[v][f]=h,m()})}}else u()}}function o(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push(e);return n.sort(function(t,e){return e-t})}function i(t,e,n){function r(e,o){o<e.length?a(e[o].pattern,e[o],t,function(){r(e,++o)}):s(t,function(t){delete d[v],delete g[v],--v,n(t)})}++v,r(e,0)}function s(t,e){function n(t,e,r,a){if(r<e.length){++w;var o=e[r],i=d[v][o],t=t.substr(0,o)+t.substr(o).replace(i.replace,i.with),o=function(){n(t,e,++r,a)};0<w%250?o():setTimeout(o,0)}else a(t)}var r=o(d[v]);n(t,r,0,e)}function c(t,e,n){var r=h[e]||[],a=h[y]||[],e=m[e]?r:r.concat(a);i(t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),e,n)}function u(t,n,r){var a=!0;t:for(;a;){var o=t,i=n,s=r;if(a=!1,i<o.length){var l=o[i],p=e(l);if(-1<(" "+l.className+" ").indexOf(" rainbow ")||!p){t=o,n=++i,r=s,a=!0,l=p=void 0;continue t}return p=p.toLowerCase(),l.className+=l.className?" rainbow":"rainbow",c(l.innerHTML,p,function(t){l.innerHTML=t,d={},g={},f&&f(l,p),setTimeout(function(){u(o,++i,s)},0)})}s&&s()}}function l(t,e){var n,t=t&&"function"==typeof t.getElementsByTagName?t:document,r=t.getElementsByTagName("pre"),a=t.getElementsByTagName("code"),o=[],i=[];for(n=0;n<r.length;++n)r[n].getElementsByTagName("code").length?r[n].innerHTML=r[n].innerHTML.replace(/^\s+/,"").replace(/\s+$/,""):o.push(r[n]);for(n=0;n<a.length;++n)i.push(a[n]);u(i.concat(o),0,e)}var p,f,d={},g={},h={},m={},v=0,y=0,b=0,w=0;return{extend:function(t,e,n){1==arguments.length&&(e=t,t=y),m[t]=n,h[t]=e.concat(h[t]||[])},b:function(t){f=t},a:function(t){p=t},color:function(t,e,n){return"string"==typeof t?c(t,e,n):"function"==typeof t?l(0,t):void l(t,e)}}}(),document.addEventListener?document.addEventListener("DOMContentLoaded",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color),Rainbow.onHighlight=Rainbow.b,Rainbow.addClass=Rainbow.a,Rainbow.extend([{matches:{1:[{name:"keyword.operator",pattern:/\=|\+/g},{name:"keyword.dot",pattern:/\./g}],2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:|\+|\.)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]),Rainbow.extend("shell",[{name:"shell",matches:{1:{language:"shell"}},pattern:/\$\(([\s\S]*?)\)/gm},{matches:{2:"string"},pattern:/(\(|\s|\[|\=)(('|")[\s\S]*?(\3))/gm},{name:"keyword.operator",pattern:/&lt;|&gt;|&amp;/g},{name:"comment",pattern:/\#[\s\S]*?$/gm},{name:"storage.function",pattern:/(.+?)(?=\(\)\s{0,}\{)/g},{name:"support.command",pattern:/\b(echo|rm|ls|(mk|rm)dir|cd|find|cp|exit|pwd|exec|trap|source|shift|unset)/g},{matches:{1:"keyword"},pattern:/\b(break|case|continue|do|done|elif|else|esac|eval|export|fi|for|function|if|in|local|return|set|then|unset|until|while)(?=\(|\b)/g}],!0),Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g},{matches:{1:"keyword",2:"entity.function"},pattern:/(new)\s+(.*)(?=\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}]),Rainbow.extend("html",[{name:"source.php.embedded",matches:{2:{language:"php"}},pattern:/&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm},{name:"source.css.embedded",matches:{1:{matches:{1:"support.tag.style",2:[{name:"entity.tag.style",pattern:/^style/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.style.attribute",pattern:/(\w+)/g}],3:"support.tag.style"},pattern:/(&lt;\/?)(style.*?)(&gt;)/g},2:{language:"css"},3:"support.tag.style",4:"entity.tag.style",5:"support.tag.style"},pattern:/(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm},{name:"source.js.embedded",matches:{1:{matches:{1:"support.tag.script",2:[{name:"entity.tag.script",pattern:/^script/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.script.attribute",pattern:/(\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\/?)(script.*?)(&gt;)/g},2:{language:"javascript"},3:"support.tag.script",4:"entity.tag.script",5:"support.tag.script"},pattern:/(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm},{name:"comment.html",pattern:/&lt;\!--[\S\s]*?--&gt;/g},{matches:{1:"support.tag.open",2:"support.tag.close"},pattern:/(&lt;)|(\/?\??&gt;)/g},{name:"support.tag",matches:{1:"support.tag",2:"support.tag.special",3:"support.tag-name"},pattern:/(&lt;\??)(\/|\!?)(\w+)/g},{matches:{1:"support.attribute"},pattern:/([a-z-]+)(?=\=)/gi},{matches:{1:"support.operator",2:"string.quote",3:"string.value",4:"string.quote"},pattern:/(=)('|")(.*?)(\2)/g},{matches:{1:"support.operator",2:"support.value"},pattern:/(=)([a-zA-Z\-0-9]*)\b/g},{matches:{1:"support.attribute"},pattern:/\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g}],!0)},/*!****************************************!*\
  !*** ./lib/react-ux-password-field.js ***!
  \****************************************/
function(t,e,n){/*!
	 * React UX Password Field
	 * version: 0.9.12
	 * 
	 * MIT Licensed
	 * github: https://github.com/seethroughtrees/react-ux-password-field/
	 * demo: https://seethroughtrees.github.io/react-ux-password-field/
	 * 
	 */
"use strict";!function(e,r){t.exports=r(n(/*! react */1))}(void 0,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(1),i=n(2),s=n(11),c=n(12),u=o.createClass({displayName:"InputPassword",propTypes:{infoBar:i.bool,statusColor:i.string,statusInactiveColor:i.string,minScore:i.number,changeCb:i.func,toggleMask:i.bool,unMaskTime:i.number,minLength:i.number,strengthLang:i.array,id:i.string,passwordString:i.string},getDefaultProps:function(){return{infoBar:!0,statusColor:s.statusColor,statusInactiveColor:s.statusInactiveColor,zxcvbn:s.zxcvbnSrc,minScore:0,toggleMask:!0,unMaskTime:s.unMaskTime,strengthLang:s.strengthLang,id:"input",passwordString:""}},getInitialState:function(){return{value:"",score:0,entropy:0,isPassword:!0,isValid:!1}},componentWillReceiveProps:function(t){this.setState({value:t.passwordString}),this.props.toggleMask&&this.handleToggleMask()},getMeterStyle:function(t){var e=""===this.state.value?0:24*t+4;return{width:this.props.zxcvbn?e+"%":"100%",maxWidth:"85%",opacity:this.props.zxcvbn?.01*e+.5:"1",background:this.state.isValid?this.props.statusColor:this.props.statusInactiveColor,height:5,transition:"all 400ms linear",display:"inline-block",marginRight:"1%"}},unMaskStyle:{color:s.unMaskColor,fontWeight:200},infoStyle:{position:"absolute",bottom:-10,width:"100%",overflow:"hidden",height:24},iconStyle:{display:"inline-block",opacity:.25,position:"relative",top:2,width:"3%"},strengthLangStyle:{fontSize:12,position:"relative",top:2},addPasswordType:function(){this.setState({isPassword:!0})},handleInputType:function(){this.setState({isPassword:!this.state.isPassword})},handleChange:function(t){t.preventDefault();var e,n=t.nativeEvent.target,r=t.target.value;this.setState({value:r,isValid:t.target.validity.valid,selectionStart:n.selectionStart,selectionEnd:n.selectionEnd}),this.props.toggleMask&&this.handleToggleMask(),e=this.props.zxcvbn?this.handleZxcvbn(r):this.state.score,this.props.onChange&&this.props.onChange(r,this.state.isValid,e),this.props.minLength&&this.handleMinLength(t.target.value.length)},handleToggleMask:function(){this.setState({isPassword:!1}),this.maskPassword()},handleZxcvbn:function(t){if("undefined"!=typeof zxcvbn||"undefined"!=typeof window.zxcvbn){var e=zxcvbn(t),n=e.score;return this.setState({score:n,entropy:e.entropy}),n<this.props.minScore&&this.setState({isValid:!1}),this.props.changeCb&&this.state.score!==n&&this.props.changeCb(this.state.score,n,t),"debug"===this.props.zxcvbn&&console.debug(e),n}},handleMinLength:function(t){t<=this.props.minLength&&this.setState({isValid:!1})},componentWillMount:function(){var t;this.props.zxcvbn&&"undefined"==typeof zxcvbn&&(t="debug"!==this.props.zxcvbn?this.props.zxcvbn:s.zxcvbnSrc,function(){var e;e=function(){var e,n;return n=document.createElement("script"),n.src=t,n.type="text/javascript",n.async=!0,e=document.getElementsByTagName("head")[0],e.parentNode.insertBefore(n,e)},null!=window.attachEvent?window.attachEvent("onload",e):window.addEventListener("load",e,!1)}.call(this)),this.props.toggleMask&&(this.maskPassword=c(this.addPasswordType,this.props.unMaskTime))},componentWillUnmount:function(){this.maskPassword&&this.maskPassword.cancel()},render:function(){var t;this.props.infoBar&&(t=o.createElement("div",{className:"passwordField__info",style:this.infoStyle},o.createElement("span",{style:this.iconStyle,className:"passwordField__icon"}),o.createElement("span",{style:this.getMeterStyle(this.state.score),className:"passwordField__meter"}),o.createElement("span",{style:this.strengthLangStyle,className:"passwordField__strength"},this.props.zxcvbn&&this.state.value.length>0&&this.props.strengthLang.length>0?this.props.strengthLang[this.state.score]:null)));var e=this.props,n=(e.onChange,r(e,["onChange"])),i=this;return"undefined"!=typeof navigator&&setTimeout(function(){if(/Firefox/.test(navigator.userAgent)){var t=i.refs[i.props.id].getDOMNode();t.selectionStart=i.state.selectionStart,t.selectionEnd=i.state.selectionEnd}},1),o.createElement("div",{style:{position:"relative"},className:"passwordField","data-valid":this.state.isValid,"data-score":this.state.score,"data-entropy":this.state.entropy},o.createElement("input",a({ref:this.props.id,className:"passwordField__input",type:this.state.isPassword?"password":"text",value:this.state.value,style:this.state.isPassword?null:this.unMaskStyle,onChange:this.handleChange},n)),t)}});t.exports=u},function(e,n){e.exports=t},function(t,e,n){(function(e){if("production"!==e.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,a=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},o=!0;t.exports=n(4)(a,o)}else t.exports=n(10)()}).call(e,n(3))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function o(t){if(p===clearTimeout)return clearTimeout(t);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function i(){h&&d&&(h=!1,d.length?g=d.concat(g):m=-1,g.length&&s())}function s(){if(!h){var t=a(i);h=!0;for(var e=g.length;e;){for(d=g,g=[];++m<e;)d&&d[m].run();m=-1,e=g.length}d=null,h=!1,o(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,p,f=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(t){p=r}}();var d,g=[],h=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];g.push(new c(t,e)),1!==g.length||h||a(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){(function(e){var r=n(5),a=n(6),o=n(7),i=n(8),s=n(9);t.exports=function(t,n){function c(t){var e=t&&(P&&t[P]||t[R]);if("function"==typeof e)return e}function u(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}function l(t){this.message=t,this.stack=""}function p(t){function r(r,u,p,f,d,g,h){if(f=f||C,g=g||p,h!==i)if(n)a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==e.env.NODE_ENV&&"undefined"!=typeof console){var m=f+":"+p;!s[m]&&c<3&&(o(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",g,f),s[m]=!0,c++)}return null==u[p]?r?new l(null===u[p]?"The "+d+" `"+g+"` is marked as required "+("in `"+f+"`, but its value is `null`."):"The "+d+" `"+g+"` is marked as required in "+("`"+f+"`, but its value is `undefined`.")):null:t(u,p,f,d,g)}if("production"!==e.env.NODE_ENV)var s={},c=0;var u=r.bind(null,!1);return u.isRequired=r.bind(null,!0),u}function f(t){function e(e,n,r,a,o,i){var s=e[n],c=S(s);if(c!==t){var u=k(s);return new l("Invalid "+a+" `"+o+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("`"+t+"`."))}return null}return p(e)}function d(){return p(r.thatReturnsNull)}function g(t){function e(e,n,r,a,o){if("function"!=typeof t)return new l("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=e[n];if(!Array.isArray(s)){var c=S(s);return new l("Invalid "+a+" `"+o+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an array."))}for(var u=0;u<s.length;u++){var p=t(s,u,r,a,o+"["+u+"]",i);if(p instanceof Error)return p}return null}return p(e)}function h(){function e(e,n,r,a,o){var i=e[n];if(!t(i)){var s=S(i);return new l("Invalid "+a+" `"+o+"` of type "+("`"+s+"` supplied to `"+r+"`, expected a single ReactElement."))}return null}return p(e)}function m(t){function e(e,n,r,a,o){if(!(e[n]instanceof t)){var i=t.name||C,s=N(e[n]);return new l("Invalid "+a+" `"+o+"` of type "+("`"+s+"` supplied to `"+r+"`, expected ")+("instance of `"+i+"`."))}return null}return p(e)}function v(t){function n(e,n,r,a,o){for(var i=e[n],s=0;s<t.length;s++)if(u(i,t[s]))return null;var c=JSON.stringify(t);return new l("Invalid "+a+" `"+o+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+c+"."))}return Array.isArray(t)?p(n):("production"!==e.env.NODE_ENV?o(!1,"Invalid argument supplied to oneOf, expected an instance of array."):void 0,r.thatReturnsNull)}function y(t){function e(e,n,r,a,o){if("function"!=typeof t)return new l("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=e[n],c=S(s);if("object"!==c)return new l("Invalid "+a+" `"+o+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an object."));for(var u in s)if(s.hasOwnProperty(u)){var p=t(s,u,r,a,o+"."+u,i);if(p instanceof Error)return p}return null}return p(e)}function b(t){function n(e,n,r,a,o){for(var s=0;s<t.length;s++){var c=t[s];if(null==c(e,n,r,a,o,i))return null}return new l("Invalid "+a+" `"+o+"` supplied to "+("`"+r+"`."))}if(!Array.isArray(t))return"production"!==e.env.NODE_ENV?o(!1,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0,r.thatReturnsNull;for(var a=0;a<t.length;a++){var s=t[a];if("function"!=typeof s)return o(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",O(s),a),r.thatReturnsNull}return p(n)}function w(){function t(t,e,n,r,a){return T(t[e])?null:new l("Invalid "+r+" `"+a+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return p(t)}function x(t){function e(e,n,r,a,o){var s=e[n],c=S(s);if("object"!==c)return new l("Invalid "+a+" `"+o+"` of type `"+c+"` "+("supplied to `"+r+"`, expected `object`."));for(var u in t){var p=t[u];if(p){var f=p(s,u,r,a,o+"."+u,i);if(f)return f}}return null}return p(e)}function T(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(T);if(null===e||t(e))return!0;var n=c(e);if(!n)return!1;var r,a=n.call(e);if(n!==e.entries){for(;!(r=a.next()).done;)if(!T(r.value))return!1}else for(;!(r=a.next()).done;){var o=r.value;if(o&&!T(o[1]))return!1}return!0;default:return!1}}function E(t,e){return"symbol"===t||("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}function S(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":E(e,t)?"symbol":e}function k(t){if("undefined"==typeof t||null===t)return""+t;var e=S(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}function O(t){var e=k(t);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}function N(t){return t.constructor&&t.constructor.name?t.constructor.name:C}var P="function"==typeof Symbol&&Symbol.iterator,R="@@iterator",C="<<anonymous>>",j={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:d(),arrayOf:g,element:h(),instanceOf:m,node:w(),objectOf:y,oneOf:v,oneOfType:b,shape:x};return l.prototype=Error.prototype,j.checkPropTypes=s,j.PropTypes=j,j}}).call(e,n(3))},function(t,e){function n(t){return function(){return t}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(t){return t},t.exports=r},function(t,e,n){(function(e){function n(t,e,n,a,o,i,s,c){if(r(e),!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,a,o,i,s,c],p=0;u=new Error(e.replace(/%s/g,function(){return l[p++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var r=function(t){};"production"!==e.env.NODE_ENV&&(r=function(t){if(void 0===t)throw new Error("invariant requires an error message argument")}),t.exports=n}).call(e,n(3))},function(t,e,n){(function(e){var r=n(5),a=r;"production"!==e.env.NODE_ENV&&!function(){var t=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=0,o="Warning: "+t.replace(/%s/g,function(){return n[a++]});"undefined"!=typeof console&&console.error(o);try{throw new Error(o)}catch(t){}};a=function(e,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!e){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];t.apply(void 0,[n].concat(a))}}}(),t.exports=a}).call(e,n(3))},function(t,e){var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";t.exports=n},function(t,e,n){(function(e){function r(t,n,r,c,u){if("production"!==e.env.NODE_ENV)for(var l in t)if(t.hasOwnProperty(l)){var p;try{a("function"==typeof t[l],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",c||"React class",r,l),p=t[l](n,l,c,r,null,i)}catch(t){p=t}if(o(!p||p instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,l,typeof p),p instanceof Error&&!(p.message in s)){s[p.message]=!0;var f=u?u():"";o(!1,"Failed %s type: %s%s",r,p.message,null!=f?f:"")}}}if("production"!==e.env.NODE_ENV)var a=n(6),o=n(7),i=n(8),s={};t.exports=r}).call(e,n(3))},function(t,e,n){var r=n(5),a=n(6),o=n(8);t.exports=function(){function t(t,e,n,r,i,s){s!==o&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e){t.exports={statusColor:"#5CE592",statusInactiveColor:"#FC6F6F",unMaskColor:"#c7c7c7",unMaskTime:1400,zxcvbnSrc:"https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/1.0/zxcvbn.min.js",strengthLang:["Weak","Okay","Good","Strong","Great"]}},function(t,e,n){function r(t,e,n){function r(){v&&clearTimeout(v),d&&clearTimeout(d),b=0,d=v=y=void 0}function o(e,n){n&&clearTimeout(n),d=v=y=void 0,e&&(b=u(),g=t.apply(m,f),v||d||(f=m=void 0))}function c(){var t=e-(u()-h);t<=0||t>e?o(y,d):v=setTimeout(c,t)}function l(){o(x,v)}function p(){if(f=arguments,h=u(),m=this,y=x&&(v||!T),w===!1)var n=T&&!v;else{d||T||(b=h);var r=w-(h-b),a=r<=0||r>w;a?(d&&(d=clearTimeout(d)),b=h,g=t.apply(m,f)):d||(d=setTimeout(l,r))}return a&&v?v=clearTimeout(v):v||e===w||(v=setTimeout(c,e)),n&&(a=!0,g=t.apply(m,f)),!a||v||d||(f=m=void 0),g}var f,d,g,h,m,v,y,b=0,w=!1,x=!0;if("function"!=typeof t)throw new TypeError(i);if(e=e<0?0:+e||0,n===!0){var T=!0;x=!1}else a(n)&&(T=!!n.leading,w="maxWait"in n&&s(+n.maxWait||0,e),x="trailing"in n?!!n.trailing:x);return p.cancel=r,p}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var o=n(13),i="Expected a function",s=Math.max,c=o(Date,"now"),u=c||function(){return(new Date).getTime()};t.exports=r},function(t,e){function n(t){return!!t&&"object"==typeof t}function r(t,e){var n=null==t?void 0:t[e];return i(n)?n:void 0}function a(t){return o(t)&&f.call(t)==s}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return null!=t&&(a(t)?d.test(l.call(t)):n(t)&&c.test(t))}var s="[object Function]",c=/^\[object .+?Constructor\]$/,u=Object.prototype,l=Function.prototype.toString,p=u.hasOwnProperty,f=u.toString,d=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r}])})},/*!************************************!*\
  !*** ./demo/src/vendor/github.css ***!
  \************************************/
function(t,e){},/*!**************************************!*\
  !*** ./demo/src/vendor/skeleton.css ***!
  \**************************************/
function(t,e){},/*!************************************!*\
  !*** ./demo/src/vendor/syntax.css ***!
  \************************************/
function(t,e){},/*!***************************************!*\
  !*** ./~/normalize.css/normalize.css ***!
  \***************************************/
function(t,e){},/*!********************************!*\
  !*** ./demo/src/css/demo.scss ***!
  \********************************/
function(t,e){},/*!*********************************!*\
  !*** ./demo/src/css/style.scss ***!
  \*********************************/
function(t,e){}]);
//# sourceMappingURL=demo.bundle.js.map