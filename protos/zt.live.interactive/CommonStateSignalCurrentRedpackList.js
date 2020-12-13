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

    AcFunDanmu.CommonStateSignalCurrentRedpackList = (function() {

        /**
         * Properties of a CommonStateSignalCurrentRedpackList.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalCurrentRedpackList
         * @property {Array.<AcFunDanmu.CommonStateSignalCurrentRedpackList.IRedpack>|null} [redpacks] CommonStateSignalCurrentRedpackList redpacks
         */

        /**
         * Constructs a new CommonStateSignalCurrentRedpackList.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalCurrentRedpackList.
         * @implements ICommonStateSignalCurrentRedpackList
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalCurrentRedpackList=} [properties] Properties to set
         */
        function CommonStateSignalCurrentRedpackList(properties) {
            this.redpacks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalCurrentRedpackList redpacks.
         * @member {Array.<AcFunDanmu.CommonStateSignalCurrentRedpackList.IRedpack>} redpacks
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @instance
         */
        CommonStateSignalCurrentRedpackList.prototype.redpacks = $util.emptyArray;

        /**
         * Creates a new CommonStateSignalCurrentRedpackList instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @static
         * @param {AcFunDanmu.ICommonStateSignalCurrentRedpackList=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalCurrentRedpackList} CommonStateSignalCurrentRedpackList instance
         */
        CommonStateSignalCurrentRedpackList.create = function create(properties) {
            return new CommonStateSignalCurrentRedpackList(properties);
        };

        /**
         * Encodes the specified CommonStateSignalCurrentRedpackList message. Does not implicitly {@link AcFunDanmu.CommonStateSignalCurrentRedpackList.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @static
         * @param {AcFunDanmu.ICommonStateSignalCurrentRedpackList} message CommonStateSignalCurrentRedpackList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalCurrentRedpackList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.redpacks != null && message.redpacks.length)
                for (var i = 0; i < message.redpacks.length; ++i)
                    $root.AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack.encode(message.redpacks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalCurrentRedpackList message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalCurrentRedpackList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @static
         * @param {AcFunDanmu.ICommonStateSignalCurrentRedpackList} message CommonStateSignalCurrentRedpackList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalCurrentRedpackList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalCurrentRedpackList message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalCurrentRedpackList} CommonStateSignalCurrentRedpackList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalCurrentRedpackList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalCurrentRedpackList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.redpacks && message.redpacks.length))
                        message.redpacks = [];
                    message.redpacks.push($root.AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalCurrentRedpackList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalCurrentRedpackList} CommonStateSignalCurrentRedpackList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalCurrentRedpackList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalCurrentRedpackList message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalCurrentRedpackList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.redpacks != null && message.hasOwnProperty("redpacks")) {
                if (!Array.isArray(message.redpacks))
                    return "redpacks: array expected";
                for (var i = 0; i < message.redpacks.length; ++i) {
                    var error = $root.AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack.verify(message.redpacks[i]);
                    if (error)
                        return "redpacks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CommonStateSignalCurrentRedpackList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalCurrentRedpackList} CommonStateSignalCurrentRedpackList
         */
        CommonStateSignalCurrentRedpackList.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalCurrentRedpackList)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalCurrentRedpackList();
            if (object.redpacks) {
                if (!Array.isArray(object.redpacks))
                    throw TypeError(".AcFunDanmu.CommonStateSignalCurrentRedpackList.redpacks: array expected");
                message.redpacks = [];
                for (var i = 0; i < object.redpacks.length; ++i) {
                    if (typeof object.redpacks[i] !== "object")
                        throw TypeError(".AcFunDanmu.CommonStateSignalCurrentRedpackList.redpacks: object expected");
                    message.redpacks[i] = $root.AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack.fromObject(object.redpacks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalCurrentRedpackList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @static
         * @param {AcFunDanmu.CommonStateSignalCurrentRedpackList} message CommonStateSignalCurrentRedpackList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalCurrentRedpackList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.redpacks = [];
            if (message.redpacks && message.redpacks.length) {
                object.redpacks = [];
                for (var j = 0; j < message.redpacks.length; ++j)
                    object.redpacks[j] = $root.AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack.toObject(message.redpacks[j], options);
            }
            return object;
        };

        /**
         * Converts this CommonStateSignalCurrentRedpackList to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalCurrentRedpackList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * RedpackDisplayStatus enum.
         * @name AcFunDanmu.CommonStateSignalCurrentRedpackList.RedpackDisplayStatus
         * @enum {number}
         * @property {number} SHOW=0 SHOW value
         * @property {number} GET_TOKEN=1 GET_TOKEN value
         * @property {number} GRAB=2 GRAB value
         */
        CommonStateSignalCurrentRedpackList.RedpackDisplayStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SHOW"] = 0;
            values[valuesById[1] = "GET_TOKEN"] = 1;
            values[valuesById[2] = "GRAB"] = 2;
            return values;
        })();

        CommonStateSignalCurrentRedpackList.Redpack = (function() {

            /**
             * Properties of a Redpack.
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
             * @interface IRedpack
             * @property {AcFunDanmu.IZtLiveUserInfo|null} [sender] Redpack sender
             * @property {AcFunDanmu.CommonStateSignalCurrentRedpackList.RedpackDisplayStatus|null} [displayStatus] Redpack displayStatus
             * @property {number|Long|null} [grabBeginTimeMs] Redpack grabBeginTimeMs
             * @property {number|Long|null} [getTokenLatestTimeMs] Redpack getTokenLatestTimeMs
             * @property {string|null} [redPackId] Redpack redPackId
             * @property {string|null} [redpackBizUnit] Redpack redpackBizUnit
             * @property {number|Long|null} [redpackAmount] Redpack redpackAmount
             * @property {number|Long|null} [settleBeginTime] Redpack settleBeginTime
             */

            /**
             * Constructs a new Redpack.
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList
             * @classdesc Represents a Redpack.
             * @implements IRedpack
             * @constructor
             * @param {AcFunDanmu.CommonStateSignalCurrentRedpackList.IRedpack=} [properties] Properties to set
             */
            function Redpack(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Redpack sender.
             * @member {AcFunDanmu.IZtLiveUserInfo|null|undefined} sender
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @instance
             */
            Redpack.prototype.sender = null;

            /**
             * Redpack displayStatus.
             * @member {AcFunDanmu.CommonStateSignalCurrentRedpackList.RedpackDisplayStatus} displayStatus
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @instance
             */
            Redpack.prototype.displayStatus = 0;

            /**
             * Redpack grabBeginTimeMs.
             * @member {number|Long} grabBeginTimeMs
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @instance
             */
            Redpack.prototype.grabBeginTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Redpack getTokenLatestTimeMs.
             * @member {number|Long} getTokenLatestTimeMs
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @instance
             */
            Redpack.prototype.getTokenLatestTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Redpack redPackId.
             * @member {string} redPackId
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @instance
             */
            Redpack.prototype.redPackId = "";

            /**
             * Redpack redpackBizUnit.
             * @member {string} redpackBizUnit
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @instance
             */
            Redpack.prototype.redpackBizUnit = "";

            /**
             * Redpack redpackAmount.
             * @member {number|Long} redpackAmount
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @instance
             */
            Redpack.prototype.redpackAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Redpack settleBeginTime.
             * @member {number|Long} settleBeginTime
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @instance
             */
            Redpack.prototype.settleBeginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Redpack instance using the specified properties.
             * @function create
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @static
             * @param {AcFunDanmu.CommonStateSignalCurrentRedpackList.IRedpack=} [properties] Properties to set
             * @returns {AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack} Redpack instance
             */
            Redpack.create = function create(properties) {
                return new Redpack(properties);
            };

            /**
             * Encodes the specified Redpack message. Does not implicitly {@link AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack.verify|verify} messages.
             * @function encode
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @static
             * @param {AcFunDanmu.CommonStateSignalCurrentRedpackList.IRedpack} message Redpack message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Redpack.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                    $root.AcFunDanmu.ZtLiveUserInfo.encode(message.sender, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.displayStatus != null && Object.hasOwnProperty.call(message, "displayStatus"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.displayStatus);
                if (message.grabBeginTimeMs != null && Object.hasOwnProperty.call(message, "grabBeginTimeMs"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.grabBeginTimeMs);
                if (message.getTokenLatestTimeMs != null && Object.hasOwnProperty.call(message, "getTokenLatestTimeMs"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.getTokenLatestTimeMs);
                if (message.redPackId != null && Object.hasOwnProperty.call(message, "redPackId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.redPackId);
                if (message.redpackBizUnit != null && Object.hasOwnProperty.call(message, "redpackBizUnit"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.redpackBizUnit);
                if (message.redpackAmount != null && Object.hasOwnProperty.call(message, "redpackAmount"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.redpackAmount);
                if (message.settleBeginTime != null && Object.hasOwnProperty.call(message, "settleBeginTime"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.settleBeginTime);
                return writer;
            };

            /**
             * Encodes the specified Redpack message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @static
             * @param {AcFunDanmu.CommonStateSignalCurrentRedpackList.IRedpack} message Redpack message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Redpack.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Redpack message from the specified reader or buffer.
             * @function decode
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack} Redpack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Redpack.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sender = $root.AcFunDanmu.ZtLiveUserInfo.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.displayStatus = reader.int32();
                        break;
                    case 3:
                        message.grabBeginTimeMs = reader.int64();
                        break;
                    case 4:
                        message.getTokenLatestTimeMs = reader.int64();
                        break;
                    case 5:
                        message.redPackId = reader.string();
                        break;
                    case 6:
                        message.redpackBizUnit = reader.string();
                        break;
                    case 7:
                        message.redpackAmount = reader.int64();
                        break;
                    case 8:
                        message.settleBeginTime = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Redpack message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack} Redpack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Redpack.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Redpack message.
             * @function verify
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Redpack.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sender != null && message.hasOwnProperty("sender")) {
                    var error = $root.AcFunDanmu.ZtLiveUserInfo.verify(message.sender);
                    if (error)
                        return "sender." + error;
                }
                if (message.displayStatus != null && message.hasOwnProperty("displayStatus"))
                    switch (message.displayStatus) {
                    default:
                        return "displayStatus: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.grabBeginTimeMs != null && message.hasOwnProperty("grabBeginTimeMs"))
                    if (!$util.isInteger(message.grabBeginTimeMs) && !(message.grabBeginTimeMs && $util.isInteger(message.grabBeginTimeMs.low) && $util.isInteger(message.grabBeginTimeMs.high)))
                        return "grabBeginTimeMs: integer|Long expected";
                if (message.getTokenLatestTimeMs != null && message.hasOwnProperty("getTokenLatestTimeMs"))
                    if (!$util.isInteger(message.getTokenLatestTimeMs) && !(message.getTokenLatestTimeMs && $util.isInteger(message.getTokenLatestTimeMs.low) && $util.isInteger(message.getTokenLatestTimeMs.high)))
                        return "getTokenLatestTimeMs: integer|Long expected";
                if (message.redPackId != null && message.hasOwnProperty("redPackId"))
                    if (!$util.isString(message.redPackId))
                        return "redPackId: string expected";
                if (message.redpackBizUnit != null && message.hasOwnProperty("redpackBizUnit"))
                    if (!$util.isString(message.redpackBizUnit))
                        return "redpackBizUnit: string expected";
                if (message.redpackAmount != null && message.hasOwnProperty("redpackAmount"))
                    if (!$util.isInteger(message.redpackAmount) && !(message.redpackAmount && $util.isInteger(message.redpackAmount.low) && $util.isInteger(message.redpackAmount.high)))
                        return "redpackAmount: integer|Long expected";
                if (message.settleBeginTime != null && message.hasOwnProperty("settleBeginTime"))
                    if (!$util.isInteger(message.settleBeginTime) && !(message.settleBeginTime && $util.isInteger(message.settleBeginTime.low) && $util.isInteger(message.settleBeginTime.high)))
                        return "settleBeginTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a Redpack message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack} Redpack
             */
            Redpack.fromObject = function fromObject(object) {
                if (object instanceof $root.AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack)
                    return object;
                var message = new $root.AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack();
                if (object.sender != null) {
                    if (typeof object.sender !== "object")
                        throw TypeError(".AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack.sender: object expected");
                    message.sender = $root.AcFunDanmu.ZtLiveUserInfo.fromObject(object.sender);
                }
                switch (object.displayStatus) {
                case "SHOW":
                case 0:
                    message.displayStatus = 0;
                    break;
                case "GET_TOKEN":
                case 1:
                    message.displayStatus = 1;
                    break;
                case "GRAB":
                case 2:
                    message.displayStatus = 2;
                    break;
                }
                if (object.grabBeginTimeMs != null)
                    if ($util.Long)
                        (message.grabBeginTimeMs = $util.Long.fromValue(object.grabBeginTimeMs)).unsigned = false;
                    else if (typeof object.grabBeginTimeMs === "string")
                        message.grabBeginTimeMs = parseInt(object.grabBeginTimeMs, 10);
                    else if (typeof object.grabBeginTimeMs === "number")
                        message.grabBeginTimeMs = object.grabBeginTimeMs;
                    else if (typeof object.grabBeginTimeMs === "object")
                        message.grabBeginTimeMs = new $util.LongBits(object.grabBeginTimeMs.low >>> 0, object.grabBeginTimeMs.high >>> 0).toNumber();
                if (object.getTokenLatestTimeMs != null)
                    if ($util.Long)
                        (message.getTokenLatestTimeMs = $util.Long.fromValue(object.getTokenLatestTimeMs)).unsigned = false;
                    else if (typeof object.getTokenLatestTimeMs === "string")
                        message.getTokenLatestTimeMs = parseInt(object.getTokenLatestTimeMs, 10);
                    else if (typeof object.getTokenLatestTimeMs === "number")
                        message.getTokenLatestTimeMs = object.getTokenLatestTimeMs;
                    else if (typeof object.getTokenLatestTimeMs === "object")
                        message.getTokenLatestTimeMs = new $util.LongBits(object.getTokenLatestTimeMs.low >>> 0, object.getTokenLatestTimeMs.high >>> 0).toNumber();
                if (object.redPackId != null)
                    message.redPackId = String(object.redPackId);
                if (object.redpackBizUnit != null)
                    message.redpackBizUnit = String(object.redpackBizUnit);
                if (object.redpackAmount != null)
                    if ($util.Long)
                        (message.redpackAmount = $util.Long.fromValue(object.redpackAmount)).unsigned = false;
                    else if (typeof object.redpackAmount === "string")
                        message.redpackAmount = parseInt(object.redpackAmount, 10);
                    else if (typeof object.redpackAmount === "number")
                        message.redpackAmount = object.redpackAmount;
                    else if (typeof object.redpackAmount === "object")
                        message.redpackAmount = new $util.LongBits(object.redpackAmount.low >>> 0, object.redpackAmount.high >>> 0).toNumber();
                if (object.settleBeginTime != null)
                    if ($util.Long)
                        (message.settleBeginTime = $util.Long.fromValue(object.settleBeginTime)).unsigned = false;
                    else if (typeof object.settleBeginTime === "string")
                        message.settleBeginTime = parseInt(object.settleBeginTime, 10);
                    else if (typeof object.settleBeginTime === "number")
                        message.settleBeginTime = object.settleBeginTime;
                    else if (typeof object.settleBeginTime === "object")
                        message.settleBeginTime = new $util.LongBits(object.settleBeginTime.low >>> 0, object.settleBeginTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Redpack message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @static
             * @param {AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack} message Redpack
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Redpack.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.sender = null;
                    object.displayStatus = options.enums === String ? "SHOW" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.grabBeginTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.grabBeginTimeMs = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.getTokenLatestTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.getTokenLatestTimeMs = options.longs === String ? "0" : 0;
                    object.redPackId = "";
                    object.redpackBizUnit = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.redpackAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.redpackAmount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.settleBeginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.settleBeginTime = options.longs === String ? "0" : 0;
                }
                if (message.sender != null && message.hasOwnProperty("sender"))
                    object.sender = $root.AcFunDanmu.ZtLiveUserInfo.toObject(message.sender, options);
                if (message.displayStatus != null && message.hasOwnProperty("displayStatus"))
                    object.displayStatus = options.enums === String ? $root.AcFunDanmu.CommonStateSignalCurrentRedpackList.RedpackDisplayStatus[message.displayStatus] : message.displayStatus;
                if (message.grabBeginTimeMs != null && message.hasOwnProperty("grabBeginTimeMs"))
                    if (typeof message.grabBeginTimeMs === "number")
                        object.grabBeginTimeMs = options.longs === String ? String(message.grabBeginTimeMs) : message.grabBeginTimeMs;
                    else
                        object.grabBeginTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.grabBeginTimeMs) : options.longs === Number ? new $util.LongBits(message.grabBeginTimeMs.low >>> 0, message.grabBeginTimeMs.high >>> 0).toNumber() : message.grabBeginTimeMs;
                if (message.getTokenLatestTimeMs != null && message.hasOwnProperty("getTokenLatestTimeMs"))
                    if (typeof message.getTokenLatestTimeMs === "number")
                        object.getTokenLatestTimeMs = options.longs === String ? String(message.getTokenLatestTimeMs) : message.getTokenLatestTimeMs;
                    else
                        object.getTokenLatestTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.getTokenLatestTimeMs) : options.longs === Number ? new $util.LongBits(message.getTokenLatestTimeMs.low >>> 0, message.getTokenLatestTimeMs.high >>> 0).toNumber() : message.getTokenLatestTimeMs;
                if (message.redPackId != null && message.hasOwnProperty("redPackId"))
                    object.redPackId = message.redPackId;
                if (message.redpackBizUnit != null && message.hasOwnProperty("redpackBizUnit"))
                    object.redpackBizUnit = message.redpackBizUnit;
                if (message.redpackAmount != null && message.hasOwnProperty("redpackAmount"))
                    if (typeof message.redpackAmount === "number")
                        object.redpackAmount = options.longs === String ? String(message.redpackAmount) : message.redpackAmount;
                    else
                        object.redpackAmount = options.longs === String ? $util.Long.prototype.toString.call(message.redpackAmount) : options.longs === Number ? new $util.LongBits(message.redpackAmount.low >>> 0, message.redpackAmount.high >>> 0).toNumber() : message.redpackAmount;
                if (message.settleBeginTime != null && message.hasOwnProperty("settleBeginTime"))
                    if (typeof message.settleBeginTime === "number")
                        object.settleBeginTime = options.longs === String ? String(message.settleBeginTime) : message.settleBeginTime;
                    else
                        object.settleBeginTime = options.longs === String ? $util.Long.prototype.toString.call(message.settleBeginTime) : options.longs === Number ? new $util.LongBits(message.settleBeginTime.low >>> 0, message.settleBeginTime.high >>> 0).toNumber() : message.settleBeginTime;
                return object;
            };

            /**
             * Converts this Redpack to JSON.
             * @function toJSON
             * @memberof AcFunDanmu.CommonStateSignalCurrentRedpackList.Redpack
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Redpack.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Redpack;
        })();

        return CommonStateSignalCurrentRedpackList;
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
