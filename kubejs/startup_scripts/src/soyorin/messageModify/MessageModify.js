// priority: 1000

const MessageModify = {
    /**
     * 调试模式
     */
    debugMode: false,
    // 初始化 - 启动一个Forge事件
    init: function () {
        ForgeEvents.onEvent('net.minecraftforge.client.event.ClientChatReceivedEvent', event => {
            const .MessageModify.listenEvent(event);
    });
    },
/**
 * 监听事件 - 负责获取修改前后的Message并设置Message
 * @param {Internal.ClientChatReceivedEvent} event - 事件
 */
listenEvent: function (event) {
    if (this.debugMode) {
        // /**@type {Internal.TranslatableContents} - 消息内容属性*/
        // let content = event.message.contents;
        // /**@type {Array} - 消息内容参数数组 - 因为只有1个元素 因此[0]即为发送者*/
        // let args = event.message.contents.args;
        // let sender = Component.darkGreen(event.message.contents.args[0]);
        // let text = Component.white(Component.translatable(event.message.contents.key));
        // console.log(`消息sender: ${sender}`);
        // console.log(`消息content.key: ${content.key}`);
        // console.log(`消息args.length: ${args.length}`);
        // console.log(`消息args[0]: ${args[0]}`);
    }
    // if (event.isSystem()) return;
    const newMessage = const .MessageModify.modifyRawText(event); // 获取新消息
    event.setMessage(newMessage); // 设置消息
},
// 注册表
registry: { },
/**
* 注册消息类型
* @param {string} pType - 消息类型
* @param {Internal.Predicate_<Internal.ClientChatReceivedEvent>} pPredicate - 一个字符串满足何种条件为该类型
* @param {function(Internal.ClientChatReceivedEvent): Internal.MutableComponent_} pFunction  - 如何处理满足条件的字符串
*/
register: function (pType, pPredicate, pFunction) {
    if (!const .MessageModify.registry[pType]) {
        const .MessageModify.registry[pType] = {
            'predicate': pPredicate,
            'consumer': pFunction
        }
    }
},
/**
 * 返回修改后的原始文本
 * @param {Internal.ClientChatReceivedEvent} event - 事件
 * @returns {string|Internal.MutableComponent_} - 原文本 | 经过修改的文本
 */
modifyRawText: function (event) {
    /** @type {Internal.MutableComponent} */
    const registry = const .MessageModify.registry;
    const registryKeys = Object.keys(registry);

    for (const type of registryKeys) {
        // 如果符合条件 返回处理后的消息
        if (registry[type]['predicate'](event)) {
            return registry[type]['consumer'](event);
        }
    };
    return event.message;
}
}
// 调用初始化
MessageModify.init();
