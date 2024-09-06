// priority: 10000

/**
 * 总注册表
 * @class
 * @classdesc - 用于保存总注册表 本身是注册表的实例
 * @template T
 */
function $ModpackRegistries() {
    /**
     * 总注册表
     * @template T
     * @type {$ModpackRegistry<$ModpackRegistry<$ModpackEventHandler<T>>>} - Regid => Reg => handler
     */
    this.registries = new $ModpackRegistry();
}
/**
 * 新建注册表
 * @param {ResourceLocation_|String} pTypeId
 * @template T
 * @returns {$ModpackRegistry<T>}
 */
$ModpackRegistries.prototype.makeRegistry = function (pTypeId) {
    /**
     * @type {$ModpackRegistry<T>}
     */
    const registry = new $ModpackRegistry();
    this.registries.register(pTypeId, registry);
    return registry;
}
/**
 * 获取注册表
 * @param {ResourceLocation_|String} pId
 * @template T
 * @returns {Optional<$ModpackRegistry<T>>}
 */
$ModpackRegistries.prototype.get = function (pId) {
    try {
        const getId = () => {
            if (pId instanceof ResourceLocation) { return pId.toString() }
            else if (typeof pId === 'string') { return pId }
            else { throw new Error('pId的类型预期ResourceLocation或String!') };
        }
        const id = getId();
        /**
         * @type {Optional<$ModpackRegistry<T>>} - 可选的注册表
         */
        const optionalRegistry = this.registries.get(id);
        if (optionalRegistry.ifPresent()) {
            return optionalRegistry.get();
        } else {
            throw new Error(`Id为${id}的注册表不存在!`);
        }
    } catch (error) {
        throwError(error);
    }
}