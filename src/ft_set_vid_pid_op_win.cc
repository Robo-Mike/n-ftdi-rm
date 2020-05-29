#include "ft_set_vid_pid_op.h"

Napi::Object FtSetVidPidOp::Init(Napi::Env env, Napi::Object exports)
{
    exports.Set("setVIdPIdSync", Napi::Function::New(env, FtSetVidPidOp::InvokeSync));
    exports.Set("setVIdPId", Napi::Function::New(env, FtSetVidPidOp::Invoke));
    return exports;
}

Napi::Number FtSetVidPidOp::InvokeSync(const Napi::CallbackInfo &info)
{
    DWORD vendorId = info[0].As<Napi::Number>().Uint32Value();
    DWORD productId = info[1].As<Napi::Number>().Uint32Value();
    //no function to call in windows
    FT_STATUS ftStatus = FT_OK;
    return Napi::Number::New(info.Env(), ftStatus);
}

Napi::Promise FtSetVidPidOp::Invoke(const Napi::CallbackInfo &info)
{
    DWORD vendorId = info[0].As<Napi::Number>().Uint32Value();
    DWORD productId = info[1].As<Napi::Number>().Uint32Value();
    auto *operation = new FtSetVidPidOp(info.Env(), vendorId, productId);
    operation->Queue();
    return operation->Promise();
}

FtSetVidPidOp::FtSetVidPidOp(Napi::Env env, DWORD vendorId, DWORD productId)
    : FtBaseOp(env), vendorId(vendorId), productId(productId) {}

void FtSetVidPidOp::Execute()
{
    ftStatus = FT_OK;
}

void FtSetVidPidOp::OnOK()
{
    Napi::HandleScope scope(Env());
    deferred.Resolve(Napi::Number::New(Env(), ftStatus));
}
