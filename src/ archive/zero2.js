/*
if (条件) {
    // 当我们条件城里要做的事情
} else {
    // 当我们的题哦啊见没有成立要做的事情
}
*/

// + - * / 算数运算值
// && || ! 逻辑运算值

// && 两边都是true，结果才是true （and）
// || 两边只要有一边是true，结果就是true (or)
// ! 把结果反向
/*
let condition = !(true || false)
console.log('condition', condition)
/*
if (condition) {
    console.log('确实大于20')
} else {
    console.log('错误')
}
*/

let scoreA = 100
let scoreB = 20
if (scoreA > scoreB) {
    console.log('A大于B')
}
else if (scoreA !== scoreB) {
    console.log('A不等于B')
}
else if (scoreA < scoreB) {
    console.log('A小于B诶')
}
else {
    console.log('啥也没有')
}


// switch case
let key = 999
switch (key) {
    case 100:
        console.log('考了100分')
    case 999:
        console.log('考了999分')
}
