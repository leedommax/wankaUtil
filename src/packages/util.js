// 判断当前是否是安卓手机
/**
 * is_android.
 * @param {String}
 * @returns {Boolean}
 */
export const is_android = (ua) => {
  ua = navigator.userAgent.toLocaleLowerCase() || ua
  if (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) {
    return true
  } else {
    return false
  }
}