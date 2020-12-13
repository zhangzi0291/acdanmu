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

    return AcFunDanmu;
})();

module.exports = $root;
