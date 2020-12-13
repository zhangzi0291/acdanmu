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

    AcFunDanmu.CommonStateSignalPkStatistic = (function() {

        /**
         * Properties of a CommonStateSignalPkStatistic.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalPkStatistic
         * @property {string|null} [a] CommonStateSignalPkStatistic a
         * @property {number|Long|null} [b] CommonStateSignalPkStatistic b
         * @property {number|Long|null} [c] CommonStateSignalPkStatistic c
         * @property {number|Long|null} [d] CommonStateSignalPkStatistic d
         * @property {boolean|null} [e] CommonStateSignalPkStatistic e
         * @property {number|Long|null} [f] CommonStateSignalPkStatistic f
         * @property {number|Long|null} [g] CommonStateSignalPkStatistic g
         * @property {number|Long|null} [h] CommonStateSignalPkStatistic h
         * @property {Array.<AcFunDanmu.IPkAudienceContributionInfo>|null} [i] CommonStateSignalPkStatistic i
         * @property {Array.<AcFunDanmu.IPkPlayerStatistic>|null} [j] CommonStateSignalPkStatistic j
         * @property {AcFunDanmu.IPkRoundInfo|null} [k] CommonStateSignalPkStatistic k
         * @property {number|Long|null} [l] CommonStateSignalPkStatistic l
         */

        /**
         * Constructs a new CommonStateSignalPkStatistic.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalPkStatistic.
         * @implements ICommonStateSignalPkStatistic
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalPkStatistic=} [properties] Properties to set
         */
        function CommonStateSignalPkStatistic(properties) {
            this.i = [];
            this.j = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalPkStatistic a.
         * @member {string} a
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.a = "";

        /**
         * CommonStateSignalPkStatistic b.
         * @member {number|Long} b
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.b = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonStateSignalPkStatistic c.
         * @member {number|Long} c
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.c = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonStateSignalPkStatistic d.
         * @member {number|Long} d
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.d = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonStateSignalPkStatistic e.
         * @member {boolean} e
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.e = false;

        /**
         * CommonStateSignalPkStatistic f.
         * @member {number|Long} f
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.f = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonStateSignalPkStatistic g.
         * @member {number|Long} g
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.g = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonStateSignalPkStatistic h.
         * @member {number|Long} h
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.h = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonStateSignalPkStatistic i.
         * @member {Array.<AcFunDanmu.IPkAudienceContributionInfo>} i
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.i = $util.emptyArray;

        /**
         * CommonStateSignalPkStatistic j.
         * @member {Array.<AcFunDanmu.IPkPlayerStatistic>} j
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.j = $util.emptyArray;

        /**
         * CommonStateSignalPkStatistic k.
         * @member {AcFunDanmu.IPkRoundInfo|null|undefined} k
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.k = null;

        /**
         * CommonStateSignalPkStatistic l.
         * @member {number|Long} l
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         */
        CommonStateSignalPkStatistic.prototype.l = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CommonStateSignalPkStatistic instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPkStatistic=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalPkStatistic} CommonStateSignalPkStatistic instance
         */
        CommonStateSignalPkStatistic.create = function create(properties) {
            return new CommonStateSignalPkStatistic(properties);
        };

        /**
         * Encodes the specified CommonStateSignalPkStatistic message. Does not implicitly {@link AcFunDanmu.CommonStateSignalPkStatistic.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPkStatistic} message CommonStateSignalPkStatistic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPkStatistic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.a);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.b);
            if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.c);
            if (message.d != null && Object.hasOwnProperty.call(message, "d"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.d);
            if (message.e != null && Object.hasOwnProperty.call(message, "e"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.e);
            if (message.f != null && Object.hasOwnProperty.call(message, "f"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.f);
            if (message.g != null && Object.hasOwnProperty.call(message, "g"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.g);
            if (message.h != null && Object.hasOwnProperty.call(message, "h"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.h);
            if (message.i != null && message.i.length)
                for (var i = 0; i < message.i.length; ++i)
                    $root.AcFunDanmu.PkAudienceContributionInfo.encode(message.i[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.j != null && message.j.length)
                for (var i = 0; i < message.j.length; ++i)
                    $root.AcFunDanmu.PkPlayerStatistic.encode(message.j[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.k != null && Object.hasOwnProperty.call(message, "k"))
                $root.AcFunDanmu.PkRoundInfo.encode(message.k, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.l != null && Object.hasOwnProperty.call(message, "l"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.l);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalPkStatistic message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalPkStatistic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPkStatistic} message CommonStateSignalPkStatistic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPkStatistic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalPkStatistic message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalPkStatistic} CommonStateSignalPkStatistic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPkStatistic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalPkStatistic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = reader.string();
                    break;
                case 2:
                    message.b = reader.int64();
                    break;
                case 3:
                    message.c = reader.int64();
                    break;
                case 4:
                    message.d = reader.int64();
                    break;
                case 5:
                    message.e = reader.bool();
                    break;
                case 6:
                    message.f = reader.int64();
                    break;
                case 7:
                    message.g = reader.int64();
                    break;
                case 8:
                    message.h = reader.int64();
                    break;
                case 9:
                    if (!(message.i && message.i.length))
                        message.i = [];
                    message.i.push($root.AcFunDanmu.PkAudienceContributionInfo.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.j && message.j.length))
                        message.j = [];
                    message.j.push($root.AcFunDanmu.PkPlayerStatistic.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.k = $root.AcFunDanmu.PkRoundInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.l = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalPkStatistic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalPkStatistic} CommonStateSignalPkStatistic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPkStatistic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalPkStatistic message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalPkStatistic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isString(message.a))
                    return "a: string expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b) && !(message.b && $util.isInteger(message.b.low) && $util.isInteger(message.b.high)))
                    return "b: integer|Long expected";
            if (message.c != null && message.hasOwnProperty("c"))
                if (!$util.isInteger(message.c) && !(message.c && $util.isInteger(message.c.low) && $util.isInteger(message.c.high)))
                    return "c: integer|Long expected";
            if (message.d != null && message.hasOwnProperty("d"))
                if (!$util.isInteger(message.d) && !(message.d && $util.isInteger(message.d.low) && $util.isInteger(message.d.high)))
                    return "d: integer|Long expected";
            if (message.e != null && message.hasOwnProperty("e"))
                if (typeof message.e !== "boolean")
                    return "e: boolean expected";
            if (message.f != null && message.hasOwnProperty("f"))
                if (!$util.isInteger(message.f) && !(message.f && $util.isInteger(message.f.low) && $util.isInteger(message.f.high)))
                    return "f: integer|Long expected";
            if (message.g != null && message.hasOwnProperty("g"))
                if (!$util.isInteger(message.g) && !(message.g && $util.isInteger(message.g.low) && $util.isInteger(message.g.high)))
                    return "g: integer|Long expected";
            if (message.h != null && message.hasOwnProperty("h"))
                if (!$util.isInteger(message.h) && !(message.h && $util.isInteger(message.h.low) && $util.isInteger(message.h.high)))
                    return "h: integer|Long expected";
            if (message.i != null && message.hasOwnProperty("i")) {
                if (!Array.isArray(message.i))
                    return "i: array expected";
                for (var i = 0; i < message.i.length; ++i) {
                    var error = $root.AcFunDanmu.PkAudienceContributionInfo.verify(message.i[i]);
                    if (error)
                        return "i." + error;
                }
            }
            if (message.j != null && message.hasOwnProperty("j")) {
                if (!Array.isArray(message.j))
                    return "j: array expected";
                for (var i = 0; i < message.j.length; ++i) {
                    var error = $root.AcFunDanmu.PkPlayerStatistic.verify(message.j[i]);
                    if (error)
                        return "j." + error;
                }
            }
            if (message.k != null && message.hasOwnProperty("k")) {
                var error = $root.AcFunDanmu.PkRoundInfo.verify(message.k);
                if (error)
                    return "k." + error;
            }
            if (message.l != null && message.hasOwnProperty("l"))
                if (!$util.isInteger(message.l) && !(message.l && $util.isInteger(message.l.low) && $util.isInteger(message.l.high)))
                    return "l: integer|Long expected";
            return null;
        };

        /**
         * Creates a CommonStateSignalPkStatistic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalPkStatistic} CommonStateSignalPkStatistic
         */
        CommonStateSignalPkStatistic.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalPkStatistic)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalPkStatistic();
            if (object.a != null)
                message.a = String(object.a);
            if (object.b != null)
                if ($util.Long)
                    (message.b = $util.Long.fromValue(object.b)).unsigned = false;
                else if (typeof object.b === "string")
                    message.b = parseInt(object.b, 10);
                else if (typeof object.b === "number")
                    message.b = object.b;
                else if (typeof object.b === "object")
                    message.b = new $util.LongBits(object.b.low >>> 0, object.b.high >>> 0).toNumber();
            if (object.c != null)
                if ($util.Long)
                    (message.c = $util.Long.fromValue(object.c)).unsigned = false;
                else if (typeof object.c === "string")
                    message.c = parseInt(object.c, 10);
                else if (typeof object.c === "number")
                    message.c = object.c;
                else if (typeof object.c === "object")
                    message.c = new $util.LongBits(object.c.low >>> 0, object.c.high >>> 0).toNumber();
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
                message.e = Boolean(object.e);
            if (object.f != null)
                if ($util.Long)
                    (message.f = $util.Long.fromValue(object.f)).unsigned = false;
                else if (typeof object.f === "string")
                    message.f = parseInt(object.f, 10);
                else if (typeof object.f === "number")
                    message.f = object.f;
                else if (typeof object.f === "object")
                    message.f = new $util.LongBits(object.f.low >>> 0, object.f.high >>> 0).toNumber();
            if (object.g != null)
                if ($util.Long)
                    (message.g = $util.Long.fromValue(object.g)).unsigned = false;
                else if (typeof object.g === "string")
                    message.g = parseInt(object.g, 10);
                else if (typeof object.g === "number")
                    message.g = object.g;
                else if (typeof object.g === "object")
                    message.g = new $util.LongBits(object.g.low >>> 0, object.g.high >>> 0).toNumber();
            if (object.h != null)
                if ($util.Long)
                    (message.h = $util.Long.fromValue(object.h)).unsigned = false;
                else if (typeof object.h === "string")
                    message.h = parseInt(object.h, 10);
                else if (typeof object.h === "number")
                    message.h = object.h;
                else if (typeof object.h === "object")
                    message.h = new $util.LongBits(object.h.low >>> 0, object.h.high >>> 0).toNumber();
            if (object.i) {
                if (!Array.isArray(object.i))
                    throw TypeError(".AcFunDanmu.CommonStateSignalPkStatistic.i: array expected");
                message.i = [];
                for (var i = 0; i < object.i.length; ++i) {
                    if (typeof object.i[i] !== "object")
                        throw TypeError(".AcFunDanmu.CommonStateSignalPkStatistic.i: object expected");
                    message.i[i] = $root.AcFunDanmu.PkAudienceContributionInfo.fromObject(object.i[i]);
                }
            }
            if (object.j) {
                if (!Array.isArray(object.j))
                    throw TypeError(".AcFunDanmu.CommonStateSignalPkStatistic.j: array expected");
                message.j = [];
                for (var i = 0; i < object.j.length; ++i) {
                    if (typeof object.j[i] !== "object")
                        throw TypeError(".AcFunDanmu.CommonStateSignalPkStatistic.j: object expected");
                    message.j[i] = $root.AcFunDanmu.PkPlayerStatistic.fromObject(object.j[i]);
                }
            }
            if (object.k != null) {
                if (typeof object.k !== "object")
                    throw TypeError(".AcFunDanmu.CommonStateSignalPkStatistic.k: object expected");
                message.k = $root.AcFunDanmu.PkRoundInfo.fromObject(object.k);
            }
            if (object.l != null)
                if ($util.Long)
                    (message.l = $util.Long.fromValue(object.l)).unsigned = false;
                else if (typeof object.l === "string")
                    message.l = parseInt(object.l, 10);
                else if (typeof object.l === "number")
                    message.l = object.l;
                else if (typeof object.l === "object")
                    message.l = new $util.LongBits(object.l.low >>> 0, object.l.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalPkStatistic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @static
         * @param {AcFunDanmu.CommonStateSignalPkStatistic} message CommonStateSignalPkStatistic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalPkStatistic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.i = [];
                object.j = [];
            }
            if (options.defaults) {
                object.a = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.b = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.b = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.c = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.c = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.d = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.d = options.longs === String ? "0" : 0;
                object.e = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.f = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.f = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.g = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.g = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.h = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.h = options.longs === String ? "0" : 0;
                object.k = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.l = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.l = options.longs === String ? "0" : 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                if (typeof message.b === "number")
                    object.b = options.longs === String ? String(message.b) : message.b;
                else
                    object.b = options.longs === String ? $util.Long.prototype.toString.call(message.b) : options.longs === Number ? new $util.LongBits(message.b.low >>> 0, message.b.high >>> 0).toNumber() : message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                if (typeof message.c === "number")
                    object.c = options.longs === String ? String(message.c) : message.c;
                else
                    object.c = options.longs === String ? $util.Long.prototype.toString.call(message.c) : options.longs === Number ? new $util.LongBits(message.c.low >>> 0, message.c.high >>> 0).toNumber() : message.c;
            if (message.d != null && message.hasOwnProperty("d"))
                if (typeof message.d === "number")
                    object.d = options.longs === String ? String(message.d) : message.d;
                else
                    object.d = options.longs === String ? $util.Long.prototype.toString.call(message.d) : options.longs === Number ? new $util.LongBits(message.d.low >>> 0, message.d.high >>> 0).toNumber() : message.d;
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = message.e;
            if (message.f != null && message.hasOwnProperty("f"))
                if (typeof message.f === "number")
                    object.f = options.longs === String ? String(message.f) : message.f;
                else
                    object.f = options.longs === String ? $util.Long.prototype.toString.call(message.f) : options.longs === Number ? new $util.LongBits(message.f.low >>> 0, message.f.high >>> 0).toNumber() : message.f;
            if (message.g != null && message.hasOwnProperty("g"))
                if (typeof message.g === "number")
                    object.g = options.longs === String ? String(message.g) : message.g;
                else
                    object.g = options.longs === String ? $util.Long.prototype.toString.call(message.g) : options.longs === Number ? new $util.LongBits(message.g.low >>> 0, message.g.high >>> 0).toNumber() : message.g;
            if (message.h != null && message.hasOwnProperty("h"))
                if (typeof message.h === "number")
                    object.h = options.longs === String ? String(message.h) : message.h;
                else
                    object.h = options.longs === String ? $util.Long.prototype.toString.call(message.h) : options.longs === Number ? new $util.LongBits(message.h.low >>> 0, message.h.high >>> 0).toNumber() : message.h;
            if (message.i && message.i.length) {
                object.i = [];
                for (var j = 0; j < message.i.length; ++j)
                    object.i[j] = $root.AcFunDanmu.PkAudienceContributionInfo.toObject(message.i[j], options);
            }
            if (message.j && message.j.length) {
                object.j = [];
                for (var j = 0; j < message.j.length; ++j)
                    object.j[j] = $root.AcFunDanmu.PkPlayerStatistic.toObject(message.j[j], options);
            }
            if (message.k != null && message.hasOwnProperty("k"))
                object.k = $root.AcFunDanmu.PkRoundInfo.toObject(message.k, options);
            if (message.l != null && message.hasOwnProperty("l"))
                if (typeof message.l === "number")
                    object.l = options.longs === String ? String(message.l) : message.l;
                else
                    object.l = options.longs === String ? $util.Long.prototype.toString.call(message.l) : options.longs === Number ? new $util.LongBits(message.l.low >>> 0, message.l.high >>> 0).toNumber() : message.l;
            return object;
        };

        /**
         * Converts this CommonStateSignalPkStatistic to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalPkStatistic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalPkStatistic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonStateSignalPkStatistic;
    })();

    AcFunDanmu.PkAudienceContributionInfo = (function() {

        /**
         * Properties of a PkAudienceContributionInfo.
         * @memberof AcFunDanmu
         * @interface IPkAudienceContributionInfo
         * @property {number|Long|null} [a] PkAudienceContributionInfo a
         * @property {Array.<AcFunDanmu.IPkAudienceContributionDetail>|null} [b] PkAudienceContributionInfo b
         */

        /**
         * Constructs a new PkAudienceContributionInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a PkAudienceContributionInfo.
         * @implements IPkAudienceContributionInfo
         * @constructor
         * @param {AcFunDanmu.IPkAudienceContributionInfo=} [properties] Properties to set
         */
        function PkAudienceContributionInfo(properties) {
            this.b = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PkAudienceContributionInfo a.
         * @member {number|Long} a
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @instance
         */
        PkAudienceContributionInfo.prototype.a = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PkAudienceContributionInfo b.
         * @member {Array.<AcFunDanmu.IPkAudienceContributionDetail>} b
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @instance
         */
        PkAudienceContributionInfo.prototype.b = $util.emptyArray;

        /**
         * Creates a new PkAudienceContributionInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @static
         * @param {AcFunDanmu.IPkAudienceContributionInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.PkAudienceContributionInfo} PkAudienceContributionInfo instance
         */
        PkAudienceContributionInfo.create = function create(properties) {
            return new PkAudienceContributionInfo(properties);
        };

        /**
         * Encodes the specified PkAudienceContributionInfo message. Does not implicitly {@link AcFunDanmu.PkAudienceContributionInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @static
         * @param {AcFunDanmu.IPkAudienceContributionInfo} message PkAudienceContributionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkAudienceContributionInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.a);
            if (message.b != null && message.b.length)
                for (var i = 0; i < message.b.length; ++i)
                    $root.AcFunDanmu.PkAudienceContributionDetail.encode(message.b[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PkAudienceContributionInfo message, length delimited. Does not implicitly {@link AcFunDanmu.PkAudienceContributionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @static
         * @param {AcFunDanmu.IPkAudienceContributionInfo} message PkAudienceContributionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkAudienceContributionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PkAudienceContributionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PkAudienceContributionInfo} PkAudienceContributionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkAudienceContributionInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PkAudienceContributionInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = reader.int64();
                    break;
                case 2:
                    if (!(message.b && message.b.length))
                        message.b = [];
                    message.b.push($root.AcFunDanmu.PkAudienceContributionDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PkAudienceContributionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PkAudienceContributionInfo} PkAudienceContributionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkAudienceContributionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PkAudienceContributionInfo message.
         * @function verify
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PkAudienceContributionInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isInteger(message.a) && !(message.a && $util.isInteger(message.a.low) && $util.isInteger(message.a.high)))
                    return "a: integer|Long expected";
            if (message.b != null && message.hasOwnProperty("b")) {
                if (!Array.isArray(message.b))
                    return "b: array expected";
                for (var i = 0; i < message.b.length; ++i) {
                    var error = $root.AcFunDanmu.PkAudienceContributionDetail.verify(message.b[i]);
                    if (error)
                        return "b." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PkAudienceContributionInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PkAudienceContributionInfo} PkAudienceContributionInfo
         */
        PkAudienceContributionInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PkAudienceContributionInfo)
                return object;
            var message = new $root.AcFunDanmu.PkAudienceContributionInfo();
            if (object.a != null)
                if ($util.Long)
                    (message.a = $util.Long.fromValue(object.a)).unsigned = false;
                else if (typeof object.a === "string")
                    message.a = parseInt(object.a, 10);
                else if (typeof object.a === "number")
                    message.a = object.a;
                else if (typeof object.a === "object")
                    message.a = new $util.LongBits(object.a.low >>> 0, object.a.high >>> 0).toNumber();
            if (object.b) {
                if (!Array.isArray(object.b))
                    throw TypeError(".AcFunDanmu.PkAudienceContributionInfo.b: array expected");
                message.b = [];
                for (var i = 0; i < object.b.length; ++i) {
                    if (typeof object.b[i] !== "object")
                        throw TypeError(".AcFunDanmu.PkAudienceContributionInfo.b: object expected");
                    message.b[i] = $root.AcFunDanmu.PkAudienceContributionDetail.fromObject(object.b[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PkAudienceContributionInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @static
         * @param {AcFunDanmu.PkAudienceContributionInfo} message PkAudienceContributionInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PkAudienceContributionInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.b = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.a = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.a = options.longs === String ? "0" : 0;
            if (message.a != null && message.hasOwnProperty("a"))
                if (typeof message.a === "number")
                    object.a = options.longs === String ? String(message.a) : message.a;
                else
                    object.a = options.longs === String ? $util.Long.prototype.toString.call(message.a) : options.longs === Number ? new $util.LongBits(message.a.low >>> 0, message.a.high >>> 0).toNumber() : message.a;
            if (message.b && message.b.length) {
                object.b = [];
                for (var j = 0; j < message.b.length; ++j)
                    object.b[j] = $root.AcFunDanmu.PkAudienceContributionDetail.toObject(message.b[j], options);
            }
            return object;
        };

        /**
         * Converts this PkAudienceContributionInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PkAudienceContributionInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PkAudienceContributionInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PkAudienceContributionInfo;
    })();

    AcFunDanmu.PkAudienceContributionDetail = (function() {

        /**
         * Properties of a PkAudienceContributionDetail.
         * @memberof AcFunDanmu
         * @interface IPkAudienceContributionDetail
         * @property {AcFunDanmu.IZtLiveUserInfo|null} [a] PkAudienceContributionDetail a
         * @property {number|Long|null} [b] PkAudienceContributionDetail b
         */

        /**
         * Constructs a new PkAudienceContributionDetail.
         * @memberof AcFunDanmu
         * @classdesc Represents a PkAudienceContributionDetail.
         * @implements IPkAudienceContributionDetail
         * @constructor
         * @param {AcFunDanmu.IPkAudienceContributionDetail=} [properties] Properties to set
         */
        function PkAudienceContributionDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PkAudienceContributionDetail a.
         * @member {AcFunDanmu.IZtLiveUserInfo|null|undefined} a
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @instance
         */
        PkAudienceContributionDetail.prototype.a = null;

        /**
         * PkAudienceContributionDetail b.
         * @member {number|Long} b
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @instance
         */
        PkAudienceContributionDetail.prototype.b = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PkAudienceContributionDetail instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @static
         * @param {AcFunDanmu.IPkAudienceContributionDetail=} [properties] Properties to set
         * @returns {AcFunDanmu.PkAudienceContributionDetail} PkAudienceContributionDetail instance
         */
        PkAudienceContributionDetail.create = function create(properties) {
            return new PkAudienceContributionDetail(properties);
        };

        /**
         * Encodes the specified PkAudienceContributionDetail message. Does not implicitly {@link AcFunDanmu.PkAudienceContributionDetail.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @static
         * @param {AcFunDanmu.IPkAudienceContributionDetail} message PkAudienceContributionDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkAudienceContributionDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                $root.AcFunDanmu.ZtLiveUserInfo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.b);
            return writer;
        };

        /**
         * Encodes the specified PkAudienceContributionDetail message, length delimited. Does not implicitly {@link AcFunDanmu.PkAudienceContributionDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @static
         * @param {AcFunDanmu.IPkAudienceContributionDetail} message PkAudienceContributionDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkAudienceContributionDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PkAudienceContributionDetail message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PkAudienceContributionDetail} PkAudienceContributionDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkAudienceContributionDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PkAudienceContributionDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = $root.AcFunDanmu.ZtLiveUserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.b = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PkAudienceContributionDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PkAudienceContributionDetail} PkAudienceContributionDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkAudienceContributionDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PkAudienceContributionDetail message.
         * @function verify
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PkAudienceContributionDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a")) {
                var error = $root.AcFunDanmu.ZtLiveUserInfo.verify(message.a);
                if (error)
                    return "a." + error;
            }
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b) && !(message.b && $util.isInteger(message.b.low) && $util.isInteger(message.b.high)))
                    return "b: integer|Long expected";
            return null;
        };

        /**
         * Creates a PkAudienceContributionDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PkAudienceContributionDetail} PkAudienceContributionDetail
         */
        PkAudienceContributionDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PkAudienceContributionDetail)
                return object;
            var message = new $root.AcFunDanmu.PkAudienceContributionDetail();
            if (object.a != null) {
                if (typeof object.a !== "object")
                    throw TypeError(".AcFunDanmu.PkAudienceContributionDetail.a: object expected");
                message.a = $root.AcFunDanmu.ZtLiveUserInfo.fromObject(object.a);
            }
            if (object.b != null)
                if ($util.Long)
                    (message.b = $util.Long.fromValue(object.b)).unsigned = false;
                else if (typeof object.b === "string")
                    message.b = parseInt(object.b, 10);
                else if (typeof object.b === "number")
                    message.b = object.b;
                else if (typeof object.b === "object")
                    message.b = new $util.LongBits(object.b.low >>> 0, object.b.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PkAudienceContributionDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @static
         * @param {AcFunDanmu.PkAudienceContributionDetail} message PkAudienceContributionDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PkAudienceContributionDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.a = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.b = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.b = options.longs === String ? "0" : 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = $root.AcFunDanmu.ZtLiveUserInfo.toObject(message.a, options);
            if (message.b != null && message.hasOwnProperty("b"))
                if (typeof message.b === "number")
                    object.b = options.longs === String ? String(message.b) : message.b;
                else
                    object.b = options.longs === String ? $util.Long.prototype.toString.call(message.b) : options.longs === Number ? new $util.LongBits(message.b.low >>> 0, message.b.high >>> 0).toNumber() : message.b;
            return object;
        };

        /**
         * Converts this PkAudienceContributionDetail to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PkAudienceContributionDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PkAudienceContributionDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PkAudienceContributionDetail;
    })();

    AcFunDanmu.ZtLiveUserInfo = (function() {

        /**
         * Properties of a ZtLiveUserInfo.
         * @memberof AcFunDanmu
         * @interface IZtLiveUserInfo
         * @property {number|Long|null} [userId] ZtLiveUserInfo userId
         * @property {string|null} [nickname] ZtLiveUserInfo nickname
         * @property {Array.<AcFunDanmu.IImageCdnNode>|null} [avatar] ZtLiveUserInfo avatar
         * @property {string|null} [badge] ZtLiveUserInfo badge
         * @property {AcFunDanmu.IZtLiveUserIdentity|null} [userIdentity] ZtLiveUserInfo userIdentity
         */

        /**
         * Constructs a new ZtLiveUserInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveUserInfo.
         * @implements IZtLiveUserInfo
         * @constructor
         * @param {AcFunDanmu.IZtLiveUserInfo=} [properties] Properties to set
         */
        function ZtLiveUserInfo(properties) {
            this.avatar = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveUserInfo userId.
         * @member {number|Long} userId
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtLiveUserInfo nickname.
         * @member {string} nickname
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.nickname = "";

        /**
         * ZtLiveUserInfo avatar.
         * @member {Array.<AcFunDanmu.IImageCdnNode>} avatar
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.avatar = $util.emptyArray;

        /**
         * ZtLiveUserInfo badge.
         * @member {string} badge
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.badge = "";

        /**
         * ZtLiveUserInfo userIdentity.
         * @member {AcFunDanmu.IZtLiveUserIdentity|null|undefined} userIdentity
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.userIdentity = null;

        /**
         * Creates a new ZtLiveUserInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.IZtLiveUserInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo instance
         */
        ZtLiveUserInfo.create = function create(properties) {
            return new ZtLiveUserInfo(properties);
        };

        /**
         * Encodes the specified ZtLiveUserInfo message. Does not implicitly {@link AcFunDanmu.ZtLiveUserInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.IZtLiveUserInfo} message ZtLiveUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatar != null && message.avatar.length)
                for (var i = 0; i < message.avatar.length; ++i)
                    $root.AcFunDanmu.ImageCdnNode.encode(message.avatar[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.badge != null && Object.hasOwnProperty.call(message, "badge"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.badge);
            if (message.userIdentity != null && Object.hasOwnProperty.call(message, "userIdentity"))
                $root.AcFunDanmu.ZtLiveUserIdentity.encode(message.userIdentity, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZtLiveUserInfo message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.IZtLiveUserInfo} message ZtLiveUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    if (!(message.avatar && message.avatar.length))
                        message.avatar = [];
                    message.avatar.push($root.AcFunDanmu.ImageCdnNode.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.badge = reader.string();
                    break;
                case 5:
                    message.userIdentity = $root.AcFunDanmu.ZtLiveUserIdentity.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveUserInfo message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar")) {
                if (!Array.isArray(message.avatar))
                    return "avatar: array expected";
                for (var i = 0; i < message.avatar.length; ++i) {
                    var error = $root.AcFunDanmu.ImageCdnNode.verify(message.avatar[i]);
                    if (error)
                        return "avatar." + error;
                }
            }
            if (message.badge != null && message.hasOwnProperty("badge"))
                if (!$util.isString(message.badge))
                    return "badge: string expected";
            if (message.userIdentity != null && message.hasOwnProperty("userIdentity")) {
                var error = $root.AcFunDanmu.ZtLiveUserIdentity.verify(message.userIdentity);
                if (error)
                    return "userIdentity." + error;
            }
            return null;
        };

        /**
         * Creates a ZtLiveUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo
         */
        ZtLiveUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveUserInfo)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveUserInfo();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar) {
                if (!Array.isArray(object.avatar))
                    throw TypeError(".AcFunDanmu.ZtLiveUserInfo.avatar: array expected");
                message.avatar = [];
                for (var i = 0; i < object.avatar.length; ++i) {
                    if (typeof object.avatar[i] !== "object")
                        throw TypeError(".AcFunDanmu.ZtLiveUserInfo.avatar: object expected");
                    message.avatar[i] = $root.AcFunDanmu.ImageCdnNode.fromObject(object.avatar[i]);
                }
            }
            if (object.badge != null)
                message.badge = String(object.badge);
            if (object.userIdentity != null) {
                if (typeof object.userIdentity !== "object")
                    throw TypeError(".AcFunDanmu.ZtLiveUserInfo.userIdentity: object expected");
                message.userIdentity = $root.AcFunDanmu.ZtLiveUserIdentity.fromObject(object.userIdentity);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.ZtLiveUserInfo} message ZtLiveUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.avatar = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.badge = "";
                object.userIdentity = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatar && message.avatar.length) {
                object.avatar = [];
                for (var j = 0; j < message.avatar.length; ++j)
                    object.avatar[j] = $root.AcFunDanmu.ImageCdnNode.toObject(message.avatar[j], options);
            }
            if (message.badge != null && message.hasOwnProperty("badge"))
                object.badge = message.badge;
            if (message.userIdentity != null && message.hasOwnProperty("userIdentity"))
                object.userIdentity = $root.AcFunDanmu.ZtLiveUserIdentity.toObject(message.userIdentity, options);
            return object;
        };

        /**
         * Converts this ZtLiveUserInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveUserInfo;
    })();

    AcFunDanmu.ImageCdnNode = (function() {

        /**
         * Properties of an ImageCdnNode.
         * @memberof AcFunDanmu
         * @interface IImageCdnNode
         * @property {string|null} [cdn] ImageCdnNode cdn
         * @property {string|null} [url] ImageCdnNode url
         * @property {string|null} [urlPattern] ImageCdnNode urlPattern
         */

        /**
         * Constructs a new ImageCdnNode.
         * @memberof AcFunDanmu
         * @classdesc Represents an ImageCdnNode.
         * @implements IImageCdnNode
         * @constructor
         * @param {AcFunDanmu.IImageCdnNode=} [properties] Properties to set
         */
        function ImageCdnNode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImageCdnNode cdn.
         * @member {string} cdn
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         */
        ImageCdnNode.prototype.cdn = "";

        /**
         * ImageCdnNode url.
         * @member {string} url
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         */
        ImageCdnNode.prototype.url = "";

        /**
         * ImageCdnNode urlPattern.
         * @member {string} urlPattern
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         */
        ImageCdnNode.prototype.urlPattern = "";

        /**
         * Creates a new ImageCdnNode instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.IImageCdnNode=} [properties] Properties to set
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode instance
         */
        ImageCdnNode.create = function create(properties) {
            return new ImageCdnNode(properties);
        };

        /**
         * Encodes the specified ImageCdnNode message. Does not implicitly {@link AcFunDanmu.ImageCdnNode.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.IImageCdnNode} message ImageCdnNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageCdnNode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cdn != null && Object.hasOwnProperty.call(message, "cdn"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cdn);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.urlPattern != null && Object.hasOwnProperty.call(message, "urlPattern"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.urlPattern);
            return writer;
        };

        /**
         * Encodes the specified ImageCdnNode message, length delimited. Does not implicitly {@link AcFunDanmu.ImageCdnNode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.IImageCdnNode} message ImageCdnNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageCdnNode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImageCdnNode message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageCdnNode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ImageCdnNode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cdn = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.urlPattern = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImageCdnNode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageCdnNode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImageCdnNode message.
         * @function verify
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImageCdnNode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cdn != null && message.hasOwnProperty("cdn"))
                if (!$util.isString(message.cdn))
                    return "cdn: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.urlPattern != null && message.hasOwnProperty("urlPattern"))
                if (!$util.isString(message.urlPattern))
                    return "urlPattern: string expected";
            return null;
        };

        /**
         * Creates an ImageCdnNode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode
         */
        ImageCdnNode.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ImageCdnNode)
                return object;
            var message = new $root.AcFunDanmu.ImageCdnNode();
            if (object.cdn != null)
                message.cdn = String(object.cdn);
            if (object.url != null)
                message.url = String(object.url);
            if (object.urlPattern != null)
                message.urlPattern = String(object.urlPattern);
            return message;
        };

        /**
         * Creates a plain object from an ImageCdnNode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.ImageCdnNode} message ImageCdnNode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImageCdnNode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cdn = "";
                object.url = "";
                object.urlPattern = "";
            }
            if (message.cdn != null && message.hasOwnProperty("cdn"))
                object.cdn = message.cdn;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.urlPattern != null && message.hasOwnProperty("urlPattern"))
                object.urlPattern = message.urlPattern;
            return object;
        };

        /**
         * Converts this ImageCdnNode to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImageCdnNode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ImageCdnNode;
    })();

    AcFunDanmu.ZtLiveUserIdentity = (function() {

        /**
         * Properties of a ZtLiveUserIdentity.
         * @memberof AcFunDanmu
         * @interface IZtLiveUserIdentity
         * @property {AcFunDanmu.ZtLiveUserIdentity.ManagerType|null} [managerType] ZtLiveUserIdentity managerType
         */

        /**
         * Constructs a new ZtLiveUserIdentity.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveUserIdentity.
         * @implements IZtLiveUserIdentity
         * @constructor
         * @param {AcFunDanmu.IZtLiveUserIdentity=} [properties] Properties to set
         */
        function ZtLiveUserIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveUserIdentity managerType.
         * @member {AcFunDanmu.ZtLiveUserIdentity.ManagerType} managerType
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @instance
         */
        ZtLiveUserIdentity.prototype.managerType = 0;

        /**
         * Creates a new ZtLiveUserIdentity instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.IZtLiveUserIdentity=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity instance
         */
        ZtLiveUserIdentity.create = function create(properties) {
            return new ZtLiveUserIdentity(properties);
        };

        /**
         * Encodes the specified ZtLiveUserIdentity message. Does not implicitly {@link AcFunDanmu.ZtLiveUserIdentity.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.IZtLiveUserIdentity} message ZtLiveUserIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.managerType != null && Object.hasOwnProperty.call(message, "managerType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.managerType);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveUserIdentity message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveUserIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.IZtLiveUserIdentity} message ZtLiveUserIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveUserIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveUserIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.managerType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveUserIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveUserIdentity message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveUserIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.managerType != null && message.hasOwnProperty("managerType"))
                switch (message.managerType) {
                default:
                    return "managerType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a ZtLiveUserIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity
         */
        ZtLiveUserIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveUserIdentity)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveUserIdentity();
            switch (object.managerType) {
            case "UNKNOWN_MANAGER_TYPE":
            case 0:
                message.managerType = 0;
                break;
            case "NORMAL":
            case 1:
                message.managerType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveUserIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.ZtLiveUserIdentity} message ZtLiveUserIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveUserIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.managerType = options.enums === String ? "UNKNOWN_MANAGER_TYPE" : 0;
            if (message.managerType != null && message.hasOwnProperty("managerType"))
                object.managerType = options.enums === String ? $root.AcFunDanmu.ZtLiveUserIdentity.ManagerType[message.managerType] : message.managerType;
            return object;
        };

        /**
         * Converts this ZtLiveUserIdentity to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveUserIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ManagerType enum.
         * @name AcFunDanmu.ZtLiveUserIdentity.ManagerType
         * @enum {number}
         * @property {number} UNKNOWN_MANAGER_TYPE=0 UNKNOWN_MANAGER_TYPE value
         * @property {number} NORMAL=1 NORMAL value
         */
        ZtLiveUserIdentity.ManagerType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_MANAGER_TYPE"] = 0;
            values[valuesById[1] = "NORMAL"] = 1;
            return values;
        })();

        return ZtLiveUserIdentity;
    })();

    AcFunDanmu.PkPlayerStatistic = (function() {

        /**
         * Properties of a PkPlayerStatistic.
         * @memberof AcFunDanmu
         * @interface IPkPlayerStatistic
         * @property {AcFunDanmu.IZtLiveUserInfo|null} [a] PkPlayerStatistic a
         * @property {string|null} [b] PkPlayerStatistic b
         * @property {number|Long|null} [c] PkPlayerStatistic c
         * @property {Array.<AcFunDanmu.IPkPlayerRoundStatistic>|null} [d] PkPlayerStatistic d
         * @property {number|null} [e] PkPlayerStatistic e
         */

        /**
         * Constructs a new PkPlayerStatistic.
         * @memberof AcFunDanmu
         * @classdesc Represents a PkPlayerStatistic.
         * @implements IPkPlayerStatistic
         * @constructor
         * @param {AcFunDanmu.IPkPlayerStatistic=} [properties] Properties to set
         */
        function PkPlayerStatistic(properties) {
            this.d = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PkPlayerStatistic a.
         * @member {AcFunDanmu.IZtLiveUserInfo|null|undefined} a
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @instance
         */
        PkPlayerStatistic.prototype.a = null;

        /**
         * PkPlayerStatistic b.
         * @member {string} b
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @instance
         */
        PkPlayerStatistic.prototype.b = "";

        /**
         * PkPlayerStatistic c.
         * @member {number|Long} c
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @instance
         */
        PkPlayerStatistic.prototype.c = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PkPlayerStatistic d.
         * @member {Array.<AcFunDanmu.IPkPlayerRoundStatistic>} d
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @instance
         */
        PkPlayerStatistic.prototype.d = $util.emptyArray;

        /**
         * PkPlayerStatistic e.
         * @member {number} e
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @instance
         */
        PkPlayerStatistic.prototype.e = 0;

        /**
         * Creates a new PkPlayerStatistic instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @static
         * @param {AcFunDanmu.IPkPlayerStatistic=} [properties] Properties to set
         * @returns {AcFunDanmu.PkPlayerStatistic} PkPlayerStatistic instance
         */
        PkPlayerStatistic.create = function create(properties) {
            return new PkPlayerStatistic(properties);
        };

        /**
         * Encodes the specified PkPlayerStatistic message. Does not implicitly {@link AcFunDanmu.PkPlayerStatistic.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @static
         * @param {AcFunDanmu.IPkPlayerStatistic} message PkPlayerStatistic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkPlayerStatistic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                $root.AcFunDanmu.ZtLiveUserInfo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.b);
            if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.c);
            if (message.d != null && message.d.length)
                for (var i = 0; i < message.d.length; ++i)
                    $root.AcFunDanmu.PkPlayerRoundStatistic.encode(message.d[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.e != null && Object.hasOwnProperty.call(message, "e"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.e);
            return writer;
        };

        /**
         * Encodes the specified PkPlayerStatistic message, length delimited. Does not implicitly {@link AcFunDanmu.PkPlayerStatistic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @static
         * @param {AcFunDanmu.IPkPlayerStatistic} message PkPlayerStatistic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkPlayerStatistic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PkPlayerStatistic message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PkPlayerStatistic} PkPlayerStatistic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkPlayerStatistic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PkPlayerStatistic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = $root.AcFunDanmu.ZtLiveUserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.b = reader.string();
                    break;
                case 3:
                    message.c = reader.int64();
                    break;
                case 4:
                    if (!(message.d && message.d.length))
                        message.d = [];
                    message.d.push($root.AcFunDanmu.PkPlayerRoundStatistic.decode(reader, reader.uint32()));
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
         * Decodes a PkPlayerStatistic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PkPlayerStatistic} PkPlayerStatistic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkPlayerStatistic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PkPlayerStatistic message.
         * @function verify
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PkPlayerStatistic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a")) {
                var error = $root.AcFunDanmu.ZtLiveUserInfo.verify(message.a);
                if (error)
                    return "a." + error;
            }
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isString(message.b))
                    return "b: string expected";
            if (message.c != null && message.hasOwnProperty("c"))
                if (!$util.isInteger(message.c) && !(message.c && $util.isInteger(message.c.low) && $util.isInteger(message.c.high)))
                    return "c: integer|Long expected";
            if (message.d != null && message.hasOwnProperty("d")) {
                if (!Array.isArray(message.d))
                    return "d: array expected";
                for (var i = 0; i < message.d.length; ++i) {
                    var error = $root.AcFunDanmu.PkPlayerRoundStatistic.verify(message.d[i]);
                    if (error)
                        return "d." + error;
                }
            }
            if (message.e != null && message.hasOwnProperty("e"))
                if (!$util.isInteger(message.e))
                    return "e: integer expected";
            return null;
        };

        /**
         * Creates a PkPlayerStatistic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PkPlayerStatistic} PkPlayerStatistic
         */
        PkPlayerStatistic.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PkPlayerStatistic)
                return object;
            var message = new $root.AcFunDanmu.PkPlayerStatistic();
            if (object.a != null) {
                if (typeof object.a !== "object")
                    throw TypeError(".AcFunDanmu.PkPlayerStatistic.a: object expected");
                message.a = $root.AcFunDanmu.ZtLiveUserInfo.fromObject(object.a);
            }
            if (object.b != null)
                message.b = String(object.b);
            if (object.c != null)
                if ($util.Long)
                    (message.c = $util.Long.fromValue(object.c)).unsigned = false;
                else if (typeof object.c === "string")
                    message.c = parseInt(object.c, 10);
                else if (typeof object.c === "number")
                    message.c = object.c;
                else if (typeof object.c === "object")
                    message.c = new $util.LongBits(object.c.low >>> 0, object.c.high >>> 0).toNumber();
            if (object.d) {
                if (!Array.isArray(object.d))
                    throw TypeError(".AcFunDanmu.PkPlayerStatistic.d: array expected");
                message.d = [];
                for (var i = 0; i < object.d.length; ++i) {
                    if (typeof object.d[i] !== "object")
                        throw TypeError(".AcFunDanmu.PkPlayerStatistic.d: object expected");
                    message.d[i] = $root.AcFunDanmu.PkPlayerRoundStatistic.fromObject(object.d[i]);
                }
            }
            if (object.e != null)
                message.e = object.e | 0;
            return message;
        };

        /**
         * Creates a plain object from a PkPlayerStatistic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @static
         * @param {AcFunDanmu.PkPlayerStatistic} message PkPlayerStatistic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PkPlayerStatistic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.d = [];
            if (options.defaults) {
                object.a = null;
                object.b = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.c = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.c = options.longs === String ? "0" : 0;
                object.e = 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = $root.AcFunDanmu.ZtLiveUserInfo.toObject(message.a, options);
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                if (typeof message.c === "number")
                    object.c = options.longs === String ? String(message.c) : message.c;
                else
                    object.c = options.longs === String ? $util.Long.prototype.toString.call(message.c) : options.longs === Number ? new $util.LongBits(message.c.low >>> 0, message.c.high >>> 0).toNumber() : message.c;
            if (message.d && message.d.length) {
                object.d = [];
                for (var j = 0; j < message.d.length; ++j)
                    object.d[j] = $root.AcFunDanmu.PkPlayerRoundStatistic.toObject(message.d[j], options);
            }
            if (message.e != null && message.hasOwnProperty("e"))
                object.e = message.e;
            return object;
        };

        /**
         * Converts this PkPlayerStatistic to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PkPlayerStatistic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PkPlayerStatistic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PkPlayerStatistic;
    })();

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
