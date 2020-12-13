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

    AcFunDanmu.PkPlayerRoundStatistic = (function() {

        /**
         * Properties of a PkPlayerRoundStatistic.
         * @memberof AcFunDanmu
         * @interface IPkPlayerRoundStatistic
         * @property {number|Long|null} [a] PkPlayerRoundStatistic a
         * @property {number|null} [b] PkPlayerRoundStatistic b
         */

        /**
         * Constructs a new PkPlayerRoundStatistic.
         * @memberof AcFunDanmu
         * @classdesc Represents a PkPlayerRoundStatistic.
         * @implements IPkPlayerRoundStatistic
         * @constructor
         * @param {AcFunDanmu.IPkPlayerRoundStatistic=} [properties] Properties to set
         */
        function PkPlayerRoundStatistic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PkPlayerRoundStatistic a.
         * @member {number|Long} a
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @instance
         */
        PkPlayerRoundStatistic.prototype.a = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PkPlayerRoundStatistic b.
         * @member {number} b
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @instance
         */
        PkPlayerRoundStatistic.prototype.b = 0;

        /**
         * Creates a new PkPlayerRoundStatistic instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @static
         * @param {AcFunDanmu.IPkPlayerRoundStatistic=} [properties] Properties to set
         * @returns {AcFunDanmu.PkPlayerRoundStatistic} PkPlayerRoundStatistic instance
         */
        PkPlayerRoundStatistic.create = function create(properties) {
            return new PkPlayerRoundStatistic(properties);
        };

        /**
         * Encodes the specified PkPlayerRoundStatistic message. Does not implicitly {@link AcFunDanmu.PkPlayerRoundStatistic.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @static
         * @param {AcFunDanmu.IPkPlayerRoundStatistic} message PkPlayerRoundStatistic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkPlayerRoundStatistic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.a);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.b);
            return writer;
        };

        /**
         * Encodes the specified PkPlayerRoundStatistic message, length delimited. Does not implicitly {@link AcFunDanmu.PkPlayerRoundStatistic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @static
         * @param {AcFunDanmu.IPkPlayerRoundStatistic} message PkPlayerRoundStatistic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkPlayerRoundStatistic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PkPlayerRoundStatistic message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PkPlayerRoundStatistic} PkPlayerRoundStatistic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkPlayerRoundStatistic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PkPlayerRoundStatistic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = reader.int64();
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
         * Decodes a PkPlayerRoundStatistic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PkPlayerRoundStatistic} PkPlayerRoundStatistic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkPlayerRoundStatistic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PkPlayerRoundStatistic message.
         * @function verify
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PkPlayerRoundStatistic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isInteger(message.a) && !(message.a && $util.isInteger(message.a.low) && $util.isInteger(message.a.high)))
                    return "a: integer|Long expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b))
                    return "b: integer expected";
            return null;
        };

        /**
         * Creates a PkPlayerRoundStatistic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PkPlayerRoundStatistic} PkPlayerRoundStatistic
         */
        PkPlayerRoundStatistic.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PkPlayerRoundStatistic)
                return object;
            var message = new $root.AcFunDanmu.PkPlayerRoundStatistic();
            if (object.a != null)
                if ($util.Long)
                    (message.a = $util.Long.fromValue(object.a)).unsigned = false;
                else if (typeof object.a === "string")
                    message.a = parseInt(object.a, 10);
                else if (typeof object.a === "number")
                    message.a = object.a;
                else if (typeof object.a === "object")
                    message.a = new $util.LongBits(object.a.low >>> 0, object.a.high >>> 0).toNumber();
            if (object.b != null)
                message.b = object.b | 0;
            return message;
        };

        /**
         * Creates a plain object from a PkPlayerRoundStatistic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @static
         * @param {AcFunDanmu.PkPlayerRoundStatistic} message PkPlayerRoundStatistic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PkPlayerRoundStatistic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.a = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.a = options.longs === String ? "0" : 0;
                object.b = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                if (typeof message.a === "number")
                    object.a = options.longs === String ? String(message.a) : message.a;
                else
                    object.a = options.longs === String ? $util.Long.prototype.toString.call(message.a) : options.longs === Number ? new $util.LongBits(message.a.low >>> 0, message.a.high >>> 0).toNumber() : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            return object;
        };

        /**
         * Converts this PkPlayerRoundStatistic to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PkPlayerRoundStatistic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PkPlayerRoundStatistic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PkPlayerRoundStatistic;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
