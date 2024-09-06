/**
 * @class 事件类
 * @classdesc 
 */
function $ModpackEvent() {
    this.cancelable = false;
    this.cancelled = false;
}
/**
 * 取消事件
 * @method
 */
$ModpackEvent.prototype.cancel = function () {
    if (this.cancelable) {
        this.cancelled = false;
    }
}