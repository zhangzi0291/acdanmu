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

    AcFunDanmu.CommonStateSignalChatAccept = (function() {

        /**
         * Properties of a CommonStateSignalChatAccept.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalChatAccept
         * @property {string|null} [chatId] CommonStateSignalChatAccept chatId
         * @property {AcFunDanmu.ChatMediaType|null} [mediaType] CommonStateSignalChatAccept mediaType
         * @property {string|null} [arraySignalInfo] CommonStateSignalChatAccept arraySignalInfo
         */

        /**
         * Constructs a new CommonStateSignalChatAccept.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalChatAccept.
         * @implements ICommonStateSignalChatAccept
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalChatAccept=} [properties] Properties to set
         */
        function CommonStateSignalChatAccept(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalChatAccept chatId.
         * @member {string} chatId
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @instance
         */
        CommonStateSignalChatAccept.prototype.chatId = "";

        /**
         * CommonStateSignalChatAccept mediaType.
         * @member {AcFunDanmu.ChatMediaType} mediaType
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @instance
         */
        CommonStateSignalChatAccept.prototype.mediaType = 0;

        /**
         * CommonStateSignalChatAccept arraySignalInfo.
         * @member {string} arraySignalInfo
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @instance
         */
        CommonStateSignalChatAccept.prototype.arraySignalInfo = "";

        /**
         * Creates a new CommonStateSignalChatAccept instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @static
         * @param {AcFunDanmu.ICommonStateSignalChatAccept=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalChatAccept} CommonStateSignalChatAccept instance
         */
        CommonStateSignalChatAccept.create = function create(properties) {
            return new CommonStateSignalChatAccept(properties);
        };

        /**
         * Encodes the specified CommonStateSignalChatAccept message. Does not implicitly {@link AcFunDanmu.CommonStateSignalChatAccept.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @static
         * @param {AcFunDanmu.ICommonStateSignalChatAccept} message CommonStateSignalChatAccept message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalChatAccept.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.chatId);
            if (message.mediaType != null && Object.hasOwnProperty.call(message, "mediaType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mediaType);
            if (message.arraySignalInfo != null && Object.hasOwnProperty.call(message, "arraySignalInfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.arraySignalInfo);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalChatAccept message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalChatAccept.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @static
         * @param {AcFunDanmu.ICommonStateSignalChatAccept} message CommonStateSignalChatAccept message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalChatAccept.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalChatAccept message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalChatAccept} CommonStateSignalChatAccept
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalChatAccept.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalChatAccept();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chatId = reader.string();
                    break;
                case 2:
                    message.mediaType = reader.int32();
                    break;
                case 3:
                    message.arraySignalInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalChatAccept message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalChatAccept} CommonStateSignalChatAccept
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalChatAccept.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalChatAccept message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalChatAccept.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            if (message.mediaType != null && message.hasOwnProperty("mediaType"))
                switch (message.mediaType) {
                default:
                    return "mediaType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.arraySignalInfo != null && message.hasOwnProperty("arraySignalInfo"))
                if (!$util.isString(message.arraySignalInfo))
                    return "arraySignalInfo: string expected";
            return null;
        };

        /**
         * Creates a CommonStateSignalChatAccept message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalChatAccept} CommonStateSignalChatAccept
         */
        CommonStateSignalChatAccept.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalChatAccept)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalChatAccept();
            if (object.chatId != null)
                message.chatId = String(object.chatId);
            switch (object.mediaType) {
            case "UNKNOWN":
            case 0:
                message.mediaType = 0;
                break;
            case "AUDIO":
            case 1:
                message.mediaType = 1;
                break;
            case "VIDEO":
            case 2:
                message.mediaType = 2;
                break;
            }
            if (object.arraySignalInfo != null)
                message.arraySignalInfo = String(object.arraySignalInfo);
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalChatAccept message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @static
         * @param {AcFunDanmu.CommonStateSignalChatAccept} message CommonStateSignalChatAccept
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalChatAccept.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chatId = "";
                object.mediaType = options.enums === String ? "UNKNOWN" : 0;
                object.arraySignalInfo = "";
            }
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            if (message.mediaType != null && message.hasOwnProperty("mediaType"))
                object.mediaType = options.enums === String ? $root.AcFunDanmu.ChatMediaType[message.mediaType] : message.mediaType;
            if (message.arraySignalInfo != null && message.hasOwnProperty("arraySignalInfo"))
                object.arraySignalInfo = message.arraySignalInfo;
            return object;
        };

        /**
         * Converts this CommonStateSignalChatAccept to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalChatAccept
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalChatAccept.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonStateSignalChatAccept;
    })();

    /**
     * ChatMediaType enum.
     * @name AcFunDanmu.ChatMediaType
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} AUDIO=1 AUDIO value
     * @property {number} VIDEO=2 VIDEO value
     */
    AcFunDanmu.ChatMediaType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "AUDIO"] = 1;
        values[valuesById[2] = "VIDEO"] = 2;
        return values;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
