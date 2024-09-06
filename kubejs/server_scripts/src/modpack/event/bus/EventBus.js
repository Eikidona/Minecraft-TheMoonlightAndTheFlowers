/**
 * @template {$ModpackEvent & Function} T
 * 
 * @typedef {T['prototype']['constructor']['name'] | String} $ModpackEventConstructorName
 */

/**
 * @class 事件总线
 * @classdesc 
 */
function $ModpackEventBus() {
    /**
     * @template {$ModpackEvent} T - 事件
     * @type {$ModpackRegistry<$ModpackEventConstructorName>} - 事件注册表
     */
    this.events = new $ModpackRegistry();
    /**
     * @template {$ModpackEvent} T - 事件
     * @type {$ModpackRegistry<Array<$ModpackEventHandler<T>>} - 事件回调注册表
     */
    this.listeners = new $ModpackRegistry();
}

/**
 * 注册事件 将事件类与事件id注册 将其在注册表中存储为constructor.name : eventId的形式
 * @method
 * @param {String} pId - 事件Id
 * @template {$ModpackEvent & Function} T
 * @param {T} pEvent - 注册的事件
 */
$ModpackEventBus.prototype.register = function (pId, pEvent) {
    try {
        if ((!(pEvent instanceof Function) && !(pEvent instanceof $ModpackEvent))) throw new Error('pEvent预期一个$ModpackEvent & Function类型');
        // 为指定的id注册对应事件=> id: constructor
        this.events.register(pId, pEvent.prototype.constructor.name);
    } catch (error) {
        console.error(`发生错误: ${error.message} 错误堆栈: ${error.stack}`);
    }
}

/**
 * 发布时是实例化一个新的事件实例传递给事件总线
 * 监听时通过事件id获取到Handler实例 这个handler实例是一个参数为事件实例的回调函数
 * 
 * 假设现在向listeners注册了-> id: Handler
 * 当post Event时 监听器获取事件id 根据id调用listener内的Handler回调
 * 
 * 注册事件确保id与Event的映射关系 注册事件的构造函数 根据其原型上构造函数属性名建立映射
 */

/**
 * 发布事件 - 事件被触发 从事件实例上获取构造函数属性 根据构造函数属性名获取事件id 根据对应id调用回调
 * @method
 * @template {$ModpackEvent} T
 * @param {T} pEvent - 事件实例
 */
$ModpackEventBus.prototype.post = function (pEvent) {
    try {
        /**
         * @description - 从pEvent实例获取原型constructor的name属性，据此获取事件id
         * @type {String}
         */
        const constructorName = pEvent.prototype.constructor.name;
        /**
         * @description - 可选的事件id
         * @type {Optional<$ModpackEventConstructorName>}
         */
        const optionalEventId = this.events.get(constructorName);
        if (optionalEventId.ifPresent()) {
            const eventId = optionalEventId.get();
            /**
             * @description - 可选的事件触发器数组
             * @template {$ModpackEvent} T
             * @type {Optional<$ModpackEventHandler<T>[]>}
            */
            const optionalEventHandlerListeners = this.listeners.get(eventId);
            if (optionalEventHandlerListeners.isPresent()) {
                // 执行Handler实例
                optionalEventHandlerListeners.get().forEach(eventHander => eventHander.register(pEvent));
            } else {
                console.warn(`${eventId}事件已注册，但无可用的监听器`);
            }
        } else {
            throw new Error('不是一个有效的事件实例');
        }

    } catch (error) {
        throwError(error);
    }
}

/**
 * 监听事件 - 注册事件监听器 从构造函数的prototype.constructor.name获取eventId
 * @method
 * @param {String} pId - 事件Id
 * @template {$ModpackEvent & Function} T
 * @param {T} pHandler - 事件回调
 */
$ModpackEventBus.prototype.addListener = function (pHandler) {
    try {
        if (!(pHandler instanceof Function) && !(pHandler instanceof $ModpackEvent)) throw new Error('pHandler预期一个$ModpackEvent & Function');
        /**
         * @description - 构造函数名
         * @type {String}
         */
        const constructorName = pHandler.prototype.constructor.name;
        /**
         * @description - 可选的事件触发器数组
         * @type {Optional<$ModpackEventHandler<$ModpackEvent>[]>}
         */
        const optionalEventHandlerListeners = this.listeners.get(constructorName);
        /**
         * 如果数组有效 push 否则新建数组push
         */
        if (optionalEventHandlerListeners.ifPresent()) {
            const eventHandlerListeners = optionalEventHandlerListeners.get();
            eventHandlerListeners.push(pHandler);
        } else {
            this.listeners.register(constructorName, [pHandler]);
        }
    } catch (error) {
        throwError(error);
    }
}