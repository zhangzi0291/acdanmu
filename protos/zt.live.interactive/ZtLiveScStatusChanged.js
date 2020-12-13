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

    AcFunDanmu.ZtLiveScStatusChanged = (function() {

        /**
         * Properties of a ZtLiveScStatusChanged.
         * @memberof AcFunDanmu
         * @interface IZtLiveScStatusChanged
         * @property {AcFunDanmu.ZtLiveScStatusChanged.Type|null} [type] ZtLiveScStatusChanged type
         * @property {number|Long|null} [maxRandomDelayMs] ZtLiveScStatusChanged maxRandomDelayMs
         * @property {AcFunDanmu.ZtLiveScStatusChanged.IBannedInfo|null} [bannedInfo] ZtLiveScStatusChanged bannedInfo
         */

        /**
         * Constructs a new ZtLiveScStatusChanged.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveScStatusChanged.
         * @implements IZtLiveScStatusChanged
         * @constructor
         * @param {AcFunDanmu.IZtLiveScStatusChanged=} [properties] Properties to set
         */
        function ZtLiveScStatusChanged(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveScStatusChanged type.
         * @member {AcFunDanmu.ZtLiveScStatusChanged.Type} type
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @instance
         */
        ZtLiveScStatusChanged.prototype.type = 0;

        /**
         * ZtLiveScStatusChanged maxRandomDelayMs.
         * @member {number|Long} maxRandomDelayMs
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @instance
         */
        ZtLiveScStatusChanged.prototype.maxRandomDelayMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtLiveScStatusChanged bannedInfo.
         * @member {AcFunDanmu.ZtLiveScStatusChanged.IBannedInfo|null|undefined} bannedInfo
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @instance
         */
        ZtLiveScStatusChanged.prototype.bannedInfo = null;

        /**
         * Creates a new ZtLiveScStatusChanged instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @static
         * @param {AcFunDanmu.IZtLiveScStatusChanged=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveScStatusChanged} ZtLiveScStatusChanged instance
         */
        ZtLiveScStatusChanged.create = function create(properties) {
            return new ZtLiveScStatusChanged(properties);
        };

        /**
         * Encodes the specified ZtLiveScStatusChanged message. Does not implicitly {@link AcFunDanmu.ZtLiveScStatusChanged.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @static
         * @param {AcFunDanmu.IZtLiveScStatusChanged} message ZtLiveScStatusChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveScStatusChanged.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.maxRandomDelayMs != null && Object.hasOwnProperty.call(message, "maxRandomDelayMs"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.maxRandomDelayMs);
            if (message.bannedInfo != null && Object.hasOwnProperty.call(message, "bannedInfo"))
                $root.AcFunDanmu.ZtLiveScStatusChanged.BannedInfo.encode(message.bannedInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZtLiveScStatusChanged message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveScStatusChanged.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @static
         * @param {AcFunDanmu.IZtLiveScStatusChanged} message ZtLiveScStatusChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveScStatusChanged.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveScStatusChanged message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveScStatusChanged} ZtLiveScStatusChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveScStatusChanged.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveScStatusChanged();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.maxRandomDelayMs = reader.int64();
                    break;
                case 3:
                    message.bannedInfo = $root.AcFunDanmu.ZtLiveScStatusChanged.BannedInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveScStatusChanged message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveScStatusChanged} ZtLiveScStatusChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveScStatusChanged.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveScStatusChanged message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveScStatusChanged.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.maxRandomDelayMs != null && message.hasOwnProperty("maxRandomDelayMs"))
                if (!$util.isInteger(message.maxRandomDelayMs) && !(message.maxRandomDelayMs && $util.isInteger(message.maxRandomDelayMs.low) && $util.isInteger(message.maxRandomDelayMs.high)))
                    return "maxRandomDelayMs: integer|Long expected";
            if (message.bannedInfo != null && message.hasOwnProperty("bannedInfo")) {
                var error = $root.AcFunDanmu.ZtLiveScStatusChanged.BannedInfo.verify(message.bannedInfo);
                if (error)
                    return "bannedInfo." + error;
            }
            return null;
        };

        /**
         * Creates a ZtLiveScStatusChanged message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveScStatusChanged} ZtLiveScStatusChanged
         */
        ZtLiveScStatusChanged.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveScStatusChanged)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveScStatusChanged();
            switch (object.type) {
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "LIVE_CLOSED":
            case 1:
                message.type = 1;
                break;
            case "NEW_LIVE_OPENED":
            case 2:
                message.type = 2;
                break;
            case "LIVE_URL_CHANGED":
            case 3:
                message.type = 3;
                break;
            case "LIVE_BANNED":
            case 4:
                message.type = 4;
                break;
            }
            if (object.maxRandomDelayMs != null)
                if ($util.Long)
                    (message.maxRandomDelayMs = $util.Long.fromValue(object.maxRandomDelayMs)).unsigned = false;
                else if (typeof object.maxRandomDelayMs === "string")
                    message.maxRandomDelayMs = parseInt(object.maxRandomDelayMs, 10);
                else if (typeof object.maxRandomDelayMs === "number")
                    message.maxRandomDelayMs = object.maxRandomDelayMs;
                else if (typeof object.maxRandomDelayMs === "object")
                    message.maxRandomDelayMs = new $util.LongBits(object.maxRandomDelayMs.low >>> 0, object.maxRandomDelayMs.high >>> 0).toNumber();
            if (object.bannedInfo != null) {
                if (typeof object.bannedInfo !== "object")
                    throw TypeError(".AcFunDanmu.ZtLiveScStatusChanged.bannedInfo: object expected");
                message.bannedInfo = $root.AcFunDanmu.ZtLiveScStatusChanged.BannedInfo.fromObject(object.bannedInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveScStatusChanged message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @static
         * @param {AcFunDanmu.ZtLiveScStatusChanged} message ZtLiveScStatusChanged
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveScStatusChanged.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "UNKNOWN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.maxRandomDelayMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxRandomDelayMs = options.longs === String ? "0" : 0;
                object.bannedInfo = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.AcFunDanmu.ZtLiveScStatusChanged.Type[message.type] : message.type;
            if (message.maxRandomDelayMs != null && message.hasOwnProperty("maxRandomDelayMs"))
                if (typeof message.maxRandomDelayMs === "number")
                    object.maxRandomDelayMs = options.longs === String ? String(message.maxRandomDelayMs) : message.maxRandomDelayMs;
                else
                    object.maxRandomDelayMs = options.longs === String ? $util.Long.prototype.toString.call(message.maxRandomDelayMs) : options.longs === Number ? new $util.LongBits(message.maxRandomDelayMs.low >>> 0, message.maxRandomDelayMs.high >>> 0).toNumber() : message.maxRandomDelayMs;
            if (message.bannedInfo != null && message.hasOwnProperty("bannedInfo"))
                object.bannedInfo = $root.AcFunDanmu.ZtLiveScStatusChanged.BannedInfo.toObject(message.bannedInfo, options);
            return object;
        };

        /**
         * Converts this ZtLiveScStatusChanged to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveScStatusChanged
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveScStatusChanged.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name AcFunDanmu.ZtLiveScStatusChanged.Type
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} LIVE_CLOSED=1 LIVE_CLOSED value
         * @property {number} NEW_LIVE_OPENED=2 NEW_LIVE_OPENED value
         * @property {number} LIVE_URL_CHANGED=3 LIVE_URL_CHANGED value
         * @property {number} LIVE_BANNED=4 LIVE_BANNED value
         */
        ZtLiveScStatusChanged.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LIVE_CLOSED"] = 1;
            values[valuesById[2] = "NEW_LIVE_OPENED"] = 2;
            values[valuesById[3] = "LIVE_URL_CHANGED"] = 3;
            values[valuesById[4] = "LIVE_BANNED"] = 4;
            return values;
        })();

        ZtLiveScStatusChanged.BannedInfo = (function() {

            /**
             * Properties of a BannedInfo.
             * @memberof AcFunDanmu.ZtLiveScStatusChanged
             * @interface IBannedInfo
             * @property {string|null} [banReason] BannedInfo banReason
             */

            /**
             * Constructs a new BannedInfo.
             * @memberof AcFunDanmu.ZtLiveScStatusChanged
             * @classdesc Represents a BannedInfo.
             * @implements IBannedInfo
             * @constructor
             * @param {AcFunDanmu.ZtLiveScStatusChanged.IBannedInfo=} [properties] Properties to set
             */
            function BannedInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BannedInfo banReason.
             * @member {string} banReason
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @instance
             */
            BannedInfo.prototype.banReason = "";

            /**
             * Creates a new BannedInfo instance using the specified properties.
             * @function create
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @static
             * @param {AcFunDanmu.ZtLiveScStatusChanged.IBannedInfo=} [properties] Properties to set
             * @returns {AcFunDanmu.ZtLiveScStatusChanged.BannedInfo} BannedInfo instance
             */
            BannedInfo.create = function create(properties) {
                return new BannedInfo(properties);
            };

            /**
             * Encodes the specified BannedInfo message. Does not implicitly {@link AcFunDanmu.ZtLiveScStatusChanged.BannedInfo.verify|verify} messages.
             * @function encode
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @static
             * @param {AcFunDanmu.ZtLiveScStatusChanged.IBannedInfo} message BannedInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BannedInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.banReason != null && Object.hasOwnProperty.call(message, "banReason"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.banReason);
                return writer;
            };

            /**
             * Encodes the specified BannedInfo message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveScStatusChanged.BannedInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @static
             * @param {AcFunDanmu.ZtLiveScStatusChanged.IBannedInfo} message BannedInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BannedInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BannedInfo message from the specified reader or buffer.
             * @function decode
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AcFunDanmu.ZtLiveScStatusChanged.BannedInfo} BannedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BannedInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveScStatusChanged.BannedInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.banReason = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BannedInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AcFunDanmu.ZtLiveScStatusChanged.BannedInfo} BannedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BannedInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BannedInfo message.
             * @function verify
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BannedInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.banReason != null && message.hasOwnProperty("banReason"))
                    if (!$util.isString(message.banReason))
                        return "banReason: string expected";
                return null;
            };

            /**
             * Creates a BannedInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AcFunDanmu.ZtLiveScStatusChanged.BannedInfo} BannedInfo
             */
            BannedInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.AcFunDanmu.ZtLiveScStatusChanged.BannedInfo)
                    return object;
                var message = new $root.AcFunDanmu.ZtLiveScStatusChanged.BannedInfo();
                if (object.banReason != null)
                    message.banReason = String(object.banReason);
                return message;
            };

            /**
             * Creates a plain object from a BannedInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @static
             * @param {AcFunDanmu.ZtLiveScStatusChanged.BannedInfo} message BannedInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BannedInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.banReason = "";
                if (message.banReason != null && message.hasOwnProperty("banReason"))
                    object.banReason = message.banReason;
                return object;
            };

            /**
             * Converts this BannedInfo to JSON.
             * @function toJSON
             * @memberof AcFunDanmu.ZtLiveScStatusChanged.BannedInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BannedInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BannedInfo;
        })();

        return ZtLiveScStatusChanged;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
