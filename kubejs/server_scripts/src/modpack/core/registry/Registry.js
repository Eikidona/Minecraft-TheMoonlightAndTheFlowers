// priority: 10000

/**
 * 注册表类
 * @template T
 * @class
 */
function $ModpackRegistry() {
    /**@type {Map<String, T>} - 注册表 键为基本类型*/
    this.registry = new Map();
}
/**
 * 注册注册项
 * @method
 * @param {ResourceLocation_} pTypeId - 注册名
 * @param {T} pObject - 注册对象
 * @returns {$ModpackRegistryObject<T>} - 注册表对象
 */
$ModpackRegistry.prototype.register = function (pTypeId, pObject) {
    const RegisterId = () => {
        try {
            if (typeof pTypeId === 'string') {
                if (!pTypeId.match(/:/)) { return pTypeId }
                else { return `${Modpack.namespace}:${pTypeId}` };
            } else if (pTypeId instanceof ResourceLocation) {
                console.log(`ResourceLocation字符串转换结果为: ${pTypeId.toString()}`);
                return pTypeId.toString();
            } else {
                throw new Error('参数类型错误: pId参数类型必须为ResourceLocation或String!');
            };
        } catch (error) {
            console.error(`发生错误: ${error.message} 错误堆栈: ${error.stack}`);
        }
    }
    const registerId = RegisterId();
    try {
        if (this.registry.has(registerId)) throw new Error(`不可重复注册相同的Id: ${registerId}`);
        this.registry.set(registerId, pObject);
        return new $ModpackRegistryObject()
    }
    catch (error) {
        console.error(`发生错误: ${error.message} 错误堆栈: ${error.stack}`);
    }
}
/**
 * 从注册表获取对象
 * @overload
 * @param {String} pId 
 * @returns {Optional<T>}
 */

/**
 * 从注册表获取对象
 * @param {ResourceLocation_} pId 
 * @returns {Optional<T>}
 */
$ModpackRegistry.prototype.get = function (pId) {
    try {
        const type = typeof pId;
        switch (type) {
            case "string":
                return Optional.ofNullable(this.registry.get(pId))
            case "object":
                if (pId instanceof ResourceLocation) return Optional.ofNullable(this.registry.get(pId.toString()));
            default: throw new Error('pId预期得到一个String或ResourceLocation');
        }
    } catch (error) {
        console.error(`发生错误: ${error.message} 错误堆栈: ${error.stack}`);
    }
}