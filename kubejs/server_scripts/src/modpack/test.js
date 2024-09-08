/**
 * 一个草方块ItemStack
 * 你可以声明一个变量或常量来接收它 let grass_block = Item.of('minecraft:grass_block');
 * 也可以将它作为其他函数的参数
 */


PlayerEvents.chat(event => {
    const { message, level, server, player } = event;
    if (message !== 'test') return;
    // 此处返回了Internal.FireworkRocketEntity类型，还未研究明白。
    let entity = Item.fireworks('{Fireworks:{Flight:1b}}').createFireworkRocket(level, player.block.pos.x, player.block.pos.y, player.block.pos.z)
    // 尝试生成 但是生成是失败的，未能理解。
    entity.spawn();
    player.tell(`是否加入世界: ${entity.isAddedToWorld()}`);
    // 重复给予会报错
    player.give(entity.getItem());
});

ServerEvents.recipes(event => {
    event.recipes.minecraft.smithing_transform(
        // 输出铁锭
        'minecraft:iron_ingot',
        // 输入生铁
        'minecraft:raw_iron',
        // 添加木炭
        'minecraft:charcoal'
    ).template('minecraft:iron_ingot')
})