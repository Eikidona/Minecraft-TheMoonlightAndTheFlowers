// priority: 1000

/**
 * 均衡饮食
 */
const DietUtil = {
    /**
     * 返回玩家身上的食品组值
     * @param {$ServerPlayer_} player 
     * @param {String} groups 
     * @returns 
     */
    getValue: function (player, groups) {
        return new $PlayerDietTracker(player).getValue(groups);
    },
    /**
     * 设置玩家身上食品组的值
     * @param {$ServerPlayer_} player 
     * @param {String} groups 
     * @param {float} float 
     */
    setValue: function (player, groups, float) {
        new $PlayerDietTracker(player).setValue(groups, float);
    }
}