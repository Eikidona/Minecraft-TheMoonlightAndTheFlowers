const { $Player } = require("packages/net/minecraft/world/entity/player/$Player");
/**
 * 派系声望
 * @param {$Player} player 
 */
function factionPrestige(player) {
    this.player = player;
}
factionPrestige.prototype = {
    create: function(){
        const playerNBT = this.player.persistentData;
        if(playerNBT.Faction === undefined) {playerNBT.Faction = {};};
        const factionArr = ['village'];
        for(const f of factionArr){
            if(playerNBT.Faction[f] === undefined){
                playerNBT.Faction[f] = 0;
            };
        };
    },
    get: function (faction) {
        const playerNBT = this.player.persistentData;
        /**@type {number} */
        const prestige = playerNBT.Faction[faction];
        return prestige.toFixed(0);
    },
    set: function(faction, number){
        const playerNBT = this.player.persistentData;
        if(playerNBT.Faction[faction] !== undefined){
            playerNBT.Faction[faction] = number;
        }else{
            console.error(`设置阵营声望时检查到不存在的阵营id: ${faction}`);
        };
    }
}
// 为第一次进入的player创建声望nbt
PlayerEvents.loggedIn(event => {
    const factionPrestige_ = new factionPrestige(event.player);
    factionPrestige_.create();
})