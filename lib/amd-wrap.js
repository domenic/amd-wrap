"use strict";

var RE = {
    alreadyWrapped: /^define\(function *\(require/,
    oldStyle: /^\(function\(/,
    disabled: /^\/[\/\*]+ *amd-wrap:disable/,
};

var leaveAlonePattern = new RegExp(
    RE.alreadyWrapped.source + "|" +
    RE.oldStyle.source + "|" +
    RE.disabled.source
);

module.exports = function (commonJSModuleText) {
    if (leaveAlonePattern.test(commonJSModuleText)) {
        return commonJSModuleText;
    } else {
        return "define(function (require, exports, module) {" + commonJSModuleText + "\n});\n";
    }
};
