// priority: 9999

/**
 * 单纯的全局类反射
 */

// Java 接口
const $Optional = Java.loadClass('java.util.Optional');
const $ArrayList = Java.loadClass('java.util.ArrayList');

// Vanilla

/**
 * 如果想判断聊天消息则需要判断组件内的内容属性 以下是不同内容接口的实现类
 */
const $TranslatableContents = Java.loadClass('net.minecraft.network.chat.contents.TranslatableContents'); // 翻译内容类
const $LiteralContents = Java.loadClass('net.minecraft.network.chat.contents.LiteralContents'); // 文本内容类
const $KeybindContents = Java.loadClass('net.minecraft.network.chat.contents.KeybindContents'); // 键绑定内容类
const $NbtContents = Java.loadClass('net.minecraft.network.chat.contents.NbtContents'); // NBT内容类
const $ScoreContents = Java.loadClass('net.minecraft.network.chat.contents.ScoreContents'); // 分数内容类
const $SelectorContents = Java.loadClass('net.minecraft.network.chat.contents.SelectorContents'); // 目标选择器内容类

// 饰品栏API
const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
// 均衡饮食API
const $PlayerDietTracker = Java.loadClass("com.illusivesoulworks.diet.common.capability.PlayerDietTracker");
// 起源API
const $IOriginContainer = Java.loadClass('io.github.edwinmindcraft.origins.api.capabilities.IOriginContainer');
const $OriginsAPI = Java.loadClass("io.github.edwinmindcraft.origins.api.OriginsAPI");
const $Origin = Java.loadClass("io.github.edwinmindcraft.origins.api.origin.Origin");
const $IPowerContainer = Java.loadClass("io.github.edwinmindcraft.apoli.api.component.IPowerContainer");
// 神化API
const $AffixHelper = Java.loadClass("dev.shadowsoffire.apotheosis.adventure.affix.AffixHelper");
// UUID Util
const $UuidUtil = Java.loadClass("net.minecraft.core.UUIDUtil");