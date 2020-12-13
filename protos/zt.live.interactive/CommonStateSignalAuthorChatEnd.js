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

    AcFunDanmu.CommonStateSignalAuthorChatEnd = (function() {

        /**
         * Properties of a CommonStateSignalAuthorChatEnd.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalAuthorChatEnd
         * @property {string|null} [authorChatId] CommonStateSignalAuthorChatEnd authorChatId
         * @property {AcFunDanmu.CommonStateSignalAuthorChatEnd.EndType|null} [endType] CommonStateSignalAuthorChatEnd endType
         * @property {string|null} [endLiveId] CommonStateSignalAuthorChatEnd endLiveId
         */

        /**
         * Constructs a new CommonStateSignalAuthorChatEnd.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalAuthorChatEnd.
         * @implements ICommonStateSignalAuthorChatEnd
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatEnd=} [properties] Properties to set
         */
        function CommonStateSignalAuthorChatEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalAuthorChatEnd authorChatId.
         * @member {string} authorChatId
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @instance
         */
        CommonStateSignalAuthorChatEnd.prototype.authorChatId = "";

        /**
         * CommonStateSignalAuthorChatEnd endType.
         * @member {AcFunDanmu.CommonStateSignalAuthorChatEnd.EndType} endType
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @instance
         */
        CommonStateSignalAuthorChatEnd.prototype.endType = 0;

        /**
         * CommonStateSignalAuthorChatEnd endLiveId.
         * @member {string} endLiveId
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @instance
         */
        CommonStateSignalAuthorChatEnd.prototype.endLiveId = "";

        /**
         * Creates a new CommonStateSignalAuthorChatEnd instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @static
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatEnd=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatEnd} CommonStateSignalAuthorChatEnd instance
         */
        CommonStateSignalAuthorChatEnd.create = function create(properties) {
            return new CommonStateSignalAuthorChatEnd(properties);
        };

        /**
         * Encodes the specified CommonStateSignalAuthorChatEnd message. Does not implicitly {@link AcFunDanmu.CommonStateSignalAuthorChatEnd.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @static
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatEnd} message CommonStateSignalAuthorChatEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalAuthorChatEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authorChatId != null && Object.hasOwnProperty.call(message, "authorChatId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.authorChatId);
            if (message.endType != null && Object.hasOwnProperty.call(message, "endType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.endType);
            if (message.endLiveId != null && Object.hasOwnProperty.call(message, "endLiveId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.endLiveId);
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalAuthorChatEnd message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalAuthorChatEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @static
         * @param {AcFunDanmu.ICommonStateSignalAuthorChatEnd} message CommonStateSignalAuthorChatEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalAuthorChatEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalAuthorChatEnd message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatEnd} CommonStateSignalAuthorChatEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalAuthorChatEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalAuthorChatEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authorChatId = reader.string();
                    break;
                case 2:
                    message.endType = reader.int32();
                    break;
                case 3:
                    message.endLiveId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalAuthorChatEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatEnd} CommonStateSignalAuthorChatEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalAuthorChatEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalAuthorChatEnd message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalAuthorChatEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authorChatId != null && message.hasOwnProperty("authorChatId"))
                if (!$util.isString(message.authorChatId))
                    return "authorChatId: string expected";
            if (message.endType != null && message.hasOwnProperty("endType"))
                switch (message.endType) {
                default:
                    return "endType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.endLiveId != null && message.hasOwnProperty("endLiveId"))
                if (!$util.isString(message.endLiveId))
                    return "endLiveId: string expected";
            return null;
        };

        /**
         * Creates a CommonStateSignalAuthorChatEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalAuthorChatEnd} CommonStateSignalAuthorChatEnd
         */
        CommonStateSignalAuthorChatEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalAuthorChatEnd)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalAuthorChatEnd();
            if (object.authorChatId != null)
                message.authorChatId = String(object.authorChatId);
            switch (object.endType) {
            case "UNKNOWN":
            case 0:
                message.endType = 0;
                break;
            case "CANCEL_BY_INVITER":
            case 1:
                message.endType = 1;
                break;
            case "END_BY_INVITER":
            case 2:
                message.endType = 2;
                break;
            case "END_BY_INVITEE":
            case 3:
                message.endType = 3;
                break;
            case "INVITEE_REJECT":
            case 4:
                message.endType = 4;
                break;
            case "INVITEE_TIMEOUT":
            case 5:
                message.endType = 5;
                break;
            case "INVITEE_HEARTBEAT_TIMEOUT":
            case 6:
                message.endType = 6;
                break;
            case "INVITER_HEARTBEAT_TIMEOUT":
            case 7:
                message.endType = 7;
                break;
            case "PEER_LIVE_STOPPED":
            case 8:
                message.endType = 8;
                break;
            }
            if (object.endLiveId != null)
                message.endLiveId = String(object.endLiveId);
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalAuthorChatEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @static
         * @param {AcFunDanmu.CommonStateSignalAuthorChatEnd} message CommonStateSignalAuthorChatEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalAuthorChatEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.authorChatId = "";
                object.endType = options.enums === String ? "UNKNOWN" : 0;
                object.endLiveId = "";
            }
            if (message.authorChatId != null && message.hasOwnProperty("authorChatId"))
                object.authorChatId = message.authorChatId;
            if (message.endType != null && message.hasOwnProperty("endType"))
                object.endType = options.enums === String ? $root.AcFunDanmu.CommonStateSignalAuthorChatEnd.EndType[message.endType] : message.endType;
            if (message.endLiveId != null && message.hasOwnProperty("endLiveId"))
                object.endLiveId = message.endLiveId;
            return object;
        };

        /**
         * Converts this CommonStateSignalAuthorChatEnd to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalAuthorChatEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalAuthorChatEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * EndType enum.
         * @name AcFunDanmu.CommonStateSignalAuthorChatEnd.EndType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CANCEL_BY_INVITER=1 CANCEL_BY_INVITER value
         * @property {number} END_BY_INVITER=2 END_BY_INVITER value
         * @property {number} END_BY_INVITEE=3 END_BY_INVITEE value
         * @property {number} INVITEE_REJECT=4 INVITEE_REJECT value
         * @property {number} INVITEE_TIMEOUT=5 INVITEE_TIMEOUT value
         * @property {number} INVITEE_HEARTBEAT_TIMEOUT=6 INVITEE_HEARTBEAT_TIMEOUT value
         * @property {number} INVITER_HEARTBEAT_TIMEOUT=7 INVITER_HEARTBEAT_TIMEOUT value
         * @property {number} PEER_LIVE_STOPPED=8 PEER_LIVE_STOPPED value
         */
        CommonStateSignalAuthorChatEnd.EndType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CANCEL_BY_INVITER"] = 1;
            values[valuesById[2] = "END_BY_INVITER"] = 2;
            values[valuesById[3] = "END_BY_INVITEE"] = 3;
            values[valuesById[4] = "INVITEE_REJECT"] = 4;
            values[valuesById[5] = "INVITEE_TIMEOUT"] = 5;
            values[valuesById[6] = "INVITEE_HEARTBEAT_TIMEOUT"] = 6;
            values[valuesById[7] = "INVITER_HEARTBEAT_TIMEOUT"] = 7;
            values[valuesById[8] = "PEER_LIVE_STOPPED"] = 8;
            return values;
        })();

        return CommonStateSignalAuthorChatEnd;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
