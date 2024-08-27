// priority: 1000

/**
 * @typedef {'lightPurple', 'blue', 'white', 'darkPurple', 'yellow', 'gray', 'darkBlue', 'darkRed', 'gold', 'red', 'darkGreen', 'green', 'darkAqua', 'aqua', 'black', 'darkGray'} enumColor - 颜色枚举值
 */


/**
 * @typedef {{
 * 'replace':boolean,
 * 'faction': ResourceLocation_,
 * 'bossbarDisplay':{ 
 * 'name':string,
 * 'color':enumColor,
 * 'italic':boolean,
 * 'bold':boolean
 * },
 * 'entities':Array<Special.EntityType>
 * }} $FactionLiteral - $Faction字面量表示
 */

const Faction = {
    /**
     * 注册表
     */
    registry: {},
    register: function (pId,) {

    },
    /**
     * 序列反序列
     */
    Codec: {
        /**
         * 从阵营实例反序列化为阵营字面量
         * @param {$Faction} $Faction 
         */
        write: function ($Faction) {

        },
        /**
         * 从阵营字面量序列化为阵营实例
         * @param {$FactionLiteral} p$FactionLiteral 
         */
        read: function (p$FactionLiteral) {

        }
    },
    /**
     * 创造一场袭击
     * @param {ResourceLocation_} pFactionId - 阵营标识符
     */
    createRaid: function (pFactionId) {

    }
}

/**
 * 阵营类
 * @param {ResourceLocation_} pId - 阵营标识符
 * @param {Array<Special.EntityType} pEntities - 阵营所属实体
 */
function $Faction(pId, pEntities, pBossbarDisplay) {
    /**@type {ResourceLocation_} - 阵营标识符*/
    this.id = pId;
    /**@type {Array<Special.EntityType} - 阵营所属实体*/
    this.entities = pEntities;
    /**@type {Component_} - BOSS栏显示组件*/
    this.bossbarDisplay = pBossbarDisplay;
}

