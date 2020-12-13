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
     * ZtLiveDownstreamPayloadErrorCode enum.
     * @name AcFunDanmu.ZtLiveDownstreamPayloadErrorCode
     * @enum {number}
     * @property {number} SUCCESS_DOWNSTREAM_PAYLOAD=0 SUCCESS_DOWNSTREAM_PAYLOAD value
     * @property {number} CS_CMD_PARSE_ERROR=100001 CS_CMD_PARSE_ERROR value
     * @property {number} CS_CMD_CMD_NOT_SUPPORT=100002 CS_CMD_CMD_NOT_SUPPORT value
     * @property {number} CS_CMD_TICKET_ILLEGAL=100003 CS_CMD_TICKET_ILLEGAL value
     */
    AcFunDanmu.ZtLiveDownstreamPayloadErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS_DOWNSTREAM_PAYLOAD"] = 0;
        values[valuesById[100001] = "CS_CMD_PARSE_ERROR"] = 100001;
        values[valuesById[100002] = "CS_CMD_CMD_NOT_SUPPORT"] = 100002;
        values[valuesById[100003] = "CS_CMD_TICKET_ILLEGAL"] = 100003;
        return values;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
