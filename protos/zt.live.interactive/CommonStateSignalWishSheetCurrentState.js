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

    AcFunDanmu.CommonStateSignalWishSheetCurrentState = (function() {

        /**
         * Properties of a CommonStateSignalWishSheetCurrentState.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalWishSheetCurrentState
         * @property {string|null} [a] CommonStateSignalWishSheetCurrentState a
         * @property {Array.<AcFunDanmu.CommonStateSignalWishSheetCurrentState.IWishCurrentState>|null} [b] CommonStateSignalWishSheetCurrentState b
         */

        /**
         * Constructs a new CommonStateSignalWishSheetCurrentState.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalWishSheetCurrentState.
         * @implements ICommonStateSignalWishSheetCurrentState
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalWishSheetCurrentState=} [properties] Properties to set
         */
        function CommonStateSignalWishSheetCurrentState(properties) {
            this.b = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalWishSheetCurrentState a.
         * @member {string} a
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @instance
         */
        CommonStateSignalWishSheetCurrentState.prototype.a = "";

        /**
         * CommonStateSignalWishSheetCurrentState b.
         * @member {Array.<AcFunDanmu.CommonStateSignalWishSheetCurrentState.IWishCurrentState>} b
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @instance
         */
        CommonStateSignalWishSheetCurrentState.prototype.b = $util.emptyArray;

        /**
         * Creates a new CommonStateSignalWishSheetCurrentState instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @static
         * @param {AcFunDanmu.ICommonStateSignalWishSheetCurrentState=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalWishSheetCurrentState} CommonStateSignalWishSheetCurrentState instance
         */
        CommonStateSignalWishSheetCurrentState.create = function create(properties) {
            return new CommonStateSignalWishSheetCurrentState(properties);
        };

        /**
         * Encodes the specified CommonStateSignalWishSheetCurrentState message. Does not implicitly {@link AcFunDanmu.CommonStateSignalWishSheetCurrentState.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @static
         * @param {AcFunDanmu.ICommonStateSignalWishSheetCurrentState} message CommonStateSignalWishSheetCurrentState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalWishSheetCurrentState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.a);
            if (message.b != null && message.b.length)
                for (var i = 0; i < message.b.length; ++i)
                    $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState.encode(message.b[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalWishSheetCurrentState message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalWishSheetCurrentState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @static
         * @param {AcFunDanmu.ICommonStateSignalWishSheetCurrentState} message CommonStateSignalWishSheetCurrentState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalWishSheetCurrentState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalWishSheetCurrentState message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalWishSheetCurrentState} CommonStateSignalWishSheetCurrentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalWishSheetCurrentState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = reader.string();
                    break;
                case 2:
                    if (!(message.b && message.b.length))
                        message.b = [];
                    message.b.push($root.AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalWishSheetCurrentState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalWishSheetCurrentState} CommonStateSignalWishSheetCurrentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalWishSheetCurrentState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalWishSheetCurrentState message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalWishSheetCurrentState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isString(message.a))
                    return "a: string expected";
            if (message.b != null && message.hasOwnProperty("b")) {
                if (!Array.isArray(message.b))
                    return "b: array expected";
                for (var i = 0; i < message.b.length; ++i) {
                    var error = $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState.verify(message.b[i]);
                    if (error)
                        return "b." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CommonStateSignalWishSheetCurrentState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalWishSheetCurrentState} CommonStateSignalWishSheetCurrentState
         */
        CommonStateSignalWishSheetCurrentState.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState();
            if (object.a != null)
                message.a = String(object.a);
            if (object.b) {
                if (!Array.isArray(object.b))
                    throw TypeError(".AcFunDanmu.CommonStateSignalWishSheetCurrentState.b: array expected");
                message.b = [];
                for (var i = 0; i < object.b.length; ++i) {
                    if (typeof object.b[i] !== "object")
                        throw TypeError(".AcFunDanmu.CommonStateSignalWishSheetCurrentState.b: object expected");
                    message.b[i] = $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState.fromObject(object.b[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalWishSheetCurrentState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @static
         * @param {AcFunDanmu.CommonStateSignalWishSheetCurrentState} message CommonStateSignalWishSheetCurrentState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalWishSheetCurrentState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.b = [];
            if (options.defaults)
                object.a = "";
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            if (message.b && message.b.length) {
                object.b = [];
                for (var j = 0; j < message.b.length; ++j)
                    object.b[j] = $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState.toObject(message.b[j], options);
            }
            return object;
        };

        /**
         * Converts this CommonStateSignalWishSheetCurrentState to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalWishSheetCurrentState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CommonStateSignalWishSheetCurrentState.WishCurrentState = (function() {

            /**
             * Properties of a WishCurrentState.
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
             * @interface IWishCurrentState
             * @property {string|null} [c] WishCurrentState c
             * @property {number|Long|null} [d] WishCurrentState d
             * @property {number|Long|null} [e] WishCurrentState e
             * @property {number|Long|null} [f] WishCurrentState f
             * @property {string|null} [g] WishCurrentState g
             * @property {string|null} [h] WishCurrentState h
             */

            /**
             * Constructs a new WishCurrentState.
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState
             * @classdesc Represents a WishCurrentState.
             * @implements IWishCurrentState
             * @constructor
             * @param {AcFunDanmu.CommonStateSignalWishSheetCurrentState.IWishCurrentState=} [properties] Properties to set
             */
            function WishCurrentState(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WishCurrentState c.
             * @member {string} c
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @instance
             */
            WishCurrentState.prototype.c = "";

            /**
             * WishCurrentState d.
             * @member {number|Long} d
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @instance
             */
            WishCurrentState.prototype.d = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * WishCurrentState e.
             * @member {number|Long} e
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @instance
             */
            WishCurrentState.prototype.e = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * WishCurrentState f.
             * @member {number|Long} f
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @instance
             */
            WishCurrentState.prototype.f = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * WishCurrentState g.
             * @member {string} g
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @instance
             */
            WishCurrentState.prototype.g = "";

            /**
             * WishCurrentState h.
             * @member {string} h
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @instance
             */
            WishCurrentState.prototype.h = "";

            /**
             * Creates a new WishCurrentState instance using the specified properties.
             * @function create
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @static
             * @param {AcFunDanmu.CommonStateSignalWishSheetCurrentState.IWishCurrentState=} [properties] Properties to set
             * @returns {AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState} WishCurrentState instance
             */
            WishCurrentState.create = function create(properties) {
                return new WishCurrentState(properties);
            };

            /**
             * Encodes the specified WishCurrentState message. Does not implicitly {@link AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState.verify|verify} messages.
             * @function encode
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @static
             * @param {AcFunDanmu.CommonStateSignalWishSheetCurrentState.IWishCurrentState} message WishCurrentState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WishCurrentState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.c);
                if (message.d != null && Object.hasOwnProperty.call(message, "d"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.d);
                if (message.e != null && Object.hasOwnProperty.call(message, "e"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.e);
                if (message.f != null && Object.hasOwnProperty.call(message, "f"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.f);
                if (message.g != null && Object.hasOwnProperty.call(message, "g"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.g);
                if (message.h != null && Object.hasOwnProperty.call(message, "h"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.h);
                return writer;
            };

            /**
             * Encodes the specified WishCurrentState message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @static
             * @param {AcFunDanmu.CommonStateSignalWishSheetCurrentState.IWishCurrentState} message WishCurrentState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WishCurrentState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WishCurrentState message from the specified reader or buffer.
             * @function decode
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState} WishCurrentState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WishCurrentState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.c = reader.string();
                        break;
                    case 2:
                        message.d = reader.int64();
                        break;
                    case 3:
                        message.e = reader.int64();
                        break;
                    case 4:
                        message.f = reader.int64();
                        break;
                    case 5:
                        message.g = reader.string();
                        break;
                    case 6:
                        message.h = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WishCurrentState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState} WishCurrentState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WishCurrentState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WishCurrentState message.
             * @function verify
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WishCurrentState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.c != null && message.hasOwnProperty("c"))
                    if (!$util.isString(message.c))
                        return "c: string expected";
                if (message.d != null && message.hasOwnProperty("d"))
                    if (!$util.isInteger(message.d) && !(message.d && $util.isInteger(message.d.low) && $util.isInteger(message.d.high)))
                        return "d: integer|Long expected";
                if (message.e != null && message.hasOwnProperty("e"))
                    if (!$util.isInteger(message.e) && !(message.e && $util.isInteger(message.e.low) && $util.isInteger(message.e.high)))
                        return "e: integer|Long expected";
                if (message.f != null && message.hasOwnProperty("f"))
                    if (!$util.isInteger(message.f) && !(message.f && $util.isInteger(message.f.low) && $util.isInteger(message.f.high)))
                        return "f: integer|Long expected";
                if (message.g != null && message.hasOwnProperty("g"))
                    if (!$util.isString(message.g))
                        return "g: string expected";
                if (message.h != null && message.hasOwnProperty("h"))
                    if (!$util.isString(message.h))
                        return "h: string expected";
                return null;
            };

            /**
             * Creates a WishCurrentState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState} WishCurrentState
             */
            WishCurrentState.fromObject = function fromObject(object) {
                if (object instanceof $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState)
                    return object;
                var message = new $root.AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState();
                if (object.c != null)
                    message.c = String(object.c);
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
                    if ($util.Long)
                        (message.e = $util.Long.fromValue(object.e)).unsigned = false;
                    else if (typeof object.e === "string")
                        message.e = parseInt(object.e, 10);
                    else if (typeof object.e === "number")
                        message.e = object.e;
                    else if (typeof object.e === "object")
                        message.e = new $util.LongBits(object.e.low >>> 0, object.e.high >>> 0).toNumber();
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
                    message.g = String(object.g);
                if (object.h != null)
                    message.h = String(object.h);
                return message;
            };

            /**
             * Creates a plain object from a WishCurrentState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @static
             * @param {AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState} message WishCurrentState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WishCurrentState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.c = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.d = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.d = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.e = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.e = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.f = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.f = options.longs === String ? "0" : 0;
                    object.g = "";
                    object.h = "";
                }
                if (message.c != null && message.hasOwnProperty("c"))
                    object.c = message.c;
                if (message.d != null && message.hasOwnProperty("d"))
                    if (typeof message.d === "number")
                        object.d = options.longs === String ? String(message.d) : message.d;
                    else
                        object.d = options.longs === String ? $util.Long.prototype.toString.call(message.d) : options.longs === Number ? new $util.LongBits(message.d.low >>> 0, message.d.high >>> 0).toNumber() : message.d;
                if (message.e != null && message.hasOwnProperty("e"))
                    if (typeof message.e === "number")
                        object.e = options.longs === String ? String(message.e) : message.e;
                    else
                        object.e = options.longs === String ? $util.Long.prototype.toString.call(message.e) : options.longs === Number ? new $util.LongBits(message.e.low >>> 0, message.e.high >>> 0).toNumber() : message.e;
                if (message.f != null && message.hasOwnProperty("f"))
                    if (typeof message.f === "number")
                        object.f = options.longs === String ? String(message.f) : message.f;
                    else
                        object.f = options.longs === String ? $util.Long.prototype.toString.call(message.f) : options.longs === Number ? new $util.LongBits(message.f.low >>> 0, message.f.high >>> 0).toNumber() : message.f;
                if (message.g != null && message.hasOwnProperty("g"))
                    object.g = message.g;
                if (message.h != null && message.hasOwnProperty("h"))
                    object.h = message.h;
                return object;
            };

            /**
             * Converts this WishCurrentState to JSON.
             * @function toJSON
             * @memberof AcFunDanmu.CommonStateSignalWishSheetCurrentState.WishCurrentState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WishCurrentState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WishCurrentState;
        })();

        return CommonStateSignalWishSheetCurrentState;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
