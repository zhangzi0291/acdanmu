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

    AcFunDanmu.CommonActionSignalGift = (function() {

        /**
         * Properties of a CommonActionSignalGift.
         * @memberof AcFunDanmu
         * @interface ICommonActionSignalGift
         * @property {AcFunDanmu.IZtLiveUserInfo|null} [user] CommonActionSignalGift user
         * @property {number|Long|null} [sendTimeMs] CommonActionSignalGift sendTimeMs
         * @property {number|Long|null} [giftId] CommonActionSignalGift giftId
         * @property {number|null} [count] CommonActionSignalGift count
         * @property {number|null} [combo] CommonActionSignalGift combo
         * @property {number|Long|null} [value] CommonActionSignalGift value
         * @property {string|null} [comboId] CommonActionSignalGift comboId
         * @property {number|Long|null} [slotDisplayDurationMs] CommonActionSignalGift slotDisplayDurationMs
         * @property {number|Long|null} [expireDurationMs] CommonActionSignalGift expireDurationMs
         * @property {AcFunDanmu.IZtDrawGiftInfo|null} [drawGiftInfo] CommonActionSignalGift drawGiftInfo
         */

        /**
         * Constructs a new CommonActionSignalGift.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonActionSignalGift.
         * @implements ICommonActionSignalGift
         * @constructor
         * @param {AcFunDanmu.ICommonActionSignalGift=} [properties] Properties to set
         */
        function CommonActionSignalGift(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonActionSignalGift user.
         * @member {AcFunDanmu.IZtLiveUserInfo|null|undefined} user
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.user = null;

        /**
         * CommonActionSignalGift sendTimeMs.
         * @member {number|Long} sendTimeMs
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.sendTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonActionSignalGift giftId.
         * @member {number|Long} giftId
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.giftId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonActionSignalGift count.
         * @member {number} count
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.count = 0;

        /**
         * CommonActionSignalGift combo.
         * @member {number} combo
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.combo = 0;

        /**
         * CommonActionSignalGift value.
         * @member {number|Long} value
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonActionSignalGift comboId.
         * @member {string} comboId
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.comboId = "";

        /**
         * CommonActionSignalGift slotDisplayDurationMs.
         * @member {number|Long} slotDisplayDurationMs
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.slotDisplayDurationMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonActionSignalGift expireDurationMs.
         * @member {number|Long} expireDurationMs
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.expireDurationMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonActionSignalGift drawGiftInfo.
         * @member {AcFunDanmu.IZtDrawGiftInfo|null|undefined} drawGiftInfo
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         */
        CommonActionSignalGift.prototype.drawGiftInfo = null;

        /**
         * Creates a new CommonActionSignalGift instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @static
         * @param {AcFunDanmu.ICommonActionSignalGift=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonActionSignalGift} CommonActionSignalGift instance
         */
        CommonActionSignalGift.create = function create(properties) {
            return new CommonActionSignalGift(properties);
        };

        /**
         * Encodes the specified CommonActionSignalGift message. Does not implicitly {@link AcFunDanmu.CommonActionSignalGift.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @static
         * @param {AcFunDanmu.ICommonActionSignalGift} message CommonActionSignalGift message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonActionSignalGift.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.AcFunDanmu.ZtLiveUserInfo.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sendTimeMs != null && Object.hasOwnProperty.call(message, "sendTimeMs"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sendTimeMs);
            if (message.giftId != null && Object.hasOwnProperty.call(message, "giftId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.giftId);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.count);
            if (message.combo != null && Object.hasOwnProperty.call(message, "combo"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.combo);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.value);
            if (message.comboId != null && Object.hasOwnProperty.call(message, "comboId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.comboId);
            if (message.slotDisplayDurationMs != null && Object.hasOwnProperty.call(message, "slotDisplayDurationMs"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.slotDisplayDurationMs);
            if (message.expireDurationMs != null && Object.hasOwnProperty.call(message, "expireDurationMs"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.expireDurationMs);
            if (message.drawGiftInfo != null && Object.hasOwnProperty.call(message, "drawGiftInfo"))
                $root.AcFunDanmu.ZtDrawGiftInfo.encode(message.drawGiftInfo, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CommonActionSignalGift message, length delimited. Does not implicitly {@link AcFunDanmu.CommonActionSignalGift.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @static
         * @param {AcFunDanmu.ICommonActionSignalGift} message CommonActionSignalGift message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonActionSignalGift.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonActionSignalGift message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonActionSignalGift} CommonActionSignalGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonActionSignalGift.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonActionSignalGift();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.AcFunDanmu.ZtLiveUserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sendTimeMs = reader.int64();
                    break;
                case 3:
                    message.giftId = reader.int64();
                    break;
                case 4:
                    message.count = reader.int32();
                    break;
                case 5:
                    message.combo = reader.int32();
                    break;
                case 6:
                    message.value = reader.int64();
                    break;
                case 7:
                    message.comboId = reader.string();
                    break;
                case 8:
                    message.slotDisplayDurationMs = reader.int64();
                    break;
                case 9:
                    message.expireDurationMs = reader.int64();
                    break;
                case 10:
                    message.drawGiftInfo = $root.AcFunDanmu.ZtDrawGiftInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonActionSignalGift message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonActionSignalGift} CommonActionSignalGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonActionSignalGift.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonActionSignalGift message.
         * @function verify
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonActionSignalGift.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.AcFunDanmu.ZtLiveUserInfo.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.sendTimeMs != null && message.hasOwnProperty("sendTimeMs"))
                if (!$util.isInteger(message.sendTimeMs) && !(message.sendTimeMs && $util.isInteger(message.sendTimeMs.low) && $util.isInteger(message.sendTimeMs.high)))
                    return "sendTimeMs: integer|Long expected";
            if (message.giftId != null && message.hasOwnProperty("giftId"))
                if (!$util.isInteger(message.giftId) && !(message.giftId && $util.isInteger(message.giftId.low) && $util.isInteger(message.giftId.high)))
                    return "giftId: integer|Long expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.combo != null && message.hasOwnProperty("combo"))
                if (!$util.isInteger(message.combo))
                    return "combo: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            if (message.comboId != null && message.hasOwnProperty("comboId"))
                if (!$util.isString(message.comboId))
                    return "comboId: string expected";
            if (message.slotDisplayDurationMs != null && message.hasOwnProperty("slotDisplayDurationMs"))
                if (!$util.isInteger(message.slotDisplayDurationMs) && !(message.slotDisplayDurationMs && $util.isInteger(message.slotDisplayDurationMs.low) && $util.isInteger(message.slotDisplayDurationMs.high)))
                    return "slotDisplayDurationMs: integer|Long expected";
            if (message.expireDurationMs != null && message.hasOwnProperty("expireDurationMs"))
                if (!$util.isInteger(message.expireDurationMs) && !(message.expireDurationMs && $util.isInteger(message.expireDurationMs.low) && $util.isInteger(message.expireDurationMs.high)))
                    return "expireDurationMs: integer|Long expected";
            if (message.drawGiftInfo != null && message.hasOwnProperty("drawGiftInfo")) {
                var error = $root.AcFunDanmu.ZtDrawGiftInfo.verify(message.drawGiftInfo);
                if (error)
                    return "drawGiftInfo." + error;
            }
            return null;
        };

        /**
         * Creates a CommonActionSignalGift message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonActionSignalGift} CommonActionSignalGift
         */
        CommonActionSignalGift.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonActionSignalGift)
                return object;
            var message = new $root.AcFunDanmu.CommonActionSignalGift();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".AcFunDanmu.CommonActionSignalGift.user: object expected");
                message.user = $root.AcFunDanmu.ZtLiveUserInfo.fromObject(object.user);
            }
            if (object.sendTimeMs != null)
                if ($util.Long)
                    (message.sendTimeMs = $util.Long.fromValue(object.sendTimeMs)).unsigned = false;
                else if (typeof object.sendTimeMs === "string")
                    message.sendTimeMs = parseInt(object.sendTimeMs, 10);
                else if (typeof object.sendTimeMs === "number")
                    message.sendTimeMs = object.sendTimeMs;
                else if (typeof object.sendTimeMs === "object")
                    message.sendTimeMs = new $util.LongBits(object.sendTimeMs.low >>> 0, object.sendTimeMs.high >>> 0).toNumber();
            if (object.giftId != null)
                if ($util.Long)
                    (message.giftId = $util.Long.fromValue(object.giftId)).unsigned = false;
                else if (typeof object.giftId === "string")
                    message.giftId = parseInt(object.giftId, 10);
                else if (typeof object.giftId === "number")
                    message.giftId = object.giftId;
                else if (typeof object.giftId === "object")
                    message.giftId = new $util.LongBits(object.giftId.low >>> 0, object.giftId.high >>> 0).toNumber();
            if (object.count != null)
                message.count = object.count | 0;
            if (object.combo != null)
                message.combo = object.combo | 0;
            if (object.value != null)
                if ($util.Long)
                    (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                else if (typeof object.value === "string")
                    message.value = parseInt(object.value, 10);
                else if (typeof object.value === "number")
                    message.value = object.value;
                else if (typeof object.value === "object")
                    message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
            if (object.comboId != null)
                message.comboId = String(object.comboId);
            if (object.slotDisplayDurationMs != null)
                if ($util.Long)
                    (message.slotDisplayDurationMs = $util.Long.fromValue(object.slotDisplayDurationMs)).unsigned = false;
                else if (typeof object.slotDisplayDurationMs === "string")
                    message.slotDisplayDurationMs = parseInt(object.slotDisplayDurationMs, 10);
                else if (typeof object.slotDisplayDurationMs === "number")
                    message.slotDisplayDurationMs = object.slotDisplayDurationMs;
                else if (typeof object.slotDisplayDurationMs === "object")
                    message.slotDisplayDurationMs = new $util.LongBits(object.slotDisplayDurationMs.low >>> 0, object.slotDisplayDurationMs.high >>> 0).toNumber();
            if (object.expireDurationMs != null)
                if ($util.Long)
                    (message.expireDurationMs = $util.Long.fromValue(object.expireDurationMs)).unsigned = false;
                else if (typeof object.expireDurationMs === "string")
                    message.expireDurationMs = parseInt(object.expireDurationMs, 10);
                else if (typeof object.expireDurationMs === "number")
                    message.expireDurationMs = object.expireDurationMs;
                else if (typeof object.expireDurationMs === "object")
                    message.expireDurationMs = new $util.LongBits(object.expireDurationMs.low >>> 0, object.expireDurationMs.high >>> 0).toNumber();
            if (object.drawGiftInfo != null) {
                if (typeof object.drawGiftInfo !== "object")
                    throw TypeError(".AcFunDanmu.CommonActionSignalGift.drawGiftInfo: object expected");
                message.drawGiftInfo = $root.AcFunDanmu.ZtDrawGiftInfo.fromObject(object.drawGiftInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonActionSignalGift message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @static
         * @param {AcFunDanmu.CommonActionSignalGift} message CommonActionSignalGift
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonActionSignalGift.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTimeMs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.giftId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.giftId = options.longs === String ? "0" : 0;
                object.count = 0;
                object.combo = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.value = options.longs === String ? "0" : 0;
                object.comboId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.slotDisplayDurationMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.slotDisplayDurationMs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expireDurationMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expireDurationMs = options.longs === String ? "0" : 0;
                object.drawGiftInfo = null;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.AcFunDanmu.ZtLiveUserInfo.toObject(message.user, options);
            if (message.sendTimeMs != null && message.hasOwnProperty("sendTimeMs"))
                if (typeof message.sendTimeMs === "number")
                    object.sendTimeMs = options.longs === String ? String(message.sendTimeMs) : message.sendTimeMs;
                else
                    object.sendTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.sendTimeMs) : options.longs === Number ? new $util.LongBits(message.sendTimeMs.low >>> 0, message.sendTimeMs.high >>> 0).toNumber() : message.sendTimeMs;
            if (message.giftId != null && message.hasOwnProperty("giftId"))
                if (typeof message.giftId === "number")
                    object.giftId = options.longs === String ? String(message.giftId) : message.giftId;
                else
                    object.giftId = options.longs === String ? $util.Long.prototype.toString.call(message.giftId) : options.longs === Number ? new $util.LongBits(message.giftId.low >>> 0, message.giftId.high >>> 0).toNumber() : message.giftId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.combo != null && message.hasOwnProperty("combo"))
                object.combo = message.combo;
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value === "number")
                    object.value = options.longs === String ? String(message.value) : message.value;
                else
                    object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
            if (message.comboId != null && message.hasOwnProperty("comboId"))
                object.comboId = message.comboId;
            if (message.slotDisplayDurationMs != null && message.hasOwnProperty("slotDisplayDurationMs"))
                if (typeof message.slotDisplayDurationMs === "number")
                    object.slotDisplayDurationMs = options.longs === String ? String(message.slotDisplayDurationMs) : message.slotDisplayDurationMs;
                else
                    object.slotDisplayDurationMs = options.longs === String ? $util.Long.prototype.toString.call(message.slotDisplayDurationMs) : options.longs === Number ? new $util.LongBits(message.slotDisplayDurationMs.low >>> 0, message.slotDisplayDurationMs.high >>> 0).toNumber() : message.slotDisplayDurationMs;
            if (message.expireDurationMs != null && message.hasOwnProperty("expireDurationMs"))
                if (typeof message.expireDurationMs === "number")
                    object.expireDurationMs = options.longs === String ? String(message.expireDurationMs) : message.expireDurationMs;
                else
                    object.expireDurationMs = options.longs === String ? $util.Long.prototype.toString.call(message.expireDurationMs) : options.longs === Number ? new $util.LongBits(message.expireDurationMs.low >>> 0, message.expireDurationMs.high >>> 0).toNumber() : message.expireDurationMs;
            if (message.drawGiftInfo != null && message.hasOwnProperty("drawGiftInfo"))
                object.drawGiftInfo = $root.AcFunDanmu.ZtDrawGiftInfo.toObject(message.drawGiftInfo, options);
            return object;
        };

        /**
         * Converts this CommonActionSignalGift to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonActionSignalGift
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonActionSignalGift.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonActionSignalGift;
    })();

    AcFunDanmu.ZtLiveUserInfo = (function() {

        /**
         * Properties of a ZtLiveUserInfo.
         * @memberof AcFunDanmu
         * @interface IZtLiveUserInfo
         * @property {number|Long|null} [userId] ZtLiveUserInfo userId
         * @property {string|null} [nickname] ZtLiveUserInfo nickname
         * @property {Array.<AcFunDanmu.IImageCdnNode>|null} [avatar] ZtLiveUserInfo avatar
         * @property {string|null} [badge] ZtLiveUserInfo badge
         * @property {AcFunDanmu.IZtLiveUserIdentity|null} [userIdentity] ZtLiveUserInfo userIdentity
         */

        /**
         * Constructs a new ZtLiveUserInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveUserInfo.
         * @implements IZtLiveUserInfo
         * @constructor
         * @param {AcFunDanmu.IZtLiveUserInfo=} [properties] Properties to set
         */
        function ZtLiveUserInfo(properties) {
            this.avatar = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveUserInfo userId.
         * @member {number|Long} userId
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtLiveUserInfo nickname.
         * @member {string} nickname
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.nickname = "";

        /**
         * ZtLiveUserInfo avatar.
         * @member {Array.<AcFunDanmu.IImageCdnNode>} avatar
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.avatar = $util.emptyArray;

        /**
         * ZtLiveUserInfo badge.
         * @member {string} badge
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.badge = "";

        /**
         * ZtLiveUserInfo userIdentity.
         * @member {AcFunDanmu.IZtLiveUserIdentity|null|undefined} userIdentity
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.userIdentity = null;

        /**
         * Creates a new ZtLiveUserInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.IZtLiveUserInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo instance
         */
        ZtLiveUserInfo.create = function create(properties) {
            return new ZtLiveUserInfo(properties);
        };

        /**
         * Encodes the specified ZtLiveUserInfo message. Does not implicitly {@link AcFunDanmu.ZtLiveUserInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.IZtLiveUserInfo} message ZtLiveUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatar != null && message.avatar.length)
                for (var i = 0; i < message.avatar.length; ++i)
                    $root.AcFunDanmu.ImageCdnNode.encode(message.avatar[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.badge != null && Object.hasOwnProperty.call(message, "badge"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.badge);
            if (message.userIdentity != null && Object.hasOwnProperty.call(message, "userIdentity"))
                $root.AcFunDanmu.ZtLiveUserIdentity.encode(message.userIdentity, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZtLiveUserInfo message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.IZtLiveUserInfo} message ZtLiveUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    if (!(message.avatar && message.avatar.length))
                        message.avatar = [];
                    message.avatar.push($root.AcFunDanmu.ImageCdnNode.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.badge = reader.string();
                    break;
                case 5:
                    message.userIdentity = $root.AcFunDanmu.ZtLiveUserIdentity.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveUserInfo message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar")) {
                if (!Array.isArray(message.avatar))
                    return "avatar: array expected";
                for (var i = 0; i < message.avatar.length; ++i) {
                    var error = $root.AcFunDanmu.ImageCdnNode.verify(message.avatar[i]);
                    if (error)
                        return "avatar." + error;
                }
            }
            if (message.badge != null && message.hasOwnProperty("badge"))
                if (!$util.isString(message.badge))
                    return "badge: string expected";
            if (message.userIdentity != null && message.hasOwnProperty("userIdentity")) {
                var error = $root.AcFunDanmu.ZtLiveUserIdentity.verify(message.userIdentity);
                if (error)
                    return "userIdentity." + error;
            }
            return null;
        };

        /**
         * Creates a ZtLiveUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo
         */
        ZtLiveUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveUserInfo)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveUserInfo();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar) {
                if (!Array.isArray(object.avatar))
                    throw TypeError(".AcFunDanmu.ZtLiveUserInfo.avatar: array expected");
                message.avatar = [];
                for (var i = 0; i < object.avatar.length; ++i) {
                    if (typeof object.avatar[i] !== "object")
                        throw TypeError(".AcFunDanmu.ZtLiveUserInfo.avatar: object expected");
                    message.avatar[i] = $root.AcFunDanmu.ImageCdnNode.fromObject(object.avatar[i]);
                }
            }
            if (object.badge != null)
                message.badge = String(object.badge);
            if (object.userIdentity != null) {
                if (typeof object.userIdentity !== "object")
                    throw TypeError(".AcFunDanmu.ZtLiveUserInfo.userIdentity: object expected");
                message.userIdentity = $root.AcFunDanmu.ZtLiveUserIdentity.fromObject(object.userIdentity);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.ZtLiveUserInfo} message ZtLiveUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.avatar = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.badge = "";
                object.userIdentity = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatar && message.avatar.length) {
                object.avatar = [];
                for (var j = 0; j < message.avatar.length; ++j)
                    object.avatar[j] = $root.AcFunDanmu.ImageCdnNode.toObject(message.avatar[j], options);
            }
            if (message.badge != null && message.hasOwnProperty("badge"))
                object.badge = message.badge;
            if (message.userIdentity != null && message.hasOwnProperty("userIdentity"))
                object.userIdentity = $root.AcFunDanmu.ZtLiveUserIdentity.toObject(message.userIdentity, options);
            return object;
        };

        /**
         * Converts this ZtLiveUserInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveUserInfo;
    })();

    AcFunDanmu.ImageCdnNode = (function() {

        /**
         * Properties of an ImageCdnNode.
         * @memberof AcFunDanmu
         * @interface IImageCdnNode
         * @property {string|null} [cdn] ImageCdnNode cdn
         * @property {string|null} [url] ImageCdnNode url
         * @property {string|null} [urlPattern] ImageCdnNode urlPattern
         */

        /**
         * Constructs a new ImageCdnNode.
         * @memberof AcFunDanmu
         * @classdesc Represents an ImageCdnNode.
         * @implements IImageCdnNode
         * @constructor
         * @param {AcFunDanmu.IImageCdnNode=} [properties] Properties to set
         */
        function ImageCdnNode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImageCdnNode cdn.
         * @member {string} cdn
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         */
        ImageCdnNode.prototype.cdn = "";

        /**
         * ImageCdnNode url.
         * @member {string} url
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         */
        ImageCdnNode.prototype.url = "";

        /**
         * ImageCdnNode urlPattern.
         * @member {string} urlPattern
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         */
        ImageCdnNode.prototype.urlPattern = "";

        /**
         * Creates a new ImageCdnNode instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.IImageCdnNode=} [properties] Properties to set
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode instance
         */
        ImageCdnNode.create = function create(properties) {
            return new ImageCdnNode(properties);
        };

        /**
         * Encodes the specified ImageCdnNode message. Does not implicitly {@link AcFunDanmu.ImageCdnNode.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.IImageCdnNode} message ImageCdnNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageCdnNode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cdn != null && Object.hasOwnProperty.call(message, "cdn"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cdn);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.urlPattern != null && Object.hasOwnProperty.call(message, "urlPattern"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.urlPattern);
            return writer;
        };

        /**
         * Encodes the specified ImageCdnNode message, length delimited. Does not implicitly {@link AcFunDanmu.ImageCdnNode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.IImageCdnNode} message ImageCdnNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageCdnNode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImageCdnNode message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageCdnNode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ImageCdnNode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cdn = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.urlPattern = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImageCdnNode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageCdnNode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImageCdnNode message.
         * @function verify
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImageCdnNode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cdn != null && message.hasOwnProperty("cdn"))
                if (!$util.isString(message.cdn))
                    return "cdn: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.urlPattern != null && message.hasOwnProperty("urlPattern"))
                if (!$util.isString(message.urlPattern))
                    return "urlPattern: string expected";
            return null;
        };

        /**
         * Creates an ImageCdnNode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode
         */
        ImageCdnNode.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ImageCdnNode)
                return object;
            var message = new $root.AcFunDanmu.ImageCdnNode();
            if (object.cdn != null)
                message.cdn = String(object.cdn);
            if (object.url != null)
                message.url = String(object.url);
            if (object.urlPattern != null)
                message.urlPattern = String(object.urlPattern);
            return message;
        };

        /**
         * Creates a plain object from an ImageCdnNode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.ImageCdnNode} message ImageCdnNode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImageCdnNode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cdn = "";
                object.url = "";
                object.urlPattern = "";
            }
            if (message.cdn != null && message.hasOwnProperty("cdn"))
                object.cdn = message.cdn;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.urlPattern != null && message.hasOwnProperty("urlPattern"))
                object.urlPattern = message.urlPattern;
            return object;
        };

        /**
         * Converts this ImageCdnNode to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImageCdnNode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ImageCdnNode;
    })();

    AcFunDanmu.ZtLiveUserIdentity = (function() {

        /**
         * Properties of a ZtLiveUserIdentity.
         * @memberof AcFunDanmu
         * @interface IZtLiveUserIdentity
         * @property {AcFunDanmu.ZtLiveUserIdentity.ManagerType|null} [managerType] ZtLiveUserIdentity managerType
         */

        /**
         * Constructs a new ZtLiveUserIdentity.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveUserIdentity.
         * @implements IZtLiveUserIdentity
         * @constructor
         * @param {AcFunDanmu.IZtLiveUserIdentity=} [properties] Properties to set
         */
        function ZtLiveUserIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveUserIdentity managerType.
         * @member {AcFunDanmu.ZtLiveUserIdentity.ManagerType} managerType
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @instance
         */
        ZtLiveUserIdentity.prototype.managerType = 0;

        /**
         * Creates a new ZtLiveUserIdentity instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.IZtLiveUserIdentity=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity instance
         */
        ZtLiveUserIdentity.create = function create(properties) {
            return new ZtLiveUserIdentity(properties);
        };

        /**
         * Encodes the specified ZtLiveUserIdentity message. Does not implicitly {@link AcFunDanmu.ZtLiveUserIdentity.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.IZtLiveUserIdentity} message ZtLiveUserIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.managerType != null && Object.hasOwnProperty.call(message, "managerType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.managerType);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveUserIdentity message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveUserIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.IZtLiveUserIdentity} message ZtLiveUserIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveUserIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveUserIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.managerType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveUserIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveUserIdentity message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveUserIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.managerType != null && message.hasOwnProperty("managerType"))
                switch (message.managerType) {
                default:
                    return "managerType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a ZtLiveUserIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity
         */
        ZtLiveUserIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveUserIdentity)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveUserIdentity();
            switch (object.managerType) {
            case "UNKNOWN_MANAGER_TYPE":
            case 0:
                message.managerType = 0;
                break;
            case "NORMAL":
            case 1:
                message.managerType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveUserIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.ZtLiveUserIdentity} message ZtLiveUserIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveUserIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.managerType = options.enums === String ? "UNKNOWN_MANAGER_TYPE" : 0;
            if (message.managerType != null && message.hasOwnProperty("managerType"))
                object.managerType = options.enums === String ? $root.AcFunDanmu.ZtLiveUserIdentity.ManagerType[message.managerType] : message.managerType;
            return object;
        };

        /**
         * Converts this ZtLiveUserIdentity to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveUserIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ManagerType enum.
         * @name AcFunDanmu.ZtLiveUserIdentity.ManagerType
         * @enum {number}
         * @property {number} UNKNOWN_MANAGER_TYPE=0 UNKNOWN_MANAGER_TYPE value
         * @property {number} NORMAL=1 NORMAL value
         */
        ZtLiveUserIdentity.ManagerType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_MANAGER_TYPE"] = 0;
            values[valuesById[1] = "NORMAL"] = 1;
            return values;
        })();

        return ZtLiveUserIdentity;
    })();

    AcFunDanmu.ZtDrawGiftInfo = (function() {

        /**
         * Properties of a ZtDrawGiftInfo.
         * @memberof AcFunDanmu
         * @interface IZtDrawGiftInfo
         * @property {number|Long|null} [screenWidth] ZtDrawGiftInfo screenWidth
         * @property {number|Long|null} [screenHeight] ZtDrawGiftInfo screenHeight
         * @property {Array.<AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint>|null} [drawPoint] ZtDrawGiftInfo drawPoint
         */

        /**
         * Constructs a new ZtDrawGiftInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtDrawGiftInfo.
         * @implements IZtDrawGiftInfo
         * @constructor
         * @param {AcFunDanmu.IZtDrawGiftInfo=} [properties] Properties to set
         */
        function ZtDrawGiftInfo(properties) {
            this.drawPoint = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtDrawGiftInfo screenWidth.
         * @member {number|Long} screenWidth
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @instance
         */
        ZtDrawGiftInfo.prototype.screenWidth = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtDrawGiftInfo screenHeight.
         * @member {number|Long} screenHeight
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @instance
         */
        ZtDrawGiftInfo.prototype.screenHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtDrawGiftInfo drawPoint.
         * @member {Array.<AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint>} drawPoint
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @instance
         */
        ZtDrawGiftInfo.prototype.drawPoint = $util.emptyArray;

        /**
         * Creates a new ZtDrawGiftInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {AcFunDanmu.IZtDrawGiftInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtDrawGiftInfo} ZtDrawGiftInfo instance
         */
        ZtDrawGiftInfo.create = function create(properties) {
            return new ZtDrawGiftInfo(properties);
        };

        /**
         * Encodes the specified ZtDrawGiftInfo message. Does not implicitly {@link AcFunDanmu.ZtDrawGiftInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {AcFunDanmu.IZtDrawGiftInfo} message ZtDrawGiftInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtDrawGiftInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.screenWidth != null && Object.hasOwnProperty.call(message, "screenWidth"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.screenWidth);
            if (message.screenHeight != null && Object.hasOwnProperty.call(message, "screenHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.screenHeight);
            if (message.drawPoint != null && message.drawPoint.length)
                for (var i = 0; i < message.drawPoint.length; ++i)
                    $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.encode(message.drawPoint[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZtDrawGiftInfo message, length delimited. Does not implicitly {@link AcFunDanmu.ZtDrawGiftInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {AcFunDanmu.IZtDrawGiftInfo} message ZtDrawGiftInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtDrawGiftInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtDrawGiftInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtDrawGiftInfo} ZtDrawGiftInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtDrawGiftInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtDrawGiftInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.screenWidth = reader.int64();
                    break;
                case 2:
                    message.screenHeight = reader.int64();
                    break;
                case 3:
                    if (!(message.drawPoint && message.drawPoint.length))
                        message.drawPoint = [];
                    message.drawPoint.push($root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtDrawGiftInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtDrawGiftInfo} ZtDrawGiftInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtDrawGiftInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtDrawGiftInfo message.
         * @function verify
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtDrawGiftInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
                if (!$util.isInteger(message.screenWidth) && !(message.screenWidth && $util.isInteger(message.screenWidth.low) && $util.isInteger(message.screenWidth.high)))
                    return "screenWidth: integer|Long expected";
            if (message.screenHeight != null && message.hasOwnProperty("screenHeight"))
                if (!$util.isInteger(message.screenHeight) && !(message.screenHeight && $util.isInteger(message.screenHeight.low) && $util.isInteger(message.screenHeight.high)))
                    return "screenHeight: integer|Long expected";
            if (message.drawPoint != null && message.hasOwnProperty("drawPoint")) {
                if (!Array.isArray(message.drawPoint))
                    return "drawPoint: array expected";
                for (var i = 0; i < message.drawPoint.length; ++i) {
                    var error = $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.verify(message.drawPoint[i]);
                    if (error)
                        return "drawPoint." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ZtDrawGiftInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtDrawGiftInfo} ZtDrawGiftInfo
         */
        ZtDrawGiftInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtDrawGiftInfo)
                return object;
            var message = new $root.AcFunDanmu.ZtDrawGiftInfo();
            if (object.screenWidth != null)
                if ($util.Long)
                    (message.screenWidth = $util.Long.fromValue(object.screenWidth)).unsigned = false;
                else if (typeof object.screenWidth === "string")
                    message.screenWidth = parseInt(object.screenWidth, 10);
                else if (typeof object.screenWidth === "number")
                    message.screenWidth = object.screenWidth;
                else if (typeof object.screenWidth === "object")
                    message.screenWidth = new $util.LongBits(object.screenWidth.low >>> 0, object.screenWidth.high >>> 0).toNumber();
            if (object.screenHeight != null)
                if ($util.Long)
                    (message.screenHeight = $util.Long.fromValue(object.screenHeight)).unsigned = false;
                else if (typeof object.screenHeight === "string")
                    message.screenHeight = parseInt(object.screenHeight, 10);
                else if (typeof object.screenHeight === "number")
                    message.screenHeight = object.screenHeight;
                else if (typeof object.screenHeight === "object")
                    message.screenHeight = new $util.LongBits(object.screenHeight.low >>> 0, object.screenHeight.high >>> 0).toNumber();
            if (object.drawPoint) {
                if (!Array.isArray(object.drawPoint))
                    throw TypeError(".AcFunDanmu.ZtDrawGiftInfo.drawPoint: array expected");
                message.drawPoint = [];
                for (var i = 0; i < object.drawPoint.length; ++i) {
                    if (typeof object.drawPoint[i] !== "object")
                        throw TypeError(".AcFunDanmu.ZtDrawGiftInfo.drawPoint: object expected");
                    message.drawPoint[i] = $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.fromObject(object.drawPoint[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtDrawGiftInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {AcFunDanmu.ZtDrawGiftInfo} message ZtDrawGiftInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtDrawGiftInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.drawPoint = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.screenWidth = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.screenWidth = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.screenHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.screenHeight = options.longs === String ? "0" : 0;
            }
            if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
                if (typeof message.screenWidth === "number")
                    object.screenWidth = options.longs === String ? String(message.screenWidth) : message.screenWidth;
                else
                    object.screenWidth = options.longs === String ? $util.Long.prototype.toString.call(message.screenWidth) : options.longs === Number ? new $util.LongBits(message.screenWidth.low >>> 0, message.screenWidth.high >>> 0).toNumber() : message.screenWidth;
            if (message.screenHeight != null && message.hasOwnProperty("screenHeight"))
                if (typeof message.screenHeight === "number")
                    object.screenHeight = options.longs === String ? String(message.screenHeight) : message.screenHeight;
                else
                    object.screenHeight = options.longs === String ? $util.Long.prototype.toString.call(message.screenHeight) : options.longs === Number ? new $util.LongBits(message.screenHeight.low >>> 0, message.screenHeight.high >>> 0).toNumber() : message.screenHeight;
            if (message.drawPoint && message.drawPoint.length) {
                object.drawPoint = [];
                for (var j = 0; j < message.drawPoint.length; ++j)
                    object.drawPoint[j] = $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.toObject(message.drawPoint[j], options);
            }
            return object;
        };

        /**
         * Converts this ZtDrawGiftInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtDrawGiftInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ZtDrawGiftInfo.ZtDrawPoint = (function() {

            /**
             * Properties of a ZtDrawPoint.
             * @memberof AcFunDanmu.ZtDrawGiftInfo
             * @interface IZtDrawPoint
             * @property {number|Long|null} [marginLeft] ZtDrawPoint marginLeft
             * @property {number|Long|null} [marginTop] ZtDrawPoint marginTop
             * @property {number|null} [scaleRatio] ZtDrawPoint scaleRatio
             * @property {boolean|null} [handup] ZtDrawPoint handup
             */

            /**
             * Constructs a new ZtDrawPoint.
             * @memberof AcFunDanmu.ZtDrawGiftInfo
             * @classdesc Represents a ZtDrawPoint.
             * @implements IZtDrawPoint
             * @constructor
             * @param {AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint=} [properties] Properties to set
             */
            function ZtDrawPoint(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ZtDrawPoint marginLeft.
             * @member {number|Long} marginLeft
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             */
            ZtDrawPoint.prototype.marginLeft = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ZtDrawPoint marginTop.
             * @member {number|Long} marginTop
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             */
            ZtDrawPoint.prototype.marginTop = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ZtDrawPoint scaleRatio.
             * @member {number} scaleRatio
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             */
            ZtDrawPoint.prototype.scaleRatio = 0;

            /**
             * ZtDrawPoint handup.
             * @member {boolean} handup
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             */
            ZtDrawPoint.prototype.handup = false;

            /**
             * Creates a new ZtDrawPoint instance using the specified properties.
             * @function create
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint=} [properties] Properties to set
             * @returns {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} ZtDrawPoint instance
             */
            ZtDrawPoint.create = function create(properties) {
                return new ZtDrawPoint(properties);
            };

            /**
             * Encodes the specified ZtDrawPoint message. Does not implicitly {@link AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.verify|verify} messages.
             * @function encode
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint} message ZtDrawPoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ZtDrawPoint.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.marginLeft != null && Object.hasOwnProperty.call(message, "marginLeft"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.marginLeft);
                if (message.marginTop != null && Object.hasOwnProperty.call(message, "marginTop"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.marginTop);
                if (message.scaleRatio != null && Object.hasOwnProperty.call(message, "scaleRatio"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.scaleRatio);
                if (message.handup != null && Object.hasOwnProperty.call(message, "handup"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.handup);
                return writer;
            };

            /**
             * Encodes the specified ZtDrawPoint message, length delimited. Does not implicitly {@link AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint} message ZtDrawPoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ZtDrawPoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ZtDrawPoint message from the specified reader or buffer.
             * @function decode
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} ZtDrawPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ZtDrawPoint.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.marginLeft = reader.int64();
                        break;
                    case 2:
                        message.marginTop = reader.int64();
                        break;
                    case 3:
                        message.scaleRatio = reader.double();
                        break;
                    case 4:
                        message.handup = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ZtDrawPoint message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} ZtDrawPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ZtDrawPoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ZtDrawPoint message.
             * @function verify
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ZtDrawPoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.marginLeft != null && message.hasOwnProperty("marginLeft"))
                    if (!$util.isInteger(message.marginLeft) && !(message.marginLeft && $util.isInteger(message.marginLeft.low) && $util.isInteger(message.marginLeft.high)))
                        return "marginLeft: integer|Long expected";
                if (message.marginTop != null && message.hasOwnProperty("marginTop"))
                    if (!$util.isInteger(message.marginTop) && !(message.marginTop && $util.isInteger(message.marginTop.low) && $util.isInteger(message.marginTop.high)))
                        return "marginTop: integer|Long expected";
                if (message.scaleRatio != null && message.hasOwnProperty("scaleRatio"))
                    if (typeof message.scaleRatio !== "number")
                        return "scaleRatio: number expected";
                if (message.handup != null && message.hasOwnProperty("handup"))
                    if (typeof message.handup !== "boolean")
                        return "handup: boolean expected";
                return null;
            };

            /**
             * Creates a ZtDrawPoint message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} ZtDrawPoint
             */
            ZtDrawPoint.fromObject = function fromObject(object) {
                if (object instanceof $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint)
                    return object;
                var message = new $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint();
                if (object.marginLeft != null)
                    if ($util.Long)
                        (message.marginLeft = $util.Long.fromValue(object.marginLeft)).unsigned = false;
                    else if (typeof object.marginLeft === "string")
                        message.marginLeft = parseInt(object.marginLeft, 10);
                    else if (typeof object.marginLeft === "number")
                        message.marginLeft = object.marginLeft;
                    else if (typeof object.marginLeft === "object")
                        message.marginLeft = new $util.LongBits(object.marginLeft.low >>> 0, object.marginLeft.high >>> 0).toNumber();
                if (object.marginTop != null)
                    if ($util.Long)
                        (message.marginTop = $util.Long.fromValue(object.marginTop)).unsigned = false;
                    else if (typeof object.marginTop === "string")
                        message.marginTop = parseInt(object.marginTop, 10);
                    else if (typeof object.marginTop === "number")
                        message.marginTop = object.marginTop;
                    else if (typeof object.marginTop === "object")
                        message.marginTop = new $util.LongBits(object.marginTop.low >>> 0, object.marginTop.high >>> 0).toNumber();
                if (object.scaleRatio != null)
                    message.scaleRatio = Number(object.scaleRatio);
                if (object.handup != null)
                    message.handup = Boolean(object.handup);
                return message;
            };

            /**
             * Creates a plain object from a ZtDrawPoint message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} message ZtDrawPoint
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ZtDrawPoint.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.marginLeft = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.marginLeft = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.marginTop = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.marginTop = options.longs === String ? "0" : 0;
                    object.scaleRatio = 0;
                    object.handup = false;
                }
                if (message.marginLeft != null && message.hasOwnProperty("marginLeft"))
                    if (typeof message.marginLeft === "number")
                        object.marginLeft = options.longs === String ? String(message.marginLeft) : message.marginLeft;
                    else
                        object.marginLeft = options.longs === String ? $util.Long.prototype.toString.call(message.marginLeft) : options.longs === Number ? new $util.LongBits(message.marginLeft.low >>> 0, message.marginLeft.high >>> 0).toNumber() : message.marginLeft;
                if (message.marginTop != null && message.hasOwnProperty("marginTop"))
                    if (typeof message.marginTop === "number")
                        object.marginTop = options.longs === String ? String(message.marginTop) : message.marginTop;
                    else
                        object.marginTop = options.longs === String ? $util.Long.prototype.toString.call(message.marginTop) : options.longs === Number ? new $util.LongBits(message.marginTop.low >>> 0, message.marginTop.high >>> 0).toNumber() : message.marginTop;
                if (message.scaleRatio != null && message.hasOwnProperty("scaleRatio"))
                    object.scaleRatio = options.json && !isFinite(message.scaleRatio) ? String(message.scaleRatio) : message.scaleRatio;
                if (message.handup != null && message.hasOwnProperty("handup"))
                    object.handup = message.handup;
                return object;
            };

            /**
             * Converts this ZtDrawPoint to JSON.
             * @function toJSON
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ZtDrawPoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ZtDrawPoint;
        })();

        return ZtDrawGiftInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
