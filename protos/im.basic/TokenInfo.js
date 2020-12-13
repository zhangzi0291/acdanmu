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

    AcFunDanmu.TokenInfo = (function() {

        /**
         * Properties of a TokenInfo.
         * @memberof AcFunDanmu
         * @interface ITokenInfo
         * @property {AcFunDanmu.TokenInfo.TokenType|null} [tokenType] TokenInfo tokenType
         * @property {Uint8Array|null} [token] TokenInfo token
         */

        /**
         * Constructs a new TokenInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a TokenInfo.
         * @implements ITokenInfo
         * @constructor
         * @param {AcFunDanmu.ITokenInfo=} [properties] Properties to set
         */
        function TokenInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenInfo tokenType.
         * @member {AcFunDanmu.TokenInfo.TokenType} tokenType
         * @memberof AcFunDanmu.TokenInfo
         * @instance
         */
        TokenInfo.prototype.tokenType = 0;

        /**
         * TokenInfo token.
         * @member {Uint8Array} token
         * @memberof AcFunDanmu.TokenInfo
         * @instance
         */
        TokenInfo.prototype.token = $util.newBuffer([]);

        /**
         * Creates a new TokenInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {AcFunDanmu.ITokenInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.TokenInfo} TokenInfo instance
         */
        TokenInfo.create = function create(properties) {
            return new TokenInfo(properties);
        };

        /**
         * Encodes the specified TokenInfo message. Does not implicitly {@link AcFunDanmu.TokenInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {AcFunDanmu.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tokenType != null && Object.hasOwnProperty.call(message, "tokenType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tokenType);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.token);
            return writer;
        };

        /**
         * Encodes the specified TokenInfo message, length delimited. Does not implicitly {@link AcFunDanmu.TokenInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {AcFunDanmu.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.TokenInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tokenType = reader.int32();
                    break;
                case 2:
                    message.token = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenInfo message.
         * @function verify
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tokenType != null && message.hasOwnProperty("tokenType"))
                switch (message.tokenType) {
                default:
                    return "tokenType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            return null;
        };

        /**
         * Creates a TokenInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.TokenInfo} TokenInfo
         */
        TokenInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.TokenInfo)
                return object;
            var message = new $root.AcFunDanmu.TokenInfo();
            switch (object.tokenType) {
            case "kInvalid":
            case 0:
                message.tokenType = 0;
                break;
            case "kServiceToken":
            case 1:
                message.tokenType = 1;
                break;
            }
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            return message;
        };

        /**
         * Creates a plain object from a TokenInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.TokenInfo
         * @static
         * @param {AcFunDanmu.TokenInfo} message TokenInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tokenType = options.enums === String ? "kInvalid" : 0;
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
            }
            if (message.tokenType != null && message.hasOwnProperty("tokenType"))
                object.tokenType = options.enums === String ? $root.AcFunDanmu.TokenInfo.TokenType[message.tokenType] : message.tokenType;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            return object;
        };

        /**
         * Converts this TokenInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.TokenInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * TokenType enum.
         * @name AcFunDanmu.TokenInfo.TokenType
         * @enum {number}
         * @property {number} kInvalid=0 kInvalid value
         * @property {number} kServiceToken=1 kServiceToken value
         */
        TokenInfo.TokenType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kInvalid"] = 0;
            values[valuesById[1] = "kServiceToken"] = 1;
            return values;
        })();

        return TokenInfo;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
