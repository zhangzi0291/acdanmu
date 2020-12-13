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
     * LinkErrorCode enum.
     * @name AcFunDanmu.LinkErrorCode
     * @enum {number}
     * @property {number} SUCC=0 SUCC value
     * @property {number} BASIC_MIN=10000 BASIC_MIN value
     * @property {number} INTERNEL_ERROR=10001 INTERNEL_ERROR value
     * @property {number} SERVICE_UNAVAILABLE=10002 SERVICE_UNAVAILABLE value
     * @property {number} SERVICE_TIMEOUT=10003 SERVICE_TIMEOUT value
     * @property {number} INVALID_TOKEN=10004 INVALID_TOKEN value
     * @property {number} REG_ENCYRPT_WITHOUT_TOKEN=10005 REG_ENCYRPT_WITHOUT_TOKEN value
     * @property {number} PARSE_PB_HDR_FAIL=10006 PARSE_PB_HDR_FAIL value
     * @property {number} PARSE_PB_PLD_FAIL=10007 PARSE_PB_PLD_FAIL value
     * @property {number} PARSE_PB_FAIL=10008 PARSE_PB_FAIL value
     * @property {number} DECODED_LEN_FAIL=10009 DECODED_LEN_FAIL value
     * @property {number} INVALID_KEY=10010 INVALID_KEY value
     * @property {number} ENCRYPT_FAIL=10011 ENCRYPT_FAIL value
     * @property {number} DECRYPT_FAIL=10012 DECRYPT_FAIL value
     * @property {number} INVALID_TAG=10013 INVALID_TAG value
     * @property {number} INVALID_VER=10014 INVALID_VER value
     * @property {number} INVALID_COMPRESS_TYPE=10016 INVALID_COMPRESS_TYPE value
     * @property {number} INVALID_ENCRYPT_TYPE=10017 INVALID_ENCRYPT_TYPE value
     * @property {number} NOT_REGISTER=10018 NOT_REGISTER value
     * @property {number} USER_NOT_ONLINE=10019 USER_NOT_ONLINE value
     * @property {number} INVALID_COMMAND=10020 INVALID_COMMAND value
     * @property {number} PUSH_UNREGISTER_ERROR=10021 PUSH_UNREGISTER_ERROR value
     * @property {number} INVALID_SID=10022 INVALID_SID value
     * @property {number} INVALID_INSTANCE_ID=10023 INVALID_INSTANCE_ID value
     * @property {number} CLIENT_LOCALE_NOT_MATCH=10024 CLIENT_LOCALE_NOT_MATCH value
     * @property {number} INVALID_TOKEN_PASSWORD_CHANGED=10025 INVALID_TOKEN_PASSWORD_CHANGED value
     * @property {number} INVALID_TOKEN_TOKEN_EXPIRED=10026 INVALID_TOKEN_TOKEN_EXPIRED value
     * @property {number} INVALID_TOKEN_TOKEN_VALUE_ERROR=10027 INVALID_TOKEN_TOKEN_VALUE_ERROR value
     * @property {number} INVALID_TOKEN_LOGIN_ON_OTHER_DEVICE=10028 INVALID_TOKEN_LOGIN_ON_OTHER_DEVICE value
     * @property {number} FORCE_RECONNECT=10029 FORCE_RECONNECT value
     * @property {number} CLIENT_TIMEOUT=10030 CLIENT_TIMEOUT value
     * @property {number} INVALID_ARGUMENT=10031 INVALID_ARGUMENT value
     * @property {number} INVALID_FORMAT_TOKEN=10032 INVALID_FORMAT_TOKEN value
     * @property {number} EMPTY_PAYLOAD=10033 EMPTY_PAYLOAD value
     * @property {number} COMPRESS_FAIL=10034 COMPRESS_FAIL value
     * @property {number} DECOMPRESS_FAIL=10035 DECOMPRESS_FAIL value
     * @property {number} OUT_OF_ORDER=10036 OUT_OF_ORDER value
     * @property {number} BASIC_MAX=19999 BASIC_MAX value
     */
    AcFunDanmu.LinkErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCC"] = 0;
        values[valuesById[10000] = "BASIC_MIN"] = 10000;
        values[valuesById[10001] = "INTERNEL_ERROR"] = 10001;
        values[valuesById[10002] = "SERVICE_UNAVAILABLE"] = 10002;
        values[valuesById[10003] = "SERVICE_TIMEOUT"] = 10003;
        values[valuesById[10004] = "INVALID_TOKEN"] = 10004;
        values[valuesById[10005] = "REG_ENCYRPT_WITHOUT_TOKEN"] = 10005;
        values[valuesById[10006] = "PARSE_PB_HDR_FAIL"] = 10006;
        values[valuesById[10007] = "PARSE_PB_PLD_FAIL"] = 10007;
        values[valuesById[10008] = "PARSE_PB_FAIL"] = 10008;
        values[valuesById[10009] = "DECODED_LEN_FAIL"] = 10009;
        values[valuesById[10010] = "INVALID_KEY"] = 10010;
        values[valuesById[10011] = "ENCRYPT_FAIL"] = 10011;
        values[valuesById[10012] = "DECRYPT_FAIL"] = 10012;
        values[valuesById[10013] = "INVALID_TAG"] = 10013;
        values[valuesById[10014] = "INVALID_VER"] = 10014;
        values[valuesById[10016] = "INVALID_COMPRESS_TYPE"] = 10016;
        values[valuesById[10017] = "INVALID_ENCRYPT_TYPE"] = 10017;
        values[valuesById[10018] = "NOT_REGISTER"] = 10018;
        values[valuesById[10019] = "USER_NOT_ONLINE"] = 10019;
        values[valuesById[10020] = "INVALID_COMMAND"] = 10020;
        values[valuesById[10021] = "PUSH_UNREGISTER_ERROR"] = 10021;
        values[valuesById[10022] = "INVALID_SID"] = 10022;
        values[valuesById[10023] = "INVALID_INSTANCE_ID"] = 10023;
        values[valuesById[10024] = "CLIENT_LOCALE_NOT_MATCH"] = 10024;
        values[valuesById[10025] = "INVALID_TOKEN_PASSWORD_CHANGED"] = 10025;
        values[valuesById[10026] = "INVALID_TOKEN_TOKEN_EXPIRED"] = 10026;
        values[valuesById[10027] = "INVALID_TOKEN_TOKEN_VALUE_ERROR"] = 10027;
        values[valuesById[10028] = "INVALID_TOKEN_LOGIN_ON_OTHER_DEVICE"] = 10028;
        values[valuesById[10029] = "FORCE_RECONNECT"] = 10029;
        values[valuesById[10030] = "CLIENT_TIMEOUT"] = 10030;
        values[valuesById[10031] = "INVALID_ARGUMENT"] = 10031;
        values[valuesById[10032] = "INVALID_FORMAT_TOKEN"] = 10032;
        values[valuesById[10033] = "EMPTY_PAYLOAD"] = 10033;
        values[valuesById[10034] = "COMPRESS_FAIL"] = 10034;
        values[valuesById[10035] = "DECOMPRESS_FAIL"] = 10035;
        values[valuesById[10036] = "OUT_OF_ORDER"] = 10036;
        values[valuesById[19999] = "BASIC_MAX"] = 19999;
        return values;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
