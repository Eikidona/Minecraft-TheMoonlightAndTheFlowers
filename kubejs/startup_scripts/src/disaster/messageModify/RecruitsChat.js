/**
 * Recruits实体的聊天类型
 */
MessageModify.register('recruitsChat',
    // 条件
    (event) => {
        /**@type {Internal.TranslatableContents} */
        const contents = event.message.contents;
        if (contents.getClass() !== $TranslatableContents) return false;
        return contents.key.includes('chat.recruits.text');
    },
    // 如何处理
    (event) => {
        const getSender = () => {
            /**@type {string} - 字符串类型 奇妙*/
            const sender = event.message.contents.args[0];
            if (sender.endsWith(': ')) {
                return sender.substring(0, sender.length - 2);
            } else {
                return sender;
            }
        }
        const sender = getSender();
        const text = Component.translatable(event.message.contents.key, '');
        return Component.darkGreen(sender).append(Component.gray(':')).append(Component.white(text));

        // const rawText = event.message.string;
        // const helloChat = rawText.split(': : ', 2);
        // const chat = rawText.split(': ', 2);
        // if (helloChat.length === 2) {
        //     const sender = helloChat[0]; // 0 是匹配到的所在字符串原文 1 匹配到的字符串
        //     const text = helloChat[1]; // 限制分割长度
        //     return Component.darkGreen(sender).append(Component.gray(':')).append(Component.white(text));
        // } else {
        //     const sender = chat[0]; // 0 是匹配到的所在字符串原文 1 匹配到的字符串
        //     const text = chat[1]; // 限制分割长度
        //     return Component.darkGreen(sender).append(Component.gray(':')).append(Component.white(text));
        // }
    }
)
// MessageModify.register('recruitChat',
//     // 条件
//     (event) => {
//         const rawText = event.message.string;
//         return (rawText.split(': ', 2).length >= 2) && event.isSystem();
//     },
//     // 如何处理
//     (event) => {
//         const rawText = event.message.string;
//         const sender = rawText.split(': ', 2)[0]; // 0 是匹配到的所在字符串原文 1 匹配到的字符串
//         const text = rawText.split(': ', 2)[1]; // 限制分割长度

//         return Component.darkGreen(sender).append(Component.gray(':')).append(Component.white(text));
//     }
// )