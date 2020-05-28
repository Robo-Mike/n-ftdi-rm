#ifndef FT_SET_VID_PID_OP_H_
#define FT_SET_VID_PID_OP_H_

#include <napi.h>
#include <ftd2xx.h>
#include "ft_base_op.h"

class FtSetVidPidOp : public FtBaseOp
{
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports);
    static Napi::Number InvokeSync(const Napi::CallbackInfo &info);
    static Napi::Promise Invoke(const Napi::CallbackInfo &info);
    FtSetVidPidOp(Napi::Env env, DWORD vendorId, DWORD productId);
    void Execute();
    void OnOK();

private:
    DWORD vendorId;
    DWORD productId;
    inline static Napi::Object CreateResult(
        Napi::Env env,
        FT_STATUS ftStatus);
};

#endif // FT_SET_VID_PID_OP_H_
