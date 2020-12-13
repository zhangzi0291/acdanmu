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

    AcFunDanmu.CommonNotifySignalKickedOut = (function() {

        /**
         * Properties of a CommonNotifySignalKickedOut.
         * @memberof AcFunDanmu
         * @interface ICommonNotifySignalKickedOut
         * @property {string|null} [reason] CommonNotifySignalKickedOut reason
         */

        /**
         * Constructs a new CommonNotifySignalKickedOut.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonNotifySignalKickedOut.
         * @implements ICommonNotifySignalKickedOut
         * @constructor
         * @param {AcFunDanmu.ICommonNotifySignalKickedOut=} [properties] Properties to set
         */
        function CommonNotifySignalKickedOut(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonNotifySignalKickedOut reason.
         * @member {string} reason
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @instance
         */
        CommonNotifySignalKickedOut.prototype.reason = "";

        /**
         * Creates a new CommonNotifySignalKickedOut instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalKickedOut=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonNotifySignalKickedOut} CommonNotifySignalKickedOut instance
         */
        CommonNotifySignalKickedOut.create = function create(properties) {
            return new CommonNotifySignalKickedOut(properties);
        };

        /**
         * Encodes the specified CommonNotifySignalKickedOut message. Does not implicitly {@link AcFunDanmu.CommonNotifySignalKickedOut.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalKickedOut} message CommonNotifySignalKickedOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotifySignalKickedOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified CommonNotifySignalKickedOut message, length delimited. Does not implicitly {@link AcFunDanmu.CommonNotifySignalKickedOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalKickedOut} message CommonNotifySignalKickedOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotifySignalKickedOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonNotifySignalKickedOut message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonNotifySignalKickedOut} CommonNotifySignalKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotifySignalKickedOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonNotifySignalKickedOut();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonNotifySignalKickedOut message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonNotifySignalKickedOut} CommonNotifySignalKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotifySignalKickedOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonNotifySignalKickedOut message.
         * @function verify
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonNotifySignalKickedOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a CommonNotifySignalKickedOut message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonNotifySignalKickedOut} CommonNotifySignalKickedOut
         */
        CommonNotifySignalKickedOut.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonNotifySignalKickedOut)
                return object;
            var message = new $root.AcFunDanmu.CommonNotifySignalKickedOut();
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a CommonNotifySignalKickedOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @static
         * @param {AcFunDanmu.CommonNotifySignalKickedOut} message CommonNotifySignalKickedOut
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonNotifySignalKickedOut.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reason = "";
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this CommonNotifySignalKickedOut to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonNotifySignalKickedOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonNotifySignalKickedOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonNotifySignalKickedOut;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
