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

    AcFunDanmu.PkRoundInfo = (function() {

        /**
         * Properties of a PkRoundInfo.
         * @memberof AcFunDanmu
         * @interface IPkRoundInfo
         * @property {number|Long|null} [a] PkRoundInfo a
         * @property {number|null} [b] PkRoundInfo b
         * @property {number|null} [c] PkRoundInfo c
         * @property {number|Long|null} [d] PkRoundInfo d
         * @property {number|null} [e] PkRoundInfo e
         */

        /**
         * Constructs a new PkRoundInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a PkRoundInfo.
         * @implements IPkRoundInfo
         * @constructor
         * @param {AcFunDanmu.IPkRoundInfo=} [properties] Properties to set
         */
        function PkRoundInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PkRoundInfo a.
         * @member {number|Long} a
         * @memberof AcFunDanmu.PkRoundInfo
         * @instance
         */
        PkRoundInfo.prototype.a = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PkRoundInfo b.
         * @member {number} b
         * @memberof AcFunDanmu.PkRoundInfo
         * @instance
         */
        PkRoundInfo.prototype.b = 0;

        /**
         * PkRoundInfo c.
         * @member {number} c
         * @memberof AcFunDanmu.PkRoundInfo
         * @instance
         */
        PkRoundInfo.prototype.c = 0;

        /**
         * PkRoundInfo d.
         * @member {number|Long} d
         * @memberof AcFunDanmu.PkRoundInfo
         * @instance
         */
        PkRoundInfo.prototype.d = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PkRoundInfo e.
         * @member {number} e
         * @memberof AcFunDanmu.PkRoundInfo
         * @instance
         */
        PkRoundInfo.prototype.e = 0;

        /**
         * Creates a new PkRoundInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PkRoundInfo
         * @static
         * @param {AcFunDanmu.IPkRoundInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.PkRoundInfo} PkRoundInfo instance
         */
        PkRoundInfo.create = function create(properties) {
            return new PkRoundInfo(properties);
        };

        /**
         * Encodes the specified PkRoundInfo message. Does not implicitly {@link AcFunDanmu.PkRoundInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PkRoundInfo
         * @static
         * @param {AcFunDanmu.IPkRoundInfo} message PkRoundInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkRoundInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.a);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.b);
            if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.c);
            if (message.d != null && Object.hasOwnProperty.call(message, "d"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.d);
            if (message.e != null && Object.hasOwnProperty.call(message, "e"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.e);
            return writer;
        };

        /**
         * Encodes the specified PkRoundInfo message, length delimited. Does not implicitly {@link AcFunDanmu.PkRoundInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PkRoundInfo
         * @static
         * @param {AcFunDanmu.IPkRoundInfo} message PkRoundInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkRoundInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PkRoundInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PkRoundInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PkRoundInfo} PkRoundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkRoundInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PkRoundInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = reader.int64();
                    break;
                case 2:
                    message.b = reader.int32();
                    break;
                case 3:
                    message.c = reader.int32();
                    break;
                case 4:
                    message.d = reader.int64();
                    break;
                case 5:
                    message.e = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PkRoundInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PkRoundInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PkRoundInfo} PkRoundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkRoundInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PkRoundInfo message.
         * @function verify
         * @memberof AcFunDanmu.PkRoundInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PkRoundInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isInteger(message.a) && !(message.a && $util.isInteger(message.a.low) && $util.isInteger(message.a.high)))
                    return "a: integer|Long expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b))
                    return "b: integer expected";
            if (message.c != null && message.hasOwnProperty("c"))
                if (!$util.isInteger(message.c))
                    return "c: integer expected";
            if (message.d != null && message.hasOwnProperty("d"))
                if (!$util.isInteger(message.d) && !(message.d && $util.isInteger(message.d.low) && $util.isInteger(message.d.high)))
                    return "d: integer|Long expected";
            if (message.e != null && message.hasOwnProperty("e"))
                if (!$util.isInteger(message.e))
                    return "e: integer expected";
            return null;
        };

        /**
         * Creates a PkRoundInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PkRoundInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PkRoundInfo} PkRoundInfo
         */
        PkRoundInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PkRoundInfo)
                return object;
            var message = new $root.AcFunDanmu.PkRoundInfo();
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
            if (object.c != null)
                message.c = object.c | 0;
            if (object.d != null)
                if ($util.Long)
                    (message.d = $util.Long.fromValue(object.d)).unsigned = false;
                else if (typeof object.d === "string")
                    message.d = parseInt(object.d, 10);
                else if (typeof object.d === "number")
                    message.d = object.d;
                else if (typeof object.d === "object")
                    message.d = new $util.LongBits(object.d.low >>> 0, object.d.high >>> 0).toNumber();
            if (object.e != null)
                message.e = object.e | 0;
            return message;
        };

        /**
         * Creates a plain object from a PkRoundInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PkRoundInfo
         * @static
         * @param {AcFunDanmu.PkRoundInfo} message PkRoundInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PkRoundInfo.toObject = function toObject(message, options) {
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
                object.c = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.d = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.d = options.longs === String ? "0" : 0;
                object.e = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                if (typeof message.a === "number")
                    object.a = options.longs === String ? String(message.a) : message.a;
                else
                    object.a = options.longs === String ? $util.Long.prototype.toString.call(message.a) : options.longs === Number ? new $util.LongBits(message.a.low >>> 0, message.a.high >>> 0).toNumber() : message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                if (typeof message.d === "number")
                    object.d = options.longs === String ? String(message.d) : message.d;
                else
                    object.d = options.longs === String ? $util.Long.prototype.toString.call(message.d) : options.longs === Number ? new $util.LongBits(message.d.low >>> 0, message.d.high >>> 0).toNumber() : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = message.e;
            return object;
        };

        /**
         * Converts this PkRoundInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PkRoundInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PkRoundInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PkRoundInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
