/**
 * 原版玩家聊天类型
 */
MessageModify.register('vanillaPlayerChat',
    // 条件
    (event) => {
        /**@type {Internal.TranslatableContents} */
        const contents = event.message.contents;
        if (contents.getClass() !== $TranslatableContents) return false;
        return contents.key === 'chat.type.text';
    },
    // 如何处理
    (event) => {
        /**@type {Internal.TranslatableContents} - 消息内容属性*/
        const content = event.message.contents;
        /**@type {Internal.MutableComponent} - 内容的参数数组元素 其中0包含<点击命令建议> <鼠标悬停事件> <子组件>(玩家名文本) 包含发送者的信息*/
        const sender = content.args[0];
        /**@type {Internal.MutableComponent} - 内容的参数数组元素 其中1包含消息文本信息*/
        const text = content.args[1];
        return Component.darkGreen(sender).append(Component.gray(': ')).append(Component.white(text));
        // const rawText = event.message.string;
        // const sender = rawText.match(/<([^>]*)>/)[1]; // 0 是匹配到的所在字符串原文 1 匹配到的字符串
        // const text = rawText.split(' ', 2)[1]; // 限制分割长度
        // return Component.darkGreen(sender).append(Component.gray(':')).append(Component.white(text));
    }
)