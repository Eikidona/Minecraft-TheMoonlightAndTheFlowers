/**
 * @author
 * @class
 * @classdesc - 模拟Forge的延迟构造器
 * @template T
 */
function $DeferredRegister() {
    /**
     * @type {String} - 命名空间
     */
    this.namespace;
    /**
     * @type {$ModpackRegistry<T>} - 注册表
     */
    this.registry;
    /**
     * @type {Array<{typeId:String, supplier: T}>} - 数组 包含简单对象 typeId与对象
     */
    this.suppliers = [];
}
/**
 * @method - 延迟注册
 * @param {String} pId
 * @param {function(): T} pSupplier
 */
$DeferredRegister.prototype.register = function (pId, pSupplier) {
    const typeId = `${this.namespace}:${pId}`;
    this.suppliers.push({ typeId: typeId, supplier: pSupplier });
}
/**
 * 事件 用于真正的注册
 */
$DeferredRegister.prototype.onEvent = function () {
    console.info('延迟注册器开始运行');
    ServerEvents.highPriorityData(event => {
        this.suppliers.forEach(supplier => {
            this.registry.register(supplier.typeId, supplier.supplier);
        });
    })
}
/**
 * @method - 新建注册表
 * @static
 * @param {String} pTypeId 
 * @returns {$ModpackRegistry<T>}
 */
$DeferredRegister.makeRegistry = function (pTypeId) {
    return Modpack.registries.makeRegistry(pTypeId);
}
/**
 * @static
 * @method - 创建延迟构造器
 * @param {$ModpackRegistry<T>} pRegistry
 * @param {String} pNamespace
 * @returns {$DeferredRegister<T>}
 */
$DeferredRegister.create = function (pRegistry, pNamespace) {
    const deferredRegister = new $DeferredRegister();
    deferredRegister.registry = pRegistry;
    deferredRegister.namespace = pNamespace;
    return deferredRegister;
}