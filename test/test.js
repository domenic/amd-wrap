"use strict";

var path = require("path");
var fs = require("fs");
var assert = require("assert");
var amdWrap = require("..");

// Why am I using Mocha for this, you ask? Because of the great string diffing, I answer.

specify("It wraps correctly", function () {
    var input = fs.readFileSync(path.resolve(__dirname, "fixtures/last.js"), "utf-8");
    var output = amdWrap(input);
    var expected = fs.readFileSync(path.resolve(__dirname, "fixtures/last.amd.js"), "utf-8");

    assert.strictEqual(output, expected);
});

specify("It doesn't re-wrap when the string is already wrapped", function () {
    var input = fs.readFileSync(path.resolve(__dirname, "fixtures/last.amd.js"), "utf-8");
    var output = amdWrap(input);

    assert.strictEqual(output, input);
});

specify("It doesn't re-wrap when the string is already wrapped without space", function () {
    var input = fs.readFileSync(path.resolve(__dirname, "fixtures/prewrappedSansSpace.js"), "utf-8");
    var output = amdWrap(input);

    assert.strictEqual(output, input);
});

specify("It can be disabled in /* comment", function () {
    var input = fs.readFileSync(path.resolve(__dirname, "fixtures/disabledSlashStar.js"), "utf-8");
    var output = amdWrap(input);

    assert.strictEqual(output, input);
});

specify("It can be disabled in // comment", function () {
    var input = fs.readFileSync(path.resolve(__dirname, "fixtures/disabledSlashes.js"), "utf-8");
    var output = amdWrap(input);

    assert.strictEqual(output, input);
});
