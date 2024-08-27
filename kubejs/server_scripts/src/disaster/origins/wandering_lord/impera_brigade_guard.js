// 侍卫保护玩家免于死亡
OriginWarpper.registerPower(
    // powerId
    'disaster:wandering_lord/impera_brigade_guard',
    // 触发事件
    EntityEvents.death,
    // 逻辑
    (event) => {
        const { entity: player, entity: { block }, source, source: { actual }, level, server } = event;
        if (actual == null) return;
        // 选取范围内的实体
        const entityArray = Utils.getEntitiesWithinRange(
            level, // 维度
            block, // 原点
            16, // 半径
            (entity) => { // 选取实体条件
                return entity.entityType.tags.anyMatch(t => t.location() === 'recruits:recruit') && (
                    entity.nbt.getIntArray('OwnerUUID').length > 0 ? $UuidUtil.uuidFromIntArray(entity.nbt.getIntArray('OwnerUUID')).equals(player.getUuid()) : false
                );
            });
        if (entityArray.length === 0) return;
        // 按距离排序 
        const sortEntities = Utils.entitySortByDistance(block, entityArray);
        /**@type {Internal.LivingEntity} - 最近的实体 */
        const nearestEntity = sortEntities.nearest;
        /**@type {number} - 伤害量 */
        const damageAmount = 2.0;
        nearestEntity.actuallyHurt(source, damageAmount);
        // 取消事件
        if (nearestEntity.isDeadOrDying()) {
            player.setStatusMessage('你的近卫在保护你时身亡');
        } else {
            player.setStatusMessage('你的近卫为你挡下一个致命伤害');
        };
        const health = 10.0;
        player.setHealth(health);
        event.cancel();
    });