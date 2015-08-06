"use strict";

module.exports = function (moduleName, commonJSModuleText) {
    var content;
    var modName;
    if(!commonJSModuleText){
      content = moduleName;
    } else {
      modName = moduleName;
      content = commonJSModuleText;
    }
    if (/^\s*?define\(\s*?.*?function\s*?\(\s*?require/.test(content)) {
        return content;
    } else {
        return "define(" + (modName ? ("'" + modName + "', ") : "") + "function (require, exports, module) {\n" + content + "\n});\n";
    }
};
