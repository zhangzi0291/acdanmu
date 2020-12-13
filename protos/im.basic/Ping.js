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

    AcFunDanmu.PingRequest = (function() {

        /**
         * Properties of a PingRequest.
         * @memberof AcFunDanmu
         * @interface IPingRequest
         * @property {AcFunDanmu.PingRequest.PingType|null} [pingType] PingRequest pingType
         * @property {number|null} [pingRound] PingRequest pingRound
         */

        /**
         * Constructs a new PingRequest.
         * @memberof AcFunDanmu
         * @classdesc Represents a PingRequest.
         * @implements IPingRequest
         * @constructor
         * @param {AcFunDanmu.IPingRequest=} [properties] Properties to set
         */
        function PingRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingRequest pingType.
         * @member {AcFunDanmu.PingRequest.PingType} pingType
         * @memberof AcFunDanmu.PingRequest
         * @instance
         */
        PingRequest.prototype.pingType = 0;

        /**
         * PingRequest pingRound.
         * @member {number} pingRound
         * @memberof AcFunDanmu.PingRequest
         * @instance
         */
        PingRequest.prototype.pingRound = 0;

        /**
         * Creates a new PingRequest instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PingRequest
         * @static
         * @param {AcFunDanmu.IPingRequest=} [properties] Properties to set
         * @returns {AcFunDanmu.PingRequest} PingRequest instance
         */
        PingRequest.create = function create(properties) {
            return new PingRequest(properties);
        };

        /**
         * Encodes the specified PingRequest message. Does not implicitly {@link AcFunDanmu.PingRequest.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PingRequest
         * @static
         * @param {AcFunDanmu.IPingRequest} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pingType != null && Object.hasOwnProperty.call(message, "pingType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pingType);
            if (message.pingRound != null && Object.hasOwnProperty.call(message, "pingRound"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pingRound);
            return writer;
        };

        /**
         * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link AcFunDanmu.PingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PingRequest
         * @static
         * @param {AcFunDanmu.IPingRequest} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PingRequest} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PingRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pingType = reader.int32();
                    break;
                case 2:
                    message.pingRound = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PingRequest} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingRequest message.
         * @function verify
         * @memberof AcFunDanmu.PingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pingType != null && message.hasOwnProperty("pingType"))
                switch (message.pingType) {
                default:
                    return "pingType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.pingRound != null && message.hasOwnProperty("pingRound"))
                if (!$util.isInteger(message.pingRound))
                    return "pingRound: integer expected";
            return null;
        };

        /**
         * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PingRequest} PingRequest
         */
        PingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PingRequest)
                return object;
            var message = new $root.AcFunDanmu.PingRequest();
            switch (object.pingType) {
            case "kInvalid":
            case 0:
                message.pingType = 0;
                break;
            case "kPriorRegister":
            case 1:
                message.pingType = 1;
                break;
            case "kPostRegister":
            case 2:
                message.pingType = 2;
                break;
            }
            if (object.pingRound != null)
                message.pingRound = object.pingRound >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PingRequest
         * @static
         * @param {AcFunDanmu.PingRequest} message PingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pingType = options.enums === String ? "kInvalid" : 0;
                object.pingRound = 0;
            }
            if (message.pingType != null && message.hasOwnProperty("pingType"))
                object.pingType = options.enums === String ? $root.AcFunDanmu.PingRequest.PingType[message.pingType] : message.pingType;
            if (message.pingRound != null && message.hasOwnProperty("pingRound"))
                object.pingRound = message.pingRound;
            return object;
        };

        /**
         * Converts this PingRequest to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * PingType enum.
         * @name AcFunDanmu.PingRequest.PingType
         * @enum {number}
         * @property {number} kInvalid=0 kInvalid value
         * @property {number} kPriorRegister=1 kPriorRegister value
         * @property {number} kPostRegister=2 kPostRegister value
         */
        PingRequest.PingType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "kInvalid"] = 0;
            values[valuesById[1] = "kPriorRegister"] = 1;
            values[valuesById[2] = "kPostRegister"] = 2;
            return values;
        })();

        return PingRequest;
    })();

    AcFunDanmu.PingResponse = (function() {

        /**
         * Properties of a PingResponse.
         * @memberof AcFunDanmu
         * @interface IPingResponse
         * @property {number|null} [serverTimestamp] PingResponse serverTimestamp
         * @property {number|null} [clientIp] PingResponse clientIp
         * @property {number|null} [redirectIp] PingResponse redirectIp
         * @property {number|null} [redirectPort] PingResponse redirectPort
         */

        /**
         * Constructs a new PingResponse.
         * @memberof AcFunDanmu
         * @classdesc Represents a PingResponse.
         * @implements IPingResponse
         * @constructor
         * @param {AcFunDanmu.IPingResponse=} [properties] Properties to set
         */
        function PingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingResponse serverTimestamp.
         * @member {number} serverTimestamp
         * @memberof AcFunDanmu.PingResponse
         * @instance
         */
        PingResponse.prototype.serverTimestamp = 0;

        /**
         * PingResponse clientIp.
         * @member {number} clientIp
         * @memberof AcFunDanmu.PingResponse
         * @instance
         */
        PingResponse.prototype.clientIp = 0;

        /**
         * PingResponse redirectIp.
         * @member {number} redirectIp
         * @memberof AcFunDanmu.PingResponse
         * @instance
         */
        PingResponse.prototype.redirectIp = 0;

        /**
         * PingResponse redirectPort.
         * @member {number} redirectPort
         * @memberof AcFunDanmu.PingResponse
         * @instance
         */
        PingResponse.prototype.redirectPort = 0;

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PingResponse
         * @static
         * @param {AcFunDanmu.IPingResponse=} [properties] Properties to set
         * @returns {AcFunDanmu.PingResponse} PingResponse instance
         */
        PingResponse.create = function create(properties) {
            return new PingResponse(properties);
        };

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link AcFunDanmu.PingResponse.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PingResponse
         * @static
         * @param {AcFunDanmu.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverTimestamp != null && Object.hasOwnProperty.call(message, "serverTimestamp"))
                writer.uint32(/* id 1, wireType 5 =*/13).sfixed32(message.serverTimestamp);
            if (message.clientIp != null && Object.hasOwnProperty.call(message, "clientIp"))
                writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.clientIp);
            if (message.redirectIp != null && Object.hasOwnProperty.call(message, "redirectIp"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.redirectIp);
            if (message.redirectPort != null && Object.hasOwnProperty.call(message, "redirectPort"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.redirectPort);
            return writer;
        };

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link AcFunDanmu.PingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PingResponse
         * @static
         * @param {AcFunDanmu.IPingResponse} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverTimestamp = reader.sfixed32();
                    break;
                case 2:
                    message.clientIp = reader.fixed32();
                    break;
                case 3:
                    message.redirectIp = reader.fixed32();
                    break;
                case 4:
                    message.redirectPort = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PingResponse} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingResponse message.
         * @function verify
         * @memberof AcFunDanmu.PingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                if (!$util.isInteger(message.serverTimestamp))
                    return "serverTimestamp: integer expected";
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                if (!$util.isInteger(message.clientIp))
                    return "clientIp: integer expected";
            if (message.redirectIp != null && message.hasOwnProperty("redirectIp"))
                if (!$util.isInteger(message.redirectIp))
                    return "redirectIp: integer expected";
            if (message.redirectPort != null && message.hasOwnProperty("redirectPort"))
                if (!$util.isInteger(message.redirectPort))
                    return "redirectPort: integer expected";
            return null;
        };

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PingResponse} PingResponse
         */
        PingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PingResponse)
                return object;
            var message = new $root.AcFunDanmu.PingResponse();
            if (object.serverTimestamp != null)
                message.serverTimestamp = object.serverTimestamp | 0;
            if (object.clientIp != null)
                message.clientIp = object.clientIp >>> 0;
            if (object.redirectIp != null)
                message.redirectIp = object.redirectIp >>> 0;
            if (object.redirectPort != null)
                message.redirectPort = object.redirectPort >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PingResponse
         * @static
         * @param {AcFunDanmu.PingResponse} message PingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serverTimestamp = 0;
                object.clientIp = 0;
                object.redirectIp = 0;
                object.redirectPort = 0;
            }
            if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                object.serverTimestamp = message.serverTimestamp;
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                object.clientIp = message.clientIp;
            if (message.redirectIp != null && message.hasOwnProperty("redirectIp"))
                object.redirectIp = message.redirectIp;
            if (message.redirectPort != null && message.hasOwnProperty("redirectPort"))
                object.redirectPort = message.redirectPort;
            return object;
        };

        /**
         * Converts this PingResponse to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PingResponse;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
