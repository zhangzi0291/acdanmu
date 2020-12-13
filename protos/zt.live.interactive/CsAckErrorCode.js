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
     * CsAckErrorCode enum.
     * @name AcFunDanmu.CsAckErrorCode
     * @enum {number}
     * @property {number} SUCCESS_CS_ACK=0 SUCCESS_CS_ACK value
     * @property {number} LIVE_CLOSED=1 LIVE_CLOSED value
     * @property {number} TICKET_ILLEGAL=2 TICKET_ILLEGAL value
     * @property {number} ATTACH_ILLEGAL=3 ATTACH_ILLEGAL value
     * @property {number} USER_NOT_IN_ROOM=4 USER_NOT_IN_ROOM value
     * @property {number} SERVER_ERROR=5 SERVER_ERROR value
     * @property {number} REQUEST_PARAM_INVALID=6 REQUEST_PARAM_INVALID value
     * @property {number} ROOM_NOT_EXIST_IN_STATE_MANAGER=7 ROOM_NOT_EXIST_IN_STATE_MANAGER value
     * @property {number} NEW_LIVE_OPENED=8 NEW_LIVE_OPENED value
     */
    AcFunDanmu.CsAckErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS_CS_ACK"] = 0;
        values[valuesById[1] = "LIVE_CLOSED"] = 1;
        values[valuesById[2] = "TICKET_ILLEGAL"] = 2;
        values[valuesById[3] = "ATTACH_ILLEGAL"] = 3;
        values[valuesById[4] = "USER_NOT_IN_ROOM"] = 4;
        values[valuesById[5] = "SERVER_ERROR"] = 5;
        values[valuesById[6] = "REQUEST_PARAM_INVALID"] = 6;
        values[valuesById[7] = "ROOM_NOT_EXIST_IN_STATE_MANAGER"] = 7;
        values[valuesById[8] = "NEW_LIVE_OPENED"] = 8;
        return values;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
