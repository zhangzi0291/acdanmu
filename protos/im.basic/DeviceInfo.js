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

    return AcFunDanmu;
})();

module.exports = $root;
