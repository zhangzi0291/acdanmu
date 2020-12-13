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

    AcFunDanmu.AccessPointsConfig = (function() {

        /**
         * Properties of an AccessPointsConfig.
         * @memberof AcFunDanmu
         * @interface IAccessPointsConfig
         * @property {Array.<AcFunDanmu.IAccessPoint>|null} [optimalAps] AccessPointsConfig optimalAps
         * @property {Array.<AcFunDanmu.IAccessPoint>|null} [backupAps] AccessPointsConfig backupAps
         * @property {Array.<number>|null} [availablePorts] AccessPointsConfig availablePorts
         * @property {AcFunDanmu.IAccessPoint|null} [foreceLastConnectedAp] AccessPointsConfig foreceLastConnectedAp
         */

        /**
         * Constructs a new AccessPointsConfig.
         * @memberof AcFunDanmu
         * @classdesc Represents an AccessPointsConfig.
         * @implements IAccessPointsConfig
         * @constructor
         * @param {AcFunDanmu.IAccessPointsConfig=} [properties] Properties to set
         */
        function AccessPointsConfig(properties) {
            this.optimalAps = [];
            this.backupAps = [];
            this.availablePorts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccessPointsConfig optimalAps.
         * @member {Array.<AcFunDanmu.IAccessPoint>} optimalAps
         * @memberof AcFunDanmu.AccessPointsConfig
         * @instance
         */
        AccessPointsConfig.prototype.optimalAps = $util.emptyArray;

        /**
         * AccessPointsConfig backupAps.
         * @member {Array.<AcFunDanmu.IAccessPoint>} backupAps
         * @memberof AcFunDanmu.AccessPointsConfig
         * @instance
         */
        AccessPointsConfig.prototype.backupAps = $util.emptyArray;

        /**
         * AccessPointsConfig availablePorts.
         * @member {Array.<number>} availablePorts
         * @memberof AcFunDanmu.AccessPointsConfig
         * @instance
         */
        AccessPointsConfig.prototype.availablePorts = $util.emptyArray;

        /**
         * AccessPointsConfig foreceLastConnectedAp.
         * @member {AcFunDanmu.IAccessPoint|null|undefined} foreceLastConnectedAp
         * @memberof AcFunDanmu.AccessPointsConfig
         * @instance
         */
        AccessPointsConfig.prototype.foreceLastConnectedAp = null;

        /**
         * Creates a new AccessPointsConfig instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.AccessPointsConfig
         * @static
         * @param {AcFunDanmu.IAccessPointsConfig=} [properties] Properties to set
         * @returns {AcFunDanmu.AccessPointsConfig} AccessPointsConfig instance
         */
        AccessPointsConfig.create = function create(properties) {
            return new AccessPointsConfig(properties);
        };

        /**
         * Encodes the specified AccessPointsConfig message. Does not implicitly {@link AcFunDanmu.AccessPointsConfig.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.AccessPointsConfig
         * @static
         * @param {AcFunDanmu.IAccessPointsConfig} message AccessPointsConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessPointsConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.optimalAps != null && message.optimalAps.length)
                for (var i = 0; i < message.optimalAps.length; ++i)
                    $root.AcFunDanmu.AccessPoint.encode(message.optimalAps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.backupAps != null && message.backupAps.length)
                for (var i = 0; i < message.backupAps.length; ++i)
                    $root.AcFunDanmu.AccessPoint.encode(message.backupAps[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.availablePorts != null && message.availablePorts.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.availablePorts.length; ++i)
                    writer.uint32(message.availablePorts[i]);
                writer.ldelim();
            }
            if (message.foreceLastConnectedAp != null && Object.hasOwnProperty.call(message, "foreceLastConnectedAp"))
                $root.AcFunDanmu.AccessPoint.encode(message.foreceLastConnectedAp, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AccessPointsConfig message, length delimited. Does not implicitly {@link AcFunDanmu.AccessPointsConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.AccessPointsConfig
         * @static
         * @param {AcFunDanmu.IAccessPointsConfig} message AccessPointsConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessPointsConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccessPointsConfig message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.AccessPointsConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.AccessPointsConfig} AccessPointsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessPointsConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.AccessPointsConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.optimalAps && message.optimalAps.length))
                        message.optimalAps = [];
                    message.optimalAps.push($root.AcFunDanmu.AccessPoint.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.backupAps && message.backupAps.length))
                        message.backupAps = [];
                    message.backupAps.push($root.AcFunDanmu.AccessPoint.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.availablePorts && message.availablePorts.length))
                        message.availablePorts = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.availablePorts.push(reader.uint32());
                    } else
                        message.availablePorts.push(reader.uint32());
                    break;
                case 4:
                    message.foreceLastConnectedAp = $root.AcFunDanmu.AccessPoint.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccessPointsConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.AccessPointsConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.AccessPointsConfig} AccessPointsConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessPointsConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccessPointsConfig message.
         * @function verify
         * @memberof AcFunDanmu.AccessPointsConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccessPointsConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.optimalAps != null && message.hasOwnProperty("optimalAps")) {
                if (!Array.isArray(message.optimalAps))
                    return "optimalAps: array expected";
                for (var i = 0; i < message.optimalAps.length; ++i) {
                    var error = $root.AcFunDanmu.AccessPoint.verify(message.optimalAps[i]);
                    if (error)
                        return "optimalAps." + error;
                }
            }
            if (message.backupAps != null && message.hasOwnProperty("backupAps")) {
                if (!Array.isArray(message.backupAps))
                    return "backupAps: array expected";
                for (var i = 0; i < message.backupAps.length; ++i) {
                    var error = $root.AcFunDanmu.AccessPoint.verify(message.backupAps[i]);
                    if (error)
                        return "backupAps." + error;
                }
            }
            if (message.availablePorts != null && message.hasOwnProperty("availablePorts")) {
                if (!Array.isArray(message.availablePorts))
                    return "availablePorts: array expected";
                for (var i = 0; i < message.availablePorts.length; ++i)
                    if (!$util.isInteger(message.availablePorts[i]))
                        return "availablePorts: integer[] expected";
            }
            if (message.foreceLastConnectedAp != null && message.hasOwnProperty("foreceLastConnectedAp")) {
                var error = $root.AcFunDanmu.AccessPoint.verify(message.foreceLastConnectedAp);
                if (error)
                    return "foreceLastConnectedAp." + error;
            }
            return null;
        };

        /**
         * Creates an AccessPointsConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.AccessPointsConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.AccessPointsConfig} AccessPointsConfig
         */
        AccessPointsConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.AccessPointsConfig)
                return object;
            var message = new $root.AcFunDanmu.AccessPointsConfig();
            if (object.optimalAps) {
                if (!Array.isArray(object.optimalAps))
                    throw TypeError(".AcFunDanmu.AccessPointsConfig.optimalAps: array expected");
                message.optimalAps = [];
                for (var i = 0; i < object.optimalAps.length; ++i) {
                    if (typeof object.optimalAps[i] !== "object")
                        throw TypeError(".AcFunDanmu.AccessPointsConfig.optimalAps: object expected");
                    message.optimalAps[i] = $root.AcFunDanmu.AccessPoint.fromObject(object.optimalAps[i]);
                }
            }
            if (object.backupAps) {
                if (!Array.isArray(object.backupAps))
                    throw TypeError(".AcFunDanmu.AccessPointsConfig.backupAps: array expected");
                message.backupAps = [];
                for (var i = 0; i < object.backupAps.length; ++i) {
                    if (typeof object.backupAps[i] !== "object")
                        throw TypeError(".AcFunDanmu.AccessPointsConfig.backupAps: object expected");
                    message.backupAps[i] = $root.AcFunDanmu.AccessPoint.fromObject(object.backupAps[i]);
                }
            }
            if (object.availablePorts) {
                if (!Array.isArray(object.availablePorts))
                    throw TypeError(".AcFunDanmu.AccessPointsConfig.availablePorts: array expected");
                message.availablePorts = [];
                for (var i = 0; i < object.availablePorts.length; ++i)
                    message.availablePorts[i] = object.availablePorts[i] >>> 0;
            }
            if (object.foreceLastConnectedAp != null) {
                if (typeof object.foreceLastConnectedAp !== "object")
                    throw TypeError(".AcFunDanmu.AccessPointsConfig.foreceLastConnectedAp: object expected");
                message.foreceLastConnectedAp = $root.AcFunDanmu.AccessPoint.fromObject(object.foreceLastConnectedAp);
            }
            return message;
        };

        /**
         * Creates a plain object from an AccessPointsConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.AccessPointsConfig
         * @static
         * @param {AcFunDanmu.AccessPointsConfig} message AccessPointsConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccessPointsConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.optimalAps = [];
                object.backupAps = [];
                object.availablePorts = [];
            }
            if (options.defaults)
                object.foreceLastConnectedAp = null;
            if (message.optimalAps && message.optimalAps.length) {
                object.optimalAps = [];
                for (var j = 0; j < message.optimalAps.length; ++j)
                    object.optimalAps[j] = $root.AcFunDanmu.AccessPoint.toObject(message.optimalAps[j], options);
            }
            if (message.backupAps && message.backupAps.length) {
                object.backupAps = [];
                for (var j = 0; j < message.backupAps.length; ++j)
                    object.backupAps[j] = $root.AcFunDanmu.AccessPoint.toObject(message.backupAps[j], options);
            }
            if (message.availablePorts && message.availablePorts.length) {
                object.availablePorts = [];
                for (var j = 0; j < message.availablePorts.length; ++j)
                    object.availablePorts[j] = message.availablePorts[j];
            }
            if (message.foreceLastConnectedAp != null && message.hasOwnProperty("foreceLastConnectedAp"))
                object.foreceLastConnectedAp = $root.AcFunDanmu.AccessPoint.toObject(message.foreceLastConnectedAp, options);
            return object;
        };

        /**
         * Converts this AccessPointsConfig to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.AccessPointsConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccessPointsConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccessPointsConfig;
    })();

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
