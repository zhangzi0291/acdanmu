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

    AcFunDanmu.SdkOption = (function() {

        /**
         * Properties of a SdkOption.
         * @memberof AcFunDanmu
         * @interface ISdkOption
         * @property {number|null} [reportIntervalSeconds] SdkOption reportIntervalSeconds
         * @property {string|null} [reportSecurity] SdkOption reportSecurity
         * @property {number|null} [lz4CompressionThresholdBytes] SdkOption lz4CompressionThresholdBytes
         * @property {Array.<string>|null} [netCheckServers] SdkOption netCheckServers
         */

        /**
         * Constructs a new SdkOption.
         * @memberof AcFunDanmu
         * @classdesc Represents a SdkOption.
         * @implements ISdkOption
         * @constructor
         * @param {AcFunDanmu.ISdkOption=} [properties] Properties to set
         */
        function SdkOption(properties) {
            this.netCheckServers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SdkOption reportIntervalSeconds.
         * @member {number} reportIntervalSeconds
         * @memberof AcFunDanmu.SdkOption
         * @instance
         */
        SdkOption.prototype.reportIntervalSeconds = 0;

        /**
         * SdkOption reportSecurity.
         * @member {string} reportSecurity
         * @memberof AcFunDanmu.SdkOption
         * @instance
         */
        SdkOption.prototype.reportSecurity = "";

        /**
         * SdkOption lz4CompressionThresholdBytes.
         * @member {number} lz4CompressionThresholdBytes
         * @memberof AcFunDanmu.SdkOption
         * @instance
         */
        SdkOption.prototype.lz4CompressionThresholdBytes = 0;

        /**
         * SdkOption netCheckServers.
         * @member {Array.<string>} netCheckServers
         * @memberof AcFunDanmu.SdkOption
         * @instance
         */
        SdkOption.prototype.netCheckServers = $util.emptyArray;

        /**
         * Creates a new SdkOption instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.SdkOption
         * @static
         * @param {AcFunDanmu.ISdkOption=} [properties] Properties to set
         * @returns {AcFunDanmu.SdkOption} SdkOption instance
         */
        SdkOption.create = function create(properties) {
            return new SdkOption(properties);
        };

        /**
         * Encodes the specified SdkOption message. Does not implicitly {@link AcFunDanmu.SdkOption.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.SdkOption
         * @static
         * @param {AcFunDanmu.ISdkOption} message SdkOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SdkOption.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reportIntervalSeconds != null && Object.hasOwnProperty.call(message, "reportIntervalSeconds"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reportIntervalSeconds);
            if (message.reportSecurity != null && Object.hasOwnProperty.call(message, "reportSecurity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reportSecurity);
            if (message.lz4CompressionThresholdBytes != null && Object.hasOwnProperty.call(message, "lz4CompressionThresholdBytes"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lz4CompressionThresholdBytes);
            if (message.netCheckServers != null && message.netCheckServers.length)
                for (var i = 0; i < message.netCheckServers.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.netCheckServers[i]);
            return writer;
        };

        /**
         * Encodes the specified SdkOption message, length delimited. Does not implicitly {@link AcFunDanmu.SdkOption.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.SdkOption
         * @static
         * @param {AcFunDanmu.ISdkOption} message SdkOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SdkOption.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SdkOption message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.SdkOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.SdkOption} SdkOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SdkOption.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.SdkOption();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reportIntervalSeconds = reader.int32();
                    break;
                case 2:
                    message.reportSecurity = reader.string();
                    break;
                case 3:
                    message.lz4CompressionThresholdBytes = reader.int32();
                    break;
                case 4:
                    if (!(message.netCheckServers && message.netCheckServers.length))
                        message.netCheckServers = [];
                    message.netCheckServers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SdkOption message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.SdkOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.SdkOption} SdkOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SdkOption.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SdkOption message.
         * @function verify
         * @memberof AcFunDanmu.SdkOption
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SdkOption.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reportIntervalSeconds != null && message.hasOwnProperty("reportIntervalSeconds"))
                if (!$util.isInteger(message.reportIntervalSeconds))
                    return "reportIntervalSeconds: integer expected";
            if (message.reportSecurity != null && message.hasOwnProperty("reportSecurity"))
                if (!$util.isString(message.reportSecurity))
                    return "reportSecurity: string expected";
            if (message.lz4CompressionThresholdBytes != null && message.hasOwnProperty("lz4CompressionThresholdBytes"))
                if (!$util.isInteger(message.lz4CompressionThresholdBytes))
                    return "lz4CompressionThresholdBytes: integer expected";
            if (message.netCheckServers != null && message.hasOwnProperty("netCheckServers")) {
                if (!Array.isArray(message.netCheckServers))
                    return "netCheckServers: array expected";
                for (var i = 0; i < message.netCheckServers.length; ++i)
                    if (!$util.isString(message.netCheckServers[i]))
                        return "netCheckServers: string[] expected";
            }
            return null;
        };

        /**
         * Creates a SdkOption message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.SdkOption
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.SdkOption} SdkOption
         */
        SdkOption.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.SdkOption)
                return object;
            var message = new $root.AcFunDanmu.SdkOption();
            if (object.reportIntervalSeconds != null)
                message.reportIntervalSeconds = object.reportIntervalSeconds | 0;
            if (object.reportSecurity != null)
                message.reportSecurity = String(object.reportSecurity);
            if (object.lz4CompressionThresholdBytes != null)
                message.lz4CompressionThresholdBytes = object.lz4CompressionThresholdBytes | 0;
            if (object.netCheckServers) {
                if (!Array.isArray(object.netCheckServers))
                    throw TypeError(".AcFunDanmu.SdkOption.netCheckServers: array expected");
                message.netCheckServers = [];
                for (var i = 0; i < object.netCheckServers.length; ++i)
                    message.netCheckServers[i] = String(object.netCheckServers[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SdkOption message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.SdkOption
         * @static
         * @param {AcFunDanmu.SdkOption} message SdkOption
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SdkOption.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.netCheckServers = [];
            if (options.defaults) {
                object.reportIntervalSeconds = 0;
                object.reportSecurity = "";
                object.lz4CompressionThresholdBytes = 0;
            }
            if (message.reportIntervalSeconds != null && message.hasOwnProperty("reportIntervalSeconds"))
                object.reportIntervalSeconds = message.reportIntervalSeconds;
            if (message.reportSecurity != null && message.hasOwnProperty("reportSecurity"))
                object.reportSecurity = message.reportSecurity;
            if (message.lz4CompressionThresholdBytes != null && message.hasOwnProperty("lz4CompressionThresholdBytes"))
                object.lz4CompressionThresholdBytes = message.lz4CompressionThresholdBytes;
            if (message.netCheckServers && message.netCheckServers.length) {
                object.netCheckServers = [];
                for (var j = 0; j < message.netCheckServers.length; ++j)
                    object.netCheckServers[j] = message.netCheckServers[j];
            }
            return object;
        };

        /**
         * Converts this SdkOption to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.SdkOption
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SdkOption.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SdkOption;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
