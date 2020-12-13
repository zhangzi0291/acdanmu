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
     * ZtLivePkProto enum.
     * @name AcFunDanmu.ZtLivePkProto
     * @enum {number}
     * @property {number} d=0 d value
     * @property {number} e=1 e value
     * @property {number} f=2 f value
     * @property {number} g=3 g value
     */
    AcFunDanmu.ZtLivePkProto = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "d"] = 0;
        values[valuesById[1] = "e"] = 1;
        values[valuesById[2] = "f"] = 2;
        values[valuesById[3] = "g"] = 3;
        return values;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
