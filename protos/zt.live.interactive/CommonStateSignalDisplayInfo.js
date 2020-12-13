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

    AcFunDanmu.CommonStateSignalDisplayInfo = (function() {

        /**
         * Properties of a CommonStateSignalDisplayInfo.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalDisplayInfo
         * @property {string|null} [watchingCount] CommonStateSignalDisplayInfo watchingCount
         * @property {string|null} [likeCount] CommonStateSignalDisplayInfo likeCount
         * @property {number|null} [likeDelta] CommonStateSignalDisplayInfo likeDelta
         */

        /**
         * Constructs a new CommonStateSignalDisplayInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalDisplayInfo.
         * @implements ICommonStateSignalDisplayInfo
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalDisplayInfo=} [properties] Properties to set
         */
        function CommonStateSignalDisplayInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalDisplayInfo watchingCount.
         * @member {string} watchingCount
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @instance
         */
        CommonStateSignalDisplayInfo.prototype.watchingCount = "";

        /**
         * CommonStateSignalDisplayInfo likeCount.
         * @member {string} likeCount
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @instance
         */
        CommonStateSignalDisplayInfo.prototype.likeCount = "";

        /**
         * CommonStateSignalDisplayInfo likeDelta.
         * @member {number} likeDelta
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @instance
         */
        CommonStateSignalDisplayInfo.prototype.likeDelta = 0;

        /**
         * Creates a new CommonStateSignalDisplayInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @static
         * @param {AcFunDanmu.ICommonStateSignalDisplayInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalDisplayInfo} CommonStateSignalDisplayInfo instance
         */
        CommonStateSignalDisplayInfo.create = function create(properties) {
            return new CommonStateSignalDisplayInfo(properties);
        };

        /**
         * Encodes the specified CommonStateSignalDisplayInfo message. Does not implicitly {@link AcFunDanmu.CommonStateSignalDisplayInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @static
         * @param {AcFunDanmu.ICommonStateSignalDisplayInfo} message CommonStateSignalDisplayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalDisplayInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.watchingCount != null && Object.hasOwnProperty.call(message, "watchingCount"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.watchingCount);
            if (message.likeCount != null && Object.hasOwnProperty.call(message, "likeCount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.likeCount);
            if (message.likeDelta != null && Object.hasOwnProperty.call(message, "likeDelta"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.likeDelta);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalDisplayInfo message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalDisplayInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @static
         * @param {AcFunDanmu.ICommonStateSignalDisplayInfo} message CommonStateSignalDisplayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalDisplayInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalDisplayInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalDisplayInfo} CommonStateSignalDisplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalDisplayInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalDisplayInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.watchingCount = reader.string();
                    break;
                case 2:
                    message.likeCount = reader.string();
                    break;
                case 3:
                    message.likeDelta = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalDisplayInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalDisplayInfo} CommonStateSignalDisplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalDisplayInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalDisplayInfo message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalDisplayInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.watchingCount != null && message.hasOwnProperty("watchingCount"))
                if (!$util.isString(message.watchingCount))
                    return "watchingCount: string expected";
            if (message.likeCount != null && message.hasOwnProperty("likeCount"))
                if (!$util.isString(message.likeCount))
                    return "likeCount: string expected";
            if (message.likeDelta != null && message.hasOwnProperty("likeDelta"))
                if (!$util.isInteger(message.likeDelta))
                    return "likeDelta: integer expected";
            return null;
        };

        /**
         * Creates a CommonStateSignalDisplayInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalDisplayInfo} CommonStateSignalDisplayInfo
         */
        CommonStateSignalDisplayInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalDisplayInfo)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalDisplayInfo();
            if (object.watchingCount != null)
                message.watchingCount = String(object.watchingCount);
            if (object.likeCount != null)
                message.likeCount = String(object.likeCount);
            if (object.likeDelta != null)
                message.likeDelta = object.likeDelta | 0;
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalDisplayInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @static
         * @param {AcFunDanmu.CommonStateSignalDisplayInfo} message CommonStateSignalDisplayInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalDisplayInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.watchingCount = "";
                object.likeCount = "";
                object.likeDelta = 0;
            }
            if (message.watchingCount != null && message.hasOwnProperty("watchingCount"))
                object.watchingCount = message.watchingCount;
            if (message.likeCount != null && message.hasOwnProperty("likeCount"))
                object.likeCount = message.likeCount;
            if (message.likeDelta != null && message.hasOwnProperty("likeDelta"))
                object.likeDelta = message.likeDelta;
            return object;
        };

        /**
         * Converts this CommonStateSignalDisplayInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalDisplayInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalDisplayInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonStateSignalDisplayInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
