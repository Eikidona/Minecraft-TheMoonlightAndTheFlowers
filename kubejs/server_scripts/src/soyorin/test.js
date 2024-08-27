//addGoalSelectors Server Script
const ItemStack = Item.of('minecraft:potion', '{Potion:"minecraft:strong_poison"}');
EntityJSEvents.addGoalSelectors('minecraft:zombie', event => {
    /**@type {Special.SoundEvent} - 啜饮*/
    const Sound = 'entity.generic.drink';
    // 剧毒药水II
    event.useItem(1, ItemStack, Sound, canUse)
    function canUse() {
        if (event.getEntity().getMainHandItem().equals(ItemStack, true) || event.getEntity().getOffHandItem().equals(ItemStack, true)) {
            return true;
        }
        return false;
    }
})

ItemEvents.entityInteracted(event => {
    const { target, entity, hand, item } = event;
    if (target.type === 'minecraft:zombie' && hand === 'main_hand') {
        const b = event.getEntity().getMainHandItem().equals(ItemStack, true) || event.getEntity().getOffHandItem().equals(ItemStack, true);
        entity.tell(`测试结果: ${b}`);
    }
})


// 实验尸壳
EntityJSEvents.addGoals("minecraft:husk", event => {
    let Cow = Java.loadClass('net.minecraft.world.entity.animal.Cow')
    event.hurtByTarget(1, [Cow], true, [Cow])
    event.nearestAttackableTarget(2, Cow, 5, false, false, entity => {
        return entity.age < 500
    })
    // const $BreedGoal = Java.loadClass('net.minecraft.world.entity.ai.goal.BreedGoal')
    // /**
    //  *
    //  * @param arbitraryTargetGoal 允许向实体添加任意目标
    //  * 用户有责任确保目标与实体兼容
    //  * 例如，$BreedGoal将只适用于agablemob实例化的实体。
    //  */
    // /**
    //  * @param arbitraryTargetGoal Enables the addition of arbitrary goals to an entity
    //  * It is the responsibility of the user to ensure the goal is compatible with the entity
    //  * the $BreedGoal for example will only work with AgeableMob instanced entities.
    //  */
    // event.arbitraryTargetGoal(2, entity => new $BreedGoal(entity, 1))
    // let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
    // // event.removeAllGoals() //Removes all targetSelector goals
    // event.removeGoal($PanicGoal)
    // event.removeGoals(context => {
    //     const { goal, entity } = context
    //     return goal.getClass() == $PanicGoal
    // })
})
