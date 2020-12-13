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

    AcFunDanmu.FrontendInfo = (function() {

        /**
         * Properties of a FrontendInfo.
         * @memberof AcFunDanmu
         * @interface IFrontendInfo
         * @property {string|null} [ip] FrontendInfo ip
         * @property {number|null} [port] FrontendInfo port
         */

        /**
         * Constructs a new FrontendInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a FrontendInfo.
         * @implements IFrontendInfo
         * @constructor
         * @param {AcFunDanmu.IFrontendInfo=} [properties] Properties to set
         */
        function FrontendInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FrontendInfo ip.
         * @member {string} ip
         * @memberof AcFunDanmu.FrontendInfo
         * @instance
         */
        FrontendInfo.prototype.ip = "";

        /**
         * FrontendInfo port.
         * @member {number} port
         * @memberof AcFunDanmu.FrontendInfo
         * @instance
         */
        FrontendInfo.prototype.port = 0;

        /**
         * Creates a new FrontendInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.FrontendInfo
         * @static
         * @param {AcFunDanmu.IFrontendInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.FrontendInfo} FrontendInfo instance
         */
        FrontendInfo.create = function create(properties) {
            return new FrontendInfo(properties);
        };

        /**
         * Encodes the specified FrontendInfo message. Does not implicitly {@link AcFunDanmu.FrontendInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.FrontendInfo
         * @static
         * @param {AcFunDanmu.IFrontendInfo} message FrontendInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrontendInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
            return writer;
        };

        /**
         * Encodes the specified FrontendInfo message, length delimited. Does not implicitly {@link AcFunDanmu.FrontendInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.FrontendInfo
         * @static
         * @param {AcFunDanmu.IFrontendInfo} message FrontendInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrontendInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FrontendInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.FrontendInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.FrontendInfo} FrontendInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrontendInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.FrontendInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.port = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FrontendInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.FrontendInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.FrontendInfo} FrontendInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrontendInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FrontendInfo message.
         * @function verify
         * @memberof AcFunDanmu.FrontendInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FrontendInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            return null;
        };

        /**
         * Creates a FrontendInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.FrontendInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.FrontendInfo} FrontendInfo
         */
        FrontendInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.FrontendInfo)
                return object;
            var message = new $root.AcFunDanmu.FrontendInfo();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port | 0;
            return message;
        };

        /**
         * Creates a plain object from a FrontendInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.FrontendInfo
         * @static
         * @param {AcFunDanmu.FrontendInfo} message FrontendInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FrontendInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.port = 0;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };

        /**
         * Converts this FrontendInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.FrontendInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FrontendInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FrontendInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
