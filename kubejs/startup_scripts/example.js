// const $RenderSystem = Java.loadClass("com.mojang.blaze3d.systems.RenderSystem");
// const $Tesselator = Java.loadClass("com.mojang.blaze3d.vertex.Tesselator");
// const $VertexFormat$Mode = Java.loadClass("com.mojang.blaze3d.vertex.VertexFormat$Mode");
// const $DefaultVertexFormat = Java.loadClass("com.mojang.blaze3d.vertex.DefaultVertexFormat");
// const $GameRenderer = Java.loadClass("net.minecraft.client.renderer.GameRenderer");
// const Axis = Java.loadClass("com.mojang.math.Axis");
// const LevelRenderer = Java.loadClass("net.minecraft.client.renderer.LevelRenderer")

// ForgeEvents.onEvent(
//     "net.minecraftforge.client.event.RenderNameTagEvent",
//     (event) => {
//         global.RenderNameTagEvent(event);
//     }
// );

// /**
//  * @param {Internal.RenderNameTagEvent} event
//  */
// global.RenderNameTagEvent = (event) => {
//     const { poseStack, entity } = event;

//     poseStack.pushPose();
//     poseStack.translate(0, entity.getBbHeight() + 0.7, 0);
//     const camera = Client.gameRenderer.getMainCamera();
//     const rotationY = camera.getYRot();
//     const rotationX = camera.getXRot();
//     poseStack.mulPose(Axis.YP.rotationDegrees(-rotationY));
//     poseStack.mulPose(Axis.XP.rotationDegrees(rotationX));

//     const scale = 0.4;
//     poseStack.scale(scale, scale, scale);
//     const matrix = poseStack.last().pose();

//     let texture = "minecraft:textures/item/apple.png";

//     $RenderSystem.enableDepthTest();
//     $RenderSystem.enableBlend();
//     $RenderSystem.depthMask(true);
//     $RenderSystem.setShader(() => $GameRenderer.getPositionTexShader());
//     $RenderSystem.setShaderTexture(0, texture);
//     $RenderSystem.setShaderColor(1.0, 1.0, 1.0, 1.0);
//     const packedLight = LevelRenderer.getLightColor(entity.level, entity.blockPosition());

//     const tesselator = $Tesselator.getInstance();
//     const buffer = tesselator.getBuilder();

//     buffer.begin($VertexFormat$Mode.QUADS, $DefaultVertexFormat.POSITION_TEX);

//     const size = 1;
//     buffer.vertex(matrix, -size, size, 0).uv(0, 0).uv2(packedLight).endVertex();
//     buffer.vertex(matrix, size, size, 0).uv(1, 0).uv2(packedLight).endVertex();
//     buffer.vertex(matrix, size, -size, 0).uv(1, 1).uv2(packedLight).endVertex();
//     buffer.vertex(matrix, -size, -size, 0).uv(0, 1).uv2(packedLight).endVertex();

//     tesselator.end();

//     $RenderSystem.disableBlend();
//     $RenderSystem.disableDepthTest();
//     poseStack.popPose();
// };
