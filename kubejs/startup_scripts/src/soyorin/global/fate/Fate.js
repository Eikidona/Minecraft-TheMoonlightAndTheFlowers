/**
 * @typedef {$Fate} $Fate
 */

/**
 * 命运
 * @param {Internal.ServerPlayer} player - 玩家
 */
global.$Fate = function (player) {
    this.player = player; // 玩家
    this.luck = player.getAttributeValue('minecraft:generic.luck'); // 幸运值
}