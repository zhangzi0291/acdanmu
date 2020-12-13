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

    AcFunDanmu.ZtCommonInfo = (function() {

        /**
         * Properties of a ZtCommonInfo.
         * @memberof AcFunDanmu
         * @interface IZtCommonInfo
         * @property {string|null} [kpn] ZtCommonInfo kpn
         * @property {string|null} [kpf] ZtCommonInfo kpf
         * @property {string|null} [subBiz] ZtCommonInfo subBiz
         * @property {number|Long|null} [uid] ZtCommonInfo uid
         * @property {string|null} [did] ZtCommonInfo did
         * @property {number|Long|null} [clientIp] ZtCommonInfo clientIp
         * @property {string|null} [appVer] ZtCommonInfo appVer
         * @property {string|null} [ver] ZtCommonInfo ver
         * @property {string|null} [lat] ZtCommonInfo lat
         * @property {string|null} [lon] ZtCommonInfo lon
         * @property {string|null} [mod] ZtCommonInfo mod
         * @property {string|null} [net] ZtCommonInfo net
         * @property {string|null} [sys] ZtCommonInfo sys
         * @property {string|null} [c] ZtCommonInfo c
         * @property {string|null} [language] ZtCommonInfo language
         * @property {string|null} [countryCode] ZtCommonInfo countryCode
         */

        /**
         * Constructs a new ZtCommonInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtCommonInfo.
         * @implements IZtCommonInfo
         * @constructor
         * @param {AcFunDanmu.IZtCommonInfo=} [properties] Properties to set
         */
        function ZtCommonInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtCommonInfo kpn.
         * @member {string} kpn
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.kpn = "";

        /**
         * ZtCommonInfo kpf.
         * @member {string} kpf
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.kpf = "";

        /**
         * ZtCommonInfo subBiz.
         * @member {string} subBiz
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.subBiz = "";

        /**
         * ZtCommonInfo uid.
         * @member {number|Long} uid
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtCommonInfo did.
         * @member {string} did
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.did = "";

        /**
         * ZtCommonInfo clientIp.
         * @member {number|Long} clientIp
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.clientIp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtCommonInfo appVer.
         * @member {string} appVer
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.appVer = "";

        /**
         * ZtCommonInfo ver.
         * @member {string} ver
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.ver = "";

        /**
         * ZtCommonInfo lat.
         * @member {string} lat
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.lat = "";

        /**
         * ZtCommonInfo lon.
         * @member {string} lon
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.lon = "";

        /**
         * ZtCommonInfo mod.
         * @member {string} mod
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.mod = "";

        /**
         * ZtCommonInfo net.
         * @member {string} net
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.net = "";

        /**
         * ZtCommonInfo sys.
         * @member {string} sys
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.sys = "";

        /**
         * ZtCommonInfo c.
         * @member {string} c
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.c = "";

        /**
         * ZtCommonInfo language.
         * @member {string} language
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.language = "";

        /**
         * ZtCommonInfo countryCode.
         * @member {string} countryCode
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.countryCode = "";

        /**
         * Creates a new ZtCommonInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {AcFunDanmu.IZtCommonInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtCommonInfo} ZtCommonInfo instance
         */
        ZtCommonInfo.create = function create(properties) {
            return new ZtCommonInfo(properties);
        };

        /**
         * Encodes the specified ZtCommonInfo message. Does not implicitly {@link AcFunDanmu.ZtCommonInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {AcFunDanmu.IZtCommonInfo} message ZtCommonInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtCommonInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.kpn != null && Object.hasOwnProperty.call(message, "kpn"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.kpn);
            if (message.kpf != null && Object.hasOwnProperty.call(message, "kpf"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.kpf);
            if (message.subBiz != null && Object.hasOwnProperty.call(message, "subBiz"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.subBiz);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.uid);
            if (message.did != null && Object.hasOwnProperty.call(message, "did"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.did);
            if (message.clientIp != null && Object.hasOwnProperty.call(message, "clientIp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.clientIp);
            if (message.appVer != null && Object.hasOwnProperty.call(message, "appVer"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.appVer);
            if (message.ver != null && Object.hasOwnProperty.call(message, "ver"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.ver);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.lon);
            if (message.mod != null && Object.hasOwnProperty.call(message, "mod"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.mod);
            if (message.net != null && Object.hasOwnProperty.call(message, "net"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.net);
            if (message.sys != null && Object.hasOwnProperty.call(message, "sys"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.sys);
            if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.c);
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.language);
            if (message.countryCode != null && Object.hasOwnProperty.call(message, "countryCode"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.countryCode);
            return writer;
        };

        /**
         * Encodes the specified ZtCommonInfo message, length delimited. Does not implicitly {@link AcFunDanmu.ZtCommonInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {AcFunDanmu.IZtCommonInfo} message ZtCommonInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtCommonInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtCommonInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtCommonInfo} ZtCommonInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtCommonInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtCommonInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.kpn = reader.string();
                    break;
                case 2:
                    message.kpf = reader.string();
                    break;
                case 3:
                    message.subBiz = reader.string();
                    break;
                case 4:
                    message.uid = reader.int64();
                    break;
                case 5:
                    message.did = reader.string();
                    break;
                case 6:
                    message.clientIp = reader.int64();
                    break;
                case 7:
                    message.appVer = reader.string();
                    break;
                case 8:
                    message.ver = reader.string();
                    break;
                case 9:
                    message.lat = reader.string();
                    break;
                case 10:
                    message.lon = reader.string();
                    break;
                case 11:
                    message.mod = reader.string();
                    break;
                case 12:
                    message.net = reader.string();
                    break;
                case 13:
                    message.sys = reader.string();
                    break;
                case 14:
                    message.c = reader.string();
                    break;
                case 15:
                    message.language = reader.string();
                    break;
                case 16:
                    message.countryCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtCommonInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtCommonInfo} ZtCommonInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtCommonInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtCommonInfo message.
         * @function verify
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtCommonInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.kpn != null && message.hasOwnProperty("kpn"))
                if (!$util.isString(message.kpn))
                    return "kpn: string expected";
            if (message.kpf != null && message.hasOwnProperty("kpf"))
                if (!$util.isString(message.kpf))
                    return "kpf: string expected";
            if (message.subBiz != null && message.hasOwnProperty("subBiz"))
                if (!$util.isString(message.subBiz))
                    return "subBiz: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.did != null && message.hasOwnProperty("did"))
                if (!$util.isString(message.did))
                    return "did: string expected";
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                if (!$util.isInteger(message.clientIp) && !(message.clientIp && $util.isInteger(message.clientIp.low) && $util.isInteger(message.clientIp.high)))
                    return "clientIp: integer|Long expected";
            if (message.appVer != null && message.hasOwnProperty("appVer"))
                if (!$util.isString(message.appVer))
                    return "appVer: string expected";
            if (message.ver != null && message.hasOwnProperty("ver"))
                if (!$util.isString(message.ver))
                    return "ver: string expected";
            if (message.lat != null && message.hasOwnProperty("lat"))
                if (!$util.isString(message.lat))
                    return "lat: string expected";
            if (message.lon != null && message.hasOwnProperty("lon"))
                if (!$util.isString(message.lon))
                    return "lon: string expected";
            if (message.mod != null && message.hasOwnProperty("mod"))
                if (!$util.isString(message.mod))
                    return "mod: string expected";
            if (message.net != null && message.hasOwnProperty("net"))
                if (!$util.isString(message.net))
                    return "net: string expected";
            if (message.sys != null && message.hasOwnProperty("sys"))
                if (!$util.isString(message.sys))
                    return "sys: string expected";
            if (message.c != null && message.hasOwnProperty("c"))
                if (!$util.isString(message.c))
                    return "c: string expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                if (!$util.isString(message.countryCode))
                    return "countryCode: string expected";
            return null;
        };

        /**
         * Creates a ZtCommonInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtCommonInfo} ZtCommonInfo
         */
        ZtCommonInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtCommonInfo)
                return object;
            var message = new $root.AcFunDanmu.ZtCommonInfo();
            if (object.kpn != null)
                message.kpn = String(object.kpn);
            if (object.kpf != null)
                message.kpf = String(object.kpf);
            if (object.subBiz != null)
                message.subBiz = String(object.subBiz);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.did != null)
                message.did = String(object.did);
            if (object.clientIp != null)
                if ($util.Long)
                    (message.clientIp = $util.Long.fromValue(object.clientIp)).unsigned = false;
                else if (typeof object.clientIp === "string")
                    message.clientIp = parseInt(object.clientIp, 10);
                else if (typeof object.clientIp === "number")
                    message.clientIp = object.clientIp;
                else if (typeof object.clientIp === "object")
                    message.clientIp = new $util.LongBits(object.clientIp.low >>> 0, object.clientIp.high >>> 0).toNumber();
            if (object.appVer != null)
                message.appVer = String(object.appVer);
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.lat != null)
                message.lat = String(object.lat);
            if (object.lon != null)
                message.lon = String(object.lon);
            if (object.mod != null)
                message.mod = String(object.mod);
            if (object.net != null)
                message.net = String(object.net);
            if (object.sys != null)
                message.sys = String(object.sys);
            if (object.c != null)
                message.c = String(object.c);
            if (object.language != null)
                message.language = String(object.language);
            if (object.countryCode != null)
                message.countryCode = String(object.countryCode);
            return message;
        };

        /**
         * Creates a plain object from a ZtCommonInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {AcFunDanmu.ZtCommonInfo} message ZtCommonInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtCommonInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.kpn = "";
                object.kpf = "";
                object.subBiz = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.did = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientIp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientIp = options.longs === String ? "0" : 0;
                object.appVer = "";
                object.ver = "";
                object.lat = "";
                object.lon = "";
                object.mod = "";
                object.net = "";
                object.sys = "";
                object.c = "";
                object.language = "";
                object.countryCode = "";
            }
            if (message.kpn != null && message.hasOwnProperty("kpn"))
                object.kpn = message.kpn;
            if (message.kpf != null && message.hasOwnProperty("kpf"))
                object.kpf = message.kpf;
            if (message.subBiz != null && message.hasOwnProperty("subBiz"))
                object.subBiz = message.subBiz;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.did != null && message.hasOwnProperty("did"))
                object.did = message.did;
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                if (typeof message.clientIp === "number")
                    object.clientIp = options.longs === String ? String(message.clientIp) : message.clientIp;
                else
                    object.clientIp = options.longs === String ? $util.Long.prototype.toString.call(message.clientIp) : options.longs === Number ? new $util.LongBits(message.clientIp.low >>> 0, message.clientIp.high >>> 0).toNumber() : message.clientIp;
            if (message.appVer != null && message.hasOwnProperty("appVer"))
                object.appVer = message.appVer;
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = message.lat;
            if (message.lon != null && message.hasOwnProperty("lon"))
                object.lon = message.lon;
            if (message.mod != null && message.hasOwnProperty("mod"))
                object.mod = message.mod;
            if (message.net != null && message.hasOwnProperty("net"))
                object.net = message.net;
            if (message.sys != null && message.hasOwnProperty("sys"))
                object.sys = message.sys;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = message.c;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                object.countryCode = message.countryCode;
            return object;
        };

        /**
         * Converts this ZtCommonInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtCommonInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtCommonInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
