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

    AcFunDanmu.EnvInfo = (function() {

        /**
         * Properties of an EnvInfo.
         * @memberof AcFunDanmu
         * @interface IEnvInfo
         * @property {AcFunDanmu.EnvInfo.NetworkType|null} [networkType] EnvInfo networkType
         * @property {Uint8Array|null} [appName] EnvInfo appName
         */

        /**
         * Constructs a new EnvInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents an EnvInfo.
         * @implements IEnvInfo
         * @constructor
         * @param {AcFunDanmu.IEnvInfo=} [properties] Properties to set
         */
        function EnvInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnvInfo networkType.
         * @member {AcFunDanmu.EnvInfo.NetworkType} networkType
         * @memberof AcFunDanmu.EnvInfo
         * @instance
         */
        EnvInfo.prototype.networkType = 0;

        /**
         * EnvInfo appName.
         * @member {Uint8Array} appName
         * @memberof AcFunDanmu.EnvInfo
         * @instance
         */
        EnvInfo.prototype.appName = $util.newBuffer([]);

        /**
         * Creates a new EnvInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.EnvInfo
         * @static
         * @param {AcFunDanmu.IEnvInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.EnvInfo} EnvInfo instance
         */
        EnvInfo.create = function create(properties) {
            return new EnvInfo(properties);
        };

        /**
         * Encodes the specified EnvInfo message. Does not implicitly {@link AcFunDanmu.EnvInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.EnvInfo
         * @static
         * @param {AcFunDanmu.IEnvInfo} message EnvInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnvInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.networkType != null && Object.hasOwnProperty.call(message, "networkType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.networkType);
            if (message.appName != null && Object.hasOwnProperty.call(message, "appName"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.appName);
            return writer;
        };

        /**
         * Encodes the specified EnvInfo message, length delimited. Does not implicitly {@link AcFunDanmu.EnvInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.EnvInfo
         * @static
         * @param {AcFunDanmu.IEnvInfo} message EnvInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnvInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnvInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.EnvInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.EnvInfo} EnvInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnvInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.EnvInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.networkType = reader.int32();
                    break;
                case 2:
                    message.appName = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnvInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.EnvInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.EnvInfo} EnvInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnvInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnvInfo message.
         * @function verify
         * @memberof AcFunDanmu.EnvInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnvInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.networkType != null && message.hasOwnProperty("networkType"))
                switch (message.networkType) {
                default:
                    return "networkType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.appName != null && message.hasOwnProperty("appName"))
                if (!(message.appName && typeof message.appName.length === "number" || $util.isString(message.appName)))
                    return "appName: buffer expected";
            return null;
        };

        /**
         * Creates an EnvInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.EnvInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.EnvInfo} EnvInfo
         */
        EnvInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.EnvInfo)
                return object;
            var message = new $root.AcFunDanmu.EnvInfo();
            switch (object.networkType) {
            case "kInvalid":
            case 0:
                message.networkType = 0;
                break;
            case "kWIFI":
            case 1:
                message.networkType = 1;
                break;
            case "kCellular":
            case 2:
                message.networkType = 2;
                break;
            }
            if (object.appName != null)
                if (typeof object.appName === "string")
                    $util.base64.decode(object.appName, message.appName = $util.newBuffer($util.base64.length(object.appName)), 0);
                else if (object.appName.length)
                    message.appName = object.appName;
            return message;
        };

        /**
         * Creates a plain object from an EnvInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.EnvInfo
         * @static
         * @param {AcFunDanmu.EnvInfo} message EnvInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnvInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.networkType = options.enums === String ? "kInvalid" : 0;
                if (options.bytes === String)
                    object.appName = "";
                else {
                    object.appName = [];
                    if (options.bytes !== Array)
                        object.appName = $util.newBuffer(object.appName);
                }
            }
            if (message.networkType != null && message.hasOwnProperty("networkType"))
                object.networkType = options.enums === String ? $root.AcFunDanmu.EnvInfo.NetworkType[message.networkType] : message.networkType;
            if (message.appName != null && message.hasOwnProperty("appName"))
                object.appName = options.bytes === String ? $util.base64.encode(message.appName, 0, message.appName.length) : options.bytes === Array ? Array.prototype.slice.call(message.appName) : message.appName;
            return object;
        };

        /**
         * Converts this EnvInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.EnvInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnvInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * NetworkType enum.
         * @name AcFunDanmu.EnvInfo.NetworkType
         * @enum {number}
         * @property {number} kInvalid=0 kInvalid value
         * @property {number} kWIFI=1 kWIFI value
         * @property {number} kCellular=2 kCellular value
         */
        EnvInfo.NetworkType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kInvalid"] = 0;
            values[valuesById[1] = "kWIFI"] = 1;
            values[valuesById[2] = "kCellular"] = 2;
            return values;
        })();

        return EnvInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
