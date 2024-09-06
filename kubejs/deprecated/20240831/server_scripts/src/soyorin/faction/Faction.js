// priority: 1000

/**
 * @typedef {'lightPurple' | 'blue' | 'white' | 'darkPurple' | 
*            'yellow' | 'gray' | 'darkBlue' | 'darkRed' | 
*            'gold' | 'red' | 'darkGreen' | 'green' | 
*            'darkAqua' | 'aqua' | 'black' | 'darkGray'} enumColor - 颜色枚举值
*/


/**
 * @typedef {{
 * 'replace':boolean,
 * 'id': ResourceLocation_,
 * 'bossbarDisplay':{ 
 * 'name':string,
 * 'color':enumColor,
 * 'italic':boolean,
 * 'bold':boolean,
 * 'underline':boolean,
 * 'obfuscated':boolean,
 * 'strikethroug':boolean
 * },
 * 'entities':Array<Special.EntityType>,
 * 'relations':{
 * 'friendly':Array<Special.EntityType>,
 * 'enemy':Array<Special.EntityType>
 * }
 * }} $FactionLiteral - $Faction字面量表示
 */

const Faction = {
    /**
     * 注册表
     */
    registry: {},
    /**
     * 注册方法
     * @param {ResourceLocation_} pId - 阵营标识符
     * @param {$FactionLiteral} p$FactionLiteral - 阵营字面量
     * @throws {Error} - 序列化与注册阶段的错误
     }
     */
    register: function (pId, p$FactionLiteral) {
        const { id, bossbarDisplay, entities, relations, replace } = p$FactionLiteral;
        const { name, color, bold, italic, obfuscated, strikethroug, underline } = p$FactionLiteral.bossbarDisplay;
        try {
            if (!id) throw new Error('Faction的id属性值不能为空');
            if (!bossbarDisplay) throw new Error('Faction的bossbarDisplay属性值不能为空');
            if (!entities) throw new Error('Faction的entities属性值不能为空');


        }
        catch (error) {
            console.error(error);
        }

    },
    /**
     * 序列反序列
     */
    Codec: {
        /**
         * 从阵营实例反序列化为阵营字面量
         * @param {$Faction} $Faction - 实例
         * @returns {$FactionLiteral} - 字面量
         */
        write: function (p$Faction) {

        },
        /**
         * 从阵营字面量序列化为阵营实例
         * @param {$FactionLiteral} p$FactionLiteral - 字面量
         * @returns {$Faction} - 实例
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
 * @param {Component_} pBossbarDisplay - BOSS栏显示组件
 * @param {*} pRelations 
 */
function $Faction(pId, pEntities, pBossbarDisplay, pRelations) {
    /**@type {ResourceLocation_} - 阵营标识符*/
    this.id = pId;
    /**@type {Array<Special.EntityType} - 阵营所属实体*/
    this.entities = pEntities;
    /**@type {Component_} - BOSS栏显示组件*/
    this.bossbarDisplay = pBossbarDisplay;

    this.relations = pRelations
}