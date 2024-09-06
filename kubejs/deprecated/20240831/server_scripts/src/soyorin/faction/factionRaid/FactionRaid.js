// priority: 1000

/**
 * 阵营袭击类
 */
const FactionRaid = {
    levelRaids: {
        
    }
}

/**
 * 阵营袭击类
 * @param {Set<$Faction>} p$FactionType - 参与袭击中的阵营
 * @param {BlockPos_} pCenterPos - 袭击中心点
 * @param {Set<Internal.Entity>} pEntities - 参与袭击中的实体
 */
function $FactionRaid(p$FactionType, pCenterPos, pEntities) {
    /**@type {Set<$Faction>} - 参与袭击的阵营*/
    this.setFactionType = p$FactionType;
    /**@type {BlockPos_} - 袭击中心位置*/
    this.centerPos = pCenterPos;
    /**@type {Set<Internal.Entity>} - 参与袭击中的实体*/
    this.entities = pEntities;
}