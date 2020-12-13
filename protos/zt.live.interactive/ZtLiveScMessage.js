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

    AcFunDanmu.ZtLiveScMessage = (function() {

        /**
         * Properties of a ZtLiveScMessage.
         * @memberof AcFunDanmu
         * @interface IZtLiveScMessage
         * @property {string|null} [messageType] ZtLiveScMessage messageType
         * @property {AcFunDanmu.ZtLiveScMessage.CompressionType|null} [compressionType] ZtLiveScMessage compressionType
         * @property {Uint8Array|null} [payload] ZtLiveScMessage payload
         * @property {string|null} [liveId] ZtLiveScMessage liveId
         * @property {string|null} [ticket] ZtLiveScMessage ticket
         * @property {number|Long|null} [serverTimestampMs] ZtLiveScMessage serverTimestampMs
         */

        /**
         * Constructs a new ZtLiveScMessage.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveScMessage.
         * @implements IZtLiveScMessage
         * @constructor
         * @param {AcFunDanmu.IZtLiveScMessage=} [properties] Properties to set
         */
        function ZtLiveScMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveScMessage messageType.
         * @member {string} messageType
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @instance
         */
        ZtLiveScMessage.prototype.messageType = "";

        /**
         * ZtLiveScMessage compressionType.
         * @member {AcFunDanmu.ZtLiveScMessage.CompressionType} compressionType
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @instance
         */
        ZtLiveScMessage.prototype.compressionType = 0;

        /**
         * ZtLiveScMessage payload.
         * @member {Uint8Array} payload
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @instance
         */
        ZtLiveScMessage.prototype.payload = $util.newBuffer([]);

        /**
         * ZtLiveScMessage liveId.
         * @member {string} liveId
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @instance
         */
        ZtLiveScMessage.prototype.liveId = "";

        /**
         * ZtLiveScMessage ticket.
         * @member {string} ticket
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @instance
         */
        ZtLiveScMessage.prototype.ticket = "";

        /**
         * ZtLiveScMessage serverTimestampMs.
         * @member {number|Long} serverTimestampMs
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @instance
         */
        ZtLiveScMessage.prototype.serverTimestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ZtLiveScMessage instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @static
         * @param {AcFunDanmu.IZtLiveScMessage=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveScMessage} ZtLiveScMessage instance
         */
        ZtLiveScMessage.create = function create(properties) {
            return new ZtLiveScMessage(properties);
        };

        /**
         * Encodes the specified ZtLiveScMessage message. Does not implicitly {@link AcFunDanmu.ZtLiveScMessage.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @static
         * @param {AcFunDanmu.IZtLiveScMessage} message ZtLiveScMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveScMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageType);
            if (message.compressionType != null && Object.hasOwnProperty.call(message, "compressionType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.compressionType);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
            if (message.liveId != null && Object.hasOwnProperty.call(message, "liveId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.liveId);
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ticket);
            if (message.serverTimestampMs != null && Object.hasOwnProperty.call(message, "serverTimestampMs"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.serverTimestampMs);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveScMessage message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveScMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @static
         * @param {AcFunDanmu.IZtLiveScMessage} message ZtLiveScMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveScMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveScMessage message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveScMessage} ZtLiveScMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveScMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveScMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.string();
                    break;
                case 2:
                    message.compressionType = reader.int32();
                    break;
                case 3:
                    message.payload = reader.bytes();
                    break;
                case 4:
                    message.liveId = reader.string();
                    break;
                case 5:
                    message.ticket = reader.string();
                    break;
                case 6:
                    message.serverTimestampMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveScMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveScMessage} ZtLiveScMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveScMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveScMessage message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveScMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                if (!$util.isString(message.messageType))
                    return "messageType: string expected";
            if (message.compressionType != null && message.hasOwnProperty("compressionType"))
                switch (message.compressionType) {
                default:
                    return "compressionType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            if (message.liveId != null && message.hasOwnProperty("liveId"))
                if (!$util.isString(message.liveId))
                    return "liveId: string expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!$util.isString(message.ticket))
                    return "ticket: string expected";
            if (message.serverTimestampMs != null && message.hasOwnProperty("serverTimestampMs"))
                if (!$util.isInteger(message.serverTimestampMs) && !(message.serverTimestampMs && $util.isInteger(message.serverTimestampMs.low) && $util.isInteger(message.serverTimestampMs.high)))
                    return "serverTimestampMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a ZtLiveScMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveScMessage} ZtLiveScMessage
         */
        ZtLiveScMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveScMessage)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveScMessage();
            if (object.messageType != null)
                message.messageType = String(object.messageType);
            switch (object.compressionType) {
            case "UNKNOWN":
            case 0:
                message.compressionType = 0;
                break;
            case "NONE":
            case 1:
                message.compressionType = 1;
                break;
            case "GZIP":
            case 2:
                message.compressionType = 2;
                break;
            }
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            if (object.liveId != null)
                message.liveId = String(object.liveId);
            if (object.ticket != null)
                message.ticket = String(object.ticket);
            if (object.serverTimestampMs != null)
                if ($util.Long)
                    (message.serverTimestampMs = $util.Long.fromValue(object.serverTimestampMs)).unsigned = false;
                else if (typeof object.serverTimestampMs === "string")
                    message.serverTimestampMs = parseInt(object.serverTimestampMs, 10);
                else if (typeof object.serverTimestampMs === "number")
                    message.serverTimestampMs = object.serverTimestampMs;
                else if (typeof object.serverTimestampMs === "object")
                    message.serverTimestampMs = new $util.LongBits(object.serverTimestampMs.low >>> 0, object.serverTimestampMs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveScMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @static
         * @param {AcFunDanmu.ZtLiveScMessage} message ZtLiveScMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveScMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageType = "";
                object.compressionType = options.enums === String ? "UNKNOWN" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
                object.liveId = "";
                object.ticket = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTimestampMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTimestampMs = options.longs === String ? "0" : 0;
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            if (message.compressionType != null && message.hasOwnProperty("compressionType"))
                object.compressionType = options.enums === String ? $root.AcFunDanmu.ZtLiveScMessage.CompressionType[message.compressionType] : message.compressionType;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            if (message.liveId != null && message.hasOwnProperty("liveId"))
                object.liveId = message.liveId;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = message.ticket;
            if (message.serverTimestampMs != null && message.hasOwnProperty("serverTimestampMs"))
                if (typeof message.serverTimestampMs === "number")
                    object.serverTimestampMs = options.longs === String ? String(message.serverTimestampMs) : message.serverTimestampMs;
                else
                    object.serverTimestampMs = options.longs === String ? $util.Long.prototype.toString.call(message.serverTimestampMs) : options.longs === Number ? new $util.LongBits(message.serverTimestampMs.low >>> 0, message.serverTimestampMs.high >>> 0).toNumber() : message.serverTimestampMs;
            return object;
        };

        /**
         * Converts this ZtLiveScMessage to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveScMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveScMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CompressionType enum.
         * @name AcFunDanmu.ZtLiveScMessage.CompressionType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} NONE=1 NONE value
         * @property {number} GZIP=2 GZIP value
         */
        ZtLiveScMessage.CompressionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "NONE"] = 1;
            values[valuesById[2] = "GZIP"] = 2;
            return values;
        })();

        return ZtLiveScMessage;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
