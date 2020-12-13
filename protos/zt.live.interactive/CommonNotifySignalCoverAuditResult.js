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

    AcFunDanmu.CommonNotifySignalCoverAuditResult = (function() {

        /**
         * Properties of a CommonNotifySignalCoverAuditResult.
         * @memberof AcFunDanmu
         * @interface ICommonNotifySignalCoverAuditResult
         * @property {AcFunDanmu.CommonNotifySignalCoverAuditResult.AuditStatus|null} [auditStatus] CommonNotifySignalCoverAuditResult auditStatus
         */

        /**
         * Constructs a new CommonNotifySignalCoverAuditResult.
         * @memberof AcFunDanmu
         * @classdesc Represents a CommonNotifySignalCoverAuditResult.
         * @implements ICommonNotifySignalCoverAuditResult
         * @constructor
         * @param {AcFunDanmu.ICommonNotifySignalCoverAuditResult=} [properties] Properties to set
         */
        function CommonNotifySignalCoverAuditResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonNotifySignalCoverAuditResult auditStatus.
         * @member {AcFunDanmu.CommonNotifySignalCoverAuditResult.AuditStatus} auditStatus
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @instance
         */
        CommonNotifySignalCoverAuditResult.prototype.auditStatus = 0;

        /**
         * Creates a new CommonNotifySignalCoverAuditResult instance using the specified properties.
         * @function create
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalCoverAuditResult=} [properties] Properties to set
         * @returns {AcFunDanmu.CommonNotifySignalCoverAuditResult} CommonNotifySignalCoverAuditResult instance
         */
        CommonNotifySignalCoverAuditResult.create = function create(properties) {
            return new CommonNotifySignalCoverAuditResult(properties);
        };

        /**
         * Encodes the specified CommonNotifySignalCoverAuditResult message. Does not implicitly {@link AcFunDanmu.CommonNotifySignalCoverAuditResult.verify|verify} messages.
         * @function encode
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalCoverAuditResult} message CommonNotifySignalCoverAuditResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotifySignalCoverAuditResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auditStatus != null && Object.hasOwnProperty.call(message, "auditStatus"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.auditStatus);
            return writer;
        };

        /**
         * Encodes the specified CommonNotifySignalCoverAuditResult message, length delimited. Does not implicitly {@link AcFunDanmu.CommonNotifySignalCoverAuditResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @static
         * @param {AcFunDanmu.ICommonNotifySignalCoverAuditResult} message CommonNotifySignalCoverAuditResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonNotifySignalCoverAuditResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonNotifySignalCoverAuditResult message from the specified reader or buffer.
         * @function decode
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AcFunDanmu.CommonNotifySignalCoverAuditResult} CommonNotifySignalCoverAuditResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotifySignalCoverAuditResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AcFunDanmu.CommonNotifySignalCoverAuditResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.auditStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonNotifySignalCoverAuditResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AcFunDanmu.CommonNotifySignalCoverAuditResult} CommonNotifySignalCoverAuditResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonNotifySignalCoverAuditResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonNotifySignalCoverAuditResult message.
         * @function verify
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonNotifySignalCoverAuditResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auditStatus != null && message.hasOwnProperty("auditStatus"))
                switch (message.auditStatus) {
                default:
                    return "auditStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a CommonNotifySignalCoverAuditResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AcFunDanmu.CommonNotifySignalCoverAuditResult} CommonNotifySignalCoverAuditResult
         */
        CommonNotifySignalCoverAuditResult.fromObject = function fromObject(object) {
            if (object instanceof $root.AcFunDanmu.CommonNotifySignalCoverAuditResult)
                return object;
            var message = new $root.AcFunDanmu.CommonNotifySignalCoverAuditResult();
            switch (object.auditStatus) {
            case "SUCCESS":
            case 0:
                message.auditStatus = 0;
                break;
            case "COVER_AUDIT_FAILED":
            case 1:
                message.auditStatus = 1;
                break;
            case "CAPTION_AUDIT_FAILED":
            case 2:
                message.auditStatus = 2;
                break;
            case "BOTH_FAILED":
            case 3:
                message.auditStatus = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonNotifySignalCoverAuditResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @static
         * @param {AcFunDanmu.CommonNotifySignalCoverAuditResult} message CommonNotifySignalCoverAuditResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonNotifySignalCoverAuditResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.auditStatus = options.enums === String ? "SUCCESS" : 0;
            if (message.auditStatus != null && message.hasOwnProperty("auditStatus"))
                object.auditStatus = options.enums === String ? $root.AcFunDanmu.CommonNotifySignalCoverAuditResult.AuditStatus[message.auditStatus] : message.auditStatus;
            return object;
        };

        /**
         * Converts this CommonNotifySignalCoverAuditResult to JSON.
         * @function toJSON
         * @memberof AcFunDanmu.CommonNotifySignalCoverAuditResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonNotifySignalCoverAuditResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * AuditStatus enum.
         * @name AcFunDanmu.CommonNotifySignalCoverAuditResult.AuditStatus
         * @enum {number}
         * @property {number} SUCCESS=0 SUCCESS value
         * @property {number} COVER_AUDIT_FAILED=1 COVER_AUDIT_FAILED value
         * @property {number} CAPTION_AUDIT_FAILED=2 CAPTION_AUDIT_FAILED value
         * @property {number} BOTH_FAILED=3 BOTH_FAILED value
         */
        CommonNotifySignalCoverAuditResult.AuditStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[1] = "COVER_AUDIT_FAILED"] = 1;
            values[valuesById[2] = "CAPTION_AUDIT_FAILED"] = 2;
            values[valuesById[3] = "BOTH_FAILED"] = 3;
            return values;
        })();

        return CommonNotifySignalCoverAuditResult;
    })();

    return AcFunDanmu;
})();

module.exports = $root;
