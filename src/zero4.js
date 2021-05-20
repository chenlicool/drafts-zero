// 函数的目的就是可以供各个地方调用你的城市码
/*
function addMoney() {
    console.log(100 + 200);
}
addMoney();
*/
/*
// 有参数的 function
function addMoney(price1, price2) {
    console.log('price:', price1);
    console.log('price:', price2);
    console.log(price1 + price2);
}
addMoney(1000, 1, 2);
*/
// 有回传值的function

/*
function addMoney(price1, price2) {
    console.log('price:', price1);
    console.log('price:', price2);
    console.log(price1 + price2);
    let result = price1 + price2
    return result
}
let total = addMoney(1000, 1, 2)
console.log('total', total)

*/
/*
function addMoney(price1, price2, discount) {
    let result = price1 + price2 - discount
    let message = '普通会员'
    if (result > 20000) {
        message = '尊龙会员'
        return message
    }
    if (result >= 20000) {
        message = '白金会员'
        return message
    }
    return message
}
let msg = addMoney(10000, 20000, 1000)
console.log('msg:', msg)
*/
// 构造函数 function
function createCard(test) {
    this.cardName = test
}

const a1 = new createCard('小名1')
const a2 = new createCard('小名2')
console.log(a1);
console.log(a2);

// 宣告 function 的三种方法
function hello() {
}
let hello = function () { }

let hello => () { }



