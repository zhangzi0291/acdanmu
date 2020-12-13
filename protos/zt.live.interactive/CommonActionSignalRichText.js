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

    AcFunDanmu.CommonActionSignalRichText = (function() {

        /**
         * Properties of a CommonActionSignalRichText.
         * @memberof AcFunDanmu
         * @interface ICommonActionSignalRichText
         * @property {Array.<AcFunDanmu.CommonActionSignalRichText.IRichTextSegment>|null} [segments] CommonActionSignalRichText segments
         * @property {number|Long|null} [sendTimeMs] CommonActionSignalRichText sendTimeMs
         */

        /**
         * Constructs a new CommonActionSignalRichText.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonActionSignalRichText.
         * @implements ICommonActionSignalRichText
         * @constructor
         * @param {AcFunDanmu.ICommonActionSignalRichText=} [properties] Properties to set
         */
        function CommonActionSignalRichText(properties) {
            this.segments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonActionSignalRichText segments.
         * @member {Array.<AcFunDanmu.CommonActionSignalRichText.IRichTextSegment>} segments
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @instance
         */
        CommonActionSignalRichText.prototype.segments = $util.emptyArray;

        /**
         * CommonActionSignalRichText sendTimeMs.
         * @member {number|Long} sendTimeMs
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @instance
         */
        CommonActionSignalRichText.prototype.sendTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CommonActionSignalRichText instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @static
         * @param {AcFunDanmu.ICommonActionSignalRichText=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonActionSignalRichText} CommonActionSignalRichText instance
         */
        CommonActionSignalRichText.create = function create(properties) {
            return new CommonActionSignalRichText(properties);
        };

        /**
         * Encodes the specified CommonActionSignalRichText message. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @static
         * @param {AcFunDanmu.ICommonActionSignalRichText} message CommonActionSignalRichText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonActionSignalRichText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.segments != null && message.segments.length)
                for (var i = 0; i < message.segments.length; ++i)
                    $root.AcFunDanmu.CommonActionSignalRichText.RichTextSegment.encode(message.segments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sendTimeMs != null && Object.hasOwnProperty.call(message, "sendTimeMs"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sendTimeMs);
            return writer;
        };

        /**
         * Encodes the specified CommonActionSignalRichText message, length delimited. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @static
         * @param {AcFunDanmu.ICommonActionSignalRichText} message CommonActionSignalRichText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonActionSignalRichText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonActionSignalRichText message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonActionSignalRichText} CommonActionSignalRichText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonActionSignalRichText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonActionSignalRichText();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.segments && message.segments.length))
                        message.segments = [];
                    message.segments.push($root.AcFunDanmu.CommonActionSignalRichText.RichTextSegment.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sendTimeMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonActionSignalRichText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonActionSignalRichText} CommonActionSignalRichText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonActionSignalRichText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonActionSignalRichText message.
         * @function verify
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonActionSignalRichText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.segments != null && message.hasOwnProperty("segments")) {
                if (!Array.isArray(message.segments))
                    return "segments: array expected";
                for (var i = 0; i < message.segments.length; ++i) {
                    var error = $root.AcFunDanmu.CommonActionSignalRichText.RichTextSegment.verify(message.segments[i]);
                    if (error)
                        return "segments." + error;
                }
            }
            if (message.sendTimeMs != null && message.hasOwnProperty("sendTimeMs"))
                if (!$util.isInteger(message.sendTimeMs) && !(message.sendTimeMs && $util.isInteger(message.sendTimeMs.low) && $util.isInteger(message.sendTimeMs.high)))
                    return "sendTimeMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a CommonActionSignalRichText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonActionSignalRichText} CommonActionSignalRichText
         */
        CommonActionSignalRichText.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonActionSignalRichText)
                return object;
            var message = new $root.AcFunDanmu.CommonActionSignalRichText();
            if (object.segments) {
                if (!Array.isArray(object.segments))
                    throw TypeError(".AcFunDanmu.CommonActionSignalRichText.segments: array expected");
                message.segments = [];
                for (var i = 0; i < object.segments.length; ++i) {
                    if (typeof object.segments[i] !== "object")
                        throw TypeError(".AcFunDanmu.CommonActionSignalRichText.segments: object expected");
                    message.segments[i] = $root.AcFunDanmu.CommonActionSignalRichText.RichTextSegment.fromObject(object.segments[i]);
                }
            }
            if (object.sendTimeMs != null)
                if ($util.Long)
                    (message.sendTimeMs = $util.Long.fromValue(object.sendTimeMs)).unsigned = false;
                else if (typeof object.sendTimeMs === "string")
                    message.sendTimeMs = parseInt(object.sendTimeMs, 10);
                else if (typeof object.sendTimeMs === "number")
                    message.sendTimeMs = object.sendTimeMs;
                else if (typeof object.sendTimeMs === "object")
                    message.sendTimeMs = new $util.LongBits(object.sendTimeMs.low >>> 0, object.sendTimeMs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CommonActionSignalRichText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @static
         * @param {AcFunDanmu.CommonActionSignalRichText} message CommonActionSignalRichText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonActionSignalRichText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.segments = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTimeMs = options.longs === String ? "0" : 0;
            if (message.segments && message.segments.length) {
                object.segments = [];
                for (var j = 0; j < message.segments.length; ++j)
                    object.segments[j] = $root.AcFunDanmu.CommonActionSignalRichText.RichTextSegment.toObject(message.segments[j], options);
            }
            if (message.sendTimeMs != null && message.hasOwnProperty("sendTimeMs"))
                if (typeof message.sendTimeMs === "number")
                    object.sendTimeMs = options.longs === String ? String(message.sendTimeMs) : message.sendTimeMs;
                else
                    object.sendTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.sendTimeMs) : options.longs === Number ? new $util.LongBits(message.sendTimeMs.low >>> 0, message.sendTimeMs.high >>> 0).toNumber() : message.sendTimeMs;
            return object;
        };

        /**
         * Converts this CommonActionSignalRichText to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonActionSignalRichText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonActionSignalRichText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CommonActionSignalRichText.ImageSegment = (function() {

            /**
             * Properties of an ImageSegment.
             * @memberof AcFunDanmu.CommonActionSignalRichText
             * @interface IImageSegment
             * @property {Array.<AcFunDanmu.IImageCdnNode>|null} [pictures] ImageSegment pictures
             * @property {string|null} [alternativeText] ImageSegment alternativeText
             * @property {string|null} [alternativeColor] ImageSegment alternativeColor
             */

            /**
             * Constructs a new ImageSegment.
             * @memberof AcFunDanmu.CommonActionSignalRichText
             * @classdesc Represents an ImageSegment.
             * @implements IImageSegment
             * @constructor
             * @param {AcFunDanmu.CommonActionSignalRichText.IImageSegment=} [properties] Properties to set
             */
            function ImageSegment(properties) {
                this.pictures = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ImageSegment pictures.
             * @member {Array.<AcFunDanmu.IImageCdnNode>} pictures
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @instance
             */
            ImageSegment.prototype.pictures = $util.emptyArray;

            /**
             * ImageSegment alternativeText.
             * @member {string} alternativeText
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @instance
             */
            ImageSegment.prototype.alternativeText = "";

            /**
             * ImageSegment alternativeColor.
             * @member {string} alternativeColor
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @instance
             */
            ImageSegment.prototype.alternativeColor = "";

            /**
             * Creates a new ImageSegment instance using the specified properties.
             * @function create
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IImageSegment=} [properties] Properties to set
             * @returns {AcFunDanmu.CommonActionSignalRichText.ImageSegment} ImageSegment instance
             */
            ImageSegment.create = function create(properties) {
                return new ImageSegment(properties);
            };

            /**
             * Encodes the specified ImageSegment message. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.ImageSegment.verify|verify} messages.
             * @function encode
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IImageSegment} message ImageSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ImageSegment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pictures != null && message.pictures.length)
                    for (var i = 0; i < message.pictures.length; ++i)
                        $root.AcFunDanmu.ImageCdnNode.encode(message.pictures[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.alternativeText != null && Object.hasOwnProperty.call(message, "alternativeText"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.alternativeText);
                if (message.alternativeColor != null && Object.hasOwnProperty.call(message, "alternativeColor"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.alternativeColor);
                return writer;
            };

            /**
             * Encodes the specified ImageSegment message, length delimited. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.ImageSegment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IImageSegment} message ImageSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ImageSegment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ImageSegment message from the specified reader or buffer.
             * @function decode
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AcFunDanmu.CommonActionSignalRichText.ImageSegment} ImageSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ImageSegment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonActionSignalRichText.ImageSegment();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.pictures && message.pictures.length))
                            message.pictures = [];
                        message.pictures.push($root.AcFunDanmu.ImageCdnNode.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.alternativeText = reader.string();
                        break;
                    case 3:
                        message.alternativeColor = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ImageSegment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AcFunDanmu.CommonActionSignalRichText.ImageSegment} ImageSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ImageSegment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ImageSegment message.
             * @function verify
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ImageSegment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pictures != null && message.hasOwnProperty("pictures")) {
                    if (!Array.isArray(message.pictures))
                        return "pictures: array expected";
                    for (var i = 0; i < message.pictures.length; ++i) {
                        var error = $root.AcFunDanmu.ImageCdnNode.verify(message.pictures[i]);
                        if (error)
                            return "pictures." + error;
                    }
                }
                if (message.alternativeText != null && message.hasOwnProperty("alternativeText"))
                    if (!$util.isString(message.alternativeText))
                        return "alternativeText: string expected";
                if (message.alternativeColor != null && message.hasOwnProperty("alternativeColor"))
                    if (!$util.isString(message.alternativeColor))
                        return "alternativeColor: string expected";
                return null;
            };

            /**
             * Creates an ImageSegment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AcFunDanmu.CommonActionSignalRichText.ImageSegment} ImageSegment
             */
            ImageSegment.fromObject = function fromObject(object) {
                if (object instanceof $root.AcFunDanmu.CommonActionSignalRichText.ImageSegment)
                    return object;
                var message = new $root.AcFunDanmu.CommonActionSignalRichText.ImageSegment();
                if (object.pictures) {
                    if (!Array.isArray(object.pictures))
                        throw TypeError(".AcFunDanmu.CommonActionSignalRichText.ImageSegment.pictures: array expected");
                    message.pictures = [];
                    for (var i = 0; i < object.pictures.length; ++i) {
                        if (typeof object.pictures[i] !== "object")
                            throw TypeError(".AcFunDanmu.CommonActionSignalRichText.ImageSegment.pictures: object expected");
                        message.pictures[i] = $root.AcFunDanmu.ImageCdnNode.fromObject(object.pictures[i]);
                    }
                }
                if (object.alternativeText != null)
                    message.alternativeText = String(object.alternativeText);
                if (object.alternativeColor != null)
                    message.alternativeColor = String(object.alternativeColor);
                return message;
            };

            /**
             * Creates a plain object from an ImageSegment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.ImageSegment} message ImageSegment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ImageSegment.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.pictures = [];
                if (options.defaults) {
                    object.alternativeText = "";
                    object.alternativeColor = "";
                }
                if (message.pictures && message.pictures.length) {
                    object.pictures = [];
                    for (var j = 0; j < message.pictures.length; ++j)
                        object.pictures[j] = $root.AcFunDanmu.ImageCdnNode.toObject(message.pictures[j], options);
                }
                if (message.alternativeText != null && message.hasOwnProperty("alternativeText"))
                    object.alternativeText = message.alternativeText;
                if (message.alternativeColor != null && message.hasOwnProperty("alternativeColor"))
                    object.alternativeColor = message.alternativeColor;
                return object;
            };

            /**
             * Converts this ImageSegment to JSON.
             * @function toJSON
             * @memberof AcFunDanmu.CommonActionSignalRichText.ImageSegment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ImageSegment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ImageSegment;
        })();

        CommonActionSignalRichText.PlainSegment = (function() {

            /**
             * Properties of a PlainSegment.
             * @memberof AcFunDanmu.CommonActionSignalRichText
             * @interface IPlainSegment
             * @property {string|null} [text] PlainSegment text
             * @property {string|null} [color] PlainSegment color
             */

            /**
             * Constructs a new PlainSegment.
             * @memberof AcFunDanmu.CommonActionSignalRichText
             * @classdesc Represents a PlainSegment.
             * @implements IPlainSegment
             * @constructor
             * @param {AcFunDanmu.CommonActionSignalRichText.IPlainSegment=} [properties] Properties to set
             */
            function PlainSegment(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlainSegment text.
             * @member {string} text
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @instance
             */
            PlainSegment.prototype.text = "";

            /**
             * PlainSegment color.
             * @member {string} color
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @instance
             */
            PlainSegment.prototype.color = "";

            /**
             * Creates a new PlainSegment instance using the specified properties.
             * @function create
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IPlainSegment=} [properties] Properties to set
             * @returns {AcFunDanmu.CommonActionSignalRichText.PlainSegment} PlainSegment instance
             */
            PlainSegment.create = function create(properties) {
                return new PlainSegment(properties);
            };

            /**
             * Encodes the specified PlainSegment message. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.PlainSegment.verify|verify} messages.
             * @function encode
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IPlainSegment} message PlainSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlainSegment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.color);
                return writer;
            };

            /**
             * Encodes the specified PlainSegment message, length delimited. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.PlainSegment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IPlainSegment} message PlainSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlainSegment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlainSegment message from the specified reader or buffer.
             * @function decode
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AcFunDanmu.CommonActionSignalRichText.PlainSegment} PlainSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlainSegment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonActionSignalRichText.PlainSegment();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.text = reader.string();
                        break;
                    case 2:
                        message.color = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PlainSegment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AcFunDanmu.CommonActionSignalRichText.PlainSegment} PlainSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlainSegment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlainSegment message.
             * @function verify
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlainSegment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.color != null && message.hasOwnProperty("color"))
                    if (!$util.isString(message.color))
                        return "color: string expected";
                return null;
            };

            /**
             * Creates a PlainSegment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AcFunDanmu.CommonActionSignalRichText.PlainSegment} PlainSegment
             */
            PlainSegment.fromObject = function fromObject(object) {
                if (object instanceof $root.AcFunDanmu.CommonActionSignalRichText.PlainSegment)
                    return object;
                var message = new $root.AcFunDanmu.CommonActionSignalRichText.PlainSegment();
                if (object.text != null)
                    message.text = String(object.text);
                if (object.color != null)
                    message.color = String(object.color);
                return message;
            };

            /**
             * Creates a plain object from a PlainSegment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.PlainSegment} message PlainSegment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlainSegment.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.text = "";
                    object.color = "";
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.color != null && message.hasOwnProperty("color"))
                    object.color = message.color;
                return object;
            };

            /**
             * Converts this PlainSegment to JSON.
             * @function toJSON
             * @memberof AcFunDanmu.CommonActionSignalRichText.PlainSegment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlainSegment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PlainSegment;
        })();

        CommonActionSignalRichText.RichTextSegment = (function() {

            /**
             * Properties of a RichTextSegment.
             * @memberof AcFunDanmu.CommonActionSignalRichText
             * @interface IRichTextSegment
             * @property {AcFunDanmu.CommonActionSignalRichText.IUserInfoSegment|null} [userInfo] RichTextSegment userInfo
             * @property {AcFunDanmu.CommonActionSignalRichText.IPlainSegment|null} [plain] RichTextSegment plain
             * @property {AcFunDanmu.CommonActionSignalRichText.IImageSegment|null} [image] RichTextSegment image
             */

            /**
             * Constructs a new RichTextSegment.
             * @memberof AcFunDanmu.CommonActionSignalRichText
             * @classdesc Represents a RichTextSegment.
             * @implements IRichTextSegment
             * @constructor
             * @param {AcFunDanmu.CommonActionSignalRichText.IRichTextSegment=} [properties] Properties to set
             */
            function RichTextSegment(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RichTextSegment userInfo.
             * @member {AcFunDanmu.CommonActionSignalRichText.IUserInfoSegment|null|undefined} userInfo
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @instance
             */
            RichTextSegment.prototype.userInfo = null;

            /**
             * RichTextSegment plain.
             * @member {AcFunDanmu.CommonActionSignalRichText.IPlainSegment|null|undefined} plain
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @instance
             */
            RichTextSegment.prototype.plain = null;

            /**
             * RichTextSegment image.
             * @member {AcFunDanmu.CommonActionSignalRichText.IImageSegment|null|undefined} image
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @instance
             */
            RichTextSegment.prototype.image = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * RichTextSegment segment.
             * @member {"userInfo"|"plain"|"image"|undefined} segment
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @instance
             */
            Object.defineProperty(RichTextSegment.prototype, "segment", {
                get: $util.oneOfGetter($oneOfFields = ["userInfo", "plain", "image"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new RichTextSegment instance using the specified properties.
             * @function create
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IRichTextSegment=} [properties] Properties to set
             * @returns {AcFunDanmu.CommonActionSignalRichText.RichTextSegment} RichTextSegment instance
             */
            RichTextSegment.create = function create(properties) {
                return new RichTextSegment(properties);
            };

            /**
             * Encodes the specified RichTextSegment message. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.RichTextSegment.verify|verify} messages.
             * @function encode
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IRichTextSegment} message RichTextSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RichTextSegment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                    $root.AcFunDanmu.CommonActionSignalRichText.UserInfoSegment.encode(message.userInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.plain != null && Object.hasOwnProperty.call(message, "plain"))
                    $root.AcFunDanmu.CommonActionSignalRichText.PlainSegment.encode(message.plain, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                    $root.AcFunDanmu.CommonActionSignalRichText.ImageSegment.encode(message.image, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RichTextSegment message, length delimited. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.RichTextSegment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IRichTextSegment} message RichTextSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RichTextSegment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RichTextSegment message from the specified reader or buffer.
             * @function decode
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AcFunDanmu.CommonActionSignalRichText.RichTextSegment} RichTextSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RichTextSegment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonActionSignalRichText.RichTextSegment();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userInfo = $root.AcFunDanmu.CommonActionSignalRichText.UserInfoSegment.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.plain = $root.AcFunDanmu.CommonActionSignalRichText.PlainSegment.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.image = $root.AcFunDanmu.CommonActionSignalRichText.ImageSegment.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RichTextSegment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AcFunDanmu.CommonActionSignalRichText.RichTextSegment} RichTextSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RichTextSegment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RichTextSegment message.
             * @function verify
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RichTextSegment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                    properties.segment = 1;
                    {
                        var error = $root.AcFunDanmu.CommonActionSignalRichText.UserInfoSegment.verify(message.userInfo);
                        if (error)
                            return "userInfo." + error;
                    }
                }
                if (message.plain != null && message.hasOwnProperty("plain")) {
                    if (properties.segment === 1)
                        return "segment: multiple values";
                    properties.segment = 1;
                    {
                        var error = $root.AcFunDanmu.CommonActionSignalRichText.PlainSegment.verify(message.plain);
                        if (error)
                            return "plain." + error;
                    }
                }
                if (message.image != null && message.hasOwnProperty("image")) {
                    if (properties.segment === 1)
                        return "segment: multiple values";
                    properties.segment = 1;
                    {
                        var error = $root.AcFunDanmu.CommonActionSignalRichText.ImageSegment.verify(message.image);
                        if (error)
                            return "image." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RichTextSegment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AcFunDanmu.CommonActionSignalRichText.RichTextSegment} RichTextSegment
             */
            RichTextSegment.fromObject = function fromObject(object) {
                if (object instanceof $root.AcFunDanmu.CommonActionSignalRichText.RichTextSegment)
                    return object;
                var message = new $root.AcFunDanmu.CommonActionSignalRichText.RichTextSegment();
                if (object.userInfo != null) {
                    if (typeof object.userInfo !== "object")
                        throw TypeError(".AcFunDanmu.CommonActionSignalRichText.RichTextSegment.userInfo: object expected");
                    message.userInfo = $root.AcFunDanmu.CommonActionSignalRichText.UserInfoSegment.fromObject(object.userInfo);
                }
                if (object.plain != null) {
                    if (typeof object.plain !== "object")
                        throw TypeError(".AcFunDanmu.CommonActionSignalRichText.RichTextSegment.plain: object expected");
                    message.plain = $root.AcFunDanmu.CommonActionSignalRichText.PlainSegment.fromObject(object.plain);
                }
                if (object.image != null) {
                    if (typeof object.image !== "object")
                        throw TypeError(".AcFunDanmu.CommonActionSignalRichText.RichTextSegment.image: object expected");
                    message.image = $root.AcFunDanmu.CommonActionSignalRichText.ImageSegment.fromObject(object.image);
                }
                return message;
            };

            /**
             * Creates a plain object from a RichTextSegment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.RichTextSegment} message RichTextSegment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RichTextSegment.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                    object.userInfo = $root.AcFunDanmu.CommonActionSignalRichText.UserInfoSegment.toObject(message.userInfo, options);
                    if (options.oneofs)
                        object.segment = "userInfo";
                }
                if (message.plain != null && message.hasOwnProperty("plain")) {
                    object.plain = $root.AcFunDanmu.CommonActionSignalRichText.PlainSegment.toObject(message.plain, options);
                    if (options.oneofs)
                        object.segment = "plain";
                }
                if (message.image != null && message.hasOwnProperty("image")) {
                    object.image = $root.AcFunDanmu.CommonActionSignalRichText.ImageSegment.toObject(message.image, options);
                    if (options.oneofs)
                        object.segment = "image";
                }
                return object;
            };

            /**
             * Converts this RichTextSegment to JSON.
             * @function toJSON
             * @memberof AcFunDanmu.CommonActionSignalRichText.RichTextSegment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RichTextSegment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RichTextSegment;
        })();

        CommonActionSignalRichText.UserInfoSegment = (function() {

            /**
             * Properties of a UserInfoSegment.
             * @memberof AcFunDanmu.CommonActionSignalRichText
             * @interface IUserInfoSegment
             * @property {AcFunDanmu.IZtLiveUserInfo|null} [user] UserInfoSegment user
             * @property {string|null} [color] UserInfoSegment color
             */

            /**
             * Constructs a new UserInfoSegment.
             * @memberof AcFunDanmu.CommonActionSignalRichText
             * @classdesc Represents a UserInfoSegment.
             * @implements IUserInfoSegment
             * @constructor
             * @param {AcFunDanmu.CommonActionSignalRichText.IUserInfoSegment=} [properties] Properties to set
             */
            function UserInfoSegment(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfoSegment user.
             * @member {AcFunDanmu.IZtLiveUserInfo|null|undefined} user
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @instance
             */
            UserInfoSegment.prototype.user = null;

            /**
             * UserInfoSegment color.
             * @member {string} color
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @instance
             */
            UserInfoSegment.prototype.color = "";

            /**
             * Creates a new UserInfoSegment instance using the specified properties.
             * @function create
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IUserInfoSegment=} [properties] Properties to set
             * @returns {AcFunDanmu.CommonActionSignalRichText.UserInfoSegment} UserInfoSegment instance
             */
            UserInfoSegment.create = function create(properties) {
                return new UserInfoSegment(properties);
            };

            /**
             * Encodes the specified UserInfoSegment message. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.UserInfoSegment.verify|verify} messages.
             * @function encode
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IUserInfoSegment} message UserInfoSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfoSegment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.AcFunDanmu.ZtLiveUserInfo.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.color);
                return writer;
            };

            /**
             * Encodes the specified UserInfoSegment message, length delimited. Does not implicitly {@link AcFunDanmu.CommonActionSignalRichText.UserInfoSegment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.IUserInfoSegment} message UserInfoSegment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfoSegment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfoSegment message from the specified reader or buffer.
             * @function decode
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AcFunDanmu.CommonActionSignalRichText.UserInfoSegment} UserInfoSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfoSegment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonActionSignalRichText.UserInfoSegment();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.user = $root.AcFunDanmu.ZtLiveUserInfo.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.color = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserInfoSegment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AcFunDanmu.CommonActionSignalRichText.UserInfoSegment} UserInfoSegment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfoSegment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfoSegment message.
             * @function verify
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfoSegment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.AcFunDanmu.ZtLiveUserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.color != null && message.hasOwnProperty("color"))
                    if (!$util.isString(message.color))
                        return "color: string expected";
                return null;
            };

            /**
             * Creates a UserInfoSegment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AcFunDanmu.CommonActionSignalRichText.UserInfoSegment} UserInfoSegment
             */
            UserInfoSegment.fromObject = function fromObject(object) {
                if (object instanceof $root.AcFunDanmu.CommonActionSignalRichText.UserInfoSegment)
                    return object;
                var message = new $root.AcFunDanmu.CommonActionSignalRichText.UserInfoSegment();
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".AcFunDanmu.CommonActionSignalRichText.UserInfoSegment.user: object expected");
                    message.user = $root.AcFunDanmu.ZtLiveUserInfo.fromObject(object.user);
                }
                if (object.color != null)
                    message.color = String(object.color);
                return message;
            };

            /**
             * Creates a plain object from a UserInfoSegment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @static
             * @param {AcFunDanmu.CommonActionSignalRichText.UserInfoSegment} message UserInfoSegment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfoSegment.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.user = null;
                    object.color = "";
                }
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.AcFunDanmu.ZtLiveUserInfo.toObject(message.user, options);
                if (message.color != null && message.hasOwnProperty("color"))
                    object.color = message.color;
                return object;
            };

            /**
             * Converts this UserInfoSegment to JSON.
             * @function toJSON
             * @memberof AcFunDanmu.CommonActionSignalRichText.UserInfoSegment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfoSegment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UserInfoSegment;
        })();

        return CommonActionSignalRichText;
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

    return AcFunDanmu;
})();

module.exports = $root;
