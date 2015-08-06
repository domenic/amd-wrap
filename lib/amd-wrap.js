"use strict";

module.exports = function (commonJSModuleText) {
    if (/^\s*?define\(\s*?.*?function\s*?\(\s*?require/.test(commonJSModuleText)) {
        return commonJSModuleText;
    } else {
        return "define(function (require, exports, module) {" + commonJSModuleText + "\n});\n";
    }
};
