(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.wankaUtil = {}));
}(this, (function (exports) { 'use strict';

  // 判断当前是否是安卓手机
  const is_android = ua => {
    ua = navigator.userAgent.toLocaleLowerCase() || ua;

    if (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) {
      return true;
    } else {
      return false;
    }
  };

  exports.is_android = is_android;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
