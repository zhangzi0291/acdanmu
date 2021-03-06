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

    AcFunDanmu.CommonStateSignalFeatureStateSync = (function() {

        /**
         * Properties of a CommonStateSignalFeatureStateSync.
         * @memberof AcFunDanmu
         * @interface ICommonStateSignalFeatureStateSync
         * @property {Array.<AcFunDanmu.ILiveFeatureState>|null} [featureState] CommonStateSignalFeatureStateSync featureState
         */

        /**
         * Constructs a new CommonStateSignalFeatureStateSync.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonStateSignalFeatureStateSync.
         * @implements ICommonStateSignalFeatureStateSync
         * @constructor
         * @param {AcFunDanmu.ICommonStateSignalFeatureStateSync=} [properties] Properties to set
         */
        function CommonStateSignalFeatureStateSync(properties) {
            this.featureState = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonStateSignalFeatureStateSync featureState.
         * @member {Array.<AcFunDanmu.ILiveFeatureState>} featureState
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @instance
         */
        CommonStateSignalFeatureStateSync.prototype.featureState = $util.emptyArray;

        /**
         * Creates a new CommonStateSignalFeatureStateSync instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @static
         * @param {AcFunDanmu.ICommonStateSignalFeatureStateSync=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonStateSignalFeatureStateSync} CommonStateSignalFeatureStateSync instance
         */
        CommonStateSignalFeatureStateSync.create = function create(properties) {
            return new CommonStateSignalFeatureStateSync(properties);
        };

        /**
         * Encodes the specified CommonStateSignalFeatureStateSync message. Does not implicitly {@link AcFunDanmu.CommonStateSignalFeatureStateSync.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @static
         * @param {AcFunDanmu.ICommonStateSignalFeatureStateSync} message CommonStateSignalFeatureStateSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalFeatureStateSync.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.featureState != null && message.featureState.length)
                for (var i = 0; i < message.featureState.length; ++i)
                    $root.AcFunDanmu.LiveFeatureState.encode(message.featureState[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CommonStateSignalFeatureStateSync message, length delimited. Does not implicitly {@link AcFunDanmu.CommonStateSignalFeatureStateSync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @static
         * @param {AcFunDanmu.ICommonStateSignalFeatureStateSync} message CommonStateSignalFeatureStateSync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonStateSignalFeatureStateSync.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonStateSignalFeatureStateSync message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonStateSignalFeatureStateSync} CommonStateSignalFeatureStateSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalFeatureStateSync.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonStateSignalFeatureStateSync();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.featureState && message.featureState.length))
                        message.featureState = [];
                    message.featureState.push($root.AcFunDanmu.LiveFeatureState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonStateSignalFeatureStateSync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonStateSignalFeatureStateSync} CommonStateSignalFeatureStateSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonStateSignalFeatureStateSync.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonStateSignalFeatureStateSync message.
         * @function verify
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonStateSignalFeatureStateSync.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.featureState != null && message.hasOwnProperty("featureState")) {
                if (!Array.isArray(message.featureState))
                    return "featureState: array expected";
                for (var i = 0; i < message.featureState.length; ++i) {
                    var error = $root.AcFunDanmu.LiveFeatureState.verify(message.featureState[i]);
                    if (error)
                        return "featureState." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CommonStateSignalFeatureStateSync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonStateSignalFeatureStateSync} CommonStateSignalFeatureStateSync
         */
        CommonStateSignalFeatureStateSync.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonStateSignalFeatureStateSync)
                return object;
            var message = new $root.AcFunDanmu.CommonStateSignalFeatureStateSync();
            if (object.featureState) {
                if (!Array.isArray(object.featureState))
                    throw TypeError(".AcFunDanmu.CommonStateSignalFeatureStateSync.featureState: array expected");
                message.featureState = [];
                for (var i = 0; i < object.featureState.length; ++i) {
                    if (typeof object.featureState[i] !== "object")
                        throw TypeError(".AcFunDanmu.CommonStateSignalFeatureStateSync.featureState: object expected");
                    message.featureState[i] = $root.AcFunDanmu.LiveFeatureState.fromObject(object.featureState[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonStateSignalFeatureStateSync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @static
         * @param {AcFunDanmu.CommonStateSignalFeatureStateSync} message CommonStateSignalFeatureStateSync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonStateSignalFeatureStateSync.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.featureState = [];
            if (message.featureState && message.featureState.length) {
                object.featureState = [];
                for (var j = 0; j < message.featureState.length; ++j)
                    object.featureState[j] = $root.AcFunDanmu.LiveFeatureState.toObject(message.featureState[j], options);
            }
            return object;
        };

        /**
         * Converts this CommonStateSignalFeatureStateSync to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonStateSignalFeatureStateSync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonStateSignalFeatureStateSync.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonStateSignalFeatureStateSync;
    })();

    AcFunDanmu.LiveFeatureState = (function() {

        /**
         * Properties of a LiveFeatureState.
         * @memberof AcFunDanmu
         * @interface ILiveFeatureState
         * @property {AcFunDanmu.LiveFeatureState.FeatureType|null} [type] LiveFeatureState type
         * @property {AcFunDanmu.LiveFeatureState.FeatureState|null} [state] LiveFeatureState state
         */

        /**
         * Constructs a new LiveFeatureState.
         * @memberof AcFunDanmu
         * @classdesc Represents a LiveFeatureState.
         * @implements ILiveFeatureState
         * @constructor
         * @param {AcFunDanmu.ILiveFeatureState=} [properties] Properties to set
         */
        function LiveFeatureState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LiveFeatureState type.
         * @member {AcFunDanmu.LiveFeatureState.FeatureType} type
         * @memberof AcFunDanmu.LiveFeatureState
         * @instance
         */
        LiveFeatureState.prototype.type = 0;

        /**
         * LiveFeatureState state.
         * @member {AcFunDanmu.LiveFeatureState.FeatureState} state
         * @memberof AcFunDanmu.LiveFeatureState
         * @instance
         */
        LiveFeatureState.prototype.state = 0;

        /**
         * Creates a new LiveFeatureState instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.LiveFeatureState
         * @static
         * @param {AcFunDanmu.ILiveFeatureState=} [properties] Properties to set
         * @returns {AcFunDanmu.LiveFeatureState} LiveFeatureState instance
         */
        LiveFeatureState.create = function create(properties) {
            return new LiveFeatureState(properties);
        };

        /**
         * Encodes the specified LiveFeatureState message. Does not implicitly {@link AcFunDanmu.LiveFeatureState.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.LiveFeatureState
         * @static
         * @param {AcFunDanmu.ILiveFeatureState} message LiveFeatureState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LiveFeatureState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified LiveFeatureState message, length delimited. Does not implicitly {@link AcFunDanmu.LiveFeatureState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.LiveFeatureState
         * @static
         * @param {AcFunDanmu.ILiveFeatureState} message LiveFeatureState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LiveFeatureState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LiveFeatureState message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.LiveFeatureState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.LiveFeatureState} LiveFeatureState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LiveFeatureState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.LiveFeatureState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
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
         * Decodes a LiveFeatureState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.LiveFeatureState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.LiveFeatureState} LiveFeatureState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LiveFeatureState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LiveFeatureState message.
         * @function verify
         * @memberof AcFunDanmu.LiveFeatureState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LiveFeatureState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a LiveFeatureState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.LiveFeatureState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.LiveFeatureState} LiveFeatureState
         */
        LiveFeatureState.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.LiveFeatureState)
                return object;
            var message = new $root.AcFunDanmu.LiveFeatureState();
            switch (object.type) {
            case "FEATURE_UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "LANDSCAPE_COMMENT":
            case 1:
                message.type = 1;
                break;
            }
            switch (object.state) {
            case "FEATURE_STATE_UNKNOWN":
            case 0:
                message.state = 0;
                break;
            case "FEATURE_STATE_OPEND":
            case 1:
                message.state = 1;
                break;
            case "FEATURE_STATE_CLOSED":
            case 2:
                message.state = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a LiveFeatureState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.LiveFeatureState
         * @static
         * @param {AcFunDanmu.LiveFeatureState} message LiveFeatureState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LiveFeatureState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "FEATURE_UNKNOWN" : 0;
                object.state = options.enums === String ? "FEATURE_STATE_UNKNOWN" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.AcFunDanmu.LiveFeatureState.FeatureType[message.type] : message.type;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.AcFunDanmu.LiveFeatureState.FeatureState[message.state] : message.state;
            return object;
        };

        /**
         * Converts this LiveFeatureState to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.LiveFeatureState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LiveFeatureState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * FeatureType enum.
         * @name AcFunDanmu.LiveFeatureState.FeatureType
         * @enum {number}
         * @property {number} FEATURE_UNKNOWN=0 FEATURE_UNKNOWN value
         * @property {number} LANDSCAPE_COMMENT=1 LANDSCAPE_COMMENT value
         */
        LiveFeatureState.FeatureType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FEATURE_UNKNOWN"] = 0;
            values[valuesById[1] = "LANDSCAPE_COMMENT"] = 1;
            return values;
        })();

        /**
         * FeatureState enum.
         * @name AcFunDanmu.LiveFeatureState.FeatureState
         * @enum {number}
         * @property {number} FEATURE_STATE_UNKNOWN=0 FEATURE_STATE_UNKNOWN value
         * @property {number} FEATURE_STATE_OPEND=1 FEATURE_STATE_OPEND value
         * @property {number} FEATURE_STATE_CLOSED=2 FEATURE_STATE_CLOSED value
         */
        LiveFeatureState.FeatureState = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FEATURE_STATE_UNKNOWN"] = 0;
            values[valuesById[1] = "FEATURE_STATE_OPEND"] = 1;
            values[valuesById[2] = "FEATURE_STATE_CLOSED"] = 2;
            return values;
        })();

        return LiveFeatureState;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
