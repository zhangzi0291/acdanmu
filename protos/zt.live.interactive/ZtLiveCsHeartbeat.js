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

    AcFunDanmu.ZtLiveCsHeartbeat = (function() {

        /**
         * Properties of a ZtLiveCsHeartbeat.
         * @memberof AcFunDanmu
         * @interface IZtLiveCsHeartbeat
         * @property {number|Long|null} [clientTimestampMs] ZtLiveCsHeartbeat clientTimestampMs
         * @property {number|Long|null} [sequence] ZtLiveCsHeartbeat sequence
         */

        /**
         * Constructs a new ZtLiveCsHeartbeat.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveCsHeartbeat.
         * @implements IZtLiveCsHeartbeat
         * @constructor
         * @param {AcFunDanmu.IZtLiveCsHeartbeat=} [properties] Properties to set
         */
        function ZtLiveCsHeartbeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveCsHeartbeat clientTimestampMs.
         * @member {number|Long} clientTimestampMs
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @instance
         */
        ZtLiveCsHeartbeat.prototype.clientTimestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtLiveCsHeartbeat sequence.
         * @member {number|Long} sequence
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @instance
         */
        ZtLiveCsHeartbeat.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ZtLiveCsHeartbeat instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @static
         * @param {AcFunDanmu.IZtLiveCsHeartbeat=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveCsHeartbeat} ZtLiveCsHeartbeat instance
         */
        ZtLiveCsHeartbeat.create = function create(properties) {
            return new ZtLiveCsHeartbeat(properties);
        };

        /**
         * Encodes the specified ZtLiveCsHeartbeat message. Does not implicitly {@link AcFunDanmu.ZtLiveCsHeartbeat.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @static
         * @param {AcFunDanmu.IZtLiveCsHeartbeat} message ZtLiveCsHeartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsHeartbeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientTimestampMs != null && Object.hasOwnProperty.call(message, "clientTimestampMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.clientTimestampMs);
            if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sequence);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveCsHeartbeat message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveCsHeartbeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @static
         * @param {AcFunDanmu.IZtLiveCsHeartbeat} message ZtLiveCsHeartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsHeartbeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveCsHeartbeat message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveCsHeartbeat} ZtLiveCsHeartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsHeartbeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveCsHeartbeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientTimestampMs = reader.int64();
                    break;
                case 2:
                    message.sequence = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveCsHeartbeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveCsHeartbeat} ZtLiveCsHeartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsHeartbeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveCsHeartbeat message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveCsHeartbeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientTimestampMs != null && message.hasOwnProperty("clientTimestampMs"))
                if (!$util.isInteger(message.clientTimestampMs) && !(message.clientTimestampMs && $util.isInteger(message.clientTimestampMs.low) && $util.isInteger(message.clientTimestampMs.high)))
                    return "clientTimestampMs: integer|Long expected";
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (!$util.isInteger(message.sequence) && !(message.sequence && $util.isInteger(message.sequence.low) && $util.isInteger(message.sequence.high)))
                    return "sequence: integer|Long expected";
            return null;
        };

        /**
         * Creates a ZtLiveCsHeartbeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveCsHeartbeat} ZtLiveCsHeartbeat
         */
        ZtLiveCsHeartbeat.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveCsHeartbeat)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveCsHeartbeat();
            if (object.clientTimestampMs != null)
                if ($util.Long)
                    (message.clientTimestampMs = $util.Long.fromValue(object.clientTimestampMs)).unsigned = false;
                else if (typeof object.clientTimestampMs === "string")
                    message.clientTimestampMs = parseInt(object.clientTimestampMs, 10);
                else if (typeof object.clientTimestampMs === "number")
                    message.clientTimestampMs = object.clientTimestampMs;
                else if (typeof object.clientTimestampMs === "object")
                    message.clientTimestampMs = new $util.LongBits(object.clientTimestampMs.low >>> 0, object.clientTimestampMs.high >>> 0).toNumber();
            if (object.sequence != null)
                if ($util.Long)
                    (message.sequence = $util.Long.fromValue(object.sequence)).unsigned = false;
                else if (typeof object.sequence === "string")
                    message.sequence = parseInt(object.sequence, 10);
                else if (typeof object.sequence === "number")
                    message.sequence = object.sequence;
                else if (typeof object.sequence === "object")
                    message.sequence = new $util.LongBits(object.sequence.low >>> 0, object.sequence.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveCsHeartbeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @static
         * @param {AcFunDanmu.ZtLiveCsHeartbeat} message ZtLiveCsHeartbeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveCsHeartbeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientTimestampMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientTimestampMs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sequence = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sequence = options.longs === String ? "0" : 0;
            }
            if (message.clientTimestampMs != null && message.hasOwnProperty("clientTimestampMs"))
                if (typeof message.clientTimestampMs === "number")
                    object.clientTimestampMs = options.longs === String ? String(message.clientTimestampMs) : message.clientTimestampMs;
                else
                    object.clientTimestampMs = options.longs === String ? $util.Long.prototype.toString.call(message.clientTimestampMs) : options.longs === Number ? new $util.LongBits(message.clientTimestampMs.low >>> 0, message.clientTimestampMs.high >>> 0).toNumber() : message.clientTimestampMs;
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (typeof message.sequence === "number")
                    object.sequence = options.longs === String ? String(message.sequence) : message.sequence;
                else
                    object.sequence = options.longs === String ? $util.Long.prototype.toString.call(message.sequence) : options.longs === Number ? new $util.LongBits(message.sequence.low >>> 0, message.sequence.high >>> 0).toNumber() : message.sequence;
            return object;
        };

        /**
         * Converts this ZtLiveCsHeartbeat to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveCsHeartbeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveCsHeartbeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveCsHeartbeat;
    })();

    AcFunDanmu.ZtLiveCsHeartbeatAck = (function() {

        /**
         * Properties of a ZtLiveCsHeartbeatAck.
         * @memberof AcFunDanmu
         * @interface IZtLiveCsHeartbeatAck
         * @property {number|Long|null} [serverTimestampMs] ZtLiveCsHeartbeatAck serverTimestampMs
         * @property {number|Long|null} [clientTimestampMs] ZtLiveCsHeartbeatAck clientTimestampMs
         * @property {number|Long|null} [clientSequence] ZtLiveCsHeartbeatAck clientSequence
         */

        /**
         * Constructs a new ZtLiveCsHeartbeatAck.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveCsHeartbeatAck.
         * @implements IZtLiveCsHeartbeatAck
         * @constructor
         * @param {AcFunDanmu.IZtLiveCsHeartbeatAck=} [properties] Properties to set
         */
        function ZtLiveCsHeartbeatAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveCsHeartbeatAck serverTimestampMs.
         * @member {number|Long} serverTimestampMs
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @instance
         */
        ZtLiveCsHeartbeatAck.prototype.serverTimestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtLiveCsHeartbeatAck clientTimestampMs.
         * @member {number|Long} clientTimestampMs
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @instance
         */
        ZtLiveCsHeartbeatAck.prototype.clientTimestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtLiveCsHeartbeatAck clientSequence.
         * @member {number|Long} clientSequence
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @instance
         */
        ZtLiveCsHeartbeatAck.prototype.clientSequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ZtLiveCsHeartbeatAck instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsHeartbeatAck=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveCsHeartbeatAck} ZtLiveCsHeartbeatAck instance
         */
        ZtLiveCsHeartbeatAck.create = function create(properties) {
            return new ZtLiveCsHeartbeatAck(properties);
        };

        /**
         * Encodes the specified ZtLiveCsHeartbeatAck message. Does not implicitly {@link AcFunDanmu.ZtLiveCsHeartbeatAck.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsHeartbeatAck} message ZtLiveCsHeartbeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsHeartbeatAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverTimestampMs != null && Object.hasOwnProperty.call(message, "serverTimestampMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serverTimestampMs);
            if (message.clientTimestampMs != null && Object.hasOwnProperty.call(message, "clientTimestampMs"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.clientTimestampMs);
            if (message.clientSequence != null && Object.hasOwnProperty.call(message, "clientSequence"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.clientSequence);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveCsHeartbeatAck message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveCsHeartbeatAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsHeartbeatAck} message ZtLiveCsHeartbeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsHeartbeatAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveCsHeartbeatAck message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveCsHeartbeatAck} ZtLiveCsHeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsHeartbeatAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveCsHeartbeatAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverTimestampMs = reader.int64();
                    break;
                case 2:
                    message.clientTimestampMs = reader.int64();
                    break;
                case 3:
                    message.clientSequence = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveCsHeartbeatAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveCsHeartbeatAck} ZtLiveCsHeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsHeartbeatAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveCsHeartbeatAck message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveCsHeartbeatAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverTimestampMs != null && message.hasOwnProperty("serverTimestampMs"))
                if (!$util.isInteger(message.serverTimestampMs) && !(message.serverTimestampMs && $util.isInteger(message.serverTimestampMs.low) && $util.isInteger(message.serverTimestampMs.high)))
                    return "serverTimestampMs: integer|Long expected";
            if (message.clientTimestampMs != null && message.hasOwnProperty("clientTimestampMs"))
                if (!$util.isInteger(message.clientTimestampMs) && !(message.clientTimestampMs && $util.isInteger(message.clientTimestampMs.low) && $util.isInteger(message.clientTimestampMs.high)))
                    return "clientTimestampMs: integer|Long expected";
            if (message.clientSequence != null && message.hasOwnProperty("clientSequence"))
                if (!$util.isInteger(message.clientSequence) && !(message.clientSequence && $util.isInteger(message.clientSequence.low) && $util.isInteger(message.clientSequence.high)))
                    return "clientSequence: integer|Long expected";
            return null;
        };

        /**
         * Creates a ZtLiveCsHeartbeatAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveCsHeartbeatAck} ZtLiveCsHeartbeatAck
         */
        ZtLiveCsHeartbeatAck.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveCsHeartbeatAck)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveCsHeartbeatAck();
            if (object.serverTimestampMs != null)
                if ($util.Long)
                    (message.serverTimestampMs = $util.Long.fromValue(object.serverTimestampMs)).unsigned = false;
                else if (typeof object.serverTimestampMs === "string")
                    message.serverTimestampMs = parseInt(object.serverTimestampMs, 10);
                else if (typeof object.serverTimestampMs === "number")
                    message.serverTimestampMs = object.serverTimestampMs;
                else if (typeof object.serverTimestampMs === "object")
                    message.serverTimestampMs = new $util.LongBits(object.serverTimestampMs.low >>> 0, object.serverTimestampMs.high >>> 0).toNumber();
            if (object.clientTimestampMs != null)
                if ($util.Long)
                    (message.clientTimestampMs = $util.Long.fromValue(object.clientTimestampMs)).unsigned = false;
                else if (typeof object.clientTimestampMs === "string")
                    message.clientTimestampMs = parseInt(object.clientTimestampMs, 10);
                else if (typeof object.clientTimestampMs === "number")
                    message.clientTimestampMs = object.clientTimestampMs;
                else if (typeof object.clientTimestampMs === "object")
                    message.clientTimestampMs = new $util.LongBits(object.clientTimestampMs.low >>> 0, object.clientTimestampMs.high >>> 0).toNumber();
            if (object.clientSequence != null)
                if ($util.Long)
                    (message.clientSequence = $util.Long.fromValue(object.clientSequence)).unsigned = false;
                else if (typeof object.clientSequence === "string")
                    message.clientSequence = parseInt(object.clientSequence, 10);
                else if (typeof object.clientSequence === "number")
                    message.clientSequence = object.clientSequence;
                else if (typeof object.clientSequence === "object")
                    message.clientSequence = new $util.LongBits(object.clientSequence.low >>> 0, object.clientSequence.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveCsHeartbeatAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @static
         * @param {AcFunDanmu.ZtLiveCsHeartbeatAck} message ZtLiveCsHeartbeatAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveCsHeartbeatAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTimestampMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTimestampMs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientTimestampMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientTimestampMs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientSequence = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientSequence = options.longs === String ? "0" : 0;
            }
            if (message.serverTimestampMs != null && message.hasOwnProperty("serverTimestampMs"))
                if (typeof message.serverTimestampMs === "number")
                    object.serverTimestampMs = options.longs === String ? String(message.serverTimestampMs) : message.serverTimestampMs;
                else
                    object.serverTimestampMs = options.longs === String ? $util.Long.prototype.toString.call(message.serverTimestampMs) : options.longs === Number ? new $util.LongBits(message.serverTimestampMs.low >>> 0, message.serverTimestampMs.high >>> 0).toNumber() : message.serverTimestampMs;
            if (message.clientTimestampMs != null && message.hasOwnProperty("clientTimestampMs"))
                if (typeof message.clientTimestampMs === "number")
                    object.clientTimestampMs = options.longs === String ? String(message.clientTimestampMs) : message.clientTimestampMs;
                else
                    object.clientTimestampMs = options.longs === String ? $util.Long.prototype.toString.call(message.clientTimestampMs) : options.longs === Number ? new $util.LongBits(message.clientTimestampMs.low >>> 0, message.clientTimestampMs.high >>> 0).toNumber() : message.clientTimestampMs;
            if (message.clientSequence != null && message.hasOwnProperty("clientSequence"))
                if (typeof message.clientSequence === "number")
                    object.clientSequence = options.longs === String ? String(message.clientSequence) : message.clientSequence;
                else
                    object.clientSequence = options.longs === String ? $util.Long.prototype.toString.call(message.clientSequence) : options.longs === Number ? new $util.LongBits(message.clientSequence.low >>> 0, message.clientSequence.high >>> 0).toNumber() : message.clientSequence;
            return object;
        };

        /**
         * Converts this ZtLiveCsHeartbeatAck to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveCsHeartbeatAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveCsHeartbeatAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveCsHeartbeatAck;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
