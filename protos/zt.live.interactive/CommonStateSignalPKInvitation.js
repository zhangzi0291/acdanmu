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

    AcFunDanmu.CommonStateSignalPKInvitation = (function() {

        /**
         * Properties of a CommonStateSignalPKInvitation.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalPKInvitation
         * @property {string|null} [a] CommonStateSignalPKInvitation a
         * @property {AcFunDanmu.IPkPlayerInfo|null} [b] CommonStateSignalPKInvitation b
         * @property {number|Long|null} [c] CommonStateSignalPKInvitation c
         */

        /**
         * Constructs a new CommonStateSignalPKInvitation.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalPKInvitation.
         * @implements ICommonStateSignalPKInvitation
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalPKInvitation=} [properties] Properties to set
         */
        function CommonStateSignalPKInvitation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalPKInvitation a.
         * @member {string} a
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @instance
         */
        CommonStateSignalPKInvitation.prototype.a = "";

        /**
         * CommonStateSignalPKInvitation b.
         * @member {AcFunDanmu.IPkPlayerInfo|null|undefined} b
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @instance
         */
        CommonStateSignalPKInvitation.prototype.b = null;

        /**
         * CommonStateSignalPKInvitation c.
         * @member {number|Long} c
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @instance
         */
        CommonStateSignalPKInvitation.prototype.c = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CommonStateSignalPKInvitation instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPKInvitation=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalPKInvitation} CommonStateSignalPKInvitation instance
         */
        CommonStateSignalPKInvitation.create = function create(properties) {
            return new CommonStateSignalPKInvitation(properties);
        };

        /**
         * Encodes the specified CommonStateSignalPKInvitation message. Does not implicitly {@link AcFunDanmu.CommonStateSignalPKInvitation.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPKInvitation} message CommonStateSignalPKInvitation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPKInvitation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.a);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                $root.AcFunDanmu.PkPlayerInfo.encode(message.b, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.c);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalPKInvitation message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalPKInvitation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @static
         * @param {AcFunDanmu.ICommonStateSignalPKInvitation} message CommonStateSignalPKInvitation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalPKInvitation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalPKInvitation message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalPKInvitation} CommonStateSignalPKInvitation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPKInvitation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalPKInvitation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = reader.string();
                    break;
                case 2:
                    message.b = $root.AcFunDanmu.PkPlayerInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.c = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalPKInvitation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalPKInvitation} CommonStateSignalPKInvitation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalPKInvitation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalPKInvitation message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalPKInvitation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isString(message.a))
                    return "a: string expected";
            if (message.b != null && message.hasOwnProperty("b")) {
                var error = $root.AcFunDanmu.PkPlayerInfo.verify(message.b);
                if (error)
                    return "b." + error;
            }
            if (message.c != null && message.hasOwnProperty("c"))
                if (!$util.isInteger(message.c) && !(message.c && $util.isInteger(message.c.low) && $util.isInteger(message.c.high)))
                    return "c: integer|Long expected";
            return null;
        };

        /**
         * Creates a CommonStateSignalPKInvitation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalPKInvitation} CommonStateSignalPKInvitation
         */
        CommonStateSignalPKInvitation.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalPKInvitation)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalPKInvitation();
            if (object.a != null)
                message.a = String(object.a);
            if (object.b != null) {
                if (typeof object.b !== "object")
                    throw TypeError(".AcFunDanmu.CommonStateSignalPKInvitation.b: object expected");
                message.b = $root.AcFunDanmu.PkPlayerInfo.fromObject(object.b);
            }
            if (object.c != null)
                if ($util.Long)
                    (message.c = $util.Long.fromValue(object.c)).unsigned = false;
                else if (typeof object.c === "string")
                    message.c = parseInt(object.c, 10);
                else if (typeof object.c === "number")
                    message.c = object.c;
                else if (typeof object.c === "object")
                    message.c = new $util.LongBits(object.c.low >>> 0, object.c.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalPKInvitation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @static
         * @param {AcFunDanmu.CommonStateSignalPKInvitation} message CommonStateSignalPKInvitation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalPKInvitation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.a = "";
                object.b = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.c = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.c = options.longs === String ? "0" : 0;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = $root.AcFunDanmu.PkPlayerInfo.toObject(message.b, options);
            if (message.c != null && message.hasOwnProperty("c"))
                if (typeof message.c === "number")
                    object.c = options.longs === String ? String(message.c) : message.c;
                else
                    object.c = options.longs === String ? $util.Long.prototype.toString.call(message.c) : options.longs === Number ? new $util.LongBits(message.c.low >>> 0, message.c.high >>> 0).toNumber() : message.c;
            return object;
        };

        /**
         * Converts this CommonStateSignalPKInvitation to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalPKInvitation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalPKInvitation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonStateSignalPKInvitation;
    })();

    AcFunDanmu.PkPlayerInfo = (function() {

        /**
         * Properties of a PkPlayerInfo.
         * @memberof AcFunDanmu
         * @interface IPkPlayerInfo
         * @property {AcFunDanmu.IZtLiveUserInfo|null} [a] PkPlayerInfo a
         * @property {string|null} [b] PkPlayerInfo b
         * @property {boolean|null} [c] PkPlayerInfo c
         */

        /**
         * Constructs a new PkPlayerInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a PkPlayerInfo.
         * @implements IPkPlayerInfo
         * @constructor
         * @param {AcFunDanmu.IPkPlayerInfo=} [properties] Properties to set
         */
        function PkPlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PkPlayerInfo a.
         * @member {AcFunDanmu.IZtLiveUserInfo|null|undefined} a
         * @memberof AcFunDanmu.PkPlayerInfo
         * @instance
         */
        PkPlayerInfo.prototype.a = null;

        /**
         * PkPlayerInfo b.
         * @member {string} b
         * @memberof AcFunDanmu.PkPlayerInfo
         * @instance
         */
        PkPlayerInfo.prototype.b = "";

        /**
         * PkPlayerInfo c.
         * @member {boolean} c
         * @memberof AcFunDanmu.PkPlayerInfo
         * @instance
         */
        PkPlayerInfo.prototype.c = false;

        /**
         * Creates a new PkPlayerInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.PkPlayerInfo
         * @static
         * @param {AcFunDanmu.IPkPlayerInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.PkPlayerInfo} PkPlayerInfo instance
         */
        PkPlayerInfo.create = function create(properties) {
            return new PkPlayerInfo(properties);
        };

        /**
         * Encodes the specified PkPlayerInfo message. Does not implicitly {@link AcFunDanmu.PkPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.PkPlayerInfo
         * @static
         * @param {AcFunDanmu.IPkPlayerInfo} message PkPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkPlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                $root.AcFunDanmu.ZtLiveUserInfo.encode(message.a, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.b);
            if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.c);
            return writer;
        };

        /**
         * Encodes the specified PkPlayerInfo message, length delimited. Does not implicitly {@link AcFunDanmu.PkPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.PkPlayerInfo
         * @static
         * @param {AcFunDanmu.IPkPlayerInfo} message PkPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PkPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.PkPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.PkPlayerInfo} PkPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.PkPlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.a = $root.AcFunDanmu.ZtLiveUserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.b = reader.string();
                    break;
                case 3:
                    message.c = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PkPlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.PkPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.PkPlayerInfo} PkPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PkPlayerInfo message.
         * @function verify
         * @memberof AcFunDanmu.PkPlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PkPlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a")) {
                var error = $root.AcFunDanmu.ZtLiveUserInfo.verify(message.a);
                if (error)
                    return "a." + error;
            }
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isString(message.b))
                    return "b: string expected";
            if (message.c != null && message.hasOwnProperty("c"))
                if (typeof message.c !== "boolean")
                    return "c: boolean expected";
            return null;
        };

        /**
         * Creates a PkPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.PkPlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.PkPlayerInfo} PkPlayerInfo
         */
        PkPlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.PkPlayerInfo)
                return object;
            var message = new $root.AcFunDanmu.PkPlayerInfo();
            if (object.a != null) {
                if (typeof object.a !== "object")
                    throw TypeError(".AcFunDanmu.PkPlayerInfo.a: object expected");
                message.a = $root.AcFunDanmu.ZtLiveUserInfo.fromObject(object.a);
            }
            if (object.b != null)
                message.b = String(object.b);
            if (object.c != null)
                message.c = Boolean(object.c);
            return message;
        };

        /**
         * Creates a plain object from a PkPlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.PkPlayerInfo
         * @static
         * @param {AcFunDanmu.PkPlayerInfo} message PkPlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PkPlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.a = null;
                object.b = "";
                object.c = false;
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = $root.AcFunDanmu.ZtLiveUserInfo.toObject(message.a, options);
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            if (message.c != null && message.hasOwnProperty("c"))
                object.c = message.c;
            return object;
        };

        /**
         * Converts this PkPlayerInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.PkPlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PkPlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PkPlayerInfo;
    })();

    AcFunDanmu.ZtLiveUserInfo = (function() {

        /**
         * Properties of a ZtLiveUserInfo.
         * @memberof AcFunDanmu
         * @interface IZtLiveUserInfo
         * @property {number|Long|null} [userId] ZtLiveUserInfo userId
         * @property {string|null} [nickname] ZtLiveUserInfo nickname
         * @property {Array.<AcFunDanmu.IImageCdnNode>|null} [avatar] ZtLiveUserInfo avatar
         * @property {string|null} [badge] ZtLiveUserInfo badge
         * @property {AcFunDanmu.IZtLiveUserIdentity|null} [userIdentity] ZtLiveUserInfo userIdentity
         */

        /**
         * Constructs a new ZtLiveUserInfo.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveUserInfo.
         * @implements IZtLiveUserInfo
         * @constructor
         * @param {AcFunDanmu.IZtLiveUserInfo=} [properties] Properties to set
         */
        function ZtLiveUserInfo(properties) {
            this.avatar = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveUserInfo userId.
         * @member {number|Long} userId
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZtLiveUserInfo nickname.
         * @member {string} nickname
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.nickname = "";

        /**
         * ZtLiveUserInfo avatar.
         * @member {Array.<AcFunDanmu.IImageCdnNode>} avatar
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.avatar = $util.emptyArray;

        /**
         * ZtLiveUserInfo badge.
         * @member {string} badge
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.badge = "";

        /**
         * ZtLiveUserInfo userIdentity.
         * @member {AcFunDanmu.IZtLiveUserIdentity|null|undefined} userIdentity
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         */
        ZtLiveUserInfo.prototype.userIdentity = null;

        /**
         * Creates a new ZtLiveUserInfo instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.IZtLiveUserInfo=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo instance
         */
        ZtLiveUserInfo.create = function create(properties) {
            return new ZtLiveUserInfo(properties);
        };

        /**
         * Encodes the specified ZtLiveUserInfo message. Does not implicitly {@link AcFunDanmu.ZtLiveUserInfo.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.IZtLiveUserInfo} message ZtLiveUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatar != null && message.avatar.length)
                for (var i = 0; i < message.avatar.length; ++i)
                    $root.AcFunDanmu.ImageCdnNode.encode(message.avatar[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.badge != null && Object.hasOwnProperty.call(message, "badge"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.badge);
            if (message.userIdentity != null && Object.hasOwnProperty.call(message, "userIdentity"))
                $root.AcFunDanmu.ZtLiveUserIdentity.encode(message.userIdentity, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZtLiveUserInfo message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.IZtLiveUserInfo} message ZtLiveUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    if (!(message.avatar && message.avatar.length))
                        message.avatar = [];
                    message.avatar.push($root.AcFunDanmu.ImageCdnNode.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.badge = reader.string();
                    break;
                case 5:
                    message.userIdentity = $root.AcFunDanmu.ZtLiveUserIdentity.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveUserInfo message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar")) {
                if (!Array.isArray(message.avatar))
                    return "avatar: array expected";
                for (var i = 0; i < message.avatar.length; ++i) {
                    var error = $root.AcFunDanmu.ImageCdnNode.verify(message.avatar[i]);
                    if (error)
                        return "avatar." + error;
                }
            }
            if (message.badge != null && message.hasOwnProperty("badge"))
                if (!$util.isString(message.badge))
                    return "badge: string expected";
            if (message.userIdentity != null && message.hasOwnProperty("userIdentity")) {
                var error = $root.AcFunDanmu.ZtLiveUserIdentity.verify(message.userIdentity);
                if (error)
                    return "userIdentity." + error;
            }
            return null;
        };

        /**
         * Creates a ZtLiveUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveUserInfo} ZtLiveUserInfo
         */
        ZtLiveUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveUserInfo)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveUserInfo();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar) {
                if (!Array.isArray(object.avatar))
                    throw TypeError(".AcFunDanmu.ZtLiveUserInfo.avatar: array expected");
                message.avatar = [];
                for (var i = 0; i < object.avatar.length; ++i) {
                    if (typeof object.avatar[i] !== "object")
                        throw TypeError(".AcFunDanmu.ZtLiveUserInfo.avatar: object expected");
                    message.avatar[i] = $root.AcFunDanmu.ImageCdnNode.fromObject(object.avatar[i]);
                }
            }
            if (object.badge != null)
                message.badge = String(object.badge);
            if (object.userIdentity != null) {
                if (typeof object.userIdentity !== "object")
                    throw TypeError(".AcFunDanmu.ZtLiveUserInfo.userIdentity: object expected");
                message.userIdentity = $root.AcFunDanmu.ZtLiveUserIdentity.fromObject(object.userIdentity);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @static
         * @param {AcFunDanmu.ZtLiveUserInfo} message ZtLiveUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.avatar = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.badge = "";
                object.userIdentity = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatar && message.avatar.length) {
                object.avatar = [];
                for (var j = 0; j < message.avatar.length; ++j)
                    object.avatar[j] = $root.AcFunDanmu.ImageCdnNode.toObject(message.avatar[j], options);
            }
            if (message.badge != null && message.hasOwnProperty("badge"))
                object.badge = message.badge;
            if (message.userIdentity != null && message.hasOwnProperty("userIdentity"))
                object.userIdentity = $root.AcFunDanmu.ZtLiveUserIdentity.toObject(message.userIdentity, options);
            return object;
        };

        /**
         * Converts this ZtLiveUserInfo to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZtLiveUserInfo;
    })();

    AcFunDanmu.ImageCdnNode = (function() {

        /**
         * Properties of an ImageCdnNode.
         * @memberof AcFunDanmu
         * @interface IImageCdnNode
         * @property {string|null} [cdn] ImageCdnNode cdn
         * @property {string|null} [url] ImageCdnNode url
         * @property {string|null} [urlPattern] ImageCdnNode urlPattern
         */

        /**
         * Constructs a new ImageCdnNode.
         * @memberof AcFunDanmu
         * @classdesc Represents an ImageCdnNode.
         * @implements IImageCdnNode
         * @constructor
         * @param {AcFunDanmu.IImageCdnNode=} [properties] Properties to set
         */
        function ImageCdnNode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImageCdnNode cdn.
         * @member {string} cdn
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         */
        ImageCdnNode.prototype.cdn = "";

        /**
         * ImageCdnNode url.
         * @member {string} url
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         */
        ImageCdnNode.prototype.url = "";

        /**
         * ImageCdnNode urlPattern.
         * @member {string} urlPattern
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         */
        ImageCdnNode.prototype.urlPattern = "";

        /**
         * Creates a new ImageCdnNode instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.IImageCdnNode=} [properties] Properties to set
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode instance
         */
        ImageCdnNode.create = function create(properties) {
            return new ImageCdnNode(properties);
        };

        /**
         * Encodes the specified ImageCdnNode message. Does not implicitly {@link AcFunDanmu.ImageCdnNode.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.IImageCdnNode} message ImageCdnNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageCdnNode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cdn != null && Object.hasOwnProperty.call(message, "cdn"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cdn);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.urlPattern != null && Object.hasOwnProperty.call(message, "urlPattern"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.urlPattern);
            return writer;
        };

        /**
         * Encodes the specified ImageCdnNode message, length delimited. Does not implicitly {@link AcFunDanmu.ImageCdnNode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.IImageCdnNode} message ImageCdnNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageCdnNode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImageCdnNode message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageCdnNode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ImageCdnNode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cdn = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.urlPattern = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImageCdnNode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageCdnNode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImageCdnNode message.
         * @function verify
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImageCdnNode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cdn != null && message.hasOwnProperty("cdn"))
                if (!$util.isString(message.cdn))
                    return "cdn: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.urlPattern != null && message.hasOwnProperty("urlPattern"))
                if (!$util.isString(message.urlPattern))
                    return "urlPattern: string expected";
            return null;
        };

        /**
         * Creates an ImageCdnNode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ImageCdnNode} ImageCdnNode
         */
        ImageCdnNode.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ImageCdnNode)
                return object;
            var message = new $root.AcFunDanmu.ImageCdnNode();
            if (object.cdn != null)
                message.cdn = String(object.cdn);
            if (object.url != null)
                message.url = String(object.url);
            if (object.urlPattern != null)
                message.urlPattern = String(object.urlPattern);
            return message;
        };

        /**
         * Creates a plain object from an ImageCdnNode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ImageCdnNode
         * @static
         * @param {AcFunDanmu.ImageCdnNode} message ImageCdnNode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImageCdnNode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cdn = "";
                object.url = "";
                object.urlPattern = "";
            }
            if (message.cdn != null && message.hasOwnProperty("cdn"))
                object.cdn = message.cdn;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.urlPattern != null && message.hasOwnProperty("urlPattern"))
                object.urlPattern = message.urlPattern;
            return object;
        };

        /**
         * Converts this ImageCdnNode to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ImageCdnNode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImageCdnNode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ImageCdnNode;
    })();

    AcFunDanmu.ZtLiveUserIdentity = (function() {

        /**
         * Properties of a ZtLiveUserIdentity.
         * @memberof AcFunDanmu
         * @interface IZtLiveUserIdentity
         * @property {AcFunDanmu.ZtLiveUserIdentity.ManagerType|null} [managerType] ZtLiveUserIdentity managerType
         */

        /**
         * Constructs a new ZtLiveUserIdentity.
         * @memberof AcFunDanmu
         * @classdesc Represents a ZtLiveUserIdentity.
         * @implements IZtLiveUserIdentity
         * @constructor
         * @param {AcFunDanmu.IZtLiveUserIdentity=} [properties] Properties to set
         */
        function ZtLiveUserIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZtLiveUserIdentity managerType.
         * @member {AcFunDanmu.ZtLiveUserIdentity.ManagerType} managerType
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @instance
         */
        ZtLiveUserIdentity.prototype.managerType = 0;

        /**
         * Creates a new ZtLiveUserIdentity instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.IZtLiveUserIdentity=} [properties] Properties to set
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity instance
         */
        ZtLiveUserIdentity.create = function create(properties) {
            return new ZtLiveUserIdentity(properties);
        };

        /**
         * Encodes the specified ZtLiveUserIdentity message. Does not implicitly {@link AcFunDanmu.ZtLiveUserIdentity.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.IZtLiveUserIdentity} message ZtLiveUserIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.managerType != null && Object.hasOwnProperty.call(message, "managerType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.managerType);
            return writer;
        };

        /**
         * Encodes the specified ZtLiveUserIdentity message, length delimited. Does not implicitly {@link AcFunDanmu.ZtLiveUserIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.IZtLiveUserIdentity} message ZtLiveUserIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZtLiveUserIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZtLiveUserIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.ZtLiveUserIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.managerType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZtLiveUserIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZtLiveUserIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZtLiveUserIdentity message.
         * @function verify
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZtLiveUserIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.managerType != null && message.hasOwnProperty("managerType"))
                switch (message.managerType) {
                default:
                    return "managerType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a ZtLiveUserIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.ZtLiveUserIdentity} ZtLiveUserIdentity
         */
        ZtLiveUserIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.ZtLiveUserIdentity)
                return object;
            var message = new $root.AcFunDanmu.ZtLiveUserIdentity();
            switch (object.managerType) {
            case "UNKNOWN_MANAGER_TYPE":
            case 0:
                message.managerType = 0;
                break;
            case "NORMAL":
            case 1:
                message.managerType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ZtLiveUserIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @static
         * @param {AcFunDanmu.ZtLiveUserIdentity} message ZtLiveUserIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZtLiveUserIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.managerType = options.enums === String ? "UNKNOWN_MANAGER_TYPE" : 0;
            if (message.managerType != null && message.hasOwnProperty("managerType"))
                object.managerType = options.enums === String ? $root.AcFunDanmu.ZtLiveUserIdentity.ManagerType[message.managerType] : message.managerType;
            return object;
        };

        /**
         * Converts this ZtLiveUserIdentity to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.ZtLiveUserIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZtLiveUserIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ManagerType enum.
         * @name AcFunDanmu.ZtLiveUserIdentity.ManagerType
         * @enum {number}
         * @property {number} UNKNOWN_MANAGER_TYPE=0 UNKNOWN_MANAGER_TYPE value
         * @property {number} NORMAL=1 NORMAL value
         */
        ZtLiveUserIdentity.ManagerType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_MANAGER_TYPE"] = 0;
            values[valuesById[1] = "NORMAL"] = 1;
            return values;
        })();

        return ZtLiveUserIdentity;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
