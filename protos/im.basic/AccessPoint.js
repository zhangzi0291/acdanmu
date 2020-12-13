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

    AcFunDanmu.AccessPoint = (function() {

        /**
         * Properties of an AccessPoint.
         * @memberof AcFunDanmu
         * @interface IAccessPoint
         * @property {AcFunDanmu.AccessPoint.AddressType|null} [addressType] AccessPoint addressType
         * @property {number|null} [port] AccessPoint port
         * @property {number|null} [ipV4] AccessPoint ipV4
         * @property {Uint8Array|null} [ipV6] AccessPoint ipV6
         * @property {string|null} [domain] AccessPoint domain
         */

        /**
         * Constructs a new AccessPoint.
         * @memberof AcFunDanmu
         * @classdesc Represents an AccessPoint.
         * @implements IAccessPoint
         * @constructor
         * @param {AcFunDanmu.IAccessPoint=} [properties] Properties to set
         */
        function AccessPoint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccessPoint addressType.
         * @member {AcFunDanmu.AccessPoint.AddressType} addressType
         * @memberof AcFunDanmu.AccessPoint
         * @instance
         */
        AccessPoint.prototype.addressType = 0;

        /**
         * AccessPoint port.
         * @member {number} port
         * @memberof AcFunDanmu.AccessPoint
         * @instance
         */
        AccessPoint.prototype.port = 0;

        /**
         * AccessPoint ipV4.
         * @member {number} ipV4
         * @memberof AcFunDanmu.AccessPoint
         * @instance
         */
        AccessPoint.prototype.ipV4 = 0;

        /**
         * AccessPoint ipV6.
         * @member {Uint8Array} ipV6
         * @memberof AcFunDanmu.AccessPoint
         * @instance
         */
        AccessPoint.prototype.ipV6 = $util.newBuffer([]);

        /**
         * AccessPoint domain.
         * @member {string} domain
         * @memberof AcFunDanmu.AccessPoint
         * @instance
         */
        AccessPoint.prototype.domain = "";

        /**
         * Creates a new AccessPoint instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.AccessPoint
         * @static
         * @param {AcFunDanmu.IAccessPoint=} [properties] Properties to set
         * @returns {AcFunDanmu.AccessPoint} AccessPoint instance
         */
        AccessPoint.create = function create(properties) {
            return new AccessPoint(properties);
        };

        /**
         * Encodes the specified AccessPoint message. Does not implicitly {@link AcFunDanmu.AccessPoint.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.AccessPoint
         * @static
         * @param {AcFunDanmu.IAccessPoint} message AccessPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addressType != null && Object.hasOwnProperty.call(message, "addressType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.addressType);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.port);
            if (message.ipV4 != null && Object.hasOwnProperty.call(message, "ipV4"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.ipV4);
            if (message.ipV6 != null && Object.hasOwnProperty.call(message, "ipV6"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ipV6);
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.domain);
            return writer;
        };

        /**
         * Encodes the specified AccessPoint message, length delimited. Does not implicitly {@link AcFunDanmu.AccessPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.AccessPoint
         * @static
         * @param {AcFunDanmu.IAccessPoint} message AccessPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccessPoint message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.AccessPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.AccessPoint} AccessPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.AccessPoint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.addressType = reader.int32();
                    break;
                case 2:
                    message.port = reader.uint32();
                    break;
                case 3:
                    message.ipV4 = reader.fixed32();
                    break;
                case 4:
                    message.ipV6 = reader.bytes();
                    break;
                case 5:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccessPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.AccessPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.AccessPoint} AccessPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccessPoint message.
         * @function verify
         * @memberof AcFunDanmu.AccessPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccessPoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addressType != null && message.hasOwnProperty("addressType"))
                switch (message.addressType) {
                default:
                    return "addressType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.ipV4 != null && message.hasOwnProperty("ipV4"))
                if (!$util.isInteger(message.ipV4))
                    return "ipV4: integer expected";
            if (message.ipV6 != null && message.hasOwnProperty("ipV6"))
                if (!(message.ipV6 && typeof message.ipV6.length === "number" || $util.isString(message.ipV6)))
                    return "ipV6: buffer expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            return null;
        };

        /**
         * Creates an AccessPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.AccessPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.AccessPoint} AccessPoint
         */
        AccessPoint.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.AccessPoint)
                return object;
            var message = new $root.AcFunDanmu.AccessPoint();
            switch (object.addressType) {
            case "kIPV4":
            case 0:
                message.addressType = 0;
                break;
            case "kIPV6":
            case 1:
                message.addressType = 1;
                break;
            case "kDomain":
            case 2:
                message.addressType = 2;
                break;
            }
            if (object.port != null)
                message.port = object.port >>> 0;
            if (object.ipV4 != null)
                message.ipV4 = object.ipV4 >>> 0;
            if (object.ipV6 != null)
                if (typeof object.ipV6 === "string")
                    $util.base64.decode(object.ipV6, message.ipV6 = $util.newBuffer($util.base64.length(object.ipV6)), 0);
                else if (object.ipV6.length)
                    message.ipV6 = object.ipV6;
            if (object.domain != null)
                message.domain = String(object.domain);
            return message;
        };

        /**
         * Creates a plain object from an AccessPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.AccessPoint
         * @static
         * @param {AcFunDanmu.AccessPoint} message AccessPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccessPoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.addressType = options.enums === String ? "kIPV4" : 0;
                object.port = 0;
                object.ipV4 = 0;
                if (options.bytes === String)
                    object.ipV6 = "";
                else {
                    object.ipV6 = [];
                    if (options.bytes !== Array)
                        object.ipV6 = $util.newBuffer(object.ipV6);
                }
                object.domain = "";
            }
            if (message.addressType != null && message.hasOwnProperty("addressType"))
                object.addressType = options.enums === String ? $root.AcFunDanmu.AccessPoint.AddressType[message.addressType] : message.addressType;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.ipV4 != null && message.hasOwnProperty("ipV4"))
                object.ipV4 = message.ipV4;
            if (message.ipV6 != null && message.hasOwnProperty("ipV6"))
                object.ipV6 = options.bytes === String ? $util.base64.encode(message.ipV6, 0, message.ipV6.length) : options.bytes === Array ? Array.prototype.slice.call(message.ipV6) : message.ipV6;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            return object;
        };

        /**
         * Converts this AccessPoint to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.AccessPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccessPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * AddressType enum.
         * @name AcFunDanmu.AccessPoint.AddressType
         * @enum {number}
         * @property {number} kIPV4=0 kIPV4 value
         * @property {number} kIPV6=1 kIPV6 value
         * @property {number} kDomain=2 kDomain value
         */
        AccessPoint.AddressType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kIPV4"] = 0;
            values[valuesById[1] = "kIPV6"] = 1;
            values[valuesById[2] = "kDomain"] = 2;
            return values;
        })();

        return AccessPoint;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
