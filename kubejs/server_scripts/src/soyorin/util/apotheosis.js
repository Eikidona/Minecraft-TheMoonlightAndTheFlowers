// priority: 1000

const ApotheosisUtil = {
    /**
     * 为物品设置1个宝石槽
     * @param {$ItemStack|Special.Item} itemStack 
     * @param {integer} sockets 
     * @returns 
     */
    setSockets: function (itemStack, sockets) {
        if (typeof itemStack === 'string') {
            itemStack = Item.of(itemStack);
        }
        const SOCKETS = 'sockets';
        itemStack.getOrCreateTagElement($AffixHelper.AFFIX_DATA).putInt(SOCKETS, sockets);
        return itemStack;
    }
}