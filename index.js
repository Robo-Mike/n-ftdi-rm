'use strict';
const _ftdi = require('bindings')('FTD2XX');

/**
 * Status values for FTDI devices
 * @enum {Number}
 */
const FT_STATUS = {
    /**
     * Status OK
     * @type {Number}
     */
    FT_OK: 0,
    /**
     * The device handle is invalid
     * @type {Number}
     */
    FT_INVALID_HANDLE: 1,
    /**
     * Device not found
     * @type {Number}
     */
    FT_DEVICE_NOT_FOUND: 2,
    /**
     * Device is not open
     * @type {Number}
     */
    FT_DEVICE_NOT_OPENED: 3,
    /**
     * IO error
     * @type {Number}
     */
    FT_IO_ERROR: 4,
    /**
     * Insufficient resources
     * @type {Number}
     */
    FT_INSUFFICIENT_RESOURCES: 5,
    /**
     * A parameter was invalid
     * @type {Number}
     */
    FT_INVALID_PARAMETER: 6,
    /**
     * The requested baud rate is invalid
     * @type {Number}
     */
    FT_INVALID_BAUD_RATE: 7,
    /**
     * Device not opened for erase
     * @type {Number}
     */
    FT_DEVICE_NOT_OPENED_FOR_ERASE: 8,
    /**
     * Device not poened for write
     * @type {Number}
     */
    FT_DEVICE_NOT_OPENED_FOR_WRITE: 9,
    /**
     * Failed to write to device
     * @type {Number}
     */
    FT_FAILED_TO_WRITE_DEVICE: 10,
    /**
     * Failed to read the device EEPROM
     * @type {Number}
     */
    FT_EEPROM_READ_FAILED: 11,
    /**
     * Failed to write the device EEPROM
     * @type {Number}
     */
    FT_EEPROM_WRITE_FAILED: 12,
    /**
     * Failed to erase the device EEPROM
     * @type {Number}
     */
    FT_EEPROM_ERASE_FAILED: 13,
    /**
     * An EEPROM is not fitted to the device
     * @type {Number}
     */
    FT_EEPROM_NOT_PRESENT: 14,
    /**
     * Device EEPROM is blank
     * @type {Number}
     */
    FT_EEPROM_NOT_PROGRAMMED: 15,
    /**
     * Invalid arguments
     * @type {Number}
     */
    FT_INVALID_ARGS: 16,
    /**
     * An other error has occurred
     * @type {Number}
     */
    FT_OTHER_ERROR: 17
};
Object.freeze(FT_STATUS);

/**
 * Device type identifiers for FT_GetDeviceInfoDetail and FT_GetDeviceInfo
 * @enum {Number}
 */
const FT_DEVICE = {
    /**
     * FT232B or FT245B device
     * @type {Number}
     */
    FT_DEVICE_BM: 0,
    /**
     * FT8U232AM or FT8U245AM device
     * @type {Number}
     */
    FT_DEVICE_AM: 1,
    /**
     * FT8U100AX device
     * @type {Number}
     */
    FT_DEVICE_100AX: 2,
    /**
     * Unknown device
     * @type {Number}
     */
    FT_DEVICE_UNKNOWN: 3,
    /**
     * FT2232 device
     * @type {Number}
     */
    FT_DEVICE_2232: 4,
    /**
     * FT232R or FT245R device
     * @type {Number}
     */
    FT_DEVICE_232R: 5,
    /**
     * FT2232H device
     * @type {Number}
     */
    FT_DEVICE_2232H: 6,
    /**
     * FT4232H device
     * @type {Number}
     */
    FT_DEVICE_4232H: 7,
    /**
     * FT232H device
     * @type {Number}
     */
    FT_DEVICE_232H: 8,
    /**
     * FT X-Series device
     * @type {Number}
     */
    FT_DEVICE_X_SERIES: 9,
    /**
     * FT4222 hi-speed device Mode 0 - 2 interfaces
     * @type {Number}
     */
    FT_DEVICE_4222H_0: 10,
    /**
     * FT4222 hi-speed device Mode 1 or 2 - 4 interfaces
     * @type {Number}
     */
    FT_DEVICE_4222H_1_2: 11,
    /**
     * FT4222 hi-speed device Mode 3 - 1 interface
     * @type {Number}
     */
    FT_DEVICE_4222H_3: 12,
    /**
     * OTP programmer board for the FT4222
     * @type {Number}
     */
    FT_DEVICE_4222_PROG: 13
};
Object.freeze(FT_STATUS);

/**
 * Flags that provide information on the FTDI device state
 * @enum {Number}
 */
const FT_FLAGS = {
    /**
     * Indicates that the device is open
     * @type {Number}
     */
    FT_FLAGS_OPENED: 0x00000001,
    /**
     * Indicates that the device is enumerated as a hi-speed USB device
     * @type {Number}
     */
    FT_FLAGS_HISPEED: 0x00000002
}
Object.freeze(FT_FLAGS);

/**
 * Permitted data bits for FTDI devices
 * @enum {Number}
 */
const FT_DATA_BITS = {
    /**
     * 8 data bits
     * @enum {Number}
     */
    FT_BITS_8: 0x08,
    /**
     * 7 data bits
     * @enum {Number}
     */
    FT_BITS_7: 0x07
};
Object.freeze(FT_FLAGS);

/**
 * Permitted stop bits for FTDI devices
 * @enum {Number}
 */
const FT_STOP_BITS = {
    /**
     * 1 stop bit
     * @enum {Number}
     */
    FT_STOP_BITS_1: 0x00,
    /**
     * 2 stop bits
     * @enum {Number}
     */
    FT_STOP_BITS_2: 0x02
};
Object.freeze(FT_STOP_BITS);

/**
 * Permitted parity values for FTDI devices
 * @enum {Number}
 */
const FT_PARITY = {
    /**
     * No parity
     * @enum {Number}
     */
    FT_PARITY_NONE: 0x00,
    /**
     * Odd parity
     * @enum {Number}
     */
    FT_PARITY_ODD: 0x01,
    /**
     * Even parity
     * @enum {Number}
     */
    FT_PARITY_EVEN: 0x02,
    /**
     * Mark parity
     * @enum {Number}
     */
    FT_PARITY_MARK: 0x03,
    /**
     * Space parity
     * @enum {Number}
     */
    FT_PARITY_SPACE: 0x04
};
Object.freeze(FT_PARITY);


/**
 * Permitted flow control values for FTDI devices
 * @enum {Number}
 */
const FT_FLOW_CONTROL = {
    /**
     * No flow control
     * @enum {Number}
     */
    FT_FLOW_NONE: 0x0000,
    /**
     * RTS/CTS flow control
     * @enum {Number}
     */
    FT_FLOW_RTS_CTS: 0x0100,
    /**
     * DTR/DSR flow control
     * @enum {Number}
     */
    FT_FLOW_DTR_DSR: 0x0200,
    /**
     * Xon/Xoff flow control
     * @enum {Number}
     */
    FT_FLOW_XON_XOFF: 0x0400
};
Object.freeze(FT_FLOW_CONTROL);

class FTDI {

    /**
     * Class wrapper for FTD2XX.DLL
     * @constructor
     */
    constructor() {
        this._ftHandle = null;
    }

    _checkFtHandle(runIfOk) {
        let ftStatus = FT_STATUS.FT_OTHER_ERROR;
        if(this._ftHandle != null && this._ftHandle !== 0) {
            ftStatus = callback();
        }
        return ftStatus;
    }

    _setUpFtdiDevice() {
        // Initialise port data characteristics
        let wordLength = FT_DATA_BITS.FT_BITS_8;
        let stopBits = FT_STOP_BITS.FT_STOP_BITS_1;
        let parity = FT_PARITY.FT_PARITY_NONE;
        ftStatus = _ftdi.setDataCharacteristics(this._ftHandle, wordLength, stopBits, parity);
        if(ftStatus !== FT_STATUS.FT_OK) return ftStatus;
        let flowControl = FT_FLOW_CONTROL.FT_FLOW_NONE;
        let xon = 0x11;
        let xoff = 0x13;
        ftStatus = _ftdi.setFlowControl(this._ftHandle, flowControl, xon, xoff);
        if(ftStatus !== FT_STATUS.FT_OK) return ftStatus;
        // Initialise Baud rate
        let baudRate = 9600;
        return _ftdi.setBaudRate(this._ftHandle, baudRate);
    }

    /**
     * @typedef GetNumberOfDevicesResult
     * @type {Object}
     * @property {Number} ftStatus Value from FT_CreateDeviceInfoList
     * @property {Number} devCount The number of FTDI devices available
     */
    /**
     * Gets the number of FTDI devices available
     * @returns {GetNumberOfDevicesResult}
     */
    static getNumberOfDevices() {
        return _ftdi.createDeviceInfoList();
    }

    /**
     * The device handle
     * @typedef FtHandle
     * @type {Object}
     * @property {Number} value
     */
    /**
     * Type that holds device information for GetDeviceInformation method
     * @typedef DeviceInfo
     * @type {Object}
     * @property {Number} flags Indicates device state. Can be any combination of the following: FT_FLAGS.FT_FLAGS_OPENED, FT_FLAGS.FT_FLAGS_HISPEED
     * @property {Number} type Indicates the device type. Can be one of the following: FT_DEVICE_232R, FT_DEVICE_2232C, FT_DEVICE_BM, FT_DEVICE_AM, FT_DEVICE_100AX or FT_DEVICE_UNKNOWN
     * @property {Number} id The Vendor ID and Product ID of the device
     * @property {Number} locId The physical location identifier of the device
     * @property {Number} serialNumber The device serial number
     * @property {Number} description The device description
     * @property {FtHandle} ftHandle This value is not used externally and is provided for information only. If the device is not open, ftHandle.value is 0.
     */
    /**
     * @typedef GetDeviceListResult
     * @type {Object}
     * @property {Number} ftStatus Value from FT_GetDeviceInfoDetail
     * @property {Array.<DeviceInfo>} deviceInfoList
     */
    /**
     * Gets information on all of the FTDI devices available
     * @returns {GetDeviceListResult}
     */
    static getDeviceList() {
        let deviceInfoList = new Array();
        let { ftStatus, devCount } = this.getNumberOfDevices();
        for (let i = 0; i < devCount; ++i) {
            deviceInfoList[i] = _ftdi.getDeviceInfoDetail(i).deviceInfo;
        }
        return { ftStatus, deviceInfoList }
    }

    /**
     * Opens the FTDI device with the specified index,
     * initialises the device to 8 data bits, 1 stop bit, no parity, no flow control and 9600 Baud
     * @param {Number} index Index of the device to open,
     * note that this cannot be guaranteed to open a specific device
     * @returns {Number} ftStatus Status values for FTDI device
     */
    openByIndex(index) {
        let { ftStatus, ftHandle } = _ftdi.open(index);
        if(ftStatus === FT_STATUS.FT_OK || ftHandle.value !== 0) {
            this._ftHandle = ftHandle;
            this._setUpFtdiDevice();
        } else {
            this._ftHandle = null;
        }
        return ftStatus;
    }

    /**
     * Sets the data bits, stop bits and parity for the device
     * @param {Number} wordLength The number of data bits for UART data. Valid values are FT_DATA_BITS.FT_DATA_7 or FT_DATA_BITS.FT_BITS_8
     * @param {Number} stopBits The number of stop bits for UART data. Valid values are FT_STOP_BITS.FT_STOP_BITS_1 or FT_STOP_BITS.FT_STOP_BITS_2
     * @param {Number} parity The parity of the UART data. Valid values are FT_PARITY.FT_PARITY_NONE, FT_PARITY.FT_PARITY_ODD, FT_PARITY.FT_PARITY_EVEN, FT_PARITY.FT_PARITY_MARK or FT_PARITY.FT_PARITY_SPACE
     * @returns {Number} ftStatus ftStatus value from FT_SetDataCharacteristics
     */
    setDataCharacteristics(wordLength, stopBits, parity) {
        return this._checkFtHandle(() => _ftdi.setDataCharacteristics(this._ftHandle, wordLength, stopBits, parity));
    }

    /**
     * Sets the flow control type.
     * @param {Number} flowControl The type of flow control for the UART. Valid values are FT_FLOW_CONTROL.FT_FLOW_NONE, FT_FLOW_CONTROL.FT_FLOW_RTS_CTS, FT_FLOW_CONTROL.FT_FLOW_DTR_DSR or FT_FLOW_CONTROL.FT_FLOW_XON_XOFF
     * @param {Number} xon The Xon character for Xon/Xoff flow control. Ignored if not using Xon/XOff flow control
     * @param {Number} xoff The Xoff character for Xon/Xoff flow control. Ignored if not using Xon/XOff flow control
     * @returns {Number} ftStatus Value from FT_SetFlowControl
     */
    setFlowControl(flowControl, xon, xoff) {
        return this._checkFtHandle(() => _ftdi.setFlowControl(flowControl, xon, xoff));
    }

    // Intellisense comments
        /// <summary>
        /// Sets the current Baud rate.
        /// </summary>
        /// <returns>FT_STATUS value from FT_SetBaudRate in FTD2XX.DLL</returns>
        /// <param name="BaudRate">The desired Baud rate for the device.</param>
    /**
     * Sets the current Baud rate.
     * @param {Number} baudRate The desired Baud rate for the device
     * @retern {Number} ftStatus Value from FT_SetBaudRate
     */
    setBaudRate(baudRate) {
        return this._checkFtHandle(() => _ftdi.setBaudRate(baudRate));
    }
}

module.exports = {
    FT_STATUS: FT_STATUS,
    FT_DEVICE: FT_DEVICE,
    FT_FLAGS: FT_FLAGS,
    FT_DATA_BITS: FT_DATA_BITS,
    FT_STOP_BITS: FT_STOP_BITS,
    FT_PARITY: FT_PARITY,
    FTDI: FTDI
}