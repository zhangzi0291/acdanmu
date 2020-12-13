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

    AcFunDanmu.CommonStateSignalChatCall = (function() {

        /**
         * Properties of a CommonStateSignalChatCall.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalChatCall
         * @property {string|null} [chatId] CommonStateSignalChatCall chatId
         * @property {string|null} [liveId] CommonStateSignalChatCall liveId
         * @property {number|Long|null} [callTimestampMs] CommonStateSignalChatCall callTimestampMs
         */

        /**
         * Constructs a new CommonStateSignalChatCall.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalChatCall.
         * @implements ICommonStateSignalChatCall
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalChatCall=} [properties] Properties to set
         */
        function CommonStateSignalChatCall(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalChatCall chatId.
         * @member {string} chatId
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @instance
         */
        CommonStateSignalChatCall.prototype.chatId = "";

        /**
         * CommonStateSignalChatCall liveId.
         * @member {string} liveId
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @instance
         */
        CommonStateSignalChatCall.prototype.liveId = "";

        /**
         * CommonStateSignalChatCall callTimestampMs.
         * @member {number|Long} callTimestampMs
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @instance
         */
        CommonStateSignalChatCall.prototype.callTimestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CommonStateSignalChatCall instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @static
         * @param {AcFunDanmu.ICommonStateSignalChatCall=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalChatCall} CommonStateSignalChatCall instance
         */
        CommonStateSignalChatCall.create = function create(properties) {
            return new CommonStateSignalChatCall(properties);
        };

        /**
         * Encodes the specified CommonStateSignalChatCall message. Does not implicitly {@link AcFunDanmu.CommonStateSignalChatCall.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @static
         * @param {AcFunDanmu.ICommonStateSignalChatCall} message CommonStateSignalChatCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalChatCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.chatId);
            if (message.liveId != null && Object.hasOwnProperty.call(message, "liveId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.liveId);
            if (message.callTimestampMs != null && Object.hasOwnProperty.call(message, "callTimestampMs"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.callTimestampMs);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalChatCall message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalChatCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @static
         * @param {AcFunDanmu.ICommonStateSignalChatCall} message CommonStateSignalChatCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalChatCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalChatCall message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalChatCall} CommonStateSignalChatCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalChatCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalChatCall();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chatId = reader.string();
                    break;
                case 2:
                    message.liveId = reader.string();
                    break;
                case 3:
                    message.callTimestampMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalChatCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalChatCall} CommonStateSignalChatCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalChatCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalChatCall message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalChatCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            if (message.liveId != null && message.hasOwnProperty("liveId"))
                if (!$util.isString(message.liveId))
                    return "liveId: string expected";
            if (message.callTimestampMs != null && message.hasOwnProperty("callTimestampMs"))
                if (!$util.isInteger(message.callTimestampMs) && !(message.callTimestampMs && $util.isInteger(message.callTimestampMs.low) && $util.isInteger(message.callTimestampMs.high)))
                    return "callTimestampMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a CommonStateSignalChatCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalChatCall} CommonStateSignalChatCall
         */
        CommonStateSignalChatCall.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalChatCall)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalChatCall();
            if (object.chatId != null)
                message.chatId = String(object.chatId);
            if (object.liveId != null)
                message.liveId = String(object.liveId);
            if (object.callTimestampMs != null)
                if ($util.Long)
                    (message.callTimestampMs = $util.Long.fromValue(object.callTimestampMs)).unsigned = false;
                else if (typeof object.callTimestampMs === "string")
                    message.callTimestampMs = parseInt(object.callTimestampMs, 10);
                else if (typeof object.callTimestampMs === "number")
                    message.callTimestampMs = object.callTimestampMs;
                else if (typeof object.callTimestampMs === "object")
                    message.callTimestampMs = new $util.LongBits(object.callTimestampMs.low >>> 0, object.callTimestampMs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalChatCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @static
         * @param {AcFunDanmu.CommonStateSignalChatCall} message CommonStateSignalChatCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalChatCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chatId = "";
                object.liveId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.callTimestampMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.callTimestampMs = options.longs === String ? "0" : 0;
            }
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            if (message.liveId != null && message.hasOwnProperty("liveId"))
                object.liveId = message.liveId;
            if (message.callTimestampMs != null && message.hasOwnProperty("callTimestampMs"))
                if (typeof message.callTimestampMs === "number")
                    object.callTimestampMs = options.longs === String ? String(message.callTimestampMs) : message.callTimestampMs;
                else
                    object.callTimestampMs = options.longs === String ? $util.Long.prototype.toString.call(message.callTimestampMs) : options.longs === Number ? new $util.LongBits(message.callTimestampMs.low >>> 0, message.callTimestampMs.high >>> 0).toNumber() : message.callTimestampMs;
            return object;
        };

        /**
         * Converts this CommonStateSignalChatCall to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalChatCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalChatCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonStateSignalChatCall;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
