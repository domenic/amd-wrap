"use strict";

module.exports = function (commonJSModuleText) {
    if (/^define\(function \(require/.test(commonJSModuleText)) {
        return commonJSModuleText;
    } else {
        return "define(function (require, exports, module) {" + commonJSModuleText + "\n});\n";
    }
};
