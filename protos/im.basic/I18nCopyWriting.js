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

    AcFunDanmu.I18nCopyWriting = (function() {

        /**
         * Properties of a I18nCopyWriting.
         * @memberof AcFunDanmu
         * @interface II18nCopyWriting
         * @property {string|null} [formatKey] I18nCopyWriting formatKey
         * @property {Array.<string>|null} [formatParam] I18nCopyWriting formatParam
         */

        /**
         * Constructs a new I18nCopyWriting.
         * @memberof AcFunDanmu
         * @classdesc Represents a I18nCopyWriting.
         * @implements II18nCopyWriting
         * @constructor
         * @param {AcFunDanmu.II18nCopyWriting=} [properties] Properties to set
         */
        function I18nCopyWriting(properties) {
            this.formatParam = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * I18nCopyWriting formatKey.
         * @member {string} formatKey
         * @memberof AcFunDanmu.I18nCopyWriting
         * @instance
         */
        I18nCopyWriting.prototype.formatKey = "";

        /**
         * I18nCopyWriting formatParam.
         * @member {Array.<string>} formatParam
         * @memberof AcFunDanmu.I18nCopyWriting
         * @instance
         */
        I18nCopyWriting.prototype.formatParam = $util.emptyArray;

        /**
         * Creates a new I18nCopyWriting instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.I18nCopyWriting
         * @static
         * @param {AcFunDanmu.II18nCopyWriting=} [properties] Properties to set
         * @returns {AcFunDanmu.I18nCopyWriting} I18nCopyWriting instance
         */
        I18nCopyWriting.create = function create(properties) {
            return new I18nCopyWriting(properties);
        };

        /**
         * Encodes the specified I18nCopyWriting message. Does not implicitly {@link AcFunDanmu.I18nCopyWriting.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.I18nCopyWriting
         * @static
         * @param {AcFunDanmu.II18nCopyWriting} message I18nCopyWriting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        I18nCopyWriting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.formatKey != null && Object.hasOwnProperty.call(message, "formatKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.formatKey);
            if (message.formatParam != null && message.formatParam.length)
                for (var i = 0; i < message.formatParam.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.formatParam[i]);
            return writer;
        };

        /**
         * Encodes the specified I18nCopyWriting message, length delimited. Does not implicitly {@link AcFunDanmu.I18nCopyWriting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.I18nCopyWriting
         * @static
         * @param {AcFunDanmu.II18nCopyWriting} message I18nCopyWriting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        I18nCopyWriting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a I18nCopyWriting message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.I18nCopyWriting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.I18nCopyWriting} I18nCopyWriting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        I18nCopyWriting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.I18nCopyWriting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.formatKey = reader.string();
                    break;
                case 2:
                    if (!(message.formatParam && message.formatParam.length))
                        message.formatParam = [];
                    message.formatParam.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a I18nCopyWriting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.I18nCopyWriting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.I18nCopyWriting} I18nCopyWriting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        I18nCopyWriting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a I18nCopyWriting message.
         * @function verify
         * @memberof AcFunDanmu.I18nCopyWriting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        I18nCopyWriting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.formatKey != null && message.hasOwnProperty("formatKey"))
                if (!$util.isString(message.formatKey))
                    return "formatKey: string expected";
            if (message.formatParam != null && message.hasOwnProperty("formatParam")) {
                if (!Array.isArray(message.formatParam))
                    return "formatParam: array expected";
                for (var i = 0; i < message.formatParam.length; ++i)
                    if (!$util.isString(message.formatParam[i]))
                        return "formatParam: string[] expected";
            }
            return null;
        };

        /**
         * Creates a I18nCopyWriting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.I18nCopyWriting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.I18nCopyWriting} I18nCopyWriting
         */
        I18nCopyWriting.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.I18nCopyWriting)
                return object;
            var message = new $root.AcFunDanmu.I18nCopyWriting();
            if (object.formatKey != null)
                message.formatKey = String(object.formatKey);
            if (object.formatParam) {
                if (!Array.isArray(object.formatParam))
                    throw TypeError(".AcFunDanmu.I18nCopyWriting.formatParam: array expected");
                message.formatParam = [];
                for (var i = 0; i < object.formatParam.length; ++i)
                    message.formatParam[i] = String(object.formatParam[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a I18nCopyWriting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.I18nCopyWriting
         * @static
         * @param {AcFunDanmu.I18nCopyWriting} message I18nCopyWriting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        I18nCopyWriting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.formatParam = [];
            if (options.defaults)
                object.formatKey = "";
            if (message.formatKey != null && message.hasOwnProperty("formatKey"))
                object.formatKey = message.formatKey;
            if (message.formatParam && message.formatParam.length) {
                object.formatParam = [];
                for (var j = 0; j < message.formatParam.length; ++j)
                    object.formatParam[j] = message.formatParam[j];
            }
            return object;
        };

        /**
         * Converts this I18nCopyWriting to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.I18nCopyWriting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        I18nCopyWriting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return I18nCopyWriting;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
