const DiceManager = {
    /**
     * 创造简单骰子
     * @returns {$Dice}
     */
    createSimpleDice: function () {
        return new $Dice(6, 1);
    },
    /**
     * 创造自定义骰子
     * @param {number} faces 面数
     * @param {number} rolls 投掷次数
     * @returns {$Dice}
     */
    createCustomDice: function (faces, rolls) {
        return new $Dice(faces, rolls);
    }
}

/**
 * 骰子
 * @param {number} faces 
 * @param {number} rolls 
 */
function $Dice(faces, rolls) {
    /**@type {number} 面数 */
    this.faces = faces;
    /**@type {number} 投掷次数 */
    this.rolls = rolls;

    this.results = this.getResults();
    
    this.min = Math.min(this.results);
    this.max = Math.max(this.results);
}

/**
 * 投掷
 * @returns {number[]}
 */
$Dice.prototype.getResults = function () {
    const max = this.faces + 1;
    /**@type {number[]} */
    const result = [];
    for (let count = 0; count < this.rolls; count++) {
        result.push(Math.trunc(Math.random() * max));
    };
    return result;
}