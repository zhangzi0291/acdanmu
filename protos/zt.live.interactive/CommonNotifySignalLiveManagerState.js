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

    AcFunDanmu.CommonNotifySignalLiveManagerState = (function() {

        /**
         * Properties of a CommonNotifySignalLiveManagerState.
         * @memberof AcFunDanmu
         * @interface ICommonNotifySignalLiveManagerState
         * @property {AcFunDanmu.CommonNotifySignalLiveManagerState.ManagerState|null} [state] CommonNotifySignalLiveManagerState state
         */

        /**
         * Constructs a new CommonNotifySignalLiveManagerState.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonNotifySignalLiveManagerState.
         * @implements ICommonNotifySignalLiveManagerState
         * @constructor
         * @param {AcFunDanmu.ICommonNotifySignalLiveManagerState=} [properties] Properties to set
         */
        function CommonNotifySignalLiveManagerState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonNotifySignalLiveManagerState state.
         * @member {AcFunDanmu.CommonNotifySignalLiveManagerState.ManagerState} state
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @instance
         */
        CommonNotifySignalLiveManagerState.prototype.state = 0;

        /**
         * Creates a new CommonNotifySignalLiveManagerState instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalLiveManagerState=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonNotifySignalLiveManagerState} CommonNotifySignalLiveManagerState instance
         */
        CommonNotifySignalLiveManagerState.create = function create(properties) {
            return new CommonNotifySignalLiveManagerState(properties);
        };

        /**
         * Encodes the specified CommonNotifySignalLiveManagerState message. Does not implicitly {@link AcFunDanmu.CommonNotifySignalLiveManagerState.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalLiveManagerState} message CommonNotifySignalLiveManagerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotifySignalLiveManagerState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified CommonNotifySignalLiveManagerState message, length delimited. Does not implicitly {@link AcFunDanmu.CommonNotifySignalLiveManagerState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalLiveManagerState} message CommonNotifySignalLiveManagerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotifySignalLiveManagerState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonNotifySignalLiveManagerState message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonNotifySignalLiveManagerState} CommonNotifySignalLiveManagerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotifySignalLiveManagerState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonNotifySignalLiveManagerState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonNotifySignalLiveManagerState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonNotifySignalLiveManagerState} CommonNotifySignalLiveManagerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotifySignalLiveManagerState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonNotifySignalLiveManagerState message.
         * @function verify
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonNotifySignalLiveManagerState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a CommonNotifySignalLiveManagerState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonNotifySignalLiveManagerState} CommonNotifySignalLiveManagerState
         */
        CommonNotifySignalLiveManagerState.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonNotifySignalLiveManagerState)
                return object;
            var message = new $root.AcFunDanmu.CommonNotifySignalLiveManagerState();
            switch (object.state) {
            case "MANAGER_STATE_UNKNOWN":
            case 0:
                message.state = 0;
                break;
            case "MANAGER_ADDED":
            case 1:
                message.state = 1;
                break;
            case "MANAGER_REMOVED":
            case 2:
                message.state = 2;
                break;
            case "IS_MANAGER":
            case 3:
                message.state = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonNotifySignalLiveManagerState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @static
         * @param {AcFunDanmu.CommonNotifySignalLiveManagerState} message CommonNotifySignalLiveManagerState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonNotifySignalLiveManagerState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.state = options.enums === String ? "MANAGER_STATE_UNKNOWN" : 0;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.AcFunDanmu.CommonNotifySignalLiveManagerState.ManagerState[message.state] : message.state;
            return object;
        };

        /**
         * Converts this CommonNotifySignalLiveManagerState to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonNotifySignalLiveManagerState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonNotifySignalLiveManagerState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ManagerState enum.
         * @name AcFunDanmu.CommonNotifySignalLiveManagerState.ManagerState
         * @enum {number}
         * @property {number} MANAGER_STATE_UNKNOWN=0 MANAGER_STATE_UNKNOWN value
         * @property {number} MANAGER_ADDED=1 MANAGER_ADDED value
         * @property {number} MANAGER_REMOVED=2 MANAGER_REMOVED value
         * @property {number} IS_MANAGER=3 IS_MANAGER value
         */
        CommonNotifySignalLiveManagerState.ManagerState = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MANAGER_STATE_UNKNOWN"] = 0;
            values[valuesById[1] = "MANAGER_ADDED"] = 1;
            values[valuesById[2] = "MANAGER_REMOVED"] = 2;
            values[valuesById[3] = "IS_MANAGER"] = 3;
            return values;
        })();

        return CommonNotifySignalLiveManagerState;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
