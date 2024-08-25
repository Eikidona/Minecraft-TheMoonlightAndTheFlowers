//addGoalSelectors Server Script
EntityJSEvents.addGoalSelectors('minecraft:zombie', e => {
    let Player = Java.loadClass('net.minecraft.world.entity.player.Player')
    //You have the ability to add pre built goals like so to your entity. (some of many)
    //你可以在你的实体中添加预先构建的目标。(其中一些)
    e.panic(1, 0.5)
    e.floatSwim(1)
    e.meleeAttack(4, 1, true)
    e.leapAtTarget(3, 0.4)
    e.waterAvoidingRandomStroll(5, 0.4, 0.8)
    e.lookAtEntity(6, Player, 8, 0.8, false)
    e.randomLookAround(7)
    //You may also make customized goals with the customGoal builder like so
    //你也可以像这样使用customGoal构建器创建自定义目标
    e.customGoal(
        //自定义目标的名称
        'follow_target', // Name of the custom goal
        //定制目标的优先级
        1,// Priority of the custom goal
        /** @param {Internal.PathfinderMob} mob **/mob => {
            //如果实体可以使用这个目标
            // If the entity can use this goal
            return true
        },
        /** @param {Internal.PathfinderMob} mob **/mob => {
            //如果实体可以继续使用此目标
            // If the entity can continue using this goal
            return true
        },
        //目标是否可中断
        true, // Is goal interruptible
        /** @param {Internal.PathfinderMob} mob **/mob => { // Start function
            //代码在目标开始处运行
            // Code ran at the start of the goal
        },
        /** @param {Internal.PathfinderMob} mob **/mob => { // Stop function
            //停止函数
            mob.getNavigation().stop();
        },
        //每次更新一次?
        true, // Requires an update every tick?
        /** @param {Internal.PathfinderMob} mob **/mob => {
            //标记函数
            // Tick function
            let mobAABB = mob.boundingBox.inflate(5)
            mob.level.getEntitiesWithin(mobAABB).forEach(entity => {
                if (entity == null) return
                if (entity.player && entity.distanceToEntity(mob) < 20) {
                    mob.getNavigation().moveTo(entity.block.x, entity.y, entity.z, 1.0);
                }
            })
        }
    )
    let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
    // e.r removeallgoals() //移除所有的goalSelector目标
    // e.removeAllGoals() //Removes all goalSelector Goals
    e.removeGoal($PanicGoal)
    e.removeGoals(context => {
        const { goal, entity } = context
        console.log(e.entity.server.tickCount)
        return goal.getClass() == $PanicGoal
    })
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
