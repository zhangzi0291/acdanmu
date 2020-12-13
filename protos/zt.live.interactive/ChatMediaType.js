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
     * ChatMediaType enum.
     * @name AcFunDanmu.ChatMediaType
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} AUDIO=1 AUDIO value
     * @property {number} VIDEO=2 VIDEO value
     */
    AcFunDanmu.ChatMediaType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "AUDIO"] = 1;
        values[valuesById[2] = "VIDEO"] = 2;
        return values;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
