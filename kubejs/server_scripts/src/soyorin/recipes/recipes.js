// const { $ModifyRecipeCraftingGrid } = require("packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeCraftingGrid");
// const { $CraftingContainer } = require("packages/net/minecraft/world/inventory/$CraftingContainer");
// const { $ItemStack } = require("packages/net/minecraft/world/item/$ItemStack");

// ServerEvents.recipes(event => {
//     // {
//     //     let outputItem = Item.of('minecraft:copper_ingot', 1).withLore(Component.gold('**高温**'));
//     //     let inputItem = Item.of('minecraft:copper_ingot');
//     //     let xp = 5;
//     //     let cookingTime = 200;

//     //     event.blasting(outputItem, inputItem, xp, cookingTime);
//     // }

//     {
//         // let outputItem = Item.of('minecraft:copper_ingot', 1).withLore(Component.darkRed('**超高温**'));
//         let inputItem = Item.of('minecraft:copper_ingot', 1).withLore(Component.gold('**高温**'));
//         let outputItem = inputItem.copy();
//         let xp = 5;
//         let cookingTime = 200;
//         event.blasting(outputItem, inputItem, xp, cookingTime).modifyResult((grid, stack) => {
//             if(grid.find(inputItem) instanceof $ItemStack){
//                 return Item.of('minecraft:copper_ingot', 1).withLore(Component.darkRed('**超高温**'));
//             }
//             return stack;
//         })
//     }

//     let result = Item.of('minecraft:copper_ingot', 1).withLore(Component.gold('铜双锭'));
//     let template = Item.of('minecraft:wayfinder_armor_trim_smithing_template');
//     let base = Item.of('minecraft:copper_ingot', 1).withLore(Component.gold('**高温**'));
//     let addition = Item.of('minecraft:copper_ingot', 1);
//     event.smithing(result, template, base, addition);
// })