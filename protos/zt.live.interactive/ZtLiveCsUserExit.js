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

    AcFunDanmu.ZtLiveCsUserExit = (function() {

        /**
         * Properties of a ZtLiveCsUserExit.
         * @memberof AcFunDanmu
         * @interface IZtLiveCsUserExit
         */

        /**
         * Constructs a new ZtLiveCsUserExit.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveCsUserExit.
         * @implements IZtLiveCsUserExit
         * @constructor
         * @param {AcFunDanmu.IZtLiveCsUserExit=} [properties] Properties to set
         */
        function ZtLiveCsUserExit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ZtLiveCsUserExit instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveCsUserExit
         * @static
         * @param {AcFunDanmu.IZtLiveCsUserExit=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveCsUserExit} ZtLiveCsUserExit instance
         */
        ZtLiveCsUserExit.create = function create(properties) {
            return new ZtLiveCsUserExit(properties);
        };

        /**
         * Encodes the specified ZtLiveCsUserExit message. Does not implicitly {@link AcFunDanmu.ZtLiveCsUserExit.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveCsUserExit
         * @static
         * @param {AcFunDanmu.IZtLiveCsUserExit} message ZtLiveCsUserExit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsUserExit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ZtLiveCsUserExit message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveCsUserExit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsUserExit
         * @static
         * @param {AcFunDanmu.IZtLiveCsUserExit} message ZtLiveCsUserExit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsUserExit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveCsUserExit message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveCsUserExit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveCsUserExit} ZtLiveCsUserExit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsUserExit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveCsUserExit();
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
         * Decodes a ZtLiveCsUserExit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsUserExit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveCsUserExit} ZtLiveCsUserExit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsUserExit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveCsUserExit message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveCsUserExit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveCsUserExit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ZtLiveCsUserExit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveCsUserExit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveCsUserExit} ZtLiveCsUserExit
         */
        ZtLiveCsUserExit.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveCsUserExit)
                return object;
            return new $root.AcFunDanmu.ZtLiveCsUserExit();
        };

        /**
         * Creates a plain object from a ZtLiveCsUserExit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveCsUserExit
         * @static
         * @param {AcFunDanmu.ZtLiveCsUserExit} message ZtLiveCsUserExit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveCsUserExit.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ZtLiveCsUserExit to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveCsUserExit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveCsUserExit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveCsUserExit;
    })();

    AcFunDanmu.ZtLiveCsUserExitAck = (function() {

        /**
         * Properties of a ZtLiveCsUserExitAck.
         * @memberof AcFunDanmu
         * @interface IZtLiveCsUserExitAck
         */

        /**
         * Constructs a new ZtLiveCsUserExitAck.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveCsUserExitAck.
         * @implements IZtLiveCsUserExitAck
         * @constructor
         * @param {AcFunDanmu.IZtLiveCsUserExitAck=} [properties] Properties to set
         */
        function ZtLiveCsUserExitAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ZtLiveCsUserExitAck instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveCsUserExitAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsUserExitAck=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveCsUserExitAck} ZtLiveCsUserExitAck instance
         */
        ZtLiveCsUserExitAck.create = function create(properties) {
            return new ZtLiveCsUserExitAck(properties);
        };

        /**
         * Encodes the specified ZtLiveCsUserExitAck message. Does not implicitly {@link AcFunDanmu.ZtLiveCsUserExitAck.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveCsUserExitAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsUserExitAck} message ZtLiveCsUserExitAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsUserExitAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ZtLiveCsUserExitAck message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveCsUserExitAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsUserExitAck
         * @static
         * @param {AcFunDanmu.IZtLiveCsUserExitAck} message ZtLiveCsUserExitAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveCsUserExitAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveCsUserExitAck message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveCsUserExitAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveCsUserExitAck} ZtLiveCsUserExitAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsUserExitAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveCsUserExitAck();
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
         * Decodes a ZtLiveCsUserExitAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveCsUserExitAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveCsUserExitAck} ZtLiveCsUserExitAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveCsUserExitAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveCsUserExitAck message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveCsUserExitAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveCsUserExitAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ZtLiveCsUserExitAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveCsUserExitAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveCsUserExitAck} ZtLiveCsUserExitAck
         */
        ZtLiveCsUserExitAck.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveCsUserExitAck)
                return object;
            return new $root.AcFunDanmu.ZtLiveCsUserExitAck();
        };

        /**
         * Creates a plain object from a ZtLiveCsUserExitAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveCsUserExitAck
         * @static
         * @param {AcFunDanmu.ZtLiveCsUserExitAck} message ZtLiveCsUserExitAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveCsUserExitAck.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ZtLiveCsUserExitAck to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveCsUserExitAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveCsUserExitAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveCsUserExitAck;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
