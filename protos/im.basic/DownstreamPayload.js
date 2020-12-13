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

    AcFunDanmu.DownstreamPayload = (function() {

        /**
         * Properties of a DownstreamPayload.
         * @memberof AcFunDanmu
         * @interface IDownstreamPayload
         * @property {string|null} [command] DownstreamPayload command
         * @property {number|Long|null} [seqId] DownstreamPayload seqId
         * @property {number|null} [errorCode] DownstreamPayload errorCode
         * @property {Uint8Array|null} [payloadData] DownstreamPayload payloadData
         * @property {string|null} [errorMsg] DownstreamPayload errorMsg
         * @property {Uint8Array|null} [errorData] DownstreamPayload errorData
         * @property {string|null} [subBiz] DownstreamPayload subBiz
         */

        /**
         * Constructs a new DownstreamPayload.
         * @memberof AcFunDanmu
         * @classdesc Represents a DownstreamPayload.
         * @implements IDownstreamPayload
         * @constructor
         * @param {AcFunDanmu.IDownstreamPayload=} [properties] Properties to set
         */
        function DownstreamPayload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DownstreamPayload command.
         * @member {string} command
         * @memberof AcFunDanmu.DownstreamPayload
         * @instance
         */
        DownstreamPayload.prototype.command = "";

        /**
         * DownstreamPayload seqId.
         * @member {number|Long} seqId
         * @memberof AcFunDanmu.DownstreamPayload
         * @instance
         */
        DownstreamPayload.prototype.seqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DownstreamPayload errorCode.
         * @member {number} errorCode
         * @memberof AcFunDanmu.DownstreamPayload
         * @instance
         */
        DownstreamPayload.prototype.errorCode = 0;

        /**
         * DownstreamPayload payloadData.
         * @member {Uint8Array} payloadData
         * @memberof AcFunDanmu.DownstreamPayload
         * @instance
         */
        DownstreamPayload.prototype.payloadData = $util.newBuffer([]);

        /**
         * DownstreamPayload errorMsg.
         * @member {string} errorMsg
         * @memberof AcFunDanmu.DownstreamPayload
         * @instance
         */
        DownstreamPayload.prototype.errorMsg = "";

        /**
         * DownstreamPayload errorData.
         * @member {Uint8Array} errorData
         * @memberof AcFunDanmu.DownstreamPayload
         * @instance
         */
        DownstreamPayload.prototype.errorData = $util.newBuffer([]);

        /**
         * DownstreamPayload subBiz.
         * @member {string} subBiz
         * @memberof AcFunDanmu.DownstreamPayload
         * @instance
         */
        DownstreamPayload.prototype.subBiz = "";

        /**
         * Creates a new DownstreamPayload instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.DownstreamPayload
         * @static
         * @param {AcFunDanmu.IDownstreamPayload=} [properties] Properties to set
         * @returns {AcFunDanmu.DownstreamPayload} DownstreamPayload instance
         */
        DownstreamPayload.create = function create(properties) {
            return new DownstreamPayload(properties);
        };

        /**
         * Encodes the specified DownstreamPayload message. Does not implicitly {@link AcFunDanmu.DownstreamPayload.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.DownstreamPayload
         * @static
         * @param {AcFunDanmu.IDownstreamPayload} message DownstreamPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownstreamPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
            if (message.seqId != null && Object.hasOwnProperty.call(message, "seqId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seqId);
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.errorCode);
            if (message.payloadData != null && Object.hasOwnProperty.call(message, "payloadData"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payloadData);
            if (message.errorMsg != null && Object.hasOwnProperty.call(message, "errorMsg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.errorMsg);
            if (message.errorData != null && Object.hasOwnProperty.call(message, "errorData"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.errorData);
            if (message.subBiz != null && Object.hasOwnProperty.call(message, "subBiz"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.subBiz);
            return writer;
        };

        /**
         * Encodes the specified DownstreamPayload message, length delimited. Does not implicitly {@link AcFunDanmu.DownstreamPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.DownstreamPayload
         * @static
         * @param {AcFunDanmu.IDownstreamPayload} message DownstreamPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownstreamPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DownstreamPayload message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.DownstreamPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.DownstreamPayload} DownstreamPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownstreamPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.DownstreamPayload();
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
                    message.errorCode = reader.int32();
                    break;
                case 4:
                    message.payloadData = reader.bytes();
                    break;
                case 5:
                    message.errorMsg = reader.string();
                    break;
                case 6:
                    message.errorData = reader.bytes();
                    break;
                case 7:
                    message.subBiz = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DownstreamPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.DownstreamPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.DownstreamPayload} DownstreamPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownstreamPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DownstreamPayload message.
         * @function verify
         * @memberof AcFunDanmu.DownstreamPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DownstreamPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.seqId != null && message.hasOwnProperty("seqId"))
                if (!$util.isInteger(message.seqId) && !(message.seqId && $util.isInteger(message.seqId.low) && $util.isInteger(message.seqId.high)))
                    return "seqId: integer|Long expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            if (message.payloadData != null && message.hasOwnProperty("payloadData"))
                if (!(message.payloadData && typeof message.payloadData.length === "number" || $util.isString(message.payloadData)))
                    return "payloadData: buffer expected";
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                if (!$util.isString(message.errorMsg))
                    return "errorMsg: string expected";
            if (message.errorData != null && message.hasOwnProperty("errorData"))
                if (!(message.errorData && typeof message.errorData.length === "number" || $util.isString(message.errorData)))
                    return "errorData: buffer expected";
            if (message.subBiz != null && message.hasOwnProperty("subBiz"))
                if (!$util.isString(message.subBiz))
                    return "subBiz: string expected";
            return null;
        };

        /**
         * Creates a DownstreamPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.DownstreamPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.DownstreamPayload} DownstreamPayload
         */
        DownstreamPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.DownstreamPayload)
                return object;
            var message = new $root.AcFunDanmu.DownstreamPayload();
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
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            if (object.payloadData != null)
                if (typeof object.payloadData === "string")
                    $util.base64.decode(object.payloadData, message.payloadData = $util.newBuffer($util.base64.length(object.payloadData)), 0);
                else if (object.payloadData.length)
                    message.payloadData = object.payloadData;
            if (object.errorMsg != null)
                message.errorMsg = String(object.errorMsg);
            if (object.errorData != null)
                if (typeof object.errorData === "string")
                    $util.base64.decode(object.errorData, message.errorData = $util.newBuffer($util.base64.length(object.errorData)), 0);
                else if (object.errorData.length)
                    message.errorData = object.errorData;
            if (object.subBiz != null)
                message.subBiz = String(object.subBiz);
            return message;
        };

        /**
         * Creates a plain object from a DownstreamPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.DownstreamPayload
         * @static
         * @param {AcFunDanmu.DownstreamPayload} message DownstreamPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DownstreamPayload.toObject = function toObject(message, options) {
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
                object.errorCode = 0;
                if (options.bytes === String)
                    object.payloadData = "";
                else {
                    object.payloadData = [];
                    if (options.bytes !== Array)
                        object.payloadData = $util.newBuffer(object.payloadData);
                }
                object.errorMsg = "";
                if (options.bytes === String)
                    object.errorData = "";
                else {
                    object.errorData = [];
                    if (options.bytes !== Array)
                        object.errorData = $util.newBuffer(object.errorData);
                }
                object.subBiz = "";
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            if (message.seqId != null && message.hasOwnProperty("seqId"))
                if (typeof message.seqId === "number")
                    object.seqId = options.longs === String ? String(message.seqId) : message.seqId;
                else
                    object.seqId = options.longs === String ? $util.Long.prototype.toString.call(message.seqId) : options.longs === Number ? new $util.LongBits(message.seqId.low >>> 0, message.seqId.high >>> 0).toNumber() : message.seqId;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.payloadData != null && message.hasOwnProperty("payloadData"))
                object.payloadData = options.bytes === String ? $util.base64.encode(message.payloadData, 0, message.payloadData.length) : options.bytes === Array ? Array.prototype.slice.call(message.payloadData) : message.payloadData;
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                object.errorMsg = message.errorMsg;
            if (message.errorData != null && message.hasOwnProperty("errorData"))
                object.errorData = options.bytes === String ? $util.base64.encode(message.errorData, 0, message.errorData.length) : options.bytes === Array ? Array.prototype.slice.call(message.errorData) : message.errorData;
            if (message.subBiz != null && message.hasOwnProperty("subBiz"))
                object.subBiz = message.subBiz;
            return object;
        };

        /**
         * Converts this DownstreamPayload to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.DownstreamPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DownstreamPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DownstreamPayload;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
