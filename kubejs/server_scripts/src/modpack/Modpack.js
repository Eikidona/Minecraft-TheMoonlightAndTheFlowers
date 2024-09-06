// priority: 10000

/**
 * Modpack主类 用对象字面量代替了 反正也不用多个实例
 */
const Modpack = {
    namespace: 'modpack',
    registries: new $ModpackRegistries(),
    /**
     * 新建注册表
     * @param {String} pId - 命名空间
     * @template T
     * @returns {$ModpackRegistry<T>}
     */
    createRegistry: function (pId) {
        return this.registries.makeRegistry(pId);
    }
}