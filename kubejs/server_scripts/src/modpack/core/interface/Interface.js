// priority: 10000

/**
 * @interface 
 * @class
 * @classdesc 一个标记接口 用于标记这个函数是接口 将接口函数的原型设置为此函数
 * @description 接口不应该定义原型以及原型属性、方法 因为在实际使用中他们只是作为实现类的普通方法被执行然后丢弃；检查是否为接口类 采用检查其原型的方式（instanceof）；检查其是否实现了接口，采用检查其属性和接口的属性的方式。
 */
function $ModpackInterFace() { };