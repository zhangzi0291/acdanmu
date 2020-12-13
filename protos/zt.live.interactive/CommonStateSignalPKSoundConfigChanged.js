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

    AcFunDanmu.CommonStateSignalPKSoundConfigChanged = (function() {

        /**
         * Properties of a CommonStateSignalPKSoundConfigChanged.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalPKSoundConfigChanged
         * @property {string|null} [a] CommonStateSignalPKSoundConfigChanged a
         * @property {AcFunDanmu.CommonStateSignalPKSoundConfigChanged.unknown|null} [b] CommonStateSignalPKSoundConfigChanged b
         */

        /**
         * Constructs a new CommonStateSignalPKSoundConfigChanged.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalPKSoundConfigChanged.
         * @implements ICommonStateSignalPKSoundConfigChanged
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalPKSoundConfigChanged=} [properties] Properties to set
         */
        function CommonStateSignalPKSoundConfigChanged(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalPKSoundConfigChanged a.
         * @member {string} a
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @instance
         */
        CommonStateSignalPKSoundConfigChanged.prototype.a = "";

        /**
         * CommonStateSignalPKSoundConfigChanged b.
         * @member {AcFunDanmu.CommonStateSignalPKSoundConfigChanged.unknown} b
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @instance
         */
        CommonStateSignalPKSoundConfigChanged.prototype.b = 0;

        /**
         * Creates a new CommonStateSignalPKSoundConfigChanged instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPKSoundConfigChanged=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalPKSoundConfigChanged} CommonStateSignalPKSoundConfigChanged instance
         */
        CommonStateSignalPKSoundConfigChanged.create = function create(properties) {
            return new CommonStateSignalPKSoundConfigChanged(properties);
        };

        /**
         * Encodes the specified CommonStateSignalPKSoundConfigChanged message. Does not implicitly {@link AcFunDanmu.CommonStateSignalPKSoundConfigChanged.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPKSoundConfigChanged} message CommonStateSignalPKSoundConfigChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPKSoundConfigChanged.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.a);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.b);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalPKSoundConfigChanged message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalPKSoundConfigChanged.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPKSoundConfigChanged} message CommonStateSignalPKSoundConfigChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPKSoundConfigChanged.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalPKSoundConfigChanged message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalPKSoundConfigChanged} CommonStateSignalPKSoundConfigChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPKSoundConfigChanged.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalPKSoundConfigChanged();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = reader.string();
                    break;
                case 2:
                    message.b = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalPKSoundConfigChanged message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalPKSoundConfigChanged} CommonStateSignalPKSoundConfigChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPKSoundConfigChanged.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalPKSoundConfigChanged message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalPKSoundConfigChanged.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isString(message.a))
                    return "a: string expected";
            if (message.b != null && message.hasOwnProperty("b"))
                switch (message.b) {
                default:
                    return "b: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a CommonStateSignalPKSoundConfigChanged message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalPKSoundConfigChanged} CommonStateSignalPKSoundConfigChanged
         */
        CommonStateSignalPKSoundConfigChanged.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalPKSoundConfigChanged)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalPKSoundConfigChanged();
            if (object.a != null)
                message.a = String(object.a);
            switch (object.b) {
            case "c":
            case 0:
                message.b = 0;
                break;
            case "d":
            case 1:
                message.b = 1;
                break;
            case "e":
            case 2:
                message.b = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalPKSoundConfigChanged message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @static
         * @param {AcFunDanmu.CommonStateSignalPKSoundConfigChanged} message CommonStateSignalPKSoundConfigChanged
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalPKSoundConfigChanged.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.a = "";
                object.b = options.enums === String ? "c" : 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.enums === String ? $root.AcFunDanmu.CommonStateSignalPKSoundConfigChanged.unknown[message.b] : message.b;
            return object;
        };

        /**
         * Converts this CommonStateSignalPKSoundConfigChanged to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalPKSoundConfigChanged
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalPKSoundConfigChanged.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * unknown enum.
         * @name AcFunDanmu.CommonStateSignalPKSoundConfigChanged.unknown
         * @enum {number}
         * @property {number} c=0 c value
         * @property {number} d=1 d value
         * @property {number} e=2 e value
         */
        CommonStateSignalPKSoundConfigChanged.unknown = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "c"] = 0;
            values[valuesById[1] = "d"] = 1;
            values[valuesById[2] = "e"] = 2;
            return values;
        })();

        return CommonStateSignalPKSoundConfigChanged;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
