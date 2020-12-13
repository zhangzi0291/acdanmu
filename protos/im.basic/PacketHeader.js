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

    AcFunDanmu.PacketHeader = (function() {

        /**
         * Properties of a PacketHeader.
         * @memberof AcFunDanmu
         * @interface IPacketHeader
         * @property {number|null} [appId] PacketHeader appId
         * @property {number|Long|null} [uid] PacketHeader uid
         * @property {number|Long|null} [instanceId] PacketHeader instanceId
         * @property {number|null} [flags] PacketHeader flags
         * @property {AcFunDanmu.PacketHeader.EncodingType|null} [encodingType] PacketHeader encodingType
         * @property {number|null} [decodedPayloadLen] PacketHeader decodedPayloadLen
         * @property {AcFunDanmu.PacketHeader.EncryptionMode|null} [encryptionMode] PacketHeader encryptionMode
         * @property {AcFunDanmu.ITokenInfo|null} [tokenInfo] PacketHeader tokenInfo
         * @property {number|Long|null} [seqId] PacketHeader seqId
         * @property {Array.<AcFunDanmu.PacketHeader.Feature>|null} [features] PacketHeader features
         * @property {string|null} [kpn] PacketHeader kpn
         */

        /**
         * Constructs a new PacketHeader.
         * @memberof AcFunDanmu
         * @classdesc Represents a PacketHeader.
         * @implements IPacketHeader
         * @constructor
         * @param {AcFunDanmu.IPacketHeader=} [properties] Properties to set
         */
        function PacketHeader(properties) {
            this.features = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketHeader appId.
         * @member {number} appId
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.appId = 0;

        /**
         * PacketHeader uid.
         * @member {number|Long} uid
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketHeader instanceId.
         * @member {number|Long} instanceId
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketHeader flags.
         * @member {number} flags
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.flags = 0;

        /**
         * PacketHeader encodingType.
         * @member {AcFunDanmu.PacketHeader.EncodingType} encodingType
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.encodingType = 0;

        /**
         * PacketHeader decodedPayloadLen.
         * @member {number} decodedPayloadLen
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.decodedPayloadLen = 0;

        /**
         * PacketHeader encryptionMode.
         * @member {AcFunDanmu.PacketHeader.EncryptionMode} encryptionMode
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.encryptionMode = 0;

        /**
         * PacketHeader tokenInfo.
         * @member {AcFunDanmu.ITokenInfo|null|undefined} tokenInfo
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.tokenInfo = null;

        /**
         * PacketHeader seqId.
         * @member {number|Long} seqId
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.seqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketHeader features.
         * @member {Array.<AcFunDanmu.PacketHeader.Feature>} features
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.features = $util.emptyArray;

        /**
         * PacketHeader kpn.
         * @member {string} kpn
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         */
        PacketHeader.prototype.kpn = "";

        /**
         * Creates a new PacketHeader instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PacketHeader
         * @static
         * @param {AcFunDanmu.IPacketHeader=} [properties] Properties to set
         * @returns {AcFunDanmu.PacketHeader} PacketHeader instance
         */
        PacketHeader.create = function create(properties) {
            return new PacketHeader(properties);
        };

        /**
         * Encodes the specified PacketHeader message. Does not implicitly {@link AcFunDanmu.PacketHeader.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PacketHeader
         * @static
         * @param {AcFunDanmu.IPacketHeader} message PacketHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.appId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.instanceId);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.flags);
            if (message.encodingType != null && Object.hasOwnProperty.call(message, "encodingType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.encodingType);
            if (message.decodedPayloadLen != null && Object.hasOwnProperty.call(message, "decodedPayloadLen"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.decodedPayloadLen);
            if (message.encryptionMode != null && Object.hasOwnProperty.call(message, "encryptionMode"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.encryptionMode);
            if (message.tokenInfo != null && Object.hasOwnProperty.call(message, "tokenInfo"))
                $root.AcFunDanmu.TokenInfo.encode(message.tokenInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.seqId != null && Object.hasOwnProperty.call(message, "seqId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.seqId);
            if (message.features != null && message.features.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (var i = 0; i < message.features.length; ++i)
                    writer.int32(message.features[i]);
                writer.ldelim();
            }
            if (message.kpn != null && Object.hasOwnProperty.call(message, "kpn"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.kpn);
            return writer;
        };

        /**
         * Encodes the specified PacketHeader message, length delimited. Does not implicitly {@link AcFunDanmu.PacketHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PacketHeader
         * @static
         * @param {AcFunDanmu.IPacketHeader} message PacketHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketHeader message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PacketHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PacketHeader} PacketHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PacketHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                case 3:
                    message.instanceId = reader.int64();
                    break;
                case 5:
                    message.flags = reader.uint32();
                    break;
                case 6:
                    message.encodingType = reader.int32();
                    break;
                case 7:
                    message.decodedPayloadLen = reader.uint32();
                    break;
                case 8:
                    message.encryptionMode = reader.int32();
                    break;
                case 9:
                    message.tokenInfo = $root.AcFunDanmu.TokenInfo.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.seqId = reader.int64();
                    break;
                case 11:
                    if (!(message.features && message.features.length))
                        message.features = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.features.push(reader.int32());
                    } else
                        message.features.push(reader.int32());
                    break;
                case 12:
                    message.kpn = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PacketHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PacketHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PacketHeader} PacketHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketHeader message.
         * @function verify
         * @memberof AcFunDanmu.PacketHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isInteger(message.appId))
                    return "appId: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                switch (message.encodingType) {
                default:
                    return "encodingType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.decodedPayloadLen != null && message.hasOwnProperty("decodedPayloadLen"))
                if (!$util.isInteger(message.decodedPayloadLen))
                    return "decodedPayloadLen: integer expected";
            if (message.encryptionMode != null && message.hasOwnProperty("encryptionMode"))
                switch (message.encryptionMode) {
                default:
                    return "encryptionMode: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.tokenInfo != null && message.hasOwnProperty("tokenInfo")) {
                var error = $root.AcFunDanmu.TokenInfo.verify(message.tokenInfo);
                if (error)
                    return "tokenInfo." + error;
            }
            if (message.seqId != null && message.hasOwnProperty("seqId"))
                if (!$util.isInteger(message.seqId) && !(message.seqId && $util.isInteger(message.seqId.low) && $util.isInteger(message.seqId.high)))
                    return "seqId: integer|Long expected";
            if (message.features != null && message.hasOwnProperty("features")) {
                if (!Array.isArray(message.features))
                    return "features: array expected";
                for (var i = 0; i < message.features.length; ++i)
                    switch (message.features[i]) {
                    default:
                        return "features: enum value[] expected";
                    case 0:
                    case 1:
                        break;
                    }
            }
            if (message.kpn != null && message.hasOwnProperty("kpn"))
                if (!$util.isString(message.kpn))
                    return "kpn: string expected";
            return null;
        };

        /**
         * Creates a PacketHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PacketHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PacketHeader} PacketHeader
         */
        PacketHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PacketHeader)
                return object;
            var message = new $root.AcFunDanmu.PacketHeader();
            if (object.appId != null)
                message.appId = object.appId | 0;
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.instanceId != null)
                if ($util.Long)
                    (message.instanceId = $util.Long.fromValue(object.instanceId)).unsigned = false;
                else if (typeof object.instanceId === "string")
                    message.instanceId = parseInt(object.instanceId, 10);
                else if (typeof object.instanceId === "number")
                    message.instanceId = object.instanceId;
                else if (typeof object.instanceId === "object")
                    message.instanceId = new $util.LongBits(object.instanceId.low >>> 0, object.instanceId.high >>> 0).toNumber();
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            switch (object.encodingType) {
            case "kEncodingNone":
            case 0:
                message.encodingType = 0;
                break;
            case "kEncodingLz4":
            case 1:
                message.encodingType = 1;
                break;
            }
            if (object.decodedPayloadLen != null)
                message.decodedPayloadLen = object.decodedPayloadLen >>> 0;
            switch (object.encryptionMode) {
            case "kEncryptionNone":
            case 0:
                message.encryptionMode = 0;
                break;
            case "kEncryptionServiceToken":
            case 1:
                message.encryptionMode = 1;
                break;
            case "kEncryptionSessionKey":
            case 2:
                message.encryptionMode = 2;
                break;
            }
            if (object.tokenInfo != null) {
                if (typeof object.tokenInfo !== "object")
                    throw TypeError(".AcFunDanmu.PacketHeader.tokenInfo: object expected");
                message.tokenInfo = $root.AcFunDanmu.TokenInfo.fromObject(object.tokenInfo);
            }
            if (object.seqId != null)
                if ($util.Long)
                    (message.seqId = $util.Long.fromValue(object.seqId)).unsigned = false;
                else if (typeof object.seqId === "string")
                    message.seqId = parseInt(object.seqId, 10);
                else if (typeof object.seqId === "number")
                    message.seqId = object.seqId;
                else if (typeof object.seqId === "object")
                    message.seqId = new $util.LongBits(object.seqId.low >>> 0, object.seqId.high >>> 0).toNumber();
            if (object.features) {
                if (!Array.isArray(object.features))
                    throw TypeError(".AcFunDanmu.PacketHeader.features: array expected");
                message.features = [];
                for (var i = 0; i < object.features.length; ++i)
                    switch (object.features[i]) {
                    default:
                    case "kReserve":
                    case 0:
                        message.features[i] = 0;
                        break;
                    case "kCompressLz4":
                    case 1:
                        message.features[i] = 1;
                        break;
                    }
            }
            if (object.kpn != null)
                message.kpn = String(object.kpn);
            return message;
        };

        /**
         * Creates a plain object from a PacketHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PacketHeader
         * @static
         * @param {AcFunDanmu.PacketHeader} message PacketHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.features = [];
            if (options.defaults) {
                object.appId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
                object.flags = 0;
                object.encodingType = options.enums === String ? "kEncodingNone" : 0;
                object.decodedPayloadLen = 0;
                object.encryptionMode = options.enums === String ? "kEncryptionNone" : 0;
                object.tokenInfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seqId = options.longs === String ? "0" : 0;
                object.kpn = "";
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.encodingType != null && message.hasOwnProperty("encodingType"))
                object.encodingType = options.enums === String ? $root.AcFunDanmu.PacketHeader.EncodingType[message.encodingType] : message.encodingType;
            if (message.decodedPayloadLen != null && message.hasOwnProperty("decodedPayloadLen"))
                object.decodedPayloadLen = message.decodedPayloadLen;
            if (message.encryptionMode != null && message.hasOwnProperty("encryptionMode"))
                object.encryptionMode = options.enums === String ? $root.AcFunDanmu.PacketHeader.EncryptionMode[message.encryptionMode] : message.encryptionMode;
            if (message.tokenInfo != null && message.hasOwnProperty("tokenInfo"))
                object.tokenInfo = $root.AcFunDanmu.TokenInfo.toObject(message.tokenInfo, options);
            if (message.seqId != null && message.hasOwnProperty("seqId"))
                if (typeof message.seqId === "number")
                    object.seqId = options.longs === String ? String(message.seqId) : message.seqId;
                else
                    object.seqId = options.longs === String ? $util.Long.prototype.toString.call(message.seqId) : options.longs === Number ? new $util.LongBits(message.seqId.low >>> 0, message.seqId.high >>> 0).toNumber() : message.seqId;
            if (message.features && message.features.length) {
                object.features = [];
                for (var j = 0; j < message.features.length; ++j)
                    object.features[j] = options.enums === String ? $root.AcFunDanmu.PacketHeader.Feature[message.features[j]] : message.features[j];
            }
            if (message.kpn != null && message.hasOwnProperty("kpn"))
                object.kpn = message.kpn;
            return object;
        };

        /**
         * Converts this PacketHeader to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PacketHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Flags enum.
         * @name AcFunDanmu.PacketHeader.Flags
         * @enum {number}
         * @property {number} kDirUpstream=0 kDirUpstream value
         * @property {number} kDirDownstream=1 kDirDownstream value
         * @property {number} kDirMask=1 kDirMask value
         */
        PacketHeader.Flags = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kDirUpstream"] = 0;
            values[valuesById[1] = "kDirDownstream"] = 1;
            values["kDirMask"] = 1;
            return values;
        })();

        /**
         * EncodingType enum.
         * @name AcFunDanmu.PacketHeader.EncodingType
         * @enum {number}
         * @property {number} kEncodingNone=0 kEncodingNone value
         * @property {number} kEncodingLz4=1 kEncodingLz4 value
         */
        PacketHeader.EncodingType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kEncodingNone"] = 0;
            values[valuesById[1] = "kEncodingLz4"] = 1;
            return values;
        })();

        /**
         * EncryptionMode enum.
         * @name AcFunDanmu.PacketHeader.EncryptionMode
         * @enum {number}
         * @property {number} kEncryptionNone=0 kEncryptionNone value
         * @property {number} kEncryptionServiceToken=1 kEncryptionServiceToken value
         * @property {number} kEncryptionSessionKey=2 kEncryptionSessionKey value
         */
        PacketHeader.EncryptionMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kEncryptionNone"] = 0;
            values[valuesById[1] = "kEncryptionServiceToken"] = 1;
            values[valuesById[2] = "kEncryptionSessionKey"] = 2;
            return values;
        })();

        /**
         * Feature enum.
         * @name AcFunDanmu.PacketHeader.Feature
         * @enum {number}
         * @property {number} kReserve=0 kReserve value
         * @property {number} kCompressLz4=1 kCompressLz4 value
         */
        PacketHeader.Feature = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kReserve"] = 0;
            values[valuesById[1] = "kCompressLz4"] = 1;
            return values;
        })();

        return PacketHeader;
    })();

    AcFunDanmu.TokenInfo = (function() {

        /**
         * Properties of a TokenInfo.
         * @memberof AcFunDanmu
         * @interface ITokenInfo
         * @property {AcFunDanmu.TokenInfo.TokenType|null} [tokenType] TokenInfo tokenType
         * @property {Uint8Array|null} [token] TokenInfo token
         */

        /**
         * Constructs a new TokenInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a TokenInfo.
         * @implements ITokenInfo
         * @constructor
         * @param {AcFunDanmu.ITokenInfo=} [properties] Properties to set
         */
        function TokenInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenInfo tokenType.
         * @member {AcFunDanmu.TokenInfo.TokenType} tokenType
         * @memberof AcFunDanmu.TokenInfo
         * @instance
         */
        TokenInfo.prototype.tokenType = 0;

        /**
         * TokenInfo token.
         * @member {Uint8Array} token
         * @memberof AcFunDanmu.TokenInfo
         * @instance
         */
        TokenInfo.prototype.token = $util.newBuffer([]);

        /**
         * Creates a new TokenInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {AcFunDanmu.ITokenInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.TokenInfo} TokenInfo instance
         */
        TokenInfo.create = function create(properties) {
            return new TokenInfo(properties);
        };

        /**
         * Encodes the specified TokenInfo message. Does not implicitly {@link AcFunDanmu.TokenInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {AcFunDanmu.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tokenType != null && Object.hasOwnProperty.call(message, "tokenType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tokenType);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.token);
            return writer;
        };

        /**
         * Encodes the specified TokenInfo message, length delimited. Does not implicitly {@link AcFunDanmu.TokenInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {AcFunDanmu.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.TokenInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tokenType = reader.int32();
                    break;
                case 2:
                    message.token = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenInfo message.
         * @function verify
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tokenType != null && message.hasOwnProperty("tokenType"))
                switch (message.tokenType) {
                default:
                    return "tokenType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            return null;
        };

        /**
         * Creates a TokenInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.TokenInfo} TokenInfo
         */
        TokenInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.TokenInfo)
                return object;
            var message = new $root.AcFunDanmu.TokenInfo();
            switch (object.tokenType) {
            case "kInvalid":
            case 0:
                message.tokenType = 0;
                break;
            case "kServiceToken":
            case 1:
                message.tokenType = 1;
                break;
            }
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            return message;
        };

        /**
         * Creates a plain object from a TokenInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {AcFunDanmu.TokenInfo} message TokenInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tokenType = options.enums === String ? "kInvalid" : 0;
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
            }
            if (message.tokenType != null && message.hasOwnProperty("tokenType"))
                object.tokenType = options.enums === String ? $root.AcFunDanmu.TokenInfo.TokenType[message.tokenType] : message.tokenType;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            return object;
        };

        /**
         * Converts this TokenInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.TokenInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * TokenType enum.
         * @name AcFunDanmu.TokenInfo.TokenType
         * @enum {number}
         * @property {number} kInvalid=0 kInvalid value
         * @property {number} kServiceToken=1 kServiceToken value
         */
        TokenInfo.TokenType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kInvalid"] = 0;
            values[valuesById[1] = "kServiceToken"] = 1;
            return values;
        })();

        return TokenInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
