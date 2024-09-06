/**
 * @class
 * @classdesc $Trader的构造类
 */
function $TraderBuilder() { 
    this.instance = new $Trader();
};

/**
 * @method - 获取构造中的实例
 * @returns {$Trader}
 */
$TraderBuilder.prototype.getInstance = function () {
    return this.instance;
};

/**
 * @method - 设置条件
 * @param {Internal.Predicate<Internal.Villager>} pPredicate
 * @returns {$TraderBuilder}
 */
$TraderBuilder.prototype.setPredicate = function (pPredicate) {
    this.instance.predicate = pPredicate;
    return this;
};

/**
 * @method - 设置实体自定义显示名称
 * @returns {$TraderBuilder}
 */
$TraderBuilder.prototype.setCustomName = function (pCustomName) {
    this.instance.customName = pCustomName;
    return this;
};

/**
 * @method - 创建交易列表
 * @returns {$TraderListBuilder}
 */
$TraderBuilder.prototype.createTradeList = function () {
    const TradeList = new $TradeList();
    this.instance.tradeList = TradeList;
    return TradeList;
};