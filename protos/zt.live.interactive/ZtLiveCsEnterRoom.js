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

    AcFunDanmu.ZtLiveCsEnterRoom = (function() {

        /**
         * Properties of a ZtLiveCsEnterRoom.
         * @memberof AcFunDanmu
         * @interface IZtLiveCsEnterRoom
         * @property {boolean|null} [isAuthor] ZtLiveCsEnterRoom isAuthor
         * @property {number|null} [reconnectCount] ZtLiveCsEnterRoom reconnectCount
         * @property {number|null} [lastErrorCode] ZtLiveCsEnterRoom lastErrorCode
         * @property {string|null} [enterRoomAttach] ZtLiveCsEnterRoom enterRoomAttach
         * @property {string|null} [clientLiveSdkVersion] ZtLiveCsEnterRoom clientLiveSdkVersion
         */

        /**
         * Constructs a new ZtLiveCsEnterRoom.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveCsEnterRoom.
         * @implements IZtLiveCsEnterRoom
         * @constructor
         * @param {AcFunDanmu.IZtLiveCsEnterRoom=} [properties] Properties to set
         */
        function ZtLiveCsEnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveCsEnterRoom isAuthor.
         * @member {boolean} isAuthor
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @instance
         */
        ZtLiveCsEnterRoom.prototype.isAuthor = false;

        /**
         * ZtLiveCsEnterRoom reconnectCount.
         * @member {number} reconnectCount
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @instance
         */
        ZtLiveCsEnterRoom.prototype.reconnectCount = 0;

        /**
         * ZtLiveCsEnterRoom lastErrorCode.
         * @member {number} lastErrorCode
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @instance
         */
        ZtLiveCsEnterRoom.prototype.lastErrorCode = 0;

        /**
         * ZtLiveCsEnterRoom enterRoomAttach.
         * @member {string} enterRoomAttach
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @instance
         */
        ZtLiveCsEnterRoom.prototype.enterRoomAttach = "";

        /**
         * ZtLiveCsEnterRoom clientLiveSdkVersion.
         * @member {string} clientLiveSdkVersion
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @instance
         */
        ZtLiveCsEnterRoom.prototype.clientLiveSdkVersion = "";

        /**
         * Creates a new ZtLiveCsEnterRoom instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @static
         * @param {AcFunDanmu.IZtLiveCsEnterRoom=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveCsEnterRoom} ZtLiveCsEnterRoom instance
         */
        ZtLiveCsEnterRoom.create = function create(properties) {
            return new ZtLiveCsEnterRoom(properties);
        };

        /**
         * Encodes the specified ZtLiveCsEnterRoom message. Does not implicitly {@link AcFunDanmu.ZtLiveCsEnterRoom.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @static
         * @param {AcFunDanmu.IZtLiveCsEnterRoom} message ZtLiveCsEnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsEnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isAuthor != null && Object.hasOwnProperty.call(message, "isAuthor"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isAuthor);
            if (message.reconnectCount != null && Object.hasOwnProperty.call(message, "reconnectCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reconnectCount);
            if (message.lastErrorCode != null && Object.hasOwnProperty.call(message, "lastErrorCode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lastErrorCode);
            if (message.enterRoomAttach != null && Object.hasOwnProperty.call(message, "enterRoomAttach"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.enterRoomAttach);
            if (message.clientLiveSdkVersion != null && Object.hasOwnProperty.call(message, "clientLiveSdkVersion"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.clientLiveSdkVersion);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveCsEnterRoom message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveCsEnterRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @static
         * @param {AcFunDanmu.IZtLiveCsEnterRoom} message ZtLiveCsEnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsEnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveCsEnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveCsEnterRoom} ZtLiveCsEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsEnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveCsEnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isAuthor = reader.bool();
                    break;
                case 2:
                    message.reconnectCount = reader.int32();
                    break;
                case 3:
                    message.lastErrorCode = reader.int32();
                    break;
                case 4:
                    message.enterRoomAttach = reader.string();
                    break;
                case 5:
                    message.clientLiveSdkVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveCsEnterRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveCsEnterRoom} ZtLiveCsEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsEnterRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveCsEnterRoom message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveCsEnterRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isAuthor != null && message.hasOwnProperty("isAuthor"))
                if (typeof message.isAuthor !== "boolean")
                    return "isAuthor: boolean expected";
            if (message.reconnectCount != null && message.hasOwnProperty("reconnectCount"))
                if (!$util.isInteger(message.reconnectCount))
                    return "reconnectCount: integer expected";
            if (message.lastErrorCode != null && message.hasOwnProperty("lastErrorCode"))
                if (!$util.isInteger(message.lastErrorCode))
                    return "lastErrorCode: integer expected";
            if (message.enterRoomAttach != null && message.hasOwnProperty("enterRoomAttach"))
                if (!$util.isString(message.enterRoomAttach))
                    return "enterRoomAttach: string expected";
            if (message.clientLiveSdkVersion != null && message.hasOwnProperty("clientLiveSdkVersion"))
                if (!$util.isString(message.clientLiveSdkVersion))
                    return "clientLiveSdkVersion: string expected";
            return null;
        };

        /**
         * Creates a ZtLiveCsEnterRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveCsEnterRoom} ZtLiveCsEnterRoom
         */
        ZtLiveCsEnterRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveCsEnterRoom)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveCsEnterRoom();
            if (object.isAuthor != null)
                message.isAuthor = Boolean(object.isAuthor);
            if (object.reconnectCount != null)
                message.reconnectCount = object.reconnectCount | 0;
            if (object.lastErrorCode != null)
                message.lastErrorCode = object.lastErrorCode | 0;
            if (object.enterRoomAttach != null)
                message.enterRoomAttach = String(object.enterRoomAttach);
            if (object.clientLiveSdkVersion != null)
                message.clientLiveSdkVersion = String(object.clientLiveSdkVersion);
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveCsEnterRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @static
         * @param {AcFunDanmu.ZtLiveCsEnterRoom} message ZtLiveCsEnterRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveCsEnterRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isAuthor = false;
                object.reconnectCount = 0;
                object.lastErrorCode = 0;
                object.enterRoomAttach = "";
                object.clientLiveSdkVersion = "";
            }
            if (message.isAuthor != null && message.hasOwnProperty("isAuthor"))
                object.isAuthor = message.isAuthor;
            if (message.reconnectCount != null && message.hasOwnProperty("reconnectCount"))
                object.reconnectCount = message.reconnectCount;
            if (message.lastErrorCode != null && message.hasOwnProperty("lastErrorCode"))
                object.lastErrorCode = message.lastErrorCode;
            if (message.enterRoomAttach != null && message.hasOwnProperty("enterRoomAttach"))
                object.enterRoomAttach = message.enterRoomAttach;
            if (message.clientLiveSdkVersion != null && message.hasOwnProperty("clientLiveSdkVersion"))
                object.clientLiveSdkVersion = message.clientLiveSdkVersion;
            return object;
        };

        /**
         * Converts this ZtLiveCsEnterRoom to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveCsEnterRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveCsEnterRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveCsEnterRoom;
    })();

    AcFunDanmu.ZtLiveCsEnterRoomAck = (function() {

        /**
         * Properties of a ZtLiveCsEnterRoomAck.
         * @memberof AcFunDanmu
         * @interface IZtLiveCsEnterRoomAck
         * @property {number|Long|null} [heartbeatIntervalMs] ZtLiveCsEnterRoomAck heartbeatIntervalMs
         */

        /**
         * Constructs a new ZtLiveCsEnterRoomAck.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveCsEnterRoomAck.
         * @implements IZtLiveCsEnterRoomAck
         * @constructor
         * @param {AcFunDanmu.IZtLiveCsEnterRoomAck=} [properties] Properties to set
         */
        function ZtLiveCsEnterRoomAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveCsEnterRoomAck heartbeatIntervalMs.
         * @member {number|Long} heartbeatIntervalMs
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @instance
         */
        ZtLiveCsEnterRoomAck.prototype.heartbeatIntervalMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ZtLiveCsEnterRoomAck instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsEnterRoomAck=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveCsEnterRoomAck} ZtLiveCsEnterRoomAck instance
         */
        ZtLiveCsEnterRoomAck.create = function create(properties) {
            return new ZtLiveCsEnterRoomAck(properties);
        };

        /**
         * Encodes the specified ZtLiveCsEnterRoomAck message. Does not implicitly {@link AcFunDanmu.ZtLiveCsEnterRoomAck.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsEnterRoomAck} message ZtLiveCsEnterRoomAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsEnterRoomAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heartbeatIntervalMs != null && Object.hasOwnProperty.call(message, "heartbeatIntervalMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.heartbeatIntervalMs);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveCsEnterRoomAck message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveCsEnterRoomAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsEnterRoomAck} message ZtLiveCsEnterRoomAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsEnterRoomAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveCsEnterRoomAck message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveCsEnterRoomAck} ZtLiveCsEnterRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsEnterRoomAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveCsEnterRoomAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heartbeatIntervalMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveCsEnterRoomAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveCsEnterRoomAck} ZtLiveCsEnterRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsEnterRoomAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveCsEnterRoomAck message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveCsEnterRoomAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heartbeatIntervalMs != null && message.hasOwnProperty("heartbeatIntervalMs"))
                if (!$util.isInteger(message.heartbeatIntervalMs) && !(message.heartbeatIntervalMs && $util.isInteger(message.heartbeatIntervalMs.low) && $util.isInteger(message.heartbeatIntervalMs.high)))
                    return "heartbeatIntervalMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a ZtLiveCsEnterRoomAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveCsEnterRoomAck} ZtLiveCsEnterRoomAck
         */
        ZtLiveCsEnterRoomAck.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveCsEnterRoomAck)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveCsEnterRoomAck();
            if (object.heartbeatIntervalMs != null)
                if ($util.Long)
                    (message.heartbeatIntervalMs = $util.Long.fromValue(object.heartbeatIntervalMs)).unsigned = false;
                else if (typeof object.heartbeatIntervalMs === "string")
                    message.heartbeatIntervalMs = parseInt(object.heartbeatIntervalMs, 10);
                else if (typeof object.heartbeatIntervalMs === "number")
                    message.heartbeatIntervalMs = object.heartbeatIntervalMs;
                else if (typeof object.heartbeatIntervalMs === "object")
                    message.heartbeatIntervalMs = new $util.LongBits(object.heartbeatIntervalMs.low >>> 0, object.heartbeatIntervalMs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveCsEnterRoomAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @static
         * @param {AcFunDanmu.ZtLiveCsEnterRoomAck} message ZtLiveCsEnterRoomAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveCsEnterRoomAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.heartbeatIntervalMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.heartbeatIntervalMs = options.longs === String ? "0" : 0;
            if (message.heartbeatIntervalMs != null && message.hasOwnProperty("heartbeatIntervalMs"))
                if (typeof message.heartbeatIntervalMs === "number")
                    object.heartbeatIntervalMs = options.longs === String ? String(message.heartbeatIntervalMs) : message.heartbeatIntervalMs;
                else
                    object.heartbeatIntervalMs = options.longs === String ? $util.Long.prototype.toString.call(message.heartbeatIntervalMs) : options.longs === Number ? new $util.LongBits(message.heartbeatIntervalMs.low >>> 0, message.heartbeatIntervalMs.high >>> 0).toNumber() : message.heartbeatIntervalMs;
            return object;
        };

        /**
         * Converts this ZtLiveCsEnterRoomAck to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveCsEnterRoomAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveCsEnterRoomAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveCsEnterRoomAck;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
