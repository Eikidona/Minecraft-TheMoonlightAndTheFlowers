
/**
 * 事件触发器 用于在事件中触发事件的回调
 * @class
 * @classdesc 事件触发器 
 * @description 用于在ModpackEvent.register()中创建特定类型的实例
 * @template {Function} T
 */
function $ModpackEventHandler() {
    /**
     * handler持有的对象实例
     * @template {$ModpackEvent} T
     * @type {T} 
     */
    this.event;
    /**
     * 注册事件触发器的回调
     * @template {$ModpackEvent} T - 事件
     * @type {function ((T)): void} - 回调
     */
    this.register = () => { };
}

/**
 * 从构造函数创建Handler实例 要求这个类必须实现Registry接口 实例化方式为builder模式(实现HandlerAccess接口?)
 * @template {Function} T 
 * @param {T} pConstructor 
 * @returns {$ModpackEventHandler<T>}
 */
$ModpackEventHandler.of = function (pConstructor) {
    try {
        if (!(pConstructor instanceof Function)) throw new Error('参数类型错误，pConstructor必须为构造函数。');
        const ModpackEventHandlerInstance = new $ModpackEventHandler();
        ModpackEventHandlerInstance.event = pConstructor;
        return ModpackEventHandlerInstance;
    } catch (error) {
        console.error(`发生错误: ${error.message} 位置: ${error.stack}`);
    }
}
/**
 * 创建特定类型的实例 要求这个类必须实现Registry接口 实例化方式为builder模式
 * @param {string} pId 
 * @template {Function} T
 * @returns {T}
 */
$ModpackEventHandler.prototype.create = function (pId) {
    return new this.event();
}