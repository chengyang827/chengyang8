// build time:Sun Sep 17 2017 21:51:46 GMT+0800 (中国标准时间)
var DecorationsT;var JobT;var SourceSpansT;var IN_GLOBAL_SCOPE=false;var HACK_TO_FIX_JS_INCLUDE_PL;var PR;window["PR_SHOULD_USE_CONTINUATION"]=true;var prettyPrintOne;var prettyPrint;(function(){var e=window;var r=["break,continue,do,else,for,if,return,while"];var a=[r,"auto,case,char,const,default,"+"double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,"+"sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];var t=[a,"catch,class,delete,false,import,"+"new,operator,private,protected,public,this,throw,true,try,typeof"];var n=[t,"alignas,alignof,align_union,asm,axiom,bool,"+"concept,concept_map,const_cast,constexpr,decltype,delegate,"+"dynamic_cast,explicit,export,friend,generic,late_check,"+"mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,"+"static_cast,template,typeid,typename,using,virtual,where"];var s=[t,"abstract,assert,boolean,byte,extends,finally,final,implements,import,"+"instanceof,interface,null,native,package,strictfp,super,synchronized,"+"throws,transient"];var i=[t,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,"+"dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,"+"internal,into,is,join,let,lock,null,object,out,override,orderby,params,"+"partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,"+"unchecked,unsafe,ushort,value,var,virtual,where,yield"];var l="all,and,by,catch,class,else,extends,false,finally,"+"for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,"+"throw,true,try,unless,until,when,while,yes";var o=[t,"abstract,async,await,constructor,debugger,enum,eval,export,function,"+"get,implements,instanceof,interface,let,null,set,undefined,var,with,"+"yield,Infinity,NaN"];var u="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,"+"goto,if,import,last,local,my,next,no,our,print,package,redo,require,"+"sub,undef,unless,until,use,wantarray,while,BEGIN,END";var f=[r,"and,as,assert,class,def,del,"+"elif,except,exec,finally,from,global,import,in,is,lambda,"+"nonlocal,not,or,pass,print,raise,try,with,yield,"+"False,True,None"];var v=[r,"alias,and,begin,case,class,"+"def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,"+"rescue,retry,self,super,then,true,undef,unless,until,when,yield,"+"BEGIN,END"];var c=[r,"case,done,elif,esac,eval,fi,"+"function,in,local,set,then,until"];var d=[n,i,s,o,u,f,v,c];var p=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;var h="str";var g="kwd";var m="com";var y="typ";var b="lit";var x="pun";var w="pln";var S="tag";var C="dec";var N="src";var _="atn";var P="atv";var E="nocode";var L="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*";function A(e){var r=0;var a=false;var t=false;for(var n=0,s=e.length;n<s;++n){var i="e[n];if(i.ignoreCase){t=true}else" if(="" [a-z]="" i.test(i.source.replace(="" \\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]="" gi,""))){a="true;t=false;break}}var" l="{b:8,t:9,n:10,v:11,f:12,r:13};function" o(e){var="" r="e.charCodeAt(0);if(r!==92){return" r}var="" a="e.charAt(1);r=l[a];if(r){return" r}else="" if("0"<="a&&a<="7"){return" parseint(e.substring(1),8)}else="" if(a="=="u"||a==="x"){return" parseint(e.substring(2),16)}else{return="" e.charcodeat(1)}}function="" u(e){if(e<32){return(e<16?"\\x0":"\\x")+e.tostring(16)}var="" f(e){var="" regexp("\\\\u[0-9a-fa-f]{4}"+"|\\\\x[0-9a-fa-f]{2}"+"|\\\\[0-3][0-7]{0,2}"+"|\\\\[0-7]{1,2}"+"|\\\\[\\s\\s]"+"|-"+"|[^-\\\\]","g"));var="" t="r[0]==="^";var" n="["["];if(t){n.push("^")}for(var" s="t?1:0,i=r.length;s<i;++s){var" f="o(l);var" v;if(s+2<i&&"-"="==r[s+1]){v=o(r[s+2]);s+=2}else{v=f}a.push([f,v]);if(!(v<65||f">122)){if(!(v<65||f>90)){a.push([Math.max(65,f)|32,Math.min(v,90)|32])}if(!(v<97||f>122)){a.push([Math.max(97,f)&~32,Math.min(v,122)&~32])}}}}a.sort(function(e,r){return e[0]-r[0]||r[1]-e[1]});var c=[];var d=[];for(var s=0;s<a.length;++s){var p="a[s];if(p[0]<=d[1]+1){d[1]=Math.max(d[1],p[1])}else{c.push(d=p)}}for(var" s="0;s<c.length;++s){var">p[0]){if(p[1]+1>p[0]){n.push("-")}n.push(u(p[1]))}}n.push("]");return n.join("")}function v(e){var t=e.source.match(new RegExp("(?:"+"\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]"+"|\\\\u[A-Fa-f0-9]{4}"+"|\\\\x[A-Fa-f0-9]{2}"+"|\\\\[0-9]+"+"|\\\\[^ux0-9]"+"|\\(\\?[:!=]"+"|[\\(\\)\\^]"+"|[^\\x5B\\x5C\\(\\)\\^]+"+")","g"));var n=t.length;var s=[];for(var i=0,l=0;i<n;++i){var o="t[i];if(o==="("){++l}else" if("\\"="==o.charAt(0)){var" v="+o.substring(1);if(v){if(v<=l){s[v]=-1}else{t[i]=u(v)}}}}for(var" i="1;i<s.length;++i){if(-1===s[i]){s[i]=++r}}for(var" c="o.charAt(0);if(o.length">=2&&c==="["){t[i]=f(o)}else if(c!=="\\"){t[i]=o.replace(/[a-zA-Z]/g,function(e){var r=e.charCodeAt(0);return"["+String.fromCharCode(r&~32,r|32)+"]"})}}}return t.join("")}var c=[];for(var n=0,s=e.length;n<s;++n){var i="e[n];if(i.global||i.multiline){throw" new="" error(""+i)}c.push("(?:"+v(i)+")")}return="" regexp(c.join("|"),t?"gi":"g")}function="" t(e,r){var="" a="/(?:^|\s)nocode(?:\s|$)/;var" t="[];var" n="0;var" s="[];var" l(e){var="" o="e.nodeType;if(o==1){if(a.test(e.className)){return}for(var" u="e.firstChild;u;u=u.nextSibling){l(u)}var" f="e.nodeName.toLowerCase();if("br"===f||"li"===f){t[i]="\n";s[i<<1]=n++;s[i++<<1|1]=e}}else" if(o="=3||o==4){var" v="e.nodeValue;if(v.length){if(!r){v=v.replace(/[" \t\r\n]+="" g,"="" ")}else{v="v.replace(/\r\n?/g,"\n")}t[i]=v;s[i<<1]=n;n+=v.length;s[i++<<1|1]=e}}}l(e);return{sourceCode:t.join("").replace(/\n$/,""),spans:s}}function" r(e,r,a,t,n){if(!a){return}var="" k="/\S/;function" $(e){var="" r="undefined;for(var" o(e,r){var="" t;(function(){var="" l="0,o=n.length;l<o;++l){var">=0;){a[f.charAt(v)]=u}}var c=u[1];var d=""+c;if(!i.hasOwnProperty(d)){s.push(c);i[d]=null}}s.push(/[\0-\uffff]/);t=A(s)})();var n=r.length;var s=function(e){var i=e.sourceCode,l=e.basePos;var o=e.sourceNode;var u=[l,w];var f=0;var v=i.match(t)||[];var c={};for(var d=0,p=v.length;d<p;++d){var h="v[d];var" g="c[h];var" m="void" 0;var="" y;if(typeof="" b="a[h.charAt(0)];if(b){m=h.match(b[1]);g=b[0]}else{for(var" x="0;x<n;++x){b=r[x];m=h.match(b[1]);if(m){g=b[0];break}}if(!m){g=w}}y=g.length">=5&&"lang-"===g.substring(0,5);if(y&&!(m&&typeof m[1]==="string")){y=false;g=N}if(!y){c[h]=g}}var S=f;f+=h.length;if(!y){u.push(l+S,g)}else{var C=m[1];var _=h.indexOf(C);var P=_+C.length;if(m[2]){P=h.length-m[2].length;_=P-C.length}var E=g.substring(5);R(o,l+S,h.substring(0,_),s,u);R(o,l+S+_,C,U(E,C),u);R(o,l+S+P,h.substring(P),s,u)}}e.decorations=u};return s}function I(e){var r=[],a=[];if(e["tripleQuotedStrings"]){r.push([h,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""])}else if(e["multiLineStrings"]){r.push([h,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"])}else{r.push([h,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"])}if(e["verbatimStrings"]){a.push([h,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null])}var t=e["hashComments"];if(t){if(e["cStyleComments"]){if(t>1){r.push([m,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"])}else{r.push([m,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"])}a.push([h,/^<(?:(?:(?:\.\.\ )*|\="" ?)(?:[\w-]+(?:\="" [\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)="">/,null])}else{r.push([m,/^#[^\r\n]*/,null,"#"])}}if(e["cStyleComments"]){a.push([m,/^\/\/[^\r\n]*/,null]);a.push([m,/^\/\*[\s\S]*?(?:\*\/|$)/,null])}var n=e["regexLiterals"];if(n){var s=n>1?"":"\n\r";var i=s?".":"[\\S\\s]";var l="/(?=[^/*"+s+"])"+"(?:[^/\\x5B\\x5C"+s+"]"+"|\\x5C"+i+"|\\x5B(?:[^\\x5C\\x5D"+s+"]"+"|\\x5C"+i+")*(?:\\x5D|$))+"+"/";a.push(["lang-regex",RegExp("^"+L+"("+l+")")])}var o=e["types"];if(o){a.push([y,o])}var u=(""+e["keywords"]).replace(/^ | $/g,"");if(u.length){a.push([g,new RegExp("^(?:"+u.replace(/[\s,]+/g,"|")+")\\b"),null])}r.push([w,/^\s+/,null," \r\n\t "]);var f="^.[^\\s\\w.$@'\"`/\\\\]*";if(e["regexLiterals"]){f+="(?!s*/)"}a.push([b,/^@[a-z_$][a-z_$@0-9]*/i,null],[y,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[w,/^[a-z_$][a-z_$@0-9]*/i,null],[b,new RegExp("^(?:"+"0x[a-f0-9]+"+"|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)"+"(?:e[+\\-]?\\d+)?"+")"+"[a-z]*","i"),null,"0123456789"],[w,/^\\[\s\S]?/,null],[x,new RegExp(f),null]);return O(r,a)}var D=I({keywords:d,hashComments:true,cStyleComments:true,multiLineStrings:true,regexLiterals:true});function z(e,r,a){var t=/(?:^|\s)nocode(?:\s|$)/;var n=/\r\n?|\n/;var s=e.ownerDocument;var i=s.createElement("li");while(e.firstChild){i.appendChild(e.firstChild)}var l=[i];function o(e){var r=e.nodeType;if(r==1&&!t.test(e.className)){if("br"===e.nodeName){u(e);if(e.parentNode){e.parentNode.removeChild(e)}}else{for(var i=e.firstChild;i;i=i.nextSibling){o(i)}}}else if((r==3||r==4)&&a){var l=e.nodeValue;var f=l.match(n);if(f){var v=l.substring(0,f.index);e.nodeValue=v;var c=l.substring(f.index+f[0].length);if(c){var d=e.parentNode;d.insertBefore(s.createTextNode(c),e.nextSibling)}u(e);if(!v){e.parentNode.removeChild(e)}}}}function u(e){while(!e.nextSibling){e=e.parentNode;if(!e){return}}function r(e,a){var t=a?e.cloneNode(false):e;var n=e.parentNode;if(n){var s=r(n,1);var i=e.nextSibling;s.appendChild(t);for(var l=i;l;l=i){i=l.nextSibling;s.appendChild(l)}}return t}var a=r(e.nextSibling,0);for(var t;(t=a.parentNode)&&t.nodeType===1;){a=t}l.push(a)}for(var f=0;f<l.length;++f){o(l[f])}if(r===(r|0)){l[0].setattribute("value",r)}var v="s.createElement("ol");v.className="linenums";var" c="Math.max(0,r-1|0)||0;for(var" f="0,d=l.length;f<d;++f){i=l[f];i.className="L"+(f+c)%10;if(!i.firstChild){i.appendChild(s.createTextNode(" "))}v.appendChild(i)}e.appendChild(v)}function" j(e){var="" r="/\bMSIE\s(\d+)/.exec(navigator.userAgent);r=r&&+r[1]<=8;var" a="/\n/g;var" t="e.sourceCode;var" n="t.length;var" s="0;var" i="e.spans;var" l="i.length;var" o="0;var" u="e.decorations;var" c,d;for(d="c=0;d<f;){if(u[d]!==u[d+2]){u[c++]=u[d++];u[c++]=u[d++]}else{d+=2}}f=c;for(d=c=0;d<f;){var" p="u[d];var" h="u[d+1];var" g="d+2;while(g+2<=f&&u[g+1]===h){g+=2}u[c++]=p;u[c++]=h;d=g}f=u.length=c;var" m="e.sourceNode;var" y="" ;if(m){y="m.style.display;m.style.display="none"}try{var" b="null;while(o<l){var" x="i[o];var" w="i[o+2]||n;var" n;if(c.nodetype!="=1&&(N=t.substring(s,g))){if(r){N=N.replace(a,"\r")}C.nodeValue=N;var" _="C.ownerDocument;var" e="C.parentNode;E.replaceChild(P,C);P.appendChild(C);if(s<w){i[o+1]=C=_.createTextNode(t.substring(g,w));E.insertBefore(C,P.nextSibling)}}s=g;if(s">=w){o+=2}if(s>=S){v+=2}}}finally{if(m){m.style.display=y}}}var B={};function M(r,a){for(var t=a.length;--t>=0;){var n=a[t];if(!B.hasOwnProperty(n)){B[n]=r}else if(e["console"]){console["warn"]("cannot override language handler %s",n)}}}function U(e,r){if(!(e&&B.hasOwnProperty(e))){e=/^\s*]*(?:>|$)/],[m,/^<\!--[\s\s]*?(?:-\->|$)/],["lang-",/^<\?([\s\s]+?)(?:\?>|$)/],["lang-",/^<%([\s\s]+?)(?:%>|$)/],[x,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\ xmp\b[^="">]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\ script\b[^="">]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\ style\b[^="">]*>)/i],["lang-in.tag",/^(<\ ?[a-z][^<="">]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);M(O([[w,/^[\s]+/,null," \t\r\n"],[P,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[S,/^^<\ ?[a-z](?:[\w.:-]*\w)?|\="" ?="">$/i],[_,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[x,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);M(O([],[[P,/^[\s\S]+/]]),["uq.val"]);M(I({keywords:n,hashComments:true,cStyleComments:true,types:p}),["c","cc","cpp","cxx","cyc","m"]);M(I({keywords:"null,true,false"}),["json"]);M(I({keywords:i,hashComments:true,cStyleComments:true,verbatimStrings:true,types:p}),["cs"]);M(I({keywords:s,cStyleComments:true}),["java"]);M(I({keywords:c,hashComments:true,multiLineStrings:true}),["bash","bsh","csh","sh"]);M(I({keywords:f,hashComments:true,multiLineStrings:true,tripleQuotedStrings:true}),["cv","py","python"]);M(I({keywords:u,hashComments:true,multiLineStrings:true,regexLiterals:2}),["perl","pl","pm"]);M(I({keywords:v,hashComments:true,multiLineStrings:true,regexLiterals:true}),["rb","ruby"]);M(I({keywords:o,cStyleComments:true,regexLiterals:true}),["javascript","js","ts","typescript"]);M(I({keywords:l,hashComments:3,cStyleComments:true,multilineStrings:true,tripleQuotedStrings:true,regexLiterals:true}),["coffee"]);M(O([],[[h,/^[\s\S]+/]]),["regex"]);function V(r){var a=r.langExtension;try{var t=T(r.sourceNode,r.pre);var n=t.sourceCode;r.sourceCode=n;r.spans=t.spans;r.basePos=0;U(a,n)(r);j(r)}catch(s){if(e["console"]){console["log"](s&&s["stack"]||s)}}}function F(e,r,a){var t=a||false;var n=r||null;var s=document.createElement("div");s.innerHTML="<pre>"+e+"</pre>";s=s.firstChild;if(t){z(s,t,true)}var i={langExtension:n,numberLines:t,sourceNode:s,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null};V(i);return s.innerHTML}function G(r,a){var t=a||document.body;var n=t.ownerDocument||document;function s(e){return t.getElementsByTagName(e)}var i=[s("pre"),s("code"),s("xmp")];var l=[];for(var o=0;o</\></\></\></style\b[^></\></script\b[^></\></xmp\b[^></[%?]|[%?]></%([\s\s]+?)(?:%></\?([\s\s]+?)(?:\?></\!--[\s\s]*?(?:-\-></l.length;++f){o(l[f])}if(r===(r|0)){l[0].setattribute("value",r)}var></(?:(?:(?:\.\.\></p;++d){var></s;++n){var></n;++i){var></a.length;++s){var></97||f></65||f></s;++n){var>