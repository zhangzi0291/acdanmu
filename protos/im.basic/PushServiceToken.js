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

    return AcFunDanmu;
})();

module.exports = $root;
