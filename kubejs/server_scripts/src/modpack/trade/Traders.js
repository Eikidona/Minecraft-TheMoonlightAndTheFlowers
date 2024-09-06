// /**
//  * @type {$ModpackRegistry<$Trader>} - Trader注册表
//  */
// const TraderRegistry = $DeferredRegister.makeRegistry('modpack:trader');
// /**
//  * @type {$DeferredRegister<$Trader>}
//  */
// const Traders = $DeferredRegister.create(TraderRegistry, Modpack.namespace);

// Traders.register('test', () => new $Trader());

// Traders.onEvent();

/**
 * @class
 */
function $Traders() { };
/**
 * @type {$ModpackRegistry<$Trader>} - 注册表
 */
$Traders.registry = new $ModpackRegistry();
/**
 * @method
 * @param {ResourceLocation_ | String} pTypeId
 * @param {function(($Trader)): void} 
 */
$Traders.prototype.register = function (pTypeId, pSupplier) {
    pSupplier(new $TraderBuilder());
    $Traders.registry.register(pTypeId, Trader)
}
const Traders = new $Traders();