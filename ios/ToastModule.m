//
//  ToastModule.m
//  rngank
//
//  Created by wehotel on 2020/5/15.
//

#import "ToastModule.h"
// 导出模块，不添加参数即默认为这个类名

@implementation ToastModule

RCT_EXPORT_MODULE();
// 导出方法，桥接到js的方法返回值类型必须是void
RCT_EXPORT_METHOD(showToast){
  NSLog(@"%@ ===> showToast",@"212313123");
}

@end
