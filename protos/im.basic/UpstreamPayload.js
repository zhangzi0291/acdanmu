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

    AcFunDanmu.UpstreamPayload = (function() {

        /**
         * Properties of an UpstreamPayload.
         * @memberof AcFunDanmu
         * @interface IUpstreamPayload
         * @property {string|null} [command] UpstreamPayload command
         * @property {number|Long|null} [seqId] UpstreamPayload seqId
         * @property {number|null} [retryCount] UpstreamPayload retryCount
         * @property {Uint8Array|null} [payloadData] UpstreamPayload payloadData
         * @property {AcFunDanmu.IUserInstance|null} [userInstance] UpstreamPayload userInstance
         * @property {number|null} [errorCode] UpstreamPayload errorCode
         * @property {AcFunDanmu.ISettingInfo|null} [settingInfo] UpstreamPayload settingInfo
         * @property {AcFunDanmu.IRequestBasicInfo|null} [requestBasicInfo] UpstreamPayload requestBasicInfo
         * @property {string|null} [subBiz] UpstreamPayload subBiz
         * @property {AcFunDanmu.IFrontendInfo|null} [frontendInfo] UpstreamPayload frontendInfo
         * @property {string|null} [kpn] UpstreamPayload kpn
         * @property {boolean|null} [anonymouseUser] UpstreamPayload anonymouseUser
         */

        /**
         * Constructs a new UpstreamPayload.
         * @memberof AcFunDanmu
         * @classdesc Represents an UpstreamPayload.
         * @implements IUpstreamPayload
         * @constructor
         * @param {AcFunDanmu.IUpstreamPayload=} [properties] Properties to set
         */
        function UpstreamPayload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpstreamPayload command.
         * @member {string} command
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.command = "";

        /**
         * UpstreamPayload seqId.
         * @member {number|Long} seqId
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.seqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpstreamPayload retryCount.
         * @member {number} retryCount
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.retryCount = 0;

        /**
         * UpstreamPayload payloadData.
         * @member {Uint8Array} payloadData
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.payloadData = $util.newBuffer([]);

        /**
         * UpstreamPayload userInstance.
         * @member {AcFunDanmu.IUserInstance|null|undefined} userInstance
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.userInstance = null;

        /**
         * UpstreamPayload errorCode.
         * @member {number} errorCode
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.errorCode = 0;

        /**
         * UpstreamPayload settingInfo.
         * @member {AcFunDanmu.ISettingInfo|null|undefined} settingInfo
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.settingInfo = null;

        /**
         * UpstreamPayload requestBasicInfo.
         * @member {AcFunDanmu.IRequestBasicInfo|null|undefined} requestBasicInfo
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.requestBasicInfo = null;

        /**
         * UpstreamPayload subBiz.
         * @member {string} subBiz
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.subBiz = "";

        /**
         * UpstreamPayload frontendInfo.
         * @member {AcFunDanmu.IFrontendInfo|null|undefined} frontendInfo
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.frontendInfo = null;

        /**
         * UpstreamPayload kpn.
         * @member {string} kpn
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.kpn = "";

        /**
         * UpstreamPayload anonymouseUser.
         * @member {boolean} anonymouseUser
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         */
        UpstreamPayload.prototype.anonymouseUser = false;

        /**
         * Creates a new UpstreamPayload instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.UpstreamPayload
         * @static
         * @param {AcFunDanmu.IUpstreamPayload=} [properties] Properties to set
         * @returns {AcFunDanmu.UpstreamPayload} UpstreamPayload instance
         */
        UpstreamPayload.create = function create(properties) {
            return new UpstreamPayload(properties);
        };

        /**
         * Encodes the specified UpstreamPayload message. Does not implicitly {@link AcFunDanmu.UpstreamPayload.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.UpstreamPayload
         * @static
         * @param {AcFunDanmu.IUpstreamPayload} message UpstreamPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpstreamPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
            if (message.seqId != null && Object.hasOwnProperty.call(message, "seqId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seqId);
            if (message.retryCount != null && Object.hasOwnProperty.call(message, "retryCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.retryCount);
            if (message.payloadData != null && Object.hasOwnProperty.call(message, "payloadData"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payloadData);
            if (message.userInstance != null && Object.hasOwnProperty.call(message, "userInstance"))
                $root.AcFunDanmu.UserInstance.encode(message.userInstance, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.errorCode);
            if (message.settingInfo != null && Object.hasOwnProperty.call(message, "settingInfo"))
                $root.AcFunDanmu.SettingInfo.encode(message.settingInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.requestBasicInfo != null && Object.hasOwnProperty.call(message, "requestBasicInfo"))
                $root.AcFunDanmu.RequestBasicInfo.encode(message.requestBasicInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.subBiz != null && Object.hasOwnProperty.call(message, "subBiz"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.subBiz);
            if (message.frontendInfo != null && Object.hasOwnProperty.call(message, "frontendInfo"))
                $root.AcFunDanmu.FrontendInfo.encode(message.frontendInfo, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.kpn != null && Object.hasOwnProperty.call(message, "kpn"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.kpn);
            if (message.anonymouseUser != null && Object.hasOwnProperty.call(message, "anonymouseUser"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.anonymouseUser);
            return writer;
        };

        /**
         * Encodes the specified UpstreamPayload message, length delimited. Does not implicitly {@link AcFunDanmu.UpstreamPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.UpstreamPayload
         * @static
         * @param {AcFunDanmu.IUpstreamPayload} message UpstreamPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpstreamPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpstreamPayload message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.UpstreamPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.UpstreamPayload} UpstreamPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpstreamPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.UpstreamPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.command = reader.string();
                    break;
                case 2:
                    message.seqId = reader.int64();
                    break;
                case 3:
                    message.retryCount = reader.uint32();
                    break;
                case 4:
                    message.payloadData = reader.bytes();
                    break;
                case 5:
                    message.userInstance = $root.AcFunDanmu.UserInstance.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.errorCode = reader.int32();
                    break;
                case 7:
                    message.settingInfo = $root.AcFunDanmu.SettingInfo.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.requestBasicInfo = $root.AcFunDanmu.RequestBasicInfo.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.subBiz = reader.string();
                    break;
                case 10:
                    message.frontendInfo = $root.AcFunDanmu.FrontendInfo.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.kpn = reader.string();
                    break;
                case 12:
                    message.anonymouseUser = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpstreamPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.UpstreamPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.UpstreamPayload} UpstreamPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpstreamPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpstreamPayload message.
         * @function verify
         * @memberof AcFunDanmu.UpstreamPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpstreamPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.seqId != null && message.hasOwnProperty("seqId"))
                if (!$util.isInteger(message.seqId) && !(message.seqId && $util.isInteger(message.seqId.low) && $util.isInteger(message.seqId.high)))
                    return "seqId: integer|Long expected";
            if (message.retryCount != null && message.hasOwnProperty("retryCount"))
                if (!$util.isInteger(message.retryCount))
                    return "retryCount: integer expected";
            if (message.payloadData != null && message.hasOwnProperty("payloadData"))
                if (!(message.payloadData && typeof message.payloadData.length === "number" || $util.isString(message.payloadData)))
                    return "payloadData: buffer expected";
            if (message.userInstance != null && message.hasOwnProperty("userInstance")) {
                var error = $root.AcFunDanmu.UserInstance.verify(message.userInstance);
                if (error)
                    return "userInstance." + error;
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            if (message.settingInfo != null && message.hasOwnProperty("settingInfo")) {
                var error = $root.AcFunDanmu.SettingInfo.verify(message.settingInfo);
                if (error)
                    return "settingInfo." + error;
            }
            if (message.requestBasicInfo != null && message.hasOwnProperty("requestBasicInfo")) {
                var error = $root.AcFunDanmu.RequestBasicInfo.verify(message.requestBasicInfo);
                if (error)
                    return "requestBasicInfo." + error;
            }
            if (message.subBiz != null && message.hasOwnProperty("subBiz"))
                if (!$util.isString(message.subBiz))
                    return "subBiz: string expected";
            if (message.frontendInfo != null && message.hasOwnProperty("frontendInfo")) {
                var error = $root.AcFunDanmu.FrontendInfo.verify(message.frontendInfo);
                if (error)
                    return "frontendInfo." + error;
            }
            if (message.kpn != null && message.hasOwnProperty("kpn"))
                if (!$util.isString(message.kpn))
                    return "kpn: string expected";
            if (message.anonymouseUser != null && message.hasOwnProperty("anonymouseUser"))
                if (typeof message.anonymouseUser !== "boolean")
                    return "anonymouseUser: boolean expected";
            return null;
        };

        /**
         * Creates an UpstreamPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.UpstreamPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.UpstreamPayload} UpstreamPayload
         */
        UpstreamPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.UpstreamPayload)
                return object;
            var message = new $root.AcFunDanmu.UpstreamPayload();
            if (object.command != null)
                message.command = String(object.command);
            if (object.seqId != null)
                if ($util.Long)
                    (message.seqId = $util.Long.fromValue(object.seqId)).unsigned = false;
                else if (typeof object.seqId === "string")
                    message.seqId = parseInt(object.seqId, 10);
                else if (typeof object.seqId === "number")
                    message.seqId = object.seqId;
                else if (typeof object.seqId === "object")
                    message.seqId = new $util.LongBits(object.seqId.low >>> 0, object.seqId.high >>> 0).toNumber();
            if (object.retryCount != null)
                message.retryCount = object.retryCount >>> 0;
            if (object.payloadData != null)
                if (typeof object.payloadData === "string")
                    $util.base64.decode(object.payloadData, message.payloadData = $util.newBuffer($util.base64.length(object.payloadData)), 0);
                else if (object.payloadData.length)
                    message.payloadData = object.payloadData;
            if (object.userInstance != null) {
                if (typeof object.userInstance !== "object")
                    throw TypeError(".AcFunDanmu.UpstreamPayload.userInstance: object expected");
                message.userInstance = $root.AcFunDanmu.UserInstance.fromObject(object.userInstance);
            }
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            if (object.settingInfo != null) {
                if (typeof object.settingInfo !== "object")
                    throw TypeError(".AcFunDanmu.UpstreamPayload.settingInfo: object expected");
                message.settingInfo = $root.AcFunDanmu.SettingInfo.fromObject(object.settingInfo);
            }
            if (object.requestBasicInfo != null) {
                if (typeof object.requestBasicInfo !== "object")
                    throw TypeError(".AcFunDanmu.UpstreamPayload.requestBasicInfo: object expected");
                message.requestBasicInfo = $root.AcFunDanmu.RequestBasicInfo.fromObject(object.requestBasicInfo);
            }
            if (object.subBiz != null)
                message.subBiz = String(object.subBiz);
            if (object.frontendInfo != null) {
                if (typeof object.frontendInfo !== "object")
                    throw TypeError(".AcFunDanmu.UpstreamPayload.frontendInfo: object expected");
                message.frontendInfo = $root.AcFunDanmu.FrontendInfo.fromObject(object.frontendInfo);
            }
            if (object.kpn != null)
                message.kpn = String(object.kpn);
            if (object.anonymouseUser != null)
                message.anonymouseUser = Boolean(object.anonymouseUser);
            return message;
        };

        /**
         * Creates a plain object from an UpstreamPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.UpstreamPayload
         * @static
         * @param {AcFunDanmu.UpstreamPayload} message UpstreamPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpstreamPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.command = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seqId = options.longs === String ? "0" : 0;
                object.retryCount = 0;
                if (options.bytes === String)
                    object.payloadData = "";
                else {
                    object.payloadData = [];
                    if (options.bytes !== Array)
                        object.payloadData = $util.newBuffer(object.payloadData);
                }
                object.userInstance = null;
                object.errorCode = 0;
                object.settingInfo = null;
                object.requestBasicInfo = null;
                object.subBiz = "";
                object.frontendInfo = null;
                object.kpn = "";
                object.anonymouseUser = false;
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            if (message.seqId != null && message.hasOwnProperty("seqId"))
                if (typeof message.seqId === "number")
                    object.seqId = options.longs === String ? String(message.seqId) : message.seqId;
                else
                    object.seqId = options.longs === String ? $util.Long.prototype.toString.call(message.seqId) : options.longs === Number ? new $util.LongBits(message.seqId.low >>> 0, message.seqId.high >>> 0).toNumber() : message.seqId;
            if (message.retryCount != null && message.hasOwnProperty("retryCount"))
                object.retryCount = message.retryCount;
            if (message.payloadData != null && message.hasOwnProperty("payloadData"))
                object.payloadData = options.bytes === String ? $util.base64.encode(message.payloadData, 0, message.payloadData.length) : options.bytes === Array ? Array.prototype.slice.call(message.payloadData) : message.payloadData;
            if (message.userInstance != null && message.hasOwnProperty("userInstance"))
                object.userInstance = $root.AcFunDanmu.UserInstance.toObject(message.userInstance, options);
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.settingInfo != null && message.hasOwnProperty("settingInfo"))
                object.settingInfo = $root.AcFunDanmu.SettingInfo.toObject(message.settingInfo, options);
            if (message.requestBasicInfo != null && message.hasOwnProperty("requestBasicInfo"))
                object.requestBasicInfo = $root.AcFunDanmu.RequestBasicInfo.toObject(message.requestBasicInfo, options);
            if (message.subBiz != null && message.hasOwnProperty("subBiz"))
                object.subBiz = message.subBiz;
            if (message.frontendInfo != null && message.hasOwnProperty("frontendInfo"))
                object.frontendInfo = $root.AcFunDanmu.FrontendInfo.toObject(message.frontendInfo, options);
            if (message.kpn != null && message.hasOwnProperty("kpn"))
                object.kpn = message.kpn;
            if (message.anonymouseUser != null && message.hasOwnProperty("anonymouseUser"))
                object.anonymouseUser = message.anonymouseUser;
            return object;
        };

        /**
         * Converts this UpstreamPayload to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.UpstreamPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpstreamPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpstreamPayload;
    })();

    AcFunDanmu.UserInstance = (function() {

        /**
         * Properties of a UserInstance.
         * @memberof AcFunDanmu
         * @interface IUserInstance
         * @property {AcFunDanmu.IUser|null} [user] UserInstance user
         * @property {number|Long|null} [instanceId] UserInstance instanceId
         */

        /**
         * Constructs a new UserInstance.
         * @memberof AcFunDanmu
         * @classdesc Represents a UserInstance.
         * @implements IUserInstance
         * @constructor
         * @param {AcFunDanmu.IUserInstance=} [properties] Properties to set
         */
        function UserInstance(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInstance user.
         * @member {AcFunDanmu.IUser|null|undefined} user
         * @memberof AcFunDanmu.UserInstance
         * @instance
         */
        UserInstance.prototype.user = null;

        /**
         * UserInstance instanceId.
         * @member {number|Long} instanceId
         * @memberof AcFunDanmu.UserInstance
         * @instance
         */
        UserInstance.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserInstance instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {AcFunDanmu.IUserInstance=} [properties] Properties to set
         * @returns {AcFunDanmu.UserInstance} UserInstance instance
         */
        UserInstance.create = function create(properties) {
            return new UserInstance(properties);
        };

        /**
         * Encodes the specified UserInstance message. Does not implicitly {@link AcFunDanmu.UserInstance.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {AcFunDanmu.IUserInstance} message UserInstance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInstance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.AcFunDanmu.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.instanceId);
            return writer;
        };

        /**
         * Encodes the specified UserInstance message, length delimited. Does not implicitly {@link AcFunDanmu.UserInstance.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {AcFunDanmu.IUserInstance} message UserInstance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInstance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInstance message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.UserInstance} UserInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInstance.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.UserInstance();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.AcFunDanmu.User.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instanceId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInstance message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.UserInstance} UserInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInstance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInstance message.
         * @function verify
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInstance.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.AcFunDanmu.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserInstance message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.UserInstance} UserInstance
         */
        UserInstance.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.UserInstance)
                return object;
            var message = new $root.AcFunDanmu.UserInstance();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".AcFunDanmu.UserInstance.user: object expected");
                message.user = $root.AcFunDanmu.User.fromObject(object.user);
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
            return message;
        };

        /**
         * Creates a plain object from a UserInstance message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {AcFunDanmu.UserInstance} message UserInstance
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInstance.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.AcFunDanmu.User.toObject(message.user, options);
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            return object;
        };

        /**
         * Converts this UserInstance to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.UserInstance
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInstance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInstance;
    })();

    AcFunDanmu.User = (function() {

        /**
         * Properties of a User.
         * @memberof AcFunDanmu
         * @interface IUser
         * @property {number|null} [appId] User appId
         * @property {number|Long|null} [uid] User uid
         */

        /**
         * Constructs a new User.
         * @memberof AcFunDanmu
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {AcFunDanmu.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User appId.
         * @member {number} appId
         * @memberof AcFunDanmu.User
         * @instance
         */
        User.prototype.appId = 0;

        /**
         * User uid.
         * @member {number|Long} uid
         * @memberof AcFunDanmu.User
         * @instance
         */
        User.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.User
         * @static
         * @param {AcFunDanmu.IUser=} [properties] Properties to set
         * @returns {AcFunDanmu.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link AcFunDanmu.User.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.User
         * @static
         * @param {AcFunDanmu.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.appId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link AcFunDanmu.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.User
         * @static
         * @param {AcFunDanmu.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof AcFunDanmu.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isInteger(message.appId))
                    return "appId: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.User)
                return object;
            var message = new $root.AcFunDanmu.User();
            if (object.appId != null)
                message.appId = object.appId | 0;
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.User
         * @static
         * @param {AcFunDanmu.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    AcFunDanmu.SettingInfo = (function() {

        /**
         * Properties of a SettingInfo.
         * @memberof AcFunDanmu
         * @interface ISettingInfo
         * @property {string|null} [locale] SettingInfo locale
         * @property {number|null} [timezone] SettingInfo timezone
         */

        /**
         * Constructs a new SettingInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a SettingInfo.
         * @implements ISettingInfo
         * @constructor
         * @param {AcFunDanmu.ISettingInfo=} [properties] Properties to set
         */
        function SettingInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SettingInfo locale.
         * @member {string} locale
         * @memberof AcFunDanmu.SettingInfo
         * @instance
         */
        SettingInfo.prototype.locale = "";

        /**
         * SettingInfo timezone.
         * @member {number} timezone
         * @memberof AcFunDanmu.SettingInfo
         * @instance
         */
        SettingInfo.prototype.timezone = 0;

        /**
         * Creates a new SettingInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {AcFunDanmu.ISettingInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.SettingInfo} SettingInfo instance
         */
        SettingInfo.create = function create(properties) {
            return new SettingInfo(properties);
        };

        /**
         * Encodes the specified SettingInfo message. Does not implicitly {@link AcFunDanmu.SettingInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {AcFunDanmu.ISettingInfo} message SettingInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.locale);
            if (message.timezone != null && Object.hasOwnProperty.call(message, "timezone"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.timezone);
            return writer;
        };

        /**
         * Encodes the specified SettingInfo message, length delimited. Does not implicitly {@link AcFunDanmu.SettingInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {AcFunDanmu.ISettingInfo} message SettingInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SettingInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.SettingInfo} SettingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.SettingInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.locale = reader.string();
                    break;
                case 2:
                    message.timezone = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SettingInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.SettingInfo} SettingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SettingInfo message.
         * @function verify
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SettingInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.locale != null && message.hasOwnProperty("locale"))
                if (!$util.isString(message.locale))
                    return "locale: string expected";
            if (message.timezone != null && message.hasOwnProperty("timezone"))
                if (!$util.isInteger(message.timezone))
                    return "timezone: integer expected";
            return null;
        };

        /**
         * Creates a SettingInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.SettingInfo} SettingInfo
         */
        SettingInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.SettingInfo)
                return object;
            var message = new $root.AcFunDanmu.SettingInfo();
            if (object.locale != null)
                message.locale = String(object.locale);
            if (object.timezone != null)
                message.timezone = object.timezone | 0;
            return message;
        };

        /**
         * Creates a plain object from a SettingInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.SettingInfo
         * @static
         * @param {AcFunDanmu.SettingInfo} message SettingInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SettingInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.locale = "";
                object.timezone = 0;
            }
            if (message.locale != null && message.hasOwnProperty("locale"))
                object.locale = message.locale;
            if (message.timezone != null && message.hasOwnProperty("timezone"))
                object.timezone = message.timezone;
            return object;
        };

        /**
         * Converts this SettingInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.SettingInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SettingInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettingInfo;
    })();

    AcFunDanmu.RequestBasicInfo = (function() {

        /**
         * Properties of a RequestBasicInfo.
         * @memberof AcFunDanmu
         * @interface IRequestBasicInfo
         * @property {AcFunDanmu.DeviceInfo.PlatformType|null} [clientType] RequestBasicInfo clientType
         * @property {string|null} [deviceId] RequestBasicInfo deviceId
         * @property {string|null} [clientIp] RequestBasicInfo clientIp
         * @property {string|null} [appVersion] RequestBasicInfo appVersion
         * @property {string|null} [channel] RequestBasicInfo channel
         * @property {AcFunDanmu.IAppInfo|null} [appInfo] RequestBasicInfo appInfo
         * @property {AcFunDanmu.IDeviceInfo|null} [deviceInfo] RequestBasicInfo deviceInfo
         * @property {AcFunDanmu.IEnvInfo|null} [envInfo] RequestBasicInfo envInfo
         * @property {number|null} [clientPort] RequestBasicInfo clientPort
         * @property {string|null} [location] RequestBasicInfo location
         * @property {string|null} [kpf] RequestBasicInfo kpf
         */

        /**
         * Constructs a new RequestBasicInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a RequestBasicInfo.
         * @implements IRequestBasicInfo
         * @constructor
         * @param {AcFunDanmu.IRequestBasicInfo=} [properties] Properties to set
         */
        function RequestBasicInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestBasicInfo clientType.
         * @member {AcFunDanmu.DeviceInfo.PlatformType} clientType
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.clientType = 0;

        /**
         * RequestBasicInfo deviceId.
         * @member {string} deviceId
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.deviceId = "";

        /**
         * RequestBasicInfo clientIp.
         * @member {string} clientIp
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.clientIp = "";

        /**
         * RequestBasicInfo appVersion.
         * @member {string} appVersion
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.appVersion = "";

        /**
         * RequestBasicInfo channel.
         * @member {string} channel
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.channel = "";

        /**
         * RequestBasicInfo appInfo.
         * @member {AcFunDanmu.IAppInfo|null|undefined} appInfo
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.appInfo = null;

        /**
         * RequestBasicInfo deviceInfo.
         * @member {AcFunDanmu.IDeviceInfo|null|undefined} deviceInfo
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.deviceInfo = null;

        /**
         * RequestBasicInfo envInfo.
         * @member {AcFunDanmu.IEnvInfo|null|undefined} envInfo
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.envInfo = null;

        /**
         * RequestBasicInfo clientPort.
         * @member {number} clientPort
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.clientPort = 0;

        /**
         * RequestBasicInfo location.
         * @member {string} location
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.location = "";

        /**
         * RequestBasicInfo kpf.
         * @member {string} kpf
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         */
        RequestBasicInfo.prototype.kpf = "";

        /**
         * Creates a new RequestBasicInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.RequestBasicInfo
         * @static
         * @param {AcFunDanmu.IRequestBasicInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.RequestBasicInfo} RequestBasicInfo instance
         */
        RequestBasicInfo.create = function create(properties) {
            return new RequestBasicInfo(properties);
        };

        /**
         * Encodes the specified RequestBasicInfo message. Does not implicitly {@link AcFunDanmu.RequestBasicInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.RequestBasicInfo
         * @static
         * @param {AcFunDanmu.IRequestBasicInfo} message RequestBasicInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestBasicInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientType != null && Object.hasOwnProperty.call(message, "clientType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientType);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceId);
            if (message.clientIp != null && Object.hasOwnProperty.call(message, "clientIp"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.clientIp);
            if (message.appVersion != null && Object.hasOwnProperty.call(message, "appVersion"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.appVersion);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.channel);
            if (message.appInfo != null && Object.hasOwnProperty.call(message, "appInfo"))
                $root.AcFunDanmu.AppInfo.encode(message.appInfo, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.deviceInfo != null && Object.hasOwnProperty.call(message, "deviceInfo"))
                $root.AcFunDanmu.DeviceInfo.encode(message.deviceInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.envInfo != null && Object.hasOwnProperty.call(message, "envInfo"))
                $root.AcFunDanmu.EnvInfo.encode(message.envInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.clientPort != null && Object.hasOwnProperty.call(message, "clientPort"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.clientPort);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.location);
            if (message.kpf != null && Object.hasOwnProperty.call(message, "kpf"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.kpf);
            return writer;
        };

        /**
         * Encodes the specified RequestBasicInfo message, length delimited. Does not implicitly {@link AcFunDanmu.RequestBasicInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.RequestBasicInfo
         * @static
         * @param {AcFunDanmu.IRequestBasicInfo} message RequestBasicInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestBasicInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestBasicInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.RequestBasicInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.RequestBasicInfo} RequestBasicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestBasicInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.RequestBasicInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientType = reader.int32();
                    break;
                case 2:
                    message.deviceId = reader.string();
                    break;
                case 3:
                    message.clientIp = reader.string();
                    break;
                case 4:
                    message.appVersion = reader.string();
                    break;
                case 5:
                    message.channel = reader.string();
                    break;
                case 6:
                    message.appInfo = $root.AcFunDanmu.AppInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.deviceInfo = $root.AcFunDanmu.DeviceInfo.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.envInfo = $root.AcFunDanmu.EnvInfo.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.clientPort = reader.int32();
                    break;
                case 10:
                    message.location = reader.string();
                    break;
                case 11:
                    message.kpf = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RequestBasicInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.RequestBasicInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.RequestBasicInfo} RequestBasicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestBasicInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestBasicInfo message.
         * @function verify
         * @memberof AcFunDanmu.RequestBasicInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestBasicInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientType != null && message.hasOwnProperty("clientType"))
                switch (message.clientType) {
                default:
                    return "clientType: enum value expected";
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
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                if (!$util.isString(message.clientIp))
                    return "clientIp: string expected";
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                if (!$util.isString(message.appVersion))
                    return "appVersion: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
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
            if (message.clientPort != null && message.hasOwnProperty("clientPort"))
                if (!$util.isInteger(message.clientPort))
                    return "clientPort: integer expected";
            if (message.location != null && message.hasOwnProperty("location"))
                if (!$util.isString(message.location))
                    return "location: string expected";
            if (message.kpf != null && message.hasOwnProperty("kpf"))
                if (!$util.isString(message.kpf))
                    return "kpf: string expected";
            return null;
        };

        /**
         * Creates a RequestBasicInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.RequestBasicInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.RequestBasicInfo} RequestBasicInfo
         */
        RequestBasicInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.RequestBasicInfo)
                return object;
            var message = new $root.AcFunDanmu.RequestBasicInfo();
            switch (object.clientType) {
            case "kInvalid":
            case 0:
                message.clientType = 0;
                break;
            case "kAndroid":
            case 1:
                message.clientType = 1;
                break;
            case "kiOS":
            case 2:
                message.clientType = 2;
                break;
            case "kWindows":
            case 3:
                message.clientType = 3;
                break;
            case "WECHAT_ANDROID":
            case 4:
                message.clientType = 4;
                break;
            case "WECHAT_IOS":
            case 5:
                message.clientType = 5;
                break;
            case "H5":
            case 6:
                message.clientType = 6;
                break;
            case "H5_ANDROID":
            case 7:
                message.clientType = 7;
                break;
            case "H5_IOS":
            case 8:
                message.clientType = 8;
                break;
            case "H5_WINDOWS":
            case 9:
                message.clientType = 9;
                break;
            case "H5_MAC":
            case 10:
                message.clientType = 10;
                break;
            case "kPlatformNum":
            case 11:
                message.clientType = 11;
                break;
            }
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.clientIp != null)
                message.clientIp = String(object.clientIp);
            if (object.appVersion != null)
                message.appVersion = String(object.appVersion);
            if (object.channel != null)
                message.channel = String(object.channel);
            if (object.appInfo != null) {
                if (typeof object.appInfo !== "object")
                    throw TypeError(".AcFunDanmu.RequestBasicInfo.appInfo: object expected");
                message.appInfo = $root.AcFunDanmu.AppInfo.fromObject(object.appInfo);
            }
            if (object.deviceInfo != null) {
                if (typeof object.deviceInfo !== "object")
                    throw TypeError(".AcFunDanmu.RequestBasicInfo.deviceInfo: object expected");
                message.deviceInfo = $root.AcFunDanmu.DeviceInfo.fromObject(object.deviceInfo);
            }
            if (object.envInfo != null) {
                if (typeof object.envInfo !== "object")
                    throw TypeError(".AcFunDanmu.RequestBasicInfo.envInfo: object expected");
                message.envInfo = $root.AcFunDanmu.EnvInfo.fromObject(object.envInfo);
            }
            if (object.clientPort != null)
                message.clientPort = object.clientPort | 0;
            if (object.location != null)
                message.location = String(object.location);
            if (object.kpf != null)
                message.kpf = String(object.kpf);
            return message;
        };

        /**
         * Creates a plain object from a RequestBasicInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.RequestBasicInfo
         * @static
         * @param {AcFunDanmu.RequestBasicInfo} message RequestBasicInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestBasicInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.clientType = options.enums === String ? "kInvalid" : 0;
                object.deviceId = "";
                object.clientIp = "";
                object.appVersion = "";
                object.channel = "";
                object.appInfo = null;
                object.deviceInfo = null;
                object.envInfo = null;
                object.clientPort = 0;
                object.location = "";
                object.kpf = "";
            }
            if (message.clientType != null && message.hasOwnProperty("clientType"))
                object.clientType = options.enums === String ? $root.AcFunDanmu.DeviceInfo.PlatformType[message.clientType] : message.clientType;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                object.clientIp = message.clientIp;
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                object.appVersion = message.appVersion;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.appInfo != null && message.hasOwnProperty("appInfo"))
                object.appInfo = $root.AcFunDanmu.AppInfo.toObject(message.appInfo, options);
            if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
                object.deviceInfo = $root.AcFunDanmu.DeviceInfo.toObject(message.deviceInfo, options);
            if (message.envInfo != null && message.hasOwnProperty("envInfo"))
                object.envInfo = $root.AcFunDanmu.EnvInfo.toObject(message.envInfo, options);
            if (message.clientPort != null && message.hasOwnProperty("clientPort"))
                object.clientPort = message.clientPort;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = message.location;
            if (message.kpf != null && message.hasOwnProperty("kpf"))
                object.kpf = message.kpf;
            return object;
        };

        /**
         * Converts this RequestBasicInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.RequestBasicInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestBasicInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestBasicInfo;
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
