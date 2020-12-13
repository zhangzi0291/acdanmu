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

    AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig = (function() {

        /**
         * Properties of a CommonStateSignalAuthorChatChangeSoundConfig.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalAuthorChatChangeSoundConfig
         * @property {string|null} [authorChatId] CommonStateSignalAuthorChatChangeSoundConfig authorChatId
         * @property {AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig.SoundConfigChangeType|null} [soundConfigChangeType] CommonStateSignalAuthorChatChangeSoundConfig soundConfigChangeType
         */

        /**
         * Constructs a new CommonStateSignalAuthorChatChangeSoundConfig.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalAuthorChatChangeSoundConfig.
         * @implements ICommonStateSignalAuthorChatChangeSoundConfig
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatChangeSoundConfig=} [properties] Properties to set
         */
        function CommonStateSignalAuthorChatChangeSoundConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalAuthorChatChangeSoundConfig authorChatId.
         * @member {string} authorChatId
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @instance
         */
        CommonStateSignalAuthorChatChangeSoundConfig.prototype.authorChatId = "";

        /**
         * CommonStateSignalAuthorChatChangeSoundConfig soundConfigChangeType.
         * @member {AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig.SoundConfigChangeType} soundConfigChangeType
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @instance
         */
        CommonStateSignalAuthorChatChangeSoundConfig.prototype.soundConfigChangeType = 0;

        /**
         * Creates a new CommonStateSignalAuthorChatChangeSoundConfig instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @static
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatChangeSoundConfig=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig} CommonStateSignalAuthorChatChangeSoundConfig instance
         */
        CommonStateSignalAuthorChatChangeSoundConfig.create = function create(properties) {
            return new CommonStateSignalAuthorChatChangeSoundConfig(properties);
        };

        /**
         * Encodes the specified CommonStateSignalAuthorChatChangeSoundConfig message. Does not implicitly {@link AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @static
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatChangeSoundConfig} message CommonStateSignalAuthorChatChangeSoundConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalAuthorChatChangeSoundConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authorChatId != null && Object.hasOwnProperty.call(message, "authorChatId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.authorChatId);
            if (message.soundConfigChangeType != null && Object.hasOwnProperty.call(message, "soundConfigChangeType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.soundConfigChangeType);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalAuthorChatChangeSoundConfig message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @static
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatChangeSoundConfig} message CommonStateSignalAuthorChatChangeSoundConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalAuthorChatChangeSoundConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalAuthorChatChangeSoundConfig message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig} CommonStateSignalAuthorChatChangeSoundConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalAuthorChatChangeSoundConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authorChatId = reader.string();
                    break;
                case 2:
                    message.soundConfigChangeType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalAuthorChatChangeSoundConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig} CommonStateSignalAuthorChatChangeSoundConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalAuthorChatChangeSoundConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalAuthorChatChangeSoundConfig message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalAuthorChatChangeSoundConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authorChatId != null && message.hasOwnProperty("authorChatId"))
                if (!$util.isString(message.authorChatId))
                    return "authorChatId: string expected";
            if (message.soundConfigChangeType != null && message.hasOwnProperty("soundConfigChangeType"))
                switch (message.soundConfigChangeType) {
                default:
                    return "soundConfigChangeType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a CommonStateSignalAuthorChatChangeSoundConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig} CommonStateSignalAuthorChatChangeSoundConfig
         */
        CommonStateSignalAuthorChatChangeSoundConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig();
            if (object.authorChatId != null)
                message.authorChatId = String(object.authorChatId);
            switch (object.soundConfigChangeType) {
            case "UNKNOWN":
            case 0:
                message.soundConfigChangeType = 0;
                break;
            case "OPEN_SOUND":
            case 1:
                message.soundConfigChangeType = 1;
                break;
            case "CLOSE_SOUND":
            case 2:
                message.soundConfigChangeType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalAuthorChatChangeSoundConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @static
         * @param {AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig} message CommonStateSignalAuthorChatChangeSoundConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalAuthorChatChangeSoundConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authorChatId = "";
                object.soundConfigChangeType = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.authorChatId != null && message.hasOwnProperty("authorChatId"))
                object.authorChatId = message.authorChatId;
            if (message.soundConfigChangeType != null && message.hasOwnProperty("soundConfigChangeType"))
                object.soundConfigChangeType = options.enums === String ? $root.AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig.SoundConfigChangeType[message.soundConfigChangeType] : message.soundConfigChangeType;
            return object;
        };

        /**
         * Converts this CommonStateSignalAuthorChatChangeSoundConfig to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalAuthorChatChangeSoundConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * SoundConfigChangeType enum.
         * @name AcFunDanmu.CommonStateSignalAuthorChatChangeSoundConfig.SoundConfigChangeType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} OPEN_SOUND=1 OPEN_SOUND value
         * @property {number} CLOSE_SOUND=2 CLOSE_SOUND value
         */
        CommonStateSignalAuthorChatChangeSoundConfig.SoundConfigChangeType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "OPEN_SOUND"] = 1;
            values[valuesById[2] = "CLOSE_SOUND"] = 2;
            return values;
        })();

        return CommonStateSignalAuthorChatChangeSoundConfig;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
