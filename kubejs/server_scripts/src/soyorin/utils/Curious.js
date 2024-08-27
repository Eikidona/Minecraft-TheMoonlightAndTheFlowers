// priority: 1000

const CuriosUtil = {
    /**
     * 获取饰品槽位
     * @param {Internal.ServerPlayer} player 
     * @param {Internal.Item} item 
     * @returns {integer}
     */
    getSlot: function (player, item) {
        return $CuriosApi.getCuriosInventory(player).resolve().get().getEquippedCurios().find(item);
    },

    /**
     * 检查饰品是否存在
     * @param {Internal.ServerPlayer} player 
     * @param {Internal.Item} item 
     * @returns {boolean}
     */
    hasCurios: function (player, item) {
        return this.getSlot(player, item) !== -1;
    },

    /**
     * 获取所有装备的饰品
     * @param {Internal.ServerPlayer} player 
     * @returns {Internal.List}
     */
    getAllCurios: function (player) {
        return $CuriosApi.getCuriosInventory(player).resolve().get().getEquippedCurios().getAllItems();
    },

    /**
     * 获取指定饰品的槽位
     * @param {Internal.ServerPlayer} player 玩家
     * @param {Internal.Item} item 物品
     * @param {String} curiosType 饰品槽标识符
     * @returns {integer} 槽位序号
     */
    getCuriosSlot: function (player, item, curiosType) {
        return $CuriosApi.getCuriosInventory(player).resolve().get().getCurios().get(curiosType).getStacks().find(item);
    },

    /**
     * 获取最近的空槽位
     * @param {Internal.ServerPlayer} player 玩家
     * @param {String} curiosType 饰品槽标识符
     * @returns {integer} 槽位序号
     */
    getEmptySlot: function (player, curiosType) {
        return this.getCuriosSlot(player, Item.of('minecraft:air').getItem(), curiosType);
    },

    /**
     * 获取槽位总数
     * @param {Internal.ServerPlayer} player 玩家
     * @param {String} curiosType 饰品槽名称
     * @returns {integer} 槽位数量
     */
    getTotalSlots: function (player, curiosType) {
        return $CuriosApi.getCuriosInventory(player).resolve().get().getCurios().get(curiosType).getStacks().getSlots();
    },

    /**
     * 获取已装备饰品数量
     * @param {Internal.ServerPlayer} player 
     * @param {String} curiosType 饰品槽名称
     * @returns {integer}
     */
    getEquippedCount: function (player, curiosType) {
        return $CuriosApi.getCuriosInventory(player).resolve().get().getCurios().get(curiosType).getStacks().count();
    },

    /**
     * 获取指定槽位的物品堆栈
     * @param {Internal.ServerPlayer} player 
     * @param {String} curiosType 饰品槽名称
     * @param {integer} slotIndex 槽位索引
     * @returns {Internal.ItemStack}
     */
    getSlotItem: function (player, curiosType, slotIndex) {
        return $CuriosApi.getCuriosInventory(player).resolve().get().getCurios().get(curiosType).getStacks().getStackInSlot(slotIndex);
    },

    /**
     * 获取指定槽位的所有装备饰品
     * @param {Internal.ServerPlayer} player 
     * @param {String} curiosType 饰品槽名称
     * @returns {Internal.List}
     */
    getAllCuriosFromType: function (player, curiosType) {
        return $CuriosApi.getCuriosInventory(player).resolve().get().getCurios().get(curiosType).getStacks().getAllItems();
    },

    /**
     * 设置指定槽位的物品堆栈
     * @param {Internal.ServerPlayer} player 
     * @param {String} curiosType 饰品槽名称
     * @param {number} slotIndex 槽位索引
     * @param {Internal.ItemStack} itemStack 
     */
    setCurios: function (player, curiosType, slotIndex, itemStack) {
        $CuriosApi.getCuriosInventory(player).resolve().get().setEquippedCurio(curiosType, slotIndex, itemStack);
    }
};