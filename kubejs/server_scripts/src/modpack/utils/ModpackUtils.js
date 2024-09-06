// priority: 1000

/**
 * Utils
 */
const ModpackUtils = {
    minecraft: {
        // 注册表
        registries: {
            /**
             * 结构注册表
             * @param {Internal.ServerLevel} pServerLevel 
             */
            structure: function (pServerLevel) {
                return pServerLevel.registryAccess().registry($Registries.STRUCTURE).get();
            }


        }
    },
    moreJs: {
        trade: {
            villager: {
                /**
                 * (游戏运行中)村民的交易货物
                 */
                merchantOffer: {
                    /**
                     * 向村民添加自定义的交易
                     * @param {Array<Internal.ItemStack, Internal.ItemStack>} pInputs - 长度为1到2的数组 输入物品
                     * @param {Internal.ItemStack} pOutput - 输出物品
                     * @param {Internal.Predicate<Internal.LivingEntity, Internal.VillagerData>} pPredicate - 村民实体 & 村民数据 条件
                     */
                    add: function (pInputs, pOutput, pPredicate) {
                        MoreJSEvents.updateVillagerOffers(event => {
                            if (!pPredicate(event.entity, event.villagerData)) return;
                            const newMerchantOffer = event.addRandomOffer();
                            newMerchantOffer.setFirstInput(pInputs[0]);
                            if (pInputs[1] !== undefined) { newMerchantOffer.setFirstInput(pInputs[1]); };
                            newMerchantOffer.setOutput(pOutput);
                        });
                    },
                    /**
                     * 替换交易
                     * @param {Internal.Predicate<Internal.LivingEntity, Internal.VillagerData, Internal.MerchantOffer>} pPredicate - 条件
                     * @param {Internal.Consumer<Internal.MerchantOffer>} pConsumer - 执行的操作
                     */
                    replace: function (pPredicate, pConsumer) {
                        MoreJSEvents.updateVillagerOffers(event => {
                            const LIVINGENTITY = event.entity;
                            const VILLAGERDATA = event.villagerData;
                            const MERCHANTOFFERS = event.getAddedOffers();

                            if (MERCHANTOFFERS.length > 0) {
                                MERCHANTOFFERS.forEach(merchantOffer => {
                                    if (pPredicate(LIVINGENTITY, VILLAGERDATA, merchantOffer)) {
                                        pConsumer(merchantOffer);
                                    }
                                })
                            }
                        })
                    }
                }
            }
        }
    }
}
