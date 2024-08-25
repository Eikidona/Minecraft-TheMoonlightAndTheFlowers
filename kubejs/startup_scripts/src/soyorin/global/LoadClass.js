// priority: 9999

/**
 * 单纯的全局类反射
 */

// Java 接口
global.$Optional = Java.loadClass('java.util.Optional');
global.$ArrayList = Java.loadClass('java.util.ArrayList');

// Vanilla

/**
 * 如果想判断聊天消息则需要判断组件内的内容属性 以下是不同内容接口的实现类
 */
global.$TranslatableContents = Java.loadClass('net.minecraft.network.chat.contents.TranslatableContents'); // 翻译内容类
global.$LiteralContents = Java.loadClass('net.minecraft.network.chat.contents.LiteralContents'); // 文本内容类
global.$KeybindContents = Java.loadClass('net.minecraft.network.chat.contents.KeybindContents'); // 键绑定内容类
global.$NbtContents = Java.loadClass('net.minecraft.network.chat.contents.NbtContents'); // NBT内容类
global.$ScoreContents = Java.loadClass('net.minecraft.network.chat.contents.ScoreContents'); // 分数内容类
global.$SelectorContents = Java.loadClass('net.minecraft.network.chat.contents.SelectorContents'); // 目标选择器内容类

// 饰品栏API
global.$CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
// 均衡饮食API
global.$PlayerDietTracker = Java.loadClass("com.illusivesoulworks.diet.common.capability.PlayerDietTracker");
// 起源API
global.$IOriginContainer = Java.loadClass('io.github.edwinmindcraft.origins.api.capabilities.IOriginContainer');
global.$OriginsAPI = Java.loadClass("io.github.edwinmindcraft.origins.api.OriginsAPI");
global.$Origin = Java.loadClass("io.github.edwinmindcraft.origins.api.origin.Origin");
global.$IPowerContainer = Java.loadClass("io.github.edwinmindcraft.apoli.api.component.IPowerContainer");
// 神化API
global.$AffixHelper = Java.loadClass("dev.shadowsoffire.apotheosis.adventure.affix.AffixHelper");
// UUID Util
global.$UuidUtil = Java.loadClass("net.minecraft.core.UUIDUtil");