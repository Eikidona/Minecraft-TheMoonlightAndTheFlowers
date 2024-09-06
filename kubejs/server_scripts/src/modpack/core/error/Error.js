/**
 * @description - 处理错误
 * @param {Error} error 
 */
function throwError(error) {
    console.error(`发生错误! ${error.name} 错误信息: ${error.message} 错误堆栈: ${error.stack}`);
}