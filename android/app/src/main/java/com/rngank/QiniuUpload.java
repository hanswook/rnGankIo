//package com.rngank;
//
//import android.content.Intent;
//import android.util.Log;
//
//import com.qiniu.android.common.AutoZone;
//import com.qiniu.android.http.ResponseInfo;
//import com.qiniu.android.storage.Configuration;
//import com.qiniu.android.storage.UpCancellationSignal;
//import com.qiniu.android.storage.UpCompletionHandler;
//import com.qiniu.android.storage.UpProgressHandler;
//import com.qiniu.android.storage.UploadManager;
//import com.qiniu.android.storage.UploadOptions;
//
//import org.json.JSONObject;
//
///**
// * @date: 2020/5/14 5:39 PM
// * @author: hanxu
// * @email hxxx1992@163.com
// * @description null
// */
//public class QiniuUpload {
//
//    private void upload() {
////        this.isCancelled = false;
////        final String filepath = call.argument("filepath");
////        final String key = call.argument("key");
////        final String token = call.argument("token");
////        Log.e(TAG, filepath);
//
//        String filepath="";
//        String key="";
//        String token="";
//
//        Configuration config = new Configuration.Builder()
//                .chunkSize(512 * 1024)        // 分片上传时，每片的大小。 默认256K
//                .putThreshhold(1024 * 1024)   // 启用分片上传阀值。默认512K
//                .connectTimeout(10)           // 链接超时。默认10秒
//                .useHttps(true)               // 是否使用https上传域名
//                .responseTimeout(60)          // 服务器响应超时。默认60秒
//                .zone(new AutoZone())        // 设置区域，指定不同区域的上传域名、备用域名、备用IP。
//                .build();
//        // 重用uploadManager。一般地，只需要创建一个uploadManager对象
//        UploadManager uploadManager = new UploadManager(config);
//
//        UpCompletionHandler upCompletionHandler = new UpCompletionHandler() {
//            @Override
//            public void complete(String key, ResponseInfo info, JSONObject res) {
//                //res包含hash、key等信息，具体字段取决于上传策略的设置
//                if (info.isOK()) {
//                    Log.i("qiniu", "Upload Success");
//                } else {
//                    Log.i("qiniu", "Upload Fail: " + info.error);
//                    //如果失败，这里可以把info信息上报自己的服务器，便于后面分析上传错误原因
//                }
//                result.success(info.isOK());
//                Log.i("qiniu", key + ",\r\n " + info + ",\r\n " + res);
//            }
//        };
//
//
//        UploadOptions options = new UploadOpti ons(null, null, false, new UpProgressHandler() {
//            @Override
//            public void progress(String key, double percent) {
//                Log.i("qiniu", key + ": " + percent);
//            }
//        });
//
//        uploadManager.put(filepath, key, token, upCompletionHandler, options);
//    }
//}
