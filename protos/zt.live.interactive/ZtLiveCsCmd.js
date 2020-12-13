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

    AcFunDanmu.ZtLiveCsCmd = (function() {

        /**
         * Properties of a ZtLiveCsCmd.
         * @memberof AcFunDanmu
         * @interface IZtLiveCsCmd
         * @property {string|null} [cmdType] ZtLiveCsCmd cmdType
         * @property {Uint8Array|null} [payload] ZtLiveCsCmd payload
         * @property {string|null} [ticket] ZtLiveCsCmd ticket
         * @property {string|null} [liveId] ZtLiveCsCmd liveId
         */

        /**
         * Constructs a new ZtLiveCsCmd.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveCsCmd.
         * @implements IZtLiveCsCmd
         * @constructor
         * @param {AcFunDanmu.IZtLiveCsCmd=} [properties] Properties to set
         */
        function ZtLiveCsCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveCsCmd cmdType.
         * @member {string} cmdType
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @instance
         */
        ZtLiveCsCmd.prototype.cmdType = "";

        /**
         * ZtLiveCsCmd payload.
         * @member {Uint8Array} payload
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @instance
         */
        ZtLiveCsCmd.prototype.payload = $util.newBuffer([]);

        /**
         * ZtLiveCsCmd ticket.
         * @member {string} ticket
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @instance
         */
        ZtLiveCsCmd.prototype.ticket = "";

        /**
         * ZtLiveCsCmd liveId.
         * @member {string} liveId
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @instance
         */
        ZtLiveCsCmd.prototype.liveId = "";

        /**
         * Creates a new ZtLiveCsCmd instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @static
         * @param {AcFunDanmu.IZtLiveCsCmd=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveCsCmd} ZtLiveCsCmd instance
         */
        ZtLiveCsCmd.create = function create(properties) {
            return new ZtLiveCsCmd(properties);
        };

        /**
         * Encodes the specified ZtLiveCsCmd message. Does not implicitly {@link AcFunDanmu.ZtLiveCsCmd.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @static
         * @param {AcFunDanmu.IZtLiveCsCmd} message ZtLiveCsCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmdType != null && Object.hasOwnProperty.call(message, "cmdType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cmdType);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ticket);
            if (message.liveId != null && Object.hasOwnProperty.call(message, "liveId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.liveId);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveCsCmd message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveCsCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @static
         * @param {AcFunDanmu.IZtLiveCsCmd} message ZtLiveCsCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveCsCmd message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveCsCmd} ZtLiveCsCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveCsCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmdType = reader.string();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                case 3:
                    message.ticket = reader.string();
                    break;
                case 4:
                    message.liveId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveCsCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveCsCmd} ZtLiveCsCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveCsCmd message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveCsCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmdType != null && message.hasOwnProperty("cmdType"))
                if (!$util.isString(message.cmdType))
                    return "cmdType: string expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!$util.isString(message.ticket))
                    return "ticket: string expected";
            if (message.liveId != null && message.hasOwnProperty("liveId"))
                if (!$util.isString(message.liveId))
                    return "liveId: string expected";
            return null;
        };

        /**
         * Creates a ZtLiveCsCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveCsCmd} ZtLiveCsCmd
         */
        ZtLiveCsCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveCsCmd)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveCsCmd();
            if (object.cmdType != null)
                message.cmdType = String(object.cmdType);
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            if (object.ticket != null)
                message.ticket = String(object.ticket);
            if (object.liveId != null)
                message.liveId = String(object.liveId);
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveCsCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @static
         * @param {AcFunDanmu.ZtLiveCsCmd} message ZtLiveCsCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveCsCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmdType = "";
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
                object.ticket = "";
                object.liveId = "";
            }
            if (message.cmdType != null && message.hasOwnProperty("cmdType"))
                object.cmdType = message.cmdType;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = message.ticket;
            if (message.liveId != null && message.hasOwnProperty("liveId"))
                object.liveId = message.liveId;
            return object;
        };

        /**
         * Converts this ZtLiveCsCmd to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveCsCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveCsCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveCsCmd;
    })();

    AcFunDanmu.ZtLiveCsCmdAck = (function() {

        /**
         * Properties of a ZtLiveCsCmdAck.
         * @memberof AcFunDanmu
         * @interface IZtLiveCsCmdAck
         * @property {string|null} [cmdAckType] ZtLiveCsCmdAck cmdAckType
         * @property {number|Long|null} [errorCode] ZtLiveCsCmdAck errorCode
         * @property {string|null} [errorMsg] ZtLiveCsCmdAck errorMsg
         * @property {Uint8Array|null} [payload] ZtLiveCsCmdAck payload
         */

        /**
         * Constructs a new ZtLiveCsCmdAck.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveCsCmdAck.
         * @implements IZtLiveCsCmdAck
         * @constructor
         * @param {AcFunDanmu.IZtLiveCsCmdAck=} [properties] Properties to set
         */
        function ZtLiveCsCmdAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveCsCmdAck cmdAckType.
         * @member {string} cmdAckType
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @instance
         */
        ZtLiveCsCmdAck.prototype.cmdAckType = "";

        /**
         * ZtLiveCsCmdAck errorCode.
         * @member {number|Long} errorCode
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @instance
         */
        ZtLiveCsCmdAck.prototype.errorCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtLiveCsCmdAck errorMsg.
         * @member {string} errorMsg
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @instance
         */
        ZtLiveCsCmdAck.prototype.errorMsg = "";

        /**
         * ZtLiveCsCmdAck payload.
         * @member {Uint8Array} payload
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @instance
         */
        ZtLiveCsCmdAck.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new ZtLiveCsCmdAck instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsCmdAck=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveCsCmdAck} ZtLiveCsCmdAck instance
         */
        ZtLiveCsCmdAck.create = function create(properties) {
            return new ZtLiveCsCmdAck(properties);
        };

        /**
         * Encodes the specified ZtLiveCsCmdAck message. Does not implicitly {@link AcFunDanmu.ZtLiveCsCmdAck.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsCmdAck} message ZtLiveCsCmdAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsCmdAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmdAckType != null && Object.hasOwnProperty.call(message, "cmdAckType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cmdAckType);
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.errorCode);
            if (message.errorMsg != null && Object.hasOwnProperty.call(message, "errorMsg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorMsg);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveCsCmdAck message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveCsCmdAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsCmdAck} message ZtLiveCsCmdAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsCmdAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveCsCmdAck message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveCsCmdAck} ZtLiveCsCmdAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsCmdAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveCsCmdAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmdAckType = reader.string();
                    break;
                case 2:
                    message.errorCode = reader.int64();
                    break;
                case 3:
                    message.errorMsg = reader.string();
                    break;
                case 4:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveCsCmdAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveCsCmdAck} ZtLiveCsCmdAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsCmdAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveCsCmdAck message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveCsCmdAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmdAckType != null && message.hasOwnProperty("cmdAckType"))
                if (!$util.isString(message.cmdAckType))
                    return "cmdAckType: string expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode) && !(message.errorCode && $util.isInteger(message.errorCode.low) && $util.isInteger(message.errorCode.high)))
                    return "errorCode: integer|Long expected";
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                if (!$util.isString(message.errorMsg))
                    return "errorMsg: string expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a ZtLiveCsCmdAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveCsCmdAck} ZtLiveCsCmdAck
         */
        ZtLiveCsCmdAck.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveCsCmdAck)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveCsCmdAck();
            if (object.cmdAckType != null)
                message.cmdAckType = String(object.cmdAckType);
            if (object.errorCode != null)
                if ($util.Long)
                    (message.errorCode = $util.Long.fromValue(object.errorCode)).unsigned = false;
                else if (typeof object.errorCode === "string")
                    message.errorCode = parseInt(object.errorCode, 10);
                else if (typeof object.errorCode === "number")
                    message.errorCode = object.errorCode;
                else if (typeof object.errorCode === "object")
                    message.errorCode = new $util.LongBits(object.errorCode.low >>> 0, object.errorCode.high >>> 0).toNumber();
            if (object.errorMsg != null)
                message.errorMsg = String(object.errorMsg);
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveCsCmdAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @static
         * @param {AcFunDanmu.ZtLiveCsCmdAck} message ZtLiveCsCmdAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveCsCmdAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmdAckType = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.errorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.errorCode = options.longs === String ? "0" : 0;
                object.errorMsg = "";
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.cmdAckType != null && message.hasOwnProperty("cmdAckType"))
                object.cmdAckType = message.cmdAckType;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (typeof message.errorCode === "number")
                    object.errorCode = options.longs === String ? String(message.errorCode) : message.errorCode;
                else
                    object.errorCode = options.longs === String ? $util.Long.prototype.toString.call(message.errorCode) : options.longs === Number ? new $util.LongBits(message.errorCode.low >>> 0, message.errorCode.high >>> 0).toNumber() : message.errorCode;
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                object.errorMsg = message.errorMsg;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this ZtLiveCsCmdAck to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveCsCmdAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveCsCmdAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveCsCmdAck;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
