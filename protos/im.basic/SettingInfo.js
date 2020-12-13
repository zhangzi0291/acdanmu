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

    AcFunDanmu.SettingInfo = (function() {

        /**
         * Properties of a SettingInfo.
         * @memberof AcFunDanmu
         * @interface ISettingInfo
         * @property {string|null} [locale] SettingInfo locale
         * @property {number|null} [timezone] SettingInfo timezone
         */

        /**
         * Constructs a new SettingInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a SettingInfo.
         * @implements ISettingInfo
         * @constructor
         * @param {AcFunDanmu.ISettingInfo=} [properties] Properties to set
         */
        function SettingInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SettingInfo locale.
         * @member {string} locale
         * @memberof AcFunDanmu.SettingInfo
         * @instance
         */
        SettingInfo.prototype.locale = "";

        /**
         * SettingInfo timezone.
         * @member {number} timezone
         * @memberof AcFunDanmu.SettingInfo
         * @instance
         */
        SettingInfo.prototype.timezone = 0;

        /**
         * Creates a new SettingInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {AcFunDanmu.ISettingInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.SettingInfo} SettingInfo instance
         */
        SettingInfo.create = function create(properties) {
            return new SettingInfo(properties);
        };

        /**
         * Encodes the specified SettingInfo message. Does not implicitly {@link AcFunDanmu.SettingInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {AcFunDanmu.ISettingInfo} message SettingInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.locale);
            if (message.timezone != null && Object.hasOwnProperty.call(message, "timezone"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.timezone);
            return writer;
        };

        /**
         * Encodes the specified SettingInfo message, length delimited. Does not implicitly {@link AcFunDanmu.SettingInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {AcFunDanmu.ISettingInfo} message SettingInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SettingInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.SettingInfo} SettingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.SettingInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.locale = reader.string();
                    break;
                case 2:
                    message.timezone = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SettingInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.SettingInfo} SettingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SettingInfo message.
         * @function verify
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SettingInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.locale != null && message.hasOwnProperty("locale"))
                if (!$util.isString(message.locale))
                    return "locale: string expected";
            if (message.timezone != null && message.hasOwnProperty("timezone"))
                if (!$util.isInteger(message.timezone))
                    return "timezone: integer expected";
            return null;
        };

        /**
         * Creates a SettingInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.SettingInfo} SettingInfo
         */
        SettingInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.SettingInfo)
                return object;
            var message = new $root.AcFunDanmu.SettingInfo();
            if (object.locale != null)
                message.locale = String(object.locale);
            if (object.timezone != null)
                message.timezone = object.timezone | 0;
            return message;
        };

        /**
         * Creates a plain object from a SettingInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {AcFunDanmu.SettingInfo} message SettingInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SettingInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.locale = "";
                object.timezone = 0;
            }
            if (message.locale != null && message.hasOwnProperty("locale"))
                object.locale = message.locale;
            if (message.timezone != null && message.hasOwnProperty("timezone"))
                object.timezone = message.timezone;
            return object;
        };

        /**
         * Converts this SettingInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.SettingInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SettingInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettingInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
