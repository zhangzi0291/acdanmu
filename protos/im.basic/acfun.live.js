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

    AcFunDanmu.AcFunUserInfo = (function() {

        /**
         * Properties of an AcFunUserInfo.
         * @memberof AcFunDanmu
         * @interface IAcFunUserInfo
         * @property {number|Long|null} [userId] AcFunUserInfo userId
         * @property {string|null} [name] AcFunUserInfo name
         */

        /**
         * Constructs a new AcFunUserInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents an AcFunUserInfo.
         * @implements IAcFunUserInfo
         * @constructor
         * @param {AcFunDanmu.IAcFunUserInfo=} [properties] Properties to set
         */
        function AcFunUserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcFunUserInfo userId.
         * @member {number|Long} userId
         * @memberof AcFunDanmu.AcFunUserInfo
         * @instance
         */
        AcFunUserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AcFunUserInfo name.
         * @member {string} name
         * @memberof AcFunDanmu.AcFunUserInfo
         * @instance
         */
        AcFunUserInfo.prototype.name = "";

        /**
         * Creates a new AcFunUserInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.AcFunUserInfo
         * @static
         * @param {AcFunDanmu.IAcFunUserInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.AcFunUserInfo} AcFunUserInfo instance
         */
        AcFunUserInfo.create = function create(properties) {
            return new AcFunUserInfo(properties);
        };

        /**
         * Encodes the specified AcFunUserInfo message. Does not implicitly {@link AcFunDanmu.AcFunUserInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.AcFunUserInfo
         * @static
         * @param {AcFunDanmu.IAcFunUserInfo} message AcFunUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcFunUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified AcFunUserInfo message, length delimited. Does not implicitly {@link AcFunDanmu.AcFunUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.AcFunUserInfo
         * @static
         * @param {AcFunDanmu.IAcFunUserInfo} message AcFunUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcFunUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcFunUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.AcFunUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.AcFunUserInfo} AcFunUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcFunUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.AcFunUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AcFunUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.AcFunUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.AcFunUserInfo} AcFunUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcFunUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcFunUserInfo message.
         * @function verify
         * @memberof AcFunDanmu.AcFunUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcFunUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an AcFunUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.AcFunUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.AcFunUserInfo} AcFunUserInfo
         */
        AcFunUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.AcFunUserInfo)
                return object;
            var message = new $root.AcFunDanmu.AcFunUserInfo();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an AcFunUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.AcFunUserInfo
         * @static
         * @param {AcFunDanmu.AcFunUserInfo} message AcFunUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcFunUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.name = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this AcFunUserInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.AcFunUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcFunUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AcFunUserInfo;
    })();

    AcFunDanmu.AcfunActionSignalThrowBanana = (function() {

        /**
         * Properties of an AcfunActionSignalThrowBanana.
         * @memberof AcFunDanmu
         * @interface IAcfunActionSignalThrowBanana
         * @property {AcFunDanmu.IAcFunUserInfo|null} [visitor] AcfunActionSignalThrowBanana visitor
         * @property {number|null} [count] AcfunActionSignalThrowBanana count
         * @property {number|Long|null} [sendTimeMs] AcfunActionSignalThrowBanana sendTimeMs
         */

        /**
         * Constructs a new AcfunActionSignalThrowBanana.
         * @memberof AcFunDanmu
         * @classdesc Represents an AcfunActionSignalThrowBanana.
         * @implements IAcfunActionSignalThrowBanana
         * @constructor
         * @param {AcFunDanmu.IAcfunActionSignalThrowBanana=} [properties] Properties to set
         */
        function AcfunActionSignalThrowBanana(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcfunActionSignalThrowBanana visitor.
         * @member {AcFunDanmu.IAcFunUserInfo|null|undefined} visitor
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @instance
         */
        AcfunActionSignalThrowBanana.prototype.visitor = null;

        /**
         * AcfunActionSignalThrowBanana count.
         * @member {number} count
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @instance
         */
        AcfunActionSignalThrowBanana.prototype.count = 0;

        /**
         * AcfunActionSignalThrowBanana sendTimeMs.
         * @member {number|Long} sendTimeMs
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @instance
         */
        AcfunActionSignalThrowBanana.prototype.sendTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AcfunActionSignalThrowBanana instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @static
         * @param {AcFunDanmu.IAcfunActionSignalThrowBanana=} [properties] Properties to set
         * @returns {AcFunDanmu.AcfunActionSignalThrowBanana} AcfunActionSignalThrowBanana instance
         */
        AcfunActionSignalThrowBanana.create = function create(properties) {
            return new AcfunActionSignalThrowBanana(properties);
        };

        /**
         * Encodes the specified AcfunActionSignalThrowBanana message. Does not implicitly {@link AcFunDanmu.AcfunActionSignalThrowBanana.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @static
         * @param {AcFunDanmu.IAcfunActionSignalThrowBanana} message AcfunActionSignalThrowBanana message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcfunActionSignalThrowBanana.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.visitor != null && Object.hasOwnProperty.call(message, "visitor"))
                $root.AcFunDanmu.AcFunUserInfo.encode(message.visitor, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            if (message.sendTimeMs != null && Object.hasOwnProperty.call(message, "sendTimeMs"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.sendTimeMs);
            return writer;
        };

        /**
         * Encodes the specified AcfunActionSignalThrowBanana message, length delimited. Does not implicitly {@link AcFunDanmu.AcfunActionSignalThrowBanana.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @static
         * @param {AcFunDanmu.IAcfunActionSignalThrowBanana} message AcfunActionSignalThrowBanana message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcfunActionSignalThrowBanana.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcfunActionSignalThrowBanana message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.AcfunActionSignalThrowBanana} AcfunActionSignalThrowBanana
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcfunActionSignalThrowBanana.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.AcfunActionSignalThrowBanana();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.visitor = $root.AcFunDanmu.AcFunUserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.count = reader.int32();
                    break;
                case 3:
                    message.sendTimeMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AcfunActionSignalThrowBanana message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.AcfunActionSignalThrowBanana} AcfunActionSignalThrowBanana
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcfunActionSignalThrowBanana.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcfunActionSignalThrowBanana message.
         * @function verify
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcfunActionSignalThrowBanana.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.visitor != null && message.hasOwnProperty("visitor")) {
                var error = $root.AcFunDanmu.AcFunUserInfo.verify(message.visitor);
                if (error)
                    return "visitor." + error;
            }
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.sendTimeMs != null && message.hasOwnProperty("sendTimeMs"))
                if (!$util.isInteger(message.sendTimeMs) && !(message.sendTimeMs && $util.isInteger(message.sendTimeMs.low) && $util.isInteger(message.sendTimeMs.high)))
                    return "sendTimeMs: integer|Long expected";
            return null;
        };

        /**
         * Creates an AcfunActionSignalThrowBanana message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.AcfunActionSignalThrowBanana} AcfunActionSignalThrowBanana
         */
        AcfunActionSignalThrowBanana.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.AcfunActionSignalThrowBanana)
                return object;
            var message = new $root.AcFunDanmu.AcfunActionSignalThrowBanana();
            if (object.visitor != null) {
                if (typeof object.visitor !== "object")
                    throw TypeError(".AcFunDanmu.AcfunActionSignalThrowBanana.visitor: object expected");
                message.visitor = $root.AcFunDanmu.AcFunUserInfo.fromObject(object.visitor);
            }
            if (object.count != null)
                message.count = object.count | 0;
            if (object.sendTimeMs != null)
                if ($util.Long)
                    (message.sendTimeMs = $util.Long.fromValue(object.sendTimeMs)).unsigned = false;
                else if (typeof object.sendTimeMs === "string")
                    message.sendTimeMs = parseInt(object.sendTimeMs, 10);
                else if (typeof object.sendTimeMs === "number")
                    message.sendTimeMs = object.sendTimeMs;
                else if (typeof object.sendTimeMs === "object")
                    message.sendTimeMs = new $util.LongBits(object.sendTimeMs.low >>> 0, object.sendTimeMs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AcfunActionSignalThrowBanana message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @static
         * @param {AcFunDanmu.AcfunActionSignalThrowBanana} message AcfunActionSignalThrowBanana
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcfunActionSignalThrowBanana.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.visitor = null;
                object.count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTimeMs = options.longs === String ? "0" : 0;
            }
            if (message.visitor != null && message.hasOwnProperty("visitor"))
                object.visitor = $root.AcFunDanmu.AcFunUserInfo.toObject(message.visitor, options);
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.sendTimeMs != null && message.hasOwnProperty("sendTimeMs"))
                if (typeof message.sendTimeMs === "number")
                    object.sendTimeMs = options.longs === String ? String(message.sendTimeMs) : message.sendTimeMs;
                else
                    object.sendTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.sendTimeMs) : options.longs === Number ? new $util.LongBits(message.sendTimeMs.low >>> 0, message.sendTimeMs.high >>> 0).toNumber() : message.sendTimeMs;
            return object;
        };

        /**
         * Converts this AcfunActionSignalThrowBanana to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.AcfunActionSignalThrowBanana
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcfunActionSignalThrowBanana.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AcfunActionSignalThrowBanana;
    })();

    AcFunDanmu.AcfunStateSignalDisplayInfo = (function() {

        /**
         * Properties of an AcfunStateSignalDisplayInfo.
         * @memberof AcFunDanmu
         * @interface IAcfunStateSignalDisplayInfo
         * @property {string|null} [bananaCount] AcfunStateSignalDisplayInfo bananaCount
         */

        /**
         * Constructs a new AcfunStateSignalDisplayInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents an AcfunStateSignalDisplayInfo.
         * @implements IAcfunStateSignalDisplayInfo
         * @constructor
         * @param {AcFunDanmu.IAcfunStateSignalDisplayInfo=} [properties] Properties to set
         */
        function AcfunStateSignalDisplayInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcfunStateSignalDisplayInfo bananaCount.
         * @member {string} bananaCount
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @instance
         */
        AcfunStateSignalDisplayInfo.prototype.bananaCount = "";

        /**
         * Creates a new AcfunStateSignalDisplayInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @static
         * @param {AcFunDanmu.IAcfunStateSignalDisplayInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.AcfunStateSignalDisplayInfo} AcfunStateSignalDisplayInfo instance
         */
        AcfunStateSignalDisplayInfo.create = function create(properties) {
            return new AcfunStateSignalDisplayInfo(properties);
        };

        /**
         * Encodes the specified AcfunStateSignalDisplayInfo message. Does not implicitly {@link AcFunDanmu.AcfunStateSignalDisplayInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @static
         * @param {AcFunDanmu.IAcfunStateSignalDisplayInfo} message AcfunStateSignalDisplayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcfunStateSignalDisplayInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bananaCount != null && Object.hasOwnProperty.call(message, "bananaCount"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bananaCount);
            return writer;
        };

        /**
         * Encodes the specified AcfunStateSignalDisplayInfo message, length delimited. Does not implicitly {@link AcFunDanmu.AcfunStateSignalDisplayInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @static
         * @param {AcFunDanmu.IAcfunStateSignalDisplayInfo} message AcfunStateSignalDisplayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcfunStateSignalDisplayInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcfunStateSignalDisplayInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.AcfunStateSignalDisplayInfo} AcfunStateSignalDisplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcfunStateSignalDisplayInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.AcfunStateSignalDisplayInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bananaCount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AcfunStateSignalDisplayInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.AcfunStateSignalDisplayInfo} AcfunStateSignalDisplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcfunStateSignalDisplayInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcfunStateSignalDisplayInfo message.
         * @function verify
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcfunStateSignalDisplayInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bananaCount != null && message.hasOwnProperty("bananaCount"))
                if (!$util.isString(message.bananaCount))
                    return "bananaCount: string expected";
            return null;
        };

        /**
         * Creates an AcfunStateSignalDisplayInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.AcfunStateSignalDisplayInfo} AcfunStateSignalDisplayInfo
         */
        AcfunStateSignalDisplayInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.AcfunStateSignalDisplayInfo)
                return object;
            var message = new $root.AcFunDanmu.AcfunStateSignalDisplayInfo();
            if (object.bananaCount != null)
                message.bananaCount = String(object.bananaCount);
            return message;
        };

        /**
         * Creates a plain object from an AcfunStateSignalDisplayInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @static
         * @param {AcFunDanmu.AcfunStateSignalDisplayInfo} message AcfunStateSignalDisplayInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcfunStateSignalDisplayInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.bananaCount = "";
            if (message.bananaCount != null && message.hasOwnProperty("bananaCount"))
                object.bananaCount = message.bananaCount;
            return object;
        };

        /**
         * Converts this AcfunStateSignalDisplayInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.AcfunStateSignalDisplayInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcfunStateSignalDisplayInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AcfunStateSignalDisplayInfo;
    })();

    AcFunDanmu.AcfunActionSignalJoinClub = (function() {

        /**
         * Properties of an AcfunActionSignalJoinClub.
         * @memberof AcFunDanmu
         * @interface IAcfunActionSignalJoinClub
         * @property {AcFunDanmu.IAcFunUserInfo|null} [fansInfo] AcfunActionSignalJoinClub fansInfo
         * @property {AcFunDanmu.IAcFunUserInfo|null} [uperInfo] AcfunActionSignalJoinClub uperInfo
         * @property {number|Long|null} [joinTimeMs] AcfunActionSignalJoinClub joinTimeMs
         */

        /**
         * Constructs a new AcfunActionSignalJoinClub.
         * @memberof AcFunDanmu
         * @classdesc Represents an AcfunActionSignalJoinClub.
         * @implements IAcfunActionSignalJoinClub
         * @constructor
         * @param {AcFunDanmu.IAcfunActionSignalJoinClub=} [properties] Properties to set
         */
        function AcfunActionSignalJoinClub(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcfunActionSignalJoinClub fansInfo.
         * @member {AcFunDanmu.IAcFunUserInfo|null|undefined} fansInfo
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @instance
         */
        AcfunActionSignalJoinClub.prototype.fansInfo = null;

        /**
         * AcfunActionSignalJoinClub uperInfo.
         * @member {AcFunDanmu.IAcFunUserInfo|null|undefined} uperInfo
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @instance
         */
        AcfunActionSignalJoinClub.prototype.uperInfo = null;

        /**
         * AcfunActionSignalJoinClub joinTimeMs.
         * @member {number|Long} joinTimeMs
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @instance
         */
        AcfunActionSignalJoinClub.prototype.joinTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AcfunActionSignalJoinClub instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @static
         * @param {AcFunDanmu.IAcfunActionSignalJoinClub=} [properties] Properties to set
         * @returns {AcFunDanmu.AcfunActionSignalJoinClub} AcfunActionSignalJoinClub instance
         */
        AcfunActionSignalJoinClub.create = function create(properties) {
            return new AcfunActionSignalJoinClub(properties);
        };

        /**
         * Encodes the specified AcfunActionSignalJoinClub message. Does not implicitly {@link AcFunDanmu.AcfunActionSignalJoinClub.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @static
         * @param {AcFunDanmu.IAcfunActionSignalJoinClub} message AcfunActionSignalJoinClub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcfunActionSignalJoinClub.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fansInfo != null && Object.hasOwnProperty.call(message, "fansInfo"))
                $root.AcFunDanmu.AcFunUserInfo.encode(message.fansInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.uperInfo != null && Object.hasOwnProperty.call(message, "uperInfo"))
                $root.AcFunDanmu.AcFunUserInfo.encode(message.uperInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.joinTimeMs != null && Object.hasOwnProperty.call(message, "joinTimeMs"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.joinTimeMs);
            return writer;
        };

        /**
         * Encodes the specified AcfunActionSignalJoinClub message, length delimited. Does not implicitly {@link AcFunDanmu.AcfunActionSignalJoinClub.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @static
         * @param {AcFunDanmu.IAcfunActionSignalJoinClub} message AcfunActionSignalJoinClub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcfunActionSignalJoinClub.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcfunActionSignalJoinClub message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.AcfunActionSignalJoinClub} AcfunActionSignalJoinClub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcfunActionSignalJoinClub.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.AcfunActionSignalJoinClub();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fansInfo = $root.AcFunDanmu.AcFunUserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.uperInfo = $root.AcFunDanmu.AcFunUserInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.joinTimeMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AcfunActionSignalJoinClub message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.AcfunActionSignalJoinClub} AcfunActionSignalJoinClub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcfunActionSignalJoinClub.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcfunActionSignalJoinClub message.
         * @function verify
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcfunActionSignalJoinClub.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fansInfo != null && message.hasOwnProperty("fansInfo")) {
                var error = $root.AcFunDanmu.AcFunUserInfo.verify(message.fansInfo);
                if (error)
                    return "fansInfo." + error;
            }
            if (message.uperInfo != null && message.hasOwnProperty("uperInfo")) {
                var error = $root.AcFunDanmu.AcFunUserInfo.verify(message.uperInfo);
                if (error)
                    return "uperInfo." + error;
            }
            if (message.joinTimeMs != null && message.hasOwnProperty("joinTimeMs"))
                if (!$util.isInteger(message.joinTimeMs) && !(message.joinTimeMs && $util.isInteger(message.joinTimeMs.low) && $util.isInteger(message.joinTimeMs.high)))
                    return "joinTimeMs: integer|Long expected";
            return null;
        };

        /**
         * Creates an AcfunActionSignalJoinClub message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.AcfunActionSignalJoinClub} AcfunActionSignalJoinClub
         */
        AcfunActionSignalJoinClub.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.AcfunActionSignalJoinClub)
                return object;
            var message = new $root.AcFunDanmu.AcfunActionSignalJoinClub();
            if (object.fansInfo != null) {
                if (typeof object.fansInfo !== "object")
                    throw TypeError(".AcFunDanmu.AcfunActionSignalJoinClub.fansInfo: object expected");
                message.fansInfo = $root.AcFunDanmu.AcFunUserInfo.fromObject(object.fansInfo);
            }
            if (object.uperInfo != null) {
                if (typeof object.uperInfo !== "object")
                    throw TypeError(".AcFunDanmu.AcfunActionSignalJoinClub.uperInfo: object expected");
                message.uperInfo = $root.AcFunDanmu.AcFunUserInfo.fromObject(object.uperInfo);
            }
            if (object.joinTimeMs != null)
                if ($util.Long)
                    (message.joinTimeMs = $util.Long.fromValue(object.joinTimeMs)).unsigned = false;
                else if (typeof object.joinTimeMs === "string")
                    message.joinTimeMs = parseInt(object.joinTimeMs, 10);
                else if (typeof object.joinTimeMs === "number")
                    message.joinTimeMs = object.joinTimeMs;
                else if (typeof object.joinTimeMs === "object")
                    message.joinTimeMs = new $util.LongBits(object.joinTimeMs.low >>> 0, object.joinTimeMs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AcfunActionSignalJoinClub message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @static
         * @param {AcFunDanmu.AcfunActionSignalJoinClub} message AcfunActionSignalJoinClub
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcfunActionSignalJoinClub.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fansInfo = null;
                object.uperInfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.joinTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.joinTimeMs = options.longs === String ? "0" : 0;
            }
            if (message.fansInfo != null && message.hasOwnProperty("fansInfo"))
                object.fansInfo = $root.AcFunDanmu.AcFunUserInfo.toObject(message.fansInfo, options);
            if (message.uperInfo != null && message.hasOwnProperty("uperInfo"))
                object.uperInfo = $root.AcFunDanmu.AcFunUserInfo.toObject(message.uperInfo, options);
            if (message.joinTimeMs != null && message.hasOwnProperty("joinTimeMs"))
                if (typeof message.joinTimeMs === "number")
                    object.joinTimeMs = options.longs === String ? String(message.joinTimeMs) : message.joinTimeMs;
                else
                    object.joinTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.joinTimeMs) : options.longs === Number ? new $util.LongBits(message.joinTimeMs.low >>> 0, message.joinTimeMs.high >>> 0).toNumber() : message.joinTimeMs;
            return object;
        };

        /**
         * Converts this AcfunActionSignalJoinClub to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.AcfunActionSignalJoinClub
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcfunActionSignalJoinClub.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AcfunActionSignalJoinClub;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
