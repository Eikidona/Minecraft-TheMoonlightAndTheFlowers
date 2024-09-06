// priority: 1000

// 常用的实用工具
const Utils_ = {
    /**
     * 在指定的半径内获取符合条件的实体
     * @param {Internal.ServerLevel} pLevel 维度
     * @param {{x:number,y:number,z:number}|BlockPos|Internal.BlockContainerJS} pBlockPos 原点
     * @param {number} pRadius 半径 单位为块
     * @param {Internal.Predicate<Internal.Entity>} pPredicate$Entity 条件
     * @returns {Array<Internal.Entity>} 实体数组
     */
    getEntitiesWithinRange: function (pLevel, pBlockPos, pRadius, pPredicate$Entity) {
        const blockPos0 = new BlockPos(pBlockPos.x - pRadius, pBlockPos.y - pRadius, pBlockPos.z - pRadius);
        const blockPos1 = new BlockPos(pBlockPos.x + 8, pBlockPos.y + 8, pBlockPos.z + 8);
        const aABB = AABB.ofBlocks(blockPos0, blockPos1);
        return pLevel.getEntitiesWithin(aABB).filter(pPredicate$Entity).toArray();
    },
    /**
     * 将实体数组按距离从近到远排序
     * @param {{x:number,y:number,z:number}|BlockPos|Internal.BlockContainerJS} pBlockpos 原点
     * @param {Array<Internal.Entity>} pEntityArray 实体数组
     * @returns {{nearest:Internal.Entity, farthest:Internal.Entity}} 最远最近实体
     */
    entitySortByDistance: function (pBlockpos, pEntityArray) {
        if (!(pEntityArray instanceof Array)) throw new Error('被排序的数据类型不是Array!');

        pEntityArray.sort((entity0, entity1) => {
            const dist0 = entity0.blockPosition().distToCenterSqr(pBlockpos.x, pBlockpos.y, pBlockpos.z);
            const dist1 = entity1.blockPosition().distToCenterSqr(pBlockpos.x, pBlockpos.y, pBlockpos.z);
            // 负数a排到b前 正数b排到a前 小减大 按小排 大减小 按大排
            return dist0 - dist1;  // 如果要从近到远排序
        });
        return { nearest: pEntityArray[0], farthest: pEntityArray[pEntityArray.length - 1] };
    },
    /**
     * 装饰文本
     * @param {string} pRaw - 原始文本
     * @param {'common'|'uncommon'|'rare'|'epic'|'ancient'|'mythic'} pRarity - 稀有度
     * @returns {Internal.MutableComponent_}
     */
    decorateText: function (pRaw, pRarity) {
        return MessageFactory.decorateRawText(pRaw, pRarity);
    }
}