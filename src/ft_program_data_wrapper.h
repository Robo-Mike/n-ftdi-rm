#ifndef FT_PROGRAM_DATA_WRAPPER_H_
#define FT_PROGRAM_DATA_WRAPPER_H_

#include <napi.h>
#include <ftd2xx.h>
#include "napi_utils.h"

class FtProgramDataWrapper : public Napi::ObjectWrap<FtProgramDataWrapper>
{
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports);
    static Napi::Object NewInstance(Napi::Env env, FT_HANDLE ftHandle);
    static PFT_PROGRAM_DATA GetData(Napi::Value value);
    FtProgramDataWrapper(const Napi::CallbackInfo &info);
    PFT_PROGRAM_DATA GetData();

private:
    static Napi::FunctionReference constructor;
    char manufacturer[32];
    char manufacturerId[16];
    char description[64];
    char serialNumber[16];
    FT_PROGRAM_DATA ftData;
    Napi::Value GetSignature1(const Napi::CallbackInfo &info);
    void SetSignature1(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetSignature2(const Napi::CallbackInfo &info);
    void SetSignature2(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetVersion(const Napi::CallbackInfo &info);
    void SetVersion(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetVendorId(const Napi::CallbackInfo &info);
    void SetVendorId(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetProductId(const Napi::CallbackInfo &info);
    void SetProductId(const Napi::CallbackInfo &info, const Napi::Value &value);

    Napi::Value GetManufacturer(const Napi::CallbackInfo &info);
    void SetManufacturer(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetManufacturerId(const Napi::CallbackInfo &info);
    void SetManufacturerId(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetDescription(const Napi::CallbackInfo &info);
    void SetDescription(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetSerialNumber(const Napi::CallbackInfo &info);
    void SetSerialNumber(const Napi::CallbackInfo &info, const Napi::Value &value);

    Napi::Value GetMaxPower(const Napi::CallbackInfo &info);
    void SetMaxPower(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetPnP(const Napi::CallbackInfo &info);
    void SetPnP(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetSelfPowered(const Napi::CallbackInfo &info);
    void SetSelfPowered(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetRemoteWakeup(const Napi::CallbackInfo &info);
    void SetRemoteWakeup(const Napi::CallbackInfo &info, const Napi::Value &value);

    // FT2232H extensions
    Napi::Value GetPullDownEnableH(const Napi::CallbackInfo &info);
    void SetPullDownEnableH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetSerNumEnableH(const Napi::CallbackInfo &info);
    void SetSerNumEnableH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetACSlowSlewH(const Napi::CallbackInfo &info);
    void SetACSlowSlewH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetACSchmittInputH(const Napi::CallbackInfo &info);
    void SetACSchmittInputH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetACDriveCurrentH(const Napi::CallbackInfo &info);
    void SetACDriveCurrentH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetADSlowSlewH(const Napi::CallbackInfo &info);
    void SetADSlowSlewH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetADSchmittInputH(const Napi::CallbackInfo &info);
    void SetADSchmittInputH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetADDriveCurrentH(const Napi::CallbackInfo &info);
    void SetADDriveCurrentH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus0H(const Napi::CallbackInfo &info);
    void SetCbus0H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus1H(const Napi::CallbackInfo &info);
    void SetCbus1H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus2H(const Napi::CallbackInfo &info);
    void SetCbus2H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus3H(const Napi::CallbackInfo &info);
    void SetCbus3H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus4H(const Napi::CallbackInfo &info);
    void SetCbus4H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus5H(const Napi::CallbackInfo &info);
    void SetCbus5H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus6H(const Napi::CallbackInfo &info);
    void SetCbus6H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus7H(const Napi::CallbackInfo &info);
    void SetCbus7H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus8H(const Napi::CallbackInfo &info);
    void SetCbus8H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetCbus9H(const Napi::CallbackInfo &info);
    void SetCbus9H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetIsFifoH(const Napi::CallbackInfo &info);
    void SetIsFifoH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetIsFifoTarH(const Napi::CallbackInfo &info);
    void SetIsFifoTarH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetIsFastSerH(const Napi::CallbackInfo &info);
    void SetIsFastSerH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetIsFT1248H(const Napi::CallbackInfo &info);
    void SetIsFT1248H(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetFT1248CpolH(const Napi::CallbackInfo &info);
    void SetFT1248CpolH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetFT1248LsbH(const Napi::CallbackInfo &info);
    void SetFT1248LsbH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetFT1248FlowControlH(const Napi::CallbackInfo &info);
    void SetFT1248FlowControlH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetIsVCPH(const Napi::CallbackInfo &info);
    void SetIsVCPH(const Napi::CallbackInfo &info, const Napi::Value &value);
    Napi::Value GetPowerSaveEnableH(const Napi::CallbackInfo &info);
    void SetPowerSaveEnableH(const Napi::CallbackInfo &info, const Napi::Value &value);
};

#endif //FT_PROGRAM_DATA_WRAPPER_H_