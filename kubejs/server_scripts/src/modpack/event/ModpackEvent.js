/**
 * @classdesc 注册表类型枚举 可写可不写
 * @typedef {'trader'} ModpackRegistryType
 */
const ModpackEvent = {
    bus: new $ModpackEventBus(),
    Trader: {
        /**
         * 注册Trader
         * @param {ResourceLocation_|String} pId
         * @param {function (($Trader)): $Trader} pSupplier
         */
        register: function (pId, pSupplier) {
            ServerEvents.highPriorityData(event => {
                const TraderInstance = pSupplier(new $Trader());
                $Trader.register(pId, TraderInstance);
            });
            console.log('注册完毕!');
        }
    },
    /**
     * @overload
     * @param {'another'} pType
     * @param {function ((any)): any} pHandler
     */

    /**
     * @overload
     * @param {'trader'} pType 
     * @param {function (($Trader)): $Trader} pHandler
     */

    /**
     * 注册函数
     * @method
     * @param {ModpackRegistryType} pType - 注册表类型
     * @param {function ((T)): void} pCallback - 回调函数
     */
    register: function (pType, pCallback) {
        /**
         * 尝试去总注册表寻找注册表实例
         */
        try {
            /**
             * @template T
             * @type {Optional<$ModpackRegistry<T>} - 可选的注册表
             */
            const optionalRegistry = Modpack.registries.get(pType);

        } catch (error) {
            throwError(error);
        }
    }
}

/**
 * 要想支持ModpackEvent 需要使register方法可以访问到其注册表 registry实现 需要一个总注册表 从总注册表中得到特定类的注册表 handler的实现 回调传入一个handler对象 设置各个kjs事件发生时要调用的函数
 */

/**
 * 总注册表: 注册表id: 子注册表
 * 子注册表: 注册表id: Handler
 * Handler: {Instance, KJSEventMethod...}
 * 事件总线: 废弃 维护一个HandlerArray即可
 * KJSEvent => Handler['KJSEventName'](KJSEvent) // 坏处是这里是硬编码的 handler的行为是预定义的
 * 相当于并不直接监听事件 而是Handler自己判断在每个事件中需要做什么 发生每个事件时事件总线都会尝试调用Handler同名函数
 * 
 * ##先实现这个##
 * 
 * 总注册表: 注册表id: 子注册表
 * 子注册表: 注册表id: Instance
 * 事件总线: 事件构造函数名: 事件id
 * 
 * 注册事件 => 事件Id: 事件Handler
 * 发布事件 => 事件Id: 事件实例
 * 监听事件 => 事件Id: 回调(事件Handler)
 * 
 * 注册事件监听器: 事件发生 => 获取事件构造函数名 => 获取事件id => 调用对应回调(pEvent) 
 * // 坏处是这里需要Event类 实现较为复杂 涉及构造函数名强制项
 */ 