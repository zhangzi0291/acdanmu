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

    AcFunDanmu.CommonStateSignalChatEnd = (function() {

        /**
         * Properties of a CommonStateSignalChatEnd.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalChatEnd
         * @property {string|null} [chatId] CommonStateSignalChatEnd chatId
         * @property {AcFunDanmu.CommonStateSignalChatEnd.EndType|null} [endType] CommonStateSignalChatEnd endType
         */

        /**
         * Constructs a new CommonStateSignalChatEnd.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalChatEnd.
         * @implements ICommonStateSignalChatEnd
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalChatEnd=} [properties] Properties to set
         */
        function CommonStateSignalChatEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalChatEnd chatId.
         * @member {string} chatId
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @instance
         */
        CommonStateSignalChatEnd.prototype.chatId = "";

        /**
         * CommonStateSignalChatEnd endType.
         * @member {AcFunDanmu.CommonStateSignalChatEnd.EndType} endType
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @instance
         */
        CommonStateSignalChatEnd.prototype.endType = 0;

        /**
         * Creates a new CommonStateSignalChatEnd instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @static
         * @param {AcFunDanmu.ICommonStateSignalChatEnd=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalChatEnd} CommonStateSignalChatEnd instance
         */
        CommonStateSignalChatEnd.create = function create(properties) {
            return new CommonStateSignalChatEnd(properties);
        };

        /**
         * Encodes the specified CommonStateSignalChatEnd message. Does not implicitly {@link AcFunDanmu.CommonStateSignalChatEnd.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @static
         * @param {AcFunDanmu.ICommonStateSignalChatEnd} message CommonStateSignalChatEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalChatEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.chatId);
            if (message.endType != null && Object.hasOwnProperty.call(message, "endType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.endType);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalChatEnd message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalChatEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @static
         * @param {AcFunDanmu.ICommonStateSignalChatEnd} message CommonStateSignalChatEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalChatEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalChatEnd message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalChatEnd} CommonStateSignalChatEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalChatEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalChatEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chatId = reader.string();
                    break;
                case 2:
                    message.endType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalChatEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalChatEnd} CommonStateSignalChatEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalChatEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalChatEnd message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalChatEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            if (message.endType != null && message.hasOwnProperty("endType"))
                switch (message.endType) {
                default:
                    return "endType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a CommonStateSignalChatEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalChatEnd} CommonStateSignalChatEnd
         */
        CommonStateSignalChatEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalChatEnd)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalChatEnd();
            if (object.chatId != null)
                message.chatId = String(object.chatId);
            switch (object.endType) {
            case "UNKNOWN":
            case 0:
                message.endType = 0;
                break;
            case "CANCEL_BY_AUTHOR":
            case 1:
                message.endType = 1;
                break;
            case "END_BY_AUTHOR":
            case 2:
                message.endType = 2;
                break;
            case "END_BY_GUEST":
            case 3:
                message.endType = 3;
                break;
            case "GUEST_REJECT":
            case 4:
                message.endType = 4;
                break;
            case "GUEST_TIMEOUT":
            case 5:
                message.endType = 5;
                break;
            case "GUEST_HEARTBEAT_TIMEOUT":
            case 6:
                message.endType = 6;
                break;
            case "AUTHOR_HEARTBEAT_TIMEOUT":
            case 7:
                message.endType = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalChatEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @static
         * @param {AcFunDanmu.CommonStateSignalChatEnd} message CommonStateSignalChatEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalChatEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chatId = "";
                object.endType = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            if (message.endType != null && message.hasOwnProperty("endType"))
                object.endType = options.enums === String ? $root.AcFunDanmu.CommonStateSignalChatEnd.EndType[message.endType] : message.endType;
            return object;
        };

        /**
         * Converts this CommonStateSignalChatEnd to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalChatEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalChatEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * EndType enum.
         * @name AcFunDanmu.CommonStateSignalChatEnd.EndType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CANCEL_BY_AUTHOR=1 CANCEL_BY_AUTHOR value
         * @property {number} END_BY_AUTHOR=2 END_BY_AUTHOR value
         * @property {number} END_BY_GUEST=3 END_BY_GUEST value
         * @property {number} GUEST_REJECT=4 GUEST_REJECT value
         * @property {number} GUEST_TIMEOUT=5 GUEST_TIMEOUT value
         * @property {number} GUEST_HEARTBEAT_TIMEOUT=6 GUEST_HEARTBEAT_TIMEOUT value
         * @property {number} AUTHOR_HEARTBEAT_TIMEOUT=7 AUTHOR_HEARTBEAT_TIMEOUT value
         */
        CommonStateSignalChatEnd.EndType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CANCEL_BY_AUTHOR"] = 1;
            values[valuesById[2] = "END_BY_AUTHOR"] = 2;
            values[valuesById[3] = "END_BY_GUEST"] = 3;
            values[valuesById[4] = "GUEST_REJECT"] = 4;
            values[valuesById[5] = "GUEST_TIMEOUT"] = 5;
            values[valuesById[6] = "GUEST_HEARTBEAT_TIMEOUT"] = 6;
            values[valuesById[7] = "AUTHOR_HEARTBEAT_TIMEOUT"] = 7;
            return values;
        })();

        return CommonStateSignalChatEnd;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
