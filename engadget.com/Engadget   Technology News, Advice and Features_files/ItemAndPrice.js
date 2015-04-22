// HTML5 Pictela5 Ver 2.0 Feb 11 20:06 [Item and Price build 6] Mon Mar 16 2015 18:11:24 GMT-0400 (EDT)

DEFAULT_DELAY = 300;


//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);
//# sourceMappingURL=underscore-min.map

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*
* Event
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * A collection of Classes that are shared across all the CreateJS libraries.  The classes are included in the minified
 * files of each library and are available on the createsjs namespace directly.
 *
 * <h4>Example</h4>
 *
 *      myObject.addEventListener("change", createjs.proxy(myMethod, scope));
 *
 * @module CreateJS
 * @main CreateJS
 */

// namespace:
this.createjs = this.createjs||{};

(function() {
	"use strict";

/**
 * Contains properties and methods shared by all events for use with
 * {{#crossLink "EventDispatcher"}}{{/crossLink}}.
 * 
 * Note that Event objects are often reused, so you should never
 * rely on an event object's state outside of the call stack it was received in.
 * @class Event
 * @param {String} type The event type.
 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
 * @constructor
 **/
var Event = function(type, bubbles, cancelable) {
  this.initialize(type, bubbles, cancelable);
};
var p = Event.prototype;

// events:

// public properties:

	/**
	 * The type of event.
	 * @property type
	 * @type String
	 **/
	p.type = null;

	/**
	 * The object that generated an event.
	 * @property target
	 * @type Object
	 * @default null
	 * @readonly
	*/
	p.target = null;

	/**
	 * The current target that a bubbling event is being dispatched from. For non-bubbling events, this will
	 * always be the same as target. For example, if childObj.parent = parentObj, and a bubbling event
	 * is generated from childObj, then a listener on parentObj would receive the event with
	 * target=childObj (the original target) and currentTarget=parentObj (where the listener was added).
	 * @property currentTarget
	 * @type Object
	 * @default null
	 * @readonly
	*/
	p.currentTarget = null;

	/**
	 * For bubbling events, this indicates the current event phase:<OL>
	 * 	<LI> capture phase: starting from the top parent to the target</LI>
	 * 	<LI> at target phase: currently being dispatched from the target</LI>
	 * 	<LI> bubbling phase: from the target to the top parent</LI>
	 * </OL>
	 * @property eventPhase
	 * @type Number
	 * @default 0
	 * @readonly
	*/
	p.eventPhase = 0;

	/**
	 * Indicates whether the event will bubble through the display list.
	 * @property bubbles
	 * @type Boolean
	 * @default false
	 * @readonly
	*/
	p.bubbles = false;

	/**
	 * Indicates whether the default behaviour of this event can be cancelled via
	 * {{#crossLink "Event/preventDefault"}}{{/crossLink}}. This is set via the Event constructor.
	 * @property cancelable
	 * @type Boolean
	 * @default false
	 * @readonly
	*/
	p.cancelable = false;

	/**
	 * The epoch time at which this event was created.
	 * @property timeStamp
	 * @type Number
	 * @default 0
	 * @readonly
	*/
	p.timeStamp = 0;

	/**
	 * Indicates if {{#crossLink "Event/preventDefault"}}{{/crossLink}} has been called
	 * on this event.
	 * @property defaultPrevented
	 * @type Boolean
	 * @default false
	 * @readonly
	*/
	p.defaultPrevented = false;

	/**
	 * Indicates if {{#crossLink "Event/stopPropagation"}}{{/crossLink}} or
	 * {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called on this event.
	 * @property propagationStopped
	 * @type Boolean
	 * @default false
	 * @readonly
	*/
	p.propagationStopped = false;

	/**
	 * Indicates if {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called
	 * on this event.
	 * @property immediatePropagationStopped
	 * @type Boolean
	 * @default false
	 * @readonly
	*/
	p.immediatePropagationStopped = false;
	
	/**
	 * Indicates if {{#crossLink "Event/remove"}}{{/crossLink}} has been called on this event.
	 * @property removed
	 * @type Boolean
	 * @default false
	 * @readonly
	*/
	p.removed = false;

// constructor:
	/**
	 * Initialization method.
	 * @method initialize
	 * @param {String} type The event type.
	 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
	 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
	 * @protected
	 **/
	p.initialize = function(type, bubbles, cancelable) {
		this.type = type;
		this.bubbles = bubbles;
		this.cancelable = cancelable;
		this.timeStamp = (new Date()).getTime();
	};

// public methods:

	/**
	 * Sets {{#crossLink "Event/defaultPrevented"}}{{/crossLink}} to true.
	 * Mirrors the DOM event standard.
	 * @method preventDefault
	 **/
	p.preventDefault = function() {
		this.defaultPrevented = true;
	};

	/**
	 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} to true.
	 * Mirrors the DOM event standard.
	 * @method stopPropagation
	 **/
	p.stopPropagation = function() {
		this.propagationStopped = true;
	};

	/**
	 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} and
	 * {{#crossLink "Event/immediatePropagationStopped"}}{{/crossLink}} to true.
	 * Mirrors the DOM event standard.
	 * @method stopImmediatePropagation
	 **/
	p.stopImmediatePropagation = function() {
		this.immediatePropagationStopped = this.propagationStopped = true;
	};
	
	/**
	 * Causes the active listener to be removed via removeEventListener();
	 * 
	 * 		myBtn.addEventListener("click", function(evt) {
	 * 			// do stuff...
	 * 			evt.remove(); // removes this listener.
	 * 		});
	 * 
	 * @method remove
	 **/
	p.remove = function() {
		this.removed = true;
	};
	
	/**
	 * Returns a clone of the Event instance.
	 * @method clone
	 * @return {Event} a clone of the Event instance.
	 **/
	p.clone = function() {
		return new Event(this.type, this.bubbles, this.cancelable);
	};
	
	/**
	 * Provides a chainable shortcut method for setting a number of properties on the instance.
	 *
	 * @method set
	 * @param {Object} props A generic object containing properties to copy to the instance.
	 * @return {Event} Returns the instance the method is called on (useful for chaining calls.)
	*/
	p.set = function(props) {
		for (var n in props) { this[n] = props[n]; }
		return this;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Event (type="+this.type+")]";
	};

createjs.Event = Event;
}());

/*
* EventDispatcher
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @module CreateJS
 */

// namespace:
this.createjs = this.createjs||{};

(function() {
	"use strict";

/**
 * EventDispatcher provides methods for managing queues of event listeners and dispatching events.
 *
 * You can either extend EventDispatcher or mix its methods into an existing prototype or instance by using the
 * EventDispatcher {{#crossLink "EventDispatcher/initialize"}}{{/crossLink}} method.
 * 
 * Together with the CreateJS Event class, EventDispatcher provides an extended event model that is based on the
 * DOM Level 2 event model, including addEventListener, removeEventListener, and dispatchEvent. It supports
 * bubbling / capture, preventDefault, stopPropagation, stopImmediatePropagation, and handleEvent.
 * 
 * EventDispatcher also exposes a {{#crossLink "EventDispatcher/on"}}{{/crossLink}} method, which makes it easier
 * to create scoped listeners, listeners that only run once, and listeners with associated arbitrary data. The 
 * {{#crossLink "EventDispatcher/off"}}{{/crossLink}} method is merely an alias to
 * {{#crossLink "EventDispatcher/removeEventListener"}}{{/crossLink}}.
 * 
 * Another addition to the DOM Level 2 model is the {{#crossLink "EventDispatcher/removeAllEventListeners"}}{{/crossLink}}
 * method, which can be used to listeners for all events, or listeners for a specific event. The Event object also 
 * includes a {{#crossLink "Event/remove"}}{{/crossLink}} method which removes the active listener.
 *
 * <h4>Example</h4>
 * Add EventDispatcher capabilities to the "MyClass" class.
 *
 *      EventDispatcher.initialize(MyClass.prototype);
 *
 * Add an event (see {{#crossLink "EventDispatcher/addEventListener"}}{{/crossLink}}).
 *
 *      instance.addEventListener("eventName", handlerMethod);
 *      function handlerMethod(event) {
 *          console.log(event.target + " Was Clicked");
 *      }
 *
 * <b>Maintaining proper scope</b><br />
 * Scope (ie. "this") can be be a challenge with events. Using the {{#crossLink "EventDispatcher/on"}}{{/crossLink}}
 * method to subscribe to events simplifies this.
 *
 *      instance.addEventListener("click", function(event) {
 *          console.log(instance == this); // false, scope is ambiguous.
 *      });
 *      
 *      instance.on("click", function(event) {
 *          console.log(instance == this); // true, "on" uses dispatcher scope by default.
 *      });
 * 
 * If you want to use addEventListener instead, you may want to use function.bind() or a similar proxy to manage scope.
 *      
 *
 * @class EventDispatcher
 * @constructor
 **/
var EventDispatcher = function() {
/*	this.initialize(); */ // not needed.
};
var p = EventDispatcher.prototype;


	/**
	 * Static initializer to mix EventDispatcher methods into a target object or prototype.
	 * 
	 * 		EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
	 * 		EventDispatcher.initialize(myObject); // add to a specific instance
	 * 
	 * @method initialize
	 * @static
	 * @param {Object} target The target object to inject EventDispatcher methods into. This can be an instance or a
	 * prototype.
	 **/
	EventDispatcher.initialize = function(target) {
		target.addEventListener = p.addEventListener;
		target.on = p.on;
		target.removeEventListener = target.off =  p.removeEventListener;
		target.removeAllEventListeners = p.removeAllEventListeners;
		target.hasEventListener = p.hasEventListener;
		target.dispatchEvent = p.dispatchEvent;
		target._dispatchEvent = p._dispatchEvent;
		target.willTrigger = p.willTrigger;
	};
	
// constructor:

// private properties:
	/**
	 * @protected
	 * @property _listeners
	 * @type Object
	 **/
	p._listeners = null;

	/**
	 * @protected
	 * @property _captureListeners
	 * @type Object
	 **/
	p._captureListeners = null;

// constructor:
	/**
	 * Initialization method.
	 * @method initialize
	 * @protected
	 **/
	p.initialize = function() {};

// public methods:
	/**
	 * Adds the specified event listener. Note that adding multiple listeners to the same function will result in
	 * multiple callbacks getting fired.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.addEventListener("click", handleClick);
	 *      function handleClick(event) {
	 *         // Click happened.
	 *      }
	 *
	 * @method addEventListener
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
	 * the event is dispatched.
	 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 * @return {Function | Object} Returns the listener for chaining or assignment.
	 **/
	p.addEventListener = function(type, listener, useCapture) {
		var listeners;
		if (useCapture) {
			listeners = this._captureListeners = this._captureListeners||{};
		} else {
			listeners = this._listeners = this._listeners||{};
		}
		var arr = listeners[type];
		if (arr) { this.removeEventListener(type, listener, useCapture); }
		arr = listeners[type]; // remove may have deleted the array
		if (!arr) { listeners[type] = [listener];  }
		else { arr.push(listener); }
		return listener;
	};
	
	/**
	 * A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener
	 * only run once, associate arbitrary data with the listener, and remove the listener.
	 * 
	 * This method works by creating an anonymous wrapper function and subscribing it with addEventListener.
	 * The created anonymous function is returned for use with .removeEventListener (or .off).
	 * 
	 * <h4>Example</h4>
	 * 
	 * 		var listener = myBtn.on("click", handleClick, null, false, {count:3});
	 * 		function handleClick(evt, data) {
	 * 			data.count -= 1;
	 * 			console.log(this == myBtn); // true - scope defaults to the dispatcher
	 * 			if (data.count == 0) {
	 * 				alert("clicked 3 times!");
	 * 				myBtn.off("click", listener);
	 * 				// alternately: evt.remove();
	 * 			}
	 * 		}
	 * 
	 * @method on
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
	 * the event is dispatched.
	 * @param {Object} [scope] The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
	 * @param {Boolean} [once=false] If true, the listener will remove itself after the first time it is triggered.
	 * @param {*} [data] Arbitrary data that will be included as the second parameter when the listener is called.
	 * @param {Boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 * @return {Function} Returns the anonymous function that was created and assigned as the listener. This is needed to remove the listener later using .removeEventListener.
	 **/
	p.on = function(type, listener, scope, once, data, useCapture) {
		if (listener.handleEvent) {
			scope = scope||listener;
			listener = listener.handleEvent;
		}
		scope = scope||this;
		return this.addEventListener(type, function(evt) {
				listener.call(scope, evt, data);
				once&&evt.remove();
			}, useCapture);
	};

	/**
	 * Removes the specified event listener.
	 *
	 * <b>Important Note:</b> that you must pass the exact function reference used when the event was added. If a proxy
	 * function, or function closure is used as the callback, the proxy/closure reference must be used - a new proxy or
	 * closure will not work.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.removeEventListener("click", handleClick);
	 *
	 * @method removeEventListener
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener The listener function or object.
	 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 **/
	p.removeEventListener = function(type, listener, useCapture) {
		var listeners = useCapture ? this._captureListeners : this._listeners;
		if (!listeners) { return; }
		var arr = listeners[type];
		if (!arr) { return; }
		for (var i=0,l=arr.length; i<l; i++) {
			if (arr[i] == listener) {
				if (l==1) { delete(listeners[type]); } // allows for faster checks.
				else { arr.splice(i,1); }
				break;
			}
		}
	};
	
	/**
	 * A shortcut to the removeEventListener method, with the same parameters and return value. This is a companion to the
	 * .on method.
	 *
	 * @method off
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener The listener function or object.
	 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 **/
	p.off = p.removeEventListener;

	/**
	 * Removes all listeners for the specified type, or all listeners of all types.
	 *
	 * <h4>Example</h4>
	 *
	 *      // Remove all listeners
	 *      displayObject.removeAllEventListeners();
	 *
	 *      // Remove all click listeners
	 *      displayObject.removeAllEventListeners("click");
	 *
	 * @method removeAllEventListeners
	 * @param {String} [type] The string type of the event. If omitted, all listeners for all types will be removed.
	 **/
	p.removeAllEventListeners = function(type) {
		if (!type) { this._listeners = this._captureListeners = null; }
		else {
			if (this._listeners) { delete(this._listeners[type]); }
			if (this._captureListeners) { delete(this._captureListeners[type]); }
		}
	};

	/**
	 * Dispatches the specified event to all listeners.
	 *
	 * <h4>Example</h4>
	 *
	 *      // Use a string event
	 *      this.dispatchEvent("complete");
	 *
	 *      // Use an Event instance
	 *      var event = new createjs.Event("progress");
	 *      this.dispatchEvent(event);
	 *
	 * @method dispatchEvent
	 * @param {Object | String | Event} eventObj An object with a "type" property, or a string type.
	 * While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used,
	 * dispatchEvent will construct an Event instance with the specified type.
	 * @param {Object} [target] The object to use as the target property of the event object. This will default to the
	 * dispatching object. <b>This parameter is deprecated and will be removed.</b>
	 * @return {Boolean} Returns the value of eventObj.defaultPrevented.
	 **/
	p.dispatchEvent = function(eventObj, target) {
		if (typeof eventObj == "string") {
			// won't bubble, so skip everything if there's no listeners:
			var listeners = this._listeners;
			if (!listeners || !listeners[eventObj]) { return false; }
			eventObj = new createjs.Event(eventObj);
		}
		// TODO: deprecated. Target param is deprecated, only use case is MouseEvent/mousemove, remove.
		try { eventObj.target = target||this; } catch (e) {} // allows redispatching of native events

		if (!eventObj.bubbles || !this.parent) {
			this._dispatchEvent(eventObj, 2);
		} else {
			var top=this, list=[top];
			while (top.parent) { list.push(top = top.parent); }
			var i, l=list.length;

			// capture & atTarget
			for (i=l-1; i>=0 && !eventObj.propagationStopped; i--) {
				list[i]._dispatchEvent(eventObj, 1+(i==0));
			}
			// bubbling
			for (i=1; i<l && !eventObj.propagationStopped; i++) {
				list[i]._dispatchEvent(eventObj, 3);
			}
		}
		return eventObj.defaultPrevented;
	};

	/**
	 * Indicates whether there is at least one listener for the specified event type.
	 * @method hasEventListener
	 * @param {String} type The string type of the event.
	 * @return {Boolean} Returns true if there is at least one listener for the specified event.
	 **/
	p.hasEventListener = function(type) {
		var listeners = this._listeners, captureListeners = this._captureListeners;
		return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
	};
	
	/**
	 * Indicates whether there is at least one listener for the specified event type on this object or any of its
	 * ancestors (parent, parent's parent, etc). A return value of true indicates that if a bubbling event of the
	 * specified type is dispatched from this object, it will trigger at least one listener.
	 * 
	 * This is similar to {{#crossLink "EventDispatcher/hasEventListener"}}{{/crossLink}}, but it searches the entire
	 * event flow for a listener, not just this object.
	 * @method willTrigger
	 * @param {String} type The string type of the event.
	 * @return {Boolean} Returns `true` if there is at least one listener for the specified event.
	 **/
	p.willTrigger = function(type) {
		var o = this;
		while (o) {
			if (o.hasEventListener(type)) { return true; }
			o = o.parent;
		}
		return false;
	};

	/**
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[EventDispatcher]";
	};

// private methods:
	/**
	 * @method _dispatchEvent
	 * @param {Object | String | Event} eventObj
	 * @param {Object} eventPhase
	 * @protected
	 **/
	p._dispatchEvent = function(eventObj, eventPhase) {
		var l, listeners = (eventPhase==1) ? this._captureListeners : this._listeners;
		if (eventObj && listeners) {
			var arr = listeners[eventObj.type];
			if (!arr||!(l=arr.length)) { return; }
			try { eventObj.currentTarget = this; } catch (e) {}
			try { eventObj.eventPhase = eventPhase; } catch (e) {}
			eventObj.removed = false;
			arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
			for (var i=0; i<l && !eventObj.immediatePropagationStopped; i++) {
				var o = arr[i];
				if (o.handleEvent) { o.handleEvent(eventObj); }
				else { o(eventObj); }
				if (eventObj.removed) {
					this.off(eventObj.type, o, eventPhase==1);
					eventObj.removed = false;
				}
			}
		}
	};


createjs.EventDispatcher = EventDispatcher;
}());


this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global TweenMax, AOLCT, ADTECH, console, com, _, accounting */

  var Util = function() {
    //nothing to do
  };

  var s = Util;

  /**
   * Returns true if touch device, false if not.
   * Caches result after first call.
   */
  s.isTouchDevice = function() {
    if (s._cachedIsTouch === undefined) {
      s._cachedIsTouch = !!('ontouchstart' in window) && // works on most browsers 
           !(/MSIE (\d+\.\d+);/.test(navigator.userAgent));
    }
    return s._cachedIsTouch;
  };

  /**
   * Returns a random item in the specified array.
   */
  s.randItem = function(arr) {
    if (!arr || arr.length === 0) {
      return null;
    }

    return arr[ Math.round( Math.random() * (arr.length - 1) ) ];
  };

  /**
   * Use this to make a node, append it to a parent node, and add a
   * CSS class name and ID, all in one call. Default tag is a div.
   */
  s.makeNode = function(cssClassName, parentNode, tagName, id) {
    if (!tagName) {
      tagName = 'div';
    }
    var node = document.createElement(tagName);

    if (cssClassName) {
      node.setAttribute('class', cssClassName);
    }

    if (id) {
      node.id = id;
    }

    if (parentNode) {
      parentNode.appendChild(node);
    }

    return node;
  };

  /**
   * Everything that makeNode() does, plus adds CSS absolute position.
   */
  s.makeAbsNode = function(cssClassName, parentNode, tagName, id) {

    var node = Util.makeNode(cssClassName, parentNode, tagName, id);

    node.style.position = 'absolute';

    return node;
  };

  /**
   * This comes in handy when you want to make a node from a string of, say, SVG
   * and append it to a parent node, and assign a CSS class name all in one call.
   */
  s.makeNodeFromFragment = function(cssClassName, htmlFragmentString, parentNode) {
    var fragment = document.createDocumentFragment(),
        temp = document.createElement('div'),
        node;

    temp.innerHTML = htmlFragmentString;

    fragment.appendChild(temp);

    node = fragment.firstChild.firstChild;

    if (cssClassName) {
      node.setAttribute('class', cssClassName);
    }

    if (parentNode) {
      parentNode.appendChild(node);
    }
    
    return node;
  };

  s.completeTweens = function(objOrArray) {

    var tweens = TweenMax.getTweensOf(objOrArray);

    TweenMax.killTweensOf(objOrArray);

    for (var i = 0; i < tweens.length; i++) {
      var tween = tweens[i];
      tween.seek(tween.duration());
    }
  };
  s.isMraid = function() {
    var inMRAIDContainer = false;
    try{
      if(ADTECH.adConfig){
        inMRAIDContainer = (ADTECH.adConfig.mraid) ? true : false;
      }
    } catch(e) {}
    return inMRAIDContainer;
  };
  /**
   * Opens a popup window centered to the current window (not screen)
   * so this works on dual screen monitors as well.
   * See http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html.
   */
  s.popupWindow = function(url, w, h) {
    // if in mraid can not do window.open call dynamicClick to call mraid open instead
    if(s.isMraid()) {
      console.log('popupWindow:' + url);
      //ADTECH.mraid.open(url);
      ADTECH.dynamicClick('mraid_share', url);
      return;
    }

    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;

    var newWindow = window.open(url, '_blank', 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }

    return newWindow;
  };

  /**
   * Simple replacement for jQuery getScript.
   */
  s.loadJSONP = function(url) {
    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  };

  /**
   * load javascript using script tags in the head of the document after app load
   * for use with things like loading SDKs and API Libraries
   */
  s.loadJavascript = function(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = script.onreadystatechange = function() {
      if(!this.readyState || this.readyState == 'complete') {
        callback();
      }
    };
  };

  /**
   * Returns style value for given node and style name.
   *
   * Note: Firefox can throw a null error if there is too much processing happening at once,
   * so prior to using this method, use the AppBase isReadyToInit / notifyWhenReadyToInit methods 
   * to make sure this method can be used.
   */
  s.getStyle = function(node, styleName) {
    var value;

    if (node.currentStyle) {
      value = node.currentStyle[styleName];

    } else if (window.getComputedStyle) {
      value = window.getComputedStyle(node).getPropertyValue(styleName);
    }

    return value;
  };

  /**
   * Accepts an object with properties which correspond to "variables" in embedded
   * CSS <style> tag, in this format (comment-block included):
   */
      /*var=VAR_NAME_HERE*/
   /*
   * All <style> tags in the HTML file are parsed to replace all instances 
   * of each variable defined in themeObj with the corresponding value in themeObj.
   */
  s.replaceStylesheetVariables = function(themeObj) {

    var styleNodes = document.getElementsByTagName('style'),
        styles;

    for (var i = 0; i < styleNodes.length; i++) {
      styles = styleNodes[i].innerHTML;

      for (var styleVarName in themeObj) {
        styles = styles.split('/*var=' + styleVarName + '*/').join(themeObj[styleVarName]);
      }

      styleNodes[i].innerHTML = styles;
    }
  };

  /**
   * Converts string 'rgba(255, 255, 255, 0.9)' into object: {red: 255, green: 255, blue: 255, alpha: 0.9}
   */
  s.rgbaToObject = function(colorString) {
    var arr = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/);
    
    return {
      red: arr[0],
      green: arr[1],
      blue: arr[2],
      alpha: arr[3]
    };
  };

  /**
   * Sends text message, limited to 160 characters
   * @param to - phone number
   * @param dataObj - .subject and .message
   */
  s.sendSMS = function(to, dataObj) {

    //hardcode for local testing
    var serviceUrl = 'https://origin-ads.pictela.net/a/proxy/s2c?';

    //override with production URL
    if (ADTECH && ADTECH.getServicesHosts().POST.length > 0) {
      serviceUrl = ADTECH.getServicesHosts().POST + 'a/proxy/s2c?';
    }

    var xhr = new XMLHttpRequest(),
        normalizedTo = to.replace(/[^0-9]/g, '');

    xhr.open('POST', serviceUrl, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(JSON.stringify({
      phone: normalizedTo,
      subject: dataObj.subject,
      message: dataObj.message
    }));
  };

  /**
   * Sends email using ADTECH Email Template system, which due to cross-origin requests,
   * only works when the demo is on the pictela domain.
   * @param templateKey - the identifier key from the adtech email template system, which controls from/subject/body.
   * @param toAddress - the recipient, or a comma-separated list of multiple recipients
   * @param dataObj - the data posted to the template.
   * @param mailSentHandler - (optional) the function to call after mail is sent
   */
  s.sendEmail = function(templateKey, toAddress, dataObj, mailSentHandler) {
    
    if (!dataObj) {
      dataObj = {};
    }

    if (!mailSentHandler) {
      mailSentHandler = function(){};
    }

    var emailAddresses = toAddress.split(',');

    ADTECH.ready(['Mailer/1.2.0/Mailer'], function() {
      
      ADTECH.modules.Mailer.send({
        key: templateKey,
        recipients: emailAddresses,
        data: dataObj,
        onComplete: mailSentHandler
      });
    });
  };

  /**
   * SpecialEvent is Pictela's current solution for including data in a JS Object
   * along with a standard event name. To use, call this function once, then for each event call...
   * ADTECH.specialEvent('eventNameHere', {object: 'with', some: 'properties', goes: 'here'})
   *
   * ...also include the data object in the standard ADTECH.event call as the second param.
   */
  s.initSpecialEvent = function() {
    ADTECH.ready(initSpecial);

    function initSpecial() {
      ADTECH.specialEvent = function (evt, obj) {
        var str = 'specialEventName=' + encodeURIComponent(evt);
        
        for (var i in obj) {
          str += ';dn' + i + '=' + encodeURIComponent(obj[i]);
        }

        if (ADTECH.constructCustomEventURL) {
          var url = ADTECH.constructCustomEventURL() + str;

          //instead of dispatching specialEvent and implementing a listener in customAd.js,
          //we can simply call the tracking pixel URL directly:
          //ADTECH.event('specialEvent', {link: url});

          s.loadPixel(url);
        }
      };
    }

    if (com && com.adtech && com.adtech.Core && ADTECH.adConfig && ADTECH.adConfig.adServerVars) {
      com.adtech.Core.prototype.constructCustomEventURL = function() {
        var adServerVars = ADTECH.adConfig.adServerVars;
        var base = adServerVars.servingProto + '://' + adServerVars.servingHost + '/dtrack/3.0/';
        var nw = adServerVars.networkId + '.' + adServerVars.subNetworkId + '/';
        var placement = adServerVars.placementId + '/1/1/';
        var bnid = ';bnid=' + adServerVars.bannerId;
        var adid = ';adid=' + adServerVars.id;
        var keyValue = ';dn';
        var rnd = ';misc=' + (new Date()).getTime() + ';';
        return base + nw + placement + bnid + adid + rnd + keyValue;
      };
    }
  };

  s.initSpecialGetServicesHost = function() {
    ADTECH.ready(initSpecialGetHost);

    function initSpecialGetHost() {
      if(ADTECH.getServicesHosts()) {

        console.log('Adtech get service detected');

      } else {
        console.log('no get service host');

        var theObject = {
          GET: 'http://ads.pictela.net/', 
          POST: 'https://origin-ads.pictela.net/'};
          
        return theObject;
      }
    }
  };

  s.isInPictela = function() {

    try {
      if (parent.ADTECH) {
        return true;
      } 
    } catch(err) {
      return false;
    }
  };
  
  /**
   * Call a 3rd party tracking pixel by URL.
   */
  s.loadPixel = function(url) {
    var pixel = new Image();
    pixel.src = url;
  };

  /**
   * Inits Underscore.js template settings to be mustache-notation
   * so this works:
   * var x = _.template('{{ a }} {{ b }}');
   * var y = x({a: 1, b: 2}); //y = '1 2'
   *
   * Note: make sure to use the spaces after the mustaches, so it 
   * doesn't conflict with Grunt-Bake variables.
   */
  s.initUnderscoreMustacheTemplate = function() {
    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };
  };


  /**
   * Returns true for the browsers that are incompatible with
   * standard form inputs used with the pictela template swiper component.
   * When true, we fallback to custom inputs - such as select boxes,
   * and not putting focus into textfields.
   *
   * Known browsers: Chrome (Mac and PC), Safari on Mac
   */
  s.browserHasFormIssuesWithPictelaSwiper = function() {
    var hasIssue = false;

    var ua = navigator.userAgent;

    if (ua.indexOf('Chrome') >= 0) {
      hasIssue = true;
    } else if (ua.indexOf('Safari') >= 0 && (ua.indexOf('Macintosh') >= 0 || ua.indexOf('Windows') >= 0)) {
      hasIssue = true;
    }

    return hasIssue;
  };

  s.isEmptyObject = function (object) {
    var i;

    for (i in object) { 
      return true; 
    } 

    return false; 
  };

  /*
   * Returns true as default but for browsers, OSs, or 
   * devices that are set for no auto foucus on INPUT field,
   * it will return false. The purpose of this method is for
   * fixing issue with setting onfocus on input fields but
   * it doesn't work and causes more issue.
   */

  s.noAutoFocusOnInput = function() {
    var noAutoFocus = false;
    var isiOS = navigator.userAgent.match(/like Mac OS X/i);
    var isAndroid = navigator.userAgent.match(/Android/i);

    if (isiOS || isAndroid){
      noAutoFocus = true;
    }
    return noAutoFocus;
  };

  /**
   * Uses accounting.js to format currency according to a few pre-defined
   * currency types.
   * 
   * @param lowestCurrencyAmount -- e.g. "$150.89" use CENTS as in 15089...
   *                                but Japan Yen is always Yen (no cents)
   * @param currency -- one of the following:
   *  USD - US dollars (DEFAULT)
   *  CND - Canadian dollars
   *  CNY - Chinese Yen
   *  EUR - Euros 
   *  JPY - Japanese yen 
   *  GBP - British pound 
   *  INR - Indian Rupees
   *  JPY - Japan Yen
   */
  s.formatCurrency = function(lowestCurrencyAmount, currency) {

    //convert cents to dollars
    var a = lowestCurrencyAmount / 100;

    //apply locale-based formatting to the subtotal
    switch (currency) {
      case 'USD':
        a = accounting.formatMoney(a);
        break;

      case 'CAD':
        a = accounting.formatMoney(a, 'CDN$ ');
        break;

      case 'CNY':
        a = accounting.formatMoney(a, '￥');
        break;

      case 'EUR':
        a = accounting.formatMoney(a, 'EUR ', 2, '.', ',');
        break;

      case 'GBP':
        a = accounting.formatMoney(a, '£');
        break;

      case 'INR':
        a = accounting.formatMoney(a, '₹');
        break;

      case 'JPY':
        //convert back to yen since yen doesn't come in as cents
        a = accounting.formatMoney(a * 100, '￥', 0);
        break;

      default:
        a = accounting.formatMoney(a);
    }

    return a;
  };

  /**
   * Returns top level domain name based on locale
   */
  s.getTLDFromLocale = function(locale) {
    locale = locale.toLowerCase();

    var tld;

    switch (locale) {
      case 'us':
        tld = 'com';
        break;
      case 'uk':
      case 'jp':
        tld = 'co.' + locale;
        break;
      default:
        tld = locale;
    }

    return tld;
  };

  /**
   * Returns line of paragraph based on line index
   */
  s.getLineByNumber = function(node, lineNum) {
    var elem = node;
    var spanChildren = elem.getElementsByTagName('span');
    var paragraphText = elem.innerHTML.replace(/(\r\n|\n|\r)/gm, '');
    var newParagraphText = '';
    var words = [];
    var max;
    
    if (spanChildren.length === 0) {
        words = paragraphText.split(' ');

        for (var i = 0; max = words.length, i < max; i++)
        newParagraphText += '<span>' + words[i] + '</span> ';
        elem.innerHTML = newParagraphText;
    }else{
        for(var j=0; max = spanChildren.length, j<max; j++){
            words[words.length] = spanChildren[j].innerHTML;
        }
    }
    
    var lineCounter = 0;
    var previousY = spanChildren[0].offsetTop;
    var returnText = '';
    var startReturning = false;
    
    for (var k = 0; max = words.length, k < max; k++) {
        
      if (spanChildren[k].offsetTop != previousY) {
        lineCounter++;
      } 
      
      if (lineCounter === lineNum) {
        startReturning = true;
      } 
      
      if (lineCounter !== lineNum && startReturning) {
        return returnText.substring(0, returnText.length - 1);
      }
      
      if (startReturning) {
          returnText += words[k] + ' ';
          if (k + 1 === words.length) {
            return returnText.substring(0, returnText.length - 1);
          }
      }
      
      previousY = spanChildren[k].offsetTop;
    }
  };

  /**
   * Returns width (in pixels) of a line in a paragraph 
     based on font style (pt/px size and font name)
   */
   s.getLineWidth = function(text, font) {

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = font;
    var metrics = context.measureText(text);
    return Math.round(metrics.width);
  };

AOLCT.Util = Util;
}());

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var DisplayObject = function(parentDisplayObject, parentNode) {
    this.init(parentDisplayObject, parentNode);
  };

  var p = DisplayObject.prototype = new createjs.EventDispatcher();

  p.init = function(parentDisplayObject, parentNode) {
    this._parentNode = parentNode;
    this.parent = parentDisplayObject;

    this._orientation = 'vertical';

    this._x = null;
    this._y = null;
    this._width = null;
    this._height = null;
    this._node = null;
  };

  //GET/SET
  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  //returns width/height property, usually the actual width of the node after call to place()
  p.getWidth = function() {
    return this._width;
  };
  p.getHeight = function() {
    return this._height;
  };

  //returns the clientWidth/Height of the node, which is the size inside of scrollbars
  p.getClientWidth = function() {
    return this._node.clientWidth;
  };
  p.getClientHeight = function() {
    return this._node.clientHeight;
  };

  p.getNode = function() {
    return this._node;
  };

  p.getParentNode = function() {
    return this._parentNode;
  };
  p.setParentNode = function(obj) {
    this._parentNode = obj;
  };

  p.setParentDisplayObject = function(obj) {
    this.parent = obj;
  };

  p.getOrientation = function(){
    return this._orientation;
  };
  p.setOrientation = function(verticalOrHorizontal){
    this._orientation = verticalOrHorizontal;
  };

  p.show = function(){
    this._node.style.display = 'block';
  };
  p.hide = function(){
    this._node.style.display = 'none';
  };

  //PUBLIC
  p.makeInteractive = function() {
    // add mouse interactivity
  };

  //moving displayObject to a fixed position
  p.move = function(point, optionalAnimationTime) {
    this._x = point.x;
    this._y = point.y;

    if (optionalAnimationTime) {
      TweenMax.to(this._node, optionalAnimationTime, point);
    } else {
      TweenMax.set(this._node, point);
    }
  };

  p.place = function(boundingBox, optionalAnimationTime) {
    this._x = boundingBox.x;
    this._y = boundingBox.y;
    this._width = boundingBox.width;
    this._height = boundingBox.height;

    if (optionalAnimationTime) {
      TweenMax.to(this._node, optionalAnimationTime, boundingBox);
    } else {
      TweenMax.set(this._node, boundingBox);
    }
  };

  //PRIVATE
  p._setup = function() {
    //one time setup of nodes
  };

AOLCT.DisplayObject = DisplayObject;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT, TweenMax, Strong, _ */

  var AppBase = function() {
    this.init();
  };

  var p = AppBase.prototype = new AOLCT.DisplayObject();

  p.super_init = p.init;
  p.init = function() {

    p.super_init(null, document.body);

    this._determineAppNum();

    this._configureAnimation();

    this._setup();

    this._detectBrowser();
  };

  //PUBLIC

  p.getAppNum = function() {
    return this._appNum;
  };

  /**
   * App is considered ready as soon as we can do a getComputedStyle on the body node.
   * This is needed because in Firefox in FPF when trafficked, we cannot get computed styles until after
   * a certain delay, so we'll use this to wait until Firefox is ready.
   */
  p.isReadyToInit = function() {

    var node = document.body;

    //if we're in webkit browsers we'll always be ready
    if (node.currentStyle) {
      return true;

    //if firefox, this function will return null if not ready
    } else if (window.getComputedStyle) {
      var styles = window.getComputedStyle(node);

      if (styles === null) {
        return false;
      }
    }

    //for other browsers, assume ready
    return true;
  };

  p.notifyWhenReadyToInit = function() {

    if (this.isReadyToInit()) {
      this._dispatchReady();
    } else {

      if (this._checkReadyInterval) {
        clearInterval(this._checkReadyInterval);
      }
      
      this._checkReadyInterval = setInterval(function() {

        if (this.isReadyToInit()) {
          clearInterval(this._checkReadyInterval);
          this._dispatchReady();
        }

      }.bind(this), 250);
    }
  };
  

  //PRIVATE

  p._dispatchReady = function() {
    this.dispatchEvent('ready');
  };

  p._determineAppNum = function() {
    try {
      this._appNum = window.frameElement.getAttribute('data-loc');
    } catch(ex) {
      this._appNum = 1;
    }

    if (isNaN(this._appNum) || this._appNum === null) {
      this._appNum = 1;
    }
  };

  /**
   * Change default ease from Power1.easeOut to Strong.easeOut.
   */
  p._configureAnimation = function() {
    TweenMax.defaultEase = Strong.easeOut;
  };

  p._setup = function() {
    this._node = AOLCT.Util.makeAbsNode('appWrapper', document.body, null, 'appWrapper');
  };

  /**
   * Call this from the subclass when ready to place the view.
   * View must be added to the property this._appView.
   *
   * Also to ensure this can access the this._appView property from
   * the subclass, invoke this method using .call(this)
   */
  p._placeOnWindowResize = function() {

    //place to window size immediately:
    this._resize();

    //update on window resize, debouncing to prevent many back-to-back calls 
    var debouncedResize = _.debounce(
      this._resize.bind(this),
      300); //...but with maximum run of once per 150 milliseconds

    window.addEventListener('resize', debouncedResize, false);
  };

  /**
   * Place the appView (set by the subclass) using the current window size
   */
  p._resize = function() {
    this._width = this._node.clientWidth;
    this._height = this._node.clientHeight;

    if (this._appView) {
      this._appView.place({
        x: 0, 
        y: 0, 
        width: this._width, 
        height: this._height
      });
    }
  };

  /**
   * Detects IE9 and adds the 'IE9' class name to this node similar to what modernizr would do.
   */
  p._detectBrowser = function() {
    if (navigator.userAgent.indexOf('MSIE 9') >= 0) {
      TweenMax.set(this._node, {className: '+=IE9'});
    }
  };

AOLCT.AppBase = AppBase;
})();

this.AOLCT = this.AOLCT || {};

(function(){
  'use strict';
  /* global AOLCT */

  var SocialShareModel = function(clickUrl, imageUrl, shortMessage, longMessage) {
    this.clickUrl = clickUrl;
    this.imageUrl = imageUrl;
    this.shortMessage = shortMessage;
    this.longMessage = longMessage;
  };

AOLCT.SocialShareModel = SocialShareModel;
})();
this.AOLCT = this.AOLCT || {};

(function(){
  'use strict';
  /* global AOLCT, createjs */

  var ProductModel = function(id, title, description, price, priceQualifier, imageUrl, clickUrl, merchant) {
    this.init.apply(this, arguments);
  };

  var p = ProductModel.prototype = new createjs.EventDispatcher();

  p.init = function(id, title, description, price, priceQualifier, imageUrl, clickUrl, merchant) {
    this.id = id || '';
    this.title = title || '';
    this.description = description || '';
    this.price = price || '';
    this.priceQualifier = priceQualifier || '';
    this.imageUrl = imageUrl || '';
    this.clickUrl = clickUrl || '';
    this.merchant = merchant || '';

    if (this.clickUrl == 'http://') {
      this.clickUrl = '';
    }
  };

  /** 
   * Use this when doing math with prices using international currencies
   * Some examples:
   * For USD, use cents ... $195.62    -> 19562
   * For EUR, use cents ... EUR 195,62 -> 19562
   * For JPY, use yen   ... ￥19,562   -> 19562
   */
  p.setPriceAmount = function(amount) {
    this.priceAmount = amount;
  };
  p.getPriceAmount = function() {
    return this.priceAmount;
  };

  /** 
   * Use this when doing math with prices using international currencies
   * Some examples supported by AOLCT.Util.formatCurrency are:
   * USD, CND, CNY, EUR, GBP, INR, JPY
   */
  p.setPriceCurrency = function(currency) {
    this.priceCurrency = currency;
  };
  p.getPriceCurrency = function() {
    return this.priceCurrency;
  };

  p.setFormattedStrikethroughPrice = function(strikePrice) {
    this.strikethroughPrice = strikePrice;
  };
  p.getFormattedStrikethroughPrice = function() {
    return this.strikethroughPrice;
  };

  /** 
   * Returns percent off between 0 and 100 
   */
  p.setPercentOff = function(percent) {
    this.percentOff = percent;
  };
  p.getPercentOff = function() {
    return this.percentOff;
  };

  
  p.setQuantity = function(quantity) {

    if (isNaN(quantity)) {
      quantity = 0;
    } else {
      quantity = Number(quantity);
    }
    
    this.quantity = quantity;
  };
  p.getQuantity = function() {
    return this.quantity;
  };

  
  p.setCategoryIndex = function(categoryIndex) {
    this.categoryIndex = categoryIndex;
  };
  p.getCategoryIndex = function() {
    return this.categoryIndex;
  };
  
  p.setIndex = function(index) {
    this.index = index;
  };
  p.getIndex = function() {
    return this.index;
  };

  /**
   * Packages this data into a new SocialShareModel
   * ready to use with the Share button and Sharer classes.
   */
  p.toSocialShareModel = function() {

    var shortMessage = this.title + ' - ' + this.price,
        longMessage = shortMessage + (this.description.length > 0 ? ' - ' + this.description : '');

    return new AOLCT.SocialShareModel(this.clickUrl, this.imageUrl, shortMessage, longMessage);
  };


  /**
   * Call this if making any changes during runtime in order to notify others.
   */
  p.changed = function() {
    this.dispatchEvent('changed');
  };

AOLCT.ProductModel = ProductModel;
})();
this.AOLCT = this.AOLCT || {};

(function(){
  'use strict';
  /* global createjs, _, AOLCT */

  var ProductsModel = function() {
    this.init();
  };

  var p = ProductsModel.prototype = new createjs.EventDispatcher();

  p.init = function() {
    this._array = [];
  };

  p.addItem = function(item) {
    this._array.push(item);

    item.addEventListener('changed', this._handleItemChanged.bind(this));
  };

  /**
   * Returns true if there is already a ProductItem with a matching title,
   * otherwise false.
   */
  p.contains = function(item) {

    if (!item) {
      return false;
    }
    
    var matchingItem = _.findWhere(this._array, {title: item.title}); 

    return (matchingItem !== undefined);
  };

  /**
   * Returns the index of the exact item reference in the array,
   * otherwise -1.
   */
  p.indexOf = function(item) {

    return _.indexOf(this._array, item); 
  };

  p.getCount = function() {
    return this._array.length;
  };

  p.getItem = function(index) {
    return this._array[index];
  };

  p.removeItem = function(item) {
    this._array.splice(_.indexOf(this._array, _.findWhere(this._array, {title: item.title})), 1);
  };

  p.removeAll = function() {
    this.init();
  };

  //replace all items in this with those from the other
  p.replace = function(otherProductsModel) {
    this.removeAll();

    for (var i = 0; i < otherProductsModel.getCount(); i++) {
      this.addItem(otherProductsModel.getItem(i));
    }
  };

  p.changed = function() {
    this.dispatchEvent('changed');
  };

  p._handleItemChanged = function() {
    this.changed();
  };

AOLCT.ProductsModel = ProductsModel;
})();
this.AOLCT = this.AOLCT || {};

(function(){
  'use strict';
  /* global AOLCT */

  var CategoryModel = function(id, name) {
    this.init(id, name);
  };

  var p = CategoryModel.prototype;

  p.init = function(id, name) {
    this.id = id;
    this.name = name;
  };

AOLCT.CategoryModel = CategoryModel;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, AOLCT */

  var CategoriesModel = function() {
    this.init();
  };

  var p = CategoriesModel.prototype = new createjs.EventDispatcher();

  p.init = function() 
  {
    this._array = [];
  };

  p.addItem = function(item) {
    this._array.push(item);
  };

  p.getCount = function() {
    return this._array.length;
  };

  p.getItem = function(index) {
    return this._array[index];
  };

  p.removeItem = function(index) {
    this._array.slice(index, 1);
  };

  p.changed = function() {
    this.dispatchEvent('changed');
  };

AOLCT.CategoriesModel = CategoriesModel;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, AOLCT, ADTECH, _ */

  /**
   * @param categoriesModel
   * @param productsModel
   * @param config: {pd, promotionCode, campaignId}
   */
  var ShopLocalAPI = function(config, categoriesModel, productsModel, parentDisplayObject) {
    this.init(config, categoriesModel, productsModel, parentDisplayObject);
  };

  var s = ShopLocalAPI;

  s.CATEGORIES_URL = ADTECH.getServicesHosts().GET + 'a/proxy/shoplocal/categorytree/{{ campaignid }}/citystatezip={{ citystatezip }};pd={{ pd }};promotioncode={{ promotioncode }};callback={{ callback }}/json';

  s.ALL_LISTINGS_URL = ADTECH.getServicesHosts().GET + 'a/proxy/shoplocal/alllistings/{{ campaignid }}/citystatezip={{ citystatezip }};pd={{ pd }};promotioncode={{ promotioncode }};sortby=23;listingimageflag=y;listingimagewidth={{ listingimagewidth }};resultset=full;listingcount={{ listingcount }};{{ extraParams }};callback={{ callback }}/json';
  s.CAT_LISTINGS_URL = ADTECH.getServicesHosts().GET + 'a/proxy/shoplocal/categorylistings/{{ campaignid }}/citystatezip={{ citystatezip }};pd={{ pd }};promotioncode={{ promotioncode }};sortby=23;listingimageflag=y;listingimagewidth={{ listingimagewidth }};resultset=full;listingcount={{ listingcount }};categoryid={{ categoryid }};{{ extraParams }};callback={{ callback }}/json';
  
  s.RETAILER_LISTINGS_URL = ADTECH.getServicesHosts().GET + 'a/proxy/shoplocal/retailertaglistings/{{ campaignid }}/citystatezip={{ citystatezip }};pd={{ pd }};promotioncode={{ promotioncode }};sortby=23;listingimageflag=y;listingimagewidth={{ listingimagewidth }};resultset=full;listingcount={{ listingcount }};retailertagid={{ retailertagid }};siteid={{ siteid }};{{ extraParams }};callback={{ callback }}/json';

  s.instanceCount = 0;


  var p = ShopLocalAPI.prototype = new createjs.EventDispatcher();

  p.init = function(config, categoriesModel, productsModel, parentDisplayObject) {
    
    this.parent = parentDisplayObject;

    this._imageSize = 300;
    this._resultCount = 100;

    this._categoriesModel = categoriesModel;
    this._productsModel = productsModel;

    this._config = config;
    this._config.campaignId = config.campaignId || 'b7119d5eab23d603';
    this._config.pd = config.pd || '';
    this._config.promotionCode = config.promotionCode || '';

    this._cityStateZip = null;
    this._categoryId = '';
    
    //expose unique callback functions for JSONP, but always starting with 0
    this._uniqueId = s.instanceCount++;
    s['onCategoriesLoaded' + this._uniqueId] = this._onCategoriesLoaded.bind(this);
    s['onProductsLoaded' + this._uniqueId] = this._onProductsLoaded.bind(this);
  };

  //PUBLIC

  p.setLocation = function(location) {
    this._location = location;
  };

  p.setCategoryId = function(categoryId) {
    this._categoryId = categoryId;
  };

  /**
   * First call setCityStateZip(someZipCode).
   * Then call this to load the categories for the given zip and configuration.
   * When complete, the CategoriesModel dispatches a 'change' event.
   */
  p.loadCategoriesModel = function() {

    AOLCT.Util.initUnderscoreMustacheTemplate();

    var template = _.template(s.CATEGORIES_URL);

    var url = template({
      campaignid:    this._config.campaignId,
      pd:            this._config.pd,
      promotioncode: this._config.promotionCode,
      citystatezip:  this._location,
      callback:      'AOLCT.ShopLocalAPI.onCategoriesLoaded' + this._uniqueId
    });

    //console.log('ShopLocalAPI.loadCategoriesModel:', url);
    
    //load the data
    AOLCT.Util.loadJSONP(url);
    //once loaded, callback is called
  };

  /**
   * First call setCategoryId() and setCityStateZip(), as these settings will persist.
   * 
   * When complete, the ProductsModel dispatches a 'change' event.
   */
  p.loadProductsModel = function() {

    AOLCT.Util.initUnderscoreMustacheTemplate();

    var commonProductParams = {
      campaignid:        this._config.campaignId,
      pd:                this._config.pd,
      promotioncode:     this._config.promotionCode,
      citystatezip:      this._location,
      listingimagewidth: this._imageSize,
      listingcount:      this._resultCount,
      extraParams:        this._config.extraParams,
      callback:          'AOLCT.ShopLocalAPI.onProductsLoaded' + this._uniqueId
    };

    var template, url;

    if (this._config.searchEndpoint === 'categorylistings'){
      //load products for category
      if (this._categoryId.length > 0) {
        template = _.template(s.CAT_LISTINGS_URL);

        url = template(
                _.extend(
                  {
                    categoryid: this._categoryId
                  },
                  commonProductParams));

      //load all popular products
      } else {
        template = _.template(s.ALL_LISTINGS_URL);

        url = template(commonProductParams);
      }

    } else if (this._config.searchEndpoint === 'retailertaglistings') {
        //load products for category
        if (this._categoryId.length > 0) {
          template = _.template(s.CAT_LISTINGS_URL);

        url = template(
                _.extend(
                  {
                    categoryid: this._categoryId
                  },
                  commonProductParams));

      //load products from particular retailers
      } else {
         template = _.template(s.RETAILER_LISTINGS_URL);

          url = template(
                _.extend(
                  {
                    retailertagid: this._config.retailertagid,
                    siteid:        this._config.siteid
                  },
                  commonProductParams));
      }

    }
    
    //console.log('ShopLocalAPI.loadProductsModel:', url);
    
    //load the data
    AOLCT.Util.loadJSONP(url);
    //once loaded, callback is called
  };

  //JSONP Callbacks
  p._onCategoriesLoaded = function(data) {
    this._categoriesModel.init();

    if (data && data.Results && data.Results[0]) {
      
      //first add default
      var c = new AOLCT.CategoryModel('', 'Most Popular');
      this._categoriesModel.addItem(c);

      //then add dynamic
      var cats = data.Results;

      for (var i = 0; i < cats.length; i++) {
        c = new AOLCT.CategoryModel(cats[i].ID, cats[i].CompleteDescription);

        this._categoriesModel.addItem(c);
      }

    } else if (data && data.Results && data.Results.error) {

      this._dispatchErrorEvent(data.Results.error);
    }


    this._categoriesModel.changed();
  };

  p._onProductsLoaded = function(data) {
    
    this._productsModel.init();

    if (data && data.Results&& data.Results[0]) {
    
      var prods = data.Results;

      //if only a single item, make it an array
      if (!prods.slice) {
        prods = [prods];
      }

      for (var i = 0; i < prods.length; i++) {

        var prod = prods[i];

        if (p._excludeProduct(prod)) {
          continue;
        }

        //remove http: from Image URL to work secure and non-secure
        prod.ImageLocation = prod.ImageLocation.replace('http://', '//');

        prod = new AOLCT.ProductModel(
          prod.ID,
          prod.Title,
          prod.Description,
          prod.Deal,
          prod.PriceQualifier,
          prod.ImageLocation,
          prod.BuyOnlineUrl);
        this._productsModel.addItem(prod);
      }

    } else if (data && data.Results && data.Results.error) {

      this._dispatchErrorEvent(data.Results.error);
    }

    this._productsModel.changed();
  };

  p._dispatchErrorEvent = function(message) {
    //track error for reporting purposes
    var evt = new createjs.Event('error', true);
    evt.data = {
      message: message
    };
    this.dispatchEvent(evt);
  };

  /** 
   * Exclude products with placeholder image of 'image_not_available.gif'
   */
  p._excludeProduct = function(productData) {

    if (productData.ImageLocation.indexOf('image_not_available.gif') > -1) {
      return true;
    }
    return false;
  };

AOLCT.ShopLocalAPI = ShopLocalAPI;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, AOLCT, ADTECH, _ */

  /**
   * @param categoriesModel
   * @param productsModel
   * @param config: {pd, promotionCode, campaignId}
   */
  var CustomProductFeedAPI = function(config, clicksContentCollection, categoriesModel, productsModel, parentDisplayObject) {
    this.init(config, clicksContentCollection, categoriesModel, productsModel, parentDisplayObject);
  };

  var s = CustomProductFeedAPI;
  s.JSON_PROXY_URL = ADTECH.getServicesHosts().GET + 'a/proxy/text?url={{ jsonUrl }}&callback={{ callback }}';
  s.IMAGE_PROXY_URL = ADTECH.getServicesHosts().GET + 'a/proxy/image-0x0.jpg?url={{ imageUrl }}';
  s.IMAGE_PROXY_FORMAT_CHECK = 'a/proxy/image-'; //if this text is already within the image url, the proxy won't be added again

  s.instanceCount = 0;


  var p = CustomProductFeedAPI.prototype = new createjs.EventDispatcher();

  p.init = function(config, clicksContentCollection, categoriesModel, productsModel, parentDisplayObject) {
    
    this.parent = parentDisplayObject;

    this._imageSize = 300;
    this._resultCount = 100;

    this._categoriesModel = categoriesModel;
    this._productsModel = productsModel;

    this._productsByCategory = {};

    this._clicksContentCollection = clicksContentCollection;

    this._config = config;
    
    this._categoryId = '';
    
    //expose unique callback functions for JSONP, but always starting with 0
    this._uniqueId = s.instanceCount++;
    s['onAllDataLoaded' + this._uniqueId] = this._onAllDataLoaded.bind(this);
  };

  //PUBLIC

  //not using location for anything for now
  p.setLocation = function(location) {
    this._location = location;
  };

  p.setCategoryId = function(categoryId) {
    this._categoryId = categoryId;
  };

  /**
   * When complete, the CategoriesModel dispatches a 'change' event.
   */
  p.loadCategoriesModel = function() {

    if (!this.firstLoadCalled) {
      this.firstLoadCalled = true;
      this._loadAllData();
    }
  };

  /**
   * First call setCategoryId() as this settings will persist.
   * 
   * When complete, the ProductsModel dispatches a 'change' event.
   */
  p.loadProductsModel = function() {

    //for the first call, wait until all data is loaded then use the products from the first category
    if (!this.firstLoadCalled) {
      this.firstLoadCalled = true;
      this._loadData();

    //for subsequent calls, get the products that are already loaded
    } else if (this.isLoaded) {
      this._updateProductsModelForCurrentCategory();
    }
  };

  p._loadAllData = function() {
    AOLCT.Util.initUnderscoreMustacheTemplate();

    var template = _.template(s.JSON_PROXY_URL);

    var jsonUrl = (this._config.feedType == 'file' ? this._config.file : this._config.url);

    var url = template({
      jsonUrl:  encodeURIComponent(jsonUrl),
      callback: 'AOLCT.CustomProductFeedAPI.onAllDataLoaded' + this._uniqueId
    });

    //load the data
    AOLCT.Util.loadJSONP(url);
  };

  //JSONP Callbacks
  p._onAllDataLoaded = function(data) {

    var imageProxyTemplate = _.template(s.IMAGE_PROXY_URL);

    this._categoriesModel.init();

    if (data && data.productsByCategory && data.productsByCategory[0]) {
      
      var cats = data.productsByCategory,
          categoryIdCounter = 0,
          productIdCounter = 0,
          c, cat, catId, p, prod;

      for (var i = 0; i < cats.length; i++) {
        c = cats[i];
        catId = categoryIdCounter++;

        cat = new AOLCT.CategoryModel(catId, cats[i].category);

        this._categoriesModel.addItem(cat);

        this._productsByCategory[catId] = new AOLCT.ProductsModel();

        for (var j = 0; j < c.products.length; j++) {

          p = c.products[j];

          //proxy the images, if not already
          if (p.imageUrl.indexOf(s.IMAGE_PROXY_FORMAT_CHECK) == -1) {
            p.imageUrl = imageProxyTemplate({
              imageUrl: p.imageUrl
            });
          }

          prod = new AOLCT.ProductModel(
            productIdCounter++,
            p.title,
            p.description,
            p.price,
            p.priceQualifier,
            p.imageUrl,
            this._clicksContentCollection[i]['item' + (j + 1) + 'ClickUrl']);

          prod.categoryIndex = i;
          prod.index = j;

          this._productsByCategory[catId].addItem(prod);
        }
      }

      //use first category ID
      this.setCategoryId(this._categoriesModel.getItem(0).id);

      this._updateProductsModelForCurrentCategory();

      this._categoriesModel.changed();

      this.isLoaded = true;

    } else {

      this._dispatchErrorEvent('Error loading custom product feed');
    }
  };


  p._updateProductsModelForCurrentCategory = function() {
    //replace the shared products model with the products from the first category
    this._productsModel.replace(this._productsByCategory[this._categoryId]);

    //dispatch both models changed so the app view updates
    this._productsModel.changed();
  };

AOLCT.CustomProductFeedAPI = CustomProductFeedAPI;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var ArrowIcon = function(cssClassName, parentDisplayObj, parentNode) {
    this._parentDisplayObj = parentDisplayObj;
    this._parentNode = parentNode;
    
    this._node = AOLCT.Util.makeNodeFromFragment(
      cssClassName,
      '<svg style="fill: currentColor;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"><path d="M6.8,10V5H10L7.3,2.3L5,0L2.7,2.3L0,5h3.2v5H6.8"/></svg>',
      this._parentNode
    );
  };

AOLCT.ArrowIcon = ArrowIcon;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var BackIcon = function(cssClassName, parentDisplayObj, parentNode) {
    this._parentDisplayObj = parentDisplayObj;
    this._parentNode = parentNode;
    
    this._node = AOLCT.Util.makeNodeFromFragment(
      cssClassName,
      '<svg style="fill: currentColor;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 13" enable-background="new 0 0 8 13" xml:space="preserve"><polygon points="8,1.4 6.6,0 0,6.5 6.6,13 8,11.6 2.9,6.5 "/></svg>',
      this._parentNode
    );
  };

AOLCT.BackIcon = BackIcon;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var CloseIcon = function(cssClassName, parentDisplayObj, parentNode) {
    this._parentDisplayObj = parentDisplayObj;
    this._parentNode = parentNode;
    
    this._node = AOLCT.Util.makeNodeFromFragment(
      cssClassName,
      '<svg style="fill: currentColor;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"><polygon points="10,1.4 8.6,0 5,3.6 1.4,0 0,1.4 3.6,5 0,8.6 1.4,10 5,6.4 8.6,10 10,8.6 6.4,5 "/></svg>',
      this._parentNode
    );
  };

AOLCT.CloseIcon = CloseIcon;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var EmailIcon = function(cssClassName, parentDisplayObj, parentNode) {
    this._parentDisplayObj = parentDisplayObj;
    this._parentNode = parentNode;
    
    this._node = AOLCT.Util.makeNodeFromFragment(
      cssClassName,
      '<svg style="fill: currentColor;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 6" enable-background="new 0 0 8 6" xml:space="preserve"><path d="M8,6H0V0h8V6L8,6z M1,5.4h6.1l-2-2.1L4.7,3.8C4.5,3.9,4.3,4,4,4l0,0C3.8,4,3.6,3.9,3.4,3.8L3,3.4L1,5.4 L1,5.4z M0.6,0.9v4.1l2-2.1L0.6,0.9L0.6,0.9z M5.5,3l2,2.1V1L5.5,3L5.5,3z M1,0.6l2.8,2.8c0,0,0.2,0.1,0.3,0.1l0,0 c0.1,0,0.2,0,0.3-0.1l2.8-2.8H1L1,0.6z"/></svg>',
      this._parentNode
    );
  };

AOLCT.EmailIcon = EmailIcon;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var ListIcon = function(cssClassName, parentDisplayObj, parentNode) {
    this._parentDisplayObj = parentDisplayObj;
    this._parentNode = parentNode;

    this._node = AOLCT.Util.makeNodeFromFragment(
      cssClassName,
      '<svg style="fill: currentColor;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 6 5" enable-background="new 0 0 6 5" xml:space="preserve"><path d="M5.1,0.1C4.3-0.2,3.3,0.1,3,0.8C2.6,0.1,1.6-0.2,0.9,0.1C0.1,0.5-0.3,1.4,0.3,2.5C0.8,3.3,1.6,3.9,3,5c1.4-1.1,2.2-1.7,2.7-2.5C6.3,1.4,5.9,0.5,5.1,0.1z"/></svg>',
      this._parentNode
    );
  };

AOLCT.ListIcon = ListIcon;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var PrintIcon = function(cssClassName, parentDisplayObj, parentNode) {
    this._parentDisplayObj = parentDisplayObj;
    this._parentNode = parentNode;
    
    this._node = AOLCT.Util.makeNodeFromFragment(
      cssClassName,
      '<svg style="fill: currentColor;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 18" enable-background="new 0 0 20 18" xml:space="preserve"><g><rect x="6.2" y="10.3" width="7.6" height="0.6"/><rect x="6.2" y="12.6" width="7.6" height="0.6"/><rect x="6.2" y="14.8" width="7.6" height="0.6"/><path d="M20,4.4h-4.2V0H4.2v4.4H0v10h4V18h11.8v-3.7H20V4.4z M5,0.8h10v3.5H5V0.8z M15,17.2H5V8.3h10V17.2z"/></g></svg>',
      this._parentNode
    );
  };

AOLCT.PrintIcon = PrintIcon;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var SearchIcon = function(cssClassName, parentDisplayObj, parentNode) {
    this._parentDisplayObj = parentDisplayObj;
    this._parentNode = parentNode;
    
    this._node = AOLCT.Util.makeNodeFromFragment(
      cssClassName,
      '<svg style="fill: currentColor;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" xml:space="preserve"><g><g><g><g><path d="M10.4,11.9L7.7,9.2C6.9,9.7,6,10,5,10c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.7,0,5,2.2,5,5c0,1-0.3,1.9-0.7,2.6l2.7,2.7c0.2,0.1,0,0.5-0.3,0.8l-0.4,0.4C10.9,12,10.5,12.1,10.4,11.9z M8.3,5c0-1.8-1.5-3.3-3.3-3.3C3.1,1.7,1.6,3.2,1.6,5S3.1,8.4,5,8.4C6.8,8.4,8.3,6.9,8.3,5z"/></g></g></g></g></svg>',
      this._parentNode
    );
  };

AOLCT.SearchIcon = SearchIcon;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var ShareIcon = function(cssClassName, parentDisplayObj, parentNode) {
    this._parentDisplayObj = parentDisplayObj;
    this._parentNode = parentNode;
    
    this._node = AOLCT.Util.makeNodeFromFragment(
      cssClassName,
      '<svg style="fill: currentColor;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 10" enable-background="new 0 0 12 10" xml:space="preserve"><g><g><g><g><g><path d="M8.4,10H1.2C0.5,10,0,9.4,0,8.7V2.1c0-0.7,0.5-1.3,1.2-1.3h6.9l-3,1.3H1.2v6.6h7.2V7.8l1.2-0.9v1.9 C9.6,9.4,9.1,10,8.4,10z"/></g></g></g></g><g><g><g><g><path d="M8.4,6.8v-2c-2.9,0-5,1.7-5,1.7s0.3-3.7,5-4.6V0L12,3.4l-1.8,1.7L8.4,6.8z"/></g></g></g></g></g></svg>',
      this._parentNode
    );
  };

AOLCT.ShareIcon = ShareIcon;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var ButtonBase = function(cssClassName, parentDisplayObj, parentNode) {
    this.init(cssClassName, parentDisplayObj, parentNode);
  };

  var s = ButtonBase;

  s.touchMoveThreshold = 15; //# of pixels during touchmove that will cancel the press

  var p = ButtonBase.prototype = new createjs.EventDispatcher();

  p.init = function(cssClassName, parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._cssClassName = cssClassName;

    this._isVisible = true;

    this._isEnabled = true;

    this._setup();
  };

  //GET/SET

  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  p.getWidth = function() {
    return this._node.offsetWidth;
  };

  p.getHeight = function() {
    return this._node.offsetHeight;
  };

  p.getIsVisible = function() {
    return this._isVisible;
  };


  //PUBLIC

  /**
   * @param point {x, y, z}
   */
  p.move = function(point) {

    this._x = point.x;
    this._y = point.y;

    TweenMax.set(this._node, point);
  };

  p.place = function(boundingBox, optionalAnimationTime) {
    this._x = boundingBox.x;
    this._y = boundingBox.y;
    this._width = boundingBox.width;
    this._height = boundingBox.height;

    if (optionalAnimationTime) {
      TweenMax.to(this._node, optionalAnimationTime, boundingBox);
    } else {
      TweenMax.set(this._node, boundingBox);
    }
  };

  p.disable = function() {
    this._node.setAttribute('disabled', 'disabled');

    TweenMax.set(this._node, {opacity: 0.2});

    this._node.style.cursor = 'default';

    this._isEnabled = false;
  };

  p.enable = function() {
    this._node.removeAttribute('disabled');

    TweenMax.set(this._node, {opacity: 1});

    this._node.style.cursor = 'pointer';

    this._isEnabled = true;
  };

  p.show = function(useDisplayInsteadOfVisibility) {
    if (!this._isVisible) {

      if (useDisplayInsteadOfVisibility) {
        this._node.style.display = 'inline';
      } else {
        this._node.style.visibility = 'visible';
      }
      this._isVisible = true;
    }
  };

  p.hide = function(useDisplayInsteadOfVisibility) {
    if (this._isVisible) {
      if (useDisplayInsteadOfVisibility) {
        this._node.style.display = 'none';
      } else {
        this._node.style.visibility = 'hidden';
      }
      this._isVisible = false;
    }
  };

  //PRIVATE
  p._setup = function() {

    this._node = AOLCT.Util.makeAbsNode(this._cssClassName, this._parentNode, 'button');

    this._makeInteractive();
  };

  p._makeInteractive = function() {
    if (AOLCT.Util.isTouchDevice()) {
      this._node.addEventListener('touchstart', this._onTouchStart.bind(this));
    } else {
      this._node.addEventListener('mousedown', this._onMouseDown.bind(this));
      this._node.addEventListener('mouseout', this._onMouseOut.bind(this));
      this._node.addEventListener('click', this._onClick.bind(this));
    }
  };

  p._onTouchStart = function(evt) {
    if (this._isEnabled) {
      this._onTouchMoveBound = this._onTouchMove.bind(this);
      this._onTouchEndBound = this._onTouchEnd.bind(this);

      this._touchStartX = evt.touches[0].pageX;
      this._touchStartY = evt.touches[0].pageY;

      this._node.addEventListener('touchmove', this._onTouchMoveBound);
      this._node.addEventListener('touchend', this._onTouchEndBound);

      this._press();
    }
  };

  /**
   * If movement exceeds 15px, remove listeners
   */
  p._onTouchMove = function(evt) {
    var touchX = evt.touches[0].pageX;
    var touchY = evt.touches[0].pageY;

    if (Math.abs(touchX - this._touchStartX) > s.touchMoveThreshold || Math.abs(touchY - this._touchStartY) > s.touchMoveThreshold) {
      this._node.removeEventListener('touchmove', this._onTouchMoveBound);
      this._node.removeEventListener('touchend', this._onTouchEndBound);
    }
  };

  p._onTouchEnd = function() {
    if (this._isEnabled) {
      this._node.removeEventListener('touchmove', this._onTouchMoveBound);
      this._node.removeEventListener('touchend', this._onTouchEndBound);
    
      this._release();
    }
  };

  p._onMouseDown = function() {

    if (this._isEnabled) {
      this._press();
    }
  };

  p._onClick = function() {
    if (!AOLCT.Util.isTouchDevice()) {
      var target = {
            scale: 1
          };
      
      TweenMax.to(this._node, 0.15, target);
    }

    this._release();
  };

  p._onMouseOut = function() {
    if (this._isPressed) {
      var target = {
            scale: 1
          };

      TweenMax.to(this._node, 0.15, target);
    }
  };

  p._press = function() {
    if (!AOLCT.Util.isTouchDevice()) {
      var target = {
            scale: 0.9
          };

      TweenMax.to(this._node, 0.15, target);
    }

    this._isPressed = true;
  };

  p._release = function() {
    this._isPressed = false;

    this.dispatchEvent('click');
  };

AOLCT.ButtonBase = ButtonBase;
})();
/**
 * A button with 3 styles:
 * - PRIMARY - brand color with white text.
 * - SECONDARY - brand color border and text, white background.
 * - TEXTONLY - brand color text with no background
 * 
 * Optionally contains an icon. The iconClassRef is a reference
 * to a class which renders an icon, by SVG or otherwise. Supported
 * icons so far are:
 * - AOLCT.EmailIcon
 * - AOLCT.ListIcon
 * - AOLCT.PrintIcon
 * - AOLCT.ShareIcon
 */

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var Button = function(type, label, iconClassRef, parentDisplayObj, parentNode) {
    this.init(type, label, iconClassRef, parentDisplayObj, parentNode);
  };

  var s = Button;
  s.PRIMARY = 'primaryButton';
  s.SECONDARY = 'secondaryButton';
  s.TEXTONLY = 'textOnlyButton';

  var p = Button.prototype = new AOLCT.ButtonBase();

  p.super_init = p.init;
  p.init = function(type, label, iconClassRef, parentDisplayObj, parentNode) {

    this._labelText = label;
    this._iconClassRef = iconClassRef;

    this.super_init(type, parentDisplayObj, parentNode);

    this.setLabel(label);
  };

  //GET/SET

  p.setLabel = function(val) {
    this._labelText = val;

    this.update();
  };

  //PUBLIC

  p.update = function() {
    this._labelNode.innerHTML = this._labelText;
  };

  //PRIVATE
  p._super_setup = p._setup;
  p._setup = function() {

    this._super_setup();

    if (this._iconClassRef) {
      this._icon = new this._iconClassRef('buttonIcon', this, this._node);
    }

    this._labelNode = AOLCT.Util.makeNode('buttonLabel', this._node, 'span');
  };

AOLCT.Button = Button;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var BackButton = function(parentDisplayObj, parentNode) {
    this.init(parentDisplayObj, parentNode);
  };

  var p = BackButton.prototype = new AOLCT.ButtonBase();

  p.super_init = p.init;
  p.init = function(parentDisplayObj, parentNode) {
    this.super_init('BackButton', parentDisplayObj, parentNode);

    this._icon = new AOLCT.BackIcon('backButtonIcon', this, this._node);
  };

AOLCT.BackButton = BackButton;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var CloseButton = function(parentDisplayObj, parentNode) {
    this.init(parentDisplayObj, parentNode);
  };

  var p = CloseButton.prototype = new AOLCT.ButtonBase();

  p.super_init = p.init;
  p.init = function(parentDisplayObj, parentNode) {
    this.super_init('CloseButton', parentDisplayObj, parentNode);

    this._icon = new AOLCT.CloseIcon('closeButtonIcon', this, this._node);
  };

AOLCT.CloseButton = CloseButton;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT, TweenMax */

  var ExpandButton = function(parentDisplayObj, parentNode) {
    this.init(parentDisplayObj, parentNode);
  };

  var p = ExpandButton.prototype = new AOLCT.ButtonBase();

  p.super_init = p.init;
  p.init = function(parentDisplayObj, parentNode) {
    this.super_init('ExpandButton', parentDisplayObj, parentNode);

    this._rotations = {up: 0, down: 180, left: -90, right: 90};
    this._expandedDirections = {up: 'down', down: 'up', left: 'right', right: 'left'};

    this._isExpanded = false;
  };

  //GET/SET

  p.setExpandDirection = function(direction) {
    if (direction == 'up' || direction == 'down' || direction == 'left' || direction == 'right') {
      this._expandDirection = direction;
    }

    this.update();
  };

  p.setIsExpanded = function(isExpanded) {
    this._isExpanded = isExpanded;

    this.update();
  };


  //PUBLIC

  p.update = function() {
    var iconRotation;
    if (!this._isExpanded) {
      iconRotation = this._rotations[this._expandDirection];
    } else {
      iconRotation = this._rotations[this._expandedDirections[this._expandDirection]];
    }

    TweenMax.to(this._icon._node, 0.25, {rotation: iconRotation});
  };

  //PRIVATE
  p._super_setup = p._setup;
  p._setup = function() {

    this._super_setup();

    this._icon = new AOLCT.ArrowIcon('expandIcon', this, this._node);
  };

AOLCT.ExpandButton = ExpandButton;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var EmailInput = function(parentDisplayObj, parentNode) {
    this.init(parentDisplayObj, parentNode);
  };

  var p = EmailInput.prototype = new createjs.EventDispatcher();

  p.init = function(parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._isFlagged = false;
    
    this._setup();

    this._makeInteractive();

    this.setPlaceholder('Enter Email Address');
  };

  //GET/SET

  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  p.getWidth = function() {
    return this._node.offsetWidth;
  };

  p.getHeight = function() {
    return this._node.offsetHeight;
  };

  p.getIsVisible = function() {
    return this._isVisible;
  };

  /**
   * Sets the value of the input field.
   */
  p.setValue = function(value) {
    this._node.value = value;
  };

  /**
   * Returns the value of the input field.
   */
  p.getValue = function() {
    return this._node.value;
  };

  /**
   * Sets the placeholder text of the input field
   * (visible when its value is empty).
   */
  p.setPlaceholder = function(placeholder) {
    this._node.placeholder = placeholder;
  };


  //PUBLIC

  /**
   * @param point {x, y, z}
   */
  p.move = function(point) {

    this._x = point.x;
    this._y = point.y;

    TweenMax.set(this._node, point);
  };

  /**
   * @param move {x, y, width}
   */
  p.place = function(placement) {

    this._x = placement.x;
    this._y = placement.y;
    this._width = placement.width;

    TweenMax.set(this._node, placement);
  };

  p.focus = function() {
    this._node.focus();
  };
  
  p.flag = function() {
    if (!this._isFlagged) {
      this._isFlagged = true;
    
      //change text red
      this._node.className = 'emailInputError';

      this.focus();
    }
  };

  p.unflag = function() {
    if (this._isFlagged) {
      this._isFlagged = false;
    
      this._node.className = 'emailInput';
    }
  };

  p.isValid = function() {
    var re = /\S+@\S+\.\S+/;
    return re.test(this.getValue());
  };

  //PRIVATE
  p._setup = function() {

    this._node = AOLCT.Util.makeAbsNode('emailInput', this._parentNode, 'input');

    try {
      this._node.type = 'email';
    } catch (ex) {
      //this fails in IE9 - let it fallback to the default of type=text
    }
  };

  p._makeInteractive = function() {
    this._node.onkeydown = this._onKeyDown.bind(this);
  };

  p._onKeyDown = function() {
     this.unflag();
  };

AOLCT.EmailInput = EmailInput;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var LocationInput = function(parentDisplayObj, parentNode) {
    this.init(parentDisplayObj, parentNode);
  };

  var p = LocationInput.prototype = new createjs.EventDispatcher();

  p.init = function(parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._isFlagged = false;
    
    this._setup();

    this.update();
  };

  //GET/SET

  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  p.getWidth = function() {
    return this._node.offsetWidth;
  };

  p.getHeight = function() {
    return this._node.offsetHeight;
  };

  p.getIsVisible = function() {
    return this._isVisible;
  };

  /**
   * Sets the value of the input field.
   */
  p.setValue = function(value) {
    this._inputNode.value = value;
  };

  /**
   * Sets the placeholder text of the input field
   * (visible when its value is empty).
   */
  p.setPlaceholder = function(placeholder) {
    this._inputNode.placeholder = placeholder;
  };


  //PUBLIC

  /**
   * @param point {x, y, z}
   */
  p.move = function(point) {

    this._x = point.x;
    this._y = point.y;

    TweenMax.set(this._node, point);
  };

  p.update = function() {

    //this._labelNode.innerHTML = this._labelText;

  };

  p.enable = function() {
    this._node.removeAttribute('disabled');

    TweenMax.set(this._node, {opacity: 1});
  };

  p.disable = function() {
    this._node.setAttribute('disabled', 'disabled');
    
    TweenMax.set(this._node, {opacity: 0.2});
  };

  p.show = function() {
    this._node.style.visibility = 'visible';

    this._isVisible = true;
  };

  p.hide = function() {
    this._node.style.visibility = 'hidden';

    this._isVisible = false;
  };

  p.flag = function() {
    if (!this._isFlagged) {
      this._isFlagged = true;
    
      //change text red
      this._inputNode.className = 'locationInputError';

      //place focus
      this._inputNode.focus();
    }
  };

  p.unflag = function() {
    if (this._isFlagged) {
      this._isFlagged = false;
    
      this._inputNode.className = 'locationInput';
    }
  };

  //PRIVATE
  p._setup = function() {

    //we use a <form> node in order to get the blue "Go" button in iOS 
    this._node = AOLCT.Util.makeAbsNode('form', this._parentNode, 'form');

    this._inputNode = AOLCT.Util.makeAbsNode('locationInput', this._node, 'input');

    this._icon = new AOLCT.SearchIcon('locationInputIcon', this, this._node);

    this._makeInteractive();
  };

  p._makeInteractive = function() {
    this._inputNode.onfocus = this._onFocus.bind(this);
    this._inputNode.onblur = this._onBlur.bind(this);
    this._inputNode.onkeydown = this._onKeyDown.bind(this);

    //listen to form submission, automatic by enter key press, or by iOS "Go" button press.
    this._node.onsubmit = this._onSubmit.bind(this);
  };

  p._onSubmit = function() {
    
    //dismiss the iOS keyboard by removing focus:
    document.activeElement.blur();

    //bubble the event
    var evt = new createjs.Event('locationChange', true);
    evt.data = {
      location: this._inputNode.value
    };
    this.dispatchEvent(evt);

    //don't actually submit form (page refresh) so return false
    return false;
  };

  p._onFocus = function() {
    //nothing to do yet
  };

  p._onBlur = function() {
    //nothing to do yet
  };

  p._onKeyDown = function() {
     this.unflag();
  };

AOLCT.LocationInput = LocationInput;
})();
/**
 * SelectInput represents a custom-styled <select> dropdown menu.
 *
 * However the main reason this is its own class is to fall-back 
 * to a completely custom dropdown menu that is not composed of a 
 * <select> in order to work in Pictela's use of the 
 * iDangerous Swiper component which is used in the 728x90 format.
 * Without this custom menu, when pressing on a standard <select>,
 * the gallery will jump.
 *
 * So now we use the custom select box for all browsers that are
 * not touch devices. Touch devices use standard <select>.
 */

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT, createjs, TweenMax */

  var SelectInput = function(parentDisplayObj, parentNode) {
    this.init(parentDisplayObj, parentNode);
  };

  var s = SelectInput;

  s.touchMoveThreshold = 15; //# of pixels during touchmove that will cancel the press


  var p = SelectInput.prototype = new AOLCT.DisplayObject();

  p.super_init = p.init;
  p.init = function(parentDisplayObj, parentNode) {

    this.super_init(parentDisplayObj, parentNode);

    //if chrome (desktop or mobile), or safari on dekstop, or any non-touch device, use custom dropdown
    if (true || AOLCT.Util.browserHasFormIssuesWithPictelaSwiper() || !AOLCT.Util.isTouchDevice()) {
      this._useStandardSelectTag = false;

    //if touch device, use standard select
    } else {
      this._useStandardSelectTag = true;
    }
    
    this._customOptionNodes = [];

    this._setup();
  };

  //GET/SET

  p.getWidth = function() {
    return this._node.offsetWidth;
  };

  p.getHeight = function() {
    return this._node.offsetHeight;
  };

  p.getIsVisible = function() {
    return this._isVisible;
  };

  /**
   * Returns the value of the input field.
   */
  p.getSelectedValue = function() {
    var value;
    if (this._useStandardSelectTag) {
      value = this._node.options[this._node.selectedIndex].value;
    } else {
      value = this._selectedCustomOptionNode.getAttribute('value');
    }
    return value;
  };

  p.setModel = function(model, valuePropertyName, labelPropertyName) {

    var item, i;

    if (this._useStandardSelectTag) {
      var options = this._node.options;

      for (i = options.length - 1; i >= 0; i--) {
          options.remove(i);
      }

      for (i = 0; i < model.getCount(); i++) {
        item = model.getItem(i);

        options.add(new Option(this._formatLabel(item[labelPropertyName]), item[valuePropertyName]));
      }
    
    } else {
      item = model.getItem(0);
      this._selectedLabelNode.innerHTML = item[labelPropertyName];

      this._removeAllCustomOptions();

      for (i = 0; i < model.getCount(); i++) {
        item = model.getItem(i);

        this._addCustomOption(this._formatLabel(item[labelPropertyName]), item[valuePropertyName]);
      }

      //mark the first option as selected
      this._selectedCustomOptionNode = this._customOptionNodes[0];
      this._customOptionNodes[0].className = 'selectInputCustomOptionSelected';

      this._placeExpandedBox();
    }
  };

  /**
   * Call this to set the max width of the custom dropdown portion.
   */
  p.setMaxExpandSize = function(width, height) {
    this._maxExpandWidth = width;
    this._maxExpandHeight = height;
  };


  //PUBLIC

  /**
   * Height is determined by CSS
   */
  p.place = function(boundingBox) {
    this._x = boundingBox.x;
    this._y = boundingBox.y;
    this._width = boundingBox.width;

    TweenMax.set(this._node, boundingBox);

    if (!this._useStandardSelectTag) {
      var selectedLabelContainerBoundingBox = {
        x: 0,
        y: 0,
        width: this._width
      };
      TweenMax.set(this._selectedLabelContainerNode, selectedLabelContainerBoundingBox);

      var selectedLabelBoundingBox = {
        x: 6,
        y: 4,
        width: this._width - 25
      };
      TweenMax.set(this._selectedLabelNode, selectedLabelBoundingBox);

      this._placeExpandedBox();
    }
  };

  p._placeExpandedBox = function() {
    if (!this._useStandardSelectTag) {

      var expandedWidth = this._width;

      if (this._maxExpandWidth) {
        expandedWidth = this._maxExpandWidth;
      }

      var expandedHeight = 100;

      if (this._maxExpandHeight) {
        var heightOfItems = this._customDropdownItemsNode.offsetHeight;

        if (heightOfItems && heightOfItems < this._maxExpandHeight) {
          expandedHeight = heightOfItems + 2;
        } else {
          expandedHeight = this._maxExpandHeight;
        }
      }

      var dropdownBoundingBox = {
        x: 0,
        y: 0,
        width: expandedWidth,
        height: expandedHeight
      };
      TweenMax.set(this._customDropdownNode, dropdownBoundingBox);
    }
  };


  //PRIVATE
  p._setup = function() {
    
    //use standard <select> tag
    if (this._useStandardSelectTag) { 
      this._node = AOLCT.Util.makeAbsNode('selectInput', this._parentNode, 'select');

      this._node.addEventListener('change', this._dispatchChangeEvent.bind(this));

    //or use custom dropdown that works when in Pictela's swiper component.
    } else {
      this._node = AOLCT.Util.makeAbsNode('selectInputCustom', this._parentNode);

      this._selectedLabelContainerNode = AOLCT.Util.makeAbsNode('selectInputCustomSelectedLabelContainer', this._node);
      this._selectedLabelNode = AOLCT.Util.makeAbsNode('selectInputCustomSelectedLabel', this._selectedLabelContainerNode);

      this._customDropdownNode = AOLCT.Util.makeAbsNode('selectInputCustomDropdown inertialScroll', this._node);
      this._customDropdownItemsNode = AOLCT.Util.makeNode('selectInputCustomDropdownItems', this._customDropdownNode);
      this._customDropdownItemsNode.style.width = '100%';

      this._makeCustomDropdownInteractive();
    }
  };

  p._removeAllCustomOptions = function() {

    var i, node;

    for (i = this._customOptionNodes.length - 1; i >= 0; i--) {

      node = this._customOptionNodes[i];

      node.parentNode.removeChild(node);

      delete this._customOptionNodes[i];
    }
  };

  /**
   * Custom options use regular positioning since they only scroll vertically.
   */
  p._addCustomOption = function(label, value) {

    var node = AOLCT.Util.makeNode('selectInputCustomOption', this._customDropdownItemsNode);

    this._customOptionNodes.push(node);

    node.innerHTML = label.replace(/<(?:.|\n)*?>/gm, ' ');

    node.setAttribute('value', value);

    this._makeCustomOptionInteractive(node);

  };

  p._formatLabel = function(label) {
    return label.replace(/<(?:.|\n)*?>/gm, ' ');
  };

  p._makeCustomDropdownInteractive = function() {
    if (AOLCT.Util.isTouchDevice()) {
      this._selectedLabelContainerNode.addEventListener('touchend', this._onSelectedLabelPress.bind(this));

    } else {
      this._selectedLabelContainerNode.addEventListener('mousedown', this._onSelectedLabelPress.bind(this));

      this._customDropdownNode.addEventListener('mousemove', this._onCustomDropdownMouseMove.bind(this));
    }

    this._boundOnDocumentRelease = this._onDocumentRelease.bind(this);
  };

  p._onSelectedLabelPress = function() {
    if (!this._customDropdownExpanded) {
      this._customDropdownNode.style.display = 'block';
      this._customDropdownExpanded = true;

      this._placeExpandedBox();
    } else {
      this._customDropdownNode.style.display = 'none';
      this._customDropdownExpanded = false;
    }

    this._mouseMoved = false;

    //when releasing anywhere, hide the dropdown
    if (AOLCT.Util.isTouchDevice()) {
      setTimeout(function(){
        document.body.addEventListener('touchend', this._boundOnDocumentRelease);
      }.bind(this), 200);

    } else {
      document.body.addEventListener('mouseup', this._boundOnDocumentRelease);
    }
  };

  p._onCustomDropdownMouseMove = function() {
    this._mouseMoved = true;
  };

  p._onDocumentRelease = function(evt) {
    if (AOLCT.Util.isTouchDevice() && !this._touchMoved || this._mouseMoved) {
      
      //hide the dropdown if clicking on anything -- except for the dropdown's scroll bar
      if (evt.target != this._customDropdownNode) {
        this._customDropdownNode.style.display = 'none';
        this._customDropdownExpanded = false;

        //remove the bound event listener from the body
        if (AOLCT.Util.isTouchDevice()) {
          document.body.removeEventListener('touchend', this._boundOnDocumentRelease);
        } else {
          document.body.removeEventListener('mouseup', this._boundOnDocumentRelease);
        }
      }
    }
  };



  p._makeCustomOptionInteractive = function(optionNode) {

    if (AOLCT.Util.isTouchDevice()) {
      optionNode.addEventListener('touchstart', this._onCustomOptionTouchStart.bind(this));
      optionNode.addEventListener('touchmove', this._onCustomOptionTouchMove.bind(this));
      optionNode.addEventListener('touchend', this._onCustomOptionRelease.bind(this));
    } else {
      optionNode.addEventListener('mouseover', this._onCustomOptionOver.bind(this));
      optionNode.addEventListener('mouseout', this._onCustomOptionOut.bind(this));
      optionNode.addEventListener('mouseup', this._onCustomOptionRelease.bind(this));
    }

  };

  p._onCustomOptionTouchStart = function(evt) {
    if (evt.target == this._selectedCustomOptionNode) {
      return;
    }
    evt.target.className = 'selectInputCustomOptionHover';

    this._touchMoved = false;

    this._touchStartY = evt.touches[0].pageY;
  };

  p._onCustomOptionOver = function(evt) {
    if (evt.target == this._selectedCustomOptionNode) {
      return;
    }
    evt.target.className = 'selectInputCustomOptionHover';
  };

  p._onCustomOptionOut = function(evt) {
    if (evt.target == this._selectedCustomOptionNode) {
      return;
    }
    evt.target.className = 'selectInputCustomOption';
  };

  p._onCustomOptionTouchMove = function(evt) {
    if (evt.target == this._selectedCustomOptionNode) {
      return;
    }

    var touchY = evt.touches[0].pageY;

    if (Math.abs(touchY - this._touchStartY) > s.touchMoveThreshold) {
      evt.target.className = 'selectInputCustomOption';

      this._touchMoved = true;
    }
  };

  p._onCustomOptionRelease = function(evt) {
    evt.preventDefault();

    if (AOLCT.Util.isTouchDevice() && !this._touchMoved || this._mouseMoved) {

      if (evt.target != this._selectedCustomOptionNode) {
        evt.target.className = 'selectInputCustomOptionSelected';

        if (this._selectedCustomOptionNode) {
          this._selectedCustomOptionNode.className = 'selectInputCustomOption';
        }

        this._selectedCustomOptionNode = evt.target;

        this._selectedLabelNode.innerHTML = evt.target.innerHTML;

        this._dispatchChangeEvent();
      }
    }
  };

  p._dispatchChangeEvent = function() {
    var changeEvent = new createjs.Event('change');
    changeEvent.data = {
      selectedValue: this.getSelectedValue()
    };
    this.dispatchEvent(changeEvent);
  };

AOLCT.SelectInput = SelectInput;
})();

/**
 * Use Text to restrict text to a box, using webkit clamping for ellipses.
 * In CSS, must set:
 *   line-height: XXpt;
 *
 * To restrict text to a certain number of lines, use...
 *   this.place({x, y, width});
 *   this.setMaxLineCount(X);
 *
 * To restrict text to full lines based on amx height, use...
 *   this.place({x, y, width, height});
 *
 * If overflow does not correctly hide in Chrome, add to place call
 * force3D: true...
 *   this.place({force3D: true, x:XX, y:YY, width:WW, height:HH})
 */

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var Text = function(cssClassName, parentDisplayObj, parentNode) {
    this.init(cssClassName, parentDisplayObj, parentNode);
  };

  var s = Text.prototype;
  s.touchMoveThreshold = 15; //# of pixels during touchmove that will cancel the press


  var p = Text.prototype = new createjs.EventDispatcher();

  p.init = function(cssClassName, parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._cssClassName = cssClassName;

    this._setup();
  };

  //GET/SET

  p.setText = function(t) {
    this._text = t;

    this.update();
  };

  p.setMaxLineCount = function(lineCount, skipUpdate) {
    this._maxLineCount = lineCount;

    //add styles to eliminate redundancy in CSS
    this._node.style.display =  '-webkit-box';
    this._node.style.webkitBoxOrient =  'vertical';
    this._node.style.overflow =  'hidden';

    if (!skipUpdate) {
      this.update();
    }
  };


  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  p.getWidth = function() {
    return this._node.offsetWidth;
  };

  p.getHeight = function() {
    return this._node.offsetHeight;
  };

  p.getIsVisible = function() {
    return this._isVisible;
  };

  p.getLineHeight = function() {
    return this._lineHeight;
  };

  p.getMaxHeight = function() {
    return this._lineHeight * this._maxLineCount;
  };

  p.getNode = function() {
    return this._node;
  };


  //PUBLIC

  p.place = function(placement) {

    this._x = placement.x;
    this._y = placement.y;
    this._width = placement.width;

    if (placement.height) {
      this._height = placement.height;

      if (this._lineHeight >= 0) {
        this.setMaxLineCount(Math.floor(this._height / this._lineHeight), true);
      }
    }

    TweenMax.set(this._node, placement);

    this.update();
  };

  p.move = function(point) {
    this._x = point.x;
    this._y = point.y;
    
    TweenMax.set(this._node, point);
  };

  p.update = function() {
    //if(this._text != this._previousText){
      this._node.innerHTML = this._text || '';

      if (this._maxLineCount >= 0 && this._lineHeight >= 0) {
        this._node.style.maxHeight = this._maxLineCount * this._lineHeight + 'px';
        this._node.style.webkitLineClamp = this._maxLineCount;
      }

      //this._previousText = this._text;
    //}
  };

  p.show = function() {
    this._node.style.visibility = 'visible';

    this._isVisible = true;
  };

  p.hide = function() {
    this._node.style.visibility = 'hidden';

    this._isVisible = false;
  };

  //call this externally for interactive text to dispatch a "click" event
  p.makeInteractive = function() {
    if (AOLCT.Util.isTouchDevice()) {
      this._node.addEventListener('touchstart', this._onTouchStart.bind(this));
    } else {
      this._node.addEventListener('click', this._onClick.bind(this));
    }
  };

  p._onTouchStart = function(evt) {
    this._onTouchMoveBound = this._onTouchMove.bind(this);
    this._onTouchEndBound = this._onTouchEnd.bind(this);

    this._touchStartX = evt.touches[0].pageX;
    this._touchStartY = evt.touches[0].pageY;

    this._node.addEventListener('touchmove', this._onTouchMoveBound);
    this._node.addEventListener('touchend', this._onTouchEndBound);
  };

  /**
   * If movement exceeds 15px, remove listeners
   */
  p._onTouchMove = function(evt) {
    var touchX = evt.touches[0].pageX;
    var touchY = evt.touches[0].pageY;

    if (Math.abs(touchX - this._touchStartX) > s.touchMoveThreshold || Math.abs(touchY - this._touchStartY) > s.touchMoveThreshold) {
      this._node.removeEventListener('touchmove', this._onTouchMoveBound);
      this._node.removeEventListener('touchend', this._onTouchEndBound);
    }
  };

  p._onTouchEnd = function() {
    this._node.removeEventListener('touchmove', this._onTouchMoveBound);
    this._node.removeEventListener('touchend', this._onTouchEndBound);
    this._release();
  };

  p._onClick = function() {
    this._release();
  };

  p._release = function() {
    this.dispatchEvent('click');
  };

  //PRIVATE
  p._setup = function() {

    this._node = AOLCT.Util.makeAbsNode(this._cssClassName, this._parentNode);

    //get the line height:
    this._lineHeight = parseInt(AOLCT.Util.getStyle(this._node, 'line-height'), 10);

    this.show();
  };

AOLCT.Text = Text;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, _, TweenMax, AOLCT */

  var ModalDialog = function(title, parentDisplayObj, optionalParentNode) {
    this.init(title, parentDisplayObj, optionalParentNode);
  };

  var p = ModalDialog.prototype = new createjs.EventDispatcher();

  p.init = function(title, parentDisplayObj, optionalParentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = optionalParentNode || document.getElementById('appWrapper') || document.body;

    this._titleText = title;

    this._setup();

    this._makeInteractive();

    //ModalDialog listens directly to window resize. Everything else is told when to resize by the AppView.
    this._setupWindowResize();
  };


  //GET/SET
  p.getContentsNode = function() {
    return this._contentsNode;
  };


  //PUBLIC

  p.setSize = function(size) {

    this._width = size.width;
    this._height = size.height;

    this.update();
  };

  p.update = function() {
    this.place();
  };

  p.place = function() {

    if (!this._width) {
      return;
    }

    //lightbox
    var placement = {
      x: 0, y: 0,
      width: this._parentNode.clientWidth,
      height: this._parentNode.clientHeight
    };

    TweenMax.set(this._lightboxNode, placement);

    //title
    placement = {
      x: Math.round((this._lightboxNode.clientWidth - this._width) / 2),
      y: Math.round((this._lightboxNode.clientHeight - this._height) / 2),
      width: this._width,
      height: 30
    };

    this._titleBarX = placement.x;
    this._titleBarY = placement.y;
    this._titleBarHeight = placement.height;

    TweenMax.set(this._titleBarNode, _.clone(placement));

    //close button
    var point = {
      x: Math.round(this._width - this._closeButton.getWidth()),
      y: Math.round((this._titleBarHeight - this._closeButton.getHeight()) / 2) 
    };
    this._closeButton.move(point);

    //contents
    placement = {
      x: this._titleBarX,
      y: this._titleBarY + this._titleBarHeight,
      width: this._width,
      height: this._height - this._titleBarHeight
    };
    TweenMax.set(this._contentsNode, placement);
  };

  p.show = function() {
    this._node.style.display = 'block';

    this._showTime = new Date();

    this.update();
  };

  p.hide = function() {
    this.dispatchEvent('modalDialogWillHide');
    
    this._node.style.display = 'none';
  };


  //PRIVATE

  p._setup = function() {

    this._node = AOLCT.Util.makeAbsNode('modalDialog', this._parentNode);

    this._lightboxNode = AOLCT.Util.makeAbsNode('modalDialogLightbox', this._node);


    this._titleBarNode = AOLCT.Util.makeAbsNode('modalDialogTitleBar', this._node);
    this._titleBarLabelNode = AOLCT.Util.makeAbsNode('modalDialogTitleBarLabel', this._titleBarNode);

    this._closeButton = new AOLCT.CloseButton(this, this._titleBarNode);


    this._contentsNode = AOLCT.Util.makeAbsNode('modalDialogContents', this._node);

    this._titleBarLabelNode.innerHTML = this._titleText;
  };

  p._setupWindowResize = function() {

    //update on window resize 
    var updateLayout = _.debounce(function() {
      
      this.update();

    }.bind(this), 75); //...but with maximum run of once per 75 milliseconds

    window.addEventListener('resize', updateLayout, false);
  };

  p._makeInteractive = function() {

    //lightbox node handler (could replace with class)
    if (AOLCT.Util.isTouchDevice()) {
      this._lightboxNode.addEventListener('touchend', this._onLightboxPress.bind(this));
    } else {
      this._lightboxNode.addEventListener('click', this._onLightboxPress.bind(this));
    }

    //close button handler
    this._closeButton.addEventListener('click', function() {
      this.hide();
    }.bind(this));
  };

  p._onLightboxPress = function() {

    var now = new Date(),
        timeSinceShow = now.valueOf() - this._showTime.valueOf(),
        threshold = 500;

    //hide only after a delay, in case user double-clicks the button that opened this
    if (timeSinceShow > threshold) {
      this.hide();
    }
  };

AOLCT.ModalDialog = ModalDialog;  
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, AOLCT */

  var EmailModalDialog = function(parentDisplayObj, title, fromAddress) {
    this.init(parentDisplayObj, title, fromAddress);
  };

  var p = EmailModalDialog.prototype = new createjs.EventDispatcher();

  p.init = function(parentDisplayObj, title, fromAddress) {

    this._modalDialog = new AOLCT.ModalDialog(title, this, null);

    //set to 4:3 ratio
    this._modalDialog.setSize({width: 220, height: 135});

    this.parent = parentDisplayObj;
    this._node = this._modalDialog.getContentsNode();

    this._fromAddress = fromAddress;

    this._setup();

    this._makeInteractive();

    this.place();
  };


  //PUBLIC

  /**
   * @param productModel - an AOLCT.ProductModel
   */
  p.setModel = function(productsModel) {
    this._model = productsModel;
  };

  p.show = function() {
    
    this._modalDialog.show();

    this.update();

    //auto-focus the input field as long is it won't cause issues (certain browsers + pictela swiper component)
    if (!AOLCT.Util.browserHasFormIssuesWithPictelaSwiper()) {
      if (!AOLCT.Util.noAutoFocusOnInput()){
        this._emailInput.focus();
      }  
    }
  };

  p.hide = function() {

    this._modalDialog.hide();

  };

  p.update = function() {

    this.place();

  };

  p.place = function() {

    this._emailInput.place({x: 10, y: 10, width: 190}); //less for 8px total horiz padding + 2px horiz border
    
    this._message.place({x: 10, y: this._emailInput.getY() + this._emailInput.getHeight() + 5, width: 192}); //less for 8px total horiz padding

    this._sendButton.move({x: 10, y: this._message.getY() + this._message.getHeight() + 5});
    this._cancelButton.move({x: 10 + this._sendButton.getWidth() + 5, y: this._sendButton.getY()});
  };

  //PRIVATE

  p._setup = function() {

    this._form = AOLCT.Util.makeNode(null, this._node, 'form');

    //place in form in order to have iOS GO button
    this._emailInput = new AOLCT.EmailInput(this, this._form);

    //place in form in order to have iOS GO button
    this._message = new AOLCT.Text('emailDialogMessage', this, this._node);
    this._message.setText('The sender will appear as ' + this._fromAddress);

    //remove from form so they don't submit the form, but instead use click events directly
    this._sendButton = new AOLCT.Button(AOLCT.Button.PRIMARY, 'Send', null, this, this._node);
    this._cancelButton = new AOLCT.Button(AOLCT.Button.SECONDARY, 'Cancel', null, this, this._node);

    //when modal dialog closes, make sure focus is removed on iOS
    this._modalDialog.addEventListener('modalDialogWillHide', this._onModalDialogWillHide.bind(this));
  };

  p._onModalDialogWillHide = function() {
    //dismiss the iOS keyboard by removing focus:
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  p._makeInteractive = function() {
    //listen to form submission by enter key press, or by iOS "Go" button press.
    this._form.onsubmit = this._onSubmit.bind(this);

    this._sendButton.addEventListener('click', this._onSendClick.bind(this));
    this._cancelButton.addEventListener('click', this._onCancelClick.bind(this));
  };

  p._onSendClick = function() {
    
    this._processForm();
  };

  p._onCancelClick = function() {
    this.hide();
  };

  p._onSubmit = function() {
    
    //don't actually submit form (page refresh) when enter key is pressed, so return false
    this._processForm();

    //and return false to prevent form submission
    return false;
  };

  p._processForm = function() {
    if (this._emailInput.isValid()) {
      
      //report event after delay -- *** NOTE: without this delay, form return false doesn't work in Chrome ***
      setTimeout(this._dispatchValidEmailEnter.bind(this), 0.25);
    
      //dismiss the iOS keyboard by removing focus:
      document.activeElement.blur();

      this.hide();
    
    } else {
      this._emailInput.flag();
    }
  };

  p._dispatchValidEmailEnter = function() {
    var evt = new createjs.Event('validEmailEnter', true);
    evt.data = {
      emailAddress: this._emailInput.getValue()
    };
    this.dispatchEvent(evt);
  };

AOLCT.EmailModalDialog = EmailModalDialog;  
})();

// namespace:
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  /**
   * Consists of:
   * - container - (background solid grey or brand color, revealed as 1px hover border and 4px selected border)
   * --- imageNode (scales down to reveal border)
   * --- labelNode (stationary in lower right)
   */


  var Tile = function(index, parentDisplayObj, parentNode) {
    this.init(index, parentDisplayObj, parentNode);
  };

  var s = Tile;

  s.borderSize = 1;
  s.borderSelectedSize = 2;
  s.animTime = 0.25;

  var p = Tile.prototype = new AOLCT.DisplayObject();

  p.displayObject_init = p.init;
  p.init = function(index, parentDisplayObj, parentNode) {
    
    this.displayObject_init(parentDisplayObj, parentNode);

    this._index = index;

    this._scale = 1;

    this._width = 0;
    this._height = 0;

    this._setup();
  };


  //GET/SET

  p.getId = function() {
    return this._modelId;
  };

  p.getIndex = function() {
    return this._index;
  };

  p.enableLazyLoad = function() {
    this._enableLazyLoad = true;

    this._imageNode.className += ' lazy';
  };

  //PUBLIC

  /**
   * Places and styles based on input:
   * @param placement: {x, y, width, height}
   * @param snap - true to TweenMax.set instead of animate
   */
  p.place = function(boundingBox, optionalAnimationTime) {

    //place only if changed
    if (this._x != boundingBox.x || this._y != boundingBox.y || this._width != boundingBox.width) {

      var tileImageTarget = {
            x: s.borderSize,
            y: s.borderSize,
            force3D: true, /* for GPU rendering, but without the blur of z:1 */
            width: boundingBox.width - s.borderSize * 2,
            height: boundingBox.height - s.borderSize * 2
          },
          animTime = 0.25;

      //store for later access:
      this._x = boundingBox.x;
      this._y = boundingBox.y;
      this._width = this._height = boundingBox.width;

      //snap or tween to target
      if (optionalAnimationTime && this._isPlaced) {
        TweenMax.to(this._node, animTime, boundingBox);
        TweenMax.to(this._imageNode, animTime, tileImageTarget);
      } else {
        TweenMax.set(this._node, boundingBox);
        TweenMax.set(this._imageNode, tileImageTarget);
      }

      //move label div to front, only once
      if (!this._isPlaced) {
        var tileLabelTarget = {
            x: 0,
            y: 0,
            z: 1
          };
        TweenMax.set(this._labelNode, tileLabelTarget);

        this._isPlaced = true;
      }

      //show this
      this.show();
    }
  };

  /**
   * To make more generic, accepts any model that has some properties that represent
   * an image, and a label for the lower-right corner.
   * @param itemModel - the model that contains the properties; this is also passed in the select event
   */
  p.setModel = function(itemModel, idPropertyName, imageUrlPropertyName, labelPropertyName) {
    this._modelId = itemModel[idPropertyName];

    this._imageUrl = itemModel[imageUrlPropertyName];

    if (labelPropertyName) {
      this._labelText = itemModel[labelPropertyName];
    }
    
    this._model = itemModel;
  };

  p.update = function() {
    //update only if changed
    if (this._prevModelId != this._modelId) {
      this._prevModelId = this._modelId;

      if (this._enableLazyLoad) {
        this._imageNode.setAttribute('data-original', this._imageUrl);
        this._imageNode.style.backgroundImage = 'none';

      } else {
        this._imageNode.style.backgroundImage = 'url(' + this._imageUrl + ')';
      }
      
      //for lazy load:

      if (this._labelText === '' || !this._labelText) {
        this._labelNode.style.visibility = 'hidden'; 
      } else {
        this._labelNode.innerHTML = this._labelText;
        this._labelNode.style.visibility = 'visible'; 
      }
    }
  };

  p.hide = function() {
    this._node.style.display = 'none';
  };

  p.show = function() {
    this._node.style.display = 'block';
  };

  p.animateGleam = function() {
    TweenMax.to(this._node, 0.2, {className: 'tileSelected', yoyo: true, repeat:1});
  };

  p.animateJump = function() {
    TweenMax.to(this._node, 0.2, {scale: 1.08, y: "-=2", yoyo: true, repeat:1});
  };

  //PRIVATE

  p._setup = function() {
    this._node = AOLCT.Util.makeAbsNode('tile', this._parentNode);

    this._imageNode = AOLCT.Util.makeAbsNode('tileImage', this._node);

    this._labelNode = AOLCT.Util.makeAbsNode('tileLabel', this._node);
  };

AOLCT.Tile = Tile;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global TweenMax, AOLCT, createjs */

  var InteractiveTile = function(index, parentDisplayObj, parentNode) {
    this.init(index, parentDisplayObj, parentNode);
  };

  var s = InteractiveTile;

  s.borderSize = AOLCT.Tile.borderSize;
  s.borderSelectedSize = AOLCT.Tile.borderSelectedSize;
  s.animTime = AOLCT.Tile.animTime;

  s.touchMoveThreshold = 15; //# of pixels during touchmove that will cancel the press


  var p = InteractiveTile.prototype = new AOLCT.Tile();

  p.tile_init = p.init;

  p.init = function(index, parentDisplayObj, parentNode) {
    this.tile_init(index, parentDisplayObj, parentNode);

    this._makeInteractive();

    this._isDisabled = false;
    this._isSelected = false;
  };

  //PUBLIC

  /**
   * To prevent lots of re-animates, must call update() 
   * after calling this to apply the selected state.
   */
  p.tile_place = p.place;
  p.place = function(boundingBox, optionalAnimationTime) {

    this.tile_place(boundingBox, optionalAnimationTime);

    //updated selected scale
    if (this._isSelected) {
      this.select();
    } else {
      this.deselect();
    }
  };

  /**
   * Scale down the image node to reveal more of the brand background as a border
   */
  p.select = function(isUserSelection) {
    this._isSelected = true;
    this.update();

    //dispatch event depending on if user or auto (separate for simple reporting)
    var evt;
    if (isUserSelection) {
      evt = new createjs.Event('tileSelect', true);
    } else {
      evt = new createjs.Event('tileAutoSelect', true);
    }
    evt.data = {
      selectedIndex: this._index,
      model: this._model
    };
    this.dispatchEvent(evt);
  };

  p.deselect = function() {
    this._isSelected = false;
    this._isHovered = false;
    this._isPressed = false;
    
    this.update();
  };

  /**
   * Mark with thick grey border that sticks around when not selected.
   */
  p.flag = function() {
    this._isFlagged = true;

    this.update();
  };

  p.unflag = function() {
    this._isFlagged = false;
    this.update();
  };

  /**
   * When the data changes, reset the interactivity
   */
  p.tile_setModel = p.setModel;
  p.setModel = function(itemModel, idPropertyName, imageUrlPropertyName, labelPropertyName) {
    this.tile_setModel.apply(this, arguments);

    this._isFlagged = false;
    this._isPressed = false;
    this._isSelected = false;
    this._isHovered = false;

    this.update();
  };

  p.tile_update = p.update;
  p.update = function() {

    //if (!this._updateDebounced) {
      //this._updateDebounced = _.debounce(function() {

        this.tile_update();

        var target = {
              className: 'tile',
              overwrite: 'none' /* to not conflict with placement tween */
            },
            imageTarget = {
              scale: 1
            },
            animTime = 0.15;

        if (this._isSelected) {
          target.className = 'tileSelected';
          imageTarget.scale = this._getSelectedOrFlaggedBorderSize();

        } else if (this._isPressed) {
          target.className = 'tileSelected';
          imageTarget.scale = this._getPressedBorderSize();

        } else if (this._isHovered) {
          target.className = 'tileSelected';

          if (this._isFlagged) {
            imageTarget.scale = this._getSelectedOrFlaggedBorderSize();
          } else {
            imageTarget.scale = 1;
          }
        
        } else if (this._isFlagged) {
          imageTarget.scale = this._getSelectedOrFlaggedBorderSize();
        }

        //only update if something changed from before
        if (this._prevClassName != target.className || this._prevScale != imageTarget.scale) {

          this._prevClassName = target.className;
          this._prevScale = imageTarget.scale;

          TweenMax.to(this._node, animTime, target);
          TweenMax.to(this._imageNode, animTime, imageTarget);
        }
      //}.bind(this), 0.1);
    //}

    //this._updateDebounced();
  };


  //PRIVATE

  p._getSelectedOrFlaggedBorderSize = function() {
    return (this._width - s.borderSelectedSize * 2) / this._width;
  };

  p._getPressedBorderSize = function() {
    return (this._width - s.borderSelectedSize * 4) / this._width;
  };

  p._makeInteractive = function() {
    if (AOLCT.Util.isTouchDevice()) {
      this._node.addEventListener('touchstart', this._onTouchStart.bind(this));

      //add touchmove/end events only after touchstart
      this._onTouchMoveBound = this._onTouchMove.bind(this);
      this._onTouchEndBound = this._onTouchEnd.bind(this);

    } else {
      this._node.addEventListener('mouseover', this._onMouseOver.bind(this));
      this._node.addEventListener('mouseout', this._onMouseOut.bind(this));
      this._node.addEventListener('mousedown', this._onMouseDown.bind(this));
    }

    this._node.style.cursor = 'pointer';
  };

  p._onTouchStart = function(evt) {
    this._touchStartX = evt.touches[0].pageX;
    this._touchStartY = evt.touches[0].pageY;

    this._node.addEventListener('touchmove', this._onTouchMoveBound);
    this._node.addEventListener('touchend', this._onTouchEndBound);

    this._press();
  };

  p._onTouchMove = function(evt) {
    var touchX = evt.touches[0].pageX;
    var touchY = evt.touches[0].pageY;

    if (Math.abs(touchX - this._touchStartX) > s.touchMoveThreshold || Math.abs(touchY - this._touchStartY) > s.touchMoveThreshold) {
      this._node.removeEventListener('touchmove', this._onTouchMoveBound);
      this._node.removeEventListener('touchend', this._onTouchEndBound);
      
      this._isPressed = false;
      this._isHovered = false;
      this.update();
    }
  };

  p._onTouchEnd = function() {
    this._node.removeEventListener('touchmove', this._onTouchMoveBound);
    this._node.removeEventListener('touchend', this._onTouchEndBound);
    
    this._release();
  };

  p._onMouseOver = function() {

    //interactive hover, delayed by 1/10th of second
    clearTimeout(p.tileMouseOverDelay);
    
    if (!this._isSelected && !this._isDisabled) {
      p.tileMouseOverDelay = setTimeout(this._hover.bind(this), 100);
    }

    //reporting hover delayed by 2 seconds
    //Changed to DEFAULT_DELAY  currently 300ms
    clearTimeout(p.tileLongMouseoverDelay);
    p.tileLongMouseoverDelay = setTimeout(this._longHover.bind(this), DEFAULT_DELAY);
  };

  p._onMouseOut = function() {
    clearTimeout(p.tileMouseOverDelay);

    clearTimeout(p.tileLongMouseoverDelay);

    this._isPressed = false;
    this._isHovered = false;
    this.update();
  };

  p._onMouseDown = function() {
    this.onMouseUpBound = this._onMouseUp.bind(this);

    this._node.addEventListener('mouseup', this.onMouseUpBound);

    this._press();
  };

  p._onMouseUp = function() {
    this._node.removeEventListener('mouseup', this.onMouseUpBound);

    this._release();
  };

  p._hover = function() {
    if (!this._isSelected && !this._isDisabled) {
      
      this._isHovered = true;
      this.update();

      var evt = new createjs.Event('tileHover', true);
      evt.data = {
        index: this._index,
        model: this._model
      };
      this.dispatchEvent(evt);
    }
  };

  /**
   * Long hover (2 seconds) is for reporting purposed only
   */
  p._longHover = function() {
    var evt = new createjs.Event('tileLongHover', true);
    evt.data = {
      index: this._index,
      model: this._model
    };
    this.dispatchEvent(evt);
  };

  p._press = function() {
    if (!this._isSelected && !this._isDisabled) {

      this._isPressed = true;
      this.update();

      var evt = new createjs.Event('tilePress', true);
      evt.data = {
        index: this._index,
        model: this._model
      };
      this.dispatchEvent(evt);
    }
  };

  p._release = function() {
    if (!this._isSelected && !this._isDisabled) {
      this.select(true);
    }
  };

AOLCT.InteractiveTile = InteractiveTile;
})();

this.AOLCT = this.AOLCT || {};

(function(){
  'use strict';
  /* global AOLCT, _, createjs */

  var FacebookSharer = function() {
    this.init(parent);
  };

  var s = FacebookSharer;

  s.MOBILE_URL = 'http://m.facebook.com/sharer.php?u={{ clickUrl }}';
  s.DESKTOP_URL = 'http://www.facebook.com/sharer/sharer.php?s=100&p[url]={{ clickUrl }}';

  /**
   * Returns share URL which in Facebook's case, varies between
   * one URL for mobile (that works for mobile and desktop),
   * and another for desktop (that works only on desktop).
   *
   * To force the mobile, url, set @param forceMobile as true 
   */
  s.getShareUrl = function(socialShareModel, forceMobile) {

    //facebook sharer no longer accepts custom title and summary
    //and instead scrapes the page for Open Graph data.
    //see official comment from 4/9/2014 here:
    //  https://developers.facebook.com/x/bugs/357750474364812/
   
    AOLCT.Util.initUnderscoreMustacheTemplate();

    var template;
    if (AOLCT.Util.isTouchDevice() || forceMobile) {
      template = _.template(s.MOBILE_URL);
    } else {
      template = _.template(s.DESKTOP_URL);
    }

    var url = template({
      clickUrl: encodeURIComponent(socialShareModel.clickUrl)
    });

    return url;
  };

  /**
   * Facebook desktop URL doesn't work if the email is
   * viewed on mobile, so always use the mobile URL.
   */
  s.getEmailableShareUrl = function(socialShareModel) {
    return this.getShareUrl(socialShareModel, true);
  };


  var p = FacebookSharer.prototype = new createjs.EventDispatcher();

  p.init = function(parent) {
    this.parent = parent;
    this._popupWindow = null;
    this._timer = null;
  };

  /**
   * Open the Facebook share popup window for the specified model.
   */
  p.share = function(socialShareModel, listenForClose) {
    
    var url = s.getShareUrl(socialShareModel);

    this._popupWindow = AOLCT.Util.popupWindow(url, 500, 368);
    
    if (listenForClose) {
      clearInterval(this._timer);
      this._timer = setInterval(this._checkforWindowClosed.bind(this), 500);
    }
    
  };

  p._checkforWindowClosed = function() {
    
    if (this._popupWindow.closed) {
        
        var evt = new createjs.Event('facebookWindowClosed', true);
        this.dispatchEvent(evt);
        clearInterval(this._timer);
    }
  };

AOLCT.FacebookSharer = FacebookSharer;
})();
this.AOLCT = this.AOLCT || {};

(function(){
  'use strict';
  /* global createjs, AOLCT, _ */

  var TwitterSharer = function(parent) {
    this.init(parent);
  };

  var s = TwitterSharer;

  s.URL = 'https://twitter.com/intent/tweet?source=webclient&forceview=y' + 
          '&text={{ shortMessage }}&url={{ clickUrl }}';

  s.getShareUrl = function(socialShareModel) {
    
    AOLCT.Util.initUnderscoreMustacheTemplate();

    var template = _.template(s.URL);

    var url = template({
      clickUrl: encodeURIComponent(socialShareModel.clickUrl),
      imageUrl: encodeURIComponent(socialShareModel.imageUrl),
      shortMessage: encodeURIComponent(socialShareModel.shortMessage)
    });

    return url;
  };

  /**
   * Twitter share is platform agnostic (unlike Facebook), 
   * so return the normal share URL.
   */
  s.getEmailableShareUrl = function(socialShareModel) {
    return this.getShareUrl(socialShareModel);
  };
  

  var p = TwitterSharer.prototype = new createjs.EventDispatcher();

  p.init = function(parent) {
    this.parent = parent;
    this._popupWindow = null;
    this._timer = null;
  };

  /**
   * Open the Twitter share popup window for the specified model.
   */
  p.share = function(socialShareModel, listenForClose) {
    
    var url = s.getShareUrl(socialShareModel);

    this._popupWindow = AOLCT.Util.popupWindow(url, 500, 260);
    
    if (listenForClose) {
      clearInterval(this._timer);
      this._timer = setInterval(this._checkforWindowClosed.bind(this), 500);
    }
    
  };

  p._checkforWindowClosed = function() {
    
    if (this._popupWindow.closed) {
        
        var evt = new createjs.Event('twitterWindowClosed', true);
        this.dispatchEvent(evt);
        clearInterval(this._timer);
    }
  };

AOLCT.TwitterSharer = TwitterSharer;
})();
this.AOLCT = this.AOLCT || {};

(function(){
  'use strict';
  /* global AOLCT, _, createjs */

  var PinterestSharer = function() {
    this.init(parent);
  };

  var s = PinterestSharer;

  s.URL = 'http://www.pinterest.com/pin/create/button/?url={{ clickUrl }}&' +
          'media={{ imageUrl }}&description={{ longMessage }}';

  s.getShareUrl = function(socialShareModel) {
    
    AOLCT.Util.initUnderscoreMustacheTemplate();

    var template = _.template(s.URL);

    var url = template({
      clickUrl: encodeURIComponent(socialShareModel.clickUrl),
      imageUrl: encodeURIComponent(socialShareModel.imageUrl),
      longMessage: encodeURIComponent(socialShareModel.longMessage)
    });

    return url;
  };

  /**
   * Pinterest share is platform agnostic (unlike Facebook), 
   * so return the normal share URL.
   */
  s.getEmailableShareUrl = function(socialShareModel) {
    return this.getShareUrl(socialShareModel);
  };


  var p = PinterestSharer.prototype = new createjs.EventDispatcher();

  p.init = function(parent) {
    this.parent = parent;
    this._popupWindow = null;
    this._timer = null;
  };

  /**
   * Open the Pinterest share popup window for the specified model.
   */
  p.share = function(socialShareModel, listenForClose) {
    
    var url = s.getShareUrl(socialShareModel);

    this._popupWindow = AOLCT.Util.popupWindow(url, 754, 318);
    
    if (listenForClose) {
      clearInterval(this._timer);
      this._timer = setInterval(this._checkforWindowClosed.bind(this), 500);
    }
    
  };

  p._checkforWindowClosed = function() {
    
    if (this._popupWindow.closed) {
        
        var evt = new createjs.Event('pinterestWindowClosed', true);
        this.dispatchEvent(evt);
        clearInterval(this._timer);
    }
  };

AOLCT.PinterestSharer = PinterestSharer;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, _, TweenMax, AOLCT */

  var ShareModalDialog = function(parentDisplayObj) {
    this.init(parentDisplayObj);
  };

  var p = ShareModalDialog.prototype = new createjs.EventDispatcher();

  p.init = function(parentDisplayObj) {

    this._modalDialog = new AOLCT.ModalDialog('Share', this, null);

    //set to 4:3 ratio
    this._modalDialog.setSize({width: 220, height: 145});

    this.parent = parentDisplayObj;
    this._node = this._modalDialog.getContentsNode();

    this._sharingButtons = [];
    this._sharingButtonNodes = [];

    this._setup();
  };


  //PUBLIC

  /**
   * @param socialShareModel - an AOLCT.SocialShareModel
   * @param originalModelForReporting - any model; gets dispatched in event
   */
  p.setModel = function(socialShareModel, originalModelForReporting) {
    for (var i = 0; i < this._sharingButtons.length; i++) {
      var btn = this._sharingButtons[i];
      
      btn.setModel(socialShareModel, originalModelForReporting);
    }
  };

  p.show = function() {
    
    this._modalDialog.show();

    //animate in the social buttons
    AOLCT.Util.completeTweens(this._sharingButtonNodes);

    TweenMax.set(this._sharingButtonNodes, {opacity: 0, y: '+=10'});

    TweenMax.staggerTo(this._sharingButtonNodes, 0.25, {opacity: 1, y: '-=10'}, 0.1);
  
    var evt = new createjs.Event('shareOpen', true);
    this.dispatchEvent(evt);
  };

  p.hide = function() {

    this._modalDialog.hide();
  };

  p.place = function() {

    var boundingPlacement = {
      x: 0,
      y: 0,
      width: this._node.clientWidth,
      height: this._node.clientHeight
    };


    //For now we'll line them all up, but as we add more items, we'll need more of a grid layout.

    var buttonSize = 40,
        margin = 14,
        buttonCount = this._sharingButtons.length;

    var buttonSetWidth = (buttonSize * buttonCount) + margin * (buttonCount - 1),
        offsetX = (boundingPlacement.width - buttonSetWidth) / 2;

    var buttonSetHeight = buttonSize,
        offsetY = (boundingPlacement.height - buttonSetHeight) / 2 - 1;

    var placement = {
          x: boundingPlacement.x + offsetX,
          y: boundingPlacement.y + offsetY,
          width: buttonSize,
          height: buttonSize
        };

    for (var i = 0; i < this._sharingButtons.length; i++) {
      var btn = this._sharingButtons[i];

      btn.place(_.clone(placement));

      placement.x += placement.width + margin;
    }

  };

  //PRIVATE

  p._setup = function() {

    this._setupFacebookButton();
    this._setupTwitterButton();
    this._setupPinterestButton();

    this.place();

    //when modal dialog closes, dispatch event for reporting...
    this._modalDialog.addEventListener('modalDialogWillHide', this._onModalDialogWillHide.bind(this));

  };

  p._onModalDialogWillHide = function() {
    var evt = new createjs.Event('shareClose', true);
    this.dispatchEvent(evt);
  };

  p._setupFacebookButton = function() {
    this._facebookButton = new AOLCT.SocialButton('facebook', this, this._node);

    this._sharingButtons.push(this._facebookButton);

    this._sharingButtonNodes.push(this._facebookButton._node);

    this._facebookButton.enable();
  };

  p._setupTwitterButton = function() {
    this._twitterButton = new AOLCT.SocialButton('twitter', this, this._node);

    this._sharingButtons.push(this._twitterButton);

    this._sharingButtonNodes.push(this._twitterButton._node);

    this._twitterButton.enable();
  };

  p._setupPinterestButton = function() {
    this._pinterestButton = new AOLCT.SocialButton('pinterest', this, this._node);

    this._sharingButtons.push(this._pinterestButton);

    this._sharingButtonNodes.push(this._pinterestButton._node);
    
    this._pinterestButton.enable();
  };

AOLCT.ShareModalDialog = ShareModalDialog;  
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global TweenMax, AOLCT, createjs */

  /**
   * @param socialSiteName - facebook||twitter||pinterest
   * @param shapeVariation - blank||circle - used with Stackicons
   */
  var SocialButton = function(socialSiteName, parentDisplayObject, parentNode) {
    this.init(socialSiteName, parentDisplayObject, parentNode);
  };

  var p = SocialButton.prototype = new AOLCT.ButtonBase();

  p.super_init = p.init;
  p.init = function(socialSiteName, parentDisplayObj, parentNode) {

    this._socialSiteName = socialSiteName;

    this.super_init(this._socialSiteName + 'Button', parentDisplayObj, parentNode);

    this.addEventListener('click', this._clickToSocialSharePage.bind(this));
  };

  /**
   * @param socialShareModel - an AOLCT.SocialShareModel
   * @param originalModelForReporting - any model; gets dispatched in event
   */
  p.setModel = function(socialShareModel, originalModelForReporting) {
    this._model = socialShareModel;
    this._originalModelForReporting = originalModelForReporting;
  };


  //GET/SET

  p.getWidth = function() {
    return this._width;
  };

  p.getHeight = function() {
    return this._height;
  };


  //PUBLIC

  /**
   * @param placement {x, y, z, width: height}
   */
  p.place = function(placement) {

    this._x = placement.x;
    this._y = placement.y;
    this._width = placement.width;
    this._height = placement.height;

    TweenMax.set(this._node, placement);
  };

  p._clickToSocialSharePage = function() {

    var sharer;
    
    switch (this._socialSiteName) {
      case 'facebook':
        sharer = new AOLCT.FacebookSharer(this);
        break;

      case 'twitter':
        sharer = new AOLCT.TwitterSharer(this);
        break;

      default: //'pinterest'
        sharer = new AOLCT.PinterestSharer(this);
        break;
    }

    sharer.share(this._model);

    var evt = new createjs.Event(this._socialSiteName + 'Share', true);
    evt.data = {
      model: this._originalModelForReporting || this._model
    };
    this.dispatchEvent(evt);
  };


AOLCT.SocialButton = SocialButton;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, _, AOLCT */

  /**
   * This shows a series of specific social sharing buttons if width of bounding box
   * allows, otherwise shows a single Share button that initiates the Share Modal Dialog.
   */

  var ShareButton = function(buttonType, parentDisplayObj, parentNode) {
    this.init(buttonType, parentDisplayObj, parentNode);
  };

  var p = ShareButton.prototype = new createjs.EventDispatcher();

  p.init = function(buttonType, parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._theme = {
      margin: 4
    };

    this._alignment = 'left';

    this._buttonType = buttonType;
    
    this._setupShareButton();

    this._sharingButtons = [];

    this._setupFacebookButton();
    this._setupTwitterButton();
    this._setupPinterestButton();

    this.update();
  };

  //GET/SET

  /**
   * @param socialShareModel - an AOLCT.SocialShareModel
   * @param originalModelForReporting - any model; gets dispatched in event
   */
  p.setModel = function(socialShareModel, originalModelForReporting) {
    this._model = socialShareModel;
    this._originalModelForReporting = originalModelForReporting;

    for (var i = 0; i < this._sharingButtons.length; i++) {
      var btn = this._sharingButtons[i];

      btn.setModel(this._model, this._originalModelForReporting);
    }
  };

  /**
   * Call this before calling place in order to right-align the buttons
   * within the given bounding box.
   */
  p.setAlignment = function(leftOrRight) {
    this._alignment = leftOrRight;
  };

  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  p.getWidth = function() {
    return this._shareButton.getWidth();
  };

  p.getHeight = function() {
    return this._shareButton.getHeight();
  };


  //PUBLIC

  /**
   * Fits within boundingPlacement width -- if room to show individual share buttons
   * then shows them, otherwise shows single Share button.
   * 
   * @param boundingPlacement {x, y, z, width}
   */
  p.place = function(boundingPlacement) {

    var point = {
        x: boundingPlacement.x,
        y: boundingPlacement.y
      };

    this._x = point.x;
    this._y = point.y;

    var shareButtonPoint = _.clone(point);

    if (this._alignment == 'right') {
      shareButtonPoint.x = boundingPlacement.width + point.x - this._shareButton.getWidth();
    }

    this._shareButton.move(shareButtonPoint);

    var socialButtonSize = this._shareButton.getHeight(),
        socialButtonPlacement = {
          x: point.x,
          y: point.y,
          width: socialButtonSize,
          height: socialButtonSize
        };

    if (this._alignment == 'right') {
      socialButtonPlacement.x = boundingPlacement.width + point.x - (socialButtonSize * this._sharingButtons.length + this._theme.margin * (this._sharingButtons.length - 1));
    }

    var i, btn;
    for (i = 0; i < this._sharingButtons.length; i++) {
      btn = this._sharingButtons[i];

      btn.place(_.clone(socialButtonPlacement));

      socialButtonPlacement.x += socialButtonSize + this._theme.margin;
    }

    //now expand or collapse based on width OR touch device 
    var showExpandedButtons = (!AOLCT.Util.isTouchDevice() && boundingPlacement.width >= this._getWidthOfSharingButtons());

    var shouldTween = true;

    if (!this._firstPlacement) {
      this._firstPlacement = true;
      shouldTween = false;
    }

    shouldTween = false;

    if (showExpandedButtons) {
      this._shareButton.hide(shouldTween);
    } else {
      this._shareButton.show(shouldTween);
    }

    for (i = 0; i < this._sharingButtons.length; i++) {
      btn = this._sharingButtons[i];

      if (showExpandedButtons) {
        btn.show(shouldTween);
      } else {
        btn.hide(shouldTween);
      }
    }
  };

  p.update = function() {
    
  };

  p.enable = function() {
    this._shareButton.enable();

    var btn;
    for (var i = 0; i < this._sharingButtons.length; i++) {
      btn = this._sharingButtons[i];

      btn.enable();
    }
  };

  p.disable = function() {
    this._shareButton.disable();

    var btn;
    for (var i = 0; i < this._sharingButtons.length; i++) {
      btn = this._sharingButtons[i];

      btn.disable();
    }
  };

  //PRIVATE
  p._setupShareButton = function() {
    this._shareButton = new AOLCT.Button(this._buttonType, 'Share', AOLCT.ShareIcon, this, this._parentNode);

    this._shareButton.addEventListener('click', this._onShareButtonClick.bind(this));
  };

  p._onShareButtonClick = function() {
    if (!this._shareModalDialog) {
      this._shareModalDialog = new AOLCT.ShareModalDialog(this);
    }

    this._shareModalDialog.setModel(this._model, this._originalModelForReporting);

    this._shareModalDialog.show();
  };

  p._setupFacebookButton = function() {
    this._facebookButton = new AOLCT.SocialButton('facebook', this, this._parentNode);
    this._sharingButtons.push(this._facebookButton);
  };

  p._setupTwitterButton = function() {
    this._twitterButton = new AOLCT.SocialButton('twitter', this, this._parentNode);
    this._sharingButtons.push(this._twitterButton);
  };

  p._setupPinterestButton = function() {
    this._pinterestButton = new AOLCT.SocialButton('pinterest', this, this._parentNode);
    this._sharingButtons.push(this._pinterestButton);
  };

  p._getWidthOfSharingButtons = function() {
    
    var firstBtn = this._sharingButtons[0],
        lastBtn = this._sharingButtons[this._sharingButtons.length - 1];

    var rightEdge = lastBtn.getX() + lastBtn.getWidth(),
        leftEdge = firstBtn.getX();

    var width = rightEdge - leftEdge;

    return width;
  };

AOLCT.ShareButton = ShareButton;
})();

/**
 * Contains:
 * - the Buy Now button, which is can be hidden (e.g. when in Vertical orientation)
 * - the Add/Remove to list toggle button
 * - the Share button which...
 *   - if there is room to expand, expands to show social icon buttons instead of Share
 *   - if there is not enough room for the Share button, wraps to the next line
 */

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var ProductInfoBoxBottomButtons = function(parentDisplayObject, parentNode) {
    this.init(parentDisplayObject, parentNode);
  };

  var p = ProductInfoBoxBottomButtons.prototype = new createjs.EventDispatcher();

  p.init = function(parentDisplayObject, parentNode) {

    this.parent = parentDisplayObject;
    this._parentNode = parentNode;

    this._theme = {
      padding: 10,
      buttonSpacing: 5
    };

    this._setup();
  };

  //GET/SET

  /**
   * Accepts an AOLCT.ProductModel.
   *
   * (In the future this could be refactored into a base InfoBox (e.g. title, caption, button only)
   * and this could extend that base class. Title and Price would map to base class Title and Description)
   */
  p.setModel = function(productModel) {
    this._productModel = productModel;

    //pass the product model to the Share and List buttons
    this._shareButton.setModel(this._productModel.toSocialShareModel(), this._productModel);

    this._listAddRemoveButton.setProductModel(this._productModel);

    this.update();
  };

  /**
   * Accepts an AOLCT.ProductsModel.
   */
  p.setListModel = function(productsModel) {
    this._listModel = productsModel;

    this._listAddRemoveButton.setListModel(productsModel);
  };


  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  p.getWidth = function() {
    return this._width;
  };

  p.getHeight = function() {
    return this._clickthroughButton.getHeight();
  };

  p.getMinWidthForAllButtons = function() {
    return  this._clickthroughButton.getWidth() + this._theme.buttonSpacing + 
            this._listAddRemoveButton.getWidth() + this._theme.buttonSpacing +
            this._shareButton.getWidth();
  };


  //PUBLIC

  p.handleListModelChange = function() {
    this._listAddRemoveButton.handleListModelChange();
  };

  p.showClickthroughButton = function() {
    this._clickthroughButton.show();
  };

  p.hideClickthroughButton = function() {
    this._clickthroughButton.hide();
  };

  p.enable = function() {
    this._clickthroughButton.enable();
    this._shareButton.enable();
    this._listAddRemoveButton.enable();
  };

  p.disable = function() {
    this._clickthroughButton.disable();
    this._shareButton.disable();

    //don't disable the list toggle button - any item can always be added to the list
    this._listAddRemoveButton.enable();
  };

  p.place = function(placement) {

    if (placement) {
      this._x = placement.x;
      this._y = placement.y;
      this._width = placement.width;
      this._height = placement.height;

      TweenMax.set(this._node, placement);
    }
    
    this._placeClickthroughButton();
    this._placeListToggleButton();
    this._placeShareButton();

    this._isPlaced = true;
  };

  p.update = function() {
    this.place();

    if (this._productModel && this._productModel.clickUrl.length > 0) {
      this.enable();
    } else {
      this.disable();
    }

  };

  //PRIVATE
  p._setup = function() {
    this._node = AOLCT.Util.makeAbsNode('infoBoxBottomButtons', this._parentNode);

    this._clickthroughButton = new AOLCT.Button(AOLCT.Button.PRIMARY, 'BUY NOW', null, this, this._node);

    this._listAddRemoveButton = new AOLCT.ListAddRemoveButton(AOLCT.Button.SECONDARY, this, this._node);

    this._shareButton = new AOLCT.ShareButton(AOLCT.Button.SECONDARY, this, this._node);

    this._makeInteractive();

    //disable everything until model is set
    this.disable();
    this._listAddRemoveButton.disable();

    //listen for add/remove button resized event and re-place so the Share icon repositions
    this._listAddRemoveButton.addEventListener('resized', function() {
      this._placeShareButton();
    }.bind(this));
  };

  p._makeInteractive = function() {
    this._clickthroughButton.addEventListener('click', function() {

      //console.log('infobox clickthrough');

      var evt = new createjs.Event('infoBoxClickthrough', true);
      evt.data = {
        clickUrl: this._productModel.clickUrl,
        model: this._productModel
      };
      this.dispatchEvent(evt);
      
    }.bind(this));
  };

  p._placeClickthroughButton = function() {
    
    if (this._clickthroughButton.getIsVisible()) {
      var point = {
            x: 0,
            y: 0
          };

      this._clickthroughButton.move(point);
    }
  };

  p._placeListToggleButton = function() {
    var point = {
          x: 0,
          y: 0
        };

    if (this._clickthroughButton.getIsVisible()) {
      point.x = this._clickthroughButton.getWidth() + this._theme.buttonSpacing;
    }

    this._listAddRemoveButton.move(point);
  };

  p._placeShareButton = function() {

    //start with X and Y, but tack on Width based on X.
    var placement = {
          x: this._listAddRemoveButton.getX() + this._listAddRemoveButton.getWidth() + this._theme.buttonSpacing,
          y: 0
        };

    //add bounding width to placement so button knows what its maximum bounds are
    //when deciding whether to expand or not.
    placement.width = this._width - placement.x;

    this._shareButton.place(placement);
  };

AOLCT.ProductInfoBoxBottomButtons = ProductInfoBoxBottomButtons;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var ProductInfoBoxTextArea = function(parentDisplayObj, parentNode) {
    this.init(parentDisplayObj, parentNode);
  };

  var p = ProductInfoBoxTextArea.prototype = new createjs.EventDispatcher();

  p.init = function(parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;
  
    this._spacingBetweenText = 1;
    this._spacingAboveButton = 3;

    this._titleRightIndentWhenHorizontal = 10;

    this._cachedExpandedWidth = [];
    this._cachedExpandedHeight = [];

    this._setup();
  };

  //GET/SET

  /**
   * Accepts an AOLCT.ProductModel.
   *
   * (In the future this could be refactored into a base InfoBox (e.g. title, caption, button only)
   * and this could extend that base class. Title and Price would map to base class Title and Description)
   */
  p.setModel = function(productModel) {
    this._productModel = productModel;

    this._modelChanged = true;

    this.update();
    
    this._modelChanged = false;
  };

  /**
   * The text area needs to know the expand direction for one case only:
   * when expand direction is left (or right) and there is not enough vertical 
   * space to show the description text. We can't expand horizontally to reveal it
   * (unless we merge it in line with the price text) so for this case we won't signal
   * that expansion is possible.
   */
  p.setExpandDirection = function(direction) {
    if (direction == 'up' || direction == 'down' || direction == 'left' || direction == 'right') {
      this._expandDirection = direction;
    }
  };

  p.getWidth = function() {
    return this._width;
  };

  p.getHeight = function() {
    return this._height;
  };

  p.setOrientation = function(verticalOrHorizontal) {
    this._orientation = verticalOrHorizontal;
  };

  /**
   * Returns min height needed in order to fit, based on orientation.
   * Horizontal: 2 lines of title, 1 line of price.
   * Verical:    1 lines of title, 1 line of price.
   */
  p.getMinHeight = function() {

    var titleLineHeight = this._titleText.getLineHeight(),
        priceLineHeight = this._priceText.getLineHeight(),
        minHeight;

    if (this._orientation == 'horizontal') {
      minHeight = titleLineHeight * 2 + 
                  this._spacingBetweenText + 
                  priceLineHeight + 
                  this._spacingAboveButton +
                  this._clickthroughButton.getHeight();
    } else {
      minHeight = titleLineHeight + this._spacingBetweenText + priceLineHeight;
    }
    
    return minHeight;
  };


  //PUBLIC

  p.showClickthroughButton = function() {
    this._clickthroughButton.show();
  };

  p.hideClickthroughButton = function() {
    this._clickthroughButton.hide();
  };

  p.enable = function() {
    this._clickthroughButton.enable();
  };

  p.disable = function() {
    this._clickthroughButton.disable();
  };

  p.place = function(placement, animationTime, skipUpdate, updateAfterAnimation) {

    this._x = placement.x;
    this._y = placement.y;
    this._width = placement.width;
    this._height = placement.height;

    if (animationTime) {
      if (updateAfterAnimation) {
        placement.onComplete = this.update.bind(this);
      }
      TweenMax.to(this._node, animationTime, placement);
    } else {
      TweenMax.set(this._node, placement);
    }

    if (!skipUpdate) {
      this.update();
    }

    this._isPlaced = true;
  };

  /**
   * Expand width until no more overflow,
   * or until we reach the max width.
   */
  p.expandWidth = function(maxWidth, animationTime) {

    var delta = this._titleText.getLineHeight(),
        skipUpdateDuringPlace = false,
        cachedExpandedWidth = this._getCachedExpandedWidth(this._productModel, this._width, this._height),
        placement;

    this._collapsedWidth = this._width;

    //if expanded width for this text is unknown, widen until we find out.
    if (!cachedExpandedWidth) {

      while (this._canExpand) {

        //if reached max width, break out of the loop
        if (this._width + delta >= maxWidth) {
          break;
        }

        this._width += delta;

        //update so all textfields resize themselves, but don't animate (place) until complete
        this.update();
      }

      //since text is already updated, skip updating during place
      skipUpdateDuringPlace = true;

      //cache this value
      cachedExpandedWidth = this._width;
      this._setCachedExpandedWidth(this._productModel, this._collapsedWidth, this._height, this._width);
    }

    //animate the mask, and if text wasn't already placed to size, update it
    placement = {
      x: this._x,
      y: this._y,
      width: cachedExpandedWidth,
      height: this._height
    };
    this.place(placement, animationTime, skipUpdateDuringPlace);
  };

  /**
   * Expand height until no more overflow,
   * or until we reach the max height.
   */
  p.expandHeight = function(maxHeight, animationTime) {

    var delta = this._titleText.getLineHeight(),
        cachedExpandedHeight = this._getCachedExpandedHeight(this._productModel, this._width, this._height),
        skipUpdateDuringPlace = false,
        placement;

    this._collapsedHeight = this._height;

    if (!cachedExpandedHeight) {

      while (this._canExpand) {

        //if reached max height, break out of the loop
        if (this._height + delta >= maxHeight) {
          break;
        }

        this._height += delta;

        //update so all textfields resize themselves, but don't animate (place) until complete
        this.update();
      }

      //since text is already updated, skip updating during place
      skipUpdateDuringPlace = true;

      //cache this value
      cachedExpandedHeight = this._height;
      this._setCachedExpandedHeight(this._productModel, this._collapsedWidth, this._height, this._height);
    }

    //animate the mask, and if text wasn't already placed to size, update it
    placement = {
      x: this._x,
      y: this._y,
      width: this._width,
      height: cachedExpandedHeight
    };
    this.place(placement, animationTime, skipUpdateDuringPlace);
  };

  p.collapse = function(animationTime) {

    var placement;
    if (this._collapsedWidth) {
      placement = {
        x: this._x,
        y: this._y,
        width: this._collapsedWidth,
        height: this._height
      };

      this._collapsedWidth = null;

    } else if (this._collapsedHeight) {
      placement = {
        x: this._x,
        y: this._y,
        width: this._width,
        height: this._collapsedHeight
      };

      this._collapsedHeight = null;
    }

    if (animationTime) {
      this.place(placement, animationTime, true, true);
    } else {
      this.place(placement);
    }

  };

  p.update = function() {
    var m = this._productModel;

    if (!m) {
      return;
    }

    if (this._modelChanged) {
      this._title = m.title;
      this._price = m.price;
      this._description = m.description;

      if (m.priceQualifier.length > 0) {
        this._price = this._price + ' ' + m.priceQualifier;
      }

      this._titleText.setText(this._title);
      this._priceText.setText(this._price);
      this._descriptionText.setText(this._description);

      if (m.clickUrl.length > 0) {
        this.enable();
      } else {
        this.disable();
      }
    }

    if (this._orientation == 'horizontal') {
      this._titleMaxLines = 2;
    } else {
      this._titleMaxLines = 1;
    }
    this._priceMaxLines = 1;
    this._descriptionMaxLines = 1;

    //place the text fields based on starting max lines
    this._placeTextFields();

    //fill the space
    this._optimizeTheSpace();
  };

  //PRIVATE
  p._setup = function() {
    this._node = AOLCT.Util.makeAbsNode('infoBoxTextArea', this._parentNode);

    this._titleText = new AOLCT.Text('infoBoxTitle', this, this._node);
    this._priceText = new AOLCT.Text('infoBoxPrice', this, this._node);
    this._descriptionText = new AOLCT.Text('infoBoxDescription', this, this._node);

    this._clickthroughButton = new AOLCT.Button(AOLCT.Button.PRIMARY, 'BUY NOW', null, this, this._node);

    //disable until model is set
    this._clickthroughButton.disable();

    this._makeInteractive();
  };

  p._makeInteractive = function() {
    this._clickthroughButton.addEventListener('click', function() {

      var evt = new createjs.Event('infoBoxClickthrough', true);
      evt.data = {
        clickUrl: this._productModel.clickUrl,
        model: this._productModel
      };
      this.dispatchEvent(evt);
      
    }.bind(this));
  };

  p._placeTextFields = function() {

    if (this._productModel) {

      this._totalHeight = 0;

      this._placeTitleText();
      this._placePriceText();
      this._placeDescriptionText();

      this._placeClickthroughButton();
    }
  };

  p._placeTitleText = function() {

    if (this._title.length > 0) {

      var placement = {
            x: 0,
            y: 0,
            width: this._width
          };

      this._titleText.place(placement);

      this._titleText.setMaxLineCount(this._titleMaxLines);

      this._totalHeight += this._titleText.getHeight();
    }
  };

  p._placePriceText = function() {

    if (this._price.length > 0) {

      var nextY = this._totalHeight + this._spacingBetweenText;
    
      var placement = {
            x: 0,
            y: nextY,
            width: this._width
          };

      this._priceText.place(placement);

      this._priceText.setMaxLineCount(this._priceMaxLines);
      
      this._totalHeight = nextY + this._priceText.getHeight();
    }
  };

  p._placeDescriptionText = function() {

    if (this._descriptionText.getIsVisible() && this._description.length > 0) {
    
      var nextY = this._totalHeight + this._spacingBetweenText;
    
      var placement = {
            x: 0,
            y: nextY,
            width: this._width
          };

      this._descriptionText.place(placement);

      this._descriptionText.setMaxLineCount(this._descriptionMaxLines);
      
      this._totalHeight = nextY + this._descriptionText.getHeight();
    }
  };

  p._placeClickthroughButton = function() {

    if (this._clickthroughButton.getIsVisible()) {
    
      var nextY = this._totalHeight + this._spacingAboveButton;

      var point = {
            x: 0,
            y: nextY
          };

      this._clickthroughButton.move(point);
      
      this._totalHeight = nextY + this._clickthroughButton.getHeight();
    }
  };

  /**
   * Starts with each of 3 text fields set to 1 line.
   * If not enough vertical space, hide the description.
   * If more space allows, start adding lines to title, then price, then description.
   */
  p._optimizeTheSpace = function() {
    var boundsHeight = this._height;

    this._disableExpansion();

    if (this._orientation == 'horizontal') {
      this._titleMaxLines = 2;
    } else {
      this._titleMaxLines = 1;
    }
    this._priceMaxLines = 1;
    this._descriptionMaxLines = 1;

    //if we have exceeded the height, hide the description line.
    if (this._totalHeight > boundsHeight) {

      if (this._descriptionText.getIsVisible()) {

        this._descriptionText.hide();
        this._placeTextFields();

        //enable expansion to reveal description only if expanding vertically
        if (this._expandDirection == 'up' || this._expandDirection == 'down') {
          this._enableExpansion();
          return;
        }
      }

    //if there is still more room, first, if description is hidden, try showing it with 1 line
    } else {

      if (!this._descriptionText.getIsVisible()) {
        this._descriptionMaxLines = 1;
        this._descriptionText.show();
        this._placeTextFields();

        if (this._totalHeight > boundsHeight) {

          this._descriptionText.hide();
          this._placeTextFields();

          //enable expansion to reveal description only if expanding vertically
          if (this._expandDirection == 'up' || this._expandDirection == 'down') {
            this._enableExpansion();
            return;
          }
        }
      }
    }


    //resize to grow if possible...

    var previousTotalHeight;

    //while still room, reveal more of the title
    while (this._totalHeight <= boundsHeight) {

      previousTotalHeight = this._totalHeight;

      this._titleMaxLines++;
      this._placeTextFields();

      //if the height hasn't changed, move on
      if (this._totalHeight == previousTotalHeight) {
        break;

      //if the height has reached/exceeded bounds, remove a line and exit
      } else if (this._totalHeight >= boundsHeight) {
        this._enableExpansion();
        this._titleMaxLines--;
        this._placeTextFields();
        return;
      }
    }

    //while still room, reveal more of the price
    while (this._totalHeight <= boundsHeight) {

      previousTotalHeight = this._totalHeight;

      this._priceMaxLines++;
      this._placeTextFields();

      //if the height hasn't changed, move on
      if (this._totalHeight == previousTotalHeight) {
        break;

      //if the height has reached/exceeded bounds, remove a line and exit
      } else if (this._totalHeight >= boundsHeight) {
        this._enableExpansion();
        this._priceMaxLines--;
        this._placeTextFields();
        return;
      }
    }

    //while still room, reveal more of the description
    while (this._totalHeight <= boundsHeight) {

      previousTotalHeight = this._totalHeight;

      this._descriptionMaxLines++;
      this._placeTextFields();

      //if the height hasn't changed, move on
      if (this._totalHeight == previousTotalHeight) {
        break;

      //if the height has reached/exceeded bounds, remove a line and exit
      } else if (this._totalHeight >= boundsHeight) {
        this._enableExpansion();
        this._descriptionMaxLines--;
        this._placeTextFields();
        return;
      }
    }   
  };

  p._enableExpansion = function() {
    this._canExpand = true;
    this.dispatchEvent('textCanExpand');
  };

  p._disableExpansion = function() {
    this._canExpand = false;
    this.dispatchEvent('textCannotExpand');
  };


  //measuring expanded size is rather tedious, so lets cache results so only the first time is slow...
  p._setCachedExpandedWidth = function(model, width, height, expandedWidth) {
    var key = this._getCacheKey(model, width, height);
    this._cachedExpandedWidth[key] = expandedWidth;    
  };
  p._setCachedExpandedHeight = function(model, width, height, expandedHeight) {
    var key = this._getCacheKey(model, width, height);
    this._cachedExpandedHeight[key] = expandedHeight;
  };

  p._getCachedExpandedWidth = function(model, width, height) {
    var key = this._getCacheKey(model, width, height);
    return this._cachedExpandedWidth[key];
  };
  p._getCachedExpandedHeight = function(model, width, height) {
    var key = this._getCacheKey(model, width, height);
    return this._cachedExpandedHeight[key];
  };

  p._getCacheKey = function(model, width, height) {
    return model.title + '_' + width + '_' + height;
  };

AOLCT.ProductInfoBoxTextArea = ProductInfoBoxTextArea;
})();
/**
 * Renders:
 * Image tile
 * Title
 * Price
 * Description
 * Buy Now button
 * Social button (collapses into single button, or expands to each individual social site if room allows)
 * Expand button
 *
 * Text expands to fit the available space, and collapses to only 1 line of Title, 1 line of Price at minimum.
 *
 * When any text is collapsed, an Expand arrow button appears, and when any non-button area of the infobox is 
 * clicked, the entire box expands but the bottom buttons stay in place.
 */

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var ProductInfoBox = function(listModel, parentDisplayObj, parentNode) {
    this.init(listModel, parentDisplayObj, parentNode);
  };

  var p = ProductInfoBox.prototype = new AOLCT.DisplayObject();

  p.super_init = p.init;
  p.init = function(listModel, parentDisplayObj, parentNode) {

    p.super_init(parentDisplayObj, parentNode);

    this._orientation = 'horizontal'; //or 'vertical'

    this._isDisplayedWithinList = false;

    this._theme = {
      padding: 10,
      spacing: 5
    };

    this._setup();

    //intercept the Buy Now and Item Remove events
    //in order to dispatch a different event depending on
    //whether this is displayed within the List or not.
    this._interceptEvents();

    this.setListModel(listModel);
  };

  //GET/SET

  /**
   * Accepts an AOLCT.ProductModel.
   *
   * (In the future this could be refactored into a base InfoBox (e.g. title, caption, button only)
   * and this could extend that base class. Title and Price would map to base class Title and Description)
   */
  p.setModel = function(productModel) {
    
    //apply only if changed
    if (this._productModel != productModel) {
      this._productModel = productModel;

      this._bottomButtons.setModel(this._productModel);

      this._textArea.setModel(this._productModel);

      this.update();
    }
  };

  p.getModel = function() {
    return this._productModel;
  };

  /**
   * Accepts an AOLCT.ProductsModel.
   */
  p.setListModel = function(productsModel) {
    this._listModel = productsModel;

    this._bottomButtons.setListModel(this._listModel);
  };

  /**
   * Set to true if this infobox is displayed
   * within the list scrollpane itself. False
   * if the infobox is standalone.
   */
  p.setIsDisplayedWithinList = function(isDisplayedWithinList) {
    this._isDisplayedWithinList = isDisplayedWithinList;
  };
  p.getIsDisplayedWithinList = function() {
    return this._isDisplayedWithinList;
  };

  /** 
   * Return opacity (0 through 1) based on current background-color RGBA value.
   */
  p.getOpacity = function() {
    var rgbaString = AOLCT.Util.getStyle(this._backgroundNode, 'background-color');
    
    var rgbaObject = AOLCT.Util.rgbaToObject(rgbaString);

    var opacity = rgbaObject.alpha;

    return opacity;
  };

  p.setOrientation = function(verticalOrHorizontal) {
    this._orientation = verticalOrHorizontal;

    this._textArea.setOrientation(verticalOrHorizontal);
  };

  p.setExpandProperties = function(expandDirection, expandDistance, allowUserToExpandAndCollapse) {
    this._expandDirection = expandDirection;
    this._expandDistance = expandDistance;
    this._allowUserToExpandAndCollapse = allowUserToExpandAndCollapse;

    if (!this._allowUserToExpandAndCollapse) {
      this._expandButton.hide();

      //weird quirk: if user can't expand (e.g. in List View), remove the zIndex:1 property 
      //so the Buy Now button in the first item in the horizontal list view will work
      this._backgroundNode.style.zIndex = 0;
    }
  };

  /* in order to use :last-child css we need to be able to remove from parent and add back in */
  p.setParentNode = function(parentNode) {
    if (parentNode) {
      if (parentNode != this._parentNode) {
        this._parentNode = parentNode;
        this._parentNode.appendChild(this._node);
      }
    } else {
      if (this._parentNode) {
        this._parentNode.removeChild(this._node);
        this._parentNode = null;
      }
    }
  };


  //PUBLIC

  p.show = function() {
    this._node.style.display = 'block';
  };

  p.hide = function() {
    this._node.style.display = 'none';
  };

  p.handleListModelChange = function() {
    this._bottomButtons.handleListModelChange();
  };

  /**
   * Call this with true to force the Buy Now button to always 
   * appear under the text, instead of on the bottom bar, 
   * regardless of orientation
   */
  p.overrideClickthroughButtonUnderText = function (override) {
    this._overrideClickthroughButtonUnderText = override;
  };

  p.place = function(boundingBox, optionalAnimTime) {

    //undo any expansion
    if (this._isExpanded) {
      this.collapse(true);
    }

    this._x = boundingBox.x;
    this._y = boundingBox.y;
    this._width = boundingBox.width;
    this._height = boundingBox.height;

    if (optionalAnimTime) {
      TweenMax.to(this._node, optionalAnimTime, boundingBox);
    } else {
      TweenMax.set(this._node, boundingBox);
    }

    this._placeBackground();

    this._placeExpandButton();
    
    this._placeImage();

    this._placeBottomButtons();

    this._placeTextArea();

    this._isPlaced = true;
  };

  p.update = function() {

    //undo any expansion
    if (this._isExpanded) {
      this.collapse(true);
    }

    var m = this._productModel;

    if (m) {
      this._tile.setModel(m, 'id', 'imageUrl');
      this._tile.update();
    }

    this._textArea.update();

  };

  p.expand = function(snap) {

    //do nothing if we can't expand:
    if (!this._textCanExpand) {
      return;
    }

    var animationTime = 0.25;

    this._isExpanded = true;
    this._expandButton.setIsExpanded(true);

    //save the current expand direction so collapse undoes based on this
    this._currentlyExpandedDirection = this._expandDirection;

    if (this._expandDirection == 'left' || this._expandDirection == 'right') {

      //cache the width before expansion
      var originalTextAreaWidth = this._textArea.getWidth();

      //expand the width of all text to fill the expanded area
      var maxTextAreaWidth = this._expandDistance - this._theme.padding * 2;
      this._textArea.expandWidth(maxTextAreaWidth, snap ? null : animationTime);

      //see how much it expanded
      var expandedTextAreaWidth = this._textArea.getWidth();
      this._expandDelta = expandedTextAreaWidth - originalTextAreaWidth;

      //temporarily update the width by the expanded amount
      this._width += this._expandDelta;

      //snap background to new width
      this._placeBackground();

      //snap bottom buttons to new width
      this._placeBottomButtons();

      //tween expand button to remain in upper right corner
      var expandButtonTarget = {x: '+=' + this._expandDelta};
      if (snap) {
        TweenMax.set(this._expandButton._node, expandButtonTarget);
      } else {
        TweenMax.to(this._expandButton._node, animationTime, expandButtonTarget);
      }

      //only if expanding left, snap/tween image and textarea to new x position
      if (this._expandDirection == 'left') {
        var bkgAndBottomButtonsTarget = {x: '-=' + this._expandDelta};
            
        if (snap) {
          TweenMax.set([this._bottomButtons._node, this._backgroundNode], bkgAndBottomButtonsTarget);
        } else {
          TweenMax.to([this._bottomButtons._node, this._backgroundNode], animationTime, bkgAndBottomButtonsTarget);
        }
      }

    } else if (this._expandDirection == 'up' || this._expandDirection == 'down') {
      
      //cache the height before expansion
      var originalTextAreaHeight = this._textArea.getHeight();
      
      //expand the height of all text to fill the expanded area
      var maxTextAreaHeight = this._expandDistance.height - this._theme.padding * 2 - this._bottomButtons.getHeight() - this._theme.spacing;
      this._textArea.expandHeight(maxTextAreaHeight, snap ? null : animationTime);

      //see how much it expanded
      var expandedTextAreaHeight = this._textArea.getHeight();
      this._expandDelta = expandedTextAreaHeight - originalTextAreaHeight;

      //temporarily update the height by the expanded amount
      this._height += this._expandDelta;

      //snap background to new height
      TweenMax.set(this._backgroundNode, {height: this._height});

      //if expanding up, snap/tween background (with its child nodes: tile, textarea) into place
      if (this._expandDirection == 'up') {
        var backgroundTarget = {y: '-=' + this._expandDelta};
        if (snap) {
          TweenMax.set(this._backgroundNode, backgroundTarget);
        } else {
          TweenMax.to(this._backgroundNode, animationTime, backgroundTarget);
        }
      
      //if expanding down, snap/tween bottom buttons to remain on the bottom
      } else {
        var bottomButtonsTarget = {y: '+=' + this._expandDelta};
        if (snap) {
          TweenMax.set(this._bottomButtons._node, bottomButtonsTarget);
        } else {
          TweenMax.to(this._bottomButtons._node, animationTime, bottomButtonsTarget);
        }
      }
    }
  };

  p.collapse = function(snap) {

    if (!this._isExpanded) {
      return;
    }

    var animationTime = 0.25;

    this._isExpanded = false;
    this._expandButton.setIsExpanded(false);

    var onDidCollapse = function() {

      //restore background
      this._placeBackground();

      //restore bottom buttons
      this._placeBottomButtons();

    }.bind(this);

    if (this._currentlyExpandedDirection == 'left' || this._currentlyExpandedDirection == 'right') {

      //restore width
      this._width -= this._expandDelta;

      //revert the text
      this._textArea.collapse(snap ? null : animationTime);

      //tween back...
      if (!snap) {

        if (this._currentlyExpandedDirection == 'left') {
          //tween bottom buttons, and background (with its children: text, expand button)
          TweenMax.to([this._bottomButtons._node, this._backgroundNode], animationTime, {
            x: '+=' + this._expandDelta,
            onComplete: onDidCollapse
          });
        }

        //tween expandButton in the opposite direction
        TweenMax.to(this._expandButton._node, animationTime, {x: '-=' + this._expandDelta});

      } else {

        if (this._currentlyExpandedDirection == 'left') {
          //snap background with its children: text, expand button
          TweenMax.set([this._bottomButtons._node, this._backgroundNode], {x: '+=' + this._expandDelta});
        }

        //snap expandButton in the opposite direction
        TweenMax.set(this._expandButton._node, {x: '-=' + this._expandDelta});

        onDidCollapse();
      }

    } else if (this._currentlyExpandedDirection == 'up' || this._currentlyExpandedDirection == 'down') {

      //snap to old height value
      this._height -= this._expandDelta;

      //revert the text
      this._textArea.collapse(snap ? null : animationTime);

      if (this._currentlyExpandedDirection == 'up') {
        if (!snap) {
          TweenMax.to(this._backgroundNode, animationTime, {
            y: '+=' + this._expandDelta,
            onComplete: onDidCollapse
          });
        } else {
          TweenMax.set(this._backgroundNode, {y: '+=' + this._expandDelta});

          onDidCollapse();
        }
      } else {
        if (!snap) {
          TweenMax.to(this._bottomButtons._node, animationTime, {
            y: '-=' + this._expandDelta,
            onComplete: onDidCollapse
          });
        } else {
          TweenMax.set(this._bottomButtons._node, {y: '-=' + this._expandDelta});

          onDidCollapse();
        }
      }
    }

    this._currentlyExpandedDirection = null;
  };

  //PRIVATE
  p._setup = function() {
    this._node = AOLCT.Util.makeAbsNode('infoBox', this._parentNode);

    this._setupBackground();

    this._setupExpandButton();
  
    this._tile = new AOLCT.Tile(0, this, this._backgroundNode);
  
    this._textArea = new AOLCT.ProductInfoBoxTextArea(this, this._backgroundNode);
  
    this._bottomButtons = new AOLCT.ProductInfoBoxBottomButtons(this, this._node);

    this._makeExpandable();
  };

  p._setupBackground = function() {

    //css class is changed when dock() is called
    this._backgroundNode = AOLCT.Util.makeAbsNode('infoBoxBackgroundDockedBottom', this._node);

    //this is needed so the background doesn't jump forward after expand (on iOS and sometimes chrome)
    this._backgroundNode.style.zIndex = -1;
  };

  p._setupExpandButton = function() {

    this._expandButton = new AOLCT.ExpandButton(this, this._backgroundNode);

    this._expandButton.hide();
  };

  p._makeExpandable = function() {
    //connect textarea expand events to expand button
    this._textArea.addEventListener('textCanExpand', function() {
      this._textCanExpand = true;
      
      if (this._allowUserToExpandAndCollapse) {
        this._expandButton.show();
      }
    }.bind(this));
    
    this._textArea.addEventListener('textCannotExpand', function() {
      if (!this._isExpanded) {
        this._textCanExpand = false;
        
        if (this._allowUserToExpandAndCollapse) {
          this._expandButton.hide();
        }
      }
    }.bind(this));

    //enable interactivity by clicking on the expand button or on any non-button elements
    if (AOLCT.Util.isTouchDevice()) {
      this._node.addEventListener('touchend', this._onRelease.bind(this));
      this._node.addEventListener('touchmove', this._onMove.bind(this));
    } else {
      this._node.addEventListener('mouseup', this._onRelease.bind(this));
    }

  };

  // hack to prevent bg scrolling when dragging on infobox
  p._onMove = function(evt) {
    evt.preventDefault();
  };

  p._onRelease = function(evt) {

    //allow click to expand on anything in the InfoBox except for buttons
    //use all nodes for IE9 support since pointer-events: none does not work in IE9 or IE10.
    if (evt.target == this._backgroundNode ||
        evt.target == this._expandButton._node ||
        evt.target == this._textArea._node || 
        evt.target == this._textArea._titleText._node ||
        evt.target == this._textArea._priceText._node ||
        evt.target == this._textArea._descriptionText._node ||
        evt.target == this._tile._node ||
        evt.target == this._tile._imageNode ||
        evt.target == this._bottomButtons._node) {

      if (this._allowUserToExpandAndCollapse && this._textCanExpand) {
        if (!this._isExpanded) {
          this.expand();

          //dispatch event to track user interaction
          evt = new createjs.Event('infoBoxExpand', true);
          this.dispatchEvent(evt);
        } else {
          this.collapse();

          //dispatch event to track user interaction
          evt = new createjs.Event('infoBoxCollapse', true);
          this.dispatchEvent(evt);
        }
      }
    }
  };

  p._placeBackground = function() {
    var placement = {
      x: 0,
      y: 0,
      width: this._width,
      height: this._height
    };

    if (this._orientation == 'horizontal') {
      placement.className = 'infoBoxBackgroundHorizontal';
    } else {
      placement.className = 'infoBoxBackgroundVertical';
    }

    TweenMax.set(this._backgroundNode, placement);
  };

  /**
   * Tile is visible based on orientation:
   * Vertical: always
   * Horizontal: only if enough room to fit the minimum amount of text
   */
  p._placeImage = function() {

    var thumbSize = 50,
        placement = {
          x: this._theme.padding,
          y: this._theme.padding,
          width: thumbSize,
          height: thumbSize
        };

    this._imageVisible = true;

    if (this._orientation == 'horizontal') {
      var heightWithThumb = this._theme.padding + 
                            thumbSize + 
                            this._theme.spacing + 
                            this._textArea.getMinHeight() + 
                            this._theme.spacing + 
                            this._bottomButtons.getHeight() +
                            this._theme.padding;

      if (heightWithThumb > this._height) {
        this._imageVisible = false;
      }
    }

    if (this._imageVisible) {
      this._tile.show();
      this._tile.place(placement);
    } else {
      this._tile.hide();
    }
  };

  p._placeBottomButtons = function() {
    var placement;

    //show or hide bottom clickthrough button based on orientation or override.
    if (this._orientation == 'horizontal' || this._overrideClickthroughButtonUnderText) {
      this._bottomButtons.hideClickthroughButton();
      this._clickThroughShownOnBottom = false;
    } else {
      this._bottomButtons.showClickthroughButton();
      this._clickThroughShownOnBottom = true;
    }

    //place the buttons
    if (this._orientation == 'horizontal') {

      placement = {
        x: this._theme.padding + 1, /* plus 1 to account for border in background pushing those inward */
        y: this._height - this._theme.padding - this._bottomButtons.getHeight(),
        width: this._width - this._theme.padding * 2 - 1 /* less 1 to account for border in background pushing those inward */
      };
    
      this._bottomButtons.place(placement);
  
    } else {
      
      placement = {
        x: this._tile.getX() + this._tile.getWidth() + this._theme.spacing,
        y: this._height - this._theme.padding - this._bottomButtons.getHeight()
      };
      placement.width = this._width - placement.x - this._theme.padding;
  
      this._bottomButtons.place(placement);
    }

  };

  p._placeTextArea = function() {

    var placement, startX, startY, endY, width, height;

    //if the clickthrough button is shown on the bottom, don't include the copy below the text
    if (this._clickThroughShownOnBottom) {
      this._textArea.hideClickthroughButton();

    //if hidden on bottom, include the copy below the textarea 
    } else {
      this._textArea.showClickthroughButton();
    }

    if (this._orientation == 'horizontal') {
      
      startX = this._theme.padding;

      if (this._imageVisible) {
        startY = this._tile.getY() + this._tile.getHeight() + this._theme.spacing;
      } else {
        startY = this._theme.padding;
      }
      endY = this._bottomButtons.getY() - this._theme.spacing;
      width = this._width - this._theme.padding * 2;
      height = endY - startY;
    
    } else {

      startX = this._tile.getX() + this._tile.getWidth() + this._theme.spacing;
      startY = this._theme.padding;
      endY = this._bottomButtons.getY() - this._theme.spacing;
      width = this._width - startX - this._theme.padding * 2; //double right padding to account for expand arrow
      height = endY - startY;
    }

    placement = {
      x: startX,
      y: startY,
      width: width,
      height: height
    };

    this._textArea.place(placement);
  };

  p._placeExpandButton = function() {

    var point = {
      x: Math.round(this._width - this._expandButton.getWidth()),
      y: Math.round((this._titleBarHeight - this._expandButton.getHeight()) / 2) 
    };
    this._expandButton.move(point);

    var expandDirection = 'up';
    if (this._orientation == 'horizontal') {
      expandDirection = 'left';
    }

    this._expandButton.setExpandDirection(expandDirection);

    this._textArea.setExpandDirection(expandDirection);
  };

  /**
   * Intercept the Buy Now and Item Remove events
   * in order to dispatch a different event depending on
   * whether this is displayed within the List or not.
   */
  p._interceptEvents = function() {
    this.addEventListener('infoBoxClickthrough', this._interceptEvent.bind(this));
    this.addEventListener('listRemove', this._interceptEvent.bind(this));
  };

  p._interceptEvent = function(evt) {
    if (this._isDisplayedWithinList) {
      if (evt.type == 'infoBoxClickthrough') {
        evt.type = 'infoBoxClickthroughInList';
      
      } else if (evt.type == 'listRemove') {
        evt.type = 'listRemoveInList';
      }
    }
  };

AOLCT.ProductInfoBox = ProductInfoBox;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var TilePatternModel = function(laneCount, tileCount, patternArray) {
    this.laneCount = laneCount;
    this.tileCount = tileCount;
    this.patternArray = patternArray;
  };

  var p = TilePatternModel.prototype;

  p.getRowSpan = function() {
    return this.patternArray.length / this.laneCount;
  };

  /**
   * Returns true if this pattern contains any tile scales
   * that exceed the specified scale.
   * Find more info about the tile pattern model that is used as a convention to 
   * assign value to the patternArray argument in 
   * _defPat(laneCount, tileCount, patternArray)
   * https://docs.google.com/a/teamaol.com/spreadsheets/d/1xscgc6gn3YGtxC6BAPPMad5mh0rnw2K3nEM85fGi_Rk/edit#gid=0
   */  
  p.exceedsTileScale = function(tileScale) {
    for (var i = 0; i < this.patternArray.length; i++) {
      if (this.patternArray[i] > tileScale) {
        return true;
      }
    }

    return false;
  };

AOLCT.TilePatternModel = TilePatternModel;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, AOLCT */

  var TilePatternsModel = function() {
    this.init();
  };

  var s = TilePatternsModel;

  s.LANES_MIN = 1;
  s.LANES_MAX = 5;

  var p = TilePatternsModel.prototype = new createjs.EventDispatcher();

  p.init = function() {
    this._lanesArray = [];
    
    this._defPat(1, 1, [1]);
    
    this._defPat(2, 1, [2,0,0,0]);
    this._defPat(2, 2, [1,1]);

    this._defPat(3, 1, [3,0,0,0,0,0,0,0,0]);
    this._defPat(3, 3, [1,1,1]);
    this._defPat(3, 3, [2,0,1,0,0,1]);
    this._defPat(3, 3, [1,2,0,1,0,0]);

    this._defPat(4, 1, [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    this._defPat(4, 2, [2,0,2,0,0,0,0,0]);
    this._defPat(4, 4, [1,1,1,1]);
    this._defPat(4, 4, [3,0,0,1,0,0,0,1,0,0,0,1]);
    this._defPat(4, 4, [1,3,0,0,1,0,0,0,1,0,0,0]);
    this._defPat(4, 5, [2,0,1,1,0,0,1,1]);
    this._defPat(4, 5, [1,2,0,1,1,0,0,1]);
    this._defPat(4, 5, [1,1,2,0,1,1,0,0]);
    this._defPat(4, 6, [2,0,1,1,0,0,2,0,1,1,0,0]);
    this._defPat(4, 6, [1,1,2,0,2,0,0,0,0,0,1,1]);

    this._defPat(5, 1, [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    this._defPat(5, 4, [3,0,0,2,0,0,0,0,0,0,0,0,0,1,1]);
    this._defPat(5, 4, [3,0,0,1,1,0,0,0,2,0,0,0,0,0,0]);
    this._defPat(5, 4, [2,0,3,0,0,0,0,0,0,0,1,1,0,0,0]);
    this._defPat(5, 4, [1,1,3,0,0,2,0,0,0,0,0,0,0,0,0]);
    this._defPat(5, 4, [2,0,1,2,0,0,0,1,0,0]);
    this._defPat(5, 5, [1,1,1,1,1]);
    this._defPat(5, 5, [4,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
    this._defPat(5, 5, [1,4,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0]);
    this._defPat(5, 7, [3,0,0,1,1,0,0,0,1,1,0,0,0,1,1]);
    this._defPat(5, 7, [1,3,0,0,1,1,0,0,0,1,1,0,0,0,1]);
    this._defPat(5, 7, [1,1,3,0,0,1,1,0,0,0,1,1,0,0,0]);
    this._defPat(5, 9, [2,0,1,1,1,0,0,1,2,0,1,1,1,0,0]);
    this._defPat(5, 9, [1,1,1,2,0,2,0,1,0,0,0,0,1,1,1]);
    this._defPat(5, 11, [1,1,1,2,0,3,0,0,0,0,0,0,0,1,1,0,0,0,2,0,1,1,1,0,0]);
    this._defPat(5, 11, [2,0,1,1,1,0,0,3,0,0,1,1,0,0,0,2,0,0,0,0,0,0,1,1,1]);

    this._defPat(5, 15, [1,1,1,2,0,2,0,1,0,0,0,0,3,0,0,1,1,0,0,0,2,0,0,0,0,0,0,1,2,0,1,1,1,0,0]);
    this._defPat(5, 15, [2,0,1,1,1,0,0,1,2,0,3,0,0,0,0,0,0,0,1,1,0,0,0,2,0,2,0,1,0,0,0,0,1,1,1]);
  };

  //PUBLIC

  p.getTileCountRangeForLane = function (laneCount) {
    var groupNumbersArray = [],
        byLane = this._lanesArray[laneCount];

    for (var i in byLane) {
      groupNumbersArray.push(i);
    }

    return groupNumbersArray;
  };

  p.getRandomPatternForLaneAndTileCount = function (laneCount, tileCount) {

    var patternsByTileCount = this._lanesArray[laneCount][tileCount];

    return AOLCT.Util.randItem(patternsByTileCount);
  };


  //PRIVATE

  p._defPat = function(laneCount, tileCount, patternArray) {
    var byLane = this._lanesArray[laneCount];

    if (!byLane) {
      byLane = this._lanesArray[laneCount] = [];
    }

    var byTileCount = byLane[tileCount];

    if (!byTileCount) {
      byTileCount = byLane[tileCount] = [];
    }

    byTileCount.push(new AOLCT.TilePatternModel(laneCount, tileCount, patternArray));
  };

AOLCT.TilePatternsModel = TilePatternsModel;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, _, AOLCT */

  var TilePatternChooser = function() {
    this.init();
  };

  var p = TilePatternChooser.prototype = new createjs.EventDispatcher();

  p.init = function() {
    this._tilePatterns = new AOLCT.TilePatternsModel();

    this._fillGaps = false;
  };  

  /**
   * Chooses and caches patterns based on lane count and tile count.
   * Prepareas iterators used by getNextTileTarget.
   */
  p.setupForLanesAndTileCount = function(laneCount, tileCount, maxTileScale) {
    this._chosenPatterns = this._loadPatterns(laneCount, tileCount, maxTileScale);

    this._laneCount = laneCount;
    this._currentPatternRowOffset = 0;
    this._currentPatternIndex = 0;
    this._currentPatternTileIndex = 0;
    this._currentPattern = this._chosenPatterns[this._currentPatternIndex];
  };

  /**
   * Returns the lane, row, and size of the next tile in the sequence of
   * chosen patterns.
   */
  p.getNextTileTarget = function() {
    var tileTarget = this._getTileTarget( this._currentPattern, this._currentPatternTileIndex);

    tileTarget.row += this._currentPatternRowOffset;

    //increment for next one...
    this._currentPatternTileIndex++;

    //if no more tiles in this pattern, go to the next pattern
    if (this._currentPatternTileIndex >= this._currentPattern.tileCount) {

      this._currentPatternRowOffset += this._currentPattern.getRowSpan();

      this._currentPatternIndex++;

      //if no more patterns in this set loop back around
      if (this._currentPatternIndex >= this._chosenPatterns.length) {
        this._currentPatternIndex = 0;
      }

      this._currentPattern = this._chosenPatterns[this._currentPatternIndex];

      this._currentPatternTileIndex = 0;
    }

    return tileTarget;
  };



  //PRIVATE

  /**
   * Returns an array of patterns from TilePatterns
   * to fill all spaces in all lanes to match the 
   * specified number of products.
   *
   * If laneCount > 3 and tileCount < 5, fillGaps is enabled to
   * use patterns that are an exact fit without any gaps.
   * 
   * Any patterns containing tile scales larger than maxTileScale 
   * are excluded.
   * 
   * Caches results by using underscore.js based on input 
   * using memoize and hash function.
   */
  p._loadPatterns = _.memoize(function(laneCount, tileCount, maxTileScale) {
    
    var chosenPatterns = [],
        tilesFilledCount = 0;

    //get the range of tile counts for this lane (e.g. 1, 3, 5, 10, etc)
    var tileCountRangeArray = this._tilePatterns.getTileCountRangeForLane(laneCount);

    //start from a random initial range
    var tileCountRangeIndex = _.random(0, tileCountRangeArray.length - 1);

    //for each set of tile counts, grab a random pattern, until there are enough to cover all products
    do
    {
      var nextTileCount = tileCountRangeArray[tileCountRangeIndex];

      //randomly select next tile count group
      tileCountRangeIndex = _.random(0, tileCountRangeArray.length - 1);

      var nextPattern = this._tilePatterns.getRandomPatternForLaneAndTileCount(laneCount, nextTileCount);

      //if this pattern contains any tiles beyond max scale, skip it
      if (nextPattern.exceedsTileScale(maxTileScale)) {
        continue;
      }

      tilesFilledCount += nextPattern.tileCount;

      chosenPatterns.push(nextPattern);

      //next tile count group, or loop around to first
      //tileCountRangeIndex++;
      //if (tileCountRangeIndex == tileCountRangeArray.length) {
        //tileCountRangeIndex = 0;
      //}
      /*
      if (this._fillGaps) {
        //if this pattern results in too many tiles, remove this pattern, and try the next one until
        //we have an exact fit.
        if (tilesFilledCount > tileCount) {
          chosenPatterns.pop();
          
          var lastPatternTileCount = nextPattern.tileCount;

          tilesFilledCount -= lastPatternTileCount;
        }
      }
      */

    } while (tilesFilledCount < tileCount);
    
    return chosenPatterns;

  }, function(laneCount, tileCount, maxTileScale) { return laneCount + '-' + tileCount + '-' + maxTileScale;});



  /** 
   * Input:
   *   pattern - which pattern object
   *   index - which tile within the pattern, where 0 is the first one, and
   *            pattern.tileCount - 1 is the last one.
   *
   * Returns an object with properties: {
   *   lane: <laneNumber>
   *   row:  <rowNumber>
   *   size: <size>
    * }
   */
  p._getTileTarget = function(pattern, requestedIndex) {
    var lane = 0,
        row = 0,
        size = 1,
        tileIndex = 0,
        laneCount = pattern.laneCount,
        patternArray = pattern.patternArray;

    for (var i = 0; i < patternArray.length; i++) {

      if (patternArray[i] !== 0) {

        //non-zero unit tile found - is it the tile we're looking for?
        if (tileIndex == requestedIndex) {
          //store the size and break out to return
          size = patternArray[i];
          break;
        }

        tileIndex++;
      }

      lane++;

      if (lane >= laneCount) {
        lane = 0;
        row++;
      }
    }

    return {
      lane: lane,
      row: row,
      size: size
    };
  };

AOLCT.TilePatternChooser = TilePatternChooser;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var TileScrollpaneAutoplayer = function(tileScrollpane) {
    this.init(tileScrollpane);
  };

  var p = TileScrollpaneAutoplayer.prototype;

  p.getIsRunning = function() {

    return this._isRunning;
  };

  p.getDidStart = function() {

    return this._didStart;
  };

  p.init = function(tileScrollpane) {

    this._scrollpane = tileScrollpane;

    //call start when ready to start the autoplayer

    //autoplayer automatically stops in its tracks (interrupts)
    //on document mouseover or touchstart
    this._boundOnInteract = this._onInteract.bind(this);
    if (AOLCT.Util.isTouchDevice()) {
      document.body.addEventListener('touchstart', this._boundOnInteract);
    } else {
      document.body.addEventListener('mouseover', this._boundOnInteract);
    }

    //autoplayer also stops on page unload:
    window.addEventListener('beforeunload', this._boundOnInteract);
    window.addEventListener('unload', this._boundOnInteract);
  };

  p._onInteract = function() {
    if (AOLCT.Util.isTouchDevice()) {
      document.body.removeEventListener('touchstart', this._boundOnInteract);
    } else {
      document.body.removeEventListener('mouseover', this._boundOnInteract);
    }

    this.interrupt();
  };

  /**
   * @param duration - how long animation lasts, in seconds
   * @param interval - how long between tile selection, in seconds
   */
  p.start = function(duration, interval) {
    this.interrupt();

    this._didStart = true;

    this._isRunning = true;

    this._timeoutId = setTimeout(this.complete.bind(this), duration * 1000);

    this._intervalId = setInterval(this.tick.bind(this), interval * 1000);
  };

  /**
   * Select the tile, and if it's not already fully in view, scroll to it.
   */
  p.tick = function() {
    var tileIndex = this._scrollpane._selectedIndex + 1;

    if (tileIndex >= this._scrollpane._tileCount) {
      tileIndex = 0;
    }

    this._scrollpane.selectTile(tileIndex);

    if (!this._scrollpane.isTileFullyInView(tileIndex)) {
      this._scrollpane.scrollTileToTop(tileIndex);
    }
  };

  /**
   * Stops the autoplay in its tracks. Call this on user interaction.
   */
  p.interrupt = function() {
    if (this._isRunning) {

      clearTimeout(this._timeoutId);
      clearInterval(this._intervalId);
      this._isRunning = false;
    }
  };

  /**
   * Stops the autoplay and returns select/scroll to the first tile.
   */
  p.complete = function() {
    this.interrupt();

    this._scrollpane.selectTile(0);

    this._scrollpane.scrollTileToTop(0);
  };

AOLCT.TileScrollpaneAutoplayer = TileScrollpaneAutoplayer;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, _, TweenMax, AOLCT, $ */

  var TileScrollpane = function(parentDisplayObj, parentNode) {
    this.init(parentDisplayObj, parentNode);
  };

  var s = TileScrollpane;
  s.LANES_MIN = AOLCT.TilePatternsModel.LANES_MIN;
  s.LANES_MAX = AOLCT.TilePatternsModel.LANES_MAX;

  var p = TileScrollpane.prototype = new createjs.EventDispatcher();

  p.init = function(parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this.TILE_UNIT_SIZE_MIN = 60;

    this._orientation = 'horizontal'; //or 'vertical'
    this._laneCount = 5;
    this._tileMargin = 2;

    this._tiles = [];
    this._activeTile = null;
    this._tileMouseOverDelay = null;

    this._unitSize = 0;
    this._finalRowEdge = 0;

    this._width = 0;
    this._height = 0;

    this._scrollpaneSizeReduction = 0;
    this._scrollpaneFinalPadding = 0;

    this._tilePatternChooser = new AOLCT.TilePatternChooser();

    this._autoplayer = new AOLCT.TileScrollpaneAutoplayer(this);

    this._setup();

    this.show();
  };

  //GET/SET
  p.setModel = function(model, idFieldName, imageUrlFieldName, labelFieldName) {
    this._model = model;
    this._modelIdFieldName = idFieldName;
    this._modelImageUrlFieldName = imageUrlFieldName;
    this._modelLabelFieldName = labelFieldName;

    this.handleModelChange();
  };

  p.setListModel = function(listModel) {
    this._listModel = listModel;

    //subscribe to the model's "changed" event
    this._listModel.addEventListener('changed', function() {

      this._listModelChanged = true;
      this.update();
      this._listModelChanged = false;

    }.bind(this));
  };

  p.getSelectedIndex = function() {
    return this._selectedIndex;
  };

  /**
   * Returns width of scrollpane inside of scrollbars.
   */
  p.getClientWidth = function() {
    return this._node.clientWidth;
  };

  /**
   * Returns height of scrollpane inside of scrollbars.
   */
  p.getClientHeight = function() {
    return this._node.clientHeight;
  };

  /**
   * Returns the width of the scrollpane, minus the size of anything overlapping
   */
  p.getViewableWidth = function() {
    var viewableWidth = this._width;

    if (this._orientation == 'horizontal') {
      viewableWidth -= (this._scrollpaneSizeReduction || this._scrollpaneFinalPadding);
    }

    return viewableWidth;
  };

  /**
   * Returns the width of the scrollpane, minus the size of anything overlapping
   */
  p.getViewableHeight = function() {
    var viewableHeight = this._height;

    if (this._orientation == 'vertical') {
      viewableHeight -= (this._scrollpaneSizeReduction || this._scrollpaneFinalPadding);
    }

    return viewableHeight;
  };
        

  /**
   * First place({x, y, width, height}) must be called.
   * 
   * Updates the overflow styles.
   */ 
  p.setOrientation = function(verticalOrHorizontal) {

    this._orientation = verticalOrHorizontal;

    if (this._previousOrientation != this._orientation) {
      if (this._orientation == 'vertical') {
        this._node.style.overflowX = 'hidden';
        this._node.style.overflowY = 'scroll';
      } else {
        this._node.style.overflowY = 'hidden';
        this._node.style.overflowX = 'scroll';
      }
    }
    
    this._previousOrientation = this._orientation;
  };

  /**
   * Returns height of scrollpane inside of scrollbars.
   */
  p.setTileMargin = function(margin) {
    this._tileMargin = margin;
    this.update();
  };

  /**
   * Default is 'auto' (or anything not between 2 and 5), 
   * but can be overridden to always 2, 3, 4, or 5 lanes.
   */
  p.setLaneCount = function(laneCount) {
    if (laneCount >= s.LANES_MIN || laneCount <= s.LANES_MAX) {
      this._overrideLaneCount = laneCount;
    }

    //should be called once initially - or call update() directly.
  };

  /**
   * sizeReduction - keeps the width property the same, but brings scrollable area inward
   *                 to account for an overlay.
   * finalPadding - sizes the scroll contents this much wider/taller to account for an overlay
   *
   * Call .update() afterwards to apply.
   */
  p.setSizeReductionAndPadding = function(sizeReduction, finalPadding) {

    //adjust only if changed
    if (sizeReduction != this._scrollpaneSizeReduction || finalPadding != this._scrollpaneFinalPadding) {
      this._scrollpaneSizeReduction = sizeReduction;
      this._scrollpaneFinalPadding = finalPadding;
    }
  };

  p.getAutoplayer = function() {
    return this._autoplayer;
  };


  //PUBLIC

  p.show = function() {

    this._isVisible = true;
    this._node.style.display = 'block';

    this.update();
  };

  p.hide = function() {

    this._isVisible = false;
    this._node.style.display = 'none';
  };
  
  /**
   * Placement = {x, y, width, height}
   */
  p.place = function (placement) {
    this._width = placement.width;
    this._height = placement.height;

    TweenMax.set(this._node, placement);

    this._isPlaced = true;
  };

  p.handleModelChange = function() {
    if (this._isPlaced) {
      this._tileCount = this._model.getCount();

      this._modelChanged = true;

      this.update();

      this._modelChanged = false;
    }
  };

  p.update = function() {
    if (this._isPlaced && this._isVisible) {
      this._determineProperties();

      this._applyScrollpaneSizeReduction();

      this._updateTiles();

      this._updateTilesContainer();

      this._checkIfResized();
    }
  };

  p.selectTile = function(index) {
    if (this._tiles[index]) {
      this._tiles[index].select();
    }
  };

  /**
   * Returns true if tile is fully in view, 
   * false if tile is partially in view or not in view
   */
  p.isTileFullyInView = function(index) {
    if (this._tiles[index]) {
      
      var isFullyInView;

      if (this._orientation == 'horizontal') {
        var tileLeft = this._tiles[index].getX(),
            tileRight = this._tiles[index].getX() + this._tiles[index].getWidth();

        var visibleWidth = this.getViewableWidth();
        
        var scrollXDistance = this._node.scrollLeft;

        var isTileLeftInView = tileLeft >= scrollXDistance;
        var isTileRightInView = tileRight <= (scrollXDistance + visibleWidth);

        isFullyInView = isTileLeftInView && isTileRightInView;

      } else {
        var tileTop = this._tiles[index].getY();
        var tileBottom = this._tiles[index].getY() + this._tiles[index].getHeight();
        
        var visibleHeight = this.getViewableHeight();

        var scrollYDistance = this._node.scrollTop;

        var isTileTopInView = tileTop >= scrollYDistance;
        var isTileBottomInView = tileBottom <= (scrollYDistance + visibleHeight);
        
        isFullyInView = isTileTopInView && isTileBottomInView;
      }

      return isFullyInView;
    }
  };

  /**
   * Scrolls tile just into view - if off top/left, scrolls to top/left edge.
   * Iff off bottom/right, scrolls to bottom/right edge. 
   */
  p.scrollTileIntoInView = function(index) {
    if (this._tiles[index]) {

      if (this._orientation == 'horizontal') {
        var tileLeft = this._tiles[index].getX(),
            tileRight = this._tiles[index].getX() + this._tiles[index].getWidth();

        var visibleWidth = this.getViewableWidth();
        
        var scrollXDistance = this._node.scrollLeft;

        var isTileLeftInView = tileLeft >= scrollXDistance;
        var isTileRightInView = tileRight <= (scrollXDistance + visibleWidth);

        if (!isTileLeftInView) {
          this.scrollTileToTop(index);

        } else if (!isTileRightInView) {
          this.scrollTileToBottom(index);
        }

      } else {
        var tileTop = this._tiles[index].getY();
        var tileBottom = this._tiles[index].getY() + this._tiles[index].getHeight();
        
        var visibleHeight = this.getViewableHeight();

        var scrollYDistance = this._node.scrollTop;

        var isTileTopInView = tileTop >= scrollYDistance;
        var isTileBottomInView = tileBottom <= (scrollYDistance + visibleHeight);
        
        if (!isTileTopInView) {
          this.scrollTileToTop(index);
          
        } else if (!isTileBottomInView) {
          this.scrollTileToBottom(index);
        }
      }
    }
  };

  /**
   * Scrolls so the the left/top edge of the tile is 
   * at the left/top of the scrollpane.
   */
  p.scrollTileToTop = function(index, snap) {
    if (this._tiles[index]) {
      
      var scrollTarget = {};
      if (this._orientation == 'horizontal') {
        scrollTarget.scrollLeft = this._tiles[index].getX();
      } else {
        scrollTarget.scrollTop = this._tiles[index].getY() - this._tileMargin;
      }

      //set flag to autoscroll so autoplay isn't interrupted; unset when complete
      this._startAutoScrolling();
      scrollTarget.onComplete = this._stopAutoScrolling.bind(this);
      
      if (snap) {
        TweenMax.set(this._node, scrollTarget);
      } else {
        TweenMax.to(this._node, 0.5, scrollTarget);
      }
    }
  };

  /**
   * Scrolls so the the bottom/right edge of the tile is 
   * at the bottom/right of the scrollpane.
   */
  p.scrollTileToBottom = function(index) {
    if (this._tiles[index]) {
      
      var scrollTarget = {};
      if (this._orientation == 'horizontal') {
        scrollTarget.scrollLeft = this._tiles[index].getX() + this._tiles[index].getWidth() + this._tileMargin - this.getViewableWidth();
      } else {
        scrollTarget.scrollTop = this._tiles[index].getY() + this._tiles[index].getHeight() + this._tileMargin - this.getViewableHeight();
      }

      //set flag to autoscroll so autoplay isn't interrupted; unset when complete
      this._startAutoScrolling();
      scrollTarget.onComplete = this._stopAutoScrolling.bind(this);

      TweenMax.to(this._node, 0.5, scrollTarget);
    }
  };

  p._startAutoScrolling = function() {
    clearTimeout(this._stopAutoScrollingTimeout);
    this._autoScrolling = true;
  };

  p._stopAutoScrolling = function() {
    clearTimeout(this._stopAutoScrollingTimeout);
    this._stopAutoScrollingTimeout = setTimeout(
        function() {
          this._autoScrolling = false;
        }.bind(this),
        1000);
  };


  //PRIVATE

  p._setup = function() {
    var inMRAIDContainer = false;
    if(ADTECH.adConfig){
      inMRAIDContainer = (ADTECH.adConfig.mraid) ? true : false;
    }
    var android4 = navigator.userAgent.match(/Android 4/i);
    var android4_4 = navigator.userAgent.match(/Android 4.4/i);
    
    if(inMRAIDContainer && (android4 && !android4_4)) {
      this._node = AOLCT.Util.makeAbsNode('TileScrollPane inMraid', this._parentNode);
      this.touchScroll(this._node);
    } else {
      this._node = AOLCT.Util.makeAbsNode('TileScrollPane inertialScroll', this._parentNode);
    }
    
    this._tileContainer = AOLCT.Util.makeAbsNode('tileContainer', this._node);

    //listen for the tile user select and auto select events which bubble-up from each tile.
    this.addEventListener('tileSelect', this._onTileSelect.bind(this));
    this.addEventListener('tileAutoSelect', this._onTileSelect.bind(this));

    //listen for scroll events
    this._addScrollingEvents();
  };

  p.touchScroll = function(el){
    var scrollStartPos=0;
    var perDone = 0;

    el.addEventListener("touchstart", function(event) {
      scrollStartPos=this.scrollTop+event.touches[0].screenY;
      //console.log("touchstart", scrollStartPos );
    },false);

    el.addEventListener("touchmove", function(event) {
      this.scrollTop=scrollStartPos-event.touches[0].screenY;
      mytouch = event.touches[0];
      perDone = Math.floor((this.scrollTop/(this.firstElementChild.offsetHeight - this.offsetHeight))*100);
      event.preventDefault();

      //console.log("touchmove", scrollStartPos, this.scrollTop,event.touches[0].screenY);
    },false);

    el.addEventListener("touchend", function(event) {
    },false);
  };



  p._addScrollingEvents = function() {

    //mousescroll event for IE9, Chrome, Safari, Opera
    this._node.addEventListener('mousewheel', this._onScrollEvents.bind(this), false);
    
    //mousescroll event for Firefox
    this._node.addEventListener('DOMMouseScroll', this._onScrollEvents.bind(this), false); 
    this._node.addEventListener('scroll', this._onScrollEvents.bind(this), true);
    this._node.addEventListener('mouseup', this._onScrollEvents.bind(this), true);
    this._node.addEventListener('touchstart', this._onScrollEvents.bind(this), true);
  };

  p._onScrollEvents = function(evt) {
    //console.log("_onScrollEvents:", evt.type );
    if (this._autoScrolling) {
      return;
    }

    if (this._autoplayer.getIsRunning()) {
      this._autoplayer.interrupt();
    }

    if (this._scrollingStarted) {
      if (evt.type == 'mouseup' || evt.type == 'touchstart') {
        this._scrollingStarted = false;
        this._scrollingCompleteDispatched = false;
      }
    }

    if (evt.type == 'scroll' && evt.target == this._node) {

      var scrollSize = (this._orientation == 'horizontal' ? evt.target.scrollWidth : evt.target.scrollHeight);
      var scrollFront = (this._orientation == 'horizontal' ? evt.target.scrollLeft : evt.target.scrollTop);
      var clientSize = (this._orientation == 'horizontal' ? evt.target.clientWidth : evt.target.clientHeight);
      if (scrollSize - (scrollFront + clientSize) <= 0) {
        if (!this._scrollingCompleteDispatched) {
          this._scrollingCompleteDispatched = true;
          
          evt = new createjs.Event('scrollEnd', true);
          this.dispatchEvent(evt);
         
        }
      }
      if (!this._scrollingStarted) {
        this._scrollingStarted = true;

        evt = new createjs.Event('scrollStart', true);
        this.dispatchEvent(evt);
      }
    }

    if (evt.type == 'mousewheel') {
      this._scrollingStarted = false;
      this._scrollingCompleteDispatched = false;
    }
  };


  /**
   * Determines lanes, margin, unit-tile size, and maximum tile scale.
   */ 
  p._determineProperties = function() {

    //determine absolute lane size INSIDE the scrollbars using clientWidth/clientHeight
    if (this._orientation == 'horizontal') {
      this._laneSizeAbsolute = this._node.clientHeight;

      //subtract 1 so lowest 1px tile borders show within viewport since there is no bottom margin
      this._laneSizeAbsolute -= AOLCT.Tile.borderSize;
    } else {

      this._laneSizeAbsolute = this._node.clientWidth;
    }

    //determine the tile margin based on the absolute width/height of all lanes
    this._tileMargin = this._calculateTileMargin(this._laneSizeAbsolute);

    if (this._overrideLaneCount) {
      this._laneCount = this._overrideLaneCount;

      this._unitSize =  this._calculateTileUnitSize(
                            this._orientation,
                            this._laneSizeAbsolute, 
                            this._laneCount, 
                            this._tileMargin
                          );
    } else {
      //loop until the tile unit size meets the minimum, 
      //or until we are at the smallest lane count
      this._laneCount = s.LANES_MAX + 1;
      do {
        this._laneCount--;

        this._unitSize =  this._calculateTileUnitSize(
                            this._orientation,
                            this._laneSizeAbsolute, 
                            this._laneCount, 
                            this._tileMargin
                          );
        
      } while (this._unitSize < this.TILE_UNIT_SIZE_MIN && this._laneCount > s.LANES_MIN);
    }

    //determine maximum tile scale
    this._maxTileScale =  this._calculateMaxTileScale(
                            this._scrollpaneSizeReduction || this._scrollpaneFinalPadding,
                            this._orientation,
                            this._width, 
                            this._height,
                            this._unitSize,
                            this._tileMargin,
                            s.LANES_MAX);
  };

  p._calculateTileMargin = function(laneSizeAbsolute) {
    return Math.max(2, Math.round(laneSizeAbsolute * 0.015));
  };

  p._calculateTileUnitSize = function(orientation, laneSizeAbsolute, laneCount, tileMargin) {
    if (orientation == 'horizontal') {
      return (laneSizeAbsolute - (tileMargin * (laneCount))) / laneCount;
    } else {
      return (laneSizeAbsolute - (tileMargin * (laneCount - 1))) / laneCount;
    }
  };

  /**
   * Sets the tile pattern scale limit based on absolute tile unit size and the
   * currently visible area, but no more than the maximum number of lanes.
   *
   * For example, if the visible width is 100px, and tile unit size is 50px, the
   * maximum tile scale is 2 which would results in a 100x100 tile.
   */
  p._calculateMaxTileScale = function(infoBoxSize, orientation, width, height, unitSize, tileMargin, maxLanes) {
    var maxTileScale,
        maximumTileSize;

    if (this._orientation == 'horizontal') {
      maximumTileSize = Math.min(height - tileMargin * 2, width - infoBoxSize - tileMargin * 2);
    } else {
      maximumTileSize = Math.min(width - tileMargin * 2, height - infoBoxSize - tileMargin * 2);
    }

    maxTileScale = Math.min(Math.floor(maximumTileSize / unitSize), maxLanes);

    if (maxTileScale < 1) {
      maxTileScale = 1;
    }

    return maxTileScale;
  };

  p._updateTiles = function() {
    this._finalRowEdge = 0;

    if (this._tileCount > 0) {
      this._tilePatternChooser.setupForLanesAndTileCount(this._laneCount, this._tileCount, this._maxTileScale);
    }

    var i, item, tile;

    for (i = 0; i < this._tileCount; i++) {

      //get the lane, row, size for this next tile
      var tileAbstractTarget = this._tilePatternChooser.getNextTileTarget();

      this._placeTile(i, tileAbstractTarget);

      if (this._modelChanged) {
        item = this._model.getItem(i);

        tile = this._tiles[i];


        tile.setModel(
          item,
          this._modelIdFieldName, 
          this._modelImageUrlFieldName, 
          this._modelLabelFieldName);

        tile.show();
      }

      //if item is in list, flag it
      if (this._listModel) {
        if (this._listModel.contains(this._model.getItem(i))) {
          this._tiles[i].flag();

        //if not, unflag it
        } else {
          this._tiles[i].unflag();
        }
      } else {
        tile.update();
      }
    }

    //set this flag to true so tiles animate on all subsequent times:
    this._firstTilesPlaced = true;
    
    //if new products model, select and scroll to first, then begin lazy load
    if (this._modelChanged) {
      this.selectTile(0);
      this.scrollTileToTop(0, true);

      $('div.lazy').lazyload({
          container: this._node
      });
    }

    //hide any extra tiles that might have been shown before
    for (i = this._tileCount; i < this._tiles.length; i++) {
      tile = this._tiles[i];

      tile.hide();
    }
  };

  /**
   * Sizes and positions tile.
   */
  p._placeTile = function(index, tileAbstractTarget) {
    var tileAbsoluteTarget = this._convertAbstractToAbsoluteTarget(tileAbstractTarget),
        tile;

    //first, store right/bottom edge of final row in order to calculate right/bottom margin
    if (this._orientation == 'horizontal') {
      if (tileAbsoluteTarget.x + tileAbsoluteTarget.width > this._finalRowEdge) {
        this._finalRowEdge = tileAbsoluteTarget.x + tileAbsoluteTarget.width;
      }
    } else {
      if (tileAbsoluteTarget.y + tileAbsoluteTarget.height > this._finalRowEdge) {
        this._finalRowEdge = tileAbsoluteTarget.y + tileAbsoluteTarget.height;
      }
    }

    //make a new tile
    if (!this._tiles[index]) {
      tile = new AOLCT.InteractiveTile(index, this, this._tileContainer);

      this._tiles[index] = tile;

      //enable lazy load
      tile.enableLazyLoad();

    //or update the existing tile
    } else {
      tile = this._tiles[index];
    }

    tile.place(tileAbsoluteTarget, 0.25);
  };

  p._onTileSelect = function(evt) {
    if (this._selectedTile && this._selectedTile.getId() != evt.target.getId()) {
      this._selectedTile.deselect();
    }

    this._selectedTile = evt.target;

    this._selectedIndex = evt.data.selectedIndex;

    //if it's a user selection (not auto)...
    if (evt.type != 'tileAutoSelect') {

      //if the tile isn't fully in view, scroll it just enough into view:
      if (!this.isTileFullyInView(this._selectedIndex)) {
        this.scrollTileIntoInView(this._selectedIndex);
      }

      //interrupt the autoplay
      if (this._autoplayer.getIsRunning()) {
        this._autoplayer.interrupt();
      }
    }
  };

  /** 
   * Converts lane, row, size to pixel X, Y, Z, and Width, Height, 
   * based on the calculated unitSize, orientation, and tileMargin.
   */
  p._convertAbstractToAbsoluteTarget = function(tileAbstractTarget) {

    var t = tileAbstractTarget,
        m = this._tileMargin,
        u = this._unitSize,
        tileSize = u * t.size + m * (t.size - 1),
        tileAbsoluteTarget = {
          width: tileSize,
          height: tileSize
        };

    if (this._orientation == 'vertical') {
      tileAbsoluteTarget = _.extend(tileAbsoluteTarget, {
        x: t.lane * u + t.lane * m,
        y: t.row * u + (t.row + 1) * m
      });
    } else {
      tileAbsoluteTarget = _.extend(tileAbsoluteTarget, {
        x: t.row * u + t.row * m,
        y: t.lane * u + (t.lane + 1) * m
      });
    }

    //round down for PC
    tileAbsoluteTarget.x = Math.floor(tileAbsoluteTarget.x);
    tileAbsoluteTarget.y = Math.floor(tileAbsoluteTarget.y);

    return tileAbsoluteTarget;
  };

  /**
   * Sets the container so the calculated 
   * right/bottom margin is applied cross-browser.
   *
   * Adds <scrollpaneFinalPadding> to add blank space at the end of the
   * scrollpane, if the end is overlayed by an InfoBox.
   */
  p._updateTilesContainer = function() {

    var containerTarget = {
          width: 'auto',
          height: this._finalRowEdge + this._tileMargin + this._scrollpaneFinalPadding
        };

    if (this._orientation == 'horizontal') {
      containerTarget.width = containerTarget.height;
      containerTarget.height = 'auto';
    }

    TweenMax.set(this._tileContainer, containerTarget);
  };

  /**
   * If <_scrollpaneSizeReduction> is set, override using the current orientation.
   */
  p._applyScrollpaneSizeReduction = function() {

    var placement;

    //resize the scrollable make it so, but do not affect the _width and _height
    //stored so we don't affect orientation calculation.
    if (this._orientation == 'horizontal') {
      placement = {width: this._width - this._scrollpaneSizeReduction};
    } else {
      placement = {height: this._height - this._scrollpaneSizeReduction};
    }

    TweenMax.set(this._node, placement);
  };

  /**
   * If resized due to scrollbar visibility change only (not by total height
   * of items in scrollpane), dispatch a "resized" event so outside objects 
   * can resize according to this size.
   */ 
  p._checkIfResized = function() {
    if (this.getClientWidth() != this._previousClientWidth || this.getClientHeight() != this._previousClientHeight) {
      this.dispatchEvent('resized');
      this._previousClientWidth = this.getClientWidth();
      this._previousClientHeight = this.getClientHeight();
    }
  };

AOLCT.TileScrollpane = TileScrollpane;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var ProductInfoBoxScrollpane = function(productsModel, emptyMessageText, parentDisplayObj, parentNode) {
    this.init(productsModel, emptyMessageText, parentDisplayObj, parentNode);
  };

  var p = ProductInfoBoxScrollpane.prototype = new createjs.EventDispatcher();

  p.init = function(productsModel, emptyMessageText, parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._emptyMessageText = emptyMessageText;

    this._orientation = 'horizontal'; //or 'vertical'

    this._infoBoxes = [];

    this._width = 0;
    this._height = 0;

    this._setup();

    this.setModel(productsModel);
  };

  //GET/SET

  p.setModel = function(productsModel) {
    this._productsModel = productsModel;

    //subscribe to the model's "changed" event and set flag, but do not update here
    this._productsModel.addEventListener('changed', function() {

      if (this._isVisible && this._isPlaced) {
        this._modelChangedWhileHidden = false;

        if (this._productsModel.getCount() === 0) {
          this._animateRemovingAllItems();
        }
      } else {
        this._modelChangedWhileHidden = true;
      }

    }.bind(this));
  };

  /**
   * Returns width of scrollpane inside of scrollbars.
   */
  p.getClientWidth = function() {
    return this._node.clientWidth;
  };

  /**
   * Returns height of scrollpane inside of scrollbars.
   */
  p.getClientHeight = function() {
    return this._node.clientHeight;
  };

  /**
   * First place({x, y, width, height}) must be called.
   * 
   * Updates the overflow styles.
   */ 
  p.setOrientation = function(verticalOrHorizontal) {

    this._orientation = verticalOrHorizontal;

    if (this._previousOrientation != this._orientation) {
      if (this._orientation == 'vertical') {
        this._node.style.overflowX = 'hidden';
        this._node.style.overflowY = 'scroll';
      } else {
        this._node.style.overflowY = 'hidden';
        this._node.style.overflowX = 'scroll';
      }
    }
    
    this._previousOrientation = this._orientation;
  };


  //PUBLIC
  
  /**
   * Placement = {x, y, width, height}
   */
  p.place = function (placement) {

    //subtract 1px top/bottom border from placement
    placement.height -= 2;

    this._width = placement.width;
    this._height = placement.height;

    TweenMax.set(this._node, placement);

    this._isPlaced = true;
  };

  p.update = function() {
    if (this._isVisible) {
      this._updateInfoBoxes();
    }
  };

  p.show = function() {
    this._isVisible = true;
    this._node.style.display = 'block';
  };

  p.hide = function() {
    this._isVisible = false;
    this._node.style.display = 'none';
  };

  //PRIVATE

  p._setup = function() {
    this._node = AOLCT.Util.makeAbsNode('ProductInfoBoxScrollPane inertialScroll', this._parentNode);
  
    this._infoBoxesContainer = AOLCT.Util.makeAbsNode('infoBoxes', this._node);
  
    this._emptyMessageNode = AOLCT.Util.makeNode('productInfoBoxScrollPaneEmptyMessage', this._node);
    this._emptyMessageNode.innerHTML = this._emptyMessageText;

    this.addEventListener('listRemoveInList', function(evt) {
      this._animateRemovingItem(evt.data.model);
    }.bind(this));
  };

  p._scrollToOrigin = function() {
    TweenMax.to(this._node, 0.5, {scrollTop: 0, scrollLeft: 0});
  };

  p._animateRemovingItem = function(productModel) {
    var productId = productModel.title;

    var infoBox = this._infoBoxes[productId];

    TweenMax.to(infoBox._node, 0.25, {
      opacity: 0, 
      scale: 0.8,
      force3D: true,
      onComplete: this._afterRemovingItem.bind(this),
      onCompleteParams: [productId, infoBox]
    });
  };

  p._afterRemovingItem = function(productId, infoBox) {

    this._removeInfoBox(productId, infoBox);

    //update all infoboxes so they animate moving into place
    this._modelChanged = true;
    this._updateInfoBoxes();
    this._modelChanged = false;
  };

  p._animateRemovingAllItems = function() {
    var infoBoxNodes = [],
        productId;

    for (productId in this._infoBoxes) {
      infoBoxNodes.push(this._infoBoxes[productId]._node);
    }

    TweenMax.staggerTo(infoBoxNodes, 0.25, {
        opacity: 0, 
        scale: 0.8,
        force3D: true
      },
      0.15,
      this._afterRemovingAllItems.bind(this));
  };


  p._afterRemovingAllItems = function() {

    //sync to model so all infobox nodes are removed
    //and deleted from the collection
    this._modelChanged = true;
    this._updateInfoBoxes();
    this._modelChanged = false;
  };


  p._updateInfoBoxes = function() {
    
    var count = this._productsModel.getCount(),
        infoBoxMinWidth = 166, //Math.max(this._width / 3.5, 155),
        infoBoxMinHeight = 76,
        nextX = 0,
        nextY = 0,
        scrollpaneSizeChanged = false,
        infoBox,
        productModel,
        productId,
        placement,
        isNewItem,
        point,
        i;

    //hide or show the empty-message:
    TweenMax.to(this._emptyMessageNode, 0.15, {
      autoAlpha: (count === 0 ? 1 : 0)
    });

    //prevent update if size hasn't changed and if model hasn't changed
    if (this._width != this._previousWidth || this._height != this._previousHeight) {
      scrollpaneSizeChanged = true;
    }

    this._previousWidth = this._width;
    this._previousHeight = this._height;

    if (!this._modelChangedWhileHidden && !scrollpaneSizeChanged && !this._modelChanged) {
      return;
    }

    for (i = 0; i < count; i++) {

      productModel = this._productsModel.getItem(i);
      productId = productModel.title;

      //make new for this box, or find the existing one
      if (!this._infoBoxes[productId]) {
        infoBox = new AOLCT.ProductInfoBox(this._productsModel, this, this._infoBoxesContainer);
        this._infoBoxes[productId] = infoBox;

        //tell this infobox that it's displayed within the List
        infoBox.setIsDisplayedWithinList(true);

        isNewItem = true;

      } else {
        infoBox = this._infoBoxes[productId];

        infoBox.setParentNode(this._infoBoxesContainer);

        isNewItem = false;
      }

      //show it in case it was previously hidden, and so its measurements will work
      infoBox.show();

      //if the scrollpane size changed, re-set item orientation, then
      //place each at minimum size, and expand so everything fits:
      if (scrollpaneSizeChanged || isNewItem) {

        //set orientation to match scroll direction
        infoBox.setOrientation(this._orientation);

        //place the infobox at minimum size
        if (this._orientation == 'horizontal') {
          placement = {
            x: nextX,
            y: 0,
            width: infoBoxMinWidth,
            height: this.getClientHeight()
          };
        } else {
          placement = {
            x: 0,
            y: nextY,
            width: this.getClientWidth(),
            height: infoBoxMinHeight
          };
        }
        infoBox.place(placement);

        //set expand direction and maximum amount of the scrollpane size minus 20px for overhang
        if (this._orientation == 'horizontal') {
          infoBox.setExpandProperties('right', this._width - 20);
        } else {
          infoBox.setExpandProperties('down', this._height - 20);
        }

        //expand after setting model (see next step)
      
      //else if only items were removed, animate into place without re-expanding:
      } else {
        
        if (this._orientation == 'horizontal') {
          point = {
            x: nextX,
            y: 0
          };
        } else {
          point = {
            x: 0,
            y: nextY
          };
        }
        infoBox.move(point, 0.25);
      }

      //set the model for this item (currenty must be done after placing)
      infoBox.setModel(productModel);

      //if window size changed or new item, snap to expanded size (varied by item)
      if (scrollpaneSizeChanged || isNewItem) {
        infoBox.expand(true);
      }

      //use the expanded width or height to place the next one
      if (this._orientation == 'horizontal') {
        nextX += infoBox.getWidth() + 1;  /* add 1 for the left border so last:child border doesn't jump */
      } else {
        nextY += infoBox.getHeight();
      }
    }
    
    //hide any extra infoBoxes that might have been shown before
    for (productId in this._infoBoxes) {
      infoBox = this._infoBoxes[productId];

      if (!this._productsModel.contains(infoBox.getModel())) {
        this._removeInfoBox(productId, infoBox);
      }
    }
  };

  p._removeInfoBox = function(productId, infoBox) {
    infoBox.hide();
    infoBox.setParentNode(null);
    delete this._infoBoxes[productId];
  };


AOLCT.ProductInfoBoxScrollpane = ProductInfoBoxScrollpane;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT */

  var ListEmailer = function(productsModel, listConfig) {
    this.init(productsModel, listConfig);
  };

  var p = ListEmailer.prototype;

  p.init = function(productsModel, listConfig) {

    this._productsModel = productsModel;

    this._emailTemplateKey = listConfig.emailTemplateKey;
    this._headerLogo = listConfig.headerLogo;
    this._headerTitle = listConfig.headerTitle;
    this._brandColor = listConfig.brandColor;
    this._secondaryBrandColor = listConfig.secondaryBrandColor;
  };

  p.send = function(toAddress) {
    //update the copy of the list data based on the data currently in the model
    this.update();

    //build data to post to adtech email template service
    var data = {
      brandColor: this._brandColor,
      secondaryBrandColor: this._secondaryBrandColor,
      headerLogo: this._headerLogo,
      headerTitle: this._headerTitle,
      list: this._listData
    };
    
    //send to adtech using util function
    AOLCT.Util.sendEmail(this._emailTemplateKey, toAddress, data);
  };

  p.update = function() {
    var i, p, s, o;
    
    this._listData = [];
    
    for (i = 0; i < this._productsModel.getCount(); i++) {

      //get the product model
      p = this._productsModel.getItem(i);

      //get its social share model
      s = p.toSocialShareModel();

      //copy to object ready for emailer
      o = {
        imageUrl: p.imageUrl,
        title: p.title,
        price: p.price,
        priceQualifier: p.priceQualifier,
        description: p.description,
        clickUrl: p.clickUrl,
        facebookUrl: AOLCT.FacebookSharer.getEmailableShareUrl(s),
        twitterUrl: AOLCT.TwitterSharer.getEmailableShareUrl(s),
        pinterestUrl: AOLCT.PinterestSharer.getEmailableShareUrl(s)
      };

      //if image URL was changed to start with only // for secure and non-secure,
      //replace with http:// so the image will work in Email
      if (o.imageUrl.indexOf('//') === 0) {
        o.imageUrl = o.imageUrl.replace('//', 'http://');
      }

      this._listData.push(o);
    }
  };

AOLCT.ListEmailer = ListEmailer;
})();
/** 
 * Opens a new window to print the contents of the linked ProductsModel.
 * Tried using an iFrame to print instead of new window, but the <title> of the document
 * was ignored and instead used the <title> of the overall app.
 * 
 * For consistency with ListEmailer, we use the Outlook-2010-friendly HTML as taken from
 * email-templates/ListEmailTemplate.html with a few minor changes including image & font size.
 */

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT, _ */

  var ListPrinter = function(productsModel, listConfig) {
    this.init(productsModel, listConfig);
  };

  var p = ListPrinter.prototype;

  p.init = function(productsModel, listConfig) {

    this._productsModel = productsModel;

    this._headerLogo = listConfig.headerLogo;
    this._headerTitle = listConfig.headerTitle;
    this._brandColor = listConfig.brandColor;
    this._secondaryBrandColor = listConfig.secondaryBrandColor;

    this._setup();
  };

  p.print = function() {
    
    //build data to use for template replacement
    var data = {
      brandColor: this._brandColor,
      secondaryBrandColor: this._secondaryBrandColor,
      headerLogo: this._headerLogo,
      headerTitle: this._headerTitle,
      list: this._getListRowsHtml()
    };

    var htmlStr = this._baseTemplate(data);

    //popup window isn't the best UX, but we're unable to change the page title when printing
    //from an iframe, so lets use popup instead of iframe
    this._printWin = AOLCT.Util.popupWindow('about:blank', 300, 300);
    this._printDoc = this._printWin.document;
    /*
    if (!this._printFrame) {
      this._frameNode = AOLCT.Util.makeNode(null, this._parentNode, 'iframe');
      this._frameNode.style.display = 'none';
      this._frameNode.src = 'about:blank';

      this._printWin = this._frameNode.contentWindow;
      this._printDoc = this._printWin.document;
    }*/

    //removed for firefox support: this._printDoc.open('text/htmlreplace');
    this._printDoc.write(htmlStr);
    this._printDoc.close();
    
    this._printWin.focus();

    //print after delay so page can render
    setTimeout(function() {
      this._printWin.print();
      this._printWin.close();
    }.bind(this), 250);
  };

  /**
   * Using underscore.js templating so we can easily match the same django template server side
   */
  p._setup = function() {
    AOLCT.Util.initUnderscoreMustacheTemplate();

    this._baseTemplate = _.template(
      '<!DOCTYPE html>' + 
      '<html><head><title>{{ headerTitle }}</title></head>' + 
      '<body style="margin: 0px; padding: 0px;">' + 
      '<table width="100%" cellspacing="0" cellpadding="0">' +
      '<tr>' +
      '  <td style="padding: 10px;">' +
      '      <img src="{{ headerLogo }}" height="40"/>' +
      '  </td>' +
      '  <td valign="middle" align="right" style="padding: 10px; padding-left: 0px; font: bold 18pt sans-serif; color: red; color: {{ secondaryBrandColor }};">{{ headerTitle }}</td>' +
      '</tr>' +
      '</table>' + 
      '{{ list }}' + 
      '</body></html>');

    this._rowTemplate = _.template(
      '<div style="page-break-inside:avoid;">' + 
      ' <!-- grey box around row -->' +
      ' <div style="border: solid #DDDDDD; border-width: {{ borderWidthStyle }};">' +
      '  <table border="0" cellpadding="0" cellspacing="0">' +
      '  <tr>' +
      '    <!-- white row -->' +
      '    <td width="80" bgcolor="#FFFFFF" style="padding: 10px;" valign="top">' +
      '      <!-- product image -->' +
      '      <table border="0" cellpadding="0" cellspacing="0">' +
      '      <tr>' +
      '        <td width="80" height="80" align="center" valign="middle" style="border: 1px solid #DDDDDD;"><img width="80" src="{{ imageUrl }}" /></td>' +
      '      </tr>' +
      '      </table>' +
      '    </td>' +
      '    <td valign="top" bgcolor="#FFFFFF" style="padding: 10px 10px 10px 0px;" width="100%">' +
      '      <!-- product title/price/description -->' +
      '      <table border="0" width="100%" cellspacing="0" cellpadding="0">' +
      '      <tr>' +
      '        <td>' +
      '          <div style="font: bold 10pt sans-serif; ">{{ title }}</div>' +
      '          <div style="font: 10pt sans-serif; color: red; color: {{ secondaryBrandColor }};">{{ price }} {{ priceQualifier }}</div>' +
      '          <div style="font: 8pt sans-serif;">{{ description }}</div>' +
      '          <div style="font: 8pt sans-serif; color: #EEEEEE;">{{ clickUrl }}</div>' +
      '        </td>' +
      '      </tr>' +
      '      </table>' +
      '    </td>' +
      '  </tr>' + 
      '  </table>' + 
      ' </div>' +
      '</div>');
  };

  p._getListRowsHtml = function() {
    var arr = [],
        count = this._productsModel.getCount(),
        dataObj,
        p;

    for (var i = 0; i < count; i++) {

      p = this._productsModel.getItem(i);

      dataObj = {
        imageUrl: p.imageUrl,
        title: p.title,
        price: p.price,
        priceQualifier: p.priceQualifier,
        description: p.description,
        clickUrl: p.clickUrl,
        secondaryBrandColor: this._secondaryBrandColor,
        borderWidthStyle: '5px 10px'
      };

      //adjust top and bottom borders
      if (i === 0) {
        dataObj.borderWidthStyle = '10px 10px 5px 10px';
      } else if (i == count - 1) {
        dataObj.borderWidthStyle = '5px 10px 10px 10px';
      }

      arr.push( this._rowTemplate(dataObj) );
    }

    return arr.join('');
  };

AOLCT.ListPrinter = ListPrinter;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, AOLCT */

  /**
   * This shows either an Add or a Remove button, depending on weather the bound
   * ProductModel is already in the bound list (ProductsModel) or not.
   */

  var ListAddRemoveButton = function(buttonType, parentDisplayObj, parentNode) {
    this.init(buttonType, parentDisplayObj, parentNode);
  };

  var p = ListAddRemoveButton.prototype = new createjs.EventDispatcher();

  p.init = function(buttonType, parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._buttonType = buttonType;
    this._setup();

    this._isAddVisible = true;
  };

  //GET/SET

  /**
   * @param productModel - an AOLCT.ProductModel
   */
  p.setProductModel = function(productModel) {
    this._productModel = productModel;

    this.update();
  };

  /**
   * @param productsModel - an AOLCT.ProductsModel
   */
  p.setListModel = function(productsModel) {
    this._listModel = productsModel;

    //subscribe to the model's "changed" event
    this._listModel.addEventListener('changed', this.update.bind(this));

    this.update();
  };

  p.getX = function() {
    return this._addButton.getX();
  };

  p.getY = function() {
    return this._addButton.getY();
  };

  p.getWidth = function() {
    if (this._isAddVisible) {
      return this._addButton.getWidth();
    } else {
      return this._removeButton.getWidth();
    }
  };

  p.getHeight = function() {
    return this._addButton.offsetHeight;
  };


  //PUBLIC

  /**
   * @param point {x, y, z}
   */
  p.move = function(point) {

    this._addButton.move(point);
    this._removeButton.move(point);
  };

  /**
   * If productModel is in the list, show Remove button, otherwise show Add button.
   */
  p.update = function() {
    if (this._listModel) {

      var changed = false;

      if (this._listModel.contains(this._productModel)) {

        if (this._isAddVisible) {
          this._addButton.hide();
          this._removeButton.show();

          this._isAddVisible = false;
          changed = true;
        }

      } else {

        if (!this._isAddVisible) {
          this._addButton.show();
          this._removeButton.hide();

          this._isAddVisible = true;
          changed = true;
        }
      }

      if (changed) {
        //notify parent so it can make UI adjustments
        this.dispatchEvent('resized');
      }
    }
  };

  p.enable = function() {
    this._addButton.enable();
    this._removeButton.enable();
  };

  p.disable = function() {
    this._addButton.disable();
    this._removeButton.disable();
  };

  //PRIVATE
  p._setup = function() {
    this._addButton = new AOLCT.Button(this._buttonType, 'Add', AOLCT.ListIcon, this, this._parentNode);
    this._removeButton = new AOLCT.Button(this._buttonType, 'Remove', AOLCT.ListIcon, this, this._parentNode);

    this._addButton.addEventListener('click', this._onAddClick.bind(this));
    this._removeButton.addEventListener('click', this._onRemoveClick.bind(this));

    this._removeButton.hide();
  };

  p._onAddClick = function() {
    this._listModel.addItem(this._productModel);
    this._listModel.changed();

    this.update();

    var evt = new createjs.Event('listAdd', true);
    evt.data = {
      model: this._productModel
    };
    this.dispatchEvent(evt);
  };

  p._onRemoveClick = function() {
    this._listModel.removeItem(this._productModel);
    this._listModel.changed();

    this.update();

    var evt = new createjs.Event('listRemove', true);
    evt.data = {
      model: this._productModel
    };
    this.dispatchEvent(evt);
  };

AOLCT.ListAddRemoveButton = ListAddRemoveButton;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, AOLCT */

  /**
   * This shows a LIST (X) button, and syncs it with the boud list (ProductsModel).
   */

  var ListButton = function(buttonType, listModel, parentDisplayObj, parentNode) {
    this.init.apply(this, arguments);
  };

  var p = ListButton.prototype = new createjs.EventDispatcher();

  p.init = function(buttonType, listModel, parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._buttonType = buttonType;
    this._setup();

    this.setListModel(listModel);

    this._isAddVisible = true;
  };

  //GET/SET

  /**
   * @param productsModel - an AOLCT.ProductsModel
   */
  p.setListModel = function(productsModel) {
    this._listModel = productsModel;

    //subscribe to the model's "changed" event
    this._listModel.addEventListener('changed', this.update.bind(this)); 

    this.update();
  };

  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  p.getWidth = function() {
    return this._button.getWidth();
  };

  p.getHeight = function() {
    return this._button.getHeight();
  };


  //PUBLIC

  /**
   * @param point {x, y, z}
   */
  p.move = function(point) {

    this._button.move(point);
  };

  /**
   * If productModel is in the list, show Remove button, otherwise show Add button.
   */
  p.update = function() {
    var count = this._listModel.getCount();

    if (count != this._listCount) {
      this._listCount = count;

      this._button.setLabel('LIST (' + this._listCount + ')');

      //notify parent so it can make UI adjustments
      this.dispatchEvent('resized');
    }
  };

  p.enable = function() {
    this._button.enable();
  };

  p.disable = function() {
    this._button.disable();
  };

  //PRIVATE
  p._setup = function() {
    this._button = new AOLCT.Button(this._buttonType, 'LIST (0)', AOLCT.ListIcon, this, this._parentNode);

    this._button.addEventListener('click', this._onClick.bind(this));
  };

  p._onClick = function() {
    var evt = new createjs.Event('showList', true);
    this.dispatchEvent(evt);
  };

AOLCT.ListButton = ListButton;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var ListHeader = function(listModel, parentDisplayObj, parentNode) {
    this._init(listModel, parentDisplayObj, parentNode);
  };

  var p = ListHeader.prototype = new createjs.EventDispatcher();

  p._init = function(listModel, parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._setup();

    this.setModel(listModel);
  };

  //PUBLIC

  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  p.getWidth = function() {
    return this._width;
  };

  p.getHeight = function() {
    return this._height;
  };

  p.setModel = function(listModel) {
    this._listModel = listModel;

    //subscribe to the model's "changed" event
    this._listModel.addEventListener('changed', this.update.bind(this));
  };

  /**
   * Placement = {x, y, width, height}
   */
  p.place = function(placement) {
    this._width = placement.width;
    this._height = placement.height;

    TweenMax.set(this._node, placement);

    this._placeClearButton();
  };

  p.update = function() {
    if (this._isVisible) {
      var count = this._listModel.getCount();

      this._labelNode.innerHTML = 'MY LIST (' + count + ')';
    
      if (count > 0) {
        this._clearButton.enable();
      } else {
        this._clearButton.disable();
      }
    }
  };

  p.show = function() {
    this._isVisible = true;
    this._node.style.display = 'block';
  };

  p.hide = function() {
    this._isVisible = false;
    this._node.style.display = 'none';
  };


  //PRIVATE

  p._setup = function() {

    this._node = AOLCT.Util.makeAbsNode('ListHeader', this._parentNode);
    
    this._titleNode = AOLCT.Util.makeAbsNode('listHeaderTitle', this._node);
    this._icon = new AOLCT.ListIcon('listHeaderIcon', this, this._titleNode);
    this._labelNode = AOLCT.Util.makeNode('listHeaderLabel', this._titleNode);

    this._backButton = new AOLCT.BackButton(this, this._node);

    this._clearButton = new AOLCT.Button(AOLCT.Button.TEXTONLY, 'Clear All', null, this, this._node);

    this._makeInteractive();
  };

  p._makeInteractive = function() {

    this._backButton.addEventListener('click', function() {
      this.dispatchEvent('listBackClicked');
    }.bind(this));

    this._clearButton.addEventListener('click', function() {
      
      this._listModel.removeAll();
      this._listModel.changed();

      //bubble this event for reporting
      var evt = new createjs.Event('listClear', true);
      this.dispatchEvent(evt);

    }.bind(this));
  };


  p._placeLabelNode = function() {

    var point = {
      x: 0,
      y: 0
    };
    
    TweenMax.set(this._labelNode, point);
  };


  p._placeClearButton = function() {

    var point = {
      x: this._width - this._clearButton.getWidth(),
      y: 0
    };
    this._clearButton.move(point);
  };

AOLCT.ListHeader = ListHeader;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var ListFooter = function(productsModel, listConfig, parentDisplayObj, parentNode) {
    this._init(productsModel, listConfig, parentDisplayObj, parentNode);
  };

  var p = ListFooter.prototype = new createjs.EventDispatcher();

  p._init = function(productsModel, listConfig, parentDisplayObj, parentNode) {

    this.parent = parentDisplayObj;
    this._parentNode = parentNode;

    this._configure(listConfig);

    this.setModel(productsModel);

    this._setup();
  };

  //PUBLIC

  p.getX = function() {
    return this._x;
  };

  p.getY = function() {
    return this._y;
  };

  p.getWidth = function() {
    return this._width;
  };

  p.getHeight = function() {
    return this._height;
  };

  p.setModel = function(productsModel) {
    this._productsModel = productsModel;

    //subscribe to the model's "changed" event
    this._productsModel.addEventListener('changed', this.update.bind(this));
  };

  /**
   * Placement = {x, y, width, height}
   */
  p.place = function(placement) {
    this._width = placement.width;
    this._height = placement.height;

    TweenMax.set(this._node, placement);

    this._placePrintButton();
    this._placeEmailButton();
  };

  p.update = function() {
    var count = this._productsModel.getCount();

    if (count > 0) {
      
      if (this._printButton) {
        this._printButton.enable();
      }

      this._emailButton.enable();
    
    } else {

      if (this._printButton) {
        this._printButton.disable();
      }
      
      this._emailButton.disable();
    }
  };


  //PRIVATE

  p._configure = function(listConfig) {
    this._listConfig = {
      adtechEmailTemplateKey: 'da1ed4d56a9e0fe88c13c740f343e777c0596183',
      fromAddress:  'shop@pictela.com',
      logoUrl:      'http://portal.aolcdn.com/p5/forms/5222/375a2d2b-3bdb-4497-ad07-de917e4a1b47.png',
      headerTitle:  'Shopping List'
    };

    //override with actual config values:
    if (listConfig) {
      this._listConfig = listConfig;
    }
  };

  p._setup = function() {

    this._node = AOLCT.Util.makeAbsNode('ListFooter', this._parentNode);

    this._emailButton = new AOLCT.Button(AOLCT.Button.SECONDARY, 'EMAIL LIST', AOLCT.EmailIcon, this, this._node);

    if (!AOLCT.Util.isTouchDevice()) {
      this._printButton = new AOLCT.Button(AOLCT.Button.SECONDARY, 'PRINT LIST', AOLCT.PrintIcon, this, this._node);
    }

    this._makeInteractive();
  };

  p._makeInteractive = function() {
    this._emailButton.addEventListener('click', this._onEmailButtonClick.bind(this));

    if (this._printButton) {
      this._printButton.addEventListener('click', this._onPrintButtonClick.bind(this));
    }
  };

  p._onEmailButtonClick = function() {
    if (!this._emailModalDialog) {
      
      this._emailModalDialog = new AOLCT.EmailModalDialog(this, 'Email List', this._listConfig.fromAddress);

      this._emailModalDialog.addEventListener('validEmailEnter', this._onValidEmailEnter.bind(this));
    }

    this._emailModalDialog.show();
  };

  p._onValidEmailEnter = function(evt) {
    var toAddress = evt.data.emailAddress;

    //cancel this event since no further bubbling is needed
    evt.stopPropagation();

    //dispatch event for report tracking
    evt = new createjs.Event('listEmail', true);
    this.dispatchEvent(evt);

    //send the email
    if (!this._listEmailer) {
      this._listEmailer = new AOLCT.ListEmailer(this._productsModel, this._listConfig);
    }
    this._listEmailer.send(toAddress);
  };

  p._onPrintButtonClick = function() {

    if (!this._listPrinter) {
      this._listPrinter = new AOLCT.ListPrinter(this._productsModel, this._listConfig);
    }

    this._listPrinter.print();

    //dispatch event for report tracking
    var evt = new createjs.Event('listPrint', true);
    this.dispatchEvent(evt);
  };

  p._placePrintButton = function() {

    if (this._printButton) {
      var point = {
        x: this._width - this._printButton.getWidth(),
        y: 5
      };
      this._printButton.move(point);
    }
  };

  p._placeEmailButton = function() {
    
    var point;
    
    if (this._printButton) {
      point = {
        x: this._printButton.getX() - 5 - this._emailButton.getWidth(),
        y: 5
      };
    
    } else {
      point = {
        x: this._width - this._emailButton.getWidth(),
        y: 5
      };
    }

    this._emailButton.move(point);
  };

AOLCT.ListFooter = ListFooter;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var ListView = function(listModel, listConfig, parentDisplayObj, parentNode) {
    this.init(listModel, listConfig, parentDisplayObj, parentNode);
  };

  var p = ListView.prototype = new createjs.EventDispatcher();

  p.init = function(listModel, listConfig, parentDisplayObj, parentNode) {
    
    this.parent = parentDisplayObj;
    this._parentNode = parentNode || document.getElementById('appWrapper') || document.body;

    this._listConfig = listConfig;

    this.setModel(listModel);

    this._setup();

    this.hide();
  };

  //PUBLIC

  p.setModel = function(listModel) {

    this._listModel = listModel;

    //if model changes to 0 items while visible, automatically hide after half a sec
    this._listModel.addEventListener('changed', function() {
      
      if (this._listModel.getCount() === 0 && this._isVisible) {
        setTimeout(this._dispatchHideListEvent.bind(this), 1000);
      }

    }.bind(this));
  };

  p.show = function() {
    this._isVisible = true;
    this._node.style.display = 'block';
    this._windowNode.style.display = 'block';
    this._lightboxNode.style.display = 'block';

    //show these child elements so they resume syncing with the model
    this._header.show();
    this._scrollpane.show();
  };

  p.hide = function() {
    this._isVisible = false;
    this._node.style.display = 'none';
    this._windowNode.style.display = 'none';
    this._lightboxNode.style.display = 'none';

    //show these child elements so they resume syncing with the model
    this._header.hide();
    this._scrollpane.hide();
  };

  p.animateIn = function(onComplete) {

    //immediately snap to right edge (TweenMax.from has a delay so can't do that)
    TweenMax.set(this._windowNode, {x: '+=' + this._width});

    //animate to left
    TweenMax.to(this._windowNode, 0.5, {
      x: '-=' + this._width,
      onComplete: onComplete
    });

    //animate lightbox opacity:
    TweenMax.to(this._lightboxNode, 0.5, {
      opacity: 1
    });
  };

  p.animateOut = function(onComplete) {

    //animate to right
    TweenMax.to(this._windowNode, 0.5, {
      x: '+=' + this._width,
      delay: 0.15, /* delay needed for iOS so it doesn't click through to the category selectbox */
      onComplete: onComplete
    });

    //animate lightbox opacity:
    TweenMax.to(this._lightboxNode, 0.5, {
      opacity: 0
    });
  };


  //PRIVATE

  p._setup = function() {

    //holds the lightboxNode and windowNode
    this._node = AOLCT.Util.makeAbsNode('ListView', this._parentNode);
    this._setupLightBox();

    //holds the header, footer, scrollpane which animate in together
    this._windowNode = AOLCT.Util.makeAbsNode('listViewWindow', this._node);
    this._setupHeader();
    this._setupFooter();
    this._setupScrollpane();
  };

  /* lightbox looks nice but also is needed for iOS so the category selectbox doesn't open
     when clicking on the back button. */ 
  p._setupLightBox = function() {
    this._lightboxNode = AOLCT.Util.makeAbsNode('listViewLightbox', this._node);

    //lightbox node handler (could replace with class)
    if (AOLCT.Util.isTouchDevice()) {
      this._lightboxNode.addEventListener('touchend', this._onLightboxPress.bind(this));
    } else {
      this._lightboxNode.addEventListener('click', this._onLightboxPress.bind(this));
    }
  };

  p._onLightboxPress = function() {
    //nothing to do other then prevent clickthroughs
  };

  p._setupHeader = function() {
  
    this._header = new AOLCT.ListHeader(this._listModel, this, this._windowNode);

    this._header.addEventListener('listBackClicked', function() {

      this._dispatchHideListEvent();

    }.bind(this));
  };

  p._dispatchHideListEvent = function() {
    var evt = new createjs.Event('hideList', true);
    this.dispatchEvent(evt);
  };

  p._setupFooter = function() {
  
    this._footer = new AOLCT.ListFooter(this._listModel, this._listConfig, this, this._windowNode);
  };

  p._setupScrollpane = function() {
    
    this._scrollpane = new AOLCT.ProductInfoBoxScrollpane(
                            this._listModel, 
                            this._listConfig.emptyMessage,
                            this, 
                            this._windowNode);
  };

  p._determineOrientation = function() {
    var widthHeightRatio = this._width / this._height;

    if (widthHeightRatio < 1.5) {
      this._orientation = 'vertical';
    } else {
      this._orientation = 'horizontal';
    }
  };

  p.place = function(boundingBox) {
    this._width = boundingBox.width;
    this._height = boundingBox.height;

    this._determineOrientation();

    this._placeLightbox();
    this._placeBackground();
    this._placeHeader();
    this._placeFooter();
    this._placeScrollpane();

    this.update();
  };

  p.update = function() {
    this._header.update();
    this._footer.update();
    this._scrollpane.update();
  };

  p._placeLightbox = function() {

    var placement = {
      x: 0, y: 0,
      width: this._width, height: this._height
    };

    TweenMax.set(this._lightboxNode, placement);
  };

  p._placeBackground = function() {

    var placement = {
      x: 0, y: 0,
      width: this._width, height: this._height
    };

    TweenMax.set(this._windowNode, placement);
  };

  p._placeHeader = function() {
    
    this._headerHeight = 25;

    var placement = {
          x: 0,
          y: 0,
          width: this._width,
          height: this._headerHeight
        };

    this._header.place(placement);
  };

  p._placeFooter = function() {
    
    this._footerHeight = 25;

    var placement = {
          x: 0,
          y: this._height - this._footerHeight,
          width: this._width,
          height: this._footerHeight
        };

    this._footer.place(placement);
  };

  p._placeScrollpane = function() {
    var placement = {
          x: 0,
          y: this._headerHeight,
          width: this._width,
          height: this._height - this._headerHeight - this._footerHeight
        };

    this._scrollpane.setOrientation(this._orientation);

    this._scrollpane.place(placement);
  };


AOLCT.ListView = ListView;
})();

this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, AOLCT, ADTECH */

  var ItemAndPriceReporting = function(config, appNum, app) {
    this.init(config, appNum, app);
  };

  var p = ItemAndPriceReporting.prototype = new createjs.EventDispatcher();

  p.init = function(config, appNum, app) {

    this._config = config;
    this._appNum = appNum;
    this._app = app;
    this.scrollEventLimitIndex = 0;
    this.preventScrollEvent = false;

    //init specialEvent reporting until Pictela adds that capability into standard reporting
    AOLCT.Util.initSpecialEvent();

    this._contentGroupName = 'App ' + this._appNum + ' - Item and Price';

    //contentEvents
    this._eventsLabelsMap = {
      categoryChange:  'Category Selected',
      locationChange:  'Location Change',

      tileSelect:      'Item Select',
      tileLongHover:   'Item Hover',
      scrollStart:     'Scroll',
      scrollEnd:       'Scroll Complete',

      infoBoxExpand:   'Info Box Expand',
      infoBoxCollapse: 'Info Box Collapse',
      listAdd:         'Item Added',
      listRemove:      'Item Removed',
      listRemoveInList:'Item Removed on My List',

      shareOpen:       'Share Open',
      shareClose:      'Share Closed',
      facebookShare:   'Share on Facebook',
      twitterShare:    'Share on Twitter',
      pinterestShare:  'Share on Pinterest',

      showList:        'List Open',
      hideList:        'List Closed',
      listEmail:       'List Emailed',
      listPrint:       'List Printed',
      listClear:       'List Cleared',

      error:           'Error Displayed'
    };

    this._handleInteractionEvents();

    //dynamicClicks for ShopLoal
    if (this._config.api == 'ShopLocal') {

      this._dynamicClickLabelsMap = {
        infoBoxClickthrough: 'Buy Now',
        infoBoxClickthroughInList: 'Buy Now on My List'
      };

      this._handleDynamicClickEvents();

    //contentClicks for CustomFeed
    } else if (this._config.api == 'CustomProductFeed') {

      this._customFeedContentClickSpecialEventsMap = {
        infoBoxClickthrough: 'Buy Now',
        infoBoxClickthroughInList: 'Buy Now on My List'
      };

      this._handleContentClickEvents();
    }
  };

  p.setCustomFeedClicksContentCollection = function(clicksContentCollection) {
    this._clicksContentCollection = clicksContentCollection;
  };

  //PRIVATE




  /**
   * Listen for the bubbling events defined in _eventsLabelsMap, and
   * report using ADTECH.event with this app number and name, followed by
   * the friendly name defined in _eventsLabelsMap.
   */
  p._handleInteractionEvents = function() {

    for (var eventName in this._eventsLabelsMap) {
      this._app.addEventListener(eventName, this._handleEvent.bind(this));
    }
  };

  p.cancelPreventScrollEvent = function() {
    this.preventScrollEvent = false;
  };
  p._handleEvent = function(evt) {
    //console.log("EVENT:",evt.type);
    if (evt.type == 'scrollStart') {
      //console.log("this.scrollEventLimitIndex:", this.scrollEventLimitIndex,"this.preventScrollEvent", this.preventScrollEvent, this);
       clearTimeout(this.scrollEventLimitIndex);
       this.scrollEventLimitIndex = setTimeout(this.cancelPreventScrollEvent.bind(this), 250);

      if(this.preventScrollEvent) {
        return;
      }
      this.preventScrollEvent = true;
    }
    
    var eventName = this._eventsLabelsMap[evt.type];

    //if any events include a ProductModel with a title property, include that in the event and
    //until Pictela adds this into core events, use specialEvent to pass that data to alternate reporting.
    if (evt.data) {

      var eventData = {},
          d = evt.data;

      if (d.model && d.model.title) {
        eventData.item = d.model.title;

      } else if (d.message) {
        eventData.message = d.message;

      } else if (d.location) {
        eventData.origin = d.location;
      }

      if (ADTECH.specialEvent) {
        ADTECH.specialEvent(this._contentGroupName + ': ' + eventName, eventData);
        //console.log('ADTECH.specialEvent', eventName, eventData);
      }
      ADTECH.contentEvent(this._contentGroupName, eventName, null, eventData);
    
    //otherwise track normal event
    } else {
      ADTECH.contentEvent(this._contentGroupName, eventName);
    }
  };


  /**
   * Listen for the bubbling events defined in _dynamicClickEventsLabelsMap, and
   * clickthrough using ADTECH.dynamicClick with this app number and name, followed by
   * the friendly name defined in _eventsLabelsMap.
   *
   * Clicks to the event property: evt.data.clickUrl
   */
  p._handleDynamicClickEvents = function() {

    for (var eventName in this._dynamicClickLabelsMap) {
      this._app.addEventListener(eventName, this._handleDynamicClick.bind(this));
    }
  };

  p._handleDynamicClick = function(evt) {

    var clickName = this._contentGroupName + ': ' + this._dynamicClickLabelsMap[evt.type],
        clickUrl = evt.data.clickUrl;

    ADTECH.dynamicClick(clickName, clickUrl);

    this._specialEventForClickthrough(clickName, evt);
  };

  p._specialEventForClickthrough = function(clickName, evt) {
    //if any events include a ProductModel with a title property, include that in the event and
    //until Pictela adds this into core dynamicClick, use specialEvent to pass that data to alternate reporting.
    if (evt.data && evt.data.model) {

      var m = evt.data.model,
          clickData = {clickURL: m.clickUrl};

      if (m.title) {
        clickData.item = evt.data.model.title;
      }

      if (ADTECH.specialEvent) {
        ADTECH.specialEvent(clickName, clickData);
        //console.log('ADTECH.specialEvent', clickName, clickData);
      }
    }
  };


  //ContentClick is currently only used for CustomProductFeed, not ShopLocal.

  p._handleContentClickEvents = function() {

    for (var eventName in this._customFeedContentClickSpecialEventsMap) {
      this._app.addEventListener(eventName, this._handleContentClick.bind(this));
    }
  };

  p._handleContentClick = function(evt) {

    var itemIndex = evt.data.model.index,
        categoryIndex = evt.data.model.categoryIndex,
        clicksContentGroupName = this._contentGroupName + ' CustomProductFeed Clicks';

    var clicksContentGroupForCategory = this._clicksContentCollection[categoryIndex];

    ADTECH.contentClick(clicksContentGroupName, 'item' + (itemIndex + 1) + 'ClickUrl', clicksContentGroupForCategory);

    //console.log('ADTECH.contentEvent(', clicksContentGroupName, 'item' + (itemIndex + 1) + 'ClickUrl', clicksContentGroupForCategory, ')');

    //report special event the same way as dynamicClick, so we can differentiate between click from list or not
    var clickName = this._contentGroupName + ': ' + this._customFeedContentClickSpecialEventsMap[evt.type];
    this._specialEventForClickthrough(clickName, evt);
  };

AOLCT.ItemAndPriceReporting = ItemAndPriceReporting;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, TweenMax, AOLCT */

  var ItemAndPriceHeader = function(config, categoriesModel, productsModel, listModel, parentDisplayObj, parentNode) {
    this.init.apply(this, arguments);
  };

  var p = ItemAndPriceHeader.prototype = new AOLCT.DisplayObject();

  p.super_init = p.init;
  p.init = function(config, categoriesModel, productsModel, listModel, parentDisplayObj, parentNode) {

    this.super_init(parentDisplayObj, parentNode);
    
    this._config = config;

    this._categoriesModel = categoriesModel;
    this._productsModel = productsModel;
    this._listModel = listModel;

    this._setup();
  };

  //PUBLIC

  p.setLocation = function(location) {
    if (this._locationInput) {
      this._locationInput.setValue(location);
    }
  };

  p.setTextTip = function(textTip) {
    if (this._locationInput) {
      this._locationInput.setPlaceholder(textTip);
    }
  };

  p.show = function() {

    this._isVisible = true;
    this._node.style.display = 'block';
  };

  p.hide = function() {

    this._isVisible = false;
    this._node.style.display = 'none';
  };

  /**
   * Placement = {x, y, width, height}
   */
  p.super_place = p.place;
  p.place = function(placement) {
    this.super_place(placement);

    this._placeCategoriesInput();

    if (this._locationInput) {
      this._placeLocationInput();
    }

    this._placeListButton();
  };

  p.handleCategoriesModelChange = function() {
    this._categorySelectInput.setModel(this._categoriesModel, 'id', 'name');
  };

  /**
   * If there are no products, turn the zipcode field red, otherwise normal.
   */
  p.handleProductsModelChange = function() {

    if (this._locationInput) {
      if (this._productsModel.getCount() === 0) {
        this._locationInput.flag();
      } else {
        this._locationInput.unflag();
      }
    }
  };

  //PRIVATE

  p._setup = function() {

    this._node = AOLCT.Util.makeAbsNode('ItemAndPriceHeader', this._parentNode);

    if (this._config.locationFieldEnabled) {
      this._locationInput = new AOLCT.LocationInput(this, this._node);
      //...dispatches its own locationChanged bubbling event which is handled by the app class

      this.setLocation(this._config.defaultLocation);

      this.setTextTip(this._config.locationTextTip);
    }

    //if no categories model specified, don't draw the category input
    if (this._categoriesModel) {
      this._categorySelectInput = new AOLCT.SelectInput(this, this._node);
      this._categorySelectInput.addEventListener('change', function(evt) {
        var categoryChangeEvent = new createjs.Event('categoryChange', true);
        categoryChangeEvent.data = {
          categoryId: evt.data.selectedValue
        };
        this.dispatchEvent(categoryChangeEvent);
      }.bind(this));
    }

    
    this._listButton = new AOLCT.ListButton(AOLCT.Button.PRIMARY, this._listModel, this, this._node);

    //when label changes, re-place so it remains right-aligned
    this._listButton.addEventListener('resized', function() {
      this._placeListButton();
    }.bind(this));
  };

  p._placeCategoriesInput = function() {

    if (!this._categorySelectInput) {
      return;
    }
    
    var boundingBox = {
      x: 0,
      y: 0,
      width: (this._locationInput ? 98 : 160)
    };

    this._categorySelectInput.setMaxExpandSize(
      this._locationInput ? boundingBox.width + 50 : boundingBox.width - 2,
      142);

    this._categoriesWidth = boundingBox.width;

    this._categorySelectInput.place(boundingBox);
  };

  p._placeLocationInput = function() {
    var point = {
      x: (this._categorySelectInput ? this._categoriesWidth + 8 : 0),
      y: 0
    };
    this._locationInput.move(point);
  };

  p._placeListButton = function() {
    var buttonWidth = this._listButton.getWidth();

    var point = {
      x: this._width - buttonWidth,
      y: 0
    };
    this._listButton.move(point);
  };

AOLCT.ItemAndPriceHeader = ItemAndPriceHeader;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global createjs, _, AOLCT, TweenMax */

  var ItemAndPriceAppView = function(config, categoriesModel, productsModel, listModel, parentDisplayObject, parentNode) {
    this.init.apply(this, arguments);
  };

  var p = ItemAndPriceAppView.prototype = new createjs.EventDispatcher();

  p.init = function(config, categoriesModel, productsModel, listModel, parentDisplayObject, parentNode) {
    
    this._config = config;
    this._categoriesModel = categoriesModel;
    this._productsModel = productsModel;
    
    this._listModel = listModel;

    this.parent = parentDisplayObject;
    this._parentNode = parentNode;

    this._setup();

    //wait until place() is called by parent's 
    //AppBase so the view knows its initial size and position.
  };

  //PUBLIC

  p.handleCategoriesModelChange = function() {
    this._header.handleCategoriesModelChange();
  };

  p.handleProductsModelChange = function() {
    this._header.handleProductsModelChange();

    //only update the scrollpane if > 0 products
    if (this._productsModel.getCount() > 0) {
      this._scrollpane.handleModelChange();

      //if autoplay is enabled, start it the first time only
      var autoplayer = this._scrollpane.getAutoplayer();
      
      if (this._config.autoplayEnabled && !autoplayer.getDidStart()) {
        autoplayer.start(
          this._config.autoplayDuration,
          this._config.autoplayInterval);

        //the autoplayer automatically stops on body interaction, and
        //on body on-unload.
      }
    }
  };

  p.setLocation = function(location) {
    this._header.setLocation(location);
  };

  p.show = function() {

    this._isVisible = true;
    this._node.style.display = 'block';

    //show these child elements so they stop syncing with the model
    this._header.show();
    this._scrollpane.show();

    this.update();
  };

  p.hide = function() {

    this._isVisible = false;
    this._node.style.display = 'none';

    //hide these child elements so they stop syncing with the model
    this._header.hide();
    this._scrollpane.hide();
  };

  p.place = function(placement) {
    this._width = placement.width;
    this._height = placement.height;

    this.update();
  };

  p.update = function() {
    this._determineOrientation();
    this._placeHeader();
    this._placeScrollpane();
    this._placeInfoBox();
    this._updateScrollpaneAndInfoBoxForOpacity();
    
    this._scrollpane.update();
  };

  p.animateOut = function() {
    if (!this.animatedOut) {
      this._xShift = this._width / 4;
      TweenMax.to(this._node, 0.5, {x: '-=' + this._xShift});

      this.animatedOut = true;
    }
  };

  p.animateIn = function() {
    if (this.animatedOut) {
      TweenMax.to(this._node, 0.5, {x: '+=' + this._xShift});

      this.animatedOut = false;
    }
  };


  //PRIVATE

  p._setup = function() {

    this._node = AOLCT.Util.makeAbsNode('ItemAndPriceAppView', this._parentNode);

    //setup the items in the main view
    this._setupScrollpane();
    this._setupInfoBox();

    //setup header last so it will have the highest zIndex by default
    this._setupHeader();
  };

  p._setupListView = function() {
  };

  p._setupHeader = function() {
    this._header = new AOLCT.ItemAndPriceHeader(
                        this._config,
                        this._categoriesModel,
                        this._productsModel,
                        this._listModel,
                        this,
                        this._node);
  };

  p._setupScrollpane = function() {
    
    this._scrollpane = new AOLCT.TileScrollpane(this, this._node);

    this._scrollpane.setLaneCount(this._config.tileLanes);

    this._scrollpane.setModel(this._productsModel, 'id', 'imageUrl', 'price');

    //link to list model so tiles can indicate whether they are in the list or not 
    this._scrollpane.setListModel(this._listModel);
  };

  p._setupInfoBox = function() {
    this._infoBox = new AOLCT.ProductInfoBox(this._listModel, this, this._node);

    //bind tile selection to infobox update
    this._scrollpane.addEventListener('tileSelect', this._handleTileSelect.bind(this));
    this._scrollpane.addEventListener('tileAutoSelect', this._handleTileSelect.bind(this));

    //since in IE the scrollpane clientWidth/clientHeight can change,
    //when it changes re-place the infobox per scrollbar change
    this._scrollpane.addEventListener('resized', this._handleScrollpaneResize.bind(this));
  };

  p._handleTileSelect = function(evt) {
    var productIndex = evt.data.selectedIndex,
        productModel = this._productsModel.getItem(productIndex);

    this._infoBox.setModel(productModel);
  };

  p._handleScrollpaneResize = function() {
    this._placeInfoBox();
  };

  p._determineOrientation = function() {
    var widthHeightRatio = this._width / this._height;

    if (widthHeightRatio < 1.5) {
      this._orientation = 'vertical';
    } else {
      this._orientation = 'horizontal';
    }
  };

  /** 
   * If InfoBox is opaque, make the scrollPane extend only to the edge of the InfoBox,
   * otherwise it extends to the normal edge, but adds enough end-padding so the
   * final items can scroll into view.
   */
  p._updateScrollpaneAndInfoBoxForOpacity = function() {

    var sizeReduction = 0,
        endPadding = 0;

    if (this._infoBox.getOpacity() < 1) {
      if (this._orientation == 'horizontal') {
        endPadding = this._infoBox.getWidth();
      } else {
        endPadding = this._infoBox.getHeight();
      }
    } else {
      if (this._orientation == 'horizontal') {
        sizeReduction = this._infoBox.getWidth();
      } else {
        sizeReduction = this._infoBox.getHeight();
      }
    }

    //adjust tiles
    this._scrollpane.setSizeReductionAndPadding(sizeReduction, endPadding);

  };

  p._placeLightbox = function() {
    var target = {
      x: 0, y: 0,
      width: this._width,
      height: this._height
    };

    TweenMax.set(this._lightboxNode, target);
  };

  p._placeHeader = function() {
    
    this._headerHeight = 25;

    var headerPlacement = {
          x: 0,
          y: 0,
          width: this._width,
          height: this._headerHeight
        };

    this._header.place(headerPlacement);
  };

  p._placeScrollpane = function() {
    var scrollpanePlacement = {
          x: 0,
          y: this._headerHeight,
          width: this._width,
          height: this._height - this._headerHeight
        };

    //store a copy for use with InfoBox (copy since TweenMax.set can destroy original)
    this._scrollpanePlacement = _.clone(scrollpanePlacement);

    this._scrollpane.setOrientation(this._orientation);

    this._scrollpane.place(scrollpanePlacement);
  };

  /** 
   * TileScrollpane must have first been placed, then InfoBox can be placed.
   */
  p._placeInfoBox = function() {

    //set orientation for expand direction and layout:
    this._infoBox.setOrientation(this._orientation);

    //if infobox is translucent, use full bounding box without overlapping the scrollbar
    var boundingBox;
    if (this._infoBox.getOpacity() < 1) {

      //iOS has a quirk in getting clientHeight - must be called twice, so loop until it's not 0
      var loopCount = 0;
      while (this._scrollpane.getClientWidth() === 0 || this._scrollpane.getClientHeight() === 0) {
        loopCount++;

        if (loopCount > 50) {
          break;
        }
      }

      //subtract the 1px border above scrollPane from y and height.
      boundingBox = {
        x: this._scrollpanePlacement.x,
        y: this._scrollpanePlacement.y + 1,
        width: this._scrollpane.getClientWidth(),
        height: this._scrollpane.getClientHeight() - 1
      };

    //otherwise use full bounding box
    } else {
      boundingBox = this._scrollpanePlacement;
    }

    //determine placement relative to bounding box
    var placement;
    if (this._orientation == 'horizontal') {
      var minWidth = 155,
          infoBoxWidth = Math.max(boundingBox.width / 3.5, minWidth);

      placement = {
        x: boundingBox.x + boundingBox.width - infoBoxWidth,
        y: boundingBox.y,
        width: infoBoxWidth,
        height: boundingBox.height
      };
    } else {
      var infoBoxHeight = 76;

      placement = {
        x: boundingBox.x,
        y: boundingBox.y + boundingBox.height - infoBoxHeight,
        width: boundingBox.width,
        height: infoBoxHeight
      };
    }

    //round up for pc
    placement.x = Math.ceil(placement.x);
    placement.y = Math.ceil(placement.y);

    //set expand direction and amount
    if (this._orientation == 'horizontal') {
      this._infoBox.setExpandProperties('left', boundingBox.width - 10, true);
    } else {
      this._infoBox.setExpandProperties('up', boundingBox.height - 10, true);
    }

    this._infoBox.place(placement);
  };

AOLCT.ItemAndPriceAppView = ItemAndPriceAppView;
})();
this.AOLCT = this.AOLCT || {};

(function() {
  'use strict';
  /* global AOLCT, ADTECH, initInertialScroller */

  var ItemAndPriceApp = function() {
    this.init();
  };

  var p = ItemAndPriceApp.prototype = new AOLCT.AppBase();

  p.super_init = p.init;
  p.init = function() {

    //Firefox has issues with using getComputedStyle in FPF, so wait until it's ready to be used 
    if (this.isReadyToInit()) {
      this.initAfterReady();
    } else {
      this.addEventListener('ready', this.initAfterReady.bind(this));
      this.notifyWhenReadyToInit();
    }
  };

  p.initAfterReady = function() {

    //determine app number, set default styles, listen to window resize by initing the AppBase class:
    this.super_init();

    //start with local configuration, and if in Pictela, override with getContent panel config:
    this._configure();

    //if geolocation is enabled, determine the user's postal code
    if (this._config.locationFieldEnabled && this._config.geolocationEnabled) {
      this._determineUserGeolocation();
    }

    //override the variables in the <style> tag with those from the configured theme
    this._applyStyles();

    //build the data models shared by APIs and App Views
    this._setupModel();

    //setup the main app view
    this._setupMainView();

    //setup the list view
    this._setupListView();

    //call this function in AppBase to place this._appView to the pixel width and height
    //of the wrapper div, and place again when the window is resized.
    //must use .call(this) to include scope in the super function 
    this._placeOnWindowResize.call(this);

    //setup the reporting which listens to all events bubbling up from the app (API and AppView)
    //and performs the ADTECH.event calls
    this._setupReporting();

    //setup the APIs and make the initial queries. 
    this._setupAPI();

    //NY team needed this for iPhone 6
    setTimeout(function() {
      this.adjustDimension();    
    }.bind(this), 800);

    //call this global inertial scroller function, defined in ItemAndPrice.html, since it's minified
    initInertialScroller();
  };

  //call this to recalculate dimension
  p.adjustDimension = function() {
    this._adjust();
  };


  //PRIVATE

  /**
   * Configure so this works 100% offline, and is overridden with 
   * ADTECH.getContent only when available.
   */
  p._configure = function() {

    this._config = {
      categoryDropdownEnabled: true,
      locationFieldEnabled: true,
      geolocationEnabled: true,
      defaultLocation: '10008',
      locationTextTip: 'Enter Zipcode',
      tileLanes: 'auto',
      autoplayEnabled: true,
      autoplayDuration: 15,
      autoplayInterval: 0.5,
      api: 'CustomProductFeed' //or CustomProductFeed
    };

    this._theme = {
      brandColor: '#00A',
      secondaryBrandColor: '#F00',
      lineColor: '#DDD',
      infoBoxRGBAColor: '255, 255, 255, 0.9'
    };

    this._listConfig = {
      emailTemplateKey: 'b017a91d08e2fd752efcd247c850c25c3f2b3935',
      fromAddress:      'shop@pictela.com',
      headerLogo:       'ListEmailPrint-PictelaLogo_186x40@2x.png',
      headerTitle:      'Shopping List',
      emptyMessage:     'Currently you have no items added to your list.'
    };

    this._shopLocalAPIConfig = {
      campaignId: 'b7119d5eab23d603',
      pd: '',
      promotionCode: '',
      searchEndpoint: 'categorylistings', //or retailertaglistings
      siteid: '2484493',
      retailertagid: '2334', // all P&G products - might not work in the future
      extraParams: ''
    };

    this._customProductFeedAPIConfig = {
      feedType: 'file', //or url
      file: 'http://ads.pictela.net/rm/ads//110789/c/BestBuy_week_of_March_8_with_urls.json', 
      url: 'http://ads.pictela.net/rm/ads//110789/c/ItemAndPriceCustomProductFeed.json'
    };

    this._customProductFeedClicks = [];
    var o; 
    for (var i = 1; i <= 4; i++) {
      o = {};
      for (var j = 1; j <= 8; j++) {
        o['item'+j+'ClickUrl'] = 'http://aolplatforms.com?cat='+i+'&item='+j;
      }
      this._customProductFeedClicks.push(o);
    }

    //Override with settings from ADTECH.getContent if available, when in the context of Pictela,
    //using some shorthand to circumvent the Pictela parsing of ADTECH-getContent calls
    if (ADTECH) {
      var base = 'App ' + this._appNum + ' - Item and Price',
          gc = ADTECH.getContent.bind(ADTECH);

      this._config                     = gc(base)                               || this._config;
      this._theme                      = gc(base + ' Theme')                    || this._theme;
      this._listConfig                 = gc(base + ' List')                     || this._listConfig;
      this._shopLocalAPIConfig         = gc(base + ' ShopLocal API')            || this._shopLocalAPIConfig;
      this._customProductFeedAPIConfig = gc(base + ' CustomProductFeed API')    || this._customProductFeedAPIConfig;
      this._customProductFeedClicks    = gc(base + ' CustomProductFeed Clicks') || this._customProductFeedClicks;
    }

    //minxins...copy brandColor and secondaryBrandColor into listConfig
    this._listConfig.brandColor = this._theme.brandColor;
    this._listConfig.secondaryBrandColor = this._theme.secondaryBrandColor;
  };

  /**
   * Override this.config.defaultLocation if able to detect the
   * user's postal code. If the detected code is '?', ignore it.
   */
  p._determineUserGeolocation = function() {
    var usersPostalCode = '';

    if (ADTECH && ADTECH.getGeoValue) {
      usersPostalCode = String( ADTECH.getGeoValue('zip', this._config.defaultLocation) );

      if (usersPostalCode == '?') {
        usersPostalCode = '';
      }
    }

    if (usersPostalCode.length > 0) {
      this._config.originalDefaultLocation = this._config.defaultLocation;
      this._config.defaultLocation = usersPostalCode;
    }
  };

  p._applyStyles = function() {
    AOLCT.Util.replaceStylesheetVariables(this._theme);
  };

  p._setupModel = function() {
    if (this._config.categoryDropdownEnabled) {
      this._categoriesModel = new AOLCT.CategoriesModel();
    }

    this._productsModel = new AOLCT.ProductsModel();
    this._listModel = new AOLCT.ProductsModel();
  };

  p._setupMainView = function() {
    
    //setup the view
    this._appView = new AOLCT.ItemAndPriceAppView(
      this._config,
      this._categoriesModel,
      this._productsModel,
      this._listModel,
      this,
      this._node);

    //subscribe to model events and notify the view
    this._productsModel.addEventListener('changed', function() {

      var updateAppView = true;

      //if 0 products were returned on the initial query, use the default zip (if not used already)
      if (!this._productsLoaded) {
        this._productsLoaded = true;

        if (this._productsModel.getCount() === 0) {
          if (this._config.defaultLocation != this._config.originalDefaultLocation) {
            var loc = this._config.defaultLocation = this._config.originalDefaultLocation;
            updateAppView = false;

            //update view to show default location
            this._appView.setLocation(loc);

            //load the categories and products for the new location
            this._api.setLocation(loc);

            if (this._categoriesModel) {
              this._api.loadCategoriesModel();
            }

            this._api.loadProductsModel();
          }
        }
      }

      if (updateAppView) {
        this._appView.handleProductsModelChange();
      }

    }.bind(this));

    if (this._categoriesModel) {
      this._categoriesModel.addEventListener('changed', function() {
        this._appView.handleCategoriesModelChange();
      }.bind(this));
    }

    //the list buttons connect directly to the list model, so not notifying the app view any more.

    //subscribe to view events and make api calls
    if (this._categoriesModel) {
      this._appView.addEventListener('categoryChange', function(evt) {
        
        this._api.setCategoryId(evt.data.categoryId);
        this._api.loadProductsModel();

      }.bind(this));
    }

    this._appView.addEventListener('locationChange', function(evt) {
      
      this._api.setLocation(evt.data.location);
      this._api.loadProductsModel();
    
    }.bind(this));
  };

  p._setupListView = function() {

    this._listView = new AOLCT.ListView(this._listModel, this._listConfig, this, this._node);

    this._appView.addEventListener('showList', function() {
      this._appView.animateOut();

      //show the list
      this._listView.show();

      //resize to window, in order to size and update the list
      this._resize();

      //animate it in, then hide the app view on animation complete
      this._listView.animateIn(
        function() {
          this._appView.hide();
        }.bind(this));

    }.bind(this));

    this._listView.addEventListener('hideList', function() {
      this._appView.show();
      this._appView.animateIn();

      this._listView.animateOut(
        function() {
          this._listView.hide();
        }.bind(this));

    }.bind(this));
  };

  /**
   * Override AppBase._resize since we have two views.
   */
  p._resize = function() {
    this._width = this._node.clientWidth;
    this._height = this._node.clientHeight;

    var boundingBox = {
      y: 0, 
      width: this._width, 
      height: this._height
    };

    this._appView.place(boundingBox);

    this._listView.place(boundingBox);
  };

  p._setupReporting = function() {

    this._reporting = new AOLCT.ItemAndPriceReporting(this._config, this._appNum, this);

    if (this._config.api == 'CustomProductFeed') {
      this._reporting.setCustomFeedClicksContentCollection(this._customProductFeedClicks);
    }
  };

  p._setupAPI = function() {

    if (this._config.api == 'ShopLocal') {
      this._api = new AOLCT.ShopLocalAPI(this._shopLocalAPIConfig, this._categoriesModel, this._productsModel, this);    
    } else if (this._config.api == 'CustomProductFeed') {
      this._api = new AOLCT.CustomProductFeedAPI(this._customProductFeedAPIConfig, this._customProductFeedClicks, this._categoriesModel, this._productsModel, this);    
    }

    if (this._config.locationFieldEnabled) {
      //set the initial location, which at this point has already been set
      //to the user's geolocation or the default if not available
      this._api.setLocation(this._config.defaultLocation);
    }

    if (this._categoriesModel) {
      this._api.loadCategoriesModel();
    }
    this._api.loadProductsModel();
  };

  //readjust the width and height of boundingBox for the accurate top and left position of the infoBox
  p._adjust = function() {
    this._resize();
    this._appView._placeInfoBox();
  };

AOLCT.ItemAndPriceApp = ItemAndPriceApp;
})();