// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.AttackEntityEvent', event => {
    global['AttackEntityEvent'](event);
});
/**
 * 
 * @param {Internal.AttackEntityEvent_} event 
 */
global['AttackEntityEvent'] = (event) => {
    /**
     * @type {Internal.Player}
     */
    let player = event.getEntity();
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.getTarget();
    entity.lastDamageSource
    console.log(`玩家：${event.getEntity().type} 目标：${event.getTarget().type} 是否可取消：${event.cancelable}`);
    event.setCanceled(true);
}