// ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$CropGrowEvent', event => {
//     global.BlockEvent$CropGrowEvent(event);
// })
// /**
//  * 作物生长事件
//  * @param {Internal.BlockEvent$CropGrowEvent} event 
//  */
// global.BlockEvent$CropGrowEvent = (event) => {
//     console.log(`方块id：${event.state.block.getIdLocation().toString()} 方块属性：${event.state}`)
// }

// StartupEvents.registry('minecraft:item', event => {
//     event.create('kubejs:demo_item', 'basic')
// })