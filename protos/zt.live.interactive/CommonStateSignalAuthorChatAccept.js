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

    AcFunDanmu.CommonStateSignalAuthorChatAccept = (function() {

        /**
         * Properties of a CommonStateSignalAuthorChatAccept.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalAuthorChatAccept
         * @property {string|null} [authorChatId] CommonStateSignalAuthorChatAccept authorChatId
         * @property {string|null} [aryaSignalInfo] CommonStateSignalAuthorChatAccept aryaSignalInfo
         */

        /**
         * Constructs a new CommonStateSignalAuthorChatAccept.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalAuthorChatAccept.
         * @implements ICommonStateSignalAuthorChatAccept
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatAccept=} [properties] Properties to set
         */
        function CommonStateSignalAuthorChatAccept(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalAuthorChatAccept authorChatId.
         * @member {string} authorChatId
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @instance
         */
        CommonStateSignalAuthorChatAccept.prototype.authorChatId = "";

        /**
         * CommonStateSignalAuthorChatAccept aryaSignalInfo.
         * @member {string} aryaSignalInfo
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @instance
         */
        CommonStateSignalAuthorChatAccept.prototype.aryaSignalInfo = "";

        /**
         * Creates a new CommonStateSignalAuthorChatAccept instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @static
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatAccept=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatAccept} CommonStateSignalAuthorChatAccept instance
         */
        CommonStateSignalAuthorChatAccept.create = function create(properties) {
            return new CommonStateSignalAuthorChatAccept(properties);
        };

        /**
         * Encodes the specified CommonStateSignalAuthorChatAccept message. Does not implicitly {@link AcFunDanmu.CommonStateSignalAuthorChatAccept.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @static
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatAccept} message CommonStateSignalAuthorChatAccept message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalAuthorChatAccept.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authorChatId != null && Object.hasOwnProperty.call(message, "authorChatId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.authorChatId);
            if (message.aryaSignalInfo != null && Object.hasOwnProperty.call(message, "aryaSignalInfo"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.aryaSignalInfo);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalAuthorChatAccept message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalAuthorChatAccept.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @static
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatAccept} message CommonStateSignalAuthorChatAccept message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalAuthorChatAccept.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalAuthorChatAccept message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatAccept} CommonStateSignalAuthorChatAccept
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalAuthorChatAccept.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalAuthorChatAccept();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authorChatId = reader.string();
                    break;
                case 2:
                    message.aryaSignalInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalAuthorChatAccept message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatAccept} CommonStateSignalAuthorChatAccept
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalAuthorChatAccept.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalAuthorChatAccept message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalAuthorChatAccept.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authorChatId != null && message.hasOwnProperty("authorChatId"))
                if (!$util.isString(message.authorChatId))
                    return "authorChatId: string expected";
            if (message.aryaSignalInfo != null && message.hasOwnProperty("aryaSignalInfo"))
                if (!$util.isString(message.aryaSignalInfo))
                    return "aryaSignalInfo: string expected";
            return null;
        };

        /**
         * Creates a CommonStateSignalAuthorChatAccept message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatAccept} CommonStateSignalAuthorChatAccept
         */
        CommonStateSignalAuthorChatAccept.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalAuthorChatAccept)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalAuthorChatAccept();
            if (object.authorChatId != null)
                message.authorChatId = String(object.authorChatId);
            if (object.aryaSignalInfo != null)
                message.aryaSignalInfo = String(object.aryaSignalInfo);
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalAuthorChatAccept message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @static
         * @param {AcFunDanmu.CommonStateSignalAuthorChatAccept} message CommonStateSignalAuthorChatAccept
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalAuthorChatAccept.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authorChatId = "";
                object.aryaSignalInfo = "";
            }
            if (message.authorChatId != null && message.hasOwnProperty("authorChatId"))
                object.authorChatId = message.authorChatId;
            if (message.aryaSignalInfo != null && message.hasOwnProperty("aryaSignalInfo"))
                object.aryaSignalInfo = message.aryaSignalInfo;
            return object;
        };

        /**
         * Converts this CommonStateSignalAuthorChatAccept to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatAccept
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalAuthorChatAccept.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonStateSignalAuthorChatAccept;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
