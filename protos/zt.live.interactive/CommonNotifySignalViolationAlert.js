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

    AcFunDanmu.CommonNotifySignalViolationAlert = (function() {

        /**
         * Properties of a CommonNotifySignalViolationAlert.
         * @memberof AcFunDanmu
         * @interface ICommonNotifySignalViolationAlert
         * @property {string|null} [violationContent] CommonNotifySignalViolationAlert violationContent
         */

        /**
         * Constructs a new CommonNotifySignalViolationAlert.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonNotifySignalViolationAlert.
         * @implements ICommonNotifySignalViolationAlert
         * @constructor
         * @param {AcFunDanmu.ICommonNotifySignalViolationAlert=} [properties] Properties to set
         */
        function CommonNotifySignalViolationAlert(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonNotifySignalViolationAlert violationContent.
         * @member {string} violationContent
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @instance
         */
        CommonNotifySignalViolationAlert.prototype.violationContent = "";

        /**
         * Creates a new CommonNotifySignalViolationAlert instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalViolationAlert=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonNotifySignalViolationAlert} CommonNotifySignalViolationAlert instance
         */
        CommonNotifySignalViolationAlert.create = function create(properties) {
            return new CommonNotifySignalViolationAlert(properties);
        };

        /**
         * Encodes the specified CommonNotifySignalViolationAlert message. Does not implicitly {@link AcFunDanmu.CommonNotifySignalViolationAlert.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalViolationAlert} message CommonNotifySignalViolationAlert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotifySignalViolationAlert.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.violationContent != null && Object.hasOwnProperty.call(message, "violationContent"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.violationContent);
            return writer;
        };

        /**
         * Encodes the specified CommonNotifySignalViolationAlert message, length delimited. Does not implicitly {@link AcFunDanmu.CommonNotifySignalViolationAlert.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalViolationAlert} message CommonNotifySignalViolationAlert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotifySignalViolationAlert.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonNotifySignalViolationAlert message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonNotifySignalViolationAlert} CommonNotifySignalViolationAlert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotifySignalViolationAlert.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonNotifySignalViolationAlert();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.violationContent = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonNotifySignalViolationAlert message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonNotifySignalViolationAlert} CommonNotifySignalViolationAlert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotifySignalViolationAlert.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonNotifySignalViolationAlert message.
         * @function verify
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonNotifySignalViolationAlert.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.violationContent != null && message.hasOwnProperty("violationContent"))
                if (!$util.isString(message.violationContent))
                    return "violationContent: string expected";
            return null;
        };

        /**
         * Creates a CommonNotifySignalViolationAlert message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonNotifySignalViolationAlert} CommonNotifySignalViolationAlert
         */
        CommonNotifySignalViolationAlert.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonNotifySignalViolationAlert)
                return object;
            var message = new $root.AcFunDanmu.CommonNotifySignalViolationAlert();
            if (object.violationContent != null)
                message.violationContent = String(object.violationContent);
            return message;
        };

        /**
         * Creates a plain object from a CommonNotifySignalViolationAlert message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @static
         * @param {AcFunDanmu.CommonNotifySignalViolationAlert} message CommonNotifySignalViolationAlert
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonNotifySignalViolationAlert.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.violationContent = "";
            if (message.violationContent != null && message.hasOwnProperty("violationContent"))
                object.violationContent = message.violationContent;
            return object;
        };

        /**
         * Converts this CommonNotifySignalViolationAlert to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonNotifySignalViolationAlert
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonNotifySignalViolationAlert.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonNotifySignalViolationAlert;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
