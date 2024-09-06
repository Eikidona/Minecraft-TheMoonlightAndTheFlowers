/**
 * 一个草方块ItemStack
 * 你可以声明一个变量或常量来接收它 let grass_block = Item.of('minecraft:grass_block');
 * 也可以将它作为其他函数的参数
 */


PlayerEvents.chat(event => {
    const { message, level, server, player } = event;
    if (message !== 'test') return;
    let item = Item.of('minecraft:iron_pickaxe', '{Damage:100}')
    player.give(item);
});
