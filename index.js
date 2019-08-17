'use strict'
const _ftdiAddon = require('bindings')('N-FTD2XX')
console.log('N-FTD2XX')

// Flags for FT_OpenEx
const FT_OPEN_BY_SERIAL_NUMBER = 0x00000001
const FT_OPEN_BY_DESCRIPTION = 0x00000002
const FT_OPEN_BY_LOCATION = 0x00000004

/**
 * Status values for FTDI devices
 * @enum {number}
 */
const FT_STATUS = {
  /**
   * Status OK
   * @type {number}
   */
  FT_OK: 0,
  /**
   * The device handle is invalid
   * @type {number}
   */
  FT_INVALID_HANDLE: 1,
  /**
   * Device not found
   * @type {number}
   */
  FT_DEVICE_NOT_FOUND: 2,
  /**
   * Device is not open
   * @type {number}
   */
  FT_DEVICE_NOT_OPENED: 3,
  /**
   * IO error
   * @type {number}
   */
  FT_IO_ERROR: 4,
  /**
   * Insufficient resources
   * @type {number}
   */
  FT_INSUFFICIENT_RESOURCES: 5,
  /**
   * A parameter was invalid
   * @type {number}
   */
  FT_INVALID_PARAMETER: 6,
  /**
   * The requested baud rate is invalid
   * @type {number}
   */
  FT_INVALID_BAUD_RATE: 7,
  /**
   * Device not opened for erase
   * @type {number}
   */
  FT_DEVICE_NOT_OPENED_FOR_ERASE: 8,
  /**
   * Device not poened for write
   * @type {number}
   */
  FT_DEVICE_NOT_OPENED_FOR_WRITE: 9,
  /**
   * Failed to write to device
   * @type {number}
   */
  FT_FAILED_TO_WRITE_DEVICE: 10,
  /**
   * Failed to read the device EEPROM
   * @type {number}
   */
  FT_EEPROM_READ_FAILED: 11,
  /**
   * Failed to write the device EEPROM
   * @type {number}
   */
  FT_EEPROM_WRITE_FAILED: 12,
  /**
   * Failed to erase the device EEPROM
   * @type {number}
   */
  FT_EEPROM_ERASE_FAILED: 13,
  /**
   * An EEPROM is not fitted to the device
   * @type {number}
   */
  FT_EEPROM_NOT_PRESENT: 14,
  /**
   * Device EEPROM is blank
   * @type {number}
   */
  FT_EEPROM_NOT_PROGRAMMED: 15,
  /**
   * Invalid arguments
   * @type {number}
   */
  FT_INVALID_ARGS: 16,
  /**
   * An other error has occurred
   * @type {number}
   */
  FT_OTHER_ERROR: 17
}
Object.freeze(FT_STATUS)

/**
 * Device type identifiers for FT_GetDeviceInfoDetail and FT_GetDeviceInfo
 * @enum {number}
 */
const FT_DEVICE = {
  /**
   * FT232B or FT245B device
   * @type {number}
   */
  FT_DEVICE_BM: 0,
  /**
   * FT8U232AM or FT8U245AM device
   * @type {number}
   */
  FT_DEVICE_AM: 1,
  /**
   * FT8U100AX device
   * @type {number}
   */
  FT_DEVICE_100AX: 2,
  /**
   * Unknown device
   * @type {number}
   */
  FT_DEVICE_UNKNOWN: 3,
  /**
   * FT2232 device
   * @type {number}
   */
  FT_DEVICE_2232: 4,
  /**
   * FT232R or FT245R device
   * @type {number}
   */
  FT_DEVICE_232R: 5,
  /**
   * FT2232H device
   * @type {number}
   */
  FT_DEVICE_2232H: 6,
  /**
   * FT4232H device
   * @type {number}
   */
  FT_DEVICE_4232H: 7,
  /**
   * FT232H device
   * @type {number}
   */
  FT_DEVICE_232H: 8,
  /**
   * FT X-Series device
   * @type {number}
   */
  FT_DEVICE_X_SERIES: 9,
  /**
   * FT4222 hi-speed device Mode 0 - 2 interfaces
   * @type {number}
   */
  FT_DEVICE_4222H_0: 10,
  /**
   * FT4222 hi-speed device Mode 1 or 2 - 4 interfaces
   * @type {number}
   */
  FT_DEVICE_4222H_1_2: 11,
  /**
   * FT4222 hi-speed device Mode 3 - 1 interface
   * @type {number}
   */
  FT_DEVICE_4222H_3: 12,
  /**
   * OTP programmer board for the FT4222
   * @type {number}
   */
  FT_DEVICE_4222_PROG: 13
}
Object.freeze(FT_STATUS)

/**
 * Flags that provide information on the FTDI device state
 * @enum {number}
 */
const FT_FLAGS = {
  /**
   * Indicates that the device is open
   * @type {number}
   */
  FT_FLAGS_OPENED: 0x00000001,
  /**
   * Indicates that the device is enumerated as a hi-speed USB device
   * @type {number}
   */
  FT_FLAGS_HISPEED: 0x00000002
}
Object.freeze(FT_FLAGS)

/**
 * Permitted data bits for FTDI devices
 * @enum {number}
 */
const FT_DATA_BITS = {
  /**
   * 8 data bits
   * @enum {number}
   */
  FT_BITS_8: 0x08,
  /**
   * 7 data bits
   * @enum {number}
   */
  FT_BITS_7: 0x07
}
Object.freeze(FT_FLAGS)

/**
 * Permitted stop bits for FTDI devices
 * @enum {number}
 */
const FT_STOP_BITS = {
  /**
   * 1 stop bit
   * @enum {number}
   */
  FT_STOP_BITS_1: 0x00,
  /**
   * 2 stop bits
   * @enum {number}
   */
  FT_STOP_BITS_2: 0x02
}
Object.freeze(FT_STOP_BITS)

/**
 * Permitted parity values for FTDI devices
 * @enum {number}
 */
const FT_PARITY = {
  /**
   * No parity
   * @enum {number}
   */
  FT_PARITY_NONE: 0x00,
  /**
   * Odd parity
   * @enum {number}
   */
  FT_PARITY_ODD: 0x01,
  /**
   * Even parity
   * @enum {number}
   */
  FT_PARITY_EVEN: 0x02,
  /**
   * Mark parity
   * @enum {number}
   */
  FT_PARITY_MARK: 0x03,
  /**
   * Space parity
   * @enum {number}
   */
  FT_PARITY_SPACE: 0x04
}
Object.freeze(FT_PARITY)

/**
 * Permitted flow control values for FTDI devices
 * @enum {number}
 */
const FT_FLOW_CONTROL = {
  /**
   * No flow control
   * @enum {number}
   */
  FT_FLOW_NONE: 0x0000,
  /**
   * RTS/CTS flow control
   * @enum {number}
   */
  FT_FLOW_RTS_CTS: 0x0100,
  /**
   * DTR/DSR flow control
   * @enum {number}
   */
  FT_FLOW_DTR_DSR: 0x0200,
  /**
   * Xon/Xoff flow control
   * @enum {number}
   */
  FT_FLOW_XON_XOFF: 0x0400
}
Object.freeze(FT_FLOW_CONTROL)

let ftdiIsBisy = false
class FtdiError extends Error {}

function throwErrorIfBusySync (func) {
  if (!ftdiIsBisy) {
    try {
      let func = arguments[arguments.length - 1]
      for (let i = arguments.length - 2; i >= 0; --i) {
        func = arguments[i](func)
      }
      ftdiIsBisy = true
      return func()
    } finally {
      ftdiIsBisy = false
    }
  }
  throw new FtdiError('FTDI driver has already engaged another task')
}

async function throwErrorIfBusy () {
  if (!ftdiIsBisy) {
    let func = arguments[arguments.length - 1]
    for (let i = arguments.length - 2; i >= 0; --i) {
      func = arguments[i](func)
    }
    try {
      ftdiIsBisy = true
      return await func()
    } finally {
      ftdiIsBisy = false
    }
  }
  throw new FtdiError('FTDI driver has already engaged another task')
}

class FTDI {
  /**
   * Class wrapper for FTD2XX.DLL
   * @class
   */
  constructor () {
    /**
     * @type {FtHandle}
     * @private
     */
    this._ftHandle = null
  }

  _checkFtHandleSync (invokeIfOk) {
    let ftStatus = FT_STATUS.FT_OTHER_ERROR
    if (this._ftHandle != null && this._ftHandle.value !== 0) {
      ftStatus = invokeIfOk()
    }
    return ftStatus
  }

  async _checkFtHandle (invokeIfOk) {
    let ftStatus = FT_STATUS.FT_OTHER_ERROR
    if (this._ftHandle != null && this._ftHandle.value !== 0) {
      ftStatus = await invokeIfOk()
    }
    return ftStatus
  }

  _setUpFtdiDeviceSync () {
    // Initialise port data characteristics
    const wordLength = FT_DATA_BITS.FT_BITS_8
    const stopBits = FT_STOP_BITS.FT_STOP_BITS_1
    const parity = FT_PARITY.FT_PARITY_NONE
    let ftStatus = _ftdiAddon.setDataCharacteristicsSync(this._ftHandle, wordLength, stopBits, parity)
    if (ftStatus !== FT_STATUS.FT_OK) return ftStatus
    const flowControl = FT_FLOW_CONTROL.FT_FLOW_NONE
    const xon = 0x11
    const xoff = 0x13
    ftStatus = _ftdiAddon.setFlowControlSync(this._ftHandle, flowControl, xon, xoff)
    if (ftStatus !== FT_STATUS.FT_OK) return ftStatus
    // Initialise Baud rate
    const baudRate = 9600
    return _ftdiAddon.setBaudRateSync(this._ftHandle, baudRate)
  }

  async _setUpFtdiDevice () {
    // Initialise port data characteristics
    const wordLength = FT_DATA_BITS.FT_BITS_8
    const stopBits = FT_STOP_BITS.FT_STOP_BITS_1
    const parity = FT_PARITY.FT_PARITY_NONE
    let ftStatus = await _ftdiAddon.setDataCharacteristics(this._ftHandle, wordLength, stopBits, parity)
    if (ftStatus !== FT_STATUS.FT_OK) return ftStatus
    const flowControl = FT_FLOW_CONTROL.FT_FLOW_NONE
    const xon = 0x11
    const xoff = 0x13
    ftStatus = await _ftdiAddon.setFlowControl(this._ftHandle, flowControl, xon, xoff)
    if (ftStatus !== FT_STATUS.FT_OK) return ftStatus
    // Initialise Baud rate
    const baudRate = 9600
    return _ftdiAddon.setBaudRate(this._ftHandle, baudRate)
  }

  _openAndSetupSync (openFuncSync) {
    let { ftStatus, ftHandle } = openFuncSync()
    if (ftStatus === FT_STATUS.FT_OK || ftHandle.value !== 0) {
      this._ftHandle = ftHandle
      ftStatus = this._setUpFtdiDeviceSync()
    } else {
      this._ftHandle = null
    }
    return ftStatus
  }

  async _openAndSetup (openFunc) {
    let { ftStatus, ftHandle } = await openFunc()
    if (ftStatus === FT_STATUS.FT_OK || ftHandle.value !== 0) {
      this._ftHandle = ftHandle
      ftStatus = await this._setUpFtdiDevice()
    } else {
      this._ftHandle = null
    }
    return ftStatus
  }

  /**
   * @typedef GetNumberOfDevicesResult
   * @type {object}
   * @property {number} ftStatus Value from FT_CreateDeviceInfoList
   * @property {number} devCount The number of FTDI devices available
   */
  /**
   * Gets the number of FTDI devices available
   * @returns {GetNumberOfDevicesResult}
   */
  static getNumberOfDevicesSync () {
    return throwErrorIfBusySync(_ftdiAddon.createDeviceInfoListSync)
  }

  /**
   * Gets the number of FTDI devices available
   * @returns {Promise<GetNumberOfDevicesResult>}
   */
  static async getNumberOfDevices () {
    return throwErrorIfBusy(_ftdiAddon.createDeviceInfoList)
  }

  /**
   * @typedef {object} FtHandle
   */
  /**
   * Mark handle as free
   * @function
   * @name FtHandle#free
   */
  /**
   * Type that holds device information for GetDeviceInformation method
   * @typedef DeviceInfo
   * @type {object}
   * @property {number} flags Indicates device state. Can be any combination of the following: FT_FLAGS.FT_FLAGS_OPENED, FT_FLAGS.FT_FLAGS_HISPEED
   * @property {number} type Indicates the device type. Can be one of the following: FT_DEVICE_232R, FT_DEVICE_2232C, FT_DEVICE_BM, FT_DEVICE_AM, FT_DEVICE_100AX or FT_DEVICE_UNKNOWN
   * @property {number} id The Vendor ID and Product ID of the device
   * @property {number} locId The physical location identifier of the device
   * @property {string} serialNumber The device serial number
   * @property {string} description The device description
   * @property {FtHandle|null} ftHandle This value is not used externally and is provided for information only. If the device is not open, ftHandle is null
   */
  /**
   * @typedef GetDeviceListResult
   * @type {object}
   * @property {number} ftStatus Value from FT_GetDeviceInfoDetail
   * @property {Array.<DeviceInfo>} deviceInfoList
   */
  /**
   * Gets information on all of the FTDI devices available
   * @returns {GetDeviceListResult}
   */
  static getDeviceListSync () {
    return throwErrorIfBusySync(() => {
      const deviceInfoList = []
      let { ftStatus, devCount } = _ftdiAddon.getNumberOfDevicesSync()
      for (let i = 0; i < devCount; ++i) {
        const deviceInfoDetail = _ftdiAddon.getDeviceInfoDetailSync(i)
        ftStatus = deviceInfoDetail.ftStatus
        deviceInfoList[i] = deviceInfoDetail.deviceInfo
      }
      return { ftStatus, deviceInfoList }
    })
  }

  /**
   * Gets information on all of the FTDI devices available
   * @returns {Promise<GetDeviceListResult>}
   */
  static async getDeviceList () {
    return throwErrorIfBusy(async () => {
      const deviceInfoList = []
      let { ftStatus, devCount } = await _ftdiAddon.getNumberOfDevices()
      for (let i = 0; i < devCount; ++i) {
        const deviceInfoDetail = await _ftdiAddon.getDeviceInfoDetail(i)
        ftStatus = deviceInfoDetail.ftStatus
        deviceInfoList[i] = deviceInfoDetail.deviceInfo
      }
      return { ftStatus, deviceInfoList }
    })
  }

  /**
   * Opens the FTDI device with the specified index.
   * Initialises the device to 8 data bits, 1 stop bit, no parity, no flow control and 9600 Baud
   * @param {number} index Index of the device to open,
   * note that this cannot be guaranteed to open a specific device
   * @returns {number} ftStatus Status values for FTDI device
   */
  openByIndexSync (index) {
    return throwErrorIfBusySync(this._openAndSetupSync, () => _ftdiAddon.openSync(index))
  }

  /**
   * Opens the FTDI device with the specified index.
   * Initialises the device to 8 data bits, 1 stop bit, no parity, no flow control and 9600 Baud
   * @param {number} index Index of the device to open,
   * note that this cannot be guaranteed to open a specific device
   * @returns {Promise<number>} ftStatus Status values for FTDI device
   */
  async openByIndex (index) {
    return throwErrorIfBusy(this._openAndSetup, () => _ftdiAddon.open(index))
  }

  /**
   * Opens the FTDI device with the specified serial number
   * Initialises the device to 8 data bits, 1 stop bit, no parity, no flow control and 9600 Baud
   * @param {string} serialNumber Serial number of the device to open
   * @returns {number} ftStatus Status values for FTDI device
   */
  openBySerialNumberSync (serialNumber) {
    return throwErrorIfBusySync(this._openAndSetupSync, () => _ftdiAddon.openExSync(serialNumber, FT_OPEN_BY_SERIAL_NUMBER))
  }

  /**
   * Opens the FTDI device with the specified serial number
   * Initialises the device to 8 data bits, 1 stop bit, no parity, no flow control and 9600 Baud
   * @param {string} serialNumber Serial number of the device to open
   * @returns {Promise<number>} ftStatus Status values for FTDI device
   */
  async openBySerialNumber (serialNumber) {
    return throwErrorIfBusy(this._openAndSetup, () => _ftdiAddon.openEx(serialNumber, FT_OPEN_BY_SERIAL_NUMBER))
  }

  /**
   * Opens the FTDI device with the specified description
   * Initialises the device to 8 data bits, 1 stop bit, no parity, no flow control and 9600 Baud
   * @param {string} description Description of the device to open
   * @returns {number} ftStatus Status values for FTDI device
   */
  openByDescriptionSync (description) {
    return throwErrorIfBusySync(this._openAndSetupSync, () => _ftdiAddon.openExSync(description, FT_OPEN_BY_DESCRIPTION))
  }

  /**
   * Opens the FTDI device with the specified description
   * Initialises the device to 8 data bits, 1 stop bit, no parity, no flow control and 9600 Baud
   * @param {string} description Description of the device to open
   * @returns {Promise<number>} ftStatus Status values for FTDI device
   */
  async openByDescription (description) {
    return throwErrorIfBusy(this._openAndSetup, () => _ftdiAddon.openEx(description, FT_OPEN_BY_DESCRIPTION))
  }

  /**
   * Opens the FTDI device at the specified physical location
   * Initialises the device to 8 data bits, 1 stop bit, no parity, no flow control and 9600 Baud
   * @param {number} location Location of the device to open
   * @returns {number} ftStatus Status values for FTDI device
   */
  openByLocationSync (location) {
    return throwErrorIfBusySync(this._openAndSetupSync, () => _ftdiAddon.openExSync(location, FT_OPEN_BY_LOCATION))
  }

  /**
   * Opens the FTDI device at the specified physical location
   * Initialises the device to 8 data bits, 1 stop bit, no parity, no flow control and 9600 Baud
   * @param {number} location Location of the device to open
   * @returns {Promise<number>} ftStatus Status values for FTDI device
   */
  async openByLocation (location) {
    return throwErrorIfBusy(this._openAndSetup, () => _ftdiAddon.openEx(location, FT_OPEN_BY_LOCATION))
  }

  /**
   * Closes the handle to an open FTDI device
   * @returns {number} ftStatus Value from FT_Close
   */
  closeSync () {
    return throwErrorIfBusySync(() => {
      const ftStatus = this._checkFtHandleSync(() => _ftdiAddon.closeSync(this._ftHandle))
      if (ftStatus === FT_STATUS.FT_OK) {
        this._ftHandle.free()
        this._ftHandle = null
      }
      return ftStatus
    })
  }

  /**
   * Closes the handle to an open FTDI device
   * @returns {Promise<number>} ftStatus Value from FT_Close
   */
  async close () {
    return throwErrorIfBusy(async () => {
      const ftStatus = await this._checkFtHandle(() => _ftdiAddon.close(this._ftHandle))
      if (ftStatus === FT_STATUS.FT_OK) {
        this._ftHandle.free()
        this._ftHandle = null
      }
      return ftStatus
    })
  }

  /**
   * Sets the data bits, stop bits and parity for the device
   * @param {number} wordLength The number of data bits for UART data. Valid values are FT_DATA_BITS.FT_DATA_7 or FT_DATA_BITS.FT_BITS_8
   * @param {number} stopBits The number of stop bits for UART data. Valid values are FT_STOP_BITS.FT_STOP_BITS_1 or FT_STOP_BITS.FT_STOP_BITS_2
   * @param {number} parity The parity of the UART data. Valid values are FT_PARITY.FT_PARITY_NONE, FT_PARITY.FT_PARITY_ODD, FT_PARITY.FT_PARITY_EVEN, FT_PARITY.FT_PARITY_MARK or FT_PARITY.FT_PARITY_SPACE
   * @returns {number} ftStatus ftStatus value from FT_SetDataCharacteristics
   */
  setDataCharacteristicsSync (wordLength, stopBits, parity) {
    return throwErrorIfBusySync(this._checkFtHandleSync, () => _ftdiAddon.setDataCharacteristicsSync(this._ftHandle, wordLength, stopBits, parity))
  }

  /**
   * Sets the data bits, stop bits and parity for the device
   * @param {number} wordLength The number of data bits for UART data. Valid values are FT_DATA_BITS.FT_DATA_7 or FT_DATA_BITS.FT_BITS_8
   * @param {number} stopBits The number of stop bits for UART data. Valid values are FT_STOP_BITS.FT_STOP_BITS_1 or FT_STOP_BITS.FT_STOP_BITS_2
   * @param {number} parity The parity of the UART data. Valid values are FT_PARITY.FT_PARITY_NONE, FT_PARITY.FT_PARITY_ODD, FT_PARITY.FT_PARITY_EVEN, FT_PARITY.FT_PARITY_MARK or FT_PARITY.FT_PARITY_SPACE
   * @returns {Promise<number>} ftStatus ftStatus value from FT_SetDataCharacteristics
   */
  async setDataCharacteristics (wordLength, stopBits, parity) {
    return throwErrorIfBusy(this._checkFtHandle, () => _ftdiAddon.setDataCharacteristics(this._ftHandle, wordLength, stopBits, parity))
  }

  /**
   * Sets the flow control type.
   * @param {number} flowControl The type of flow control for the UART. Valid values are FT_FLOW_CONTROL.FT_FLOW_NONE, FT_FLOW_CONTROL.FT_FLOW_RTS_CTS, FT_FLOW_CONTROL.FT_FLOW_DTR_DSR or FT_FLOW_CONTROL.FT_FLOW_XON_XOFF
   * @param {number} xon The Xon character for Xon/Xoff flow control. Ignored if not using Xon/XOff flow control
   * @param {number} xoff The Xoff character for Xon/Xoff flow control. Ignored if not using Xon/XOff flow control
   * @returns {number} ftStatus Value from FT_SetFlowControl
   */
  setFlowControlSync (flowControl, xon, xoff) {
    return throwErrorIfBusySync(this._checkFtHandleSync, () => _ftdiAddon.setFlowControlSync(this._ftHandle, flowControl, xon, xoff))
  }

  /**
   * Sets the flow control type.
   * @param {number} flowControl The type of flow control for the UART. Valid values are FT_FLOW_CONTROL.FT_FLOW_NONE, FT_FLOW_CONTROL.FT_FLOW_RTS_CTS, FT_FLOW_CONTROL.FT_FLOW_DTR_DSR or FT_FLOW_CONTROL.FT_FLOW_XON_XOFF
   * @param {number} xon The Xon character for Xon/Xoff flow control. Ignored if not using Xon/XOff flow control
   * @param {number} xoff The Xoff character for Xon/Xoff flow control. Ignored if not using Xon/XOff flow control
   * @returns {Promise<number>} ftStatus Value from FT_SetFlowControl
   */
  async setFlowControl (flowControl, xon, xoff) {
    return throwErrorIfBusy(this._checkFtHandle, () => _ftdiAddon.setFlowControl(this._ftHandle, flowControl, xon, xoff))
  }

  /**
   * Sets the current Baud rate.
   * @param {number} baudRate The desired Baud rate for the device
   * @returns {number} ftStatus Value from FT_SetBaudRate
   */
  setBaudRateSync (baudRate) {
    return throwErrorIfBusySync(this._checkFtHandleSync, () => _ftdiAddon.setBaudRateSync(this._ftHandle, baudRate))
  }

  /**
   * Sets the current Baud rate.
   * @param {number} baudRate The desired Baud rate for the device
   * @returns {Promise<number>} ftStatus Value from FT_SetBaudRate
   */
  async setBaudRate (baudRate) {
    return throwErrorIfBusy(this._checkFtHandle, () => _ftdiAddon.setBaudRate(this._ftHandle, baudRate))
  }
}

module.exports = {
  FT_STATUS,
  FT_DEVICE,
  FT_FLAGS,
  FT_DATA_BITS,
  FT_STOP_BITS,
  FT_PARITY,
  FTDI
}
