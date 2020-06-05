package com.rngank;

import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * @date: 2020/5/14 6:11 PM
 * @author: hanxu
 * @email hxxx1992@163.com
 * @description null
 */
public class ToastModule extends ReactContextBaseJavaModule {
    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }


    @ReactMethod
    public void showToast(){
        Log.e("ToastModule","showToast");
    }
}
