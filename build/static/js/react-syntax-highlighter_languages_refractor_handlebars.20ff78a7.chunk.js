(this["webpackJsonpalgopay-config"]=this["webpackJsonpalgopay-config"]||[]).push([[51,81],{141:function(e,n,a){"use strict";var t=a(48);function o(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=o,o.displayName="handlebars",o.aliases=[]},48:function(e,n,a){"use strict";function t(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,o,i){if(a.language===t){var r=a.tokenStack=[];a.code=a.code.replace(o,(function(e){if("function"===typeof i&&!i(e))return e;for(var o,s=r.length;-1!==a.code.indexOf(o=n(t,s));)++s;return r[s]=e,o})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var o=0,i=Object.keys(a.tokenStack);!function r(s){for(var l=0;l<s.length&&!(o>=i.length);l++){var u=s[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=i[o],p=a.tokenStack[c],g="string"===typeof u?u:u.content,f=n(t,c),d=g.indexOf(f);if(d>-1){++o;var k=g.substring(0,d),b=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,r([k])),m.push(b),h&&m.push.apply(m,r([h])),"string"===typeof u?s.splice.apply(s,[l,1].concat(m)):u.content=m}}else u.content&&r(u.content)}return s}(a.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.20ff78a7.chunk.js.map