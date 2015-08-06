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

specify("It doesn't re-wrap when the string is already wrapped", function () {
    var input = fs.readFileSync(path.resolve(__dirname, "fixtures/last.amd.js"), "utf-8");
    var output = amdWrap(input);
    var expected = fs.readFileSync(path.resolve(__dirname, "fixtures/last.amd.js"), "utf-8");

    assert.strictEqual(output, expected);
});

specify("It doesn't re-wrap when the string is already wrapped and there is one blank before define", function () {
    var input = fs.readFileSync(path.resolve(__dirname, "fixtures/blank-before-amd.js"), "utf-8");
    var output = amdWrap(input);
    var expected = fs.readFileSync(path.resolve(__dirname, "fixtures/blank-before-amd.js"), "utf-8");

    assert.strictEqual(output, expected);
});

specify("It doesn't re-wrap when the string is already wrapped and there is more param in define", function () {
    var input = fs.readFileSync(path.resolve(__dirname, "fixtures/more-param-amd.js"), "utf-8");
    var output = amdWrap(input);
    var expected = fs.readFileSync(path.resolve(__dirname, "fixtures/more-param-amd.js"), "utf-8");

    assert.strictEqual(output, expected);
});