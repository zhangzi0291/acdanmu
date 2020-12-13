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

    AcFunDanmu.SyncCookie = (function() {

        /**
         * Properties of a SyncCookie.
         * @memberof AcFunDanmu
         * @interface ISyncCookie
         * @property {number|Long|null} [syncOffset] SyncCookie syncOffset
         */

        /**
         * Constructs a new SyncCookie.
         * @memberof AcFunDanmu
         * @classdesc Represents a SyncCookie.
         * @implements ISyncCookie
         * @constructor
         * @param {AcFunDanmu.ISyncCookie=} [properties] Properties to set
         */
        function SyncCookie(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncCookie syncOffset.
         * @member {number|Long} syncOffset
         * @memberof AcFunDanmu.SyncCookie
         * @instance
         */
        SyncCookie.prototype.syncOffset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SyncCookie instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.SyncCookie
         * @static
         * @param {AcFunDanmu.ISyncCookie=} [properties] Properties to set
         * @returns {AcFunDanmu.SyncCookie} SyncCookie instance
         */
        SyncCookie.create = function create(properties) {
            return new SyncCookie(properties);
        };

        /**
         * Encodes the specified SyncCookie message. Does not implicitly {@link AcFunDanmu.SyncCookie.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.SyncCookie
         * @static
         * @param {AcFunDanmu.ISyncCookie} message SyncCookie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncCookie.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.syncOffset != null && Object.hasOwnProperty.call(message, "syncOffset"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.syncOffset);
            return writer;
        };

        /**
         * Encodes the specified SyncCookie message, length delimited. Does not implicitly {@link AcFunDanmu.SyncCookie.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.SyncCookie
         * @static
         * @param {AcFunDanmu.ISyncCookie} message SyncCookie message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncCookie.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncCookie message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.SyncCookie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.SyncCookie} SyncCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncCookie.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.SyncCookie();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.syncOffset = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncCookie message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.SyncCookie
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.SyncCookie} SyncCookie
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncCookie.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncCookie message.
         * @function verify
         * @memberof AcFunDanmu.SyncCookie
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncCookie.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.syncOffset != null && message.hasOwnProperty("syncOffset"))
                if (!$util.isInteger(message.syncOffset) && !(message.syncOffset && $util.isInteger(message.syncOffset.low) && $util.isInteger(message.syncOffset.high)))
                    return "syncOffset: integer|Long expected";
            return null;
        };

        /**
         * Creates a SyncCookie message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.SyncCookie
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.SyncCookie} SyncCookie
         */
        SyncCookie.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.SyncCookie)
                return object;
            var message = new $root.AcFunDanmu.SyncCookie();
            if (object.syncOffset != null)
                if ($util.Long)
                    (message.syncOffset = $util.Long.fromValue(object.syncOffset)).unsigned = false;
                else if (typeof object.syncOffset === "string")
                    message.syncOffset = parseInt(object.syncOffset, 10);
                else if (typeof object.syncOffset === "number")
                    message.syncOffset = object.syncOffset;
                else if (typeof object.syncOffset === "object")
                    message.syncOffset = new $util.LongBits(object.syncOffset.low >>> 0, object.syncOffset.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SyncCookie message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.SyncCookie
         * @static
         * @param {AcFunDanmu.SyncCookie} message SyncCookie
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncCookie.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.syncOffset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.syncOffset = options.longs === String ? "0" : 0;
            if (message.syncOffset != null && message.hasOwnProperty("syncOffset"))
                if (typeof message.syncOffset === "number")
                    object.syncOffset = options.longs === String ? String(message.syncOffset) : message.syncOffset;
                else
                    object.syncOffset = options.longs === String ? $util.Long.prototype.toString.call(message.syncOffset) : options.longs === Number ? new $util.LongBits(message.syncOffset.low >>> 0, message.syncOffset.high >>> 0).toNumber() : message.syncOffset;
            return object;
        };

        /**
         * Converts this SyncCookie to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.SyncCookie
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncCookie.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncCookie;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
