
// ServerEvents.recipes(event => {
// //     LoquatPlacements.register('pack:loquat', new LoquatTreeNodePlacer('pack:loquat', ctx => {
// //         // add monster rooms 
// //         //添加怪物房间
// //         let monsterRooms = []
// //         // ctx.root is the start room according to the structure json file
// //         //起始房间 => <structure>.json
// //         let lastRoom = ctx.root
// //         for (let i = 0; i < 5; i++) {
// //             // lastRoom.addChild(target_name, template_pool_name)
// //             // lastRoom.addChild(目标名称, 目标池)
// //             monsterRooms.push(lastNode = lastRoom.addChild("pack:room", "pack:monster"))
// //         }
// //         // add boss room
// //         // 添加首领房间
// //         lastRoom.addChild("door", "pack:boss")
// //         // add treasure room
// //         // 添加奖励房间 (目标名称, 目标池)
// //         monsterRooms[ctx.random.nextInt(monsterRooms.length)].addChild("pack:room", "pack:treasure")
// //         let spawners = ["zombies", "skeletons", "creepers"]
// //         monsterRooms.forEach(room => {
// //             // we don't want the entrance and exit to be too close, so we set a minimum distance
// //             // 起始点与终点的最小深度
// //             room.minEdgeDistance = 8
// //             // we don't want two rooms are the same, so we make a unique group id for them
// //             //为房间添加组 意在避免房间的类型都相同
// //             room.uniqueGroup = "monster"
// //             room.data = {
// //                 spawner: "pack:" + spawners[ctx.random.nextInt(spawners.length)]
// //             }

// //         })
// //         // use node(the root).walk() to iterate all child nodes
// //         //使用node(根节点).walk()来迭代所有子节点
// //         ctx.root.walk(room => {
// //             room.fallbackNodeProvider = joint => {
// //                 if (joint !== "pack:room")
// //                     return null;
// //                 // LoquatTreeNode is also the type of ctx.root and room
// //                 // LoquatTreeNode也是ctx的类型。根和房间
// //                 let fallback = new LoquatTreeNode("pack:barrier")
// //                 // cancel the offset so that the barrier will be pulled one block back
// //                 //取消偏移量，使障碍物向后拉一个块
// //                 fallback.offsetTowardsJigsawFront = false
// //                 // cancel the collision check so that the barrier can be placed inside or intersect with other structure pieces
// //                 //取消碰撞检查，使屏障可以放置在内部或与其他结构块相交
// //                 fallback.checkForCollisions = false
// //                 return fallback
// //             }
// //     })
// // }))

// // })
// // server script
// ServerEvents.recipes(event => {
//     LoquatPlacements.register('pack:loquat_', new LoquatTreeNodePlacer('pack:loquat', ctx => {
//         // add monster rooms
//         let monsterRooms = []
//         // ctx.root is the start room according to the structure json file
//         let lastRoom = ctx.root
//         for (let i = 0; i < 5; i++) {
//             // lastRoom.addChild(joint_name, template_pool_name)
//             monsterRooms.push(lastRoom = lastRoom.addChild("pack:room", "pack:monster"))
//         }
//         // add boss room
//         lastRoom.addChild("pack:room", "pack:boss")
//         // add treasure room
//         monsterRooms[ctx.random.nextInt(monsterRooms.length)].addChild("pack:room", "pack:treasure")
//         monsterRooms.forEach(room => {
//             // we don't want the entrance and exit to be too close, so we set a minimum distance
//             room.minEdgeDistance = 8
//             // we don't want two rooms are the same, so we make a unique group id for them
//             room.uniqueGroup = "monster"
//         })
//     }))
// })
