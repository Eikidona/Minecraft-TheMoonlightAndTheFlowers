// priority: 1000

/**
 * @classdesc 商人类 用于自定义条件下村民的特殊交易
 * @class
 */
function $Trader() {
    this.predicate = () => false;
    this.tradeList = new $TradeList();
    this.customName;
}
/**
 * 设置条件
 * @param {Internal.Predicate_<Internal.Villager>} pPredicate 
 * @returns {$Trader}
 */
$Trader.prototype.setPredicate = function (pPredicate) {
    this.predicate = pPredicate;
    return this;
}
/**
 * 设置实体自定义名称
 * @param {Internal.Component_}
 * @returns {$Trader}
 */
$Trader.prototype.setCustomName = function (pCustomeName) {
    this.customName = pCustomeName
    return this;
}
/**
 * 创建交易列表
 * @returns {TradeList}
 */
$Trader.prototype.createTradeList = function () {
    return this.tradeList;
}