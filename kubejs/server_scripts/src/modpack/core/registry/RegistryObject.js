// priority: 10000

/**
 * @class
 * @template T
 */
function $ModpackRegistryObject(pId, pObject) {
    /**@type {ResourceLocation_} */
    this.id = pId;
    /** @type {T} */
    this.object = pObject;
}

/**
 * <静态> 使...成为注册项
 * @static
 * @template T
 * @param {T} pObject 
 * @returns {$ModpackRegistryObject<T>}
 */
$ModpackRegistryObject.of = function (pId, pObject) {
    const registryObject = new $ModpackRegistryObject(pId, pObject);
    return registryObject;
}

/**
 * 返回内部注册项
 * @template T
 * @returns {T}
 */
$ModpackRegistryObject.prototype.get = function () {
    return this.object;
}

/**
 * 返回注册名
 * @returns {ResourceLocation_}
 */
$ModpackRegistryObject.prototype.getId = function () {
    return this.id;
}