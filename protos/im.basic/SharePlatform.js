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
     * SharePlatform enum.
     * @name AcFunDanmu.SharePlatform
     * @enum {number}
     * @property {number} kSharePlatformInvalid=0 kSharePlatformInvalid value
     * @property {number} kSharePlatformWechat=1 kSharePlatformWechat value
     * @property {number} kSharePlatformWechatMoments=2 kSharePlatformWechatMoments value
     * @property {number} kSharePlatformQQ=3 kSharePlatformQQ value
     * @property {number} kSharePlatformQzone=4 kSharePlatformQzone value
     * @property {number} kSharePlatformWeibo=5 kSharePlatformWeibo value
     * @property {number} kSharePlatformKuaishou=6 kSharePlatformKuaishou value
     * @property {number} kSharePlatformFacebook=7 kSharePlatformFacebook value
     * @property {number} kSharePlatformTwitter=8 kSharePlatformTwitter value
     * @property {number} kSharePlatformGoogle=9 kSharePlatformGoogle value
     * @property {number} kSharePlatformKakao=10 kSharePlatformKakao value
     * @property {number} kSharePlatformZalo=11 kSharePlatformZalo value
     */
    AcFunDanmu.SharePlatform = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kSharePlatformInvalid"] = 0;
        values[valuesById[1] = "kSharePlatformWechat"] = 1;
        values[valuesById[2] = "kSharePlatformWechatMoments"] = 2;
        values[valuesById[3] = "kSharePlatformQQ"] = 3;
        values[valuesById[4] = "kSharePlatformQzone"] = 4;
        values[valuesById[5] = "kSharePlatformWeibo"] = 5;
        values[valuesById[6] = "kSharePlatformKuaishou"] = 6;
        values[valuesById[7] = "kSharePlatformFacebook"] = 7;
        values[valuesById[8] = "kSharePlatformTwitter"] = 8;
        values[valuesById[9] = "kSharePlatformGoogle"] = 9;
        values[valuesById[10] = "kSharePlatformKakao"] = 10;
        values[valuesById[11] = "kSharePlatformZalo"] = 11;
        return values;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
