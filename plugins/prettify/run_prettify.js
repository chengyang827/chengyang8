// build time:Sun Sep 17 2017 13:45:50 GMT+0800 (中国标准时间)
var DecorationsT;var JobT;var SourceSpansT;var IN_GLOBAL_SCOPE=false;(function(){"use strict";var e=window;var r=document;var t=r.documentElement;var a=r["head"]||r.getElementsByTagName("head")[0]||t;function n(a){var n=r["addEventListener"];var s=false,i=true,l=n?"addEventListener":"attachEvent",o=n?"removeEventListener":"detachEvent",u=n?"":"on",f=function(t){if(t.type=="readystatechange"&&r.readyState!="complete"){return}(t.type=="load"?e:r)[o](u+t.type,f,false);if(!s&&(s=true)){a.call(e,t.type||t)}},c=function(){try{t.doScroll("left")}catch(r){e.setTimeout(c,50);return}f("poll")};if(r.readyState=="complete"){a.call(e,"lazy")}else{if(r.createEventObject&&t.doScroll){try{i=!e.frameElement}catch(v){}if(i){c()}}r[l](u+"DOMContentLoaded",f,false);r[l](u+"readystatechange",f,false);e[l](u+"load",f,false)}}function s(e){var t=e.length;function n(s){if(s===t){return}var i=r.createElement("link");i.rel="stylesheet";i.type="text/css";if(s+1<t){i.error=i.onerror=function(){n(s+1)}}i.href=e[s];a.appendchild(i)}n(0)}var i="" ;var="" l="r.getElementsByTagName("script");for(var" o="l.length;--o">=0;){var u=l[o];var f=u.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(f){i=f[1]||"";u.parentNode.removeChild(u);break}}var c=true;var v=[];var d=[];var p=[];i.replace(/[?&]([^&=]+)=([^&]+)/g,function(e,r,t){t=decodeURIComponent(t);r=decodeURIComponent(r);if(r=="autorun"){c=!/^[0fn]/i.test(t)}else if(r=="lang"){v.push(t)}else if(r=="skin"){d.push(t)}else if(r=="callback"){p.push(t)}});var h="https://cdn.rawgit.com/google/code-prettify/master/loader";for(var o=0,g=v.length;o<g;++o)(function(e){var t="r.createElement("script");t.onload=t.onerror=t.onreadystatechange=function(){if(t&&(!t.readyState||/loaded|complete/.test(t.readyState))){t.onerror=t.onload=t.onreadystatechange=null;--m;y();if(t.parentNode){t.parentNode.removeChild(t)}t=null}};t.type="text/javascript";t.src=h+"/lang-"+encodeURIComponent(v[o])+".js";a.insertBefore(t,a.firstChild)})(v[o]);var" m="v.length;function" y(){if(!m){e.settimeout(w,0)}}var="" b="[];for(var" o="0,g=d.length;o<g;++o){b.push(h+"/skins/"+encodeURIComponent(d[o])+".css")}b.push(h+"/prettify.css");s(b);var" x="function(){var" e;var="" r;window["pr_should_use_continuation"]="true;var" t;var="" a;(function(){var="" e="window;var" r="["break,continue,do,else,for,if,return,while"];var" n="[r,"auto,case,char,const,default,"+"double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,"+"sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];var" s="[n,"catch,class,delete,false,import,"+"new,operator,private,protected,public,this,throw,true,try,typeof"];var" i="[s,"alignas,alignof,align_union,asm,axiom,bool,"+"concept,concept_map,const_cast,constexpr,decltype,delegate,"+"dynamic_cast,explicit,export,friend,generic,late_check,"+"mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,"+"static_cast,template,typeid,typename,using,virtual,where"];var" l="[s,"abstract,assert,boolean,byte,extends,finally,final,implements,import,"+"instanceof,interface,null,native,package,strictfp,super,synchronized,"+"throws,transient"];var" u="all,and,by,catch,class,else,extends,false,finally," +"for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,"+"throw,true,try,unless,until,when,while,yes";var="" f="[s,"abstract,async,await,constructor,debugger,enum,eval,export,function,"+"get,implements,instanceof,interface,let,null,set,undefined,var,with,"+"yield,Infinity,NaN"];var" c="caller,delete,die,do,dump,elsif,eval,exit,foreach,for," +"goto,if,import,last,local,my,next,no,our,print,package,redo,require,"+"sub,undef,unless,until,use,wantarray,while,begin,end";var="" v="[r,"and,as,assert,class,def,del,"+"elif,except,exec,finally,from,global,import,in,is,lambda,"+"nonlocal,not,or,pass,print,raise,try,with,yield,"+"False,True,None"];var" d="[r,"alias,and,begin,case,class,"+"def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,"+"rescue,retry,self,super,then,true,undef,unless,until,when,yield,"+"BEGIN,END"];var" p="[r,"case,done,elif,esac,eval,fi,"+"function,in,local,set,then,until"];var" h="[i,o,l,f,c,v,d,p];var" g="/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;var" ;var="" y="kwd" w="lit" _="src" k="nocode" ;function="" r(e){var="" a="false;for(var" if(="" [a-z]="" i.test(i.source.replace(="" \\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]="" gi,""))){t="true;a=false;break}}var" o(e){var="" r}var="" r}else="" if("0"<="t&&t<="7"){return" parseint(e.substring(1),8)}else="" if(t="=="u"||t==="x"){return" parseint(e.substring(2),16)}else{return="" e.charcodeat(1)}}function="" u(e){if(e<32){return(e<16?"\\x0":"\\x")+e.tostring(16)}var="" f(e){var="" regexp("\\\\u[0-9a-fa-f]{4}"+"|\\\\x[0-9a-fa-f]{2}"+"|\\\\[0-3][0-7]{0,2}"+"|\\\\[0-7]{1,2}"+"|\\\\[\\s\\s]"+"|-"+"|[^-\\\\]","g"));var="" c;if(s+2<i&&"-"="==r[s+1]){c=o(r[s+2]);s+=2}else{c=f}t.push([f,c]);if(!(c<65||f">122)){if(!(c<65||f>90)){t.push([Math.max(65,f)|32,Math.min(c,90)|32])}if(!(c<97||f>122)){t.push([Math.max(97,f)&~32,Math.min(c,122)&~32])}}}}t.sort(function(e,r){return e[0]-r[0]||r[1]-e[1]});var v=[];var d=[];for(var s=0;s<t.length;++s){var p="t[s];if(p[0]<=d[1]+1){d[1]=Math.max(d[1],p[1])}else{v.push(d=p)}}for(var" s="0;s<v.length;++s){var">p[0]){if(p[1]+1>p[0]){n.push("-")}n.push(u(p[1]))}}n.push("]");return n.join("")}function c(e){var a=e.source.match(new RegExp("(?:"+"\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]"+"|\\\\u[A-Fa-f0-9]{4}"+"|\\\\x[A-Fa-f0-9]{2}"+"|\\\\[0-9]+"+"|\\\\[^ux0-9]"+"|\\(\\?[:!=]"+"|[\\(\\)\\^]"+"|[^\\x5B\\x5C\\(\\)\\^]+"+")","g"));var n=a.length;var s=[];for(var i=0,l=0;i<n;++i){var o="a[i];if(o==="("){++l}else" if("\\"="==o.charAt(0)){var" c="+o.substring(1);if(c){if(c<=l){s[c]=-1}else{a[i]=u(c)}}}}for(var" i="1;i<s.length;++i){if(-1===s[i]){s[i]=++r}}for(var" v="o.charAt(0);if(o.length">=2&&v==="["){a[i]=f(o)}else if(v!=="\\"){a[i]=o.replace(/[a-zA-Z]/g,function(e){var r=e.charCodeAt(0);return"["+String.fromCharCode(r&~32,r|32)+"]"})}}}return a.join("")}var v=[];for(var n=0,s=e.length;n<s;++n){var i="e[n];if(i.global||i.multiline){throw" new="" error(""+i)}v.push("(?:"+c(i)+")")}return="" regexp(v.join("|"),a?"gi":"g")}function="" a(e,r){var="" t="/(?:^|\s)nocode(?:\s|$)/;var" a="[];var" n="0;var" s="[];var" l(e){var="" o="e.nodeType;if(o==1){if(t.test(e.className)){return}for(var" u="e.firstChild;u;u=u.nextSibling){l(u)}var" f="e.nodeName.toLowerCase();if("br"===f||"li"===f){a[i]="\n";s[i<<1]=n++;s[i++<<1|1]=e}}else" if(o="=3||o==4){var" c="e.nodeValue;if(c.length){if(!r){c=c.replace(/[" \t\r\n]+="" g,"="" ")}else{c="c.replace(/\r\n?/g,"\n")}a[i]=c;s[i<<1]=n;n+=c.length;s[i++<<1|1]=e}}}l(e);return{sourceCode:a.join("").replace(/\n$/,""),spans:s}}function" $(e,r,t,a,n){if(!t){return}var="" o(e){var="" r="undefined;for(var" d(e,r){var="" a;(function(){var="" l="0,o=n.length;l<o;++l){var">=0;){t[f.charAt(c)]=u}}var v=u[1];var d=""+v;if(!i.hasOwnProperty(d)){s.push(v);i[d]=null}}s.push(/[\0-\uffff]/);a=R(s)})();var n=r.length;var s=function(e){var i=e.sourceCode,l=e.basePos;var o=e.sourceNode;var u=[l,S];var f=0;var c=i.match(a)||[];var v={};for(var d=0,p=c.length;d<p;++d){var h="c[d];var" g="v[h];var" m="void" 0;var="" y;if(typeof="" b="t[h.charAt(0)];if(b){m=h.match(b[1]);g=b[0]}else{for(var" x="0;x<n;++x){b=r[x];m=h.match(b[1]);if(m){g=b[0];break}}if(!m){g=S}}y=g.length">=5&&"lang-"===g.substring(0,5);if(y&&!(m&&typeof m[1]==="string")){y=false;g=_}if(!y){v[h]=g}}var w=f;f+=h.length;if(!y){u.push(l+w,g)}else{var C=m[1];var N=h.indexOf(C);var E=N+C.length;if(m[2]){E=h.length-m[2].length;N=E-C.length}var L=g.substring(5);$(o,l+w,h.substring(0,N),s,u);$(o,l+w+N,C,G(L,C),u);$(o,l+w+E,h.substring(E),s,u)}}e.decorations=u};return s}function j(e){var r=[],t=[];if(e["tripleQuotedStrings"]){r.push([m,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""])}else if(e["multiLineStrings"]){r.push([m,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"])}else{r.push([m,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"])}if(e["verbatimStrings"]){t.push([m,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null])}var a=e["hashComments"];if(a){if(e["cStyleComments"]){if(a>1){r.push([b,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"])}else{r.push([b,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"])}t.push([m,/^<(?:(?:(?:\.\.\ )*|\="" ?)(?:[\w-]+(?:\="" [\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)="">/,null])}else{r.push([b,/^#[^\r\n]*/,null,"#"])}}if(e["cStyleComments"]){t.push([b,/^\/\/[^\r\n]*/,null]);t.push([b,/^\/\*[\s\S]*?(?:\*\/|$)/,null])}var n=e["regexLiterals"];if(n){var s=n>1?"":"\n\r";var i=s?".":"[\\S\\s]";var l="/(?=[^/*"+s+"])"+"(?:[^/\\x5B\\x5C"+s+"]"+"|\\x5C"+i+"|\\x5B(?:[^\\x5C\\x5D"+s+"]"+"|\\x5C"+i+")*(?:\\x5D|$))+"+"/";t.push(["lang-regex",RegExp("^"+P+"("+l+")")])}var o=e["types"];if(o){t.push([x,o])}var u=(""+e["keywords"]).replace(/^ | $/g,"");if(u.length){t.push([y,new RegExp("^(?:"+u.replace(/[\s,]+/g,"|")+")\\b"),null])}r.push([S,/^\s+/,null," \r\n\t "]);var f="^.[^\\s\\w.$@'\"`/\\\\]*";if(e["regexLiterals"]){f+="(?!s*/)"}t.push([w,/^@[a-z_$][a-z_$@0-9]*/i,null],[x,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[S,/^[a-z_$][a-z_$@0-9]*/i,null],[w,new RegExp("^(?:"+"0x[a-f0-9]+"+"|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)"+"(?:e[+\\-]?\\d+)?"+")"+"[a-z]*","i"),null,"0123456789"],[S,/^\\[\s\S]?/,null],[C,new RegExp(f),null]);return D(r,t)}var z=j({keywords:h,hashComments:true,cStyleComments:true,multiLineStrings:true,regexLiterals:true});function B(e,r,t){var a=/(?:^|\s)nocode(?:\s|$)/;var n=/\r\n?|\n/;var s=e.ownerDocument;var i=s.createElement("li");while(e.firstChild){i.appendChild(e.firstChild)}var l=[i];function o(e){var r=e.nodeType;if(r==1&&!a.test(e.className)){if("br"===e.nodeName){u(e);if(e.parentNode){e.parentNode.removeChild(e)}}else{for(var i=e.firstChild;i;i=i.nextSibling){o(i)}}}else if((r==3||r==4)&&t){var l=e.nodeValue;var f=l.match(n);if(f){var c=l.substring(0,f.index);e.nodeValue=c;var v=l.substring(f.index+f[0].length);if(v){var d=e.parentNode;d.insertBefore(s.createTextNode(v),e.nextSibling)}u(e);if(!c){e.parentNode.removeChild(e)}}}}function u(e){while(!e.nextSibling){e=e.parentNode;if(!e){return}}function r(e,t){var a=t?e.cloneNode(false):e;var n=e.parentNode;if(n){var s=r(n,1);var i=e.nextSibling;s.appendChild(a);for(var l=i;l;l=i){i=l.nextSibling;s.appendChild(l)}}return a}var t=r(e.nextSibling,0);for(var a;(a=t.parentNode)&&a.nodeType===1;){t=a}l.push(t)}for(var f=0;f<l.length;++f){o(l[f])}if(r===(r|0)){l[0].setattribute("value",r)}var c="s.createElement("ol");c.className="linenums";var" v="Math.max(0,r-1|0)||0;for(var" f="0,d=l.length;f<d;++f){i=l[f];i.className="L"+(f+v)%10;if(!i.firstChild){i.appendChild(s.createTextNode(" "))}c.appendChild(i)}e.appendChild(c)}function" m(e){var="" r="/\bMSIE\s(\d+)/.exec(navigator.userAgent);r=r&&+r[1]<=8;var" t="/\n/g;var" a="e.sourceCode;var" n="a.length;var" s="0;var" i="e.spans;var" l="i.length;var" o="0;var" u="e.decorations;var" v,d;for(d="v=0;d<f;){if(u[d]!==u[d+2]){u[v++]=u[d++];u[v++]=u[d++]}else{d+=2}}f=v;for(d=v=0;d<f;){var" p="u[d];var" h="u[d+1];var" g="d+2;while(g+2<=f&&u[g+1]===h){g+=2}u[v++]=p;u[v++]=h;d=g}f=u.length=v;var" m="e.sourceNode;var" y="" ;if(m){y="m.style.display;m.style.display="none"}try{var" b="null;while(o<l){var" x="i[o];var" w="i[o+2]||n;var" n;if(s.nodetype!="=1&&(N=a.substring(s,g))){if(r){N=N.replace(t,"\r")}S.nodeValue=N;var" e="S.ownerDocument;var" _="E.createElement("span");_.className=u[c+1];var">=w){o+=2}if(s>=C){c+=2}}}finally{if(m){m.style.display=y}}}var U={};function V(r,t){for(var a=t.length;--a>=0;){var n=t[a];if(!U.hasOwnProperty(n)){U[n]=r}else if(e["console"]){console["warn"]("cannot override language handler %s",n)}}}function G(e,r){if(!(e&&U.hasOwnProperty(e))){e=/^\s*]*(?:>|$)/],[b,/^<\!--[\s\s]*?(?:-\->|$)/],["lang-",/^<\?([\s\s]+?)(?:\?>|$)/],["lang-",/^<%([\s\s]+?)(?:%>|$)/],[C,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\ xmp\b[^="">]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\ script\b[^="">]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\ style\b[^="">]*>)/i],["lang-in.tag",/^(<\ ?[a-z][^<="">]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);V(D([[S,/^[\s]+/,null," \t\r\n"],[T,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[N,/^^<\ ?[a-z](?:[\w.:-]*\w)?|\="" ?="">$/i],[L,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[C,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);V(D([],[[T,/^[\s\S]+/]]),["uq.val"]);V(j({keywords:i,hashComments:true,cStyleComments:true,types:g}),["c","cc","cpp","cxx","cyc","m"]);V(j({keywords:"null,true,false"}),["json"]);V(j({keywords:o,hashComments:true,cStyleComments:true,verbatimStrings:true,types:g}),["cs"]);V(j({keywords:l,cStyleComments:true}),["java"]);V(j({keywords:p,hashComments:true,multiLineStrings:true}),["bash","bsh","csh","sh"]);V(j({keywords:v,hashComments:true,multiLineStrings:true,tripleQuotedStrings:true}),["cv","py","python"]);V(j({keywords:c,hashComments:true,multiLineStrings:true,regexLiterals:2}),["perl","pl","pm"]);V(j({keywords:d,hashComments:true,multiLineStrings:true,regexLiterals:true}),["rb","ruby"]);V(j({keywords:f,cStyleComments:true,regexLiterals:true}),["javascript","js","ts","typescript"]);V(j({keywords:u,hashComments:3,cStyleComments:true,multilineStrings:true,tripleQuotedStrings:true,regexLiterals:true}),["coffee"]);V(D([],[[m,/^[\s\S]+/]]),["regex"]);function F(r){var t=r.langExtension;try{var a=A(r.sourceNode,r.pre);var n=a.sourceCode;r.sourceCode=n;r.spans=a.spans;r.basePos=0;G(t,n)(r);M(r)}catch(s){if(e["console"]){console["log"](s&&s["stack"]||s)}}}function H(e,r,t){var a=t||false;var n=r||null;var s=document.createElement("div");s.innerHTML="<pre>"+e+"</pre>";s=s.firstChild;if(a){B(s,a,true)}var i={langExtension:n,numberLines:a,sourceNode:s,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null};F(i);return s.innerHTML}function q(r,t){var a=t||document.body;var n=a.ownerDocument||document;function s(e){return a.getElementsByTagName(e)}var i=[s("pre"),s("code"),s("xmp")];var l=[];for(var o=0;o</\></\></\></style\b[^></\></script\b[^></\></xmp\b[^></[%?]|[%?]></%([\s\s]+?)(?:%></\?([\s\s]+?)(?:\?></\!--[\s\s]*?(?:-\-></l.length;++f){o(l[f])}if(r===(r|0)){l[0].setattribute("value",r)}var></(?:(?:(?:\.\.\></p;++d){var></s;++n){var></n;++i){var></t.length;++s){var></97||f></65||f></g;++o)(function(e){var></t){i.error=i.onerror=function(){n(s+1)}}i.href=e[s];a.appendchild(i)}n(0)}var>