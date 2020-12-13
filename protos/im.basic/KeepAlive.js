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

    AcFunDanmu.KeepAliveRequest = (function() {

        /**
         * Properties of a KeepAliveRequest.
         * @memberof AcFunDanmu
         * @interface IKeepAliveRequest
         * @property {AcFunDanmu.RegisterRequest.PresenceStatus|null} [presenceStatus] KeepAliveRequest presenceStatus
         * @property {AcFunDanmu.RegisterRequest.ActiveStatus|null} [appActiveStatus] KeepAliveRequest appActiveStatus
         * @property {AcFunDanmu.IPushServiceToken|null} [pushServiceToken] KeepAliveRequest pushServiceToken
         * @property {Array.<AcFunDanmu.IPushServiceToken>|null} [pushServiceTokenList] KeepAliveRequest pushServiceTokenList
         * @property {number|null} [keepaliveIntervalSec] KeepAliveRequest keepaliveIntervalSec
         */

        /**
         * Constructs a new KeepAliveRequest.
         * @memberof AcFunDanmu
         * @classdesc Represents a KeepAliveRequest.
         * @implements IKeepAliveRequest
         * @constructor
         * @param {AcFunDanmu.IKeepAliveRequest=} [properties] Properties to set
         */
        function KeepAliveRequest(properties) {
            this.pushServiceTokenList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeepAliveRequest presenceStatus.
         * @member {AcFunDanmu.RegisterRequest.PresenceStatus} presenceStatus
         * @memberof AcFunDanmu.KeepAliveRequest
         * @instance
         */
        KeepAliveRequest.prototype.presenceStatus = 0;

        /**
         * KeepAliveRequest appActiveStatus.
         * @member {AcFunDanmu.RegisterRequest.ActiveStatus} appActiveStatus
         * @memberof AcFunDanmu.KeepAliveRequest
         * @instance
         */
        KeepAliveRequest.prototype.appActiveStatus = 0;

        /**
         * KeepAliveRequest pushServiceToken.
         * @member {AcFunDanmu.IPushServiceToken|null|undefined} pushServiceToken
         * @memberof AcFunDanmu.KeepAliveRequest
         * @instance
         */
        KeepAliveRequest.prototype.pushServiceToken = null;

        /**
         * KeepAliveRequest pushServiceTokenList.
         * @member {Array.<AcFunDanmu.IPushServiceToken>} pushServiceTokenList
         * @memberof AcFunDanmu.KeepAliveRequest
         * @instance
         */
        KeepAliveRequest.prototype.pushServiceTokenList = $util.emptyArray;

        /**
         * KeepAliveRequest keepaliveIntervalSec.
         * @member {number} keepaliveIntervalSec
         * @memberof AcFunDanmu.KeepAliveRequest
         * @instance
         */
        KeepAliveRequest.prototype.keepaliveIntervalSec = 0;

        /**
         * Creates a new KeepAliveRequest instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.KeepAliveRequest
         * @static
         * @param {AcFunDanmu.IKeepAliveRequest=} [properties] Properties to set
         * @returns {AcFunDanmu.KeepAliveRequest} KeepAliveRequest instance
         */
        KeepAliveRequest.create = function create(properties) {
            return new KeepAliveRequest(properties);
        };

        /**
         * Encodes the specified KeepAliveRequest message. Does not implicitly {@link AcFunDanmu.KeepAliveRequest.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.KeepAliveRequest
         * @static
         * @param {AcFunDanmu.IKeepAliveRequest} message KeepAliveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepAliveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.presenceStatus != null && Object.hasOwnProperty.call(message, "presenceStatus"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.presenceStatus);
            if (message.appActiveStatus != null && Object.hasOwnProperty.call(message, "appActiveStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.appActiveStatus);
            if (message.pushServiceToken != null && Object.hasOwnProperty.call(message, "pushServiceToken"))
                $root.AcFunDanmu.PushServiceToken.encode(message.pushServiceToken, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.pushServiceTokenList != null && message.pushServiceTokenList.length)
                for (var i = 0; i < message.pushServiceTokenList.length; ++i)
                    $root.AcFunDanmu.PushServiceToken.encode(message.pushServiceTokenList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.keepaliveIntervalSec != null && Object.hasOwnProperty.call(message, "keepaliveIntervalSec"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.keepaliveIntervalSec);
            return writer;
        };

        /**
         * Encodes the specified KeepAliveRequest message, length delimited. Does not implicitly {@link AcFunDanmu.KeepAliveRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.KeepAliveRequest
         * @static
         * @param {AcFunDanmu.IKeepAliveRequest} message KeepAliveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepAliveRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeepAliveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.KeepAliveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.KeepAliveRequest} KeepAliveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepAliveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.KeepAliveRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.presenceStatus = reader.int32();
                    break;
                case 2:
                    message.appActiveStatus = reader.int32();
                    break;
                case 3:
                    message.pushServiceToken = $root.AcFunDanmu.PushServiceToken.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.pushServiceTokenList && message.pushServiceTokenList.length))
                        message.pushServiceTokenList = [];
                    message.pushServiceTokenList.push($root.AcFunDanmu.PushServiceToken.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.keepaliveIntervalSec = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KeepAliveRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.KeepAliveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.KeepAliveRequest} KeepAliveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepAliveRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeepAliveRequest message.
         * @function verify
         * @memberof AcFunDanmu.KeepAliveRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeepAliveRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.presenceStatus != null && message.hasOwnProperty("presenceStatus"))
                switch (message.presenceStatus) {
                default:
                    return "presenceStatus: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.appActiveStatus != null && message.hasOwnProperty("appActiveStatus"))
                switch (message.appActiveStatus) {
                default:
                    return "appActiveStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.pushServiceToken != null && message.hasOwnProperty("pushServiceToken")) {
                var error = $root.AcFunDanmu.PushServiceToken.verify(message.pushServiceToken);
                if (error)
                    return "pushServiceToken." + error;
            }
            if (message.pushServiceTokenList != null && message.hasOwnProperty("pushServiceTokenList")) {
                if (!Array.isArray(message.pushServiceTokenList))
                    return "pushServiceTokenList: array expected";
                for (var i = 0; i < message.pushServiceTokenList.length; ++i) {
                    var error = $root.AcFunDanmu.PushServiceToken.verify(message.pushServiceTokenList[i]);
                    if (error)
                        return "pushServiceTokenList." + error;
                }
            }
            if (message.keepaliveIntervalSec != null && message.hasOwnProperty("keepaliveIntervalSec"))
                if (!$util.isInteger(message.keepaliveIntervalSec))
                    return "keepaliveIntervalSec: integer expected";
            return null;
        };

        /**
         * Creates a KeepAliveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.KeepAliveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.KeepAliveRequest} KeepAliveRequest
         */
        KeepAliveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.KeepAliveRequest)
                return object;
            var message = new $root.AcFunDanmu.KeepAliveRequest();
            switch (object.presenceStatus) {
            case "kPresenceOffline":
            case 0:
                message.presenceStatus = 0;
                break;
            case "kPresenceOnline":
            case 1:
                message.presenceStatus = 1;
                break;
            }
            switch (object.appActiveStatus) {
            case "kInvalid":
            case 0:
                message.appActiveStatus = 0;
                break;
            case "kAppInForeground":
            case 1:
                message.appActiveStatus = 1;
                break;
            case "kAppInBackground":
            case 2:
                message.appActiveStatus = 2;
                break;
            }
            if (object.pushServiceToken != null) {
                if (typeof object.pushServiceToken !== "object")
                    throw TypeError(".AcFunDanmu.KeepAliveRequest.pushServiceToken: object expected");
                message.pushServiceToken = $root.AcFunDanmu.PushServiceToken.fromObject(object.pushServiceToken);
            }
            if (object.pushServiceTokenList) {
                if (!Array.isArray(object.pushServiceTokenList))
                    throw TypeError(".AcFunDanmu.KeepAliveRequest.pushServiceTokenList: array expected");
                message.pushServiceTokenList = [];
                for (var i = 0; i < object.pushServiceTokenList.length; ++i) {
                    if (typeof object.pushServiceTokenList[i] !== "object")
                        throw TypeError(".AcFunDanmu.KeepAliveRequest.pushServiceTokenList: object expected");
                    message.pushServiceTokenList[i] = $root.AcFunDanmu.PushServiceToken.fromObject(object.pushServiceTokenList[i]);
                }
            }
            if (object.keepaliveIntervalSec != null)
                message.keepaliveIntervalSec = object.keepaliveIntervalSec | 0;
            return message;
        };

        /**
         * Creates a plain object from a KeepAliveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.KeepAliveRequest
         * @static
         * @param {AcFunDanmu.KeepAliveRequest} message KeepAliveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeepAliveRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pushServiceTokenList = [];
            if (options.defaults) {
                object.presenceStatus = options.enums === String ? "kPresenceOffline" : 0;
                object.appActiveStatus = options.enums === String ? "kInvalid" : 0;
                object.pushServiceToken = null;
                object.keepaliveIntervalSec = 0;
            }
            if (message.presenceStatus != null && message.hasOwnProperty("presenceStatus"))
                object.presenceStatus = options.enums === String ? $root.AcFunDanmu.RegisterRequest.PresenceStatus[message.presenceStatus] : message.presenceStatus;
            if (message.appActiveStatus != null && message.hasOwnProperty("appActiveStatus"))
                object.appActiveStatus = options.enums === String ? $root.AcFunDanmu.RegisterRequest.ActiveStatus[message.appActiveStatus] : message.appActiveStatus;
            if (message.pushServiceToken != null && message.hasOwnProperty("pushServiceToken"))
                object.pushServiceToken = $root.AcFunDanmu.PushServiceToken.toObject(message.pushServiceToken, options);
            if (message.pushServiceTokenList && message.pushServiceTokenList.length) {
                object.pushServiceTokenList = [];
                for (var j = 0; j < message.pushServiceTokenList.length; ++j)
                    object.pushServiceTokenList[j] = $root.AcFunDanmu.PushServiceToken.toObject(message.pushServiceTokenList[j], options);
            }
            if (message.keepaliveIntervalSec != null && message.hasOwnProperty("keepaliveIntervalSec"))
                object.keepaliveIntervalSec = message.keepaliveIntervalSec;
            return object;
        };

        /**
         * Converts this KeepAliveRequest to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.KeepAliveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeepAliveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeepAliveRequest;
    })();

    AcFunDanmu.KeepAliveResponse = (function() {

        /**
         * Properties of a KeepAliveResponse.
         * @memberof AcFunDanmu
         * @interface IKeepAliveResponse
         * @property {AcFunDanmu.IAccessPointsConfig|null} [accessPointsConfig] KeepAliveResponse accessPointsConfig
         * @property {number|Long|null} [serverMsec] KeepAliveResponse serverMsec
         * @property {AcFunDanmu.IAccessPointsConfig|null} [accessPointsConfigIpv6] KeepAliveResponse accessPointsConfigIpv6
         */

        /**
         * Constructs a new KeepAliveResponse.
         * @memberof AcFunDanmu
         * @classdesc Represents a KeepAliveResponse.
         * @implements IKeepAliveResponse
         * @constructor
         * @param {AcFunDanmu.IKeepAliveResponse=} [properties] Properties to set
         */
        function KeepAliveResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeepAliveResponse accessPointsConfig.
         * @member {AcFunDanmu.IAccessPointsConfig|null|undefined} accessPointsConfig
         * @memberof AcFunDanmu.KeepAliveResponse
         * @instance
         */
        KeepAliveResponse.prototype.accessPointsConfig = null;

        /**
         * KeepAliveResponse serverMsec.
         * @member {number|Long} serverMsec
         * @memberof AcFunDanmu.KeepAliveResponse
         * @instance
         */
        KeepAliveResponse.prototype.serverMsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KeepAliveResponse accessPointsConfigIpv6.
         * @member {AcFunDanmu.IAccessPointsConfig|null|undefined} accessPointsConfigIpv6
         * @memberof AcFunDanmu.KeepAliveResponse
         * @instance
         */
        KeepAliveResponse.prototype.accessPointsConfigIpv6 = null;

        /**
         * Creates a new KeepAliveResponse instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.KeepAliveResponse
         * @static
         * @param {AcFunDanmu.IKeepAliveResponse=} [properties] Properties to set
         * @returns {AcFunDanmu.KeepAliveResponse} KeepAliveResponse instance
         */
        KeepAliveResponse.create = function create(properties) {
            return new KeepAliveResponse(properties);
        };

        /**
         * Encodes the specified KeepAliveResponse message. Does not implicitly {@link AcFunDanmu.KeepAliveResponse.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.KeepAliveResponse
         * @static
         * @param {AcFunDanmu.IKeepAliveResponse} message KeepAliveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepAliveResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accessPointsConfig != null && Object.hasOwnProperty.call(message, "accessPointsConfig"))
                $root.AcFunDanmu.AccessPointsConfig.encode(message.accessPointsConfig, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.serverMsec != null && Object.hasOwnProperty.call(message, "serverMsec"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.serverMsec);
            if (message.accessPointsConfigIpv6 != null && Object.hasOwnProperty.call(message, "accessPointsConfigIpv6"))
                $root.AcFunDanmu.AccessPointsConfig.encode(message.accessPointsConfigIpv6, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KeepAliveResponse message, length delimited. Does not implicitly {@link AcFunDanmu.KeepAliveResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.KeepAliveResponse
         * @static
         * @param {AcFunDanmu.IKeepAliveResponse} message KeepAliveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepAliveResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeepAliveResponse message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.KeepAliveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.KeepAliveResponse} KeepAliveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepAliveResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.KeepAliveResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accessPointsConfig = $root.AcFunDanmu.AccessPointsConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.serverMsec = reader.int64();
                    break;
                case 3:
                    message.accessPointsConfigIpv6 = $root.AcFunDanmu.AccessPointsConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KeepAliveResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.KeepAliveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.KeepAliveResponse} KeepAliveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepAliveResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeepAliveResponse message.
         * @function verify
         * @memberof AcFunDanmu.KeepAliveResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeepAliveResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accessPointsConfig != null && message.hasOwnProperty("accessPointsConfig")) {
                var error = $root.AcFunDanmu.AccessPointsConfig.verify(message.accessPointsConfig);
                if (error)
                    return "accessPointsConfig." + error;
            }
            if (message.serverMsec != null && message.hasOwnProperty("serverMsec"))
                if (!$util.isInteger(message.serverMsec) && !(message.serverMsec && $util.isInteger(message.serverMsec.low) && $util.isInteger(message.serverMsec.high)))
                    return "serverMsec: integer|Long expected";
            if (message.accessPointsConfigIpv6 != null && message.hasOwnProperty("accessPointsConfigIpv6")) {
                var error = $root.AcFunDanmu.AccessPointsConfig.verify(message.accessPointsConfigIpv6);
                if (error)
                    return "accessPointsConfigIpv6." + error;
            }
            return null;
        };

        /**
         * Creates a KeepAliveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.KeepAliveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.KeepAliveResponse} KeepAliveResponse
         */
        KeepAliveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.KeepAliveResponse)
                return object;
            var message = new $root.AcFunDanmu.KeepAliveResponse();
            if (object.accessPointsConfig != null) {
                if (typeof object.accessPointsConfig !== "object")
                    throw TypeError(".AcFunDanmu.KeepAliveResponse.accessPointsConfig: object expected");
                message.accessPointsConfig = $root.AcFunDanmu.AccessPointsConfig.fromObject(object.accessPointsConfig);
            }
            if (object.serverMsec != null)
                if ($util.Long)
                    (message.serverMsec = $util.Long.fromValue(object.serverMsec)).unsigned = false;
                else if (typeof object.serverMsec === "string")
                    message.serverMsec = parseInt(object.serverMsec, 10);
                else if (typeof object.serverMsec === "number")
                    message.serverMsec = object.serverMsec;
                else if (typeof object.serverMsec === "object")
                    message.serverMsec = new $util.LongBits(object.serverMsec.low >>> 0, object.serverMsec.high >>> 0).toNumber();
            if (object.accessPointsConfigIpv6 != null) {
                if (typeof object.accessPointsConfigIpv6 !== "object")
                    throw TypeError(".AcFunDanmu.KeepAliveResponse.accessPointsConfigIpv6: object expected");
                message.accessPointsConfigIpv6 = $root.AcFunDanmu.AccessPointsConfig.fromObject(object.accessPointsConfigIpv6);
            }
            return message;
        };

        /**
         * Creates a plain object from a KeepAliveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.KeepAliveResponse
         * @static
         * @param {AcFunDanmu.KeepAliveResponse} message KeepAliveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeepAliveResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accessPointsConfig = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverMsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverMsec = options.longs === String ? "0" : 0;
                object.accessPointsConfigIpv6 = null;
            }
            if (message.accessPointsConfig != null && message.hasOwnProperty("accessPointsConfig"))
                object.accessPointsConfig = $root.AcFunDanmu.AccessPointsConfig.toObject(message.accessPointsConfig, options);
            if (message.serverMsec != null && message.hasOwnProperty("serverMsec"))
                if (typeof message.serverMsec === "number")
                    object.serverMsec = options.longs === String ? String(message.serverMsec) : message.serverMsec;
                else
                    object.serverMsec = options.longs === String ? $util.Long.prototype.toString.call(message.serverMsec) : options.longs === Number ? new $util.LongBits(message.serverMsec.low >>> 0, message.serverMsec.high >>> 0).toNumber() : message.serverMsec;
            if (message.accessPointsConfigIpv6 != null && message.hasOwnProperty("accessPointsConfigIpv6"))
                object.accessPointsConfigIpv6 = $root.AcFunDanmu.AccessPointsConfig.toObject(message.accessPointsConfigIpv6, options);
            return object;
        };

        /**
         * Converts this KeepAliveResponse to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.KeepAliveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeepAliveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeepAliveResponse;
    })();

    AcFunDanmu.RegisterRequest = (function() {

        /**
         * Properties of a RegisterRequest.
         * @memberof AcFunDanmu
         * @interface IRegisterRequest
         * @property {AcFunDanmu.IAppInfo|null} [appInfo] RegisterRequest appInfo
         * @property {AcFunDanmu.IDeviceInfo|null} [deviceInfo] RegisterRequest deviceInfo
         * @property {AcFunDanmu.IEnvInfo|null} [envInfo] RegisterRequest envInfo
         * @property {AcFunDanmu.RegisterRequest.PresenceStatus|null} [presenceStatus] RegisterRequest presenceStatus
         * @property {AcFunDanmu.RegisterRequest.ActiveStatus|null} [appActiveStatus] RegisterRequest appActiveStatus
         * @property {Uint8Array|null} [appCustomStatus] RegisterRequest appCustomStatus
         * @property {AcFunDanmu.IPushServiceToken|null} [pushServiceToken] RegisterRequest pushServiceToken
         * @property {number|Long|null} [instanceId] RegisterRequest instanceId
         * @property {Array.<AcFunDanmu.IPushServiceToken>|null} [pushServiceTokenList] RegisterRequest pushServiceTokenList
         * @property {number|null} [keepaliveIntervalSec] RegisterRequest keepaliveIntervalSec
         * @property {AcFunDanmu.IZtCommonInfo|null} [ztCommonInfo] RegisterRequest ztCommonInfo
         */

        /**
         * Constructs a new RegisterRequest.
         * @memberof AcFunDanmu
         * @classdesc Represents a RegisterRequest.
         * @implements IRegisterRequest
         * @constructor
         * @param {AcFunDanmu.IRegisterRequest=} [properties] Properties to set
         */
        function RegisterRequest(properties) {
            this.pushServiceTokenList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterRequest appInfo.
         * @member {AcFunDanmu.IAppInfo|null|undefined} appInfo
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.appInfo = null;

        /**
         * RegisterRequest deviceInfo.
         * @member {AcFunDanmu.IDeviceInfo|null|undefined} deviceInfo
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.deviceInfo = null;

        /**
         * RegisterRequest envInfo.
         * @member {AcFunDanmu.IEnvInfo|null|undefined} envInfo
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.envInfo = null;

        /**
         * RegisterRequest presenceStatus.
         * @member {AcFunDanmu.RegisterRequest.PresenceStatus} presenceStatus
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.presenceStatus = 0;

        /**
         * RegisterRequest appActiveStatus.
         * @member {AcFunDanmu.RegisterRequest.ActiveStatus} appActiveStatus
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.appActiveStatus = 0;

        /**
         * RegisterRequest appCustomStatus.
         * @member {Uint8Array} appCustomStatus
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.appCustomStatus = $util.newBuffer([]);

        /**
         * RegisterRequest pushServiceToken.
         * @member {AcFunDanmu.IPushServiceToken|null|undefined} pushServiceToken
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.pushServiceToken = null;

        /**
         * RegisterRequest instanceId.
         * @member {number|Long} instanceId
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RegisterRequest pushServiceTokenList.
         * @member {Array.<AcFunDanmu.IPushServiceToken>} pushServiceTokenList
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.pushServiceTokenList = $util.emptyArray;

        /**
         * RegisterRequest keepaliveIntervalSec.
         * @member {number} keepaliveIntervalSec
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.keepaliveIntervalSec = 0;

        /**
         * RegisterRequest ztCommonInfo.
         * @member {AcFunDanmu.IZtCommonInfo|null|undefined} ztCommonInfo
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.ztCommonInfo = null;

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.RegisterRequest
         * @static
         * @param {AcFunDanmu.IRegisterRequest=} [properties] Properties to set
         * @returns {AcFunDanmu.RegisterRequest} RegisterRequest instance
         */
        RegisterRequest.create = function create(properties) {
            return new RegisterRequest(properties);
        };

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link AcFunDanmu.RegisterRequest.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.RegisterRequest
         * @static
         * @param {AcFunDanmu.IRegisterRequest} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appInfo != null && Object.hasOwnProperty.call(message, "appInfo"))
                $root.AcFunDanmu.AppInfo.encode(message.appInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.deviceInfo != null && Object.hasOwnProperty.call(message, "deviceInfo"))
                $root.AcFunDanmu.DeviceInfo.encode(message.deviceInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.envInfo != null && Object.hasOwnProperty.call(message, "envInfo"))
                $root.AcFunDanmu.EnvInfo.encode(message.envInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.presenceStatus != null && Object.hasOwnProperty.call(message, "presenceStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.presenceStatus);
            if (message.appActiveStatus != null && Object.hasOwnProperty.call(message, "appActiveStatus"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.appActiveStatus);
            if (message.appCustomStatus != null && Object.hasOwnProperty.call(message, "appCustomStatus"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.appCustomStatus);
            if (message.pushServiceToken != null && Object.hasOwnProperty.call(message, "pushServiceToken"))
                $root.AcFunDanmu.PushServiceToken.encode(message.pushServiceToken, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.instanceId);
            if (message.pushServiceTokenList != null && message.pushServiceTokenList.length)
                for (var i = 0; i < message.pushServiceTokenList.length; ++i)
                    $root.AcFunDanmu.PushServiceToken.encode(message.pushServiceTokenList[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.keepaliveIntervalSec != null && Object.hasOwnProperty.call(message, "keepaliveIntervalSec"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.keepaliveIntervalSec);
            if (message.ztCommonInfo != null && Object.hasOwnProperty.call(message, "ztCommonInfo"))
                $root.AcFunDanmu.ZtCommonInfo.encode(message.ztCommonInfo, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link AcFunDanmu.RegisterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.RegisterRequest
         * @static
         * @param {AcFunDanmu.IRegisterRequest} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.RegisterRequest} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.RegisterRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appInfo = $root.AcFunDanmu.AppInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deviceInfo = $root.AcFunDanmu.DeviceInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.envInfo = $root.AcFunDanmu.EnvInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.presenceStatus = reader.int32();
                    break;
                case 5:
                    message.appActiveStatus = reader.int32();
                    break;
                case 6:
                    message.appCustomStatus = reader.bytes();
                    break;
                case 7:
                    message.pushServiceToken = $root.AcFunDanmu.PushServiceToken.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.instanceId = reader.int64();
                    break;
                case 9:
                    if (!(message.pushServiceTokenList && message.pushServiceTokenList.length))
                        message.pushServiceTokenList = [];
                    message.pushServiceTokenList.push($root.AcFunDanmu.PushServiceToken.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.keepaliveIntervalSec = reader.int32();
                    break;
                case 11:
                    message.ztCommonInfo = $root.AcFunDanmu.ZtCommonInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.RegisterRequest} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterRequest message.
         * @function verify
         * @memberof AcFunDanmu.RegisterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appInfo != null && message.hasOwnProperty("appInfo")) {
                var error = $root.AcFunDanmu.AppInfo.verify(message.appInfo);
                if (error)
                    return "appInfo." + error;
            }
            if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo")) {
                var error = $root.AcFunDanmu.DeviceInfo.verify(message.deviceInfo);
                if (error)
                    return "deviceInfo." + error;
            }
            if (message.envInfo != null && message.hasOwnProperty("envInfo")) {
                var error = $root.AcFunDanmu.EnvInfo.verify(message.envInfo);
                if (error)
                    return "envInfo." + error;
            }
            if (message.presenceStatus != null && message.hasOwnProperty("presenceStatus"))
                switch (message.presenceStatus) {
                default:
                    return "presenceStatus: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.appActiveStatus != null && message.hasOwnProperty("appActiveStatus"))
                switch (message.appActiveStatus) {
                default:
                    return "appActiveStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.appCustomStatus != null && message.hasOwnProperty("appCustomStatus"))
                if (!(message.appCustomStatus && typeof message.appCustomStatus.length === "number" || $util.isString(message.appCustomStatus)))
                    return "appCustomStatus: buffer expected";
            if (message.pushServiceToken != null && message.hasOwnProperty("pushServiceToken")) {
                var error = $root.AcFunDanmu.PushServiceToken.verify(message.pushServiceToken);
                if (error)
                    return "pushServiceToken." + error;
            }
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            if (message.pushServiceTokenList != null && message.hasOwnProperty("pushServiceTokenList")) {
                if (!Array.isArray(message.pushServiceTokenList))
                    return "pushServiceTokenList: array expected";
                for (var i = 0; i < message.pushServiceTokenList.length; ++i) {
                    var error = $root.AcFunDanmu.PushServiceToken.verify(message.pushServiceTokenList[i]);
                    if (error)
                        return "pushServiceTokenList." + error;
                }
            }
            if (message.keepaliveIntervalSec != null && message.hasOwnProperty("keepaliveIntervalSec"))
                if (!$util.isInteger(message.keepaliveIntervalSec))
                    return "keepaliveIntervalSec: integer expected";
            if (message.ztCommonInfo != null && message.hasOwnProperty("ztCommonInfo")) {
                var error = $root.AcFunDanmu.ZtCommonInfo.verify(message.ztCommonInfo);
                if (error)
                    return "ztCommonInfo." + error;
            }
            return null;
        };

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.RegisterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.RegisterRequest} RegisterRequest
         */
        RegisterRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.RegisterRequest)
                return object;
            var message = new $root.AcFunDanmu.RegisterRequest();
            if (object.appInfo != null) {
                if (typeof object.appInfo !== "object")
                    throw TypeError(".AcFunDanmu.RegisterRequest.appInfo: object expected");
                message.appInfo = $root.AcFunDanmu.AppInfo.fromObject(object.appInfo);
            }
            if (object.deviceInfo != null) {
                if (typeof object.deviceInfo !== "object")
                    throw TypeError(".AcFunDanmu.RegisterRequest.deviceInfo: object expected");
                message.deviceInfo = $root.AcFunDanmu.DeviceInfo.fromObject(object.deviceInfo);
            }
            if (object.envInfo != null) {
                if (typeof object.envInfo !== "object")
                    throw TypeError(".AcFunDanmu.RegisterRequest.envInfo: object expected");
                message.envInfo = $root.AcFunDanmu.EnvInfo.fromObject(object.envInfo);
            }
            switch (object.presenceStatus) {
            case "kPresenceOffline":
            case 0:
                message.presenceStatus = 0;
                break;
            case "kPresenceOnline":
            case 1:
                message.presenceStatus = 1;
                break;
            }
            switch (object.appActiveStatus) {
            case "kInvalid":
            case 0:
                message.appActiveStatus = 0;
                break;
            case "kAppInForeground":
            case 1:
                message.appActiveStatus = 1;
                break;
            case "kAppInBackground":
            case 2:
                message.appActiveStatus = 2;
                break;
            }
            if (object.appCustomStatus != null)
                if (typeof object.appCustomStatus === "string")
                    $util.base64.decode(object.appCustomStatus, message.appCustomStatus = $util.newBuffer($util.base64.length(object.appCustomStatus)), 0);
                else if (object.appCustomStatus.length)
                    message.appCustomStatus = object.appCustomStatus;
            if (object.pushServiceToken != null) {
                if (typeof object.pushServiceToken !== "object")
                    throw TypeError(".AcFunDanmu.RegisterRequest.pushServiceToken: object expected");
                message.pushServiceToken = $root.AcFunDanmu.PushServiceToken.fromObject(object.pushServiceToken);
            }
            if (object.instanceId != null)
                if ($util.Long)
                    (message.instanceId = $util.Long.fromValue(object.instanceId)).unsigned = false;
                else if (typeof object.instanceId === "string")
                    message.instanceId = parseInt(object.instanceId, 10);
                else if (typeof object.instanceId === "number")
                    message.instanceId = object.instanceId;
                else if (typeof object.instanceId === "object")
                    message.instanceId = new $util.LongBits(object.instanceId.low >>> 0, object.instanceId.high >>> 0).toNumber();
            if (object.pushServiceTokenList) {
                if (!Array.isArray(object.pushServiceTokenList))
                    throw TypeError(".AcFunDanmu.RegisterRequest.pushServiceTokenList: array expected");
                message.pushServiceTokenList = [];
                for (var i = 0; i < object.pushServiceTokenList.length; ++i) {
                    if (typeof object.pushServiceTokenList[i] !== "object")
                        throw TypeError(".AcFunDanmu.RegisterRequest.pushServiceTokenList: object expected");
                    message.pushServiceTokenList[i] = $root.AcFunDanmu.PushServiceToken.fromObject(object.pushServiceTokenList[i]);
                }
            }
            if (object.keepaliveIntervalSec != null)
                message.keepaliveIntervalSec = object.keepaliveIntervalSec | 0;
            if (object.ztCommonInfo != null) {
                if (typeof object.ztCommonInfo !== "object")
                    throw TypeError(".AcFunDanmu.RegisterRequest.ztCommonInfo: object expected");
                message.ztCommonInfo = $root.AcFunDanmu.ZtCommonInfo.fromObject(object.ztCommonInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.RegisterRequest
         * @static
         * @param {AcFunDanmu.RegisterRequest} message RegisterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pushServiceTokenList = [];
            if (options.defaults) {
                object.appInfo = null;
                object.deviceInfo = null;
                object.envInfo = null;
                object.presenceStatus = options.enums === String ? "kPresenceOffline" : 0;
                object.appActiveStatus = options.enums === String ? "kInvalid" : 0;
                if (options.bytes === String)
                    object.appCustomStatus = "";
                else {
                    object.appCustomStatus = [];
                    if (options.bytes !== Array)
                        object.appCustomStatus = $util.newBuffer(object.appCustomStatus);
                }
                object.pushServiceToken = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
                object.keepaliveIntervalSec = 0;
                object.ztCommonInfo = null;
            }
            if (message.appInfo != null && message.hasOwnProperty("appInfo"))
                object.appInfo = $root.AcFunDanmu.AppInfo.toObject(message.appInfo, options);
            if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
                object.deviceInfo = $root.AcFunDanmu.DeviceInfo.toObject(message.deviceInfo, options);
            if (message.envInfo != null && message.hasOwnProperty("envInfo"))
                object.envInfo = $root.AcFunDanmu.EnvInfo.toObject(message.envInfo, options);
            if (message.presenceStatus != null && message.hasOwnProperty("presenceStatus"))
                object.presenceStatus = options.enums === String ? $root.AcFunDanmu.RegisterRequest.PresenceStatus[message.presenceStatus] : message.presenceStatus;
            if (message.appActiveStatus != null && message.hasOwnProperty("appActiveStatus"))
                object.appActiveStatus = options.enums === String ? $root.AcFunDanmu.RegisterRequest.ActiveStatus[message.appActiveStatus] : message.appActiveStatus;
            if (message.appCustomStatus != null && message.hasOwnProperty("appCustomStatus"))
                object.appCustomStatus = options.bytes === String ? $util.base64.encode(message.appCustomStatus, 0, message.appCustomStatus.length) : options.bytes === Array ? Array.prototype.slice.call(message.appCustomStatus) : message.appCustomStatus;
            if (message.pushServiceToken != null && message.hasOwnProperty("pushServiceToken"))
                object.pushServiceToken = $root.AcFunDanmu.PushServiceToken.toObject(message.pushServiceToken, options);
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            if (message.pushServiceTokenList && message.pushServiceTokenList.length) {
                object.pushServiceTokenList = [];
                for (var j = 0; j < message.pushServiceTokenList.length; ++j)
                    object.pushServiceTokenList[j] = $root.AcFunDanmu.PushServiceToken.toObject(message.pushServiceTokenList[j], options);
            }
            if (message.keepaliveIntervalSec != null && message.hasOwnProperty("keepaliveIntervalSec"))
                object.keepaliveIntervalSec = message.keepaliveIntervalSec;
            if (message.ztCommonInfo != null && message.hasOwnProperty("ztCommonInfo"))
                object.ztCommonInfo = $root.AcFunDanmu.ZtCommonInfo.toObject(message.ztCommonInfo, options);
            return object;
        };

        /**
         * Converts this RegisterRequest to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.RegisterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * PresenceStatus enum.
         * @name AcFunDanmu.RegisterRequest.PresenceStatus
         * @enum {number}
         * @property {number} kPresenceOffline=0 kPresenceOffline value
         * @property {number} kPresenceOnline=1 kPresenceOnline value
         */
        RegisterRequest.PresenceStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kPresenceOffline"] = 0;
            values[valuesById[1] = "kPresenceOnline"] = 1;
            return values;
        })();

        /**
         * ActiveStatus enum.
         * @name AcFunDanmu.RegisterRequest.ActiveStatus
         * @enum {number}
         * @property {number} kInvalid=0 kInvalid value
         * @property {number} kAppInForeground=1 kAppInForeground value
         * @property {number} kAppInBackground=2 kAppInBackground value
         */
        RegisterRequest.ActiveStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kInvalid"] = 0;
            values[valuesById[1] = "kAppInForeground"] = 1;
            values[valuesById[2] = "kAppInBackground"] = 2;
            return values;
        })();

        return RegisterRequest;
    })();

    AcFunDanmu.RegisterResponse = (function() {

        /**
         * Properties of a RegisterResponse.
         * @memberof AcFunDanmu
         * @interface IRegisterResponse
         * @property {AcFunDanmu.IAccessPointsConfig|null} [accessPointsConfig] RegisterResponse accessPointsConfig
         * @property {Uint8Array|null} [sessKey] RegisterResponse sessKey
         * @property {number|Long|null} [instanceId] RegisterResponse instanceId
         * @property {AcFunDanmu.ISdkOption|null} [sdkOption] RegisterResponse sdkOption
         * @property {AcFunDanmu.IAccessPointsConfig|null} [accessPointsCOnfigIpv6] RegisterResponse accessPointsCOnfigIpv6
         */

        /**
         * Constructs a new RegisterResponse.
         * @memberof AcFunDanmu
         * @classdesc Represents a RegisterResponse.
         * @implements IRegisterResponse
         * @constructor
         * @param {AcFunDanmu.IRegisterResponse=} [properties] Properties to set
         */
        function RegisterResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterResponse accessPointsConfig.
         * @member {AcFunDanmu.IAccessPointsConfig|null|undefined} accessPointsConfig
         * @memberof AcFunDanmu.RegisterResponse
         * @instance
         */
        RegisterResponse.prototype.accessPointsConfig = null;

        /**
         * RegisterResponse sessKey.
         * @member {Uint8Array} sessKey
         * @memberof AcFunDanmu.RegisterResponse
         * @instance
         */
        RegisterResponse.prototype.sessKey = $util.newBuffer([]);

        /**
         * RegisterResponse instanceId.
         * @member {number|Long} instanceId
         * @memberof AcFunDanmu.RegisterResponse
         * @instance
         */
        RegisterResponse.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RegisterResponse sdkOption.
         * @member {AcFunDanmu.ISdkOption|null|undefined} sdkOption
         * @memberof AcFunDanmu.RegisterResponse
         * @instance
         */
        RegisterResponse.prototype.sdkOption = null;

        /**
         * RegisterResponse accessPointsCOnfigIpv6.
         * @member {AcFunDanmu.IAccessPointsConfig|null|undefined} accessPointsCOnfigIpv6
         * @memberof AcFunDanmu.RegisterResponse
         * @instance
         */
        RegisterResponse.prototype.accessPointsCOnfigIpv6 = null;

        /**
         * Creates a new RegisterResponse instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.RegisterResponse
         * @static
         * @param {AcFunDanmu.IRegisterResponse=} [properties] Properties to set
         * @returns {AcFunDanmu.RegisterResponse} RegisterResponse instance
         */
        RegisterResponse.create = function create(properties) {
            return new RegisterResponse(properties);
        };

        /**
         * Encodes the specified RegisterResponse message. Does not implicitly {@link AcFunDanmu.RegisterResponse.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.RegisterResponse
         * @static
         * @param {AcFunDanmu.IRegisterResponse} message RegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accessPointsConfig != null && Object.hasOwnProperty.call(message, "accessPointsConfig"))
                $root.AcFunDanmu.AccessPointsConfig.encode(message.accessPointsConfig, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sessKey != null && Object.hasOwnProperty.call(message, "sessKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.sessKey);
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.instanceId);
            if (message.sdkOption != null && Object.hasOwnProperty.call(message, "sdkOption"))
                $root.AcFunDanmu.SdkOption.encode(message.sdkOption, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.accessPointsCOnfigIpv6 != null && Object.hasOwnProperty.call(message, "accessPointsCOnfigIpv6"))
                $root.AcFunDanmu.AccessPointsConfig.encode(message.accessPointsCOnfigIpv6, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RegisterResponse message, length delimited. Does not implicitly {@link AcFunDanmu.RegisterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.RegisterResponse
         * @static
         * @param {AcFunDanmu.IRegisterResponse} message RegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.RegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.RegisterResponse} RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.RegisterResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accessPointsConfig = $root.AcFunDanmu.AccessPointsConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sessKey = reader.bytes();
                    break;
                case 3:
                    message.instanceId = reader.int64();
                    break;
                case 4:
                    message.sdkOption = $root.AcFunDanmu.SdkOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.accessPointsCOnfigIpv6 = $root.AcFunDanmu.AccessPointsConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.RegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.RegisterResponse} RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterResponse message.
         * @function verify
         * @memberof AcFunDanmu.RegisterResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accessPointsConfig != null && message.hasOwnProperty("accessPointsConfig")) {
                var error = $root.AcFunDanmu.AccessPointsConfig.verify(message.accessPointsConfig);
                if (error)
                    return "accessPointsConfig." + error;
            }
            if (message.sessKey != null && message.hasOwnProperty("sessKey"))
                if (!(message.sessKey && typeof message.sessKey.length === "number" || $util.isString(message.sessKey)))
                    return "sessKey: buffer expected";
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            if (message.sdkOption != null && message.hasOwnProperty("sdkOption")) {
                var error = $root.AcFunDanmu.SdkOption.verify(message.sdkOption);
                if (error)
                    return "sdkOption." + error;
            }
            if (message.accessPointsCOnfigIpv6 != null && message.hasOwnProperty("accessPointsCOnfigIpv6")) {
                var error = $root.AcFunDanmu.AccessPointsConfig.verify(message.accessPointsCOnfigIpv6);
                if (error)
                    return "accessPointsCOnfigIpv6." + error;
            }
            return null;
        };

        /**
         * Creates a RegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.RegisterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.RegisterResponse} RegisterResponse
         */
        RegisterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.RegisterResponse)
                return object;
            var message = new $root.AcFunDanmu.RegisterResponse();
            if (object.accessPointsConfig != null) {
                if (typeof object.accessPointsConfig !== "object")
                    throw TypeError(".AcFunDanmu.RegisterResponse.accessPointsConfig: object expected");
                message.accessPointsConfig = $root.AcFunDanmu.AccessPointsConfig.fromObject(object.accessPointsConfig);
            }
            if (object.sessKey != null)
                if (typeof object.sessKey === "string")
                    $util.base64.decode(object.sessKey, message.sessKey = $util.newBuffer($util.base64.length(object.sessKey)), 0);
                else if (object.sessKey.length)
                    message.sessKey = object.sessKey;
            if (object.instanceId != null)
                if ($util.Long)
                    (message.instanceId = $util.Long.fromValue(object.instanceId)).unsigned = false;
                else if (typeof object.instanceId === "string")
                    message.instanceId = parseInt(object.instanceId, 10);
                else if (typeof object.instanceId === "number")
                    message.instanceId = object.instanceId;
                else if (typeof object.instanceId === "object")
                    message.instanceId = new $util.LongBits(object.instanceId.low >>> 0, object.instanceId.high >>> 0).toNumber();
            if (object.sdkOption != null) {
                if (typeof object.sdkOption !== "object")
                    throw TypeError(".AcFunDanmu.RegisterResponse.sdkOption: object expected");
                message.sdkOption = $root.AcFunDanmu.SdkOption.fromObject(object.sdkOption);
            }
            if (object.accessPointsCOnfigIpv6 != null) {
                if (typeof object.accessPointsCOnfigIpv6 !== "object")
                    throw TypeError(".AcFunDanmu.RegisterResponse.accessPointsCOnfigIpv6: object expected");
                message.accessPointsCOnfigIpv6 = $root.AcFunDanmu.AccessPointsConfig.fromObject(object.accessPointsCOnfigIpv6);
            }
            return message;
        };

        /**
         * Creates a plain object from a RegisterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.RegisterResponse
         * @static
         * @param {AcFunDanmu.RegisterResponse} message RegisterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accessPointsConfig = null;
                if (options.bytes === String)
                    object.sessKey = "";
                else {
                    object.sessKey = [];
                    if (options.bytes !== Array)
                        object.sessKey = $util.newBuffer(object.sessKey);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
                object.sdkOption = null;
                object.accessPointsCOnfigIpv6 = null;
            }
            if (message.accessPointsConfig != null && message.hasOwnProperty("accessPointsConfig"))
                object.accessPointsConfig = $root.AcFunDanmu.AccessPointsConfig.toObject(message.accessPointsConfig, options);
            if (message.sessKey != null && message.hasOwnProperty("sessKey"))
                object.sessKey = options.bytes === String ? $util.base64.encode(message.sessKey, 0, message.sessKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.sessKey) : message.sessKey;
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            if (message.sdkOption != null && message.hasOwnProperty("sdkOption"))
                object.sdkOption = $root.AcFunDanmu.SdkOption.toObject(message.sdkOption, options);
            if (message.accessPointsCOnfigIpv6 != null && message.hasOwnProperty("accessPointsCOnfigIpv6"))
                object.accessPointsCOnfigIpv6 = $root.AcFunDanmu.AccessPointsConfig.toObject(message.accessPointsCOnfigIpv6, options);
            return object;
        };

        /**
         * Converts this RegisterResponse to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.RegisterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterResponse;
    })();

    AcFunDanmu.AppInfo = (function() {

        /**
         * Properties of an AppInfo.
         * @memberof AcFunDanmu
         * @interface IAppInfo
         * @property {string|null} [appName] AppInfo appName
         * @property {string|null} [appVersion] AppInfo appVersion
         * @property {string|null} [appChannel] AppInfo appChannel
         * @property {string|null} [sdkVersion] AppInfo sdkVersion
         * @property {Object.<string,string>|null} [extensionInfo] AppInfo extensionInfo
         */

        /**
         * Constructs a new AppInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents an AppInfo.
         * @implements IAppInfo
         * @constructor
         * @param {AcFunDanmu.IAppInfo=} [properties] Properties to set
         */
        function AppInfo(properties) {
            this.extensionInfo = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppInfo appName.
         * @member {string} appName
         * @memberof AcFunDanmu.AppInfo
         * @instance
         */
        AppInfo.prototype.appName = "";

        /**
         * AppInfo appVersion.
         * @member {string} appVersion
         * @memberof AcFunDanmu.AppInfo
         * @instance
         */
        AppInfo.prototype.appVersion = "";

        /**
         * AppInfo appChannel.
         * @member {string} appChannel
         * @memberof AcFunDanmu.AppInfo
         * @instance
         */
        AppInfo.prototype.appChannel = "";

        /**
         * AppInfo sdkVersion.
         * @member {string} sdkVersion
         * @memberof AcFunDanmu.AppInfo
         * @instance
         */
        AppInfo.prototype.sdkVersion = "";

        /**
         * AppInfo extensionInfo.
         * @member {Object.<string,string>} extensionInfo
         * @memberof AcFunDanmu.AppInfo
         * @instance
         */
        AppInfo.prototype.extensionInfo = $util.emptyObject;

        /**
         * Creates a new AppInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.AppInfo
         * @static
         * @param {AcFunDanmu.IAppInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.AppInfo} AppInfo instance
         */
        AppInfo.create = function create(properties) {
            return new AppInfo(properties);
        };

        /**
         * Encodes the specified AppInfo message. Does not implicitly {@link AcFunDanmu.AppInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.AppInfo
         * @static
         * @param {AcFunDanmu.IAppInfo} message AppInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appName != null && Object.hasOwnProperty.call(message, "appName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appName);
            if (message.appVersion != null && Object.hasOwnProperty.call(message, "appVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appVersion);
            if (message.appChannel != null && Object.hasOwnProperty.call(message, "appChannel"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.appChannel);
            if (message.sdkVersion != null && Object.hasOwnProperty.call(message, "sdkVersion"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sdkVersion);
            if (message.extensionInfo != null && Object.hasOwnProperty.call(message, "extensionInfo"))
                for (var keys = Object.keys(message.extensionInfo), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.extensionInfo[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AppInfo message, length delimited. Does not implicitly {@link AcFunDanmu.AppInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.AppInfo
         * @static
         * @param {AcFunDanmu.IAppInfo} message AppInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.AppInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.AppInfo} AppInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.AppInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appName = reader.string();
                    break;
                case 2:
                    message.appVersion = reader.string();
                    break;
                case 3:
                    message.appChannel = reader.string();
                    break;
                case 4:
                    message.sdkVersion = reader.string();
                    break;
                case 11:
                    if (message.extensionInfo === $util.emptyObject)
                        message.extensionInfo = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.extensionInfo[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AppInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.AppInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.AppInfo} AppInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppInfo message.
         * @function verify
         * @memberof AcFunDanmu.AppInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appName != null && message.hasOwnProperty("appName"))
                if (!$util.isString(message.appName))
                    return "appName: string expected";
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                if (!$util.isString(message.appVersion))
                    return "appVersion: string expected";
            if (message.appChannel != null && message.hasOwnProperty("appChannel"))
                if (!$util.isString(message.appChannel))
                    return "appChannel: string expected";
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                if (!$util.isString(message.sdkVersion))
                    return "sdkVersion: string expected";
            if (message.extensionInfo != null && message.hasOwnProperty("extensionInfo")) {
                if (!$util.isObject(message.extensionInfo))
                    return "extensionInfo: object expected";
                var key = Object.keys(message.extensionInfo);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.extensionInfo[key[i]]))
                        return "extensionInfo: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an AppInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.AppInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.AppInfo} AppInfo
         */
        AppInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.AppInfo)
                return object;
            var message = new $root.AcFunDanmu.AppInfo();
            if (object.appName != null)
                message.appName = String(object.appName);
            if (object.appVersion != null)
                message.appVersion = String(object.appVersion);
            if (object.appChannel != null)
                message.appChannel = String(object.appChannel);
            if (object.sdkVersion != null)
                message.sdkVersion = String(object.sdkVersion);
            if (object.extensionInfo) {
                if (typeof object.extensionInfo !== "object")
                    throw TypeError(".AcFunDanmu.AppInfo.extensionInfo: object expected");
                message.extensionInfo = {};
                for (var keys = Object.keys(object.extensionInfo), i = 0; i < keys.length; ++i)
                    message.extensionInfo[keys[i]] = String(object.extensionInfo[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AppInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.AppInfo
         * @static
         * @param {AcFunDanmu.AppInfo} message AppInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.extensionInfo = {};
            if (options.defaults) {
                object.appName = "";
                object.appVersion = "";
                object.appChannel = "";
                object.sdkVersion = "";
            }
            if (message.appName != null && message.hasOwnProperty("appName"))
                object.appName = message.appName;
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                object.appVersion = message.appVersion;
            if (message.appChannel != null && message.hasOwnProperty("appChannel"))
                object.appChannel = message.appChannel;
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                object.sdkVersion = message.sdkVersion;
            var keys2;
            if (message.extensionInfo && (keys2 = Object.keys(message.extensionInfo)).length) {
                object.extensionInfo = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.extensionInfo[keys2[j]] = message.extensionInfo[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this AppInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.AppInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AppInfo;
    })();

    AcFunDanmu.DeviceInfo = (function() {

        /**
         * Properties of a DeviceInfo.
         * @memberof AcFunDanmu
         * @interface IDeviceInfo
         * @property {AcFunDanmu.DeviceInfo.PlatformType|null} [platformType] DeviceInfo platformType
         * @property {string|null} [osVersion] DeviceInfo osVersion
         * @property {string|null} [deviceModel] DeviceInfo deviceModel
         * @property {Uint8Array|null} [imeiMd5] DeviceInfo imeiMd5
         * @property {string|null} [deviceId] DeviceInfo deviceId
         * @property {string|null} [softDid] DeviceInfo softDid
         * @property {string|null} [kwaiDid] DeviceInfo kwaiDid
         * @property {string|null} [manufacturer] DeviceInfo manufacturer
         * @property {string|null} [deviceName] DeviceInfo deviceName
         */

        /**
         * Constructs a new DeviceInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a DeviceInfo.
         * @implements IDeviceInfo
         * @constructor
         * @param {AcFunDanmu.IDeviceInfo=} [properties] Properties to set
         */
        function DeviceInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceInfo platformType.
         * @member {AcFunDanmu.DeviceInfo.PlatformType} platformType
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.platformType = 0;

        /**
         * DeviceInfo osVersion.
         * @member {string} osVersion
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.osVersion = "";

        /**
         * DeviceInfo deviceModel.
         * @member {string} deviceModel
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.deviceModel = "";

        /**
         * DeviceInfo imeiMd5.
         * @member {Uint8Array} imeiMd5
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.imeiMd5 = $util.newBuffer([]);

        /**
         * DeviceInfo deviceId.
         * @member {string} deviceId
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.deviceId = "";

        /**
         * DeviceInfo softDid.
         * @member {string} softDid
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.softDid = "";

        /**
         * DeviceInfo kwaiDid.
         * @member {string} kwaiDid
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.kwaiDid = "";

        /**
         * DeviceInfo manufacturer.
         * @member {string} manufacturer
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.manufacturer = "";

        /**
         * DeviceInfo deviceName.
         * @member {string} deviceName
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.deviceName = "";

        /**
         * Creates a new DeviceInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.DeviceInfo
         * @static
         * @param {AcFunDanmu.IDeviceInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.DeviceInfo} DeviceInfo instance
         */
        DeviceInfo.create = function create(properties) {
            return new DeviceInfo(properties);
        };

        /**
         * Encodes the specified DeviceInfo message. Does not implicitly {@link AcFunDanmu.DeviceInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.DeviceInfo
         * @static
         * @param {AcFunDanmu.IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platformType != null && Object.hasOwnProperty.call(message, "platformType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.platformType);
            if (message.osVersion != null && Object.hasOwnProperty.call(message, "osVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.osVersion);
            if (message.deviceModel != null && Object.hasOwnProperty.call(message, "deviceModel"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.deviceModel);
            if (message.imeiMd5 != null && Object.hasOwnProperty.call(message, "imeiMd5"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.imeiMd5);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceId);
            if (message.softDid != null && Object.hasOwnProperty.call(message, "softDid"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.softDid);
            if (message.kwaiDid != null && Object.hasOwnProperty.call(message, "kwaiDid"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.kwaiDid);
            if (message.manufacturer != null && Object.hasOwnProperty.call(message, "manufacturer"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.manufacturer);
            if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.deviceName);
            return writer;
        };

        /**
         * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link AcFunDanmu.DeviceInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.DeviceInfo
         * @static
         * @param {AcFunDanmu.IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.DeviceInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platformType = reader.int32();
                    break;
                case 2:
                    message.osVersion = reader.string();
                    break;
                case 3:
                    message.deviceModel = reader.string();
                    break;
                case 4:
                    message.imeiMd5 = reader.bytes();
                    break;
                case 5:
                    message.deviceId = reader.string();
                    break;
                case 6:
                    message.softDid = reader.string();
                    break;
                case 7:
                    message.kwaiDid = reader.string();
                    break;
                case 8:
                    message.manufacturer = reader.string();
                    break;
                case 9:
                    message.deviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceInfo message.
         * @function verify
         * @memberof AcFunDanmu.DeviceInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                switch (message.platformType) {
                default:
                    return "platformType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    break;
                }
            if (message.osVersion != null && message.hasOwnProperty("osVersion"))
                if (!$util.isString(message.osVersion))
                    return "osVersion: string expected";
            if (message.deviceModel != null && message.hasOwnProperty("deviceModel"))
                if (!$util.isString(message.deviceModel))
                    return "deviceModel: string expected";
            if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
                if (!(message.imeiMd5 && typeof message.imeiMd5.length === "number" || $util.isString(message.imeiMd5)))
                    return "imeiMd5: buffer expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.softDid != null && message.hasOwnProperty("softDid"))
                if (!$util.isString(message.softDid))
                    return "softDid: string expected";
            if (message.kwaiDid != null && message.hasOwnProperty("kwaiDid"))
                if (!$util.isString(message.kwaiDid))
                    return "kwaiDid: string expected";
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                if (!$util.isString(message.manufacturer))
                    return "manufacturer: string expected";
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                if (!$util.isString(message.deviceName))
                    return "deviceName: string expected";
            return null;
        };

        /**
         * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.DeviceInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.DeviceInfo} DeviceInfo
         */
        DeviceInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.DeviceInfo)
                return object;
            var message = new $root.AcFunDanmu.DeviceInfo();
            switch (object.platformType) {
            case "kInvalid":
            case 0:
                message.platformType = 0;
                break;
            case "kAndroid":
            case 1:
                message.platformType = 1;
                break;
            case "kiOS":
            case 2:
                message.platformType = 2;
                break;
            case "kWindows":
            case 3:
                message.platformType = 3;
                break;
            case "WECHAT_ANDROID":
            case 4:
                message.platformType = 4;
                break;
            case "WECHAT_IOS":
            case 5:
                message.platformType = 5;
                break;
            case "H5":
            case 6:
                message.platformType = 6;
                break;
            case "H5_ANDROID":
            case 7:
                message.platformType = 7;
                break;
            case "H5_IOS":
            case 8:
                message.platformType = 8;
                break;
            case "H5_WINDOWS":
            case 9:
                message.platformType = 9;
                break;
            case "H5_MAC":
            case 10:
                message.platformType = 10;
                break;
            case "kPlatformNum":
            case 11:
                message.platformType = 11;
                break;
            }
            if (object.osVersion != null)
                message.osVersion = String(object.osVersion);
            if (object.deviceModel != null)
                message.deviceModel = String(object.deviceModel);
            if (object.imeiMd5 != null)
                if (typeof object.imeiMd5 === "string")
                    $util.base64.decode(object.imeiMd5, message.imeiMd5 = $util.newBuffer($util.base64.length(object.imeiMd5)), 0);
                else if (object.imeiMd5.length)
                    message.imeiMd5 = object.imeiMd5;
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.softDid != null)
                message.softDid = String(object.softDid);
            if (object.kwaiDid != null)
                message.kwaiDid = String(object.kwaiDid);
            if (object.manufacturer != null)
                message.manufacturer = String(object.manufacturer);
            if (object.deviceName != null)
                message.deviceName = String(object.deviceName);
            return message;
        };

        /**
         * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.DeviceInfo
         * @static
         * @param {AcFunDanmu.DeviceInfo} message DeviceInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platformType = options.enums === String ? "kInvalid" : 0;
                object.osVersion = "";
                object.deviceModel = "";
                if (options.bytes === String)
                    object.imeiMd5 = "";
                else {
                    object.imeiMd5 = [];
                    if (options.bytes !== Array)
                        object.imeiMd5 = $util.newBuffer(object.imeiMd5);
                }
                object.deviceId = "";
                object.softDid = "";
                object.kwaiDid = "";
                object.manufacturer = "";
                object.deviceName = "";
            }
            if (message.platformType != null && message.hasOwnProperty("platformType"))
                object.platformType = options.enums === String ? $root.AcFunDanmu.DeviceInfo.PlatformType[message.platformType] : message.platformType;
            if (message.osVersion != null && message.hasOwnProperty("osVersion"))
                object.osVersion = message.osVersion;
            if (message.deviceModel != null && message.hasOwnProperty("deviceModel"))
                object.deviceModel = message.deviceModel;
            if (message.imeiMd5 != null && message.hasOwnProperty("imeiMd5"))
                object.imeiMd5 = options.bytes === String ? $util.base64.encode(message.imeiMd5, 0, message.imeiMd5.length) : options.bytes === Array ? Array.prototype.slice.call(message.imeiMd5) : message.imeiMd5;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.softDid != null && message.hasOwnProperty("softDid"))
                object.softDid = message.softDid;
            if (message.kwaiDid != null && message.hasOwnProperty("kwaiDid"))
                object.kwaiDid = message.kwaiDid;
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                object.manufacturer = message.manufacturer;
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            return object;
        };

        /**
         * Converts this DeviceInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.DeviceInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * PlatformType enum.
         * @name AcFunDanmu.DeviceInfo.PlatformType
         * @enum {number}
         * @property {number} kInvalid=0 kInvalid value
         * @property {number} kAndroid=1 kAndroid value
         * @property {number} kiOS=2 kiOS value
         * @property {number} kWindows=3 kWindows value
         * @property {number} WECHAT_ANDROID=4 WECHAT_ANDROID value
         * @property {number} WECHAT_IOS=5 WECHAT_IOS value
         * @property {number} H5=6 H5 value
         * @property {number} H5_ANDROID=7 H5_ANDROID value
         * @property {number} H5_IOS=8 H5_IOS value
         * @property {number} H5_WINDOWS=9 H5_WINDOWS value
         * @property {number} H5_MAC=10 H5_MAC value
         * @property {number} kPlatformNum=11 kPlatformNum value
         */
        DeviceInfo.PlatformType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kInvalid"] = 0;
            values[valuesById[1] = "kAndroid"] = 1;
            values[valuesById[2] = "kiOS"] = 2;
            values[valuesById[3] = "kWindows"] = 3;
            values[valuesById[4] = "WECHAT_ANDROID"] = 4;
            values[valuesById[5] = "WECHAT_IOS"] = 5;
            values[valuesById[6] = "H5"] = 6;
            values[valuesById[7] = "H5_ANDROID"] = 7;
            values[valuesById[8] = "H5_IOS"] = 8;
            values[valuesById[9] = "H5_WINDOWS"] = 9;
            values[valuesById[10] = "H5_MAC"] = 10;
            values[valuesById[11] = "kPlatformNum"] = 11;
            return values;
        })();

        return DeviceInfo;
    })();

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

    AcFunDanmu.ZtCommonInfo = (function() {

        /**
         * Properties of a ZtCommonInfo.
         * @memberof AcFunDanmu
         * @interface IZtCommonInfo
         * @property {string|null} [kpn] ZtCommonInfo kpn
         * @property {string|null} [kpf] ZtCommonInfo kpf
         * @property {string|null} [subBiz] ZtCommonInfo subBiz
         * @property {number|Long|null} [uid] ZtCommonInfo uid
         * @property {string|null} [did] ZtCommonInfo did
         * @property {number|Long|null} [clientIp] ZtCommonInfo clientIp
         * @property {string|null} [appVer] ZtCommonInfo appVer
         * @property {string|null} [ver] ZtCommonInfo ver
         * @property {string|null} [lat] ZtCommonInfo lat
         * @property {string|null} [lon] ZtCommonInfo lon
         * @property {string|null} [mod] ZtCommonInfo mod
         * @property {string|null} [net] ZtCommonInfo net
         * @property {string|null} [sys] ZtCommonInfo sys
         * @property {string|null} [c] ZtCommonInfo c
         * @property {string|null} [language] ZtCommonInfo language
         * @property {string|null} [countryCode] ZtCommonInfo countryCode
         */

        /**
         * Constructs a new ZtCommonInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtCommonInfo.
         * @implements IZtCommonInfo
         * @constructor
         * @param {AcFunDanmu.IZtCommonInfo=} [properties] Properties to set
         */
        function ZtCommonInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtCommonInfo kpn.
         * @member {string} kpn
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.kpn = "";

        /**
         * ZtCommonInfo kpf.
         * @member {string} kpf
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.kpf = "";

        /**
         * ZtCommonInfo subBiz.
         * @member {string} subBiz
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.subBiz = "";

        /**
         * ZtCommonInfo uid.
         * @member {number|Long} uid
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtCommonInfo did.
         * @member {string} did
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.did = "";

        /**
         * ZtCommonInfo clientIp.
         * @member {number|Long} clientIp
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.clientIp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtCommonInfo appVer.
         * @member {string} appVer
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.appVer = "";

        /**
         * ZtCommonInfo ver.
         * @member {string} ver
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.ver = "";

        /**
         * ZtCommonInfo lat.
         * @member {string} lat
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.lat = "";

        /**
         * ZtCommonInfo lon.
         * @member {string} lon
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.lon = "";

        /**
         * ZtCommonInfo mod.
         * @member {string} mod
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.mod = "";

        /**
         * ZtCommonInfo net.
         * @member {string} net
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.net = "";

        /**
         * ZtCommonInfo sys.
         * @member {string} sys
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.sys = "";

        /**
         * ZtCommonInfo c.
         * @member {string} c
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.c = "";

        /**
         * ZtCommonInfo language.
         * @member {string} language
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.language = "";

        /**
         * ZtCommonInfo countryCode.
         * @member {string} countryCode
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         */
        ZtCommonInfo.prototype.countryCode = "";

        /**
         * Creates a new ZtCommonInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {AcFunDanmu.IZtCommonInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtCommonInfo} ZtCommonInfo instance
         */
        ZtCommonInfo.create = function create(properties) {
            return new ZtCommonInfo(properties);
        };

        /**
         * Encodes the specified ZtCommonInfo message. Does not implicitly {@link AcFunDanmu.ZtCommonInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {AcFunDanmu.IZtCommonInfo} message ZtCommonInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtCommonInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.kpn != null && Object.hasOwnProperty.call(message, "kpn"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.kpn);
            if (message.kpf != null && Object.hasOwnProperty.call(message, "kpf"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.kpf);
            if (message.subBiz != null && Object.hasOwnProperty.call(message, "subBiz"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.subBiz);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.uid);
            if (message.did != null && Object.hasOwnProperty.call(message, "did"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.did);
            if (message.clientIp != null && Object.hasOwnProperty.call(message, "clientIp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.clientIp);
            if (message.appVer != null && Object.hasOwnProperty.call(message, "appVer"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.appVer);
            if (message.ver != null && Object.hasOwnProperty.call(message, "ver"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.ver);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.lon);
            if (message.mod != null && Object.hasOwnProperty.call(message, "mod"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.mod);
            if (message.net != null && Object.hasOwnProperty.call(message, "net"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.net);
            if (message.sys != null && Object.hasOwnProperty.call(message, "sys"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.sys);
            if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.c);
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.language);
            if (message.countryCode != null && Object.hasOwnProperty.call(message, "countryCode"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.countryCode);
            return writer;
        };

        /**
         * Encodes the specified ZtCommonInfo message, length delimited. Does not implicitly {@link AcFunDanmu.ZtCommonInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {AcFunDanmu.IZtCommonInfo} message ZtCommonInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtCommonInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtCommonInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtCommonInfo} ZtCommonInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtCommonInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtCommonInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.kpn = reader.string();
                    break;
                case 2:
                    message.kpf = reader.string();
                    break;
                case 3:
                    message.subBiz = reader.string();
                    break;
                case 4:
                    message.uid = reader.int64();
                    break;
                case 5:
                    message.did = reader.string();
                    break;
                case 6:
                    message.clientIp = reader.int64();
                    break;
                case 7:
                    message.appVer = reader.string();
                    break;
                case 8:
                    message.ver = reader.string();
                    break;
                case 9:
                    message.lat = reader.string();
                    break;
                case 10:
                    message.lon = reader.string();
                    break;
                case 11:
                    message.mod = reader.string();
                    break;
                case 12:
                    message.net = reader.string();
                    break;
                case 13:
                    message.sys = reader.string();
                    break;
                case 14:
                    message.c = reader.string();
                    break;
                case 15:
                    message.language = reader.string();
                    break;
                case 16:
                    message.countryCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtCommonInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtCommonInfo} ZtCommonInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtCommonInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtCommonInfo message.
         * @function verify
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtCommonInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.kpn != null && message.hasOwnProperty("kpn"))
                if (!$util.isString(message.kpn))
                    return "kpn: string expected";
            if (message.kpf != null && message.hasOwnProperty("kpf"))
                if (!$util.isString(message.kpf))
                    return "kpf: string expected";
            if (message.subBiz != null && message.hasOwnProperty("subBiz"))
                if (!$util.isString(message.subBiz))
                    return "subBiz: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.did != null && message.hasOwnProperty("did"))
                if (!$util.isString(message.did))
                    return "did: string expected";
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                if (!$util.isInteger(message.clientIp) && !(message.clientIp && $util.isInteger(message.clientIp.low) && $util.isInteger(message.clientIp.high)))
                    return "clientIp: integer|Long expected";
            if (message.appVer != null && message.hasOwnProperty("appVer"))
                if (!$util.isString(message.appVer))
                    return "appVer: string expected";
            if (message.ver != null && message.hasOwnProperty("ver"))
                if (!$util.isString(message.ver))
                    return "ver: string expected";
            if (message.lat != null && message.hasOwnProperty("lat"))
                if (!$util.isString(message.lat))
                    return "lat: string expected";
            if (message.lon != null && message.hasOwnProperty("lon"))
                if (!$util.isString(message.lon))
                    return "lon: string expected";
            if (message.mod != null && message.hasOwnProperty("mod"))
                if (!$util.isString(message.mod))
                    return "mod: string expected";
            if (message.net != null && message.hasOwnProperty("net"))
                if (!$util.isString(message.net))
                    return "net: string expected";
            if (message.sys != null && message.hasOwnProperty("sys"))
                if (!$util.isString(message.sys))
                    return "sys: string expected";
            if (message.c != null && message.hasOwnProperty("c"))
                if (!$util.isString(message.c))
                    return "c: string expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                if (!$util.isString(message.countryCode))
                    return "countryCode: string expected";
            return null;
        };

        /**
         * Creates a ZtCommonInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtCommonInfo} ZtCommonInfo
         */
        ZtCommonInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtCommonInfo)
                return object;
            var message = new $root.AcFunDanmu.ZtCommonInfo();
            if (object.kpn != null)
                message.kpn = String(object.kpn);
            if (object.kpf != null)
                message.kpf = String(object.kpf);
            if (object.subBiz != null)
                message.subBiz = String(object.subBiz);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.did != null)
                message.did = String(object.did);
            if (object.clientIp != null)
                if ($util.Long)
                    (message.clientIp = $util.Long.fromValue(object.clientIp)).unsigned = false;
                else if (typeof object.clientIp === "string")
                    message.clientIp = parseInt(object.clientIp, 10);
                else if (typeof object.clientIp === "number")
                    message.clientIp = object.clientIp;
                else if (typeof object.clientIp === "object")
                    message.clientIp = new $util.LongBits(object.clientIp.low >>> 0, object.clientIp.high >>> 0).toNumber();
            if (object.appVer != null)
                message.appVer = String(object.appVer);
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.lat != null)
                message.lat = String(object.lat);
            if (object.lon != null)
                message.lon = String(object.lon);
            if (object.mod != null)
                message.mod = String(object.mod);
            if (object.net != null)
                message.net = String(object.net);
            if (object.sys != null)
                message.sys = String(object.sys);
            if (object.c != null)
                message.c = String(object.c);
            if (object.language != null)
                message.language = String(object.language);
            if (object.countryCode != null)
                message.countryCode = String(object.countryCode);
            return message;
        };

        /**
         * Creates a plain object from a ZtCommonInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtCommonInfo
         * @static
         * @param {AcFunDanmu.ZtCommonInfo} message ZtCommonInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtCommonInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.kpn = "";
                object.kpf = "";
                object.subBiz = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.did = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientIp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientIp = options.longs === String ? "0" : 0;
                object.appVer = "";
                object.ver = "";
                object.lat = "";
                object.lon = "";
                object.mod = "";
                object.net = "";
                object.sys = "";
                object.c = "";
                object.language = "";
                object.countryCode = "";
            }
            if (message.kpn != null && message.hasOwnProperty("kpn"))
                object.kpn = message.kpn;
            if (message.kpf != null && message.hasOwnProperty("kpf"))
                object.kpf = message.kpf;
            if (message.subBiz != null && message.hasOwnProperty("subBiz"))
                object.subBiz = message.subBiz;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.did != null && message.hasOwnProperty("did"))
                object.did = message.did;
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                if (typeof message.clientIp === "number")
                    object.clientIp = options.longs === String ? String(message.clientIp) : message.clientIp;
                else
                    object.clientIp = options.longs === String ? $util.Long.prototype.toString.call(message.clientIp) : options.longs === Number ? new $util.LongBits(message.clientIp.low >>> 0, message.clientIp.high >>> 0).toNumber() : message.clientIp;
            if (message.appVer != null && message.hasOwnProperty("appVer"))
                object.appVer = message.appVer;
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = message.lat;
            if (message.lon != null && message.hasOwnProperty("lon"))
                object.lon = message.lon;
            if (message.mod != null && message.hasOwnProperty("mod"))
                object.mod = message.mod;
            if (message.net != null && message.hasOwnProperty("net"))
                object.net = message.net;
            if (message.sys != null && message.hasOwnProperty("sys"))
                object.sys = message.sys;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = message.c;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                object.countryCode = message.countryCode;
            return object;
        };

        /**
         * Converts this ZtCommonInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtCommonInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtCommonInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtCommonInfo;
    })();

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

    AcFunDanmu.PushServiceToken = (function() {

        /**
         * Properties of a PushServiceToken.
         * @memberof AcFunDanmu
         * @interface IPushServiceToken
         * @property {AcFunDanmu.PushServiceToken.PushType|null} [pushType] PushServiceToken pushType
         * @property {Uint8Array|null} [token] PushServiceToken token
         * @property {boolean|null} [isPassThrough] PushServiceToken isPassThrough
         */

        /**
         * Constructs a new PushServiceToken.
         * @memberof AcFunDanmu
         * @classdesc Represents a PushServiceToken.
         * @implements IPushServiceToken
         * @constructor
         * @param {AcFunDanmu.IPushServiceToken=} [properties] Properties to set
         */
        function PushServiceToken(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushServiceToken pushType.
         * @member {AcFunDanmu.PushServiceToken.PushType} pushType
         * @memberof AcFunDanmu.PushServiceToken
         * @instance
         */
        PushServiceToken.prototype.pushType = 0;

        /**
         * PushServiceToken token.
         * @member {Uint8Array} token
         * @memberof AcFunDanmu.PushServiceToken
         * @instance
         */
        PushServiceToken.prototype.token = $util.newBuffer([]);

        /**
         * PushServiceToken isPassThrough.
         * @member {boolean} isPassThrough
         * @memberof AcFunDanmu.PushServiceToken
         * @instance
         */
        PushServiceToken.prototype.isPassThrough = false;

        /**
         * Creates a new PushServiceToken instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PushServiceToken
         * @static
         * @param {AcFunDanmu.IPushServiceToken=} [properties] Properties to set
         * @returns {AcFunDanmu.PushServiceToken} PushServiceToken instance
         */
        PushServiceToken.create = function create(properties) {
            return new PushServiceToken(properties);
        };

        /**
         * Encodes the specified PushServiceToken message. Does not implicitly {@link AcFunDanmu.PushServiceToken.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PushServiceToken
         * @static
         * @param {AcFunDanmu.IPushServiceToken} message PushServiceToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushServiceToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pushType != null && Object.hasOwnProperty.call(message, "pushType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pushType);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.token);
            if (message.isPassThrough != null && Object.hasOwnProperty.call(message, "isPassThrough"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isPassThrough);
            return writer;
        };

        /**
         * Encodes the specified PushServiceToken message, length delimited. Does not implicitly {@link AcFunDanmu.PushServiceToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PushServiceToken
         * @static
         * @param {AcFunDanmu.IPushServiceToken} message PushServiceToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushServiceToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushServiceToken message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PushServiceToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PushServiceToken} PushServiceToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushServiceToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PushServiceToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pushType = reader.int32();
                    break;
                case 2:
                    message.token = reader.bytes();
                    break;
                case 3:
                    message.isPassThrough = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushServiceToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PushServiceToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PushServiceToken} PushServiceToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushServiceToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushServiceToken message.
         * @function verify
         * @memberof AcFunDanmu.PushServiceToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushServiceToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pushType != null && message.hasOwnProperty("pushType"))
                switch (message.pushType) {
                default:
                    return "pushType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            if (message.isPassThrough != null && message.hasOwnProperty("isPassThrough"))
                if (typeof message.isPassThrough !== "boolean")
                    return "isPassThrough: boolean expected";
            return null;
        };

        /**
         * Creates a PushServiceToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PushServiceToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PushServiceToken} PushServiceToken
         */
        PushServiceToken.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PushServiceToken)
                return object;
            var message = new $root.AcFunDanmu.PushServiceToken();
            switch (object.pushType) {
            case "kPushTypeInvalid":
            case 0:
                message.pushType = 0;
                break;
            case "kPushTypeAPNS":
            case 1:
                message.pushType = 1;
                break;
            case "kPushTypeXmPush":
            case 2:
                message.pushType = 2;
                break;
            case "kPushTypeJgPush":
            case 3:
                message.pushType = 3;
                break;
            case "kPushTypeGtPUsh":
            case 4:
                message.pushType = 4;
                break;
            case "kPushTypeOpPush":
            case 5:
                message.pushType = 5;
                break;
            case "kPushTYpeVvPush":
            case 6:
                message.pushType = 6;
                break;
            case "kPushTypeHwPush":
            case 7:
                message.pushType = 7;
                break;
            case "kPushTYpeFcm":
            case 8:
                message.pushType = 8;
                break;
            }
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            if (object.isPassThrough != null)
                message.isPassThrough = Boolean(object.isPassThrough);
            return message;
        };

        /**
         * Creates a plain object from a PushServiceToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PushServiceToken
         * @static
         * @param {AcFunDanmu.PushServiceToken} message PushServiceToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushServiceToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pushType = options.enums === String ? "kPushTypeInvalid" : 0;
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
                object.isPassThrough = false;
            }
            if (message.pushType != null && message.hasOwnProperty("pushType"))
                object.pushType = options.enums === String ? $root.AcFunDanmu.PushServiceToken.PushType[message.pushType] : message.pushType;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            if (message.isPassThrough != null && message.hasOwnProperty("isPassThrough"))
                object.isPassThrough = message.isPassThrough;
            return object;
        };

        /**
         * Converts this PushServiceToken to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PushServiceToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushServiceToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * PushType enum.
         * @name AcFunDanmu.PushServiceToken.PushType
         * @enum {number}
         * @property {number} kPushTypeInvalid=0 kPushTypeInvalid value
         * @property {number} kPushTypeAPNS=1 kPushTypeAPNS value
         * @property {number} kPushTypeXmPush=2 kPushTypeXmPush value
         * @property {number} kPushTypeJgPush=3 kPushTypeJgPush value
         * @property {number} kPushTypeGtPUsh=4 kPushTypeGtPUsh value
         * @property {number} kPushTypeOpPush=5 kPushTypeOpPush value
         * @property {number} kPushTYpeVvPush=6 kPushTYpeVvPush value
         * @property {number} kPushTypeHwPush=7 kPushTypeHwPush value
         * @property {number} kPushTYpeFcm=8 kPushTYpeFcm value
         */
        PushServiceToken.PushType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kPushTypeInvalid"] = 0;
            values[valuesById[1] = "kPushTypeAPNS"] = 1;
            values[valuesById[2] = "kPushTypeXmPush"] = 2;
            values[valuesById[3] = "kPushTypeJgPush"] = 3;
            values[valuesById[4] = "kPushTypeGtPUsh"] = 4;
            values[valuesById[5] = "kPushTypeOpPush"] = 5;
            values[valuesById[6] = "kPushTYpeVvPush"] = 6;
            values[valuesById[7] = "kPushTypeHwPush"] = 7;
            values[valuesById[8] = "kPushTYpeFcm"] = 8;
            return values;
        })();

        return PushServiceToken;
    })();

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
