// build time:Sun Sep 17 2017 21:51:45 GMT+0800 (中国标准时间)
PR["registerLangHandler"](PR["createSimpleLexer"]([[PR["PR_STRING"],/^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/,null,'"'],[PR["PR_LITERAL"],/^[a-z][a-zA-Z0-9_]*/],[PR["PR_LITERAL"],/^\'(?:[^\'\\\n\x0C\r]|\\[^&])+\'?/,null,"'"],[PR["PR_LITERAL"],/^(?:0'.|0b[0-1]+|0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,"0123456789"]],[[PR["PR_COMMENT"],/^%[^\r\n]*/,null,"%"],[PR["PR_COMMENT"],/^\/\*[\s\S]*?\*\//],[PR["PR_KEYWORD"],/^\s*:-\s(c(a(lls|tegory)|oinductive)|p(ublic|r(ot(ocol|ected)|ivate))|e(l(if|se)|n(coding|sure_loaded)|xport)|i(f|n(clude|itialization|fo))|alias|d(ynamic|iscontiguous)|m(eta_(non_terminal|predicate)|od(e|ule)|ultifile)|reexport|s(et_(logtalk|prolog)_flag|ynchronized)|o(bject|p)|use(s|_module))/],[PR["PR_KEYWORD"],/^\s*:-\s(e(lse|nd(if|_(category|object|protocol)))|built_in|dynamic|synchronized|threaded)/],[PR["PR_TYPE"],/^[A-Z_][a-zA-Z0-9_]*/],[PR["PR_PUNCTUATION"],/^[.,;{}:^<>=\\/+*?#!-]/]]),["logtalk","lgt"]);
//rebuild by neat 