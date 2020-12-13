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

    AcFunDanmu.ZtLiveNotifySignalItem = (function() {

        /**
         * Properties of a ZtLiveNotifySignalItem.
         * @memberof AcFunDanmu
         * @interface IZtLiveNotifySignalItem
         * @property {string|null} [signalType] ZtLiveNotifySignalItem signalType
         * @property {Uint8Array|null} [payload] ZtLiveNotifySignalItem payload
         */

        /**
         * Constructs a new ZtLiveNotifySignalItem.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveNotifySignalItem.
         * @implements IZtLiveNotifySignalItem
         * @constructor
         * @param {AcFunDanmu.IZtLiveNotifySignalItem=} [properties] Properties to set
         */
        function ZtLiveNotifySignalItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveNotifySignalItem signalType.
         * @member {string} signalType
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @instance
         */
        ZtLiveNotifySignalItem.prototype.signalType = "";

        /**
         * ZtLiveNotifySignalItem payload.
         * @member {Uint8Array} payload
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @instance
         */
        ZtLiveNotifySignalItem.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new ZtLiveNotifySignalItem instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @static
         * @param {AcFunDanmu.IZtLiveNotifySignalItem=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveNotifySignalItem} ZtLiveNotifySignalItem instance
         */
        ZtLiveNotifySignalItem.create = function create(properties) {
            return new ZtLiveNotifySignalItem(properties);
        };

        /**
         * Encodes the specified ZtLiveNotifySignalItem message. Does not implicitly {@link AcFunDanmu.ZtLiveNotifySignalItem.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @static
         * @param {AcFunDanmu.IZtLiveNotifySignalItem} message ZtLiveNotifySignalItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveNotifySignalItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signalType != null && Object.hasOwnProperty.call(message, "signalType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.signalType);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveNotifySignalItem message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveNotifySignalItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @static
         * @param {AcFunDanmu.IZtLiveNotifySignalItem} message ZtLiveNotifySignalItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveNotifySignalItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveNotifySignalItem message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveNotifySignalItem} ZtLiveNotifySignalItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveNotifySignalItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveNotifySignalItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.signalType = reader.string();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveNotifySignalItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveNotifySignalItem} ZtLiveNotifySignalItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveNotifySignalItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveNotifySignalItem message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveNotifySignalItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signalType != null && message.hasOwnProperty("signalType"))
                if (!$util.isString(message.signalType))
                    return "signalType: string expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a ZtLiveNotifySignalItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveNotifySignalItem} ZtLiveNotifySignalItem
         */
        ZtLiveNotifySignalItem.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveNotifySignalItem)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveNotifySignalItem();
            if (object.signalType != null)
                message.signalType = String(object.signalType);
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveNotifySignalItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @static
         * @param {AcFunDanmu.ZtLiveNotifySignalItem} message ZtLiveNotifySignalItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveNotifySignalItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.signalType = "";
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.signalType != null && message.hasOwnProperty("signalType"))
                object.signalType = message.signalType;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this ZtLiveNotifySignalItem to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveNotifySignalItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveNotifySignalItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveNotifySignalItem;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
