// build time:Sun Sep 17 2017 21:51:45 GMT+0800 (中国标准时间)
PR["registerLangHandler"](PR["createSimpleLexer"]([],[[PR["PR_PLAIN"],/^[\t\n\r \xA0]+/],[PR["PR_COMMENT"],/^\/\/.*/],[PR["PR_COMMENT"],/^\/\*[\s\S]*?(?:\*\/|$)/],[PR["PR_STRING"],/^b"(?:[^\\]|\\(?:.|x[\da-fA-F]{2}))*?"/],[PR["PR_STRING"],/^"(?:[^\\]|\\(?:.|x[\da-fA-F]{2}|u\{\[\da-fA-F]{1,6}\}))*?"/],[PR["PR_STRING"],/^b?r(#*)\"[\s\S]*?\"\1/],[PR["PR_STRING"],/^b'([^\\]|\\(.|x[\da-fA-F]{2}))'/],[PR["PR_STRING"],/^'([^\\]|\\(.|x[\da-fA-F]{2}|u\{[\da-fA-F]{1,6}\}))'/],[PR["PR_TAG"],/^'\w+?\b/],[PR["PR_KEYWORD"],/^(?:match|if|else|as|break|box|continue|extern|fn|for|in|if|impl|let|loop|pub|return|super|unsafe|where|while|use|mod|trait|struct|enum|type|move|mut|ref|static|const|crate)\b/],[PR["PR_KEYWORD"],/^(?:alignof|become|do|offsetof|priv|pure|sizeof|typeof|unsized|yield|abstract|virtual|final|override|macro)\b/],[PR["PR_TYPE"],/^(?:[iu](8|16|32|64|size)|char|bool|f32|f64|str|Self)\b/],[PR["PR_TYPE"],/^(?:Copy|Send|Sized|Sync|Drop|Fn|FnMut|FnOnce|Box|ToOwned|Clone|PartialEq|PartialOrd|Eq|Ord|AsRef|AsMut|Into|From|Default|Iterator|Extend|IntoIterator|DoubleEndedIterator|ExactSizeIterator|Option|Some|None|Result|Ok|Err|SliceConcatExt|String|ToString|Vec)\b/],[PR["PR_LITERAL"],/^(self|true|false|null)\b/],[PR["PR_LITERAL"],/^\d[0-9_]*(?:[iu](?:size|8|16|32|64))?/],[PR["PR_LITERAL"],/^0x[a-fA-F0-9_]+(?:[iu](?:size|8|16|32|64))?/],[PR["PR_LITERAL"],/^0o[0-7_]+(?:[iu](?:size|8|16|32|64))?/],[PR["PR_LITERAL"],/^0b[01_]+(?:[iu](?:size|8|16|32|64))?/],[PR["PR_LITERAL"],/^\d[0-9_]*\.(?![^\s\d.])/],[PR["PR_LITERAL"],/^\d[0-9_]*(?:\.\d[0-9_]*)(?:[eE][+-]?[0-9_]+)?(?:f32|f64)?/],[PR["PR_LITERAL"],/^\d[0-9_]*(?:\.\d[0-9_]*)?(?:[eE][+-]?[0-9_]+)(?:f32|f64)?/],[PR["PR_LITERAL"],/^\d[0-9_]*(?:\.\d[0-9_]*)?(?:[eE][+-]?[0-9_]+)?(?:f32|f64)/],[PR["PR_ATTRIB_NAME"],/^[a-z_]\w*!/i],[PR["PR_PLAIN"],/^[a-z_]\w*/i],[PR["PR_ATTRIB_VALUE"],/^#!?\[[\s\S]*?\]/],[PR["PR_PUNCTUATION"],/^[+\-\/*=^&|!<>%[\](){}?:.,;]/],[PR["PR_PLAIN"],/./]]),["rust"]);
//rebuild by neat 