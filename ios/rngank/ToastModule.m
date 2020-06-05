#import "ToastModule.h"
#import <React/RCTBridgeMethod.h>

@implementation ToastModule

// 导出模块，不添加参数即默认为这个类名
RCT_EXPORT_MODULE();

// 导出方法，桥接到js的方法返回值类型必须是void
RCT_EXPORT_METHOD(showToast:()){
  NSLog(@"%@ ===> doSomething","SSS");
}

@end
