// 玩家有概率遇到免费侍卫
OriginWarpper.registerPower(
    'disaster:wandering_lord/loyal_servant',
    ItemEvents.entityInteracted,
    event => {
        const { entity, target, hand, level, server } = event;
        if (hand !== 'main_hand') return;
        const hasPower = OriginUtils.hasPower(entity);
        const inTag = target.entityType.tags.anyMatch(t => t.location() === 'recruits:recruit');
        const hasTag = target.tags.contains('disaster:wandering_lord/loyal_servant');
        if (!hasPower || !inTag || hasTag) return;

        const fate = Math.random() <= 0.5;

        if (fate) {
            target.nbt.merge({ Cost: 0 });
            target.tags.add('disaster:wandering_lord/loyal_servant');
            entity.setStatusMessage('你遇到了昔日的侍从，免去雇佣费用');
        } else {
            target.tags.add('disaster:wandering_lord/loyal_servant');
        }
    }
)