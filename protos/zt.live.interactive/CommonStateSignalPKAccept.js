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

    AcFunDanmu.CommonStateSignalPKAccept = (function() {

        /**
         * Properties of a CommonStateSignalPKAccept.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalPKAccept
         * @property {string|null} [a] CommonStateSignalPKAccept a
         * @property {string|null} [b] CommonStateSignalPKAccept b
         */

        /**
         * Constructs a new CommonStateSignalPKAccept.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalPKAccept.
         * @implements ICommonStateSignalPKAccept
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalPKAccept=} [properties] Properties to set
         */
        function CommonStateSignalPKAccept(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalPKAccept a.
         * @member {string} a
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @instance
         */
        CommonStateSignalPKAccept.prototype.a = "";

        /**
         * CommonStateSignalPKAccept b.
         * @member {string} b
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @instance
         */
        CommonStateSignalPKAccept.prototype.b = "";

        /**
         * Creates a new CommonStateSignalPKAccept instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPKAccept=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalPKAccept} CommonStateSignalPKAccept instance
         */
        CommonStateSignalPKAccept.create = function create(properties) {
            return new CommonStateSignalPKAccept(properties);
        };

        /**
         * Encodes the specified CommonStateSignalPKAccept message. Does not implicitly {@link AcFunDanmu.CommonStateSignalPKAccept.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPKAccept} message CommonStateSignalPKAccept message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPKAccept.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.a);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.b);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalPKAccept message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalPKAccept.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPKAccept} message CommonStateSignalPKAccept message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPKAccept.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalPKAccept message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalPKAccept} CommonStateSignalPKAccept
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPKAccept.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalPKAccept();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = reader.string();
                    break;
                case 2:
                    message.b = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalPKAccept message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalPKAccept} CommonStateSignalPKAccept
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPKAccept.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalPKAccept message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalPKAccept.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isString(message.a))
                    return "a: string expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isString(message.b))
                    return "b: string expected";
            return null;
        };

        /**
         * Creates a CommonStateSignalPKAccept message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalPKAccept} CommonStateSignalPKAccept
         */
        CommonStateSignalPKAccept.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalPKAccept)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalPKAccept();
            if (object.a != null)
                message.a = String(object.a);
            if (object.b != null)
                message.b = String(object.b);
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalPKAccept message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @static
         * @param {AcFunDanmu.CommonStateSignalPKAccept} message CommonStateSignalPKAccept
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalPKAccept.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.a = "";
                object.b = "";
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            return object;
        };

        /**
         * Converts this CommonStateSignalPKAccept to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalPKAccept
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalPKAccept.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonStateSignalPKAccept;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
