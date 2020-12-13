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

    AcFunDanmu.UserInstance = (function() {

        /**
         * Properties of a UserInstance.
         * @memberof AcFunDanmu
         * @interface IUserInstance
         * @property {AcFunDanmu.IUser|null} [user] UserInstance user
         * @property {number|Long|null} [instanceId] UserInstance instanceId
         */

        /**
         * Constructs a new UserInstance.
         * @memberof AcFunDanmu
         * @classdesc Represents a UserInstance.
         * @implements IUserInstance
         * @constructor
         * @param {AcFunDanmu.IUserInstance=} [properties] Properties to set
         */
        function UserInstance(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInstance user.
         * @member {AcFunDanmu.IUser|null|undefined} user
         * @memberof AcFunDanmu.UserInstance
         * @instance
         */
        UserInstance.prototype.user = null;

        /**
         * UserInstance instanceId.
         * @member {number|Long} instanceId
         * @memberof AcFunDanmu.UserInstance
         * @instance
         */
        UserInstance.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserInstance instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {AcFunDanmu.IUserInstance=} [properties] Properties to set
         * @returns {AcFunDanmu.UserInstance} UserInstance instance
         */
        UserInstance.create = function create(properties) {
            return new UserInstance(properties);
        };

        /**
         * Encodes the specified UserInstance message. Does not implicitly {@link AcFunDanmu.UserInstance.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {AcFunDanmu.IUserInstance} message UserInstance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInstance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.AcFunDanmu.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.instanceId);
            return writer;
        };

        /**
         * Encodes the specified UserInstance message, length delimited. Does not implicitly {@link AcFunDanmu.UserInstance.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {AcFunDanmu.IUserInstance} message UserInstance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInstance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInstance message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.UserInstance} UserInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInstance.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.UserInstance();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.AcFunDanmu.User.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instanceId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInstance message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.UserInstance} UserInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInstance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInstance message.
         * @function verify
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInstance.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.AcFunDanmu.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserInstance message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.UserInstance} UserInstance
         */
        UserInstance.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.UserInstance)
                return object;
            var message = new $root.AcFunDanmu.UserInstance();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".AcFunDanmu.UserInstance.user: object expected");
                message.user = $root.AcFunDanmu.User.fromObject(object.user);
            }
            if (object.instanceId != null)
                if ($util.Long)
                    (message.instanceId = $util.Long.fromValue(object.instanceId)).unsigned = false;
                else if (typeof object.instanceId === "string")
                    message.instanceId = parseInt(object.instanceId, 10);
                else if (typeof object.instanceId === "number")
                    message.instanceId = object.instanceId;
                else if (typeof object.instanceId === "object")
                    message.instanceId = new $util.LongBits(object.instanceId.low >>> 0, object.instanceId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserInstance message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.UserInstance
         * @static
         * @param {AcFunDanmu.UserInstance} message UserInstance
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInstance.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.AcFunDanmu.User.toObject(message.user, options);
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            return object;
        };

        /**
         * Converts this UserInstance to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.UserInstance
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInstance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInstance;
    })();

    AcFunDanmu.User = (function() {

        /**
         * Properties of a User.
         * @memberof AcFunDanmu
         * @interface IUser
         * @property {number|null} [appId] User appId
         * @property {number|Long|null} [uid] User uid
         */

        /**
         * Constructs a new User.
         * @memberof AcFunDanmu
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {AcFunDanmu.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User appId.
         * @member {number} appId
         * @memberof AcFunDanmu.User
         * @instance
         */
        User.prototype.appId = 0;

        /**
         * User uid.
         * @member {number|Long} uid
         * @memberof AcFunDanmu.User
         * @instance
         */
        User.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.User
         * @static
         * @param {AcFunDanmu.IUser=} [properties] Properties to set
         * @returns {AcFunDanmu.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link AcFunDanmu.User.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.User
         * @static
         * @param {AcFunDanmu.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.appId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link AcFunDanmu.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.User
         * @static
         * @param {AcFunDanmu.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof AcFunDanmu.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isInteger(message.appId))
                    return "appId: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.User)
                return object;
            var message = new $root.AcFunDanmu.User();
            if (object.appId != null)
                message.appId = object.appId | 0;
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.User
         * @static
         * @param {AcFunDanmu.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            }
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
