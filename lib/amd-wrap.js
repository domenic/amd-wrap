"use strict";

module.exports = function (moduleName, commonJSModuleText) {
    var content;
    var modulePartInDefine = "";
    if(!commonJSModuleText) {
        content = moduleName;
    } else {
        modulePartInDefine = moduleName ? ("'" + moduleName + "', ") : "";
        content = commonJSModuleText;
    }
    if (/^\s*?define\(\s*?.*?function\s*?\(\s*?require/.test(content)) {
        return content;
    } else {
        return "define(" + modulePartInDefine +  "function (require, exports, module) {\n" +
            content +
            "\n});\n";
    }
};
