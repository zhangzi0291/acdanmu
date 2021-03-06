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

    AcFunDanmu.ZtLiveScActionSignal = (function() {

        /**
         * Properties of a ZtLiveScActionSignal.
         * @memberof AcFunDanmu
         * @interface IZtLiveScActionSignal
         * @property {Array.<AcFunDanmu.IZtLiveActionSignalItem>|null} [item] ZtLiveScActionSignal item
         */

        /**
         * Constructs a new ZtLiveScActionSignal.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveScActionSignal.
         * @implements IZtLiveScActionSignal
         * @constructor
         * @param {AcFunDanmu.IZtLiveScActionSignal=} [properties] Properties to set
         */
        function ZtLiveScActionSignal(properties) {
            this.item = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveScActionSignal item.
         * @member {Array.<AcFunDanmu.IZtLiveActionSignalItem>} item
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @instance
         */
        ZtLiveScActionSignal.prototype.item = $util.emptyArray;

        /**
         * Creates a new ZtLiveScActionSignal instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @static
         * @param {AcFunDanmu.IZtLiveScActionSignal=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveScActionSignal} ZtLiveScActionSignal instance
         */
        ZtLiveScActionSignal.create = function create(properties) {
            return new ZtLiveScActionSignal(properties);
        };

        /**
         * Encodes the specified ZtLiveScActionSignal message. Does not implicitly {@link AcFunDanmu.ZtLiveScActionSignal.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @static
         * @param {AcFunDanmu.IZtLiveScActionSignal} message ZtLiveScActionSignal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveScActionSignal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.item != null && message.item.length)
                for (var i = 0; i < message.item.length; ++i)
                    $root.AcFunDanmu.ZtLiveActionSignalItem.encode(message.item[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZtLiveScActionSignal message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveScActionSignal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @static
         * @param {AcFunDanmu.IZtLiveScActionSignal} message ZtLiveScActionSignal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveScActionSignal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveScActionSignal message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveScActionSignal} ZtLiveScActionSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveScActionSignal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveScActionSignal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.item && message.item.length))
                        message.item = [];
                    message.item.push($root.AcFunDanmu.ZtLiveActionSignalItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveScActionSignal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveScActionSignal} ZtLiveScActionSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveScActionSignal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveScActionSignal message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveScActionSignal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.item != null && message.hasOwnProperty("item")) {
                if (!Array.isArray(message.item))
                    return "item: array expected";
                for (var i = 0; i < message.item.length; ++i) {
                    var error = $root.AcFunDanmu.ZtLiveActionSignalItem.verify(message.item[i]);
                    if (error)
                        return "item." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ZtLiveScActionSignal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveScActionSignal} ZtLiveScActionSignal
         */
        ZtLiveScActionSignal.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveScActionSignal)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveScActionSignal();
            if (object.item) {
                if (!Array.isArray(object.item))
                    throw TypeError(".AcFunDanmu.ZtLiveScActionSignal.item: array expected");
                message.item = [];
                for (var i = 0; i < object.item.length; ++i) {
                    if (typeof object.item[i] !== "object")
                        throw TypeError(".AcFunDanmu.ZtLiveScActionSignal.item: object expected");
                    message.item[i] = $root.AcFunDanmu.ZtLiveActionSignalItem.fromObject(object.item[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveScActionSignal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @static
         * @param {AcFunDanmu.ZtLiveScActionSignal} message ZtLiveScActionSignal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveScActionSignal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.item = [];
            if (message.item && message.item.length) {
                object.item = [];
                for (var j = 0; j < message.item.length; ++j)
                    object.item[j] = $root.AcFunDanmu.ZtLiveActionSignalItem.toObject(message.item[j], options);
            }
            return object;
        };

        /**
         * Converts this ZtLiveScActionSignal to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveScActionSignal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveScActionSignal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveScActionSignal;
    })();

    AcFunDanmu.ZtLiveActionSignalItem = (function() {

        /**
         * Properties of a ZtLiveActionSignalItem.
         * @memberof AcFunDanmu
         * @interface IZtLiveActionSignalItem
         * @property {string|null} [signalType] ZtLiveActionSignalItem signalType
         * @property {Array.<Uint8Array>|null} [payload] ZtLiveActionSignalItem payload
         */

        /**
         * Constructs a new ZtLiveActionSignalItem.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveActionSignalItem.
         * @implements IZtLiveActionSignalItem
         * @constructor
         * @param {AcFunDanmu.IZtLiveActionSignalItem=} [properties] Properties to set
         */
        function ZtLiveActionSignalItem(properties) {
            this.payload = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveActionSignalItem signalType.
         * @member {string} signalType
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @instance
         */
        ZtLiveActionSignalItem.prototype.signalType = "";

        /**
         * ZtLiveActionSignalItem payload.
         * @member {Array.<Uint8Array>} payload
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @instance
         */
        ZtLiveActionSignalItem.prototype.payload = $util.emptyArray;

        /**
         * Creates a new ZtLiveActionSignalItem instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @static
         * @param {AcFunDanmu.IZtLiveActionSignalItem=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveActionSignalItem} ZtLiveActionSignalItem instance
         */
        ZtLiveActionSignalItem.create = function create(properties) {
            return new ZtLiveActionSignalItem(properties);
        };

        /**
         * Encodes the specified ZtLiveActionSignalItem message. Does not implicitly {@link AcFunDanmu.ZtLiveActionSignalItem.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @static
         * @param {AcFunDanmu.IZtLiveActionSignalItem} message ZtLiveActionSignalItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveActionSignalItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signalType != null && Object.hasOwnProperty.call(message, "signalType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.signalType);
            if (message.payload != null && message.payload.length)
                for (var i = 0; i < message.payload.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload[i]);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveActionSignalItem message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveActionSignalItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @static
         * @param {AcFunDanmu.IZtLiveActionSignalItem} message ZtLiveActionSignalItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveActionSignalItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveActionSignalItem message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveActionSignalItem} ZtLiveActionSignalItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveActionSignalItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveActionSignalItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.signalType = reader.string();
                    break;
                case 2:
                    if (!(message.payload && message.payload.length))
                        message.payload = [];
                    message.payload.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveActionSignalItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveActionSignalItem} ZtLiveActionSignalItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveActionSignalItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveActionSignalItem message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveActionSignalItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signalType != null && message.hasOwnProperty("signalType"))
                if (!$util.isString(message.signalType))
                    return "signalType: string expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                if (!Array.isArray(message.payload))
                    return "payload: array expected";
                for (var i = 0; i < message.payload.length; ++i)
                    if (!(message.payload[i] && typeof message.payload[i].length === "number" || $util.isString(message.payload[i])))
                        return "payload: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a ZtLiveActionSignalItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveActionSignalItem} ZtLiveActionSignalItem
         */
        ZtLiveActionSignalItem.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveActionSignalItem)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveActionSignalItem();
            if (object.signalType != null)
                message.signalType = String(object.signalType);
            if (object.payload) {
                if (!Array.isArray(object.payload))
                    throw TypeError(".AcFunDanmu.ZtLiveActionSignalItem.payload: array expected");
                message.payload = [];
                for (var i = 0; i < object.payload.length; ++i)
                    if (typeof object.payload[i] === "string")
                        $util.base64.decode(object.payload[i], message.payload[i] = $util.newBuffer($util.base64.length(object.payload[i])), 0);
                    else if (object.payload[i].length)
                        message.payload[i] = object.payload[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveActionSignalItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @static
         * @param {AcFunDanmu.ZtLiveActionSignalItem} message ZtLiveActionSignalItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveActionSignalItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.payload = [];
            if (options.defaults)
                object.signalType = "";
            if (message.signalType != null && message.hasOwnProperty("signalType"))
                object.signalType = message.signalType;
            if (message.payload && message.payload.length) {
                object.payload = [];
                for (var j = 0; j < message.payload.length; ++j)
                    object.payload[j] = options.bytes === String ? $util.base64.encode(message.payload[j], 0, message.payload[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.payload[j]) : message.payload[j];
            }
            return object;
        };

        /**
         * Converts this ZtLiveActionSignalItem to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveActionSignalItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveActionSignalItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveActionSignalItem;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
