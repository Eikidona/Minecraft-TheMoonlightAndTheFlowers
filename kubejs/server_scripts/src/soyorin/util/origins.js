// priority: 1000

const OriginUtils = {
    /**
     * 获得起源实例Origin origin
     * @param {Internal.ServerPlayer} player 
     * @param {string} layerType 
     * @returns {$Origin}
     */
    getOrigin: function (player, layerType) {
        return this.getOriginResourceLocation(this.getOriginResourceLocationFromPlayer(player, layerType))
    },
    /**
     * 设置起源职业
     * @param {Internal.ServerPlayer} player 
     * @param {string} layerType 
     * @param {string} originType 
     */
    setOrigin: function (player, layerType, originType) {
        const layer = this.getLayer(layerType);
        const origin = this.getOriginFromResourceLocation(originType);
        $IOriginContainer.get(player).ifPresent(container => {
            container.setOrigin(layer, origin);
            container.synchronize();
            container.onChosen(origin, container.hadAllOrigins());
        });
    },
    /**
     * 玩家是否具有某个覆盖层中的某个起源职业
     * @param {Internal.ServerPlayer} player
     * @param {string} layerType 
     * @param {string} originType
     * @returns {boolean}
     */
    hasOrigin: function (player, layerType, originType) {
        /**@type {ResourceLocation} */
        const originResourceLocation = this.getOriginResourceLocationFromPlayer(player, layerType);
        return originResourceLocation.equals(new ResourceLocation(originType));
    },
    /**
     * 实体是否具有力量
     * @param {Internal.LivingEntity} livingEntity 
     * @param {ResourceLocation} powerType 
     * @returns {boolean}
     */
    hasPower: function (livingEntity, powerType) {
        return $IPowerContainer.get(livingEntity).map(x => x.hasPower(powerType)).orElse(false);
    },
    /**
     * 授予力量
     * @param {Internal.LivingEntity} livingEntity 
     * @param {ResourceLocation_} powerType 
     * @param {string|ResourceLocation} sourceType
     * @returns {boolean}
     */
    grantPower: function (livingEntity, powerType, sourceType) {
        return $IPowerContainer.get(livingEntity).map(component => {
            let source = $OriginsAPI.createPowerSource(sourceType);
            let success = component.addPower(powerType, source);
            if (success) {
                component.sync();
            }
            return success;
        }).orElse(false);
    },
    /**
     * 剥夺指定源的指定类型力量
     * @param {Internal.LivingEntity} livingEntity 
     * @param {ResourceLocation_} powerType 
     * @param {string|ResourceLocation} sourceType
     * @returns {boolean}
     */
    revokePower: function (livingEntity, powerType, sourceType) {
        return $IPowerContainer.get(livingEntity).map(component => {
            let source = $OriginsAPI.createPowerSource(sourceType);
            let success = component.removePower(powerType, source);
            if (success) {
                component.sync();
            }
            return success;
        }).orElse(false);
    },
    /**
     * 剥夺所有力量
     * @param {Internal.LivingEntity} livingEntity 
     * @returns {integer}
     */
    revokeAllPower: function (livingEntity) {
        return $IPowerContainer.get(livingEntity).map(component => {
            let powersSetResourceLocation = component.getPowerTypes(false);
            for (const power of Array.from(powersSetResourceLocation)) {
                this.revokePowerAllSources(livingEntity, power);
            }
            if (powersSetResourceLocation.size() > 0) {
                component.sync();
            }
            return powers.size();
        }).orElse(0);
    },
    /**
     * 剥夺所有源的指定类型力量
     * @param {Internal.LivingEntity} livingEntity 
     * @param {string|ResourceLocation} powerType
     * @returns {boolean}
     */
    revokePowerAllSources: function (livingEntity, powerType) {
        return $IPowerContainer.get(livingEntity).map(component => {
            let sourcesListResourceLocation = component.getSources(powerType);
            for (const source of Array.from(sourcesListResourceLocation)) {
                component.removePower(powerType, source);
            }
            if (sourcesListResourceLocation.size() > 0) {
                component.sync();
            }
            return true;
        }).orElse(false);
    },
    /**
     * 剥夺所有指定源的力量
     * @param {Internal.LivingEntity} livingEntity 
     * @param {string|ResourceLocation} sourceType 
     * @returns {integer}
     */
    revokeAllPowersFromSource: function (livingEntity, sourceType) {
        return $IPowerContainer.get(livingEntity).map(component => {
            let i = component.removeAllPowersFromSource(sourceType);
            if (i > 0) {
                component.sync();
            }
            return i;
        }).orElse(0);
    },
    /**
     * 根据起源职业标识符 返回起源职业
     * @param {string} originType 
     * @returns {$Origin}
     */
    getOriginFromResourceLocation: function (originType) {
        return $OriginsAPI.getOriginsRegistry().get(originType);
    },
    /**
     * 根据起源职业实例 返回起源职业资源位置
     * @param {$Origin} origin
     * @returns {ResourceLocation}
     */
    getOriginResourceLocation: function (origin) {
        return $OriginsAPI.getOriginsRegistry().getKey(origin);
    },
    /**
     * 根据玩家与覆盖层标识符 返回起源职业资源位置
     * @param {Internal.ServerPlayer} player 
     * @param {string} layerType 
     * @returns {ResourceLocation}
     */
    getOriginResourceLocationFromPlayer: function (player, layerType) {
        const layer = this.getLayer(layerType);
        return $IOriginContainer.get(player).map(container =>
            container.getOrigin(layer)).get().location();
    },
    /**
     * 根据覆盖层标识符 返回覆盖层
     * @param {string|ResourceLocation} layerType 
     * @returns {}
     */
    getLayer: function (layerType) {
        return $OriginsAPI.getLayersRegistry().get(layerType);
    },
    /**
     * 获得起源力量源(职业ID) 用于grantPower revokePower等指定力量源
     * @param {$Origin|ResourceLocation|string} origin
     * @returns {ResourceLocation}
     */
    getPowerSource: function (origin) {
        if (origin instanceof $Origin) {
            return $OriginsAPI.getPowerSource(this.getOriginResourceLocation(origin));
        }
        return $OriginsAPI.getPowerSource(origin);
    }
}
// 起源玩家
const OriginWarpper = {
    /**
     * 构造一个起源玩家
     * @param {Internal.ServerPlayer} player 
     * @returns {$OriginPlayer}
     */
    create: function (player) {
        const originPlayer = new $OriginPlayer();
        originPlayer.player = player;
        return originPlayer;
    },
    /**
     * 注册力量
     * @template T - 泛型类型
     * @param {string} powerType - 力量标识符 id
     * @param {function((event: T) => void): void} pEvent - 事件对象，必须是 Internal.EventJS 的子类型。
     * @param {Internal.Consumer<T>} pConsumer$Player - 玩家消费函数，接受事件作为参数。
     */
    registerPower: function (powerType, pEvent, pConsumer$Player) {
        pEvent(event => {
            if (event.entity.type !== 'minecraft:player' || !(OriginUtils.hasPower(event.entity, powerType))) return;
            pConsumer$Player(event);
        })
    }
}

/**
 * 起源玩家
 * @param {Internal.ServerPlayer} player 
 */
function $OriginPlayer() {
    this.player;
}
$OriginPlayer.prototype = {
    /**
     * 玩家是否具有力量
     * @param {ResourceLocation} powerType 
     */
    hasPower: function (powerType) {
        OriginUtils.hasPower(this.player, powerType);
    }
}