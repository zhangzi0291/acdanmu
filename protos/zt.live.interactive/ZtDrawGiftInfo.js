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

    AcFunDanmu.ZtDrawGiftInfo = (function() {

        /**
         * Properties of a ZtDrawGiftInfo.
         * @memberof AcFunDanmu
         * @interface IZtDrawGiftInfo
         * @property {number|Long|null} [screenWidth] ZtDrawGiftInfo screenWidth
         * @property {number|Long|null} [screenHeight] ZtDrawGiftInfo screenHeight
         * @property {Array.<AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint>|null} [drawPoint] ZtDrawGiftInfo drawPoint
         */

        /**
         * Constructs a new ZtDrawGiftInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtDrawGiftInfo.
         * @implements IZtDrawGiftInfo
         * @constructor
         * @param {AcFunDanmu.IZtDrawGiftInfo=} [properties] Properties to set
         */
        function ZtDrawGiftInfo(properties) {
            this.drawPoint = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtDrawGiftInfo screenWidth.
         * @member {number|Long} screenWidth
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @instance
         */
        ZtDrawGiftInfo.prototype.screenWidth = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtDrawGiftInfo screenHeight.
         * @member {number|Long} screenHeight
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @instance
         */
        ZtDrawGiftInfo.prototype.screenHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtDrawGiftInfo drawPoint.
         * @member {Array.<AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint>} drawPoint
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @instance
         */
        ZtDrawGiftInfo.prototype.drawPoint = $util.emptyArray;

        /**
         * Creates a new ZtDrawGiftInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {AcFunDanmu.IZtDrawGiftInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtDrawGiftInfo} ZtDrawGiftInfo instance
         */
        ZtDrawGiftInfo.create = function create(properties) {
            return new ZtDrawGiftInfo(properties);
        };

        /**
         * Encodes the specified ZtDrawGiftInfo message. Does not implicitly {@link AcFunDanmu.ZtDrawGiftInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {AcFunDanmu.IZtDrawGiftInfo} message ZtDrawGiftInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtDrawGiftInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.screenWidth != null && Object.hasOwnProperty.call(message, "screenWidth"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.screenWidth);
            if (message.screenHeight != null && Object.hasOwnProperty.call(message, "screenHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.screenHeight);
            if (message.drawPoint != null && message.drawPoint.length)
                for (var i = 0; i < message.drawPoint.length; ++i)
                    $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.encode(message.drawPoint[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZtDrawGiftInfo message, length delimited. Does not implicitly {@link AcFunDanmu.ZtDrawGiftInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {AcFunDanmu.IZtDrawGiftInfo} message ZtDrawGiftInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtDrawGiftInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtDrawGiftInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtDrawGiftInfo} ZtDrawGiftInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtDrawGiftInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtDrawGiftInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.screenWidth = reader.int64();
                    break;
                case 2:
                    message.screenHeight = reader.int64();
                    break;
                case 3:
                    if (!(message.drawPoint && message.drawPoint.length))
                        message.drawPoint = [];
                    message.drawPoint.push($root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtDrawGiftInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtDrawGiftInfo} ZtDrawGiftInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtDrawGiftInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtDrawGiftInfo message.
         * @function verify
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtDrawGiftInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
                if (!$util.isInteger(message.screenWidth) && !(message.screenWidth && $util.isInteger(message.screenWidth.low) && $util.isInteger(message.screenWidth.high)))
                    return "screenWidth: integer|Long expected";
            if (message.screenHeight != null && message.hasOwnProperty("screenHeight"))
                if (!$util.isInteger(message.screenHeight) && !(message.screenHeight && $util.isInteger(message.screenHeight.low) && $util.isInteger(message.screenHeight.high)))
                    return "screenHeight: integer|Long expected";
            if (message.drawPoint != null && message.hasOwnProperty("drawPoint")) {
                if (!Array.isArray(message.drawPoint))
                    return "drawPoint: array expected";
                for (var i = 0; i < message.drawPoint.length; ++i) {
                    var error = $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.verify(message.drawPoint[i]);
                    if (error)
                        return "drawPoint." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ZtDrawGiftInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtDrawGiftInfo} ZtDrawGiftInfo
         */
        ZtDrawGiftInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtDrawGiftInfo)
                return object;
            var message = new $root.AcFunDanmu.ZtDrawGiftInfo();
            if (object.screenWidth != null)
                if ($util.Long)
                    (message.screenWidth = $util.Long.fromValue(object.screenWidth)).unsigned = false;
                else if (typeof object.screenWidth === "string")
                    message.screenWidth = parseInt(object.screenWidth, 10);
                else if (typeof object.screenWidth === "number")
                    message.screenWidth = object.screenWidth;
                else if (typeof object.screenWidth === "object")
                    message.screenWidth = new $util.LongBits(object.screenWidth.low >>> 0, object.screenWidth.high >>> 0).toNumber();
            if (object.screenHeight != null)
                if ($util.Long)
                    (message.screenHeight = $util.Long.fromValue(object.screenHeight)).unsigned = false;
                else if (typeof object.screenHeight === "string")
                    message.screenHeight = parseInt(object.screenHeight, 10);
                else if (typeof object.screenHeight === "number")
                    message.screenHeight = object.screenHeight;
                else if (typeof object.screenHeight === "object")
                    message.screenHeight = new $util.LongBits(object.screenHeight.low >>> 0, object.screenHeight.high >>> 0).toNumber();
            if (object.drawPoint) {
                if (!Array.isArray(object.drawPoint))
                    throw TypeError(".AcFunDanmu.ZtDrawGiftInfo.drawPoint: array expected");
                message.drawPoint = [];
                for (var i = 0; i < object.drawPoint.length; ++i) {
                    if (typeof object.drawPoint[i] !== "object")
                        throw TypeError(".AcFunDanmu.ZtDrawGiftInfo.drawPoint: object expected");
                    message.drawPoint[i] = $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.fromObject(object.drawPoint[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtDrawGiftInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @static
         * @param {AcFunDanmu.ZtDrawGiftInfo} message ZtDrawGiftInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtDrawGiftInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.drawPoint = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.screenWidth = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.screenWidth = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.screenHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.screenHeight = options.longs === String ? "0" : 0;
            }
            if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
                if (typeof message.screenWidth === "number")
                    object.screenWidth = options.longs === String ? String(message.screenWidth) : message.screenWidth;
                else
                    object.screenWidth = options.longs === String ? $util.Long.prototype.toString.call(message.screenWidth) : options.longs === Number ? new $util.LongBits(message.screenWidth.low >>> 0, message.screenWidth.high >>> 0).toNumber() : message.screenWidth;
            if (message.screenHeight != null && message.hasOwnProperty("screenHeight"))
                if (typeof message.screenHeight === "number")
                    object.screenHeight = options.longs === String ? String(message.screenHeight) : message.screenHeight;
                else
                    object.screenHeight = options.longs === String ? $util.Long.prototype.toString.call(message.screenHeight) : options.longs === Number ? new $util.LongBits(message.screenHeight.low >>> 0, message.screenHeight.high >>> 0).toNumber() : message.screenHeight;
            if (message.drawPoint && message.drawPoint.length) {
                object.drawPoint = [];
                for (var j = 0; j < message.drawPoint.length; ++j)
                    object.drawPoint[j] = $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.toObject(message.drawPoint[j], options);
            }
            return object;
        };

        /**
         * Converts this ZtDrawGiftInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtDrawGiftInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtDrawGiftInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ZtDrawGiftInfo.ZtDrawPoint = (function() {

            /**
             * Properties of a ZtDrawPoint.
             * @memberof AcFunDanmu.ZtDrawGiftInfo
             * @interface IZtDrawPoint
             * @property {number|Long|null} [marginLeft] ZtDrawPoint marginLeft
             * @property {number|Long|null} [marginTop] ZtDrawPoint marginTop
             * @property {number|null} [scaleRatio] ZtDrawPoint scaleRatio
             * @property {boolean|null} [handup] ZtDrawPoint handup
             */

            /**
             * Constructs a new ZtDrawPoint.
             * @memberof AcFunDanmu.ZtDrawGiftInfo
             * @classdesc Represents a ZtDrawPoint.
             * @implements IZtDrawPoint
             * @constructor
             * @param {AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint=} [properties] Properties to set
             */
            function ZtDrawPoint(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ZtDrawPoint marginLeft.
             * @member {number|Long} marginLeft
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             */
            ZtDrawPoint.prototype.marginLeft = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ZtDrawPoint marginTop.
             * @member {number|Long} marginTop
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             */
            ZtDrawPoint.prototype.marginTop = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ZtDrawPoint scaleRatio.
             * @member {number} scaleRatio
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             */
            ZtDrawPoint.prototype.scaleRatio = 0;

            /**
             * ZtDrawPoint handup.
             * @member {boolean} handup
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             */
            ZtDrawPoint.prototype.handup = false;

            /**
             * Creates a new ZtDrawPoint instance using the specified properties.
             * @function create
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint=} [properties] Properties to set
             * @returns {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} ZtDrawPoint instance
             */
            ZtDrawPoint.create = function create(properties) {
                return new ZtDrawPoint(properties);
            };

            /**
             * Encodes the specified ZtDrawPoint message. Does not implicitly {@link AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.verify|verify} messages.
             * @function encode
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint} message ZtDrawPoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ZtDrawPoint.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.marginLeft != null && Object.hasOwnProperty.call(message, "marginLeft"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.marginLeft);
                if (message.marginTop != null && Object.hasOwnProperty.call(message, "marginTop"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.marginTop);
                if (message.scaleRatio != null && Object.hasOwnProperty.call(message, "scaleRatio"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.scaleRatio);
                if (message.handup != null && Object.hasOwnProperty.call(message, "handup"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.handup);
                return writer;
            };

            /**
             * Encodes the specified ZtDrawPoint message, length delimited. Does not implicitly {@link AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {AcFunDanmu.ZtDrawGiftInfo.IZtDrawPoint} message ZtDrawPoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ZtDrawPoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ZtDrawPoint message from the specified reader or buffer.
             * @function decode
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} ZtDrawPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ZtDrawPoint.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.marginLeft = reader.int64();
                        break;
                    case 2:
                        message.marginTop = reader.int64();
                        break;
                    case 3:
                        message.scaleRatio = reader.double();
                        break;
                    case 4:
                        message.handup = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ZtDrawPoint message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} ZtDrawPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ZtDrawPoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ZtDrawPoint message.
             * @function verify
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ZtDrawPoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.marginLeft != null && message.hasOwnProperty("marginLeft"))
                    if (!$util.isInteger(message.marginLeft) && !(message.marginLeft && $util.isInteger(message.marginLeft.low) && $util.isInteger(message.marginLeft.high)))
                        return "marginLeft: integer|Long expected";
                if (message.marginTop != null && message.hasOwnProperty("marginTop"))
                    if (!$util.isInteger(message.marginTop) && !(message.marginTop && $util.isInteger(message.marginTop.low) && $util.isInteger(message.marginTop.high)))
                        return "marginTop: integer|Long expected";
                if (message.scaleRatio != null && message.hasOwnProperty("scaleRatio"))
                    if (typeof message.scaleRatio !== "number")
                        return "scaleRatio: number expected";
                if (message.handup != null && message.hasOwnProperty("handup"))
                    if (typeof message.handup !== "boolean")
                        return "handup: boolean expected";
                return null;
            };

            /**
             * Creates a ZtDrawPoint message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} ZtDrawPoint
             */
            ZtDrawPoint.fromObject = function fromObject(object) {
                if (object instanceof $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint)
                    return object;
                var message = new $root.AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint();
                if (object.marginLeft != null)
                    if ($util.Long)
                        (message.marginLeft = $util.Long.fromValue(object.marginLeft)).unsigned = false;
                    else if (typeof object.marginLeft === "string")
                        message.marginLeft = parseInt(object.marginLeft, 10);
                    else if (typeof object.marginLeft === "number")
                        message.marginLeft = object.marginLeft;
                    else if (typeof object.marginLeft === "object")
                        message.marginLeft = new $util.LongBits(object.marginLeft.low >>> 0, object.marginLeft.high >>> 0).toNumber();
                if (object.marginTop != null)
                    if ($util.Long)
                        (message.marginTop = $util.Long.fromValue(object.marginTop)).unsigned = false;
                    else if (typeof object.marginTop === "string")
                        message.marginTop = parseInt(object.marginTop, 10);
                    else if (typeof object.marginTop === "number")
                        message.marginTop = object.marginTop;
                    else if (typeof object.marginTop === "object")
                        message.marginTop = new $util.LongBits(object.marginTop.low >>> 0, object.marginTop.high >>> 0).toNumber();
                if (object.scaleRatio != null)
                    message.scaleRatio = Number(object.scaleRatio);
                if (object.handup != null)
                    message.handup = Boolean(object.handup);
                return message;
            };

            /**
             * Creates a plain object from a ZtDrawPoint message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @static
             * @param {AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint} message ZtDrawPoint
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ZtDrawPoint.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.marginLeft = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.marginLeft = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.marginTop = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.marginTop = options.longs === String ? "0" : 0;
                    object.scaleRatio = 0;
                    object.handup = false;
                }
                if (message.marginLeft != null && message.hasOwnProperty("marginLeft"))
                    if (typeof message.marginLeft === "number")
                        object.marginLeft = options.longs === String ? String(message.marginLeft) : message.marginLeft;
                    else
                        object.marginLeft = options.longs === String ? $util.Long.prototype.toString.call(message.marginLeft) : options.longs === Number ? new $util.LongBits(message.marginLeft.low >>> 0, message.marginLeft.high >>> 0).toNumber() : message.marginLeft;
                if (message.marginTop != null && message.hasOwnProperty("marginTop"))
                    if (typeof message.marginTop === "number")
                        object.marginTop = options.longs === String ? String(message.marginTop) : message.marginTop;
                    else
                        object.marginTop = options.longs === String ? $util.Long.prototype.toString.call(message.marginTop) : options.longs === Number ? new $util.LongBits(message.marginTop.low >>> 0, message.marginTop.high >>> 0).toNumber() : message.marginTop;
                if (message.scaleRatio != null && message.hasOwnProperty("scaleRatio"))
                    object.scaleRatio = options.json && !isFinite(message.scaleRatio) ? String(message.scaleRatio) : message.scaleRatio;
                if (message.handup != null && message.hasOwnProperty("handup"))
                    object.handup = message.handup;
                return object;
            };

            /**
             * Converts this ZtDrawPoint to JSON.
             * @function toJSON
             * @memberof AcFunDanmu.ZtDrawGiftInfo.ZtDrawPoint
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ZtDrawPoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ZtDrawPoint;
        })();

        return ZtDrawGiftInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
