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

    AcFunDanmu.UnregisterRequest = (function() {

        /**
         * Properties of an UnregisterRequest.
         * @memberof AcFunDanmu
         * @interface IUnregisterRequest
         */

        /**
         * Constructs a new UnregisterRequest.
         * @memberof AcFunDanmu
         * @classdesc Represents an UnregisterRequest.
         * @implements IUnregisterRequest
         * @constructor
         * @param {AcFunDanmu.IUnregisterRequest=} [properties] Properties to set
         */
        function UnregisterRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UnregisterRequest instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.UnregisterRequest
         * @static
         * @param {AcFunDanmu.IUnregisterRequest=} [properties] Properties to set
         * @returns {AcFunDanmu.UnregisterRequest} UnregisterRequest instance
         */
        UnregisterRequest.create = function create(properties) {
            return new UnregisterRequest(properties);
        };

        /**
         * Encodes the specified UnregisterRequest message. Does not implicitly {@link AcFunDanmu.UnregisterRequest.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.UnregisterRequest
         * @static
         * @param {AcFunDanmu.IUnregisterRequest} message UnregisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnregisterRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UnregisterRequest message, length delimited. Does not implicitly {@link AcFunDanmu.UnregisterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.UnregisterRequest
         * @static
         * @param {AcFunDanmu.IUnregisterRequest} message UnregisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnregisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnregisterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.UnregisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.UnregisterRequest} UnregisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnregisterRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.UnregisterRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnregisterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.UnregisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.UnregisterRequest} UnregisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnregisterRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnregisterRequest message.
         * @function verify
         * @memberof AcFunDanmu.UnregisterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnregisterRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an UnregisterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.UnregisterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.UnregisterRequest} UnregisterRequest
         */
        UnregisterRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.UnregisterRequest)
                return object;
            return new $root.AcFunDanmu.UnregisterRequest();
        };

        /**
         * Creates a plain object from an UnregisterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.UnregisterRequest
         * @static
         * @param {AcFunDanmu.UnregisterRequest} message UnregisterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnregisterRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UnregisterRequest to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.UnregisterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnregisterRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnregisterRequest;
    })();

    AcFunDanmu.UnregisterResponse = (function() {

        /**
         * Properties of an UnregisterResponse.
         * @memberof AcFunDanmu
         * @interface IUnregisterResponse
         */

        /**
         * Constructs a new UnregisterResponse.
         * @memberof AcFunDanmu
         * @classdesc Represents an UnregisterResponse.
         * @implements IUnregisterResponse
         * @constructor
         * @param {AcFunDanmu.IUnregisterResponse=} [properties] Properties to set
         */
        function UnregisterResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UnregisterResponse instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.UnregisterResponse
         * @static
         * @param {AcFunDanmu.IUnregisterResponse=} [properties] Properties to set
         * @returns {AcFunDanmu.UnregisterResponse} UnregisterResponse instance
         */
        UnregisterResponse.create = function create(properties) {
            return new UnregisterResponse(properties);
        };

        /**
         * Encodes the specified UnregisterResponse message. Does not implicitly {@link AcFunDanmu.UnregisterResponse.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.UnregisterResponse
         * @static
         * @param {AcFunDanmu.IUnregisterResponse} message UnregisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnregisterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UnregisterResponse message, length delimited. Does not implicitly {@link AcFunDanmu.UnregisterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.UnregisterResponse
         * @static
         * @param {AcFunDanmu.IUnregisterResponse} message UnregisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnregisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnregisterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.UnregisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.UnregisterResponse} UnregisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnregisterResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.UnregisterResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnregisterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.UnregisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.UnregisterResponse} UnregisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnregisterResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnregisterResponse message.
         * @function verify
         * @memberof AcFunDanmu.UnregisterResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnregisterResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an UnregisterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.UnregisterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.UnregisterResponse} UnregisterResponse
         */
        UnregisterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.UnregisterResponse)
                return object;
            return new $root.AcFunDanmu.UnregisterResponse();
        };

        /**
         * Creates a plain object from an UnregisterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.UnregisterResponse
         * @static
         * @param {AcFunDanmu.UnregisterResponse} message UnregisterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnregisterResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UnregisterResponse to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.UnregisterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnregisterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnregisterResponse;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
