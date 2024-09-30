// /**
//  * 兼容沉浸式风化与沉浸农艺的种植
//  * @author Eikidona
//  * @description 需要mixin才行
//  */
// ServerEvents.tags('minecraft:block', event => {
//     const BLOCK_TAG = 'farm_and_charm:farmland'
//     /**@type {Special.Block[]} */
//     const FARMLANDS = [
//         'immersive_weathering:silty_farmland'
//     ]
//     for (const FARMLAND of FARMLANDS) {
//         event.add(BLOCK_TAG, FARMLAND)
//     }
// })

// const $TomatoCropBlock = Java.loadClass('net.satisfy.farm_and_charm.block.crops.TomatoCropBlock');
// const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks');

// BlockEvents.rightClicked(event => {
//     const { hand, server, level: serverLevel, player, block, block: { blockState } } = event;

//     player.tell(`是耕地吗：${blockState.is($Blocks.FARMLAND)}`)
// })

// LootJS.modifiers((event) => {
//     event
//         .addEntityLootModifier("minecraft:creeper")
//         .and((and) => {
//             and.biome("minecraft:jungle").distanceToKiller(Interval.min(25));
//         })
//         .matchDamageSource((sourcePredicate) => {
//             sourcePredicate.and(sourcePredicate.is('xxx'))
//         })
//         .addLoot("minecraft:diamond");
// });

