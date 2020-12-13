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

    AcFunDanmu.CommonStateSignalPkEnd = (function() {

        /**
         * Properties of a CommonStateSignalPkEnd.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalPkEnd
         * @property {string|null} [a] CommonStateSignalPkEnd a
         * @property {AcFunDanmu.CommonStateSignalPkEnd.unknown|null} [b] CommonStateSignalPkEnd b
         * @property {string|null} [c] CommonStateSignalPkEnd c
         */

        /**
         * Constructs a new CommonStateSignalPkEnd.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalPkEnd.
         * @implements ICommonStateSignalPkEnd
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalPkEnd=} [properties] Properties to set
         */
        function CommonStateSignalPkEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalPkEnd a.
         * @member {string} a
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @instance
         */
        CommonStateSignalPkEnd.prototype.a = "";

        /**
         * CommonStateSignalPkEnd b.
         * @member {AcFunDanmu.CommonStateSignalPkEnd.unknown} b
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @instance
         */
        CommonStateSignalPkEnd.prototype.b = 0;

        /**
         * CommonStateSignalPkEnd c.
         * @member {string} c
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @instance
         */
        CommonStateSignalPkEnd.prototype.c = "";

        /**
         * Creates a new CommonStateSignalPkEnd instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPkEnd=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalPkEnd} CommonStateSignalPkEnd instance
         */
        CommonStateSignalPkEnd.create = function create(properties) {
            return new CommonStateSignalPkEnd(properties);
        };

        /**
         * Encodes the specified CommonStateSignalPkEnd message. Does not implicitly {@link AcFunDanmu.CommonStateSignalPkEnd.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPkEnd} message CommonStateSignalPkEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPkEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.a);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.b);
            if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.c);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalPkEnd message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalPkEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPkEnd} message CommonStateSignalPkEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPkEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalPkEnd message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalPkEnd} CommonStateSignalPkEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPkEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalPkEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = reader.string();
                    break;
                case 2:
                    message.b = reader.int32();
                    break;
                case 3:
                    message.c = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalPkEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalPkEnd} CommonStateSignalPkEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPkEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalPkEnd message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalPkEnd.verify = function verify(message) {
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
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    break;
                }
            if (message.c != null && message.hasOwnProperty("c"))
                if (!$util.isString(message.c))
                    return "c: string expected";
            return null;
        };

        /**
         * Creates a CommonStateSignalPkEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalPkEnd} CommonStateSignalPkEnd
         */
        CommonStateSignalPkEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalPkEnd)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalPkEnd();
            if (object.a != null)
                message.a = String(object.a);
            switch (object.b) {
            case "d":
            case 0:
                message.b = 0;
                break;
            case "e":
            case 1:
                message.b = 1;
                break;
            case "f":
            case 2:
                message.b = 2;
                break;
            case "g":
            case 3:
                message.b = 3;
                break;
            case "h":
            case 4:
                message.b = 4;
                break;
            case "i":
            case 5:
                message.b = 5;
                break;
            case "j":
            case 6:
                message.b = 6;
                break;
            case "k":
            case 7:
                message.b = 7;
                break;
            case "l":
            case 8:
                message.b = 8;
                break;
            case "m":
            case 9:
                message.b = 9;
                break;
            case "n":
            case 10:
                message.b = 10;
                break;
            case "o":
            case 11:
                message.b = 11;
                break;
            }
            if (object.c != null)
                message.c = String(object.c);
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalPkEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @static
         * @param {AcFunDanmu.CommonStateSignalPkEnd} message CommonStateSignalPkEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalPkEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.a = "";
                object.b = options.enums === String ? "d" : 0;
                object.c = "";
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = options.enums === String ? $root.AcFunDanmu.CommonStateSignalPkEnd.unknown[message.b] : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = message.c;
            return object;
        };

        /**
         * Converts this CommonStateSignalPkEnd to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalPkEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalPkEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * unknown enum.
         * @name AcFunDanmu.CommonStateSignalPkEnd.unknown
         * @enum {number}
         * @property {number} d=0 d value
         * @property {number} e=1 e value
         * @property {number} f=2 f value
         * @property {number} g=3 g value
         * @property {number} h=4 h value
         * @property {number} i=5 i value
         * @property {number} j=6 j value
         * @property {number} k=7 k value
         * @property {number} l=8 l value
         * @property {number} m=9 m value
         * @property {number} n=10 n value
         * @property {number} o=11 o value
         */
        CommonStateSignalPkEnd.unknown = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "d"] = 0;
            values[valuesById[1] = "e"] = 1;
            values[valuesById[2] = "f"] = 2;
            values[valuesById[3] = "g"] = 3;
            values[valuesById[4] = "h"] = 4;
            values[valuesById[5] = "i"] = 5;
            values[valuesById[6] = "j"] = 6;
            values[valuesById[7] = "k"] = 7;
            values[valuesById[8] = "l"] = 8;
            values[valuesById[9] = "m"] = 9;
            values[valuesById[10] = "n"] = 10;
            values[valuesById[11] = "o"] = 11;
            return values;
        })();

        return CommonStateSignalPkEnd;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
