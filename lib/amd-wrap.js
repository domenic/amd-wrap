"use strict";

module.exports = function (commonJSModuleText) {
    return "define(function (require, exports, module) {" + commonJSModuleText + "\n});\n";
};
