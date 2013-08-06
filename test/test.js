"use strict";

var path = require("path");
var fs = require("fs");
var assert = require("assert");
var amdWrap = require("..");

// Why am I using Mocha for this, you ask? Because of the great string diffing, I answer.

specify("It works", function () {
    var input = fs.readFileSync(path.resolve(__dirname, "fixtures/last.js"), "utf-8");
    var output = amdWrap(input);
    var expected = fs.readFileSync(path.resolve(__dirname, "fixtures/last.amd.js"), "utf-8");

    assert.strictEqual(output, expected);
});
