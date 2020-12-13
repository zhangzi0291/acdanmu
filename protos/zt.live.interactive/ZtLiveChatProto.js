/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AcFunDanmu = (function() {

    /**
     * Namespace AcFunDanmu.
     * @exports AcFunDanmu
     * @namespace
     */
    var AcFunDanmu = {};

    /**
     * ZtLiveChatProto enum.
     * @name AcFunDanmu.ZtLiveChatProto
     * @enum {number}
     * @property {number} a=0 a value
     * @property {number} b=1 b value
     * @property {number} c=2 c value
     */
    AcFunDanmu.ZtLiveChatProto = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "a"] = 0;
        values[valuesById[1] = "b"] = 1;
        values[valuesById[2] = "c"] = 2;
        return values;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
