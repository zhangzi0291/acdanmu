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

    AcFunDanmu.ZtLiveScTicketInvalid = (function() {

        /**
         * Properties of a ZtLiveScTicketInvalid.
         * @memberof AcFunDanmu
         * @interface IZtLiveScTicketInvalid
         */

        /**
         * Constructs a new ZtLiveScTicketInvalid.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveScTicketInvalid.
         * @implements IZtLiveScTicketInvalid
         * @constructor
         * @param {AcFunDanmu.IZtLiveScTicketInvalid=} [properties] Properties to set
         */
        function ZtLiveScTicketInvalid(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ZtLiveScTicketInvalid instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveScTicketInvalid
         * @static
         * @param {AcFunDanmu.IZtLiveScTicketInvalid=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveScTicketInvalid} ZtLiveScTicketInvalid instance
         */
        ZtLiveScTicketInvalid.create = function create(properties) {
            return new ZtLiveScTicketInvalid(properties);
        };

        /**
         * Encodes the specified ZtLiveScTicketInvalid message. Does not implicitly {@link AcFunDanmu.ZtLiveScTicketInvalid.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveScTicketInvalid
         * @static
         * @param {AcFunDanmu.IZtLiveScTicketInvalid} message ZtLiveScTicketInvalid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveScTicketInvalid.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ZtLiveScTicketInvalid message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveScTicketInvalid.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveScTicketInvalid
         * @static
         * @param {AcFunDanmu.IZtLiveScTicketInvalid} message ZtLiveScTicketInvalid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveScTicketInvalid.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveScTicketInvalid message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveScTicketInvalid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveScTicketInvalid} ZtLiveScTicketInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveScTicketInvalid.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveScTicketInvalid();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveScTicketInvalid message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveScTicketInvalid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveScTicketInvalid} ZtLiveScTicketInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveScTicketInvalid.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveScTicketInvalid message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveScTicketInvalid
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveScTicketInvalid.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ZtLiveScTicketInvalid message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveScTicketInvalid
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveScTicketInvalid} ZtLiveScTicketInvalid
         */
        ZtLiveScTicketInvalid.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveScTicketInvalid)
                return object;
            return new $root.AcFunDanmu.ZtLiveScTicketInvalid();
        };

        /**
         * Creates a plain object from a ZtLiveScTicketInvalid message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveScTicketInvalid
         * @static
         * @param {AcFunDanmu.ZtLiveScTicketInvalid} message ZtLiveScTicketInvalid
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveScTicketInvalid.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ZtLiveScTicketInvalid to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveScTicketInvalid
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveScTicketInvalid.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveScTicketInvalid;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
