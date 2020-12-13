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

    AcFunDanmu.LocaleMessage = (function() {

        /**
         * Properties of a LocaleMessage.
         * @memberof AcFunDanmu
         * @interface ILocaleMessage
         * @property {string|null} [locale] LocaleMessage locale
         * @property {Object.<string,string>|null} [errorMessage] LocaleMessage errorMessage
         */

        /**
         * Constructs a new LocaleMessage.
         * @memberof AcFunDanmu
         * @classdesc Represents a LocaleMessage.
         * @implements ILocaleMessage
         * @constructor
         * @param {AcFunDanmu.ILocaleMessage=} [properties] Properties to set
         */
        function LocaleMessage(properties) {
            this.errorMessage = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LocaleMessage locale.
         * @member {string} locale
         * @memberof AcFunDanmu.LocaleMessage
         * @instance
         */
        LocaleMessage.prototype.locale = "";

        /**
         * LocaleMessage errorMessage.
         * @member {Object.<string,string>} errorMessage
         * @memberof AcFunDanmu.LocaleMessage
         * @instance
         */
        LocaleMessage.prototype.errorMessage = $util.emptyObject;

        /**
         * Creates a new LocaleMessage instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.LocaleMessage
         * @static
         * @param {AcFunDanmu.ILocaleMessage=} [properties] Properties to set
         * @returns {AcFunDanmu.LocaleMessage} LocaleMessage instance
         */
        LocaleMessage.create = function create(properties) {
            return new LocaleMessage(properties);
        };

        /**
         * Encodes the specified LocaleMessage message. Does not implicitly {@link AcFunDanmu.LocaleMessage.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.LocaleMessage
         * @static
         * @param {AcFunDanmu.ILocaleMessage} message LocaleMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocaleMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.locale);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                for (var keys = Object.keys(message.errorMessage), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LocaleMessage message, length delimited. Does not implicitly {@link AcFunDanmu.LocaleMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.LocaleMessage
         * @static
         * @param {AcFunDanmu.ILocaleMessage} message LocaleMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocaleMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LocaleMessage message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.LocaleMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.LocaleMessage} LocaleMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocaleMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.LocaleMessage(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.locale = reader.string();
                    break;
                case 2:
                    if (message.errorMessage === $util.emptyObject)
                        message.errorMessage = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = "";
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int32();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.errorMessage[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LocaleMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.LocaleMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.LocaleMessage} LocaleMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocaleMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LocaleMessage message.
         * @function verify
         * @memberof AcFunDanmu.LocaleMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LocaleMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.locale != null && message.hasOwnProperty("locale"))
                if (!$util.isString(message.locale))
                    return "locale: string expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage")) {
                if (!$util.isObject(message.errorMessage))
                    return "errorMessage: object expected";
                var key = Object.keys(message.errorMessage);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "errorMessage: integer key{k:int32} expected";
                    if (!$util.isString(message.errorMessage[key[i]]))
                        return "errorMessage: string{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates a LocaleMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.LocaleMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.LocaleMessage} LocaleMessage
         */
        LocaleMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.LocaleMessage)
                return object;
            var message = new $root.AcFunDanmu.LocaleMessage();
            if (object.locale != null)
                message.locale = String(object.locale);
            if (object.errorMessage) {
                if (typeof object.errorMessage !== "object")
                    throw TypeError(".AcFunDanmu.LocaleMessage.errorMessage: object expected");
                message.errorMessage = {};
                for (var keys = Object.keys(object.errorMessage), i = 0; i < keys.length; ++i)
                    message.errorMessage[keys[i]] = String(object.errorMessage[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a LocaleMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.LocaleMessage
         * @static
         * @param {AcFunDanmu.LocaleMessage} message LocaleMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LocaleMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.errorMessage = {};
            if (options.defaults)
                object.locale = "";
            if (message.locale != null && message.hasOwnProperty("locale"))
                object.locale = message.locale;
            var keys2;
            if (message.errorMessage && (keys2 = Object.keys(message.errorMessage)).length) {
                object.errorMessage = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.errorMessage[keys2[j]] = message.errorMessage[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this LocaleMessage to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.LocaleMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LocaleMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LocaleMessage;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
